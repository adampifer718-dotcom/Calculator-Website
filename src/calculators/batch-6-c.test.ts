import { describe, expect, it } from "vitest";
import { defaultRawValues, evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import { engineContext } from "./framework/i18n";
import type { AnyEngine, CalculatorDefinition, EngineValues, ResultValue } from "./framework/types";
import { potentialEnergy } from "./potential-energy";
import { molarMass } from "./molar-mass";
import { ph } from "./ph";
import { raceTimePredictor } from "./race-time-predictor";
import { clockDuration } from "./clock-duration";
import { makePhEngine } from "./ph/engine";
import phText from "./ph/text/en";
import { formatHms, riegel } from "./race-time-predictor/engine";
import { formatHoursMinutes, parseClockTime, spanMinutes } from "./clock-duration/engine";
import { ATOMIC_WEIGHTS, molarMass as molarMassOf, parseFormula } from "@/lib/math/chem-formula";

const CALCS: CalculatorDefinition[] = [potentialEnergy, molarMass, ph, raceTimePredictor, clockDuration];

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
const text = (value: ResultValue, currency = "USD") => formatResultValue(value, currency);
const primary = (engine: AnyEngine, values: EngineValues) => num(ok(engine, values).primary.value);
const primaryText = (engine: AnyEngine, values: EngineValues) => text(ok(engine, values).primary.value);
const item = (result: ReturnType<typeof ok>, label: string) => {
  const found = result.secondary?.find((s) => s.label === label);
  if (!found) throw new Error(`missing ${label}`);
  return found.value;
};

describe("batch 6 group C: content and examples", () => {
  it.each(CALCS.map((c) => [c.slug, c] as const))("%s has valid content and defaults", (_slug, c) => {
    expect(c.metaTitle.length).toBeLessThanOrEqual(59);
    expect(c.metaDescription.length).toBeGreaterThanOrEqual(70);
    expect(c.metaDescription.length).toBeLessThanOrEqual(160);
    expect(c.examples.length).toBeGreaterThanOrEqual(2);
    expect(c.examples.length).toBeLessThanOrEqual(3);
    expect(c.faqs.length).toBe(3);
    expect(c.related.length).toBeGreaterThanOrEqual(2);
    expect(c.related.length).toBeLessThanOrEqual(4);
    expect(c.addedOn).toBe("2026-10-22");
    expect(c.updated).toBe("2026-10-22");
    expect(c.status).toBe("published");
    expect(c.sources.length).toBeGreaterThan(0);
    expect(c.popularRank).toBeUndefined();
    expect(c.featured).toBeUndefined();
    expect(c.expertReview).toBeUndefined();
    expect(c.intro.length).toBeGreaterThan(0);
    expect(c.howToUse.length).toBeGreaterThan(0);
    expect(c.formulas.length).toBeGreaterThan(0);
    expect(c.assumptions.length).toBeGreaterThan(0);
    const ids = (c.engine.fields as readonly { id: string }[]).map((f) => f.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(evaluate(c.engine, defaultRawValues(c.engine)).ok).toBe(true);
  });

  it.each(CALCS.flatMap((c) => c.examples.map((e) => [c.slug, e.title, c, e] as const)))("%s example “%s” matches", (_slug, _title, c, example) => {
    const value = ok(c.engine, example.inputs).primary.value;
    if (typeof example.expectedPrimary === "string") {
      expect(text(value, String(example.inputs.currency ?? "USD"))).toBe(example.expectedPrimary);
    } else {
      expect(num(value)).toBeCloseTo(example.expectedPrimary, 9);
    }
  });
});

describe("potential energy", () => {
  const e = potentialEnergy.engine;
  const grav = { mode: "gravitational", gravity: "earth", massUnit: "kg", heightUnit: "m", energyUnit: "J" };
  it("matches reference values", () => {
    // python: 70*1.62*3 = 340.2
    expect(primary(e, { ...grav, gSolve: "energy", mass: 70, height: 3, gravity: "moon" })).toBeCloseTo(340.2, 9);
    // python: 2.5*3.73*4 = 37.3
    expect(primary(e, { ...grav, gSolve: "energy", mass: 2.5, height: 4, gravity: "mars" })).toBeCloseTo(37.3, 9);
    // python: 5*0.45359237*9.80665*10*0.3048 = 67.79089741657003 J; in ft·lbf exactly 50 (1 lbf = 1 lb × g₀)
    expect(primary(e, { ...grav, gSolve: "energy", mass: 5, massUnit: "lb", height: 10, heightUnit: "ft" })).toBeCloseTo(67.79089741657003, 9);
    expect(primary(e, { ...grav, gSolve: "energy", mass: 5, massUnit: "lb", height: 10, heightUnit: "ft", energyUnit: "ftlbf" })).toBeCloseTo(50, 9);
    // python: 2000/(9.80665*50) = 4.078864851911713
    expect(primary(e, { ...grav, gSolve: "mass", gEnergy: 2000, height: 50 })).toBeCloseTo(4.078864851911713, 9);
    // python: 2000/(9.80665*50)/0.45359237 = 8.992371...
    expect(primary(e, { ...grav, gSolve: "mass", gEnergy: 2, energyUnit: "kJ", height: 50, massUnit: "lb" })).toBeCloseTo(4.078864851911713 / 0.45359237, 9);
    // python: 900/(60*9.81) = 1.529051987767584 (custom g)
    expect(primary(e, { ...grav, gSolve: "height", gEnergy: 900, mass: 60, gravity: "custom", customG: 9.81 })).toBeCloseTo(1.529051987767584, 9);
  });

  it("solves the elastic formula", () => {
    const el = { mode: "elastic", energyUnit: "J", xUnit: "m" };
    // python: math.sqrt(2*10/250) = 0.282842712474619
    expect(primary(e, { ...el, eSolve: "x", eEnergy: 10, k: 250 })).toBeCloseTo(0.282842712474619, 9);
    expect(primary(e, { ...el, eSolve: "x", eEnergy: 10, k: 250, xUnit: "cm" })).toBeCloseTo(28.2842712474619, 9);
    // python: 2*5/0.1**2 = 1000
    expect(primary(e, { ...el, eSolve: "k", eEnergy: 5, x: 10, xUnit: "cm" })).toBeCloseTo(1000, 9);
    // python: 0.5*1200*(2*0.0254)**2 = 1.5483840000000002
    expect(primary(e, { ...el, eSolve: "energy", k: 1200, x: 2, xUnit: "in" })).toBeCloseTo(1.548384, 9);
  });

  it("shows the free-fall speed and the other energy units", () => {
    const r = ok(e, { ...grav, gSolve: "energy", mass: 12, height: 2.5 });
    // python: math.sqrt(2*9.80665*2.5) = 7.002374597234855
    expect(num(item(r, "Speed after falling height h (no air resistance)"))).toBeCloseTo(7.002374597234855, 9);
    expect(num(item(r, "In kJ"))).toBeCloseTo(0.2941995, 12);
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { ...grav, gSolve: "energy", mass: 0, height: 2 })).toHaveProperty("mass");
    expect(errors(e, { ...grav, gSolve: "energy", mass: 1, height: -2 })).toHaveProperty("height");
    expect(errors(e, { ...grav, gSolve: "mass", gEnergy: 0, height: 2 })).toHaveProperty("gEnergy");
    expect(errors(e, { ...grav, gSolve: "energy", mass: 1, height: 1, gravity: "custom", customG: 0 })).toHaveProperty("customG");
    expect(errors(e, { mode: "elastic", eSolve: "energy", k: -5, x: 1 })).toHaveProperty("k");
  });
});

