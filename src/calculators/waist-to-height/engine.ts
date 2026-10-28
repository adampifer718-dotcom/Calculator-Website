import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type WaistToHeightText } from "./text/en";

export type WaistToHeightValues = { unit: string; waist: number; height: number };

/** NICE NG246 adult waist-to-height bands (lower edges). */
export const NICE_BANDS = { healthy: 0.4, increased: 0.5, high: 0.6 } as const;
export type Band = "below" | "healthy" | "increased" | "high";

/** Ratios outside this range are almost certainly a unit or measurement mistake. */
export const PLAUSIBLE_RATIO = { min: 0.25, max: 1.2 } as const;

export function waistToHeight(waist: number, height: number): number {
  return waist / height;
}

/** The ratio as displayed (two decimals), so the band always matches the number shown. */
export function roundedRatio(ratio: number): number {
  return Math.round(ratio * 100 + 1e-9) / 100;
}

export function bandOf(ratio: number): Band {
  const r = roundedRatio(ratio);
  if (r >= NICE_BANDS.high) return "high";
  if (r >= NICE_BANDS.increased) return "increased";
  if (r >= NICE_BANDS.healthy) return "healthy";
  return "below";
}

export function makeWaistToHeightEngine(ctx: EngineContext<WaistToHeightText>) {
  const t = ctx.text;
  return defineEngine<WaistToHeightValues>({
    locale: ctx.locale,
    fields: [
      { id: "unit", type: "select", label: t.unit, options: (["cm", "in"] as const).map((value) => ({ value, label: t.units[value] })), defaultValue: "cm", display: "segmented" },
      { id: "waist", type: "number", label: t.waist, help: t.waistHelp, defaultValue: 84, min: 0, minExclusive: true, max: 500 },
      { id: "height", type: "number", label: t.height, help: t.heightHelp, defaultValue: 172, min: 0, minExclusive: true, max: 400 },
    ],
    validate: ({ waist, height }): FieldErrors => {
      const ratio = waistToHeight(waist, height);
      return ratio < PLAUSIBLE_RATIO.min || ratio > PLAUSIBLE_RATIO.max ? { waist: fill(t.errors.implausible, { ratio: ctx.fmt.number(ratio, 2) }) } : {};
    },
    compute: ({ unit, waist, height }) => {
      const u = unit === "in" ? "in" : "cm";
      const ratio = waistToHeight(waist, height);
      const band = bandOf(ratio);
      const half = height * NICE_BANDS.increased;
      const notes = [t.notes.rounding];
      if (band === "below") notes.push(t.notes.below);
      notes.push(t.notes.scope, t.notes.reference);
      return {
        primary: {
          label: t.ratio,
          value: { kind: "number", value: ratio, decimals: 2 },
          caption: fill(t.caption, { waist: `${ctx.fmt.number(waist, 2)} ${u}`, height: `${ctx.fmt.number(height, 2)} ${u}` }),
        },
        secondary: [
          { label: t.band, value: { kind: "text", text: t.bands[band] } },
          { label: t.waistHalf, value: { kind: "number", value: half, decimals: 1, suffix: u } },
          { label: t.waistHigh, value: { kind: "number", value: height * NICE_BANDS.high, decimals: 1, suffix: u } },
          { label: t.difference, value: { kind: "number", value: waist - half, decimals: 1, suffix: u, signed: true } },
        ],
        notes,
      };
    },
  });
}

export const waistToHeightEngine = makeWaistToHeightEngine(englishContext(en));
