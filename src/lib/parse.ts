import { DEFAULT_LOCALE, LOCALE_INFO, type Locale } from "@/i18n/config";

/** Locales whose number format uses a comma as the decimal separator. */
const COMMA_DECIMAL = new Set<Locale>(["es", "fr", "de", "it", "pt", "nl"]);

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
// A leading zero never starts a thousands group, so "0.025" stays a decimal.
const DOT_GROUPS = /^[-+]?[1-9]\d{0,2}(\.\d{3})+$/;

/**
 * Parses a number typed in the given locale. Returns null for empty input
 * and NaN for anything that is not a number.
 *
 * - English, Urdu and Arabic: "." is the decimal separator and "," groups
 *   thousands ("52,000.50"). Arabic-Indic digits are accepted.
 * - Spanish, French, German, Italian, Portuguese and Dutch: "," is the decimal separator; "." and
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

/**
 * Lower-cases a title for use mid-sentence ("How to use the tip calculator"),
 * keeping acronyms such as ROI or BMI and leaving German nouns capitalized.
 */
export function midSentence(text: string, locale: Locale): string {
  if (locale === "de") return text;
  return text
    .split(/(\s+)/)
    .map((word) => (/^\p{Lu}[\p{Lu}\d-]+$/u.test(word) ? word : word.toLocaleLowerCase(LOCALE_INFO[locale].intl)))
    .join("");
}

const GROUPING_SPACES = /[\s  _'’]/g;

/**
 * Normalizes number text typed in a locale into universal notation (dot
 * decimal, no grouping) while keeping everything that matters for
 * significant figures: trailing zeros, a trailing decimal point and
 * e-notation. Returns the text unchanged (and therefore invalid) when it
 * cannot be read unambiguously.
 *
 * - en, ur, ar: "1,234.50" → "1234.50"; Arabic-Indic digits are accepted.
 * - es, fr, de: "1.234,50" → "1234.50", "0,004050" → "0.004050",
 *   "1200," → "1200.". A dot is a decimal point unless it clearly groups
 *   thousands ("60.000"), as in parseLocaleNumber.
 */
export function normalizeNumberText(raw: string, locale: Locale = DEFAULT_LOCALE): string {
  const text = asciiDigits(raw.trim()).replace(GROUPING_SPACES, "");
  const [mantissa, ...exponent] = text.split(/(?=[eE])/);
  const tail = exponent.join("");
  if (!COMMA_DECIMAL.has(locale)) return mantissa.replace(/,/g, "") + tail;
  const commas = (mantissa.match(/,/g) ?? []).length;
  if (commas > 1) return text;
  if (commas === 1) return mantissa.replace(/\./g, "").replace(",", ".") + tail;
  return (DOT_GROUPS.test(mantissa) ? mantissa.replace(/\./g, "") : mantissa) + tail;
}

/**
 * Splits a typed list of numbers into tokens. Semicolons, whitespace and new
 * lines always separate values. In en, ur and ar a comma also separates; in
 * es, fr and de a comma between digits is a decimal mark ("1,5; 2,5" or
 * "1,5 2,5"), while ", " (comma then space) still separates values.
 */
export function splitNumberList(text: string, locale: Locale = DEFAULT_LOCALE): string[] {
  const separators = COMMA_DECIMAL.has(locale) ? /[;\s]+|,(?=\s|$)/ : /[,;\s]+/;
  return asciiDigits(text)
    .split(separators)
    .map((token) => token.trim())
    .filter(Boolean)
    .map((token) => normalizeNumberText(token, locale));
}
