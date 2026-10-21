import { CATEGORIES } from "@/calculators/categories";
import { COLLECTIONS } from "@/calculators/collections";
import type { CategorySlug, CollectionSlug } from "@/calculators/framework/types";
import type { Locale } from "../config";
import type { TaxonomyEntry, TaxonomyText } from "./types";
import ur from "./ur";
import es from "./es";
import fr from "./fr";
import de from "./de";
import ar from "./ar";
import it from "./it";
import nl from "./nl";
import pt from "./pt";

const pick = ({ name, description, metaTitle, metaDescription }: TaxonomyEntry): TaxonomyEntry => ({ name, description, metaTitle, metaDescription });

const en: TaxonomyText = {
  categories: Object.fromEntries(CATEGORIES.map((c) => [c.slug, pick(c)])) as TaxonomyText["categories"],
  collections: Object.fromEntries(COLLECTIONS.map((c) => [c.slug, pick(c)])) as TaxonomyText["collections"],
};

/** Translated taxonomy per locale. English comes from the category and collection definitions. */
export const TAXONOMY: Partial<Record<Locale, TaxonomyText>> = { en, ur, es, fr, de, ar, it, pt, nl };

export function hasTaxonomy(locale: Locale): boolean {
  return TAXONOMY[locale] !== undefined;
}

export function categoryText(locale: Locale, slug: CategorySlug): TaxonomyEntry {
  return (TAXONOMY[locale] ?? en).categories[slug];
}

export function collectionText(locale: Locale, slug: CollectionSlug): TaxonomyEntry {
  return (TAXONOMY[locale] ?? en).collections[slug];
}
