# HourlyToSalaryCalculator.net launch checklist

Status as of 15 October 2026, branch `claude/magical-planck-oou76v`.

**Recommendation: NO-GO for a public production launch until the blockers in section 8 are closed.**
The code, routing, SEO and automated tests are in launch condition (section 9), so a soft launch to a staging or preview domain is reasonable now. A public launch should wait for the production domain to be connected and verified live, the unverified sources and the professional and native-speaker reviews listed below.

Nothing on this site has been reviewed by a qualified medical, financial or engineering professional, and no translation has been proofread by a native speaker. The calculators are **mathematically tested**, not **professionally reviewed**. The two are tracked separately below.

---

## 1. Completed checks

| Area | What was checked | How | Result |
| --- | --- | --- | --- |
| Calculation accuracy | All 50 calculators: formulas, constants, units, every worked example, validation and edge cases | Two independent read-only reviews; examples recomputed in Python; statistics checked against mpmath (40–300 digit precision); weekday counting brute-forced on 2,400 ranges | 11 defects found and fixed (section 2). No other formula or example errors |
| Significant-figure rounding | Decimal rounding of typed numbers | 2,070 random cases compared with Python `decimal` (ROUND_HALF_UP) | All match (`src/lib/math/round-decimal.test.ts`) |
| SEO | All 492 sitemap URLs (82 pages × 6 languages) built with a production-style origin | `node scripts/seo-audit.mjs` | No problems: HTTP 200, one self-canonical, matching `og:url`, reciprocal hreflang with `x-default` matching the sitemap, correct `lang`/`dir`, unique titles and descriptions per language, one `h1`, valid JSON-LD with `BreadcrumbList`, no `noindex`, all 492 distinct internal links return 200, unknown URLs return 404 |
| Indexing of translations | Only complete translations are published or listed | `src/i18n/translations.test.ts`, `src/i18n/i18n.test.ts`, sitemap test | Every published page in every language has a complete, type-checked translation; untranslated pages cannot be rendered or listed |
| robots.txt | Allows crawling, points to the sitemap on the production origin | SEO audit | Pass |
| Redirects | `/en/*` → unprefixed (307), trailing slash (308), old category slugs (308), `/categories` and `/collections` → `/calculators` (308) | curl and Playwright | Pass |
| 404 pages | Unknown URLs in every language, with and without JavaScript | Playwright (`e2e/i18n.spec.ts`) | HTTP 404 with a server-rendered page in the visitor's language |
| Accessibility | Every sitemap URL on desktop and mobile | axe-core (WCAG 2.0/2.1 A and AA plus best practice) in `e2e/pages.spec.ts`; keyboard tests for the language menu and search | No violations in the final run (section 9) |
| Mobile layout | Every sitemap URL at 320 px; RTL pages | Playwright | No horizontal overflow |
| Performance | Home, directory and three calculator pages (English, Arabic, German), desktop and simulated mobile (4× CPU, slow network) | Playwright with Performance APIs | Mobile LCP 0.26–0.83 s; JavaScript about 214 KB gzipped per page (about 150 KB is the React/Next.js runtime). Layout shift reduced from 0.163 to ≤ 0.001 (section 2) |

## 2. Defects fixed during this audit

| Calculator or area | Defect | Fix |
| --- | --- | --- |
| Mortgage | PMI never stopped at the midpoint of the term (US Homeowners Protection Act final termination); at high rates the result could overcharge, for example 187 instead of 180 months | PMI now ends at the 78% scheduled balance or the midpoint of the term, whichever comes first; text updated in all six languages and a CFPB source added |
| Mortgage | With a PMI rate of 0 on a loan above 80% of the price, a note claimed the loan was 80% or less | The note is shown only when it is true |
| BMI | The category used the unrounded value, so a displayed "25" could be labelled "Healthy weight" | The category is based on the displayed value |
| Test grade | Same display and category mismatch (89.996% shown as 90.00% with grade B) | Graded on the displayed percentage |
| Significant figures | Rounding used binary floating point ("2.675" gave 2.67, not 2.68); inputs over 100 digits crashed; over 17 digits showed invented digits | Exact decimal rounding on the typed digits |
| p-value | An underflow showed "p = 0" | Shown as a bound (< 1 × 10⁻³⁰⁰) |
| Exponent | Underflow such as 10⁻⁴⁰⁰ showed "0" | Shown as a bound |
| Scientific notation | The engineering mantissa could reach 1000 | Normalized below 1000 |
| BMR | Impossible inputs (1 kg, 1 cm) gave a negative BMR | Minimum weight 20 kg (44 lb) and height 100 cm (3 ft) |
| GPA (FAQ, six languages) | Claimed a 4-credit A raises GPA "twice as much" as a 2-credit A, which is not true | Corrected: it carries twice the quality points |
| Layout shift | The language suggestion banner pushed the page down after loading; the Arabic font swap reflowed text | The banner is a fixed bottom bar; the Arabic font uses `font-display: optional` |

Each fix has a regression test in `src/calculators/new-calculators.test.ts` or `src/lib/math/round-decimal.test.ts`.

## 3. Sources and factual assumptions

### 3.1 Source links: all unverified

This build environment blocks outbound connections to these sites (proxy HTTP 403; direct fetch DNS failure), so **no source link could be opened**. Every link below is recorded as **unverified**. "Search corroboration" means a web search snippet supported the value; it is not a substitute for reading the source.

