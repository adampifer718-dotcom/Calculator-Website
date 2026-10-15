import { describe, expect, it } from "vitest";
import { defaultRawValues, evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import { engineContext } from "./framework/i18n";
import type { AnyEngine, CalculatorDefinition, EngineValues, ResultValue } from "./framework/types";
import { sampleSize } from "./sample-size";
import { marginOfError } from "./margin-of-error";
import { probabilityEvents } from "./probability-events";
import { combinations } from "./combinations";
import { binomial, combinationsWithRepetition, makeCombinationsEngine, permutations, scientificParts } from "./combinations/engine";
import combinationsText from "./combinations/text/en";
import { seriesParallelResistors } from "./series-parallel-resistors";
import { makeResistorsEngine, readableUnit } from "./series-parallel-resistors/engine";
import resistorsText from "./series-parallel-resistors/text/en";
import { criticalZ } from "@/lib/math/proportion";

const DEFINITIONS: CalculatorDefinition[] = [sampleSize, marginOfError, probabilityEvents, combinations, seriesParallelResistors];

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

describe("batch 5 group A: definitions", () => {
  it.each(DEFINITIONS.map((d) => [d.id, d] as const))("%s has valid content and working examples", (_, d) => {
    expect(d.metaTitle.length).toBeLessThanOrEqual(59);
    expect(d.metaDescription.length).toBeGreaterThanOrEqual(70);
    expect(d.metaDescription.length).toBeLessThanOrEqual(160);
    expect(d.intro.length).toBeGreaterThan(0);
    expect(d.howToUse.length).toBeGreaterThan(0);
    expect(d.formulas.length).toBeGreaterThan(0);
    expect(d.assumptions.length).toBeGreaterThan(0);
    expect(d.examples.length).toBeGreaterThanOrEqual(2);
    expect(d.examples.length).toBeLessThanOrEqual(3);
    expect(d.faqs).toHaveLength(3);
    expect(d.related.length).toBeGreaterThanOrEqual(2);
    expect(d.related.length).toBeLessThanOrEqual(4);
    expect(d.sources.length).toBeGreaterThan(0);
    expect(d.addedOn).toBe("2026-10-15");
    expect(d.updated).toBe("2026-10-15");
    expect(d.status).toBe("published");
    expect(d.expertReview).toBeUndefined();
    expect(evaluate(d.engine, defaultRawValues(d.engine)).ok).toBe(true);
    for (const example of d.examples) {
      const value = ok(d.engine, example.inputs).primary.value;
      if (typeof example.expectedPrimary === "string") expect(text(value)).toBe(example.expectedPrimary);
      else expect(num(value)).toBeCloseTo(example.expectedPrimary, 9);
    }
  });

  it("titles and meta titles are unique within the batch", () => {
    expect(new Set(DEFINITIONS.map((d) => d.title)).size).toBe(DEFINITIONS.length);
    expect(new Set(DEFINITIONS.map((d) => d.metaTitle)).size).toBe(DEFINITIONS.length);
  });
});

describe("critical z values", () => {
  it("match python statistics.NormalDist().inv_cdf to about 1e-13", () => {
    // python: NormalDist().inv_cdf(1 - (1 - L/100)/2) for L = 80, 90, 95, 98, 99
    const expected: Record<number, number> = { 80: 1.2815515655446008, 90: 1.6448536269514715, 95: 1.9599639845400536, 98: 2.3263478740408408, 99: 2.5758293035489 };
    for (const [level, z] of Object.entries(expected)) expect(Math.abs(criticalZ(Number(level)) - z)).toBeLessThan(1e-12);
  });
});

describe("sample size calculator", () => {
  const e = sampleSize.engine;
  it("matches python references", () => {
    // python: z=inv_cdf(0.99); ceil(z*z*0.25/0.02**2) = ceil(3382.434019408962) = 3383
    const r = ok(e, { level: "98", margin: 2, proportion: 50, population: null });
    expect(num(r.primary.value)).toBe(3383);
    expect(num(item(r, "Sample size before correction (n₀)"))).toBeCloseTo(3382.434019408962, 9);
    expect(text(item(r, "Finite population correction"))).toBe("Not applied (no population size given)");
    // python: n0=384.14588206941227; n0/(1+(n0-1)/1000) = 277.7334531731875 → 278
    const fpc = ok(e, { level: "95", margin: 5, proportion: 50, population: 1000 });
    expect(num(fpc.primary.value)).toBe(278);
    expect(num(item(fpc, "n₀ rounded up"))).toBe(385);
    expect(text(item(fpc, "Finite population correction"))).toBe("Applied (population of 1,000)");
    // python: z=inv_cdf(0.9); n0=z*z*0.25/0.01 = 41.059360378745424; n0/(1+(n0-1)/50) = 22.79572062585717 → 23
    expect(num(ok(e, { level: "80", margin: 10, proportion: 50, population: 50 }).primary.value)).toBe(23);
    // python: z=inv_cdf(0.995); ceil(z*z*0.25/0.01**2) = ceil(16587.241502553028) = 16588
    expect(num(ok(e, { level: "99", margin: 1, proportion: 50, population: null }).primary.value)).toBe(16588);
  });

  it("handles extremes", () => {
    // Population of 1 needs exactly 1 response; a tiny proportion never gives 0.
    expect(num(ok(e, { level: "95", margin: 5, proportion: 50, population: 1 }).primary.value)).toBe(1);
    expect(num(ok(e, { level: "80", margin: 50, proportion: 0.01, population: null }).primary.value)).toBe(1);
    const r = ok(e, { level: "95", margin: 5, proportion: 50, population: 300 });
    expect(num(r.primary.value)).toBeLessThanOrEqual(300);
    expect(r.notes?.length).toBe(1);
    expect(ok(e, { level: "95", margin: 20, proportion: 50, population: 5 }).notes?.length).toBe(2);
    // A proportion of 30% and 70% need the same sample.
    expect(num(ok(e, { level: "95", margin: 3, proportion: 30 }).primary.value)).toBe(num(ok(e, { level: "95", margin: 3, proportion: 70 }).primary.value));
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { margin: 0 })).toHaveProperty("margin");
    expect(errors(e, { margin: 51 })).toHaveProperty("margin");
    expect(errors(e, { proportion: 0 })).toHaveProperty("proportion");
    expect(errors(e, { proportion: 100 }).proportion).toBe("Must be less than 100%.");
    expect(errors(e, { population: 0 })).toHaveProperty("population");
    expect(errors(e, { population: 10.5 })).toHaveProperty("population");
    expect(errors(e, { level: "97" })).toHaveProperty("level");
  });
});

