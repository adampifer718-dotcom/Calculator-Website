import { DAY, FOOT, G_N, HOUR, IMPERIAL_GALLON, INCH, OUNCE, POUND, POUND_FORCE, US_GALLON } from "../constants";
import type { LinearSpec } from "../types";

/** US oil barrel: 42 US liquid gallons (exact), in cubic metres. */
export const OIL_BARREL = 42 * US_GALLON;
/** Pound-mole: the amount of substance in one pound of a substance with molar mass 1 g/mol → 453.59237 mol (exact). */
export const POUND_MOLE = POUND * 1000;
/** Short ton (2,000 lb, exact) and metric tonne, in kilograms. */
export const SHORT_TON = 2000 * POUND;
export const TONNE = 1000;
/** Dyne (1 g·cm/s² = 1e-5 N, exact). */
export const DYNE = 1e-5;
/** Poise (1 dyn·s/cm² = 0.1 Pa·s, exact). */
export const POISE = 0.1;
/** Stokes (1 cm²/s = 1e-4 m²/s, exact). */
export const STOKES = 1e-4;
/**
 * Darcy: the permeability that passes 1 cm³/s of a 1 cP fluid through 1 cm² under 1 atm/cm.
 * NIST SP 811 Appendix B.8 gives 1 darcy = 9.869233 E-13 m² (the definition evaluates to 9.8692327e-13 m²).
 */
export const DARCY = 9.869233e-13;

const MINUTE = 60;

export const flow: LinearSpec = {
  id: "flow",
  slug: "flow-converter",
  group: "fluids",
  kind: "linear",
  dimension: "volumetric-flow",
  baseUnit: "m3-s",
  units: [
    { id: "m3-s", symbol: "m³/s", factor: 1, system: "si" },
    { id: "m3-h", symbol: "m³/h", factor: 1 / HOUR, system: "si" },
    { id: "m3-d", symbol: "m³/d", factor: 1 / DAY, system: "si" },
    { id: "l-s", symbol: "L/s", factor: 1e-3, system: "metric" },
    { id: "l-min", symbol: "L/min", factor: 1e-3 / MINUTE, system: "metric" },
    { id: "l-h", symbol: "L/h", factor: 1e-3 / HOUR, system: "metric" },
    { id: "ml-min", symbol: "mL/min", factor: 1e-6 / MINUTE, system: "metric" },
    { id: "ml-h", symbol: "mL/h", factor: 1e-6 / HOUR, system: "metric" },
    { id: "ft3-s", symbol: "ft³/s", factor: FOOT ** 3, system: "us" },
    // cfm: cubic feet per minute
    { id: "ft3-min", symbol: "ft³/min", factor: FOOT ** 3 / MINUTE, system: "us" },
    { id: "ft3-h", symbol: "ft³/h", factor: FOOT ** 3 / HOUR, system: "us" },
    { id: "gal-min", symbol: "gal (US)/min", factor: US_GALLON / MINUTE, system: "us" },
    { id: "gal-h", symbol: "gal (US)/h", factor: US_GALLON / HOUR, system: "us" },
    { id: "gal-d", symbol: "gal (US)/d", factor: US_GALLON / DAY, system: "us" },
    // MGD: million US gallons per day (water and wastewater plants)
    { id: "mgd", symbol: "MGD", factor: (1e6 * US_GALLON) / DAY, system: "us" },
    { id: "impgal-min", symbol: "gal (UK)/min", factor: IMPERIAL_GALLON / MINUTE, system: "imperial" },
    { id: "impgal-h", symbol: "gal (UK)/h", factor: IMPERIAL_GALLON / HOUR, system: "imperial" },
    { id: "bbl-d", symbol: "bbl/d", factor: OIL_BARREL / DAY, system: "us" },
  ],
  defaultFrom: "l-min",
  defaultTo: "gal-min",
  defaultValue: 10,
  popularPairs: [
    ["l-min", "gal-min"],
    ["gal-min", "l-min"],
    ["m3-h", "ft3-min"],
    ["ft3-min", "m3-h"],
    ["l-s", "gal-min"],
    ["m3-h", "l-min"],
    ["bbl-d", "m3-d"],
    ["mgd", "m3-d"],
  ],
  related: ["volume", "mass-flow", "speed", "time"],
  known: [
    // 1 / 3.785411784 = 0.26417205235814845 US gal/min per L/min
    { value: 1, from: "l-min", to: "gal-min", expected: 0.26417205235814845 },
    // 1 cfm = 0.028316846592 m³ × 60 = 1.69901079552 m³/h
    { value: 1, from: "ft3-min", to: "m3-h", expected: 1.69901079552 },
    // 1 bbl = 42 × 0.003785411784 m³ = 0.158987294928 m³
    { value: 1, from: "bbl-d", to: "m3-d", expected: 0.158987294928 },
    // 1 MGD = 1e6 × 0.003785411784 m³ / day = 3785.411784 m³/d
    { value: 1, from: "mgd", to: "m3-d", expected: 3785.411784 },
    // 1 imperial gal = 4.54609 L → 4.54609 / 3.785411784 = 1.200949925504855 US gal
    { value: 1, from: "impgal-min", to: "gal-min", expected: 1.200949925504855 },
    // 1 m³/s = 1000 L/s × 60 = 60,000 L/min
    { value: 1, from: "m3-s", to: "l-min", expected: 60000 },
    { value: 0, from: "l-s", to: "gal-min", expected: 0 },
  ],
};

