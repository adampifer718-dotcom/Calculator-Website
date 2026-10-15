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

/**
 * Volume units in litres. US customary units derive from the US gallon of
 * 231 cubic inches (3.785411784 L, exact); imperial units from the imperial
 * gallon of 4.54609 L (exact). See NIST Handbook 44, Appendix C.
 */
/** US liquid gallon: exactly 231 cubic inches = 3.785411784 liters. */
export const US_GALLON_L = 3.785411784;
const IMPERIAL_GALLON_L = 4.54609;

export const VOLUME: readonly UnitDef[] = [
  { value: "ml", label: "Millilitres", symbol: "mL", factor: 0.001 },
  { value: "l", label: "Litres", symbol: "L", factor: 1 },
  { value: "m3", label: "Cubic metres", symbol: "m³", factor: 1000 },
  { value: "tsp", label: "US teaspoons", symbol: "tsp", factor: US_GALLON_L / 768 },
  { value: "tbsp", label: "US tablespoons", symbol: "tbsp", factor: US_GALLON_L / 256 },
  { value: "floz", label: "US fluid ounces", symbol: "fl oz", factor: US_GALLON_L / 128 },
  { value: "cup", label: "US cups", symbol: "cup", factor: US_GALLON_L / 16 },
  { value: "pt", label: "US pints", symbol: "pt", factor: US_GALLON_L / 8 },
  { value: "qt", label: "US quarts", symbol: "qt", factor: US_GALLON_L / 4 },
  { value: "gal", label: "US gallons", symbol: "gal", factor: US_GALLON_L },
  { value: "impfloz", label: "Imperial fluid ounces", symbol: "imp fl oz", factor: IMPERIAL_GALLON_L / 160 },
  { value: "imppt", label: "Imperial pints", symbol: "imp pt", factor: IMPERIAL_GALLON_L / 8 },
  { value: "impgal", label: "Imperial gallons", symbol: "imp gal", factor: IMPERIAL_GALLON_L },
  { value: "in3", label: "Cubic inches", symbol: "in³", factor: 0.016387064 },
  { value: "ft3", label: "Cubic feet", symbol: "ft³", factor: 28.316846592 },
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


/**
 * Area units in square metres. Imperial units use the international foot
 * (0.3048 m, exact): 1 acre = 43,560 ft² = 4,046.8564224 m² and
 * 1 mi² = 640 acres = 2,589,988.110336 m², both exact. See NIST SP 811, Appendix B.
 */
export const AREA: readonly UnitDef[] = [
  { value: "mm2", label: "Square millimeters", symbol: "mm²", factor: 1e-6 },
  { value: "cm2", label: "Square centimeters", symbol: "cm²", factor: 1e-4 },
  { value: "m2", label: "Square meters", symbol: "m²", factor: 1 },
  { value: "ha", label: "Hectares", symbol: "ha", factor: 10000 },
  { value: "km2", label: "Square kilometers", symbol: "km²", factor: 1e6 },
  { value: "in2", label: "Square inches", symbol: "in²", factor: 0.00064516 },
  { value: "ft2", label: "Square feet", symbol: "ft²", factor: 0.09290304 },
  { value: "yd2", label: "Square yards", symbol: "yd²", factor: 0.83612736 },
  { value: "acre", label: "Acres", symbol: "ac", factor: 4046.8564224 },
  { value: "mi2", label: "Square miles", symbol: "mi²", factor: 2589988.110336 },
];

/**
 * Data storage units in bytes. Decimal (SI) prefixes are powers of 1,000
 * (1 kB = 1,000 B); binary (IEC) prefixes are powers of 1,024 (1 KiB = 1,024 B).
 * A byte is 8 bits. See NIST, "Prefixes for binary multiples".
 */
export const DATA_STORAGE: readonly UnitDef[] = [
  { value: "bit", label: "Bits", symbol: "bit", factor: 0.125 },
  { value: "B", label: "Bytes", symbol: "B", factor: 1 },
  { value: "kB", label: "Kilobytes", symbol: "kB", factor: 1e3 },
  { value: "MB", label: "Megabytes", symbol: "MB", factor: 1e6 },
  { value: "GB", label: "Gigabytes", symbol: "GB", factor: 1e9 },
  { value: "TB", label: "Terabytes", symbol: "TB", factor: 1e12 },
  { value: "PB", label: "Petabytes", symbol: "PB", factor: 1e15 },
  { value: "KiB", label: "Kibibytes", symbol: "KiB", factor: 2 ** 10 },
  { value: "MiB", label: "Mebibytes", symbol: "MiB", factor: 2 ** 20 },
  { value: "GiB", label: "Gibibytes", symbol: "GiB", factor: 2 ** 30 },
  { value: "TiB", label: "Tebibytes", symbol: "TiB", factor: 2 ** 40 },
  { value: "PiB", label: "Pebibytes", symbol: "PiB", factor: 2 ** 50 },
  { value: "kbit", label: "Kilobits", symbol: "kbit", factor: 125 },
  { value: "Mbit", label: "Megabits", symbol: "Mbit", factor: 125e3 },
  { value: "Gbit", label: "Gigabits", symbol: "Gbit", factor: 125e6 },
];
