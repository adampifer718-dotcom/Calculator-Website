import { describe, expect, it } from "vitest";
import { FORM_ERROR_KEY, defaultRawValues, evaluate, parseNumberInput } from "./evaluate";
import { defineEngine } from "./types";

describe("parseNumberInput", () => {
  it.each([
    ["52000", 52000],
    ["52,000", 52000],
    [" 1,250.50 ", 1250.5],
    ["$60,000", 60000],
    ["€12.5", 12.5],
    [".5", 0.5],
    ["5.", 5],
    ["-3", -3],
    ["+3", 3],
    ["1 000", 1000],
  ])("parses %j", (raw, expected) => {
    expect(parseNumberInput(raw)).toBe(expected);
  });

  it("returns null for empty input", () => {
    expect(parseNumberInput("")).toBeNull();
    expect(parseNumberInput("   ")).toBeNull();
  });

  it.each(["abc", "1e5", "12abc", "1.2.3", "--1", "Infinity", "NaN", "-", "."])("rejects %j", (raw) => {
    expect(parseNumberInput(raw)).toBeNaN();
  });
});

const engine = defineEngine<{ a: number; b: number | null; mode: string }>({
  fields: [
    { id: "mode", type: "select", label: "Mode", options: [{ value: "x", label: "X" }, { value: "y", label: "Y" }], defaultValue: "x" },
    { id: "a", type: "number", label: "Amount", defaultValue: 10, min: 0, max: 100 },
    { id: "b", type: "number", label: "Divisor", defaultValue: null, optional: true, min: 0, minExclusive: true, visibleWhen: { field: "mode", oneOf: ["y"] } },
  ],
  validate: ({ a }) => (a === 13 ? { a: "Unlucky." } : {}),
  compute: ({ a, b }) => ({ primary: { label: "Out", value: { kind: "number", value: b === null ? a : a / b } } }),
});

describe("evaluate", () => {
  it("computes with default values", () => {
    const result = evaluate(engine, defaultRawValues(engine));
    expect(result.ok && result.result.primary.value).toEqual({ kind: "number", value: 10 });
  });

  it("reports required, invalid and out-of-range fields", () => {
    expect(evaluate(engine, { mode: "x", a: "" })).toEqual({ ok: false, errors: { a: "Enter amount." } });
    expect(evaluate(engine, { mode: "x", a: "abc" })).toMatchObject({ ok: false, errors: { a: expect.stringContaining("valid number") } });
    expect(evaluate(engine, { mode: "x", a: "-1" })).toMatchObject({ ok: false, errors: { a: "Must be at least 0." } });
    expect(evaluate(engine, { mode: "x", a: "101" })).toMatchObject({ ok: false, errors: { a: "Must be no more than 100." } });
    expect(evaluate(engine, { mode: "x", a: "1e13" })).toMatchObject({ ok: false });
  });

  it("rejects unknown select values", () => {
    expect(evaluate(engine, { mode: "z", a: "1" })).toMatchObject({ ok: false, errors: { mode: expect.any(String) } });
  });

  it("ignores hidden fields and allows empty optional fields", () => {
    expect(evaluate(engine, { mode: "x", a: "5", b: "garbage" })).toMatchObject({ ok: true });
    expect(evaluate(engine, { mode: "y", a: "5", b: "" })).toMatchObject({ ok: true });
    expect(evaluate(engine, { mode: "y", a: "5", b: "0" })).toMatchObject({ ok: false, errors: { b: "Must be greater than 0." } });
    const ok = evaluate(engine, { mode: "y", a: "5", b: "2" });
    expect(ok.ok && ok.result.primary.value).toEqual({ kind: "number", value: 2.5 });
  });

  it("runs cross-field validation after field validation", () => {
    expect(evaluate(engine, { mode: "x", a: "13" })).toEqual({ ok: false, errors: { a: "Unlucky." } });
  });

  it("rejects non-finite results", () => {
    const divide = defineEngine<{ a: number }>({
      fields: [{ id: "a", type: "number", label: "A", defaultValue: 0 }],
      compute: ({ a }) => ({ primary: { label: "Inverse", value: { kind: "number", value: 1 / a } } }),
    });
    expect(evaluate(divide, { a: "0" })).toMatchObject({ ok: false, errors: { [FORM_ERROR_KEY]: expect.any(String) } });
  });
});
