import { BTU_IT, CAL_IT, CAL_TH, DAY, ELECTRONVOLT, FOOT, G_N, HORSEPOWER, HOUR, IMPERIAL_GALLON, INCH, JULIAN_YEAR, METRIC_HORSEPOWER, MILE, POUND, POUND_FORCE, PSI, US_BUSHEL, US_DRY_GALLON, US_GALLON } from "../constants";
import type { LinearSpec } from "../types";

/** Conventional millimetre of mercury: 13.5951 g/cm³ × gₙ × 1 mm (NIST SP 811). */
export const MM_HG = 13.5951e3 * G_N * 1e-3;

export const pressure: LinearSpec = {
  id: "pressure",
  slug: "pressure-converter",
  group: "common",
  kind: "linear",
  dimension: "pressure",
  baseUnit: "pa",
  units: [
    { id: "pa", symbol: "Pa", factor: 1, system: "si" },
    { id: "hpa", symbol: "hPa", factor: 100, system: "si" },
    { id: "kpa", symbol: "kPa", factor: 1e3, system: "si" },
    { id: "mpa", symbol: "MPa", factor: 1e6, system: "si" },
    { id: "bar", symbol: "bar", factor: 1e5, system: "metric" },
    { id: "mbar", symbol: "mbar", factor: 100, system: "metric" },
    { id: "atm", symbol: "atm", factor: 101325, system: "metric" },
    { id: "at", symbol: "at", factor: G_N * 1e4, system: "metric" },
    { id: "torr", symbol: "Torr", factor: 101325 / 760, system: "metric" },
    { id: "mmhg", symbol: "mmHg", factor: MM_HG, system: "metric" },
    { id: "cmh2o", symbol: "cmH₂O", factor: G_N * 10, system: "metric" },
    { id: "psi", symbol: "psi", factor: PSI, system: "us" },
    { id: "ksi", symbol: "ksi", factor: PSI * 1000, system: "us" },
    { id: "psf", symbol: "psf", factor: PSI / 144, system: "us" },
    { id: "inhg", symbol: "inHg", factor: MM_HG * 25.4, system: "us" },
    { id: "inh2o", symbol: "inH₂O", factor: G_N * 1000 * INCH, system: "us" },
  ],
  defaultFrom: "bar",
  defaultTo: "psi",
  defaultValue: 1,
  popularPairs: [
    ["bar", "psi"],
    ["psi", "bar"],
    ["kpa", "psi"],
    ["psi", "kpa"],
    ["atm", "pa"],
    ["mmhg", "kpa"],
    ["inhg", "hpa"],
    ["mpa", "psi"],
  ],
  related: ["force", "energy", "length"],
  known: [
    // 1 bar = 100,000 Pa / 6,894.757293168361 Pa per psi
    { value: 1, from: "bar", to: "psi", expected: 14.503773773020923 },
    // 1 atm = 101,325 Pa (exact) = 760 Torr (exact)
    { value: 1, from: "atm", to: "torr", expected: 760 },
    { value: 1, from: "atm", to: "kpa", expected: 101.325 },
    // 1 psi = 6.894757293168361 kPa
    { value: 1, from: "psi", to: "kpa", expected: 6.894757293168361 },
    // 760 mmHg (conventional) = 101,325.0144354 Pa, just above 1 atm
    { value: 760, from: "mmhg", to: "pa", expected: 101325.01443540001 },
    // 29.92 inHg = 1013.2 hPa (aviation altimeter setting)
    { value: 29.92, from: "inhg", to: "hpa", expected: 1013.2074811900274 },
  ],
};


/** US therm (100,000 Btu₅₉ °F), NIST SP 811 Appendix B.8: 1.054 804 × 10⁸ J. */
const THERM_US = 1.054804e8;

