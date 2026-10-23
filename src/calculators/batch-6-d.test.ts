import { describe, expect, it } from "vitest";
import { defaultRawValues, evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import type { AnyEngine, CalculatorDefinition, RawValues, ResultValue } from "./framework/types";
import { overtimePay } from "./overtime-pay";
import { overtimePay as overtimeMath } from "./overtime-pay/engine";
import { depreciation } from "./depreciation";
import { depreciationSchedule } from "./depreciation/engine";
import { capRate } from "./cap-rate";
import { drywall } from "./drywall";
import { COMPOUND_L_PER_SQ_M } from "./drywall/engine";
import { gravelMulch } from "./gravel-mulch";
import { CUBIC_M_PER_CUBIC_YD, KG_M3_PER_LB_FT3 } from "./gravel-mulch/engine";

const DEFS: CalculatorDefinition[] = [overtimePay, depreciation, capRate, drywall, gravelMulch];

const num = (value: ResultValue) => (value.kind === "currency" ? value.amount : value.kind === "number" || value.kind === "percent" ? value.value : Number.NaN);

function run(engine: AnyEngine, raw: RawValues) {
  return evaluate(engine, { ...defaultRawValues(engine), ...raw });
}
function ok(engine: AnyEngine, raw: RawValues) {
  const result = run(engine, raw);
  if (!result.ok) throw new Error(JSON.stringify(result.errors));
  return result.result;
}
const primary = (engine: AnyEngine, raw: RawValues) => num(ok(engine, raw).primary.value);
const secondary = (engine: AnyEngine, raw: RawValues, label: string) => {
  const item = ok(engine, raw).secondary?.find((s) => s.label === label);
  if (!item) throw new Error(`missing ${label}`);
  return num(item.value);
};
const hasSecondary = (engine: AnyEngine, raw: RawValues, label: string) => (ok(engine, raw).secondary ?? []).some((s) => s.label === label);
const errors = (engine: AnyEngine, raw: RawValues) => {
  const result = run(engine, raw);
  return result.ok ? {} : result.errors;
};

describe("batch 6 group D: content and examples", () => {
  it.each(DEFS.map((d) => [d.slug, d] as const))("%s has valid metadata and content", (_slug, d) => {
    expect(d.metaTitle.length).toBeLessThanOrEqual(59);
    expect(d.metaDescription.length).toBeGreaterThanOrEqual(70);
    expect(d.metaDescription.length).toBeLessThanOrEqual(160);
    expect(d.examples.length).toBeGreaterThanOrEqual(2);
    expect(d.examples.length).toBeLessThanOrEqual(3);
    expect(d.faqs.length).toBe(3);
    expect(d.related.length).toBeGreaterThanOrEqual(2);
    expect(d.related.length).toBeLessThanOrEqual(4);
    expect(d.related).not.toContain(d.slug);
    expect(d.addedOn).toBe("2026-10-22");
    expect(d.updated).toBe("2026-10-22");
    expect(d.status).toBe("published");
    expect(d.sources.length).toBeGreaterThan(0);
    expect(d.popularRank).toBeUndefined();
    expect(d.featured).toBeUndefined();
    const ids = (d.engine.fields as readonly { id: string }[]).map((f) => f.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(evaluate(d.engine, defaultRawValues(d.engine)).ok).toBe(true);
  });

  it("sets review flags exactly on the finance tools", () => {
    expect(overtimePay.expertReview).toEqual({ area: "tax", status: "pending" });
    expect(depreciation.expertReview).toEqual({ area: "tax", status: "pending" });
    expect(capRate.expertReview).toEqual({ area: "financial", status: "pending" });
    expect(drywall.expertReview).toBeUndefined();
    expect(gravelMulch.expertReview).toBeUndefined();
    for (const d of [overtimePay, depreciation, capRate]) {
      const text = d.assumptions.join(" ");
      expect(text).toContain("not been professionally reviewed");
      expect(text).toMatch(/estimate/);
      expect(d.sources.every((s) => s.url)).toBe(true);
    }
  });

  it.each(DEFS.flatMap((d) => d.examples.map((e) => [d.slug, e.title, d, e] as const)))("%s example “%s”", (_slug, _title, d, example) => {
    const evaluation = evaluate(d.engine, rawFromValues(d.engine, example.inputs));
    expect(evaluation.ok).toBe(true);
    if (!evaluation.ok) return;
    const value = evaluation.result.primary.value;
    if (typeof example.expectedPrimary === "string") {
      expect(formatResultValue(value, String(example.inputs.currency ?? "USD"))).toBe(example.expectedPrimary);
    } else {
      expect(num(value)).toBeCloseTo(example.expectedPrimary, 9);
    }
  });
});

describe("overtime pay", () => {
  const e = overtimePay.engine;
  const base = { currency: "USD", threshold: "40", multiplier: "1.5", doubleHours: "0", doubleMultiplier: "2" };
  it("matches reference values", () => {
    // python3: 40*25 + 10*25*1.5 = 1375.0
    expect(primary(e, { ...base, rate: "25", hours: "50" })).toBeCloseTo(1375, 9);
    // python3: 40*19.75 + (55-40-6)*19.75*1.5 + 6*19.75*2 = 1293.625
    expect(primary(e, { ...base, rate: "19.75", hours: "55", doubleHours: "6" })).toBeCloseTo(1293.625, 9);
    // python3: 8*30 + 2*30*1.5 = 330.0 ; 330/10 = 33.0  (daily-style threshold of 8)
    expect(primary(e, { ...base, rate: "30", hours: "10", threshold: "8" })).toBeCloseTo(330, 9);
    expect(secondary(e, { ...base, rate: "30", hours: "10", threshold: "8" }, "Effective hourly rate")).toBeCloseTo(33, 9);
    // python3: 40*18.5 + 8*18.5*1.5 + 4*18.5*2 = 1110.0 ; /52 = 21.346153846153847
    const r = { ...base, rate: "18.5", hours: "52", doubleHours: "4" };
    expect(secondary(e, r, "Overtime pay")).toBeCloseTo(222, 9);
    expect(secondary(e, r, "Double-time pay")).toBeCloseTo(148, 9);
    expect(secondary(e, r, "Effective hourly rate")).toBeCloseTo(21.346153846153847, 9);
    expect(secondary(e, r, "Overtime hours (including double time)")).toBe(12);
  });
  it("handles no overtime, zero hours and an empty double-time field", () => {
    expect(primary(e, { ...base, rate: "20", hours: "32" })).toBeCloseTo(640, 9);
    expect(ok(e, { ...base, rate: "20", hours: "32" }).notes?.[0]).toMatch(/no overtime/);
    expect(primary(e, { ...base, rate: "20", hours: "0" })).toBe(0);
    expect(hasSecondary(e, { ...base, rate: "20", hours: "0" }, "Effective hourly rate")).toBe(false);
    expect(primary(e, { ...base, rate: "20", hours: "45", doubleHours: "" })).toBeCloseTo(950, 9);
    // a threshold of 0 makes every hour overtime: python3: 10*20*1.5 = 300.0
    expect(primary(e, { ...base, rate: "20", hours: "10", threshold: "0" })).toBeCloseTo(300, 9);
    expect(overtimeMath({ rate: 10, hours: 168, threshold: 40, multiplier: 5, doubleHours: 128, doubleMultiplier: 5 }).total).toBeCloseTo(400 + 128 * 50, 9);
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { ...base, rate: "20", hours: "45", doubleHours: "6" }).doubleHours).toMatch(/cannot be more than the overtime hours/);
    expect(errors(e, { ...base, rate: "20", hours: "38", doubleHours: "1" }).doubleHours).toBeDefined();
    expect(errors(e, { ...base, rate: "0", hours: "40" }).rate).toBeDefined();
    expect(errors(e, { ...base, rate: "20", hours: "169" }).hours).toBeDefined();
    expect(errors(e, { ...base, rate: "20", hours: "-1" }).hours).toBeDefined();
    expect(errors(e, { ...base, rate: "20", hours: "40", multiplier: "0.5" }).multiplier).toBeDefined();
    expect(errors(e, { ...base, rate: "20", hours: "40", multiplier: "6" }).multiplier).toBeDefined();
  });
});

