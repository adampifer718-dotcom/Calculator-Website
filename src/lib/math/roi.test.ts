import { describe, expect, it } from "vitest";
import { annualizedRoiPercent, netReturn, roiPercent } from "./roi";

describe("ROI", () => {
  it("computes simple ROI and net return", () => {
    expect(roiPercent(10000, 12500)).toBe(25);
    expect(netReturn(10000, 12500)).toBe(2500);
    expect(roiPercent(5000, 4200)).toBe(-16);
    expect(roiPercent(1000, 0)).toBe(-100);
    expect(roiPercent(1000, 1000)).toBe(0);
  });

  it("returns null when the amount invested is not positive", () => {
    expect(roiPercent(0, 100)).toBeNull();
    expect(roiPercent(-1, 100)).toBeNull();
  });

  it("computes annualized ROI", () => {
    expect(annualizedRoiPercent(10000, 12500, 3)).toBeCloseTo(7.7217345, 6);
    expect(annualizedRoiPercent(1000, 2000, 1)).toBeCloseTo(100, 10);
    expect(annualizedRoiPercent(1000, 1210, 2)).toBeCloseTo(10, 10);
    expect(annualizedRoiPercent(1000, 1100, 0.5)).toBeCloseTo(21, 10);
    expect(annualizedRoiPercent(1000, 0, 2)).toBe(-100);
  });

  it("returns null for undefined annualized rates", () => {
    expect(annualizedRoiPercent(1000, 1100, 0)).toBeNull();
    expect(annualizedRoiPercent(0, 1100, 2)).toBeNull();
    expect(annualizedRoiPercent(1000, -1, 2)).toBeNull();
  });
});
