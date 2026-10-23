import { describe, expect, it } from "vitest";
import { defaultRawValues, evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import { engineContext } from "./framework/i18n";
import type { AnyEngine, CalculatorDefinition, EngineValues, ResultValue } from "./framework/types";
import { areaShapes } from "./area-shapes";
import { ellipsePerimeter, heronArea, regularPolygon } from "./area-shapes/engine";
import { ratio } from "./ratio";
import { divideAmount, makeRatioEngine, simplifyRatio } from "./ratio/engine";
import ratioText from "./ratio/text/en";
import { rounding } from "./rounding";
import { makeRoundingEngine } from "./rounding/engine";
import roundingText from "./rounding/text/en";
import { triangle } from "./triangle";
import { classify, solveTriangle, type TriangleValues } from "./triangle/engine";
import triangleText from "./triangle/text/en";
import { quartileIqr } from "./quartile-iqr";
import { fences, fiveNumberSummary, makeQuartileEngine } from "./quartile-iqr/engine";
import quartileText from "./quartile-iqr/text/en";
import { formatExactDecimal, parseExactDecimal, roundToStep, type RoundingMethod } from "@/lib/math/decimal-rounding";

const DEFINITIONS: CalculatorDefinition[] = [areaShapes, ratio, rounding, triangle, quartileIqr];

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

describe("batch 6 group A: definitions", () => {
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
    expect(d.addedOn).toBe("2026-10-22");
    expect(d.updated).toBe("2026-10-22");
    expect(d.status).toBe("published");
    expect(d.expertReview).toBeUndefined();
    expect(evaluate(d.engine, defaultRawValues(d.engine)).ok).toBe(true);
    for (const example of d.examples) {
      const value = ok(d.engine, example.inputs).primary.value;
      if (typeof example.expectedPrimary === "string") expect(text(value)).toBe(example.expectedPrimary);
      else expect(num(value)).toBeCloseTo(example.expectedPrimary, 9);
    }
  });

  it("titles and meta titles are unique within the batch", () => {
    expect(new Set(DEFINITIONS.map((d) => d.title)).size).toBe(DEFINITIONS.length);
    expect(new Set(DEFINITIONS.map((d) => d.metaTitle)).size).toBe(DEFINITIONS.length);
  });
});

