import { describe, expect, it } from "vitest";
import { defaultRawValues, evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import { engineContext } from "./framework/i18n";
import type { AnyEngine, CalculatorDefinition, EngineValues, ResultValue } from "./framework/types";
import { aspectRatio } from "./aspect-ratio";
import { decimalPlaces, nearestCommon, screenSize, simplifyRatio } from "./aspect-ratio/engine";
import { uptimeSla } from "./uptime-sla";
import { allowedDowntime, combinedUnavailability, makeUptimeSlaEngine } from "./uptime-sla/engine";
import uptimeEn from "./uptime-sla/text/en";
import { oee } from "./oee";
import { oeeOf } from "./oee/engine";
import { taktTime } from "./takt-time";
import { availableMinutes, minimumOperators, taktSeconds } from "./takt-time/engine";
import { resistorColorCode } from "./resistor-color-code";
import { decodeBands, encodeValue, parseResistance } from "./resistor-color-code/engine";

const CALCS: CalculatorDefinition[] = [aspectRatio, uptimeSla, oee, taktTime, resistorColorCode];

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
const has = (result: ReturnType<typeof ok>, label: string) => result.secondary?.some((s) => s.label === label) ?? false;

describe("batch 8 group C: content and examples", () => {
  it.each(CALCS.map((c) => [c.slug, c] as const))("%s has valid content and defaults", (_slug, c) => {
    expect(c.metaTitle.length).toBeLessThanOrEqual(59);
    expect(c.metaDescription.length).toBeGreaterThanOrEqual(70);
    expect(c.metaDescription.length).toBeLessThanOrEqual(160);
    expect(c.examples.length).toBeGreaterThanOrEqual(2);
    expect(c.examples.length).toBeLessThanOrEqual(3);
    expect(c.faqs.length).toBe(3);
    expect(c.related.length).toBeGreaterThanOrEqual(2);
    expect(c.related.length).toBeLessThanOrEqual(4);
    expect(c.related).not.toContain(c.slug);
    expect(c.addedOn).toBe("2026-10-28");
    expect(c.updated).toBe("2026-10-28");
    expect(c.status).toBe("published");
    expect(c.sources.length).toBeGreaterThan(0);
    expect(c.popularRank).toBeUndefined();
    expect(c.featured).toBeUndefined();
    expect(c.expertReview).toBeUndefined();
    expect(c.intro.length).toBeGreaterThan(0);
    expect(c.howToUse.length).toBeGreaterThan(0);
    expect(c.formulas.length).toBeGreaterThan(0);
    expect(c.assumptions.length).toBeGreaterThan(0);
    expect(Object.keys(c.translations)).toEqual([]);
    const ids = (c.engine.fields as readonly { id: string }[]).map((f) => f.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(evaluate(c.engine, defaultRawValues(c.engine)).ok).toBe(true);
  });

  it("uses the ids and slugs from the spec, unique within the group", () => {
    expect(CALCS.map((c) => [c.id, c.slug])).toEqual([
      ["aspect-ratio", "aspect-ratio-calculator"],
      ["uptime-sla", "uptime-calculator"],
      ["oee", "oee-calculator"],
      ["takt-time", "takt-time-calculator"],
      ["resistor-color-code", "resistor-color-code-calculator"],
    ]);
    for (const key of ["title", "metaTitle", "metaDescription"] as const) expect(new Set(CALCS.map((c) => c[key])).size).toBe(CALCS.length);
  });

  it.each(CALCS.flatMap((c) => c.examples.map((e) => [c.slug, e.title, c, e] as const)))("%s example “%s” matches", (_slug, _title, c, example) => {
    const evaluation = evaluate(c.engine, rawFromValues(c.engine, example.inputs));
    expect(evaluation.ok).toBe(true);
    if (!evaluation.ok) return;
    const value = evaluation.result.primary.value;
    if (typeof example.expectedPrimary === "string") expect(text(value)).toBe(example.expectedPrimary);
    else expect(num(value)).toBeCloseTo(example.expectedPrimary, 9);
  });
});

describe("Aspect ratio", () => {
  const e = aspectRatio.engine;
  it("simplifies sizes (python3 math.gcd)", () => {
    // gcd(1920, 1080) = 120 -> 16:9
    expect(text(ok(e, { mode: "simplify", width: 1920, height: 1080 }).primary.value)).toBe("16:9");
    // gcd(1366, 768) = 2 -> 683:384; 1366/768 = 1.7786458333
    const r = ok(e, { mode: "simplify", width: 1366, height: 768 });
    expect(text(r.primary.value)).toBe("683:384");
    expect(num(item(r, "Decimal ratio (width ÷ height)"))).toBeCloseTo(1.7786458333333333, 12);
    expect(text(item(r, "Nearest common ratio"))).toBe("16:9");
    // python3: (1366/768)/(16/9) - 1 = 0.00048828125
    expect(num(item(r, "Difference from the nearest common ratio"))).toBeCloseTo(0.048828125, 10);
    // 2560x1080: 64:27, nearest 2.39:1 at (2560/1080)/2.39 - 1 = -0.008213234154656801; 21:9 differs by +1.587%
    const u = ok(e, { mode: "simplify", width: 2560, height: 1080 });
    expect(text(item(u, "Nearest common ratio"))).toBe("2.39:1");
    expect(num(item(u, "Difference from the nearest common ratio"))).toBeCloseTo(-0.8213234154656801, 10);
    expect(num(u.tables![0].rows[6].cells[1])).toBeCloseTo(1.5873015873015817, 10);
    expect(u.notes?.some((n) => n.includes("64:27"))).toBe(true);
    // 3440x1440 = 43:18; nearest 2.39:1 with (3440/1440)/2.39 - 1 = -0.00046490004649002437
    const w = ok(e, { mode: "simplify", width: 3440, height: 1440 });
    expect(text(w.primary.value)).toBe("43:18");
    expect(text(item(w, "Nearest common ratio"))).toBe("2.39:1");
    expect(num(item(w, "Difference from the nearest common ratio"))).toBeCloseTo(-0.046490004649002437, 10);
    expect(w.tables?.[0].rows.find((row) => row.highlight)?.label).toBe("2.39:1");
  });
  it("handles decimals, squares and portrait sizes", () => {
    expect(simplifyRatio(1.5, 1)).toEqual({ ok: true, w: 3, h: 2, divisor: 0.5, scale: 10 });
    expect(text(ok(e, { mode: "simplify", width: 2.39, height: 1 }).primary.value)).toBe("239:100");
    expect(decimalPlaces(0.1 + 0.2)).toBe(1);
    expect(decimalPlaces(1.2345678)).toBeNull();
    const sq = ok(e, { mode: "simplify", width: 1024, height: 1024 });
    expect(text(sq.primary.value)).toBe("1:1");
    expect(text(item(sq, "Orientation"))).toBe("Square");
    const p = ok(e, { mode: "simplify", width: 1080, height: 1920 });
    expect(text(p.primary.value)).toBe("9:16");
    expect(text(item(p, "Nearest common ratio"))).toBe("9:16");
    expect(nearestCommon(16 / 9)).toEqual({ index: 5, differencePercent: 0 });
  });
  it("resizes to a ratio", () => {
    expect(text(ok(e, { mode: "resize", ratioWidth: 16, ratioHeight: 9, knownSide: "width", newSize: 1280 }).primary.value)).toBe("1,280 × 720");
    // 1000 × 9/16 = 562.5 -> rounds to 563
    const r = ok(e, { mode: "resize", ratioWidth: 16, ratioHeight: 9, knownSide: "width", newSize: 1000 });
    expect(text(r.primary.value)).toBe("1,000 × 563");
    expect(num(item(r, "Exact height"))).toBe(562.5);
    expect(r.notes?.some((n) => n.includes("multiples of 16"))).toBe(true);
    const h = ok(e, { mode: "resize", ratioWidth: 32, ratioHeight: 18, knownSide: "height", newSize: 1080 });
    expect(text(h.primary.value)).toBe("1,920 × 1,080");
    expect(text(item(h, "Ratio in lowest terms"))).toBe("16:9");
  });
  it("finds screen dimensions (python3 math.hypot)", () => {
    // 27 * 16 / hypot(16, 9) = 23.53253950236283; 27 * 9 / hypot = 13.237053470079092
    const s = ok(e, { mode: "screen", ratioWidth: 16, ratioHeight: 9, diagonal: 27, lengthUnit: "in" });
    expect(text(s.primary.value)).toBe("23.53 × 13.24 in");
    expect(num(item(s, "Screen area"))).toBeCloseTo(311.5014836795252, 9);
    expect(num(item(s, "Width in cm"))).toBeCloseTo(59.77265033600159, 9);
    expect(num(item(s, "Area in cm²"))).toBeCloseTo(2009.682972106825, 8);
    expect(screenSize(50, 3, 4)).toEqual({ width: 30, height: 40, area: 1200 });
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { mode: "simplify", width: 0 }).width).toBeDefined();
    expect(errors(e, { mode: "simplify", width: 1.2345678 }).width).toMatch(/6 decimal places/);
    expect(errors(e, { mode: "resize", ratioHeight: -1 }).ratioHeight).toBeDefined();
    expect(errors(e, { mode: "screen", diagonal: 0 }).diagonal).toBeDefined();
  });
});

