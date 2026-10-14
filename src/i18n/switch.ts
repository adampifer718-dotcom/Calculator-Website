import { DEFAULT_LOCALE, LOCALE_COOKIE, type Locale } from "./config";
import { localizePath, stripLocale } from "./paths";

const CALCULATOR_PATH = /^\/calculators\/([^/]+)$/;

/**
 * Where a language link should go from the current page: the same page in
 * the target language when it exists there, otherwise that language's
 * homepage. Query strings (search, filters) are kept on equivalent pages.
 */
export function equivalentPath(
  currentPublicPath: string,
  target: Locale,
  availability: Record<string, readonly Locale[]>,
  search = "",
): { href: string; exists: boolean } {
  const { path } = stripLocale(currentPublicPath || "/");
  const match = CALCULATOR_PATH.exec(path);
  if (match) {
    const locales = availability[match[1]];
    if (!locales || !locales.includes(target)) return { href: localizePath(target, "/"), exists: false };
  }
  return { href: localizePath(target, path) + search, exists: true };
}

/** Remembers a manual language choice for a year. */
export function rememberLocale(locale: Locale): void {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export function rememberedLocale(): Locale | undefined {
  const match = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_COOKIE}=([^;]+)`));
  return (match?.[1] as Locale | undefined) ?? undefined;
}

export { DEFAULT_LOCALE };
