import { calculatorLocales, isLocaleReady, readyLocales } from "@/calculators/localize";
import { PAY_CONVERTER_TEXT } from "@/calculators/pay-converter/translations";
import { CALCULATORS } from "@/calculators/registry";
import { converterLocales, localizeConverter } from "@/converters/catalog";
import { ALL_CONVERTERS } from "@/converters/specs";
import { CALC_COMMON } from "./calc";
import { MESSAGE_LOCALES } from "./messages";
import { LOCALES, LOCALE_INFO } from "./config";
import { TAXONOMY } from "./taxonomy";

const mark = (done: boolean) => (done ? "✅" : "—");

/**
 * Markdown translation completeness report of what the site publishes.
 * Regenerate with `npm run i18n:report`.
 */
export function translationReport(): string {
  const others = LOCALES.filter((l) => l !== "en");
  const lines: string[] = [];
  lines.push("# Translation completeness report", "");
  lines.push(
    "Generated from the code by `npm run i18n:report` and checked by `src/i18n/report.test.ts`, so it cannot drift from what the site publishes.",
    "A language is published only when its interface, shared calculator strings, category and collection names and homepage pay converter are all translated.",
    "A calculator page exists in a language only when its full content and engine strings are translated; otherwise the language selector sends visitors to that language's homepage and the page is not in the sitemap.",
    "Translations were drafted with AI assistance and checked automatically (structure, placeholders, untranslated text, identical calculator results). No human linguistic review has taken place; terms flagged for native-speaker proofreading are listed in `docs/translation-proofreading.md`.",
    "Browser checks of every published page in all nine languages (desktop and mobile sitemap crawls: internal links, console errors, accessibility, 320 px overflow and default calculator results) are recorded with their dates and counts in section 9 of `docs/launch-checklist.md`.",
    "",
  );
  lines.push("## Languages", "");
  lines.push("| Language | Interface | Calculator strings | Categories & collections | Pay converter | Published | Calculators |");
  lines.push("| --- | --- | --- | --- | --- | --- | --- |");
  for (const locale of LOCALES) {
    const info = LOCALE_INFO[locale];
    const count = CALCULATORS.filter((c) => calculatorLocales(c).includes(locale)).length;
    lines.push(
      `| ${info.englishName} (${info.nativeName}, \`${locale}\`) | ${mark(MESSAGE_LOCALES.includes(locale))} | ${mark(CALC_COMMON[locale] !== undefined)} | ${mark(TAXONOMY[locale] !== undefined)} | ${mark(PAY_CONVERTER_TEXT[locale] !== undefined)} | ${mark(locale === "en" || isLocaleReady(locale))} | ${count} / ${CALCULATORS.length} |`,
    );
  }
  lines.push("");
  lines.push(`Published languages: ${readyLocales().map((l) => `\`${l}\``).join(", ")}.`, "");

  lines.push("## Calculators", "");
  lines.push(`| Calculator | ${others.map((l) => `\`${l}\``).join(" | ")} |`);
  lines.push(`| --- | ${others.map(() => "---").join(" | ")} |`);
  for (const def of [...CALCULATORS].sort((a, b) => a.title.localeCompare(b.title, "en"))) {
    const locales = calculatorLocales(def);
    lines.push(`| ${def.title} | ${others.map((l) => mark(locales.includes(l))).join(" | ")} |`);
  }
  lines.push("");

  const missing = others.flatMap((locale) => CALCULATORS.filter((c) => !calculatorLocales(c).includes(locale)).map((c) => `- \`${locale}\`: ${c.title}`));
  lines.push("## Untranslated pages", "");
  lines.push(missing.length === 0 ? "None. Every published calculator is available in every language." : missing.join("\n"));
  lines.push("");
  lines.push(
    "Calculators in the backlog (`docs/calculator-backlog.md`) are not published in any language yet, so they have no translated pages.",
    "",
  );

  const own = ALL_CONVERTERS.filter((c) => !c.calculatorSlug);
  lines.push("## Unit converters", "");
  lines.push(
    `${own.length} converter pages under \`/unit-converters/\` plus ${ALL_CONVERTERS.length - own.length} converters served by existing calculator pages (listed above).`,
    "A converter page exists in a language only when its full content, including a name for every unit, is translated.",
    "",
  );
  lines.push(`| Converter | ${others.map((l) => `\`${l}\``).join(" | ")} |`);
  lines.push(`| --- | ${others.map(() => "---").join(" | ")} |`);
  for (const spec of own) {
    const locales = converterLocales(spec);
    lines.push(`| ${localizeConverter(spec, "en")?.content.title ?? spec.id} | ${others.map((l) => mark(locales.includes(l))).join(" | ")} |`);
  }
  const missingConverters = others.flatMap((locale) => own.filter((c) => !converterLocales(c).includes(locale)).map((c) => `- \`${locale}\`: ${c.id}`));
  lines.push("", missingConverters.length === 0 ? "Every converter page is available in every language." : missingConverters.join("\n"), "");
  return lines.join("\n");
}


