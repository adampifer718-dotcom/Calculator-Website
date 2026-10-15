import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type BmiText } from "./text/en";

export const KG_PER_LB = 0.45359237;
export const M_PER_IN = 0.0254;

export type BmiValues = {
  units: string;
  weightKg: number | null;
  heightCm: number | null;
  weightLb: number | null;
  heightFt: number | null;
  heightIn: number | null;
};

export type BmiCategory = "under" | "healthy" | "over" | "obese";

/** WHO adult BMI categories. */
export function bmiCategoryKey(bmi: number): BmiCategory {
  if (bmi < 18.5) return "under";
  if (bmi < 25) return "healthy";
  if (bmi < 30) return "over";
  return "obese";
}

/** English category name, kept for existing callers. */
export function bmiCategory(bmi: number): string {
  return en.categories[bmiCategoryKey(bmi)];
}

const metric = { field: "units", oneOf: ["metric"] } as const;
const imperial = { field: "units", oneOf: ["imperial"] } as const;

export function makeBmiEngine(ctx: EngineContext<BmiText>) {
  const t = ctx.text;
  return defineEngine<BmiValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "units",
        type: "select",
        label: t.units,
        options: [
          { value: "metric", label: t.unitOptions.metric },
          { value: "imperial", label: t.unitOptions.imperial },
        ],
        defaultValue: "metric",
      },
      { id: "weightKg", type: "number", label: t.weight, defaultValue: 70, min: 0, minExclusive: true, max: 700, suffix: "kg", visibleWhen: metric },
      { id: "heightCm", type: "number", label: t.height, defaultValue: 175, min: 0, minExclusive: true, max: 300, suffix: "cm", visibleWhen: metric },
      { id: "weightLb", type: "number", label: t.weight, defaultValue: 160, min: 0, minExclusive: true, max: 1500, suffix: "lb", visibleWhen: imperial },
      { id: "heightFt", type: "number", label: t.heightFt, defaultValue: 5, min: 0, max: 9, suffix: "ft", visibleWhen: imperial },
      { id: "heightIn", type: "number", label: t.heightIn, defaultValue: 10, min: 0, max: 11.99, suffix: "in", visibleWhen: imperial },
    ],
    validate: ({ units, heightFt, heightIn }): FieldErrors =>
      units === "imperial" && (heightFt ?? 0) * 12 + (heightIn ?? 0) <= 0 ? { heightIn: t.heightZero } : {},
    compute: (v) => {
      const imperialUnits = v.units === "imperial";
      const kg = imperialUnits ? (v.weightLb ?? 0) * KG_PER_LB : (v.weightKg ?? 0);
      const m = imperialUnits ? ((v.heightFt ?? 0) * 12 + (v.heightIn ?? 0)) * M_PER_IN : (v.heightCm ?? 0) / 100;
      const bmi = kg / (m * m);
      const [low, high] = [18.5 * m * m, 24.9 * m * m].map((w) => (imperialUnits ? w / KG_PER_LB : w));
      // Classify the value as displayed (one decimal), so "25.0" is never labelled healthy weight.
      const category = t.categories[bmiCategoryKey(Math.round(bmi * 10) / 10)];
      return {
        primary: { label: t.primary, value: { kind: "number", value: bmi, decimals: 1 }, caption: fill(t.caption, { category }) },
        secondary: [
          { label: t.category, value: { kind: "text", text: category } },
          { label: t.healthyRange, value: { kind: "text", text: fill(t.range, { low: ctx.fmt.number(low, 1), high: ctx.fmt.number(high, 1), unit: imperialUnits ? "lb" : "kg" }) } },
        ],
        notes: [t.note],
      };
    },
  });
}

export const bmiEngine = makeBmiEngine(englishContext(en));
