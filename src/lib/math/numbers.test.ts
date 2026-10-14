import { describe, expect, it } from "vitest";
import { formatSignificant } from "@/lib/format";
import { countSigFigs, expandExponential, isNumberText, notations, roundToSigFigs } from "./numbers";

describe("significant figures", () => {
  it.each([
    ["123", 3],
    ["0.004050", 4],
    ["1200", 2],
    ["1200.", 4],
    ["1200.0", 5],
    ["1,005", 4],
    ["-0.0102", 3],
    ["6.020e23", 4],
    ["0.5", 1],
    ["0", 0],
    ["000.000", 0],
  ])("%s has %d", (text, expected) => {
    expect(countSigFigs(text)).toBe(expected);
  });

  it("rejects invalid text", () => {
    expect(countSigFigs("12a")).toBeNull();
    expect(countSigFigs("1.2.3")).toBeNull();
    expect(isNumberText("6.02e23")).toBe(true);
    expect(isNumberText("abc")).toBe(false);
  });

  it("rounds and keeps significant trailing zeros", () => {
    expect(roundToSigFigs(123456, 3)).toEqual({ plain: "123,000", scientific: "1.23 × 10⁵", value: 123000 });
    expect(roundToSigFigs(0.0045678, 2)).toMatchObject({ plain: "0.0046", scientific: "4.6 × 10⁻³" });
    expect(roundToSigFigs(2.5, 4)).toMatchObject({ plain: "2.500", scientific: "2.500 × 10⁰" });
    expect(roundToSigFigs(-987.65, 1)).toMatchObject({ plain: "-1,000", scientific: "-1 × 10³" });
  });
});

describe("scientific notation", () => {
  it("converts decimals", () => {
    expect(notations(123400)).toEqual({ scientific: "1.234 × 10⁵", eNotation: "1.234e5", engineering: "123.4 × 10³", decimal: "123,400" });
    expect(notations(0.00056)).toEqual({ scientific: "5.6 × 10⁻⁴", eNotation: "5.6e-4", engineering: "560 × 10⁻⁶", decimal: "0.00056" });
    expect(notations(-6.02e23).scientific).toBe("-6.02 × 10²³");
    expect(notations(0).scientific).toBe("0 × 10⁰");
  });

  it("expands e-notation", () => {
    expect(expandExponential("1.23e+5")).toBe("123000");
    expect(expandExponential("4.6e-3")).toBe("0.0046");
    expect(expandExponential("12.5")).toBe("12.5");
  });

  it("formats very large and small results", () => {
    expect(formatSignificant(1024)).toBe("1,024");
    expect(formatSignificant(2 ** 100)).toBe("1.2676506 × 10³⁰");
    expect(formatSignificant(1.23e-8, 4)).toBe("1.23 × 10⁻⁸");
    expect(formatSignificant(0.0499958, 4)).toBe("0.05");
  });
});
