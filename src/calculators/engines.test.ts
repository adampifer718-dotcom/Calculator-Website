import { describe, expect, it } from "vitest";
import { evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import type { AnyEngine, EngineValues, ResultValue } from "./framework/types";
import { hourlyToSalaryEngine } from "./hourly-to-salary/engine";
import { percentageIncreaseEngine } from "./percentage-increase/engine";
import { percentageEngine } from "./percentage/engine";
import { roiEngine } from "./roi/engine";
import { salaryToHourlyEngine } from "./salary-to-hourly/engine";

function run(engine: AnyEngine, values: EngineValues) {
  const evaluation = evaluate(engine, rawFromValues(engine, values));
  if (!evaluation.ok) throw new Error(`Unexpected errors: ${JSON.stringify(evaluation.errors)}`);
  return evaluation.result;
}

function errorsFor(engine: AnyEngine, raw: Record<string, string>) {
  const evaluation = evaluate(engine, { ...rawFromValues(engine, {}), ...raw });
  return evaluation.ok ? {} : evaluation.errors;
}

const numeric = (value: ResultValue) => {
  if (value.kind === "currency") return value.amount;
  if (value.kind === "text") throw new Error("text value");
  return value.value;
};

const tableAmounts = (result: ReturnType<typeof run>) =>
  Object.fromEntries(result.tables![0].rows.map((row) => [row.label, numeric(row.cells[1])]));

const fullTime = { hoursPerWeek: 40, daysPerWeek: 5, weeksPerYear: 52, currency: "USD" };

describe("salary to hourly", () => {
  it.each([
    ["annual", 52000, 25],
    ["annual", 60000, 60000 / 2080],
    ["monthly", 5000, 60000 / 2080],
    ["semimonthly", 2500, 60000 / 2080],
    ["biweekly", 2000, 25],
    ["weekly", 1000, 25],
    ["daily", 200, 25],
    ["hourly", 25, 25],
  ])("%s %d → hourly %d", (period, amount, hourly) => {
    const result = run(salaryToHourlyEngine, { ...fullTime, amount, period });
    expect(numeric(result.primary.value)).toBeCloseTo(hourly, 9);
  });

  it("shows $28.85 for a $60,000 salary at 40 hours × 52 weeks", () => {
    const result = run(salaryToHourlyEngine, { ...fullTime, amount: 60000, period: "annual" });
    expect(formatResultValue(result.primary.value, "USD")).toBe("$28.85");
  });

  it("produces the full pay-period breakdown", () => {
    const result = run(salaryToHourlyEngine, { ...fullTime, amount: 60000, period: "annual" });
    const amounts = tableAmounts(result);
    expect(amounts.Annual).toBe(60000);
    expect(amounts.Monthly).toBe(5000);
    expect(amounts["Semi-monthly"]).toBe(2500);
    expect(amounts.Biweekly).toBeCloseTo(2307.6923077, 6);
    expect(amounts.Weekly).toBeCloseTo(1153.8461538, 6);
    expect(amounts.Daily).toBeCloseTo(230.7692308, 6);
    expect(amounts.Hourly).toBeCloseTo(28.8461538, 6);
    expect(result.tables![0].rows.filter((r) => r.highlight).map((r) => r.label)).toEqual(["Annual", "Hourly"]);
  });

  it("uses hours, workdays and weeks per year", () => {
    const result = run(salaryToHourlyEngine, { amount: 250, period: "daily", hoursPerWeek: 32, daysPerWeek: 4, weeksPerYear: 48, currency: "USD" });
    expect(numeric(result.primary.value)).toBeCloseTo(31.25, 10);
    expect(tableAmounts(result).Annual).toBeCloseTo(48000, 9);
    expect(result.notes?.[0]).toContain("1,536 paid hours");
  });

  it("formats with the selected currency without converting", () => {
    const usd = run(salaryToHourlyEngine, { ...fullTime, amount: 60000, period: "annual" });
    const eur = run(salaryToHourlyEngine, { ...fullTime, currency: "EUR", amount: 60000, period: "annual" });
    expect(numeric(eur.primary.value)).toBe(numeric(usd.primary.value));
    expect(formatResultValue(eur.primary.value, "EUR")).toBe("€28.85");
  });

  it("accepts zero pay", () => {
    expect(numeric(run(salaryToHourlyEngine, { ...fullTime, amount: 0, period: "annual" }).primary.value)).toBe(0);
  });

  it("validates inputs", () => {
    expect(errorsFor(salaryToHourlyEngine, { amount: "-1" })).toHaveProperty("amount");
    expect(errorsFor(salaryToHourlyEngine, { amount: "" })).toHaveProperty("amount");
    expect(errorsFor(salaryToHourlyEngine, { amount: "abc" })).toHaveProperty("amount");
    expect(errorsFor(salaryToHourlyEngine, { hoursPerWeek: "0" })).toHaveProperty("hoursPerWeek");
    expect(errorsFor(salaryToHourlyEngine, { hoursPerWeek: "200" })).toHaveProperty("hoursPerWeek");
    expect(errorsFor(salaryToHourlyEngine, { daysPerWeek: "8" })).toHaveProperty("daysPerWeek");
    expect(errorsFor(salaryToHourlyEngine, { weeksPerYear: "0" })).toHaveProperty("weeksPerYear");
    expect(errorsFor(salaryToHourlyEngine, { weeksPerYear: "60" })).toHaveProperty("weeksPerYear");
    expect(errorsFor(salaryToHourlyEngine, { hoursPerWeek: "100", daysPerWeek: "4" })).toHaveProperty("hoursPerWeek");
    expect(errorsFor(salaryToHourlyEngine, { period: "fortnightly" })).toHaveProperty("period");
    expect(errorsFor(salaryToHourlyEngine, { amount: "52,000" })).toEqual({});
  });
});

describe("hourly to salary", () => {
  it.each([
    [25, 40, 52, 52000],
    [20, 40, 52, 41600],
    [18.5, 30, 50, 27750],
    [40, 37.5, 48, 72000],
  ])("$%d/h × %d h × %d weeks → %d", (hourlyRate, hoursPerWeek, weeksPerYear, annual) => {
    const result = run(hourlyToSalaryEngine, { ...fullTime, hourlyRate, hoursPerWeek, weeksPerYear });
    expect(numeric(result.primary.value)).toBeCloseTo(annual, 9);
  });

  it("produces consistent period amounts", () => {
    const amounts = tableAmounts(run(hourlyToSalaryEngine, { ...fullTime, hourlyRate: 25 }));
    expect(amounts.Monthly).toBeCloseTo(52000 / 12, 9);
    expect(amounts["Semi-monthly"]).toBeCloseTo(52000 / 24, 9);
    expect(amounts.Biweekly).toBeCloseTo(2000, 9);
    expect(amounts.Weekly).toBeCloseTo(1000, 9);
    expect(amounts.Daily).toBeCloseTo(200, 9);
    expect(amounts.Hourly).toBe(25);
  });

  it("is the inverse of salary to hourly", () => {
    const schedule = { hoursPerWeek: 36, daysPerWeek: 4.5, weeksPerYear: 49, currency: "USD" };
    const annual = numeric(run(hourlyToSalaryEngine, { ...schedule, hourlyRate: 31.4 }).primary.value);
    const hourly = numeric(run(salaryToHourlyEngine, { ...schedule, amount: annual, period: "annual" }).primary.value);
    expect(hourly).toBeCloseTo(31.4, 9);
  });

  it("validates inputs", () => {
    expect(errorsFor(hourlyToSalaryEngine, { hourlyRate: "-5" })).toHaveProperty("hourlyRate");
    expect(errorsFor(hourlyToSalaryEngine, { daysPerWeek: "0" })).toHaveProperty("daysPerWeek");
  });
});

describe("percentage", () => {
  it("answers each question", () => {
    expect(numeric(run(percentageEngine, { mode: "percentOf", percent: 20, ofValue: 150 }).primary.value)).toBe(30);
    expect(numeric(run(percentageEngine, { mode: "whatPercent", part: 45, whole: 180 }).primary.value)).toBe(25);
    expect(numeric(run(percentageEngine, { mode: "findWhole", partKnown: 30, percentKnown: 12 }).primary.value)).toBeCloseTo(250, 10);
  });

  it("rejects division by zero", () => {
    expect(errorsFor(percentageEngine, { mode: "whatPercent", whole: "0" })).toHaveProperty("whole");
    expect(errorsFor(percentageEngine, { mode: "findWhole", percentKnown: "0" })).toHaveProperty("percentKnown");
  });

  it("only validates fields for the selected question", () => {
    expect(errorsFor(percentageEngine, { mode: "percentOf", whole: "0", part: "" })).toEqual({});
  });
});

describe("percentage increase", () => {
  it.each([
    [80, 100, 25],
    [250, 200, -20],
    [100, 100, 0],
    [-50, -25, 50],
    [50, 0, -100],
  ])("%d → %d is %d%%", (original, newValue, expected) => {
    const result = run(percentageIncreaseEngine, { original, newValue });
    expect(numeric(result.primary.value)).toBeCloseTo(expected, 10);
  });

  it("formats signed changes", () => {
    const result = run(percentageIncreaseEngine, { original: 80, newValue: 100 });
    expect(formatResultValue(result.primary.value, "USD")).toBe("+25%");
    expect(formatResultValue(result.secondary![0].value, "USD")).toBe("+20");
  });

  it("rejects a zero original value", () => {
    expect(errorsFor(percentageIncreaseEngine, { original: "0" })).toHaveProperty("original");
  });
});

describe("ROI", () => {
  it("computes ROI, net gain and annualized ROI", () => {
    const result = run(roiEngine, { invested: 10000, finalValue: 12500, years: 3, currency: "USD" });
    expect(numeric(result.primary.value)).toBe(25);
    expect(numeric(result.secondary![0].value)).toBe(2500);
    expect(numeric(result.secondary![1].value)).toBeCloseTo(7.7217345, 6);
  });

  it("works without an investment length", () => {
    const result = run(roiEngine, { invested: 5000, finalValue: 4200, years: null, currency: "USD" });
    expect(numeric(result.primary.value)).toBe(-16);
    expect(result.secondary![1].value).toEqual({ kind: "text", text: "Add investment length" });
  });

  it("validates inputs", () => {
    expect(errorsFor(roiEngine, { invested: "0" })).toHaveProperty("invested");
    expect(errorsFor(roiEngine, { finalValue: "-1" })).toHaveProperty("finalValue");
    expect(errorsFor(roiEngine, { years: "0" })).toHaveProperty("years");
  });
});
