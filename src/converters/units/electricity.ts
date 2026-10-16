import { AVOGADRO, C_LIGHT, ELEMENTARY_CHARGE, FOOT, HOUR, INCH } from "../constants";
import type { LinearSpec } from "../types";

/*
 * Gaussian (ESU) and EMU units. These are not SI units: CGS electromagnetism
 * has a different set of base quantities, so each factor is the conventional
 * correspondence used by NIST SP 811 Appendix B, built from the exact speed of
 * light c in cm/s (c_cgs = 100 c). With c in m/s:
 *   1 statcoulomb (Fr) = 1/(10 c) C       1 abcoulomb = 10 C
 *   1 statampere       = 1/(10 c) A       1 abampere (biot) = 10 A
 *   1 statvolt         = c × 10⁻⁶ V       1 abvolt = 10⁻⁸ V
 *   1 statohm          = c² × 10⁻⁵ Ω      1 abohm = 10⁻⁹ Ω
 *   1 statfarad        = 10⁵ / c² F       1 abfarad = 10⁹ F
 *   1 stathenry        = c² × 10⁻⁵ H      1 abhenry = 10⁻⁹ H
 */
/** Statcoulomb (franklin), Gaussian/ESU, in coulombs: 1/(10 c) ≈ 3.33564e-10 C. */
export const STATCOULOMB = 1 / (10 * C_LIGHT);
/** Abcoulomb (EMU), in coulombs (exact). */
export const ABCOULOMB = 10;
/** Statampere (Gaussian/ESU), in amperes. */
export const STATAMPERE = STATCOULOMB;
/** Abampere or biot (EMU), in amperes (exact). */
export const ABAMPERE = 10;
/** Statvolt (Gaussian/ESU), in volts: c × 10⁻⁶ = 299.792458 V. */
export const STATVOLT = C_LIGHT * 1e-6;
/** Abvolt (EMU), in volts. */
export const ABVOLT = 1e-8;
/** Statohm (Gaussian/ESU) = statvolt/statampere = c² × 10⁻⁵ Ω ≈ 8.98755e11 Ω. */
export const STATOHM = STATVOLT / STATAMPERE;
/** Abohm (EMU), in ohms. */
export const ABOHM = 1e-9;
/** Statfarad (Gaussian/ESU) = statcoulomb/statvolt = 10⁵/c² F ≈ 1.11265e-12 F. */
export const STATFARAD = STATCOULOMB / STATVOLT;
/** Abfarad (EMU), in farads. */
export const ABFARAD = 1e9;
/** Stathenry (Gaussian/ESU) = statohm × second, in henries. */
export const STATHENRY = STATOHM;
/** Abhenry (EMU), in henries. */
export const ABHENRY = 1e-9;
/** Faraday (unit of charge) = N_A × e, exact since SI 2019 ≈ 96,485.332 C. */
export const FARADAY = AVOGADRO * ELEMENTARY_CHARGE;
/** Circular mil: area of a circle 1 mil (0.001 in) in diameter = π/4 × (0.001 in)², in m². */
export const CIRCULAR_MIL = (Math.PI / 4) * (INCH * 1e-3) ** 2;
/** 100 % IACS (International Annealed Copper Standard, 1913): 58 MS/m by convention. */
export const IACS_100 = 58e6;

export const charge: LinearSpec = {
  id: "charge",
  slug: "charge-converter",
  group: "electricity",
  kind: "linear",
  dimension: "charge",
  baseUnit: "c",
  units: [
    { id: "c", symbol: "C", factor: 1, system: "si" },
    { id: "kc", symbol: "kC", factor: 1e3, system: "si" },
    { id: "mc", symbol: "mC", factor: 1e-3, system: "si" },
    { id: "uc", symbol: "µC", factor: 1e-6, system: "si" },
    { id: "nc", symbol: "nC", factor: 1e-9, system: "si" },
    { id: "pc", symbol: "pC", factor: 1e-12, system: "si" },
    // 1 A·h = 1 A × 3,600 s
    { id: "ah", symbol: "A·h", factor: HOUR, system: "metric" },
    { id: "mah", symbol: "mA·h", factor: HOUR * 1e-3, system: "metric" },
    { id: "amin", symbol: "A·min", factor: 60, system: "metric" },
    { id: "e", symbol: "e", factor: ELEMENTARY_CHARGE, system: "other" },
    { id: "faraday", symbol: "F (faraday)", factor: FARADAY, system: "other" },
    { id: "statc", symbol: "statC", factor: STATCOULOMB, system: "metric" },
    { id: "abc", symbol: "abC", factor: ABCOULOMB, system: "metric" },
  ],
  defaultFrom: "mah",
  defaultTo: "c",
  defaultValue: 1000,
  allowNegative: true,
  popularPairs: [
    ["mah", "c"],
    ["ah", "c"],
    ["c", "mah"],
    ["ah", "mah"],
    ["c", "e"],
    ["faraday", "c"],
    ["statc", "c"],
    ["uc", "nc"],
  ],
  related: ["current", "capacitance", "electric-potential", "energy"],
  known: [
    // 1000 mAh × 3.6 C/mAh = 3600 C
    { value: 1000, from: "mah", to: "c", expected: 3600 },
    // 1 Ah = 3600 C
    { value: 1, from: "ah", to: "c", expected: 3600 },
    // python: 1/1.602176634e-19
    { value: 1, from: "c", to: "e", expected: 6.241509074460763e18 },
    // python: 6.02214076e23*1.602176634e-19
    { value: 1, from: "faraday", to: "c", expected: 96485.33212331001 },
    // python: 1*10*299792458 statC per C
    { value: 1, from: "c", to: "statc", expected: 2997924580 },
    // 1 abC = 10 C
    { value: 1, from: "abc", to: "c", expected: 10 },
    // python: -5*1.602176634e-19/1e-12 (a negative charge, in pC)
    { value: -5, from: "e", to: "pc", expected: -8.01088317e-7 },
    { value: 0, from: "ah", to: "c", expected: 0 },
  ],
};

