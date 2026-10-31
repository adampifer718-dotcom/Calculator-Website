import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import en, { type FertilizerText } from "./text/en";

export type FertilizerValues = {
  gradeN: number;
  gradeP: number;
  gradeK: number;
  nutrient: string;
  rate: number;
  rateUnit: string;
  area: number;
  areaUnit: string;
};

/** Standard atomic weights (CIAAW/IUPAC; O uses the conventional value 15.999). */
export const ATOMIC_WEIGHT = { P: 30.973762, K: 39.0983, O: 15.999 } as const;
/** Mass fraction of P in P₂O₅ (≈ 0.4364). */
export const P_PER_P2O5 = (2 * ATOMIC_WEIGHT.P) / (2 * ATOMIC_WEIGHT.P + 5 * ATOMIC_WEIGHT.O);
/** Mass fraction of K in K₂O (≈ 0.8301). */
export const K_PER_K2O = (2 * ATOMIC_WEIGHT.K) / (2 * ATOMIC_WEIGHT.K + ATOMIC_WEIGHT.O);

export const LB_KG = 0.45359237;
/** Square meters per area unit (international foot; acre = 4,046.8564224 m²). */
export const AREA_M2 = { ft2: 0.09290304, m2: 1, acre: 4046.8564224, ha: 10000 } as const;
/** Each rate unit as mass (kg) per area (m²), and whether it belongs to the imperial (lb) system. */
export const RATE_UNITS = {
  lb1000ft2: { kgPerM2: LB_KG / (1000 * AREA_M2.ft2), imperial: true },
  lbAcre: { kgPerM2: LB_KG / AREA_M2.acre, imperial: true },
  kgHa: { kgPerM2: 1 / AREA_M2.ha, imperial: false },
  gM2: { kgPerM2: 0.001, imperial: false },
} as const;
export const NUTRIENTS = ["N", "P2O5", "K2O"] as const;

type RateUnit = keyof typeof RATE_UNITS;
type AreaUnit = keyof typeof AREA_M2;
type Nutrient = (typeof NUTRIENTS)[number];

/** Product needed in kg = nutrient rate × area ÷ (grade % ÷ 100). */
export function productKg(rate: number, rateUnit: string, area: number, areaUnit: string, gradePercent: number): number {
  const nutrientKg = rate * (RATE_UNITS[rateUnit as RateUnit] ?? RATE_UNITS.kgHa).kgPerM2 * area * (AREA_M2[areaUnit as AreaUnit] ?? 1);
  return nutrientKg / (gradePercent / 100);
}

export function makeFertilizerEngine(ctx: EngineContext<FertilizerText>) {
  const t = ctx.text;
  const grade = (id: "gradeN" | "gradeP" | "gradeK", label: string, help: string) =>
    ({ id, type: "number", label, help, defaultValue: 10, min: 0, max: 100, suffix: "%" }) as const;
  const gradeOf = (v: FertilizerValues, n: string) => (n === "P2O5" ? v.gradeP : n === "K2O" ? v.gradeK : v.gradeN);
  return defineEngine<FertilizerValues>({
    locale: ctx.locale,
    fields: [
      grade("gradeN", t.gradeN, t.gradeNHelp),
      grade("gradeP", t.gradeP, t.gradePHelp),
      grade("gradeK", t.gradeK, t.gradeKHelp),
      { id: "nutrient", type: "select", label: t.nutrient, options: NUTRIENTS.map((value) => ({ value, label: t.nutrients[value] })), defaultValue: "N", display: "segmented" },
      { id: "rate", type: "number", label: t.rate, help: t.rateHelp, defaultValue: 1, min: 0, minExclusive: true, max: 1e5 },
      { id: "rateUnit", type: "select", label: t.rateUnit, options: (Object.keys(RATE_UNITS) as RateUnit[]).map((value) => ({ value, label: t.rateUnits[value] })), defaultValue: "lb1000ft2" },
      { id: "area", type: "number", label: t.area, defaultValue: 5000, min: 0, minExclusive: true, max: 1e9 },
      { id: "areaUnit", type: "select", label: t.areaUnit, options: (Object.keys(AREA_M2) as AreaUnit[]).map((value) => ({ value, label: t.areaUnits[value] })), defaultValue: "ft2" },
    ],
    validate: (v): FieldErrors => {
      if (v.gradeN + v.gradeP + v.gradeK > 100) return { gradeN: t.errors.gradeSum };
      if (gradeOf(v, v.nutrient) <= 0) return { [v.nutrient === "P2O5" ? "gradeP" : v.nutrient === "K2O" ? "gradeK" : "gradeN"]: t.errors.zeroGrade };
      return {};
    },
    compute: (v) => {
      const imperial = (RATE_UNITS[v.rateUnit as RateUnit] ?? RATE_UNITS.kgHa).imperial;
      const unit = imperial ? "lb" : "kg";
      const toOut = (kg: number) => (imperial ? kg / LB_KG : kg);
      const g = gradeOf(v, v.nutrient);
      const kg = productKg(v.rate, v.rateUnit, v.area, v.areaUnit, g);
      const product = toOut(kg);
      const mass = (value: number, decimals = 2) => ({ kind: "number" as const, value, decimals, suffix: unit });
      const n = (product * v.gradeN) / 100;
      const p2o5 = (product * v.gradeP) / 100;
      const k2o = (product * v.gradeK) / 100;
      const label = `${ctx.fmt.number(v.gradeN, 2)}-${ctx.fmt.number(v.gradeP, 2)}-${ctx.fmt.number(v.gradeK, 2)}`;
      const secondary: ResultItem[] = [
        { label: t.productOther, value: imperial ? { kind: "number", value: kg, decimals: 2, suffix: "kg" } : { kind: "number", value: kg / LB_KG, decimals: 2, suffix: "lb" } },
        { label: t.productRate, value: { kind: "number", value: v.rate / (g / 100), decimals: 2, suffix: t.rateUnits[v.rateUnit as RateUnit] ?? "" } },
        { label: t.applied.N, value: mass(n) },
        { label: t.applied.P2O5, value: mass(p2o5) },
        { label: t.applied.K2O, value: mass(k2o) },
        { label: t.applied.P, value: mass(p2o5 * P_PER_P2O5) },
        { label: t.applied.K, value: mass(k2o * K_PER_K2O) },
      ];
      return {
        primary: {
          label: t.product,
          value: mass(product),
          caption: fill(t.caption, {
            rate: `${ctx.fmt.number(v.rate, 4)} ${t.rateUnits[v.rateUnit as RateUnit] ?? ""}`,
            nutrient: t.nutrients[v.nutrient as Nutrient] ?? v.nutrient,
            grade: ctx.fmt.percent(g, 2),
            label,
            area: `${ctx.fmt.number(v.area, 4)} ${t.areaSymbols[v.areaUnit as AreaUnit] ?? ""}`,
          }),
        },
        secondary,
        notes: [t.notes.others, fill(t.notes.elemental, { p: ctx.fmt.number(P_PER_P2O5, 4), k: ctx.fmt.number(K_PER_K2O, 4) })],
      };
    },
  });
}

export const fertilizerEngine = makeFertilizerEngine(englishContext(en));
