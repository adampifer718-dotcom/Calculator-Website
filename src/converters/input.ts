import type { Locale } from "@/i18n/config";
import { normalizeNumberText } from "@/lib/parse";

/** Arabic-Indic (U+0660–0669) and Extended Arabic-Indic (U+06F0–06F9) digits to ASCII. */
function asciiDigits(text: string): string {
  return text.replace(/[٠-٩۰-۹]/g, (d) => String((d.charCodeAt(0) & 0xf) % 10));
}

const PLAIN = /^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/;
const FRACTION = /^([+-])?\s*(?:(\d+)\s+)?(\d+)\s*\/\s*(\d+)$/;

/**
 * Parses a converter amount typed in the visitor's notation. Accepts:
 * - locale numbers ("1,234.5" in English, "1.234,5" in German);
 * - scientific notation ("6.02e23", "1,5E-3" in comma-decimal languages);
 * - fractions and mixed numbers ("3/4", "1 1/2", "-2 3/8").
 * Returns null for empty input and NaN for anything else.
 */
export function parseAmount(raw: string, locale: Locale): number | null {
  const text = asciiDigits(raw).replace(/[−–]/g, "-").trim();
  if (text === "") return null;
  const fraction = FRACTION.exec(text);
  if (fraction) {
    const [, sign, whole, num, den] = fraction;
    const d = Number(den);
    if (d === 0) return Number.NaN;
    const v = (whole ? Number(whole) : 0) + Number(num) / d;
    return sign === "-" ? -v : v;
  }
  const normalized = normalizeNumberText(text, locale);
  return PLAIN.test(normalized) ? Number(normalized) : Number.NaN;
}
