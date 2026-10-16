# HourlyToSalaryCalculator.net design system

Redesign of 16 October 2026.

## References
- **Layout reference:** the "BDCalc" Pinterest pin, supplied as a screenshot because pin.it and pinterest.com could not be reached from the build environment. It sets the composition:
  - a solid coloured header bar;
  - a split hero, with a kicker, a three-line headline, a benefit checklist and a primary call to action on the left, and a panel of popular-tool tiles plus an embedded salary calculator on the right;
  - a round "free / no sign-up" badge overlapping the panel;
  - a "calculators for every need" category row with dividers;
  - a coloured trust band above the footer.
- **Colour reference:** the "soft pastel UI" pin (cream, peach, blush, powder blue and sky).
  - The screenshot was not available as a file, so the base colours were estimated by eye: powder blue ≈ `#A9BFD8`, peach ≈ `#E8A48E`, blush ≈ `#F7E6E4`, sky ≈ `#CDE8F1`, butter ≈ `#F4D58A`, cream ≈ `#FAF7F3`.
  - Pastels alone are too soft for text and controls. To keep the interface crisp, every interactive and text colour is a deepened shade of the same hues. Contrast ratios are measured against white.

No proprietary assets, logos or text from either reference are used. The wordmark and icons are original.

## Colour tokens (`src/app/globals.css`)
| Role | Token | Value | Contrast on white |
| --- | --- | --- | --- |
| Primary (buttons, links) | `brand-600` | `#3F6496` | 6.0:1 |
| Primary hover / link text | `brand-700` | `#35588A` | 7.2:1 |
| Header, footer, trust band | `brand-800` / `brand-900` | `#2C4A75` / `#22395C` | 9.0 / 11.6:1 |
| Primary tint (selected, hover) | `brand-50`–`200` | `#F3F6FB` … `#CCDAEC` | — |
| Powder blue (illustration) | `brand-300` | `#A9BFD8` | — |
| Secondary / accent (peach → coral) | `accent-400` / `accent-600` | `#E8A48E` / `#C2654C` | fills only |
| Accent text | `accent-700` | `#A84A33` | 5.7:1 |
| Blush, sky, butter tints | `blush`, `sky`, `butter` | `#F7E6E4`, `#CDE8F1`, `#F4D58A` | fills only |
| Background (page) | `cream` | `#FAF7F3` | — |
| Surface (cards, inputs) | `white` | `#FFFFFF` | — |
| Border | `line` / `neutral-200` | `#ECE5DC` / `#E3E6EC` | — |
| Text | `ink-900` | `#1E2433` | 14.5:1 on cream |
| Muted text | `neutral-600` | `#545C6D` | 6.9:1 |
| Success | `success` | `#2E7D5B` on `#E3F3EA` | 5.0:1 |
| Warning | `warning` | `#9A5B00` on `#FDF1DA` | 5.4:1 |
| Error | `danger` | `#C2353F` on `#FCE8E9` | 5.4:1 |

## Typography
- Plus Jakarta Sans for Latin text (400–800). Noto Naskh Arabic for Urdu and Arabic.
- Headlines: weight 800, tracking −0.03em, line height 1.02 (hero) or 1.15 (pages).
- Body: 16 px, line height 1.65. Labels: 14 px semibold. Overlines: 12 px, uppercase, tracking 0.08em.

## Shape, spacing and depth
- Radii:
  - 28 px: hero panels;
  - 20 px: cards;
  - 14 px: inputs and tiles;
  - full: pills and buttons.
- Spacing scale: 4 px base. Sections are 56–80 px apart, and cards have 20–24 px padding.
- Shadow `shadow-soft`: `0 1px 2px rgb(30 36 51 / .04), 0 12px 32px -16px rgb(30 36 51 / .18)`.
- Hover: lift by 2 px, soften the border to `brand-200`, 150 ms ease-out. Animation is disabled under `prefers-reduced-motion`.
- Focus: a 2 px `brand-600` outline with a 2 px offset on every interactive element.

## Components
- **Header:** a solid `brand-800` bar with the white wordmark, the categories mega menu, links, search and the language selector. On mobile, the menu button and a compact language selector.
- **Wordmark:** a clock-dial mark with a coral hand (hourly), next to "HourlyToSalary" in bold and "Calculator.net" in regular. It is always written left to right, including on RTL pages. It shortens to the mark plus a two-line name below 400 px.
- **Inputs:** white, 1 px `neutral-300` border, 14 px radius, 48 px tall. Focus shows a `brand-600` ring. Errors show a `danger` border and message, and the field gets `aria-invalid`.
- **Segmented selects:** a `brand-600` pill for the selected option on a `brand-50` track.
- **Result panel:** the primary result in large `brand-800` text on a powder-blue tint card. Secondary results sit in a 2-column tile grid. Tables have zebra rows and a highlighted current row.
- **Calculator tiles:** an icon on a per-category pastel tile (peach, powder, blush, sky, butter or mint) with a dark glyph.

## Pages
- **Home:** BDCalc composition, described above.
- **Calculator pages:** the header area has the breadcrumbs, title and collection pills on cream. Next comes the calculator (inputs card and result card side by side on large screens, stacked on mobile with the sticky result bar). Below it is the content column with an "On this page" sidebar.
- **Directory, category and collection pages:** the same header band, tile cards and filters.