| Source (URL) | Used by | Status | Search corroboration |
| --- | --- | --- | --- |
| King Arthur Baking, Ingredient Weight Chart (kingarthurbaking.com/learn/ingredient-weight-chart) | Cups to grams | Unverified | All-purpose flour 120 g per cup confirmed in a snippet of the official page. Granulated sugar 7 oz (≈ 198 g) appears only on unofficial mirrors. Other values not corroborated |
| USDA FoodData Central (fdc.nal.usda.gov) | Cups to grams (milk, rice) | Unverified | Whole milk 244 g per cup and raw long-grain white rice 185 g per cup appear on third-party sites that mirror USDA data |
| CFPB, "When can I remove PMI from my loan?" | Mortgage | Unverified | Automatic termination at 78% of the original value on the original schedule confirmed by search results quoting the CFPB FAQ and 2015 bulletin |
| CFPB compliance bulletin on PMI cancellation and termination (August 2015, PDF) | Mortgage | Unverified | Midpoint (final) termination confirmed by search results quoting FDIC, OCC and CFPB examination material |
| OpenStax Principles of Finance | Loan payment, compound interest, mortgage | Unverified | Not searched; standard textbook formulas |
| OpenStax Principles of Accounting Vol. 2 | Break-even, profit margin | Unverified | Not searched |
| OpenStax University Physics Vol. 1 (§3.1, §7.2), Vol. 2 (§9.4, §9.5) | Speed/distance/time, kinetic energy, Ohm's law | Unverified | Not searched |
| OpenStax Chemistry 2e §3.3 | Molarity, dilution | Unverified | Not searched |
| OpenStax Microbiology §9.1 | Doubling time | Unverified | Not searched |
| NIST SP 811 | Unit factors in 8 calculators | Unverified | Not searched; factors are exact definitions and were checked arithmetically |
| NIST Handbook 44, Appendix C | Cups to grams, volume converter | Unverified | Not searched; US and imperial gallon definitions checked arithmetically |
| NIST/SEMATECH e-Handbook of Statistical Methods | p-value, confidence interval, mean/median/mode, standard deviation | Unverified | Results checked against mpmath to high precision |
| WHO fact sheet "Obesity and overweight" | BMI categories | Unverified | Not searched |
| Mifflin et al., Am J Clin Nutr 1990;51:241–247 (doi:10.1093/ajcn/51.2.241) | BMR | Unverified | Not searched; coefficients match the standard published form |
| U.S. EIA, "Measuring electricity" | Electricity cost | Unverified | Not searched |
| OpenStax (Elementary Algebra §10.3, Prealgebra §2.5 and 2e §6.4, Introductory Statistics §6.1, Chemistry 2e §21.3, Chemistry ch. 9, Biology 2e §19.1, College Physics §11.3 via LibreTexts) | Quadratic, GCF and LCM, simple interest, z-score, half-life, ideal gas law, Hardy–Weinberg, density | Unverified | URLs taken from web search results (15 Oct 2026); pages not opened |
| NIST: Euclid's algorithm (DADS), binary prefixes, SP 811 App. B.8/B.9, Handbook 44 App. C, Handbook 130 §IV.C, CODATA 2018 wall chart | GCF and LCM, data storage, download time, area, density, unit price, ideal gas law | Unverified | URLs from search results; unit factors checked arithmetically |
| Federal Reserve Regulation DD guide; CFPB Regulation Z §1026.22 | APR to APY | Unverified | URLs from search results |
| FCC Broadband Speed Guide | Download time | Unverified | URL from search results |
| LibreTexts Chemistry (Percent Error); Eurostat glossary (Weighted average) | Percent error, weighted average | Unverified | URLs from search results |
| Sherwin-Williams paint calculator page | Paint (350 ft²/gal default) | Unverified | Search snippet gave 350–400 ft²/gal; the 10 m²/L metric default is a typical label value, not sourced |
| InterNACHI, Measuring Roof Slope and Pitch | Roof pitch | Unverified | URL from search results |
| Brzycki (Princeton scholar page); 2024 Int. J. Strength & Conditioning study (DOAJ) | One-rep max | Unverified | URLs from search results |
| Colorado State University Extension, CMG GardenNotes #713 | Plant spacing | Unverified | URL from search results |
| OpenStax (Introductory Statistics §3.2 and §8.3, Introductory Business Statistics 2e §7.4, College Algebra §9.5, University Physics Vol. 1 §3.3 and Vol. 2 §10.2, Physics ch. 4, Prealgebra App. C); Lumen Learning; LibreTexts (Prealgebra §9.10, finite-math annuities) | Sample size, margin of error, probability, combinations, resistors, acceleration, volume, surface area, tile, savings goal | Unverified | URLs from search results (15 Oct 2026); pages not opened |
| CFPB pages: "What is APR?", credit card payoff box, "What is a budget?", "What is a debt-to-income ratio?" | Credit card payoff, budget, debt-to-income | Unverified | URLs from search results |
| InCharge Debt Solutions, 50/30/20 rule | Budget | Unverified | Nonprofit credit counselor, not a government source |
| WHO, "Waist circumference and waist–hip ratio: report of a WHO expert consultation" (2008) | Waist-to-hip ratio | Unverified | Cut-offs ≥ 0.90 (men) and ≥ 0.85 (women) seen in a search snippet of the report |
| Tanaka, Monahan & Seals 2001 (PubMed 11153730); AHA heart.org target heart rate PDF | Heart rate zones | Unverified | Formula and 50–70% / 70–85% ranges seen in search results |
| AMS Glossary (standard gravity, nautical mile); NOAA international foot; USNO leap years; NIST SP 811 ch. 5; Minnesota State University Moorhead (weighted averages) | Acceleration, speed, flooring, date add, time, final grade | Unverified | URLs from search results; 10% tile/flooring waste is a labelled rule of thumb with no authoritative source |

**Before launch:** open every link above, confirm it still resolves and supports the stated "used for" text, and update this table.

### 3.2 Factual assumptions to confirm

- **Cups to grams densities** (grams per US cup), from the King Arthur chart unless noted:
  - flours: all-purpose 120, bread 120, whole wheat 113, almond 96;
  - sugars: granulated 198, brown packed 213, powdered 113;
  - fats and syrups: butter 227, vegetable oil 198, honey 340, maple syrup 312;
  - other: cocoa 84, rolled oats 89, chocolate chips 170, cornstarch 112;
  - USDA: whole milk 244, rice 185;
  - water 236.6, assuming 1 g/mL.
  
  A reviewer was unsure whether King Arthur lists honey as 340 g or about 336 g per cup.
