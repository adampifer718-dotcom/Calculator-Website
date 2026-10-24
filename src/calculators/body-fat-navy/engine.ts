import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import en, { type BodyFatText } from "./text/en";

export type BodyFatValues = {
  unit: string;
  sex: string;
  height: number;
  neck: number;
  waist: number;
  hip: number | null;
  weight: number | null;
  weightUnit: string;
};

export const CM_PER_IN = 2.54;

/** Hodgdon & Beckett (1984) US Navy equations, all lengths in inches. */
export function navyBodyFatMale(heightIn: number, neckIn: number, waistIn: number): number {
  return 86.01 * Math.log10(waistIn - neckIn) - 70.041 * Math.log10(heightIn) + 36.76;
}

export function navyBodyFatFemale(heightIn: number, neckIn: number, waistIn: number, hipIn: number): number {
  return 163.205 * Math.log10(waistIn + hipIn - neckIn) - 97.684 * Math.log10(heightIn) - 78.387;
}

/** Plausible measurement ranges per unit, to catch typing and unit mistakes. */
export const RANGES = {
  cm: { height: [100, 250], neck: [20, 80], waist: [40, 250], hip: [50, 250] },
  in: { height: [40, 98], neck: [8, 31], waist: [16, 98], hip: [20, 98] },
} as const;

/** Results outside this open interval are rejected; values near its edges get a reliability note. */
const RESULT_LIMITS = [0, 100] as const;
const RELIABLE = [4, 55] as const;

type Unit = keyof typeof RANGES;

export function makeBodyFatEngine(ctx: EngineContext<BodyFatText>) {
  const t = ctx.text;
  const female = { field: "sex", oneOf: ["female"] } as const;
  const unitOf = (v: BodyFatValues): Unit => (v.unit === "in" ? "in" : "cm");
  const inches = (v: BodyFatValues, x: number) => (unitOf(v) === "in" ? x : x / CM_PER_IN);
  const estimate = (v: BodyFatValues) =>
    v.sex === "female" ? navyBodyFatFemale(inches(v, v.height), inches(v, v.neck), inches(v, v.waist), inches(v, v.hip ?? 0)) : navyBodyFatMale(inches(v, v.height), inches(v, v.neck), inches(v, v.waist));
  const len = (v: BodyFatValues, x: number) => `${ctx.fmt.number(x, 1)} ${unitOf(v)}`;

  return defineEngine<BodyFatValues>({
    locale: ctx.locale,
    fields: [
      { id: "unit", type: "select", label: t.unit, options: (["cm", "in"] as const).map((value) => ({ value, label: t.units[value] })), defaultValue: "cm", display: "segmented" },
      { id: "sex", type: "select", label: t.sex, help: t.sexHelp, options: (["male", "female"] as const).map((value) => ({ value, label: t.sexes[value] })), defaultValue: "male", display: "segmented" },
      { id: "height", type: "number", label: t.height, help: t.heightHelp, defaultValue: 178, min: 0, minExclusive: true },
      { id: "neck", type: "number", label: t.neck, help: t.neckHelp, defaultValue: 38, min: 0, minExclusive: true },
      { id: "waist", type: "number", label: t.waist, help: t.waistHelp, defaultValue: 88, min: 0, minExclusive: true },
      { id: "hip", type: "number", label: t.hip, help: t.hipHelp, defaultValue: 100, min: 0, minExclusive: true, visibleWhen: female },
      { id: "weight", type: "number", label: t.weight, help: t.weightHelp, defaultValue: null, optional: true, min: 0, minExclusive: true, max: 1500 },
      { id: "weightUnit", type: "select", label: t.weightUnit, options: (["kg", "lb"] as const).map((value) => ({ value, label: t.weightUnits[value] })), defaultValue: "kg", display: "segmented" },
    ],
    validate: (v): FieldErrors => {
      const u = unitOf(v);
      const errors: FieldErrors = {};
      const ids = v.sex === "female" ? (["height", "neck", "waist", "hip"] as const) : (["height", "neck", "waist"] as const);
      for (const id of ids) {
        const [min, max] = RANGES[u][id];
        const x = v[id] ?? 0;
        if (x < min || x > max) errors[id] = fill(t.errors.range, { min: ctx.fmt.number(min, 0), max: ctx.fmt.number(max, 0), unit: u });
      }
      if (Object.keys(errors).length > 0) return errors;
      if (v.sex !== "female" && v.waist <= v.neck) return { waist: t.errors.waistNeck };
      if (v.sex === "female" && v.waist + (v.hip ?? 0) - v.neck <= 0) return { waist: t.errors.logArgument };
      const bf = estimate(v);
      if (!(bf > RESULT_LIMITS[0] && bf < RESULT_LIMITS[1])) return { waist: fill(t.errors.outOfRange, { value: ctx.fmt.percent(bf, 1) }) };
      return {};
    },
    compute: (v) => {
      const bf = estimate(v);
      const isFemale = v.sex === "female";
      const secondary: ResultItem[] = [{ label: t.method, value: { kind: "text", text: t.methodName } }];
      if (v.weight !== null) {
        const wu = v.weightUnit === "lb" ? "lb" : "kg";
        const fat = (v.weight * bf) / 100;
        secondary.push(
          { label: t.fatMass, value: { kind: "number", value: fat, decimals: 1, suffix: wu } },
          { label: t.leanMass, value: { kind: "number", value: v.weight - fat, decimals: 1, suffix: wu } },
        );
      }
      const notes = [t.notes.estimate, t.notes.measure, t.notes.noCategories];
      if (bf < RELIABLE[0] || bf > RELIABLE[1]) notes.unshift(t.notes.extreme);
      const vars = { method: t.methodShort, height: len(v, v.height), neck: len(v, v.neck), waist: len(v, v.waist), hip: len(v, v.hip ?? 0) };
      return {
        primary: { label: t.bodyFat, value: { kind: "percent", value: bf, decimals: 1 }, caption: fill(isFemale ? t.captionHip : t.caption, vars) },
        secondary,
        notes,
      };
    },
  });
}

export const bodyFatEngine = makeBodyFatEngine(englishContext(en));
