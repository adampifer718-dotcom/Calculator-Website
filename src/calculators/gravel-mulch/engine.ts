import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type NumberField, type ResultItem, type VisibleWhen } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import { POUND_KG } from "@/lib/math/units";
import en, { type GravelMulchText } from "./text/en";

type UnitSystem = "imperial" | "metric";

export type GravelMulchValues = { units: string; shape: string; material: string; currency: string; priceBasis: string } & Record<string, number | string | null>;

/** Exact conversion factors (international foot and pound). */
export const M_PER_FT = 0.3048;
export const CUBIC_M_PER_CUBIC_FT = M_PER_FT ** 3;
export const CUBIC_FT_PER_CUBIC_YD = 27;
export const CUBIC_M_PER_CUBIC_YD = CUBIC_M_PER_CUBIC_FT * CUBIC_FT_PER_CUBIC_YD;
export const SHORT_TON_LB = 2000;
export const SHORT_TON_KG = SHORT_TON_LB * POUND_KG;
/** 1 lb/ft³ in kg/m³. */
export const KG_M3_PER_LB_FT3 = POUND_KG / CUBIC_M_PER_CUBIC_FT;

export const MATERIALS = ["gravel", "crushedStone", "woodMulch", "custom"] as const;
export type Material = (typeof MATERIALS)[number];

/**
 * Typical loose bulk densities, rounded: gravel 2,700 lb/yd³ (= 100 lb/ft³) and crushed stone
 * 2,500 lb/yd³ (≈ 92.6 lb/ft³) from an Ohio University table of material weights; wood chips
 * 500 lb/yd³ (≈ 18.5 lb/ft³) from an EPA volume-to-weight table. Metric values are the same
 * figures converted and rounded. "custom" has no default: the user enters it.
 */
export const DENSITY_DEFAULTS: Record<UnitSystem, Record<Material, number | null>> = {
  imperial: { gravel: 100, crushedStone: 92.6, woodMulch: 18.5, custom: null },
  metric: { gravel: 1600, crushedStone: 1480, woodMulch: 300, custom: null },
};

const sys = (units: UnitSystem) => (units === "metric" ? "Metric" : "Imperial");
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const unitsOf = (value: string): UnitSystem => (value === "metric" ? "metric" : "imperial");
const materialOf = (value: string): Material => ((MATERIALS as readonly string[]).includes(value) ? (value as Material) : "gravel");
export const densityId = (material: Material, units: UnitSystem) => `density${cap(material)}${sys(units)}`;
export const priceId = (basis: "weight" | "volume", units: UnitSystem) => `price${cap(basis)}${sys(units)}`;

/** Rounds up to a whole bag, ignoring floating-point noise just above an integer. */
export function wholeBags(amount: number): number {
  return Math.ceil(amount - 1e-9);
}

export interface GravelInputs {
  units: UnitSystem;
  shape: "rectangle" | "circle";
  /** ft or m */
  length: number;
  width: number;
  diameter: number;
  /** in or cm */
  depth: number;
  /** lb/ft³ or kg/m³ */
  density: number;
}

/** Volume in m³ and weight in kg, whatever the unit system. */
export function gravelEstimate(p: GravelInputs) {
  const area = p.shape === "circle" ? (Math.PI * p.diameter ** 2) / 4 : p.length * p.width;
  if (p.units === "imperial") {
    const cubicFeet = (area * p.depth) / 12;
    const pounds = cubicFeet * p.density;
    return { area, cubicMeters: cubicFeet * CUBIC_M_PER_CUBIC_FT, cubicFeet, kilograms: pounds * POUND_KG };
  }
  const cubicMeters = (area * p.depth) / 100;
  return { area, cubicMeters, cubicFeet: cubicMeters / CUBIC_M_PER_CUBIC_FT, kilograms: cubicMeters * p.density };
}

