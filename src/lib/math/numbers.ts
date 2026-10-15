/** Number notation helpers: significant figures and scientific notation. */

import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import { normalizeNumberText } from "@/lib/parse";

const DECIMAL_TEXT = /^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i;

/**
 * Converts number text typed in a locale to universal notation: removes
 * thousands separators and uses a dot decimal ("1,200" in English or
 * "0,0045" in German), keeping trailing zeros and e-notation.
 */
export function cleanNumberText(text: string, locale: Locale = DEFAULT_LOCALE): string {
  return normalizeNumberText(text, locale);
}

/** True for decimal or e-notation text such as "1,200", "0.0045" or "6.02e23" (or "0,0045" in es/fr/de). */
export function isNumberText(text: string, locale: Locale = DEFAULT_LOCALE): boolean {
  return DECIMAL_TEXT.test(cleanNumberText(text, locale));
}

/**
 * Counts significant figures using the standard rules: non-zero digits and
 * zeros between them count; leading zeros never count; trailing zeros count
 * only when the number has a decimal point. Returns null for invalid text
 * and 0 for zero.
 */
export function countSigFigs(text: string, locale: Locale = DEFAULT_LOCALE): number | null {
  const cleaned = cleanNumberText(text, locale).replace(/^[+-]/, "");
  const match = /^(\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i.exec(cleaned);
  if (!match) return null;
  const mantissa = match[1];
  if (mantissa.includes(".")) {
    const digits = mantissa.replace(".", "").replace(/^0+/, "");
    return digits.length;
  }
  return mantissa.replace(/^0+/, "").replace(/0+$/, "").length;
}

/** Expands e-notation text from toPrecision/toExponential into plain decimal text. */
export function expandExponential(text: string): string {
  const [mantissa, exponentText] = text.toLowerCase().split("e");
  if (exponentText === undefined) return text;
  const negative = mantissa.startsWith("-");
  const unsigned = negative ? mantissa.slice(1) : mantissa;
  const [integer, fraction = ""] = unsigned.split(".");
  const digits = integer + fraction;
  const point = integer.length + Number(exponentText);
  let plain: string;
  if (point <= 0) plain = `0.${"0".repeat(-point)}${digits}`;
  else if (point >= digits.length) plain = digits + "0".repeat(point - digits.length);
  else plain = `${digits.slice(0, point)}.${digits.slice(point)}`;
  return (negative ? "-" : "") + plain;
}

/** Adds thousands separators to plain decimal text. */
export function groupThousands(plain: string): string {
  const [integer, fraction] = plain.split(".");
  const grouped = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return fraction === undefined ? grouped : `${grouped}.${fraction}`;
}

const SUPERSCRIPT: Record<string, string> = { "-": "⁻", "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹" };

export function superscript(n: number): string {
  return String(n)
    .split("")
    .map((ch) => SUPERSCRIPT[ch] ?? ch)
    .join("");
}

export interface ScientificParts {
  mantissa: string;
  exponent: number;
}

/** Splits e-notation text ("1.20e+3") into its mantissa and exponent, keeping trailing zeros. */
export function splitExponential(text: string): ScientificParts {
  const [mantissa, exponent] = text.split("e");
  return { mantissa, exponent: Number(exponent ?? 0) };
}

/** Formats parts as "1.2 × 10³". */
export function formatScientific({ mantissa, exponent }: ScientificParts): string {
  return `${mantissa} × 10${superscript(exponent)}`;
}

/** Rounds to `n` significant figures, returning plain and scientific text that keep significant trailing zeros. */
export function roundToSigFigs(value: number, n: number): { plain: string; scientific: string; value: number } {
  const precise = value.toPrecision(n);
  const exponential = value.toExponential(n - 1);
  return { plain: groupThousands(expandExponential(precise)), scientific: formatScientific(splitExponential(exponential)), value: Number(precise) };
}

/** Scientific, e-notation, engineering and decimal forms of a number, using the shortest exact representation. */
export function notations(value: number): { scientific: string; eNotation: string; engineering: string; decimal: string } {
  if (value === 0) return { scientific: "0 × 10⁰", eNotation: "0e0", engineering: "0 × 10⁰", decimal: "0" };
  const parts = splitExponential(value.toExponential());
  const engineeringExponent = Math.floor(parts.exponent / 3) * 3;
  let engineeringMantissa = Number((Number(parts.mantissa) * 10 ** (parts.exponent - engineeringExponent)).toPrecision(15));
  let engineeringExponentFinal = engineeringExponent;
  // Rounding can push the mantissa to 1000 (999.9999999999999 → 1000 × 10⁰); keep it below 1000.
  if (Math.abs(engineeringMantissa) >= 1000) {
    engineeringMantissa = Number((engineeringMantissa / 1000).toPrecision(15));
    engineeringExponentFinal += 3;
  }
  return {
    scientific: formatScientific(parts),
    eNotation: `${parts.mantissa}e${parts.exponent}`,
    engineering: formatScientific({ mantissa: String(engineeringMantissa), exponent: engineeringExponentFinal }),
    decimal: groupThousands(expandExponential(value.toExponential())),
  };
}

/**
 * Rounds number text (universal notation, e.g. "2.675" or "6.02e23") to `n`
 * significant figures in decimal, rounding halves up (away from zero) as
 * taught in science classes. Works on the typed digits, so "2.675" becomes
 * 2.68 (binary floating point would give 2.67) and long inputs never lose
 * or invent digits. A significant trailing zero in the units place keeps a
 * decimal point ("100." for 99.96 to 3 significant figures).
 */
export function roundDecimalText(text: string, n: number): { plain: string; scientific: string } {
  const match = /^([+-]?)(\d*)(?:\.(\d*))?(?:e([+-]?\d+))?$/i.exec(text.trim());
  if (!match) throw new Error(`Not a number: ${text}`);
  const [, sign, int = "", frac = ""] = match;
  const negative = sign === "-";
  let exponent = Number(match[4] ?? 0) - frac.length;
  let digits = (int + frac).replace(/^0+/, "");
  if (digits === "") return { plain: "0", scientific: "0 × 10⁰" };
  if (digits.length <= n) {
    exponent -= n - digits.length;
    digits = digits.padEnd(n, "0");
  } else {
    const roundUp = digits.charCodeAt(n) >= "5".charCodeAt(0);
    exponent += digits.length - n;
    digits = digits.slice(0, n);
    if (roundUp) {
      const incremented = (BigInt(digits) + 1n).toString();
      if (incremented.length > n) {
        digits = incremented.slice(0, n);
        exponent += 1;
      } else {
        digits = incremented;
      }
    }
  }
  const prefix = negative ? "-" : "";
  const point = digits.length + exponent; // digits before the decimal point
  let plain: string;
  if (exponent >= 0) plain = groupThousands(digits + "0".repeat(exponent)) + (exponent === 0 && digits.endsWith("0") ? "." : "");
  else if (point > 0) plain = groupThousands(`${digits.slice(0, point)}.${digits.slice(point)}`);
  else plain = `0.${"0".repeat(-point)}${digits}`;
  const mantissa = digits.length > 1 ? `${digits[0]}.${digits.slice(1)}` : digits;
  return { plain: prefix + plain, scientific: prefix + formatScientific({ mantissa, exponent: point - 1 }) };
}
