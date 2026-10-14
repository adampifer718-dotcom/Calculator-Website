# CalcNest

Free online calculators built with Next.js (App Router), React, TypeScript and Tailwind CSS. Every calculator page is statically generated, has its own URL, metadata, canonical URL and structured data, and runs its calculation in the browser.

## Published calculators

22 calculators in 7 categories, each at `/calculators/<slug>`:

| Category | Calculators |
| --- | --- |
| Salary & Pay | Salary to Hourly, Hourly to Salary |
| Finance | ROI, Sales Tax, Compound Interest |
| Math | Percentage, Percentage Increase, Log, Significant Figures, Scientific Notation, Exponent, Square Root, Circumference, Slope, Pythagorean Theorem |
| Statistics | P-value, Confidence Interval |
| Construction | Square Footage |
| Everyday Life | Test Grade, Tip, Discount |
| Health | BMI |

The registry (`src/calculators/registry.ts`) is the source of truth; the navigation menu, directory, category pages, homepage tiles, counts and sitemap are generated from it.

Other pages: `/` (home, with a featured pay converter), `/calculators` (searchable directory, `?q=` supported), `/categories/[slug]`, `/about`, `/sitemap.xml`, `/robots.txt`.

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

## Adding a calculator

1. Put the math in `src/lib/math/` with unit tests.
2. Create `src/calculators/<name>/engine.ts` using `defineEngine<Values>()`: fields (number or select, with bounds and help text), optional cross-field `validate`, and `compute` returning a primary result, optional secondary results, table and notes.
3. Create `widget.tsx` (three lines, copy an existing one) and `index.ts` with the page content. Each worked example declares `expectedPrimary`, which the registry tests check against the engine.
4. Add the definition to `CALCULATORS` in `registry.ts` and its widget to `widgets.tsx`.

The directory, category pages, counts, related links, footer, sitemap and static params all update automatically. Tests fail if slugs, titles or meta descriptions are duplicated, related links point to missing calculators, a widget is missing, or an example result is wrong. Only register a calculator once it is fully implemented.

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
