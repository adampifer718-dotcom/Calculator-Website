import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { CONFIDENCE_LEVELS, criticalZ } from "@/lib/math/proportion";
import en, { type SampleSizeText } from "./text/en";

export type SampleSizeValues = { level: string; margin: number; proportion: number; population: number | null };

/** Sample size for estimating a proportion; `margin` and `proportion` are fractions (0.05, 0.5). */
export function sampleSize(levelPercent: number, margin: number, proportion: number, population: number | null) {
  const z = criticalZ(levelPercent);
  const n0 = (z * z * proportion * (1 - proportion)) / (margin * margin);
  const adjusted = population === null ? n0 : n0 / (1 + (n0 - 1) / population);
  // The tiny tolerance keeps rounding noise (e.g. 385.0000000001) from adding a whole respondent.
  const up = (x: number) => Math.max(1, Math.ceil(x - 1e-9));
  return { z, n0, adjusted, n: up(adjusted), n0Rounded: up(n0) };
}

export function makeSampleSizeEngine(ctx: EngineContext<SampleSizeText>) {
  const t = ctx.text;
  return defineEngine<SampleSizeValues>({
    locale: ctx.locale,
    fields: [
      { id: "level", type: "select", label: t.level, help: t.levelHelp, options: CONFIDENCE_LEVELS.map((value) => ({ value, label: t.levelOptions[value] })), defaultValue: "95" },
      { id: "margin", type: "number", label: t.margin, help: t.marginHelp, defaultValue: 5, min: 0, minExclusive: true, max: 50, suffix: "%" },
      { id: "proportion", type: "number", label: t.proportion, help: t.proportionHelp, defaultValue: 50, min: 0, minExclusive: true, max: 100, suffix: "%" },
      { id: "population", type: "number", label: t.population, help: t.populationHelp, defaultValue: null, optional: true, min: 1, integer: true },
    ],
    validate: ({ proportion }): FieldErrors => (proportion >= 100 ? { proportion: t.proportionMax } : {}),
    compute: ({ level, margin, proportion, population }) => {
      const s = sampleSize(Number(level), margin / 100, proportion / 100, population);
      const notes = [t.responseNote];
      if (population !== null && s.n >= 0.9 * population) notes.push(t.wholePopulation);
      return {
        primary: {
          label: t.sampleSize,
          value: { kind: "number", value: s.n, decimals: 0 },
          caption: fill(t.caption, { level: ctx.fmt.percent(Number(level), 0), margin: ctx.fmt.percent(margin, 4) }),
        },
        secondary: [
          { label: t.infinite, value: { kind: "number", value: s.n0, decimals: 2 } },
          { label: t.infiniteRounded, value: { kind: "number", value: s.n0Rounded, decimals: 0 } },
          { label: t.critical, value: { kind: "number", value: s.z, decimals: 4 } },
          {
            label: t.correction,
            value: { kind: "text", text: population === null ? t.correctionNotApplied : fill(t.correctionApplied, { population: ctx.fmt.number(population, 0) }) },
          },
          ...(population === null ? [] : [{ label: t.share, value: { kind: "percent" as const, value: (s.n / population) * 100, decimals: 2 } }]),
        ],
        notes,
      };
    },
  });
}

export const sampleSizeEngine = makeSampleSizeEngine(englishContext(en));
