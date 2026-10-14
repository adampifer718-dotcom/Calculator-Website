import { CATEGORIES } from "./categories";
import { COLLECTIONS } from "./collections";
import type { Category, CategorySlug, Collection, CollectionSlug } from "./framework/types";
import { categoryText, collectionText } from "@/i18n/taxonomy";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/i18n/config";
import { hasTaxonomy } from "@/i18n/taxonomy";
import { MESSAGE_LOCALES } from "@/i18n/messages";
import { engineContext, hasCommonText } from "./framework/i18n";
import type { AnyEngine, CalculatorContent, CalculatorDefinition } from "./framework/types";
import { PAY_CONVERTER_TEXT } from "./pay-converter/translations";
import { CALCULATORS, getCalculator } from "./registry";

/** A calculator resolved for one language. */
export interface LocalizedCalculator {
  def: CalculatorDefinition;
  locale: Locale;
  content: CalculatorContent;
  /** Engine strings for the locale (serializable, passed to the interactive form). */
  text: unknown;
  engine: AnyEngine;
}

export function englishContent(def: CalculatorDefinition): CalculatorContent {
  return {
    title: def.title,
    shortTitle: def.shortTitle,
    summary: def.summary,
    metaTitle: def.metaTitle,
    metaDescription: def.metaDescription,
    keywords: def.keywords,
    intro: def.intro,
    howToUse: def.howToUse,
    formulas: def.formulas,
    examples: def.examples.map(({ title, steps }) => ({ title, steps })),
    assumptions: def.assumptions,
    faqs: def.faqs,
    sourcesUsedFor: def.sources.map((s) => s.usedFor),
  };
}

/** True when the site chrome (interface, taxonomy, shared calculator strings) exists for the locale. */
export function isLocaleReady(locale: Locale): boolean {
  return MESSAGE_LOCALES.includes(locale) && hasCommonText(locale) && hasTaxonomy(locale) && PAY_CONVERTER_TEXT[locale] !== undefined;
}

/** Whether a complete translation of the calculator exists in the locale. */
export function isCalculatorAvailable(def: CalculatorDefinition, locale: Locale): boolean {
  if (locale === DEFAULT_LOCALE) return true;
  return isLocaleReady(locale) && def.translations[locale as Exclude<Locale, "en">] !== undefined;
}

/** Content, strings and engine for a calculator in a locale, or undefined when not translated. */
export function localizeCalculator(def: CalculatorDefinition, locale: Locale): LocalizedCalculator | undefined {
  if (locale === DEFAULT_LOCALE) return { def, locale, content: englishContent(def), text: def.text, engine: def.engine };
  if (!isCalculatorAvailable(def, locale)) return undefined;
  const translation = def.translations[locale as Exclude<Locale, "en">]!;
  return { def, locale, content: translation.content, text: translation.text, engine: def.makeEngine(engineContext(locale, translation.text as never)) };
}

export function getLocalizedCalculator(slug: string, locale: Locale): LocalizedCalculator | undefined {
  const def = getCalculator(slug);
  return def ? localizeCalculator(def, locale) : undefined;
}

/** Published calculators available in a locale, in registry order. */
export function calculatorsForLocale(locale: Locale): LocalizedCalculator[] {
  return CALCULATORS.map((def) => localizeCalculator(def, locale)).filter((c): c is LocalizedCalculator => c !== undefined);
}

/** Locales in which a calculator page exists. */
export function calculatorLocales(def: CalculatorDefinition): Locale[] {
  return LOCALES.filter((locale) => isCalculatorAvailable(def, locale));
}

/** Locales whose site chrome is ready (homepage, directory, taxonomy pages exist). */
export function readyLocales(): Locale[] {
  return LOCALES.filter((locale) => locale === DEFAULT_LOCALE || isLocaleReady(locale));
}

/* ------------------------------------------------------------------ */
/* Locale-aware views of the registry for public pages.               */
/* ------------------------------------------------------------------ */


