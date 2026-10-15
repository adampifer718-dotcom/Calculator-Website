import { describe, expect, it } from "vitest";
import { defaultRawValues, evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import { engineContext } from "./framework/i18n";
import type { AnyEngine, CalculatorDefinition, EngineValues, ResultValue } from "./framework/types";
import { quadratic } from "./quadratic";
import { solveQuadratic } from "./quadratic/engine";
import { gcfLcm } from "./gcf-lcm";
import { makeGcfLcmEngine } from "./gcf-lcm/engine";
import gcfText from "./gcf-lcm/text/en";
import { percentError } from "./percent-error";
import { zScore } from "./z-score";
import { weightedAverage } from "./weighted-average";
import { makeWeightedAverageEngine } from "./weighted-average/engine";
import weightedText from "./weighted-average/text/en";
import { gcd, lcmBig, primeFactors } from "@/lib/math/integers";

const DEFINITIONS: CalculatorDefinition[] = [quadratic, gcfLcm, percentError, zScore, weightedAverage];

const run = (engine: AnyEngine, values: EngineValues) => evaluate(engine, rawFromValues(engine, values));
const ok = (engine: AnyEngine, values: EngineValues) => {
  const result = run(engine, values);
  if (!result.ok) throw new Error(JSON.stringify(result.errors));
  return result.result;
};
const errors = (engine: AnyEngine, values: EngineValues) => {
  const result = run(engine, values);
  return result.ok ? {} : result.errors;
};
const num = (value: ResultValue) => (value.kind === "currency" ? value.amount : value.kind === "number" || value.kind === "percent" ? value.value : Number.NaN);
const text = (value: ResultValue) => formatResultValue(value, "USD");
const item = (result: ReturnType<typeof ok>, label: string) => {
  const found = result.secondary?.find((s) => s.label === label);
  if (!found) throw new Error(`missing ${label}`);
  return found.value;
};

describe("batch 4 group A: definitions", () => {
  it.each(DEFINITIONS.map((d) => [d.id, d] as const))("%s has valid content and working examples", (_, d) => {
    expect(d.metaTitle.length).toBeLessThanOrEqual(59);
    expect(d.metaDescription.length).toBeGreaterThanOrEqual(70);
    expect(d.metaDescription.length).toBeLessThanOrEqual(160);
    expect(d.examples.length).toBeGreaterThanOrEqual(2);
    expect(d.examples.length).toBeLessThanOrEqual(3);
    expect(d.faqs).toHaveLength(3);
    expect(d.related.length).toBeGreaterThanOrEqual(2);
    expect(d.related.length).toBeLessThanOrEqual(4);
    expect(d.addedOn).toBe("2026-10-15");
    expect(d.updated).toBe("2026-10-15");
    expect(defaultRawValues(d.engine)).toBeTruthy();
    expect(evaluate(d.engine, defaultRawValues(d.engine)).ok).toBe(true);
    for (const example of d.examples) {
      const value = ok(d.engine, example.inputs).primary.value;
      if (typeof example.expectedPrimary === "string") expect(text(value)).toBe(example.expectedPrimary);
      else expect(num(value)).toBeCloseTo(example.expectedPrimary, 9);
    }
  });
});

describe("quadratic equation calculator", () => {
  const e = quadratic.engine;
  it("matches python reference roots", () => {
    // python: cmath roots of 2x²−8 → (2, −2)
    expect(text(ok(e, { a: 2, b: 0, c: -8 }).primary.value)).toBe("x₁ = 2, x₂ = -2");
    // python: −x²+2x+3 → (3, −1), vertex (1, 4)
    const r = ok(e, { a: -1, b: 2, c: 3 });
    expect(text(r.primary.value)).toBe("x₁ = 3, x₂ = -1");
    expect(text(item(r, "Vertex (h, k)"))).toBe("(1, 4)");
    expect(r.notes).toContain("The parabola opens downward, so the vertex is its highest point.");
    // python: 0.5x²+2 → ±2j
    expect(text(ok(e, { a: 0.5, b: 0, c: 2 }).primary.value)).toBe("x = ±2i");
  });

  it("is numerically stable and handles b = 0 and c = 0", () => {
    // python: product of roots c/a = 1, so the small root of x² − 1e8x + 1 is 1/1e8 = 1e-08 (the naive formula gives 7.45e-09)
    const s = solveQuadratic(1, -1e8, 1);
    expect(s.roots.kind).toBe("real");
    if (s.roots.kind === "real") {
      expect(s.roots.x1).toBe(1e8);
      expect(s.roots.x2).toBeCloseTo(1e-8, 20);
      expect(Math.abs(s.roots.x2 - 1e-8) / 1e-8).toBeLessThan(1e-12);
    }
    expect(text(ok(e, { a: 1, b: -1e8, c: 1 }).primary.value)).toBe("x₁ = 100,000,000, x₂ = 1 × 10⁻⁸");
    // python: 5x² + 3x → (0, −0.6); no "-0"
    const r = ok(e, { a: 5, b: 3, c: 0 });
    expect(text(r.primary.value)).toBe("x₁ = 0, x₂ = -0.6");
    expect(text(item(r, "Product of the roots (c/a)"))).toBe("0");
    expect(text(ok(e, { a: 3, b: 0, c: 0 }).primary.value)).toBe("x = 0 (double root)");
    expect(text(item(ok(e, { a: 2, b: 0, c: -8 }), "Axis of symmetry"))).toBe("x = 0");
  });

  it("reports the discriminant and its meaning", () => {
    const r = ok(e, { a: 1, b: -2, c: 10 });
    expect(text(item(r, "Discriminant (b² − 4ac)"))).toBe("-36");
    expect(text(item(r, "What the discriminant means"))).toMatch(/^Negative/);
    expect(text(item(ok(e, { a: 4, b: 12, c: 9 }), "What the discriminant means"))).toMatch(/^Zero/);
    expect(text(item(ok(e, { a: 3, b: -7, c: -6 }), "Sum of the roots (−b/a)"))).toBe("2.333333333");
  });

  it("rejects a = 0 and non-numbers", () => {
    expect(errors(e, { a: 0, b: 2, c: 1 }).a).toMatch(/cannot be 0/);
    expect(errors(e, { a: "x" as unknown as number })).toHaveProperty("a");
  });
});

describe("GCF and LCM calculator", () => {
  const e = gcfLcm.engine;
  it("matches python references", () => {
    // python: math.gcd(600851475143, 6857*71) = 486847
    const r = ok(e, { numbers: "600851475143, 486847" });
    expect(num(r.primary.value)).toBe(486847);
    expect(r.tables![0].rows[0].cells[0]).toEqual({ kind: "text", text: "71 × 839 × 1,471 × 6,857" });
    // python: math.lcm(*range(1, 21)) = 232792560
    expect(text(item(ok(e, { numbers: Array.from({ length: 20 }, (_, i) => i + 1).join(" ") }), "Least common multiple (LCM)"))).toBe("232,792,560");
    // python: f'{math.lcm(999999999989, 999999999959, 999999999937):,}'
    const big = ok(e, { numbers: "999999999989, 999999999959, 999999999937" });
    expect(text(item(big, "Least common multiple (LCM)"))).toBe("999,999,999,885,000,000,003,726,999,999,971,587");
    expect(num(item(big, "Digits in the LCM"))).toBe(36);
    // python: f'{math.lcm(2**39, 3**25):,}'
    expect(text(item(ok(e, { numbers: `${2 ** 39} ${3 ** 25}` }), "Least common multiple (LCM)"))).toBe("465,801,839,082,368,227,344,384");
  });

  it("helpers are exact", () => {
    expect(gcd(48, 180)).toBe(12);
    expect(lcmBig([4, 6, 10])).toBe(60n);
    expect(primeFactors(360)).toEqual([[2, 3], [3, 2], [5, 1]]);
    expect(primeFactors(999999999989)).toEqual([[999999999989, 1]]);
  });

  it("formats factorizations, primes, 1 and coprime notes", () => {
    const r = ok(e, { numbers: "1, 13, 72, 72" });
    expect(r.tables![0].rows.map((row) => text(row.cells[0]))).toEqual(["1 (no prime factors)", "13 (prime)", "2³ × 3²"]);
    expect(num(r.primary.value)).toBe(1);
    expect(r.notes?.[0]).toMatch(/coprime/);
  });

  it("reads lists in the visitor's locale", () => {
    const de = makeGcfLcmEngine(engineContext("de", gcfText));
    const r = evaluate(de, { numbers: "1200; 1800" });
    expect(r.ok).toBe(true);
    if (r.ok) expect(num(r.result.primary.value)).toBe(600);
  });

  it("rejects decimals, zero, negatives, huge values and bad counts", () => {
    expect(errors(e, { numbers: "12, 4.5" }).numbers).toMatch(/not a whole number/);
    expect(errors(e, { numbers: "12, 0" }).numbers).toMatch(/not positive/);
    expect(errors(e, { numbers: "12, -6" }).numbers).toMatch(/not positive/);
    expect(errors(e, { numbers: "12, 2000000000000" }).numbers).toMatch(/too large/);
    expect(errors(e, { numbers: "12" }).numbers).toBe("Enter at least two numbers.");
    expect(errors(e, { numbers: "" }).numbers).toBeDefined();
    expect(errors(e, { numbers: Array.from({ length: 21 }, (_, i) => i + 1).join(",") }).numbers).toBe("Enter at most 20 numbers.");
    expect(errors(e, { numbers: "12, abc" }).numbers).toMatch(/not a number/);
  });
});

describe("percent error calculator", () => {
  const e = percentError.engine;
  it("matches python references", () => {
    // python: abs(0.45-0.5)/0.5*100 = 9.999999999999998
    expect(num(ok(e, { measured: 0.45, trueValue: 0.5 }).primary.value)).toBeCloseTo(10, 9);
    // python: abs(105-100)/100*100 = 5.0
    const over = ok(e, { measured: 105, trueValue: 100 });
    expect(num(over.primary.value)).toBeCloseTo(5, 12);
    expect(text(item(over, "Signed relative error"))).toBe("+5%");
    expect(text(item(over, "Direction"))).toMatch(/above/);
    // python: (98.2-100)/100*100 = -1.7999999999999972
    const under = ok(e, { measured: 98.2, trueValue: 100 });
    expect(num(item(under, "Signed relative error"))).toBeCloseTo(-1.8, 9);
    expect(text(item(under, "Absolute error |measured − true|"))).toBe("1.8");
    expect(text(item(under, "Direction"))).toMatch(/below/);
  });

  it("handles exact matches and negative true values", () => {
    const exact = ok(e, { measured: 7, trueValue: 7 });
    expect(num(exact.primary.value)).toBe(0);
    expect(text(item(exact, "Direction"))).toMatch(/equals/);
    const neg = ok(e, { measured: -0.7, trueValue: -0.76 });
    expect(text(item(neg, "Direction"))).toMatch(/above/);
    expect(num(item(neg, "Signed relative error"))).toBeGreaterThan(0);
  });

  it("rejects a zero true value", () => {
    expect(errors(e, { measured: 1, trueValue: 0 }).trueValue).toMatch(/cannot be 0/);
    expect(errors(e, { measured: null, trueValue: 1 })).toHaveProperty("measured");
  });
});

describe("z-score calculator", () => {
  const e = zScore.engine;
  it("matches python references (statistics.NormalDist)", () => {
    // python: z = (130-100)/15 = 2.0; N.cdf(2) = 0.9772498680518208; 2*N.cdf(-2) = 0.04550026389635842
    const r = ok(e, { x: 130, mean: 100, sd: 15 });
    expect(num(r.primary.value)).toBeCloseTo(2, 12);
    expect(num(item(r, "Percentile, P(X < x)"))).toBeCloseTo(97.72498680518208, 4);
    expect(text(item(r, "P(X > x)"))).toBe("0.0227501");
    expect(text(item(r, "Two-tailed P(|Z| > |z|)"))).toBe("0.0455003");
    expect(text(item(r, "Position"))).toBe("2 standard deviations above the mean");
    // python: N.cdf(-3.2) = 0.0006871379379158604
    const low = ok(e, { x: -3.2, mean: 0, sd: 1 });
    expect(num(item(low, "Percentile, P(X < x)"))).toBeCloseTo(0.06871379379158604, 6);
    expect(text(item(low, "Position"))).toBe("3.2 standard deviations below the mean");
    expect(low.notes).toHaveLength(2);
    // python: z = 0 → 0.5, 0.5, 1.0
    const mid = ok(e, { x: 0, mean: 0, sd: 1 });
    expect(text(item(mid, "Two-tailed P(|Z| > |z|)"))).toBe("1");
    expect(text(item(mid, "Position"))).toBe("Exactly at the mean");
  });

  it("keeps precision in far tails and never shows NaN", () => {
    // python: N.cdf(-20) ≈ 2.7536e-89
    const far = ok(e, { x: 50, mean: 10, sd: 2 });
    expect(num(far.primary.value)).toBe(20);
    expect(text(item(far, "P(X > x)"))).toMatch(/× 10⁻/);
    expect(text(item(far, "Percentile, P(X < x)"))).toBe("100%");
  });

  it("rejects a non-positive standard deviation", () => {
    expect(errors(e, { sd: 0 })).toHaveProperty("sd");
    expect(errors(e, { sd: -2 })).toHaveProperty("sd");
  });
});

describe("weighted average calculator", () => {
  const e = weightedAverage.engine;
  it("matches python references", () => {
    // python: sum(a*b for a,b in zip([10,20,30],[0,1,1]))/2 = 25.0; plain mean 20
    const r = ok(e, { values: "10, 20, 30", weights: "0, 1, 1" });
    expect(text(r.primary.value)).toBe("25");
    expect(text(item(r, "Unweighted mean (for comparison)"))).toBe("20");
    expect(text(item(r, "Sum of weights"))).toBe("2");
    // python: (1.5*0.25 + 2.5*0.75)/1 = 2.25
    expect(text(ok(e, { values: "1.5 2.5", weights: "0.25 0.75" }).primary.value)).toBe("2.25");
    // python: (82*20+90*50+75*30)/100 = 83.9; sum of products 8390
    expect(text(item(ok(e, { values: "82, 90, 75", weights: "20, 50, 30" }), "Sum of value × weight"))).toBe("8,390");
  });

  it("handles a single value and decimal commas", () => {
    expect(text(ok(e, { values: "-4.5", weights: "3" }).primary.value)).toBe("-4.5");
    const fr = makeWeightedAverageEngine(engineContext("fr", weightedText));
    const r = evaluate(fr, { values: "1,5; 2,5", weights: "1; 3" });
    expect(r.ok).toBe(true);
    if (r.ok) expect(text(r.result.primary.value)).toBe("2,25");
  });

  it("rejects mismatched counts, negative or zero weights and long lists", () => {
    expect(errors(e, { values: "1, 2, 3", weights: "1, 2" }).weights).toBe("Enter one weight for each value: you have 3 values and 2 weights.");
    expect(errors(e, { values: "1", weights: "1, 2" }).weights).toBe("Enter one weight for each value: you have 1 value and 2 weights.");
    expect(errors(e, { values: "1, 2", weights: "1, -2" }).weights).toMatch(/cannot be negative/);
    expect(errors(e, { values: "1, 2", weights: "0, 0" }).weights).toMatch(/add up to 0/);
    expect(errors(e, { values: Array(101).fill(1).join(","), weights: Array(101).fill(1).join(",") }).values).toBe("Enter at most 100 numbers.");
    expect(errors(e, { values: "1, 2e13", weights: "1, 1" }).values).toMatch(/too large/);
    expect(errors(e, { values: "", weights: "1" })).toHaveProperty("values");
  });
});