export const massFlow: LinearSpec = {
  id: "mass-flow",
  slug: "mass-flow-converter",
  group: "fluids",
  kind: "linear",
  dimension: "mass-flow",
  baseUnit: "kg-s",
  units: [
    { id: "kg-s", symbol: "kg/s", factor: 1, system: "si" },
    { id: "g-s", symbol: "g/s", factor: 1e-3, system: "si" },
    { id: "mg-s", symbol: "mg/s", factor: 1e-6, system: "si" },
    { id: "g-min", symbol: "g/min", factor: 1e-3 / MINUTE, system: "metric" },
    { id: "g-h", symbol: "g/h", factor: 1e-3 / HOUR, system: "metric" },
    { id: "kg-min", symbol: "kg/min", factor: 1 / MINUTE, system: "metric" },
    { id: "kg-h", symbol: "kg/h", factor: 1 / HOUR, system: "metric" },
    { id: "kg-d", symbol: "kg/d", factor: 1 / DAY, system: "metric" },
    { id: "t-h", symbol: "t/h", factor: TONNE / HOUR, system: "metric" },
    { id: "t-d", symbol: "t/d", factor: TONNE / DAY, system: "metric" },
    { id: "lb-s", symbol: "lb/s", factor: POUND, system: "us" },
    { id: "lb-min", symbol: "lb/min", factor: POUND / MINUTE, system: "us" },
    { id: "lb-h", symbol: "lb/h", factor: POUND / HOUR, system: "us" },
    { id: "lb-d", symbol: "lb/d", factor: POUND / DAY, system: "us" },
    { id: "oz-s", symbol: "oz/s", factor: OUNCE, system: "us" },
    { id: "ton-h", symbol: "ton (US)/h", factor: SHORT_TON / HOUR, system: "us" },
    { id: "ton-d", symbol: "ton (US)/d", factor: SHORT_TON / DAY, system: "us" },
  ],
  defaultFrom: "kg-h",
  defaultTo: "lb-h",
  defaultValue: 100,
  popularPairs: [
    ["kg-h", "lb-h"],
    ["lb-h", "kg-h"],
    ["kg-s", "lb-s"],
    ["g-s", "kg-h"],
    ["t-h", "kg-s"],
    ["lb-min", "kg-min"],
    ["ton-h", "t-h"],
  ],
  related: ["weight", "flow", "molar-flow", "mass-flux-density"],
  known: [
    // 1 / 0.45359237 = 2.2046226218487757 lb per kg
    { value: 1, from: "kg-h", to: "lb-h", expected: 2.2046226218487757 },
    // 1 t/h = 1000 kg / 3600 s = 0.2777… kg/s
    { value: 1, from: "t-h", to: "kg-s", expected: 1000 / 3600 },
    // 1 short ton = 907.18474 kg → 0.90718474 t
    { value: 1, from: "ton-h", to: "t-h", expected: 0.90718474 },
    // 1 g/s = 3.6 kg/h
    { value: 1, from: "g-s", to: "kg-h", expected: 3.6 },
    // 1 lb/min = 0.45359237 kg/min
    { value: 1, from: "lb-min", to: "kg-min", expected: 0.45359237 },
    // 16 oz = 1 lb (exact)
    { value: 16, from: "oz-s", to: "lb-s", expected: 1 },
    // 1e6 lb/h (large boiler) = 453,592.37 kg/h
    { value: 1e6, from: "lb-h", to: "kg-h", expected: 453592.37 },
  ],
};

