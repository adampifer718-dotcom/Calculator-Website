import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { POUND_KG } from "@/lib/math/units";
import en, { type BmrText } from "./text/en";

export type BmrValues = {
  units: string;
  sex: string;
  age: number;
  weightKg: number | null;
  heightCm: number | null;
  weightLb: number | null;
  heightFt: number | null;
  heightIn: number | null;
};

/** Mifflin–St Jeor resting energy expenditure, kcal/day (weight kg, height cm, age years). */
export function mifflinStJeor(sex: "male" | "female", weightKg: number, heightCm: number, age: number): number {
  return 10 * weightKg + 6.25 * heightCm - 5 * age + (sex === "male" ? 5 : -161);
}

const metric = { field: "units", oneOf: ["metric"] } as const;
const imperial = { field: "units", oneOf: ["imperial"] } as const;

export function makeBmrEngine(ctx: EngineContext<BmrText>) {
  const t = ctx.text;
  return defineEngine<BmrValues>({
    locale: ctx.locale,
    fields: [
      { id: "units", type: "select", label: t.units, options: (["metric", "imperial"] as const).map((value) => ({ value, label: t.unitOptions[value] })), defaultValue: "metric" },
      { id: "sex", type: "select", label: t.sex, help: t.sexHelp, options: (["male", "female"] as const).map((value) => ({ value, label: t.sexes[value] })), defaultValue: "male" },
      { id: "age", type: "number", label: t.age, defaultValue: 30, min: 18, max: 100, suffix: ctx.common.units.years },
      { id: "weightKg", type: "number", label: t.weight, defaultValue: 80, min: 0, minExclusive: true, max: 700, suffix: "kg", visibleWhen: metric },
      { id: "heightCm", type: "number", label: t.height, defaultValue: 180, min: 0, minExclusive: true, max: 300, suffix: "cm", visibleWhen: metric },
      { id: "weightLb", type: "number", label: t.weight, defaultValue: 176, min: 0, minExclusive: true, max: 1500, suffix: "lb", visibleWhen: imperial },
      { id: "heightFt", type: "number", label: t.heightFt, defaultValue: 5, min: 0, max: 9, suffix: "ft", visibleWhen: imperial },
      { id: "heightIn", type: "number", label: t.heightIn, defaultValue: 11, min: 0, max: 11.99, suffix: "in", visibleWhen: imperial },
    ],
    validate: ({ units, heightFt, heightIn }): FieldErrors => (units === "imperial" && (heightFt ?? 0) * 12 + (heightIn ?? 0) <= 0 ? { heightIn: t.heightZero } : {}),
    compute: (v) => {
      const imperialUnits = v.units === "imperial";
      const kg = imperialUnits ? (v.weightLb ?? 0) * POUND_KG : (v.weightKg ?? 0);
      const cm = imperialUnits ? ((v.heightFt ?? 0) * 12 + (v.heightIn ?? 0)) * 2.54 : (v.heightCm ?? 0);
      const bmr = mifflinStJeor(v.sex === "female" ? "female" : "male", kg, cm, v.age);
      return {
        primary: { label: t.bmr, value: { kind: "number", value: bmr, decimals: 0, suffix: t.kcalDay }, caption: t.caption },
        secondary: [{ label: t.kj, value: { kind: "number", value: bmr * 4.184, decimals: 0, suffix: t.kjDay } }],
        notes: [t.note],
      };
    },
  });
}

export const bmrEngine = makeBmrEngine(englishContext(en));
