import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { CONFIDENCE_LEVELS, criticalZ } from "@/lib/math/proportion";
import en, { type MarginOfErrorText } from "./text/en";

export type MarginOfErrorValues = { n: number; proportion: number; level: string; population: number | null };

/** Margin of error for a sample proportion `p` (a fraction), with the finite population correction when N > 1. */
export function marginOfError(n: number, p: number, levelPercent: number, population: number | null) {
  const z = criticalZ(levelPercent);
  const fpc = population !== null && population > 1 ? Math.sqrt((population - n) / (population - 1)) : 1;
  const standardError = Math.sqrt((p * (1 - p)) / n) * fpc;
  const margin = z * standardError;
  return { z, fpc, standardError, margin, lower: Math.max(0, p - margin), upper: Math.min(1, p + margin) };
}

export function makeMarginOfErrorEngine(ctx: EngineContext<MarginOfErrorText>) {
  const t = ctx.text;
  const pct = (fraction: number) => ctx.fmt.percent(fraction * 100, 2);
  return defineEngine<MarginOfErrorValues>({
    locale: ctx.locale,
    fields: [
      { id: "n", type: "number", label: t.n, help: t.nHelp, defaultValue: 1000, min: 1, integer: true },
      { id: "proportion", type: "number", label: t.proportion, help: t.proportionHelp, defaultValue: 50, min: 0, max: 100, suffix: "%" },
      { id: "level", type: "select", label: t.level, options: CONFIDENCE_LEVELS.map((value) => ({ value, label: t.levelOptions[value] })), defaultValue: "95" },
      { id: "population", type: "number", label: t.population, help: t.populationHelp, defaultValue: null, optional: true, min: 1, integer: true },
    ],
    validate: ({ n, population }): FieldErrors => (population !== null && population < n ? { population: fill(t.populationTooSmall, { n: ctx.fmt.number(n, 0) }) } : {}),
    compute: ({ n, proportion, level, population }) => {
      const p = proportion / 100;
      const m = marginOfError(n, p, Number(level), population);
      const notes = [t.meansNote];
      const yes = n * p;
      const no = n * (1 - p);
      if (yes < 10 || no < 10) notes.push(fill(t.weakApproximation, { yes: ctx.fmt.number(yes, 2), no: ctx.fmt.number(no, 2) }));
      if (m.fpc === 0) notes.push(t.census);
      if (m.margin > 0 && p - m.margin < 0) notes.push(fill(t.clipped, { bound: ctx.fmt.percent(0, 0) }));
      if (m.margin > 0 && p + m.margin > 1) notes.push(fill(t.clipped, { bound: ctx.fmt.percent(100, 0) }));
      return {
        primary: {
          label: t.margin,
          value: { kind: "percent", value: m.margin * 100, decimals: 2 },
          caption: fill(t.caption, { p: pct(p), moe: pct(m.margin), level: ctx.fmt.percent(Number(level), 0) }),
        },
        secondary: [
          { label: t.interval, value: { kind: "text", text: fill(t.intervalText, { lower: pct(m.lower), upper: pct(m.upper) }) } },
          { label: t.standardError, value: { kind: "percent", value: m.standardError * 100, decimals: 4 } },
          { label: t.critical, value: { kind: "number", value: m.z, decimals: 4 } },
          { label: t.correction, value: m.fpc === 1 && population === null ? { kind: "text", text: t.correctionNone } : { kind: "number", value: m.fpc, decimals: 4 } },
        ],
        notes,
      };
    },
  });
}

export const marginOfErrorEngine = makeMarginOfErrorEngine(englishContext(en));