export const molarFlow: LinearSpec = {
  id: "molar-flow",
  slug: "molar-flow-converter",
  group: "fluids",
  kind: "linear",
  dimension: "molar-flow",
  baseUnit: "mol-s",
  units: [
    { id: "mol-s", symbol: "mol/s", factor: 1, system: "si" },
    { id: "kmol-s", symbol: "kmol/s", factor: 1e3, system: "si" },
    { id: "mmol-s", symbol: "mmol/s", factor: 1e-3, system: "si" },
    { id: "umol-s", symbol: "µmol/s", factor: 1e-6, system: "si" },
    { id: "nmol-s", symbol: "nmol/s", factor: 1e-9, system: "si" },
    { id: "mol-min", symbol: "mol/min", factor: 1 / MINUTE, system: "metric" },
    { id: "mol-h", symbol: "mol/h", factor: 1 / HOUR, system: "metric" },
    { id: "mmol-min", symbol: "mmol/min", factor: 1e-3 / MINUTE, system: "metric" },
    { id: "umol-min", symbol: "µmol/min", factor: 1e-6 / MINUTE, system: "metric" },
    { id: "kmol-min", symbol: "kmol/min", factor: 1e3 / MINUTE, system: "metric" },
    { id: "kmol-h", symbol: "kmol/h", factor: 1e3 / HOUR, system: "metric" },
    { id: "kmol-d", symbol: "kmol/d", factor: 1e3 / DAY, system: "metric" },
    { id: "lbmol-s", symbol: "lb-mol/s", factor: POUND_MOLE, system: "us" },
    { id: "lbmol-min", symbol: "lb-mol/min", factor: POUND_MOLE / MINUTE, system: "us" },
    { id: "lbmol-h", symbol: "lb-mol/h", factor: POUND_MOLE / HOUR, system: "us" },
  ],
  defaultFrom: "kmol-h",
  defaultTo: "lbmol-h",
  defaultValue: 100,
  popularPairs: [
    ["kmol-h", "lbmol-h"],
    ["lbmol-h", "kmol-h"],
    ["mol-s", "kmol-h"],
    ["kmol-h", "mol-s"],
    ["mmol-min", "umol-s"],
    ["lbmol-h", "mol-s"],
  ],
  related: ["mass-flow", "flow", "molar-concentration"],
  known: [
    // 1 lb-mol = 453.59237 mol → 1 kmol = 1 / 0.45359237 = 2.2046226218487757 lb-mol
    { value: 1, from: "kmol-h", to: "lbmol-h", expected: 2.2046226218487757 },
    // 1 mol/s × 3600 s/h / 1000 = 3.6 kmol/h
    { value: 1, from: "mol-s", to: "kmol-h", expected: 3.6 },
    // 1 lb-mol/h = 453.59237 / 3600 = 0.12599788055555556 mol/s
    { value: 1, from: "lbmol-h", to: "mol-s", expected: 0.12599788055555556 },
    // 1 mmol/min = 1000 µmol / 60 s = 16.666… µmol/s
    { value: 1, from: "mmol-min", to: "umol-s", expected: 1000 / 60 },
    // 24 kmol/d = 1 kmol/h
    { value: 24, from: "kmol-d", to: "kmol-h", expected: 1 },
    // 1 nmol/s = 3.6e-6 mol/h
    { value: 1, from: "nmol-s", to: "mol-h", expected: 3.6e-6 },
  ],
};