describe("depreciation", () => {
  const e = depreciation.engine;
  const table = (raw: RawValues) => ok(e, raw).tables![0].rows.map((r) => r.cells.map(num));
  it("matches reference schedules", () => {
    // python3 straight-line: (30000-3000)/5 = 5400.0
    expect(primary(e, { cost: "30000", salvage: "3000", life: "5", method: "straightLine" })).toBeCloseTo(5400, 9);
    // python3 DDB 12000/1500/5: [4800, 2880, 1728, 1036.8, 55.2], book [7200, 4320, 2592, 1555.2, 1500]
    const ddb = table({ cost: "12000", salvage: "1500", life: "5", method: "declining200" });
    [4800, 2880, 1728, 1036.8, 55.2].forEach((d, i) => expect(ddb[i][0]).toBeCloseTo(d, 9));
    [7200, 4320, 2592, 1555.2, 1500].forEach((b, i) => expect(ddb[i][2]).toBeCloseTo(b, 9));
    expect(ddb[4][1]).toBeCloseTo(10500, 9);
    // python3 SYD 50000/5000/10, year 2: 45000*9/55 = 7363.636363636364
    expect(table({ cost: "50000", salvage: "5000", life: "10", method: "sumOfYears" })[1][0]).toBeCloseTo(7363.636363636364, 9);
    // python3 150% DB 10000/0/3: rate 0.5 -> [5000, 2500, 2500]
    const db150 = table({ cost: "10000", salvage: "0", life: "3", method: "declining150" });
    [5000, 2500, 2500].forEach((d, i) => expect(db150[i][0]).toBeCloseTo(d, 9));
  });
  it("never goes below salvage and ends exactly at salvage", () => {
    // python3 DDB 10000/4000/4: [5000, 1000, 0, 0] (salvage floor reached in year 2)
    const rows = depreciationSchedule(10000, 4000, 4, "declining200");
    expect(rows.map((r) => r.depreciation)).toEqual([5000, 1000, 0, 0]);
    for (const method of ["straightLine", "declining200", "declining150", "sumOfYears"]) {
      for (const life of [1, 2, 7, 100]) {
        const s = depreciationSchedule(98765.43, 1234.5, life, method);
        expect(s).toHaveLength(life);
        expect(s[s.length - 1].bookValue).toBe(1234.5);
        expect(s[s.length - 1].accumulated).toBeCloseTo(98765.43 - 1234.5, 6);
        expect(s.every((r) => r.depreciation >= 0 && r.bookValue >= 1234.5 - 1e-6)).toBe(true);
      }
    }
    // one-year life takes the whole depreciable amount
    expect(primary(e, { cost: "5000", salvage: "500", life: "1", method: "declining200" })).toBeCloseTo(4500, 9);
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { cost: "1000", salvage: "1000", life: "5" }).salvage).toMatch(/less than the asset cost/);
    expect(errors(e, { cost: "1000", salvage: "1500", life: "5" }).salvage).toBeDefined();
    expect(errors(e, { cost: "0", salvage: "0", life: "5" }).cost).toBeDefined();
    expect(errors(e, { cost: "1000", salvage: "-1", life: "5" }).salvage).toBeDefined();
    expect(errors(e, { cost: "1000", salvage: "0", life: "2.5" }).life).toBeDefined();
    expect(errors(e, { cost: "1000", salvage: "0", life: "0" }).life).toBeDefined();
    expect(errors(e, { cost: "1000", salvage: "0", life: "101" }).life).toBeDefined();
  });
});

