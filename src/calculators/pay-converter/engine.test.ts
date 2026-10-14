import { describe, expect, it } from "vitest";
import { evaluate, rawFromValues } from "@/calculators/framework/evaluate";
import { formatResultValue } from "@/calculators/framework/format-result";
import type { EngineValues } from "@/calculators/framework/types";
import { formatHoursMinutes, higherHourlyRates, hoursToEarn } from "@/lib/math/pay";
import { payConverterEngine } from "./engine";

const fullTime = { hoursPerWeek: 40, daysPerWeek: 5, weeksPerYear: 52, currency: "USD" };

function run(values: EngineValues) {
  const evaluation = evaluate(payConverterEngine, rawFromValues(payConverterEngine, values));
  if (!evaluation.ok) throw new Error(JSON.stringify(evaluation.errors));
  return evaluation.result;
}

const text = (values: EngineValues) => {
  const result = run(values);
  const currency = String(values.currency ?? "USD");
  return {
    primary: formatResultValue(result.primary.value, currency),
    secondary: Object.fromEntries(result.secondary!.map((item) => [item.label, formatResultValue(item.value, currency)])),
    breakdown: Object.fromEntries(result.tables![0].rows.map((row) => [row.label, formatResultValue(row.cells[1], currency)])),
    higher: result.tables![1].rows.map((row) => [row.label, ...row.cells.map((cell) => formatResultValue(cell, currency))]),
  };
};

describe("pay converter", () => {
  it("defaults to $20 an hour → $41,600 a year", () => {
    const out = text({});
    expect(out.primary).toBe("$41,600.00");
    expect(out.secondary["Hourly rate"]).toBe("$20.00");
    expect(out.secondary["Monthly pay"]).toBe("$3,466.67");
    expect(out.secondary["Earned per minute"]).toBe("$0.33");
    expect(out.secondary["Time to earn $100"]).toBe("5h 0m");
  });

  it("uses fixed period counts for biweekly and semi-monthly pay", () => {
    const out = text({ ...fullTime, amount: 2000, period: "biweekly", weeksPerYear: 50 });
    expect(out.primary).toBe("$52,000.00");
    expect(out.breakdown["Semi-monthly"]).toBe("$2,166.67");
    // Hourly uses the entered schedule: 52,000 ÷ (40 × 50).
    expect(out.breakdown.Hourly).toBe("$26.00");
  });

  it("uses workdays per week for daily pay", () => {
    const out = text({ ...fullTime, amount: 240, period: "daily", daysPerWeek: 4, hoursPerWeek: 32 });
    expect(out.primary).toBe("$49,920.00");
    expect(out.breakdown.Hourly).toBe("$30.00");
  });

  it("lists the next five whole hourly rates with their earnings", () => {
    const out = text({ ...fullTime, amount: 20.5, period: "hourly" });
    expect(out.higher.map((row) => row[0])).toEqual(["$21", "$22", "$23", "$24", "$25"]);
    expect(out.higher[0]).toEqual(["$21", "$840.00", "$3,640.00", "$43,680.00"]);
  });

  it("handles zero pay without dividing by zero", () => {
    const out = text({ ...fullTime, amount: 0, period: "annual" });
    expect(out.primary).toBe("$0.00");
    expect(out.secondary["Time to earn $100"]).toBe("Not reachable at zero pay");
  });

  it("formats in the selected currency without converting", () => {
    const out = text({ ...fullTime, currency: "PKR", amount: 100000, period: "monthly" });
    expect(out.primary).toMatch(/^PKR\s1,200,000\.00$/);
    expect(Object.keys(out.secondary)).toContain("Time to earn PKR 100");
  });
});

describe("pay helpers", () => {
  it("computes time to earn and formats minutes without rolling over to 60", () => {
    expect(hoursToEarn(100, 20)).toBe(5);
    expect(hoursToEarn(100, 0)).toBeNull();
    expect(formatHoursMinutes(5)).toBe("5h 0m");
    expect(formatHoursMinutes(1.25)).toBe("1h 15m");
    expect(formatHoursMinutes(0.9999)).toBe("1h 0m");
    expect(formatHoursMinutes(1234.5)).toBe("1,234h 30m");
  });

  it("returns whole rates strictly above the current rate", () => {
    expect(higherHourlyRates(20)).toEqual([21, 22, 23, 24, 25]);
    expect(higherHourlyRates(20.01, 2)).toEqual([21, 22]);
    expect(higherHourlyRates(0, 1)).toEqual([1]);
  });
});
