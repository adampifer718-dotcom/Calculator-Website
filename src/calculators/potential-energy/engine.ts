import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type ResultItem } from "@/calculators/framework/types";
import { sciNumber } from "@/lib/math/sci-result";
import en, { type PotentialEnergyText } from "./text/en";

/** Standard acceleration of gravity, exact by definition. */
export const STANDARD_GRAVITY = 9.80665;
/** Mean surface gravity from the NASA NSSDC Moon and Mars fact sheets (m/s²). */
export const GRAVITY = { earth: STANDARD_GRAVITY, moon: 1.62, mars: 3.73 } as const;

/** Factors to SI units. 1 ft·lbf = 0.3048 m × 4.4482216152605 N (exact). */
export const ENERGY_UNITS = { J: 1, kJ: 1000, Wh: 3600, kWh: 3.6e6, ftlbf: 0.3048 * 4.4482216152605 } as const;
export const MASS_UNITS = { kg: 1, g: 0.001, lb: 0.45359237 } as const;
export const HEIGHT_UNITS = { m: 1, cm: 0.01, ft: 0.3048 } as const;
export const X_UNITS = { m: 1, cm: 0.01, in: 0.0254 } as const;
const ENERGY_SYMBOLS = { J: "J", kJ: "kJ", Wh: "Wh", kWh: "kWh", ftlbf: "ft·lbf" } as const;

type EnergyUnit = keyof typeof ENERGY_UNITS;
type MassUnit = keyof typeof MASS_UNITS;
type HeightUnit = keyof typeof HEIGHT_UNITS;
type XUnit = keyof typeof X_UNITS;

const pick = <T extends Record<string, number>>(table: T, key: string, fallback: keyof T & string): keyof T & string =>
  (key in table ? key : fallback) as keyof T & string;

export const gravitationalEnergy = (kg: number, g: number, m: number) => kg * g * m;
export const elasticEnergy = (k: number, x: number) => 0.5 * k * x * x;

export type PotentialEnergyValues = {
  mode: string;
  gSolve: string;
  eSolve: string;
  mass: number | null;
  massUnit: string;
  height: number | null;
  heightUnit: string;
  gravity: string;
  customG: number | null;
  gEnergy: number | null;
  eEnergy: number | null;
  energyUnit: string;
  k: number | null;
  x: number | null;
  xUnit: string;
};

