import { INCH } from "../constants";
import type { LinearSpec } from "../types";

/**
 * CGS electromagnetic (EMU/Gaussian) correspondences, fixed by the definitions
 * of the CGS units (NIST SP 811, Appendix B.8):
 * 1 gilbert = 10/(4π) ampere-turn, 1 oersted = 1000/(4π) A/m,
 * 1 maxwell = 1e-8 Wb, 1 gauss = 1e-4 T.
 */
const GILBERT = 10 / (4 * Math.PI);
const OERSTED = 1000 / (4 * Math.PI);
const MAXWELL = 1e-8;
const GAUSS = 1e-4;

export const magnetomotiveForce: LinearSpec = {
  id: "magnetomotive-force",
  slug: "magnetomotive-force-converter",
  group: "magnetism",
  kind: "linear",
  dimension: "magnetomotive-force",
  baseUnit: "a",
  units: [
    { id: "a", symbol: "A", factor: 1, system: "si" },
    { id: "ma", symbol: "mA", factor: 1e-3, system: "si" },
    { id: "ka", symbol: "kA", factor: 1e3, system: "si" },
    // Ampere-turn: the turn count is dimensionless, so 1 At = 1 A
    { id: "at", symbol: "At", factor: 1, system: "si" },
    { id: "mat", symbol: "mAt", factor: 1e-3, system: "si" },
    { id: "kat", symbol: "kAt", factor: 1e3, system: "si" },
    { id: "gilbert", symbol: "Gb", factor: GILBERT, system: "metric" },
    // Abampere-turn (EMU): 1 abA = 10 A
    { id: "abat", symbol: "abA·turn", factor: 10, system: "metric" },
  ],
  defaultFrom: "gilbert",
  defaultTo: "at",
  defaultValue: 1,
  popularPairs: [
    ["gilbert", "at"],
    ["at", "gilbert"],
    ["a", "gilbert"],
    ["kat", "gilbert"],
    ["abat", "at"],
    ["at", "kat"],
  ],
  related: ["magnetic-field-strength", "current", "magnetic-flux", "inductance"],
  known: [
    // 10/(4π)
    { value: 1, from: "gilbert", to: "at", expected: 0.7957747154594768 },
    // 4π/10
    { value: 1, from: "a", to: "gilbert", expected: 1.2566370614359172 },
    { value: 1, from: "at", to: "a", expected: 1 },
    { value: 1, from: "abat", to: "a", expected: 10 },
    { value: 1000, from: "gilbert", to: "kat", expected: 0.7957747154594768 },
    { value: 5, from: "kat", to: "a", expected: 5000 },
    { value: 0, from: "gilbert", to: "a", expected: 0 },
  ],
};

export const magneticFieldStrength: LinearSpec = {
  id: "magnetic-field-strength",
  slug: "magnetic-field-strength-converter",
  group: "magnetism",
  kind: "linear",
  dimension: "magnetic-field-strength",
  baseUnit: "a_m",
  units: [
    { id: "a_m", symbol: "A/m", factor: 1, system: "si" },
    { id: "ma_m", symbol: "mA/m", factor: 1e-3, system: "si" },
    { id: "ka_m", symbol: "kA/m", factor: 1e3, system: "si" },
    { id: "a_cm", symbol: "A/cm", factor: 100, system: "si" },
    { id: "a_mm", symbol: "A/mm", factor: 1000, system: "si" },
    { id: "at_m", symbol: "At/m", factor: 1, system: "si" },
    { id: "at_cm", symbol: "At/cm", factor: 100, system: "si" },
    { id: "at_in", symbol: "At/in", factor: 1 / INCH, system: "us" },
    { id: "oe", symbol: "Oe", factor: OERSTED, system: "metric" },
    { id: "koe", symbol: "kOe", factor: OERSTED * 1000, system: "metric" },
    { id: "moe", symbol: "mOe", factor: OERSTED / 1000, system: "metric" },
    // gilbert per centimetre = 10/(4π) A / 0.01 m = 1 Oe
    { id: "gb_cm", symbol: "Gb/cm", factor: GILBERT / 0.01, system: "metric" },
  ],
  defaultFrom: "oe",
  defaultTo: "a_m",
  defaultValue: 1,
  popularPairs: [
    ["oe", "a_m"],
    ["a_m", "oe"],
    ["koe", "ka_m"],
    ["ka_m", "koe"],
    ["at_in", "a_m"],
    ["a_cm", "oe"],
    ["ka_m", "oe"],
  ],
  related: ["magnetic-flux-density", "magnetomotive-force", "linear-current-density", "magnetic-flux"],
  known: [
    // 1000/(4π)
    { value: 1, from: "oe", to: "a_m", expected: 79.57747154594767 },
    // 4π
    { value: 1, from: "ka_m", to: "oe", expected: 12.566370614359172 },
    { value: 1, from: "koe", to: "ka_m", expected: 79.57747154594767 },
    // 1/0.0254
    { value: 1, from: "at_in", to: "a_m", expected: 39.37007874015748 },
    { value: 1, from: "a_cm", to: "a_m", expected: 100 },
    { value: 1, from: "gb_cm", to: "oe", expected: 1 },
    // Earth's field, about 0.5 Oe: 0.5·1000/(4π)
    { value: 0.5, from: "oe", to: "a_m", expected: 39.78873577297384 },
    { value: 0, from: "oe", to: "a_m", expected: 0 },
  ],
};

