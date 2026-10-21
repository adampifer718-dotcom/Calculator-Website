import { describe, expect, it } from "vitest";
import { countSigFigs } from "@/lib/math/numbers";
import { getFormatter } from "@/lib/format";
import { formatInputValue, normalizeNumberText, parseLocaleNumber, usesCommaDecimal } from "@/lib/parse";
import { parseAmount } from "@/converters/input";
import { LOCALES, LOCALE_INFO, LOCALE_SUGGESTION } from "./config";
import { equivalentPath } from "./switch";
import { languageAlternates, localizePath, stripLocale } from "./paths";

const NEW = ["it", "pt", "nl"] as const;

describe("Italian, European Portuguese and Dutch locales", () => {
  it("are configured with native names, BCP 47 tags and left-to-right direction", () => {
    expect(LOCALES).toEqual(["en", "ur", "es", "fr", "de", "ar", "it", "pt", "nl"]);
    expect(NEW.map((l) => LOCALE_INFO[l].nativeName)).toEqual(["Italiano", "Português", "Nederlands"]);
    expect(NEW.map((l) => LOCALE_INFO[l].lang)).toEqual(["it", "pt-PT", "nl"]);
    expect(NEW.map((l) => LOCALE_INFO[l].intl)).toEqual(["it-IT", "pt-PT", "nl-NL"]);
    for (const l of NEW) {
      expect(LOCALE_INFO[l].dir).toBe("ltr");
      expect(LOCALE_SUGGESTION[l].prompt).toBeTruthy();
    }
  });

  it("use /it, /pt and /nl prefixes and pt-PT in hreflang", () => {
    expect(localizePath("pt", "/calculators/tip-calculator")).toBe("/pt/calculators/tip-calculator");
    expect(localizePath("nl", "/")).toBe("/nl");
    expect(stripLocale("/it/categories/finance")).toEqual({ locale: "it", path: "/categories/finance" });
    const alternates = languageAlternates("/calculators", ["en", "it", "pt", "nl"]);
    expect(Object.keys(alternates)).toEqual(["en", "it", "pt-PT", "nl", "x-default"]);
    expect(alternates["pt-PT"]).toMatch(/\/pt\/calculators$/);
  });

  it("switch to the equivalent page, keeping the query, with a homepage fallback", () => {
    const availability = { "tip-calculator": ["en", "it", "pt", "nl"], "unit-converters/pressure-converter": ["en", "pt"] } as const;
    expect(equivalentPath("/calculators/tip-calculator", "nl", availability, "?x=1").href).toBe("/nl/calculators/tip-calculator?x=1");
    expect(equivalentPath("/pt/calculators/tip-calculator", "it", availability).href).toBe("/it/calculators/tip-calculator");
    expect(equivalentPath("/unit-converters/pressure-converter", "pt", availability, "?from=bar")).toEqual({ href: "/pt/unit-converters/pressure-converter?from=bar", exists: true });
    // Not available in Dutch: falls back to the Dutch homepage instead of a broken URL.
    expect(equivalentPath("/pt/unit-converters/pressure-converter", "nl", availability)).toEqual({ href: "/nl", exists: false });
  });

  it("read decimal commas and grouped thousands without changing the value", () => {
    for (const l of NEW) {
      expect(usesCommaDecimal(l)).toBe(true);
      expect(parseLocaleNumber("52.000,50", l)).toBe(52000.5);
      expect(parseLocaleNumber("1234,5", l)).toBe(1234.5);
      expect(normalizeNumberText("0,004050", l)).toBe("0.004050");
      expect(countSigFigs("0,004050", l)).toBe(4);
      expect(countSigFigs("1200,", l)).toBe(4);
      expect(formatInputValue(1250.5, l)).toBe("1250,5");
      expect(parseAmount("1/2", l)).toBe(0.5);
      expect(parseAmount("3,5e-3", l)).toBe(0.0035);
    }
    expect(parseLocaleNumber("1 234,5", "pt")).toBe(1234.5);
  });

  it("format results with the local separators, never changing the number", () => {
    expect(getFormatter("it").number(1234567.891, 3)).toBe("1.234.567,891");
    expect(getFormatter("nl").number(1234567.891, 3)).toBe("1.234.567,891");
    expect(getFormatter("pt").number(1234567.891, 3).replace(/\s/g, " ")).toBe("1 234 567,891");
    expect(getFormatter("it").significant(0.00405, 4)).toBe("0,00405");
    for (const l of NEW) expect(getFormatter(l).currency(14.49, "USD")).toMatch(/14,49/);
  });
});
