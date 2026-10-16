import { FOOT, INCH, YARD } from "../constants";
import type { LinearSpec, Params, UnitSpec } from "../types";

/** SI prefixes, quecto (10⁻³⁰) to quetta (10³⁰), exact by definition (CGPM 1960–2022). */
const SI_PREFIXES: readonly (readonly [string, string, number])[] = [
  ["quecto", "q", 1e-30],
  ["ronto", "r", 1e-27],
  ["yocto", "y", 1e-24],
  ["zepto", "z", 1e-21],
  ["atto", "a", 1e-18],
  ["femto", "f", 1e-15],
  ["pico", "p", 1e-12],
  ["nano", "n", 1e-9],
  ["micro", "µ", 1e-6],
  ["milli", "m", 1e-3],
  ["centi", "c", 1e-2],
  ["deci", "d", 1e-1],
  ["none", "", 1],
  ["deca", "da", 1e1],
  ["hecto", "h", 1e2],
  ["kilo", "k", 1e3],
  ["mega", "M", 1e6],
  ["giga", "G", 1e9],
  ["tera", "T", 1e12],
  ["peta", "P", 1e15],
  ["exa", "E", 1e18],
  ["zetta", "Z", 1e21],
  ["yotta", "Y", 1e24],
  ["ronna", "R", 1e27],
  ["quetta", "Q", 1e30],
];

export const prefixes: LinearSpec = {
  id: "prefixes",
  slug: "prefixes-converter",
  group: "other",
  kind: "linear",
  dimension: "dimensionless",
  baseUnit: "none",
  units: SI_PREFIXES.map(([id, symbol, factor]) => ({ id, symbol, factor, system: id === "none" ? "other" : "si" })),
  defaultFrom: "kilo",
  defaultTo: "none",
  defaultValue: 1,
  popularPairs: [
    ["kilo", "none"],
    ["mega", "kilo"],
    ["none", "milli"],
    ["micro", "nano"],
    ["giga", "mega"],
    ["milli", "micro"],
    ["tera", "giga"],
  ],
  // Negative quantities can carry prefixes too (−5 kV).
  allowNegative: true,
  related: ["data-storage", "data-transfer", "length", "numbers"],
  known: [
    { value: 1, from: "kilo", to: "none", expected: 1000 },
    // 1e6/1e3
    { value: 1, from: "mega", to: "kilo", expected: 1000 },
    { value: 1, from: "none", to: "milli", expected: 1000 },
    // 1e30/1e24
    { value: 1, from: "quetta", to: "yotta", expected: 1e6 },
    { value: 2.5, from: "micro", to: "nano", expected: 2500 },
    { value: 1, from: "giga", to: "none", expected: 1e9 },
    // 1e-30/1e-27
    { value: 1, from: "quecto", to: "ronto", expected: 1e-3 },
    { value: -5, from: "kilo", to: "none", expected: -5000 },
  ],
};

export const dataTransfer: LinearSpec = {
  id: "data-transfer",
  slug: "data-transfer-converter",
  group: "other",
  kind: "linear",
  dimension: "data-rate",
  baseUnit: "bps",
  units: [
    { id: "bps", symbol: "bit/s", factor: 1, system: "si" },
    { id: "kbps", symbol: "kbit/s", factor: 1e3, system: "si" },
    { id: "mbps", symbol: "Mbit/s", factor: 1e6, system: "si" },
    { id: "gbps", symbol: "Gbit/s", factor: 1e9, system: "si" },
    { id: "tbps", symbol: "Tbit/s", factor: 1e12, system: "si" },
    // IEC binary prefixes: Ki = 2¹⁰, Mi = 2²⁰, Gi = 2³⁰, Ti = 2⁴⁰ (exact)
    { id: "kibps", symbol: "Kibit/s", factor: 2 ** 10, system: "other" },
    { id: "mibps", symbol: "Mibit/s", factor: 2 ** 20, system: "other" },
    { id: "gibps", symbol: "Gibit/s", factor: 2 ** 30, system: "other" },
    { id: "tibps", symbol: "Tibit/s", factor: 2 ** 40, system: "other" },
    // 1 byte = 8 bits
    { id: "byps", symbol: "B/s", factor: 8, system: "si" },
    { id: "kbyps", symbol: "kB/s", factor: 8e3, system: "si" },
    { id: "mbyps", symbol: "MB/s", factor: 8e6, system: "si" },
    { id: "gbyps", symbol: "GB/s", factor: 8e9, system: "si" },
    { id: "tbyps", symbol: "TB/s", factor: 8e12, system: "si" },
    { id: "kibyps", symbol: "KiB/s", factor: 8 * 2 ** 10, system: "other" },
    { id: "mibyps", symbol: "MiB/s", factor: 8 * 2 ** 20, system: "other" },
    { id: "gibyps", symbol: "GiB/s", factor: 8 * 2 ** 30, system: "other" },
    { id: "tibyps", symbol: "TiB/s", factor: 8 * 2 ** 40, system: "other" },
  ],
  defaultFrom: "mbps",
  defaultTo: "mbyps",
  defaultValue: 100,
  popularPairs: [
    ["mbps", "mbyps"],
    ["mbyps", "mbps"],
    ["gbps", "mbyps"],
    ["mbps", "mibyps"],
    ["kbps", "kbyps"],
    ["gbps", "gibps"],
    ["mibyps", "mbps"],
  ],
  related: ["data-storage", "prefixes", "time", "frequency-wavelength"],
  known: [
    // 100e6/8/1e6 (100 Mbit/s broadband)
    { value: 100, from: "mbps", to: "mbyps", expected: 12.5 },
    // 1e9/2**20
    { value: 1, from: "gbps", to: "mibps", expected: 953.67431640625 },
    // 1e9/8/2**20
    { value: 1, from: "gbps", to: "mibyps", expected: 119.20928955078125 },
    { value: 1, from: "kbyps", to: "kbps", expected: 8 },
    // 2**20*8/1e6
    { value: 1, from: "mibyps", to: "mbps", expected: 8.388608 },
    // 1e12/8/1e9
    { value: 1, from: "tbps", to: "gbyps", expected: 125 },
    { value: 0, from: "mbps", to: "mbyps", expected: 0 },
  ],
};