export const linearChargeDensity: LinearSpec = {
  id: "linear-charge-density",
  slug: "linear-charge-density-converter",
  group: "electricity",
  kind: "linear",
  dimension: "linear-charge-density",
  baseUnit: "c-m",
  units: [
    { id: "c-m", symbol: "C/m", factor: 1, system: "si" },
    { id: "mc-m", symbol: "mC/m", factor: 1e-3, system: "si" },
    { id: "uc-m", symbol: "µC/m", factor: 1e-6, system: "si" },
    { id: "nc-m", symbol: "nC/m", factor: 1e-9, system: "si" },
    { id: "pc-m", symbol: "pC/m", factor: 1e-12, system: "si" },
    { id: "c-cm", symbol: "C/cm", factor: 100, system: "metric" },
    { id: "c-mm", symbol: "C/mm", factor: 1e3, system: "metric" },
    { id: "c-in", symbol: "C/in", factor: 1 / INCH, system: "us" },
    { id: "c-ft", symbol: "C/ft", factor: 1 / FOOT, system: "us" },
    // 1 abC/cm = 10 C / 0.01 m
    { id: "abc-cm", symbol: "abC/cm", factor: ABCOULOMB / 0.01, system: "metric" },
    { id: "statc-cm", symbol: "statC/cm", factor: STATCOULOMB / 0.01, system: "metric" },
  ],
  defaultFrom: "uc-m",
  defaultTo: "nc-m",
  defaultValue: 1,
  allowNegative: true,
  popularPairs: [
    ["uc-m", "nc-m"],
    ["nc-m", "pc-m"],
    ["c-m", "c-cm"],
    ["c-in", "c-m"],
    ["c-ft", "c-m"],
    ["statc-cm", "c-m"],
  ],
  related: ["charge", "surface-charge-density", "volume-charge-density", "electric-field-strength"],
  known: [
    { value: 1, from: "uc-m", to: "nc-m", expected: 1000 },
    // python: 1/0.0254
    { value: 1, from: "c-in", to: "c-m", expected: 39.37007874015748 },
    // python: 1/0.3048
    { value: 1, from: "c-ft", to: "c-m", expected: 3.280839895013123 },
    // python: 1/(10*299792458)/0.01
    { value: 1, from: "statc-cm", to: "c-m", expected: 3.3356409519815205e-8 },
    { value: 1, from: "abc-cm", to: "c-m", expected: 1000 },
    // python: -2*0.0254 (C/m to C/in)
    { value: -2, from: "c-m", to: "c-in", expected: -0.0508 },
  ],
};

export const surfaceChargeDensity: LinearSpec = {
  id: "surface-charge-density",
  slug: "surface-charge-density-converter",
  group: "electricity",
  kind: "linear",
  dimension: "surface-charge-density",
  baseUnit: "c-m2",
  units: [
    { id: "c-m2", symbol: "C/m²", factor: 1, system: "si" },
    { id: "mc-m2", symbol: "mC/m²", factor: 1e-3, system: "si" },
    { id: "uc-m2", symbol: "µC/m²", factor: 1e-6, system: "si" },
    { id: "nc-m2", symbol: "nC/m²", factor: 1e-9, system: "si" },
    { id: "c-cm2", symbol: "C/cm²", factor: 1e4, system: "metric" },
    { id: "uc-cm2", symbol: "µC/cm²", factor: 1e-6 * 1e4, system: "metric" },
    { id: "c-mm2", symbol: "C/mm²", factor: 1e6, system: "metric" },
    { id: "c-in2", symbol: "C/in²", factor: 1 / INCH ** 2, system: "us" },
    { id: "c-ft2", symbol: "C/ft²", factor: 1 / FOOT ** 2, system: "us" },
    // 1 abC/cm² = 10 C / 10⁻⁴ m²
    { id: "abc-cm2", symbol: "abC/cm²", factor: ABCOULOMB / 1e-4, system: "metric" },
    { id: "statc-cm2", symbol: "statC/cm²", factor: STATCOULOMB / 1e-4, system: "metric" },
  ],
  defaultFrom: "uc-cm2",
  defaultTo: "c-m2",
  defaultValue: 1,
  allowNegative: true,
  popularPairs: [
    ["uc-cm2", "c-m2"],
    ["c-m2", "uc-cm2"],
    ["uc-m2", "nc-m2"],
    ["c-in2", "c-m2"],
    ["statc-cm2", "c-m2"],
    ["c-cm2", "c-m2"],
  ],
  related: ["charge", "linear-charge-density", "volume-charge-density", "electric-field-strength"],
  known: [
    // 1 µC/cm² = 1e-6 C / 1e-4 m²
    { value: 1, from: "uc-cm2", to: "c-m2", expected: 0.01 },
    // python: 1/0.0254**2
    { value: 1, from: "c-in2", to: "c-m2", expected: 1550.0031000062002 },
    // python: 1/0.3048**2
    { value: 1, from: "c-ft2", to: "c-m2", expected: 10.763910416709722 },
    // python: 1/(10*299792458)/1e-4
    { value: 1, from: "statc-cm2", to: "c-m2", expected: 3.3356409519815205e-6 },
    { value: 1, from: "abc-cm2", to: "c-m2", expected: 1e5 },
    { value: -3, from: "c-m2", to: "mc-m2", expected: -3000 },
  ],
};