export const massFluxDensity: LinearSpec = {
  id: "mass-flux-density",
  slug: "mass-flux-density-converter",
  group: "fluids",
  kind: "linear",
  dimension: "mass-flux-density",
  baseUnit: "kg-m2-s",
  units: [
    { id: "kg-m2-s", symbol: "kg/(m²·s)", factor: 1, system: "si" },
    { id: "g-m2-s", symbol: "g/(m²·s)", factor: 1e-3, system: "si" },
    { id: "kg-m2-min", symbol: "kg/(m²·min)", factor: 1 / MINUTE, system: "metric" },
    { id: "kg-m2-h", symbol: "kg/(m²·h)", factor: 1 / HOUR, system: "metric" },
    { id: "g-m2-h", symbol: "g/(m²·h)", factor: 1e-3 / HOUR, system: "metric" },
    { id: "g-m2-d", symbol: "g/(m²·d)", factor: 1e-3 / DAY, system: "metric" },
    // 1 g/(cm²·s) = 1e-3 kg / 1e-4 m² = 10 kg/(m²·s)
    { id: "g-cm2-s", symbol: "g/(cm²·s)", factor: 10, system: "metric" },
    { id: "g-cm2-min", symbol: "g/(cm²·min)", factor: 10 / MINUTE, system: "metric" },
    { id: "lb-ft2-s", symbol: "lb/(ft²·s)", factor: POUND / FOOT ** 2, system: "us" },
    { id: "lb-ft2-min", symbol: "lb/(ft²·min)", factor: POUND / FOOT ** 2 / MINUTE, system: "us" },
    { id: "lb-ft2-h", symbol: "lb/(ft²·h)", factor: POUND / FOOT ** 2 / HOUR, system: "us" },
    { id: "lb-in2-s", symbol: "lb/(in²·s)", factor: POUND / INCH ** 2, system: "us" },
  ],
  defaultFrom: "kg-m2-s",
  defaultTo: "lb-ft2-h",
  defaultValue: 1,
  popularPairs: [
    ["kg-m2-s", "lb-ft2-h"],
    ["lb-ft2-h", "kg-m2-s"],
    ["kg-m2-h", "g-m2-s"],
    ["lb-ft2-s", "kg-m2-s"],
    ["g-cm2-s", "kg-m2-s"],
    ["g-m2-d", "kg-m2-h"],
  ],
  related: ["mass-flow", "heat-flux-density", "area", "density"],
  known: [
    // 1 lb/ft² = 0.45359237 / 0.09290304 = 4.882427636383051 kg/m²
    { value: 1, from: "lb-ft2-s", to: "kg-m2-s", expected: 4.882427636383051 },
    // 1 kg/(m²·s) × 3600 / 4.882427636383051 = 737.3381170410781 lb/(ft²·h)
    { value: 1, from: "kg-m2-s", to: "lb-ft2-h", expected: 737.3381170410781 },
    // 1 g/(cm²·s) = 10 kg/(m²·s)
    { value: 1, from: "g-cm2-s", to: "kg-m2-s", expected: 10 },
    // 1 kg/(m²·h) = 1000 g / 3600 s = 0.2777… g/(m²·s)
    { value: 1, from: "kg-m2-h", to: "g-m2-s", expected: 1000 / 3600 },
    // 1 lb/in² = 144 lb/ft²
    { value: 1, from: "lb-in2-s", to: "lb-ft2-s", expected: 144 },
    // water vapour transmission: 24 g/(m²·d) = 1 g/(m²·h)
    { value: 24, from: "g-m2-d", to: "g-m2-h", expected: 1 },
  ],
};

export const molarConcentration: LinearSpec = {
  id: "molar-concentration",
  slug: "molar-concentration-converter",
  group: "fluids",
  kind: "linear",
  dimension: "amount-concentration",
  baseUnit: "mol-m3",
  units: [
    { id: "mol-m3", symbol: "mol/m³", factor: 1, system: "si" },
    { id: "kmol-m3", symbol: "kmol/m³", factor: 1e3, system: "si" },
    // molar: 1 M = 1 mol/L = 1000 mol/m³
    { id: "mol-l", symbol: "mol/L (M)", factor: 1e3, system: "metric" },
    { id: "mmol-l", symbol: "mmol/L (mM)", factor: 1, system: "metric" },
    { id: "umol-l", symbol: "µmol/L (µM)", factor: 1e-3, system: "metric" },
    { id: "nmol-l", symbol: "nmol/L (nM)", factor: 1e-6, system: "metric" },
    { id: "pmol-l", symbol: "pmol/L (pM)", factor: 1e-9, system: "metric" },
    { id: "mol-ml", symbol: "mol/mL", factor: 1e6, system: "metric" },
    { id: "mmol-ml", symbol: "mmol/mL", factor: 1e3, system: "metric" },
    { id: "mol-ft3", symbol: "mol/ft³", factor: 1 / FOOT ** 3, system: "us" },
    { id: "lbmol-ft3", symbol: "lb-mol/ft³", factor: POUND_MOLE / FOOT ** 3, system: "us" },
    { id: "lbmol-gal", symbol: "lb-mol/gal (US)", factor: POUND_MOLE / US_GALLON, system: "us" },
  ],
  defaultFrom: "mmol-l",
  defaultTo: "umol-l",
  defaultValue: 1,
  popularPairs: [
    ["mol-l", "mmol-l"],
    ["mmol-l", "umol-l"],
    ["umol-l", "nmol-l"],
    ["nmol-l", "pmol-l"],
    ["mol-l", "mol-m3"],
    ["lbmol-ft3", "kmol-m3"],
  ],
  related: ["solution-concentration", "molar-flow", "density"],
  known: [
    // 1 M = 1000 mM
    { value: 1, from: "mol-l", to: "mmol-l", expected: 1000 },
    // 1 mM = 1 mol/m³
    { value: 5.5, from: "mmol-l", to: "mol-m3", expected: 5.5 },
    // 1 nM = 1000 pM
    { value: 2.5, from: "nmol-l", to: "pmol-l", expected: 2500 },
    // 1 lb-mol/ft³ = 453.59237 / 0.028316846592 mol/m³ = 16018.463373960138 → 16.018463373960138 kmol/m³
    { value: 1, from: "lbmol-ft3", to: "kmol-m3", expected: 16.018463373960138 },
    // 1 lb-mol/gal = 453.59237 / 3.785411784 mol/L = 119.82642731689663 M
    { value: 1, from: "lbmol-gal", to: "mol-l", expected: 119.82642731689663 },
    // 1 mol/ft³ = 1 / 0.028316846592 = 35.31466672148859 mol/m³
    { value: 1, from: "mol-ft3", to: "mol-m3", expected: 35.31466672148859 },
    { value: 0, from: "mol-l", to: "nmol-l", expected: 0 },
  ],
};

