import { DEFAULT_LOCALE, LOCALE_INFO, type Locale } from "@/i18n/config";

/** Locales whose number format uses a comma as the decimal separator. */
const COMMA_DECIMAL = new Set<Locale>(["es", "fr", "de"]);

export function usesCommaDecimal(locale: Locale): boolean {
  return COMMA_DECIMAL.has(locale);
}

const EASTERN_DIGITS = /[٠-٩۰-۹]/g;

/** Converts Arabic-Indic and Persian/Urdu digits and separators to ASCII. */
function asciiDigits(text: string): string {
  return text
    .replace(EASTERN_DIGITS, (d) => String((d.charCodeAt(0) - (d >= "۰" ? 0x06f0 : 0x0660)) % 10))
    .replace(/٫/g, ".")
    .replace(/٬/g, ",");
}

const NUMBER_PATTERN = /^[-+]?(\d+\.?\d*|\.\d+)$/;
const DOT_GROUPS = /^[-+]?\d{1,3}(\.\d{3})+$/;

/**
 * Parses a number typed in the given locale. Returns null for empty input
 * and NaN for anything that is not a number.
 *
 * - English, Urdu and Arabic: "." is the decimal separator and "," groups
 *   thousands ("52,000.50"). Arabic-Indic digits are accepted.
 * - Spanish, French and German: "," is the decimal separator; "." and
 *   spaces group thousands ("52.000,50"). A lone "." is treated as a
 *   decimal point unless it clearly groups thousands ("60.000").
 */
export function parseLocaleNumber(raw: string, locale: Locale = DEFAULT_LOCALE): number | null {
  let text = asciiDigits(raw.trim())
    .replace(/^[$€£¥₹₩]|^(US\$|CA\$|A\$|R\$|HK\$|NT\$|MX\$|CN¥|Rs|PKR)/, "")
    .replace(/[\s  _'’]/g, "");
  if (text === "") return null;
  if (COMMA_DECIMAL.has(locale)) {
    if (text.includes(",")) {
      if ((text.match(/,/g) ?? []).length > 1) return Number.NaN;
      text = text.replace(/\./g, "").replace(",", ".");
    } else if (DOT_GROUPS.test(text)) {
      text = text.replace(/\./g, "");
    }
  } else {
    text = text.replace(/,/g, "");
  }
  if (!NUMBER_PATTERN.test(text)) return Number.NaN;
  return Number(text);
}

/** Writes a number the way a visitor would type it in the locale (no grouping). */
export function formatInputValue(value: number, locale: Locale = DEFAULT_LOCALE): string {
  const text = String(value);
  return COMMA_DECIMAL.has(locale) ? text.replace(".", ",") : text;
}

/** Example number for validation messages, e.g. "1250.50" or "1250,50". */
export function exampleNumber(locale: Locale): string {
  return COMMA_DECIMAL.has(locale) ? "1250,50" : "1250.50";
}

export function directionOf(locale: Locale): "ltr" | "rtl" {
  return LOCALE_INFO[locale].dir;
}
