import { describe, expect, it } from "vitest";
import { CUP_SIZES, INGREDIENTS, cupsToGrams, findIngredient, gramsToCups } from "./cooking";
import { addMonths, countWeekdays, dayNumber, diffYearsMonthsDays, isLeapYear, parseIsoDate, weekday } from "./dates";
import { cumulativeGpa, letterPoints, weightedGpa } from "./gpa";
import { add, divide, formatFraction, formatMixed, multiply, parseFraction, subtract, toNumber } from "./rational";
import { VOLUME, convertUnits, findUnit } from "./units";

// Expected values below were computed independently with Python's datetime and fractions modules.
const d = (iso: string) => parseIsoDate(iso)!;

describe("calendar dates", () => {
  it("knows leap years and real dates", () => {
    expect([2000, 1900, 2024, 2023, 2100].map(isLeapYear)).toEqual([true, false, true, false, false]);
    expect(parseIsoDate("2024-02-29")).toEqual({ year: 2024, month: 2, day: 29 });
    expect(parseIsoDate("2023-02-29")).toBeUndefined();
    expect(parseIsoDate("2024-13-01")).toBeUndefined();
    expect(parseIsoDate("24-1-1")).toBeUndefined();
  });

  it("counts days and weekdays without time-zone drift", () => {
    expect(dayNumber(d("1970-01-01"))).toBe(0);
    expect(dayNumber(d("2000-01-01"))).toBe(10957);
    expect(weekday(d("2026-10-14"))).toBe(3); // Wednesday
    expect(weekday(d("2024-02-29"))).toBe(4); // Thursday
    expect(dayNumber(d("2026-12-25")) - dayNumber(d("2026-10-14"))).toBe(72);
    expect(countWeekdays(d("2026-10-01"), d("2026-10-31"))).toBe(22);
    expect(countWeekdays(d("2026-10-17"), d("2026-10-18"))).toBe(0); // a weekend
  });

  it("adds months with month-end clamping and a choice for 29 February", () => {
    expect(addMonths(d("2024-01-31"), 1)).toEqual(d("2024-02-29"));
    expect(addMonths(d("2023-01-31"), 1)).toEqual(d("2023-02-28"));
    expect(addMonths(d("2000-02-29"), 12)).toEqual(d("2001-02-28"));
    expect(addMonths(d("2000-02-29"), 12, "mar1")).toEqual(d("2001-03-01"));
    expect(addMonths(d("2000-02-29"), 48, "mar1")).toEqual(d("2004-02-29"));
  });

  it("measures years, months and days between dates", () => {
    expect(diffYearsMonthsDays(d("1990-05-15"), d("2026-10-14"))).toEqual({ years: 36, months: 4, days: 29 });
    expect(diffYearsMonthsDays(d("2024-01-31"), d("2024-03-01"))).toEqual({ years: 0, months: 1, days: 1 });
    expect(diffYearsMonthsDays(d("2000-02-29"), d("2001-02-28"))).toEqual({ years: 1, months: 0, days: 0 });
    expect(diffYearsMonthsDays(d("2000-02-29"), d("2001-02-28"), "mar1")).toEqual({ years: 0, months: 11, days: 30 });
    expect(diffYearsMonthsDays(d("2026-10-14"), d("2026-10-14"))).toEqual({ years: 0, months: 0, days: 0 });
  });
});

