import { categoryPath } from "@/calculators/categories";
import { collectionPath } from "@/calculators/collections";
import type { CategorySlug } from "@/calculators/framework/types";
import { activeCategories, activeCollections, calculatorPath, calculatorsInCategory } from "@/calculators/registry";

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

/** Serializable navigation data for the header menus, derived from published registry records. */
export function navGroups(): NavGroup[] {
  return activeCategories().map((category) => ({
    slug: category.slug,
    name: category.name,
    href: categoryPath(category.slug),
    count: category.count,
    items: calculatorsInCategory(category.slug)
      .map((c, index) => ({ c, index }))
      .sort((a, b) => (a.c.popularRank ?? Infinity) - (b.c.popularRank ?? Infinity) || a.index - b.index)
      .map(({ c }) => ({ title: c.shortTitle, href: calculatorPath(c.slug) })),
  }));
}

export function navCollections(): NavCollection[] {
  return activeCollections().map((c) => ({ name: c.name, href: collectionPath(c.slug), count: c.count }));
}
