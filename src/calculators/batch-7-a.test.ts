import { describe, expect, it } from "vitest";
import { defaultRawValues, evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import type { AnyEngine, CalculatorDefinition, EngineValues, ResultValue } from "./framework/types";
import { mifflinStJeor } from "./bmr/engine";
import { bmr } from "./bmr";
import { tdee } from "./tdee";
import { ACTIVITY_FACTORS, HALF_KG_WEEK_KCAL_DAY, tdee as tdeeOf } from "./tdee/engine";
import tdeeText from "./tdee/text/en";
import { dueDate } from "./due-date";
import { daysToDueDate, estimateDueDate, trimesterOf } from "./due-date/engine";
import { bodyFatNavy } from "./body-fat-navy";
import { navyBodyFatFemale, navyBodyFatMale } from "./body-fat-navy/engine";
import bodyFatText from "./body-fat-navy/text/en";
import { caloriesBurned } from "./calories-burned";
import { ACTIVITY_METS, caloriesBurned as kcalOf } from "./calories-burned/engine";
import caloriesText from "./calories-burned/text/en";
import { swimPace } from "./swim-pace";
import { METRES_PER_YARD, pacePer100m } from "./swim-pace/engine";
import swimText from "./swim-pace/text/en";
import dueText from "./due-date/text/en";

const DEFINITIONS: CalculatorDefinition[] = [tdee, dueDate, bodyFatNavy, caloriesBurned, swimPace];

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

describe("batch 7 group A: definitions", () => {
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
    expect(d.addedOn).toBe("2026-10-24");
    expect(d.updated).toBe("2026-10-24");
    expect(d.status).toBe("published");
    expect(d.popularRank).toBeUndefined();
    expect(d.featured).toBeUndefined();
    expect(evaluate(d.engine, defaultRawValues(d.engine)).ok).toBe(true);
    for (const example of d.examples) {
      const value = ok(d.engine, example.inputs).primary.value;
      if (typeof example.expectedPrimary === "string") expect(text(value)).toBe(example.expectedPrimary);
      else expect(num(value)).toBeCloseTo(example.expectedPrimary, 9);
    }
  });

  it("flags the medical tools for review and says they are not advice", () => {
    for (const d of [tdee, dueDate, bodyFatNavy, caloriesBurned]) {
      expect(d.expertReview).toEqual({ area: "medical", status: "pending" });
      expect(d.assumptions.join(" ")).toMatch(/not (medical|financial|investment|tax|legal|engineering)?\s*(or [a-z]+ )?advice/i);
      expect(d.assumptions.join(" ")).toMatch(/not yet been professionally reviewed/);
    }
    expect(swimPace.expertReview).toBeUndefined();
  });

  it("titles, slugs and meta titles are unique within the batch", () => {
    expect(new Set(DEFINITIONS.map((d) => d.title)).size).toBe(DEFINITIONS.length);
    expect(new Set(DEFINITIONS.map((d) => d.slug)).size).toBe(DEFINITIONS.length);
    expect(new Set(DEFINITIONS.map((d) => d.metaTitle)).size).toBe(DEFINITIONS.length);
    expect(DEFINITIONS.map((d) => d.slug)).toEqual(["tdee-calculator", "due-date-calculator", "body-fat-calculator", "calories-burned-calculator", "swim-pace-calculator"]);
  });
});