- **Cup sizes:** US 236.5882365 mL, metric 250 mL, US nutrition label 240 mL, imperial 284.130625 mL.
- **Mortgage:** PMI applies above 80% loan-to-value. It ends at a 78% scheduled balance or the midpoint of the term, as for US conventional loans. FHA, VA and non-US loans are not modelled.
- **BMI:** WHO adult cut-offs 18.5 / 25 / 30, for adults only.
- **BMR:** Mifflin–St Jeor in the standard rounded form (10W + 6.25H − 5A + 5 or − 161). It estimates resting energy expenditure, and the text calls it BMR.
- **GPA:** the common US 4.0 scale (A− = 3.7 … D− = 0.7), with A+ = 4.0 or 4.3. Schools differ.
- **Fuel cost:** 235.215 converts between US mpg and L/100 km. This is uncited, but it follows from the exact US gallon and mile definitions.
- **Confidence interval:** uses z only. The text says z is appropriate for n ≥ 30, which overstates this when σ is estimated from the sample (at n = 30, t\* = 2.045 vs z\* = 1.96). Consider adding a t option or softening the wording.
- **Compound interest:** fractional periods use exponential interpolation; banks may use simple interest for part-periods.

### 3.3 Calculators without cited sources

These 24 rely on arithmetic or definitions only. Adding a reference would help reviewers:
- pay and money: salary to hourly, hourly to salary, sales tax, tip, discount, fuel cost;
- percentages and returns: percentage, percentage increase, ROI;
- math: log, significant figures, scientific notation, exponent, square root, circumference, slope, Pythagorean theorem, fraction;
- everyday tools: test grade, GPA, recipe scaler, running pace, age, date duration.

### 3.4 Known limitations (not defects, documented for reviewers)

- **Recipe scaler:**
  - Words after the quantity are kept as typed ("1 eggs").
  - Ranges such as "2–3 cloves" scale only the first number.
- **Kinetic energy, length, weight and volume converters:** negative inputs are accepted. The energy is still correct, and the converters are linear.
- **p-value:** shown to 6 significant figures, but the normal CDF is accurate to about 1 × 10⁻⁷ relative, so the 6th digit can differ in far tails.
- **Date duration:** working days exclude the chosen weekend (Saturday–Sunday or Friday–Saturday), not public holidays.

### 3.5 Unit converters (72 new pages, see `docs/unit-converters.md`)

- **Source links:** all are unverified. They are URLs returned by web searches and were not opened from the build environment. Most converters cite NIST SP 811 Appendix B.8. Some also cite the BIPM SI Brochure, the BIPM SI prefixes page, the NIST constants and binary-prefix pages, the IUPAC Gold Book and one lighting glossary.
- **Conventional or approximate values to confirm (marked "standard", not "exact"):**
  - **Energy:** US therm = 1.054804 × 10⁸ J.
  - **Luminous intensity:** international candle ≈ 1.019 cd; Hefner candle ≈ 0.903 international candle. The only source for these is a secondary glossary.
  - **Lumber volume:** Hoppus foot = 1/0.7854 ft³.
  - **Thermal resistance:** clo = 0.155 m²·K/W; tog = 0.1 m²·K/W.
  - **Permeability:** darcy = 9.869233 × 10⁻¹³ m², the NIST value. The value computed from the definition is 9.8692327 × 10⁻¹³ m².
- **Other assumptions:**
  - The sound-in-air preset for wavelength is 343 m/s (20 °C, approximate).
  - The neper uses the field-quantity convention: 1 Np = 20/ln 10 dB.
  - % IACS uses 100 % = 58 MS/m.
  - CGS magnetic factors use 4π from the pre-2019 definition of μ₀.
- **Currency:** manual-rate mode only. No exchange-rate provider is configured, and no rate is shown as current.
- **Translations:** converter content in Urdu, Spanish, French, German and Arabic was machine-drafted to the same rules as the calculators. It has **not** been reviewed by native speakers or subject specialists. Some unit names are transliterations; the Arabic agent also used singular unit names, as the existing Arabic calculators do.
- **Medical disclaimer:** the radiology converters carry a "not medical or radiation-safety advice" assumption.

### 3.6 Batch 6: 20 calculators and 10 converters (22–24 October 2026)

- **Source links:** all are unverified. They were found by web search and not opened from the build environment, which blocks most outbound sites.
  - **Calculators:** OpenStax (physics, chemistry, statistics, prealgebra, precalculus), NIST e-Handbook and Dataplot, the Python `decimal` documentation, NIST GLP 9, StatPearls, NASA NSSDC Moon and Mars fact sheets, the CIAAW abridged atomic weights, Riegel (1981, cited without a URL), the US Department of Labor overtime pages, IRS Publication 946, the California BOE and Arizona DOR valuation material, USG, an Ohio University weights table and an EPA conversion-factor memo.
  - **Converters:** the CIAAW atomic weights, the Labcorp SI conversion table, the USGS water-hardness FAQ, ASTM B258 (store page only), the Paris Observatory page on the 2012 au definition, ITU-R M.1677-1, RFC 3629, CSS Color Module Level 4, ECMA-262 and the POSIX `time` manual page.
  - **Two NIST titles** (GLP 9 and e-Handbook section 7.1.6) were inferred from snippets and URLs, and **two sources** are LibreTexts copies of OpenStax pages.
- **Values written from memory or from snippets, to confirm:**
  - **Molar mass:** all 84 atomic weights were written from memory, matching the CIAAW abridged table as far as known, including the 2024 Zr, Gd and Lu revisions. The 10 common elements were spot-checked.
  - **Gravity:** the Moon is 1.62 m/s². For Mars, 3.73 m/s² is the current NSSDC mean; older copies say 3.71.
  - **Bulk densities in the gravel and mulch calculator:** gravel 1,600 kg/m³ (100 lb/ft³), crushed stone 1,480 kg/m³ and wood mulch 300 kg/m³. These come from search summaries and vary widely; the fields are editable.
  - **Drywall:** joint compound is about 9 US gal per 1,000 ft², a USG rule of thumb. The metric value was converted from it.
  - **Glucose:** molar mass 180.156 g/mol, from CIAAW conventional weights. Labcorp lists the factor as 0.0555.
  - **Water hardness:** CaCO₃ 100.086 and CaO 56.077 g/mol.
  - **Wire gauge:** the AWG law d = 0.005 in × 92^((36 − n)/39) was taken from a search summary, because the ASTM B258 text is paywalled.
