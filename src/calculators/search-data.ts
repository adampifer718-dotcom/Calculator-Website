import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";
import { categoryText } from "@/i18n/taxonomy";
import type { SearchEntry } from "@/lib/search";
import { calculatorsForLocale } from "./localize";
import { calculatorPath } from "./registry";

/**
 * Search entries for a locale: translated titles, summaries and category
 * names, plus the English title and keywords so English search terms work
 * in every language. Links point to the localized pages.
 */
export function searchEntriesFor(locale: Locale): SearchEntry[] {
  return calculatorsForLocale(locale).map(({ def, content }, index) => ({
    slug: def.slug,
    title: content.title,
    summary: content.summary,
    category: categoryText(locale, def.category).name,
    categorySlug: def.category,
    collections: [...def.collections],
    keywords: locale === "en" ? [...def.keywords] : [...content.keywords, def.title, ...def.keywords],
    href: localizePath(locale, calculatorPath(def.slug)),
    popularRank: def.popularRank ?? Number.MAX_SAFE_INTEGER,
    addedOn: def.addedOn,
    order: index,
  }));
}
