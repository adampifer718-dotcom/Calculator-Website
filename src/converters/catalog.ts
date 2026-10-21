import { getLocalizedCalculator, readyLocales } from "@/calculators/localize";
import { calculatorPath } from "@/calculators/registry";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";
import { content as ar } from "./content/ar";
import { content as de } from "./content/de";
import { englishContent } from "./content/en";
import { content as es } from "./content/es";
import { content as fr } from "./content/fr";
import { content as it } from "./content/it";
import { content as nl } from "./content/nl";
import { content as pt } from "./content/pt";
import { content as ur } from "./content/ur";
import { ALL_CONVERTERS, getSpec, isLinear } from "./specs";
import type { ConverterContent, ConverterGroup, ConverterMeta, ConverterSpec } from "./types";

/** Translated converter content by locale (English lives with the source metadata). */
const TRANSLATIONS: Partial<Record<Locale, Record<string, ConverterContent>>> = { ur, es, fr, de, ar, it, pt, nl };

export interface LocalizedConverter {
  spec: ConverterSpec;
  locale: Locale;
  content: ConverterContent;
  /** Sources and verification (English metadata; source titles are not translated). */
  meta?: ConverterMeta;
  /** Localized link: the converter page, or the existing calculator page. */
  href: string;
  /** Served by an existing calculator page. */
  existing: boolean;
}

/** Unlocalized path of a converter page. */
export function converterPath(slug: string): string {
  return `/unit-converters/${slug}`;
}

export const CONVERTERS_PATH = "/unit-converters";

/** Unit names of an existing calculator-based converter, read from that calculator's localized text. */
function existingUnitNames(text: unknown): Record<string, string> {
  const t = text as { unitNames?: Record<string, string>; scales?: Record<string, string> };
  return { ...(t.unitNames ?? t.scales ?? {}) };
}

/**
 * A converter in one language, or undefined when it is not (fully) available
 * there. New converters need complete content in that language, including a
 * name for every unit; existing ones follow their calculator page.
 */
export function localizeConverter(spec: ConverterSpec, locale: Locale): LocalizedConverter | undefined {
  if (!readyLocales().includes(locale)) return undefined;
  if (spec.calculatorSlug) {
    const calculator = getLocalizedCalculator(spec.calculatorSlug, locale);
    if (!calculator) return undefined;
    const c = calculator.content;
    return {
      spec,
      locale,
      existing: true,
      href: localizePath(locale, calculatorPath(spec.calculatorSlug)),
      content: {
        title: c.title,
        shortTitle: c.shortTitle,
        summary: c.summary,
        metaTitle: c.metaTitle,
        metaDescription: c.metaDescription,
        keywords: c.keywords,
        intro: c.intro,
        formula: c.formulas[0] ?? { expression: "", explanation: "" },
        assumptions: c.assumptions,
        faqs: c.faqs,
        units: existingUnitNames(calculator.text),
        sourcesUsedFor: c.sourcesUsedFor,
      },
    };
  }
  const english = englishContent[spec.id];
  if (!english) return undefined;
  const content = locale === "en" ? english : TRANSLATIONS[locale]?.[spec.id];
  if (!content) return undefined;
  if (isLinear(spec) && spec.units.some((u) => !content.units[u.id])) return undefined;
  return { spec, locale, existing: false, href: localizePath(locale, converterPath(spec.slug)), content, meta: english };
}

/** Converters available in a language, in directory order. */
export function convertersForLocale(locale: Locale): LocalizedConverter[] {
  return ALL_CONVERTERS.map((spec) => localizeConverter(spec, locale)).filter((c): c is LocalizedConverter => c !== undefined);
}

/** New converters (with their own /unit-converters page) available in a language. */
export function converterPagesForLocale(locale: Locale): LocalizedConverter[] {
  return convertersForLocale(locale).filter((c) => !c.existing);
}

export function getLocalizedConverterBySlug(slug: string, locale: Locale): LocalizedConverter | undefined {
  const spec = ALL_CONVERTERS.find((c) => c.slug === slug && !c.calculatorSlug);
  return spec ? localizeConverter(spec, locale) : undefined;
}

/** Languages in which a converter page exists (for hreflang). */
export function converterLocales(spec: ConverterSpec): Locale[] {
  return readyLocales().filter((locale) => localizeConverter(spec, locale) !== undefined);
}

export function relatedConverters(spec: ConverterSpec, locale: Locale, limit = 4): LocalizedConverter[] {
  const out: LocalizedConverter[] = [];
  const add = (s: ConverterSpec | undefined) => {
    if (!s || s.id === spec.id || out.some((c) => c.spec.id === s.id)) return;
    const localized = localizeConverter(s, locale);
    if (localized) out.push(localized);
  };
  spec.related.forEach((id) => add(getSpec(id)));
  ALL_CONVERTERS.filter((s) => s.group === spec.group).forEach(add);
  return out.slice(0, limit);
}

export function convertersInGroup(locale: Locale, group: ConverterGroup): LocalizedConverter[] {
  return convertersForLocale(locale).filter((c) => c.spec.group === group);
}