describe("TDEE calculator", () => {
  const e = tdee.engine;
  const base = { units: "metric", sex: "male", age: 30, weightKg: 80, heightCm: 180 };

  it("uses the same Mifflin–St Jeor BMR as the BMR calculator", () => {
    for (const v of [base, { units: "metric", sex: "female", age: 52, weightKg: 61.5, heightCm: 158 }, { units: "imperial", sex: "male", age: 45, weightLb: 190, heightFt: 5, heightIn: 10 }]) {
      const fromBmr = num(ok(bmr.engine, v).primary.value);
      expect(num(item(ok(e, { ...v, activity: "sedentary" }), tdeeText.bmr))).toBeCloseTo(fromBmr, 9);
    }
    expect(mifflinStJeor("male", 80, 180, 30)).toBe(1780);
  });

  it("matches python references", () => {
    // python: b=10*80+6.25*180-5*30+5 -> 1780; b*1.9 = 3382.0; b*1.725 = 3070.5; b*1.375 = 2447.5
    expect(num(ok(e, { ...base, activity: "extra" }).primary.value)).toBeCloseTo(3382, 9);
    expect(num(ok(e, { ...base, activity: "very" }).primary.value)).toBeCloseTo(3070.5, 9);
    expect(num(ok(e, { ...base, activity: "light" }).primary.value)).toBeCloseTo(2447.5, 9);
    // python: 1394*1.55*4.184 = 9040.3688
    const r = ok(e, { units: "metric", sex: "female", age: 35, weightKg: 68, heightCm: 168, activity: "moderate" });
    expect(num(item(r, tdeeText.kj))).toBeCloseTo(9040.3688, 6);
    // python: 0.5*7700/7 = 550.0 ; 2160.7-550 = 1610.7 ; 2160.7+550 = 2710.7
    expect(HALF_KG_WEEK_KCAL_DAY).toBeCloseTo(550, 12);
    expect(num(item(r, tdeeText.lose))).toBeCloseTo(1610.7, 9);
    expect(num(item(r, tdeeText.gain))).toBeCloseTo(2710.7, 9);
    expect(tdeeOf(1000, "moderate")).toBeCloseTo(1550, 12);
  });

  it("lists every activity level in the table and highlights the chosen one", () => {
    const table = ok(e, { ...base, activity: "light" }).tables![0];
    expect(table.rows).toHaveLength(5);
    expect(table.rows.map((row) => num(row.cells[0]))).toEqual(Object.values(ACTIVITY_FACTORS));
    expect(table.rows.filter((row) => row.highlight).map((row) => row.label)).toEqual([tdeeText.activityShort.light]);
    expect(num(table.rows[0].cells[1])).toBeCloseTo(2136, 9); // python: 1780*1.2
  });

  it("adds a note when the weight-loss figure is below BMR", () => {
    expect(ok(e, { ...base, activity: "sedentary" }).notes).toContain(tdeeText.notes.belowBmr); // 2136 - 550 = 1586 < 1780
    expect(ok(e, { ...base, activity: "extra" }).notes).not.toContain(tdeeText.notes.belowBmr);
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { ...base, age: 10, activity: "moderate" }).age).toBeDefined();
    expect(errors(e, { ...base, weightKg: 0, activity: "moderate" }).weightKg).toBeDefined();
    expect(errors(e, { units: "imperial", sex: "male", age: 30, weightLb: 150, heightFt: 0, heightIn: 0, activity: "moderate" }).heightFt).toBeDefined();
    expect(errors(e, { ...base, activity: "athlete" }).activity).toBeDefined();
  });
});

