import { describe, expect, it } from "vitest";
import { defaultRawValues, evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import type { AnyEngine, CalculatorDefinition, RawValues } from "./framework/types";
import { timeCalculator } from "./time-calculator";
import { splitDuration } from "./time-calculator/engine";
import { dateAdd } from "./date-add";
import { flooring } from "./flooring";
import { waistToHip } from "./waist-to-hip";
import { atOrAboveCutoff } from "./waist-to-hip/engine";
import { heartRateZones } from "./heart-rate-zones";
import { estimatedMaxHr, targetHr } from "./heart-rate-zones/engine";

const DEFS: CalculatorDefinition[] = [timeCalculator, dateAdd, flooring, waistToHip, heartRateZones];

function run(engine: AnyEngine, raw: RawValues) {
  return evaluate(engine, { ...defaultRawValues(engine), ...raw });
}
function ok(engine: AnyEngine, raw: RawValues) {
  const result = run(engine, raw);
  if (!result.ok) throw new Error(JSON.stringify(result.errors));
  return result.result;
}
const num = (engine: AnyEngine, raw: RawValues) => {
  const v = ok(engine, raw).primary.value;
  if (v.kind !== "number") throw new Error(`not a number: ${v.kind}`);
  return v.value;
};
const text = (engine: AnyEngine, raw: RawValues) => formatResultValue(ok(engine, raw).primary.value, "USD");
const secondary = (engine: AnyEngine, raw: RawValues, label: string) => {
  const item = ok(engine, raw).secondary?.find((s) => s.label === label);
  if (!item) throw new Error(`missing ${label}`);
  return item.value.kind === "number" ? item.value.value : formatResultValue(item.value, "USD");
};
const errors = (engine: AnyEngine, raw: RawValues) => {
  const result = run(engine, raw);
  return result.ok ? {} : result.errors;
};

describe("batch 5 group D: content and examples", () => {
  it.each(DEFS.map((d) => [d.slug, d] as const))("%s has valid metadata and content", (_slug, d) => {
    expect(d.metaTitle.length).toBeLessThanOrEqual(59);
    expect(d.metaDescription.length).toBeGreaterThanOrEqual(70);
    expect(d.metaDescription.length).toBeLessThanOrEqual(160);
    expect(d.examples.length).toBeGreaterThanOrEqual(2);
    expect(d.examples.length).toBeLessThanOrEqual(3);
    expect(d.faqs.length).toBe(3);
    expect(d.related.length).toBeGreaterThanOrEqual(2);
    expect(d.related.length).toBeLessThanOrEqual(4);
    expect(d.addedOn).toBe("2026-10-15");
    expect(d.updated).toBe("2026-10-15");
    expect(d.status).toBe("published");
    expect(d.sources.length).toBeGreaterThan(0);
    expect(evaluate(d.engine, defaultRawValues(d.engine)).ok).toBe(true);
  });

  it("sets review flags only on the health tools", () => {
    expect(waistToHip.expertReview).toEqual({ area: "medical", status: "pending" });
    expect(heartRateZones.expertReview).toEqual({ area: "medical", status: "pending" });
    for (const d of [timeCalculator, dateAdd, flooring]) expect(d.expertReview).toBeUndefined();
  });

  it.each(DEFS.flatMap((d) => d.examples.map((e) => [d.slug, e.title, d, e] as const)))("%s example “%s”", (_slug, _title, d, example) => {
    const evaluation = evaluate(d.engine, rawFromValues(d.engine, example.inputs));
    expect(evaluation.ok).toBe(true);
    if (!evaluation.ok) return;
    const value = evaluation.result.primary.value;
    if (typeof example.expectedPrimary === "string") {
      expect(formatResultValue(value, "USD")).toBe(example.expectedPrimary);
    } else {
      expect(value.kind === "number" ? value.value : Number.NaN).toBeCloseTo(example.expectedPrimary, 9);
    }
  });
});

describe("time calculator", () => {
  const e = timeCalculator.engine;
  const zero = { d1: "0", h1: "0", m1: "0", s1: "0", d2: "0", h2: "0", m2: "0", s2: "0" };
  it("matches reference values", () => {
    // python3: 3*86400+12*3600+5*60+7.25 = 302707.25
    const r = { ...zero, d1: "3", h1: "12", m1: "5", s1: "7.25" };
    expect(text(e, r)).toBe("3 days, 12 hours, 5 minutes, 7.25 seconds");
    expect(secondary(e, r, "Total in seconds")).toBeCloseTo(302707.25, 9);
    // python3: (5*3600+30*60)/3600 = 5.5
    expect(secondary(e, { ...zero, h1: "3", m1: "45", h2: "1", m2: "45" }, "Total in hours")).toBeCloseTo(5.5, 9);
    // python3: 7*3600+45*60+2*3600+30*60 = 36900 s = 615 min
    expect(secondary(e, {}, "Total in minutes")).toBeCloseTo(615, 9);
    // carries: 135 minutes = 2 h 15 min
    expect(text(e, { ...zero, m1: "135" })).toBe("2 hours, 15 minutes");
    expect(text(e, { ...zero, h1: "24" })).toBe("1 day");
  });
  it("shows negative results with a minus sign", () => {
    // python3: (1*3600+2*60+3)-(2*3600) = -3477 = -(57*60+57)
    const r = ok(e, { ...zero, h1: "1", m1: "2", s1: "3", operation: "subtract", h2: "2" });
    expect(formatResultValue(r.primary.value, "USD")).toBe("−57 minutes, 57 seconds");
    expect(r.secondary?.find((s) => s.label === "Total in seconds")?.value).toMatchObject({ value: -3477 });
    expect(r.notes?.[0]).toMatch(/negative/);
  });
  it("handles zero and fractional seconds", () => {
    expect(text(e, zero)).toBe("0 seconds");
    expect(text(e, { ...zero, operation: "subtract", h1: "2", h2: "2" })).toBe("0 seconds");
    expect(text(e, { ...zero, s1: "0.1", s2: "0.2" })).toBe("0.3 seconds");
    expect(text(e, { ...zero, s1: "1" })).toBe("1 second");
    expect(splitDuration(90061)).toEqual({ days: 1, hours: 1, minutes: 1, seconds: 1 });
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { h1: "-1" })).toHaveProperty("h1");
    expect(errors(e, { m2: "abc" })).toHaveProperty("m2");
    expect(errors(e, { d1: "2000000" })).toHaveProperty("d1");
  });
});