describe("Uptime and SLA", () => {
  const e = uptimeSla.engine;
  const allowed = (sla: number) => ok(e, { mode: "allowed", sla });
  const cell = (r: ReturnType<typeof ok>, row: number) => text(r.tables![0].rows[row].cells[0]);
  it("converts an SLA into allowed downtime", () => {
    // 99.9%: day 86.4 s, week 604.8 s, month 2628 s, year 31536 s
    const r = allowed(99.9);
    expect(text(r.primary.value)).toBe("43 min 48 s");
    expect([0, 1, 2, 3].map((i) => cell(r, i))).toEqual(["1 min 26 s", "10 min 5 s", "43 min 48 s", "8 h 45 min 36 s"]);
    expect(num(item(r, "Number of nines"))).toBeCloseTo(3, 9);
    expect(num(item(r, "Allowed downtime per year in hours"))).toBeCloseTo(8.76, 9);
    // 99.99%: 262.8 s per month, 3153.6 s per year
    expect(text(allowed(99.99).primary.value)).toBe("4 min 23 s");
    expect(text(item(allowed(99.99), "Allowed downtime per year"))).toBe("52 min 34 s");
    // 99.999% of a day = 0.864 s
    expect(cell(allowed(99.999), 0)).toBe("0.864 s");
    // 50%: 1,314,000 s per month = 15 d 5 h
    expect(text(allowed(50).primary.value)).toBe("15 d 5 h");
    expect(allowedDowntime(99.95, 86400 * 365)).toBeCloseTo(15768, 6);
  });
  it("allows 100% with no downtime and no nines", () => {
    const r = allowed(100);
    expect(text(r.primary.value)).toBe("0 s");
    expect(has(r, "Number of nines")).toBe(false);
    expect(r.notes?.some((n) => n.includes("100%"))).toBe(true);
  });
  it("measures achieved availability", () => {
    // python3: (1 - 1500/2592000)*100 = 99.94212962962963
    const r = ok(e, { mode: "achieved", periodLength: 30, periodUnit: "d", downtime: 25, downtimeUnit: "min" });
    expect(num(r.primary.value)).toBeCloseTo(99.94212962962963, 10);
    // 2 h in a 365-day year: 1 - 7200/31536000 = 99.97716894977168 %
    expect(num(ok(e, { mode: "achieved", periodLength: 1, periodUnit: "y", downtime: 2, downtimeUnit: "h" }).primary.value)).toBeCloseTo(99.97716894977168, 10);
    const zero = ok(e, { mode: "achieved", downtime: 0 });
    expect(num(zero.primary.value)).toBe(100);
    expect(has(zero, "Number of nines")).toBe(false);
    expect(errors(e, { mode: "achieved", periodLength: 1, periodUnit: "h", downtime: 61, downtimeUnit: "min" }).downtime).toMatch(/longer than/);
  });
  it("combines components", () => {
    // python3 Fraction: 0.9995*0.9999*0.999 = 0.99840064995; nines = 2.7960564717476153
    const s = ok(e, { mode: "composite", components: "99.95, 99.99, 99.9", topology: "serial" });
    expect(num(s.primary.value)).toBeCloseTo(99.840064995, 9);
    expect(num(item(s, "Number of nines"))).toBeCloseTo(2.7960564717476153, 9);
    // parallel 99.9 and 99.9: 1 - 0.001**2 = 99.9999 %, 6 nines
    const p = ok(e, { mode: "composite", components: "99.9\n99.9", topology: "parallel" });
    expect(num(p.primary.value)).toBeCloseTo(99.9999, 9);
    expect(num(item(p, "Number of nines"))).toBeCloseTo(6, 9);
    expect(combinedUnavailability([0.5, 0.5], "serial")).toBeCloseTo(0.75, 12);
    expect(combinedUnavailability([0.99, 0], "serial")).toBe(1);
    expect(num(ok(e, { mode: "composite", components: "99, 0", topology: "serial" }).primary.value)).toBe(0);
  });
  it("rejects impossible inputs and parses decimal commas", () => {
    expect(errors(e, { mode: "allowed", sla: 0 }).sla).toBeDefined();
    expect(errors(e, { mode: "allowed", sla: 100.1 }).sla).toBeDefined();
    expect(errors(e, { mode: "composite", components: "99.9, 101" }).components).toMatch(/not a valid availability/);
    expect(errors(e, { mode: "composite", components: "99.9, abc" }).components).toMatch(/not a number/);
    expect(errors(e, { mode: "composite", components: "" }).components).toBeDefined();
    const de = makeUptimeSlaEngine(engineContext("de", uptimeEn));
    const r = evaluate(de, { ...defaultRawValues(de), mode: "composite", components: "99,95; 99,99; 99,9", topology: "serial" });
    expect(r.ok && num(r.result.primary.value)).toBeCloseTo(99.840064995, 9);
  });
});

