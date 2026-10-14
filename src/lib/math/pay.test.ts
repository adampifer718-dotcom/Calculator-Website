import { describe, expect, it } from "vitest";
import {
  DEFAULT_SCHEDULE,
  PAY_PERIODS,
  annualHours,
  annualize,
  convertPay,
  fromAnnual,
  hourlyEquivalent,
  periodsPerYear,
  validateSchedule,
  type WorkSchedule,
} from "./pay";

const fullTime = DEFAULT_SCHEDULE; // 40 h/week, 5 days/week, 52 weeks

describe("periodsPerYear", () => {
  it("uses fixed calendar counts for annual, monthly, semi-monthly and biweekly", () => {
    const odd: WorkSchedule = { hoursPerWeek: 20, daysPerWeek: 3, weeksPerYear: 40 };
    expect(periodsPerYear("annual", odd)).toBe(1);
    expect(periodsPerYear("monthly", odd)).toBe(12);
    expect(periodsPerYear("semimonthly", odd)).toBe(24);
    expect(periodsPerYear("biweekly", odd)).toBe(26);
  });

  it("uses the schedule for weekly, daily and hourly", () => {
    const schedule: WorkSchedule = { hoursPerWeek: 37.5, daysPerWeek: 4, weeksPerYear: 48 };
    expect(periodsPerYear("weekly", schedule)).toBe(48);
    expect(periodsPerYear("daily", schedule)).toBe(192);
    expect(periodsPerYear("hourly", schedule)).toBe(1800);
  });
});

describe("annualize", () => {
  it.each([
    ["annual", 52000, 52000],
    ["monthly", 5000, 60000],
    ["semimonthly", 2500, 60000],
    ["biweekly", 2000, 52000],
    ["weekly", 1000, 52000],
    ["daily", 200, 52000],
    ["hourly", 25, 52000],
  ] as const)("%s %d → %d per year on a full-time schedule", (period, amount, expected) => {
    expect(annualize(amount, period, fullTime)).toBeCloseTo(expected, 10);
  });

  it("respects weeks per year for weekly, daily and hourly pay", () => {
    const schedule: WorkSchedule = { hoursPerWeek: 40, daysPerWeek: 5, weeksPerYear: 50 };
    expect(annualize(1000, "weekly", schedule)).toBe(50000);
    expect(annualize(200, "daily", schedule)).toBe(50000);
    expect(annualize(25, "hourly", schedule)).toBe(50000);
    // Calendar-based periods are unaffected by weeks per year.
    expect(annualize(2000, "biweekly", schedule)).toBe(52000);
  });
});

describe("hourlyEquivalent", () => {
  it("divides annualized pay by annual hours", () => {
    expect(annualHours(fullTime)).toBe(2080);
    expect(hourlyEquivalent(52000, "annual", fullTime)).toBe(25);
    expect(hourlyEquivalent(60000, "annual", fullTime)).toBeCloseTo(28.846153846, 8);
    expect(hourlyEquivalent(5000, "monthly", fullTime)).toBeCloseTo(28.846153846, 8);
    expect(hourlyEquivalent(2500, "semimonthly", fullTime)).toBeCloseTo(28.846153846, 8);
    expect(hourlyEquivalent(2000, "biweekly", fullTime)).toBeCloseTo(25, 10);
    expect(hourlyEquivalent(1000, "weekly", fullTime)).toBeCloseTo(25, 10);
    expect(hourlyEquivalent(200, "daily", fullTime)).toBeCloseTo(25, 10);
    expect(hourlyEquivalent(25, "hourly", fullTime)).toBeCloseTo(25, 10);
  });

  it("handles part-time and non-standard schedules", () => {
    expect(hourlyEquivalent(60000, "annual", { hoursPerWeek: 37.5, daysPerWeek: 5, weeksPerYear: 52 })).toBeCloseTo(30.769230769, 8);
    expect(hourlyEquivalent(250, "daily", { hoursPerWeek: 32, daysPerWeek: 4, weeksPerYear: 48 })).toBeCloseTo(31.25, 10);
    expect(hourlyEquivalent(30000, "annual", { hoursPerWeek: 20, daysPerWeek: 5, weeksPerYear: 52 })).toBeCloseTo(28.846153846, 8);
  });

  it("does not round intermediate values", () => {
    // $1 per month → $12 per year → 12 / 2080 per hour, not rounded to $0.01.
    expect(hourlyEquivalent(1, "monthly", fullTime)).toBe(12 / 2080);
  });
});

