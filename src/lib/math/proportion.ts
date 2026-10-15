/** Shared helpers for the survey-proportion calculators (sample size and margin of error). */
import { normalInv } from "./stats";

/** Confidence levels offered in the select fields, in percent. */
export const CONFIDENCE_LEVELS = ["80", "90", "95", "98", "99"] as const;

/**
 * Standard normal CDF to near double precision for moderate |z| (≤ about 6), from the
 * all-positive series erf(x) = 2/√π · e^(−x²) · Σ 2ⁿ x^(2n+1) / (1·3·…·(2n+1)).
 */
function preciseNormalCdf(z: number): number {
  const x = Math.abs(z) / Math.SQRT2;
  let term = x;
  let total = x;
  for (let n = 1; n < 200 && term > total * 1e-17; n++) {
    term *= (2 * x * x) / (2 * n + 1);
    total += term;
  }
  const erf = (2 / Math.sqrt(Math.PI)) * Math.exp(-x * x) * total;
  return z >= 0 ? 0.5 + erf / 2 : 0.5 - erf / 2;
}

/**
 * Two-sided critical value z* for a confidence level in percent, e.g. 95 → 1.959963984540054.
 * Acklam's approximation (relative error about 1e-9) is polished with two Newton steps,
 * so the value matches tables to about 15 digits.
 */
export function criticalZ(levelPercent: number): number {
  const p = 1 - (1 - levelPercent / 100) / 2;
  let z = normalInv(p);
  for (let i = 0; i < 2; i++) {
    const density = Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI);
    z -= (preciseNormalCdf(z) - p) / density;
  }
  return z;
}