describe("exact fractions", () => {
  const f = (text: string) => {
    const parsed = parseFraction(text);
    if (!parsed.ok) throw new Error(parsed.issue);
    return parsed.value;
  };

  it("parses integers, fractions, mixed numbers and decimals", () => {
    expect(formatFraction(f("3/4"))).toBe("3/4");
    expect(formatFraction(f("6/8"))).toBe("3/4");
    expect(formatFraction(f("1 1/2"))).toBe("3/2");
    expect(formatFraction(f("-2 3/8"))).toBe("-19/8");
    expect(formatFraction(f("3/-4"))).toBe("-3/4");
    expect(formatFraction(f("0.75"))).toBe("3/4");
    expect(formatFraction(f("5"))).toBe("5");
    const de = parseFraction("0,125", "de");
    expect(de.ok && formatFraction(de.value)).toBe("1/8");
  });

  it("rejects bad input", () => {
    expect(parseFraction("1/0")).toEqual({ ok: false, issue: "zeroDenominator" });
    expect(parseFraction("abc")).toEqual({ ok: false, issue: "invalid" });
    expect(parseFraction("1/2/3")).toEqual({ ok: false, issue: "invalid" });
    expect(parseFraction("99999999999999/2")).toEqual({ ok: false, issue: "tooLarge" });
  });

  it("does exact arithmetic in lowest terms", () => {
    expect(formatFraction(add(f("1/2"), f("1/3")))).toBe("5/6");
    expect(formatFraction(multiply(f("2 1/4"), f("4/3")))).toBe("3");
    expect(formatFraction(subtract(f("3/4"), f("5/6")))).toBe("-1/12");
    expect(formatFraction(divide(f("2/3"), f("4/9")))).toBe("3/2");
    expect(() => divide(f("1/2"), f("0"))).toThrow(RangeError);
    expect(formatMixed(f("7/2"))).toBe("3 1/2");
    expect(formatMixed(f("-7/4"))).toBe("-1 3/4");
    expect(toNumber(f("1/3"))).toBeCloseTo(0.333333333, 9);
  });
});

describe("GPA", () => {
  it("weights grade points by credits", () => {
    const courses = [
      { name: "Math", points: letterPoints("A", "4.0")!, credits: 3 },
      { name: "Physics", points: letterPoints("B+", "4.0")!, credits: 4 },
      { name: "History", points: letterPoints("a-", "4.0")!, credits: 3 },
      { name: "Art", points: letterPoints("C", "4.0")!, credits: 2 },
    ];
    const term = weightedGpa(courses);
    expect(term.credits).toBe(12);
    expect(term.gpa).toBeCloseTo(3.358333333, 9);
    expect(cumulativeGpa(3.5, 30, term)).toBeCloseTo((3.5 * 30 + term.qualityPoints) / 42, 12);
  });

  it("supports A+ on 4.0 and 4.3 scales and rejects unknown grades", () => {
    expect(letterPoints("A+", "4.0")).toBe(4);
    expect(letterPoints("A+", "4.3")).toBe(4.3);
    expect(letterPoints("B−", "4.0")).toBe(2.7);
    expect(letterPoints("G", "4.0")).toBeUndefined();
  });
});

describe("cooking conversions", () => {
  it("uses each ingredient's own density", () => {
    const flour = findIngredient("flourAllPurpose");
    const honey = findIngredient("honey");
    expect(cupsToGrams(1, flour, "us")).toBeCloseTo(120, 9);
    expect(cupsToGrams(1, honey, "us")).toBeCloseTo(340, 9);
    expect(cupsToGrams(1, flour, "metric")).toBeCloseTo(126.8025851, 6);
    expect(gramsToCups(500, findIngredient("sugarGranulated"), "us")).toBeCloseTo(2.525252525, 8);
    expect(new Set(INGREDIENTS.map((i) => i.gramsPerUsCup)).size).toBeGreaterThan(10);
  });

  it("knows the cup sizes", () => {
    expect(CUP_SIZES.us).toBeCloseTo(236.5882365, 9);
    expect(CUP_SIZES.metric).toBe(250);
    expect(CUP_SIZES.imperial).toBeCloseTo(284.130625, 9);
  });
});

describe("volume units", () => {
  const u = (v: string) => findUnit(VOLUME, v);
  it("uses exact US and imperial definitions", () => {
    expect(convertUnits(1, u("gal"), u("l"))).toBeCloseTo(3.785411784, 12);
    expect(convertUnits(1, u("cup"), u("ml"))).toBeCloseTo(236.5882365, 9);
    expect(convertUnits(1, u("impgal"), u("gal"))).toBeCloseTo(1.200949925504855, 12);
    expect(convertUnits(1, u("tbsp"), u("tsp"))).toBeCloseTo(3, 12);
    expect(convertUnits(1, u("ft3"), u("in3"))).toBeCloseTo(1728, 9);
    expect(convertUnits(1, u("gal"), u("in3"))).toBeCloseTo(231, 9);
  });
});