describe("OEE", () => {
  const e = oee.engine;
  const base = { planned: 450, stopTime: 54, speedMode: "cycle", idealCycle: 1.5, totalCount: 13200, rejects: 330 };
  it("matches reference values (python3 Fraction)", () => {
    const r = ok(e, base);
    expect(num(r.primary.value)).toBeCloseTo(71.5, 9);
    expect(num(item(r, "Availability"))).toBeCloseTo(88, 9);
    expect(num(item(r, "Performance"))).toBeCloseTo(83.33333333333333, 9);
    expect(num(item(r, "Quality"))).toBeCloseTo(97.5, 9);
    expect(num(item(r, "Good count"))).toBe(12870);
    expect(num(item(r, "Fully productive time"))).toBeCloseTo(321.75, 9);
    // losses: 54 stop, 66 performance, 8.25 quality, 321.75 productive, summing to 450
    const minutes = r.tables![0].rows.map((row) => num(row.cells[0]));
    expect(minutes).toEqual([450, 54, expect.closeTo(66, 9), expect.closeTo(8.25, 9), expect.closeTo(321.75, 9)]);
    expect(minutes.slice(1).reduce((a, b) => a + b, 0)).toBeCloseTo(450, 9);
    // ideal rate 25/min = 2.4 s: 82.13333333333334
    expect(num(ok(e, { planned: 420, stopTime: 36, speedMode: "rate", idealRate: 25, totalCount: 8800, rejects: 176 }).primary.value)).toBeCloseTo(82.13333333333334, 9);
    // 960 / 120 / 12 s / 3900 / 85: 79.47916666666667
    expect(oeeOf(960, 120, 12, 3900, 85).oee * 100).toBeCloseTo(79.47916666666667, 9);
    expect(r.notes?.some((n) => n.includes("often quoted"))).toBe(true);
  });
  it("warns when performance exceeds 100%", () => {
    // 2 s × 3100 / 6000 s = 103.33 %
    const r = ok(e, { planned: 100, stopTime: 0, speedMode: "cycle", idealCycle: 2, totalCount: 3100, rejects: 0 });
    expect(num(item(r, "Performance"))).toBeCloseTo(103.33333333333333, 9);
    expect(r.notes?.some((n) => n.includes("above 100%"))).toBe(true);
    expect(ok(e, base).notes?.some((n) => n.includes("above 100%"))).toBe(false);
  });
  it("handles perfect production and rejects impossible inputs", () => {
    expect(num(ok(e, { planned: 60, stopTime: 0, idealCycle: 6, totalCount: 600, rejects: 0 }).primary.value)).toBeCloseTo(100, 9);
    expect(num(ok(e, { ...base, rejects: 13200 }).primary.value)).toBe(0);
    expect(errors(e, { ...base, stopTime: 450 }).stopTime).toBeDefined();
    expect(errors(e, { ...base, rejects: 13201 }).rejects).toBeDefined();
    expect(errors(e, { ...base, totalCount: 0 }).totalCount).toBeDefined();
    expect(errors(e, { ...base, totalCount: 10.5 }).totalCount).toBeDefined();
    expect(errors(e, { ...base, idealCycle: 0 }).idealCycle).toBeDefined();
  });
});

