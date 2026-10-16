import { C_LIGHT, FOOT, INCH } from "../constants";
import type { LinearSpec, Params, UnitSpec } from "../types";

/*
 * Photometric units (luminance, luminous intensity, illuminance), image
 * resolution, and frequency ↔ wavelength. Photometric factors follow
 * NIST SP 811 Appendix B.8; lambert-family units are defined with 1/π.
 */

/** International candle (pre-1948 national standards), ≈ 1.019 cd. Approximate, historic. */
const INTERNATIONAL_CANDLE = 1.019;
/** Hefner candle (Hefnerkerze, Germany 1896), ≈ 0.903 international candle ≈ 0.920 cd. Approximate, historic. */
const HEFNER_CANDLE = 0.903 * INTERNATIONAL_CANDLE;

export const luminance: LinearSpec = {
  id: "luminance",
  slug: "luminance-converter",
  group: "light",
  kind: "linear",
  dimension: "luminance",
  baseUnit: "cd_m2",
  units: [
    { id: "cd_m2", symbol: "cd/m²", factor: 1, system: "si" },
    // The nit is another name for cd/m².
    { id: "nit", symbol: "nt", factor: 1, system: "si" },
    { id: "kcd_m2", symbol: "kcd/m²", factor: 1e3, system: "si" },
    { id: "cd_cm2", symbol: "cd/cm²", factor: 1e4, system: "metric" },
    // stilb = 1 cd/cm² (CGS)
    { id: "sb", symbol: "sb", factor: 1e4, system: "metric" },
    // lambert = (1/π) cd/cm²
    { id: "lambert", symbol: "L", factor: 1e4 / Math.PI, system: "metric" },
    { id: "millilambert", symbol: "mL", factor: 10 / Math.PI, system: "metric" },
    // apostilb (blondel) = (1/π) cd/m²
    { id: "asb", symbol: "asb", factor: 1 / Math.PI, system: "metric" },
    // skot = 10⁻³ apostilb; bril = 10⁻⁷ apostilb
    { id: "skot", symbol: "sk", factor: 1e-3 / Math.PI, system: "other" },
    { id: "bril", symbol: "bril", factor: 1e-7 / Math.PI, system: "other" },
    { id: "cd_ft2", symbol: "cd/ft²", factor: 1 / FOOT ** 2, system: "us" },
    { id: "cd_in2", symbol: "cd/in²", factor: 1 / INCH ** 2, system: "us" },
    // footlambert = (1/π) cd/ft²
    { id: "fl", symbol: "fL", factor: 1 / (Math.PI * FOOT ** 2), system: "us" },
  ],
  defaultFrom: "fl",
  defaultTo: "cd_m2",
  defaultValue: 1,
  popularPairs: [
    ["fl", "cd_m2"],
    ["cd_m2", "fl"],
    ["nit", "fl"],
    ["cd_ft2", "cd_m2"],
    ["lambert", "cd_m2"],
    ["sb", "cd_m2"],
    ["asb", "cd_m2"],
  ],
  related: ["illuminance", "luminous-intensity", "image-resolution"],
  known: [
    // 1/(pi*0.3048**2)
    { value: 1, from: "fl", to: "cd_m2", expected: 3.4262590996353905 },
    // 1000*pi*0.3048**2 (1,000-nit display in footlamberts)
    { value: 1000, from: "nit", to: "fl", expected: 291.8635079601587 },
    // 1e4/pi
    { value: 1, from: "lambert", to: "cd_m2", expected: 3183.098861837907 },
    // stilb = 1e4 cd/m²
    { value: 1, from: "sb", to: "cd_m2", expected: 10000 },
    // 100/0.3048**2
    { value: 100, from: "cd_ft2", to: "cd_m2", expected: 1076.391041670972 },
    // 1/pi
    { value: 1, from: "asb", to: "cd_m2", expected: 0.3183098861837907 },
    { value: 0, from: "cd_m2", to: "fl", expected: 0 },
  ],
};

