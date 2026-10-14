import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { POUND_KG } from "@/lib/math/units";

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

export const bmrEngine = defineEngine<BmrValues>({
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
    {
      id: "sex",
      type: "select",
      label: "Sex used in the equation",
      help: "The equation has separate constants for males and females.",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
      defaultValue: "male",
    },
    { id: "age", type: "number", label: "Age", defaultValue: 30, min: 18, max: 100, suffix: "years" },
    { id: "weightKg", type: "number", label: "Weight", defaultValue: 80, min: 0, minExclusive: true, max: 700, suffix: "kg", visibleWhen: metric },
    { id: "heightCm", type: "number", label: "Height", defaultValue: 180, min: 0, minExclusive: true, max: 300, suffix: "cm", visibleWhen: metric },
    { id: "weightLb", type: "number", label: "Weight", defaultValue: 176, min: 0, minExclusive: true, max: 1500, suffix: "lb", visibleWhen: imperial },
    { id: "heightFt", type: "number", label: "Height (feet)", defaultValue: 5, min: 0, max: 9, suffix: "ft", visibleWhen: imperial },
    { id: "heightIn", type: "number", label: "Height (inches)", defaultValue: 11, min: 0, max: 11.99, suffix: "in", visibleWhen: imperial },
  ],
  validate: ({ units, heightFt, heightIn }): FieldErrors =>
    units === "imperial" && (heightFt ?? 0) * 12 + (heightIn ?? 0) <= 0 ? { heightIn: "Enter a height greater than 0." } : {},
  compute: (v) => {
    const imperialUnits = v.units === "imperial";
    const kg = imperialUnits ? (v.weightLb ?? 0) * POUND_KG : (v.weightKg ?? 0);
    const cm = imperialUnits ? ((v.heightFt ?? 0) * 12 + (v.heightIn ?? 0)) * 2.54 : (v.heightCm ?? 0);
    const bmr = mifflinStJeor(v.sex === "female" ? "female" : "male", kg, cm, v.age);
    return {
      primary: { label: "Basal metabolic rate", value: { kind: "number", value: bmr, decimals: 0, suffix: "kcal/day" }, caption: "Estimated energy used at complete rest." },
      secondary: [{ label: "In kilojoules", value: { kind: "number", value: bmr * 4.184, decimals: 0, suffix: "kJ/day" } }],
      notes: ["An estimate for healthy adults. Individual results can differ by 10% or more; it is not a prescription for diet or treatment."],
    };
  },
});