- **Known limitations:**
  - **Declining-balance depreciation:** it never switches to straight-line.
  - **pH:** activities are approximated by concentrations; it is valid at 25 °C only; and the weak-acid mode ignores water's own ions.
  - **Race time predictor:** Riegel's exponent is a population average.
  - **Ratio:** terms are limited to 40 digits.
  - **Rounding:** at most 40 significant digits.
  - **Morse:** the international (Latin) alphabet only.
  - **Unix timestamp:** the local time zone is shown only after the page loads in the browser.
  - **Coordinates:** the notation changes but the datum does not.
- **Currency:** still manual-rate only.
- **A shared parser fix found during this batch:** in es, fr, de, it, pt and nl, text such as "0.025" or "0.500" was read as thousands grouping (25, 500). A leading zero now never starts a thousands group, and a regression test covers this.

## 4. Professional review checklist

| Calculator | Area | Mathematically tested | Professionally reviewed |
| --- | --- | --- | --- |
| BMI | Medical | Yes | **No (pending)** |
| BMR | Medical | Yes | **No (pending)** |
| Loan payment | Financial | Yes | **No (pending)** |
| Mortgage | Financial | Yes | **No (pending)** |
| Compound interest | Financial | Yes | **No (pending)** |
| Concrete | Engineering | Yes | **No (pending)** |
| Credit card payoff | Financial | Yes | **No (pending)** |
| Debt-to-income ratio | Financial | Yes | **No (pending)** |
| Savings goal | Financial | Yes | **No (pending)** |
| Waist-to-hip ratio | Medical | Yes | **No (pending)** |
| Heart rate zones | Medical | Yes | **No (pending)** |
| Overtime pay | Tax / employment law | Yes | **No (pending)** |
| Depreciation | Tax / accounting | Yes | **No (pending)** |
| Cap rate | Financial | Yes | **No (pending)** |

All other calculators are mathematically tested and not flagged for review. Salary, sales tax, ROI, electricity, fuel cost and rainwater give general estimates; a general content review is still advisable.

**Medical reviewer** (clinician or registered dietitian), for BMI and BMR:
- [ ] BMI categories, age limits and wording (adults only; not a diagnosis; limits for athletes, pregnancy, older adults and ethnicity).
- [ ] Healthy-weight range shown for a height (18.5–24.9 × height²).
- [ ] BMR: whether Mifflin–St Jeor and the "BMR" label are appropriate; the plausible input range (now ≥ 20 kg, ≥ 100 cm, 18–100 years); and the wording for clinical use.
- [ ] Disclaimers in all six languages state that results are not medical advice.

**Medical reviewer, batch 5** (waist-to-hip ratio, heart rate zones):
- [ ] WHO 2008 cut-offs (≥ 0.90 men, ≥ 0.85 women; confirmed only through search snippets of the WHO report) and the choice to compare the ratio rounded to 2 decimals.
- [ ] Heart rate: Fox (220 − age) and Tanaka (208 − 0.7 × age) formulas, the five 10% zones (a common convention, not from one source), Karvonen method, and the AHA 50–70% / 70–85% ranges (confirmed through heart.org search results).
- [ ] Safety wording on medications (beta blockers) and seeing a doctor before vigorous exercise.

**Financial reviewer, batch 5** (credit card payoff, debt-to-income, savings goal):
- [ ] Credit card payoff uses APR ÷ 12 monthly compounding; most issuers use a daily periodic rate, so statements differ slightly.
- [ ] Debt-to-income: which debts count, the neutral mention of 43% as a historical US reference point (the CFPB replaced the 43% qualified-mortgage cap with a price-based test in 2021 according to a St. Louis Fed piece found by search; not verified), and that no result is labelled "good" or "approved".
- [ ] Savings goal: end-of-month deposits, constant return, no tax, fees or inflation.

**Financial reviewer** (e.g. mortgage professional or CFP), for loan, mortgage and compound interest:
- [ ] Loan payment: the rate is labelled APR but used as the nominal rate. Check whether this wording is acceptable.
- [ ] Mortgage:
  - [ ] PMI rules: 80% start, 78% automatic end and midpoint final end.
  - [ ] Whether to model borrower-requested cancellation at 80%.
  - [ ] FHA and VA disclaimers.
  - [ ] Escrow (taxes and insurance ÷ 12).
  - [ ] Totals over the term.
  - [ ] US-centric terms (PMI, HOA, PITI) in the five translations.
- [ ] Compound interest: the compounding formula, effective annual rate, part-period convention and Rule of 72 wording.
- [ ] Disclaimers state that results are estimates, not financial advice or loan offers.

**Engineering reviewer** (civil or structural engineer), for concrete:
- [ ] Shape formulas, unit conversions and how the waste allowance is applied.
- [ ] The text states that it is a volume estimate only, not a structural design.
- [ ] Whether premix bag yields should be added, using manufacturer figures only.

**Tax, payroll and financial reviewers, batch 6** (overtime pay, depreciation, cap rate):
- [ ] **Overtime pay:** the US FLSA default of 40 hours at 1.5×, double time counted inside the overtime hours, and wording for daily overtime and other jurisdictions.
- [ ] **Depreciation:**
  - [ ] the full-year convention;
  - [ ] declining balance that never switches to straight-line;
  - [ ] the statement that US tax depreciation uses MACRS (IRS Publication 946), which the tool does not compute.
- [ ] **Cap rate:** the NOI definition (excluding debt service and depreciation), the vacancy treatment, and the neutral handling of a negative NOI.
- [ ] **Disclaimers:** each says the result is an estimate, not tax, legal or investment advice.

