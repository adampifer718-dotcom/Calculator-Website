import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import { usesCommaDecimal } from "@/lib/parse";

const DENOMINATORS = [2, 3, 4, 8] as const;

/**
 * Formats a kitchen quantity as a whole number plus a common fraction when
 * one is within 1% (e.g. 1.5 → "1 1/2", 0.333 → "1/3"), otherwise with up
 * to two decimals.
 */
export function formatKitchenQuantity(value: number, locale: Locale = DEFAULT_LOCALE): string {
  if (value <= 0) return "0";
  const whole = Math.floor(value + 1e-9);
  const fraction = value - whole;
  if (fraction < 0.005) return String(whole);
  if (fraction > 0.995) return String(whole + 1);
  for (const d of DENOMINATORS) {
    const n = Math.round(fraction * d);
    if (n > 0 && n < d && Math.abs(fraction - n / d) <= 0.01) {
      return whole > 0 ? `${whole} ${n}/${d}` : `${n}/${d}`;
    }
  }
  const text = String(Number(value.toFixed(2)));
  return usesCommaDecimal(locale) ? text.replace(".", ",") : text;
}

const UNICODE_FRACTIONS: Record<string, number> = { "½": 0.5, "⅓": 1 / 3, "⅔": 2 / 3, "¼": 0.25, "¾": 0.75, "⅛": 0.125, "⅜": 0.375, "⅝": 0.625, "⅞": 0.875 };

const UNICODE = "½⅓⅔¼¾⅛⅜⅝⅞";
/** Leading quantity; `decimal` is the decimal mark(s) accepted ("." or "[.,]"). */
const quantityPattern = (decimal: string, marks: string) =>
  new RegExp(`^(?:(\\d+)\\s+(\\d+)/(\\d+)|(\\d+)/(\\d+)|(\\d+(?:${decimal}\\d+)?)\\s*([${UNICODE}])?|([${UNICODE}]))(?=\\s|$|[^\\d/${marks}])`);
const QUANTITY = quantityPattern("\\.", ".");
const QUANTITY_COMMA = quantityPattern("[.,]", ".,");

/**
 * Splits a recipe line into a leading quantity and the rest. Supports
 * "2", "1.5", "1/2", "1 1/2", "1½" and "½" (and "1,5" in es, fr and de). Returns a null quantity when
 * the line does not start with a number.
 */
export function parseRecipeLine(line: string, locale: Locale = DEFAULT_LOCALE): { quantity: number | null; rest: string } {
  const text = line.trim();
  const match = (usesCommaDecimal(locale) ? QUANTITY_COMMA : QUANTITY).exec(text);
  if (!match) return { quantity: null, rest: text };
  const [token, mixedWhole, mixedNum, mixedDen, num, den, decimal, attached, unicodeOnly] = match;
  let quantity: number;
  if (mixedWhole !== undefined) {
    if (Number(mixedDen) === 0) return { quantity: null, rest: text };
    quantity = Number(mixedWhole) + Number(mixedNum) / Number(mixedDen);
  } else if (num !== undefined) {
    if (Number(den) === 0) return { quantity: null, rest: text };
    quantity = Number(num) / Number(den);
  } else if (decimal !== undefined) {
    quantity = Number(decimal.replace(",", ".")) + (attached ? UNICODE_FRACTIONS[attached] : 0);
  } else {
    quantity = UNICODE_FRACTIONS[unicodeOnly];
  }
  return { quantity, rest: text.slice(token.length).trim() };
}