export const volumeChargeDensity: LinearSpec = {
  id: "volume-charge-density",
  slug: "volume-charge-density-converter",
  group: "electricity",
  kind: "linear",
  dimension: "volume-charge-density",
  baseUnit: "c-m3",
  units: [
    { id: "c-m3", symbol: "C/m³", factor: 1, system: "si" },
    { id: "mc-m3", symbol: "mC/m³", factor: 1e-3, system: "si" },
    { id: "uc-m3", symbol: "µC/m³", factor: 1e-6, system: "si" },
    { id: "nc-m3", symbol: "nC/m³", factor: 1e-9, system: "si" },
    { id: "c-l", symbol: "C/L", factor: 1e3, system: "metric" },
    { id: "c-cm3", symbol: "C/cm³", factor: 1e6, system: "metric" },
    { id: "c-mm3", symbol: "C/mm³", factor: 1e9, system: "metric" },
    { id: "c-in3", symbol: "C/in³", factor: 1 / INCH ** 3, system: "us" },
    { id: "c-ft3", symbol: "C/ft³", factor: 1 / FOOT ** 3, system: "us" },
    // 1 abC/cm³ = 10 C / 10⁻⁶ m³
    { id: "abc-cm3", symbol: "abC/cm³", factor: ABCOULOMB / 1e-6, system: "metric" },
    { id: "statc-cm3", symbol: "statC/cm³", factor: STATCOULOMB / 1e-6, system: "metric" },
  ],
  defaultFrom: "c-cm3",
  defaultTo: "c-m3",
  defaultValue: 1,
  allowNegative: true,
  popularPairs: [
    ["c-cm3", "c-m3"],
    ["c-m3", "c-cm3"],
    ["c-l", "c-m3"],
    ["uc-m3", "nc-m3"],
    ["c-ft3", "c-m3"],
    ["statc-cm3", "c-m3"],
  ],
  related: ["charge", "surface-charge-density", "linear-charge-density", "density"],
  known: [
    { value: 1, from: "c-cm3", to: "c-m3", expected: 1e6 },
    { value: 1, from: "c-l", to: "c-cm3", expected: 1e-3 },
    // python: 1/0.0254**3
    { value: 1, from: "c-in3", to: "c-m3", expected: 61023.74409473229 },
    // python: 1/0.3048**3
    { value: 1, from: "c-ft3", to: "c-m3", expected: 35.314666721488585 },
    // python: 1/(10*299792458)/1e-6
    { value: 1, from: "statc-cm3", to: "c-m3", expected: 3.335640951981521e-4 },
    { value: -1, from: "abc-cm3", to: "c-m3", expected: -1e7 },
  ],
};

export const current: LinearSpec = {
  id: "current",
  slug: "current-converter",
  group: "electricity",
  kind: "linear",
  dimension: "current",
  baseUnit: "a",
  units: [
    { id: "a", symbol: "A", factor: 1, system: "si" },
    { id: "ka", symbol: "kA", factor: 1e3, system: "si" },
    { id: "ma-mega", symbol: "MA", factor: 1e6, system: "si" },
    { id: "ma", symbol: "mA", factor: 1e-3, system: "si" },
    { id: "ua", symbol: "µA", factor: 1e-6, system: "si" },
    { id: "na", symbol: "nA", factor: 1e-9, system: "si" },
    { id: "pa", symbol: "pA", factor: 1e-12, system: "si" },
    // 1 C/s = 1 A by definition; kept for readers who think in charge per time
    { id: "c-s", symbol: "C/s", factor: 1, system: "si" },
    { id: "c-h", symbol: "C/h", factor: 1 / HOUR, system: "metric" },
    { id: "stata", symbol: "statA", factor: STATAMPERE, system: "metric" },
    { id: "aba", symbol: "abA", factor: ABAMPERE, system: "metric" },
  ],
  defaultFrom: "a",
  defaultTo: "ma",
  defaultValue: 1,
  allowNegative: true,
  popularPairs: [
    ["a", "ma"],
    ["ma", "a"],
    ["ma", "ua"],
    ["ka", "a"],
    ["ua", "na"],
    ["aba", "a"],
    ["stata", "a"],
  ],
  related: ["charge", "electric-potential", "electric-resistance", "power"],
  known: [
    { value: 1, from: "a", to: "ma", expected: 1000 },
    { value: 250, from: "ma", to: "a", expected: 0.25 },
    { value: 1, from: "aba", to: "a", expected: 10 },
    // python: 10*299792458 statA per A
    { value: 1, from: "a", to: "stata", expected: 2997924580 },
    // python: 3600 C/h = 1 A
    { value: 3600, from: "c-h", to: "a", expected: 1 },
    { value: -2.5, from: "ka", to: "ma-mega", expected: -0.0025 },
    { value: 0, from: "ua", to: "na", expected: 0 },
  ],
};

