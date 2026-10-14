import { categoryPath } from "@/calculators/categories";
import type { CategorySlug } from "@/calculators/framework/types";
import { activeCategories, calculatorPath, calculatorsInCategory } from "@/calculators/registry";

export interface NavGroup {
  slug: CategorySlug;
  name: string;
  href: string;
  count: number;
  items: { title: string; href: string }[];
}

/** Serializable navigation data for the header menus, derived from the registry. */
export function navGroups(): NavGroup[] {
  return activeCategories().map((category) => ({
    slug: category.slug,
    name: category.name,
    href: categoryPath(category.slug),
    count: category.count,
    items: calculatorsInCategory(category.slug).map((c) => ({ title: c.title, href: calculatorPath(c.slug) })),
  }));
}