export const energy: LinearSpec = {
  id: "energy",
  slug: "energy-converter",
  group: "common",
  kind: "linear",
  dimension: "energy",
  baseUnit: "j",
  units: [
    { id: "j", symbol: "J", factor: 1, system: "si" },
    { id: "kj", symbol: "kJ", factor: 1e3, system: "si" },
    { id: "mj", symbol: "MJ", factor: 1e6, system: "si" },
    { id: "gj", symbol: "GJ", factor: 1e9, system: "si" },
    // Watt-hours: 1 W × 3,600 s
    { id: "wh", symbol: "Wh", factor: HOUR, system: "metric" },
    { id: "kwh", symbol: "kWh", factor: HOUR * 1e3, system: "metric" },
    { id: "mwh", symbol: "MWh", factor: HOUR * 1e6, system: "metric" },
    // Thermochemical calorie (4.184 J exact); the food "Calorie" is the kilocalorie
    { id: "cal", symbol: "cal", factor: CAL_TH, system: "metric" },
    { id: "kcal", symbol: "kcal", factor: CAL_TH * 1e3, system: "metric" },
    // International Table calorie (4.1868 J exact)
    { id: "calit", symbol: "cal (IT)", factor: CAL_IT, system: "metric" },
    { id: "erg", symbol: "erg", factor: 1e-7, system: "metric" },
    { id: "ev", symbol: "eV", factor: ELECTRONVOLT, system: "other" },
    { id: "btu", symbol: "Btu", factor: BTU_IT, system: "us" },
    { id: "mmbtu", symbol: "MMBtu", factor: BTU_IT * 1e6, system: "us" },
    { id: "therm", symbol: "thm", factor: THERM_US, system: "us" },
    { id: "ftlbf", symbol: "ft·lbf", factor: FOOT * POUND_FORCE, system: "us" },
    // Ton of TNT: 10⁹ thermochemical calories (conventional)
    { id: "tntt", symbol: "t TNT", factor: CAL_TH * 1e9, system: "other" },
  ],
  defaultFrom: "kwh",
  defaultTo: "btu",
  defaultValue: 1,
  popularPairs: [
    ["kwh", "btu"],
    ["btu", "kwh"],
    ["kcal", "kj"],
    ["kj", "kcal"],
    ["j", "cal"],
    ["therm", "kwh"],
    ["mmbtu", "kwh"],
    ["ftlbf", "j"],
  ],
  related: ["power", "force", "pressure", "temperature"],
  known: [
    // 3,600,000 / 1,055.05585262
    { value: 1, from: "kwh", to: "btu", expected: 3412.141633127942 },
    // 1 kcal (thermochemical) = 4.184 kJ exactly
    { value: 1, from: "kcal", to: "kj", expected: 4.184 },
    // 2,000 food Calories = 2000 × 4184 / 3.6e6 kWh
    { value: 2000, from: "kcal", to: "kwh", expected: 2.3244444444444445 },
    // 105,480,400 J / 3.6e6 J
    { value: 1, from: "therm", to: "kwh", expected: 29.30011111111111 },
    // 0.3048 m × 4.4482216152605 N
    { value: 1, from: "ftlbf", to: "j", expected: 1.3558179483314003 },
    // eV = elementary charge × 1 V
    { value: 1, from: "ev", to: "j", expected: 1.602176634e-19 },
    // 4.1868 / 4.184
    { value: 1, from: "calit", to: "cal", expected: 1.0006692160611854 },
    { value: 0, from: "mmbtu", to: "kwh", expected: 0 },
    // 1e6 × 1055.05585262 / 3.6e6
    { value: 1, from: "mmbtu", to: "kwh", expected: 293.0710701722222 },
  ],
};