describe("area calculator", () => {
  const e = areaShapes.engine;
  it("matches python references", () => {
    // python: (6+10)/2*4
    expect(num(ok(e, { shape: "trapezoid", unit: "m", trapA: 6, trapB: 10, trapH: 4 }).primary.value)).toBeCloseTo(32, 12);
    // python: 12*7/2 ; 4*math.hypot(12,7)/2
    const rh = ok(e, { shape: "rhombus", unit: "cm", d1: 12, d2: 7 });
    expect(num(rh.primary.value)).toBeCloseTo(42, 12);
    expect(num(item(rh, "Perimeter"))).toBeCloseTo(27.784887978899608, 6);
    // python: math.pi*(100-36)
    expect(num(ok(e, { shape: "annulus", unit: "m", outer: 10, inner: 6 }).primary.value)).toBeCloseTo(201.06192982974676, 9);
    // python: s=12; math.sqrt(s*(s-7)*(s-8)*(s-9))
    expect(heronArea(7, 8, 9)).toBeCloseTo(26.832815729997478, 12);
    // python: 6*16/(4*math.tan(math.pi/6)) ; 4/(2*math.tan(math.pi/6))
    const hex = regularPolygon(6, 4);
    expect(hex.area).toBeCloseTo(41.569219381653056, 12);
    expect(hex.apothem).toBeCloseTo(3.464101615137755, 12);
    expect(hex.interiorAngle).toBeCloseTo(120, 12);
    // python: math.pi*5*3 ; Ramanujan II: h=(2/8)**2; math.pi*8*(1+3*h/(10+math.sqrt(4-3*h)))
    const el = ok(e, { shape: "ellipse", unit: "m", semiA: 5, semiB: 3 });
    expect(num(el.primary.value)).toBeCloseTo(47.12388980384689, 10);
    expect(ellipsePerimeter(5, 3)).toBeCloseTo(25.526998862788762, 12);
    expect(ellipsePerimeter(2, 2)).toBeCloseTo(4 * Math.PI, 12);
  });

  it("converts to square meters and handles every unit", () => {
    // 1 yd² = 0.9144² m² = 0.83612736 m²
    const r = ok(e, { shape: "parallelogram", unit: "yd", paraBase: 1, paraH: 1 });
    expect(num(item(r, "Area in square meters"))).toBeCloseTo(0.83612736, 12);
    // 1 km² = 1e6 m²
    expect(num(item(ok(e, { shape: "parallelogram", unit: "km", paraBase: 2, paraH: 3 }), "Area in square meters"))).toBeCloseTo(6e6, 3);
  });

  it("handles edges: full-circle sector, zero inner radius, 1000-sided polygon", () => {
    expect(num(ok(e, { shape: "sector", unit: "m", radius: 1, angle: 360 }).primary.value)).toBeCloseTo(Math.PI, 12);
    expect(num(ok(e, { shape: "annulus", unit: "m", outer: 1, inner: 0 }).primary.value)).toBeCloseTo(Math.PI, 12);
    // python: 1000/(4*math.tan(math.pi/1000)) = 79577.20974638761, just below the circle 1000**2/(4*math.pi)
    expect(regularPolygon(1000, 1).area).toBeCloseTo(79577.20974638761, 6);
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { shape: "annulus", unit: "m", outer: 5, inner: 5 }).inner).toBeDefined();
    expect(errors(e, { shape: "heron", unit: "m", sideA: 3, sideB: 4, sideC: 7 }).sideC).toBeDefined();
    expect(errors(e, { shape: "heron", unit: "m", sideA: 3, sideB: 4, sideC: 8 }).sideC).toBeDefined();
    expect(errors(e, { shape: "sector", unit: "m", radius: 1, angle: 0 }).angle).toBeDefined();
    expect(errors(e, { shape: "sector", unit: "m", radius: 1, angle: 361 }).angle).toBeDefined();
    expect(errors(e, { shape: "polygon", unit: "m", sides: 2, side: 1 }).sides).toBeDefined();
    expect(errors(e, { shape: "polygon", unit: "m", sides: 4.5, side: 1 }).sides).toBeDefined();
    expect(errors(e, { shape: "trapezoid", unit: "m", trapA: -1, trapB: 2, trapH: 1 }).trapA).toBeDefined();
  });
});

describe("ratio calculator", () => {
  const e = ratio.engine;
  const big = (n: bigint[]) => n.map(String).join(":");
  const d = (s: string) => parseExactDecimal(s)!;
  it("simplifies exactly, including decimals", () => {
    expect(big(simplifyRatio([d("12"), d("16")]))).toBe("3:4"); // python: math.gcd(12,16) == 4
    expect(big(simplifyRatio([d("1.5"), d("2.25"), d("3")]))).toBe("2:3:4"); // python: math.gcd(150, math.gcd(225, 300)) == 75
    expect(big(simplifyRatio([d("0.1"), d("0.3")]))).toBe("1:3");
    expect(big(simplifyRatio([d("7"), d("13")]))).toBe("7:13");
    // python: g=math.gcd(123456789012345678901234567890, 987654321098765432109876543210) -> 9000000000900000000090
    expect(big(simplifyRatio([d("123456789012345678901234567890"), d("987654321098765432109876543210")]))).toBe("13717421:109739369");
    const r = ok(e, { mode: "simplify", a: "12", b: "16", c: "" });
    expect(text(r.primary.value)).toBe("3 : 4");
    expect(text(item(r, "Decimal value (A ÷ B)"))).toBe("0.75");
    expect(text(item(r, "1 : n form"))).toBe("1 : 1.333333333");
  });

  it("solves the missing term", () => {
    // python: 7*10/4 ; 2.5*-8/0.4
    expect(num(ok(e, { mode: "missing", propA: 4, propB: 7, propC: 10 }).primary.value)).toBeCloseTo(17.5, 12);
    expect(num(ok(e, { mode: "missing", propA: 0.4, propB: 2.5, propC: -8 }).primary.value)).toBeCloseTo(-50, 12);
    expect(num(ok(e, { mode: "missing", propA: 3, propB: 1, propC: 1 }).primary.value)).toBeCloseTo(1 / 3, 12);
  });

  it("divides an amount", () => {
    // python: [100*p/6 for p in (1,2,3)]
    const shares = divideAmount(100, [d("1"), d("2"), d("3")]);
    expect(shares[0]).toBeCloseTo(16.666666666666668, 12);
    expect(shares[2]).toBeCloseTo(50, 12);
    const r = ok(e, { mode: "divide", a: "0.5", b: "1.5", c: "", amount: 90 });
    expect(text(r.primary.value)).toBe("22.5 : 67.5");
    expect(r.tables?.[0].rows).toHaveLength(2);
  });

  it("reads decimal commas in German", () => {
    const de = makeRatioEngine(engineContext("de", ratioText));
    expect(text(ok(de, { mode: "simplify", a: "1,5", b: "2,25", c: "3" }).primary.value)).toBe("2 : 3 : 4");
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { mode: "simplify", a: "0", b: "4", c: "" }).a).toBeDefined();
    expect(errors(e, { mode: "simplify", a: "-2", b: "4", c: "" }).a).toBeDefined();
    expect(errors(e, { mode: "simplify", a: "abc", b: "4", c: "" }).a).toBeDefined();
    expect(errors(e, { mode: "simplify", a: "2", b: "", c: "" }).b).toBeDefined();
    expect(errors(e, { mode: "missing", propA: 0, propB: 3, propC: 4 }).propA).toBeDefined();
    expect(errors(e, { mode: "divide", a: "1", b: "2", c: "", amount: 0 }).amount).toBeDefined();
  });
});