describe("due date calculator", () => {
  const e = dueDate.engine;
  const lmp = (date: string, cycle: number, asOf = "2026-10-24") => ok(e, { method: "lmp", lmp: date, cycle, asOf });

  it("matches python references", () => {
    // python: date(2026,1,1)+timedelta(272) -> 2026-09-30 ; +297 -> 2026-10-25
    expect(text(lmp("2026-01-01", 20).primary.value)).toBe("Wednesday, September 30, 2026");
    expect(text(lmp("2026-01-01", 45).primary.value)).toBe("Sunday, October 25, 2026");
    // python: date(2024,2,29)+timedelta(280) -> 2024-12-05
    expect(estimateDueDate("2024-02-29", "lmp")).toBe("2024-12-05");
    // python: date(2026,12,31)+timedelta(280) -> 2027-10-07
    expect(estimateDueDate("2026-12-31", "lmp")).toBe("2027-10-07");
    // python: date(2026,6,15)+timedelta(266) -> 2027-03-08 ; date(2026,6,20)+timedelta(263) -> 2027-03-10
    expect(text(ok(e, { method: "conception", conception: "2026-06-15", asOf: "2026-10-24" }).primary.value)).toBe("Monday, March 8, 2027");
    expect(text(ok(e, { method: "ivf", transfer: "2026-06-20", embryoAge: "3", asOf: "2026-10-24" }).primary.value)).toBe("Wednesday, March 10, 2027");
    expect([daysToDueDate("lmp", 28), daysToDueDate("lmp", 35), daysToDueDate("conception"), daysToDueDate("ivf", 28, 5)]).toEqual([280, 287, 266, 261]);
  });

  it("gives the gestational age, trimester and trimester dates", () => {
    // python: (date(2026,10,24)-date(2026,6,1)).days = 145 -> divmod 7 = (20, 5)
    const r = lmp("2026-06-01", 28);
    expect(text(item(r, dueText.gestationalAge))).toBe("20 weeks, 5 days");
    expect(text(item(r, dueText.trimester))).toBe(dueText.trimesters.second);
    // python: date(2026,6,1)+timedelta(97) -> 2026-09-06 ; +195 -> 2026-12-13 ; +196 -> 2026-12-14
    expect(item(r, dueText.firstEnds)).toEqual({ kind: "date", iso: "2026-09-06" });
    expect(item(r, dueText.secondEnds)).toEqual({ kind: "date", iso: "2026-12-13" });
    expect(item(r, dueText.thirdStarts)).toEqual({ kind: "date", iso: "2026-12-14" });
    expect(num(item(r, dueText.daysToDue))).toBe(135); // python: (date(2027,3,8)-date(2026,10,24)).days
    // Cycle of 32 days moves dating start to 14 March: python (date(2026,10,24)-date(2026,3,14)).days = 224 = 32w 0d
    expect(text(item(lmp("2026-03-10", 32), dueText.gestationalAge))).toBe("32 weeks, 0 days");
    expect(text(item(lmp("2026-06-01", 28, "2026-06-02"), dueText.gestationalAge))).toBe("0 weeks, 1 day");
  });

  it("handles trimester boundaries and dates outside the pregnancy", () => {
    expect([trimesterOf(0), trimesterOf(97), trimesterOf(98), trimesterOf(195), trimesterOf(196)]).toEqual(["first", "first", "second", "second", "third"]);
    const before = lmp("2026-06-01", 28, "2026-05-20");
    expect(text(item(before, dueText.gestationalAge))).toBe(dueText.notStarted);
    expect(before.notes).toContain(dueText.notes.beforeStart);
    const onDue = lmp("2026-06-01", 28, "2027-03-08");
    expect(onDue.notes).toContain(dueText.notes.pastDue);
    expect(onDue.secondary!.some((s) => s.label === dueText.daysToDue)).toBe(false);
    expect(lmp("2026-06-01", 28, "2027-03-30").notes).toContain(dueText.notes.veryLate); // 302 days > 294
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { method: "lmp", lmp: "2026-06-01", cycle: 19, asOf: "2026-10-24" }).cycle).toBeDefined();
    expect(errors(e, { method: "lmp", lmp: "2026-06-01", cycle: 46, asOf: "2026-10-24" }).cycle).toBeDefined();
    expect(errors(e, { method: "lmp", lmp: "2026-06-01", cycle: 28.5, asOf: "2026-10-24" }).cycle).toBeDefined();
    expect(errors(e, { method: "lmp", lmp: "2026-02-30", cycle: 28, asOf: "2026-10-24" }).lmp).toBeDefined();
    expect(errors(e, { method: "lmp", lmp: "", cycle: 28, asOf: "2026-10-24" }).lmp).toBeDefined();
    expect(errors(e, { method: "lmp", lmp: "2199-12-01", cycle: 28, asOf: "2026-10-24" }).lmp).toBe(dueText.errors.range);
    expect(errors(e, { method: "ivf", transfer: "2026-06-20", embryoAge: "4", asOf: "2026-10-24" }).embryoAge).toBeDefined();
  });
});

