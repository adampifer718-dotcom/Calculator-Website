import { describe, expect, it } from "vitest";
import { defaultRawValues, evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import type { AnyEngine, CalculatorDefinition, RawValues } from "./framework/types";
import { paint } from "./paint";
import { areaConverter } from "./area-converter";
import { dataStorageConverter } from "./data-storage-converter";
import { oneRepMax } from "./one-rep-max";
import { plantSpacing } from "./plant-spacing";
import { gridLayout, triangularLayout } from "./plant-spacing/engine";
import { AREA, DATA_STORAGE, convertUnits, findUnit } from "@/lib/math/units";

const DEFS: CalculatorDefinition[] = [paint, areaConverter, dataStorageConverter, oneRepMax, plantSpacing];

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

describe("batch 4 group D: content and examples", () => {
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

describe("paint calculator", () => {
  const e = paint.engine;
  it("matches reference values", () => {
    // python3: (48*8-20-2*15)*2/350
    expect(num(e, {})).toBeCloseTo(1.9085714285714286, 9);
    expect(secondary(e, {}, "Whole gallons to buy")).toBe(2);
    expect(secondary(e, {}, "Paintable area (one coat)")).toBeCloseTo(334, 9);
    // python3: 30*8*3/400
    expect(num(e, { lengthImperial: "30", heightImperial: "8", doors: "0", windows: "0", coats: "3", coverageImperial: "400" })).toBeCloseTo(1.8, 9);
    // python3: (10*2.4-1.9-1.4)*1/12
    expect(num(e, { units: "metric", lengthMetric: "10", heightMetric: "2.4", doors: "1", windows: "1", coats: "1", coverageMetric: "12" })).toBeCloseTo(1.725, 9);
    // python3: 1.725 -> ceil = 2
    expect(secondary(e, { units: "metric", lengthMetric: "10", heightMetric: "2.4", doors: "1", windows: "1", coats: "1", coverageMetric: "12" }, "Whole liters to buy")).toBe(2);
    // python3: 668/350*3.785411784
    expect(secondary(e, {}, "In liters")).toBeCloseTo(7.22472877632, 9);
  });
  it("rounds exact amounts to the same whole number", () => {
    // 350 ft² × 2 coats ÷ 350 = exactly 2 gallons
    expect(secondary(e, { lengthImperial: "35", heightImperial: "10", doors: "0", windows: "0", coats: "2" }, "Whole gallons to buy")).toBe(2);
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { doors: "20" })).toHaveProperty("doors");
    expect(errors(e, { lengthImperial: "0" })).toHaveProperty("lengthImperial");
    expect(errors(e, { coats: "0" })).toHaveProperty("coats");
    expect(errors(e, { coats: "6" })).toHaveProperty("coats");
    expect(errors(e, { coats: "1.5" })).toHaveProperty("coats");
    expect(errors(e, { windows: "-1" })).toHaveProperty("windows");
    expect(errors(e, { coverageImperial: "0" })).toHaveProperty("coverageImperial");
    expect(errors(e, { units: "metric", heightMetric: "-2" })).toHaveProperty("heightMetric");
  });
  it("allows zero-size openings", () => {
    expect(num(e, { doorAreaImperial: "0", windowAreaImperial: "0" })).toBeCloseTo((48 * 8 * 2) / 350, 9);
  });
});

describe("area converter", () => {
  const e = areaConverter.engine;
  it("matches reference values", () => {
    // python3: '%.10g'%(1/0.09290304)
    expect(text(e, { value: "1", from: "m2", to: "ft2" })).toBe("10.76391042 ft²");
    // python3: '%.10g'%(1e6/2589988.110336)
    expect(text(e, { value: "1", from: "km2", to: "mi2" })).toBe("0.3861021585 mi²");
    // python3: '%.10g'%(1e4/4046.8564224)
    expect(text(e, { value: "1", from: "ha", to: "acre" })).toBe("2.471053815 ac");
    // python3: '%.10g'%(1/0.00064516)
    expect(text(e, { value: "1", from: "m2", to: "in2" })).toBe("1,550.0031 in²");
    expect(text(e, { value: "1", from: "acre", to: "ft2" })).toBe("43,560 ft²");
    expect(text(e, { value: "1", from: "yd2", to: "ft2" })).toBe("9 ft²");
  });
  it("has exact table factors", () => {
    expect(findUnit(AREA, "acre").factor).toBe(4046.8564224);
    expect(findUnit(AREA, "mi2").factor).toBe(2589988.110336);
    expect(convertUnits(1, findUnit(AREA, "mi2"), findUnit(AREA, "acre"))).toBeCloseTo(640, 9);
  });
  it("handles zero and rejects non-numbers", () => {
    expect(text(e, { value: "0", from: "ha", to: "m2" })).toBe("0 m²");
    expect(errors(e, { value: "abc" })).toHaveProperty("value");
    expect(errors(e, { value: "1e13" })).toHaveProperty("value");
  });
});

describe("data storage converter", () => {
  const e = dataStorageConverter.engine;
  it("matches reference values", () => {
    // python3: '%.10g'%(2**40/1e12)
    expect(text(e, { value: "1", from: "TiB", to: "TB" })).toBe("1.099511628 TB");
    // python3: '%.10g'%(1e9/2**20)
    expect(text(e, { value: "1", from: "GB", to: "MiB" })).toBe("953.6743164 MiB");
    // python3: 1*8
    expect(text(e, { value: "1", from: "B", to: "bit" })).toBe("8 bit");
    expect(text(e, { value: "1", from: "KiB", to: "B" })).toBe("1,024 B");
    expect(text(e, { value: "1", from: "Gbit", to: "MB" })).toBe("125 MB");
  });
  it("covers every required unit with exact factors", () => {
    expect(DATA_STORAGE.map((u) => u.value)).toEqual(["bit", "B", "kB", "MB", "GB", "TB", "PB", "KiB", "MiB", "GiB", "TiB", "PiB", "kbit", "Mbit", "Gbit"]);
    expect(findUnit(DATA_STORAGE, "PiB").factor).toBe(1125899906842624);
  });
  it("formats huge values and rejects bad input", () => {
    expect(text(e, { value: "1000000", from: "PiB", to: "bit" })).toMatch(/× 10/);
    expect(errors(e, { value: "" })).toHaveProperty("value");
  });
});

describe("one-rep max calculator", () => {
  const e = oneRepMax.engine;
  it("matches reference values", () => {
    // python3: w,r=100,5; (w*(1+r/30)+w*36/(37-r)+w*r**0.1)/3
    expect(num(e, {})).toBeCloseTo(115.54285365848953, 9);
    // python3: w,r=140,3; (w*(1+r/30)+w*36/(37-r)+w*r**0.1)/3
    expect(num(e, { weight: "140", reps: "3" })).toBeCloseTo(152.8308461607979, 9);
    // python3: w,r=60,12; (w*(1+r/30)+w*36/(37-r)+w*r**0.1)/3
    expect(num(e, { weight: "60", reps: "12" })).toBeCloseTo(82.44177707973631, 9);
    // python3: 225*(1+10/30), 225*36/27, 225*10**0.1
    expect(secondary(e, { weight: "225", unit: "lb", reps: "10" }, "Epley formula")).toBeCloseTo(300, 9);
    expect(secondary(e, { weight: "225", unit: "lb", reps: "10" }, "Brzycki formula")).toBeCloseTo(300, 9);
    expect(secondary(e, { weight: "225", unit: "lb", reps: "10" }, "Lombardi formula")).toBeCloseTo(283.25821765368767, 9);
  });
  it("returns the weight for a single rep and builds the load table", () => {
    expect(num(e, { weight: "120", reps: "1" })).toBeCloseTo(120, 12);
    const result = ok(e, { weight: "120", reps: "1" });
    const table = result.tables![0];
    expect(table.rows.map((r) => r.label)).toEqual(["95%", "90%", "85%", "80%", "75%", "70%", "65%", "60%"]);
    expect(formatResultValue(table.rows[0].cells[0], "USD")).toBe("114 kg");
    expect(result.notes?.length).toBe(2);
    expect(ok(e, { reps: "11" }).notes?.some((n) => n.includes("10 repetitions"))).toBe(true);
    expect(text(e, { unit: "lb" })).toMatch(/ lb$/);
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { weight: "0" })).toHaveProperty("weight");
    expect(errors(e, { weight: "-50" })).toHaveProperty("weight");
    expect(errors(e, { reps: "0" })).toHaveProperty("reps");
    expect(errors(e, { reps: "13" })).toHaveProperty("reps");
    expect(errors(e, { reps: "4.5" })).toHaveProperty("reps");
  });
});