describe("Takt time", () => {
  const e = taktTime.engine;
  const base = { shiftHours: 8, shiftMinutes: 0, breaks: 50, shifts: 2, days: 1, demand: 645, workContent: 300, actualCycle: null };
  it("matches reference values", () => {
    // (480 - 50) * 2 = 860 min; 51600 / 645 = 80 s; 3600/80 = 45; ceil(300/80) = 4
    const r = ok(e, base);
    expect(num(r.primary.value)).toBe(80);
    expect(text(item(r, "Takt time (m:ss)"))).toBe("1:20");
    expect(num(item(r, "Units per hour of available time"))).toBe(45);
    expect(num(item(r, "Minimum operators or stations"))).toBe(4);
    expect(num(item(r, "Net available time in the period"))).toBe(860);
    // weekly: (450-30)*5 = 2100 min -> 90 s; capacity at 95 s = floor(126000/95) = 1326
    const w = ok(e, { ...base, shiftHours: 7, shiftMinutes: 30, breaks: 30, shifts: 1, days: 5, demand: 1400, workContent: null, actualCycle: 95 });
    expect(num(w.primary.value)).toBe(90);
    expect(text(item(w, "Can the line keep pace with takt?"))).toMatch(/^No/);
    expect(num(item(w, "Units possible at the actual cycle time"))).toBe(1326);
    expect(num(item(w, "Actual cycle time minus takt time"))).toBe(5);
    expect(text(item(ok(e, { ...base, actualCycle: 80 }), "Can the line keep pace with takt?"))).toMatch(/^Yes/);
    expect(taktSeconds(availableMinutes(600, 60, 1, 1), 216)).toBe(150);
    expect(minimumOperators(240, 80)).toBe(3);
    expect(minimumOperators(0.3, 0.1)).toBe(3);
  });
  it("formats long takt times as h:mm:ss and handles fractional days", () => {
    expect(text(item(ok(e, { ...base, breaks: 0, shifts: 1, demand: 4, workContent: null }), "Takt time (m:ss)"))).toBe("2:00:00");
    // 2.5 days of 860 min = 2150 min; 129000 / 1000 = 129 s
    expect(num(ok(e, { ...base, days: 2.5, demand: 1000 }).primary.value)).toBe(129);
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { ...base, shiftHours: 0, shiftMinutes: 0 }).shiftHours).toBeDefined();
    expect(errors(e, { ...base, breaks: 480 }).breaks).toBeDefined();
    expect(errors(e, { ...base, shiftHours: 9, shifts: 3 }).shifts).toBeDefined();
    expect(errors(e, { ...base, shiftHours: 24, shiftMinutes: 30, shifts: 1 }).shiftHours).toBeDefined();
    expect(errors(e, { ...base, demand: 0 }).demand).toBeDefined();
    expect(errors(e, { ...base, shiftMinutes: 60 }).shiftMinutes).toBeDefined();
  });
});

