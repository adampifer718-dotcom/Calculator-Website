import type { MetadataRoute } from "next";
import { categoryPath } from "@/calculators/categories";
import { collectionPath } from "@/calculators/collections";
import {
  calculatorLocales,
  calculatorsForLocale,
  categoriesFor,
  categoryLocales,
  collectionLocales,
  collectionsFor,
  inCategory,
  inCollection,
  readyLocales,
} from "@/calculators/localize";
import { CALCULATORS, calculatorPath } from "@/calculators/registry";
import type { Locale } from "@/i18n/config";
import { languageAlternates, localizePath } from "@/i18n/paths";
import { absoluteUrl } from "@/lib/site";

type Entry = MetadataRoute.Sitemap[number];

const latest = (dates: string[]) => dates.reduce((a, b) => (a > b ? a : b));

/** One entry per published page per language, each listing every language version (including itself) plus x-default. */
function entry(locale: Locale, path: string, locales: readonly Locale[], lastModified: string, changeFrequency: Entry["changeFrequency"], priority: number): Entry {
  return {
    url: absoluteUrl(localizePath(locale, path)),
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages: languageAlternates(path, locales) },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = readyLocales();
  const allUpdated = latest(CALCULATORS.map((c) => c.updated));
  return locales.flatMap((locale) => [
    entry(locale, "/", locales, latest(calculatorsForLocale(locale).map((c) => c.def.updated)), "weekly", 1),
    entry(locale, "/calculators", locales, latest(calculatorsForLocale(locale).map((c) => c.def.updated)), "weekly", 0.9),
    ...categoriesFor(locale).map((category) =>
      entry(locale, categoryPath(category.slug), categoryLocales(category.slug), latest(inCategory(locale, category.slug).map((c) => c.def.updated)), "weekly", 0.7),
    ),
    ...collectionsFor(locale).map((collection) =>
      entry(
        locale,
        collectionPath(collection.slug),
        collectionLocales(collection.slug),
        latest(inCollection(locale, collection.slug).map((c) => c.def.updated)),
        "weekly",
        0.6,
      ),
    ),
    ...calculatorsForLocale(locale).map(({ def }) => entry(locale, calculatorPath(def.slug), calculatorLocales(def), def.updated, "monthly", 0.8)),
    entry(locale, "/about", locales, allUpdated, "yearly", 0.3),
  ]);
}
