import { categoryPath } from "@/calculators/categories";
import { collectionPath } from "@/calculators/collections";
import type { CategorySlug } from "@/calculators/framework/types";
import { calculatorsForLocale } from "@/calculators/localize";
import { calculatorPath } from "@/calculators/registry";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";
import { CATEGORIES } from "@/calculators/categories";
import { COLLECTIONS } from "@/calculators/collections";
import { categoryText, collectionText } from "@/i18n/taxonomy";

export interface NavGroup {
  slug: CategorySlug;
  name: string;
  href: string;
  count: number;
  /** Calculators in the category, most popular first. */
  items: { title: string; href: string }[];
}

export interface NavCollection {
  name: string;
  href: string;
  count: number;
}

/** Categories with calculators available in the locale, with translated names and localized links. */
export function navGroups(locale: Locale): NavGroup[] {
  const available = calculatorsForLocale(locale);
  return CATEGORIES.map((category) => {
    const items = available
      .map((c, index) => ({ c, index }))
      .filter(({ c }) => c.def.category === category.slug)
      .sort((a, b) => (a.c.def.popularRank ?? Infinity) - (b.c.def.popularRank ?? Infinity) || a.index - b.index)
      .map(({ c }) => ({ title: c.content.shortTitle, href: localizePath(locale, calculatorPath(c.def.slug)) }));
    return { slug: category.slug, name: categoryText(locale, category.slug).name, href: localizePath(locale, categoryPath(category.slug)), count: items.length, items };
  }).filter((group) => group.count > 0);
}

export function navCollections(locale: Locale): NavCollection[] {
  const available = calculatorsForLocale(locale);
  return COLLECTIONS.map((collection) => ({
    name: collectionText(locale, collection.slug).name,
    href: localizePath(locale, collectionPath(collection.slug)),
    count: available.filter((c) => c.def.collections.includes(collection.slug)).length,
  })).filter((c) => c.count > 0);
}