export const linearCurrentDensity: LinearSpec = {
  id: "linear-current-density",
  slug: "linear-current-density-converter",
  group: "electricity",
  kind: "linear",
  dimension: "linear-current-density",
  baseUnit: "a-m",
  units: [
    { id: "a-m", symbol: "A/m", factor: 1, system: "si" },
    { id: "ka-m", symbol: "kA/m", factor: 1e3, system: "si" },
    { id: "ma-m", symbol: "mA/m", factor: 1e-3, system: "si" },
    { id: "a-cm", symbol: "A/cm", factor: 100, system: "metric" },
    { id: "a-mm", symbol: "A/mm", factor: 1e3, system: "metric" },
    { id: "a-in", symbol: "A/in", factor: 1 / INCH, system: "us" },
    { id: "a-ft", symbol: "A/ft", factor: 1 / FOOT, system: "us" },
    // 1 abA/cm = 10 A / 0.01 m
    { id: "aba-cm", symbol: "abA/cm", factor: ABAMPERE / 0.01, system: "metric" },
    { id: "stata-cm", symbol: "statA/cm", factor: STATAMPERE / 0.01, system: "metric" },
  ],
  defaultFrom: "a-cm",
  defaultTo: "a-m",
  defaultValue: 1,
  popularPairs: [
    ["a-cm", "a-m"],
    ["a-m", "a-cm"],
    ["a-in", "a-m"],
    ["a-mm", "ka-m"],
    ["a-ft", "a-m"],
    ["aba-cm", "a-m"],
  ],
  related: ["current", "surface-current-density", "magnetic-field-strength", "linear-charge-density"],
  known: [
    { value: 1, from: "a-cm", to: "a-m", expected: 100 },
    // python: 1/0.0254
    { value: 1, from: "a-in", to: "a-m", expected: 39.37007874015748 },
    // python: 1/0.3048
    { value: 1, from: "a-ft", to: "a-m", expected: 3.280839895013123 },
    { value: 1, from: "aba-cm", to: "ka-m", expected: 1 },
    // python: 1/(10*299792458)/0.01
    { value: 1, from: "stata-cm", to: "a-m", expected: 3.3356409519815205e-8 },
    { value: 0, from: "a-mm", to: "a-m", expected: 0 },
  ],
};

export const surfaceCurrentDensity: LinearSpec = {
  id: "surface-current-density",
  slug: "surface-current-density-converter",
  group: "electricity",
  kind: "linear",
  dimension: "surface-current-density",
  baseUnit: "a-m2",
  units: [
    { id: "a-m2", symbol: "A/m²", factor: 1, system: "si" },
    { id: "ka-m2", symbol: "kA/m²", factor: 1e3, system: "si" },
    { id: "ma-m2-mega", symbol: "MA/m²", factor: 1e6, system: "si" },
    { id: "a-cm2", symbol: "A/cm²", factor: 1e4, system: "metric" },
    { id: "ma-cm2", symbol: "mA/cm²", factor: 1e-3 * 1e4, system: "metric" },
    { id: "ua-cm2", symbol: "µA/cm²", factor: 1e-6 * 1e4, system: "metric" },
    { id: "a-mm2", symbol: "A/mm²", factor: 1e6, system: "metric" },
    { id: "a-in2", symbol: "A/in²", factor: 1 / INCH ** 2, system: "us" },
    { id: "a-ft2", symbol: "A/ft²", factor: 1 / FOOT ** 2, system: "us" },
    // 1 A/cmil: one ampere through one circular mil (π/4 × 10⁻⁶ in²)
    { id: "a-cmil", symbol: "A/cmil", factor: 1 / CIRCULAR_MIL, system: "us" },
    // 1 abA/cm² = 10 A / 10⁻⁴ m²
    { id: "aba-cm2", symbol: "abA/cm²", factor: ABAMPERE / 1e-4, system: "metric" },
    { id: "stata-cm2", symbol: "statA/cm²", factor: STATAMPERE / 1e-4, system: "metric" },
  ],
  defaultFrom: "a-mm2",
  defaultTo: "a-cm2",
  defaultValue: 1,
  popularPairs: [
    ["a-mm2", "a-cm2"],
    ["a-cm2", "a-m2"],
    ["ma-cm2", "a-m2"],
    ["a-ft2", "a-m2"],
    ["a-in2", "a-mm2"],
    ["a-cmil", "a-mm2"],
    ["aba-cm2", "a-m2"],
  ],
  related: ["current", "linear-current-density", "surface-charge-density", "electric-conductivity"],
  known: [
    { value: 1, from: "a-mm2", to: "a-cm2", expected: 100 },
    { value: 10, from: "ma-cm2", to: "a-m2", expected: 100 },
    // python: 1/0.3048**2
    { value: 1, from: "a-ft2", to: "a-m2", expected: 10.763910416709722 },
    // python: 1/0.0254**2/1e6
    { value: 1, from: "a-in2", to: "a-mm2", expected: 0.0015500031000062003 },
    // python: 1/(math.pi/4*(0.0254e-3)**2)/1e6
    { value: 1, from: "a-cmil", to: "a-mm2", expected: 1973.5252413899846 },
    // python: 1/(10*299792458)/1e-4
    { value: 1, from: "stata-cm2", to: "a-m2", expected: 3.3356409519815205e-6 },
  ],
};

