/** Exact integer helpers for the GCF and LCM calculator. */

/** Greatest common divisor of two non-negative safe integers (Euclid's algorithm). */
export function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) [x, y] = [y, x % y];
  return x;
}

/** Least common multiple of positive integers, exact for any size. */
export function lcmBig(values: readonly number[]): bigint {
  let result = 1n;
  for (const v of values) {
    const n = BigInt(v);
    let x = result;
    let y = n;
    while (y !== 0n) [x, y] = [y, x % y];
    result = (result / x) * n;
  }
  return result;
}

/** Prime factorization by trial division as [prime, exponent] pairs. Fast for n ≤ 1e12 (at most 10⁶ trial divisors). */
export function primeFactors(n: number): [number, number][] {
  const factors: [number, number][] = [];
  let rest = n;
  const take = (p: number) => {
    let e = 0;
    while (rest % p === 0) {
      rest /= p;
      e++;
    }
    if (e > 0) factors.push([p, e]);
  };
  take(2);
  take(3);
  for (let p = 5; p * p <= rest; p += 6) {
    take(p);
    take(p + 2);
  }
  if (rest > 1) factors.push([rest, 1]);
  return factors;
}

/** Writes a bigint with "," every three digits; pass the result to Formatter.numberText for other locales. */
export function groupDigits(n: bigint): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
