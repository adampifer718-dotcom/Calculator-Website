# CalcNest launch checklist

Status as of 15 October 2026, branch `claude/magical-planck-oou76v`.

**Recommendation: NO-GO for a public production launch until the blockers in section 8 are closed.**
The code, routing, SEO and automated tests are in launch condition (section 9), so a soft launch to a staging or preview domain is reasonable now. A public launch should wait for the production domain, the unverified sources and the professional and native-speaker reviews listed below.

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

## 4. Professional review checklist

| Calculator | Area | Mathematically tested | Professionally reviewed |
| --- | --- | --- | --- |
| BMI | Medical | Yes | **No (pending)** |
| BMR | Medical | Yes | **No (pending)** |
| Loan payment | Financial | Yes | **No (pending)** |
| Mortgage | Financial | Yes | **No (pending)** |
| Compound interest | Financial | Yes | **No (pending)** |
| Concrete | Engineering | Yes | **No (pending)** |

All other calculators are mathematically tested and not flagged for review. Salary, sales tax, ROI, electricity, fuel cost and rainwater give general estimates; a general content review is still advisable.

**Medical reviewer** (clinician or registered dietitian), for BMI and BMR:
- [ ] BMI categories, age limits and wording (adults only; not a diagnosis; limits for athletes, pregnancy, older adults and ethnicity).
- [ ] Healthy-weight range shown for a height (18.5–24.9 × height²).
- [ ] BMR: whether Mifflin–St Jeor and the "BMR" label are appropriate; the plausible input range (now ≥ 20 kg, ≥ 100 cm, 18–100 years); and the wording for clinical use.
- [ ] Disclaimers in all six languages state that results are not medical advice.

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

Record the reviewer's name, qualification, date and outcome here before changing a calculator's `expertReview.status` to `"completed"`.

## 5. Native-speaker proofreading

AI agents produced every translation, and automated tests checked them for complete structure, `{placeholders}`, no leftover English sentences and identical numeric results. **No translation has been read by a native speaker.**

| Language | Scope | Proofread |
| --- | --- | --- |
| Urdu (اردو) | Interface, categories, collections, 50 calculators | **No** |
| Arabic (العربية) | Interface, categories, collections, 50 calculators | **No** |
| Spanish (Español) | Interface, categories, collections, 50 calculators | **No** |
| French (Français) | Interface, categories, collections, 50 calculators | **No** |
| German (Deutsch) | Interface, categories, collections, 50 calculators | **No** |

**For every language:**
- [ ] Natural phrasing and consistent terminology: one word for "calculator", and consistent pay periods and statistics terms.
- [ ] Number formats in prose and worked examples. Arabic and Urdu use Latin digits by design; es/fr/de use decimal commas.
- [ ] Currency display: amounts stay in the original currency (e.g. "US$") and are never converted.
- [ ] Titles, meta titles (≤ 65 characters) and meta descriptions read well in search results.
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

**Domain.** The production origin comes from `src/lib/site.ts`:

1. `NEXT_PUBLIC_SITE_URL`, if set (e.g. `https://www.example.com`, without a trailing slash);
2. otherwise, on Vercel, `https://${VERCEL_PROJECT_PRODUCTION_URL}`, which Vercel sets automatically;
3. otherwise `http://localhost:3000`.

The origin is inlined at build time into:
- canonical URLs and `og:url`;
- hreflang alternates;
- `sitemap.xml` and the `Sitemap:` line in `robots.txt`;
- JSON-LD URLs.

A build without either variable prints a warning and produces **localhost canonicals**, which must never be deployed. The production domain is not recorded anywhere in the repository and has not been chosen in this audit. CI builds with the placeholder `https://calcnest.example`.

**Environment variables**

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes, unless deploying on Vercel with a production domain | Production origin for canonicals, hreflang, sitemap, robots and JSON-LD |
| `VERCEL_PROJECT_PRODUCTION_URL` | Set automatically by Vercel | Fallback origin |

No secrets, API keys or databases are used. Calculations run in the browser.

**Deployment steps**

1. Decide the production domain. If it uses `www`, redirect the other host to it at the DNS or CDN level.
2. Set `NEXT_PUBLIC_SITE_URL=https://<domain>` in the hosting environment (production scope).
3. `npm ci`, `npm run lint`, `npm run typecheck`, `npm test`, then `npm run build`. Confirm the build log has **no** "NEXT_PUBLIC_SITE_URL is not set" warning.
4. Run `npm run start` (Node 22, as in CI) or deploy to a Node-compatible host. The proxy (`src/proxy.ts`) needs the Node.js runtime because it serves the localized 404 pages.
5. Smoke-test the deployed site:
   - `node scripts/seo-audit.mjs https://<domain> https://<domain>` must report "No problems found".
   - `curl -I https://<domain>/calculators/x` must return 404.
6. Run `npm run test:e2e` against the build (Playwright starts `next start` on port 3100).
7. Submit `https://<domain>/sitemap.xml` to search consoles.

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

1. **Production domain not decided or configured.** Set `NEXT_PUBLIC_SITE_URL` and rebuild (section 6).
2. **Source links unverified** (section 3.1), including the ingredient densities in section 3.2.
3. **Professional review pending** for BMI, BMR, loan payment, mortgage, compound interest and concrete (section 4). The pages already say they are estimates, not advice. Either complete the reviews or accept the risk explicitly and keep the disclaimers.
4. **Native-speaker proofreading pending** for Urdu, Arabic, Spanish, French and German (section 5). Alternatively, launch English first and publish other languages as reviews complete; the site only publishes a language when its files exist.
5. **No `main` branch / CI never run on GitHub.** Create the default branch, merge, and confirm CI passes.

**Not blockers, but recommended:**
- A manual screen-reader check.
- Real-device testing on iOS Safari and Android Chrome.
- Privacy policy and analytics decision (no analytics are installed).
- Adding sources to the 24 uncited calculators.

## 9. Final test and build results

Results from the final run on this branch (filled in below from the actual command output).

| Check | Command | Result |
| --- | --- | --- |
| Lint | `npm run lint` | RESULT_LINT |
| TypeScript | `npx tsc --noEmit` | RESULT_TSC |
| Unit tests | `npm test` | RESULT_UNIT |
| Production build | `NEXT_PUBLIC_SITE_URL=https://calcnest.example npm run build` | RESULT_BUILD |
| Playwright (desktop and mobile) | `npm run test:e2e` | RESULT_E2E |
| SEO crawl | `node scripts/seo-audit.mjs http://localhost:3100 https://calcnest.example` | RESULT_SEO |
