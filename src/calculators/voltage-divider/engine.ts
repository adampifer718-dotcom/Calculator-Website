import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type VoltageDividerText } from "./text/en";

export type VoltageDividerValues = {
  solve: string;
  vin: number;
  vout: number | null;
  r1: number | null;
  r1Unit: string;
  r2: number | null;
  r2Unit: string;
  load: number | null;
  loadUnit: string;
};

const SOLVES = ["vout", "r2", "r1"] as const;
type Solve = (typeof SOLVES)[number];
const UNITS = ["ohm", "kohm", "megohm"] as const;
type Unit = (typeof UNITS)[number];
const FACTOR: Record<Unit, number> = { ohm: 1, kohm: 1e3, megohm: 1e6 };
const factorOf = (unit: string) => FACTOR[unit as Unit] ?? 1;

/** IEC 60063 E24 preferred values for one decade (10–91). */
export const E24 = [10, 11, 12, 13, 15, 16, 18, 20, 22, 24, 27, 30, 33, 36, 39, 43, 47, 51, 56, 62, 68, 75, 82, 91] as const;

/** Unloaded divider output. */
export function dividerVout(vin: number, r1: number, r2: number): number {
  return (vin * r2) / (r1 + r2);
}

/** R2 that gives vout from vin with a known R1. Requires 0 < vout < vin. */
export function solveR2(vin: number, vout: number, r1: number): number {
  return (r1 * vout) / (vin - vout);
}

/** R1 that gives vout from vin with a known R2. Requires 0 < vout < vin. */
export function solveR1(vin: number, vout: number, r2: number): number {
  return (r2 * (vin - vout)) / vout;
}

export function parallel(a: number, b: number): number {
  return (a * b) / (a + b);
}

/** The E24 value (any decade) closest to `ohms` by absolute difference. */
export function nearestE24(ohms: number): number {
  const decade = Math.floor(Math.log10(ohms));
  let best = Number.NaN;
  for (let d = decade - 2; d <= decade + 1; d++) {
    for (const base of E24) {
      // base has two digits, so base × 10^(d − 1) is the value; divide for negative powers to keep it exact.
      const p = d - 1;
      const value = p >= 0 ? base * 10 ** p : base / 10 ** -p;
      if (Number.isNaN(best) || Math.abs(value - ohms) < Math.abs(best - ohms)) best = value;
    }
  }
  return best;
}

const PREFIXES: readonly [number, string][] = [
  [1e9, "G"],
  [1e6, "M"],
  [1e3, "k"],
  [1, ""],
  [1e-3, "m"],
  [1e-6, "µ"],
  [1e-9, "n"],
];

/** Picks an SI prefix for a value as it will be displayed with `digits` significant digits. */
export function siPrefix(value: number, digits: number): [number, string] {
  const shown = Math.abs(Number(value.toPrecision(digits)));
  if (shown === 0) return [1, ""];
  return PREFIXES.find(([p]) => shown >= p) ?? PREFIXES[PREFIXES.length - 1];
}