export const dryVolume: LinearSpec = {
  id: "dry-volume",
  slug: "dry-volume-converter",
  group: "common",
  kind: "linear",
  dimension: "volume",
  baseUnit: "m3",
  units: [
    { id: "m3", symbol: "m³", factor: 1, system: "si" },
    { id: "l", symbol: "L", factor: 1e-3, system: "metric" },
    // US dry measure: gallon 268.8025 in³; pint = gallon/8, quart = gallon/4
    { id: "usdrypt", symbol: "dry pt (US)", factor: US_DRY_GALLON / 8, system: "us" },
    { id: "usdryqt", symbol: "dry qt (US)", factor: US_DRY_GALLON / 4, system: "us" },
    { id: "usdrygal", symbol: "dry gal (US)", factor: US_DRY_GALLON, system: "us" },
    // US bushel 2,150.42 in³; peck = bushel/4
    { id: "uspk", symbol: "pk (US)", factor: US_BUSHEL / 4, system: "us" },
    { id: "usbu", symbol: "bu (US)", factor: US_BUSHEL, system: "us" },
    // US dry barrel: 7,056 in³
    { id: "usdrybbl", symbol: "bbl (US dry)", factor: 7056 * INCH ** 3, system: "us" },
    { id: "ft3", symbol: "ft³", factor: FOOT ** 3, system: "us" },
    // Imperial units use one gallon (4.54609 L) for dry and liquid goods
    { id: "impqt", symbol: "qt (UK)", factor: IMPERIAL_GALLON / 4, system: "imperial" },
    { id: "impgal", symbol: "gal (UK)", factor: IMPERIAL_GALLON, system: "imperial" },
    // Imperial peck = 2 gallons, bushel = 8 gallons
    { id: "imppk", symbol: "pk (UK)", factor: IMPERIAL_GALLON * 2, system: "imperial" },
    { id: "impbu", symbol: "bu (UK)", factor: IMPERIAL_GALLON * 8, system: "imperial" },
  ],
  defaultFrom: "usbu",
  defaultTo: "l",
  defaultValue: 1,
  popularPairs: [
    ["usbu", "l"],
    ["usbu", "m3"],
    ["uspk", "l"],
    ["usdryqt", "l"],
    ["usdrypt", "l"],
    ["impbu", "usbu"],
    ["usbu", "ft3"],
    ["m3", "usbu"],
  ],
  related: ["volume", "weight", "lumber-volume"],
  known: [
    // 2150.42 × 0.0254³ × 1000
    { value: 1, from: "usbu", to: "l", expected: 35.23907016688 },
    // 2150.42 / 268.8025 = 8
    { value: 1, from: "usbu", to: "usdrygal", expected: 8 },
    { value: 1, from: "uspk", to: "usdrygal", expected: 2 },
    // 268.8025 / 8 × 0.0254³ × 1000
    { value: 1, from: "usdrypt", to: "l", expected: 0.5506104713575 },
    // 8 × 4.54609
    { value: 1, from: "impbu", to: "l", expected: 36.36872 },
    // 7056 / 2150.42
    { value: 1, from: "usdrybbl", to: "usbu", expected: 3.281219482705704 },
    // 8 × 4.54609e-3 / (2150.42 × 0.0254³)
    { value: 1, from: "impbu", to: "usbu", expected: 1.0320567434887007 },
    // 1 / (2150.42 × 0.0254³)
    { value: 1, from: "m3", to: "usbu", expected: 28.377593258401745 },
  ],
};

export const power: LinearSpec = {
  id: "power",
  slug: "power-converter",
  group: "common",
  kind: "linear",
  dimension: "power",
  baseUnit: "w",
  units: [
    { id: "w", symbol: "W", factor: 1, system: "si" },
    { id: "milliw", symbol: "mW", factor: 1e-3, system: "si" },
    { id: "kw", symbol: "kW", factor: 1e3, system: "si" },
    { id: "megaw", symbol: "MW", factor: 1e6, system: "si" },
    { id: "gw", symbol: "GW", factor: 1e9, system: "si" },
    // Mechanical horsepower: 550 ft·lbf/s
    { id: "hp", symbol: "hp", factor: HORSEPOWER, system: "us" },
    // Metric horsepower (PS, CV): 75 kgf·m/s
    { id: "ps", symbol: "PS", factor: METRIC_HORSEPOWER, system: "metric" },
    // Electric horsepower: 746 W exactly
    { id: "hpe", symbol: "hp (electric)", factor: 746, system: "other" },
    { id: "btuh", symbol: "Btu/h", factor: BTU_IT / HOUR, system: "us" },
    // Ton of refrigeration: 12,000 Btu(IT)/h
    { id: "tr", symbol: "TR", factor: (12000 * BTU_IT) / HOUR, system: "us" },
    { id: "ftlbfs", symbol: "ft·lbf/s", factor: FOOT * POUND_FORCE, system: "us" },
    { id: "kcalh", symbol: "kcal/h", factor: (CAL_IT * 1e3) / HOUR, system: "metric" },
    { id: "cals", symbol: "cal/s", factor: CAL_TH, system: "metric" },
    { id: "ergs", symbol: "erg/s", factor: 1e-7, system: "metric" },
  ],
  defaultFrom: "hp",
  defaultTo: "kw",
  defaultValue: 1,
  popularPairs: [
    ["hp", "kw"],
    ["kw", "hp"],
    ["ps", "kw"],
    ["hp", "ps"],
    ["w", "btuh"],
    ["btuh", "w"],
    ["tr", "kw"],
    ["kcalh", "w"],
  ],
  related: ["energy", "torque", "electric-potential"],
  known: [
    // 550 × 0.3048 × 4.4482216152605 / 1000
    { value: 1, from: "hp", to: "kw", expected: 0.7456998715822702 },
    { value: 1, from: "kw", to: "hp", expected: 1.341022089595028 },
    // 75 × 9.80665
    { value: 1, from: "ps", to: "w", expected: 735.49875 },
    { value: 1, from: "hp", to: "ps", expected: 1.013869665424 },
    // 12,000 × 1055.05585262 / 3600 / 1000
    { value: 1, from: "tr", to: "kw", expected: 3.5168528420666667 },
    { value: 1, from: "kw", to: "btuh", expected: 3412.141633127942 },
    // 4186.8 / 3600 = 1.163 W
    { value: 1, from: "kcalh", to: "w", expected: 1.163 },
    { value: 0, from: "w", to: "hp", expected: 0 },
  ],
};