export const luminousIntensity: LinearSpec = {
  id: "luminous-intensity",
  slug: "luminous-intensity-converter",
  group: "light",
  kind: "linear",
  dimension: "luminous-intensity",
  baseUnit: "cd",
  units: [
    { id: "cd", symbol: "cd", factor: 1, system: "si" },
    { id: "mcd", symbol: "mcd", factor: 1e-3, system: "si" },
    { id: "kcd", symbol: "kcd", factor: 1e3, system: "si" },
    // 1 lm/sr = 1 cd by definition
    { id: "lm_sr", symbol: "lm/sr", factor: 1, system: "si" },
    // Modern "candlepower" (new candle, bougie nouvelle) equals the candela.
    { id: "cp", symbol: "cp", factor: 1, system: "other" },
    { id: "ic", symbol: "IC", factor: INTERNATIONAL_CANDLE, system: "other" },
    { id: "hk", symbol: "HK", factor: HEFNER_CANDLE, system: "other" },
  ],
  defaultFrom: "mcd",
  defaultTo: "cd",
  defaultValue: 1000,
  popularPairs: [
    ["mcd", "cd"],
    ["cd", "mcd"],
    ["cp", "cd"],
    ["kcd", "cd"],
    ["ic", "cd"],
    ["hk", "cd"],
  ],
  related: ["luminance", "illuminance", "frequency-wavelength"],
  known: [
    { value: 1000, from: "mcd", to: "cd", expected: 1 },
    { value: 2.5, from: "kcd", to: "mcd", expected: 2.5e6 },
    // international candle ≈ 1.019 cd (approximate published value)
    { value: 1, from: "ic", to: "cd", expected: 1.019 },
    // 0.903*1.019
    { value: 1, from: "hk", to: "cd", expected: 0.9201569999999999 },
    // 100/(0.903*1.019)
    { value: 100, from: "cd", to: "hk", expected: 108.67710618948725 },
    // 1/1.019
    { value: 1, from: "cd", to: "ic", expected: 0.9813542688910698 },
  ],
};

export const illuminance: LinearSpec = {
  id: "illuminance",
  slug: "illuminance-converter",
  group: "light",
  kind: "linear",
  dimension: "illuminance",
  baseUnit: "lx",
  units: [
    { id: "lx", symbol: "lx", factor: 1, system: "si" },
    { id: "mlx", symbol: "mlx", factor: 1e-3, system: "si" },
    { id: "klx", symbol: "klx", factor: 1e3, system: "si" },
    { id: "lm_m2", symbol: "lm/m²", factor: 1, system: "si" },
    { id: "lm_cm2", symbol: "lm/cm²", factor: 1e4, system: "metric" },
    // phot = 1 lm/cm² (CGS)
    { id: "ph", symbol: "ph", factor: 1e4, system: "metric" },
    { id: "mph", symbol: "mph", factor: 10, system: "metric" },
    // nox = 10⁻³ lx
    { id: "nox", symbol: "nx", factor: 1e-3, system: "other" },
    // footcandle = 1 lm/ft²
    { id: "fc", symbol: "fc", factor: 1 / FOOT ** 2, system: "us" },
    { id: "lm_in2", symbol: "lm/in²", factor: 1 / INCH ** 2, system: "us" },
  ],
  defaultFrom: "fc",
  defaultTo: "lx",
  defaultValue: 1,
  popularPairs: [
    ["fc", "lx"],
    ["lx", "fc"],
    ["klx", "fc"],
    ["ph", "lx"],
    ["lm_m2", "fc"],
    ["lx", "klx"],
  ],
  related: ["luminance", "luminous-intensity", "area"],
  known: [
    // 1/0.3048**2
    { value: 1, from: "fc", to: "lx", expected: 10.763910416709722 },
    // 500*0.3048**2 (typical office lighting)
    { value: 500, from: "lx", to: "fc", expected: 46.45152 },
    { value: 1, from: "ph", to: "lx", expected: 10000 },
    // direct sunlight ~100,000 lx
    { value: 100000, from: "lx", to: "klx", expected: 100 },
    // 1/0.0254**2
    { value: 1, from: "lm_in2", to: "lx", expected: 1550.0031000062002 },
    { value: 0, from: "lx", to: "fc", expected: 0 },
  ],
};

export const imageResolution: LinearSpec = {
  id: "image-resolution",
  slug: "image-resolution-converter",
  group: "light",
  kind: "linear",
  dimension: "linear-density",
  baseUnit: "dpm",
  units: [
    { id: "dpm", symbol: "dot/m", factor: 1, system: "si" },
    { id: "dpcm", symbol: "dot/cm", factor: 100, system: "metric" },
    { id: "dpmm", symbol: "dot/mm", factor: 1000, system: "metric" },
    { id: "ppcm", symbol: "px/cm", factor: 100, system: "metric" },
    { id: "dpi", symbol: "dpi", factor: 1 / INCH, system: "us" },
    { id: "ppi", symbol: "ppi", factor: 1 / INCH, system: "us" },
  ],
  defaultFrom: "dpi",
  defaultTo: "dpcm",
  defaultValue: 300,
  popularPairs: [
    ["dpi", "dpcm"],
    ["dpcm", "dpi"],
    ["ppi", "ppcm"],
    ["dpmm", "dpi"],
    ["dpi", "dpm"],
    ["ppcm", "ppi"],
  ],
  related: ["typography", "length", "luminance"],
  known: [
    // 300/0.0254/100
    { value: 300, from: "dpi", to: "dpcm", expected: 118.11023622047246 },
    // 1000*0.0254
    { value: 1, from: "dpmm", to: "dpi", expected: 25.4 },
    // 72/0.0254
    { value: 72, from: "dpi", to: "dpm", expected: 2834.645669291339 },
    // 118*100*0.0254
    { value: 118, from: "dpcm", to: "ppi", expected: 299.72 },
    { value: 96, from: "ppi", to: "dpi", expected: 96 },
  ],
};