describe("margin of error calculator", () => {
  const e = marginOfError.engine;
  it("matches python references", () => {
    // python: inv_cdf(0.99)*sqrt(0.25/2401)*100 = 2.3738243612661645
    expect(num(ok(e, { n: 2401, proportion: 50, level: "98" }).primary.value)).toBeCloseTo(2.3738243612661645, 9);
    // python: inv_cdf(0.975)*sqrt(0.2*0.8/500)*sqrt(1000/1499)*100 = 2.8636653442077593
    expect(num(ok(e, { n: 500, proportion: 20, level: "95", population: 1500 }).primary.value)).toBeCloseTo(2.8636653442077593, 9);
    // python: inv_cdf(0.9)*sqrt(0.08*0.92/100)*100 = 3.476762243165709 (n·p = 8 < 10)
    const r = ok(e, { n: 100, proportion: 8, level: "80" });
    expect(num(r.primary.value)).toBeCloseTo(3.476762243165709, 9);
    expect(r.notes?.some((n) => n.includes("normal approximation is weak"))).toBe(true);
    // python: sqrt(0.5*0.5/1000) = 0.015811388300841896 → 1.5811% ; interval 46.90% to 53.10%
    const d = ok(e, { n: 1000, proportion: 50, level: "95" });
    expect(num(item(d, "Standard error"))).toBeCloseTo(1.5811388300841896, 9);
    expect(text(item(d, "Confidence interval"))).toBe("46.9% to 53.1%");
    expect(text(item(d, "Finite population correction factor"))).toBe("Not applied");
    expect(d.notes?.[0]).toMatch(/Confidence Interval Calculator/);
  });

  it("clips the interval and handles a census", () => {
    // python: 1.959964*sqrt(0.05*0.95/40) = 0.0675 > 0.05, so the lower end is clipped to 0
    const low = ok(e, { n: 40, proportion: 5, level: "95" });
    expect(text(item(low, "Confidence interval"))).toBe("0% to 11.75%");
    expect(low.notes?.some((n) => n.includes("cut off at 0%"))).toBe(true);
    const census = ok(e, { n: 200, proportion: 50, level: "95", population: 200 });
    expect(num(census.primary.value)).toBe(0);
    expect(census.notes?.some((n) => n.includes("whole population"))).toBe(true);
    const zero = ok(e, { n: 50, proportion: 0, level: "95" });
    expect(num(zero.primary.value)).toBe(0);
    expect(zero.notes?.some((n) => n.includes("weak"))).toBe(true);
    expect(num(ok(e, { n: 1, proportion: 50, level: "95", population: 1 }).primary.value)).toBeCloseTo(97.99819922700268, 9); // python: inv_cdf(0.975)*0.5*100
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { n: 0 })).toHaveProperty("n");
    expect(errors(e, { n: 12.5 })).toHaveProperty("n");
    expect(errors(e, { proportion: 101 })).toHaveProperty("proportion");
    expect(errors(e, { proportion: -1 })).toHaveProperty("proportion");
    expect(errors(e, { n: 500, population: 499 }).population).toBe("The population cannot be smaller than the sample (500).");
  });
});