describe("convertPay", () => {
  it("produces a consistent breakdown for every period", () => {
    const breakdown = convertPay(60000, "annual", fullTime);
    expect(breakdown.annual).toBe(60000);
    expect(breakdown.monthly).toBe(5000);
    expect(breakdown.semimonthly).toBe(2500);
    expect(breakdown.biweekly).toBeCloseTo(2307.692307692, 8);
    expect(breakdown.weekly).toBeCloseTo(1153.846153846, 8);
    expect(breakdown.daily).toBeCloseTo(230.769230769, 8);
    expect(breakdown.hourly).toBeCloseTo(28.846153846, 8);
  });

  it("keeps the input amount exact for its own period", () => {
    const breakdown = convertPay(0.1 + 0.2, "hourly", fullTime);
    expect(breakdown.hourly).toBe(0.1 + 0.2);
  });

  it("round-trips through every period", () => {
    const schedule: WorkSchedule = { hoursPerWeek: 37.5, daysPerWeek: 4.5, weeksPerYear: 52.14 };
    for (const from of PAY_PERIODS) {
      const breakdown = convertPay(1234.56, from, schedule);
      const annual = annualize(1234.56, from, schedule);
      for (const to of PAY_PERIODS) {
        expect(annualize(breakdown[to], to, schedule)).toBeCloseTo(annual, 6);
        expect(breakdown[to]).toBeCloseTo(fromAnnual(annual, to, schedule), 9);
      }
    }
  });

  it("returns zero for zero pay", () => {
    expect(Object.values(convertPay(0, "annual", fullTime)).every((v) => v === 0)).toBe(true);
  });
});

describe("validateSchedule", () => {
  it("accepts the default schedule", () => {
    expect(validateSchedule(fullTime)).toEqual({});
  });

  it("rejects zero, negative and out-of-range values", () => {
    expect(validateSchedule({ hoursPerWeek: 0, daysPerWeek: 5, weeksPerYear: 52 })).toHaveProperty("hoursPerWeek");
    expect(validateSchedule({ hoursPerWeek: 169, daysPerWeek: 5, weeksPerYear: 52 })).toHaveProperty("hoursPerWeek");
    expect(validateSchedule({ hoursPerWeek: 40, daysPerWeek: 0, weeksPerYear: 52 })).toHaveProperty("daysPerWeek");
    expect(validateSchedule({ hoursPerWeek: 40, daysPerWeek: 8, weeksPerYear: 52 })).toHaveProperty("daysPerWeek");
    expect(validateSchedule({ hoursPerWeek: 40, daysPerWeek: 5, weeksPerYear: -1 })).toHaveProperty("weeksPerYear");
    expect(validateSchedule({ hoursPerWeek: 40, daysPerWeek: 5, weeksPerYear: 54 })).toHaveProperty("weeksPerYear");
    expect(validateSchedule({ hoursPerWeek: Number.NaN, daysPerWeek: 5, weeksPerYear: 52 })).toHaveProperty("hoursPerWeek");
  });

  it("rejects more than 24 hours per workday", () => {
    expect(validateSchedule({ hoursPerWeek: 50, daysPerWeek: 2, weeksPerYear: 52 })).toHaveProperty("hoursPerWeek");
    expect(validateSchedule({ hoursPerWeek: 48, daysPerWeek: 2, weeksPerYear: 52 })).toEqual({});
  });
});