Record the reviewer's name, qualification, date and outcome here before changing a calculator's `expertReview.status` to `"completed"`.

## 5. Native-speaker proofreading

AI agents produced every translation, and automated tests checked them for complete structure, `{placeholders}`, no leftover English sentences and identical numeric results. **No translation has been read by a native speaker.**

| Language | Scope | Proofread |
| --- | --- | --- |
| Urdu (اردو) | Interface, categories, collections, 110 calculators, 82 unit converters | **No** |
| Arabic (العربية) | Interface, categories, collections, 110 calculators, 82 unit converters | **No** |
| Spanish (Español) | Interface, categories, collections, 110 calculators, 82 unit converters | **No** |
| French (Français) | Interface, categories, collections, 110 calculators, 82 unit converters | **No** |
| German (Deutsch) | Interface, categories, collections, 110 calculators, 82 unit converters | **No** |
| Italian (Italiano) | Interface, categories, collections, 110 calculators, 82 unit converters | **No** |
| European Portuguese (Português) | Interface, categories, collections, 110 calculators, 82 unit converters | **No** |
| Dutch (Nederlands) | Interface, categories, collections, 110 calculators, 82 unit converters | **No** |

**Italian, European Portuguese and Dutch (added 21 October 2026):**
- The translators flagged 265 terms for proofreading (180 earlier, 85 in batch 6); they are listed in `docs/translation-proofreading.md`. Check these first.
- European Portuguese must read as pt-PT, not Brazilian Portuguese. The language selector and `hreflang` use `pt-PT`, and the URL prefix is `/pt`.
- Metadata (titles and descriptions) in all nine languages was rewritten on 21 October 2026 to fit search snippets (about 60 and 70–160 characters). The new wording also needs proofreading.

**Terms flagged by the translators of the 20 calculators added on 15 October 2026** (check these first):
- APR/APY are kept as US acronyms in es/fr/de/ur/ar (Spanish TAE, French TAEG and German effektiver Jahreszins include fees, so they are not equivalents).
- Roof pitch "X in 12" is unusual outside North America; FAQs keep the English words "pitch" and "slope" in quotes.
- Binary prefixes (KiB, MiB…) are transliterated in ur/ar; French prose uses Go/Gio while results show GB/GiB.
- Arabic plural forms for one and two (e.g. "{n} طبقة") keep the number rather than "طبقة واحدة/طبقتان".
- Batch 5: French "taux d’endettement" and Spanish "ratio de endeudamiento" for DTI with English "front-end/back-end" kept; French "permutations" where textbooks say "arrangements" and Spanish where they may say "variaciones"; German "unvereinbar" and French "incompatibles" for mutually exclusive; slant height ("apothème"/"génératrice", "Mantelhöhe"); Arabic "و" joining duration parts.
- Spanish "vida media" (half-life) vs "vida promedio" (mean lifetime); French "masse volumique" for density.

**For every language:**
- [ ] Natural phrasing and consistent terminology: one word for "calculator", and consistent pay periods and statistics terms.
- [ ] Number formats in prose and worked examples. Arabic and Urdu use Latin digits by design; es/fr/de use decimal commas.
- [ ] Currency display: amounts stay in the original currency (e.g. "US$") and are never converted.
- [ ] Titles, meta titles (about 60 characters) and meta descriptions read well in search results.
- [ ] Validation messages read correctly with any field label inserted.
- [ ] Plural forms in the age and date duration results, especially Arabic (zero, one, two, few, many and other).
- [ ] US-specific concepts are explained, not silently localized: GPA, letter grades, PMI, HOA, US cups and gallons, sales tax.

**Urdu and Arabic (right-to-left):**
- [ ] Mixed RTL and LTR text: formulas, units (m³, kg), currency amounts and fractions inside sentences display in the right order.
- [ ] Punctuation (، ؛ ؟ ۔) and quotation marks.
- [ ] The date picker and number inputs (left-to-right by design) are understandable.
- [ ] Urdu typography: the site uses Noto Naskh Arabic. Decide whether a Nastaliq font is required for Urdu readers.
- [ ] Arabic weekday and weekend wording in the date duration calculator.

**French:**
- [ ] Non-breaking spaces before : ; ? ! % and inside « ».
- [ ] "Calculateur" vs "Calculatrice" (currently "Calculateur" everywhere).

**German:**
- [ ] Compound titles and capitalization of labels inserted into messages.
- [ ] "Credits" and "GPA" for the US GPA system.

**Spanish:**
- [ ] Spain-neutral usage ("tú").
- [ ] Choice between "Calculadora de conversión de …" and "Conversor de …".

## 6. Production configuration

**Domain.** The production origin is `https://hourlytosalarycalculator.net` (non-www). It is set in `src/lib/site.ts` (`PRODUCTION_ORIGIN`) and resolved as follows:

1. If `NEXT_PUBLIC_SITE_URL` is set, it is used, normalized to a bare origin. A trailing slash, duplicate slashes, a path or an upper-case host are removed.
2. Otherwise every production build uses `https://hourlytosalarycalculator.net`. This includes Vercel preview builds and builds outside Vercel.
3. `http://localhost:3000` is used only by `next dev` and the unit tests.

The origin is inlined at build time into:
- canonical URLs and `og:url`;
- hreflang alternates, including `x-default`, which points to English;
- `sitemap.xml` and the `Sitemap:` line in `robots.txt`;
- JSON-LD URLs.

English stays unprefixed (`/calculators/<slug>`); the other languages use `/ur/`, `/es/`, `/fr/`, `/de/` and `/ar/`.

**Safeguards** (in `next.config.ts` and `src/lib/site.ts`):
- A build with `VERCEL_ENV=production` **fails** if the origin is anything other than `https://hourlytosalarycalculator.net`. This includes localhost, a placeholder such as `calcnest.example`, a `*.vercel.app` URL, the `www` host or `http://`. Other builds only print a warning.
- On Vercel preview and development deployments (`VERCEL_ENV=preview` or `development`):
  - `robots.txt` is `Disallow: /`;
  - every page carries `<meta name="robots" content="noindex, nofollow">`;
  - canonicals still point to production, so a preview URL can never be indexed or advertised as canonical.
