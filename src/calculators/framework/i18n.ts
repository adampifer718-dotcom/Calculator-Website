import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import calcEn, { type CalcCommonText } from "@/i18n/calc/en";
import { CALC_COMMON } from "@/i18n/calc";
import { getFormatter, type Formatter } from "@/lib/format";

/** Everything an engine factory needs to produce localized fields and results. */
export interface EngineContext<T> {
  locale: Locale;
  fmt: Formatter;
  /** Shared calculator strings for the locale. */
  common: CalcCommonText;
  /** This calculator's own strings for the locale. */
  text: T;
}

/** Fills {placeholders} in a template. Unknown placeholders are left as-is. */
export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in vars ? String(vars[key]) : match));
}

export function commonText(locale: Locale): CalcCommonText {
  return CALC_COMMON[locale] ?? calcEn;
}

export function hasCommonText(locale: Locale): boolean {
  return CALC_COMMON[locale] !== undefined;
}

export function engineContext<T>(locale: Locale, text: T): EngineContext<T> {
  return { locale, fmt: getFormatter(locale), common: commonText(locale), text };
}

/** English context, used for the default engine instances exported for tests. */
export function englishContext<T>(text: T): EngineContext<T> {
  return engineContext(DEFAULT_LOCALE, text);
}
