import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { formatNumber } from "@/lib/format";

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

/** WHO adult BMI categories. */
export function bmiCategory(bmi: number): string {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Healthy weight";
  if (bmi < 30) return "Overweight";
  return "Obesity";
}

const metric = { field: "units", oneOf: ["metric"] } as const;
const imperial = { field: "units", oneOf: ["imperial"] } as const;

export const bmiEngine = defineEngine<BmiValues>({
  fields: [
    {
      id: "units",
      type: "select",
      label: "Units",
      options: [
        { value: "metric", label: "Metric (kg, cm)" },
        { value: "imperial", label: "Imperial (lb, ft, in)" },
      ],
      defaultValue: "metric",
    },
    { id: "weightKg", type: "number", label: "Weight", defaultValue: 70, min: 0, minExclusive: true, max: 700, suffix: "kg", visibleWhen: metric },
    { id: "heightCm", type: "number", label: "Height", defaultValue: 175, min: 0, minExclusive: true, max: 300, suffix: "cm", visibleWhen: metric },
    { id: "weightLb", type: "number", label: "Weight", defaultValue: 160, min: 0, minExclusive: true, max: 1500, suffix: "lb", visibleWhen: imperial },
    { id: "heightFt", type: "number", label: "Height (feet)", defaultValue: 5, min: 0, max: 9, suffix: "ft", visibleWhen: imperial },
    { id: "heightIn", type: "number", label: "Height (inches)", defaultValue: 10, min: 0, max: 11.99, suffix: "in", visibleWhen: imperial },
  ],
  validate: ({ units, heightFt, heightIn }): FieldErrors =>
    units === "imperial" && (heightFt ?? 0) * 12 + (heightIn ?? 0) <= 0 ? { heightIn: "Enter a height greater than 0." } : {},
  compute: (v) => {
    const imperialUnits = v.units === "imperial";
    const kg = imperialUnits ? (v.weightLb ?? 0) * KG_PER_LB : (v.weightKg ?? 0);
    const m = imperialUnits ? ((v.heightFt ?? 0) * 12 + (v.heightIn ?? 0)) * M_PER_IN : (v.heightCm ?? 0) / 100;
    const bmi = kg / (m * m);
    const [low, high] = [18.5 * m * m, 24.9 * m * m].map((w) => (imperialUnits ? w / KG_PER_LB : w));
    const unit = imperialUnits ? "lb" : "kg";
    return {
      primary: { label: "Body mass index", value: { kind: "number", value: bmi, decimals: 1 }, caption: `${bmiCategory(bmi)} (adult range).` },
      secondary: [
        { label: "Category", value: { kind: "text", text: bmiCategory(bmi) } },
        { label: "Healthy weight for this height", value: { kind: "text", text: `${formatNumber(low, 1)}–${formatNumber(high, 1)} ${unit}` } },
      ],
      notes: ["Adult categories: under 18.5 underweight, 18.5–24.9 healthy, 25–29.9 overweight, 30 or more obesity. BMI does not apply the same way to children, pregnancy or very muscular people."],
    };
  },
});