export const electricFieldStrength: LinearSpec = {
  id: "electric-field-strength",
  slug: "electric-field-strength-converter",
  group: "electricity",
  kind: "linear",
  dimension: "electric-field-strength",
  baseUnit: "v-m",
  units: [
    { id: "v-m", symbol: "V/m", factor: 1, system: "si" },
    { id: "kv-m", symbol: "kV/m", factor: 1e3, system: "si" },
    { id: "mv-m-mega", symbol: "MV/m", factor: 1e6, system: "si" },
    { id: "mv-m", symbol: "mV/m", factor: 1e-3, system: "si" },
    { id: "uv-m", symbol: "µV/m", factor: 1e-6, system: "si" },
    // 1 N/C = 1 V/m (identical SI units)
    { id: "n-c", symbol: "N/C", factor: 1, system: "si" },
    { id: "v-cm", symbol: "V/cm", factor: 100, system: "metric" },
    { id: "kv-cm", symbol: "kV/cm", factor: 1e5, system: "metric" },
    { id: "v-mm", symbol: "V/mm", factor: 1e3, system: "metric" },
    { id: "kv-mm", symbol: "kV/mm", factor: 1e6, system: "metric" },
    { id: "v-in", symbol: "V/in", factor: 1 / INCH, system: "us" },
    // 1 mil = 0.001 in; dielectric strength is often quoted in V/mil
    { id: "v-mil", symbol: "V/mil", factor: 1 / (INCH * 1e-3), system: "us" },
    // 1 statV/cm = c × 10⁻⁶ V / 0.01 m = 29,979.2458 V/m
    { id: "statv-cm", symbol: "statV/cm", factor: STATVOLT / 0.01, system: "metric" },
    { id: "abv-cm", symbol: "abV/cm", factor: ABVOLT / 0.01, system: "metric" },
  ],
  defaultFrom: "kv-mm",
  defaultTo: "v-mil",
  defaultValue: 1,
  popularPairs: [
    ["kv-mm", "v-mil"],
    ["v-mil", "kv-mm"],
    ["v-m", "v-cm"],
    ["kv-cm", "kv-m"],
    ["mv-m-mega", "kv-mm"],
    ["statv-cm", "v-m"],
    ["v-in", "v-m"],
  ],
  related: ["electric-potential", "charge", "surface-charge-density", "force"],
  known: [
    // python: 1e6*0.0254e-3
    { value: 1, from: "kv-mm", to: "v-mil", expected: 25.4 },
    // python: 500/0.0254e-3/1e6
    { value: 500, from: "v-mil", to: "kv-mm", expected: 19.685039370078737 },
    { value: 3, from: "mv-m-mega", to: "kv-cm", expected: 30 },
    // python: 299792458e-6/0.01
    { value: 1, from: "statv-cm", to: "v-m", expected: 29979.2458 },
    { value: 1, from: "abv-cm", to: "uv-m", expected: 1 },
    // python: 1/0.0254
    { value: 1, from: "v-in", to: "v-m", expected: 39.37007874015748 },
    { value: 0, from: "n-c", to: "v-m", expected: 0 },
  ],
};

export const electricPotential: LinearSpec = {
  id: "electric-potential",
  slug: "electric-potential-converter",
  group: "electricity",
  kind: "linear",
  dimension: "electric-potential",
  baseUnit: "v",
  units: [
    { id: "v", symbol: "V", factor: 1, system: "si" },
    { id: "kv", symbol: "kV", factor: 1e3, system: "si" },
    { id: "mv-mega", symbol: "MV", factor: 1e6, system: "si" },
    { id: "gv", symbol: "GV", factor: 1e9, system: "si" },
    { id: "mv", symbol: "mV", factor: 1e-3, system: "si" },
    { id: "uv", symbol: "µV", factor: 1e-6, system: "si" },
    { id: "nv", symbol: "nV", factor: 1e-9, system: "si" },
    // 1 W/A = 1 J/C = 1 V
    { id: "w-a", symbol: "W/A", factor: 1, system: "si" },
    { id: "statv", symbol: "statV", factor: STATVOLT, system: "metric" },
    { id: "abv", symbol: "abV", factor: ABVOLT, system: "metric" },
  ],
  defaultFrom: "kv",
  defaultTo: "v",
  defaultValue: 1,
  allowNegative: true,
  popularPairs: [
    ["kv", "v"],
    ["v", "mv"],
    ["mv", "v"],
    ["mv", "uv"],
    ["mv-mega", "kv"],
    ["statv", "v"],
    ["abv", "nv"],
  ],
  related: ["current", "electric-field-strength", "electric-resistance", "charge"],
  known: [
    { value: 1, from: "kv", to: "v", expected: 1000 },
    { value: 1.5, from: "v", to: "mv", expected: 1500 },
    // python: 299792458e-6
    { value: 1, from: "statv", to: "v", expected: 299.792458 },
    // python: 1/299.792458
    { value: 1, from: "v", to: "statv", expected: 0.0033356409519815205 },
    { value: 1, from: "abv", to: "nv", expected: 10 },
    { value: -70, from: "mv", to: "v", expected: -0.07 },
    { value: 0, from: "kv", to: "v", expected: 0 },
  ],
};

