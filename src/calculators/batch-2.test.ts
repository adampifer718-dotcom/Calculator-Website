import { describe, expect, it } from "vitest";
import { evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import type { AnyEngine, RawValues } from "./framework/types";
import { bmiEngine } from "./bmi/engine";
import { compoundInterestEngine } from "./compound-interest/engine";
import { confidenceIntervalEngine } from "./confidence-interval/engine";
import { exponentEngine } from "./exponent/engine";
import { logEngine } from "./log/engine";
import { pValueEngine } from "./p-value/engine";
import { pythagoreanEngine } from "./pythagorean/engine";
import { salesTaxEngine } from "./sales-tax/engine";
import { scientificNotationEngine } from "./scientific-notation/engine";
import { sigFigEngine } from "./significant-figures/engine";
import { lineEquation, slopeEngine } from "./slope/engine";
import { squareFootageEngine } from "./square-footage/engine";
import { squareRootEngine } from "./square-root/engine";
import { letterGrade, testGradeEngine } from "./test-grade/engine";

function run(engine: AnyEngine, raw: RawValues) {
  return evaluate(engine, { ...rawFromValues(engine, {}), ...raw });
}

function primary(engine: AnyEngine, raw: RawValues, currency = "USD") {
  const result = run(engine, raw);
  if (!result.ok) throw new Error(JSON.stringify(result.errors));
  return formatResultValue(result.result.primary.value, currency);
}

function errors(engine: AnyEngine, raw: RawValues) {
  const result = run(engine, raw);
  return result.ok ? {} : result.errors;
}

describe("validation of undefined or impossible inputs", () => {
  it.each([
    [testGradeEngine, { total: "20", correct: "21" }, "correct"],
    [testGradeEngine, { total: "20", mode: "wrong", wrong: "25" }, "wrong"],
    [testGradeEngine, { total: "0" }, "total"],
    [logEngine, { baseType: "custom", base: "1" }, "base"],
    [logEngine, { value: "0" }, "value"],
    [exponentEngine, { base: "0", exponent: "-1" }, "exponent"],
    [exponentEngine, { base: "-8", exponent: "0.5" }, "exponent"],
    [squareRootEngine, { kind: "square", value: "-4" }, "value"],
    [slopeEngine, { x1: "2", x2: "2" }, "x2"],
    [pythagoreanEngine, { solve: "leg", c: "5", leg: "5" }, "leg"],
    [sigFigEngine, { number: "12a" }, "number"],
    [sigFigEngine, { number: "0.000" }, "number"],
    [sigFigEngine, { mode: "round", digits: "16" }, "digits"],
    [scientificNotationEngine, { number: "1e400" }, "number"],
    [bmiEngine, { units: "imperial", heightFt: "0", heightIn: "0" }, "heightIn"],
    [confidenceIntervalEngine, { level: "100" }, "level"],
    [confidenceIntervalEngine, { n: "2.5" }, "n"],
    [pValueEngine, { distribution: "t", df: "0" }, "df"],
    [squareFootageEngine, { length: "-3" }, "length"],
  ] as const)("rejects %#", (engine, raw, field) => {
    expect(errors(engine as AnyEngine, raw as RawValues)).toHaveProperty(field);
  });
});

describe("calculator results", () => {
  it("sales tax adds and removes tax", () => {
    expect(primary(salesTaxEngine, { mode: "add", amount: "19.99", rate: "7" })).toBe("$21.39");
    expect(primary(salesTaxEngine, { mode: "remove", amount: "107", rate: "7" })).toBe("$100.00");
  });

  it("square footage converts units and shapes", () => {
    expect(primary(squareFootageEngine, { unit: "in", length: "144", width: "120" })).toBe("120 sq ft");
    expect(primary(squareFootageEngine, { unit: "yd", length: "3", width: "4" })).toBe("108 sq ft");
    expect(primary(squareFootageEngine, { shape: "triangle", unit: "ft", base: "10", height: "8" })).toBe("40 sq ft");
    expect(primary(squareFootageEngine, { length: "10", width: "12", quantity: "3" })).toBe("360 sq ft");
  });

  it("test grade gives letter grades at the boundaries", () => {
    expect([89.99, 90, 80, 79.99, 60, 59.99].map(letterGrade)).toEqual(["B", "A", "B", "C", "D", "F"]);
    expect(primary(testGradeEngine, { total: "8", correct: "7" })).toBe("87.5%");
  });

  it("log handles natural and custom bases", () => {
    expect(primary(logEngine, { value: String(Math.E), baseType: "e" })).toBe("1");
    expect(primary(logEngine, { value: "0.001", baseType: "10" })).toBe("-3");
    expect(primary(logEngine, { value: "32", baseType: "custom", base: "4" })).toBe("2.5");
  });

  it("significant figures counts and rounds from text", () => {
    expect(primary(sigFigEngine, { number: "1,200." })).toBe("4");
    expect(primary(sigFigEngine, { mode: "round", number: "0.0045678", digits: "2" })).toBe("0.0046");
    expect(primary(sigFigEngine, { mode: "round", number: "2.5", digits: "4" })).toBe("2.500");
  });

  it("scientific notation handles e-notation input and huge values", () => {
    expect(primary(scientificNotationEngine, { number: "6.02e23" })).toBe("6.02 × 10²³");
    const result = run(scientificNotationEngine, { number: "1e300" });
    expect(result.ok && formatResultValue(result.result.secondary![2].value, "USD")).toBe("Too long to display");
  });

  it("exponent switches to scientific notation for large results", () => {
    expect(primary(exponentEngine, { base: "10", exponent: "20" })).toBe("1 × 10²⁰");
    expect(primary(exponentEngine, { base: "-2", exponent: "3" })).toBe("-8");
    expect(primary(exponentEngine, { base: "10", exponent: "400" })).toBe("Too large to display");
  });

  it("slope builds a readable equation", () => {
    expect(lineEquation(2, 1)).toBe("y = 2x + 1");
    expect(lineEquation(-0.5, -3)).toBe("y = −0.5x − 3");
    expect(lineEquation(0, 4)).toBe("y = 4");
    expect(lineEquation(1, 0)).toBe("y = x");
  });

  it("p-value uses Student's t", () => {
    expect(primary(pValueEngine, { distribution: "t", statistic: "2.228138852", df: "10", tail: "two" })).toBe("0.05");
    expect(primary(pValueEngine, { distribution: "z", statistic: "3", tail: "right" })).toBe("0.0013499");
  });

  it("BMI works in both unit systems", () => {
    expect(primary(bmiEngine, { units: "metric", weightKg: "70", heightCm: "175" })).toBe("22.9");
    expect(primary(bmiEngine, { units: "imperial", weightLb: "180", heightFt: "5", heightIn: "10" })).toBe("25.8");
  });

  it("compound interest shows a yearly table", () => {
    const result = run(compoundInterestEngine, { principal: "1000", rate: "10", years: "3", frequency: "1" });
    expect(result.ok && result.result.tables![0].rows.map((r) => formatResultValue(r.cells[0], "USD"))).toEqual(["$1,100.00", "$1,210.00", "$1,331.00"]);
    const long = run(compoundInterestEngine, { years: "75" });
    expect(long.ok && long.result.tables).toBeUndefined();
  });
});