describe("Resistor color code", () => {
  const e = resistorColorCode.engine;
  const decode = (values: EngineValues) => ok(e, { mode: "decode", ...values });
  it("decodes bands", () => {
    const r = decode({ bands: "4", band1: "yellow", band2: "violet", multiplier: "red", tolerance: "gold" });
    expect(text(r.primary.value)).toBe("4.7 kΩ");
    expect(num(item(r, "Resistance in ohms"))).toBe(4700);
    // 4700 * 0.95 = 4465, 4700 * 1.05 = 4935
    expect(text(item(r, "Minimum within tolerance"))).toBe("4.465 kΩ");
    expect(text(item(r, "Maximum within tolerance"))).toBe("4.935 kΩ");
    expect(text(item(r, "Colour bands"))).toBe("Yellow – Violet – Red – Gold");
    // brown black silver: 10 × 0.01 = 0.1 Ω; with no band ±20%
    const small = decode({ bands: "4", band1: "brown", band2: "black", multiplier: "silver", tolerance: "none" });
    expect(text(small.primary.value)).toBe("0.1 Ω");
    expect(text(item(small, "Tolerance"))).toBe("±20%");
    expect(text(item(small, "Colour bands"))).toBe("Brown – Black – Silver");
    // 99 × 10⁹ and 999 × 10⁹
    expect(text(decode({ bands: "4", band1: "white", band2: "white", multiplier: "white", tolerance: "gold" }).primary.value)).toBe("99 GΩ");
    expect(text(decode({ bands: "5", band1: "white", band2: "white", band3: "white", multiplier: "white", tolerance: "brown" }).primary.value)).toBe("999 GΩ");
    // 5-band: 499 × 10 = 4.99 kΩ; gold multiplier 24.9 Ω
    expect(text(decode({ bands: "5", band1: "yellow", band2: "white", band3: "white", multiplier: "brown", tolerance: "brown" }).primary.value)).toBe("4.99 kΩ");
    expect(text(decode({ bands: "5", band1: "red", band2: "yellow", band3: "white", multiplier: "gold", tolerance: "violet" }).primary.value)).toBe("24.9 Ω");
    expect(decodeBands(["brown", "black", "black"], "blue")).toBe(100e6);
  });
  it("reads the 6th band temperature coefficient", () => {
    const r = decode({ bands: "6", band1: "brown", band2: "black", band3: "black", multiplier: "red", tolerance: "brown", tcr: "red" });
    expect(text(r.primary.value)).toBe("10 kΩ");
    expect(text(item(r, "Temperature coefficient"))).toBe("50 ppm/K");
    // 10000 × 50e-6 × 10 = 5 Ω
    expect(text(item(r, "Change over a 10 K (10 °C) temperature rise"))).toBe("5 Ω");
    expect(r.tables![0].rows.length).toBe(6);
    expect(has(decode({ bands: "5" }), "Temperature coefficient")).toBe(false);
  });
  it("parses resistance text", () => {
    expect(parseResistance("4.7k")).toEqual({ ok: true, digits: "47", exponent: 2 });
    expect(parseResistance("4k7")).toEqual({ ok: true, digits: "47", exponent: 2 });
    expect(parseResistance("4,7 kΩ")).toEqual({ ok: true, digits: "47", exponent: 2 });
    expect(parseResistance("R47")).toEqual({ ok: true, digits: "47", exponent: -2 });
    expect(parseResistance("2.2M")).toEqual({ ok: true, digits: "22", exponent: 5 });
    expect(parseResistance("1e3")).toEqual({ ok: true, digits: "1", exponent: 3 });
    expect(parseResistance("470 ohms")).toEqual({ ok: true, digits: "47", exponent: 1 });
    expect(parseResistance("0.000")).toEqual({ ok: false, error: "zero" });
    expect(parseResistance("1m")).toEqual({ ok: false, error: "ambiguousM" });
    expect(parseResistance("abc")).toEqual({ ok: false, error: "invalidValue" });
    expect(parseResistance("4.7.1")).toEqual({ ok: false, error: "invalidValue" });
  });
  it("encodes values into bands", () => {
    const enc = (value: string, encodeBands: string, encodeTolerance = "gold") => text(ok(e, { mode: "encode", value, encodeBands, encodeTolerance }).primary.value);
    expect(enc("4.7k", "4")).toBe("Yellow – Violet – Red – Gold");
    expect(enc("4.99k", "5", "brown")).toBe("Yellow – White – White – Brown – Brown");
    expect(enc("0.1", "4", "none")).toBe("Brown – Black – Silver");
    expect(enc("1", "4")).toBe("Brown – Black – Gold – Gold");
    expect(enc("10", "4")).toBe("Brown – Black – Black – Gold");
    expect(enc("2.2M", "4", "silver")).toBe("Red – Red – Green – Silver");
    expect(encodeValue("1", 11, 2)).toEqual({ ok: false, error: "tooLarge", needed: 1 });
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { mode: "encode", value: "4.99k", encodeBands: "4" }).value).toMatch(/3 significant digits/);
    expect(errors(e, { mode: "encode", value: "0.01", encodeBands: "4" }).value).toMatch(/too small/);
    expect(errors(e, { mode: "encode", value: "100G", encodeBands: "4" }).value).toMatch(/too large/);
    expect(errors(e, { mode: "encode", value: "0", encodeBands: "4" }).value).toBeDefined();
    expect(errors(e, { mode: "encode", value: "", encodeBands: "4" }).value).toBeDefined();
    expect(errors(e, { mode: "encode", value: "1k", encodeBands: "5", encodeTolerance: "none" }).encodeTolerance).toBeDefined();
    expect(errors(e, { mode: "decode", bands: "5", tolerance: "none" }).tolerance).toBeDefined();
    expect(errors(e, { mode: "decode", band1: "black" }).band1).toBeDefined();
    expect(errors(e, { mode: "decode", multiplier: "pink" }).multiplier).toBeDefined();
  });
});