describe("molar mass", () => {
  const e = molarMass.engine;
  it("uses the abridged standard atomic weights", () => {
    expect([ATOMIC_WEIGHTS.H, ATOMIC_WEIGHTS.C, ATOMIC_WEIGHTS.N, ATOMIC_WEIGHTS.O, ATOMIC_WEIGHTS.Na]).toEqual([1.008, 12.011, 14.007, 15.999, 22.99]);
    expect([ATOMIC_WEIGHTS.Cl, ATOMIC_WEIGHTS.S, ATOMIC_WEIGHTS.Cu, ATOMIC_WEIGHTS.Fe, ATOMIC_WEIGHTS.Ca]).toEqual([35.45, 32.06, 63.546, 55.845, 40.078]);
    expect(Object.keys(ATOMIC_WEIGHTS)).toHaveLength(84);
  });

  it("matches hand calculations", () => {
    // python: 2*1.008+15.999 = 18.015
    expect(primary(e, { formula: "H2O" })).toBeCloseTo(18.015, 9);
    expect(primary(e, { formula: "H₂O" })).toBeCloseTo(18.015, 9);
    // python: 22.990+35.45 = 58.44
    expect(primary(e, { formula: "NaCl" })).toBeCloseTo(58.44, 9);
    // python: 40.078+2*(15.999+1.008) = 74.092
    expect(primary(e, { formula: "Ca(OH)2" })).toBeCloseTo(74.092, 9);
    expect(primary(e, { formula: "Ca (OH) 2" })).toBeCloseTo(74.092, 9);
    // python: 2*26.982+3*(32.06+4*15.999) = 342.132
    expect(primary(e, { formula: "Al2(SO4)3" })).toBeCloseTo(342.132, 9);
    // python: 24.305+32.06+4*15.999+7*(2*1.008+15.999) = 246.466
    expect(primary(e, { formula: "MgSO4*7H2O" })).toBeCloseTo(246.466, 9);
    expect(primary(e, { formula: "MgSO4.7H2O" })).toBeCloseTo(246.466, 9);
    // python: 63.546+32.06+4*15.999+5*(2*1.008+15.999) = 249.677
    expect(primary(e, { formula: "CuSO4·5H2O" })).toBeCloseTo(249.677, 9);
    // python: 2*(2*1.008+15.999) = 36.03
    expect(primary(e, { formula: "2H2O" })).toBeCloseTo(36.03, 9);
    // python: 2*12.011+6*1.008+15.999 = 46.069
    expect(primary(e, { formula: "C2H5OH" })).toBeCloseTo(46.069, 9);
  });

  it("builds the composition table", () => {
    const r = ok(e, { formula: "CuSO4·5H2O" });
    const rows = r.tables?.[0].rows ?? [];
    expect(rows.map((row) => row.label)).toEqual(["Cu", "S", "O", "H"]);
    expect(rows.map((row) => num(row.cells[0]))).toEqual([1, 1, 9, 10]);
    // python: 63.546/249.677*100 = 25.45128305771056
    expect(num(rows[0].cells[3])).toBeCloseTo(25.45128305771056, 9);
    expect(rows.reduce((sum, row) => sum + num(row.cells[3]), 0)).toBeCloseTo(100, 9);
    expect(num(item(r, "Atoms per formula unit"))).toBe(21);
  });

  it("parses nested groups", () => {
    const parsed = parseFormula("K4[Fe(CN)6]");
    expect(parsed.ok && Object.fromEntries(parsed.counts)).toEqual({ K: 4, Fe: 1, C: 6, N: 6 });
    const deep = parseFormula("((CH3)3C)2O");
    expect(deep.ok && Object.fromEntries(deep.counts)).toEqual({ C: 8, H: 18, O: 1 });
    expect(molarMassOf(new Map([["O", 2]])).total).toBeCloseTo(31.998, 12);
  });

  it("reports what is wrong and where", () => {
    const code = (formula: string) => {
      const p = parseFormula(formula);
      return p.ok ? "ok" : `${p.error.code}@${p.error.position ?? "-"}:${p.error.token ?? ""}`;
    };
    expect(code("")).toBe("empty@-:");
    expect(code("Xx2")).toBe("unknownElement@1:Xx");
    expect(code("NaXx")).toBe("unknownElement@3:Xx");
    expect(code("h2o")).toBe("lowercase@1:h");
    expect(code("Ca(OH2")).toBe("unclosed@3:(");
    expect(code("CaOH)2")).toBe("unexpectedClose@5:)");
    expect(code("K4[Fe(CN)6)")).toBe("mismatched@11:)");
    expect(code("Tc2O7")).toBe("noStandardWeight@1:Tc");
    expect(code("H2O#")).toBe("invalidChar@4:#");
    expect(code("H2()")).toBe("emptyGroup@3:(");
    expect(code("H0")).toBe("zeroCount@2:");
    expect(code("CuSO4·")).toBe("misplacedDot@6:·");
    expect(code("·H2O")).toBe("misplacedDot@1:·");
    expect(code("H2O·5")).toBe("misplacedNumber@5:5");
    expect(code("Uue")).toBe("unknownElement@1:Uue");
    expect(code("(H999)9999")).toBe("tooManyAtoms@-:");
    expect(code("H".repeat(201))).toBe("tooLong@-:");
    expect(code("H".repeat(200))).toBe("ok");
  });

  it("shows field errors in the form", () => {
    expect(errors(e, { formula: "Xx" }).formula).toBe("Unknown element symbol “Xx” at position 1.");
    expect(errors(e, { formula: "Po" }).formula).toMatch(/has no standard atomic weight/);
    expect(errors(e, { formula: "Ca(OH2" }).formula).toMatch(/Unbalanced brackets/);
    expect(errors(e, { formula: "H2O!" }).formula).toMatch(/Invalid character “!” at position 4/);
    expect(errors(e, { formula: "" })).toHaveProperty("formula");
  });
});

