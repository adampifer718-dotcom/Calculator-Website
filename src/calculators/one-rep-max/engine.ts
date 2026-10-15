import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import en, { type OneRepMaxText } from "./text/en";

export type OneRepMaxValues = { weight: number; unit: string; reps: number };

/** Epley: w × (1 + r/30), and exactly w for a single repetition. */
export const epley = (w: number, r: number) => (r <= 1 ? w : w * (1 + r / 30));
/** Brzycki (1993): w × 36 / (37 − r). */
export const brzycki = (w: number, r: number) => (w * 36) / (37 - r);
/** Lombardi: w × r^0.10. */
export const lombardi = (w: number, r: number) => w * r ** 0.1;

export function oneRepMax(w: number, r: number) {
  const e = epley(w, r);
  const b = brzycki(w, r);
  const l = lombardi(w, r);
  return { epley: e, brzycki: b, lombardi: l, average: (e + b + l) / 3 };
}

export const LOAD_PERCENTS = [95, 90, 85, 80, 75, 70, 65, 60] as const;

export function makeOneRepMaxEngine(ctx: EngineContext<OneRepMaxText>) {
  const t = ctx.text;
  return defineEngine<OneRepMaxValues>({
    locale: ctx.locale,
    fields: [
      { id: "weight", type: "number", label: t.weight, defaultValue: 100, min: 0, minExclusive: true, max: 2000 },
      {
        id: "unit",
        type: "select",
        label: t.unit,
        options: Object.entries(t.units).map(([value, label]) => ({ value, label })),
        defaultValue: "kg",
        display: "segmented",
      },
      { id: "reps", type: "number", label: t.reps, help: t.repsHelp, defaultValue: 5, min: 1, max: 12, integer: true },
    ],
    compute: ({ weight, unit, reps }) => {
      const u = unit === "lb" ? "lb" : "kg";
      const est = oneRepMax(weight, reps);
      const mass = (v: number) => ({ kind: "number" as const, value: v, decimals: 1, suffix: u });
      const notes = [reps === 1 ? t.notes.single : undefined, reps > 10 ? t.notes.highReps : undefined, t.notes.safety].filter(
        (n): n is string => n !== undefined,
      );
      return {
        primary: {
          label: t.estimate,
          value: mass(est.average),
          caption: fill(t.caption, { weight: `${ctx.fmt.number(weight, 2)} ${u}`, reps: plural(ctx, reps, t.repsCount) }),
        },
        secondary: [
          { label: t.epley, value: mass(est.epley) },
          { label: t.brzycki, value: mass(est.brzycki) },
          { label: t.lombardi, value: mass(est.lombardi) },
        ],
        tables: [
          {
            caption: t.tableCaption,
            columns: [t.tablePercent, t.tableLoad],
            rows: LOAD_PERCENTS.map((pct) => ({
              label: ctx.fmt.percent(pct, 0),
              cells: [mass((est.average * pct) / 100)],
            })),
          },
        ],
        notes,
      };
    },
  });
}

export const oneRepMaxEngine = makeOneRepMaxEngine(englishContext(en));