describe("rounding calculator", () => {
  const e = rounding.engine;
  const METHODS: RoundingMethod[] = ["halfUp", "halfEven", "halfDown", "ceiling", "floor", "truncate"];
  // Generated with python's decimal module (prec=200), for each method in METHODS order:
  // r = (D(x)/D(step)).quantize(D(1), rounding=ROUND_HALF_UP | ROUND_HALF_EVEN | ROUND_HALF_DOWN | ROUND_CEILING | ROUND_FLOOR | ROUND_DOWN) * D(step)
  // printed with as many decimals as the step, and -0 shown as 0.
  const CASES: [string, string, string[]][] = [
  ["2.5", "0.01", ["2.50", "2.50", "2.50", "2.50", "2.50", "2.50"]],
  ["2.5", "1", ["3", "2", "2", "3", "2", "2"]],
  ["2.5", "0.05", ["2.50", "2.50", "2.50", "2.50", "2.50", "2.50"]],
  ["2.5", "10", ["0", "0", "0", "10", "0", "0"]],
  ["2.5", "0.25", ["2.50", "2.50", "2.50", "2.50", "2.50", "2.50"]],
  ["2.5", "1e-20", ["2.50000000000000000000", "2.50000000000000000000", "2.50000000000000000000", "2.50000000000000000000", "2.50000000000000000000", "2.50000000000000000000"]],
  ["-2.5", "0.01", ["-2.50", "-2.50", "-2.50", "-2.50", "-2.50", "-2.50"]],
  ["-2.5", "1", ["-3", "-2", "-2", "-2", "-3", "-2"]],
  ["-2.5", "0.05", ["-2.50", "-2.50", "-2.50", "-2.50", "-2.50", "-2.50"]],
  ["-2.5", "10", ["0", "0", "0", "0", "-10", "0"]],
  ["-2.5", "0.25", ["-2.50", "-2.50", "-2.50", "-2.50", "-2.50", "-2.50"]],
  ["-2.5", "1e-20", ["-2.50000000000000000000", "-2.50000000000000000000", "-2.50000000000000000000", "-2.50000000000000000000", "-2.50000000000000000000", "-2.50000000000000000000"]],
  ["1.005", "0.01", ["1.01", "1.00", "1.00", "1.01", "1.00", "1.00"]],
  ["1.005", "1", ["1", "1", "1", "2", "1", "1"]],
  ["1.005", "0.05", ["1.00", "1.00", "1.00", "1.05", "1.00", "1.00"]],
  ["1.005", "10", ["0", "0", "0", "10", "0", "0"]],
  ["1.005", "0.25", ["1.00", "1.00", "1.00", "1.25", "1.00", "1.00"]],
  ["1.005", "1e-20", ["1.00500000000000000000", "1.00500000000000000000", "1.00500000000000000000", "1.00500000000000000000", "1.00500000000000000000", "1.00500000000000000000"]],
  ["2.675", "0.01", ["2.68", "2.68", "2.67", "2.68", "2.67", "2.67"]],
  ["2.675", "1", ["3", "3", "3", "3", "2", "2"]],
  ["2.675", "0.05", ["2.70", "2.70", "2.65", "2.70", "2.65", "2.65"]],
  ["2.675", "10", ["0", "0", "0", "10", "0", "0"]],
  ["2.675", "0.25", ["2.75", "2.75", "2.75", "2.75", "2.50", "2.50"]],
  ["2.675", "1e-20", ["2.67500000000000000000", "2.67500000000000000000", "2.67500000000000000000", "2.67500000000000000000", "2.67500000000000000000", "2.67500000000000000000"]],
  ["-0.125", "0.01", ["-0.13", "-0.12", "-0.12", "-0.12", "-0.13", "-0.12"]],
  ["-0.125", "1", ["0", "0", "0", "0", "-1", "0"]],
  ["-0.125", "0.05", ["-0.15", "-0.10", "-0.10", "-0.10", "-0.15", "-0.10"]],
  ["-0.125", "10", ["0", "0", "0", "0", "-10", "0"]],
  ["-0.125", "0.25", ["-0.25", "0.00", "0.00", "0.00", "-0.25", "0.00"]],
  ["-0.125", "1e-20", ["-0.12500000000000000000", "-0.12500000000000000000", "-0.12500000000000000000", "-0.12500000000000000000", "-0.12500000000000000000", "-0.12500000000000000000"]],
  ["1234.5675", "0.01", ["1234.57", "1234.57", "1234.57", "1234.57", "1234.56", "1234.56"]],
  ["1234.5675", "1", ["1235", "1235", "1235", "1235", "1234", "1234"]],
  ["1234.5675", "0.05", ["1234.55", "1234.55", "1234.55", "1234.60", "1234.55", "1234.55"]],
  ["1234.5675", "10", ["1230", "1230", "1230", "1240", "1230", "1230"]],
  ["1234.5675", "0.25", ["1234.50", "1234.50", "1234.50", "1234.75", "1234.50", "1234.50"]],
  ["1234.5675", "1e-20", ["1234.56750000000000000000", "1234.56750000000000000000", "1234.56750000000000000000", "1234.56750000000000000000", "1234.56750000000000000000", "1234.56750000000000000000"]],
  ["0.0449999", "0.01", ["0.04", "0.04", "0.04", "0.05", "0.04", "0.04"]],
  ["0.0449999", "1", ["0", "0", "0", "1", "0", "0"]],
  ["0.0449999", "0.05", ["0.05", "0.05", "0.05", "0.05", "0.00", "0.00"]],
  ["0.0449999", "10", ["0", "0", "0", "10", "0", "0"]],
  ["0.0449999", "0.25", ["0.00", "0.00", "0.00", "0.25", "0.00", "0.00"]],
  ["0.0449999", "1e-20", ["0.04499990000000000000", "0.04499990000000000000", "0.04499990000000000000", "0.04499990000000000000", "0.04499990000000000000", "0.04499990000000000000"]],
  ["99.995", "0.01", ["100.00", "100.00", "99.99", "100.00", "99.99", "99.99"]],
  ["99.995", "1", ["100", "100", "100", "100", "99", "99"]],
  ["99.995", "0.05", ["100.00", "100.00", "100.00", "100.00", "99.95", "99.95"]],
  ["99.995", "10", ["100", "100", "100", "100", "90", "90"]],
  ["99.995", "0.25", ["100.00", "100.00", "100.00", "100.00", "99.75", "99.75"]],
  ["99.995", "1e-20", ["99.99500000000000000000", "99.99500000000000000000", "99.99500000000000000000", "99.99500000000000000000", "99.99500000000000000000", "99.99500000000000000000"]],
  ["-7.5", "0.01", ["-7.50", "-7.50", "-7.50", "-7.50", "-7.50", "-7.50"]],
  ["-7.5", "1", ["-8", "-8", "-7", "-7", "-8", "-7"]],
  ["-7.5", "0.05", ["-7.50", "-7.50", "-7.50", "-7.50", "-7.50", "-7.50"]],
  ["-7.5", "10", ["-10", "-10", "-10", "0", "-10", "0"]],
  ["-7.5", "0.25", ["-7.50", "-7.50", "-7.50", "-7.50", "-7.50", "-7.50"]],
  ["-7.5", "1e-20", ["-7.50000000000000000000", "-7.50000000000000000000", "-7.50000000000000000000", "-7.50000000000000000000", "-7.50000000000000000000", "-7.50000000000000000000"]],
  ["3.14159", "0.01", ["3.14", "3.14", "3.14", "3.15", "3.14", "3.14"]],
  ["3.14159", "1", ["3", "3", "3", "4", "3", "3"]],
  ["3.14159", "0.05", ["3.15", "3.15", "3.15", "3.15", "3.10", "3.10"]],
  ["3.14159", "10", ["0", "0", "0", "10", "0", "0"]],
  ["3.14159", "0.25", ["3.25", "3.25", "3.25", "3.25", "3.00", "3.00"]],
  ["3.14159", "1e-20", ["3.14159000000000000000", "3.14159000000000000000", "3.14159000000000000000", "3.14159000000000000000", "3.14159000000000000000", "3.14159000000000000000"]],
  ["123456789012345678901234567890.5", "0.01", ["123456789012345678901234567890.50", "123456789012345678901234567890.50", "123456789012345678901234567890.50", "123456789012345678901234567890.50", "123456789012345678901234567890.50", "123456789012345678901234567890.50"]],
  ["123456789012345678901234567890.5", "1", ["123456789012345678901234567891", "123456789012345678901234567890", "123456789012345678901234567890", "123456789012345678901234567891", "123456789012345678901234567890", "123456789012345678901234567890"]],
  ["123456789012345678901234567890.5", "0.05", ["123456789012345678901234567890.50", "123456789012345678901234567890.50", "123456789012345678901234567890.50", "123456789012345678901234567890.50", "123456789012345678901234567890.50", "123456789012345678901234567890.50"]],
  ["123456789012345678901234567890.5", "10", ["123456789012345678901234567890", "123456789012345678901234567890", "123456789012345678901234567890", "123456789012345678901234567900", "123456789012345678901234567890", "123456789012345678901234567890"]],
  ["123456789012345678901234567890.5", "0.25", ["123456789012345678901234567890.50", "123456789012345678901234567890.50", "123456789012345678901234567890.50", "123456789012345678901234567890.50", "123456789012345678901234567890.50", "123456789012345678901234567890.50"]],
  ["123456789012345678901234567890.5", "1e-20", ["123456789012345678901234567890.50000000000000000000", "123456789012345678901234567890.50000000000000000000", "123456789012345678901234567890.50000000000000000000", "123456789012345678901234567890.50000000000000000000", "123456789012345678901234567890.50000000000000000000", "123456789012345678901234567890.50000000000000000000"]],
  ["-0.000000000000000000015", "0.01", ["0.00", "0.00", "0.00", "0.00", "-0.01", "0.00"]],
  ["-0.000000000000000000015", "1", ["0", "0", "0", "0", "-1", "0"]],
  ["-0.000000000000000000015", "0.05", ["0.00", "0.00", "0.00", "0.00", "-0.05", "0.00"]],
  ["-0.000000000000000000015", "10", ["0", "0", "0", "0", "-10", "0"]],
  ["-0.000000000000000000015", "0.25", ["0.00", "0.00", "0.00", "0.00", "-0.25", "0.00"]],
  ["-0.000000000000000000015", "1e-20", ["-0.00000000000000000002", "-0.00000000000000000002", "-0.00000000000000000001", "-0.00000000000000000001", "-0.00000000000000000002", "-0.00000000000000000001"]],
  ];
  it.each(CASES)("rounds %s to a multiple of %s like python's decimal module", (x, step, expected) => {
    METHODS.forEach((method, i) => {
      const r = ok(e, { number: x, target: "increment", increment: step, method });
      expect(text(r.primary.value).replace(/,/g, "")).toBe(expected[i]);
    });
  });

  it("handles the classic cases in the spec", () => {
    expect(text(ok(e, { number: "1.005", target: "places", places: 2, method: "halfUp" }).primary.value)).toBe("1.01");
    expect(text(ok(e, { number: "2.5", target: "whole", method: "halfEven" }).primary.value)).toBe("2");
    expect(text(ok(e, { number: "87654.321", target: "thousands", method: "halfUp" }).primary.value)).toBe("88,000");
    expect(text(ok(e, { number: "87654.321", target: "hundreds", method: "halfUp" }).primary.value)).toBe("87,700");
    expect(text(ok(e, { number: "87654.321", target: "tens", method: "floor" }).primary.value)).toBe("87,650");
    expect(text(ok(e, { number: "2.5", target: "places", places: 2, method: "halfUp" }).primary.value)).toBe("2.50");
    expect(text(ok(e, { number: "6.02e23", target: "thousands", method: "halfUp" }).primary.value)).toBe("602,000,000,000,000,000,000,000");
  });

  it("shows the exact difference and candidates", () => {
    const r = ok(e, { number: "19.97", target: "increment", increment: "0.05", method: "halfUp" });
    expect(text(r.primary.value)).toBe("19.95");
    expect(text(item(r, "Difference (rounded − original)"))).toBe("-0.02");
    expect(text(item(r, "Candidate below (floor)"))).toBe("19.95");
    expect(text(item(r, "Candidate above (ceiling)"))).toBe("20.00");
    expect(r.notes?.length ?? 0).toBe(0);
    const tie = ok(e, { number: "0.125", target: "increment", increment: "0.05", method: "halfEven" });
    expect(text(tie.primary.value)).toBe("0.10");
    expect(tie.notes).toContain(roundingText.tie);
    expect(text(item(ok(e, { number: "3.2", target: "whole", method: "ceiling" }), "Difference (rounded − original)"))).toBe("+0.8");
  });

  it("library helpers are exact", () => {
    const r = roundToStep(parseExactDecimal("2.675")!, parseExactDecimal("0.01")!, "halfUp");
    expect(formatExactDecimal(r, 2)).toBe("2.68");
    expect(formatExactDecimal(parseExactDecimal("-1234567.5")!)).toBe("-1,234,567.5");
    expect(parseExactDecimal("1e41")).toBeNull();
  });

  it("reads decimal commas in German", () => {
    const de = makeRoundingEngine(engineContext("de", roundingText));
    expect(text(ok(de, { number: "1,005", target: "places", places: 2, method: "halfUp" }).primary.value)).toBe("1,01");
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { number: "abc", target: "whole", method: "halfUp" }).number).toBeDefined();
    expect(errors(e, { number: "1".repeat(41), target: "whole", method: "halfUp" }).number).toBeDefined();
    expect(errors(e, { number: "1.5", target: "increment", increment: "0", method: "halfUp" }).increment).toBeDefined();
    expect(errors(e, { number: "1.5", target: "increment", increment: "-0.5", method: "halfUp" }).increment).toBeDefined();
    expect(errors(e, { number: "1.5", target: "places", places: 21, method: "halfUp" }).places).toBeDefined();
    expect(errors(e, { number: "1.5", target: "places", places: 1.5, method: "halfUp" }).places).toBeDefined();
  });
});

