import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type NumberField, type ResultItem } from "@/calculators/framework/types";
import { US_GALLON_L } from "@/lib/math/units";
import en, { type DrywallText } from "./text/en";

type UnitSystem = "imperial" | "metric";

export type DrywallValues = { units: string; ceiling: string; doors: number; windows: number; waste: number; sheetImperial: string; sheetMetric: string } & Record<string, number | string | null>;

/** Inputs that depend on the unit system; field ids are "<key>Imperial" or "<key>Metric". */
type Key = "length" | "height" | "roomLength" | "roomWidth" | "doorArea" | "windowArea";

/** Sheet sizes as width × length in the unit system's length unit. */
export const SHEETS: Record<UnitSystem, Record<string, readonly [number, number]>> = {
  imperial: { "4x8": [4, 8], "4x10": [4, 10], "4x12": [4, 12] },
  metric: { "1.2x2.4": [1.2, 2.4], "1.2x2.7": [1.2, 2.7], "1.2x3.0": [1.2, 3.0] },
};

/** Exact: 1 ft = 0.3048 m. */
export const SQ_M_PER_SQ_FT = 0.3048 ** 2;
/** USG rule of thumb: about two 4.5-gallon pails of ready-mixed compound per 1,000 ft² of board. */
export const COMPOUND_GAL_PER_SQ_FT = 9 / 1000;
export const COMPOUND_L_PER_SQ_M = (COMPOUND_GAL_PER_SQ_FT * US_GALLON_L) / SQ_M_PER_SQ_FT;

const SUFFIX: Record<UnitSystem, Record<Key, string>> = {
  imperial: { length: "ft", height: "ft", roomLength: "ft", roomWidth: "ft", doorArea: "ft²", windowArea: "ft²" },
  metric: { length: "m", height: "m", roomLength: "m", roomWidth: "m", doorArea: "m²", windowArea: "m²" },
};
const DEFAULTS: Record<UnitSystem, Record<Key, number>> = {
  imperial: { length: 50, height: 8, roomLength: 14, roomWidth: 11, doorArea: 20, windowArea: 15 },
  metric: { length: 15, height: 2.5, roomLength: 4.2, roomWidth: 3.3, doorArea: 1.9, windowArea: 1.4 },
};
const MAX: Record<Key, number> = { length: 100000, height: 1000, roomLength: 10000, roomWidth: 10000, doorArea: 10000, windowArea: 10000 };

const fieldId = (key: Key, units: UnitSystem) => `${key}${units === "metric" ? "Metric" : "Imperial"}`;
const unitsOf = (value: string): UnitSystem => (value === "metric" ? "metric" : "imperial");

/** Rounds up to a whole sheet, ignoring floating-point noise just above an integer. */
export function wholeSheets(amount: number): number {
  return Math.ceil(amount - 1e-9);
}

export interface DrywallInputs {
  length: number;
  height: number;
  ceilingLength: number;
  ceilingWidth: number;
  doors: number;
  doorArea: number;
  windows: number;
  windowArea: number;
  wastePercent: number;
  sheetArea: number;
}

/** Areas in the unit system's square unit. */
export function drywallEstimate(p: DrywallInputs) {
  const wall = p.length * p.height;
  const ceiling = p.ceilingLength * p.ceilingWidth;
  const openings = p.doors * p.doorArea + p.windows * p.windowArea;
  const net = wall - openings + ceiling;
  const withWaste = net * (1 + p.wastePercent / 100);
  return { wall, ceiling, openings, net, withWaste, sheets: wholeSheets(withWaste / p.sheetArea) };
}

