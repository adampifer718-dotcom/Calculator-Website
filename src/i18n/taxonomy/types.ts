import type { CategorySlug, CollectionSlug } from "@/calculators/framework/types";

export interface TaxonomyEntry {
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

/** Translated category and industry collection names, descriptions and metadata. */
export interface TaxonomyText {
  categories: Record<CategorySlug, TaxonomyEntry>;
  collections: Record<CollectionSlug, TaxonomyEntry>;
}
