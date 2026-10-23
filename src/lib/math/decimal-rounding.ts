/**
 * Exact decimal arithmetic on typed number text, for rounding and ratios.
 * A decimal is coefficient × 10^exponent with a BigInt coefficient, so
 * "1.005" is exactly 1005 × 10⁻³ and never becomes a binary float.
 */

export interface ExactDecimal {
  coef: bigint;
  exp: number;
}

export const ROUNDING_METHODS = ["halfUp", "halfEven", "halfDown", "ceiling", "floor", "truncate"] as const;
export type RoundingMethod = (typeof ROUNDING_METHODS)[number];

/** Longest digit string and largest exponent accepted, so results stay readable. */
export const MAX_DIGITS = 40;
export const MAX_EXPONENT = 40;

/**
 * Parses universal-notation text ("-12.50", ".5", "6.02e23") into an exact
 * decimal. Returns null for anything else, or when it has more than
 * MAX_DIGITS significant digits or an exponent beyond ±MAX_EXPONENT.
 */
export function parseExactDecimal(text: string): ExactDecimal | null {
  const match = /^([+-]?)(\d*)(?:\.(\d*))?(?:e([+-]?\d+))?$/i.exec(text.trim());
  if (!match) return null;
  const [, sign, int = "", frac = ""] = match;
  if (int === "" && frac === "") return null;
  const digits = (int + frac).replace(/^0+/, "");
  if (digits.length > MAX_DIGITS) return null;
  const e = Number(match[4] ?? 0);
  if (!Number.isFinite(e) || Math.abs(e) > MAX_EXPONENT) return null;
  const coef = BigInt(digits === "" ? "0" : digits) * (sign === "-" ? -1n : 1n);
  return normalize({ coef, exp: e - frac.length });
}

/** Removes trailing zeros from the coefficient (1500 × 10⁻³ → 15 × 10⁻¹). Zero becomes 0 × 10⁰. */
export function normalize(d: ExactDecimal): ExactDecimal {
  if (d.coef === 0n) return { coef: 0n, exp: 0 };
  let { coef, exp } = d;
  while (coef % 10n === 0n) {
    coef /= 10n;
    exp += 1;
  }
  return { coef, exp };
}

const pow10 = (n: number) => 10n ** BigInt(n);

/** Rewrites a decimal with a smaller (or equal) exponent. */
export function rescale(d: ExactDecimal, exp: number): bigint {
  return d.coef * pow10(d.exp - exp);
}

/** Exact difference a − b. */
export function subtract(a: ExactDecimal, b: ExactDecimal): ExactDecimal {
  const exp = Math.min(a.exp, b.exp);
  return { coef: rescale(a, exp) - rescale(b, exp), exp };
}

/** Number of decimal places needed to write the decimal exactly (0 for whole numbers). */
export function decimalPlaces(d: ExactDecimal): number {
  return Math.max(0, -normalize(d).exp);
}

/**
 * Rounds `value` to a multiple of the positive `step` with the chosen method.
 * halfUp and halfDown send ties away from and toward zero, halfEven to the
 * even multiple; ceiling and floor go toward +∞ and −∞; truncate drops the
 * remainder (toward zero).
 */
export function roundToStep(value: ExactDecimal, step: ExactDecimal, method: RoundingMethod): ExactDecimal {
  if (step.coef <= 0n) throw new Error("step must be positive");
  const exp = Math.min(value.exp, step.exp);
  const n = rescale(value, exp);
  const q = rescale(step, exp);
  const negative = n < 0n;
  const abs = negative ? -n : n;
  let k = abs / q;
  const rem = abs % q;
  if (rem !== 0n) {
    const twice = 2n * rem;
    let up: boolean;
    switch (method) {
      case "halfUp":
        up = twice >= q;
        break;
      case "halfDown":
        up = twice > q;
        break;
      case "halfEven":
        up = twice > q || (twice === q && k % 2n === 1n);
        break;
      case "ceiling":
        up = !negative;
        break;
      case "floor":
        up = negative;
        break;
      case "truncate":
        up = false;
        break;
    }
    if (up) k += 1n;
  }
  return { coef: (negative ? -k : k) * q, exp };
}

/** The multiples of `step` just below and above `value` (equal when value is a multiple). */
export function neighbours(value: ExactDecimal, step: ExactDecimal): { lower: ExactDecimal; upper: ExactDecimal } {
  return { lower: roundToStep(value, step, "floor"), upper: roundToStep(value, step, "ceiling") };
}

/**
 * Plain decimal text with "," thousands separators and exactly `places`
 * decimals (padding with zeros, never rounding: pass a value that fits).
 * Negative zero is written as "0". Pass the result to Formatter.numberText.
 */
export function formatExactDecimal(d: ExactDecimal, places = decimalPlaces(d), signed = false): string {
  const target = Math.min(d.exp, -places);
  let coef = rescale(d, target);
  const scale = -target;
  const negative = coef < 0n;
  if (negative) coef = -coef;
  let digits = coef.toString().padStart(scale + 1, "0");
  let int = scale > 0 ? digits.slice(0, digits.length - scale) : digits;
  let frac = scale > 0 ? digits.slice(digits.length - scale) : "";
  if (frac.length > places) frac = frac.replace(/0+$/, "").padEnd(places, "0");
  int = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  digits = frac ? `${int}.${frac}` : int;
  const sign = coef === 0n ? "" : negative ? "-" : signed ? "+" : "";
  return sign + digits;
}
