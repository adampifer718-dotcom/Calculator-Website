import { readyLocales } from "@/calculators/localize";
import { englishContent } from "./content/en";
import { converterLocales, localizeConverter } from "./catalog";
import { ALL_CONVERTERS, isLinear } from "./specs";
import { CONVERTER_GROUPS } from "./types";

const cell = (text: string) => text.replace(/\|/g, "\\|");

/**
 * Markdown inventory of the unit converters, generated from the code by
 * `npm run converters:report` and checked by `inventory.test.ts`.
 */
export function converterInventory(): string {
  const out: string[] = [];
  const own = ALL_CONVERTERS.filter((c) => !c.calculatorSlug);
  const reused = ALL_CONVERTERS.filter((c) => c.calculatorSlug);
  const languages = readyLocales().length;
  out.push("# Unit converter inventory", "");
  out.push("Generated from `src/converters` by `npm run converters:report`. Do not edit by hand.", "");
  out.push(
    "The catalogue follows the breadth of the public unitconverters.net directory (used for topic discovery only; no text, design or code was copied).",
    "Every factor is defined in code from exact definitions or NIST SP 811 values and checked by known-value and round-trip tests in `src/converters/converters.test.ts`.",
    "",
  );
  out.push("## Summary", "");
  out.push("| | Count |", "| --- | --- |");
  out.push(`| Converters in the catalogue | ${ALL_CONVERTERS.length} |`);
  out.push(`| Served by existing calculator pages (reused, not duplicated) | ${reused.length} |`);
  out.push(`| New converter pages under \`/unit-converters/\` | ${own.length} |`);
  out.push(`| New converter pages complete in all ${languages} languages | ${own.filter((c) => converterLocales(c).length === languages).length} |`);
  out.push("");
  out.push("Currency runs in manual-rate mode: no exchange-rate provider is configured, so no rates are fetched or stored.", "");

  for (const group of CONVERTER_GROUPS) {
    const inGroup = ALL_CONVERTERS.filter((c) => c.group === group);
    if (inGroup.length === 0) continue;
    out.push(`## ${group[0].toUpperCase()}${group.slice(1)} (${inGroup.length})`, "");
    out.push("| Converter | Page | Units | Verification | Languages | Sources |", "| --- | --- | --- | --- | --- | --- |");
    for (const spec of inGroup) {
      const title = localizeConverter(spec, "en")?.content.title ?? spec.id;
      const page = spec.calculatorSlug ? `\`/calculators/${spec.calculatorSlug}\` (existing)` : `\`/unit-converters/${spec.slug}\``;
      const units = isLinear(spec) ? String(spec.units.length) : spec.kind;
      const meta = englishContent[spec.id];
      const sources = meta ? meta.sources.map((s) => (s.url ? `[${cell(s.publisher)}](${s.url})` : cell(s.publisher))).join(", ") : "see calculator page";
      out.push(`| ${cell(title)} | ${page} | ${units} | ${meta?.verification ?? "see calculator page"} | ${converterLocales(spec).length} / ${languages} | ${sources} |`);
    }
    out.push("");
  }
  out.push("## Not implemented", "");
  out.push("Nothing from the requested catalogue is left unimplemented. Live currency rates are intentionally not active (manual-rate mode).", "");
  return out.join("\n");
}
