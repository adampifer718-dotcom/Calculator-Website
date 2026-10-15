import { describe, expect, it } from "vitest";
import { evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import type { AnyEngine, CalculatorDefinition, EngineValues, ResultValue } from "./framework/types";
import { volumeShapes } from "./volume-shapes";
import { surfaceArea } from "./surface-area";
import { acceleration } from "./acceleration";
import { speedConverter } from "./speed-converter";
import { tile } from "./tile";
import { volumeShapesEngine } from "./volume-shapes/engine";
import { surfaceAreaEngine } from "./surface-area/engine";
import { accelerationEngine } from "./acceleration/engine";
import { speedConverterEngine } from "./speed-converter/engine";
import { tileEngine } from "./tile/engine";
import { SPEED, convertUnits, findUnit } from "@/lib/math/units";

const DEFINITIONS: CalculatorDefinition[] = [volumeShapes, surfaceArea, acceleration, speedConverter, tile];

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

describe("batch 5 group B: content and examples", () => {
  it.each(DEFINITIONS.map((d) => [d.slug, d] as const))("%s has valid content", (_slug, def) => {
    expect(def.metaTitle.length).toBeLessThanOrEqual(59);
    expect(def.metaDescription.length).toBeGreaterThanOrEqual(70);
    expect(def.metaDescription.length).toBeLessThanOrEqual(160);
    expect(def.intro.length).toBeGreaterThan(0);
    expect(def.howToUse.length).toBeGreaterThan(0);
    expect(def.formulas.length).toBeGreaterThan(0);
    expect(def.assumptions.length).toBeGreaterThan(0);
    expect(def.examples.length).toBeGreaterThanOrEqual(2);
    expect(def.examples.length).toBeLessThanOrEqual(3);
    expect(def.faqs).toHaveLength(3);
    expect(def.related.length).toBeGreaterThanOrEqual(2);
    expect(def.related.length).toBeLessThanOrEqual(4);
    expect(def.related).not.toContain(def.slug);
    expect(def.addedOn).toBe("2026-10-15");
    expect(def.updated).toBe("2026-10-15");
    expect(def.status).toBe("published");
    expect(def.sources.length).toBeGreaterThan(0);
    expect(def.expertReview).toBeUndefined();
    expect(def.popularRank).toBeUndefined();
    expect(def.featured).toBeUndefined();
  });

  it("has unique titles and metadata within the group", () => {
    for (const key of ["title", "metaTitle", "metaDescription", "slug", "id"] as const) {
      expect(new Set(DEFINITIONS.map((d) => d[key])).size).toBe(DEFINITIONS.length);
    }
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

describe("volume calculator", () => {
  it("matches independent reference values", () => {
    // python: math.pi*36*15 -> 1696.4600329384882
    expect(primary(volumeShapesEngine, { shape: "cylinder", unit: "cm", radius: 6, height: 15 })).toBeCloseTo(1696.4600329384882, 9);
    // python: 2/3*math.pi*1000 -> 2094.3951023931954
    expect(primary(volumeShapesEngine, { shape: "hemisphere", unit: "cm", radius: 10 })).toBeCloseTo(2094.3951023931954, 9);
    // python: math.pi*9*10/3 -> 94.2477796076938
    expect(primary(volumeShapesEngine, { shape: "cone", unit: "ft", radius: 3, height: 10 })).toBeCloseTo(94.2477796076938, 9);
    // python: 230**2*146/3 -> 2574466.6666666665
    expect(primary(volumeShapesEngine, { shape: "pyramid", unit: "m", baseSide: 230, height: 146 })).toBeCloseTo(2574466.6666666665, 6);
    // python: 2.5*1.2*0.8 -> 2.4 ; 5**3 -> 125
    expect(primary(volumeShapesEngine, { shape: "box", unit: "m", length: 2.5, width: 1.2, height: 0.8 })).toBeCloseTo(2.4, 9);
    expect(primary(volumeShapesEngine, { shape: "cube", unit: "mm", edge: 5 })).toBeCloseTo(125, 9);
  });

  it("converts to liters, cubic meters and US gallons", () => {
    const sphere = { shape: "sphere", unit: "in", radius: 4 };
    // python: 4/3*math.pi*64*0.0254**3*1000/3.785411784 -> 1.1605306195079177
    expect(num(item(volumeShapesEngine, sphere, "In US gallons"))).toBeCloseTo(1.1605306195079177, 9);
    // python: 4/3*math.pi*64*0.016387064 -> 4.393...
    expect(num(item(volumeShapesEngine, sphere, "In liters"))).toBeCloseTo((4 / 3) * Math.PI * 64 * 0.016387064, 9);
    const tank = { shape: "cylinder", unit: "m", radius: 0.5, height: 1.2 };
    // python: math.pi*0.25*1.2*1000 -> 942.4777960769379
    expect(num(item(volumeShapesEngine, tank, "In liters"))).toBeCloseTo(942.4777960769379, 9);
    expect(num(item(volumeShapesEngine, tank, "In cubic meters"))).toBeCloseTo(0.9424777960769379, 9);
    expect(text(ok(volumeShapesEngine, tank).primary.value)).toBe("0.9424778 m³");
  });

  it("handles extremes without NaN or Infinity", () => {
    const big = ok(volumeShapesEngine, { shape: "cube", unit: "m", edge: 1e12 });
    expect(big.primary.value.kind).toBe("text");
    expect(text(big.primary.value)).toMatch(/× 10³⁶ m³$/);
    const tiny = ok(volumeShapesEngine, { shape: "cube", unit: "mm", edge: 0.001 });
    expect(text(item(volumeShapesEngine, { shape: "cube", unit: "mm", edge: 0.001 }, "In cubic meters"))).toMatch(/× 10⁻¹⁸ m³$/);
    expect(text(tiny.primary.value)).toBe("1 × 10⁻⁹ mm³");
  });

  it("rejects impossible dimensions and ignores hidden fields", () => {
    expect(errors(volumeShapesEngine, { shape: "cylinder", radius: 0 })).toHaveProperty("radius");
    expect(errors(volumeShapesEngine, { shape: "box", length: -2 })).toHaveProperty("length");
    expect(errors(volumeShapesEngine, { shape: "cone", height: "" as never })).toHaveProperty("height");
    // The edge field is hidden for a sphere, so an invalid value there does not matter.
    expect(run(volumeShapesEngine, { shape: "sphere", edge: -1, radius: 2 }).ok).toBe(true);
  });
});

describe("surface area calculator", () => {
  it("matches independent reference values", () => {
    // python: 2*math.pi*16+2*math.pi*4*11 -> 376.99111843077515
    expect(primary(surfaceAreaEngine, { shape: "cylinder", unit: "in", radius: 4, height: 11 })).toBeCloseTo(376.99111843077515, 9);
    // python: 3*math.pi*4 -> 37.69911184307752
    expect(primary(surfaceAreaEngine, { shape: "hemisphere", unit: "m", radius: 2 })).toBeCloseTo(37.69911184307752, 9);
    // python: 4*math.pi*100 -> 1256.6370614359173
    expect(primary(surfaceAreaEngine, { shape: "sphere", unit: "cm", radius: 10 })).toBeCloseTo(1256.6370614359173, 9);
    // python: 6*8**2 -> 384
    expect(primary(surfaceAreaEngine, { shape: "cube", unit: "cm", edge: 8 })).toBeCloseTo(384, 9);
  });

  it("shows partial areas and conversions", () => {
    const cone = { shape: "cone", unit: "m", radius: 0.6, height: 0.8 };
    // python: math.pi*0.6*1 -> 1.8849555921538759 ; math.pi*0.36 -> 1.1309733552923256
    expect(num(item(surfaceAreaEngine, cone, "Lateral area (sides only)"))).toBeCloseTo(1.8849555921538759, 9);
    expect(num(item(surfaceAreaEngine, cone, "Base area"))).toBeCloseTo(1.1309733552923256, 9);
    expect(num(item(surfaceAreaEngine, cone, "Slant height"))).toBeCloseTo(1, 9);
    const pyramid = { shape: "pyramid", unit: "ft", baseSide: 6, height: 4 };
    expect(num(item(surfaceAreaEngine, pyramid, "Lateral area (sides only)"))).toBeCloseTo(60, 9);
    // python: 96*0.09290304 -> 8.91869184
    expect(num(item(surfaceAreaEngine, pyramid, "Total in square meters"))).toBeCloseTo(8.91869184, 9);
    const box = { shape: "box", unit: "cm", length: 30, width: 20, height: 10 };
    expect(num(item(surfaceAreaEngine, box, "Total in square meters"))).toBeCloseTo(0.22, 9);
    expect(num(item(surfaceAreaEngine, box, "Lateral area (sides only)"))).toBeCloseTo(1000, 9);
    expect(num(item(surfaceAreaEngine, { shape: "cylinder", unit: "in", radius: 4, height: 11 }, "Area of each circular end"))).toBeCloseTo(Math.PI * 16, 9);
    const hemi = ok(surfaceAreaEngine, { shape: "hemisphere", unit: "m", radius: 2 });
    expect(hemi.secondary!.map((s) => s.label)).toContain("Curved surface area");
    const sphere = ok(surfaceAreaEngine, { shape: "sphere", unit: "cm", radius: 10 });
    expect(sphere.secondary!.map((s) => s.label)).toEqual(["Total in square meters", "Total in square feet"]);
    expect(sphere.notes).toBeUndefined();
  });

  it("rejects impossible dimensions", () => {
    expect(errors(surfaceAreaEngine, { shape: "cube", edge: 0 })).toHaveProperty("edge");
    expect(errors(surfaceAreaEngine, { shape: "pyramid", baseSide: -3 })).toHaveProperty("baseSide");
    expect(errors(surfaceAreaEngine, { unit: "yd" })).toHaveProperty("unit");
  });
});

describe("acceleration calculator", () => {
  it("matches independent reference values", () => {
    // python: 2*(200-5*10)/10**2 -> 3.0 ; final v = 5+3*10 -> 35 m/s
    expect(primary(accelerationEngine, { mode: "distance", speedUnit: "ms", v0: 5, distance: 200, distanceUnit: "m", time: 10 })).toBeCloseTo(3, 9);
    expect(num(item(accelerationEngine, { mode: "distance", speedUnit: "ms", v0: 5, distance: 200, distanceUnit: "m", time: 10 }, "Final velocity"))).toBeCloseTo(35, 9);
    // python: 2*0.25*1609.344/20**2 -> 2.01168 (quarter mile from rest in 20 s)
    expect(primary(accelerationEngine, { mode: "distance", speedUnit: "mph", v0: 0, distance: 0.25, distanceUnit: "mi", time: 20 })).toBeCloseTo(2.01168, 9);
    // python: 6/0.3048 -> 19.68503937007874 ; 6/9.80665 -> 0.6118297277867569
    expect(num(item(accelerationEngine, { mode: "force", force: 450, mass: 75 }, "In feet per second squared"))).toBeCloseTo(19.68503937007874, 9);
    expect(num(item(accelerationEngine, { mode: "force", force: 450, mass: 75 }, "In standard gravities (g)"))).toBeCloseTo(0.6118297277867569, 9);
    // python: (30-10)*0.3048/4 -> 1.524
    expect(primary(accelerationEngine, { mode: "velocity", speedUnit: "fts", v0: 10, v: 30, time: 4 })).toBeCloseTo(1.524, 9);
    // python: (0+100/3.6)/2*8 -> 111.11111111111111 m
    expect(num(item(accelerationEngine, { mode: "velocity", speedUnit: "kmh", v0: 0, v: 100, time: 8 }, "Distance covered"))).toBeCloseTo(111.11111111111111, 9);
  });

  it("flags deceleration and zero acceleration", () => {
    const braking = ok(accelerationEngine, { mode: "velocity", speedUnit: "mph", v0: 60, v: 0, time: 4 });
    expect(num(braking.primary.value)).toBeCloseTo(-6.7056, 9);
    expect(braking.notes![0]).toMatch(/decelerating/);
    // python: -6.7056/9.80665 -> -0.6837809037744795
    expect(num(item(accelerationEngine, { mode: "velocity", speedUnit: "mph", v0: 60, v: 0, time: 4 }, "In standard gravities (g)"))).toBeCloseTo(-0.6837809037744795, 9);
    const steady = ok(accelerationEngine, { mode: "velocity", speedUnit: "kmh", v0: 50, v: 50, time: 3 });
    expect(num(steady.primary.value)).toBe(0);
    expect(steady.notes![0]).toMatch(/Zero acceleration/);
    expect(primary(accelerationEngine, { mode: "force", force: -200, mass: 50 })).toBeCloseTo(-4, 9);
  });

  it("rejects impossible inputs", () => {
    expect(errors(accelerationEngine, { mode: "velocity", time: 0 })).toHaveProperty("time");
    expect(errors(accelerationEngine, { mode: "distance", distance: -5 })).toHaveProperty("distance");
    expect(errors(accelerationEngine, { mode: "force", mass: 0 })).toHaveProperty("mass");
    // Mass is hidden in velocity mode, so it is not validated there.
    expect(run(accelerationEngine, { mode: "velocity", mass: -1 }).ok).toBe(true);
  });
});

describe("speed converter", () => {
  it("has exact factors", () => {
    expect(findUnit(SPEED, "kmh").factor).toBeCloseTo(1 / 3.6, 15);
    expect(findUnit(SPEED, "mph").factor).toBe(0.44704);
    expect(findUnit(SPEED, "fts").factor).toBe(0.3048);
    expect(findUnit(SPEED, "kn").factor).toBeCloseTo(1852 / 3600, 15);
    expect(findUnit(SPEED, "cms").factor).toBe(0.01);
    expect(SPEED.map((u) => u.value)).toEqual(["ms", "kmh", "mph", "fts", "kn", "cms"]);
  });

  it("matches independent reference values", () => {
    // python: 65*0.44704*3.6 -> 104.60736
    expect(text(ok(speedConverterEngine, { value: 65, from: "mph", to: "kmh" }).primary.value)).toBe("104.60736 km/h");
    // python: 1852/3600/0.44704 -> 1.1507794480235427
    expect(text(ok(speedConverterEngine, { value: 1, from: "kn", to: "mph" }).primary.value)).toBe("1.150779448 mph");
    // python: 25*3.6 -> 90
    expect(text(ok(speedConverterEngine, { value: 25, from: "ms", to: "kmh" }).primary.value)).toBe("90 km/h");
    // python: 343/0.01 -> 34300 (speed of sound in cm/s)
    expect(convertUnits(343, findUnit(SPEED, "ms"), findUnit(SPEED, "cms"))).toBeCloseTo(34300, 9);
  });

  it("lists every unit and handles zero, negatives and extremes", () => {
    const result = ok(speedConverterEngine, { value: 0, from: "mph", to: "kn" });
    expect(text(result.primary.value)).toBe("0 kn");
    expect(result.tables![0].rows).toHaveLength(6);
    expect(text(ok(speedConverterEngine, { value: -10, from: "ms", to: "kmh" }).primary.value)).toBe("-36 km/h");
    expect(text(ok(speedConverterEngine, { value: 1e12, from: "kn", to: "cms" }).primary.value)).toBe("51,444,444,440,000 cm/s");
  });

  it("rejects invalid input", () => {
    expect(errors(speedConverterEngine, { value: "abc" as never })).toHaveProperty("value");
    expect(errors(speedConverterEngine, { from: "minkm" })).toHaveProperty("from");
  });
});

describe("tile calculator", () => {
  it("matches independent reference values", () => {
    // python: math.ceil(12*9/(12.125**2/144)*1.1) -> 117 ; before waste math.ceil(105.78) -> 106
    const imperial = ok(tileEngine, {});
    expect(num(imperial.primary.value)).toBe(117);
    expect(num(item(tileEngine, {}, "Tiles before waste"))).toBe(106);
    // python: math.ceil(4*3/(303*303/1e6)*1.1) -> 144
    expect(primary(tileEngine, { units: "metric" })).toBe(144);
    // python: math.ceil(10*10/(12*12/144)*1.0) -> 100 (no joint, no waste, exact fit)
    expect(primary(tileEngine, { areaLengthImperial: 10, areaWidthImperial: 10, groutImperial: 0, waste: 0 })).toBe(100);
    // python: math.ceil(10*10/(12*12/144)*1.1) -> 110 (avoids 110.00000000000001 rounding up to 111)
    expect(primary(tileEngine, { areaLengthImperial: 10, areaWidthImperial: 10, groutImperial: 0, waste: 10 })).toBe(110);
  });

  it("computes boxes and spare tiles", () => {
    const values = { units: "metric", areaLengthMetric: 3.2, areaWidthMetric: 2.5, tileLengthMetric: 600, tileWidthMetric: 300, groutMetric: 2, waste: 12, perBox: 8 };
    expect(text(item(tileEngine, values, "Boxes to buy"))).toBe("7 boxes (56 tiles)");
    expect(num(item(tileEngine, values, "Spare tiles in the boxes"))).toBe(6);
    // python: 602*302/1e6 -> 0.181804
    expect(num(item(tileEngine, values, "Area per tile with joint"))).toBeCloseTo(0.181804, 12);
    expect(text(item(tileEngine, { ...values, perBox: 50 }, "Boxes to buy"))).toBe("1 box (50 tiles)");
    expect(ok(tileEngine, {}).secondary!.map((s) => s.label)).not.toContain("Boxes to buy");
  });

  it("handles a tile larger than the area", () => {
    expect(primary(tileEngine, { areaLengthImperial: 0.5, areaWidthImperial: 0.5, waste: 0 })).toBe(1);
  });

  it("rejects impossible inputs", () => {
    expect(errors(tileEngine, { areaLengthImperial: 0 })).toHaveProperty("areaLengthImperial");
    expect(errors(tileEngine, { tileWidthImperial: -1 })).toHaveProperty("tileWidthImperial");
    expect(errors(tileEngine, { groutImperial: -0.1 })).toHaveProperty("groutImperial");
    expect(errors(tileEngine, { waste: 60 })).toHaveProperty("waste");
    expect(errors(tileEngine, { perBox: 2.5 })).toHaveProperty("perBox");
    expect(errors(tileEngine, { perBox: 0 })).toHaveProperty("perBox");
    expect(errors(tileEngine, { units: "metric", tileLengthMetric: 0 })).toHaveProperty("tileLengthMetric");
  });
});
