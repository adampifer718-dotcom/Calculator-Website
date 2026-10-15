import { describe, expect, it } from "vitest";
import { evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import type { EngineValues, ResultValue } from "./framework/types";
import { getCalculator } from "./registry";
import { pmiPayments } from "./mortgage/engine";
import { pieceVolume } from "./concrete/engine";

const run = (slug: string, values: EngineValues) => {
  const engine = getCalculator(slug)!.engine;
  return evaluate(engine, rawFromValues(engine, values));
};
const ok = (slug: string, values: EngineValues) => {
  const result = run(slug, values);
  if (!result.ok) throw new Error(JSON.stringify(result.errors));
  return result.result;
};
const errors = (slug: string, values: EngineValues) => {
  const result = run(slug, values);
  return result.ok ? {} : result.errors;
};
const num = (value: ResultValue) => (value.kind === "currency" ? value.amount : value.kind === "number" || value.kind === "percent" ? value.value : Number.NaN);
const text = (value: ResultValue) => formatResultValue(value, "USD");
const item = (result: ReturnType<typeof ok>, label: string) => result.secondary!.find((s) => s.label === label)!.value;

describe("fraction calculator", () => {
  it("computes exactly and shows mixed and decimal forms", () => {
    const r = ok("fraction-calculator", { a: "-3/4", operation: "subtract", b: "1 1/2" });
    expect(text(r.primary.value)).toBe("-9/4");
    expect(text(item(r, "As a mixed number"))).toBe("-2 1/4");
    expect(num(item(r, "As a decimal"))).toBe(-2.25);
    expect(text(ok("fraction-calculator", { a: "0.1", operation: "add", b: "0.2" }).primary.value)).toBe("3/10");
  });

  it("rejects invalid input and division by zero", () => {
    expect(errors("fraction-calculator", { a: "3/0", operation: "add", b: "1" }).a).toBe("A denominator cannot be 0.");
    expect(errors("fraction-calculator", { a: "x", operation: "add", b: "1" }).a).toMatch(/Enter a fraction/);
    expect(errors("fraction-calculator", { a: "1/2", operation: "divide", b: "0/5" }).b).toBe("You cannot divide by zero.");
    expect(errors("fraction-calculator", { a: "1/2", operation: "multiply", b: "0" })).toEqual({});
  });
});

describe("GPA calculator", () => {
  it("accepts letters, grade points and the 4.3 scale", () => {
    expect(num(ok("gpa-calculator", { scale: "4.3", courses: "A+ 3\nB 3" }).primary.value)).toBeCloseTo(3.65, 12);
    expect(num(ok("gpa-calculator", { scale: "4.0", courses: "A+ 3\nB 3" }).primary.value)).toBeCloseTo(3.5, 12);
    expect(num(ok("gpa-calculator", { scale: "4.0", courses: "Lab 3.5 1\nSeminar 2.5 1" }).primary.value)).toBeCloseTo(3, 12);
  });

  it("reports the line with a problem", () => {
    expect(errors("gpa-calculator", { courses: "Math A 3\nArt G 2" }).courses).toBe("Line 2: “G” is not a grade on this scale.");
    expect(errors("gpa-calculator", { courses: "Math A 0" }).courses).toBe("Line 1: credits must be greater than 0.");
    expect(errors("gpa-calculator", { courses: "A" }).courses).toMatch(/^Line 1: write a grade/);
    expect(errors("gpa-calculator", { courses: "Math 4.5 3" }).courses).toMatch(/not a grade/);
    expect(errors("gpa-calculator", { courses: "Math A 3", priorGpa: 3.1, priorCredits: null }).priorCredits).toMatch(/both/);
  });
});

describe("age calculator", () => {
  it("handles leap-day birthdays under both rules", () => {
    const feb28 = ok("age-calculator", { birth: "2000-02-29", asOf: "2025-02-28", leapDay: "feb28" });
    const mar1 = ok("age-calculator", { birth: "2000-02-29", asOf: "2025-02-28", leapDay: "mar1" });
    expect(text(feb28.primary.value)).toBe("25 years, 0 months and 0 days");
    expect(text(mar1.primary.value)).toBe("24 years, 11 months and 30 days");
    expect(item(mar1, "Next birthday")).toEqual({ kind: "date", iso: "2025-03-01" });
    expect(feb28.notes?.[0]).toMatch(/Happy birthday/);
  });

  it("uses singular forms, totals and the next birthday", () => {
    const r = ok("age-calculator", { birth: "2025-09-13", asOf: "2026-10-14" });
    expect(text(r.primary.value)).toBe("1 year, 1 month and 1 day");
    expect(num(item(r, "Total days"))).toBe(396);
    expect(item(r, "Next birthday")).toEqual({ kind: "date", iso: "2027-09-13" });
    expect(num(item(r, "Days until next birthday"))).toBe(334);
    expect(text(item(r, "Day of the week you were born"))).toBe("Saturday");
  });

  it("rejects impossible and reversed dates", () => {
    expect(errors("age-calculator", { birth: "2023-02-29" }).birth).toBe("Enter a valid date.");
    expect(errors("age-calculator", { birth: "2030-01-01", asOf: "2026-10-14" }).asOf).toMatch(/on or after/);
    expect(errors("age-calculator", { birth: "0999-12-31" }).birth).toMatch(/Must be on or after/);
  });
});

describe("date duration calculator", () => {
  it("counts days, weekdays and optional end dates", () => {
    const r = ok("date-duration-calculator", { start: "2026-10-12", end: "2026-10-18", includeEnd: "yes" });
    expect(num(r.primary.value)).toBe(7);
    expect(num(item(r, "Working days"))).toBe(5);
    const gulf = ok("date-duration-calculator", { start: "2026-10-12", end: "2026-10-18", includeEnd: "yes", weekend: "friSat" });
    expect(num(item(gulf, "Working days"))).toBe(5);
    // Monday 12 to Friday 16 October: 5 days, of which Friday is a weekend day in the Friday–Saturday week.
    const week = ok("date-duration-calculator", { start: "2026-10-12", end: "2026-10-16", includeEnd: "yes", weekend: "friSat" });
    expect(num(item(week, "Working days"))).toBe(4);
    expect(num(item(r, "Weekend days"))).toBe(2);
    expect(text(item(r, "In weeks and days"))).toBe("1 week and 0 days");
    expect(num(ok("date-duration-calculator", { start: "2026-10-14", end: "2026-10-14", includeEnd: "no" }).primary.value)).toBe(0);
  });

  it("swaps reversed dates and says so", () => {
    const r = ok("date-duration-calculator", { start: "2026-12-25", end: "2026-10-14" });
    expect(num(r.primary.value)).toBe(72);
    expect(r.notes?.[0]).toMatch(/swapped/);
  });
});

describe("mortgage calculator", () => {
  it("separates principal and interest from other costs", () => {
    const r = ok("mortgage-calculator", { price: 400000, down: 80000, rate: 6.5, years: 30, propertyTax: 4800, insurance: 1500, hoa: 0, pmiRate: 0.5, currency: "USD" });
    expect(num(item(r, "Principal and interest"))).toBeCloseTo(2022.6176751774892, 9);
    expect(num(item(r, "Property tax"))).toBe(400);
    expect(num(item(r, "Home insurance"))).toBe(125);
    expect(num(item(r, "Mortgage insurance (PMI)"))).toBe(0);
    expect(num(item(r, "Total interest"))).toBeCloseTo(408142.3630638961, 6);
  });

  it("charges PMI until the balance reaches 78% of the price", () => {
    expect(pmiPayments(285000, 300000, 6, 1708.7189966853573, 360)).toBe(129);
    expect(pmiPayments(240000, 300000, 6, 1438.92, 360)).toBe(0);
    const r = ok("mortgage-calculator", { price: 300000, down: 15000, rate: 6, years: 30, propertyTax: 3600, insurance: 1200, hoa: 50, pmiRate: 0.5, currency: "USD" });
    expect(num(item(r, "Mortgage insurance (PMI)"))).toBeCloseTo(118.75, 12);
    expect(num(item(r, "Months with PMI"))).toBe(129);
  });

  it("handles zero interest and rejects a down payment at or above the price", () => {
    const r = ok("mortgage-calculator", { price: 120000, down: 0, rate: 0, years: 10, propertyTax: 0, insurance: 0, hoa: 0, pmiRate: 0, currency: "USD" });
    expect(num(r.primary.value)).toBeCloseTo(1000, 9);
    expect(errors("mortgage-calculator", { price: 100000, down: 100000 }).down).toMatch(/less than the home price/);
  });
});

describe("concrete calculator", () => {
  it("computes each shape", () => {
    expect(pieceVolume("column", { diameter: 0.3, height: 3 })).toBeCloseTo(0.21205750411731106, 12);
    expect(pieceVolume("tube", { outer: 0.3, inner: 0.2, height: 3 })).toBeCloseTo(0.11780972450961721, 12);
    const columns = ok("concrete-calculator", { shape: "column", units: "metric", diameterMetric: 30, heightMetric: 3, quantity: 4, waste: 10 });
    expect(num(columns.primary.value)).toBeCloseTo(0.9330530181161687, 12);
    const tube = ok("concrete-calculator", { shape: "tube", units: "imperial", outerImperial: 12, innerImperial: 8, heightImperial: 10, quantity: 1, waste: 0 });
    expect(num(tube.primary.value)).toBeCloseTo(0.16160456036984533, 12);
  });

  it("rejects an inner diameter that is not smaller than the outer one", () => {
    expect(errors("concrete-calculator", { shape: "tube", units: "metric", outerMetric: 20, innerMetric: 20 }).innerMetric).toMatch(/smaller/);
  });

  it("ignores dimensions of other shapes and unit systems", () => {
    const a = ok("concrete-calculator", { shape: "slab", units: "metric", lengthMetric: 2, widthMetric: 2, thicknessMetric: 10, waste: 0, heightMetric: 99, lengthImperial: 99 });
    expect(num(a.primary.value)).toBeCloseTo(0.4, 12);
  });
});

describe("cups to grams converter", () => {
  it("uses ingredient densities and cup sizes", () => {
    const flour = ok("cups-to-grams-converter", { direction: "toGrams", ingredient: "flourAllPurpose", cup: "us", cups: 1 });
    const honey = ok("cups-to-grams-converter", { direction: "toGrams", ingredient: "honey", cup: "us", cups: 1 });
    expect(num(flour.primary.value)).toBeCloseTo(120, 9);
    expect(num(honey.primary.value)).toBeCloseTo(340, 9);
    const metric = ok("cups-to-grams-converter", { direction: "toGrams", ingredient: "water", cup: "metric", cups: 1 });
    expect(num(metric.primary.value)).toBeCloseTo((250 * 236.6) / 236.5882365, 9);
    expect(flour.tables![0].rows).toHaveLength(18);
  });

  it("converts grams back to cups with a kitchen measure", () => {
    const r = ok("cups-to-grams-converter", { direction: "toCups", ingredient: "butter", cup: "us", grams: 113.5 });
    expect(num(r.primary.value)).toBeCloseTo(0.5, 12);
    expect(text(item(r, "Nearest kitchen measure"))).toBe("1/2 cups");
  });
});

describe("volume converter", () => {
  it("converts with exact US and imperial factors", () => {
    expect(text(ok("volume-converter", { value: 1, from: "impgal", to: "l" }).primary.value)).toBe("4.54609 L");
    expect(text(ok("volume-converter", { value: 3, from: "tsp", to: "tbsp" }).primary.value)).toBe("1 tbsp");
    expect(text(ok("volume-converter", { value: 1, from: "ft3", to: "gal" }).primary.value)).toBe("7.480519481 gal");
  });
});

describe("launch audit fixes", () => {
  it("ends PMI at the midpoint of the term at the latest (US Homeowners Protection Act)", () => {
    const loan = 291000;
    const r = 0.1 / 12;
    const payment = (loan * r) / (1 - (1 + r) ** -360);
    // Without the cap the 78% rule alone would charge 187 payments at 10%.
    expect(pmiPayments(loan, 300000, 10, payment, 360)).toBe(180);
    expect(pmiPayments(285000, 300000, 6, 1708.7189966853573, 360)).toBe(129);
  });

  it("does not claim the loan is under 80% when the PMI rate is simply 0", () => {
    const r = ok("mortgage-calculator", { price: 300000, down: 15000, rate: 6, years: 30, propertyTax: 0, insurance: 0, hoa: 0, pmiRate: 0, currency: "USD" });
    expect(r.notes?.join(" ")).not.toMatch(/80% of the home price or less/);
    const small = ok("mortgage-calculator", { price: 300000, down: 60000, rate: 6, years: 30, propertyTax: 0, insurance: 0, hoa: 0, pmiRate: 0.5, currency: "USD" });
    expect(small.notes?.join(" ")).toMatch(/80% of the home price or less/);
  });

  it("keeps BMR inputs in a range where the equation stays positive", () => {
    expect(errors("bmr-calculator", { units: "metric", sex: "female", age: 100, weightKg: 1, heightCm: 1 }).weightKg).toMatch(/at least 20/);
    const smallest = ok("bmr-calculator", { units: "metric", sex: "female", age: 100, weightKg: 20, heightCm: 100 });
    expect(num(smallest.primary.value)).toBeGreaterThan(0);
  });
});

describe("launch audit fixes (existing calculators)", () => {
  it("classifies BMI as displayed, so 25.0 is never 'Healthy weight'", () => {
    const r = ok("bmi-calculator", { units: "metric", weightKg: 76.45, heightCm: 175 });
    expect(text(r.primary.value)).toBe("25");
    expect(text(item(r, "Category"))).toBe("Overweight");
    expect(text(item(ok("bmi-calculator", { units: "metric", weightKg: 56.6, heightCm: 175 }), "Category"))).toBe("Healthy weight");
  });

  it("grades the percentage as displayed", () => {
    const r = ok("test-grade-calculator", { mode: "correct", correct: 89.996, total: 100 });
    expect(text(item(r, "Letter grade (A–F scale)"))).toBe("A");
  });

  it("never reports a p-value of exactly 0", () => {
    const r = ok("p-value-calculator", { distribution: "z", statistic: 40, tail: "two" });
    expect(text(r.primary.value)).toMatch(/^< /);
  });

  it("reports exponent underflow as a bound, not 0", () => {
    expect(text(ok("exponent-calculator", { base: 10, exponent: -400 }).primary.value)).toMatch(/^0 < \|aᵇ\| < /);
  });

  it("rounds significant figures in decimal", () => {
    const r = ok("significant-figures-calculator", { mode: "round", number: "2.675", digits: 3 });
    expect(text(r.primary.value)).toBe("2.68");
    const long = ok("significant-figures-calculator", { mode: "count", number: `1.${"0".repeat(120)}` });
    expect(num(long.primary.value)).toBe(121);
  });

  it("keeps the engineering mantissa below 1000", async () => {
    const { notations } = await import("@/lib/math/numbers");
    expect(notations(999.9999999999999).engineering).toBe("1 × 10³");
  });
});