/** A wavelength unit of `metres` length: f = v / λ and λ = v / f, with v the speed param. */
const wavelength = (id: string, symbol: string, metres: number, system: UnitSpec["system"] = "si"): UnitSpec => ({
  id,
  symbol,
  toBase: (value: number, p: Params) => p.speed / (value * metres),
  fromBase: (hz: number, p: Params) => p.speed / (hz * metres),
  system,
  min: 0,
  minExclusive: true,
});

const hz = (id: string, symbol: string, factor: number): UnitSpec => ({ id, symbol, factor, system: "si", min: 0, minExclusive: true });

export const frequencyWavelength: LinearSpec = {
  id: "frequency-wavelength",
  slug: "frequency-wavelength-converter",
  group: "light",
  kind: "linear",
  // Frequency and wavelength share one dimension: they convert via v = f·λ.
  dimension: "frequency-wavelength",
  baseUnit: "hz",
  units: [
    hz("hz", "Hz", 1),
    hz("khz", "kHz", 1e3),
    hz("mhz", "MHz", 1e6),
    hz("ghz", "GHz", 1e9),
    hz("thz", "THz", 1e12),
    hz("phz", "PHz", 1e15),
    wavelength("km", "km", 1e3),
    wavelength("m", "m", 1),
    wavelength("cm", "cm", 1e-2),
    wavelength("mm", "mm", 1e-3),
    wavelength("um", "µm", 1e-6),
    wavelength("nm", "nm", 1e-9),
    wavelength("pm", "pm", 1e-12),
    // ångström = 10⁻¹⁰ m (exact)
    wavelength("angstrom", "Å", 1e-10, "metric"),
    wavelength("ft", "ft", FOOT, "us"),
    wavelength("in", "in", INCH, "us"),
  ],
  params: [
    {
      id: "speed",
      defaultValue: C_LIGHT,
      symbol: "m/s",
      min: 0,
      minExclusive: true,
      presets: [
        { key: "vacuum", value: C_LIGHT },
        // Sound in dry air at 20 °C, approximate.
        { key: "air", value: 343 },
      ],
    },
  ],
  defaultFrom: "mhz",
  defaultTo: "m",
  defaultValue: 100,
  popularPairs: [
    ["mhz", "m"],
    ["ghz", "cm"],
    ["nm", "thz"],
    ["thz", "um"],
    ["m", "mhz"],
    ["khz", "m"],
    ["ghz", "mm"],
  ],
  related: ["sound", "length", "speed", "luminance"],
  known: [
    // 299792458/1e8 (FM radio)
    { value: 100, from: "mhz", to: "m", expected: 2.99792458 },
    // 299792458/1e9*100
    { value: 1, from: "ghz", to: "cm", expected: 29.9792458 },
    // 299792458/550e-9/1e12 (green light)
    { value: 550, from: "nm", to: "thz", expected: 545.0771963636363 },
    // 299792458/1e12*1e6
    { value: 1, from: "thz", to: "um", expected: 299.792458 },
    // 299792458/1e-10/1e15
    { value: 1, from: "angstrom", to: "phz", expected: 2997.92458 },
    // 343/440 (concert A in air)
    { value: 440, from: "hz", to: "m", expected: 0.7795454545454545, params: { speed: 343 } },
    // 343/1
    { value: 1, from: "m", to: "hz", expected: 343, params: { speed: 343 } },
    // 299792458/2.4e9*1e3 (Wi-Fi)
    { value: 2.4, from: "ghz", to: "mm", expected: 124.91352416666666 },
  ],
};

/** All converters of the "light" group. */
export const lightConverters: readonly LinearSpec[] = [luminance, luminousIntensity, illuminance, imageResolution, frequencyWavelength];
