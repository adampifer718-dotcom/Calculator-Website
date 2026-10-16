import type { ConverterEntry } from "@/components/converters/ConverterSearch";
import type { UniversalOption } from "@/components/converters/UniversalConverter";
import type { Locale } from "@/i18n/config";
import { midSentence } from "@/lib/parse";
import { convertersForLocale, localizeConverter, type LocalizedConverter } from "./catalog";
import { isLinear } from "./specs";

/** Search terms: unit names and symbols, keywords, plus the English title and unit names so English terms work in every language. */
function terms(converter: LocalizedConverter): string[] {
  const { spec, content, locale } = converter;
  const out = [...content.keywords, ...Object.values(content.units)];
  if (isLinear(spec)) out.push(...spec.units.map((u) => u.symbol).filter(Boolean));
  if (locale !== "en") {
    const english = localizeConverter(spec, "en");
    if (english) out.push(english.content.title, ...Object.values(english.content.units), ...english.content.keywords);
  }
  return [...new Set(out)];
}

export function converterEntries(locale: Locale): ConverterEntry[] {
  return convertersForLocale(locale).map((c) => ({
    id: c.spec.id,
    group: c.spec.group,
    title: c.content.title,
    summary: c.content.summary,
    href: c.href,
    terms: terms(c),
  }));
}

/** Every converter, for the quick converter on the directory page. */
export function universalOptions(locale: Locale): UniversalOption[] {
  return convertersForLocale(locale).map((c) => ({
    id: c.spec.id,
    group: c.spec.group,
    title: c.content.title,
    shortTitle: midSentence(c.content.shortTitle, locale),
    href: c.href,
    labels: { names: c.content.units, paramLabels: c.content.paramLabels },
  }));
}