describe("add or subtract days calculator", () => {
  const e = dateAdd.engine;
  const none = { years: "0", months: "0", weeks: "0", days: "0" };
  it("matches reference values", () => {
    // python3: date(2026,10,15)+timedelta(90) = 2027-01-13 (Wednesday)
    expect(text(e, {})).toBe("Wednesday, January 13, 2027");
    expect(secondary(e, {}, "Calendar days between the dates")).toBe(90);
    // python3: date(2026,10,15)-timedelta(weeks=2,days=3) = 2026-09-28, a Monday
    const back = { start: "2026-10-15", operation: "subtract", ...none, weeks: "2", days: "3" };
    expect(text(e, back)).toBe("Monday, September 28, 2026");
    expect(secondary(e, back, "Day of the week")).toBe("Monday");
    expect(secondary(e, back, "Calendar days between the dates")).toBe(17);
    // python3: (date(2024,8,15)-date(2022,2,15)).days = 912
    expect(secondary(e, { start: "2024-08-15", operation: "subtract", ...none, years: "2", months: "6" }, "Calendar days between the dates")).toBe(912);
  });
  it("clamps to the month end", () => {
    // 29 Feb 2024 + 1 year -> 28 Feb 2025 (Friday); python3: (date(2025,2,28)-date(2024,2,29)).days = 365
    const r = ok(e, { start: "2024-02-29", ...none, years: "1" });
    expect(r.primary.value).toEqual({ kind: "date", iso: "2025-02-28" });
    expect(r.notes?.[0]).toMatch(/last day/);
    // 31 March 2026 - 1 month -> 28 Feb 2026
    expect(ok(e, { start: "2026-03-31", operation: "subtract", ...none, months: "1" }).primary.value).toEqual({ kind: "date", iso: "2026-02-28" });
    // 31 Jan 2024 + 1 month + 1 day -> 29 Feb + 1 = 1 Mar 2024 (months applied first)
    expect(ok(e, { start: "2024-01-31", ...none, months: "1", days: "1" }).primary.value).toEqual({ kind: "date", iso: "2024-03-01" });
    // zero shift keeps the date and has no clamping note
    const same = ok(e, { start: "2026-05-31", ...none });
    expect(same.primary.value).toEqual({ kind: "date", iso: "2026-05-31" });
    expect(same.notes).toHaveLength(1);
  });
  it("rejects results outside the supported range and bad inputs", () => {
    expect(errors(e, { start: "9999-12-31", ...none, days: "1" })).toHaveProperty("days");
    expect(errors(e, { start: "2026-10-15", operation: "subtract", ...none, years: "5000" })).toHaveProperty("years");
    expect(errors(e, { days: "1.5" })).toHaveProperty("days");
    expect(errors(e, { weeks: "-2" })).toHaveProperty("weeks");
    expect(errors(e, { months: "10001" })).toHaveProperty("months");
    expect(errors(e, { start: "2026-02-30" })).toHaveProperty("start");
  });
});

