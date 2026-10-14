import { describe, expect, it } from "vitest";
import { normalCdf, normalInv, pValue, tCdf } from "./stats";

describe("normal distribution", () => {
  it.each([
    [0, 0.5],
    [1, 0.8413447461],
    [1.96, 0.9750021049],
    [-1.645, 0.0499849055],
    [3, 0.9986501020],
    [-6, 9.865876450e-10],
  ])("Φ(%d) ≈ %d", (z, expected) => {
    expect(normalCdf(z)).toBeCloseTo(expected, 7);
  });

  it("is accurate in the far tail relative to the value", () => {
    expect(normalCdf(-8) / 6.22096057427e-16).toBeCloseTo(1, 5);
  });

  it.each([
    [0.5, 0],
    [0.975, 1.959963985],
    [0.95, 1.644853627],
    [0.995, 2.575829304],
    [0.0005, -3.290526731],
  ])("Φ⁻¹(%d) ≈ %d", (p, expected) => {
    expect(normalInv(p)).toBeCloseTo(expected, 7);
  });

  it("returns NaN outside (0, 1)", () => {
    expect(normalInv(0)).toBeNaN();
    expect(normalInv(1)).toBeNaN();
  });
});

describe("Student's t distribution", () => {
  it.each([
    [0, 5, 0.5],
    [2.228138852, 10, 0.975],
    [2.015048373, 5, 0.95],
    [-2.570581836, 5, 0.025],
    [12.70620474, 1, 0.975],
    [1.983971519, 100, 0.975],
  ])("T(%d; df=%d) ≈ %d", (t, df, expected) => {
    expect(tCdf(t, df)).toBeCloseTo(expected, 8);
  });

  it("approaches the normal distribution for large df", () => {
    expect(tCdf(1.96, 100000)).toBeCloseTo(normalCdf(1.96), 5);
  });
});

describe("p-values", () => {
  it("handles each tail", () => {
    expect(pValue(1.96, "two", normalCdf)).toBeCloseTo(0.04999579, 7);
    expect(pValue(-1.645, "left", normalCdf)).toBeCloseTo(0.04998491, 7);
    expect(pValue(1.645, "right", normalCdf)).toBeCloseTo(0.04998491, 7);
    expect(pValue(0, "two", normalCdf)).toBe(1);
  });
});
