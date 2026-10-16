import { FOOT, G_N, IMPERIAL_GALLON, INCH, KILOGRAM_FORCE, MILE, NAUTICAL_MILE, OUNCE, POUND, POUND_FORCE, US_GALLON } from "../constants";
import type { LinearSpec } from "../types";

/** One full revolution in radians (exact). */
const REV = 2 * Math.PI;
/** One degree of arc in radians (exact). */
const DEG = Math.PI / 180;
/** Slug: the mass accelerated at 1 ft/s² by 1 lbf, so lbf·s²/ft (exact from its definition), in kilograms. */
const SLUG = POUND_FORCE / FOOT;
/** Ounce-force (exact: avoirdupois ounce × standard gravity), in newtons. */
const OUNCE_FORCE = OUNCE * G_N;
/** Kip: 1,000 pounds-force (exact), in newtons. */
const KIP = 1000 * POUND_FORCE;
/** Tonne-force (metric ton-force): 1,000 kgf (exact), in newtons. */
const TONNE_FORCE = 1000 * KILOGRAM_FORCE;

export const angularVelocity: LinearSpec = {
  id: "angular-velocity",
  slug: "angular-velocity-converter",
  group: "engineering",
  kind: "linear",
  dimension: "angular-velocity",
  baseUnit: "rad_s",
  units: [
    { id: "rad_s", symbol: "rad/s", factor: 1, system: "si" },
    { id: "mrad_s", symbol: "mrad/s", factor: 1e-3, system: "si" },
    { id: "rad_min", symbol: "rad/min", factor: 1 / 60, system: "metric" },
    { id: "rad_h", symbol: "rad/h", factor: 1 / 3600, system: "metric" },
    { id: "deg_s", symbol: "°/s", factor: DEG, system: "other" },
    { id: "deg_min", symbol: "°/min", factor: DEG / 60, system: "other" },
    { id: "deg_h", symbol: "°/h", factor: DEG / 3600, system: "other" },
    { id: "rps", symbol: "rev/s", factor: REV, system: "other" },
    { id: "rpm", symbol: "rpm", factor: REV / 60, system: "other" },
    { id: "rph", symbol: "rev/h", factor: REV / 3600, system: "other" },
    { id: "rev_day", symbol: "rev/d", factor: REV / 86400, system: "other" },
  ],
  defaultFrom: "rpm",
  defaultTo: "rad_s",
  defaultValue: 1,
  popularPairs: [
    ["rpm", "rad_s"],
    ["rad_s", "rpm"],
    ["deg_s", "rad_s"],
    ["rad_s", "deg_s"],
    ["rpm", "deg_s"],
    ["rps", "rpm"],
    ["deg_h", "rad_s"],
  ],
  related: ["angle", "angular-acceleration", "speed", "torque"],
  known: [
    // 2π/60
    { value: 1, from: "rpm", to: "rad_s", expected: 0.10471975511965977 },
    // 180/π
    { value: 1, from: "rad_s", to: "deg_s", expected: 57.29577951308232 },
    // 3000/60
    { value: 3000, from: "rpm", to: "rps", expected: 50 },
    // 360 °/s = 1 rev/s = 60 rpm
    { value: 360, from: "deg_s", to: "rpm", expected: 60 },
    // Earth turns about 15 °/h: 15·π/180/3600
    { value: 15, from: "deg_h", to: "rad_s", expected: 7.27220521664304e-5 },
    // 60/(2π)
    { value: 1, from: "rad_s", to: "rpm", expected: 9.549296585513721 },
    { value: 0, from: "rpm", to: "rad_s", expected: 0 },
  ],
};

