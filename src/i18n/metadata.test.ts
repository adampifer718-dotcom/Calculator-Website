import { describe, expect, it } from "vitest";
import { calculatorsForLocale, categoriesFor, collectionsFor, readyLocales } from "@/calculators/localize";

/*
 * Editorial guidance for search snippets: titles up to about 60 characters,
 * descriptions about 70–160. Not a ranking rule, but it keeps titles from
 * being cut off and descriptions informative. Homepage titles include the
 * site name and are checked in the page tests instead.
 */
const TITLE_MAX = 60;
const DESCRIPTION = [70, 160] as const;

function problems(entries: { id: string; title: string; description: string }[]): string[] {
  return entries.flatMap(({ id, title, description }) => [
    ...(title.length > TITLE_MAX ? [`${id}: title ${title.length} "${title}"`] : []),
    ...(description.length < DESCRIPTION[0] || description.length > DESCRIPTION[1] ? [`${id}: description ${description.length}`] : []),
  ]);
}

describe("page metadata in every language", () => {
  for (const locale of readyLocales()) {
    it(`${locale}: calculator, category and collection titles and descriptions fit search snippets`, () => {
      const entries = [
        ...calculatorsForLocale(locale).map((c) => ({ id: c.def.slug, title: c.content.metaTitle, description: c.content.metaDescription })),
        ...categoriesFor(locale).map((c) => ({ id: `category ${c.slug}`, title: c.metaTitle, description: c.metaDescription })),
        ...collectionsFor(locale).map((c) => ({ id: `collection ${c.slug}`, title: c.metaTitle, description: c.metaDescription })),
      ];
      expect(problems(entries)).toEqual([]);
    });

    it(`${locale}: titles and descriptions are unique within the language`, () => {
      const all = [
        ...calculatorsForLocale(locale).map((c) => [c.content.metaTitle, c.content.metaDescription]),
        ...categoriesFor(locale).map((c) => [c.metaTitle, c.metaDescription]),
        ...collectionsFor(locale).map((c) => [c.metaTitle, c.metaDescription]),
      ];
      expect(new Set(all.map(([t]) => t)).size).toBe(all.length);
      expect(new Set(all.map(([, d]) => d)).size).toBe(all.length);
    });
  }
});
