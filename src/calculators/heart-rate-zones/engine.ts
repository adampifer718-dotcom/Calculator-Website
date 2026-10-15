import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import en, { type HeartRateZonesText } from "./text/en";

export type HeartRateZonesValues = { age: number; formula: string; measuredMax: number | null; resting: number | null; method: string };

/** Lower and upper bound of each training zone, as a fraction. */
export const ZONES = [
  [0.5, 0.6],
  [0.6, 0.7],
  [0.7, 0.8],
  [0.8, 0.9],
  [0.9, 1],
] as const;

/** American Heart Association target ranges, as a fraction of maximum heart rate. */
export const AHA = { moderate: [0.5, 0.7], vigorous: [0.7, 0.85] } as const;

/** Fox (220 − age) or Tanaka, Monahan & Seals 2001 (208 − 0.7 × age). */
export function estimatedMaxHr(age: number, formula: string): number {
  return formula === "tanaka" ? 208 - 0.7 * age : 220 - age;
}

/** Target heart rate at `fraction` of capacity; with a resting rate this is the Karvonen formula. */
export function targetHr(max: number, fraction: number, resting?: number | null): number {
  return resting === undefined || resting === null ? fraction * max : resting + fraction * (max - resting);
}

export function makeHeartRateZonesEngine(ctx: EngineContext<HeartRateZonesText>) {
  const t = ctx.text;
  const maxOf = (v: HeartRateZonesValues) => v.measuredMax ?? estimatedMaxHr(v.age, v.formula);
  const bpm = (low: number, high: number) => fill(t.bpmRange, { low: ctx.fmt.number(Math.round(low), 0), high: ctx.fmt.number(Math.round(high), 0) });
  const pct = (low: number, high: number) => fill(t.percentRange, { low: ctx.fmt.number(low * 100, 0), high: ctx.fmt.percent(high * 100, 0) });

  return defineEngine<HeartRateZonesValues>({
    locale: ctx.locale,
    fields: [
      { id: "age", type: "number", label: t.age, defaultValue: 40, min: 10, max: 100, integer: true, suffix: t.ageSuffix },
      { id: "formula", type: "select", label: t.formula, help: t.formulaHelp, options: (["fox", "tanaka"] as const).map((value) => ({ value, label: t.formulas[value] })), defaultValue: "fox" },
      { id: "measuredMax", type: "number", label: t.measuredMax, help: t.measuredMaxHelp, defaultValue: null, optional: true, min: 80, max: 250, suffix: "bpm" },
      { id: "resting", type: "number", label: t.resting, help: t.restingHelp, defaultValue: null, optional: true, min: 30, max: 120, suffix: "bpm" },
      {
        id: "method",
        type: "select",
        label: t.method,
        help: t.methodHelp,
        options: (["percentMax", "karvonen"] as const).map((value) => ({ value, label: t.methods[value] })),
        defaultValue: "percentMax",
      },
    ],
    validate: (values): FieldErrors => {
      if (values.method === "karvonen" && values.resting === null) return { resting: t.errors.restingRequired };
      const max = maxOf(values);
      if (values.resting !== null && values.resting >= max) return { resting: fill(t.errors.restingTooHigh, { max: ctx.fmt.number(max, 1) }) };
      return {};
    },
    compute: (values) => {
      const max = maxOf(values);
      const karvonen = values.method === "karvonen";
      const rest = karvonen ? values.resting : null;
      const measured = values.measuredMax !== null;
      const secondary: ResultItem[] = [
        { label: fill(t.ahaModerate, { range: pct(AHA.moderate[0], AHA.moderate[1]) }), value: { kind: "text", text: bpm(targetHr(max, AHA.moderate[0]), targetHr(max, AHA.moderate[1])) } },
        { label: fill(t.ahaVigorous, { range: pct(AHA.vigorous[0], AHA.vigorous[1]) }), value: { kind: "text", text: bpm(targetHr(max, AHA.vigorous[0]), targetHr(max, AHA.vigorous[1])) } },
      ];
      if (values.resting !== null) secondary.push({ label: t.reserve, value: { kind: "number", value: max - values.resting, decimals: 0, suffix: "bpm" } });
      const notes = [t.notes.aha];
      if (!karvonen && values.resting !== null) notes.push(t.notes.restingIgnored);
      notes.push(t.notes.estimate, t.notes.doctor);
      return {
        primary: {
          label: measured ? t.maxHrMeasured : t.maxHr,
          value: { kind: "number", value: max, decimals: 0, suffix: "bpm" },
          caption: measured ? t.captionMeasured : fill(t.captionFormula, { formula: t.formulas[values.formula === "tanaka" ? "tanaka" : "fox"], age: ctx.fmt.number(values.age, 0) }),
        },
        secondary,
        tables: [
          {
            caption: karvonen ? t.zonesCaptionKarvonen : t.zonesCaption,
            columns: [t.columns.zone, t.columns.intensity, t.columns.heartRate],
            rows: ZONES.map(([low, high], i) => ({
              label: t.zoneNames[i],
              cells: [
                { kind: "text", text: pct(low, high) },
                { kind: "text", text: bpm(targetHr(max, low, rest), targetHr(max, high, rest)) },
              ],
            })),
          },
        ],
        notes,
      };
    },
  });
}

export const heartRateZonesEngine = makeHeartRateZonesEngine(englishContext(en));