export function makeVoltageDividerEngine(ctx: EngineContext<VoltageDividerText>) {
  const t = ctx.text;
  const si = (value: number, unit: string, digits = 4) => {
    const [p, prefix] = siPrefix(value, digits);
    return `${ctx.fmt.significant(value / p, digits)} ${prefix}${unit}`;
  };
  const ohms = (value: number) => si(value, "Ω", 6);
  const volts = (value: number) => `${ctx.fmt.significant(value, 6)} V`;
  const unitOptions = UNITS.map((value) => ({ value, label: t.units[value] }));
  const showR1 = { field: "solve", oneOf: ["vout", "r2"] } as const;
  const showR2 = { field: "solve", oneOf: ["vout", "r1"] } as const;
  const positive = { min: 0, minExclusive: true, max: 1e9 } as const;

  return defineEngine<VoltageDividerValues>({
    locale: ctx.locale,
    fields: [
      { id: "solve", type: "select", label: t.solve, options: SOLVES.map((value) => ({ value, label: t.solveOptions[value] })), defaultValue: "vout" },
      { id: "vin", type: "number", label: t.vin, defaultValue: 12, min: 0, minExclusive: true, max: 1e6, suffix: "V" },
      { id: "vout", type: "number", label: t.vout, defaultValue: 3.3, min: 0, minExclusive: true, max: 1e6, suffix: "V", visibleWhen: { field: "solve", oneOf: ["r1", "r2"] } },
      { id: "r1", type: "number", label: t.r1, help: t.r1Help, defaultValue: 10, ...positive, visibleWhen: showR1 },
      { id: "r1Unit", type: "select", label: t.unit, options: unitOptions, defaultValue: "kohm", display: "segmented", visibleWhen: showR1 },
      { id: "r2", type: "number", label: t.r2, help: t.r2Help, defaultValue: 4.7, ...positive, visibleWhen: showR2 },
      { id: "r2Unit", type: "select", label: t.unit, options: unitOptions, defaultValue: "kohm", display: "segmented", visibleWhen: showR2 },
      { id: "load", type: "number", label: t.load, help: t.loadHelp, defaultValue: null, optional: true, ...positive },
      { id: "loadUnit", type: "select", label: t.unit, options: unitOptions, defaultValue: "kohm", display: "segmented" },
    ],
    validate: ({ solve, vin, vout }): FieldErrors => {
      if (solve === "vout") return {};
      return vout !== null && vout > 0 && vout < vin ? {} : { vout: t.errors.voutRange };
    },
    compute: (v) => {
      const solve: Solve = (SOLVES as readonly string[]).includes(v.solve) ? (v.solve as Solve) : "vout";
      const vin = v.vin;
      let r1 = (v.r1 ?? 0) * factorOf(v.r1Unit);
      let r2 = (v.r2 ?? 0) * factorOf(v.r2Unit);
      const target = v.vout ?? 0;
      if (solve === "r2") r2 = solveR2(vin, target, r1);
      if (solve === "r1") r1 = solveR1(vin, target, r2);
      const vout = solve === "vout" ? dividerVout(vin, r1, r2) : target;
      const total = r1 + r2;
      const current = vin / total;
      const secondary = [];
      let primary;
      if (solve === "vout") {
        primary = {
          label: t.voutResult,
          value: { kind: "number" as const, value: vout, decimals: 4, suffix: "V" },
          caption: fill(t.captionVout, { vin: volts(vin), r1: ohms(r1), r2: ohms(r2) }),
        };
      } else {
        const solved = solve === "r2" ? r2 : r1;
        const known = solve === "r2" ? fill(t.knownR1, { r: ohms(r1) }) : fill(t.knownR2, { r: ohms(r2) });
        primary = {
          label: solve === "r2" ? t.r2Result : t.r1Result,
          value: { kind: "text" as const, text: ohms(solved) },
          caption: fill(t.captionR, { vout: volts(vout), vin: volts(vin), known }),
        };
        secondary.push({ label: solve === "r2" ? t.r1 : t.r2, value: { kind: "text" as const, text: ohms(solve === "r2" ? r1 : r2) } });
      }
      secondary.push(
        { label: t.ratio, value: { kind: "number" as const, value: r2 / total, decimals: 6 } },
        { label: t.current, value: { kind: "text" as const, text: si(current, "A") } },
        { label: t.p1, value: { kind: "text" as const, text: si(current * current * r1, "W") } },
        { label: t.p2, value: { kind: "text" as const, text: si(current * current * r2, "W") } },
        { label: t.rTotal, value: { kind: "text" as const, text: ohms(total) } },
        { label: t.rOut, value: { kind: "text" as const, text: ohms(parallel(r1, r2)) } },
      );
      const notes: string[] = [];
      if (solve !== "vout") {
        const solved = solve === "r2" ? r2 : r1;
        const e24 = nearestE24(solved);
        const e24Vout = solve === "r2" ? dividerVout(vin, r1, e24) : dividerVout(vin, e24, r2);
        secondary.push(
          { label: t.e24, value: { kind: "text" as const, text: ohms(e24) } },
          { label: t.e24Vout, value: { kind: "number" as const, value: e24Vout, decimals: 4, suffix: "V" } },
          { label: t.e24Error, value: { kind: "percent" as const, value: ((e24Vout - vout) / vout) * 100, decimals: 2, signed: true } },
        );
        notes.push(t.notes.e24);
      }
      if (v.load !== null) {
        const rl = v.load * factorOf(v.loadUnit);
        const r2Eff = parallel(r2, rl);
        const loaded = dividerVout(vin, r1, r2Eff);
        const drop = ((vout - loaded) / vout) * 100;
        secondary.push(
          { label: t.vLoaded, value: { kind: "number" as const, value: loaded, decimals: 4, suffix: "V" } },
          { label: t.drop, value: { kind: "percent" as const, value: drop, decimals: 2 } },
          { label: t.loadCurrent, value: { kind: "text" as const, text: si(loaded / rl, "A") } },
        );
        notes.push(fill(t.notes.loaded, { r: ohms(r2Eff), drop: ctx.fmt.percent(drop, 2) }));
        if (rl < 10 * parallel(r1, r2)) notes.push(t.notes.heavyLoad);
      } else {
        notes.push(t.notes.unloaded);
      }
      notes.push(t.notes.supply);
      return { primary, secondary, notes };
    },
  });
}

export const voltageDividerEngine = makeVoltageDividerEngine(englishContext(en));