export const acceleration: LinearSpec = {
  id: "acceleration",
  slug: "acceleration-converter",
  group: "engineering",
  kind: "linear",
  dimension: "acceleration",
  baseUnit: "m_s2",
  units: [
    { id: "m_s2", symbol: "m/s²", factor: 1, system: "si" },
    { id: "cm_s2", symbol: "cm/s²", factor: 1e-2, system: "si" },
    { id: "mm_s2", symbol: "mm/s²", factor: 1e-3, system: "si" },
    { id: "km_h_s", symbol: "km/h/s", factor: 1000 / 3600, system: "metric" },
    // Gal (galileo) = 1 cm/s² (CGS, exact)
    { id: "gal", symbol: "Gal", factor: 1e-2, system: "metric" },
    { id: "mgal", symbol: "mGal", factor: 1e-5, system: "metric" },
    // Standard gravity gₙ = 9.80665 m/s² (exact, CGPM 1901)
    { id: "g0", symbol: "g", factor: G_N, system: "other" },
    { id: "ft_s2", symbol: "ft/s²", factor: FOOT, system: "us" },
    { id: "in_s2", symbol: "in/s²", factor: INCH, system: "us" },
    { id: "mph_s", symbol: "mph/s", factor: MILE / 3600, system: "us" },
    { id: "kn_s", symbol: "kn/s", factor: NAUTICAL_MILE / 3600, system: "other" },
  ],
  defaultFrom: "g0",
  defaultTo: "m_s2",
  defaultValue: 1,
  popularPairs: [
    ["g0", "m_s2"],
    ["m_s2", "g0"],
    ["ft_s2", "m_s2"],
    ["m_s2", "ft_s2"],
    ["g0", "ft_s2"],
    ["mph_s", "g0"],
    ["km_h_s", "m_s2"],
    ["mgal", "m_s2"],
  ],
  related: ["speed", "force", "angular-acceleration", "time"],
  known: [
    { value: 1, from: "g0", to: "m_s2", expected: 9.80665 },
    // 9.80665 / 0.3048
    { value: 1, from: "g0", to: "ft_s2", expected: 32.17404855643044 },
    { value: 1, from: "gal", to: "m_s2", expected: 0.01 },
    // 0–60 mph in 3 s: 20·1609.344/3600/9.80665
    { value: 20, from: "mph_s", to: "g0", expected: 0.9117078716993061 },
    // 100/3.6
    { value: 100, from: "km_h_s", to: "m_s2", expected: 27.77777777777778 },
    { value: 1, from: "mgal", to: "m_s2", expected: 1e-5 },
    // 1/9.80665
    { value: 1, from: "m_s2", to: "g0", expected: 0.10197162129779283 },
    { value: 0, from: "g0", to: "m_s2", expected: 0 },
  ],
};

export const angularAcceleration: LinearSpec = {
  id: "angular-acceleration",
  slug: "angular-acceleration-converter",
  group: "engineering",
  kind: "linear",
  dimension: "angular-acceleration",
  baseUnit: "rad_s2",
  units: [
    { id: "rad_s2", symbol: "rad/s²", factor: 1, system: "si" },
    { id: "rad_min2", symbol: "rad/min²", factor: 1 / 3600, system: "metric" },
    { id: "deg_s2", symbol: "°/s²", factor: DEG, system: "other" },
    { id: "deg_min2", symbol: "°/min²", factor: DEG / 3600, system: "other" },
    { id: "rev_s2", symbol: "rev/s²", factor: REV, system: "other" },
    { id: "rev_min2", symbol: "rev/min²", factor: REV / 3600, system: "other" },
    // rpm per second: (2π/60 rad/s) per s
    { id: "rpm_s", symbol: "rpm/s", factor: REV / 60, system: "other" },
    { id: "rev_h2", symbol: "rev/h²", factor: REV / 3600 ** 2, system: "other" },
  ],
  defaultFrom: "rpm_s",
  defaultTo: "rad_s2",
  defaultValue: 1,
  popularPairs: [
    ["rpm_s", "rad_s2"],
    ["rad_s2", "rpm_s"],
    ["rad_s2", "deg_s2"],
    ["deg_s2", "rad_s2"],
    ["rev_s2", "rad_s2"],
    ["rev_min2", "rad_s2"],
  ],
  related: ["angular-velocity", "acceleration", "torque", "moment-of-inertia"],
  known: [
    // 180/π
    { value: 1, from: "rad_s2", to: "deg_s2", expected: 57.29577951308232 },
    { value: 1, from: "rev_s2", to: "rad_s2", expected: 6.283185307179586 },
    // 2π/60
    { value: 1, from: "rpm_s", to: "rad_s2", expected: 0.10471975511965977 },
    // 60 rpm/s = 60·60 rev/min²
    { value: 60, from: "rpm_s", to: "rev_min2", expected: 3600 },
    { value: 1, from: "rad_min2", to: "rad_s2", expected: 1 / 3600 },
    // 1/(2π/3600)
    { value: 1, from: "rad_s2", to: "rev_min2", expected: 572.9577951308232 },
    { value: 0, from: "rpm_s", to: "rad_s2", expected: 0 },
  ],
};

