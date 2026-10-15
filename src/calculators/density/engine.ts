import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type ResultItem } from "@/calculators/framework/types";
import { sciNumber } from "@/lib/math/sci-result";
import en, { type DensityText } from "./text/en";

export type DensityValues = {
  solve: string;
  mass: number | null;
  massUnit: string;
  volume: number | null;
  volumeUnit: string;
  density: number | null;
  densityUnit: string;
};

type Unknown = "density" | "mass" | "volume";
const UNKNOWNS = ["density", "mass", "volume"] as const;

const LB_KG = 0.45359237; // exact (international pound)
const FT3_M3 = 0.028316846592; // (0.3048 m)³, exact

/** Factors to SI base units: kg, m³ and kg/m³. */
export const MASS_KG = { g: 0.001, kg: 1, lb: LB_KG } as const;
export const VOLUME_M3 = { cm3: 1e-6, L: 0.001, m3: 1, ft3: FT3_M3 } as const;
export const DENSITY_KGM3 = { gcm3: 1000, kgm3: 1, lbft3: LB_KG / FT3_M3 } as const;
const SYMBOL: Record<string, string> = { g: "g", kg: "kg", lb: "lb", cm3: "cm³", L: "L", m3: "m³", ft3: "ft³", gcm3: "g/cm³", kgm3: "kg/m³", lbft3: "lb/ft³" };

const positive = { min: 0, minExclusive: true } as const;
const unless = (solved: Unknown) => ({ field: "solve", oneOf: UNKNOWNS.filter((s) => s !== solved) });
const factor = <T extends Record<string, number>>(table: T, key: string) => (key in table ? table[key as keyof T] : 1);

export function makeDensityEngine(ctx: EngineContext<DensityText>) {
  const t = ctx.text;
  const options = <K extends string>(labels: Record<K, string>) => (Object.keys(labels) as K[]).map((value) => ({ value, label: labels[value] }));
  return defineEngine<DensityValues>({
    locale: ctx.locale,
    fields: [
      { id: "solve", type: "select", label: t.solve, options: options(t.solveOptions), defaultValue: "density", display: "segmented" },
      { id: "mass", type: "number", label: t.mass, defaultValue: 540, ...positive, visibleWhen: unless("mass") },
      { id: "massUnit", type: "select", label: t.massUnit, help: t.unitHelp, options: options(t.massUnits), defaultValue: "g" },
      { id: "volume", type: "number", label: t.volume, defaultValue: 200, ...positive, visibleWhen: unless("volume") },
      { id: "volumeUnit", type: "select", label: t.volumeUnit, help: t.unitHelp, options: options(t.volumeUnits), defaultValue: "cm3" },
      { id: "density", type: "number", label: t.density, defaultValue: 2.7, ...positive, visibleWhen: unless("density") },
      { id: "densityUnit", type: "select", label: t.densityUnit, help: t.unitHelp, options: options(t.densityUnits), defaultValue: "gcm3" },
    ],
    compute: ({ solve, mass, massUnit, volume, volumeUnit, density, densityUnit }) => {
      const key: Unknown = (UNKNOWNS as readonly string[]).includes(solve) ? (solve as Unknown) : "density";
      const mf = factor(MASS_KG, massUnit);
      const vf = factor(VOLUME_M3, volumeUnit);
      const df = factor(DENSITY_KGM3, densityUnit);
      let m = (mass ?? 0) * mf;
      let v = (volume ?? 0) * vf;
      let rho = (density ?? 0) * df;
      if (key === "density") rho = m / v;
      else if (key === "mass") m = rho * v;
      else v = m / rho;

      const inUnits = (si: number, table: Record<string, number>, selected: string): ResultItem[] =>
        Object.entries(table).filter(([unit]) => unit !== selected).map(([unit, f]) => ({ label: fill(t.inUnit, { unit: SYMBOL[unit] }), value: sciNumber(ctx.fmt, si / f, SYMBOL[unit]) }));
      const primaryValue = key === "density" ? sciNumber(ctx.fmt, rho / df, SYMBOL[densityUnit]) : key === "mass" ? sciNumber(ctx.fmt, m / mf, SYMBOL[massUnit]) : sciNumber(ctx.fmt, v / vf, SYMBOL[volumeUnit]);
      const conversions = key === "density" ? inUnits(rho, DENSITY_KGM3, densityUnit) : key === "mass" ? inUnits(m, MASS_KG, massUnit) : inUnits(v, VOLUME_M3, volumeUnit);
      const relative = rho / 1000;
      return {
        primary: { label: t.results[key], value: primaryValue },
        secondary: [...conversions, { label: t.relative, value: sciNumber(ctx.fmt, relative, undefined, 6) }],
        notes: [relative < 1 ? t.floats : relative > 1 ? t.sinks : "", t.note].filter(Boolean),
      };
    },
  });
}

export const densityEngine = makeDensityEngine(englishContext(en));