- Requests for host `www.hourlytosalarycalculator.net` get a **308** redirect to the same path and query on `https://hourlytosalarycalculator.net`. This is done in the app, in `next.config.ts` redirects, so it works on any host. On Vercel, also configure it at the edge (below).

**Environment variables**

| Variable | Where | Value |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Hosting dashboard, **Production** environment only | `https://hourlytosalarycalculator.net` |
| `VERCEL_ENV` | Set automatically by Vercel | Used for the build guard and preview noindex |

`NEXT_PUBLIC_SITE_URL` is optional, because production builds already default to this domain. Setting it explicitly makes the intent visible. Preview and development environments need **no** value.

Setting the variable in a local shell or `.env` file does **not** change the hosted environment. It must be set in the hosting dashboard, and then the site must be **rebuilt**, because `NEXT_PUBLIC_*` values are inlined at build time.

No secrets, API keys or databases are used. Calculations run in the browser.

**Vercel setup** (if the project is hosted on Vercel; the repository has no `vercel.json` or `.vercel/` directory, so this could not be confirmed from the code):

1. Go to Project → **Settings → Environment Variables**:
   - add `NEXT_PUBLIC_SITE_URL` = `https://hourlytosalarycalculator.net`;
   - tick **Production** only, and save.
2. Go to Project → **Settings → Domains**:
   - add `hourlytosalarycalculator.net`;
   - add `www.hourlytosalarycalculator.net` and set it to **redirect to `hourlytosalarycalculator.net`** with a 308 (permanent) redirect;
   - keep the apex as the primary domain.
3. At the domain registrar or DNS provider, create the records that the Vercel Domains page shows for each host:
   - normally an `A` record for the apex;
   - normally a `CNAME` for `www`;
   - or switch to Vercel nameservers.

   Use the exact values Vercel displays rather than values copied from documentation, and remove conflicting old `A` or `CNAME` records.
4. Redeploy production (Deployments → latest production deployment → Redeploy) so that the build picks up the variable.
5. After DNS propagates, Vercel issues the TLS certificates automatically. Check that both hosts show "Valid Configuration".

**Other hosts.**
- Run `NEXT_PUBLIC_SITE_URL=https://hourlytosalarycalculator.net npm run build && npm start` on Node 22.
- Point both apex and `www` DNS at the server.
- Terminate TLS for both hosts.
- The app itself redirects `www` to the apex.
- The proxy (`src/proxy.ts`) needs the Node.js runtime, because it serves the localized 404 pages.

**Deployment checks**

1. Run `npm ci`, `npm run lint`, `npm run typecheck`, `npm test`, then `npm run build`. The build log must **not** contain "⚠ Site URL".
2. Smoke-test the deployed site:
   - `node scripts/seo-audit.mjs https://hourlytosalarycalculator.net https://hourlytosalarycalculator.net` must report "No problems found".
   - `curl -I https://hourlytosalarycalculator.net/calculators/x` must return 404.
   - `curl -I https://www.hourlytosalarycalculator.net/es` must return 308 with `location: https://hourlytosalarycalculator.net/es`.
   - `curl -I http://hourlytosalarycalculator.net/` must redirect to `https://`.
   - `curl https://hourlytosalarycalculator.net/robots.txt` must show `Allow: /` and the sitemap line.
3. Run `npm run test:e2e` against the build (Playwright starts `next start` on port 3100).
4. Submit `https://hourlytosalarycalculator.net/sitemap.xml` to Google Search Console and Bing Webmaster Tools. Use a Domain property, verified by a DNS TXT record.

CI (`.github/workflows/ci.yml`) runs lint, typecheck, unit tests, build and Playwright on pushes to `main` and on pull requests. **This repository has no `main` branch yet**, so CI has not run on GitHub for this branch.

## 7. Performance and accessibility notes

Measured on `next start` (gzip enabled), in Chromium.

| Page | Desktop LCP | Mobile LCP (4× CPU, slow network) | CLS (mobile, after fixes) |
| --- | --- | --- | --- |
| `/` | 0.22 s | 0.83 s | 0 |
| `/calculators` | 0.07 s | 0.30 s | 0 |
| `/calculators/mortgage-calculator` | 0.08 s | 0.34 s | 0 |
| `/ar/calculators/age-calculator` | 0.15 s | 0.34 s | 0.001 |
| `/de/calculators/concrete-calculator` | 0.06 s | 0.26 s | 0 |

- JavaScript is about 214 KB gzipped per page, mostly the framework runtime. This is acceptable; no change made.
- These are lab measurements on a local server. Measure real-user Core Web Vitals after launch.
- Accessibility: axe-core reports no violations on any sitemap URL (desktop and mobile). Keyboard operation of the language menu and search is tested. A manual screen-reader pass (NVDA/VoiceOver), including RTL pages, has **not** been done.

## 8. Remaining launch blockers

1. **Production domain configured in code but not verified live.**
   - The code uses `https://hourlytosalarycalculator.net`.
   - Still to do: the hosting environment variable, the domain and `www` redirect in the hosting dashboard, the DNS records at the registrar, TLS, and a production redeploy (section 6).
   - Live DNS, HTTPS and redirects could not be checked from the build environment, because its outbound proxy refused connections to the domain.