describe("probability calculator", () => {
  const e = probabilityEvents.engine;
  it("matches python references", () => {
    // python: a,b=.35,.6; a*b=0.21, a+b-a*b=0.74, a+b-2*a*b=0.53, 1-0.74=0.26
    const r = ok(e, { pA: 35, pB: 60, relation: "independent" });
    expect(num(r.primary.value)).toBeCloseTo(21, 9);
    expect(num(item(r, "P(A or B): at least one happens"))).toBeCloseTo(74, 9);
    expect(num(item(r, "P(exactly one of A or B)"))).toBeCloseTo(53, 9);
    expect(num(item(r, "P(neither A nor B)"))).toBeCloseTo(26, 9);
    expect(num(item(r, "P(not A)"))).toBeCloseTo(65, 9);
    expect(num(item(r, "P(not B)"))).toBeCloseTo(40, 9);
    // python: mutually exclusive .125 and .5 → or .625, neither .375
    const x = ok(e, { pA: 12.5, pB: 50, relation: "exclusive" });
    expect(num(x.primary.value)).toBe(0);
    expect(num(item(x, "P(A or B): at least one happens"))).toBeCloseTo(62.5, 9);
    expect(num(item(x, "P(exactly one of A or B)"))).toBeCloseTo(62.5, 9);
    expect(num(item(x, "P(neither A nor B)"))).toBeCloseTo(37.5, 9);
    // python: 1-(1/6)*(1/6) → P(A or B) of two dice sixes = 11/36 = 30.555…%
    expect(num(item(ok(e, { pA: 100 / 6, pB: 100 / 6, relation: "independent" }), "P(A or B): at least one happens"))).toBeCloseTo((11 / 36) * 100, 9);
  });

  it("handles edges", () => {
    const sure = ok(e, { pA: 100, pB: 100, relation: "independent" });
    expect(num(sure.primary.value)).toBe(100);
    expect(num(item(sure, "P(neither A nor B)"))).toBe(0);
    const full = ok(e, { pA: 33.3, pB: 66.7, relation: "exclusive" });
    expect(num(item(full, "P(neither A nor B)"))).toBeGreaterThanOrEqual(0);
    expect(full.notes?.[0]).toMatch(/certain/);
    expect(num(ok(e, { pA: 0, pB: 0, relation: "exclusive" }).primary.value)).toBe(0);
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { pA: 70, pB: 40, relation: "exclusive" }).pB).toBe("Mutually exclusive events cannot have P(A) + P(B) above 100%. Here the sum is 110%.");
    expect(errors(e, { pA: 70, pB: 40, relation: "independent" })).toEqual({});
    expect(errors(e, { pA: 101 })).toHaveProperty("pA");
    expect(errors(e, { pB: -5 })).toHaveProperty("pB");
    expect(errors(e, { relation: "dependent" })).toHaveProperty("relation");
  });
});

