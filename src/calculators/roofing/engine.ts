import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type NumberField, type ResultItem } from "@/calculators/framework/types";
import { roofSlope } from "@/calculators/roof-pitch/engine";
import en, { type RoofingText } from "./text/en";

type UnitSystem = "imperial" | "metric";
type Key = "length" | "width" | "overhang" | "rollCoverage";

export type RoofingValues = {
  units: string;
  pitchMode: string;
  rise: number | null;
  angle: number | null;
  roofType: string;
  wasteGable: number | null;
  wasteHip: number | null;
  bundles: number;
} & Record<string, number | string | null>;

/** Exact: 1 ft = 0.3048 m, so 1 ft² = 0.09290304 m². */
export const SQ_M_PER_SQ_FT = 0.3048 ** 2;
/** A roofing square is 100 ft² of roof. */
export const SQUARE_FT2 = 100;

const SUFFIX: Record<UnitSystem, Record<Key, string>> = {
  imperial: { length: "ft", width: "ft", overhang: "ft", rollCoverage: "ft²" },
  metric: { length: "m", width: "m", overhang: "m", rollCoverage: "m²" },
};
const DEFAULTS: Record<UnitSystem, Record<Key, number | null>> = {
  imperial: { length: 40, width: 30, overhang: 1, rollCoverage: null },
  metric: { length: 12, width: 9, overhang: 0.3, rollCoverage: null },
};
const fieldId = (key: Key, units: UnitSystem) => `${key}${units === "metric" ? "Metric" : "Imperial"}`;

/** Pitch factor √(1 + slope²): sloped roof area per unit of plan area. */
export function pitchFactor(slope: number): number {
  return Math.sqrt(1 + slope * slope);
}

/** Rounds up, ignoring floating-point noise just above an integer. */
export function wholeUp(amount: number): number {
  return Math.ceil(amount - 1e-9);
}

export interface RoofInputs {
  length: number;
  width: number;
  overhang: number;
  slope: number;
  wastePercent: number;
}

/** Areas in the unit system's square unit. */
export function roofEstimate(p: RoofInputs) {
  const plan = (p.length + 2 * p.overhang) * (p.width + 2 * p.overhang);
  const factor = pitchFactor(p.slope);
  const area = plan * factor;
  return { plan, factor, area, withWaste: area * (1 + p.wastePercent / 100) };
}

