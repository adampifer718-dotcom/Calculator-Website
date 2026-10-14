/**
 * Unit conversion factors. Length and mass factors are exact by definition
 * (international yard and pound agreement, 1959; SI). See NIST SP 811.
 */

export interface UnitDef {
  value: string;
  label: string;
  symbol: string;
  /** Size of one unit in the base unit (meters or kilograms). */
  factor: number;
}

export const LENGTH: readonly UnitDef[] = [
  { value: "mm", label: "Millimeters", symbol: "mm", factor: 0.001 },
  { value: "cm", label: "Centimeters", symbol: "cm", factor: 0.01 },
  { value: "m", label: "Meters", symbol: "m", factor: 1 },
  { value: "km", label: "Kilometers", symbol: "km", factor: 1000 },
  { value: "in", label: "Inches", symbol: "in", factor: 0.0254 },
  { value: "ft", label: "Feet", symbol: "ft", factor: 0.3048 },
  { value: "yd", label: "Yards", symbol: "yd", factor: 0.9144 },
  { value: "mi", label: "Miles", symbol: "mi", factor: 1609.344 },
  { value: "nmi", label: "Nautical miles", symbol: "nmi", factor: 1852 },
];

export const POUND_KG = 0.45359237;

export const MASS: readonly UnitDef[] = [
  { value: "mg", label: "Milligrams", symbol: "mg", factor: 1e-6 },
  { value: "g", label: "Grams", symbol: "g", factor: 0.001 },
  { value: "kg", label: "Kilograms", symbol: "kg", factor: 1 },
  { value: "t", label: "Metric tonnes", symbol: "t", factor: 1000 },
  { value: "oz", label: "Ounces (avoirdupois)", symbol: "oz", factor: POUND_KG / 16 },
  { value: "lb", label: "Pounds", symbol: "lb", factor: POUND_KG },
  { value: "st", label: "Stones", symbol: "st", factor: POUND_KG * 14 },
];

export function findUnit(units: readonly UnitDef[], value: string): UnitDef {
  return units.find((u) => u.value === value) ?? units[0];
}

/** Converts between two units of the same table via the base unit. */
export function convertUnits(value: number, from: UnitDef, to: UnitDef): number {
  if (from.value === to.value) return value;
  return (value * from.factor) / to.factor;
}

export const TEMPERATURE_UNITS = [
  { value: "C", label: "Celsius (°C)", symbol: "°C" },
  { value: "F", label: "Fahrenheit (°F)", symbol: "°F" },
  { value: "K", label: "Kelvin (K)", symbol: "K" },
] as const;

export type TemperatureUnit = (typeof TEMPERATURE_UNITS)[number]["value"];

/** Converts a temperature to kelvin. */
export function toKelvin(value: number, unit: TemperatureUnit): number {
  if (unit === "C") return value + 273.15;
  if (unit === "F") return ((value - 32) * 5) / 9 + 273.15;
  return value;
}

export function fromKelvin(kelvin: number, unit: TemperatureUnit): number {
  if (unit === "C") return kelvin - 273.15;
  if (unit === "F") return ((kelvin - 273.15) * 9) / 5 + 32;
  return kelvin;
}

/** Converts between temperature scales. Celsius ↔ Fahrenheit is done directly to avoid rounding through kelvin. */
export function convertTemperature(value: number, from: TemperatureUnit, to: TemperatureUnit): number {
  if (from === to) return value;
  if (from === "C" && to === "F") return (value * 9) / 5 + 32;
  if (from === "F" && to === "C") return ((value - 32) * 5) / 9;
  return fromKelvin(toKelvin(value, from), to);
}

/** US liquid gallon: exactly 231 cubic inches = 3.785411784 liters. */
export const US_GALLON_L = 3.785411784;
