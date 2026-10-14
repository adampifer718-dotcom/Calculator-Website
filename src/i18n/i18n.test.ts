import { describe, expect, it } from "vitest";
import { calculatorLocales, calculatorsForLocale, readyLocales } from "@/calculators/localize";
import { CALCULATORS } from "@/calculators/registry";
import sitemap from "@/app/sitemap";
import { getFormatter } from "@/lib/format";
import { exampleNumber, formatInputValue, parseLocaleNumber } from "@/lib/parse";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { LOCALES, LOCALE_INFO } from "./config";
import { languageAlternates, localizePath, stripLocale } from "./paths";
import { equivalentPath } from "./switch";

describe("locale paths", () => {
  it("keeps English unprefixed and prefixes other languages", () => {
    expect(localizePath("en", "/")).toBe("/");
    expect(localizePath("en", "/calculators/roi-calculator")).toBe("/calculators/roi-calculator");
    expect(localizePath("es", "/")).toBe("/es");
    expect(localizePath("ar", "/calculators")).toBe("/ar/calculators");
    expect(localizePath("ur", "about")).toBe("/ur/about");
  });

  it("strips a locale prefix and round-trips", () => {
    expect(stripLocale("/fr/categories/finance")).toEqual({ locale: "fr", path: "/categories/finance" });
    expect(stripLocale("/de")).toEqual({ locale: "de", path: "/" });
    expect(stripLocale("/calculators")).toEqual({ locale: "en", path: "/calculators" });
    expect(stripLocale("/")).toEqual({ locale: "en", path: "/" });
    // "en" is never a prefix; "/english" is not a locale either.
    expect(stripLocale("/english/x").locale).toBe("en");
    for (const locale of LOCALES) {
      for (const path of ["/", "/calculators", "/calculators/tip-calculator", "/collections/business"]) {
        expect(stripLocale(localizePath(locale, path))).toEqual({ locale, path });
      }
    }
  });

  it("builds hreflang alternates with an English x-default", () => {
    const alternates = languageAlternates("/calculators/tip-calculator", ["en", "es", "ar"]);
    expect(alternates).toEqual({
      en: absoluteUrl("/calculators/tip-calculator"),
      es: absoluteUrl("/es/calculators/tip-calculator"),
      ar: absoluteUrl("/ar/calculators/tip-calculator"),
      "x-default": absoluteUrl("/calculators/tip-calculator"),
    });
  });
});

describe("language switching", () => {
  const availability = { "tip-calculator": ["en", "es"] as const, "roi-calculator": ["en"] as const };

  it("keeps the visitor on the same page and query when it exists", () => {
    expect(equivalentPath("/calculators/tip-calculator", "es", availability)).toEqual({ href: "/es/calculators/tip-calculator", exists: true });
    expect(equivalentPath("/es/calculators/tip-calculator", "en", availability)).toEqual({ href: "/calculators/tip-calculator", exists: true });
    expect(equivalentPath("/calculators", "de", availability, "?q=loan&sort=az")).toEqual({ href: "/de/calculators?q=loan&sort=az", exists: true });
    expect(equivalentPath("/fr/categories/finance", "ar", availability)).toEqual({ href: "/ar/categories/finance", exists: true });
    expect(equivalentPath("/", "ur", availability)).toEqual({ href: "/ur", exists: true });
  });

  it("falls back to the target homepage for an untranslated calculator", () => {
    expect(equivalentPath("/calculators/roi-calculator", "es", availability)).toEqual({ href: "/es", exists: false });
    expect(equivalentPath("/calculators/unknown", "fr", availability)).toEqual({ href: "/fr", exists: false });
  });
});

describe("number input parsing", () => {
  it("parses English-style numbers in en, ur and ar", () => {
    for (const locale of ["en", "ur", "ar"] as const) {
      expect(parseLocaleNumber("52,000.50", locale)).toBe(52000.5);
      expect(parseLocaleNumber("0.25", locale)).toBe(0.25);
      expect(parseLocaleNumber("-3", locale)).toBe(-3);
      expect(parseLocaleNumber("$1,200", locale)).toBe(1200);
    }
  });

  it("accepts Arabic-Indic and Urdu digits", () => {
    expect(parseLocaleNumber("٥٢٠٠٠٫٥", "ar")).toBe(52000.5);
    expect(parseLocaleNumber("۱۲۳", "ur")).toBe(123);
  });

  it("uses a decimal comma in es, fr and de", () => {
    for (const locale of ["es", "fr", "de"] as const) {
      expect(parseLocaleNumber("52.000,50", locale)).toBe(52000.5);
      expect(parseLocaleNumber("0,25", locale)).toBe(0.25);
      expect(parseLocaleNumber("60.000", locale)).toBe(60000);
      expect(parseLocaleNumber("2.5", locale)).toBe(2.5);
      expect(parseLocaleNumber("1,2,3", locale)).toBeNaN();
    }
    expect(parseLocaleNumber("52 000,50", "fr")).toBe(52000.5);
    expect(parseLocaleNumber("52 000,50", "fr")).toBe(52000.5);
  });

  it("returns null for empty input and NaN for text", () => {
    expect(parseLocaleNumber("  ", "de")).toBeNull();
    expect(parseLocaleNumber("abc", "en")).toBeNaN();
  });

  it("writes input values the way each locale types them", () => {
    expect(formatInputValue(1250.5, "en")).toBe("1250.5");
    expect(formatInputValue(1250.5, "de")).toBe("1250,5");
    expect(formatInputValue(1250.5, "ar")).toBe("1250.5");
    for (const locale of LOCALES) expect(parseLocaleNumber(formatInputValue(1234.5678, locale), locale)).toBe(1234.5678);
    for (const locale of LOCALES) expect(parseLocaleNumber(exampleNumber(locale), locale)).toBe(1250.5);
  });
});