describe("triangle calculator", () => {
  const e = triangle.engine;
  const blank: TriangleValues = { mode: "sss", sideA: null, sideB: null, sideC: null, angleA: null, angleB: null, angleC: null };
  const solve = (mode: TriangleValues["mode"], v: Partial<TriangleValues>) => {
    const r = solveTriangle(mode as never, { ...blank, mode, ...v });
    if (!r.ok) throw new Error(r.code);
    return r.triangles;
  };
  it("matches python references", () => {
    // python: B=math.degrees(math.acos((25+49-36)/(2*5*7)))
    const [sss] = solve("sss", { sideA: 5, sideB: 6, sideC: 7 });
    expect(sss.A).toBeCloseTo(44.415308597192976, 10);
    expect(sss.B).toBeCloseTo(57.12165043562251, 10);
    expect(sss.C).toBeCloseTo(78.46304096718453, 10);
    // python: math.sqrt(64+121-176*math.cos(math.radians(37)))
    const [sas] = solve("sas", { sideA: 8, sideB: 11, angleC: 37 });
    expect(sas.c).toBeCloseTo(6.666344592929206, 10);
    expect(sas.B).toBeCloseTo(96.76251337564464, 10);
    // python: 10*sin(50°)/sin(70°), 10*sin(60°)/sin(70°)
    const [asa] = solve("asa", { angleA: 50, sideC: 10, angleB: 60 });
    expect(asa.a).toBeCloseTo(8.152074690959047, 10);
    expect(asa.b).toBeCloseTo(9.216049851068762, 10);
    // python: 9*sin(45°)/sin(30°), 9*sin(105°)/sin(30°)
    const [aas] = solve("aas", { angleA: 30, angleB: 45, sideA: 9 });
    expect(aas.b).toBeCloseTo(12.727922061357857, 10);
    expect(aas.c).toBeCloseTo(17.386664873203234, 10);
    // python: area = 0.5*a*b*sin(C) for both SSA solutions; R = 6/(2*sin(35°)) = 5.230340386863294
    const r = ok(e, { mode: "ssa", sideA: 6, sideB: 8, angleA: 35 });
    expect(num(r.primary.value)).toBeCloseTo(23.90447880181987, 9);
    expect(text(item(r, "Area (triangle 2)"))).toBe("6.165685063");
    expect(text(item(r, "Circumradius (R)"))).toBe("5.230340387");
    expect(r.tables).toHaveLength(2);
    // python: inradius of 5,6,7 = 6*sqrt(6)/9 = 1.632993161855452
    expect(text(item(ok(e, { mode: "sss", sideA: 5, sideB: 6, sideC: 7 }), "Inradius (r)"))).toBe("1.632993162");
  });

  it("classifies triangles", () => {
    expect(classify(solve("sss", { sideA: 3, sideB: 4, sideC: 5 })[0])).toEqual({ angle: "right", side: "scalene" });
    expect(classify(solve("sss", { sideA: 2, sideB: 2, sideC: 2 })[0])).toEqual({ angle: "acute", side: "equilateral" });
    expect(classify(solve("sas", { sideA: 1, sideB: 1, angleC: 120 })[0])).toEqual({ angle: "obtuse", side: "isosceles" });
    expect(classify(solve("aas", { angleA: 45, angleB: 45, sideA: 1 })[0])).toEqual({ angle: "right", side: "isosceles" });
    expect(classify(solve("asa", { angleA: 60, angleB: 60, sideC: 3 })[0])).toEqual({ angle: "acute", side: "equilateral" });
  });

  it("handles every SSA case", () => {
    // a = b sin A exactly: one right triangle (b = 2, A = 30°, a = 1)
    const right = solve("ssa", { sideA: 1, sideB: 2, angleA: 30 });
    expect(right).toHaveLength(1);
    expect(right[0].B).toBeCloseTo(90, 9);
    // a >= b: one triangle; python: math.degrees(math.asin(5*math.sin(math.radians(40))/7)) = 27.33124065859082
    const one = solve("ssa", { sideA: 7, sideB: 5, angleA: 40 });
    expect(one).toHaveLength(1);
    expect(one[0].B).toBeCloseTo(27.33124065859082, 9);
    // obtuse A with a > b: one triangle
    expect(solve("ssa", { sideA: 9, sideB: 5, angleA: 110 })).toHaveLength(1);
    expect(errors(e, { mode: "ssa", sideA: 4, sideB: 5, angleA: 110 }).sideA).toBe(triangleText.noSolutionObtuse);
    expect(errors(e, { mode: "ssa", sideA: 2, sideB: 8, angleA: 35 }).sideA).toBeDefined();
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { mode: "sss", sideA: 1, sideB: 2, sideC: 3 }).sideC).toBeDefined();
    expect(errors(e, { mode: "sss", sideA: 0, sideB: 2, sideC: 3 }).sideA).toBeDefined();
    expect(errors(e, { mode: "asa", angleA: 100, sideC: 2, angleB: 80 }).angleB).toBeDefined();
    expect(errors(e, { mode: "aas", angleA: 90, angleB: 95, sideA: 2 }).angleB).toBeDefined();
    expect(errors(e, { mode: "sas", sideA: 2, sideB: 3, angleC: 180 }).angleC).toBeDefined();
    expect(errors(e, { mode: "sas", sideA: 2, sideB: 3, angleC: 0 }).angleC).toBeDefined();
  });
});