2. **Source links unverified** (section 3.1), including the ingredient densities in section 3.2.
3. **Professional review pending** for BMI, BMR, waist-to-hip ratio, heart rate zones (medical); loan payment, mortgage, compound interest, credit card payoff, debt-to-income, savings goal (financial); and concrete (engineering) (section 4). The pages already say they are estimates, not advice. Either complete the reviews or accept the risk explicitly and keep the disclaimers.
4. **Native-speaker proofreading pending** for Urdu, Arabic, Spanish, French, German, Italian, European Portuguese and Dutch (section 5, plus the 265 flagged terms in `docs/translation-proofreading.md`). Alternatively, launch English first and publish other languages as reviews complete; the site only publishes a language when its files exist.
5. **No `main` branch / CI never run on GitHub.** Create the default branch, merge, and confirm CI passes.
6. **Next.js security upgrade required before any deployment.**
   - **What happened:** on 24 October 2026, `next build` stopped with "Your version of Next.js is affected by a known security vulnerability" for the installed `next@16.4.0`. The build only completed on the retry the notice allows.
   - **Decision:** the upgrade was deliberately deferred at the owner's request. The site must not be deployed or exposed publicly on 16.4.0.
   - **Before launch:** run the recommended upgrade (`next upgrade`, ideally in a separate worktree). Then re-run lint, TypeScript, unit tests, the production build, the SEO audit and the Playwright desktop and mobile suites.
   - **Advisory:** the specific advisory was not inspected from the build environment.

**Not blockers, but recommended:**
- A manual screen-reader check.
- Real-device testing on iOS Safari and Android Chrome.
- Privacy policy and analytics decision (no analytics are installed).
- Adding sources to the 24 uncited calculators.

## 9. Final test and build results

All results below are from the final run on commit `472e459` (15 October 2026), in this order, with no code changes in between.

| Check | Command | Result |
| --- | --- | --- |
| Lint | `npm run lint` | Pass (0 errors, 0 warnings) |
| TypeScript | `npx tsc --noEmit` | Pass (0 errors) |
| Unit tests | `npm test` | **899 passed**, 0 failed (24 files) |
| Production build | `NEXT_PUBLIC_SITE_URL=https://calcnest.example npm run build` | Pass; 534 static pages; no missing-domain warning |
| Playwright (desktop and mobile) | `npm run test:e2e` | **117 passed, 0 failed, 7 skipped** (the skips are tests that apply only to desktop or only to mobile); 24.4 min |
| SEO crawl | `node scripts/seo-audit.mjs http://localhost:3100 https://calcnest.example` | 492 sitemap URLs and 492 internal links checked; no problems found |

### 9.1 Production-domain run

Run on 15 October 2026, after the domain configuration change (the commit that follows `472e459`).

| Check | Command | Result |
| --- | --- | --- |
| Lint | `npm run lint` | Pass |
| TypeScript | `npx tsc --noEmit` | Pass |
| Unit tests | `npx vitest run` | **904 passed**, 0 failed. This includes 5 new origin tests in `src/lib/site.test.ts`. |
| Production build | `NEXT_PUBLIC_SITE_URL=https://hourlytosalarycalculator.net npx next build` | Pass; no "⚠ Site URL" warning |
| Sitemap | `curl localhost:3100/sitemap.xml` | 492 URLs (82 for each of en, ur, es, fr, de and ar). All `<loc>` and hreflang URLs are on `https://hourlytosalarycalculator.net`, with 0 duplicate slashes. The hreflang set is en, ur, es, fr, de, ar and x-default. |
| robots.txt | `curl localhost:3100/robots.txt` | `Allow: /`, `Sitemap: https://hourlytosalarycalculator.net/sitemap.xml` |
| SEO crawl | `node scripts/seo-audit.mjs http://localhost:3100 https://hourlytosalarycalculator.net` | 492 sitemap URLs and 492 internal links checked; no problems found |
| www redirect | `curl -I -H "Host: www.hourlytosalarycalculator.net" localhost:3100/es/calculators?x=1` | `308`, `location: https://hourlytosalarycalculator.net/es/calculators?x=1` |
| Stray origins | grep of the prerendered HTML/RSC output for `localhost:3000`, `calcnest.example` and `vercel.app` | 0 files. The only hit in server JS is the development fallback inside `resolveSiteUrl`. |
| Build guard | `VERCEL_ENV=production NEXT_PUBLIC_SITE_URL=https://calcnest.example npx next build` (and the same with a `*.vercel.app` URL) | Build fails with "Refusing to build production with site URL …", as intended |
| Preview | `VERCEL_ENV=preview npx next build`, without `NEXT_PUBLIC_SITE_URL` | `robots.txt` is `Disallow: /`, and pages have `noindex, nofollow`. The canonical is still `https://hourlytosalarycalculator.net/es`, which also shows that the no-variable default works. |
| Live domain | `curl -I https://hourlytosalarycalculator.net` and the `www` host | **Not verifiable from the build environment.** Its outbound proxy answered 403 to the CONNECT request for both hosts, and DNS is resolved only through that proxy. This says nothing about whether the domain works. |

Playwright was not re-run for this change. Only origin configuration, robots and redirects changed, and these are covered by the checks above. The last full Playwright run is in the table above (commit `472e459`).

### 9.2 Batch 5 run (90 calculators)

Run on 15 October 2026 after adding the 20 batch-5 calculators and their translations.

| Check | Command | Result |
| --- | --- | --- |
| Baseline Playwright on `65b69e0` (before batch 5) | `npx playwright test` | 116 passed, 1 failed, 7 skipped. The failure was the desktop German decimal-comma test typing before hydration; fixed by waiting for network idle, then that spec passed 3 repeated runs (105 passed, 3 skipped) |
| Lint | `npm run lint` | Pass |
| TypeScript | `npx tsc --noEmit` | Pass |
| Unit tests | `npx vitest run` | **1,664 passed**, 0 failed (33 files) |
| Production build | `NEXT_PUBLIC_SITE_URL=https://hourlytosalarycalculator.net npx next build` | Pass; 774 static pages; no site-URL warning |
| Sitemap | `curl localhost:3100/sitemap.xml` | 732 URLs (122 pages × 6 languages) |
| SEO crawl | `node scripts/seo-audit.mjs http://localhost:3100 https://hourlytosalarycalculator.net` | 732 sitemap URLs and 732 internal links checked; no problems found |
| Playwright (desktop and mobile), full suite | `npx playwright test` | **117 passed, 0 failed, 7 skipped** (desktop-only or mobile-only tests); 41.1 min |

