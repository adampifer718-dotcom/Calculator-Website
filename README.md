# CalcNest

Free online calculators built with Next.js (App Router), React, TypeScript and Tailwind CSS. Every calculator page is statically generated, has its own URL, metadata, canonical URL and structured data, and runs its calculation in the browser.

## Platform overview

- **42 published calculators** across all **14 categories** (Biology, Chemistry, Construction, Conversion, Ecology, Everyday Life, Finance, Food, Health, Math, Physics, Sports, Statistics, Other) and **15 industry collections**.
- Every calculator has one canonical page at `/calculators/<slug>`. It has one primary category (breadcrumb and category page) and can appear in several collections at `/collections/<slug>` without duplicate pages.
- Category and collection pages, counts, navigation, homepage sections, search, related links and the sitemap are all derived from published registry records. Categories or collections with no published calculator get no page.
- The master backlog (`src/calculators/backlog.ts`, rendered to [`docs/calculator-backlog.md`](docs/calculator-backlog.md)) holds 183 deduplicated concepts with status, priority scores and expert-review flags.

Pages: `/` (search, categories, featured, popular, collections, recently added, pay converter, full directory), `/calculators` (search with category/industry filters and sorting, URL state), `/categories/<slug>`, `/collections/<slug>`, `/calculators/<slug>`, `/about`, `/sitemap.xml`, `/robots.txt`, `/search-index.json` (static autocomplete index, loaded on demand).

## Getting started

```bash
npm install
npm run dev            # http://localhost:3000
```

Set the production origin before building, otherwise canonical URLs, the sitemap and JSON-LD use `http://localhost:3000` (the build prints a warning). On Vercel the production domain is used automatically.

```bash
NEXT_PUBLIC_SITE_URL=https://www.example.com npm run build
npm start
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run lint` | ESLint |
| `npm run typecheck` | Generates route types and runs `tsc --noEmit` |
| `npm test` | Vitest unit tests (math, formatting, framework, engines, registry integrity) |
| `npm run build` | Production build |
| `npm run test:e2e` | Playwright tests against `next start` (run `npm run build` first) on desktop and mobile viewports: every sitemap URL, internal links, metadata uniqueness, 404s, calculator inputs/results/validation, navigation, horizontal overflow and axe accessibility checks |

## Project structure

```
src/
  app/                       Routes: home, directory, categories, calculator pages, about, sitemap, robots
  calculators/
    framework/               Typed engine/content types, input parsing, validation, evaluation, formatting
    shared/pay.ts            Fields and helpers shared by the pay calculators
    <calculator>/engine.ts   Inputs, validation and compute function (pure, browser-safe)
    <calculator>/index.ts    Page content: metadata, intro, formulas, worked examples, FAQs, related links
    <calculator>/widget.tsx  Client entry that renders the shared form for the engine
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

## Research and sources

- The backlog was assembled from general knowledge of common calculator topics. Omni Calculator's public directory was meant to be the research reference, but this build environment's network policy blocked `omnicalculator.com`; re-check coverage against it when network access allows. No text, layout or code was copied from it.
- Sources are cited as publications with URLs (NIST, OpenStax, WHO, U.S. EIA, peer-reviewed papers). The same network restriction meant links could not be fetched during development, so formulas were verified with independent calculations in tests rather than live lookups; check the links before launch.
- BMI, BMR, loan payment and compound interest are flagged for expert review (medical or financial) and have not yet been reviewed by a professional.

## Calculation rules

- **Pay conversions** annualize gross pay. Annual, monthly, semi-monthly and biweekly use 1, 12, 24 and 26 periods per year. Weekly, daily and hourly use the entered weeks per year, workdays per week and hours per week. Hourly equivalent = annualized pay ÷ (hours per week × weeks per year). Results are gross pay, not take-home pay. No taxes are estimated.
- **Currency** selection changes formatting only. There is no exchange-rate conversion.
- **Rounding** happens only when values are displayed (`src/lib/format.ts`), never in intermediate steps.
- **Percentage change** divides by the absolute original value. An original value of 0 is rejected.
- **ROI** = (returned − invested) ÷ invested. Annualized ROI = (returned ÷ invested)^(1 ÷ years) − 1.

## Theme

Colors are defined once in `src/app/globals.css`: `brand-*` (maroon accent), `ink-*` (near-black text and dark surfaces) and Tailwind's `neutral-*` grays. Components only use these tokens, so the palette can be changed in one place.

## Homepage

The homepage has a search bar, category tiles with live counts, a featured pay calculator (`src/calculators/pay-converter`, which uses the same pay math as the salary calculators), how-to steps, formulas, a salary-to-hourly reference chart, and popular calculators. Every number in the formulas and chart is computed from `src/lib/math/pay.ts`.

## Notes

- Cache Components are enabled. Partial Prefetching is disabled so unknown calculator or category slugs return a real HTTP 404 instead of a streamed 200 with `noindex`.
- FAQ content is rendered as HTML only. `FAQPage` structured data is omitted because Google limits FAQ rich results to authoritative government and health sites. Calculator pages use `WebApplication`, plus `BreadcrumbList` and `ItemList` where relevant.
