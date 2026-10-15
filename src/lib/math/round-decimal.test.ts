import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { roundDecimalText } from "./numbers";

const SUPERSCRIPT = "⁰¹²³⁴⁵⁶⁷⁸⁹";
const superscript = (n: number) => String(n).replace("-", "⁻").replace(/\d/g, (d) => SUPERSCRIPT[Number(d)]);

describe("decimal rounding to significant figures", () => {
  it("rounds textbook halves up instead of using binary floating point", () => {
    expect(roundDecimalText("2.675", 3).plain).toBe("2.68");
    expect(roundDecimalText("1.005", 3).plain).toBe("1.01");
    expect(roundDecimalText("-2.675", 3).plain).toBe("-2.68");
    expect(roundDecimalText("123456", 3)).toEqual({ plain: "123,000", scientific: "1.23 × 10⁵" });
    expect(roundDecimalText("0.0045678", 2)).toEqual({ plain: "0.0046", scientific: "4.6 × 10⁻³" });
    expect(roundDecimalText("2.5", 4)).toEqual({ plain: "2.500", scientific: "2.500 × 10⁰" });
    expect(roundDecimalText("-987.65", 1)).toEqual({ plain: "-1,000", scientific: "-1 × 10³" });
  });

  it("marks a significant zero in the units place with a decimal point", () => {
    expect(roundDecimalText("99.96", 3)).toEqual({ plain: "100.", scientific: "1.00 × 10²" });
  });

  it("handles long inputs exactly, without crashing or inventing digits", () => {
    expect(roundDecimalText(`1.${"0".repeat(120)}`, 121).scientific).toBe(`1.${"0".repeat(120)} × 10⁰`);
    expect(roundDecimalText("0.1234567890123456789", 19).scientific).toBe("1.234567890123456789 × 10⁻¹");
  });

  // Expected values generated with Python's decimal module (ROUND_HALF_UP) on random inputs.
  const cases = JSON.parse(readFileSync(new URL("./round-decimal.cases.json", import.meta.url), "utf8")) as [string, number, string, number][];
  it(`matches Python's decimal module on ${cases.length} random cases`, () => {
    for (const [text, n, mantissa, exponent] of cases) {
      expect(roundDecimalText(text, n).scientific, `${text} to ${n}`).toBe(`${mantissa} × 10${superscript(exponent)}`);
    }
  });
});