export const force: LinearSpec = {
  id: "force",
  slug: "force-converter",
  group: "common",
  kind: "linear",
  dimension: "force",
  baseUnit: "n",
  units: [
    { id: "n", symbol: "N", factor: 1, system: "si" },
    { id: "mn", symbol: "mN", factor: 1e-3, system: "si" },
    { id: "kn", symbol: "kN", factor: 1e3, system: "si" },
    // Dyne: 1 g·cm/s² (CGS)
    { id: "dyn", symbol: "dyn", factor: 1e-5, system: "metric" },
    // Gram-, kilogram- and tonne-force: mass × standard gravity
    { id: "gf", symbol: "gf", factor: G_N * 1e-3, system: "metric" },
    { id: "kgf", symbol: "kgf", factor: G_N, system: "metric" },
    { id: "tf", symbol: "tf", factor: G_N * 1e3, system: "metric" },
    { id: "lbf", symbol: "lbf", factor: POUND_FORCE, system: "us" },
    { id: "ozf", symbol: "ozf", factor: POUND_FORCE / 16, system: "us" },
    // Kip: 1,000 lbf; short ton-force: 2,000 lbf
    { id: "kip", symbol: "kip", factor: POUND_FORCE * 1e3, system: "us" },
    { id: "tonf", symbol: "tonf (US)", factor: POUND_FORCE * 2000, system: "us" },
    // Poundal: 1 lb·ft/s²
    { id: "pdl", symbol: "pdl", factor: POUND * FOOT, system: "imperial" },
  ],
  defaultFrom: "n",
  defaultTo: "lbf",
  defaultValue: 1,
  popularPairs: [
    ["n", "lbf"],
    ["lbf", "n"],
    ["kn", "lbf"],
    ["kgf", "n"],
    ["n", "kgf"],
    ["kip", "kn"],
    ["n", "dyn"],
  ],
  related: ["pressure", "torque", "weight", "acceleration"],
  known: [
    // 0.45359237 × 9.80665
    { value: 1, from: "lbf", to: "n", expected: 4.4482216152605 },
    { value: 1, from: "kn", to: "lbf", expected: 224.8089430997105 },
    { value: 1, from: "kgf", to: "n", expected: 9.80665 },
    { value: 1, from: "n", to: "dyn", expected: 100000 },
    { value: 1, from: "kip", to: "kn", expected: 4.4482216152605 },
    // 0.45359237 × 0.3048
    { value: 1, from: "pdl", to: "n", expected: 0.138254954376 },
    { value: 1, from: "ozf", to: "n", expected: 0.2780138509537812 },
    { value: 1, from: "tf", to: "kn", expected: 9.80665 },
  ],
};

/** Mean Gregorian year (365.2425 days, exact by the calendar's leap-year rule), in seconds. */
const GREGORIAN_YEAR = 365.2425 * DAY;