export const density: LinearSpec = {
  id: "density",
  slug: "density-converter",
  group: "engineering",
  kind: "linear",
  dimension: "density",
  baseUnit: "kg_m3",
  units: [
    { id: "kg_m3", symbol: "kg/m³", factor: 1, system: "si" },
    { id: "g_cm3", symbol: "g/cm³", factor: 1000, system: "si" },
    { id: "g_ml", symbol: "g/mL", factor: 1000, system: "metric" },
    { id: "kg_l", symbol: "kg/L", factor: 1000, system: "metric" },
    { id: "g_l", symbol: "g/L", factor: 1, system: "metric" },
    { id: "g_m3", symbol: "g/m³", factor: 1e-3, system: "si" },
    { id: "t_m3", symbol: "t/m³", factor: 1000, system: "metric" },
    { id: "lb_ft3", symbol: "lb/ft³", factor: POUND / FOOT ** 3, system: "us" },
    { id: "lb_in3", symbol: "lb/in³", factor: POUND / INCH ** 3, system: "us" },
    { id: "lb_yd3", symbol: "lb/yd³", factor: POUND / (3 * FOOT) ** 3, system: "us" },
    { id: "lb_gal_us", symbol: "lb/gal (US)", factor: POUND / US_GALLON, system: "us" },
    { id: "lb_gal_uk", symbol: "lb/gal (UK)", factor: POUND / IMPERIAL_GALLON, system: "imperial" },
    { id: "oz_in3", symbol: "oz/in³", factor: OUNCE / INCH ** 3, system: "us" },
    { id: "oz_gal_us", symbol: "oz/gal (US)", factor: OUNCE / US_GALLON, system: "us" },
    { id: "slug_ft3", symbol: "slug/ft³", factor: SLUG / FOOT ** 3, system: "us" },
  ],
  defaultFrom: "g_cm3",
  defaultTo: "kg_m3",
  defaultValue: 1,
  popularPairs: [
    ["g_cm3", "kg_m3"],
    ["kg_m3", "g_cm3"],
    ["kg_m3", "lb_ft3"],
    ["lb_ft3", "kg_m3"],
    ["g_cm3", "lb_in3"],
    ["kg_m3", "lb_gal_us"],
    ["lb_gal_us", "kg_l"],
  ],
  related: ["specific-volume", "weight", "volume", "solution-concentration"],
  known: [
    // 1000·0.3048³/0.45359237
    { value: 1, from: "g_cm3", to: "lb_ft3", expected: 62.42796057614462 },
    { value: 1, from: "g_cm3", to: "kg_m3", expected: 1000 },
    // water: 1000·231·0.0254³/0.45359237
    { value: 1000, from: "kg_m3", to: "lb_gal_us", expected: 8.34540445201933 },
    // 0.45359237/0.0254³/1000
    { value: 1, from: "lb_in3", to: "g_cm3", expected: 27.679904710203125 },
    // lbf/ft per ft³ = 0.45359237·9.80665/0.3048/0.3048³
    { value: 1, from: "slug_ft3", to: "kg_m3", expected: 515.3788183931961 },
    // 0.45359237/4.54609e-3
    { value: 1, from: "lb_gal_uk", to: "kg_m3", expected: 99.7763726631017 },
    // steel, 7850·0.3048³/0.45359237
    { value: 7850, from: "kg_m3", to: "lb_ft3", expected: 490.0594905227353 },
  ],
};

