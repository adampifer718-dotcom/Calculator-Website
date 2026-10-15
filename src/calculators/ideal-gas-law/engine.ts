import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import { sciNumber } from "@/lib/math/sci-result";
import en, { type IdealGasLawText } from "./text/en";

export type IdealGasValues = {
  solve: string;
  pressure: number | null;
  pressureUnit: string;
  volume: number | null;
  volumeUnit: string;
  moles: number | null;
  temperature: number | null;
  temperatureUnit: string;
};

type Unknown = "P" | "V" | "n" | "T";
const UNKNOWNS = ["P", "V", "n", "T"] as const;

/** Molar gas constant, exact in the 2019 SI (R = Nₐ·k). */
export const GAS_CONSTANT = 8.31446261815324;
/** Avogadro constant, exact. */
export const AVOGADRO = 6.02214076e23;

export const PRESSURE_PA = { Pa: 1, kPa: 1000, bar: 1e5, atm: 101325, mmHg: 101325 / 760 } as const;
export const VOLUME_M3 = { L: 0.001, mL: 1e-6, m3: 1 } as const;
const SYMBOL: Record<string, string> = { Pa: "Pa", kPa: "kPa", bar: "bar", atm: "atm", mmHg: "mmHg", L: "L", mL: "mL", m3: "m³", K: "K", C: "°C", F: "°F" };

export function toKelvin(value: number, unit: string): number {
  if (unit === "C") return value + 273.15;
  if (unit === "F") return ((value - 32) * 5) / 9 + 273.15;
  return value;
}
export function fromKelvin(kelvin: number, unit: string): number {
  if (unit === "C") return kelvin - 273.15;
  if (unit === "F") return ((kelvin - 273.15) * 9) / 5 + 32;
  return kelvin;
}

const positive = { min: 0, minExclusive: true } as const;
const unless = (solved: Unknown) => ({ field: "solve", oneOf: UNKNOWNS.filter((s) => s !== solved) });
const factor = <T extends Record<string, number>>(table: T, key: string) => (key in table ? table[key as keyof T] : 1);

export function makeIdealGasLawEngine(ctx: EngineContext<IdealGasLawText>) {
  const t = ctx.text;
  const options = <K extends string>(labels: Record<K, string>) => (Object.keys(labels) as K[]).map((value) => ({ value, label: labels[value] }));
  return defineEngine<IdealGasValues>({
    locale: ctx.locale,
    fields: [
      { id: "solve", type: "select", label: t.solve, options: options(t.solveOptions), defaultValue: "P" },
      { id: "pressure", type: "number", label: t.pressure, defaultValue: 100, ...positive, visibleWhen: unless("P") },
      { id: "pressureUnit", type: "select", label: t.pressureUnit, help: t.unitHelp, options: options(t.pressureUnits), defaultValue: "kPa" },
      { id: "volume", type: "number", label: t.volume, defaultValue: 50, ...positive, visibleWhen: unless("V") },
      { id: "volumeUnit", type: "select", label: t.volumeUnit, help: t.unitHelp, options: options(t.volumeUnits), defaultValue: "L" },
      { id: "moles", type: "number", label: t.moles, defaultValue: 2, ...positive, suffix: "mol", visibleWhen: unless("n") },
      { id: "temperature", type: "number", label: t.temperature, defaultValue: 25, visibleWhen: unless("T") },
      { id: "temperatureUnit", type: "select", label: t.temperatureUnit, help: t.unitHelp, options: options(t.temperatureUnits), defaultValue: "C" },
    ],
    validate: ({ solve, temperature, temperatureUnit }): FieldErrors => {
      if (solve !== "T" && toKelvin(temperature ?? 0, temperatureUnit) <= 0) return { temperature: t.belowAbsoluteZero };
      return {};
    },
    compute: ({ solve, pressure, pressureUnit, volume, volumeUnit, moles, temperature, temperatureUnit }) => {
      const key: Unknown = (UNKNOWNS as readonly string[]).includes(solve) ? (solve as Unknown) : "P";
      const pf = factor(PRESSURE_PA, pressureUnit);
      const vf = factor(VOLUME_M3, volumeUnit);
      let P = (pressure ?? 0) * pf;
      let V = (volume ?? 0) * vf;
      let n = moles ?? 0;
      let T = toKelvin(temperature ?? 0, temperatureUnit);
      if (key === "P") P = (n * GAS_CONSTANT * T) / V;
      else if (key === "V") V = (n * GAS_CONSTANT * T) / P;
      else if (key === "n") n = (P * V) / (GAS_CONSTANT * T);
      else T = (P * V) / (n * GAS_CONSTANT);

      const item = (value: number, unit: string): ResultItem => ({ label: fill(t.inUnit, { unit: SYMBOL[unit] ?? unit }), value: sciNumber(ctx.fmt, value, SYMBOL[unit] ?? unit) });
      let primary;
      let conversions: ResultItem[];
      if (key === "P") {
        primary = sciNumber(ctx.fmt, P / pf, SYMBOL[pressureUnit]);
        conversions = Object.entries(PRESSURE_PA).filter(([u]) => u !== pressureUnit).map(([u, f]) => item(P / f, u));
      } else if (key === "V") {
        primary = sciNumber(ctx.fmt, V / vf, SYMBOL[volumeUnit]);
        conversions = Object.entries(VOLUME_M3).filter(([u]) => u !== volumeUnit).map(([u, f]) => item(V / f, u));
      } else if (key === "n") {
        primary = sciNumber(ctx.fmt, n, "mol");
        conversions = [item(n * 1000, "mmol"), { label: t.molecules, value: { kind: "text", text: ctx.fmt.significant(n * AVOGADRO, 6) } }];
      } else {
        primary = sciNumber(ctx.fmt, fromKelvin(T, temperatureUnit), SYMBOL[temperatureUnit]);
        conversions = (["K", "C", "F"] as const).filter((u) => u !== temperatureUnit).map((u) => item(fromKelvin(T, u), u));
      }
      return {
        primary: { label: t.results[key], value: primary },
        secondary: [...conversions, { label: t.molarVolume, value: sciNumber(ctx.fmt, V / n / 0.001, "L/mol") }],
        notes: [t.note],
      };
    },
  });
}

export const idealGasLawEngine = makeIdealGasLawEngine(englishContext(en));
