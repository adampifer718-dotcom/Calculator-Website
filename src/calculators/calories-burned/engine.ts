import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { POUND_KG } from "@/lib/math/units";
import en, { type CaloriesBurnedText } from "./text/en";

export type CaloriesBurnedValues = { activity: string; customMet: number | null; weight: number; weightUnit: string; hours: number; minutes: number };

/** MET values from the 2011 Compendium of Physical Activities (Ainsworth et al.), activity code in comments. */
export const ACTIVITY_METS = {
  walking: 3.5, // 17190
  brisk: 4.3, // 17200
  hiking: 6.0, // 17080
  run5: 8.3, // 12030
  run6: 9.8, // 12050
  cycleLeisure: 4.0, // 01010
  cycleModerate: 8.0, // 01030
  swimModerate: 5.8, // 18310
  swimVigorous: 9.8, // 18240
  weightsLight: 3.5, // 02054
  weightsVigorous: 6.0, // 02050
  yoga: 2.5, // 02150
  tennis: 7.3, // 15675
  soccer: 7.0, // 15610
  jumpRope: 11.8, // 15552
  gardening: 3.8, // 08245
} as const;
/** Accepted body weight range in kg (about 44–1,543 lb). */
export const WEIGHT_KG = [20, 700] as const;

export type Activity = keyof typeof ACTIVITY_METS;
const ACTIVITIES = Object.keys(ACTIVITY_METS) as Activity[];

/** Energy in kcal, using 1 MET ≈ 1 kcal per kg of body weight per hour. */
export function caloriesBurned(met: number, kg: number, hours: number): number {
  return met * kg * hours;
}

export function makeCaloriesBurnedEngine(ctx: EngineContext<CaloriesBurnedText>) {
  const t = ctx.text;
  const u = ctx.common.units;
  const metOf = (v: CaloriesBurnedValues) => (v.activity === "custom" ? (v.customMet ?? 0) : (ACTIVITY_METS[v.activity as Activity] ?? 0));
  return defineEngine<CaloriesBurnedValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "activity",
        type: "select",
        label: t.activity,
        help: t.activityHelp,
        options: [...ACTIVITIES, "custom" as const].map((value) => ({ value, label: t.activities[value] })),
        defaultValue: "brisk",
      },
      { id: "customMet", type: "number", label: t.customMet, help: t.customMetHelp, defaultValue: 5, min: 1, max: 25, suffix: "MET", visibleWhen: { field: "activity", oneOf: ["custom"] } },
      { id: "weight", type: "number", label: t.weight, defaultValue: 70, min: 0, minExclusive: true, max: 1500 },
      { id: "weightUnit", type: "select", label: t.weightUnit, options: (["kg", "lb"] as const).map((value) => ({ value, label: t.weightUnits[value] })), defaultValue: "kg", display: "segmented" },
      { id: "hours", type: "number", label: t.hours, defaultValue: 0, min: 0, max: 24, integer: true, suffix: u.h },
      { id: "minutes", type: "number", label: t.minutes, defaultValue: 45, min: 0, max: 59, integer: true, suffix: u.min },
    ],
    validate: ({ hours, minutes, weight, weightUnit }): FieldErrors => {
      const kg = weightUnit === "lb" ? weight * POUND_KG : weight;
      if (kg < WEIGHT_KG[0] || kg > WEIGHT_KG[1]) return { weight: t.weightRange };
      const total = hours * 60 + minutes;
      return total <= 0 ? { minutes: t.timeZero } : total > 24 * 60 ? { hours: t.timeMax } : {};
    },
    compute: (v) => {
      const met = metOf(v);
      const kg = v.weightUnit === "lb" ? v.weight * POUND_KG : v.weight;
      const h = v.hours + v.minutes / 60;
      const kcal = caloriesBurned(met, kg, h);
      return {
        primary: {
          label: t.calories,
          value: { kind: "number", value: kcal, decimals: 0, suffix: t.kcal },
          caption: fill(t.caption, { met: ctx.fmt.number(met, 2), kg: ctx.fmt.number(kg, 1), hours: ctx.fmt.number(h, 3) }),
        },
        secondary: [
          { label: t.kj, value: { kind: "number", value: kcal * 4.184, decimals: 0, suffix: "kJ" } },
          { label: t.perHour, value: { kind: "number", value: met * kg, decimals: 0, suffix: t.kcalHour } },
          { label: t.metUsed, value: { kind: "number", value: met, decimals: 2, suffix: "MET" } },
          { label: t.aboveRest, value: { kind: "number", value: caloriesBurned(met - 1, kg, h), decimals: 0, suffix: t.kcal } },
        ],
        notes: [t.notes.estimate, t.notes.gross],
      };
    },
  });
}

export const caloriesBurnedEngine = makeCaloriesBurnedEngine(englishContext(en));
