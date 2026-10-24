import { describe, expect, it } from "vitest";
import { defaultRawValues, evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import type { AnyEngine, CalculatorDefinition, EngineValues, ResultValue } from "./framework/types";
import { windTurbine } from "./wind-turbine";
import { carbonFootprintDriving } from "./carbon-footprint-driving";
import { coffeeRatio } from "./coffee-ratio";
import { bakersPercentage } from "./bakers-percentage";
import { roofing } from "./roofing";
import { stairs } from "./stairs";
import { BETZ_LIMIT, sweptArea, windPower } from "./wind-turbine/engine";
import { KG_CO2_PER_L, fuelLiters } from "./carbon-footprint-driving/engine";
import { flourForDough, totalPercent } from "./bakers-percentage/engine";
import { pitchFactor, roofEstimate } from "./roofing/engine";
import { riserCount, stairLayout } from "./stairs/engine";

const CALCS: CalculatorDefinition[] = [windTurbine, carbonFootprintDriving, coffeeRatio, bakersPercentage, roofing, stairs];

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
const item = (result: ReturnType<typeof ok>, label: string) => {
  const found = result.secondary?.find((s) => s.label === label);
  if (!found) throw new Error(`missing ${label}`);
  return found.value;
};
const has = (result: ReturnType<typeof ok>, label: string) => result.secondary?.some((s) => s.label === label) ?? false;

describe("batch 7 group C: content and examples", () => {
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
    expect(c.addedOn).toBe("2026-10-24");
    expect(c.updated).toBe("2026-10-24");
    expect(c.status).toBe("published");
    expect(c.sources.length).toBeGreaterThan(0);
    expect(c.popularRank).toBeUndefined();
    expect(c.featured).toBeUndefined();
    expect(c.intro.length).toBeGreaterThan(0);
    expect(c.howToUse.length).toBeGreaterThan(0);
    expect(c.formulas.length).toBeGreaterThan(0);
    expect(c.assumptions.length).toBeGreaterThan(0);
    expect(Object.keys(c.translations)).toEqual([]);
    const ids = (c.engine.fields as readonly { id: string }[]).map((f) => f.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(evaluate(c.engine, defaultRawValues(c.engine)).ok).toBe(true);
  });

  it("sets review flags only where the spec asks", () => {
    expect(stairs.expertReview).toEqual({ area: "safety", status: "pending" });
    expect(stairs.assumptions.join(" ")).toMatch(/not been professionally reviewed/);
    expect(stairs.assumptions.join(" ")).toMatch(/local building code|code that applies/);
    for (const c of [windTurbine, carbonFootprintDriving, coffeeRatio, bakersPercentage, roofing]) expect(c.expertReview).toBeUndefined();
    expect(JSON.stringify(stairs)).not.toMatch(/code[- ]compliant/i);
  });

  it("has unique ids, slugs and titles within the group", () => {
    for (const key of ["id", "slug", "title", "metaTitle", "metaDescription"] as const) {
      expect(new Set(CALCS.map((c) => c[key])).size).toBe(CALCS.length);
    }
  });

  it.each(CALCS.flatMap((c) => c.examples.map((e) => [c.slug, e.title, c, e] as const)))("%s example “%s” matches", (_slug, _title, c, example) => {
    const value = ok(c.engine, example.inputs).primary.value;
    if (typeof example.expectedPrimary === "string") {
      expect(text(value)).toBe(example.expectedPrimary);
    } else {
      expect(num(value)).toBeCloseTo(example.expectedPrimary, 9);
    }
  });
});