export const electricResistance: LinearSpec = {
  id: "electric-resistance",
  slug: "electric-resistance-converter",
  group: "electricity",
  kind: "linear",
  dimension: "electric-resistance",
  baseUnit: "ohm",
  units: [
    { id: "ohm", symbol: "Ω", factor: 1, system: "si" },
    { id: "mohm", symbol: "mΩ", factor: 1e-3, system: "si" },
    { id: "uohm", symbol: "µΩ", factor: 1e-6, system: "si" },
    { id: "nohm", symbol: "nΩ", factor: 1e-9, system: "si" },
    { id: "kohm", symbol: "kΩ", factor: 1e3, system: "si" },
    { id: "megohm", symbol: "MΩ", factor: 1e6, system: "si" },
    { id: "gohm", symbol: "GΩ", factor: 1e9, system: "si" },
    { id: "tohm", symbol: "TΩ", factor: 1e12, system: "si" },
    // 1 V/A = 1 Ω
    { id: "v-a", symbol: "V/A", factor: 1, system: "si" },
    { id: "statohm", symbol: "statΩ", factor: STATOHM, system: "metric" },
    { id: "abohm", symbol: "abΩ", factor: ABOHM, system: "metric" },
  ],
  defaultFrom: "kohm",
  defaultTo: "ohm",
  defaultValue: 1,
  popularPairs: [
    ["kohm", "ohm"],
    ["ohm", "kohm"],
    ["megohm", "kohm"],
    ["mohm", "ohm"],
    ["gohm", "megohm"],
    ["statohm", "ohm"],
    ["abohm", "nohm"],
  ],
  related: ["electric-conductance", "electric-resistivity", "current", "electric-potential"],
  known: [
    { value: 4.7, from: "kohm", to: "ohm", expected: 4700 },
    { value: 1, from: "megohm", to: "kohm", expected: 1000 },
    { value: 250, from: "mohm", to: "ohm", expected: 0.25 },
    // python: 299792458**2*1e-5
    { value: 1, from: "statohm", to: "ohm", expected: 898755178736.8176 },
    // python: 1e-9/1e-9
    { value: 1, from: "abohm", to: "nohm", expected: 1 },
    { value: 0, from: "ohm", to: "kohm", expected: 0 },
  ],
};

export const electricResistivity: LinearSpec = {
  id: "electric-resistivity",
  slug: "electric-resistivity-converter",
  group: "electricity",
  kind: "linear",
  dimension: "electric-resistivity",
  baseUnit: "ohm-m",
  units: [
    { id: "ohm-m", symbol: "Ω·m", factor: 1, system: "si" },
    { id: "kohm-m", symbol: "kΩ·m", factor: 1e3, system: "si" },
    { id: "megohm-m", symbol: "MΩ·m", factor: 1e6, system: "si" },
    { id: "mohm-m", symbol: "mΩ·m", factor: 1e-3, system: "si" },
    { id: "uohm-m", symbol: "µΩ·m", factor: 1e-6, system: "si" },
    { id: "nohm-m", symbol: "nΩ·m", factor: 1e-9, system: "si" },
    { id: "ohm-cm", symbol: "Ω·cm", factor: 0.01, system: "metric" },
    { id: "kohm-cm", symbol: "kΩ·cm", factor: 10, system: "metric" },
    { id: "megohm-cm", symbol: "MΩ·cm", factor: 1e4, system: "metric" },
    { id: "uohm-cm", symbol: "µΩ·cm", factor: 1e-8, system: "metric" },
    // 1 Ω·mm²/m = 1 Ω × 10⁻⁶ m² / 1 m = 1 µΩ·m (common for wires)
    { id: "ohm-mm2-m", symbol: "Ω·mm²/m", factor: 1e-6, system: "metric" },
    { id: "ohm-in", symbol: "Ω·in", factor: INCH, system: "us" },
    { id: "ohm-ft", symbol: "Ω·ft", factor: FOOT, system: "us" },
    // 1 Ω·cmil/ft = 1 Ω × (π/4 × 10⁻⁶ in²) / 1 ft ≈ 1.66243e-9 Ω·m
    { id: "ohm-cmil-ft", symbol: "Ω·cmil/ft", factor: CIRCULAR_MIL / FOOT, system: "us" },
    // 1 statΩ·cm = c² × 10⁻⁵ Ω × 0.01 m
    { id: "statohm-cm", symbol: "statΩ·cm", factor: STATOHM * 0.01, system: "metric" },
    { id: "abohm-cm", symbol: "abΩ·cm", factor: ABOHM * 0.01, system: "metric" },
  ],
  defaultFrom: "ohm-cmil-ft",
  defaultTo: "ohm-mm2-m",
  defaultValue: 10.37,
  popularPairs: [
    ["ohm-cmil-ft", "ohm-mm2-m"],
    ["ohm-m", "ohm-cm"],
    ["ohm-cm", "ohm-m"],
    ["uohm-cm", "nohm-m"],
    ["ohm-mm2-m", "uohm-cm"],
    ["megohm-cm", "ohm-m"],
    ["ohm-cmil-ft", "uohm-cm"],
  ],
  related: ["electric-resistance", "electric-conductivity", "electric-conductance"],
  known: [
    // python: 10.37*(math.pi/4*(0.0254e-3)**2)/0.3048/1e-6 (copper ≈ 10.37 Ω·cmil/ft)
    { value: 10.37, from: "ohm-cmil-ft", to: "ohm-mm2-m", expected: 0.017239358786880096 },
    // python: 1/((math.pi/4*(0.0254e-3)**2)/0.3048)/1e8 (1 µΩ·cm in Ω·cmil/ft)
    { value: 1, from: "uohm-cm", to: "ohm-cmil-ft", expected: 6.0153049357566735 },
    { value: 1, from: "ohm-m", to: "ohm-cm", expected: 100 },
    { value: 1.68, from: "uohm-cm", to: "nohm-m", expected: 16.8 },
    // ultrapure water 18.2 MΩ·cm = 182,000 Ω·m
    { value: 18.2, from: "megohm-cm", to: "ohm-m", expected: 182000 },
    // python: 299792458**2*1e-7
    { value: 1, from: "statohm-cm", to: "ohm-m", expected: 8987551787.368176 },
    // python: 0.3048
    { value: 1, from: "ohm-ft", to: "ohm-m", expected: 0.3048 },
  ],
};

