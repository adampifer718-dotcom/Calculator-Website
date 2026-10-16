# HourlyToSalaryCalculator.net

Free online calculators built with Next.js (App Router), React, TypeScript and Tailwind CSS. Every calculator page is statically generated, has its own URL, metadata, canonical URL and structured data, and runs its calculation in the browser.

## Platform overview

- **50 published calculators** across all **14 categories** (Biology, Chemistry, Construction, Conversion, Ecology, Everyday Life, Finance, Food, Health, Math, Physics, Sports, Statistics, Other) and **15 industry collections**.
- Every calculator has one canonical page at `/calculators/<slug>`. It has one primary category (breadcrumb and category page) and can appear in several collections at `/collections/<slug>` without duplicate pages.
- Category and collection pages, counts, navigation, homepage sections, search, related links and the sitemap are all derived from published registry records. Categories or collections with no published calculator get no page.
- The master backlog (`src/calculators/backlog.ts`, rendered to [`docs/calculator-backlog.md`](docs/calculator-backlog.md)) holds 183 deduplicated concepts with status, priority scores and expert-review flags.

Pages: `/` (search, categories, featured, popular, collections, recently added, pay converter, full directory), `/calculators` (search with category/industry filters and sorting, URL state), `/categories/<slug>`, `/collections/<slug>`, `/calculators/<slug>`, `/about`, `/sitemap.xml`, `/robots.txt`, `/search-index.json` (static autocomplete index, loaded on demand).

## Design

The visual system (colour tokens, typography, components and page layouts) is documented in [`docs/design-system.md`](docs/design-system.md). Tokens live in `src/app/globals.css`.

## Getting started

```bash
npm install
npm run dev            # http://localhost:3000
```

The production origin is `https://hourlytosalarycalculator.net` (non-www; `www` redirects to it with a 308). Every production build uses it for canonical URLs, hreflang, the sitemap, robots.txt and JSON-LD. `NEXT_PUBLIC_SITE_URL` overrides it and is normalized to a bare origin. A Vercel production build fails if the origin is anything else, and Vercel preview deployments are served as noindex. `http://localhost:3000` is used only by `next dev` and tests.

```bash
NEXT_PUBLIC_SITE_URL=https://hourlytosalarycalculator.net npm run build
npm start
```

On the hosting platform, set `NEXT_PUBLIC_SITE_URL` for the **Production** environment in the dashboard and redeploy. A local variable does not change the hosted build. See [`docs/launch-checklist.md`](docs/launch-checklist.md) section 6 for the hosting, domain and DNS steps.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run lint` | ESLint |
| `npm run typecheck` | Generates route types and runs `tsc --noEmit` |
| `npm test` | Vitest unit tests (math, formatting, framework, engines, registry integrity) |
| `npm run build` | Production build |
| `npm run i18n:sync` | Wires every `src/calculators/<calc>/i18n/<locale>.ts` file into that calculator's `translations.ts` |
| `node scripts/seo-audit.mjs <server> <origin>` | Crawls a running build: canonicals, hreflang, sitemap, metadata, breadcrumbs, internal links and 404s |
| `npm run i18n:report` | Regenerates `docs/translation-report.md` (a test fails if it is out of date) |
| `npm run test:e2e` | Playwright tests against `next start` (run `npm run build` first) on desktop and mobile viewports: every sitemap URL, internal links, metadata uniqueness, 404s, calculator inputs/results/validation, navigation, horizontal overflow and axe accessibility checks |

## Project structure

```
src/
  app/[locale]/              Routes for every language: home, directory, categories, collections, calculator pages, about
  app/                       sitemap, robots, per-language search index, global 404
  i18n/                      Locale config, routing, messages, shared calculator strings, taxonomy translations, completeness checks
  calculators/
    framework/               Typed engine/content types, input parsing, validation, evaluation, formatting
    shared/pay.ts            Fields and helpers shared by the pay calculators
    <calculator>/engine.ts   Inputs, validation and compute function (pure, browser-safe)
    <calculator>/index.ts    Page content: metadata, intro, formulas, worked examples, FAQs, related links
    <calculator>/widget.tsx  Client entry that renders the shared form for the engine
    <calculator>/text/en.ts  Engine strings (labels, help, result labels); i18n/<locale>.ts holds translations
    registry.ts              The list of published calculators; everything else derives from it
    widgets.tsx              Code-split map of interactive forms by slug
    categories.ts            Category definitions
  components/                Shared layout, calculator page, form, results and UI components
  lib/
    math/                    Deterministic calculation modules (pay, percentage, ROI)
    format.ts                Display-only rounding and currency formatting
    search.ts                Directory search
    seo.ts, structured-data.ts, site.ts