describe("wind turbine", () => {
  const e = windTurbine.engine;
  const base = { diameter: 80, diameterUnit: "m", speed: 10, speedUnit: "ms", density: 1.225, cp: 0.4, ratedPower: null, capacityFactor: null };

  it("matches reference values", () => {
    // python: 0.5*1.225*math.pi*40**2*10**3*0.4/1000 = 1231.504320207199
    expect(primary(e, base)).toBeCloseTo(1231.504320207199, 9);
    // python: 0.5*1.1*math.pi*1.5**2*(20/3.6)**3*0.3/1000 = 0.19998564345768358
    expect(primary(e, { ...base, diameter: 3, speed: 20, speedUnit: "kmh", density: 1.1, cp: 0.3 })).toBeCloseTo(0.19998564345768358, 9);
    // python: 0.5*1.225*math.pi*10**2*(15*1852/3600)**3*16/27/1000 = 52.39639483597571
    expect(primary(e, { ...base, diameter: 20, speed: 15, speedUnit: "kn", cp: 16 / 27 })).toBeCloseTo(52.39639483597571, 9);
    // python: d=10*0.3048; v=12*0.44704; 0.5*1.225*math.pi*(d/2)**2*v**3*0.35/1000 = 0.24147759149327602
    expect(primary(e, { ...base, diameter: 10, diameterUnit: "ft", speed: 12, speedUnit: "mph", cp: 0.35 })).toBeCloseTo(0.24147759149327602, 9);
    expect(sweptArea(80)).toBeCloseTo(5026.548245743669, 9);
    expect(windPower(1.225, 1, 2, 1)).toBeCloseTo(4.9, 12);
  });

  it("shows watts, the wind power and the Betz power", () => {
    const r = ok(e, base);
    expect(num(item(r, "Power in watts"))).toBeCloseTo(1231504.320207199, 6);
    // python: 1231.504320207199/0.4 = 3078.7608005179976
    expect(num(item(r, "Power in the wind through the swept area (Cp = 1)"))).toBeCloseTo(3078.7608005179976, 9);
    expect(num(item(r, "Most power any rotor could capture (Betz limit)"))).toBeCloseTo((3078.7608005179976 * 16) / 27, 9);
    expect(has(r, "Annual energy, rough estimate")).toBe(false);
  });

  it("caps at the rated power and estimates annual energy", () => {
    const r = ok(e, { ...base, diameter: 100, speed: 12, cp: 0.45, ratedPower: 2500, capacityFactor: 35 });
    expect(num(r.primary.value)).toBe(2500);
    // python: 0.5*1.225*math.pi*50**2*12**3*0.45/1000 = 3740.694372629367
    expect(num(item(r, "Rotor power before the rated-power cap"))).toBeCloseTo(3740.694372629367, 9);
    // python: 2500*8760*0.35 = 7665000
    expect(num(item(r, "Annual energy, rough estimate"))).toBeCloseTo(7665000, 6);
    expect(r.notes?.[0]).toContain("2,500 kW");
    // Below the rating: not capped. python: 0.5*1.225*math.pi*50**2*8**3*0.45/1000*8760*0.35 = 3398213.021179745
    const low = ok(e, { ...base, diameter: 100, speed: 8, cp: 0.45, ratedPower: 2500, capacityFactor: 35 });
    expect(num(low.primary.value)).toBeCloseTo(1108.3538881864793, 9);
    expect(num(item(low, "Annual energy, rough estimate"))).toBeCloseTo(3398213.021179745, 5);
    expect(has(low, "Rotor power before the rated-power cap")).toBe(false);
  });

  it("handles calm air and rejects impossible inputs", () => {
    expect(primary(e, { ...base, speed: 0 })).toBe(0);
    expect(errors(e, { ...base, cp: 0.6 })).toHaveProperty("cp");
    expect(errors(e, { ...base, cp: 0.593 })).toHaveProperty("cp");
    expect(BETZ_LIMIT).toBeCloseTo(0.5925925925925926, 15);
    expect(evaluate(e, rawFromValues(e, { ...base, cp: BETZ_LIMIT })).ok).toBe(true);
    expect(errors(e, { ...base, cp: 0 })).toHaveProperty("cp");
    expect(errors(e, { ...base, diameter: 0 })).toHaveProperty("diameter");
    expect(errors(e, { ...base, density: 0 })).toHaveProperty("density");
    expect(errors(e, { ...base, speed: -1 })).toHaveProperty("speed");
    expect(errors(e, { ...base, capacityFactor: 120 })).toHaveProperty("capacityFactor");
    expect(errors(e, { ...base, ratedPower: 0 })).toHaveProperty("ratedPower");
  });
});