export function makeDrywallEngine(ctx: EngineContext<DrywallText>) {
  const t = ctx.text;
  const labels: Record<Key, string> = { length: t.length, height: t.height, roomLength: t.roomLength, roomWidth: t.roomWidth, doorArea: t.doorArea, windowArea: t.windowArea };
  const help: Partial<Record<Key, string>> = { length: t.lengthHelp, doorArea: t.openingHelp, windowArea: t.openingHelp };
  const system = (key: Key): NumberField[] =>
    (["imperial", "metric"] as const).map((units) => ({
      id: fieldId(key, units),
      type: "number",
      label: labels[key],
      help: help[key],
      defaultValue: DEFAULTS[units][key],
      min: 0,
      minExclusive: key !== "doorArea" && key !== "windowArea",
      max: MAX[key],
      suffix: SUFFIX[units][key],
      visibleWhen: key === "roomLength" || key === "roomWidth" ? [{ field: "units", oneOf: [units] }, { field: "ceiling", oneOf: ["yes"] }] : { field: "units", oneOf: [units] },
    }));

  const sheetLabel = (units: UnitSystem, key: string) => {
    const [w, l] = SHEETS[units][key];
    return `${ctx.fmt.number(w, 2)} × ${ctx.fmt.number(l, 2)} ${units === "metric" ? "m" : "ft"}`;
  };
  const sheetField = (units: UnitSystem) => ({
    id: units === "metric" ? "sheetMetric" : "sheetImperial",
    type: "select" as const,
    label: t.sheet,
    options: Object.keys(SHEETS[units]).map((value) => ({ value, label: sheetLabel(units, value) })),
    defaultValue: Object.keys(SHEETS[units])[0],
    visibleWhen: { field: "units", oneOf: [units] },
  });

  const read = (values: DrywallValues) => {
    const units = unitsOf(values.units);
    const get = (key: Key) => Number(values[fieldId(key, units)] ?? 0);
    const chosen = String(units === "metric" ? values.sheetMetric : values.sheetImperial);
    const sheetKey = chosen in SHEETS[units] ? chosen : Object.keys(SHEETS[units])[0];
    const [w, l] = SHEETS[units][sheetKey];
    const ceiling = values.ceiling === "yes";
    const inputs: DrywallInputs = {
      length: get("length"),
      height: get("height"),
      ceilingLength: ceiling ? get("roomLength") : 0,
      ceilingWidth: ceiling ? get("roomWidth") : 0,
      doors: values.doors,
      doorArea: get("doorArea"),
      windows: values.windows,
      windowArea: get("windowArea"),
      wastePercent: values.waste,
      sheetArea: w * l,
    };
    return { units, ceiling, sheet: sheetLabel(units, sheetKey), inputs };
  };

  return defineEngine<DrywallValues>({
    locale: ctx.locale,
    // Dimension fields are generated per unit system, so the list is typed loosely here.
    fields: [
      {
        id: "units",
        type: "select",
        label: t.units,
        options: Object.entries(t.unitSystems).map(([value, label]) => ({ value, label })),
        defaultValue: "imperial",
        display: "segmented",
      },
      ...system("length"),
      ...system("height"),
      {
        id: "ceiling",
        type: "select",
        label: t.ceiling,
        options: Object.entries(t.ceilingOptions).map(([value, label]) => ({ value, label })),
        defaultValue: "no",
        display: "segmented",
      },
      ...system("roomLength"),
      ...system("roomWidth"),
      { id: "doors", type: "number", label: t.doors, defaultValue: 1, min: 0, max: 1000, integer: true },
      ...system("doorArea"),
      { id: "windows", type: "number", label: t.windows, defaultValue: 2, min: 0, max: 1000, integer: true },
      ...system("windowArea"),
      sheetField("imperial"),
      sheetField("metric"),
      { id: "waste", type: "number", label: t.waste, help: t.wasteHelp, defaultValue: 10, min: 0, max: 50, suffix: "%" },
    ] as never,
    validate: (values): FieldErrors => {
      const e = drywallEstimate(read(values).inputs);
      return e.openings >= e.wall ? { doors: t.errors.openings } : {};
    },
    compute: (values) => {
      const { units, ceiling, sheet, inputs } = read(values);
      const e = drywallEstimate(inputs);
      const imperial = units === "imperial";
      const unit = imperial ? "ft²" : "m²";
      const area = (v: number, suffix = unit) => ({ kind: "number" as const, value: v, decimals: 2, suffix });
      const secondary: ResultItem[] = [{ label: t.wallArea, value: area(e.wall) }];
      if (ceiling) secondary.push({ label: t.ceilingArea, value: area(e.ceiling) });
      secondary.push(
        { label: t.openingArea, value: area(e.openings) },
        { label: t.netArea, value: area(e.net) },
        { label: t.areaWithWaste, value: area(e.withWaste) },
        { label: t.sheetArea, value: area(inputs.sheetArea) },
        imperial
          ? { label: t.compound, value: { kind: "number", value: e.net * COMPOUND_GAL_PER_SQ_FT, decimals: 1, suffix: "gal" } }
          : { label: t.compound, value: { kind: "number", value: e.net * COMPOUND_L_PER_SQ_M, decimals: 1, suffix: "L" } },
      );
      return {
        primary: {
          label: t.sheets,
          value: { kind: "number", value: e.sheets, decimals: 0 },
          caption: fill(t.caption, {
            area: `${ctx.fmt.number(e.net, 2)} ${unit}`,
            waste: ctx.fmt.percent(inputs.wastePercent, 2),
            sheet,
            sheetArea: `${ctx.fmt.number(inputs.sheetArea, 2)} ${unit}`,
          }),
        },
        secondary,
        notes: [t.notes.layout, t.notes.compound, t.notes.extras],
      };
    },
  });
}

export const drywallEngine = makeDrywallEngine(englishContext(en));