/** Reference sound pressure in air, 20 µPa (ISO 80000-8 / IEC 60027-3 convention). */
const P_REF = 20e-6;
/** Neper in decibels for field (root-power) quantities: 1 Np = 20/ln 10 dB. */
const NEPER_DB = 20 / Math.LN10;

const pressureUnit = (id: string, symbol: string, factor: number, system: UnitSpec["system"] = "si"): UnitSpec => ({
  id,
  symbol,
  factor,
  system,
  dimension: "sound-pressure",
  min: 0,
  minExclusive: true,
});

export const sound: LinearSpec = {
  id: "sound",
  slug: "sound-converter",
  group: "other",
  kind: "linear",
  // Levels (B, dB, Np) convert among themselves; sound pressures (Pa, dB SPL)
  // among themselves. The engine never converts between the two dimensions.
  dimension: "level",
  baseUnit: "db",
  units: [
    { id: "db", symbol: "dB", factor: 1, system: "si" },
    { id: "b", symbol: "B", factor: 10, system: "si" },
    { id: "np", symbol: "Np", factor: NEPER_DB, system: "si" },
    // Sound pressure, base Pa within the "sound-pressure" dimension.
    pressureUnit("pa", "Pa", 1),
    pressureUnit("mpa", "mPa", 1e-3),
    pressureUnit("upa", "µPa", 1e-6),
    // microbar = 0.1 Pa (1 dyn/cm², CGS)
    pressureUnit("ubar", "µbar", 0.1, "metric"),
    {
      id: "dbspl",
      symbol: "dB SPL",
      dimension: "sound-pressure",
      // p = 20 µPa × 10^(L/20); L may be negative (quieter than 20 µPa).
      toBase: (level: number) => P_REF * 10 ** (level / 20),
      fromBase: (pa: number) => 20 * Math.log10(pa / P_REF),
      system: "si",
    },
  ],
  defaultFrom: "dbspl",
  defaultTo: "pa",
  defaultValue: 94,
  popularPairs: [
    ["dbspl", "pa"],
    ["pa", "dbspl"],
    ["upa", "dbspl"],
    ["dbspl", "mpa"],
    ["np", "db"],
    ["db", "np"],
    ["b", "db"],
  ],
  // Levels and level differences can be negative.
  allowNegative: true,
  related: ["pressure", "frequency-wavelength", "power"],
  known: [
    // 20e-6*10**(94/20) (calibrator level)
    { value: 94, from: "dbspl", to: "pa", expected: 1.0023744672545452 },
    // 20*log10(1/20e-6)
    { value: 1, from: "pa", to: "dbspl", expected: 93.97940008672037 },
    // reference pressure → 0 dB SPL
    { value: 20, from: "upa", to: "dbspl", expected: 0 },
    // 20e-6*10**(120/20)
    { value: 120, from: "dbspl", to: "pa", expected: 20 },
    // 20e-6*10**(-10/20)*1e6
    { value: -10, from: "dbspl", to: "upa", expected: 6.324555320336759 },
    // 20/ln(10)
    { value: 1, from: "np", to: "db", expected: 8.685889638065035 },
    // 3*ln(10)/20
    { value: 3, from: "db", to: "np", expected: 0.34538776394910686 },
    { value: 1, from: "b", to: "db", expected: 10 },
  ],
};

/** Points per inch (PostScript/desktop publishing point, exact). */
const POINTS_PER_INCH = 72;