describe("car CO2", () => {
  const e = carbonFootprintDriving.engine;
  const dist = { method: "distance", distance: 100, distanceUnit: "km", economy: 7, economyUnit: "l100km", fuelType: "gasoline", trips: null };

  it("uses the EPA factors converted per liter", () => {
    // python: 8.887/3.785411784 = 2.347697029306865; 10.18/3.785411784 = 2.689271493005951
    expect(KG_CO2_PER_L.gasoline).toBeCloseTo(2.347697029306865, 12);
    expect(KG_CO2_PER_L.diesel).toBeCloseTo(2.689271493005951, 12);
  });

  it("matches reference values for every economy unit", () => {
    // python: 250/30*8.887 = 74.05833333333333
    expect(primary(e, { ...dist, distance: 250, distanceUnit: "mi", economy: 30, economyUnit: "mpgUs" })).toBeCloseTo(74.05833333333333, 9);
    // python: 300/40*4.54609*8.887/3.785411784 = 80.04631490971235
    expect(primary(e, { ...dist, distance: 300, distanceUnit: "mi", economy: 40, economyUnit: "mpgUk" })).toBeCloseTo(80.04631490971235, 9);
    // python: 150/15*10.18/3.785411784 = 26.89271493005951
    expect(primary(e, { ...dist, distance: 150, economy: 15, economyUnit: "kmL", fuelType: "diesel" })).toBeCloseTo(26.89271493005951, 9);
    // python: 400*6.5/100*10.18/3.785411784 = 69.92105881815472
    expect(primary(e, { ...dist, distance: 400, economy: 6.5, fuelType: "diesel" })).toBeCloseTo(69.92105881815472, 9);
    // python: 12*8.887 = 106.644 (12 US gallons entered directly)
    expect(primary(e, { method: "fuel", fuelAmount: 12, fuelUnit: "galUs", fuelType: "gasoline", trips: null })).toBeCloseTo(106.644, 9);
    // python: 30*2.5 = 75 (custom factor)
    expect(primary(e, { method: "fuel", fuelAmount: 30, fuelUnit: "L", fuelType: "custom", customFactor: 2.5, trips: null })).toBeCloseTo(75, 9);
    expect(fuelLiters(100, 5, "l100km")).toBeCloseTo(5, 12);
  });

  it("shows per-distance figures and the annual projection", () => {
    const r = ok(e, { ...dist, distance: 400, economy: 6.5, fuelType: "diesel", trips: 10 });
    // python: 69.92105881815472*1000/400 = 174.8026470453868
    expect(num(item(r, "CO₂ per kilometer"))).toBeCloseTo(174.8026470453868, 9);
    expect(num(item(r, "CO₂ per mile"))).toBeCloseTo(174.8026470453868 * 1.609344, 9);
    expect(num(item(r, "Fuel used"))).toBeCloseTo(26, 9);
    expect(num(item(r, "CO₂ per year"))).toBeCloseTo(699.2105881815472, 9);
    expect(num(item(r, "CO₂ per year in metric tons"))).toBeCloseTo(0.6992105881815472, 12);
    const fuel = ok(e, { method: "fuel", fuelAmount: 45, fuelUnit: "L", fuelType: "gasoline", trips: 52 });
    expect(has(fuel, "CO₂ per kilometer")).toBe(false);
    // python: 45*8.887/3.785411784*52 = 5493.611048578065
    expect(num(item(fuel, "CO₂ per year"))).toBeCloseTo(5493.611048578065, 9);
    expect(fuel.notes?.join(" ")).toMatch(/Electric cars/);
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { ...dist, distance: 0 })).toHaveProperty("distance");
    expect(errors(e, { ...dist, economy: 0 })).toHaveProperty("economy");
    expect(errors(e, { method: "fuel", fuelAmount: -5, fuelUnit: "L", fuelType: "gasoline" })).toHaveProperty("fuelAmount");
    expect(errors(e, { ...dist, fuelType: "custom", customFactor: 0 })).toHaveProperty("customFactor");
    expect(errors(e, { ...dist, trips: 2.5 })).toHaveProperty("trips");
  });
});

