import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { mifflinStJeor } from "@/calculators/bmr/engine";
import { POUND_KG } from "@/lib/math/units";
import en, { type TdeeText } from "./text/en";

export type TdeeValues = {
  units: string;
  sex: string;
  age: number;
  weightKg: number | null;
  heightCm: number | null;
  weightLb: number | null;
  heightFt: number | null;
  heightIn: number | null;
  activity: string;
};

/** Commonly used activity multipliers (physical activity level) applied to BMR. Conventions, not measurements. */
export const ACTIVITY_FACTORS = { sedentary: 1.2, light: 1.375, moderate: 1.55, very: 1.725, extra: 1.9 } as const;
export type ActivityLevel = keyof typeof ACTIVITY_FACTORS;
const LEVELS = Object.keys(ACTIVITY_FACTORS) as ActivityLevel[];

/** Rough rule of thumb: about 7,700 kcal per kg of body weight change. */
export const KCAL_PER_KG = 7700;
/** Daily energy change for 0.5 kg per week under that rule: 0.5 × 7,700 / 7 = 550 kcal. */
export const HALF_KG_WEEK_KCAL_DAY = (0.5 * KCAL_PER_KG) / 7;
export const KJ_PER_KCAL = 4.184;

export function tdee(bmr: number, level: ActivityLevel): number {
  return bmr * ACTIVITY_FACTORS[level];
}

const metric = { field: "units", oneOf: ["metric"] } as const;
const imperial = { field: "units", oneOf: ["imperial"] } as const;

export function makeTdeeEngine(ctx: EngineContext<TdeeText>) {
  const t = ctx.text;
  return defineEngine<TdeeValues>({
    locale: ctx.locale,
    fields: [
      { id: "units", type: "select", label: t.units, options: (["metric", "imperial"] as const).map((value) => ({ value, label: t.unitOptions[value] })), defaultValue: "metric" },
      { id: "sex", type: "select", label: t.sex, help: t.sexHelp, options: (["male", "female"] as const).map((value) => ({ value, label: t.sexes[value] })), defaultValue: "female" },
      { id: "age", type: "number", label: t.age, defaultValue: 35, min: 18, max: 100, suffix: ctx.common.units.years },
      { id: "weightKg", type: "number", label: t.weight, defaultValue: 68, min: 20, max: 700, suffix: "kg", visibleWhen: metric },
      { id: "heightCm", type: "number", label: t.height, defaultValue: 168, min: 100, max: 300, suffix: "cm", visibleWhen: metric },
      { id: "weightLb", type: "number", label: t.weight, defaultValue: 150, min: 44, max: 1500, suffix: "lb", visibleWhen: imperial },
      { id: "heightFt", type: "number", label: t.heightFt, defaultValue: 5, min: 3, max: 9, suffix: "ft", visibleWhen: imperial },
      { id: "heightIn", type: "number", label: t.heightIn, defaultValue: 6, min: 0, max: 11.99, suffix: "in", visibleWhen: imperial },
      { id: "activity", type: "select", label: t.activity, help: t.activityHelp, options: LEVELS.map((value) => ({ value, label: t.activities[value] })), defaultValue: "moderate" },
    ],
    validate: ({ units, heightFt, heightIn }): FieldErrors => (units === "imperial" && (heightFt ?? 0) * 12 + (heightIn ?? 0) <= 0 ? { heightIn: t.heightZero } : {}),
    compute: (v) => {
      const imperialUnits = v.units === "imperial";
      const kg = imperialUnits ? (v.weightLb ?? 0) * POUND_KG : (v.weightKg ?? 0);
      const cm = imperialUnits ? ((v.heightFt ?? 0) * 12 + (v.heightIn ?? 0)) * 2.54 : (v.heightCm ?? 0);
      const bmr = mifflinStJeor(v.sex === "female" ? "female" : "male", kg, cm, v.age);
      const level: ActivityLevel = (LEVELS as string[]).includes(v.activity) ? (v.activity as ActivityLevel) : "moderate";
      const total = tdee(bmr, level);
      const lose = total - HALF_KG_WEEK_KCAL_DAY;
      const notes = [t.notes.estimate, t.notes.rule];
      if (lose < bmr) notes.push(t.notes.belowBmr);
      return {
        primary: {
          label: t.tdee,
          value: { kind: "number", value: total, decimals: 0, suffix: t.kcalDay },
          caption: fill(t.caption, { bmr: ctx.fmt.number(bmr, 0), factor: ctx.fmt.number(ACTIVITY_FACTORS[level], 3) }),
        },
        secondary: [
          { label: t.bmr, value: { kind: "number", value: bmr, decimals: 0, suffix: t.kcalDay } },
          { label: t.kj, value: { kind: "number", value: total * KJ_PER_KCAL, decimals: 0, suffix: t.kjDay } },
          { label: t.multiplier, value: { kind: "number", value: ACTIVITY_FACTORS[level], decimals: 3 } },
          { label: t.lose, value: { kind: "number", value: lose, decimals: 0, suffix: t.kcalDay } },
          { label: t.gain, value: { kind: "number", value: total + HALF_KG_WEEK_KCAL_DAY, decimals: 0, suffix: t.kcalDay } },
        ],
        tables: [
          {
            caption: t.table.caption,
            columns: [t.table.level, t.table.factor, t.table.kcal, t.table.kj],
            rows: LEVELS.map((l) => ({
              label: t.activityShort[l],
              highlight: l === level,
              cells: [
                { kind: "number", value: ACTIVITY_FACTORS[l], decimals: 3 },
                { kind: "number", value: tdee(bmr, l), decimals: 0 },
                { kind: "number", value: tdee(bmr, l) * KJ_PER_KCAL, decimals: 0 },
              ],
            })),
          },
        ],
        notes,
      };
    },
  });
}

export const tdeeEngine = makeTdeeEngine(englishContext(en));
