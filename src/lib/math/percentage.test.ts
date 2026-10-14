import { describe, expect, it } from "vitest";
import { percentChange, percentOf, percentageOfWhole, wholeFromPercent } from "./percentage";

describe("percentage helpers", () => {
  it("computes P% of V", () => {
    expect(percentOf(20, 150)).toBe(30);
    expect(percentOf(15, 80)).toBe(12);
    expect(percentOf(0, 80)).toBe(0);
    expect(percentOf(150, 200)).toBe(300);
    expect(percentOf(-10, 50)).toBe(-5);
    expect(percentOf(12.5, 64)).toBe(8);
  });

  it("computes what percent a part is of a whole", () => {
    expect(percentageOfWhole(45, 180)).toBe(25);
    expect(percentageOfWhole(1, 3)).toBeCloseTo(33.333333333, 8);
    expect(percentageOfWhole(300, 200)).toBe(150);
    expect(percentageOfWhole(5, 0)).toBeNull();
  });

  it("finds the whole from a part and percentage", () => {
    expect(wholeFromPercent(30, 12)).toBeCloseTo(250, 10);
    expect(wholeFromPercent(30, 20)).toBe(150);
    expect(wholeFromPercent(30, 0)).toBeNull();
  });

  it("computes percentage change", () => {
    expect(percentChange(80, 100)).toBe(25);
    expect(percentChange(250, 200)).toBe(-20);
    expect(percentChange(100, 100)).toBe(0);
    expect(percentChange(50, 0)).toBe(-100);
    expect(percentChange(-50, -25)).toBe(50);
    expect(percentChange(-50, -100)).toBe(-100);
    expect(percentChange(0, 10)).toBeNull();
  });
});