describe("coffee ratio", () => {
  const e = coffeeRatio.engine;
  const base = { method: "drip", solve: "coffee", water: 500, waterUnit: "mL", coffee: 30, coffeeUnit: "g" };

  it("matches reference values", () => {
    expect(primary(e, base)).toBeCloseTo(31.25, 9);
    // python: 12*29.5735295625/15 = 23.65882365
    expect(primary(e, { ...base, method: "custom", ratioCustom: 15, water: 12, waterUnit: "floz" })).toBeCloseTo(23.65882365, 9);
    // python: 28.349523125*17/236.5882365 = 2.037049264387243 cups from 1 oz coffee
    expect(primary(e, { ...base, solve: "water", ratioDrip: 17, coffee: 1, coffeeUnit: "oz", waterUnit: "cup" })).toBeCloseTo(2.037049264387243, 9);
    // python: 18*2 = 36 (espresso)
    expect(primary(e, { ...base, method: "espresso", solve: "water", coffee: 18, waterUnit: "g" })).toBeCloseTo(36, 9);
    // python: 4*236.5882365/8/28.349523125 = 4.172702226009665 oz
    expect(primary(e, { ...base, method: "coldBrew", water: 4, waterUnit: "cup", coffeeUnit: "oz" })).toBeCloseTo(4.172702226009665, 9);
  });

  it("uses each method's own editable ratio", () => {
    expect(primary(e, { ...base, method: "frenchPress", water: 600 })).toBeCloseTo(50, 9);
    expect(primary(e, { ...base, method: "frenchPress", ratioFrenchPress: 15, water: 600 })).toBeCloseTo(40, 9);
    const r = ok(e, { ...base, ratioDrip: 18, water: 1000 });
    expect(text(item(r, "Coffee to water ratio"))).toBe("1:18");
    // python: 1000/18 = 55.55555555555556 g/L
    expect(num(item(r, "Coffee per liter of water"))).toBeCloseTo(55.55555555555556, 9);
    expect(ok(e, { ...base, method: "espresso", solve: "water" }).notes?.[0]).toMatch(/espresso/i);
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { ...base, water: 0 })).toHaveProperty("water");
    expect(errors(e, { ...base, solve: "water", coffee: -1 })).toHaveProperty("coffee");
    expect(errors(e, { ...base, ratioDrip: 0.5 })).toHaveProperty("ratioDrip");
    expect(errors(e, { ...base, ratioDrip: 500 })).toHaveProperty("ratioDrip");
  });
});

describe("baker's percentage", () => {
  const e = bakersPercentage.engine;
  const base = { mode: "fromFlour", unit: "g", flour: 1000, water: 70, salt: 2, yeast: 1 };

  it("matches reference values", () => {
    expect(primary(e, base)).toBeCloseTo(1730, 9);
    // python: 1500/((100+65+2+1.5+3)/100) = 874.6355685131194
    expect(primary(e, { ...base, mode: "fromDough", dough: 1500, water: 65, yeast: 1.5, extra1Name: "Olive oil", extra1Pct: 3 })).toBeCloseTo(874.6355685131194, 9);
    // python: 16*(100+68+2+0.5+5)/100 = 28.08
    expect(primary(e, { ...base, unit: "oz", flour: 16, water: 68, yeast: 0.5, extra2Pct: 5 })).toBeCloseTo(28.08, 9);
    // python: 4*250/((100+62+2.8+0.2+2+4)/100) = 584.7953216374269
    expect(primary(e, { ...base, mode: "fromDough", dough: 1000, water: 62, salt: 2.8, yeast: 0.2, extra1Pct: 2, extra2Pct: 4 })).toBeCloseTo(584.7953216374269, 9);
    expect(totalPercent([{ name: "w", percent: 70 }])).toBe(170);
    expect(flourForDough(340, [{ name: "w", percent: 70 }])).toBeCloseTo(200, 12);
  });

  it("builds the ingredient table and hydration", () => {
    const r = ok(e, { ...base, extra1Name: "Butter", extra1Pct: 10, extra3Pct: 1 });
    const rows = r.tables?.[0].rows ?? [];
    expect(rows.map((row) => row.label)).toEqual(["Flour", "Water", "Salt", "Yeast", "Butter", "Extra ingredient 3", "Total dough"]);
    expect(num(rows[1].cells[1])).toBeCloseTo(700, 9);
    expect(num(rows[4].cells[1])).toBeCloseTo(100, 9);
    expect(num(rows[6].cells[0])).toBeCloseTo(184, 9);
    expect(num(rows[6].cells[1])).toBeCloseTo(1840, 9);
    expect(rows[6].highlight).toBe(true);
    expect(num(item(r, "Hydration (water ÷ flour)"))).toBe(70);
    // A named line without a percentage is ignored.
    expect(ok(e, { ...base, extra1Name: "Seeds" }).tables?.[0].rows).toHaveLength(5);
    // No water at all is allowed.
    expect(primary(e, { ...base, water: 0, salt: 0, yeast: 0 })).toBe(1000);
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { ...base, flour: 0 })).toHaveProperty("flour");
    expect(errors(e, { ...base, mode: "fromDough", dough: -1 })).toHaveProperty("dough");
    expect(errors(e, { ...base, water: -5 })).toHaveProperty("water");
    expect(errors(e, { ...base, salt: 150 })).toHaveProperty("salt");
    expect(errors(e, { ...base, extra1Pct: -1 })).toHaveProperty("extra1Pct");
  });
});

