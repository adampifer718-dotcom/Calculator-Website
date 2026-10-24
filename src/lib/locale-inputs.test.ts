import { describe, expect, it } from "vitest";
import { evaluate, rawFromValues } from "@/calculators/framework/evaluate";
import { engineContext } from "@/calculators/framework/i18n";
import { getLocalizedCalculator } from "@/calculators/localize";
import type { Locale } from "@/i18n/config";
import { parseNumberList } from "./math/data";
import { parseRecipeLine, formatKitchenQuantity } from "./math/fractions";
import { countSigFigs, isNumberText } from "./math/numbers";
import { getFormatter } from "./format";
import { normalizeNumberText, splitNumberList } from "./parse";

describe("text number normalization", () => {
  it("keeps English, Urdu and Arabic input unchanged in meaning", () => {
    for (const locale of ["en", "ur", "ar"] as const) {
      expect(normalizeNumberText("1,234.50", locale)).toBe("1234.50");
      expect(normalizeNumberText("0.004050", locale)).toBe("0.004050");
      expect(normalizeNumberText("6.02e23", locale)).toBe("6.02e23");
      expect(normalizeNumberText("1200.", locale)).toBe("1200.");
    }
    expect(normalizeNumberText("٠٫٠٠٤٠٥٠", "ar")).toBe("0.004050");
  });

  it("reads decimal commas and grouping dots or spaces in es, fr and de", () => {
    for (const locale of ["es", "fr", "de"] as const) {
      expect(normalizeNumberText("0,004050", locale)).toBe("0.004050");
      expect(normalizeNumberText("1.234,50", locale)).toBe("1234.50");
      expect(normalizeNumberText("6,02e23", locale)).toBe("6.02e23");
      expect(normalizeNumberText("1200,", locale)).toBe("1200.");
      expect(normalizeNumberText("0.004050", locale)).toBe("0.004050"); // unambiguous dot decimal
      expect(normalizeNumberText("123.456", locale)).toBe("123456"); // thousands
    }
    expect(normalizeNumberText("1 234,5", "fr")).toBe("1234.5");
    expect(normalizeNumberText("1 234,5", "fr")).toBe("1234.5");
  });

  it("counts significant figures the same way in every notation", () => {
    expect(countSigFigs("0.004050", "en")).toBe(4);
    expect(countSigFigs("0,004050", "de")).toBe(4);
    expect(countSigFigs("1200", "fr")).toBe(2);
    expect(countSigFigs("1200,", "fr")).toBe(4);
    expect(countSigFigs("2,50", "es")).toBe(3);
    expect(countSigFigs("2,50", "en")).toBe(2); // commas group thousands in English: "250"
  });

  it("never reads a leading zero as a thousands group", () => {
    for (const locale of ["es", "fr", "de", "it", "pt", "nl"] as const) {
      // "0.025" is a decimal everywhere; "60.000" still groups thousands in comma locales.
      expect(normalizeNumberText("0.025", locale)).toBe("0.025");
      expect(normalizeNumberText("-0.500", locale)).toBe("-0.500");
      expect(normalizeNumberText("60.000", locale)).toBe("60000");
    }
  });

  it("rejects ambiguous text", () => {
    expect(isNumberText("1,2,3", "de")).toBe(false);
    expect(isNumberText("abc", "en")).toBe(false);
  });
});

describe("number lists", () => {
  const values = (text: string, locale: Locale) => {
    const parsed = parseNumberList(text, locale);
    return parsed.ok ? parsed.values : parsed.issue;
  };

  it("splits on commas in en, ur and ar", () => {
    expect(values("1.5, 2.25, 3", "en")).toEqual([1.5, 2.25, 3]);
    expect(values("1.5,2.25,3", "ar")).toEqual([1.5, 2.25, 3]);
    expect(values("١٫٥ ٢", "ar")).toEqual([1.5, 2]);
  });

  it("reads decimal commas in es, fr and de", () => {
    for (const locale of ["es", "fr", "de"] as const) {
      expect(values("1,5; 2,25; 3", locale)).toEqual([1.5, 2.25, 3]);
      expect(values("1,5 2,25\n3", locale)).toEqual([1.5, 2.25, 3]);
      expect(values("2, 4, 4, 5", locale)).toEqual([2, 4, 4, 5]); // ", " separates
      expect(values("1.5; 2", locale)).toEqual([1.5, 2]);
    }
    expect(splitNumberList("1,5;2,5", "de")).toEqual(["1.5", "2.5"]);
    expect(values("1,2,3", "de")).toEqual({ code: "notNumber", token: "1,2,3" });
  });
});

describe("recipe quantities", () => {
  it("parses decimal commas only where they are decimals", () => {
    expect(parseRecipeLine("1,5 tazas de harina", "es")).toEqual({ quantity: 1.5, rest: "tazas de harina" });
    expect(parseRecipeLine("1.5 cups flour", "en")).toEqual({ quantity: 1.5, rest: "cups flour" });
    // English behaviour is unchanged: a comma after the number is punctuation.
    expect(parseRecipeLine("2, chopped", "en")).toEqual({ quantity: 2, rest: ", chopped" });
    expect(formatKitchenQuantity(2.7, "de")).toBe("2,7");
    expect(formatKitchenQuantity(1.5, "de")).toBe("1 1/2");
  });
});

describe("localized calculators accept local input and keep results", () => {
  const run = (slug: string, locale: Locale, raw: Record<string, string>) => {
    const calc = getLocalizedCalculator(slug, locale)!;
    const engine = calc.def.makeEngine(engineContext(locale, calc.text as never));
    return evaluate(engine, { ...rawFromValues(engine, {}), ...raw });
  };

  it("significant figures with a German decimal comma", () => {
    const de = run("significant-figures-calculator", "de", { mode: "count", number: "0,004050" });
    const en = run("significant-figures-calculator", "en", { mode: "count", number: "0.004050" });
    expect(de.ok && de.result.primary.value).toEqual(en.ok && en.result.primary.value);
  });

  it("rounding shows German separators but keeps every significant zero", () => {
    const de = run("significant-figures-calculator", "de", { mode: "round", number: "123.456", digits: "3" });
    expect(de.ok && de.result.primary.value).toEqual({ kind: "text", text: "123.000" });
    const fr = run("significant-figures-calculator", "fr", { mode: "round", number: "0,0012345", digits: "3" });
    expect(fr.ok && fr.result.primary.value).toEqual({ kind: "text", text: "0,00123" });
  });

  it("standard deviation with French decimal commas matches English", () => {
    const fr = run("standard-deviation-calculator", "fr", { data: "2,5; 4; 4,5; 7", kind: "population" });
    const en = run("standard-deviation-calculator", "en", { data: "2.5, 4, 4.5, 7", kind: "population" });
    expect(fr.ok && en.ok).toBe(true);
    const text = (r: typeof fr) => (r.ok && r.result.primary.value.kind === "text" ? r.result.primary.value.text : "");
    expect(text(fr).replace(",", ".")).toBe(text(en));
  });

  it("scientific notation reads and writes Spanish decimals", () => {
    const es = run("scientific-notation-calculator", "es", { number: "0,00056" });
    expect(es.ok && es.result.primary.value).toEqual({ kind: "text", text: "5,6 × 10⁻⁴" });
    expect(getFormatter("es").numberText("1,234.5")).toBe("1.234,5");
    expect(getFormatter("ar").numberText("1,234.5")).toBe("1,234.5");
  });
});
