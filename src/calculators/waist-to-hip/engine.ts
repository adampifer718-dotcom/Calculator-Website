import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type WaistToHipText } from "./text/en";

export type WaistToHipValues = { unit: string; waist: number; hip: number; sex: string };

/**
 * WHO expert consultation (2008, report 2011): waist–hip ratio at or above
 * these values indicates substantially increased risk of metabolic complications.
 */
export const WHO_CUTOFF = { female: 0.85, male: 0.9 } as const;
type Sex = keyof typeof WHO_CUTOFF;

/** Ratios outside this range are almost certainly measurement or unit mistakes. */
export const PLAUSIBLE_RATIO = { min: 0.4, max: 2 } as const;

export function waistToHip(waist: number, hip: number): number {
  return waist / hip;
}

/** The ratio as displayed (two decimals), used for the comparison so the label matches the number shown. */
export function roundedRatio(ratio: number): number {
  return Math.round(ratio * 100 + 1e-9) / 100;
}

export function atOrAboveCutoff(ratio: number, sex: Sex): boolean {
  return roundedRatio(ratio) >= WHO_CUTOFF[sex];
}

export function makeWaistToHipEngine(ctx: EngineContext<WaistToHipText>) {
  const t = ctx.text;
  return defineEngine<WaistToHipValues>({
    locale: ctx.locale,
    fields: [
      { id: "unit", type: "select", label: t.unit, options: (["cm", "in"] as const).map((value) => ({ value, label: t.units[value] })), defaultValue: "cm", display: "segmented" },
      { id: "waist", type: "number", label: t.waist, help: t.waistHelp, defaultValue: 82, min: 0, minExclusive: true, max: 500 },
      { id: "hip", type: "number", label: t.hip, help: t.hipHelp, defaultValue: 100, min: 0, minExclusive: true, max: 500 },
      { id: "sex", type: "select", label: t.sex, help: t.sexHelp, options: (["female", "male"] as const).map((value) => ({ value, label: t.sexes[value] })), defaultValue: "female", display: "segmented" },
    ],
    validate: ({ waist, hip }): FieldErrors => {
      const ratio = waistToHip(waist, hip);
      return ratio < PLAUSIBLE_RATIO.min || ratio > PLAUSIBLE_RATIO.max ? { waist: fill(t.errors.implausible, { ratio: ctx.fmt.number(ratio, 2) }) } : {};
    },
    compute: ({ unit, waist, hip, sex }) => {
      const s: Sex = sex === "male" ? "male" : "female";
      const ratio = waistToHip(waist, hip);
      const cutoff = WHO_CUTOFF[s];
      const above = atOrAboveCutoff(ratio, s);
      const u = unit === "in" ? "in" : "cm";
      const vars = { cutoff: ctx.fmt.number(cutoff, 2), sex: t.sexNames[s] };
      return {
        primary: {
          label: t.ratio,
          value: { kind: "number", value: ratio, decimals: 2 },
          caption: fill(t.caption, { waist: `${ctx.fmt.number(waist, 2)} ${u}`, hip: `${ctx.fmt.number(hip, 2)} ${u}` }),
        },
        secondary: [
          { label: t.comparison, value: { kind: "text", text: above ? t.atOrAbove : t.below } },
          { label: fill(t.cutoff, { sex: t.sexNames[s] }), value: { kind: "number", value: cutoff, decimals: 2 } },
          { label: t.waistAtCutoff, value: { kind: "number", value: cutoff * hip, decimals: 1, suffix: u } },
        ],
        notes: [fill(above ? t.notes.above : t.notes.below, vars), t.notes.rounding, t.notes.advice],
      };
    },
  });
}

export const waistToHipEngine = makeWaistToHipEngine(englishContext(en));
