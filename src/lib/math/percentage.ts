/** Percentage helpers. Inputs and outputs are in percent units (25 means 25%). */

/** P% of V. */
export function percentOf(percent: number, value: number): number {
  return (percent / 100) * value;
}

/** What percent `part` is of `whole`. Returns null when `whole` is 0. */
export function percentageOfWhole(part: number, whole: number): number | null {
  if (whole === 0) return null;
  return (part / whole) * 100;
}

/** The whole when `part` is `percent`% of it. Returns null when `percent` is 0. */
export function wholeFromPercent(part: number, percent: number): number | null {
  if (percent === 0) return null;
  return (part * 100) / percent;
}

/**
 * Percentage change from `original` to `next`, measured against the
 * absolute size of the original value. Returns null when `original` is 0
 * because a change from zero has no defined percentage.
 */
export function percentChange(original: number, next: number): number | null {
  if (original === 0) return null;
  return ((next - original) / Math.abs(original)) * 100;
}