describe("flooring calculator", () => {
  const e = flooring.engine;
  it("matches reference values", () => {
    // python3: math.ceil(168*1.1/20) = 10
    expect(num(e, {})).toBe(10);
    expect(secondary(e, {}, "Area including waste")).toBeCloseTo(184.8, 9);
    expect(secondary(e, {}, "Area in the boxes bought")).toBeCloseTo(200, 9);
    // python3: 168*0.3048**2 = 15.60771072
    expect(secondary(e, {}, "Floor area in other units")).toBeCloseTo(15.60771072, 9);
    // python3: math.ceil((5*4+2*1.5)*1.15/2.2) = 13
    expect(num(e, { units: "metric", lengthMetric: "5", widthMetric: "4", length2Metric: "2", width2Metric: "1.5", waste: "15", coverageMetric: "2.2" })).toBe(13);
    // python3: math.ceil(4.5*3.6*1.1/2) = 9
    expect(num(e, { units: "metric" })).toBe(9);
    // python3: math.ceil(120*1.1/23.4)*23.4*3.49 = 489.996 ; 120*1.1*3.49 = 460.68
    const priced = { lengthImperial: "12", widthImperial: "10", coverageImperial: "23.4", priceImperial: "3.49" };
    expect(num(e, priced)).toBe(6);
    expect(ok(e, priced).secondary?.find((s) => s.label === "Flooring cost (whole boxes)")?.value).toMatchObject({ kind: "currency", amount: expect.closeTo(489.996, 9) });
    expect(ok(e, priced).secondary?.find((s) => s.label === "Cost of the area including waste")?.value).toMatchObject({ amount: expect.closeTo(460.68, 9) });
  });
  it("handles edge cases", () => {
    // exact fit: 10 x 10 ft, no waste, 20 ft² boxes -> exactly 5 boxes, no rounding up
    expect(num(e, { lengthImperial: "10", widthImperial: "10", waste: "0" })).toBe(5);
    // 0.1 x 3 = 0.30000000000000004, not rounded up to an extra box
    expect(num(e, { lengthImperial: "0.1", widthImperial: "3", waste: "0", coverageImperial: "0.3" })).toBe(1);
    // no cost lines without a price
    expect(ok(e, {}).secondary?.some((s) => s.value.kind === "currency")).toBe(false);
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { lengthImperial: "0" })).toHaveProperty("lengthImperial");
    expect(errors(e, { coverageImperial: "0" })).toHaveProperty("coverageImperial");
    expect(errors(e, { waste: "60" })).toHaveProperty("waste");
    expect(errors(e, { priceImperial: "-1" })).toHaveProperty("priceImperial");
    expect(errors(e, { length2Imperial: "5" })).toHaveProperty("width2Imperial");
    expect(errors(e, { width2Imperial: "5" })).toHaveProperty("length2Imperial");
  });
});

