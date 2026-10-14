import { DEFAULT_LOCALE, LOCALES, type Locale } from "./config";
import { absoluteUrl } from "@/lib/site";

/** Public path for a locale: "/calculators" in English, "/es/calculators" in Spanish. */
export function localizePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

/** Removes a locale prefix from a public path. */
export function stripLocale(path: string): { locale: Locale; path: string } {
  const [, first, ...rest] = path.split("/");
  const locale = LOCALES.find((l) => l !== DEFAULT_LOCALE && l === first);
  if (!locale) return { locale: DEFAULT_LOCALE, path: path || "/" };
  const remainder = `/${rest.join("/")}`;
  return { locale, path: remainder === "/" ? "/" : remainder.replace(/\/$/, "") };
}

/**
 * hreflang alternates for a page that exists in `locales`, with x-default
 * pointing to English. Values are absolute URLs.
 */
export function languageAlternates(path: string, locales: readonly Locale[]): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) languages[locale] = absoluteUrl(localizePath(locale, path));
  if (locales.includes(DEFAULT_LOCALE)) languages["x-default"] = absoluteUrl(localizePath(DEFAULT_LOCALE, path));
  return languages;
}