export const magneticFlux: LinearSpec = {
  id: "magnetic-flux",
  slug: "magnetic-flux-converter",
  group: "magnetism",
  kind: "linear",
  dimension: "magnetic-flux",
  baseUnit: "wb",
  units: [
    { id: "wb", symbol: "Wb", factor: 1, system: "si" },
    { id: "mwb", symbol: "mWb", factor: 1e-3, system: "si" },
    { id: "uwb", symbol: "µWb", factor: 1e-6, system: "si" },
    { id: "nwb", symbol: "nWb", factor: 1e-9, system: "si" },
    { id: "v_s", symbol: "V·s", factor: 1, system: "si" },
    { id: "t_m2", symbol: "T·m²", factor: 1, system: "si" },
    { id: "mx", symbol: "Mx", factor: MAXWELL, system: "metric" },
    { id: "kmx", symbol: "kMx", factor: MAXWELL * 1000, system: "metric" },
    // gauss square centimetre = 1e-4 T × 1e-4 m² = 1 Mx
    { id: "g_cm2", symbol: "G·cm²", factor: GAUSS * 1e-4, system: "metric" },
    // "line" is an old name for the maxwell
    { id: "line", symbol: "line", factor: MAXWELL, system: "other" },
  ],
  defaultFrom: "wb",
  defaultTo: "mx",
  defaultValue: 1,
  popularPairs: [
    ["wb", "mx"],
    ["mx", "wb"],
    ["uwb", "mx"],
    ["mx", "nwb"],
    ["kmx", "uwb"],
    ["mwb", "kmx"],
  ],
  related: ["magnetic-flux-density", "inductance", "electric-potential", "magnetomotive-force"],
  known: [
    { value: 1, from: "wb", to: "mx", expected: 1e8 },
    { value: 1, from: "mx", to: "nwb", expected: 10 },
    { value: 1, from: "uwb", to: "mx", expected: 100 },
    { value: 1, from: "v_s", to: "wb", expected: 1 },
    { value: 1, from: "g_cm2", to: "mx", expected: 1 },
    { value: 1, from: "kmx", to: "uwb", expected: 10 },
    { value: 0, from: "wb", to: "mx", expected: 0 },
  ],
};

export const magneticFluxDensity: LinearSpec = {
  id: "magnetic-flux-density",
  slug: "magnetic-flux-density-converter",
  group: "magnetism",
  kind: "linear",
  dimension: "magnetic-flux-density",
  baseUnit: "t",
  units: [
    { id: "t", symbol: "T", factor: 1, system: "si" },
    { id: "mt", symbol: "mT", factor: 1e-3, system: "si" },
    { id: "ut", symbol: "µT", factor: 1e-6, system: "si" },
    { id: "nt", symbol: "nT", factor: 1e-9, system: "si" },
    { id: "wb_m2", symbol: "Wb/m²", factor: 1, system: "si" },
    { id: "gauss", symbol: "G", factor: GAUSS, system: "metric" },
    { id: "kgauss", symbol: "kG", factor: GAUSS * 1000, system: "metric" },
    { id: "mgauss", symbol: "mG", factor: GAUSS / 1000, system: "metric" },
    // gamma = 1 nT (geophysics)
    { id: "gamma", symbol: "γ", factor: 1e-9, system: "other" },
    // maxwell per square centimetre = 1 G
    { id: "mx_cm2", symbol: "Mx/cm²", factor: MAXWELL / 1e-4, system: "metric" },
    // line (maxwell) per square inch
    { id: "line_in2", symbol: "line/in²", factor: MAXWELL / INCH ** 2, system: "us" },
    { id: "kline_in2", symbol: "kline/in²", factor: (1000 * MAXWELL) / INCH ** 2, system: "us" },
  ],
  defaultFrom: "t",
  defaultTo: "gauss",
  defaultValue: 1,
  popularPairs: [
    ["t", "gauss"],
    ["gauss", "t"],
    ["mt", "gauss"],
    ["gauss", "ut"],
    ["ut", "mgauss"],
    ["kgauss", "t"],
    ["gamma", "nt"],
    ["kline_in2", "t"],
  ],
  related: ["magnetic-field-strength", "magnetic-flux", "inductance"],
  known: [
    { value: 1, from: "t", to: "gauss", expected: 1e4 },
    { value: 1, from: "gauss", to: "ut", expected: 100 },
    // Earth's field, about 0.5 G
    { value: 0.5, from: "gauss", to: "ut", expected: 50 },
    { value: 1, from: "gamma", to: "nt", expected: 1 },
    // 1e-8/0.0254² T = 1/6.4516 G
    { value: 1, from: "line_in2", to: "gauss", expected: 0.15500031000062 },
    // 1.5 T MRI scanner
    { value: 1.5, from: "t", to: "kgauss", expected: 15 },
    { value: 1, from: "mgauss", to: "nt", expected: 100 },
    { value: 0, from: "t", to: "gauss", expected: 0 },
  ],
};

/** All converters of the "magnetism" group. */
export const magnetismConverters: readonly LinearSpec[] = [magnetomotiveForce, magneticFieldStrength, magneticFlux, magneticFluxDensity];
