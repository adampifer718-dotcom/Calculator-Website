/**
 * Standard distribution functions used by the statistics calculators.
 * Accuracy is about 1e-7 relative for the normal distribution and better
 * than 1e-10 for Student's t, which is far beyond display precision.
 */

/** Complementary error function (Numerical Recipes erfcc, |relative error| < 1.2e-7). */
export function erfc(x: number): number {
  const z = Math.abs(x);
  const t = 1 / (1 + 0.5 * z);
  const r =
    t *
    Math.exp(
      -z * z -
        1.26551223 +
        t * (1.00002368 + t * (0.37409196 + t * (0.09678418 + t * (-0.18628806 + t * (0.27886807 + t * (-1.13520398 + t * (1.48851587 + t * (-0.82215223 + t * 0.17087277)))))))),
    );
  return x >= 0 ? r : 2 - r;
}

/** Standard normal cumulative distribution function P(Z ≤ z). */
export function normalCdf(z: number): number {
  return 0.5 * erfc(-z / Math.SQRT2);
}

const A = [-3.969683028665376e1, 2.209460984245205e2, -2.759285104469687e2, 1.38357751867269e2, -3.066479806614716e1, 2.506628277459239];
const B = [-5.447609879822406e1, 1.615858368580409e2, -1.556989798598866e2, 6.680131188771972e1, -1.328068155288572e1];
const C = [-7.784894002430293e-3, -3.223964580411365e-1, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
const D = [7.784695709041462e-3, 3.224671290700398e-1, 2.445134137142996, 3.754408661907416];

/** Inverse standard normal CDF (Acklam's algorithm, relative error < 1.2e-9). Returns NaN outside (0, 1). */
export function normalInv(p: number): number {
  if (!(p > 0 && p < 1)) return Number.NaN;
  const low = 0.02425;
  if (p < low) {
    const q = Math.sqrt(-2 * Math.log(p));
    return (((((C[0] * q + C[1]) * q + C[2]) * q + C[3]) * q + C[4]) * q + C[5]) / ((((D[0] * q + D[1]) * q + D[2]) * q + D[3]) * q + 1);
  }
  if (p > 1 - low) return -normalInv(1 - p);
  const q = p - 0.5;
  const r = q * q;
  return ((((((A[0] * r + A[1]) * r + A[2]) * r + A[3]) * r + A[4]) * r + A[5]) * q) / (((((B[0] * r + B[1]) * r + B[2]) * r + B[3]) * r + B[4]) * r + 1);
}

/** Natural log of the gamma function (Lanczos approximation). */
export function logGamma(x: number): number {
  const cof = [76.18009172947146, -86.50532032941677, 24.01409824083091, -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5];
  let y = x;
  let tmp = x + 5.5;
  tmp -= (x + 0.5) * Math.log(tmp);
  let ser = 1.000000000190015;
  for (const c of cof) ser += c / ++y;
  return -tmp + Math.log((2.5066282746310005 * ser) / x);
}

function betaContinuedFraction(a: number, b: number, x: number): number {
  const maxIterations = 300;
  const eps = 3e-16;
  const tiny = 1e-300;
  const qab = a + b;
  const qap = a + 1;
  const qam = a - 1;
  let c = 1;
  let d = 1 - (qab * x) / qap;
  if (Math.abs(d) < tiny) d = tiny;
  d = 1 / d;
  let h = d;
  for (let m = 1; m <= maxIterations; m++) {
    const m2 = 2 * m;
    let aa = (m * (b - m) * x) / ((qam + m2) * (a + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < tiny) d = tiny;
    c = 1 + aa / c;
    if (Math.abs(c) < tiny) c = tiny;
    d = 1 / d;
    h *= d * c;
    aa = (-(a + m) * (qab + m) * x) / ((a + m2) * (qap + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < tiny) d = tiny;
    c = 1 + aa / c;
    if (Math.abs(c) < tiny) c = tiny;
    d = 1 / d;
    const delta = d * c;
    h *= delta;
    if (Math.abs(delta - 1) < eps) break;
  }
  return h;
}

/** Regularized incomplete beta function I_x(a, b). */
export function incompleteBeta(a: number, b: number, x: number): number {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const front = Math.exp(logGamma(a + b) - logGamma(a) - logGamma(b) + a * Math.log(x) + b * Math.log(1 - x));
  return x < (a + 1) / (a + b + 2) ? (front * betaContinuedFraction(a, b, x)) / a : 1 - (front * betaContinuedFraction(b, a, 1 - x)) / b;
}

/** Student's t cumulative distribution function P(T ≤ t) with `df` degrees of freedom. */
export function tCdf(t: number, df: number): number {
  const tail = 0.5 * incompleteBeta(df / 2, 0.5, df / (df + t * t));
  return t > 0 ? 1 - tail : tail;
}

export type Tail = "two" | "left" | "right";

/** P-value for a test statistic. `cdf` is the distribution's CDF; symmetric distributions only. */
export function pValue(statistic: number, tail: Tail, cdf: (x: number) => number): number {
  if (tail === "left") return cdf(statistic);
  if (tail === "right") return cdf(-statistic);
  return Math.min(1, 2 * cdf(-Math.abs(statistic)));
}