describe("waist-to-hip ratio calculator", () => {
  const e = waistToHip.engine;
  const comparison = (raw: RawValues) => secondary(e, raw, "Compared with the WHO cut-off");
  it("matches reference values", () => {
    // python3: 82/100 = 0.82
    expect(num(e, {})).toBeCloseTo(0.82, 9);
    expect(comparison({})).toBe("Below the cut-off");
    // python3: 97/101 = 0.9603960396039604
    expect(num(e, { waist: "97", hip: "101", sex: "male" })).toBeCloseTo(0.9603960396039604, 9);
    expect(comparison({ waist: "97", hip: "101", sex: "male" })).toBe("At or above the cut-off");
    // python3: 33/39 = 0.846..., round(.., 2) = 0.85 -> at the female cut-off
    expect(num(e, { unit: "in", waist: "33", hip: "39" })).toBeCloseTo(0.8461538461538461, 9);
    expect(comparison({ unit: "in", waist: "33", hip: "39" })).toBe("At or above the cut-off");
    // same ratio for a man is below 0.90
    expect(comparison({ unit: "in", waist: "33", hip: "39", sex: "male" })).toBe("Below the cut-off");
    // python3: 0.85*100 = 85.0
    expect(secondary(e, {}, "Waist that would reach the cut-off")).toBeCloseTo(85, 9);
  });
  it("applies the cut-offs at the boundary", () => {
    expect(atOrAboveCutoff(0.9, "male")).toBe(true);
    expect(atOrAboveCutoff(0.894, "male")).toBe(false);
    expect(atOrAboveCutoff(0.85, "female")).toBe(true);
    expect(atOrAboveCutoff(0.844, "female")).toBe(false);
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { waist: "0" })).toHaveProperty("waist");
    expect(errors(e, { hip: "-3" })).toHaveProperty("hip");
    expect(errors(e, { waist: "80", hip: "31.5" })).toHaveProperty("waist");
    expect(errors(e, { waist: "20", hip: "100" })).toHaveProperty("waist");
  });
});

describe("heart rate zone calculator", () => {
  const e = heartRateZones.engine;
  const zone = (raw: RawValues, i: number) => {
    const cell = ok(e, raw).tables?.[0].rows[i].cells[1];
    return cell ? formatResultValue(cell, "USD") : "";
  };
  it("matches reference values", () => {
    // python3: 220-40 = 180 ; 180*.6, 180*.7 = 108, 126
    expect(num(e, {})).toBe(180);
    expect(zone({}, 1)).toBe("108–126 bpm");
    // python3: 180*.5, 180*.7 = 90, 126 ; 180*.7, 180*.85 = 126, 153
    expect(secondary(e, {}, "AHA moderate intensity (50–70% of max)")).toBe("90–126 bpm");
    expect(secondary(e, {}, "AHA vigorous intensity (70–85% of max)")).toBe("126–153 bpm");
    // python3: 208-0.7*55 = 169.5 ; 0.7*169.5, 0.8*169.5 = 118.65, 135.6
    expect(num(e, { age: "55", formula: "tanaka" })).toBeCloseTo(169.5, 9);
    expect(zone({ age: "55", formula: "tanaka" }, 2)).toBe("119–136 bpm");
    // python3: 220-30 = 190 ; 60+.7*130, 60+.8*130 = 151, 164 ; 60+.5*130 = 125
    const k = { age: "30", resting: "60", method: "karvonen" };
    expect(zone(k, 2)).toBe("151–164 bpm");
    expect(zone(k, 0)).toBe("125–138 bpm");
    expect(secondary(e, k, "Heart rate reserve")).toBe(130);
    expect(estimatedMaxHr(25, "fox")).toBe(195);
    expect(targetHr(200, 0.5, 50)).toBe(125);
  });
  it("uses a measured maximum when given", () => {
    const r = ok(e, { measuredMax: "172" });
    expect(r.primary.label).toBe("Maximum heart rate (measured)");
    expect(r.primary.value).toMatchObject({ value: 172 });
    expect(zone({ measuredMax: "172" }, 4)).toBe("155–172 bpm");
    expect(ok(e, { resting: "55" }).notes).toContain("The resting heart rate is used only by the Karvonen method.");
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { method: "karvonen" })).toHaveProperty("resting");
    expect(errors(e, { age: "9" })).toHaveProperty("age");
    expect(errors(e, { age: "101" })).toHaveProperty("age");
    expect(errors(e, { age: "40.5" })).toHaveProperty("age");
    expect(errors(e, { resting: "25" })).toHaveProperty("resting");
    expect(errors(e, { measuredMax: "90", resting: "95" })).toHaveProperty("resting");
  });
});