describe("pH", () => {
  const e = ph.engine;
  it("matches reference values", () => {
    // python: -log10((1e-8+sqrt(1e-16+4e-14))/2) = 6.978294313542888
    expect(primary(e, { mode: "strongAcid", concentration: "1e-8" })).toBeCloseTo(6.978294313542888, 9);
    // python: 14+log10((0.01+sqrt(1e-4+4e-14))/2) = 12.00000000004343
    expect(primary(e, { mode: "strongBase", concentration: "0.01" })).toBeCloseTo(12.00000000004343, 9);
    // python: 14+log10((1e-8+sqrt(1e-16+4e-14))/2) = 7.021705686457112
    expect(primary(e, { mode: "strongBase", concentration: "1e-8" })).toBeCloseTo(7.021705686457112, 9);
    // python: -log10((-1e-3+sqrt(1e-6+4e-5))/2) = 2.568385042003888
    expect(primary(e, { mode: "weakAcid", concentration: "0.01", constantType: "ka", ka: "1e-3" })).toBeCloseTo(2.568385042003888, 9);
    // python: 14-4.2 = 9.8
    expect(primary(e, { mode: "poh", poh: 4.2 })).toBeCloseTo(9.8, 9);
    expect(primary(e, { mode: "ph", ph: 3.3 })).toBeCloseTo(3.3, 12);
    // python: -log10(2) = -0.3010299956639812 (2 M strong acid)
    expect(primary(e, { mode: "strongAcid", concentration: "2" })).toBeCloseTo(-0.3010299956639812, 9);
  });

  it("formats concentrations in scientific notation and labels the result", () => {
    // python: 10**-3.3 = 0.0005011872336272725
    const r = ok(e, { mode: "ph", ph: 3.3 });
    expect(text(item(r, "Hydrogen ion concentration [H⁺]"))).toBe("5.012 × 10⁻⁴ mol/L");
    expect(text(item(r, "Hydroxide ion concentration [OH⁻]"))).toBe("1.995 × 10⁻¹¹ mol/L");
    expect(text(item(r, "Acidic, neutral or basic (at 25 °C)"))).toBe("Acidic");
    expect(text(item(ok(e, { mode: "ph", ph: 7 }), "Acidic, neutral or basic (at 25 °C)"))).toBe("Neutral");
    expect(text(item(ok(e, { mode: "hydrogen", hydrogen: "2.5e-9" }), "Acidic, neutral or basic (at 25 °C)"))).toBe("Basic");
    // python: x/C*100 with Ka=10**-4.76, C=0.05 -> 1.8469995427119794
    const weak = ok(e, { mode: "weakAcid", concentration: "0.05", constantType: "pka", pka: 4.76 });
    expect(num(item(weak, "Percent ionization"))).toBeCloseTo(1.8469995427119794, 9);
  });

  it("adds notes for dilute and extreme solutions", () => {
    expect(ok(e, { mode: "strongAcid", concentration: "1e-8" }).notes?.join(" ")).toMatch(/so dilute/);
    expect(ok(e, { mode: "strongAcid", concentration: "2" }).notes?.join(" ")).toMatch(/outside 0–14/);
    expect(ok(e, { mode: "weakAcid", concentration: "1e-7", constantType: "pka", pka: 9 }).notes?.join(" ")).toMatch(/water's own ions/);
  });

  it("accepts decimal commas in comma locales", () => {
    const de = makePhEngine(engineContext("de", phText));
    expect(primary(de, { mode: "hydrogen", hydrogen: "2,5e-9" })).toBeCloseTo(8.602059991327963, 9);
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { mode: "hydrogen", hydrogen: "0" })).toHaveProperty("hydrogen");
    expect(errors(e, { mode: "hydrogen", hydrogen: "-1e-7" })).toHaveProperty("hydrogen");
    expect(errors(e, { mode: "hydrogen", hydrogen: "abc" })).toHaveProperty("hydrogen");
    expect(errors(e, { mode: "strongAcid", concentration: "25" })).toHaveProperty("concentration");
    expect(errors(e, { mode: "weakAcid", concentration: "0.1", constantType: "ka", ka: "0" })).toHaveProperty("ka");
    expect(errors(e, { mode: "ph", ph: 20 })).toHaveProperty("ph");
  });
});