describe("permutations and combinations calculator", () => {
  const e = combinations.engine;
  it("matches python references", () => {
    // python: math.comb(30, 15) = 155117520; math.perm(30, 15) = 202843204931727360000
    const r = ok(e, { n: 30, r: 15 });
    expect(text(r.primary.value)).toBe("155,117,520");
    expect(text(item(r, "Permutations, nPr (order matters)"))).toBe("202,843,204,931,727,360,000");
    // python: math.comb(44, 15) = 229911617056; 30**15 = 14348907000000000000000
    expect(text(item(r, "Combinations with repetition, C(n + r − 1, r)"))).toBe("229,911,617,056");
    expect(text(item(r, "Permutations with repetition, nʳ"))).toBe("14,348,907,000,000,000,000,000");
    // python: f'{math.comb(100, 50):,}' (30 digits, still exact)
    expect(text(ok(e, { n: 100, r: 50 }).primary.value)).toBe("100,891,344,545,564,193,334,812,497,256");
    // python: Context(prec=7, rounding=ROUND_HALF_UP).create_decimal(math.perm(100, 50)) = 3.068519E+93 (94 digits)
    expect(text(item(ok(e, { n: 100, r: 50 }), "Permutations, nPr (order matters)"))).toBe("3.068519 × 10⁹³ (94 digits)");
    // python: 100**50 has 101 digits
    expect(text(item(ok(e, { n: 100, r: 50 }), "Permutations with repetition, nʳ"))).toBe("1 × 10¹⁰⁰ (101 digits)");
    expect(binomial(52, 5)).toBe(2598960n); // python: math.comb(52, 5)
    expect(permutations(10, 10)).toBe(3628800n); // python: math.factorial(10)
    expect(combinationsWithRepetition(5, 3)).toBe(35n); // python: math.comb(7, 3)
  });

  it("is fast and correct at the 10,000 limit", () => {
    const start = Date.now();
    const r = ok(e, { n: 10000, r: 5000 });
    // python: Context(prec=7, Emax=999999, rounding=ROUND_HALF_UP).create_decimal(math.comb(10000, 5000)) = 1.591790E+3008
    expect(text(r.primary.value)).toBe("1.59179 × 10³⁰⁰⁸ (3,009 digits)");
    expect(text(item(r, "Permutations, nPr (order matters)"))).toBe("6.731009 × 10¹⁹³³³ (19,334 digits)");
    expect(text(item(r, "Combinations with repetition, C(n + r − 1, r)"))).toBe("1.521371 × 10⁴¹⁴⁴ (4,145 digits)");
    const full = ok(e, { n: 10000, r: 10000 });
    expect(text(full.primary.value)).toBe("1");
    // python: 10000! ≈ 2.846260E+35659; C(19999, 10000) ≈ 1.122801E+6018; 10000**10000 has 40,001 digits
    expect(text(item(full, "Permutations, nPr (order matters)"))).toBe("2.84626 × 10³⁵⁶⁵⁹ (35,660 digits)");
    expect(text(item(full, "Combinations with repetition, C(n + r − 1, r)"))).toBe("1.122801 × 10⁶⁰¹⁸ (6,019 digits)");
    expect(text(item(full, "Permutations with repetition, nʳ"))).toBe("1 × 10⁴⁰⁰⁰⁰ (40,001 digits)");
    expect(Date.now() - start).toBeLessThan(3000);
  });

  it("rounds the mantissa with carry", () => {
    expect(scientificParts(99999995n * 10n ** 40n)).toEqual({ mantissa: 1, exponent: 48, digits: 48 });
    expect(scientificParts(12345674n * 10n ** 40n)).toEqual({ mantissa: 1.234567, exponent: 47, digits: 48 });
  });

  it("handles zero and r = 0", () => {
    const zero = ok(e, { n: 0, r: 0 });
    expect(text(zero.primary.value)).toBe("1");
    expect(text(item(zero, "Combinations with repetition, C(n + r − 1, r)"))).toBe("1");
    expect(text(item(zero, "Permutations with repetition, nʳ"))).toBe("1");
    const r0 = ok(e, { n: 7, r: 0 });
    expect(text(r0.primary.value)).toBe("1");
    expect(text(item(r0, "Permutations, nPr (order matters)"))).toBe("1");
  });

  it("formats for other locales", () => {
    const de = makeCombinationsEngine(engineContext("de", combinationsText));
    expect(text(ok(de, { n: 30, r: 15 }).primary.value)).toBe("155.117.520");
    expect(text(ok(de, { n: 200, r: 100 }).primary.value)).toBe("9,054851 × 10⁵⁸ (59 digits)");
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { n: 5, r: 6 }).r).toBe("r cannot be larger than n (5). You cannot choose more distinct items than there are.");
    expect(errors(e, { n: 10001, r: 1 })).toHaveProperty("n");
    expect(errors(e, { n: -1, r: 0 })).toHaveProperty("n");
    expect(errors(e, { n: 10, r: 2.5 })).toHaveProperty("r");
  });
});