export type LocalizedCategory = Category & { count: number };
export type LocalizedCollection = Collection & { count: number };

/** Categories with at least one calculator available in the locale, with translated text and real counts. */
export function categoriesFor(locale: Locale): LocalizedCategory[] {
  const available = calculatorsForLocale(locale);
  return CATEGORIES.map((category) => ({
    ...category,
    ...categoryText(locale, category.slug),
    count: available.filter((c) => c.def.category === category.slug).length,
  })).filter((c) => c.count > 0);
}

export function collectionsFor(locale: Locale): LocalizedCollection[] {
  const available = calculatorsForLocale(locale);
  return COLLECTIONS.map((collection) => ({
    ...collection,
    ...collectionText(locale, collection.slug),
    count: available.filter((c) => c.def.collections.includes(collection.slug)).length,
  })).filter((c) => c.count > 0);
}

export function inCategory(locale: Locale, slug: CategorySlug): LocalizedCalculator[] {
  return calculatorsForLocale(locale).filter((c) => c.def.category === slug);
}

export function inCollection(locale: Locale, slug: CollectionSlug): LocalizedCalculator[] {
  return calculatorsForLocale(locale).filter((c) => c.def.collections.includes(slug));
}

export function popularFor(locale: Locale, limit = 6): LocalizedCalculator[] {
  return calculatorsForLocale(locale)
    .filter((c) => c.def.popularRank !== undefined)
    .sort((a, b) => (a.def.popularRank ?? 0) - (b.def.popularRank ?? 0))
    .slice(0, limit);
}

export function featuredFor(locale: Locale, limit = 6): LocalizedCalculator[] {
  return calculatorsForLocale(locale)
    .filter((c) => c.def.featured)
    .slice(0, limit);
}

/** Newest first by publication date; for the same date, later registry entries count as newer. */
export function recentFor(locale: Locale, limit = 6): LocalizedCalculator[] {
  return calculatorsForLocale(locale)
    .map((calculator, index) => ({ calculator, index }))
    .sort((a, b) => (a.calculator.def.addedOn === b.calculator.def.addedOn ? b.index - a.index : a.calculator.def.addedOn < b.calculator.def.addedOn ? 1 : -1))
    .slice(0, limit)
    .map(({ calculator }) => calculator);
}

/** Related calculators available in the locale: explicit links, then same category, shared collections, then the rest. */
export function relatedFor(calculator: CalculatorDefinition, locale: Locale, limit = 4): LocalizedCalculator[] {
  const available = calculatorsForLocale(locale);
  const result: LocalizedCalculator[] = [];
  const add = (candidate: LocalizedCalculator | undefined) => {
    if (candidate && candidate.def.slug !== calculator.slug && !result.some((r) => r.def.slug === candidate.def.slug)) result.push(candidate);
  };
  calculator.related.forEach((slug) => add(available.find((c) => c.def.slug === slug)));
  available.filter((c) => c.def.category === calculator.category).forEach(add);
  available.filter((c) => c.def.collections.some((slug) => calculator.collections.includes(slug))).forEach(add);
  available.forEach(add);
  return result.slice(0, limit);
}

/** Locales in which a category page exists (ready locale with at least one translated calculator in it). */
export function categoryLocales(slug: CategorySlug): Locale[] {
  return readyLocales().filter((locale) => inCategory(locale, slug).length > 0);
}

export function collectionLocales(slug: CollectionSlug): Locale[] {
  return readyLocales().filter((locale) => inCollection(locale, slug).length > 0);
}

export function findCategoryFor(locale: Locale, slug: string): LocalizedCategory | undefined {
  return categoriesFor(locale).find((c) => c.slug === slug);
}

export function findCollectionFor(locale: Locale, slug: string): LocalizedCollection | undefined {
  return collectionsFor(locale).find((c) => c.slug === slug);
}