describe("race time predictor", () => {
  const e = raceTimePredictor.engine;
  const base = { knownRace: "10k", hours: 0, minutes: 50, seconds: 0, exponent: 1.06 };
  it("matches reference values", () => {
    // python: 3000*(1.609344/10)**1.06 -> 0:07:13; (5/10) -> 0:23:59; (42.195/10) -> 3:50:01
    expect(primaryText(e, { ...base, targetRace: "mile" })).toBe("0:07:13");
    expect(primaryText(e, { ...base, targetRace: "5k" })).toBe("0:23:59");
    expect(primaryText(e, { ...base, targetRace: "marathon" })).toBe("3:50:01");
    // python: 3840*(10/(8*1.609344))**1.06 -> 0:48:58
    expect(primaryText(e, { knownRace: "custom", knownDistance: 8, knownUnit: "mi", hours: 1, minutes: 4, seconds: 0, targetRace: "10k", exponent: 1.06 })).toBe("0:48:58");
    expect(riegel(3000, 10, 21.0975)).toBeCloseTo(6619.20924320557, 8);
  });

  it("shows paces and a table of standard distances", () => {
    const r = ok(e, { ...base, targetRace: "half" });
    // python: 6619.209/21.0975 = 313.74 s -> 5:14; *1.609344 -> 8:25
    expect(text(item(r, "Predicted pace per kilometer"))).toBe("5:14 /km");
    expect(text(item(r, "Predicted pace per mile"))).toBe("8:25 /mi");
    const rows = r.tables?.[0].rows ?? [];
    expect(rows.map((row) => text(row.cells[0]))).toEqual(["0:07:13", "0:23:59", "0:50:00", "1:50:19", "3:50:01"]);
    expect(rows.find((row) => row.highlight)?.label).toBe("Half marathon");
  });

  it("adds reliability notes", () => {
    const far = ok(e, { knownRace: "5k", hours: 0, minutes: 22, seconds: 30, targetRace: "marathon", exponent: 1.06 }).notes?.join(" ");
    expect(far).toMatch(/four times/);
    expect(ok(e, { knownRace: "half", hours: 2, minutes: 10, seconds: 0, targetRace: "marathon", exponent: 1.06 }).notes?.join(" ")).toMatch(/over about 4 hours/);
    const same = ok(e, { ...base, targetRace: "10k" });
    expect(text(same.primary.value)).toBe("0:50:00");
    expect(same.notes?.join(" ")).toMatch(/same/);
    expect(formatHms(59.6)).toBe("0:01:00");
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { ...base, minutes: 0 })).toHaveProperty("seconds");
    expect(errors(e, { ...base, exponent: 1.2 })).toHaveProperty("exponent");
    expect(errors(e, { ...base, exponent: 1 })).toHaveProperty("exponent");
    expect(errors(e, { ...base, targetRace: "custom", targetDistance: 0, targetUnit: "km" })).toHaveProperty("targetDistance");
    expect(errors(e, { ...base, minutes: 60 })).toHaveProperty("minutes");
  });
});

