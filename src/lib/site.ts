/**
 * Production origin used for canonical URLs, the sitemap, robots.txt and
 * structured data. Set NEXT_PUBLIC_SITE_URL (for example
 * https://www.example.com) before building for production. On Vercel the
 * production domain is used automatically when the variable is unset.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl().replace(/\/+$/, "");

export const SITE = {
  name: "CalcNest",
  tagline: "Clear, accurate calculators with the formulas shown",
  description:
    "Free online calculators for salary, pay, percentages and investment returns. Every result runs in your browser and shows the formula and assumptions behind it.",
} as const;

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