describe("cap rate", () => {
  const e = capRate.engine;
  it("matches reference values", () => {
    // python3: (48000*0.95-16000)/450000*100 = 6.577777777777778
    expect(primary(e, { mode: "rate", value: "450000", gross: "48000", vacancy: "5", expenses: "16000" })).toBeCloseTo(6.577777777777778, 9);
    // python3: 16000/45600*100 = 35.08771929824561
    expect(secondary(e, { mode: "rate", value: "450000", gross: "48000", vacancy: "5", expenses: "16000" }, "Operating expense ratio (of effective gross income)")).toBeCloseTo(35.08771929824561, 9);
    // python3: (100000*(1-0.1)-30000)/1000000*100 = 6.0
    expect(primary(e, { mode: "rate", value: "1000000", gross: "100000", vacancy: "10", expenses: "30000" })).toBeCloseTo(6, 9);
    // python3: 41250/0.0575 = 717391.304347826
    expect(primary(e, { mode: "value", noi: "41250", targetRate: "5.75" })).toBeCloseTo(717391.304347826, 6);
    // python3: 25000/0.04 = 625000.0 ; 25000/0.03 - 625000 = 208333.33333333337
    expect(primary(e, { mode: "value", noi: "25000", targetRate: "4" })).toBeCloseTo(625000, 6);
    expect(secondary(e, { mode: "value", noi: "25000", targetRate: "4" }, "Value change if the cap rate is 1 point lower")).toBeCloseTo(208333.33333333337, 6);
  });
  it("allows a negative NOI with a note and handles 100% vacancy", () => {
    const r = ok(e, { mode: "rate", value: "300000", gross: "20000", vacancy: "10", expenses: "25000" });
    // python3: (20000*0.9-25000)/300000*100 = -2.3333333333333335
    expect(num(r.primary.value)).toBeCloseTo(-2.3333333333333335, 9);
    expect(r.notes?.[0]).toMatch(/negative/);
    const empty = ok(e, { mode: "rate", value: "300000", gross: "20000", vacancy: "100", expenses: "1000" });
    expect(num(empty.primary.value)).toBeCloseTo((-1000 / 300000) * 100, 9);
    expect(empty.secondary?.some((s) => s.label.startsWith("Operating expense ratio"))).toBe(false);
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { mode: "rate", value: "0" }).value).toBeDefined();
    expect(errors(e, { mode: "rate", vacancy: "101" }).vacancy).toBeDefined();
    expect(errors(e, { mode: "rate", gross: "-5" }).gross).toBeDefined();
    expect(errors(e, { mode: "rate", expenses: "-5" }).expenses).toBeDefined();
    expect(errors(e, { mode: "value", targetRate: "0" }).targetRate).toBeDefined();
    expect(errors(e, { mode: "value", noi: "-100" }).noi).toMatch(/greater than 0/);
    expect(errors(e, { mode: "value", noi: "0" }).noi).toBeDefined();
    // hidden fields are not validated
    expect(run(e, { mode: "value", value: "" }).ok).toBe(true);
  });
});