export function makePotentialEnergyEngine(ctx: EngineContext<PotentialEnergyText>) {
  const t = ctx.text;
  const positive = { min: 0, minExclusive: true } as const;
  const grav = { field: "mode", oneOf: ["gravitational"] } as const;
  const elastic = { field: "mode", oneOf: ["elastic"] } as const;
  const gWhen = (...oneOf: string[]) => [grav, { field: "gSolve", oneOf }] as const;
  const eWhen = (...oneOf: string[]) => [elastic, { field: "eSolve", oneOf }] as const;
  const options = <K extends string>(keys: readonly K[], labels: Record<K, string>) => keys.map((value) => ({ value, label: labels[value] }));

  /** Primary value in the chosen unit plus the same quantity in every other unit. */
  const inUnits = <T extends Record<string, number>>(si: number, table: T, chosen: keyof T & string, symbol: (k: keyof T & string) => string) => {
    const primary = sciNumber(ctx.fmt, si / table[chosen], symbol(chosen));
    const others: ResultItem[] = (Object.keys(table) as (keyof T & string)[])
      .filter((k) => k !== chosen)
      .map((k) => ({ label: fill(t.inUnit, { unit: symbol(k) }), value: sciNumber(ctx.fmt, si / table[k], symbol(k)) }));
    return { primary, others };
  };
  const energySymbol = (k: EnergyUnit) => ENERGY_SYMBOLS[k];
  const plain = (k: string) => k;

  return defineEngine<PotentialEnergyValues>({
    locale: ctx.locale,
    fields: [
      { id: "mode", type: "select", label: t.mode, options: options(["gravitational", "elastic"], t.modes), defaultValue: "gravitational", display: "segmented" },
      { id: "gSolve", type: "select", label: t.solve, options: options(["energy", "mass", "height"], t.gSolveOptions), defaultValue: "energy", visibleWhen: grav },
      { id: "eSolve", type: "select", label: t.solve, options: options(["energy", "k", "x"], t.eSolveOptions), defaultValue: "energy", visibleWhen: elastic },
      { id: "mass", type: "number", label: t.mass, defaultValue: 12, ...positive, visibleWhen: gWhen("energy", "height") },
      { id: "massUnit", type: "select", label: t.massUnit, options: options(["kg", "g", "lb"], t.massUnits), defaultValue: "kg", visibleWhen: grav },
      { id: "height", type: "number", label: t.height, help: t.heightHelp, defaultValue: 2.5, ...positive, visibleWhen: gWhen("energy", "mass") },
      { id: "heightUnit", type: "select", label: t.heightUnit, options: options(["m", "cm", "ft"], t.heightUnits), defaultValue: "m", visibleWhen: grav },
      { id: "gravity", type: "select", label: t.gravity, options: options(["earth", "moon", "mars", "custom"], t.gravityOptions), defaultValue: "earth", visibleWhen: grav },
      { id: "customG", type: "number", label: t.customG, defaultValue: 9.81, ...positive, max: 1000, suffix: "m/s²", visibleWhen: [grav, { field: "gravity", oneOf: ["custom"] }] },
      { id: "energyUnit", type: "select", label: t.energyUnit, options: options(["J", "kJ", "Wh", "kWh", "ftlbf"], t.energyUnits), defaultValue: "J" },
      { id: "gEnergy", type: "number", label: t.energy, defaultValue: 1000, ...positive, visibleWhen: gWhen("mass", "height") },
      { id: "k", type: "number", label: t.k, help: t.kHelp, defaultValue: 400, ...positive, suffix: "N/m", visibleWhen: eWhen("energy", "x") },
      { id: "x", type: "number", label: t.x, help: t.xHelp, defaultValue: 15, ...positive, visibleWhen: eWhen("energy", "k") },
      { id: "xUnit", type: "select", label: t.xUnit, options: options(["m", "cm", "in"], t.xUnits), defaultValue: "cm", visibleWhen: elastic },
      { id: "eEnergy", type: "number", label: t.energy, defaultValue: 5, ...positive, visibleWhen: eWhen("k", "x") },
    ],
    compute: (v) => {
      const energyUnit = pick(ENERGY_UNITS, v.energyUnit, "J");
      if (v.mode === "elastic") {
        const xUnit: XUnit = pick(X_UNITS, v.xUnit, "m");
        let k = v.k ?? 0;
        let x = (v.x ?? 0) * X_UNITS[xUnit];
        let energy = (v.eEnergy ?? 0) * ENERGY_UNITS[energyUnit];
        let primary: ResultItem;
        let others: ResultItem[];
        const key = v.eSolve === "k" ? "k" : v.eSolve === "x" ? "x" : "eEnergy";
        if (key === "k") {
          k = (2 * energy) / (x * x);
          primary = { label: t.results.k, value: sciNumber(ctx.fmt, k, "N/m") };
          others = [{ label: fill(t.inUnit, { unit: "N/cm" }), value: sciNumber(ctx.fmt, k / 100, "N/cm") }];
        } else if (key === "x") {
          x = Math.sqrt((2 * energy) / k);
          const r = inUnits(x, X_UNITS, xUnit, plain);
          primary = { label: t.results.x, value: r.primary };
          others = r.others;
        } else {
          energy = elasticEnergy(k, x);
          const r = inUnits(energy, ENERGY_UNITS, energyUnit, energySymbol);
          primary = { label: t.results.eEnergy, value: r.primary };
          others = r.others;
        }
        return {
          primary: { ...primary, caption: t.captions[key] },
          secondary: [...others, { label: t.springForce, value: sciNumber(ctx.fmt, k * x, "N") }],
          notes: [t.notes.hooke],
        };
      }

      const massUnit: MassUnit = pick(MASS_UNITS, v.massUnit, "kg");
      const heightUnit: HeightUnit = pick(HEIGHT_UNITS, v.heightUnit, "m");
      const g = v.gravity === "custom" ? (v.customG ?? STANDARD_GRAVITY) : (GRAVITY[v.gravity as keyof typeof GRAVITY] ?? STANDARD_GRAVITY);
      let kg = (v.mass ?? 0) * MASS_UNITS[massUnit];
      let h = (v.height ?? 0) * HEIGHT_UNITS[heightUnit];
      let energy = (v.gEnergy ?? 0) * ENERGY_UNITS[energyUnit];
      const key = v.gSolve === "mass" ? "mass" : v.gSolve === "height" ? "height" : "gEnergy";
      let r: { primary: ReturnType<typeof sciNumber>; others: ResultItem[] };
      if (key === "mass") {
        kg = energy / (g * h);
        r = inUnits(kg, MASS_UNITS, massUnit, plain);
      } else if (key === "height") {
        h = energy / (kg * g);
        r = inUnits(h, HEIGHT_UNITS, heightUnit, plain);
      } else {
        energy = gravitationalEnergy(kg, g, h);
        r = inUnits(energy, ENERGY_UNITS, energyUnit, energySymbol);
      }
      return {
        primary: { label: t.results[key], value: r.primary, caption: t.captions[key] },
        secondary: [
          ...r.others,
          { label: t.weight, value: sciNumber(ctx.fmt, kg * g, "N") },
          { label: t.fallSpeed, value: sciNumber(ctx.fmt, Math.sqrt(2 * g * h), "m/s") },
        ],
        notes: [t.notes.reference, fill(t.notes.gravity, { g: ctx.fmt.number(g, 5) })],
      };
    },
  });
}

export const potentialEnergyEngine = makePotentialEnergyEngine(englishContext(en));