export const specificVolume: LinearSpec = {
  id: "specific-volume",
  slug: "specific-volume-converter",
  group: "engineering",
  kind: "linear",
  dimension: "specific-volume",
  baseUnit: "m3_kg",
  units: [
    { id: "m3_kg", symbol: "m³/kg", factor: 1, system: "si" },
    { id: "cm3_g", symbol: "cm³/g", factor: 1e-3, system: "si" },
    { id: "l_kg", symbol: "L/kg", factor: 1e-3, system: "metric" },
    { id: "ml_g", symbol: "mL/g", factor: 1e-3, system: "metric" },
    { id: "l_g", symbol: "L/g", factor: 1, system: "metric" },
    { id: "m3_t", symbol: "m³/t", factor: 1e-3, system: "metric" },
    { id: "ft3_lb", symbol: "ft³/lb", factor: FOOT ** 3 / POUND, system: "us" },
    { id: "in3_lb", symbol: "in³/lb", factor: INCH ** 3 / POUND, system: "us" },
    { id: "gal_us_lb", symbol: "gal (US)/lb", factor: US_GALLON / POUND, system: "us" },
    { id: "gal_uk_lb", symbol: "gal (UK)/lb", factor: IMPERIAL_GALLON / POUND, system: "imperial" },
    { id: "ft3_slug", symbol: "ft³/slug", factor: FOOT ** 3 / SLUG, system: "us" },
  ],
  defaultFrom: "m3_kg",
  defaultTo: "ft3_lb",
  defaultValue: 1,
  popularPairs: [
    ["m3_kg", "ft3_lb"],
    ["ft3_lb", "m3_kg"],
    ["cm3_g", "m3_kg"],
    ["m3_kg", "l_kg"],
    ["ft3_lb", "l_kg"],
    ["gal_us_lb", "l_kg"],
  ],
  related: ["density", "volume", "weight"],
  known: [
    // 0.3048³/0.45359237
    { value: 1, from: "ft3_lb", to: "m3_kg", expected: 0.062427960576144616 },
    // 0.45359237/0.3048³
    { value: 1, from: "m3_kg", to: "ft3_lb", expected: 16.018463373960138 },
    { value: 1, from: "cm3_g", to: "l_kg", expected: 1 },
    // 231·0.0254³·1000/0.45359237
    { value: 1, from: "gal_us_lb", to: "l_kg", expected: 8.34540445201933 },
    // 0.3048³/(0.45359237·9.80665/0.3048)
    { value: 1, from: "ft3_slug", to: "m3_kg", expected: 0.0019403203319797162 },
    // 4.54609e-3·1000/0.45359237
    { value: 1, from: "gal_uk_lb", to: "l_kg", expected: 10.022412854960502 },
    { value: 0.001, from: "m3_kg", to: "cm3_g", expected: 1 },
  ],
};