describe("drywall", () => {
  const e = drywall.engine;
  const imp = { units: "imperial", ceiling: "no", doors: "0", windows: "0", waste: "0", sheetImperial: "4x8" };
  it("matches reference values", () => {
    // python3: math.ceil(12*8/32) = 3 (exact, no waste)
    expect(primary(e, { ...imp, lengthImperial: "12", heightImperial: "8" })).toBe(3);
    // python3: math.ceil((60*10 + 15*12 - 3*20 - 4*15)*1.15/40) = math.ceil(18.975) = 19
    expect(primary(e, { ...imp, lengthImperial: "60", heightImperial: "10", ceiling: "yes", roomLengthImperial: "15", roomWidthImperial: "12", doors: "3", windows: "4", waste: "15", sheetImperial: "4x10" })).toBe(19);
    // python3: math.ceil(20*2.7*1.1/(1.2*2.7)) = math.ceil(18.33) = 19
    const metric = { units: "metric", lengthMetric: "20", heightMetric: "2.7", ceiling: "no", doors: "0", windows: "0", waste: "10", sheetMetric: "1.2x2.7" };
    expect(primary(e, metric)).toBe(19);
    // python3: 54*9*3.785411784/(1000*0.3048**2) = 19.802475
    expect(secondary(e, metric, "Joint compound, approximate (ready-mixed)")).toBeCloseTo(54 * COMPOUND_L_PER_SQ_M, 9);
    expect(COMPOUND_L_PER_SQ_M).toBeCloseTo(0.3667125, 9);
    // python3: 52*9 - 70 + 168 = 566 ; 566*0.009 = 5.094
    const room = { ...imp, lengthImperial: "52", heightImperial: "9", ceiling: "yes", roomLengthImperial: "14", roomWidthImperial: "12", doors: "2", windows: "2", waste: "12", sheetImperial: "4x12" };
    expect(secondary(e, room, "Net area to cover")).toBeCloseTo(566, 9);
    expect(secondary(e, room, "Joint compound, approximate (ready-mixed)")).toBeCloseTo(5.094, 9);
  });
  it("ignores ceiling fields when the ceiling is excluded and rounds exact multiples down", () => {
    expect(primary(e, { ...imp, lengthImperial: "12", heightImperial: "8", roomLengthImperial: "", roomWidthImperial: "" })).toBe(3);
    expect(hasSecondary(e, { ...imp, lengthImperial: "12", heightImperial: "8" }, "Ceiling area")).toBe(false);
    // python3: math.ceil(4*8.8*1.0/32) = math.ceil(1.1) = 2 ; 4*8/32 = 1.0 -> 1
    expect(primary(e, { ...imp, lengthImperial: "4", heightImperial: "8.8" })).toBe(2);
    expect(primary(e, { ...imp, lengthImperial: "4", heightImperial: "8", waste: "0" })).toBe(1);
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { ...imp, lengthImperial: "10", heightImperial: "8", doors: "4", windows: "0" }).doors).toMatch(/whole wall area/);
    expect(errors(e, { ...imp, lengthImperial: "0", heightImperial: "8" }).lengthImperial).toBeDefined();
    expect(errors(e, { ...imp, lengthImperial: "10", heightImperial: "8", ceiling: "yes", roomLengthImperial: "0" }).roomLengthImperial).toBeDefined();
    expect(errors(e, { ...imp, lengthImperial: "10", heightImperial: "8", waste: "51" }).waste).toBeDefined();
    expect(errors(e, { ...imp, lengthImperial: "10", heightImperial: "8", doors: "1.5" }).doors).toBeDefined();
    expect(errors(e, { ...imp, sheetImperial: "5x9" }).sheetImperial).toBeDefined();
  });
});