export const typography: LinearSpec = {
  id: "typography",
  slug: "typography-converter",
  group: "other",
  kind: "linear",
  dimension: "length",
  baseUnit: "in",
  units: [
    { id: "in", symbol: "in", factor: 1, system: "us" },
    // point = 1/72 in; pica = 12 pt = 1/6 in; twip = 1/20 pt = 1/1440 in
    { id: "pt", symbol: "pt", factor: 1 / POINTS_PER_INCH, system: "other" },
    { id: "pc", symbol: "pc", factor: 12 / POINTS_PER_INCH, system: "other" },
    { id: "twip", symbol: "twip", factor: 1 / (20 * POINTS_PER_INCH), system: "other" },
    { id: "mm", symbol: "mm", factor: 1e-3 / INCH, system: "si" },
    { id: "cm", symbol: "cm", factor: 1e-2 / INCH, system: "si" },
    // Q (kyu) = 0.25 mm
    { id: "q", symbol: "Q", factor: 0.25e-3 / INCH, system: "metric" },
    {
      id: "px",
      symbol: "px",
      // 1 px = 1/dpi in; dpi defaults to 96 (the CSS reference pixel).
      toBase: (value: number, p: Params) => value / p.dpi,
      fromBase: (inches: number, p: Params) => inches * p.dpi,
      system: "other",
    },
  ],
  params: [
    {
      id: "dpi",
      defaultValue: 96,
      symbol: "dpi",
      min: 0,
      minExclusive: true,
      presets: [
        { key: "dpi72", value: 72 },
        { key: "dpi300", value: 300 },
      ],
    },
  ],
  defaultFrom: "pt",
  defaultTo: "px",
  defaultValue: 12,
  popularPairs: [
    ["pt", "px"],
    ["px", "pt"],
    ["pt", "mm"],
    ["pc", "in"],
    ["px", "mm"],
    ["mm", "pt"],
    ["q", "pt"],
  ],
  related: ["length", "image-resolution", "prefixes"],
  known: [
    // 1/72*96
    { value: 1, from: "pt", to: "px", expected: 1.3333333333333333 },
    // 1/96*72
    { value: 1, from: "px", to: "pt", expected: 0.75 },
    // 12/72*25.4
    { value: 1, from: "pc", to: "mm", expected: 4.2333333333333325 },
    { value: 1, from: "pt", to: "twip", expected: 20 },
    // 10/72*25.4/0.25
    { value: 10, from: "pt", to: "q", expected: 14.11111111111111 },
    // 1 in at 300 dpi
    { value: 1, from: "in", to: "px", expected: 300, params: { dpi: 300 } },
    // at 72 dpi one pixel is one point
    { value: 1, from: "px", to: "pt", expected: 1, params: { dpi: 72 } },
    { value: 0, from: "pt", to: "mm", expected: 0 },
  ],
};

/** Board foot: 1 ft × 1 ft × 1 in = 144 in³ (exact). */
const BOARD_FOOT = 144 * INCH ** 3;

export const lumberVolume: LinearSpec = {
  id: "lumber-volume",
  slug: "lumber-volume-converter",
  group: "other",
  kind: "linear",
  dimension: "volume",
  baseUnit: "m3",
  units: [
    { id: "m3", symbol: "m³", factor: 1, system: "si" },
    { id: "l", symbol: "L", factor: 1e-3, system: "metric" },
    { id: "bf", symbol: "bd ft", factor: BOARD_FOOT, system: "us" },
    // thousand board feet
    { id: "mbf", symbol: "MBF", factor: 1000 * BOARD_FOOT, system: "us" },
    { id: "in3", symbol: "in³", factor: INCH ** 3, system: "us" },
    { id: "ft3", symbol: "ft³", factor: FOOT ** 3, system: "us" },
    { id: "yd3", symbol: "yd³", factor: YARD ** 3, system: "us" },
    // cord = 4 ft × 4 ft × 8 ft = 128 ft³ of stacked wood
    { id: "cord", symbol: "cord", factor: 128 * FOOT ** 3, system: "us" },
    // cord foot = 16 ft³ (1/8 cord)
    { id: "cord_ft", symbol: "cord ft", factor: 16 * FOOT ** 3, system: "us" },
    // Hoppus foot = 1/0.7854 ft³ (quarter-girth convention, approximate π/4)
    { id: "hoppus_ft", symbol: "Hoppus ft", factor: FOOT ** 3 / 0.7854, system: "imperial" },
  ],
  defaultFrom: "bf",
  defaultTo: "m3",
  defaultValue: 1000,
  popularPairs: [
    ["bf", "m3"],
    ["m3", "bf"],
    ["mbf", "m3"],
    ["bf", "ft3"],
    ["cord", "m3"],
    ["hoppus_ft", "ft3"],
    ["cord", "bf"],
  ],
  related: ["volume", "dry-volume", "density"],
  known: [
    // 144*0.0254**3
    { value: 1, from: "bf", to: "m3", expected: 0.002359737216 },
    // 1/(144*0.0254**3)
    { value: 1, from: "m3", to: "bf", expected: 423.7760006578631 },
    // 128*0.3048**3
    { value: 1, from: "cord", to: "m3", expected: 3.624556363776 },
    // 128*12
    { value: 1, from: "cord", to: "bf", expected: 1536 },
    // 1/0.7854
    { value: 1, from: "hoppus_ft", to: "ft3", expected: 1.2732365673542145 },
    { value: 1, from: "ft3", to: "bf", expected: 12 },
    { value: 1, from: "mbf", to: "m3", expected: 2.359737216 },
  ],
};

/** All converters of the "other" group. */
export const otherConverters: readonly LinearSpec[] = [prefixes, dataTransfer, sound, typography, lumberVolume];