describe("hours calculator", () => {
  const e = clockDuration.engine;
  it("parses the documented time formats", () => {
    const minutes = (s: string) => {
      const p = parseClockTime(s);
      return p.ok ? p.minutes : p.error;
    };
    expect(minutes("9:30")).toBe(570);
    expect(minutes("09:30")).toBe(570);
    expect(minutes("21:30")).toBe(1290);
    expect(minutes("9:30 pm")).toBe(1290);
    expect(minutes("9:30 P.M.")).toBe(1290);
    expect(minutes("9 am")).toBe(540);
    expect(minutes("9pm")).toBe(1260);
    expect(minutes("12 am")).toBe(0);
    expect(minutes("12:30 pm")).toBe(750);
    expect(minutes("0:00")).toBe(0);
    expect(minutes("24:00")).toBe("hour24");
    expect(minutes("13 pm")).toBe("hour12");
    expect(minutes("0 am")).toBe("hour12");
    expect(minutes("9:60")).toBe("minute");
    expect(minutes("9:5")).toBe("format");
    expect(minutes("nine")).toBe("format");
  });

  it("matches reference values", () => {
    // python: (15*60 - (7*60+50)) - 20 = 410 min -> 6:50, 6.8333 h
    const r = ok(e, { start: "7:50 am", end: "3:00 pm", breakMinutes: 20, rate: null });
    expect(text(r.primary.value)).toBe("6:50");
    expect(num(item(r, "Decimal hours"))).toBeCloseTo(410 / 60, 12);
    expect(num(item(r, "Total minutes"))).toBe(410);
    // python: (15+1440-(23*60+30))/60 = 0.75 h -> 0:45
    expect(primaryText(e, { start: "11:30 pm", end: "12:15 am", breakMinutes: 0, rate: null })).toBe("0:45");
    expect(spanMinutes(600, 600)).toBe(1440);
    expect(formatHoursMinutes(1440)).toBe("24:00");
  });

  it("computes pay and the overnight note", () => {
    const r = ok(e, { start: "22:00", end: "6:15", breakMinutes: 45, currency: "USD", rate: 18.5 });
    // python: 7.5*18.5 = 138.75
    expect(num(item(r, "Pay for this shift"))).toBeCloseTo(138.75, 9);
    expect(text(item(r, "Pay for this shift"))).toBe("$138.75");
    expect(r.notes?.join(" ")).toMatch(/past midnight/);
    expect(ok(e, { start: "9:00", end: "17:00", breakMinutes: 0, rate: null }).secondary?.some((s) => s.label === "Pay for this shift")).toBe(false);
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { start: "9:00", end: "9:30", breakMinutes: 30, rate: null })).toHaveProperty("breakMinutes");
    expect(errors(e, { start: "25:00", end: "9:30", breakMinutes: 0, rate: null }).start).toBe("The hour must be from 0 to 23.");
    expect(errors(e, { start: "9:00", end: "9:75", breakMinutes: 0, rate: null }).end).toBe("The minutes must be from 00 to 59.");
    expect(errors(e, { start: "9:00", end: "17:00", breakMinutes: -5, rate: null })).toHaveProperty("breakMinutes");
    expect(errors(e, { start: "9:00", end: "17:00", breakMinutes: 0, rate: -1 })).toHaveProperty("rate");
  });
});
