import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import { sciNumber } from "@/lib/math/sci-result";
import en, { type MomentumText } from "./text/en";

export type MomentumValues = {
  mode: string;
  solve: string;
  momentum: number | null;
  mass: number | null;
  massUnit: string;
  velocity: number | null;
  velocityUnit: string;
  force: number | null;
  forceUnit: string;
  duration: number | null;
  impulseMass: number | null;
};

type Unknown = "momentum" | "mass" | "velocity";
const UNKNOWNS = ["momentum", "mass", "velocity"] as const;

const LB_KG = 0.45359237; // exact (international pound)
const FOOT_M = 0.3048; // exact (international foot)
const STANDARD_GRAVITY = 9.80665;

/** Factors to SI units: kg, m/s, N, and kg·m/s. */
export const MASS_KG = { kg: 1, g: 0.001, lb: LB_KG, t: 1000 } as const;
export const VELOCITY_MS = { ms: 1, kmh: 1000 / 3600, mph: 1609.344 / 3600, fts: FOOT_M } as const;
export const FORCE_N = { N: 1, lbf: LB_KG * STANDARD_GRAVITY } as const;
/** One lb·ft/s in kg·m/s. */
export const LB_FT_S = LB_KG * FOOT_M;
const SYMBOL: Record<string, string> = { kg: "kg", g: "g", lb: "lb", t: "t", ms: "m/s", kmh: "km/h", mph: "mph", fts: "ft/s" };

const factor = <T extends Record<string, number>>(table: T, key: string) => (key in table ? table[key as keyof T] : 1);

export function makeMomentumEngine(ctx: EngineContext<MomentumText>) {
  const t = ctx.text;
  const options = <K extends string>(labels: Record<K, string>) => (Object.keys(labels) as K[]).map((value) => ({ value, label: labels[value] }));
  const momentumMode = { field: "mode", oneOf: ["momentum"] } as const;
  const impulseMode = { field: "mode", oneOf: ["impulse"] } as const;
  const unless = (solved: Unknown) => [momentumMode, { field: "solve", oneOf: UNKNOWNS.filter((s) => s !== solved) }];
  const inUnits = (si: number, table: Record<string, number>, skip?: string): ResultItem[] =>
    Object.entries(table)
      .filter(([unit]) => unit !== skip)
      .map(([unit, f]) => ({ label: fill(t.inUnit, { unit: SYMBOL[unit] }), value: sciNumber(ctx.fmt, si / f + 0, SYMBOL[unit]) }));

  return defineEngine<MomentumValues>({
    locale: ctx.locale,
    fields: [
      { id: "mode", type: "select", label: t.mode, options: options(t.modes), defaultValue: "momentum", display: "segmented" },
      { id: "solve", type: "select", label: t.solve, options: options(t.solveOptions), defaultValue: "momentum", visibleWhen: momentumMode },
      { id: "momentum", type: "number", label: t.momentum, help: t.momentumHelp, defaultValue: 30, suffix: "kg·m/s", visibleWhen: unless("momentum") },
      { id: "mass", type: "number", label: t.mass, defaultValue: 0.16, min: 0, minExclusive: true, visibleWhen: unless("mass") },
      { id: "impulseMass", type: "number", label: t.impulseMass, help: t.impulseMassHelp, defaultValue: null, optional: true, min: 0, minExclusive: true, visibleWhen: impulseMode },
      { id: "massUnit", type: "select", label: t.massUnit, help: t.unitHelp, options: options(t.massUnits), defaultValue: "kg" },
      { id: "velocity", type: "number", label: t.velocity, help: t.velocityHelp, defaultValue: 40, visibleWhen: unless("velocity") },
      { id: "velocityUnit", type: "select", label: t.velocityUnit, help: t.unitHelp, options: options(t.velocityUnits), defaultValue: "ms", visibleWhen: momentumMode },
      { id: "force", type: "number", label: t.force, help: t.forceHelp, defaultValue: 250, visibleWhen: impulseMode },
      { id: "forceUnit", type: "select", label: t.forceUnit, options: options(t.forceUnits), defaultValue: "N", visibleWhen: impulseMode },
      { id: "duration", type: "number", label: t.duration, defaultValue: 0.02, min: 0, minExclusive: true, suffix: "s", visibleWhen: impulseMode },
    ],
    validate: ({ mode, solve, momentum, velocity }): FieldErrors => {
      if (mode !== "momentum" || solve !== "mass") return {};
      if (velocity === 0) return { velocity: t.zeroVelocity };
      if (momentum === 0) return { momentum: t.zeroMomentum };
      if (Math.sign(momentum ?? 0) !== Math.sign(velocity ?? 0)) return { velocity: t.signMismatch };
      return {};
    },
    compute: (values) => {
      const mf = factor(MASS_KG, values.massUnit);
      const massKey = values.massUnit in MASS_KG ? values.massUnit : "kg";
      if (values.mode === "impulse") {
        const J = (values.force ?? 0) * factor(FORCE_N, values.forceUnit) * (values.duration ?? 0);
        const m = values.impulseMass === null ? null : values.impulseMass * mf;
        const secondary: ResultItem[] = [{ label: fill(t.inUnit, { unit: "lbf·s" }), value: sciNumber(ctx.fmt, J / FORCE_N.lbf, "lbf·s") }];
        if (m !== null) {
          const dv = J / m;
          secondary.push({ label: t.deltaV, value: sciNumber(ctx.fmt, dv + 0, "m/s") }, ...inUnits(dv, VELOCITY_MS, "ms"));
        }
        return { primary: { label: t.impulse, value: sciNumber(ctx.fmt, J + 0, "N·s") }, secondary, notes: [t.impulseNote, t.note] };
      }

      const key: Unknown = (UNKNOWNS as readonly string[]).includes(values.solve) ? (values.solve as Unknown) : "momentum";
      const vf = factor(VELOCITY_MS, values.velocityUnit);
      const velocityKey = values.velocityUnit in VELOCITY_MS ? values.velocityUnit : "ms";
      let p = values.momentum ?? 0;
      let m = (values.mass ?? 0) * mf;
      let v = (values.velocity ?? 0) * vf;
      if (key === "momentum") p = m * v;
      else if (key === "mass") m = p / v;
      else v = p / m;

      const primaryValue =
        key === "momentum" ? sciNumber(ctx.fmt, p + 0, "kg·m/s") : key === "mass" ? sciNumber(ctx.fmt, m / mf, SYMBOL[massKey]) : sciNumber(ctx.fmt, v / vf + 0, SYMBOL[velocityKey]);
      const conversions = key === "mass" ? inUnits(m, MASS_KG, massKey) : key === "velocity" ? inUnits(v, VELOCITY_MS, velocityKey) : [];
      return {
        primary: { label: t.results[key], value: primaryValue },
        secondary: [
          ...conversions,
          { label: fill(t.inUnit, { unit: "lb·ft/s" }), value: sciNumber(ctx.fmt, p / LB_FT_S + 0, "lb·ft/s") },
          { label: t.kineticEnergy, value: sciNumber(ctx.fmt, (p * p) / (2 * m), "J") },
        ],
        notes: [t.note],
      };
    },
  });
}

export const momentumEngine = makeMomentumEngine(englishContext(en));
