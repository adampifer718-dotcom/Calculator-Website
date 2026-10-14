import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { evaluate, rawFromValues } from "@/calculators/framework/evaluate";
import { engineContext } from "@/calculators/framework/i18n";
import type { CalculatorTranslation } from "@/calculators/framework/types";
import { englishContent } from "@/calculators/localize";
import { PAY_CONVERTER_TEXT } from "@/calculators/pay-converter/translations";
import payConverterEn from "@/calculators/pay-converter/text/en";
import { makePayConverterEngine } from "@/calculators/pay-converter/engine";
import { CALCULATORS } from "@/calculators/registry";
import { CALC_COMMON } from "./calc";
import calcEn from "./calc/en";
import { LOCALES, type Locale } from "./config";
import { MESSAGE_LOCALES, loadMessages } from "./messages";
import en from "./messages/en";
import { TAXONOMY } from "./taxonomy";
import { compareShape, untranslatedStrings } from "./translation-check";

/*
 * Every translation file must match the English structure exactly. These
 * tests also run on translation files that are not wired into the site yet
 * (src/calculators/<calc>/i18n/<locale>.ts), so a translation can be checked
 * before it is published.
 */

const OTHER_LOCALES = LOCALES.filter((l): l is Exclude<Locale, "en"> => l !== "en");
const CALC_DIR = path.join(process.cwd(), "src/calculators");

/** Calculator folder for each slug, read from the folders' index.ts files. */
const DIRS = new Map(
  readdirSync(CALC_DIR)
    .filter((name) => existsSync(path.join(CALC_DIR, name, "index.ts")))
    .map((name) => [/slug:\s*"([^"]+)"/.exec(readFileSync(path.join(CALC_DIR, name, "index.ts"), "utf8"))?.[1], name] as const),
);
const findDir = (slug: string) => DIRS.get(slug) ?? slug;

/** Collects every number in a result so localized and English engines can be compared. */
function numbers(value: unknown): number[] {
  if (typeof value === "number") return [value];
  if (Array.isArray(value)) return value.flatMap(numbers);
  if (value && typeof value === "object") return Object.values(value).flatMap(numbers);
  return [];
}

describe("interface messages", () => {
  for (const locale of OTHER_LOCALES) {
    it(`${locale}: complete when translated`, async () => {
      const messages = await loadMessages(locale);
      if (messages === en) return; // not translated yet; the locale stays unpublished
      expect(compareShape(en, messages)).toEqual([]);
      expect(untranslatedStrings(en, messages)).toEqual([]);
    });
  }
});

const I18N_DIR = path.join(process.cwd(), "src/i18n");

/** Default export of a translation file, or undefined when the file does not exist yet. */
async function load<T>(file: string): Promise<T | undefined> {
  return existsSync(file) ? ((await import(/* @vite-ignore */ file)).default as T) : undefined;
}

describe("shared calculator strings and taxonomy", () => {
  for (const locale of OTHER_LOCALES) {
    it(`${locale}: calculator strings match the English shape`, async () => {
      const text = await load(path.join(I18N_DIR, "calc", `${locale}.ts`));
      if (!text) return;
      expect(compareShape(calcEn, text)).toEqual([]);
      expect(untranslatedStrings(calcEn, text)).toEqual([]);
    });
    it(`${locale}: taxonomy matches the English shape`, async () => {
      const taxonomy = await load(path.join(I18N_DIR, "taxonomy", `${locale}.ts`));
      if (!taxonomy) return;
      expect(compareShape(TAXONOMY.en, taxonomy)).toEqual([]);
      expect(untranslatedStrings(TAXONOMY.en, taxonomy)).toEqual([]);
    });
    it(`${locale}: homepage pay converter strings match`, async () => {
      const text = await load<typeof payConverterEn>(path.join(CALC_DIR, "pay-converter", "text", `${locale}.ts`));
      if (!text) return;
      expect(compareShape(payConverterEn, text)).toEqual([]);
      expect(untranslatedStrings(payConverterEn, text)).toEqual([]);
      const engine = makePayConverterEngine(engineContext(locale, text));
      expect(evaluate(engine, rawFromValues(engine, { amount: 25, period: "hourly" })).ok).toBe(true);
    });
  }
});

describe("calculator translations", () => {
  it("finds a folder for every calculator", () => {
    for (const def of CALCULATORS) expect(existsSync(path.join(CALC_DIR, findDir(def.slug), "index.ts")), def.slug).toBe(true);
  });
  for (const def of CALCULATORS) {
    const dir = findDir(def.slug);
    for (const locale of OTHER_LOCALES) {
      const file = path.join(CALC_DIR, dir, "i18n", `${locale}.ts`);
      if (!existsSync(file)) continue;
      it(`${def.slug} (${locale}) matches English and gives identical results`, async () => {
        const translation = (await import(/* @vite-ignore */ file)).default as CalculatorTranslation<unknown>;
        const english = englishContent(def);
        expect(compareShape(english, translation.content, "", { flexibleArrays: ["keywords"] })).toEqual([]);
        expect(compareShape(def.text, translation.text)).toEqual([]);
        expect(untranslatedStrings({ ...english, keywords: [] }, { ...translation.content, keywords: [] })).toEqual([]);

        const localized = def.makeEngine(engineContext(locale, translation.text as never));
        expect(localized.fields.map((f) => f.id)).toEqual(def.engine.fields.map((f) => f.id));
        for (const example of def.examples) {
          const a = evaluate(def.engine, rawFromValues(def.engine, example.inputs));
          const b = evaluate(localized, rawFromValues(localized, example.inputs));
          expect(b.ok).toBe(a.ok);
          if (a.ok && b.ok) {
            expect(numbers(b.result.primary.value)).toEqual(numbers(a.result.primary.value));
            expect(numbers(b.result.secondary ?? [])).toEqual(numbers(a.result.secondary ?? []));
            expect(numbers(b.result.tables?.map((t) => t.rows.map((r) => r.cells)) ?? [])).toEqual(numbers(a.result.tables?.map((t) => t.rows.map((r) => r.cells)) ?? []));
          }
        }
      });
    }
  }
});

it("every shared translation file is wired into the site", async () => {
  for (const locale of OTHER_LOCALES) {
    expect((await loadMessages(locale)) !== en, `messages ${locale}`).toBe(MESSAGE_LOCALES.includes(locale));
    expect(existsSync(path.join(I18N_DIR, "calc", `${locale}.ts`)), `calc ${locale}`).toBe(CALC_COMMON[locale] !== undefined);
    expect(existsSync(path.join(I18N_DIR, "taxonomy", `${locale}.ts`)), `taxonomy ${locale}`).toBe(TAXONOMY[locale] !== undefined);
    expect(existsSync(path.join(CALC_DIR, "pay-converter", "text", `${locale}.ts`)), `pay converter ${locale}`).toBe(PAY_CONVERTER_TEXT[locale] !== undefined);
  }
});

it("every calculator translation file is wired into its translation map", async () => {
  for (const def of CALCULATORS) {
    const dir = findDir(def.slug);
    for (const locale of OTHER_LOCALES) {
      const exists = existsSync(path.join(CALC_DIR, dir, "i18n", `${locale}.ts`));
      expect(def.translations[locale] !== undefined, `${def.slug} ${locale}`).toBe(exists);
    }
  }
});