export const momentOfInertia: LinearSpec = {
  id: "moment-of-inertia",
  slug: "moment-of-inertia-converter",
  group: "engineering",
  kind: "linear",
  dimension: "moment-of-inertia",
  baseUnit: "kg_m2",
  units: [
    { id: "kg_m2", symbol: "kg·m²", factor: 1, system: "si" },
    { id: "kg_cm2", symbol: "kg·cm²", factor: 1e-4, system: "si" },
    { id: "kg_mm2", symbol: "kg·mm²", factor: 1e-6, system: "si" },
    { id: "g_cm2", symbol: "g·cm²", factor: 1e-7, system: "metric" },
    { id: "g_mm2", symbol: "g·mm²", factor: 1e-9, system: "metric" },
    { id: "t_m2", symbol: "t·m²", factor: 1000, system: "metric" },
    // kgf·m·s² = 9.80665 N·m·s² = 9.80665 kg·m²
    { id: "kgf_m_s2", symbol: "kgf·m·s²", factor: KILOGRAM_FORCE, system: "metric" },
    { id: "lb_ft2", symbol: "lb·ft²", factor: POUND * FOOT ** 2, system: "us" },
    { id: "lb_in2", symbol: "lb·in²", factor: POUND * INCH ** 2, system: "us" },
    { id: "oz_in2", symbol: "oz·in²", factor: OUNCE * INCH ** 2, system: "us" },
    // slug·ft² = lbf·ft·s²
    { id: "slug_ft2", symbol: "slug·ft²", factor: SLUG * FOOT ** 2, system: "us" },
    { id: "lbf_in_s2", symbol: "lbf·in·s²", factor: POUND_FORCE * INCH, system: "us" },
    { id: "ozf_in_s2", symbol: "ozf·in·s²", factor: OUNCE_FORCE * INCH, system: "us" },
  ],
  defaultFrom: "kg_m2",
  defaultTo: "lb_ft2",
  defaultValue: 1,
  popularPairs: [
    ["kg_m2", "lb_ft2"],
    ["lb_ft2", "kg_m2"],
    ["kg_cm2", "lb_in2"],
    ["lb_in2", "kg_cm2"],
    ["slug_ft2", "kg_m2"],
    ["oz_in2", "g_cm2"],
    ["kg_m2", "kg_cm2"],
  ],
  related: ["torque", "angular-acceleration", "angular-velocity", "weight"],
  known: [
    // 0.45359237·0.3048²
    { value: 1, from: "lb_ft2", to: "kg_m2", expected: 0.042140110093804806 },
    // lbf·ft = 0.45359237·9.80665·0.3048
    { value: 1, from: "slug_ft2", to: "kg_m2", expected: 1.3558179483314003 },
    { value: 1, from: "kg_m2", to: "g_cm2", expected: 1e7 },
    // 0.45359237·2.54²
    { value: 1, from: "lb_in2", to: "kg_cm2", expected: 2.926396534292 },
    // 28.349523125·2.54²
    { value: 1, from: "oz_in2", to: "g_cm2", expected: 182.89978339325 },
    { value: 1, from: "kgf_m_s2", to: "kg_m2", expected: 9.80665 },
    // 1/(0.45359237·0.3048²)
    { value: 1, from: "kg_m2", to: "lb_ft2", expected: 23.730360404231934 },
  ],
};

export const torque: LinearSpec = {
  id: "torque",
  slug: "torque-converter",
  group: "engineering",
  kind: "linear",
  dimension: "torque",
  baseUnit: "n_m",
  units: [
    { id: "n_m", symbol: "N·m", factor: 1, system: "si" },
    { id: "n_cm", symbol: "N·cm", factor: 1e-2, system: "si" },
    { id: "dyn_cm", symbol: "dyn·cm", factor: 1e-7, system: "metric" },
    { id: "kgf_m", symbol: "kgf·m", factor: KILOGRAM_FORCE, system: "metric" },
    { id: "kgf_cm", symbol: "kgf·cm", factor: KILOGRAM_FORCE / 100, system: "metric" },
    // gram-force centimetre, common on hobby servo data sheets
    { id: "gf_cm", symbol: "gf·cm", factor: KILOGRAM_FORCE / 1e5, system: "metric" },
    { id: "lbf_ft", symbol: "lbf·ft", factor: POUND_FORCE * FOOT, system: "us" },
    { id: "lbf_in", symbol: "lbf·in", factor: POUND_FORCE * INCH, system: "us" },
    { id: "ozf_in", symbol: "ozf·in", factor: OUNCE_FORCE * INCH, system: "us" },
  ],
  defaultFrom: "lbf_ft",
  defaultTo: "n_m",
  defaultValue: 1,
  popularPairs: [
    ["lbf_ft", "n_m"],
    ["n_m", "lbf_ft"],
    ["lbf_in", "n_m"],
    ["n_m", "lbf_in"],
    ["kgf_m", "n_m"],
    ["kgf_cm", "n_m"],
    ["ozf_in", "n_cm"],
    ["kgf_cm", "lbf_in"],
  ],
  related: ["moment-of-force", "force", "power", "energy"],
  known: [
    // 0.45359237·9.80665·0.3048
    { value: 1, from: "lbf_ft", to: "n_m", expected: 1.3558179483314003 },
    { value: 100, from: "n_m", to: "lbf_ft", expected: 73.75621492772655 },
    { value: 1, from: "kgf_m", to: "n_m", expected: 9.80665 },
    // 0.45359237·9.80665·0.0254
    { value: 1, from: "lbf_in", to: "n_m", expected: 0.11298482902761668 },
    { value: 1, from: "n_m", to: "dyn_cm", expected: 1e7 },
    // 0.45359237/16·9.80665·0.0254·100
    { value: 1, from: "ozf_in", to: "n_cm", expected: 0.7061551814226043 },
    { value: 10, from: "kgf_cm", to: "n_m", expected: 0.980665 },
    // 100/(0.45359237·9.80665·0.0254)
    { value: 100, from: "n_m", to: "lbf_in", expected: 885.0745791327186 },
  ],
};