describe("body fat calculator (US Navy method)", () => {
  const e = bodyFatNavy.engine;

  it("matches python references", () => {
    // python: 86.010*log10(32-16)-70.041*log10(72)+36.76 = 10.236934325693632
    expect(navyBodyFatMale(72, 16, 32)).toBeCloseTo(10.236934325693632, 10);
    expect(num(ok(e, { unit: "in", sex: "male", height: 72, neck: 16, waist: 32, weightUnit: "kg" }).primary.value)).toBeCloseTo(10.236934325693632, 10);
    // python: 163.205*log10(28+42-12)-97.684*log10(64)-78.387 = 32.97838111079716
    expect(navyBodyFatFemale(64, 12, 28, 42)).toBeCloseTo(32.97838111079716, 10);
    // python: f(165/2.54,33/2.54,72/2.54,98/2.54) = 27.19866860951518
    expect(num(ok(e, { unit: "cm", sex: "female", height: 165, neck: 33, waist: 72, hip: 98, weightUnit: "kg" }).primary.value)).toBeCloseTo(27.19866860951518, 10);
    // python: m(70,15,34) = 17.51308539731425
    expect(navyBodyFatMale(70, 15, 34)).toBeCloseTo(17.51308539731425, 10);
  });

  it("splits the weight into fat and lean mass", () => {
    // python: a=18.80195307051995; 80*a/100 = 15.041562456415958; 80-that = 64.95843754358404
    const r = ok(e, { unit: "cm", sex: "male", height: 178, neck: 38, waist: 88, weight: 80, weightUnit: "kg" });
    expect(num(item(r, bodyFatText.fatMass))).toBeCloseTo(15.041562456415958, 9);
    expect(num(item(r, bodyFatText.leanMass))).toBeCloseTo(64.95843754358404, 9);
    expect(text(item(r, bodyFatText.method))).toBe(bodyFatText.methodName);
    const noWeight = ok(e, { unit: "cm", sex: "male", height: 178, neck: 38, waist: 88, weightUnit: "kg" });
    expect(noWeight.secondary!.some((s) => s.label === bodyFatText.fatMass)).toBe(false);
  });

  it("ignores the hip field for the men's equation", () => {
    const a = num(ok(e, { unit: "in", sex: "male", height: 72, neck: 16, waist: 32, hip: 40, weightUnit: "kg" }).primary.value);
    expect(a).toBeCloseTo(10.236934325693632, 10);
  });

  it("rejects impossible or implausible inputs", () => {
    expect(errors(e, { unit: "in", sex: "male", height: 72, neck: 16, waist: 16, weightUnit: "kg" }).waist).toBe(bodyFatText.errors.waistNeck);
    expect(errors(e, { unit: "cm", sex: "male", height: 70, neck: 38, waist: 88, weightUnit: "kg" }).height).toBeDefined(); // inches typed as cm
    expect(errors(e, { unit: "in", sex: "male", height: 178, neck: 38, waist: 88, weightUnit: "kg" }).height).toBeDefined(); // cm typed as inches
    expect(errors(e, { unit: "cm", sex: "female", height: 165, neck: 33, waist: 72, hip: 10, weightUnit: "kg" }).hip).toBeDefined();
    expect(errors(e, { unit: "cm", sex: "male", height: 178, neck: 0, waist: 88, weightUnit: "kg" }).neck).toBeDefined();
    // Waist barely above neck gives a negative estimate: python m(98,15,15.5) < 0
    expect(errors(e, { unit: "in", sex: "male", height: 98, neck: 15, waist: 16, weightUnit: "kg" }).waist).toMatch(/outside the range/);
  });
});

describe("calories burned calculator", () => {
  const e = caloriesBurned.engine;

  it("matches python references", () => {
    // python: 5.8*62*(80/60) = 479.4666666666666
    expect(num(ok(e, { activity: "swimModerate", weight: 62, weightUnit: "kg", hours: 1, minutes: 20 }).primary.value)).toBeCloseTo(479.4666666666666, 9);
    // python: 2.5*60*1 = 150
    expect(num(ok(e, { activity: "yoga", weight: 60, weightUnit: "kg", hours: 1, minutes: 0 }).primary.value)).toBeCloseTo(150, 9);
    // python: 9.8*180*0.45359237 = 800.13694068 (per hour)
    const r = ok(e, { activity: "run6", weight: 180, weightUnit: "lb", hours: 1, minutes: 30 });
    expect(num(item(r, caloriesText.perHour))).toBeCloseTo(800.13694068, 8);
    // python: 4.3*70*0.75*4.184 = 944.538 ; (4.3-1)*70*0.75 = 173.25
    const walk = ok(e, { activity: "brisk", weight: 70, weightUnit: "kg", hours: 0, minutes: 45 });
    expect(num(item(walk, caloriesText.kj))).toBeCloseTo(944.538, 9);
    expect(num(item(walk, caloriesText.aboveRest))).toBeCloseTo(173.25, 9);
    expect(num(item(walk, caloriesText.metUsed))).toBe(4.3);
    expect(kcalOf(8, 75, 0.5)).toBe(300);
  });

  it("offers about 15 activities plus a custom MET", () => {
    const field = e.fields.find((f) => f.id === "activity");
    expect(field?.type === "select" && field.options.length).toBe(Object.keys(ACTIVITY_METS).length + 1);
    expect(Object.keys(ACTIVITY_METS).length).toBeGreaterThanOrEqual(14);
    for (const met of Object.values(ACTIVITY_METS)) expect(met).toBeGreaterThan(1);
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { activity: "yoga", weight: 60, weightUnit: "kg", hours: 0, minutes: 0 }).minutes).toBe(caloriesText.timeZero);
    expect(errors(e, { activity: "yoga", weight: 60, weightUnit: "kg", hours: 24, minutes: 30 }).hours).toBe(caloriesText.timeMax);
    expect(errors(e, { activity: "yoga", weight: 10, weightUnit: "kg", hours: 1, minutes: 0 }).weight).toBe(caloriesText.weightRange);
    expect(errors(e, { activity: "yoga", weight: 0, weightUnit: "kg", hours: 1, minutes: 0 }).weight).toBeDefined();
    expect(errors(e, { activity: "custom", customMet: 0.5, weight: 60, weightUnit: "kg", hours: 1, minutes: 0 }).customMet).toBeDefined();
    expect(errors(e, { activity: "yoga", weight: 60, weightUnit: "kg", hours: 1, minutes: 60 }).minutes).toBeDefined();
  });
});