export const electricConductance: LinearSpec = {
  id: "electric-conductance",
  slug: "electric-conductance-converter",
  group: "electricity",
  kind: "linear",
  dimension: "electric-conductance",
  baseUnit: "s",
  units: [
    { id: "s", symbol: "S", factor: 1, system: "si" },
    { id: "ks", symbol: "kS", factor: 1e3, system: "si" },
    { id: "ms", symbol: "mS", factor: 1e-3, system: "si" },
    { id: "us", symbol: "µS", factor: 1e-6, system: "si" },
    { id: "ns", symbol: "nS", factor: 1e-9, system: "si" },
    { id: "ps", symbol: "pS", factor: 1e-12, system: "si" },
    // 1 mho (℧) = 1 S; older name, "ohm" spelled backwards
    { id: "mho", symbol: "℧", factor: 1, system: "other" },
    { id: "mmho", symbol: "m℧", factor: 1e-3, system: "other" },
    { id: "umho", symbol: "µ℧", factor: 1e-6, system: "other" },
    // 1 A/V = 1 S
    { id: "a-v", symbol: "A/V", factor: 1, system: "si" },
    // statsiemens (statmho) = 1/statohm; absiemens (abmho) = 1/abohm = 10⁹ S
    { id: "stats", symbol: "statS", factor: 1 / STATOHM, system: "metric" },
    { id: "abs", symbol: "abS", factor: 1 / ABOHM, system: "metric" },
  ],
  defaultFrom: "ms",
  defaultTo: "us",
  defaultValue: 1,
  popularPairs: [
    ["ms", "us"],
    ["us", "ms"],
    ["s", "ms"],
    ["mho", "s"],
    ["umho", "us"],
    ["ns", "ps"],
    ["abs", "s"],
  ],
  related: ["electric-resistance", "electric-conductivity", "electric-resistivity", "current"],
  known: [
    { value: 1, from: "ms", to: "us", expected: 1000 },
    { value: 1, from: "mho", to: "s", expected: 1 },
    { value: 25, from: "umho", to: "ms", expected: 0.025 },
    { value: 1, from: "abs", to: "s", expected: 1e9 },
    // python: 1/(299792458**2*1e-5)
    { value: 1, from: "stats", to: "s", expected: 1.1126500560536185e-12 },
    { value: 0, from: "s", to: "ms", expected: 0 },
  ],
};

export const electricConductivity: LinearSpec = {
  id: "electric-conductivity",
  slug: "electric-conductivity-converter",
  group: "electricity",
  kind: "linear",
  dimension: "electric-conductivity",
  baseUnit: "s-m",
  units: [
    { id: "s-m", symbol: "S/m", factor: 1, system: "si" },
    { id: "ms-m-mega", symbol: "MS/m", factor: 1e6, system: "si" },
    { id: "ks-m", symbol: "kS/m", factor: 1e3, system: "si" },
    { id: "ms-m", symbol: "mS/m", factor: 1e-3, system: "si" },
    { id: "us-m", symbol: "µS/m", factor: 1e-6, system: "si" },
    // 1 dS/m = 0.1 S/m = 1 mS/cm (used for soil and irrigation water salinity)
    { id: "ds-m", symbol: "dS/m", factor: 0.1, system: "si" },
    { id: "s-cm", symbol: "S/cm", factor: 100, system: "metric" },
    { id: "ms-cm", symbol: "mS/cm", factor: 0.1, system: "metric" },
    { id: "us-cm", symbol: "µS/cm", factor: 1e-4, system: "metric" },
    // 1 m/(Ω·mm²) = 1 S·m / 10⁻⁶ m² = 10⁶ S/m (reciprocal of Ω·mm²/m)
    { id: "m-ohm-mm2", symbol: "m/(Ω·mm²)", factor: 1e6, system: "metric" },
    { id: "mho-m", symbol: "℧/m", factor: 1, system: "other" },
    { id: "mho-cm", symbol: "℧/cm", factor: 100, system: "other" },
    { id: "umho-cm", symbol: "µ℧/cm", factor: 1e-4, system: "other" },
    // %IACS: 100 % IACS = 58 MS/m (annealed copper, 1913 convention)
    { id: "iacs", symbol: "% IACS", factor: IACS_100 / 100, system: "other" },
    // 1 abS/cm = 10⁹ S / 0.01 m; 1 statS/cm = (1/statohm) / 0.01 m
    { id: "abs-cm", symbol: "abS/cm", factor: 1 / ABOHM / 0.01, system: "metric" },
    { id: "stats-cm", symbol: "statS/cm", factor: 1 / STATOHM / 0.01, system: "metric" },
  ],
  defaultFrom: "us-cm",
  defaultTo: "ms-m",
  defaultValue: 1,
  popularPairs: [
    ["us-cm", "ms-m"],
    ["ms-cm", "us-cm"],
    ["ds-m", "us-cm"],
    ["s-m", "us-cm"],
    ["iacs", "ms-m-mega"],
    ["ms-m-mega", "iacs"],
    ["umho-cm", "us-cm"],
    ["stats-cm", "s-m"],
  ],
  related: ["electric-resistivity", "electric-conductance", "electric-resistance", "solution-concentration"],
  known: [
    { value: 1, from: "us-cm", to: "ms-m", expected: 0.1 },
    { value: 1, from: "ms-cm", to: "us-cm", expected: 1000 },
    { value: 1, from: "ds-m", to: "ms-cm", expected: 1 },
    { value: 100, from: "iacs", to: "ms-m-mega", expected: 58 },
    // aluminium ≈ 37.7 MS/m; python: 37.7/58*100
    { value: 37.7, from: "ms-m-mega", to: "iacs", expected: 65 },
    // python: 1/(299792458**2*1e-5)/0.01
    { value: 1, from: "stats-cm", to: "s-m", expected: 1.1126500560536184e-10 },
    { value: 1, from: "abs-cm", to: "s-m", expected: 1e11 },
    { value: 0, from: "s-m", to: "us-cm", expected: 0 },
  ],
};