export const solutionConcentration: LinearSpec = {
  id: "solution-concentration",
  slug: "solution-concentration-converter",
  group: "fluids",
  kind: "linear",
  dimension: "mass-concentration",
  baseUnit: "kg-m3",
  units: [
    { id: "kg-m3", symbol: "kg/m³", factor: 1, system: "si" },
    { id: "g-l", symbol: "g/L", factor: 1, system: "metric" },
    { id: "mg-l", symbol: "mg/L", factor: 1e-3, system: "metric" },
    { id: "ug-l", symbol: "µg/L", factor: 1e-6, system: "metric" },
    { id: "g-ml", symbol: "g/mL", factor: 1e3, system: "metric" },
    { id: "mg-ml", symbol: "mg/mL", factor: 1, system: "metric" },
    { id: "ug-ml", symbol: "µg/mL", factor: 1e-3, system: "metric" },
    { id: "ng-ml", symbol: "ng/mL", factor: 1e-6, system: "metric" },
    // 1 g/dL = 1 g / 1e-4 m³ = 10 kg/m³
    { id: "g-dl", symbol: "g/dL", factor: 10, system: "metric" },
    { id: "mg-dl", symbol: "mg/dL", factor: 1e-2, system: "metric" },
    // % (w/v): grams of solute per 100 mL of solution = 10 kg/m³
    { id: "pct-wv", symbol: "% (w/v)", factor: 10, system: "other" },
    { id: "lb-ft3", symbol: "lb/ft³", factor: POUND / FOOT ** 3, system: "us" },
    { id: "lb-gal", symbol: "lb/gal (US)", factor: POUND / US_GALLON, system: "us" },
    { id: "oz-gal", symbol: "oz/gal (US)", factor: OUNCE / US_GALLON, system: "us" },
    { id: "lb-impgal", symbol: "lb/gal (UK)", factor: POUND / IMPERIAL_GALLON, system: "imperial" },
  ],
  defaultFrom: "mg-ml",
  defaultTo: "ug-ml",
  defaultValue: 1,
  popularPairs: [
    ["mg-l", "g-l"],
    ["mg-ml", "ug-ml"],
    ["g-dl", "mg-dl"],
    ["pct-wv", "mg-ml"],
    ["g-l", "lb-gal"],
    ["lb-gal", "g-l"],
    ["ug-ml", "ng-ml"],
    ["mg-dl", "mg-l"],
  ],
  related: ["molar-concentration", "density", "weight", "volume"],
  known: [
    // 0.9% (w/v) saline = 0.9 g / 100 mL = 9 mg/mL
    { value: 0.9, from: "pct-wv", to: "mg-ml", expected: 9 },
    // 1 lb/gal = 0.45359237 / 0.003785411784 = 119.82642731689663 kg/m³ = g/L
    { value: 1, from: "lb-gal", to: "g-l", expected: 119.82642731689663 },
    // 1 lb/ft³ = 0.45359237 / 0.028316846592 = 16.018463373960138 kg/m³
    { value: 1, from: "lb-ft3", to: "kg-m3", expected: 16.018463373960138 },
    // haemoglobin 14 g/dL = 14,000 mg/dL (1 g/dL = 1000 mg/dL)
    { value: 14, from: "g-dl", to: "mg-dl", expected: 14000 },
    // 100 mg/dL = 1000 mg/L
    { value: 100, from: "mg-dl", to: "mg-l", expected: 1000 },
    // 1 µg/mL = 1000 ng/mL
    { value: 1, from: "ug-ml", to: "ng-ml", expected: 1000 },
    // 1 lb/gal (UK) = 0.45359237 / 0.00454609 = 99.7763726631017 kg/m³
    { value: 1, from: "lb-impgal", to: "kg-m3", expected: 99.7763726631017 },
    // 128 oz/gal = 8 lb/gal
    { value: 128, from: "oz-gal", to: "lb-gal", expected: 8 },
  ],
};

