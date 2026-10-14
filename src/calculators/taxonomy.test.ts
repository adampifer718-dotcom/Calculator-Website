import { describe, expect, it } from "vitest";
import { CATEGORIES } from "./categories";
import { COLLECTIONS } from "./collections";
import { CATEGORY_SLUGS, COLLECTION_SLUGS } from "./framework/types";
import {
  ALL_CALCULATORS,
  CALCULATORS,
  activeCategories,
  activeCollections,
  calculatorsInCollection,
  featuredCalculators,
  getCalculator,
  recentlyAdded,
} from "./registry";

const unique = (values: readonly string[]) => new Set(values).size === values.length;

describe("taxonomy", () => {
  it("defines every requested category and collection exactly once", () => {
    expect(CATEGORIES.map((c) => c.slug)).toEqual([...CATEGORY_SLUGS]);
    expect(CATEGORIES).toHaveLength(14);
    expect(COLLECTIONS.map((c) => c.slug)).toEqual([...COLLECTION_SLUGS]);
    expect(COLLECTIONS).toHaveLength(15);
    expect(unique([...CATEGORIES, ...COLLECTIONS].map((c) => c.metaTitle))).toBe(true);
    expect(unique([...CATEGORIES, ...COLLECTIONS].map((c) => c.metaDescription))).toBe(true);
  });

  it("only exposes categories and collections that have published calculators, with real counts", () => {
    for (const c of activeCategories()) expect(c.count).toBe(CALCULATORS.filter((calc) => calc.category === c.slug).length);
    for (const c of activeCollections()) expect(c.count).toBe(calculatorsInCollection(c.slug).length);
    expect(activeCategories().every((c) => c.count > 0)).toBe(true);
    expect(activeCollections().every((c) => c.count > 0)).toBe(true);
  });

  it("covers every category and collection with at least one published calculator", () => {
    expect(activeCategories().map((c) => c.slug).sort()).toEqual([...CATEGORY_SLUGS].sort());
    expect(activeCollections().map((c) => c.slug).sort()).toEqual([...COLLECTION_SLUGS].sort());
  });
});

describe("registry records", () => {
  it("has unique ids and slugs across all statuses", () => {
    expect(unique(ALL_CALCULATORS.map((c) => c.id))).toBe(true);
    expect(unique(ALL_CALCULATORS.map((c) => c.slug))).toBe(true);
  });

  it("publishes only records whose status is published", () => {
    expect(CALCULATORS.every((c) => c.status === "published")).toBe(true);
    expect(CALCULATORS).toHaveLength(ALL_CALCULATORS.filter((c) => c.status === "published").length);
    for (const c of ALL_CALCULATORS.filter((calc) => calc.status !== "published")) expect(getCalculator(c.slug)).toBeUndefined();
  });

  it.each(ALL_CALCULATORS.map((c) => [c.id, c] as const))("%s has valid taxonomy and provenance fields", (_id, c) => {
    expect(CATEGORY_SLUGS).toContain(c.category);
    expect(c.collections.length).toBeGreaterThan(0);
    expect(unique(c.collections)).toBe(true);
    for (const slug of c.collections) expect(COLLECTION_SLUGS).toContain(slug);
    expect(c.addedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    for (const source of c.sources) {
      expect(source.title.length).toBeGreaterThan(5);
      expect(source.publisher.length).toBeGreaterThan(2);
      expect(source.usedFor.length).toBeGreaterThan(5);
      if (source.url) expect(source.url).toMatch(/^https:\/\//);
    }
  });

  it.each(ALL_CALCULATORS.filter((c) => c.expertReview).map((c) => [c.id, c] as const))(
    "%s is review-flagged, cites sources and states it is not professional advice",
    (_id, c) => {
      expect(c.sources.length).toBeGreaterThan(0);
      expect(c.assumptions.join(" ")).toMatch(/not (medical|financial|investment|tax|legal)?\s*(or [a-z]+ )?advice|not a prescription|not medical/i);
    },
  );

  it("orders recently added newest first and features curated tools", () => {
    const recent = recentlyAdded(3);
    expect(recent[0]).toBe(CALCULATORS.at(-1));
    expect(featuredCalculators().every((c) => c.featured)).toBe(true);
  });
});