### 9.3 Nine-language run (commit `28c99bd`, 22 October 2026)

Run on a clean production build: `.next` was deleted first, then `next build` was run once and served with `next start -p 3100`. Every check below ran against that build, with no code changes in between.

| Check | Command | Result |
| --- | --- | --- |
| Lint | `npm run lint` | Pass (0 errors) |
| TypeScript | `npx tsc --noEmit` | Pass (0 errors) |
| Unit tests | `npx vitest run` | **3,092 passed**, 0 failed (37 files). Includes the Italian grouping tests: `1234` → `1.234`, and `1234.5 USD` → `1.234,50 USD`. |
| Production build | `npx next build` | Pass; 1,823 static pages |
| SEO audit | `node scripts/seo-audit.mjs http://localhost:3100 https://hourlytosalarycalculator.net` | 1,755 sitemap URLs (195 × 9 languages) and 6,048 distinct internal links checked; no problems found (titles, descriptions, canonicals, hreflang, internal links) |
| Metadata unit checks | `src/i18n/metadata.test.ts` | For each language: titles ≤ 60 characters, descriptions 70–160 characters, and titles and descriptions unique within the language |
| Playwright, all specs except the sitemap crawl (desktop and mobile) | `npx playwright test` on the 6 specs other than `e2e/pages.spec.ts` | **190 passed, 0 failed, 8 skipped** (desktop-only or mobile-only tests); 3.4 min. Includes the header-fit test for every language at 1024 and 1280 px. |
| Playwright sitemap crawl, desktop | `npx playwright test e2e/pages.spec.ts --project=desktop` | **31 passed, 0 failed**; 40.1 min |
| Playwright sitemap crawl, mobile | `npx playwright test e2e/pages.spec.ts --project=mobile` | **31 passed, 0 failed**; 34.8 min |
| Hydration and console | Scripted Chromium check: 9 languages × home, calculator, converter, category, collection and directory pages | No React #418 or other hydration errors, no console or page errors, no `MISSING_MESSAGE` |
| Italian formatting | SSR HTML compared with the hydrated DOM | Tip on 1.234,5 → `222,21 USD`; 1.234 bar → `17.897,657 psi`; server and browser output identical |
| 320 px overflow | Scripted scan of all 1,755 sitemap URLs at 320 px | 0 pages overflow |
| Header widths | Scripted check of `/calculators` at 1024, 1279, 1280 and 1366 px in all 9 languages | 0 px header-row overflow and 0 px page overflow in all 36 cases. Placeholder fit is asserted by the Playwright header test at 1024 and 1280 px. |

**Total:** 252 Playwright tests ran (190 + 31 + 31) and none failed. With the 8 by-design skips, that covers all 260 listed tests.

**Old build, for comparison.** The desktop crawl on the build before `c1b12d0` finished with 28 passed and 3 failed. All three failures are fixed in the build above:
- a duplicate es/pt chemistry category title (fixed by distinct Portuguese titles);
- React #418 hydration errors on Italian pages, caused by number grouping differing between server and browser (fixed in `c1b12d0`);
- a 10 px overflow at 320 px on `/nl/categories/statistics`; a later scan also found a 7 px overflow on `/nl/calculators/mortgage-calculator` (both fixed in `28c99bd`).

**Still open.** These are not covered by the automated tests: native-speaker proofreading for 8 languages (180 flagged terms in `docs/translation-proofreading.md`), unverified source links (section 3.1), professional review (section 4), no `main` branch or CI run, and the production domain not verified live (section 8).

### 9.4 Batch 6 run (110 calculators, 89 converters; 24 October 2026)

This run used a clean production build of commit `a9b7fa9`, built with `NEXT_PUBLIC_SITE_URL=https://hourlytosalarycalculator.net` and served with `next start -p 3100`. Later commits up to `88be835` changed only documentation and tests. The one exception is an updated header-search test, which was rerun against the same build.

| Check | Command | Result |
| --- | --- | --- |
| Lint | `npm run lint` | Pass (0 errors) |
| TypeScript | `npx tsc --noEmit` | Pass (0 errors) |
| Unit tests | `npx vitest run` | **3,759 passed**, 0 failed (42 files) |
| Production build | `npx next build` | Pass; 2,093 static pages. The first two attempts stopped with a Next.js security-upgrade notice and passed on the retry the notice allows (see blocker 6 in section 8). |
| SEO audit | `node scripts/seo-audit.mjs http://localhost:3100 https://hourlytosalarycalculator.net` | 2,025 sitemap URLs and 6,480 internal links checked; no problems found |
| Playwright, batch-6 spec | `npx playwright test e2e/batch-6.spec.ts` | **22 passed**, 0 failed (desktop and mobile) |
| Playwright, all non-crawl specs | `npx playwright test` on every spec except `e2e/pages.spec.ts` | 210 passed, 8 skipped (desktop-only or mobile-only tests), 2 failed |
| Fix for those 2 failures | `e2e/navigation.spec.ts` "header search" test, rerun | The test expected 2 matches for "hourly". The new Overtime Pay Calculator correctly makes it 3. The test now checks all three names: **2 passed** |
| Playwright sitemap crawl, desktop | `npx playwright test e2e/pages.spec.ts --project=desktop` | **31 passed, 0 failed, 0 skipped, 0 timed out**; 49.9 min |
| Playwright sitemap crawl, mobile | `npx playwright test e2e/pages.spec.ts --project=mobile` | **31 passed, 0 failed, 0 skipped, 0 timed out**; 44.6 min |

**What the crawls cover.** In all nine languages:
- every sitemap page;
- every internal link;
- unknown URLs returning 404;
- no horizontal overflow, console errors or axe violations on each page;
- every calculator's default result;
- no horizontal scrolling at 320 px.

**Still open.** These are not covered by automated tests:
- native-speaker proofreading (265 flagged terms);
- unverified source links (sections 3.1 and 3.6);
- professional review (section 4);
- the Next.js security upgrade (blocker 6);
- no `main` branch or CI run;
- the production domain has not been checked live.