export const dynamicViscosity: LinearSpec = {
  id: "dynamic-viscosity",
  slug: "dynamic-viscosity-converter",
  group: "fluids",
  kind: "linear",
  dimension: "dynamic-viscosity",
  baseUnit: "pa-s",
  units: [
    { id: "pa-s", symbol: "Pa·s", factor: 1, system: "si" },
    { id: "mpa-s", symbol: "mPa·s", factor: 1e-3, system: "si" },
    { id: "upa-s", symbol: "µPa·s", factor: 1e-6, system: "si" },
    { id: "kg-m-h", symbol: "kg/(m·h)", factor: 1 / HOUR, system: "metric" },
    { id: "p", symbol: "P", factor: POISE, system: "metric" },
    { id: "cp", symbol: "cP", factor: POISE / 100, system: "metric" },
    { id: "kgf-s-m2", symbol: "kgf·s/m²", factor: G_N, system: "metric" },
    // lb/(ft·s): pound-mass per foot-second
    { id: "lb-ft-s", symbol: "lb/(ft·s)", factor: POUND / FOOT, system: "us" },
    { id: "lb-ft-h", symbol: "lb/(ft·h)", factor: POUND / FOOT / HOUR, system: "us" },
    { id: "lbf-s-ft2", symbol: "lbf·s/ft²", factor: POUND_FORCE / FOOT ** 2, system: "us" },
    // reyn: 1 lbf·s/in²
    { id: "reyn", symbol: "reyn", factor: POUND_FORCE / INCH ** 2, system: "us" },
  ],
  defaultFrom: "cp",
  defaultTo: "pa-s",
  defaultValue: 1,
  popularPairs: [
    ["cp", "pa-s"],
    ["pa-s", "cp"],
    ["cp", "mpa-s"],
    ["p", "pa-s"],
    ["lb-ft-s", "pa-s"],
    ["cp", "lb-ft-h"],
    ["reyn", "pa-s"],
  ],
  related: ["kinematic-viscosity", "density", "pressure", "surface-tension"],
  known: [
    // 1 cP = 1 mPa·s = 0.001 Pa·s
    { value: 1, from: "cp", to: "pa-s", expected: 0.001 },
    { value: 1, from: "cp", to: "mpa-s", expected: 1 },
    // 1 lb/(ft·s) = 0.45359237 / 0.3048 = 1.4881639435695537 Pa·s
    { value: 1, from: "lb-ft-s", to: "pa-s", expected: 1.4881639435695537 },
    // 1 cP = 0.001 × 3600 / 1.4881639435695537 = 2.4190883105022247 lb/(ft·h)
    { value: 1, from: "cp", to: "lb-ft-h", expected: 2.4190883105022247 },
    // 1 reyn = 4.4482216152605 N / 0.00064516 m² = 6894.757293168361 Pa·s
    { value: 1, from: "reyn", to: "pa-s", expected: 6894.757293168361 },
    // 1 lbf·s/ft² = 4.4482216152605 / 0.09290304 = 47.88025898033584 Pa·s
    { value: 1, from: "lbf-s-ft2", to: "pa-s", expected: 47.88025898033584 },
    // air at 20 °C ≈ 18.2 µPa·s = 0.0182 cP
    { value: 18.2, from: "upa-s", to: "cp", expected: 0.0182 },
  ],
};