export const time: LinearSpec = {
  id: "time",
  slug: "time-converter",
  group: "common",
  kind: "linear",
  dimension: "time",
  baseUnit: "s",
  units: [
    { id: "ns", symbol: "ns", factor: 1e-9, system: "si" },
    { id: "micros", symbol: "µs", factor: 1e-6, system: "si" },
    { id: "ms", symbol: "ms", factor: 1e-3, system: "si" },
    { id: "s", symbol: "s", factor: 1, system: "si" },
    { id: "min", symbol: "min", factor: 60, system: "metric" },
    { id: "h", symbol: "h", factor: HOUR, system: "metric" },
    { id: "d", symbol: "d", factor: DAY, system: "metric" },
    { id: "wk", symbol: "wk", factor: 7 * DAY, system: "other" },
    { id: "fortnight", symbol: "fortnight", factor: 14 * DAY, system: "other" },
    // Average Gregorian month: 365.2425 / 12 = 30.436875 days
    { id: "mo", symbol: "mo", factor: GREGORIAN_YEAR / 12, system: "other" },
    // Common (non-leap) calendar year: 365 days
    { id: "yr", symbol: "yr (365 d)", factor: 365 * DAY, system: "other" },
    { id: "yrgreg", symbol: "yr (Gregorian)", factor: GREGORIAN_YEAR, system: "other" },
    // Julian year (365.25 days), used in astronomy (light-year)
    { id: "yrjul", symbol: "a (Julian)", factor: JULIAN_YEAR, system: "other" },
    // Decade, century and millennium in average Gregorian years
    { id: "decade", symbol: "decade", factor: GREGORIAN_YEAR * 10, system: "other" },
    { id: "century", symbol: "century", factor: GREGORIAN_YEAR * 100, system: "other" },
    { id: "millennium", symbol: "millennium", factor: GREGORIAN_YEAR * 1000, system: "other" },
  ],
  defaultFrom: "h",
  defaultTo: "min",
  defaultValue: 1,
  popularPairs: [
    ["h", "min"],
    ["min", "s"],
    ["d", "h"],
    ["wk", "d"],
    ["yr", "d"],
    ["s", "ms"],
    ["ms", "s"],
    ["yrgreg", "s"],
  ],
  related: ["speed", "frequency-wavelength", "data-transfer"],
  known: [
    { value: 1, from: "h", to: "min", expected: 60 },
    { value: 1, from: "d", to: "s", expected: 86400 },
    { value: 1, from: "wk", to: "h", expected: 168 },
    // 365.25 × 86400
    { value: 1, from: "yrjul", to: "s", expected: 31557600 },
    // 365.2425 / 12
    { value: 1, from: "mo", to: "d", expected: 30.436875 },
    // 1e9 / (365.2425 × 86400)
    { value: 1e9, from: "s", to: "yrgreg", expected: 31.688738506811433 },
    { value: 1, from: "century", to: "yrgreg", expected: 100 },
    { value: 1, from: "ms", to: "micros", expected: 1000 },
    { value: 0, from: "h", to: "s", expected: 0 },
  ],
};

export const angle: LinearSpec = {
  id: "angle",
  slug: "angle-converter",
  group: "common",
  kind: "linear",
  dimension: "angle",
  baseUnit: "rad",
  allowNegative: true,
  units: [
    { id: "rad", symbol: "rad", factor: 1, system: "si" },
    { id: "mrad", symbol: "mrad", factor: 1e-3, system: "si" },
    { id: "microrad", symbol: "µrad", factor: 1e-6, system: "si" },
    // Degree = π/180 rad; minute and second of arc are 1/60 and 1/3600 of it
    { id: "deg", symbol: "°", factor: Math.PI / 180, system: "metric" },
    { id: "arcmin", symbol: "′", factor: Math.PI / 10800, system: "metric" },
    { id: "arcsec", symbol: "″", factor: Math.PI / 648000, system: "metric" },
    // Gradian (gon) = 1/400 turn
    { id: "grad", symbol: "gon", factor: Math.PI / 200, system: "metric" },
    { id: "turn", symbol: "tr", factor: 2 * Math.PI, system: "other" },
    // Quadrant = right angle = 1/4 turn
    { id: "quadrant", symbol: "quadrant", factor: Math.PI / 2, system: "other" },
    // NATO angular mil = 1/6400 turn
    { id: "mil", symbol: "mil (NATO)", factor: (2 * Math.PI) / 6400, system: "other" },
  ],
  defaultFrom: "deg",
  defaultTo: "rad",
  defaultValue: 90,
  popularPairs: [
    ["deg", "rad"],
    ["rad", "deg"],
    ["deg", "grad"],
    ["deg", "arcmin"],
    ["arcsec", "deg"],
    ["mil", "deg"],
    ["turn", "deg"],
    ["mrad", "arcmin"],
  ],
  related: ["angular-velocity", "angular-acceleration", "length"],
  known: [
    // π (math.pi)
    { value: 180, from: "deg", to: "rad", expected: 3.141592653589793 },
    // 180 / π
    { value: 1, from: "rad", to: "deg", expected: 57.29577951308232 },
    { value: 90, from: "deg", to: "grad", expected: 100 },
    { value: 1, from: "turn", to: "deg", expected: 360 },
    { value: 1, from: "deg", to: "arcsec", expected: 3600 },
    { value: -45, from: "deg", to: "turn", expected: -0.125 },
    // 2π / 6400 × 1000
    { value: 1, from: "mil", to: "mrad", expected: 0.9817477042468105 },
    // 1e-3 × 10800 / π
    { value: 1, from: "mrad", to: "arcmin", expected: 3.4377467707849396 },
    { value: 0, from: "deg", to: "rad", expected: 0 },
  ],
};