describe("number formatting", () => {
  it("formats with locale conventions and Latin digits everywhere", () => {
    expect(getFormatter("en").number(1234567.891, 2)).toBe("1,234,567.89");
    expect(getFormatter("de").number(1234567.891, 2)).toBe("1.234.567,89");
    expect(getFormatter("es").number(0.5, 2)).toBe("0,5");
    expect(getFormatter("fr").currency(1234.5, "EUR")).toMatch(/^1\s234,50\s€$/);
    for (const locale of ["ar", "ur"] as const) {
      const text = getFormatter(locale).number(1234567.891, 2);
      expect(text).toMatch(/1,234,567\.89/);
      expect(text).not.toMatch(/[٠-٩۰-۹]/);
    }
  });

  it("never converts currencies when the language changes", () => {
    for (const locale of LOCALES) {
      const text = getFormatter(locale).currency(100, "USD");
      expect(text.replace(/[^\d.,]/g, "")).toMatch(/^100[.,]00$/);
      expect(text).toMatch(/\$|US/);
      expect(getFormatter(locale).currency(100, "PKR")).toMatch(/PKR|Rs|₨|روپ/);
    }
  });

  it("formats percentages from percent units", () => {
    expect(getFormatter("en").percent(12.5)).toBe("12.5%");
    expect(getFormatter("de").percent(12.5)).toBe("12,5\u00a0%");
  });

  it("pins Latin digits for right-to-left locales", () => {
    expect(LOCALE_INFO.ar.intl).toContain("nu-latn");
    expect(LOCALE_INFO.ur.intl).toContain("nu-latn");
    expect(LOCALE_INFO.ar.dir).toBe("rtl");
    expect(LOCALE_INFO.ur.dir).toBe("rtl");
    for (const locale of ["en", "es", "fr", "de"] as const) expect(LOCALE_INFO[locale].dir).toBe("ltr");
  });
});

describe("localized SEO", () => {
  it("gives every page a self canonical and reciprocal alternates", () => {
    const meta = pageMetadata({ locale: "es", title: "T", description: "D", path: "/calculators/tip-calculator", locales: ["en", "es"] });
    expect(meta.alternates?.canonical).toBe("/es/calculators/tip-calculator");
    expect(meta.alternates?.languages).toEqual(languageAlternates("/calculators/tip-calculator", ["en", "es"]));
    expect(meta.openGraph).toMatchObject({ locale: "es_ES", alternateLocale: ["en_US"] });
  });

  it("keeps English canonicals unprefixed", () => {
    const meta = pageMetadata({ locale: "en", title: "T", description: "D", path: "/", locales: ["en"] });
    expect(meta.alternates?.canonical).toBe("/");
  });

  it("lists only published localized pages, with reciprocal hreflang", () => {
    const entries = sitemap();
    const urls = new Set(entries.map((e) => e.url));
    expect(urls.size).toBe(entries.length); // no duplicates
    for (const entry of entries) {
      const languages = entry.alternates?.languages as Record<string, string>;
      expect(Object.values(languages)).toContain(entry.url);
      for (const [lang, url] of Object.entries(languages)) {
        if (lang === "x-default") continue;
        // Every alternate is itself listed and points back with the same set.
        expect(urls.has(url), `${entry.url} → ${url}`).toBe(true);
        const other = entries.find((e) => e.url === url)!;
        expect(other.alternates?.languages).toEqual(languages);
      }
    }
    const expected = readyLocales().reduce((n, locale) => n + calculatorsForLocale(locale).length, 0);
    expect(entries.filter((e) => e.url.includes("/calculators/")).length).toBe(expected);
  });

  it("never lists an untranslated calculator in a language", () => {
    const urls = new Set(sitemap().map((e) => e.url));
    for (const def of CALCULATORS) {
      for (const locale of LOCALES) {
        const url = absoluteUrl(localizePath(locale, `/calculators/${def.slug}`));
        expect(urls.has(url), url).toBe(readyLocales().includes(locale) && calculatorLocales(def).includes(locale));
      }
    }
  });
});

describe("titles inside sentences", () => {
  it("keeps acronyms and German capitalization", async () => {
    const { midSentence } = await import("@/lib/parse");
    expect(midSentence("ROI", "en")).toBe("ROI");
    expect(midSentence("Salary to Hourly", "en")).toBe("salary to hourly");
    expect(midSentence("IMC", "es")).toBe("IMC");
    expect(midSentence("Propinas", "es")).toBe("propinas");
    expect(midSentence("Trinkgeld", "de")).toBe("Trinkgeld");
  });
});
