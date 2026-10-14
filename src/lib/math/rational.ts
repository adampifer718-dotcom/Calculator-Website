/**
 * Exact fractions with BigInt numerators and denominators, so results such
 * as 1/3 + 1/6 = 1/2 are never affected by floating-point rounding.
 */

import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import { normalizeNumberText } from "@/lib/parse";

export interface Fraction {
  num: bigint;
  den: bigint; // always > 0
}

/** Largest numerator or denominator accepted in an input, to keep results readable. */
export const MAX_FRACTION_PART = 10n ** 12n;

function gcd(a: bigint, b: bigint): bigint {
  let x = a < 0n ? -a : a;
  let y = b < 0n ? -b : b;
  while (y) [x, y] = [y, x % y];
  return x;
}

/** Reduces to lowest terms with a positive denominator. Throws for a zero denominator. */
export function fraction(num: bigint, den: bigint): Fraction {
  if (den === 0n) throw new RangeError("zero denominator");
  const sign = den < 0n ? -1n : 1n;
  const divisor = gcd(num, den) || 1n;
  return { num: (sign * num) / divisor, den: (sign * den) / divisor };
}

export type FractionIssue = "invalid" | "zeroDenominator" | "tooLarge";

/**
 * Parses an integer ("3"), a fraction ("3/4", "-3/4"), a mixed number
 * ("1 1/2", "-2 3/8") or a decimal ("0.75", or "0,75" in es/fr/de), which is
 * converted exactly (0.75 = 3/4).
 */
export function parseFraction(raw: string, locale: Locale = DEFAULT_LOCALE): { ok: true; value: Fraction } | { ok: false; issue: FractionIssue } {
  const text = raw.trim().replace(/[−–]/g, "-").replace(/\s*\/\s*/g, "/").replace(/\s+/g, " ");
  const mixed = /^([+-]?)(\d+) (\d+)\/(\d+)$/.exec(text);
  const simple = /^([+-]?\d+)\/([+-]?\d+)$/.exec(text);
  let result: Fraction;
  if (mixed) {
    const [, sign, whole, num, den] = mixed;
    if (BigInt(den) === 0n) return { ok: false, issue: "zeroDenominator" };
    const value = fraction(BigInt(whole) * BigInt(den) + BigInt(num), BigInt(den));
    result = sign === "-" ? { num: -value.num, den: value.den } : value;
  } else if (simple) {
    if (BigInt(simple[2]) === 0n) return { ok: false, issue: "zeroDenominator" };
    result = fraction(BigInt(simple[1]), BigInt(simple[2]));
  } else {
    const decimal = /^([+-]?)(\d*)(?:\.(\d+))?$/.exec(normalizeNumberText(text, locale));
    if (!decimal || (decimal[2] === "" && decimal[3] === undefined)) return { ok: false, issue: "invalid" };
    const [, sign, whole, digits = ""] = decimal;
    const den = 10n ** BigInt(digits.length);
    const value = fraction(BigInt(whole || "0") * den + BigInt(digits || "0"), den);
    result = sign === "-" ? { num: -value.num, den: value.den } : value;
  }
  const abs = (x: bigint) => (x < 0n ? -x : x);
  if (abs(result.num) > MAX_FRACTION_PART || result.den > MAX_FRACTION_PART) return { ok: false, issue: "tooLarge" };
  return { ok: true, value: result };
}

export const add = (a: Fraction, b: Fraction) => fraction(a.num * b.den + b.num * a.den, a.den * b.den);
export const subtract = (a: Fraction, b: Fraction) => fraction(a.num * b.den - b.num * a.den, a.den * b.den);
export const multiply = (a: Fraction, b: Fraction) => fraction(a.num * b.num, a.den * b.den);
/** Throws RangeError when dividing by zero. */
export const divide = (a: Fraction, b: Fraction) => fraction(a.num * b.den, a.den * b.num);

/** "7/12", "-5/2" or "3" for whole numbers. */
export function formatFraction({ num, den }: Fraction): string {
  return den === 1n ? String(num) : `${num}/${den}`;
}

/** Mixed-number form: "2 1/2", "-1 3/4"; whole numbers and proper fractions are unchanged. */
export function formatMixed({ num, den }: Fraction): string {
  const negative = num < 0n;
  const abs = negative ? -num : num;
  const whole = abs / den;
  const rest = abs % den;
  if (whole === 0n || rest === 0n) return formatFraction({ num, den });
  return `${negative ? "-" : ""}${whole} ${rest}/${den}`;
}

export function toNumber({ num, den }: Fraction): number {
  return Number(num) / Number(den);
}