export const kinematicViscosity: LinearSpec = {
  id: "kinematic-viscosity",
  slug: "kinematic-viscosity-converter",
  group: "fluids",
  kind: "linear",
  dimension: "kinematic-viscosity",
  baseUnit: "m2-s",
  units: [
    { id: "m2-s", symbol: "m²/s", factor: 1, system: "si" },
    { id: "m2-h", symbol: "m²/h", factor: 1 / HOUR, system: "si" },
    { id: "cm2-s", symbol: "cm²/s", factor: 1e-4, system: "metric" },
    { id: "mm2-s", symbol: "mm²/s", factor: 1e-6, system: "metric" },
    { id: "st", symbol: "St", factor: STOKES, system: "metric" },
    { id: "cst", symbol: "cSt", factor: STOKES / 100, system: "metric" },
    { id: "ft2-s", symbol: "ft²/s", factor: FOOT ** 2, system: "us" },
    { id: "ft2-h", symbol: "ft²/h", factor: FOOT ** 2 / HOUR, system: "us" },
    { id: "in2-s", symbol: "in²/s", factor: INCH ** 2, system: "us" },
  ],
  defaultFrom: "cst",
  defaultTo: "m2-s",
  defaultValue: 1,
  popularPairs: [
    ["cst", "m2-s"],
    ["m2-s", "cst"],
    ["cst", "mm2-s"],
    ["st", "cst"],
    ["ft2-s", "cst"],
    ["cst", "ft2-s"],
  ],
  related: ["dynamic-viscosity", "density", "area"],
  known: [
    // 1 cSt = 1 mm²/s = 1e-6 m²/s
    { value: 1, from: "cst", to: "m2-s", expected: 1e-6 },
    { value: 32, from: "cst", to: "mm2-s", expected: 32 },
    // 1 St = 100 cSt
    { value: 1, from: "st", to: "cst", expected: 100 },
    // 1 ft²/s = 0.09290304 m²/s = 92,903.04 cSt
    { value: 1, from: "ft2-s", to: "cst", expected: 92903.04 },
    // 1 in²/s = 0.00064516 m²/s = 6.4516 St
    { value: 1, from: "in2-s", to: "st", expected: 6.4516 },
    // 1 m²/h = 1e6 / 3600 cSt = 277.777… cSt
    { value: 1, from: "m2-h", to: "cst", expected: 1e6 / 3600 },
  ],
};

export const surfaceTension: LinearSpec = {
  id: "surface-tension",
  slug: "surface-tension-converter",
  group: "fluids",
  kind: "linear",
  dimension: "surface-tension",
  baseUnit: "n-m",
  units: [
    { id: "n-m", symbol: "N/m", factor: 1, system: "si" },
    { id: "mn-m", symbol: "mN/m", factor: 1e-3, system: "si" },
    { id: "un-m", symbol: "µN/m", factor: 1e-6, system: "si" },
    // J/m² is dimensionally identical to N/m (surface energy)
    { id: "j-m2", symbol: "J/m²", factor: 1, system: "si" },
    { id: "mj-m2", symbol: "mJ/m²", factor: 1e-3, system: "si" },
    // 1 dyn/cm = 1e-5 N / 0.01 m = 1e-3 N/m
    { id: "dyn-cm", symbol: "dyn/cm", factor: DYNE / 1e-2, system: "metric" },
    // 1 erg/cm² = 1e-7 J / 1e-4 m² = 1e-3 J/m²
    { id: "erg-cm2", symbol: "erg/cm²", factor: 1e-7 / 1e-4, system: "metric" },
    // gram-force per centimetre: 1e-3 × gₙ N / 0.01 m
    { id: "gf-cm", symbol: "gf/cm", factor: (1e-3 * G_N) / 1e-2, system: "metric" },
    { id: "kgf-m", symbol: "kgf/m", factor: G_N, system: "metric" },
    { id: "lbf-in", symbol: "lbf/in", factor: POUND_FORCE / INCH, system: "us" },
    { id: "lbf-ft", symbol: "lbf/ft", factor: POUND_FORCE / FOOT, system: "us" },
    { id: "pdl-in", symbol: "pdl/in", factor: (POUND * FOOT) / INCH, system: "us" },
  ],
  defaultFrom: "dyn-cm",
  defaultTo: "mn-m",
  defaultValue: 72,
  popularPairs: [
    ["dyn-cm", "mn-m"],
    ["mn-m", "dyn-cm"],
    ["n-m", "dyn-cm"],
    ["mn-m", "lbf-in"],
    ["lbf-in", "n-m"],
    ["erg-cm2", "mj-m2"],
  ],
  related: ["force", "dynamic-viscosity", "pressure"],
  known: [
    // 1 dyn/cm = 1 mN/m (water at 25 °C ≈ 72 dyn/cm)
    { value: 72, from: "dyn-cm", to: "mn-m", expected: 72 },
    // 1 N/m = 1000 dyn/cm
    { value: 1, from: "n-m", to: "dyn-cm", expected: 1000 },
    // 1 lbf/in = 4.4482216152605 / 0.0254 = 175.12683524647638 N/m
    { value: 1, from: "lbf-in", to: "n-m", expected: 175.12683524647638 },
    // 1 lbf/ft = 4.4482216152605 / 0.3048 = 14.593902937206364 N/m
    { value: 1, from: "lbf-ft", to: "n-m", expected: 14.593902937206364 },
    // 1 erg/cm² = 1 mJ/m²
    { value: 1, from: "erg-cm2", to: "mj-m2", expected: 1 },
    // 1 gf/cm = 0.980665 N/m = 980.665 dyn/cm
    { value: 1, from: "gf-cm", to: "dyn-cm", expected: 980.665 },
    // 1 pdl/in = 0.138254954376 N / 0.0254 m = 5.44310844 N/m
    { value: 1, from: "pdl-in", to: "n-m", expected: 5.443108440000001 },
  ],
};