e2e/                         Playwright tests
```

## Calculator registry

Each calculator is a typed `CalculatorDefinition` (`src/calculators/framework/types.ts`):

| Field | Purpose |
| --- | --- |
| `id`, `slug` | Stable ID and canonical URL segment |
| `status` | `planned`, `researching`, `implementing`, `testing` or `published`; only published records reach public pages |
| `category`, `collections` | Primary category and any number of industry collections |
| `engine` | Input schema (`fields`), validation (`validate`) and the formula (`compute`) with output definitions |
| `examples` | Worked examples with `expectedPrimary`, verified against the engine by tests |
| `metaTitle`, `metaDescription`, `keywords` | SEO metadata and search terms (uniqueness and length are tested) |
| `related` | Related calculators (validated to exist) |
| `sources` | References used to verify formulas, constants and ranges |
| `expertReview` | Flags medical, financial, tax, engineering or safety topics; flagged tools must cite sources and state they are not advice |
| `addedOn`, `popularRank`, `featured` | Recently added, popular and featured sections |

## Adding a calculator

1. Add or update its entry in `src/calculators/backlog.ts` and move it through the statuses.
2. Put reusable math in `src/lib/math/` with unit tests, citing sources for anything beyond basic arithmetic.
3. Create `src/calculators/<name>/engine.ts` with `defineEngine<Values>()`, `widget.tsx` (copy an existing one) and `index.ts` with content, sources and worked examples.
4. Register it in `ALL_CALCULATORS` (`registry.ts`) and `WIDGETS` (`widgets.tsx`). Set `status: "published"` only after its tests pass.
5. Run `npm run backlog:report` to refresh `docs/calculator-backlog.md`.

Tests fail if a published calculator is missing from the backlog (or vice versa), if metadata is duplicated, if an example result is wrong, if a widget is missing, or if a review-flagged tool has no sources.

## Languages

The site is available in English (default), Urdu (اردو), Spanish (Español), French (Français), German (Deutsch) and Arabic (العربية), using [next-intl](https://next-intl.dev) with the `[locale]` root segment.

- **URLs.** English stays unprefixed (`/calculators/roi-calculator`); other languages are prefixed (`/es/calculators/roi-calculator`, `/ar/...`). `/en/...` redirects to the unprefixed URL. Existing redirects are unchanged.
- **Language selector.** In the header on desktop and mobile. It shows native names, marks the active language (`aria-current`) and supports arrow keys, Home, End and Escape. Choosing a language keeps the visitor on the same page and query string. If that calculator is not translated yet, it links to the language's homepage instead of a missing URL.
- **Preference.** A manual choice is stored in the `NEXT_LOCALE` cookie for a year. Only the bare homepage `/` follows it; deep links are never redirected. There is no IP-based switching. A dismissible banner may suggest the browser's language, and the visitor stays in control.
- **Publishing rule.** A language is published only when its interface messages (`src/i18n/messages/<locale>.ts`), shared calculator strings (`src/i18n/calc/<locale>.ts`), categories and collections (`src/i18n/taxonomy/<locale>.ts`) and homepage pay converter text are all present. A calculator page exists in a language only when `src/calculators/<calc>/i18n/<locale>.ts` exists, with both page content and engine strings. Unpublished pages are not rendered, linked or listed in the sitemap.
- **Typed translations.** Each file is typed against the English source. `src/i18n/translations.test.ts` checks every file for identical keys, array lengths and `{placeholders}`, flags English sentences left in place, and runs each localized engine on the worked examples to confirm the numbers match English exactly.
- **Formatting.** Numbers, currencies, percentages and dates use `Intl` with the page locale. Arabic and Urdu use Latin digits (`nu-latn`) so results match what visitors type. Number inputs and text inputs that contain numbers (significant figures, scientific notation, data lists, fractions, recipe lines, GPA course lists) accept the local decimal separator (`2,5` in es/fr/de; list values are then separated by `;`, spaces or new lines), and Arabic-Indic digits are converted. Results such as `123.000` keep significant zeros. Changing the language never changes a value or converts a currency.
- **Dates.** Date fields store ISO dates (`YYYY-MM-DD`) and use the browser's date picker, so typing order and time zones never change a result. Calendar arithmetic (`src/lib/math/dates.ts`) works on whole day numbers and handles leap years, month ends and 29 February birthdays. Fields marked "today" render a fixed date on the server and switch to the visitor's local date after loading.
- **404 pages.** Unknown URLs are answered by the proxy with HTTP 404 and the prerendered not-found page of the visitor's language (`/<locale>/page-not-found`), so the page is complete even without JavaScript.
- **RTL.** Urdu and Arabic pages set `dir="rtl"`. Layout uses logical CSS (`ms-`, `ps-`, `start-`, `text-start`), directional icons are mirrored, and number inputs, formulas and calculation steps keep left-to-right order inside RTL text.
- **SEO.** Each localized page has its own translated title and description, a self-referencing canonical, reciprocal `hreflang` alternates for exactly the languages it exists in, plus `x-default` (English). The sitemap lists every published page in each language with the same alternates.
- **Adding a translation.** Create `src/calculators/<calc>/i18n/<locale>.ts` (copy an existing one, typed `CalculatorTranslation<XText>`), then run `npm run i18n:sync`, `npm test` and `npm run i18n:report`.

See [`docs/translation-report.md`](docs/translation-report.md) for current coverage and [`docs/launch-checklist.md`](docs/launch-checklist.md) for launch status, unverified sources and pending reviews.

## Research and sources

- The backlog was assembled from general knowledge of common calculator topics. Omni Calculator's public directory was meant to be the research reference, but this build environment's network policy blocked `omnicalculator.com`; re-check coverage against it when network access allows. No text, layout or code was copied from it.
- Sources are cited as publications with URLs (NIST, OpenStax, WHO, U.S. EIA, peer-reviewed papers). The same network restriction meant links could not be fetched during development, so formulas were verified with independent calculations in tests rather than live lookups; check the links before launch.
- BMI, BMR, loan payment, compound interest, mortgage (financial) and concrete (engineering) are flagged for expert review and have not yet been reviewed by a professional. The ingredient densities in the cups-to-grams converter are typical published values that should be spot-checked against the cited sources before launch.

## Calculation rules

- **Pay conversions** annualize gross pay. Annual, monthly, semi-monthly and biweekly use 1, 12, 24 and 26 periods per year. Weekly, daily and hourly use the entered weeks per year, workdays per week and hours per week. Hourly equivalent = annualized pay ÷ (hours per week × weeks per year). Results are gross pay, not take-home pay. No taxes are estimated.
- **Currency** selection changes formatting only. There is no exchange-rate conversion.
- **Rounding** happens only when values are displayed (`src/lib/format.ts`), never in intermediate steps.
- **Percentage change** divides by the absolute original value. An original value of 0 is rejected.
- **ROI** = (returned − invested) ÷ invested. Annualized ROI = (returned ÷ invested)^(1 ÷ years) − 1.

- **Fractions** use exact BigInt numerators and denominators and are reduced by the greatest common divisor; decimals such as 0.75 are converted exactly (3/4).
- **GPA** = Σ(grade points × credits) ÷ Σ credits on the common US 4.0 scale (A+ = 4.3 on the 4.3 scale). Cumulative GPA weights the previous GPA by its credits.
- **Mortgage** principal and interest use the loan payment formula; taxes and insurance are spread over 12 months; PMI applies above 80% loan-to-value and stops when the scheduled balance reaches 78% of the price (US conventional loans).
- **Concrete** volume is length × width × thickness, π r² h or π (R² − r²) h, times the number of pieces and (1 + waste %). 1 yd³ = 0.764554857984 m³ exactly.
- **Cups to grams** = cups × cup volume (mL) × ingredient density. Densities come from the King Arthur Baking ingredient weight chart and USDA FoodData Central; the US cup is 236.588 mL, the metric cup 250 mL.

## Theme

Colors are defined once in `src/app/globals.css`: `brand-*` (maroon accent), `ink-*` (near-black text and dark surfaces) and Tailwind's `neutral-*` grays. Components only use these tokens, so the palette can be changed in one place.

## Homepage

The homepage has a search bar, category tiles with live counts, a featured pay calculator (`src/calculators/pay-converter`, which uses the same pay math as the salary calculators), how-to steps, formulas, a salary-to-hourly reference chart, and popular calculators. Every number in the formulas and chart is computed from `src/lib/math/pay.ts`.

## Notes

- Cache Components are enabled. Partial Prefetching is disabled so unknown calculator or category slugs return a real HTTP 404 instead of a streamed 200 with `noindex`.
- FAQ content is rendered as HTML only. `FAQPage` structured data is omitted because Google limits FAQ rich results to authoritative government and health sites. Calculator pages use `WebApplication`, plus `BreadcrumbList` and `ItemList` where relevant.