describe("quartile calculator", () => {
  const e = quartileIqr.engine;
  // numpy-free reference implementations used for the values below:
  // inclusive: statistics.quantiles(data, n=4, method='inclusive')
  // halves:    x=sorted(data); h=len(x)//2; (statistics.median(x[:h]), statistics.median(x[len(x)-h:]))
  it("matches python references", () => {
    const a = [12, 15, 17, 18, 21, 22, 24, 26, 29, 31, 58];
    expect(fiveNumberSummary(a, "inclusive")).toEqual({ min: 12, q1: 17.5, median: 22, q3: 27.5, max: 58 });
    expect(fiveNumberSummary(a, "exclusive")).toEqual({ min: 12, q1: 17, median: 22, q3: 29, max: 58 });
    const b = [3.2, 4.1, 4.4, 5.0, 5.6, 6.3, 7.7, 9.9];
    const sb = fiveNumberSummary(b, "inclusive");
    expect(sb.q1).toBeCloseTo(4.325, 12); // python: [4.325, 5.3, 6.6499999999999995]
    expect(sb.q3).toBeCloseTo(6.65, 12);
    const se = fiveNumberSummary(b, "exclusive");
    expect(se.q1).toBeCloseTo(4.25, 12); // python: (4.25, 7.0)
    expect(se.q3).toBeCloseTo(7, 12);
    const c = [7, 7, 8, 9, 10, 11, 12, 13, 30, -4];
    const fc = fences(c, fiveNumberSummary(c, "inclusive"));
    // python: [7.25, 9.5, 11.75], fences 0.5 and 18.5, outliers [30, -4]
    expect(fc.iqr).toBeCloseTo(4.5, 12);
    expect(fc.lower).toBeCloseTo(0.5, 12);
    expect(fc.upper).toBeCloseTo(18.5, 12);
    expect(fc.outliers).toEqual([-4, 30]);
    const r = ok(e, { data: c.join(", "), method: "exclusive" });
    expect(text(r.primary.value)).toBe("5"); // python: 12 - 7
    expect(text(item(r, "Outliers"))).toBe("-4, 30");
  });

  it("handles edge cases", () => {
    const r = ok(e, { data: "5 5 5 5", method: "inclusive" });
    expect(text(r.primary.value)).toBe("0");
    expect(text(item(r, "Outliers"))).toBe("None");
    // 60 outliers: 50 listed plus a count
    const data = [...Array(200).fill(0).map((_, i) => 100 + (i % 3)), ...Array(60).fill(0).map((_, i) => 1000 + i)];
    const many = ok(e, { data: data.join(" "), method: "inclusive" });
    expect(num(item(many, "Number of outliers"))).toBe(60);
    expect(text(item(many, "Outliers"))).toMatch(/and 10 more$/);
  });

  it("reads decimal commas in French", () => {
    const fr = makeQuartileEngine(engineContext("fr", quartileText));
    const r = ok(fr, { data: "3,2; 4,1; 4,4; 5,0; 5,6; 6,3; 7,7; 9,9", method: "inclusive" });
    expect(text(r.primary.value)).toBe("2,325");
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { data: "1, 2, 3", method: "inclusive" }).data).toBeDefined();
    expect(errors(e, { data: "1, 2, x, 4", method: "inclusive" }).data).toBeDefined();
    expect(errors(e, { data: "", method: "inclusive" }).data).toBeDefined();
  });
});
