/**
 * Production origin used for canonical URLs, hreflang alternates, Open Graph
 * URLs, the sitemap, robots.txt and structured data.
 *
 * Resolution (see resolveSiteUrl):
 * 1. NEXT_PUBLIC_SITE_URL, normalized to a bare origin, when set.
 * 2. Otherwise the intended production domain for every production build,
 *    including Vercel preview builds (so a preview never advertises its own
 *    deployment URL as canonical; previews are also marked noindex).
 * 3. http://localhost:3000 only for local development and tests.
 *
 * The non-www host is canonical; www is redirected to it (next.config.ts).
 */

/** The intended production domain (non-www). */
export const PRODUCTION_ORIGIN = "https://hourlytosalarycalculator.net";

/**
 * Normalizes a configured site URL to a bare origin: scheme and lower-case
 * host only, no path, no trailing or duplicate slashes. Throws for anything
 * that is not an absolute http(s) URL.
 */
export function normalizeOrigin(raw: string): string {
  const url = new URL(raw.trim());
  if (url.protocol !== "https:" && url.protocol !== "http:") throw new Error(`Site URL must use http or https: ${raw}`);
  return url.origin;
}

type Env = Partial<Record<"NEXT_PUBLIC_SITE_URL" | "VERCEL_ENV" | "NODE_ENV", string | undefined>>;

export function resolveSiteUrl(env: Env): string {
  const explicit = env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return normalizeOrigin(explicit);
  if (env.VERCEL_ENV || env.NODE_ENV === "production") return PRODUCTION_ORIGIN;
  return "http://localhost:3000";
}

/**
 * Why an origin must not be used for a production deployment, or undefined
 * when it is fine. Used by next.config.ts to fail Vercel production builds.
 */
export function originProblem(origin: string): string | undefined {
  const host = new URL(origin).hostname;
  if (host === "localhost" || host === "127.0.0.1" || host === "0.0.0.0") return `${origin} is a local address`;
  if (host === "calcnest.example" || host.endsWith(".example")) return `${origin} is a placeholder domain`;
  if (host.endsWith(".vercel.app")) return `${origin} is a Vercel deployment URL, not the production domain`;
  if (origin !== PRODUCTION_ORIGIN) return `${origin} is not the intended production origin ${PRODUCTION_ORIGIN}`;
  return undefined;
}

/**
 * Whether search engines may index this build. Vercel preview and
 * development deployments are not indexable; every other build is.
 */
export function isIndexable(env: Pick<Env, "VERCEL_ENV">): boolean {
  return !env.VERCEL_ENV || env.VERCEL_ENV === "production";
}

// NEXT_PUBLIC_* values are inlined at build time; read them explicitly so the bundler can replace them.
const ENV: Env = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  VERCEL_ENV: process.env.VERCEL_ENV,
  NODE_ENV: process.env.NODE_ENV,
};

export const SITE_URL = resolveSiteUrl(ENV);
export const SITE_INDEXABLE = isIndexable(ENV);

export const SITE = {
  name: "CalcNest",
  tagline: "Clear, accurate calculators with the formulas shown",
  description:
    "Free online calculators for salary, pay, percentages and investment returns. Every result runs in your browser and shows the formula and assumptions behind it.",
} as const;

/** Absolute URL for a site path ("/" maps to the bare origin). */
export function absoluteUrl(path: string): string {
  if (path === "/" || path === "") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