export const momentOfForce: LinearSpec = {
  id: "moment-of-force",
  slug: "moment-of-force-converter",
  group: "engineering",
  kind: "linear",
  dimension: "moment-of-force",
  baseUnit: "n_m",
  units: [
    { id: "n_m", symbol: "N·m", factor: 1, system: "si" },
    { id: "kn_cm", symbol: "kN·cm", factor: 10, system: "si" },
    { id: "kn_m", symbol: "kN·m", factor: 1e3, system: "si" },
    { id: "mn_m", symbol: "MN·m", factor: 1e6, system: "si" },
    { id: "tf_m", symbol: "tf·m", factor: TONNE_FORCE, system: "metric" },
    { id: "lbf_ft", symbol: "lbf·ft", factor: POUND_FORCE * FOOT, system: "us" },
    { id: "kip_in", symbol: "kip·in", factor: KIP * INCH, system: "us" },
    { id: "kip_ft", symbol: "kip·ft", factor: KIP * FOOT, system: "us" },
  ],
  defaultFrom: "kn_m",
  defaultTo: "kip_ft",
  defaultValue: 1,
  popularPairs: [
    ["kn_m", "kip_ft"],
    ["kip_ft", "kn_m"],
    ["kip_in", "kn_m"],
    ["kn_m", "kip_in"],
    ["tf_m", "kn_m"],
    ["mn_m", "kip_ft"],
    ["kip_ft", "kip_in"],
  ],
  related: ["torque", "force", "length", "pressure"],
  known: [
    // kip·ft = 1000·0.45359237·9.80665·0.3048 N·m
    { value: 1, from: "kip_ft", to: "kn_m", expected: 1.3558179483314003 },
    { value: 100, from: "kn_m", to: "kip_ft", expected: 73.75621492772655 },
    { value: 1, from: "tf_m", to: "kn_m", expected: 9.80665 },
    { value: 1, from: "kip_in", to: "kn_m", expected: 0.11298482902761668 },
    { value: 1, from: "mn_m", to: "kn_m", expected: 1000 },
    { value: 1, from: "kn_cm", to: "kn_m", expected: 0.01 },
    { value: 1, from: "kip_ft", to: "kip_in", expected: 12 },
    // 1000/(1000·lbf·ft)
    { value: 1, from: "n_m", to: "lbf_ft", expected: 0.7375621492772654 },
  ],
};

/** All converters of the "engineering" group. */
export const engineeringConverters: readonly LinearSpec[] = [angularVelocity, acceleration, angularAcceleration, density, specificVolume, momentOfInertia, momentOfForce, torque];
