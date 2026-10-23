import { C_LIGHT, GRAIN, IMPERIAL_GALLON, INCH, JULIAN_YEAR, MILE, US_GALLON } from "../constants";
import type { LinearSpec } from "../types";

/*
 * Molar masses from the CIAAW abridged standard atomic weights (conventional
 * values: Ca 40.078, C 12.011, O 15.999, H 1.008), in g/mol.
 */
const M_GLUCOSE = 6 * 12.011 + 12 * 1.008 + 6 * 15.999; // C₆H₁₂O₆ = 180.156
const M_CACO3 = 40.078 + 12.011 + 3 * 15.999; // CaCO₃ = 100.086
const M_CAO = 40.078 + 15.999; // CaO = 56.077

/** Blood glucose: mmol/L ↔ mg/dL through the molar mass of glucose. */
export const glucose: LinearSpec = {
  id: "glucose",
  slug: "blood-sugar-converter",
  group: "fluids",
  kind: "linear",
  dimension: "glucose-concentration",
  baseUnit: "mmol-l",
  units: [
    { id: "mmol-l", symbol: "mmol/L", factor: 1, system: "si" },
    // 1 mg/dL = 10 mg/L = 10 / 180.156 mmol/L
    { id: "mg-dl", symbol: "mg/dL", factor: 10 / M_GLUCOSE, system: "metric" },
    { id: "mg-l", symbol: "mg/L", factor: 1 / M_GLUCOSE, system: "metric" },
    { id: "g-l", symbol: "g/L", factor: 1000 / M_GLUCOSE, system: "metric" },
    { id: "umol-l", symbol: "µmol/L", factor: 1e-3, system: "si" },
  ],
  defaultFrom: "mg-dl",
  defaultTo: "mmol-l",
  defaultValue: 100,
  popularPairs: [
    ["mg-dl", "mmol-l"],
    ["mmol-l", "mg-dl"],
    ["g-l", "mmol-l"],
  ],
  related: ["molar-concentration", "solution-concentration", "density"],
  known: [
    // 100 × 10 / 180.156
    { value: 100, from: "mg-dl", to: "mmol-l", expected: 5.550744909966918 },
    // 7 × 18.0156
    { value: 7, from: "mmol-l", to: "mg-dl", expected: 126.1092 },
    { value: 1, from: "g-l", to: "mg-dl", expected: 100 },
    { value: 5.5, from: "mmol-l", to: "umol-l", expected: 5500 },
  ],
};

/** Water hardness, expressed as calcium carbonate equivalent (mg/L as CaCO₃). */
export const waterHardness: LinearSpec = {
  id: "water-hardness",
  slug: "water-hardness-converter",
  group: "fluids",
  kind: "linear",
  dimension: "hardness",
  baseUnit: "mg-l",
  units: [
    { id: "mg-l", symbol: "mg/L CaCO₃", factor: 1, system: "si" },
    { id: "ppm", symbol: "ppm CaCO₃", factor: 1, system: "other" },
    { id: "mmol-l", symbol: "mmol/L", factor: M_CACO3, system: "si" },
    // Calcium carbonate is divalent: 1 meq = ½ mmol.
    { id: "meq-l", symbol: "meq/L", factor: M_CACO3 / 2, system: "si" },
    // 1 grain CaCO₃ per US gallon
    { id: "gpg", symbol: "gpg", factor: (GRAIN * 1e6) / (US_GALLON * 1e3), system: "us" },
    // English (Clark) degree: 1 grain CaCO₃ per imperial gallon
    { id: "clark", symbol: "°e", factor: (GRAIN * 1e6) / (IMPERIAL_GALLON * 1e3), system: "imperial" },
    // German degree: 10 mg CaO per litre, as CaCO₃
    { id: "dh", symbol: "°dH", factor: (10 * M_CACO3) / M_CAO, system: "other" },
    // French degree: 10 mg CaCO₃ per litre
    { id: "fh", symbol: "°fH", factor: 10, system: "other" },
  ],
  defaultFrom: "gpg",
  defaultTo: "mg-l",
  defaultValue: 10,
  popularPairs: [
    ["gpg", "mg-l"],
    ["mg-l", "gpg"],
    ["dh", "mg-l"],
    ["fh", "dh"],
    ["mmol-l", "dh"],
  ],
  related: ["solution-concentration", "molar-concentration", "glucose"],
  known: [
    // 64.79891 mg / 3.785411784 L
    { value: 1, from: "gpg", to: "mg-l", expected: 17.11806104527095 },
    // 10 × 100.086 / 56.077
    { value: 1, from: "dh", to: "mg-l", expected: 17.84795905629759 },
    { value: 1, from: "fh", to: "mg-l", expected: 10 },
    { value: 1, from: "mmol-l", to: "fh", expected: 10.0086 },
    // 64.79891 mg / 4.54609 L
    { value: 1, from: "clark", to: "mg-l", expected: 14.253767523300242 },
  ],
};

/** Diameter of an AWG gauge n in millimetres (ASTM B258): d = 0.127 mm × 92^((36 − n) / 39). */
export const awgToMm = (n: number) => 0.127 * 92 ** ((36 - n) / 39);
export const mmToAwg = (d: number) => 36 - (39 * Math.log(d / 0.127)) / Math.log(92);
/** Circular mil: the area of a circle one mil (0.001 in) in diameter. */
const MIL_MM = INCH * 1e3 * 1e-3; // 0.0254 mm