export function makeRoofingEngine(ctx: EngineContext<RoofingText>) {
  const t = ctx.text;
  const opts = <K extends string>(labels: Record<K, string>) => (Object.keys(labels) as K[]).map((value) => ({ value, label: labels[value] }));
  const labels: Record<Key, string> = { length: t.length, width: t.width, overhang: t.overhang, rollCoverage: t.rollCoverage };
  const help: Partial<Record<Key, string>> = { length: t.lengthHelp, overhang: t.overhangHelp, rollCoverage: t.rollCoverageHelp };
  const system = (key: Key): NumberField[] =>
    (["imperial", "metric"] as const).map((units) => ({
      id: fieldId(key, units),
      type: "number",
      label: labels[key],
      help: help[key],
      defaultValue: DEFAULTS[units][key],
      min: 0,
      minExclusive: key !== "overhang",
      max: key === "overhang" ? 100 : 1e6,
      optional: key === "rollCoverage",
      suffix: SUFFIX[units][key],
      visibleWhen: { field: "units", oneOf: [units] },
    }));

  const read = (values: RoofingValues) => {
    const units: UnitSystem = values.units === "metric" ? "metric" : "imperial";
    const get = (key: Key) => values[fieldId(key, units)];
    const byAngle = values.pitchMode === "angle";
    const slope = roofSlope(byAngle ? "angle" : "riseRun", values.rise ?? 0, 12, values.angle ?? 0);
    const hip = values.roofType === "hip";
    const inputs: RoofInputs = {
      length: Number(get("length") ?? 0),
      width: Number(get("width") ?? 0),
      overhang: Number(get("overhang") ?? 0),
      slope,
      wastePercent: Number((hip ? values.wasteHip : values.wasteGable) ?? 0),
    };
    const coverage = get("rollCoverage");
    return { units, hip, byAngle, inputs, coverage: typeof coverage === "number" ? coverage : null };
  };

  return defineEngine<RoofingValues>({
    locale: ctx.locale,
    fields: [
      { id: "units", type: "select", label: t.units, options: opts(t.unitSystems), defaultValue: "imperial", display: "segmented" },
      ...system("length"),
      ...system("width"),
      ...system("overhang"),
      { id: "pitchMode", type: "select", label: t.pitchMode, options: opts(t.pitchModes), defaultValue: "rise", display: "segmented" },
      { id: "rise", type: "number", label: t.rise, help: t.riseHelp, defaultValue: 6, min: 0, max: 48, visibleWhen: { field: "pitchMode", oneOf: ["rise"] } },
      { id: "angle", type: "number", label: t.angle, defaultValue: 30, min: 0, suffix: "°", visibleWhen: { field: "pitchMode", oneOf: ["angle"] } },
      { id: "roofType", type: "select", label: t.roofType, help: t.roofTypeHelp, options: opts(t.roofTypes), defaultValue: "gable", display: "segmented" },
      { id: "wasteGable", type: "number", label: t.waste, help: t.wasteHelp, defaultValue: 10, min: 0, max: 50, suffix: "%", visibleWhen: { field: "roofType", oneOf: ["gable"] } },
      { id: "wasteHip", type: "number", label: t.waste, help: t.wasteHelp, defaultValue: 15, min: 0, max: 50, suffix: "%", visibleWhen: { field: "roofType", oneOf: ["hip"] } },
      { id: "bundles", type: "number", label: t.bundles, help: t.bundlesHelp, defaultValue: 3, min: 0, minExclusive: true, max: 20 },
      ...system("rollCoverage"),
    ] as never,
    validate: (values): FieldErrors => (values.pitchMode === "angle" && (values.angle ?? 0) >= 90 ? { angle: t.errors.angle } : {}),
    compute: (values) => {
      const { units, hip, inputs, coverage } = read(values);
      const e = roofEstimate(inputs);
      const imperial = units === "imperial";
      const toFt2 = imperial ? 1 : 1 / SQ_M_PER_SQ_FT;
      const squares = (e.withWaste * toFt2) / SQUARE_FT2;
      const unit = imperial ? "ft²" : "m²";
      const area = (v: number, suffix = unit) => ({ kind: "number" as const, value: v, decimals: 2, suffix });
      const degrees = (Math.atan(inputs.slope) * 180) / Math.PI;
      const secondary: ResultItem[] = [
        { label: t.pitchText, value: { kind: "text", text: fill(t.pitchValue, { rise: ctx.fmt.number(inputs.slope * 12, 2) }) } },
        { label: t.angleOut, value: { kind: "number", value: degrees, decimals: 2, suffix: "°" } },
        { label: t.pitchFactor, value: { kind: "number", value: e.factor, decimals: 4 } },
        { label: t.planArea, value: area(e.plan) },
        { label: t.roofArea, value: area(e.area) },
        { label: t.roofAreaOther, value: imperial ? area(e.area * SQ_M_PER_SQ_FT, "m²") : area(e.area / SQ_M_PER_SQ_FT, "ft²") },
        { label: t.areaWithWaste, value: area(e.withWaste) },
        { label: t.squaresNoWaste, value: { kind: "number", value: (e.area * toFt2) / SQUARE_FT2, decimals: 2 } },
        { label: t.bundlesOut, value: { kind: "number", value: wholeUp(squares * values.bundles), decimals: 0 } },
      ];
      if (coverage !== null) secondary.push({ label: t.rolls, value: { kind: "number", value: wholeUp(e.withWaste / coverage), decimals: 0 } });
      const notes = hip ? [t.notes.hip, t.notes.shape, t.notes.bundles] : [t.notes.shape, t.notes.bundles];
      return {
        primary: {
          label: t.squares,
          value: { kind: "number", value: squares, decimals: 2 },
          caption: fill(t.caption, { area: `${ctx.fmt.number(e.area, 2)} ${unit}`, waste: ctx.fmt.percent(inputs.wastePercent, 2) }),
        },
        secondary,
        notes,
      };
    },
  });
}

export const roofingEngine = makeRoofingEngine(englishContext(en));
