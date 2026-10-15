import { describe, expect, it } from "vitest";
import { evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import type { AnyEngine, CalculatorDefinition, EngineValues, ResultValue } from "./framework/types";
import { density } from "./density";
import { idealGasLaw } from "./ideal-gas-law";
import { halfLife } from "./half-life";
import { hardyWeinberg } from "./hardy-weinberg";
import { roofPitch } from "./roof-pitch";
import { densityEngine } from "./density/engine";
import { idealGasLawEngine } from "./ideal-gas-law/engine";
import { halfLifeEngine } from "./half-life/engine";
import { hardyWeinbergEngine, hardyWeinbergTest } from "./hardy-weinberg/engine";
import { roofPitchEngine } from "./roof-pitch/engine";

const DEFINITIONS: CalculatorDefinition[] = [density, idealGasLaw, halfLife, hardyWeinberg, roofPitch];

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
const primary = (engine: AnyEngine, values: EngineValues) => num(ok(engine, values).primary.value);
const item = (engine: AnyEngine, values: EngineValues, label: string) => {
  const found = ok(engine, values).secondary?.find((s) => s.label === label);
  if (!found) throw new Error(`missing ${label}`);
  return found.value;
};

describe("batch 4 group C: content and examples", () => {
  it.each(DEFINITIONS.map((d) => [d.slug, d] as const))("%s has valid content", (_slug, def) => {
    expect(def.metaTitle.length).toBeLessThanOrEqual(59);
    expect(def.metaDescription.length).toBeGreaterThanOrEqual(70);
    expect(def.metaDescription.length).toBeLessThanOrEqual(160);
    expect(def.examples.length).toBeGreaterThanOrEqual(2);
    expect(def.examples.length).toBeLessThanOrEqual(3);
    expect(def.faqs).toHaveLength(3);
    expect(def.related.length).toBeGreaterThanOrEqual(2);
    expect(def.related.length).toBeLessThanOrEqual(4);
    expect(def.addedOn).toBe("2026-10-15");
    expect(def.updated).toBe("2026-10-15");
    expect(def.status).toBe("published");
    expect(def.sources.length).toBeGreaterThan(0);
  });

  it.each(DEFINITIONS.flatMap((d) => d.examples.map((e) => [d.slug, e.title, d, e] as const)))("%s: %s", (_slug, _title, def, example) => {
    const value = ok(def.engine, example.inputs).primary.value;
    if (typeof example.expectedPrimary === "string") expect(text(value)).toBe(example.expectedPrimary);
    else expect(num(value)).toBeCloseTo(example.expectedPrimary, 9);
  });

  it.each(DEFINITIONS.map((d) => [d.slug, d] as const))("%s evaluates its defaults", (_slug, def) => {
    expect(run(def.engine, {}).ok).toBe(true);
  });
});

describe("density calculator", () => {
  it("matches independent reference values", () => {
    // python: 10*0.45359237/(2*0.028316846592) -> 80.09231686980071
    expect(primary(densityEngine, { solve: "density", mass: 10, massUnit: "lb", volume: 2, volumeUnit: "ft3", densityUnit: "kgm3" })).toBeCloseTo(80.09231686980071, 9);
    // python: 19.3*1e3*1e-6*1000 -> 19.3 (grams in 1 cm³ of gold)
    expect(primary(densityEngine, { solve: "mass", density: 19.3, densityUnit: "gcm3", volume: 1, volumeUnit: "cm3", massUnit: "g" })).toBeCloseTo(19.3, 9);
    // python: 500/(8.96*1000)/1e-6 -> 55803.571428571435
    expect(primary(densityEngine, { solve: "volume", mass: 500, massUnit: "kg", density: 8.96, densityUnit: "gcm3", volumeUnit: "cm3" })).toBeCloseTo(55803.571428571435, 6);
    // python: 1/(0.45359237/0.028316846592)*1000 -> 62.4279605761446 lb/ft³ per g/cm³
    expect(num(item(densityEngine, { solve: "density", mass: 1, massUnit: "g", volume: 1, volumeUnit: "cm3", densityUnit: "gcm3" }, "In lb/ft³"))).toBeCloseTo(62.4279605761446, 9);
  });

  it("shows conversions and the water comparison", () => {
    const r = ok(densityEngine, { solve: "density", mass: 810, massUnit: "g", volume: 300, volumeUnit: "cm3", densityUnit: "gcm3" });
    expect(text(r.secondary!.find((s) => s.label === "In kg/m³")!.value)).toBe("2,700 kg/m³");
    expect(r.notes).toContain("Denser than water, so it would sink in pure water.");
    expect(ok(densityEngine, { solve: "density", mass: 0.92, massUnit: "kg", volume: 1, volumeUnit: "L" }).notes![0]).toMatch(/float/);
  });

  it("handles extremes without zero or NaN", () => {
    const tiny = ok(densityEngine, { solve: "density", mass: 0.000001, massUnit: "g", volume: 1000000000, volumeUnit: "m3", densityUnit: "kgm3" });
    expect(text(tiny.primary.value)).toBe("1 × 10⁻¹⁸ kg/m³");
  });

  it("rejects impossible inputs", () => {
    expect(errors(densityEngine, { solve: "density", volume: 0 })).toHaveProperty("volume");
    expect(errors(densityEngine, { solve: "volume", density: -1 })).toHaveProperty("density");
    expect(errors(densityEngine, { solve: "mass", volume: "x" as unknown as number })).toHaveProperty("volume");
  });
});

describe("ideal gas law calculator", () => {
  it("matches independent reference values", () => {
    // python: 101325*0.001/(R*273.15) -> 0.044615033405470315 mol
    expect(primary(idealGasLawEngine, { solve: "n", pressure: 1, pressureUnit: "atm", volume: 1, volumeUnit: "L", temperature: 273.15, temperatureUnit: "K" })).toBeCloseTo(0.044615033405470315, 12);
    // python: 3*R*((98.6-32)*5/9+273.15)/2e-3/(101325/760) -> 29013.104982610992 mmHg
    expect(primary(idealGasLawEngine, { solve: "P", moles: 3, volume: 2, volumeUnit: "L", temperature: 98.6, temperatureUnit: "F", pressureUnit: "mmHg" })).toBeCloseTo(29013.104982610992, 7);
    // python: 1e5*24.79e-3/(R*1) -> 298.15516815091786 K
    expect(primary(idealGasLawEngine, { solve: "T", pressure: 1, pressureUnit: "bar", volume: 24.79, volumeUnit: "L", moles: 1, temperatureUnit: "K" })).toBeCloseTo(298.15516815091786, 9);
    // python: 2*R*300/1e5*1e6 -> 49886.775708919435 mL
    expect(primary(idealGasLawEngine, { solve: "V", moles: 2, pressure: 1, pressureUnit: "bar", temperature: 300, temperatureUnit: "K", volumeUnit: "mL" })).toBeCloseTo(49886.775708919435, 7);
  });

  it("shows other units and the molecule count", () => {
    expect(text(item(idealGasLawEngine, { solve: "n", pressure: 101.325, pressureUnit: "kPa", volume: 1, volumeUnit: "m3", temperature: 0, temperatureUnit: "C" }, "Number of molecules (n × Nₐ)"))).toMatch(/× 10²⁵$/);
    // python: (200000*0.01/(0.5*R)) -> 481.0894201709042 K
    expect(num(item(idealGasLawEngine, { solve: "T", moles: 0.5, pressure: 200, pressureUnit: "kPa", volume: 10, volumeUnit: "L", temperatureUnit: "C" }, "In K"))).toBeCloseTo(481.0894201709042, 9);
  });

  it("rejects temperatures at or below absolute zero and non-positive values", () => {
    expect(errors(idealGasLawEngine, { solve: "P", temperature: -273.15, temperatureUnit: "C" })).toHaveProperty("temperature");
    expect(errors(idealGasLawEngine, { solve: "V", temperature: -500, temperatureUnit: "F" })).toHaveProperty("temperature");
    expect(errors(idealGasLawEngine, { solve: "n", temperature: 0, temperatureUnit: "K" })).toHaveProperty("temperature");
    expect(errors(idealGasLawEngine, { solve: "T", temperature: -1000, temperatureUnit: "K" })).toEqual({});
    expect(errors(idealGasLawEngine, { solve: "P", volume: 0 })).toHaveProperty("volume");
    expect(errors(idealGasLawEngine, { solve: "T", moles: -2 })).toHaveProperty("moles");
  });
});

describe("half-life calculator", () => {
  it("matches independent reference values", () => {
    // python: 1000*0.5**(10/3) -> 99.21256574801247
    expect(primary(halfLifeEngine, { solve: "N", initial: 1000, halfLife: 3, elapsed: 10 })).toBeCloseTo(99.21256574801247, 9);
    // python: 25*2**(7/2.5) -> 174.1101126592248
    expect(primary(halfLifeEngine, { solve: "N0", remaining: 25, halfLife: 2.5, elapsed: 7 })).toBeCloseTo(174.1101126592248, 9);
    // python: 8.02*math.log2(500/37) -> 30.12577397064576
    expect(primary(halfLifeEngine, { solve: "t", initial: 500, remaining: 37, halfLife: 8.02 })).toBeCloseTo(30.12577397064576, 9);
    // python: 4*math.log(2)/math.log(80/60) -> 9.637683358612838
    expect(primary(halfLifeEngine, { solve: "T", initial: 80, remaining: 60, elapsed: 4 })).toBeCloseTo(9.637683358612838, 9);
  });

  it("reports the decay constant, mean lifetime and percent remaining", () => {
    const values = { solve: "t", initial: 100, remaining: 30, halfLife: 5730 };
    // python: math.log(2)/5730, 5730/math.log(2) -> 0.00012096809433855938, 8266.64258429376
    expect(num(item(halfLifeEngine, values, "Decay constant λ = ln 2 ÷ T½ (per time unit)"))).toBeCloseTo(0.00012096809433855938, 15);
    expect(num(item(halfLifeEngine, values, "Mean lifetime τ = 1 ÷ λ (time unit)"))).toBeCloseTo(8266.64258429376, 8);
    expect(text(item(halfLifeEngine, values, "Percent remaining (N ÷ N₀)"))).toBe("30%");
  });

  it("handles edge cases", () => {
    expect(primary(halfLifeEngine, { solve: "N", initial: 7, halfLife: 2, elapsed: 0 })).toBe(7);
    expect(primary(halfLifeEngine, { solve: "t", initial: 7, remaining: 7, halfLife: 2 })).toBe(0);
    const tiny = ok(halfLifeEngine, { solve: "N", initial: 1, halfLife: 1, elapsed: 100 });
    expect(text(tiny.primary.value)).toMatch(/× 10⁻³¹$/);
    expect(text(ok(halfLifeEngine, { solve: "N", initial: 1, halfLife: 1, elapsed: 5000 }).primary.value)).toBe("0");
  });

  it("rejects impossible inputs", () => {
    expect(errors(halfLifeEngine, { solve: "T", initial: 10, remaining: 20, elapsed: 5 }).remaining).toMatch(/cannot be larger/);
    expect(errors(halfLifeEngine, { solve: "T", initial: 10, remaining: 10, elapsed: 5 }).remaining).toMatch(/less than/);
    expect(errors(halfLifeEngine, { solve: "T", initial: 10, remaining: 5, elapsed: 0 })).toHaveProperty("elapsed");
    expect(errors(halfLifeEngine, { solve: "t", initial: 10, remaining: 11, halfLife: 3 })).toHaveProperty("remaining");
    expect(errors(halfLifeEngine, { solve: "t", initial: 10, remaining: 0, halfLife: 3 })).toHaveProperty("remaining");
    expect(errors(halfLifeEngine, { solve: "N", halfLife: 0 })).toHaveProperty("halfLife");
    expect(errors(halfLifeEngine, { solve: "N", elapsed: -1 })).toHaveProperty("elapsed");
    expect(errors(halfLifeEngine, { solve: "N0", remaining: 1, halfLife: 1, elapsed: 5000 })).toHaveProperty("elapsed");
  });
});

describe("Hardy–Weinberg calculator", () => {
  it("matches independent reference values", () => {
    // python: q=sqrt(0.25); 2*(1-q)*q*100 -> 50.0
    expect(primary(hardyWeinbergEngine, { mode: "phenotype", q2: 25 })).toBeCloseTo(50, 12);
    // python: q=sqrt(0.01); 2*(1-q)*q*100 -> 18.0, p = 0.9
    expect(primary(hardyWeinbergEngine, { mode: "phenotype", q2: 1 })).toBeCloseTo(18, 12);
    expect(num(item(hardyWeinbergEngine, { mode: "phenotype", q2: 1 }, "Frequency of allele A (p)"))).toBeCloseTo(0.9, 12);
    // python: p=(2*380+440)/2000 -> 0.6; chi2 -> 6.9444444444444375; erfc(sqrt(chi2/2)) -> 0.008407994577249327
    const r = hardyWeinbergTest(380, 440, 180);
    expect(r.p).toBeCloseTo(0.6, 12);
    expect(r.chiSquare!).toBeCloseTo(6.9444444444444375, 10);
    expect(r.pValue!).toBeCloseTo(0.008407994577249327, 7);
    // python: t(10,5,5) -> (0.625, 4.355555555555555, 0.03688842570704985)
    const s = hardyWeinbergTest(10, 5, 5);
    expect(s.chiSquare!).toBeCloseTo(4.355555555555555, 10);
    expect(s.pValue!).toBeCloseTo(0.03688842570704985, 7);
    // python: t(120,60,20) -> (0.75, 8.0, 0.004677734981047265)
    expect(hardyWeinbergTest(120, 60, 20).pValue!).toBeCloseTo(0.004677734981047265, 7);
  });

  it("reports the verdict, carrier ratio and small-sample note", () => {
    const counts = { mode: "counts", countAA: 380, countAa: 440, countaa: 180 };
    expect(text(item(hardyWeinbergEngine, counts, "Test result at the 5% level"))).toBe("Significant departure from equilibrium");
    expect(text(item(hardyWeinbergEngine, { mode: "counts", countAA: 298, countAa: 489, countaa: 213 }, "Test result at the 5% level"))).toBe("No significant departure from equilibrium");
    expect(ok(hardyWeinbergEngine, { mode: "counts", countAA: 10, countAa: 5, countaa: 2 }).notes![0]).toMatch(/below 5/);
    expect(text(item(hardyWeinbergEngine, { mode: "phenotype", q2: 0.04 }, "Carriers"))).toBe("About 1 in 25.5");
    // python: chi2 for (36,48,16) is ~0 -> p-value ~1
    expect(text(item(hardyWeinbergEngine, { mode: "counts", countAA: 36, countAa: 48, countaa: 16 }, "p-value"))).toBe("1");
  });

  it("handles monomorphic samples and phenotype extremes", () => {
    const mono = ok(hardyWeinbergEngine, { mode: "counts", countAA: 50, countAa: 0, countaa: 0 });
    expect(num(mono.primary.value)).toBe(1);
    expect(mono.secondary!.some((s) => s.label === "p-value")).toBe(false);
    expect(mono.notes![0]).toMatch(/Only one allele/);
    expect(primary(hardyWeinbergEngine, { mode: "phenotype", q2: 0 })).toBe(0);
    expect(primary(hardyWeinbergEngine, { mode: "phenotype", q2: 100 })).toBe(0);
    expect(text(item(hardyWeinbergEngine, { mode: "phenotype", q2: 100 }, "Carriers"))).toBe("None");
  });

  it("rejects impossible inputs", () => {
    expect(errors(hardyWeinbergEngine, { mode: "phenotype", q2: 101 })).toHaveProperty("q2");
    expect(errors(hardyWeinbergEngine, { mode: "phenotype", q2: -1 })).toHaveProperty("q2");
    expect(errors(hardyWeinbergEngine, { mode: "counts", countAA: 0, countAa: 0, countaa: 0 }).countAA).toBe("Enter at least one individual.");
    expect(errors(hardyWeinbergEngine, { mode: "counts", countAa: 2.5 })).toHaveProperty("countAa");
    expect(errors(hardyWeinbergEngine, { mode: "counts", countaa: -3 })).toHaveProperty("countaa");
  });
});

describe("roof pitch calculator", () => {
  it("matches independent reference values", () => {
    // python: 12*3/12 -> 3.0; degrees(atan(3/12)) -> 14.036243467926479
    expect(text(ok(roofPitchEngine, { mode: "riseRun", rise: 3, run: 12 }).primary.value)).toBe("3 in 12");
    expect(num(item(roofPitchEngine, { mode: "riseRun", rise: 3, run: 12 }, "Angle"))).toBeCloseTo(14.036243467926479, 12);
    // python: 12*tan(radians(22.5)) -> 4.970562748477141; sqrt(1+tan^2) -> 1.082392200292394
    expect(text(ok(roofPitchEngine, { mode: "angle", angle: 22.5 }).primary.value)).toBe("4.97 in 12");
    expect(num(item(roofPitchEngine, { mode: "angle", angle: 22.5 }, "Rafter length multiplier"))).toBeCloseTo(1.082392200292394, 12);
    // python: 12*30/100 -> 3.6; 400*sqrt(1+0.3**2) -> 417.61226035642204
    const cm = { mode: "riseRun", unit: "cm", rise: 30, run: 100, roofRun: 400 };
    expect(text(ok(roofPitchEngine, cm).primary.value)).toBe("3.6 in 12");
    expect(num(item(roofPitchEngine, cm, "Rafter length (no overhang)"))).toBeCloseTo(417.61226035642204, 9);
    expect(text(item(roofPitchEngine, cm, "Rise over the roof run"))).toBe("120 cm");
    expect(text(item(roofPitchEngine, cm, "Slope"))).toBe("30%");
  });

  it("handles flat and near-vertical roofs", () => {
    expect(text(ok(roofPitchEngine, { mode: "riseRun", rise: 0, run: 10 }).primary.value)).toBe("0 in 12");
    expect(text(ok(roofPitchEngine, { mode: "angle", angle: 45 }).primary.value)).toBe("12 in 12");
    // python: 12*tan(radians(89.99)) -> 68754.93471754724
    expect(text(ok(roofPitchEngine, { mode: "angle", angle: 89.99 }).primary.value)).toBe("68,754.93 in 12");
    expect(ok(roofPitchEngine, { mode: "riseRun", rise: 6, run: 12 }).secondary).toHaveLength(3);
  });

  it("rejects impossible inputs", () => {
    expect(errors(roofPitchEngine, { mode: "riseRun", run: 0 })).toHaveProperty("run");
    expect(errors(roofPitchEngine, { mode: "riseRun", rise: -1 })).toHaveProperty("rise");
    expect(errors(roofPitchEngine, { mode: "angle", angle: 90 }).angle).toBe("The angle must be less than 90°.");
    expect(errors(roofPitchEngine, { mode: "angle", angle: -5 })).toHaveProperty("angle");
    expect(errors(roofPitchEngine, { mode: "riseRun", roofRun: 0 })).toHaveProperty("roofRun");
  });
});
