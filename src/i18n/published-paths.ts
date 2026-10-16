import { categoryPath } from "@/calculators/categories";
import { collectionPath } from "@/calculators/collections";
import { calculatorsForLocale, categoriesFor, collectionsFor, readyLocales } from "@/calculators/localize";
import { calculatorPath } from "@/calculators/registry";
import { CONVERTERS_PATH, converterPagesForLocale, converterPath } from "@/converters/catalog";
import { localizePath } from "./paths";

/** Unlocalized page paths that exist in every published language. */
const FIXED_PATHS = ["/", "/calculators", CONVERTERS_PATH, "/about"] as const;

/**
 * Every public page path that exists, per language: "/", "/es/calculators",
 * "/ar/calculators/tip-calculator" and so on. The proxy answers anything else
 * with the localized 404 page.
 */
export function publishedPaths(): Set<string> {
  const paths = new Set<string>();
  for (const locale of readyLocales()) {
    const add = (path: string) => paths.add(localizePath(locale, path));
    FIXED_PATHS.forEach(add);
    calculatorsForLocale(locale).forEach((c) => add(calculatorPath(c.def.slug)));
    categoriesFor(locale).forEach((c) => add(categoryPath(c.slug)));
    collectionsFor(locale).forEach((c) => add(collectionPath(c.slug)));
    converterPagesForLocale(locale).forEach((c) => add(converterPath(c.spec.slug)));
  }
  return paths;
}

/** Path segment of the localized 404 page; the proxy rewrites unknown URLs to it with status 404. */
export const NOT_FOUND_SEGMENT = "page-not-found";