describe("swim pace calculator", () => {
  const e = swimPace.engine;

  it("matches python references", () => {
    // python: 1650/1500*100 = 110.0 -> 1:50 ; 110*0.9144 = 100.584 -> 1:41 ; 100/110 = 0.9090909 m/s ; *3.6 = 3.272727 km/h
    const r = ok(e, { mode: "pace", distance: 1500, unit: "m", hours: 0, minutes: 27, seconds: 30 });
    expect(text(item(r, "Pace per 100 yd"))).toBe("1:41 /100 yd");
    expect(num(item(r, swimText.speedMs))).toBeCloseTo(0.9090909090909091, 12);
    expect(num(item(r, swimText.speedKmh))).toBeCloseTo(3.272727272727273, 12);
    // python: 425/500*100 = 85.0 -> per 100 yd 1:25 ; 85/0.9144 = 92.957 -> 1:33
    expect(text(item(ok(e, { mode: "pace", distance: 500, unit: "yd", hours: 0, minutes: 7, seconds: 5 }), "Pace per 100 m"))).toBe("1:33 /100 m");
    // python: 105*4 = 420 s -> 7:00
    expect(text(ok(e, { mode: "time", distance: 400, unit: "m", paceMinutes: 1, paceSeconds: 45, paceUnit: "m" }).primary.value)).toBe("7:00");
    // python: 2 h for 5000 m -> 7200/5000*100 = 144 s -> 2:24
    expect(text(ok(e, { mode: "pace", distance: 5000, unit: "m", hours: 2, minutes: 0, seconds: 0 }).primary.value)).toBe("2:24 /100 m");
    expect(pacePer100m(200, 180)).toBe(90);
    expect(METRES_PER_YARD).toBe(0.9144);
  });

  it("projects times for 50 m to 1,500 m", () => {
    // python: pm=90/0.9144=98.4252; pm*[50,100,200,400,800,1500]/100 -> 49.2, 98.4, 196.9, 393.7, 787.4, 1476.4 s
    const table = ok(e, { mode: "time", distance: 1650, unit: "yd", paceMinutes: 1, paceSeconds: 30, paceUnit: "yd" }).tables![0];
    expect(table.rows.map((row) => text(row.cells[0]))).toEqual(["0:49", "1:38", "3:17", "6:34", "13:07", "24:36"]);
    const highlighted = ok(e, { mode: "pace", distance: 400, unit: "m", hours: 0, minutes: 7, seconds: 0 }).tables![0].rows.filter((row) => row.highlight);
    expect(highlighted.map((row) => row.label)).toEqual(["400 m"]);
  });

  it("formats long swims with hours", () => {
    // python: 10000 m at 1:30 /100 m -> 9000 s = 2:30:00
    expect(text(ok(e, { mode: "time", distance: 10000, unit: "m", paceMinutes: 1, paceSeconds: 30, paceUnit: "m" }).primary.value)).toBe("2:30:00");
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { mode: "pace", distance: 0, unit: "m", hours: 0, minutes: 10, seconds: 0 }).distance).toBeDefined();
    expect(errors(e, { mode: "pace", distance: 400, unit: "m", hours: 0, minutes: 0, seconds: 0 }).seconds).toBe(swimText.timeZero);
    expect(errors(e, { mode: "time", distance: 400, unit: "m", paceMinutes: 0, paceSeconds: 0, paceUnit: "m" }).paceSeconds).toBe(swimText.paceZero);
    expect(errors(e, { mode: "pace", distance: 400, unit: "m", hours: 0, minutes: 61, seconds: 0 }).minutes).toBeDefined();
  });
});
