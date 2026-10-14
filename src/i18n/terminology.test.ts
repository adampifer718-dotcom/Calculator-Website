import { describe, expect, it } from "vitest";
import { calculatorsForLocale } from "@/calculators/localize";
import { LOCALES } from "./config";

/** Naming conventions that keep calculator titles natural and consistent across navigation, headings and metadata. */
describe("calculator titles", () => {
  it("are unique within each language", () => {
    for (const locale of LOCALES) {
      const titles = calculatorsForLocale(locale).map((c) => c.content.title);
      expect(new Set(titles).size, locale).toBe(titles.length);
    }
  });

  it("French uses « Calculateur » or « Convertisseur » and typographic apostrophes", () => {
    for (const { def, content } of calculatorsForLocale("fr")) {
      expect(content.title, def.slug).toMatch(/^(Calculateur|Convertisseur) /);
      expect(JSON.stringify(content), def.slug).not.toMatch(/\w'\w/);
    }
  });

  it("German titles are a natural compound or « Rechner für … », never a long hyphen chain", () => {
    for (const { def, content } of calculatorsForLocale("de")) {
      expect(content.title, def.slug).toMatch(/(rechner|Rechner|umrechner)\b|^Rechner für /);
      expect((content.title.match(/-/g) ?? []).length, def.slug).toBeLessThanOrEqual(2);
    }
  });

  it("metadata titles name the same tool as the page heading", () => {
    for (const locale of LOCALES) {
      const bad: string[] = [];
      for (const { def, content } of calculatorsForLocale(locale)) {
        const head = content.metaTitle.split(" – ")[0].toLocaleLowerCase(locale);
        const title = content.title.replace(/\s*\(.*\)$/, "").toLocaleLowerCase(locale);
        const topic = content.shortTitle.toLocaleLowerCase(locale).split(/[ ,]/)[0];
        // The meta title leads with the page title, or at least with its topic.
        if (!head.startsWith(title) && !head.includes(topic)) bad.push(`${def.slug}: "${content.metaTitle}" vs "${content.title}"`);
      }
      expect(bad, locale).toEqual([]);
    }
  });
});