describe("roofing", () => {
  const e = roofing.engine;
  const base = { units: "imperial", lengthImperial: 40, widthImperial: 30, overhangImperial: 1, pitchMode: "rise", rise: 6, roofType: "gable", wasteGable: 10, bundles: 3 };

  it("matches reference values", () => {
    // python: 42*32*math.sqrt(1.25)*1.1/100 = 16.529014489678445
    expect(primary(e, base)).toBeCloseTo(16.529014489678445, 9);
    // python: 13*10/math.cos(math.radians(30))*1.15/0.3048**2/100 = 18.581494264094918
    expect(primary(e, { ...base, units: "metric", lengthMetric: 12, widthMetric: 9, overhangMetric: 0.5, pitchMode: "angle", angle: 30, roofType: "hip", wasteHip: 15 })).toBeCloseTo(18.581494264094918, 9);
    // python: 53*31*math.sqrt(1+(8/12)**2)*1.12/100 = 22.11597078352605
    expect(primary(e, { ...base, lengthImperial: 50, widthImperial: 28, overhangImperial: 1.5, rise: 8, wasteGable: 12 })).toBeCloseTo(22.11597078352605, 9);
    // Flat roof, no overhang, no waste: python 20*10/100 = 2
    expect(primary(e, { ...base, lengthImperial: 20, widthImperial: 10, overhangImperial: 0, rise: 0, wasteGable: 0 })).toBeCloseTo(2, 12);
    // 12/12 equals 45°: python math.sqrt(2) = 1.4142135623730951
    expect(pitchFactor(1)).toBeCloseTo(1.4142135623730951, 12);
    expect(primary(e, { ...base, rise: 12 })).toBeCloseTo(primary(e, { ...base, pitchMode: "angle", angle: 45 }), 9);
    expect(roofEstimate({ length: 10, width: 10, overhang: 0, slope: 0.5, wastePercent: 0 }).area).toBeCloseTo(111.80339887498948, 9);
  });

  it("counts bundles and underlayment rolls, rounded up", () => {
    const r = ok(e, { ...base, lengthImperial: 50, widthImperial: 28, overhangImperial: 1.5, rise: 8, wasteGable: 12, rollCoverageImperial: 400 });
    // python: math.ceil(22.11597078352605*3) = 67; math.ceil(2211.597078352605/400) = 6
    expect(num(item(r, "Shingle bundles"))).toBe(67);
    expect(num(item(r, "Underlayment rolls"))).toBe(6);
    expect(text(item(r, "Pitch"))).toBe("8 in 12");
    // Exactly 20 squares at 3 bundles: 60, not 61.
    const exact = ok(e, { ...base, lengthImperial: 50, widthImperial: 40, overhangImperial: 0, rise: 0, wasteGable: 0 });
    expect(num(exact.primary.value)).toBeCloseTo(20, 12);
    expect(num(item(exact, "Shingle bundles"))).toBe(60);
    expect(has(exact, "Underlayment rolls")).toBe(false);
    // Hip and gable give the same area at the same pitch; only the waste default differs.
    const hip = ok(e, { ...base, roofType: "hip", wasteHip: 10 });
    expect(num(hip.primary.value)).toBeCloseTo(16.529014489678445, 9);
    expect(hip.notes?.[0]).toMatch(/hip roof/i);
    // Metric: python 42*32*math.sqrt(1.25)*0.3048**2 = 139.59964...
    const metricArea = ok(e, base);
    expect(num(item(metricArea, "Roof area in other units"))).toBeCloseTo(1502.6376808798586 * 0.09290304, 9);
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { ...base, lengthImperial: 0 })).toHaveProperty("lengthImperial");
    expect(errors(e, { ...base, overhangImperial: -1 })).toHaveProperty("overhangImperial");
    expect(errors(e, { ...base, pitchMode: "angle", angle: 90 })).toHaveProperty("angle");
    expect(errors(e, { ...base, rise: -1 })).toHaveProperty("rise");
    expect(errors(e, { ...base, bundles: 0 })).toHaveProperty("bundles");
    expect(errors(e, { ...base, wasteGable: 80 })).toHaveProperty("wasteGable");
    expect(errors(e, { ...base, rollCoverageImperial: 0 })).toHaveProperty("rollCoverageImperial");
  });
});

