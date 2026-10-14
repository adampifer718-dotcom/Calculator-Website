import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type NumberField, type SelectField } from "@/calculators/framework/types";
import en, { type ConcreteText } from "./text/en";

type Shape = "slab" | "column" | "tube";
type UnitSystem = "metric" | "imperial";
type Size = "long" | "short";

/** Dimension inputs are numbers keyed "<dimension><Metric|Imperial>", e.g. "lengthMetric". */
export type ConcreteValues = { shape: string; units: string; quantity: number; waste: number } & Record<string, number | string | null>;

export const CUBIC_YARD_M3 = 0.764554857984; // (0.9144 m)³, exact
export const CUBIC_FOOT_M3 = 0.028316846592; // (0.3048 m)³, exact

/** Long dimensions are in metres or feet; thickness and diameters in centimetres or inches. */
const SYMBOL: Record<UnitSystem, Record<Size, string>> = { metric: { long: "m", short: "cm" }, imperial: { long: "ft", short: "in" } };
const TO_METRES: Record<UnitSystem, Record<Size, number>> = { metric: { long: 1, short: 0.01 }, imperial: { long: 0.3048, short: 0.0254 } };

type Key = "length" | "width" | "thickness" | "diameter" | "outer" | "inner" | "height";
const DIMENSIONS: { key: Key; size: Size; shapes: Shape[]; defaults: Record<UnitSystem, number> }[] = [
  { key: "length", size: "long", shapes: ["slab"], defaults: { metric: 4, imperial: 10 } },
  { key: "width", size: "long", shapes: ["slab"], defaults: { metric: 3, imperial: 10 } },
  { key: "thickness", size: "short", shapes: ["slab"], defaults: { metric: 10, imperial: 4 } },
  { key: "diameter", size: "short", shapes: ["column"], defaults: { metric: 30, imperial: 12 } },
  { key: "outer", size: "short", shapes: ["tube"], defaults: { metric: 30, imperial: 12 } },
  { key: "inner", size: "short", shapes: ["tube"], defaults: { metric: 20, imperial: 8 } },
  { key: "height", size: "long", shapes: ["column", "tube"], defaults: { metric: 3, imperial: 10 } },
];

const fieldId = (key: Key, units: UnitSystem) => `${key}${units === "metric" ? "Metric" : "Imperial"}`;

/** Volume of one piece in cubic metres; dimensions in metres. */
export function pieceVolume(shape: Shape, d: Partial<Record<Key, number>>): number {
  if (shape === "slab") return (d.length ?? 0) * (d.width ?? 0) * (d.thickness ?? 0);
  if (shape === "column") return Math.PI * ((d.diameter ?? 0) / 2) ** 2 * (d.height ?? 0);
  return Math.PI * (((d.outer ?? 0) / 2) ** 2 - ((d.inner ?? 0) / 2) ** 2) * (d.height ?? 0);
}

export function makeConcreteEngine(ctx: EngineContext<ConcreteText>) {
  const t = ctx.text;
  const labels: Record<Key, string> = { length: t.length, width: t.width, thickness: t.thickness, diameter: t.diameter, outer: t.outerDiameter, inner: t.innerDiameter, height: t.height };
  const select = (id: string, label: string, options: Record<string, string>, defaultValue: string): SelectField => ({
    id,
    type: "select",
    label,
    options: Object.entries(options).map(([value, text]) => ({ value, label: text })),
    defaultValue,
    display: "segmented",
  });
  const dimensionFields: NumberField[] = DIMENSIONS.flatMap((dim) =>
    (["metric", "imperial"] as const).map((units) => ({
      id: fieldId(dim.key, units),
      type: "number",
      label: labels[dim.key],
      defaultValue: dim.defaults[units],
      min: 0,
      minExclusive: true,
      max: dim.size === "long" ? 10000 : 100000,
      suffix: SYMBOL[units][dim.size],
      visibleWhen: [
        { field: "shape", oneOf: dim.shapes },
        { field: "units", oneOf: [units] },
      ],
    })),
  );

  const shapeOf = (value: string): Shape => (value === "column" || value === "tube" ? value : "slab");
  const unitsOf = (value: string): UnitSystem => (value === "imperial" ? "imperial" : "metric");
  /** The visible dimensions in metres. */
  const metres = (values: ConcreteValues): Partial<Record<Key, number>> => {
    const units = unitsOf(values.units);
    const out: Partial<Record<Key, number>> = {};
    for (const dim of DIMENSIONS) {
      const value = values[fieldId(dim.key, units)];
      if (typeof value === "number" && dim.shapes.includes(shapeOf(values.shape))) out[dim.key] = value * TO_METRES[units][dim.size];
    }
    return out;
  };

  return defineEngine<ConcreteValues>({
    locale: ctx.locale,
    // Dimension fields are generated per unit system, so the list is typed loosely here.
    fields: [
      select("shape", t.shape, t.shapes, "slab"),
      select("units", t.units, t.unitSystems, "metric"),
      ...dimensionFields,
      { id: "quantity", type: "number", label: t.quantity, defaultValue: 1, min: 1, max: 10000, integer: true },
      { id: "waste", type: "number", label: t.waste, help: t.wasteHelp, defaultValue: 10, min: 0, max: 100, suffix: "%" },
    ] as never,
    validate: (values): FieldErrors => {
      if (shapeOf(values.shape) !== "tube") return {};
      const d = metres(values);
      return (d.inner ?? 0) >= (d.outer ?? 0) ? { [fieldId("inner", unitsOf(values.units))]: t.errors.inner } : {};
    },
    compute: (values) => {
      const exact = pieceVolume(shapeOf(values.shape), metres(values)) * values.quantity;
      const total = exact * (1 + values.waste / 100);
      const imperial = unitsOf(values.units) === "imperial";
      const m3 = (v: number) => ({ kind: "number" as const, value: v, decimals: 3, suffix: "m³" });
      const yd3 = (v: number) => ({ kind: "number" as const, value: v / CUBIC_YARD_M3, decimals: 3, suffix: "yd³" });
      return {
        primary: {
          label: t.volume,
          value: imperial ? yd3(total) : m3(total),
          caption: fill(t.caption, {
            exact: imperial ? `${ctx.fmt.number(exact / CUBIC_YARD_M3, 3)} yd³` : `${ctx.fmt.number(exact, 3)} m³`,
            waste: ctx.fmt.percent(values.waste, 2),
          }),
        },
        secondary: [
          { label: t.exact, value: imperial ? yd3(exact) : m3(exact) },
          imperial ? { label: t.inCubicMetres, value: m3(total) } : { label: t.inCubicYards, value: yd3(total) },
          { label: t.inCubicFeet, value: { kind: "number", value: total / CUBIC_FOOT_M3, decimals: 2, suffix: "ft³" } },
          { label: t.inLitres, value: { kind: "number", value: total * 1000, decimals: 0, suffix: "L" } },
        ],
        notes: [t.notes.order, t.notes.structural],
      };
    },
  });
}

export const concreteEngine = makeConcreteEngine(englishContext(en));
