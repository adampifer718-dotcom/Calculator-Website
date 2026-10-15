import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type NumberField } from "@/calculators/framework/types";
import { US_GALLON_L } from "@/lib/math/units";
import en, { type PaintText } from "./text/en";

type UnitSystem = "imperial" | "metric";

export type PaintValues = { units: string; doors: number; windows: number; coats: number } & Record<string, number | string | null>;

/** Inputs that depend on the unit system; field ids are "<key>Imperial" or "<key>Metric". */
type Key = "length" | "height" | "doorArea" | "windowArea" | "coverage";

const SUFFIX: Record<UnitSystem, Record<Key, string>> = {
  imperial: { length: "ft", height: "ft", doorArea: "ft²", windowArea: "ft²", coverage: "ft²/gal" },
  metric: { length: "m", height: "m", doorArea: "m²", windowArea: "m²", coverage: "m²/L" },
};
const DEFAULTS: Record<UnitSystem, Record<Key, number>> = {
  imperial: { length: 48, height: 8, doorArea: 20, windowArea: 15, coverage: 350 },
  metric: { length: 16, height: 2.5, doorArea: 1.9, windowArea: 1.4, coverage: 10 },
};
const MAX: Record<Key, number> = { length: 100000, height: 1000, doorArea: 10000, windowArea: 10000, coverage: 100000 };

const fieldId = (key: Key, units: UnitSystem) => `${key}${units === "metric" ? "Metric" : "Imperial"}`;
const unitsOf = (value: string): UnitSystem => (value === "metric" ? "metric" : "imperial");

/** Rounds up to a whole can, ignoring floating-point noise just above an integer. */
export function wholeUnits(amount: number): number {
  return Math.ceil(amount - 1e-9);
}

export interface PaintInputs {
  length: number;
  height: number;
  doors: number;
  doorArea: number;
  windows: number;
  windowArea: number;
  coats: number;
  coverage: number;
}

/** Areas in the input unit squared, paint in gallons or liters. */
export function paintEstimate(p: PaintInputs) {
  const wall = p.length * p.height;
  const openings = p.doors * p.doorArea + p.windows * p.windowArea;
  const paintable = wall - openings;
  const covered = paintable * p.coats;
  return { wall, openings, paintable, covered, paint: covered / p.coverage };
}

export function makePaintEngine(ctx: EngineContext<PaintText>) {
  const t = ctx.text;
  const labels: Record<Key, string> = { length: t.length, height: t.height, doorArea: t.doorArea, windowArea: t.windowArea, coverage: t.coverage };
  const help: Partial<Record<Key, string>> = { length: t.lengthHelp, doorArea: t.openingHelp, windowArea: t.openingHelp, coverage: t.coverageHelp };
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
      visibleWhen: { field: "units", oneOf: [units] },
    }));

  const inputs = (values: PaintValues): PaintInputs => {
    const units = unitsOf(values.units);
    const get = (key: Key) => Number(values[fieldId(key, units)] ?? 0);
    return {
      length: get("length"),
      height: get("height"),
      doors: values.doors,
      doorArea: get("doorArea"),
      windows: values.windows,
      windowArea: get("windowArea"),
      coats: values.coats,
      coverage: get("coverage"),
    };
  };

  return defineEngine<PaintValues>({
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
      { id: "doors", type: "number", label: t.doors, defaultValue: 1, min: 0, max: 1000, integer: true },
      ...system("doorArea"),
      { id: "windows", type: "number", label: t.windows, defaultValue: 2, min: 0, max: 1000, integer: true },
      ...system("windowArea"),
      { id: "coats", type: "number", label: t.coats, defaultValue: 2, min: 1, max: 5, integer: true },
      ...system("coverage"),
    ] as never,
    validate: (values): FieldErrors => {
      const e = paintEstimate(inputs(values));
      return e.paintable <= 0 ? { doors: t.errors.openings } : {};
    },
    compute: (values) => {
      const units = unitsOf(values.units);
      const p = inputs(values);
      const e = paintEstimate(p);
      const imperial = units === "imperial";
      const areaUnit = imperial ? "ft²" : "m²";
      const volUnit = imperial ? "gal" : "L";
      const area = (v: number) => ({ kind: "number" as const, value: v, decimals: 2, suffix: areaUnit });
      return {
        primary: {
          label: t.paintNeeded,
          value: { kind: "number", value: e.paint, decimals: 2, suffix: volUnit },
          caption: fill(t.caption, {
            area: `${ctx.fmt.number(e.paintable, 2)} ${areaUnit}`,
            coats: plural(ctx, p.coats, t.coatsCount),
            coverage: `${ctx.fmt.number(p.coverage, 2)} ${SUFFIX[units].coverage}`,
          }),
        },
        secondary: [
          { label: imperial ? t.wholeGallons : t.wholeLiters, value: { kind: "number", value: wholeUnits(e.paint), decimals: 0, suffix: volUnit } },
          { label: t.paintableArea, value: area(e.paintable) },
          { label: t.wallArea, value: area(e.wall) },
          { label: t.openingArea, value: area(e.openings) },
          { label: t.totalCoverage, value: area(e.covered) },
          imperial
            ? { label: t.inLiters, value: { kind: "number", value: e.paint * US_GALLON_L, decimals: 2, suffix: "L" } }
            : { label: t.inGallons, value: { kind: "number", value: e.paint / US_GALLON_L, decimals: 2, suffix: "gal" } },
        ],
        notes: [t.notes.cans, t.notes.surfaces],
      };
    },
  });
}

export const paintEngine = makePaintEngine(englishContext(en));