export const capacitance: LinearSpec = {
  id: "capacitance",
  slug: "capacitance-converter",
  group: "electricity",
  kind: "linear",
  dimension: "capacitance",
  baseUnit: "f",
  units: [
    { id: "f", symbol: "F", factor: 1, system: "si" },
    { id: "kf", symbol: "kF", factor: 1e3, system: "si" },
    { id: "mf", symbol: "mF", factor: 1e-3, system: "si" },
    { id: "uf", symbol: "µF", factor: 1e-6, system: "si" },
    { id: "nf", symbol: "nF", factor: 1e-9, system: "si" },
    { id: "pf", symbol: "pF", factor: 1e-12, system: "si" },
    { id: "ff", symbol: "fF", factor: 1e-15, system: "si" },
    // 1 C/V = 1 F
    { id: "c-v", symbol: "C/V", factor: 1, system: "si" },
    // the statfarad is also called the "centimetre" of capacitance in Gaussian units
    { id: "statf", symbol: "statF", factor: STATFARAD, system: "metric" },
    { id: "abf", symbol: "abF", factor: ABFARAD, system: "metric" },
  ],
  defaultFrom: "uf",
  defaultTo: "nf",
  defaultValue: 1,
  popularPairs: [
    ["uf", "nf"],
    ["nf", "uf"],
    ["nf", "pf"],
    ["pf", "nf"],
    ["uf", "pf"],
    ["mf", "uf"],
    ["statf", "pf"],
  ],
  related: ["charge", "electric-potential", "inductance", "energy"],
  known: [
    { value: 1, from: "uf", to: "nf", expected: 1000 },
    { value: 100, from: "nf", to: "uf", expected: 0.1 },
    { value: 4700, from: "pf", to: "nf", expected: 4.7 },
    // python: 1e5/299792458**2/1e-12
    { value: 1, from: "statf", to: "pf", expected: 1.1126500560536186 },
    { value: 1, from: "abf", to: "f", expected: 1e9 },
    { value: 0, from: "f", to: "uf", expected: 0 },
  ],
};

export const inductance: LinearSpec = {
  id: "inductance",
  slug: "inductance-converter",
  group: "electricity",
  kind: "linear",
  dimension: "inductance",
  baseUnit: "h",
  units: [
    { id: "h", symbol: "H", factor: 1, system: "si" },
    { id: "kh", symbol: "kH", factor: 1e3, system: "si" },
    { id: "mh", symbol: "mH", factor: 1e-3, system: "si" },
    { id: "uh", symbol: "µH", factor: 1e-6, system: "si" },
    { id: "nh", symbol: "nH", factor: 1e-9, system: "si" },
    { id: "ph", symbol: "pH", factor: 1e-12, system: "si" },
    // 1 Wb/A = 1 Ω·s = 1 H
    { id: "wb-a", symbol: "Wb/A", factor: 1, system: "si" },
    { id: "stath", symbol: "statH", factor: STATHENRY, system: "metric" },
    // the abhenry is also called the "centimetre" of inductance in EMU
    { id: "abh", symbol: "abH", factor: ABHENRY, system: "metric" },
  ],
  defaultFrom: "mh",
  defaultTo: "uh",
  defaultValue: 1,
  popularPairs: [
    ["mh", "uh"],
    ["uh", "mh"],
    ["uh", "nh"],
    ["nh", "uh"],
    ["h", "mh"],
    ["abh", "nh"],
  ],
  related: ["capacitance", "current", "magnetic-flux", "electric-resistance"],
  known: [
    { value: 1, from: "mh", to: "uh", expected: 1000 },
    { value: 470, from: "uh", to: "mh", expected: 0.47 },
    { value: 1, from: "nh", to: "ph", expected: 1000 },
    { value: 1, from: "abh", to: "nh", expected: 1 },
    // python: 299792458**2*1e-5
    { value: 1, from: "stath", to: "h", expected: 898755178736.8176 },
    { value: 0, from: "h", to: "mh", expected: 0 },
  ],
};

/** All converters of the "electricity" group. */
export const electricityConverters: readonly LinearSpec[] = [
  charge,
  linearChargeDensity,
  surfaceChargeDensity,
  volumeChargeDensity,
  current,
  linearCurrentDensity,
  surfaceCurrentDensity,
  electricFieldStrength,
  electricPotential,
  electricResistance,
  electricResistivity,
  electricConductance,
  electricConductivity,
  capacitance,
  inductance,
];
