import { describe, expect, it } from "vitest";
import { mean, median, modes, parseNumberList, sum, variance } from "./data";
import { formatKitchenQuantity, parseRecipeLine } from "./fractions";
import { balanceAfter, loanPayment } from "./loan";
import { formatClock, formatHoursText } from "./time";
import { LENGTH, MASS, convertTemperature, convertUnits, findUnit } from "./units";

describe("unit conversion", () => {
  const len = (v: number, a: string, b: string) => convertUnits(v, findUnit(LENGTH, a), findUnit(LENGTH, b));
  const mass = (v: number, a: string, b: string) => convertUnits(v, findUnit(MASS, a), findUnit(MASS, b));
  it("uses exact length factors", () => {
    expect(len(1, "in", "cm")).toBeCloseTo(2.54, 12);
    expect(len(1, "mi", "ft")).toBeCloseTo(5280, 9);
    expect(len(1, "yd", "in")).toBeCloseTo(36, 12);
    expect(len(10, "km", "mi")).toBeCloseTo(6.213711922, 9);
    expect(len(1, "nmi", "m")).toBe(1852);
    expect(len(5, "m", "m")).toBe(5);
  });
  it("uses exact mass factors", () => {
    expect(mass(1, "lb", "kg")).toBe(0.45359237);
    expect(mass(1, "lb", "oz")).toBeCloseTo(16, 12);
    expect(mass(1, "st", "lb")).toBeCloseTo(14, 12);
    expect(mass(1, "kg", "lb")).toBeCloseTo(2.204622622, 9);
    expect(mass(2500, "mg", "g")).toBeCloseTo(2.5, 12);
  });
  it("converts temperatures", () => {
    expect(convertTemperature(100, "C", "F")).toBe(212);
    expect(convertTemperature(-40, "F", "C")).toBe(-40);
    expect(convertTemperature(98.6, "F", "C")).toBeCloseTo(37, 12);
    expect(convertTemperature(0, "K", "C")).toBe(-273.15);
    expect(convertTemperature(32, "F", "K")).toBeCloseTo(273.15, 10);
  });
});

describe("data lists", () => {
  it("parses separators and rejects junk", () => {
    expect(parseNumberList("1, 2;3\n4  -5.5 6e2")).toEqual({ ok: true, values: [1, 2, 3, 4, -5.5, 600] });
    expect(parseNumberList("1, two, 3")).toMatchObject({ ok: false, error: expect.stringContaining("two") });
    expect(parseNumberList("  ")).toMatchObject({ ok: false });
  });
  it("computes descriptive statistics", () => {
    const data = [2, 4, 4, 4, 5, 5, 7, 9];
    expect(mean(data)).toBe(5);
    expect(median(data)).toBe(4.5);
    expect(median([3, 1, 2])).toBe(2);
    expect(modes(data)).toEqual([4]);
    expect(modes([1, 1, 2, 2, 3])).toEqual([1, 2]);
    expect(modes([1, 2, 3])).toEqual([]);
    expect(variance(data, false)).toBe(4);
    expect(Math.sqrt(variance(data, true))).toBeCloseTo(2.138089935, 9);
  });
  it("sums accurately", () => {
    expect(sum([0.1, 0.2, 0.3])).toBe(0.6);
    expect(sum([1e16, 1, -1e16])).toBe(1);
  });
});

describe("loans", () => {
  it("matches standard amortization values", () => {
    expect(loanPayment(200000, 6, 360)).toBeCloseTo(1199.101050, 5);
    expect(loanPayment(10000, 0, 60)).toBeCloseTo(166.6666667, 6);
    expect(loanPayment(25000, 7.5, 60)).toBeCloseTo(500.9487149, 6);
  });
  it("pays the balance to zero", () => {
    const payment = loanPayment(200000, 6, 360);
    expect(balanceAfter(200000, 6, payment, 360)).toBeCloseTo(0, 5);
    expect(balanceAfter(200000, 6, payment, 0)).toBe(200000);
    expect(balanceAfter(12000, 0, 1000, 6)).toBe(6000);
  });
});

describe("time and fractions", () => {
  it("formats durations", () => {
    expect(formatClock(300)).toBe("5:00");
    expect(formatClock(482.8)).toBe("8:03");
    expect(formatClock(3 * 3600 + 30 * 60)).toBe("3:30:00");
    expect(formatClock(59.6)).toBe("1:00");
    expect(formatHoursText(2.5)).toBe("2 h 30 min");
    expect(formatHoursText(0.25)).toBe("15 min");
    expect(formatHoursText(3)).toBe("3 h");
  });
  it("formats kitchen quantities", () => {
    expect(formatKitchenQuantity(3)).toBe("3");
    expect(formatKitchenQuantity(1.5)).toBe("1 1/2");
    expect(formatKitchenQuantity(1 / 3)).toBe("1/3");
    expect(formatKitchenQuantity(2.75)).toBe("2 3/4");
    expect(formatKitchenQuantity(0.375)).toBe("3/8");
    expect(formatKitchenQuantity(1.17)).toBe("1.17");
  });
  it("parses recipe lines", () => {
    expect(parseRecipeLine("2 cups flour")).toEqual({ quantity: 2, rest: "cups flour" });
    expect(parseRecipeLine("1 1/2 tsp salt")).toEqual({ quantity: 1.5, rest: "tsp salt" });
    expect(parseRecipeLine("1/2 cup milk")).toEqual({ quantity: 0.5, rest: "cup milk" });
    expect(parseRecipeLine("1½ cups sugar")).toEqual({ quantity: 1.5, rest: "cups sugar" });
    expect(parseRecipeLine("½ lemon")).toEqual({ quantity: 0.5, rest: "lemon" });
    expect(parseRecipeLine("250g butter")).toEqual({ quantity: 250, rest: "g butter" });
    expect(parseRecipeLine("Salt to taste")).toEqual({ quantity: null, rest: "Salt to taste" });
    expect(parseRecipeLine("1/0 cup")).toEqual({ quantity: null, rest: "1/0 cup" });
  });
});
