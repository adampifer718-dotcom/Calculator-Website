# Translation completeness report

Generated from the code by `npm run i18n:report` and checked by `src/i18n/report.test.ts`, so it cannot drift from what the site publishes.
A language is published only when its interface, shared calculator strings, category and collection names and homepage pay converter are all translated.
A calculator page exists in a language only when its full content and engine strings are translated; otherwise the language selector sends visitors to that language's homepage and the page is not in the sitemap.

## Languages

| Language | Interface | Calculator strings | Categories & collections | Pay converter | Published | Calculators |
| --- | --- | --- | --- | --- | --- | --- |
| English (English, `en`) | ✅ | ✅ | ✅ | ✅ | ✅ | 42 / 42 |
| Urdu (اردو, `ur`) | ✅ | ✅ | ✅ | ✅ | ✅ | 39 / 42 |
| Spanish (Español, `es`) | ✅ | ✅ | ✅ | ✅ | ✅ | 42 / 42 |
| French (Français, `fr`) | ✅ | ✅ | ✅ | ✅ | ✅ | 34 / 42 |
| German (Deutsch, `de`) | ✅ | ✅ | ✅ | ✅ | ✅ | 41 / 42 |
| Arabic (العربية, `ar`) | ✅ | ✅ | ✅ | ✅ | ✅ | 34 / 42 |

Published languages: `en`, `ur`, `es`, `fr`, `de`, `ar`.

## Calculators

| Calculator | `ur` | `es` | `fr` | `de` | `ar` |
| --- | --- | --- | --- | --- | --- |
| BMI Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| BMR Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Break-Even Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Circumference Calculator | ✅ | ✅ | — | ✅ | — |
| Compound Interest Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Confidence Interval Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Dilution Calculator (C₁V₁ = C₂V₂) | ✅ | ✅ | ✅ | ✅ | ✅ |
| Discount Calculator | — | ✅ | — | — | — |
| Doubling Time Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Electricity Cost Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Exponent Calculator | — | ✅ | — | ✅ | ✅ |
| Fuel Cost Calculator | ✅ | ✅ | ✅ | ✅ | — |
| Hourly to Salary Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Kinetic Energy Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Length Converter | ✅ | ✅ | ✅ | ✅ | ✅ |
| Loan Payment Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Log Calculator (Logarithm) | ✅ | ✅ | — | ✅ | ✅ |
| Mean, Median and Mode Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Molarity Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Ohm's Law Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| P-value Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Percentage Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Percentage Increase Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Profit Margin Calculator | ✅ | ✅ | ✅ | ✅ | — |
| Pythagorean Theorem Calculator | — | ✅ | — | ✅ | — |
| Rainwater Harvesting Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Recipe Scaler | ✅ | ✅ | ✅ | ✅ | ✅ |
| ROI Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Running Pace Calculator | ✅ | ✅ | ✅ | ✅ | — |
| Salary to Hourly Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Sales Tax Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Scientific Notation Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Significant Figures Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Slope Calculator | ✅ | ✅ | — | ✅ | — |
| Speed, Distance and Time Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Square Footage Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Square Root Calculator | ✅ | ✅ | — | ✅ | ✅ |
| Standard Deviation Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Temperature Converter | ✅ | ✅ | ✅ | ✅ | ✅ |
| Test Grade Calculator | ✅ | ✅ | ✅ | ✅ | ✅ |
| Tip Calculator | ✅ | ✅ | — | ✅ | — |
| Weight Converter | ✅ | ✅ | ✅ | ✅ | ✅ |

## Untranslated pages

- `ur`: Exponent Calculator
- `ur`: Pythagorean Theorem Calculator
- `ur`: Discount Calculator
- `fr`: Log Calculator (Logarithm)
- `fr`: Exponent Calculator
- `fr`: Square Root Calculator
- `fr`: Circumference Calculator
- `fr`: Slope Calculator
- `fr`: Pythagorean Theorem Calculator
- `fr`: Tip Calculator
- `fr`: Discount Calculator
- `de`: Discount Calculator
- `ar`: Circumference Calculator
- `ar`: Slope Calculator
- `ar`: Pythagorean Theorem Calculator
- `ar`: Tip Calculator
- `ar`: Discount Calculator
- `ar`: Running Pace Calculator
- `ar`: Profit Margin Calculator
- `ar`: Fuel Cost Calculator

Calculators in the backlog (`docs/calculator-backlog.md`) are not published in any language yet, so they have no translated pages.