export const permeability: LinearSpec = {
  id: "permeability",
  slug: "permeability-converter",
  group: "fluids",
  kind: "linear",
  dimension: "permeability",
  baseUnit: "m2",
  units: [
    { id: "m2", symbol: "m²", factor: 1, system: "si" },
    { id: "cm2", symbol: "cm²", factor: 1e-4, system: "metric" },
    { id: "mm2", symbol: "mm²", factor: 1e-6, system: "metric" },
    { id: "um2", symbol: "µm²", factor: 1e-12, system: "metric" },
    { id: "d", symbol: "D", factor: DARCY, system: "other" },
    { id: "md", symbol: "mD", factor: DARCY * 1e-3, system: "other" },
    { id: "ud", symbol: "µD", factor: DARCY * 1e-6, system: "other" },
    { id: "nd", symbol: "nD", factor: DARCY * 1e-9, system: "other" },
    { id: "ft2", symbol: "ft²", factor: FOOT ** 2, system: "us" },
    { id: "in2", symbol: "in²", factor: INCH ** 2, system: "us" },
  ],
  defaultFrom: "md",
  defaultTo: "m2",
  defaultValue: 100,
  popularPairs: [
    ["md", "m2"],
    ["d", "m2"],
    ["m2", "md"],
    ["d", "um2"],
    ["md", "um2"],
    ["nd", "md"],
    ["d", "ft2"],
  ],
  related: ["area", "dynamic-viscosity", "flow", "pressure"],
  known: [
    // 1 D = 9.869233e-13 m² (NIST SP 811)
    { value: 1, from: "d", to: "m2", expected: 9.869233e-13 },
    // 100 mD = 9.869233e-14 m²
    { value: 100, from: "md", to: "m2", expected: 9.869233e-14 },
    // 1 D = 0.9869233 µm²
    { value: 1, from: "d", to: "um2", expected: 0.9869233 },
    // 1 m² = 1 / 9.869233e-16 mD = 1.0132499658281449e15 mD
    { value: 1, from: "m2", to: "md", expected: 1.0132499658281449e15 },
    // 1 D = 9.869233e-13 / 0.09290304 = 1.0623153989363534e-11 ft²
    { value: 1, from: "d", to: "ft2", expected: 1.0623153989363534e-11 },
    // shale: 1000 nD = 1 µD = 0.001 mD
    { value: 1000, from: "nd", to: "md", expected: 0.001 },
    // 1 cm² = 1e-4 / 9.869233e-13 = 101324996.58281449 D
    { value: 1, from: "cm2", to: "d", expected: 101324996.58281449 },
  ],
};

/** All converters of the "fluids" group. */
export const fluidsConverters: readonly LinearSpec[] = [
  flow,
  massFlow,
  molarFlow,
  massFluxDensity,
  molarConcentration,
  solutionConcentration,
  dynamicViscosity,
  kinematicViscosity,
  surfaceTension,
  permeability,
];
