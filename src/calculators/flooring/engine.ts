import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type NumberField, type ResultItem } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type FlooringText } from "./text/en";

type UnitSystem = "imperial" | "metric";

export type FlooringValues = { units: string; currency: string; waste: number } & Record<string, number | string | null>;

/** Inputs that depend on the unit system; field ids are "<key>Imperial" or "<key>Metric". */
type Key = "length" | "width" | "length2" | "width2" | "coverage" | "price";

/** Exact: 1 ft = 0.3048 m. */
export const SQ_M_PER_SQ_FT = 0.3048 ** 2;

const SUFFIX: Record<UnitSystem, Record<Key, string>> = {
  imperial: { length: "ft", width: "ft", length2: "ft", width2: "ft", coverage: "ft²", price: "/ft²" },
  metric: { length: "m", width: "m", length2: "m", width2: "m", coverage: "m²", price: "/m²" },
};
const DEFAULTS: Record<UnitSystem, Record<Key, number | null>> = {
  imperial: { length: 14, width: 12, length2: 0, width2: 0, coverage: 20, price: null },
  metric: { length: 4.5, width: 3.6, length2: 0, width2: 0, coverage: 2, price: null },
};
const MAX: Record<Key, number> = { length: 10000, width: 10000, length2: 10000, width2: 10000, coverage: 10000, price: 1_000_000 };

const fieldId = (key: Key, units: UnitSystem) => `${key}${units === "metric" ? "Metric" : "Imperial"}`;
const unitsOf = (value: string): UnitSystem => (value === "metric" ? "metric" : "imperial");

/** Rounds up to a whole box, ignoring floating-point noise just above an integer. */
export function wholeBoxes(amount: number): number {
  return Math.ceil(amount - 1e-9);
}

export interface FlooringInputs {
  length: number;
  width: number;
  length2: number;
  width2: number;
  wastePercent: number;
  coverage: number;
}

/** Areas in the unit system's square unit. */
export function flooringEstimate(p: FlooringInputs) {
  const area = p.length * p.width + p.length2 * p.width2;
  const withWaste = area * (1 + p.wastePercent / 100);
  const boxes = wholeBoxes(withWaste / p.coverage);
  return { area, withWaste, boxes, bought: boxes * p.coverage };
}

export function makeFlooringEngine(ctx: EngineContext<FlooringText>) {
  const t = ctx.text;
  const labels: Record<Key, string> = { length: t.length, width: t.width, length2: t.length2, width2: t.width2, coverage: t.coverage, price: t.price };
  const help: Partial<Record<Key, string>> = { length2: t.secondHelp, coverage: t.coverageHelp, price: t.priceHelp };
  const system = (key: Key): NumberField[] =>
    (["imperial", "metric"] as const).map((units) => ({
      id: fieldId(key, units),
      type: "number",
      label: labels[key],
      help: help[key],
      defaultValue: DEFAULTS[units][key],
      optional: key === "price",
      min: 0,
      minExclusive: key === "length" || key === "width" || key === "coverage",
      max: MAX[key],
      prefix: key === "price" ? "currency" : undefined,
      suffix: SUFFIX[units][key],
      visibleWhen: { field: "units", oneOf: [units] },
    }));

  const read = (values: FlooringValues) => {
    const units = unitsOf(values.units);
    const get = (key: Key) => values[fieldId(key, units)] as number | null;
    return { units, length2: get("length2") ?? 0, width2: get("width2") ?? 0, get };
  };

  return defineEngine<FlooringValues>({
    locale: ctx.locale,
    currencyField: "currency",
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
      ...system("width"),
      ...system("length2"),
      ...system("width2"),
      { id: "waste", type: "number", label: t.waste, help: t.wasteHelp, defaultValue: 10, min: 0, max: 50, suffix: "%" },
      ...system("coverage"),
      currencyField(ctx),
      ...system("price"),
    ] as never,
    validate: (values): FieldErrors => {
      const { units, length2, width2 } = read(values);
      if ((length2 > 0) === (width2 > 0)) return {};
      return { [fieldId(length2 > 0 ? "width2" : "length2", units)]: t.errors.secondPair };
    },
    compute: (values) => {
      const { units, length2, width2, get } = read(values);
      const imperial = units === "imperial";
      const unit = imperial ? "ft²" : "m²";
      const coverage = get("coverage") ?? 0;
      const price = get("price");
      const e = flooringEstimate({ length: get("length") ?? 0, width: get("width") ?? 0, length2, width2, wastePercent: values.waste, coverage });
      const area = (v: number, suffix = unit) => ({ kind: "number" as const, value: v, decimals: 2, suffix });
      const secondary: ResultItem[] = [
        { label: t.floorArea, value: area(e.area) },
        { label: t.areaWithWaste, value: area(e.withWaste) },
        { label: t.areaBought, value: area(e.bought) },
        { label: t.leftover, value: area(e.bought - e.area) },
        { label: t.otherUnit, value: imperial ? area(e.area * SQ_M_PER_SQ_FT, "m²") : area(e.area / SQ_M_PER_SQ_FT, "ft²") },
      ];
      if (price !== null) {
        secondary.push(
          { label: t.cost, value: { kind: "currency", amount: e.bought * price } },
          { label: t.costWithWaste, value: { kind: "currency", amount: e.withWaste * price } },
        );
      }
      return {
        primary: {
          label: t.boxes,
          value: { kind: "number", value: e.boxes, decimals: 0 },
          caption: fill(t.caption, {
            area: `${ctx.fmt.number(e.area, 2)} ${unit}`,
            waste: ctx.fmt.percent(values.waste, 2),
            coverage: `${ctx.fmt.number(coverage, 2)} ${unit}`,
          }),
        },
        secondary,
        notes: [t.notes.squareFootage, t.notes.extras],
      };
    },
  });
}

export const flooringEngine = makeFlooringEngine(englishContext(en));
