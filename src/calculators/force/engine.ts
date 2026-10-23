import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import { sciNumber } from "@/lib/math/sci-result";
import en, { type ForceText } from "./text/en";

export type ForceValues = {
  solve: string;
  force: number | null;
  forceUnit: string;
  mass: number | null;
  massUnit: string;
  acceleration: number | null;
  accelerationUnit: string;
};

type Unknown = "force" | "mass" | "acceleration";
const UNKNOWNS = ["force", "mass", "acceleration"] as const;

/** Standard acceleration of gravity, exact by definition. */
export const STANDARD_GRAVITY = 9.80665;
const LB_KG = 0.45359237; // exact (international pound)

/** Factors to SI units: N, kg and m/s². */
export const FORCE_N = { N: 1, kN: 1000, lbf: LB_KG * STANDARD_GRAVITY, dyn: 1e-5 } as const; // lbf = 4.4482216152605 N exactly
export const MASS_KG = { kg: 1, g: 0.001, lb: LB_KG, t: 1000 } as const;
export const ACCELERATION_MS2 = { ms2: 1, fts2: 0.3048, g: STANDARD_GRAVITY } as const;
/** Display symbols; "g" is grams for mass and multiples of standard gravity for acceleration. */
const SYMBOL: Record<string, string> = { N: "N", kN: "kN", lbf: "lbf", dyn: "dyn", kg: "kg", g: "g", lb: "lb", t: "t", ms2: "m/s²", fts2: "ft/s²" };

const unless = (solved: Unknown) => ({ field: "solve", oneOf: UNKNOWNS.filter((s) => s !== solved) });
const factor = <T extends Record<string, number>>(table: T, key: string) => (key in table ? table[key as keyof T] : 1);

export function makeForceEngine(ctx: EngineContext<ForceText>) {
  const t = ctx.text;
  const options = <K extends string>(labels: Record<K, string>) => (Object.keys(labels) as K[]).map((value) => ({ value, label: labels[value] }));
  return defineEngine<ForceValues>({
    locale: ctx.locale,
    fields: [
      { id: "solve", type: "select", label: t.solve, options: options(t.solveOptions), defaultValue: "force", display: "segmented" },
      { id: "force", type: "number", label: t.force, help: t.forceHelp, defaultValue: 500, visibleWhen: unless("force") },
      { id: "forceUnit", type: "select", label: t.forceUnit, help: t.unitHelp, options: options(t.forceUnits), defaultValue: "N" },
      { id: "mass", type: "number", label: t.mass, defaultValue: 80, min: 0, minExclusive: true, visibleWhen: unless("mass") },
      { id: "massUnit", type: "select", label: t.massUnit, help: t.unitHelp, options: options(t.massUnits), defaultValue: "kg" },
      { id: "acceleration", type: "number", label: t.acceleration, help: t.accelerationHelp, defaultValue: 2.5, visibleWhen: unless("acceleration") },
      { id: "accelerationUnit", type: "select", label: t.accelerationUnit, help: t.unitHelp, options: options(t.accelerationUnits), defaultValue: "ms2" },
    ],
    validate: ({ solve, force, acceleration }): FieldErrors => {
      if (solve !== "mass") return {};
      if (acceleration === 0) return { acceleration: t.zeroAcceleration };
      if (force === 0) return { force: t.zeroForce };
      if (Math.sign(force ?? 0) !== Math.sign(acceleration ?? 0)) return { acceleration: t.signMismatch };
      return {};
    },
    compute: ({ solve, force, forceUnit, mass, massUnit, acceleration, accelerationUnit }) => {
      const key: Unknown = (UNKNOWNS as readonly string[]).includes(solve) ? (solve as Unknown) : "force";
      const ff = factor(FORCE_N, forceUnit);
      const mf = factor(MASS_KG, massUnit);
      const af = factor(ACCELERATION_MS2, accelerationUnit);
      let F = (force ?? 0) * ff;
      let m = (mass ?? 0) * mf;
      let a = (acceleration ?? 0) * af;
      if (key === "force") F = m * a;
      else if (key === "mass") m = F / a;
      else a = F / m;

      const table = key === "force" ? FORCE_N : key === "mass" ? MASS_KG : ACCELERATION_MS2;
      const selected = key === "force" ? forceUnit : key === "mass" ? massUnit : accelerationUnit;
      const si = key === "force" ? F : key === "mass" ? m : a;
      const selectedKey = selected in table ? selected : Object.keys(table)[0];
      const conversions: ResultItem[] = Object.entries(table)
        .filter(([unit]) => unit !== selectedKey)
        .map(([unit, f]) => ({ label: fill(t.inUnit, { unit: SYMBOL[unit] }), value: sciNumber(ctx.fmt, si / f + 0, SYMBOL[unit]) }));
      const weightKg = Math.abs(F) / STANDARD_GRAVITY;
      return {
        primary: { label: t.results[key], value: sciNumber(ctx.fmt, si / factor(table, selectedKey) + 0, SYMBOL[selectedKey]) },
        secondary: [
          ...conversions,
          { label: t.weightKg, value: sciNumber(ctx.fmt, weightKg, "kg") },
          { label: t.weightLb, value: sciNumber(ctx.fmt, weightKg / LB_KG, "lb") },
        ],
        notes: [t.weightNote, t.note],
      };
    },
  });
}

export const forceEngine = makeForceEngine(englishContext(en));
