/**
 * Set NEXT_PUBLIC_SITE_URL to the production origin (for example
 * https://www.example.com). It is used for canonical URLs, the sitemap,
 * robots.txt and structured data.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/+$/, "");

export const SITE = {
  name: "CalcNest",
  tagline: "Clear, accurate calculators with the formulas shown",
  description:
    "Free online calculators for salary, pay, percentages and investment returns. Every result runs in your browser and shows the formula and assumptions behind it.",
} as const;

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