export function makeGravelMulchEngine(ctx: EngineContext<GravelMulchText>) {
  const t = ctx.text;
  const both = ["imperial", "metric"] as const;
  const when = (units: UnitSystem, ...more: VisibleWhen[]): VisibleWhen | VisibleWhen[] =>
    more.length ? [{ field: "units", oneOf: [units] }, ...more] : { field: "units", oneOf: [units] };
  const len = (units: UnitSystem) => (units === "metric" ? "m" : "ft");
  const dims: NumberField[] = both.flatMap((units) => [
    { id: `length${sys(units)}`, type: "number" as const, label: t.length, defaultValue: units === "metric" ? 6 : 20, min: 0, minExclusive: true, max: 100000, suffix: len(units), visibleWhen: when(units, { field: "shape", oneOf: ["rectangle"] }) },
    { id: `width${sys(units)}`, type: "number" as const, label: t.width, defaultValue: units === "metric" ? 1.2 : 4, min: 0, minExclusive: true, max: 100000, suffix: len(units), visibleWhen: when(units, { field: "shape", oneOf: ["rectangle"] }) },
    { id: `diameter${sys(units)}`, type: "number" as const, label: t.diameter, defaultValue: units === "metric" ? 3 : 10, min: 0, minExclusive: true, max: 100000, suffix: len(units), visibleWhen: when(units, { field: "shape", oneOf: ["circle"] }) },
  ]);
  const depths: NumberField[] = both.map((units) => ({
    id: `depth${sys(units)}`,
    type: "number",
    label: t.depth,
    help: t.depthHelp,
    defaultValue: units === "metric" ? 8 : 3,
    min: 0,
    minExclusive: true,
    max: units === "metric" ? 10000 : 4000,
    suffix: units === "metric" ? "cm" : "in",
    visibleWhen: when(units),
  }));
  const densities: NumberField[] = both.flatMap((units) =>
    MATERIALS.map((material) => ({
      id: densityId(material, units),
      type: "number" as const,
      label: t.density,
      help: t.densityHelp,
      defaultValue: DENSITY_DEFAULTS[units][material],
      min: 0,
      minExclusive: true,
      max: units === "metric" ? 25000 : 1500,
      suffix: units === "metric" ? "kg/m³" : "lb/ft³",
      visibleWhen: when(units, { field: "material", oneOf: [material] }),
    })),
  );
  const bags: NumberField[] = both.map((units) => ({
    id: `bag${sys(units)}`,
    type: "number",
    label: t.bag,
    help: t.bagHelp,
    defaultValue: null,
    optional: true,
    min: 0,
    minExclusive: true,
    max: units === "metric" ? 10000 : 1000,
    suffix: units === "metric" ? "L" : "ft³",
    visibleWhen: when(units),
  }));
  const prices: NumberField[] = both.flatMap((units) =>
    (["weight", "volume"] as const).map((basis) => ({
      id: priceId(basis, units),
      type: "number" as const,
      label: t.price,
      help: t.priceHelp,
      defaultValue: null,
      optional: true,
      min: 0,
      max: 1_000_000,
      prefix: "currency",
      suffix: basis === "weight" ? (units === "metric" ? "/t" : `/${t.shortTonUnit}`) : units === "metric" ? "/m³" : "/yd³",
      visibleWhen: when(units, { field: "priceBasis", oneOf: [basis] }),
    })),
  );

  const read = (values: GravelMulchValues) => {
    const units = unitsOf(values.units);
    const material = materialOf(values.material);
    const n = (id: string) => Number(values[id] ?? 0);
    const inputs: GravelInputs = {
      units,
      shape: values.shape === "circle" ? "circle" : "rectangle",
      length: n(`length${sys(units)}`),
      width: n(`width${sys(units)}`),
      diameter: n(`diameter${sys(units)}`),
      depth: n(`depth${sys(units)}`),
      density: n(densityId(material, units)),
    };
    const basis = values.priceBasis === "volume" ? "volume" : "weight";
    const bag = values[`bag${sys(units)}`];
    const price = values[priceId(basis, units)];
    return { inputs, basis, bag: typeof bag === "number" ? bag : null, price: typeof price === "number" ? price : null };
  };

  return defineEngine<GravelMulchValues>({
    locale: ctx.locale,
    currencyField: "currency",
    // Dimension fields are generated per unit system, so the list is typed loosely here.
    fields: [
      { id: "units", type: "select", label: t.units, options: Object.entries(t.unitSystems).map(([value, label]) => ({ value, label })), defaultValue: "imperial", display: "segmented" },
      { id: "shape", type: "select", label: t.shape, options: Object.entries(t.shapes).map(([value, label]) => ({ value, label })), defaultValue: "rectangle", display: "segmented" },
      ...dims,
      ...depths,
      { id: "material", type: "select", label: t.material, options: MATERIALS.map((value) => ({ value, label: t.materials[value] })), defaultValue: "gravel" },
      ...densities,
      ...bags,
      currencyField(ctx),
      { id: "priceBasis", type: "select", label: t.priceBasis, options: Object.entries(t.priceBases).map(([value, label]) => ({ value, label })), defaultValue: "weight", display: "segmented" },
      ...prices,
    ] as never,
    compute: (values) => {
      const { inputs, basis, bag, price } = read(values);
      const e = gravelEstimate(inputs);
      const imperial = inputs.units === "imperial";
      const cubicYards = e.cubicMeters / CUBIC_M_PER_CUBIC_YD;
      const shortTons = e.kilograms / SHORT_TON_KG;
      const tonnes = e.kilograms / 1000;
      const num = (value: number, suffix: string, decimals = 2) => ({ kind: "number" as const, value, decimals, suffix });
      const secondary: ResultItem[] = [{ label: t.area, value: num(e.area, imperial ? "ft²" : "m²") }];
      if (imperial) {
        secondary.push(
          { label: t.volumeCubicFeet, value: num(e.cubicFeet, "ft³") },
          { label: t.volumeOther, value: num(e.cubicMeters, "m³", 3) },
          { label: t.weightShortTons, value: num(shortTons, t.shortTonUnit, 3) },
          { label: t.weightPounds, value: num(e.kilograms / POUND_KG, "lb", 0) },
          { label: t.weightTonnes, value: num(tonnes, "t", 3) },
        );
      } else {
        secondary.push(
          { label: t.volumeOther, value: num(cubicYards, "yd³", 3) },
          { label: t.weightTonnes, value: num(tonnes, "t", 3) },
          { label: t.weightKilograms, value: num(e.kilograms, "kg", 0) },
          { label: t.weightShortTons, value: num(shortTons, t.shortTonUnit, 3) },
        );
      }
      if (bag !== null) {
        const count = wholeBags(imperial ? e.cubicFeet / bag : (e.cubicMeters * 1000) / bag);
        secondary.push({ label: t.bags, value: { kind: "number", value: count, decimals: 0 } });
      }
      if (price !== null) {
        const quantity = basis === "weight" ? (imperial ? shortTons : tonnes) : imperial ? cubicYards : e.cubicMeters;
        secondary.push({ label: t.cost, value: { kind: "currency", amount: quantity * price } });
      }
      const densityText = `${ctx.fmt.number(inputs.density, 2)} ${imperial ? "lb/ft³" : "kg/m³"}`;
      return {
        primary: {
          label: t.volume,
          value: imperial ? num(cubicYards, "yd³") : num(e.cubicMeters, "m³"),
          caption: fill(t.caption, {
            area: `${ctx.fmt.number(e.area, 2)} ${imperial ? "ft²" : "m²"}`,
            depth: `${ctx.fmt.number(inputs.depth, 2)} ${imperial ? "in" : "cm"}`,
          }),
        },
        secondary,
        notes: [fill(t.notes.density, { density: densityText }), t.notes.order, t.notes.shortTon],
      };
    },
  });
}

export const gravelMulchEngine = makeGravelMulchEngine(englishContext(en));