describe("gravel and mulch", () => {
  const e = gravelMulch.engine;
  const imp = { units: "imperial", shape: "rectangle", material: "gravel", priceBasis: "weight" };
  it("matches reference values", () => {
    // python3: 30*10*2/12/27 = 1.8518518518518519 yd3
    expect(primary(e, { ...imp, lengthImperial: "30", widthImperial: "10", depthImperial: "2" })).toBeCloseTo(1.8518518518518519, 9);
    // python3: 50 ft3 * 100 lb/ft3 / 2000 = 2.5 short tons ; 2.5 * 52 = 130.0
    const priced = { ...imp, lengthImperial: "30", widthImperial: "10", depthImperial: "2", priceWeightImperial: "52" };
    expect(secondary(e, priced, "Weight in US short tons")).toBeCloseTo(2.5, 9);
    expect(secondary(e, priced, "Estimated cost")).toBeCloseTo(130, 9);
    // python3: 50*100*0.45359237/1000 = 2.26796185 tonnes
    expect(secondary(e, priced, "Weight in metric tonnes")).toBeCloseTo(2.26796185, 9);
    // python3: math.pi*12**2/4*3/12/27 = 1.0471975511965976 yd3 ; ft3 = 28.274333882308138, 2 cu ft bags -> 15
    const circle = { ...imp, shape: "circle", diameterImperial: "12", depthImperial: "3", material: "woodMulch", bagImperial: "2" };
    expect(primary(e, circle)).toBeCloseTo(1.0471975511965976, 9);
    expect(secondary(e, circle, "Bags needed")).toBe(15);
    // metric: python3: 5*2*0.05 = 0.5 m3 ; 0.5*1600 = 800 kg ; 0.5/0.764554857984 = 0.6539753096571961 yd3 ; 0.5*35 = 17.5
    const metric = { units: "metric", shape: "rectangle", lengthMetric: "5", widthMetric: "2", depthMetric: "5", material: "gravel", priceBasis: "volume", priceVolumeMetric: "35" };
    expect(primary(e, metric)).toBeCloseTo(0.5, 9);
    expect(secondary(e, metric, "Weight in kilograms")).toBeCloseTo(800, 9);
    expect(secondary(e, metric, "Volume in the other system")).toBeCloseTo(0.6539753096571961, 9);
    expect(secondary(e, metric, "Estimated cost")).toBeCloseTo(17.5, 9);
    expect(CUBIC_M_PER_CUBIC_YD).toBeCloseTo(0.764554857984, 12);
    expect(KG_M3_PER_LB_FT3).toBeCloseTo(16.018463373960138, 9);
  });
  it("uses the density for the chosen material and the custom density", () => {
    const base = { ...imp, lengthImperial: "27", widthImperial: "1", depthImperial: "12" }; // 27 ft3 = 1 yd3
    expect(secondary(e, base, "Weight in pounds")).toBeCloseTo(2700, 9);
    expect(secondary(e, { ...base, material: "crushedStone" }, "Weight in pounds")).toBeCloseTo(27 * 92.6, 9);
    expect(secondary(e, { ...base, material: "custom", densityCustomImperial: "110" }, "Weight in pounds")).toBeCloseTo(2970, 9);
    expect(errors(e, { ...base, material: "custom", densityCustomImperial: "" }).densityCustomImperial).toBeDefined();
    // exact bag multiple is not rounded up: 27 ft3 / 0.5 = 54
    expect(secondary(e, { ...base, bagImperial: "0.5" }, "Bags needed")).toBe(54);
    expect(hasSecondary(e, base, "Bags needed")).toBe(false);
    expect(hasSecondary(e, base, "Estimated cost")).toBe(false);
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { ...imp, depthImperial: "0" }).depthImperial).toBeDefined();
    expect(errors(e, { ...imp, lengthImperial: "-2" }).lengthImperial).toBeDefined();
    expect(errors(e, { ...imp, shape: "circle", diameterImperial: "0" }).diameterImperial).toBeDefined();
    expect(errors(e, { ...imp, densityGravelImperial: "0" }).densityGravelImperial).toBeDefined();
    expect(errors(e, { ...imp, bagImperial: "0" }).bagImperial).toBeDefined();
    expect(errors(e, { ...imp, priceWeightImperial: "-1" }).priceWeightImperial).toBeDefined();
  });
});