describe("stairs", () => {
  const e = stairs.engine;
  const base = { unit: "in", riseIn: 108, maxRiserIn: 7.75, targetRiserIn: null, treadIn: 10, runLimitIn: null };

  it("matches reference values", () => {
    const r = ok(e, base);
    expect(num(r.primary.value)).toBe(14);
    // python: 108/14 = 7.714285714285714; run 13*10 = 130; math.degrees(math.atan(108/14/10)) = 37.64762064010765
    expect(num(item(r, "Riser height"))).toBeCloseTo(7.714285714285714, 9);
    expect(num(item(r, "Number of treads"))).toBe(13);
    expect(num(item(r, "Total run"))).toBeCloseTo(130, 9);
    expect(num(item(r, "Stair angle"))).toBeCloseTo(37.64762064010765, 9);
    // python: math.hypot(108,130) = 169.00887550658396
    expect(num(item(r, "Stringer length (rise and run diagonal)"))).toBeCloseTo(169.00887550658396, 9);
    // python: 2*108/14+10 = 25.42857142857143
    expect(num(item(r, "Comfort check 2R + T"))).toBeCloseTo(25.42857142857143, 9);
    expect(text(item(r, "Compared with the 24–25 in (61–63.5 cm) rule of thumb"))).toMatch(/^Above/);
    expect(r.primary.caption).toBe("14 risers of 7.71 in each, with 13 treads of 10 in.");
  });

  it("handles exact multiples, targets, metric and run limits", () => {
    // 77.5 / 7.75 = 10 exactly: 10 risers, not 11.
    expect(primary(e, { ...base, riseIn: 77.5, treadIn: 11 })).toBe(10);
    // python: math.hypot(30,30) = 42.42640687119285; 2*7.5+10 = 25 → within
    const r = ok(e, { ...base, riseIn: 30 });
    expect(num(r.primary.value)).toBe(4);
    expect(num(item(r, "Stringer length (rise and run diagonal)"))).toBeCloseTo(42.42640687119285, 9);
    expect(text(item(r, "Compared with the 24–25 in (61–63.5 cm) rule of thumb"))).toBe("Within the range");
    // Metric: python math.ceil(252/19.6) = 13; 2*252/13+24 = 62.76923076923077 cm = 24.71 in
    const m = ok(e, { unit: "cm", riseCm: 252, maxRiserCm: 19.6, treadCm: 24 });
    expect(num(m.primary.value)).toBe(13);
    expect(num(item(m, "Comfort check 2R + T"))).toBeCloseTo(62.76923076923077, 9);
    expect(text(item(m, "Compared with the 24–25 in (61–63.5 cm) rule of thumb"))).toBe("Within the range");
    // Target 7 in: python round(100/7) = 14; run 13*10.5 = 136.5 > 130
    const tgt = ok(e, { ...base, riseIn: 100, targetRiserIn: 7, treadIn: 10.5, runLimitIn: 130 });
    expect(num(tgt.primary.value)).toBe(14);
    expect(tgt.notes?.[0]).toBe("The total run of 136.5 in is longer than the space you entered (130 in) by 6.5 in.");
    // Target above the maximum: python round(100/9) = 11 risers of 9.0909 in > 7.75
    const tall = ok(e, { ...base, riseIn: 100, targetRiserIn: 9 });
    expect(num(tall.primary.value)).toBe(11);
    expect(tall.notes?.[0]).toMatch(/above the maximum you entered \(7\.75 in\)/);
    // A single step has no tread and no run.
    expect(stairLayout({ rise: 6, maxRiser: 7.75, targetRiser: null, tread: 10 })).toMatchObject({ risers: 1, treads: 0, run: 0, stringer: 6 });
    expect(riserCount({ rise: 7.76, maxRiser: 7.75, targetRiser: null, tread: 10 })).toBe(2);
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { ...base, riseIn: 0 })).toHaveProperty("riseIn");
    expect(errors(e, { ...base, maxRiserIn: 0 })).toHaveProperty("maxRiserIn");
    expect(errors(e, { ...base, treadIn: -1 })).toHaveProperty("treadIn");
    expect(errors(e, { ...base, targetRiserIn: 0 })).toHaveProperty("targetRiserIn");
    expect(errors(e, { ...base, riseIn: 1000 })).toHaveProperty("riseIn");
  });
});
