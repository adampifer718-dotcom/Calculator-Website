import { AREA, DATA_STORAGE, LENGTH, MASS, SPEED, VOLUME, type UnitDef } from "@/lib/math/units";
import type { LinearSpec, UnitSpec } from "../types";

/*
 * Converters that already exist as calculator pages. They use exactly the
 * same unit tables, so the universal converter on /unit-converters gives the
 * same results as the calculator pages, and the directory links to those
 * pages instead of creating duplicates.
 */

const fromTable = (table: readonly UnitDef[]): UnitSpec[] => table.map((u) => ({ id: u.value, symbol: u.symbol, factor: u.factor }));

const roundTripKnown = (from: string, to: string, expected: number) => ({ value: 1, from, to, expected });

export const length: LinearSpec = {
  id: "length",
  slug: "length",
  calculatorSlug: "length-converter",
  group: "common",
  kind: "linear",
  dimension: "length",
  baseUnit: "m",
  units: fromTable(LENGTH),
  defaultFrom: "km",
  defaultTo: "mi",
  defaultValue: 10,
  popularPairs: [["km", "mi"], ["mi", "km"], ["ft", "m"], ["in", "cm"]],
  related: ["area", "speed", "typography"],
  known: [roundTripKnown("mi", "m", 1609.344), roundTripKnown("in", "cm", 2.54)],
};

export const weight: LinearSpec = {
  id: "weight",
  slug: "weight",
  calculatorSlug: "weight-converter",
  group: "common",
  kind: "linear",
  dimension: "mass",
  baseUnit: "kg",
  units: fromTable(MASS),
  defaultFrom: "lb",
  defaultTo: "kg",
  defaultValue: 150,
  popularPairs: [["lb", "kg"], ["kg", "lb"], ["oz", "g"], ["st", "kg"]],
  related: ["force", "density", "volume"],
  known: [roundTripKnown("lb", "kg", 0.45359237), roundTripKnown("st", "lb", 14)],
};

export const volume: LinearSpec = {
  id: "volume",
  slug: "volume",
  calculatorSlug: "volume-converter",
  group: "common",
  kind: "linear",
  dimension: "volume",
  baseUnit: "l",
  units: fromTable(VOLUME),
  defaultFrom: "gal",
  defaultTo: "l",
  defaultValue: 1,
  popularPairs: [["gal", "l"], ["l", "gal"], ["cup", "ml"], ["floz", "ml"]],
  related: ["dry-volume", "flow", "lumber-volume"],
  known: [roundTripKnown("gal", "l", 3.785411784), roundTripKnown("impgal", "l", 4.54609)],
};

export const area: LinearSpec = {
  id: "area",
  slug: "area",
  calculatorSlug: "area-converter",
  group: "common",
  kind: "linear",
  dimension: "area",
  baseUnit: "m2",
  units: fromTable(AREA),
  defaultFrom: "acre",
  defaultTo: "m2",
  defaultValue: 1,
  popularPairs: [["acre", "m2"], ["ft2", "m2"], ["ha", "acre"], ["m2", "ft2"]],
  related: ["length", "volume"],
  known: [roundTripKnown("acre", "m2", 4046.8564224), roundTripKnown("ft2", "m2", 0.09290304)],
};

export const speed: LinearSpec = {
  id: "speed",
  slug: "speed",
  calculatorSlug: "speed-converter",
  group: "common",
  kind: "linear",
  dimension: "speed",
  baseUnit: "ms",
  units: fromTable(SPEED),
  defaultFrom: "kmh",
  defaultTo: "mph",
  defaultValue: 100,
  popularPairs: [["kmh", "mph"], ["mph", "kmh"], ["kn", "kmh"], ["ms", "kmh"]],
  related: ["length", "time", "acceleration"],
  known: [roundTripKnown("mph", "kmh", 1.609344), roundTripKnown("kn", "kmh", 1.852)],
};

export const dataStorage: LinearSpec = {
  id: "data-storage",
  slug: "data-storage",
  calculatorSlug: "data-storage-converter",
  group: "common",
  kind: "linear",
  dimension: "information",
  baseUnit: "B",
  units: fromTable(DATA_STORAGE),
  defaultFrom: "GB",
  defaultTo: "GiB",
  defaultValue: 500,
  popularPairs: [["GB", "GiB"], ["MB", "MiB"], ["TB", "GB"], ["B", "bit"]],
  related: ["data-transfer", "prefixes"],
  known: [roundTripKnown("KiB", "B", 1024), roundTripKnown("GB", "MB", 1000)],
};

/** Temperature scales are affine: kelvin = value × factor + offset. */
export const temperature: LinearSpec = {
  id: "temperature",
  slug: "temperature",
  calculatorSlug: "temperature-converter",
  group: "common",
  kind: "linear",
  dimension: "temperature",
  baseUnit: "K",
  allowNegative: true,
  units: [
    { id: "C", symbol: "°C", factor: 1, offset: 273.15, min: -273.15 },
    { id: "F", symbol: "°F", factor: 5 / 9, offset: 273.15 - (32 * 5) / 9, min: -459.67 },
    { id: "K", symbol: "K", factor: 1, offset: 0, min: 0 },
  ],
  defaultFrom: "C",
  defaultTo: "F",
  defaultValue: 20,
  popularPairs: [["C", "F"], ["F", "C"], ["C", "K"], ["K", "C"]],
  related: ["temperature-interval", "thermal-expansion"],
  known: [
    { value: 100, from: "C", to: "F", expected: 212 },
    { value: -40, from: "F", to: "C", expected: -40, tolerance: 1e-12 },
    { value: 0, from: "K", to: "C", expected: -273.15 },
  ],
};

export const EXISTING_CONVERTERS: readonly LinearSpec[] = [length, weight, volume, temperature, area, speed, dataStorage];
