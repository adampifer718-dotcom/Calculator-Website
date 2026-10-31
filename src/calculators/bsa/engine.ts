import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { POUND_KG } from "@/lib/math/units";
import en, { type BsaText } from "./text/en";

export type BsaValues = { weight: number; weightUnit: string; height: number; heightUnit: string };

/** 1 ft² = 0.3048² m² exactly. */
export const SQUARE_FOOT_M2 = 0.09290304;
export const INCH_CM = 2.54;

/** Plausible ranges in kg and cm (premature infants up to very large adults). */
export const WEIGHT_KG = { min: 0.5, max: 500 } as const;
export const HEIGHT_CM = { min: 30, max: 260 } as const;

/** Body surface area formulas: weight in kg, height in cm, result in m². */
export const BSA_FORMULAS = {
  mosteller: (w: number, h: number) => Math.sqrt((h * w) / 3600),
  duBois: (w: number, h: number) => 0.007184 * w ** 0.425 * h ** 0.725,
  haycock: (w: number, h: number) => 0.024265 * w ** 0.5378 * h ** 0.3964,
  gehanGeorge: (w: number, h: number) => 0.0235 * w ** 0.51456 * h ** 0.42246,
} as const;
export type BsaFormula = keyof typeof BSA_FORMULAS;
const FORMULAS = Object.keys(BSA_FORMULAS) as BsaFormula[];

const toKg = (weight: number, unit: string) => (unit === "lb" ? weight * POUND_KG : weight);
const toCm = (height: number, unit: string) => (unit === "in" ? height * INCH_CM : height);

export function makeBsaEngine(ctx: EngineContext<BsaText>) {
  const t = ctx.text;
  const range = (min: number, max: number, unit: string, toUnit: (x: number) => number) =>
    fill(t.errors[unit === "kg" || unit === "lb" ? "weightRange" : "heightRange"], {
      min: `${ctx.fmt.number(toUnit(min), 1)} ${unit}`,
      max: `${ctx.fmt.number(toUnit(max), 0)} ${unit}`,
    });
  return defineEngine<BsaValues>({
    locale: ctx.locale,
    fields: [
      { id: "weight", type: "number", label: t.weight, defaultValue: 70, min: 0, minExclusive: true, max: 1500 },
      { id: "weightUnit", type: "select", label: t.weightUnit, options: (["kg", "lb"] as const).map((value) => ({ value, label: t.weightUnits[value] })), defaultValue: "kg", display: "segmented" },
      { id: "height", type: "number", label: t.height, defaultValue: 175, min: 0, minExclusive: true, max: 1000 },
      { id: "heightUnit", type: "select", label: t.heightUnit, options: (["cm", "in"] as const).map((value) => ({ value, label: t.heightUnits[value] })), defaultValue: "cm", display: "segmented" },
    ],
    validate: ({ weight, weightUnit, height, heightUnit }): FieldErrors => {
      const errors: FieldErrors = {};
      const kg = toKg(weight, weightUnit);
      const cm = toCm(height, heightUnit);
      const lb = weightUnit === "lb";
      const inch = heightUnit === "in";
      if (kg < WEIGHT_KG.min || kg > WEIGHT_KG.max) errors.weight = range(WEIGHT_KG.min, WEIGHT_KG.max, lb ? "lb" : "kg", (x) => (lb ? x / POUND_KG : x));
      if (cm < HEIGHT_CM.min || cm > HEIGHT_CM.max) errors.height = range(HEIGHT_CM.min, HEIGHT_CM.max, inch ? "in" : "cm", (x) => (inch ? x / INCH_CM : x));
      return errors;
    },
    compute: ({ weight, weightUnit, height, heightUnit }) => {
      const kg = toKg(weight, weightUnit);
      const cm = toCm(height, heightUnit);
      const values = FORMULAS.map((f) => BSA_FORMULAS[f](kg, cm));
      const mosteller = values[0];
      return {
        primary: {
          label: t.bsa,
          value: { kind: "number", value: mosteller, decimals: 2, suffix: "m²" },
          caption: fill(t.caption, { height: ctx.fmt.number(cm, 1), weight: ctx.fmt.number(kg, 1) }),
        },
        secondary: [
          { label: t.bsaFt, value: { kind: "number", value: mosteller / SQUARE_FOOT_M2, decimals: 2, suffix: "ft²" } },
          { label: t.spread, value: { kind: "number", value: Math.max(...values) - Math.min(...values), decimals: 3, suffix: "m²" } },
        ],
        tables: [
          {
            caption: t.table.caption,
            columns: [t.table.formula, t.table.m2, t.table.ft2],
            rows: FORMULAS.map((f, i) => ({
              label: t.formulas[f],
              highlight: f === "mosteller",
              cells: [
                { kind: "number", value: values[i], decimals: 3 },
                { kind: "number", value: values[i] / SQUARE_FOOT_M2, decimals: 2 },
              ],
            })),
          },
        ],
        notes: [t.notes.estimate, t.notes.dosing],
      };
    },
  });
}

export const bsaEngine = makeBsaEngine(englishContext(en));