/** Kilometres per litre in one mile per US gallon and per imperial gallon. */
const MPG_US = MILE / 1000 / (US_GALLON * 1000);
const MPG_UK = MILE / 1000 / (IMPERIAL_GALLON * 1000);

/**
 * Fuel consumption. Base: km/L. Distance-per-fuel units are linear; fuel-per-
 * distance units (L/100 km, gal/100 mi) are reciprocal: km/L = 100 × k / v.
 * Zero and negative values are invalid in every unit.
 */
export const fuelConsumption: LinearSpec = {
  id: "fuel-consumption",
  slug: "fuel-consumption-converter",
  group: "common",
  kind: "linear",
  dimension: "fuel-consumption",
  baseUnit: "kml",
  units: [
    { id: "kml", symbol: "km/L", factor: 1, system: "metric", min: 0, minExclusive: true },
    { id: "l100km", symbol: "L/100 km", toBase: (v) => 100 / v, fromBase: (b) => 100 / b, system: "metric", min: 0, minExclusive: true },
    { id: "mpgus", symbol: "mpg (US)", factor: MPG_US, system: "us", min: 0, minExclusive: true },
    { id: "mpguk", symbol: "mpg (UK)", factor: MPG_UK, system: "imperial", min: 0, minExclusive: true },
    { id: "mipl", symbol: "mi/L", factor: MILE / 1000, system: "other", min: 0, minExclusive: true },
    // gal(US)/100 mi: km/L = 100 × MPG_US / v
    { id: "gal100mi", symbol: "gal (US)/100 mi", toBase: (v) => (100 * MPG_US) / v, fromBase: (b) => (100 * MPG_US) / b, system: "us", min: 0, minExclusive: true },
    { id: "galuk100mi", symbol: "gal (UK)/100 mi", toBase: (v) => (100 * MPG_UK) / v, fromBase: (b) => (100 * MPG_UK) / b, system: "imperial", min: 0, minExclusive: true },
  ],
  defaultFrom: "mpgus",
  defaultTo: "l100km",
  defaultValue: 30,
  popularPairs: [
    ["mpgus", "l100km"],
    ["l100km", "mpgus"],
    ["mpguk", "l100km"],
    ["l100km", "mpguk"],
    ["kml", "l100km"],
    ["mpguk", "mpgus"],
    ["mpgus", "kml"],
    ["gal100mi", "mpgus"],
  ],
  related: ["fuel-efficiency-volume", "speed", "volume", "length"],
  known: [
    // 100 / (30 × 1.609344 / 3.785411784)
    { value: 30, from: "mpgus", to: "l100km", expected: 7.840486111111111 },
    // 1.609344 / 3.785411784
    { value: 1, from: "mpgus", to: "kml", expected: 0.425143707430272 },
    // (100 / 5) / 0.425143707430272
    { value: 5, from: "l100km", to: "mpgus", expected: 47.04291666666666 },
    // 40 × 3.785411784 / 4.54609
    { value: 40, from: "mpguk", to: "mpgus", expected: 33.30696738515955 },
    { value: 10, from: "kml", to: "l100km", expected: 10 },
    { value: 4, from: "gal100mi", to: "mpgus", expected: 25 },
    // 100 / (10 × 1.609344 / 4.54609)
    { value: 10, from: "l100km", to: "mpguk", expected: 28.248093633182215 },
    { value: 1, from: "mpgus", to: "l100km", expected: 235.21458333333334 },
  ],
};

/** All converters of the "common" group defined in this file (append new ones here). */
export const commonConverters: readonly LinearSpec[] = [pressure, energy, dryVolume, power, force, time, angle, fuelConsumption];