/**
 * American Wire Gauge. Every unit is a function of the conductor diameter
 * (base unit: millimetres), so gauges, diameters and cross-sections all convert.
 */
export const wireGauge: LinearSpec = {
  id: "wire-gauge",
  slug: "wire-gauge-converter",
  group: "electricity",
  kind: "linear",
  dimension: "wire-size",
  baseUnit: "mm",
  units: [
    // Gauge numbers: 0 = 1/0, −1 = 2/0, −2 = 3/0, −3 = 4/0; thicker sizes continue below −3.
    { id: "awg", symbol: "AWG", toBase: (n) => awgToMm(n), fromBase: (d) => mmToAwg(d), system: "us" },
    { id: "mm", symbol: "mm", factor: 1, system: "si", min: 0, minExclusive: true },
    { id: "in", symbol: "in", factor: INCH * 1e3, system: "us", min: 0, minExclusive: true },
    { id: "mil", symbol: "mil", factor: MIL_MM, system: "us", min: 0, minExclusive: true },
    { id: "mm2", symbol: "mm²", toBase: (a) => Math.sqrt((4 * a) / Math.PI), fromBase: (d) => (Math.PI / 4) * d * d, system: "si", min: 0, minExclusive: true },
    { id: "kcmil", symbol: "kcmil", toBase: (k) => Math.sqrt(k * 1000) * MIL_MM, fromBase: (d) => (d / MIL_MM) ** 2 / 1000, system: "us", min: 0, minExclusive: true },
    { id: "cmil", symbol: "cmil", toBase: (c) => Math.sqrt(c) * MIL_MM, fromBase: (d) => (d / MIL_MM) ** 2, system: "us", min: 0, minExclusive: true },
  ],
  defaultFrom: "awg",
  defaultTo: "mm2",
  defaultValue: 12,
  popularPairs: [
    ["awg", "mm2"],
    ["mm2", "awg"],
    ["awg", "mm"],
    ["mm", "awg"],
    ["kcmil", "mm2"],
  ],
  allowNegative: true,
  related: ["electric-resistance", "current", "length"],
  known: [
    // ASTM B258 table: 10 AWG = 0.1019 in = 2.588 mm; 4/0 = 0.4600 in exactly
    { value: 10, from: "awg", to: "mm", expected: 2.5881867280128636 },
    { value: -3, from: "awg", to: "in", expected: 0.46 },
    { value: 36, from: "awg", to: "in", expected: 0.005 },
    // π/4 × 2.58819²
    { value: 10, from: "awg", to: "mm2", expected: 5.261154954510373 },
    { value: 2, from: "mm", to: "awg", expected: 12.223589909544295 },
    // √(250,000) mil = 500 mil = 12.7 mm
    { value: 250, from: "kcmil", to: "mm", expected: 12.7 },
    { value: 1000, from: "cmil", to: "kcmil", expected: 1 },
  ],
};

/** Astronomical unit (exact, IAU 2012 Resolution B2), in metres. */
export const ASTRONOMICAL_UNIT = 149597870700;
/** Light-year: the distance light travels in one Julian year (exact, IAU). */
export const LIGHT_YEAR = C_LIGHT * JULIAN_YEAR;
/** Parsec: 648,000/π astronomical units (exact, IAU 2015 Resolution B2). */
export const PARSEC = (648000 / Math.PI) * ASTRONOMICAL_UNIT;

export const astronomical: LinearSpec = {
  id: "astronomical",
  slug: "astronomical-distance-converter",
  group: "other",
  kind: "linear",
  dimension: "length",
  baseUnit: "m",
  units: [
    { id: "m", symbol: "m", factor: 1, system: "si" },
    { id: "km", symbol: "km", factor: 1e3, system: "si" },
    { id: "mi", symbol: "mi", factor: MILE, system: "us" },
    { id: "au", symbol: "au", factor: ASTRONOMICAL_UNIT, system: "other" },
    { id: "ly", symbol: "ly", factor: LIGHT_YEAR, system: "other" },
    { id: "pc", symbol: "pc", factor: PARSEC, system: "other" },
    { id: "kpc", symbol: "kpc", factor: 1e3 * PARSEC, system: "other" },
    { id: "mpc", symbol: "Mpc", factor: 1e6 * PARSEC, system: "other" },
  ],
  defaultFrom: "ly",
  defaultTo: "km",
  defaultValue: 1,
  popularPairs: [
    ["ly", "km"],
    ["au", "km"],
    ["pc", "ly"],
    ["ly", "au"],
    ["pc", "km"],
  ],
  related: ["length", "speed", "time"],
  known: [
    { value: 1, from: "ly", to: "km", expected: 9460730472580.8 },
    { value: 1, from: "au", to: "km", expected: 149597870.7 },
    // 648000/π au ÷ (c × Julian year)
    { value: 1, from: "pc", to: "ly", expected: 3.2615637771674333 },
    { value: 1, from: "ly", to: "au", expected: 63241.07708426628 },
    // 1 Mpc in light-years: 1e6 × 3.26156…
    { value: 1, from: "mpc", to: "ly", expected: 3261563.7771674334 },
    // 4.2465 ly (Proxima Centauri) in km
    { value: 4.2465, from: "ly", to: "km", expected: 40174991951814.37 },
  ],
};

export const extraLinearConverters = { glucose, waterHardness, wireGauge, astronomical };