describe("series and parallel resistor calculator", () => {
  const e = seriesParallelResistors.engine;
  it("matches python references", () => {
    // python: 1/(1/100+1/150) = 60.0; 100+150 = 250
    const two = ok(e, { unit: "ohm", connection: "parallel", values: "100, 150" });
    expect(text(two.primary.value)).toBe("60 Ω");
    expect(text(item(two, "Total series resistance"))).toBe("250 Ω");
    expect(text(item(two, "Total parallel conductance"))).toBe("0.0166667 S"); // python: 1/100+1/150 = 0.016666…
    // python: 1/(1/1.5e6+1/2.2e6) = 891891.891891892; series 3.7e6
    const meg = ok(e, { unit: "megohm", connection: "series", values: "1.5\n2.2" });
    expect(text(meg.primary.value)).toBe("3.7 MΩ");
    expect(text(item(meg, "Total parallel resistance"))).toBe("891.892 kΩ");
    expect(text(item(meg, "Parallel resistance in ohms"))).toBe("891,891.891892 Ω");
    // python: 1/(1/220+1/470+1/1000) = 130.32518275775143
    const d = ok(e, { unit: "ohm", connection: "series", values: "220, 470, 1000" });
    expect(text(item(d, "Total parallel resistance"))).toBe("130.325 Ω");
    expect(text(item(d, "Series resistance in ohms"))).toBe("1,690 Ω");
    expect(d.tables?.[0].rows).toHaveLength(3);
    expect(d.notes?.[0]).toMatch(/smaller than the smallest/);
  });

  it("handles edges and other locales", () => {
    const one = ok(e, { unit: "kohm", connection: "parallel", values: "4.7" });
    expect(text(one.primary.value)).toBe("4.7 kΩ");
    expect(one.notes?.[0]).toMatch(/single resistor/);
    expect(readableUnit(999999.9)).toBe("megohm");
    expect(readableUnit(999.4)).toBe("ohm");
    const fifty = ok(e, { unit: "ohm", connection: "parallel", values: Array(50).fill("1000").join(" ") });
    expect(text(fifty.primary.value)).toBe("20 Ω");
    const tiny = ok(e, { unit: "ohm", connection: "parallel", values: "0.000001 0.000001" });
    expect(text(tiny.primary.value)).toBe("5 × 10⁻⁷ Ω");
    const fr = makeResistorsEngine(engineContext("fr", resistorsText));
    expect(text(ok(fr, { unit: "kohm", connection: "series", values: "4,7 ; 10" }).primary.value)).toBe("14,7 kΩ");
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { values: "100, 0" }).values).toBe("Every resistance must be greater than 0 (0 is not).");
    expect(errors(e, { values: "100, -5" }).values).toMatch(/greater than 0/);
    expect(errors(e, { values: "100, abc" }).values).toMatch(/not a number/);
    expect(errors(e, { values: "" })).toHaveProperty("values");
    expect(errors(e, { values: Array(51).fill("10").join(",") }).values).toBe("Enter at most 50 resistances.");
    expect(errors(e, { values: "2e9" }).values).toMatch(/too large/);
    expect(errors(e, { unit: "gohm" })).toHaveProperty("unit");
  });
});