describe("plant spacing calculator", () => {
  const e = plantSpacing.engine;
  it("matches reference values", () => {
    // python3: math.floor(10/1.5)*math.floor(4/2)
    expect(num(e, {})).toBe(12);
    // python3 tri(8,4,1): rows=floor((4-1)/(sqrt(3)/2))+1=4; 2*8+2*7
    expect(num(e, { length: "8", width: "4", pattern: "triangular", spacing: "1" })).toBe(30);
    // python3 tri(100,10,1): rows=floor(9/0.8660254)+1=11; 6*100+5*99
    expect(num(e, { length: "100", width: "10", pattern: "triangular", spacing: "1" })).toBe(1095);
    // python3: math.floor(5/0.25)*round(1.2/0.3) (1.2/0.3 = 3.9999999999999996 in floating point; 4 rows fit)
    expect(num(e, { unit: "m", length: "5", width: "1.2", pattern: "grid", spacing: "0.25", rowSpacing: "0.3" })).toBe(80);
    // density: 80 / 6 m²
    expect(secondary(e, { unit: "m", length: "5", width: "1.2", pattern: "grid", spacing: "0.25", rowSpacing: "0.3" }, "Plants per square meter")).toBeCloseTo(80 / 6, 9);
    // 48 in × 24 in = 8 ft²
    expect(secondary(e, { unit: "in", length: "48", width: "24", spacing: "3", rowSpacing: "3" }, "Bed area")).toBeCloseTo(8, 9);
    expect(secondary(e, { unit: "cm", length: "300", width: "120", pattern: "triangular", spacing: "40" }, "Plants per row (full / offset)")).toBe("7 / 7");
  });
  it("tolerates floating-point division noise", () => {
    // python3: 0.3/0.1 = 2.9999999999999996, but three plants fit (at 0.05, 0.15, 0.25)
    expect(gridLayout(0.3, 0.1, 0.1, 0.1).count).toBe(3);
  });
  it("handles beds that are too small", () => {
    const result = ok(e, { length: "1", width: "1", spacing: "1.5", rowSpacing: "2" });
    expect(result.primary.value).toEqual({ kind: "number", value: 0, decimals: 0 });
    expect(result.notes?.some((n) => n.includes("too small"))).toBe(true);
    expect(triangularLayout(10, 0.5, 1).count).toBe(0);
    expect(triangularLayout(1, 1, 1)).toEqual({ count: 1, rows: 1, perRow: 1, perOffsetRow: 0 });
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { length: "0" })).toHaveProperty("length");
    expect(errors(e, { width: "-1" })).toHaveProperty("width");
    expect(errors(e, { spacing: "0" })).toHaveProperty("spacing");
    expect(errors(e, { rowSpacing: "0" })).toHaveProperty("rowSpacing");
    expect(errors(e, { pattern: "triangular", rowSpacing: "0" })).toEqual({});
    expect(errors(e, { length: "100000", width: "100000", spacing: "0.001", rowSpacing: "0.001" })).toHaveProperty("spacing");
  });
});
