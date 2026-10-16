import { BTU_IT, BTU_TH, CAL_IT, CAL_TH, FOOT, HOUR, IMPERIAL_GALLON, INCH, POUND, RANKINE, US_GALLON } from "../constants";
import type { LinearSpec } from "../types";

/*
 * Calorie and Btu conventions used throughout this group:
 * - IT (International Table) calorie = 4.1868 J and IT Btu = 1,055.05585262 J (both exact);
 * - thermochemical calorie = 4.184 J and thermochemical Btu = 1,054.350… J (both exact).
 * Btu-based units default to the IT Btu; the thermochemical variants carry "th" in their id.
 * "kcal" here is always the IT kilocalorie unless the id says "th".
 */

/** Square and cubic foot (exact), in m² and m³. */
const FOOT2 = FOOT ** 2;
const FOOT3 = FOOT ** 3;
/** Therm (EC) = 100,000 IT Btu (exact). The US therm (105,480,400 J) is 0.02% smaller and is not used. */
const THERM_EC = 1e5 * BTU_IT;
/** Langley = 1 thermochemical calorie per square centimetre (exact) = 41,840 J/m². */
const LANGLEY = CAL_TH * 1e4;

/** Energy per unit mass (heating value / specific energy of a fuel). Base: J/kg. */
export const fuelEfficiencyMass: LinearSpec = {
  id: "fuel-efficiency-mass",
  slug: "fuel-efficiency-mass-converter",
  group: "heat",
  kind: "linear",
  dimension: "specific-energy",
  baseUnit: "j_kg",
  units: [
    { id: "j_kg", symbol: "J/kg", factor: 1, system: "si" },
    { id: "kj_kg", symbol: "kJ/kg", factor: 1e3, system: "si" },
    { id: "mj_kg", symbol: "MJ/kg", factor: 1e6, system: "si" },
    // 1 GJ per tonne = 1e9 J / 1,000 kg
    { id: "gj_t", symbol: "GJ/t", factor: 1e6, system: "metric" },
    { id: "j_g", symbol: "J/g", factor: 1e3, system: "metric" },
    { id: "wh_kg", symbol: "Wh/kg", factor: HOUR, system: "metric" },
    { id: "kwh_kg", symbol: "kWh/kg", factor: 1e3 * HOUR, system: "metric" },
    // cal/g = 1,000 cal/kg; kcal/kg has the same size as cal/g
    { id: "cal_it_g", symbol: "cal_IT/g", factor: CAL_IT * 1e3, system: "metric" },
    { id: "cal_th_g", symbol: "cal_th/g", factor: CAL_TH * 1e3, system: "metric" },
    { id: "kcal_it_kg", symbol: "kcal_IT/kg", factor: CAL_IT * 1e3, system: "metric" },
    { id: "kcal_th_kg", symbol: "kcal_th/kg", factor: CAL_TH * 1e3, system: "metric" },
    // Btu_IT/lb = 2,326 J/kg exactly
    { id: "btu_it_lb", symbol: "Btu_IT/lb", factor: BTU_IT / POUND, system: "us" },
    // Btu_th/lb = 2,324.444… J/kg
    { id: "btu_th_lb", symbol: "Btu_th/lb", factor: BTU_TH / POUND, system: "us" },
  ],
  defaultFrom: "mj_kg",
  defaultTo: "btu_it_lb",
  defaultValue: 1,
  popularPairs: [
    ["mj_kg", "btu_it_lb"],
    ["btu_it_lb", "mj_kg"],
    ["kj_kg", "btu_it_lb"],
    ["btu_it_lb", "kj_kg"],
    ["kcal_it_kg", "mj_kg"],
    ["mj_kg", "kwh_kg"],
    ["kwh_kg", "mj_kg"],
    ["cal_th_g", "kj_kg"],
  ],
  related: ["fuel-efficiency-volume", "energy", "fuel-consumption", "specific-heat-capacity"],
  known: [
    // python: 1055.05585262/0.45359237/1000 (Btu_IT/lb in kJ/kg, exact 2.326)
    { value: 1, from: "btu_it_lb", to: "kj_kg", expected: 2.326 },
    // python: 1e6/(1055.05585262/0.45359237)
    { value: 1, from: "mj_kg", to: "btu_it_lb", expected: 429.9226139294927 },
    // diesel-like heating value: python: 43e6/2326
    { value: 43, from: "mj_kg", to: "btu_it_lb", expected: 18486.672398968185 },
    // python: 10*4186.8/1000
    { value: 10, from: "kcal_it_kg", to: "kj_kg", expected: 41.868 },
    // python: 3.6e6/1e6
    { value: 1, from: "kwh_kg", to: "mj_kg", expected: 3.6 },
    // python: 1000*4.184*453.59237*(5/9)/0.45359237/1000/1000 (thermochemical Btu per lb)
    { value: 1000, from: "btu_th_lb", to: "kj_kg", expected: 2324.4444444444443 },
    // python: 4186.8/4184 (IT vs thermochemical calorie)
    { value: 1, from: "cal_it_g", to: "cal_th_g", expected: 1.0006692160611854 },
    { value: 0, from: "mj_kg", to: "btu_it_lb", expected: 0 },
  ],
};

/** Energy per unit volume (volumetric heating value / energy density of a fuel). Base: J/m³. */
export const fuelEfficiencyVolume: LinearSpec = {
  id: "fuel-efficiency-volume",
  slug: "fuel-efficiency-volume-converter",
  group: "heat",
  kind: "linear",
  dimension: "energy-density",
  baseUnit: "j_m3",
  units: [
    { id: "j_m3", symbol: "J/m³", factor: 1, system: "si" },
    { id: "kj_m3", symbol: "kJ/m³", factor: 1e3, system: "si" },
    { id: "mj_m3", symbol: "MJ/m³", factor: 1e6, system: "si" },
    { id: "gj_m3", symbol: "GJ/m³", factor: 1e9, system: "si" },
    // 1 L = 1e-3 m³
    { id: "kj_l", symbol: "kJ/L", factor: 1e6, system: "metric" },
    { id: "mj_l", symbol: "MJ/L", factor: 1e9, system: "metric" },
    { id: "kwh_m3", symbol: "kWh/m³", factor: 1e3 * HOUR, system: "metric" },
    { id: "kwh_l", symbol: "kWh/L", factor: 1e6 * HOUR, system: "metric" },
    { id: "kcal_it_m3", symbol: "kcal_IT/m³", factor: CAL_IT * 1e3, system: "metric" },
    { id: "kcal_it_l", symbol: "kcal_IT/L", factor: CAL_IT * 1e6, system: "metric" },
    { id: "kcal_th_l", symbol: "kcal_th/L", factor: CAL_TH * 1e6, system: "metric" },
    // 1 cm³ = 1e-6 m³
    { id: "cal_it_cm3", symbol: "cal_IT/cm³", factor: CAL_IT * 1e6, system: "metric" },
    // Btu_IT per cubic foot (0.3048³ m³)
    { id: "btu_it_ft3", symbol: "Btu_IT/ft³", factor: BTU_IT / FOOT3, system: "us" },
    { id: "btu_th_ft3", symbol: "Btu_th/ft³", factor: BTU_TH / FOOT3, system: "us" },
    // US liquid gallon = 231 in³
    { id: "btu_it_gal_us", symbol: "Btu_IT/gal (US)", factor: BTU_IT / US_GALLON, system: "us" },
    // imperial gallon = 4.54609 L
    { id: "btu_it_gal_uk", symbol: "Btu_IT/gal (UK)", factor: BTU_IT / IMPERIAL_GALLON, system: "imperial" },
    { id: "therm_ft3", symbol: "therm/ft³", factor: THERM_EC / FOOT3, system: "us" },
  ],
  defaultFrom: "mj_m3",
  defaultTo: "btu_it_ft3",
  defaultValue: 1,
  popularPairs: [
    ["mj_m3", "btu_it_ft3"],
    ["btu_it_ft3", "mj_m3"],
    ["mj_l", "btu_it_gal_us"],
    ["btu_it_gal_us", "mj_l"],
    ["kwh_m3", "mj_m3"],
    ["kcal_it_m3", "mj_m3"],
    ["btu_it_gal_uk", "mj_l"],
  ],
  related: ["fuel-efficiency-mass", "energy", "fuel-consumption", "volume"],
  known: [
    // python: 1e6/(1055.05585262/0.3048**3)
    { value: 1, from: "mj_m3", to: "btu_it_ft3", expected: 26.83919199318341 },
    // natural gas ≈ 1,000 Btu/ft³; python: 1000*1055.05585262/0.3048**3/1e6
    { value: 1000, from: "btu_it_ft3", to: "mj_m3", expected: 37.25894580783128 },
    // python: 1055.05585262/(231*0.0254**3)/1e6
    { value: 1, from: "btu_it_gal_us", to: "kj_l", expected: 0.27871626993910154 },
    // gasoline ≈ 120,000 Btu/gal (US); python: 120000*1055.05585262/(231*0.0254**3)/1e9
    { value: 120000, from: "btu_it_gal_us", to: "mj_l", expected: 33.445952392692185 },
    // python: 1e5*1055.05585262/0.3048**3/1e6
    { value: 1, from: "therm_ft3", to: "mj_m3", expected: 3725.8945807831283 },
    // python: 3.6e9/1e9
    { value: 1, from: "kwh_l", to: "mj_l", expected: 3.6 },
    // the same Btu spread over a bigger gallon; python: (231*0.0254**3)/0.00454609
    { value: 1, from: "btu_it_gal_uk", to: "btu_it_gal_us", expected: 0.8326741846289889 },
    // python: 4186.8*1000/1000 (J per L → J per m³ → kJ per m³)
    { value: 1, from: "kcal_it_l", to: "kj_m3", expected: 4186.8 },
  ],
};

/** Size of a temperature difference (no offsets). Base: kelvin. */
export const temperatureInterval: LinearSpec = {
  id: "temperature-interval",
  slug: "temperature-interval-converter",
  group: "heat",
  kind: "linear",
  dimension: "temperature-interval",
  baseUnit: "k",
  units: [
    { id: "k", symbol: "K", factor: 1, system: "si" },
    { id: "mk", symbol: "mK", factor: 1e-3, system: "si" },
    { id: "c", symbol: "°C", factor: 1, system: "metric" },
    // 1 °F interval = 1 °R interval = 5/9 K (exact)
    { id: "f", symbol: "°F", factor: RANKINE, system: "us" },
    { id: "r", symbol: "°R", factor: RANKINE, system: "us" },
    // Réaumur: 80 degrees between freezing and boiling water → 1 °Ré = 100/80 K
    { id: "re", symbol: "°Ré", factor: 100 / 80, system: "other" },
    // Rømer: 7.5 → 60 between freezing and boiling water → 1 °Rø = 100/52.5 K = 40/21 K
    { id: "ro", symbol: "°Rø", factor: 40 / 21, system: "other" },
  ],
  defaultFrom: "c",
  defaultTo: "f",
  defaultValue: 10,
  popularPairs: [
    ["c", "f"],
    ["f", "c"],
    ["k", "f"],
    ["f", "k"],
    ["c", "k"],
    ["r", "k"],
    ["mk", "f"],
  ],
  allowNegative: true,
  related: ["temperature", "thermal-expansion", "specific-heat-capacity"],
  known: [
    // python: 10*9/5
    { value: 10, from: "c", to: "f", expected: 18 },
    // python: 5/9
    { value: 1, from: "f", to: "k", expected: 0.5555555555555556 },
    // a fall of 40 °C is a fall of 72 °F; python: -40*9/5
    { value: -40, from: "c", to: "f", expected: -72 },
    // python: 100*21/40
    { value: 100, from: "k", to: "ro", expected: 52.5 },
    // python: 100/80
    { value: 1, from: "re", to: "c", expected: 1.25 },
    // python: 0.5e-3*9/5
    { value: 0.5, from: "mk", to: "f", expected: 0.0009 },
    { value: 0, from: "c", to: "f", expected: 0 },
  ],
};

/** Linear or volumetric expansion coefficient, per degree. Base: 1/K. */
export const thermalExpansion: LinearSpec = {
  id: "thermal-expansion",
  slug: "thermal-expansion-converter",
  group: "heat",
  kind: "linear",
  dimension: "thermal-expansion",
  baseUnit: "per_k",
  units: [
    { id: "per_k", symbol: "1/K", factor: 1, system: "si" },
    { id: "per_c", symbol: "1/°C", factor: 1, system: "metric" },
    // per-degree units are the inverse of interval sizes: 1/°F = 1/(5/9 K) = 1.8/K
    { id: "per_f", symbol: "1/°F", factor: 1 / RANKINE, system: "us" },
    { id: "per_r", symbol: "1/°R", factor: 1 / RANKINE, system: "us" },
    // ppm/K = 10⁻⁶/K = µm/(m·K)
    { id: "ppm_k", symbol: "ppm/K", factor: 1e-6, system: "si" },
    { id: "ppm_c", symbol: "ppm/°C", factor: 1e-6, system: "metric" },
    // ppm/°F = µin/(in·°F)
    { id: "ppm_f", symbol: "ppm/°F", factor: 1e-6 / RANKINE, system: "us" },
    { id: "pct_c", symbol: "%/°C", factor: 1e-2, system: "metric" },
  ],
  defaultFrom: "ppm_c",
  defaultTo: "ppm_f",
  defaultValue: 12,
  popularPairs: [
    ["ppm_c", "ppm_f"],
    ["ppm_f", "ppm_c"],
    ["per_k", "per_f"],
    ["per_f", "per_k"],
    ["per_c", "ppm_c"],
    ["per_k", "ppm_k"],
    ["pct_c", "per_c"],
  ],
  // Some materials (water below 4 °C, Invar-type alloys, zirconium tungstate) shrink when heated.
  allowNegative: true,
  related: ["temperature-interval", "length", "thermal-conductivity"],
  known: [
    // steel ≈ 12 ppm/°C; python: 12*5/9
    { value: 12, from: "ppm_c", to: "ppm_f", expected: 6.666666666666667 },
    // python: 9/5
    { value: 1, from: "per_f", to: "per_k", expected: 1.8 },
    // python: 6.5e-6*9/5
    { value: 6.5, from: "ppm_f", to: "per_k", expected: 1.17e-5 },
    // python: 0.0004*100
    { value: 0.0004, from: "per_c", to: "pct_c", expected: 0.04 },
    // python: 9/5*1e6
    { value: 1, from: "per_r", to: "ppm_k", expected: 1.8e6 },
    // negative coefficient; python: -0.5*5/9
    { value: -0.5, from: "ppm_k", to: "ppm_f", expected: -0.2777777777777778 },
  ],
};

/** °F·h/Btu_IT in K/W: (5/9 K × 3,600 s) / 1,055.05585262 J. */
const F_H_PER_BTU = (RANKINE * HOUR) / BTU_IT;

/**
 * Absolute thermal resistance (K/W) of a component, plus area-based thermal
 * insulance ("R-value", m²·K/W) in a separate dimension that never converts
 * into the absolute units.
 */
export const thermalResistance: LinearSpec = {
  id: "thermal-resistance",
  slug: "thermal-resistance-converter",
  group: "heat",
  kind: "linear",
  dimension: "thermal-resistance",
  baseUnit: "k_w",
  units: [
    { id: "k_w", symbol: "K/W", factor: 1, system: "si" },
    { id: "c_w", symbol: "°C/W", factor: 1, system: "metric" },
    { id: "k_kw", symbol: "K/kW", factor: 1e-3, system: "si" },
    { id: "k_mw", symbol: "K/mW", factor: 1e3, system: "si" },
    { id: "f_h_btu", symbol: "°F·h/Btu_IT", factor: F_H_PER_BTU, system: "us" },
    { id: "f_h_btu_th", symbol: "°F·h/Btu_th", factor: (RANKINE * HOUR) / BTU_TH, system: "us" },
    { id: "f_s_btu", symbol: "°F·s/Btu_IT", factor: RANKINE / BTU_IT, system: "us" },
    // °C·h/kcal_IT = 3,600 s / 4,186.8 J
    { id: "c_h_kcal", symbol: "°C·h/kcal_IT", factor: HOUR / (CAL_IT * 1e3), system: "metric" },
    // Thermal insulance (R-value): base m²·K/W (RSI).
    { id: "m2k_w", symbol: "m²·K/W", factor: 1, system: "si", dimension: "thermal-insulance" },
    { id: "m2k_kw", symbol: "m²·K/kW", factor: 1e-3, system: "si", dimension: "thermal-insulance" },
    // US R-value: ft²·°F·h/Btu_IT = 0.3048² m² × (5/9 K) × 3,600 s / 1,055.05585262 J ≈ 0.176110 m²·K/W
    { id: "ft2_f_h_btu", symbol: "ft²·°F·h/Btu_IT", factor: FOOT2 * F_H_PER_BTU, system: "us", dimension: "thermal-insulance" },
    // clo = 0.155 m²·K/W (clothing insulation; NIST SP 811 Appendix B.8 lists 1.55 E−01)
    { id: "clo", symbol: "clo", factor: 0.155, system: "other", dimension: "thermal-insulance" },
    // tog = 0.1 m²·K/W (British textile convention)
    { id: "tog", symbol: "tog", factor: 0.1, system: "other", dimension: "thermal-insulance" },
  ],
  defaultFrom: "k_w",
  defaultTo: "f_h_btu",
  defaultValue: 1,
  popularPairs: [
    ["k_w", "f_h_btu"],
    ["f_h_btu", "k_w"],
    ["c_w", "k_w"],
    ["ft2_f_h_btu", "m2k_w"],
    ["m2k_w", "ft2_f_h_btu"],
    ["tog", "clo"],
    ["clo", "m2k_w"],
  ],
  related: ["thermal-conductivity", "heat-transfer-coefficient", "heat-flux-density", "electric-resistance"],
  known: [
    // python: 1/((5/9)*3600/1055.05585262)
    { value: 1, from: "k_w", to: "f_h_btu", expected: 0.52752792631 },
    // python: (5/9)*3600/1055.05585262
    { value: 1, from: "f_h_btu", to: "k_w", expected: 1.8956342406266344 },
    // python: 2/((5/9)/1055.05585262)
    { value: 2, from: "k_w", to: "f_s_btu", expected: 3798.201069432 },
    // python: 0.5*3600/4186.8
    { value: 0.5, from: "c_h_kcal", to: "k_w", expected: 0.4299226139294927 },
    // python: (5/9)*3600/(4.184*453.59237*5/9)
    { value: 1, from: "f_h_btu_th", to: "k_w", expected: 1.8969028295065948 },
    // US R-13 batt in RSI; python: 13*0.3048**2*(5/9)*3600/1055.05585262
    { value: 13, from: "ft2_f_h_btu", to: "m2k_w", expected: 2.289432387869976 },
    // python: 1/(0.3048**2*(5/9)*3600/1055.05585262)
    { value: 1, from: "m2k_w", to: "ft2_f_h_btu", expected: 5.678263341113488 },
    // python: 10*0.1/0.155
    { value: 10, from: "tog", to: "clo", expected: 6.451612903225806 },
    // python: 0.3048**2*(5/9)*3600/1055.05585262*1000
    { value: 1, from: "ft2_f_h_btu", to: "m2k_kw", expected: 176.11018368230583 },
  ],
};

/** Thermal conductivity (heat flow through unit thickness per unit area and degree). Base: W/(m·K). */
export const thermalConductivity: LinearSpec = {
  id: "thermal-conductivity",
  slug: "thermal-conductivity-converter",
  group: "heat",
  kind: "linear",
  dimension: "thermal-conductivity",
  baseUnit: "w_mk",
  units: [
    { id: "w_mk", symbol: "W/(m·K)", factor: 1, system: "si" },
    { id: "mw_mk", symbol: "mW/(m·K)", factor: 1e-3, system: "si" },
    { id: "kw_mk", symbol: "kW/(m·K)", factor: 1e3, system: "si" },
    // W/(cm·K) = 100 W/(m·K)
    { id: "w_cmk", symbol: "W/(cm·K)", factor: 100, system: "metric" },
    // kcal_IT/(h·m·°C) = 4,186.8 J / 3,600 s = 1.163 W/(m·K)
    { id: "kcal_h_m_c", symbol: "kcal_IT/(h·m·°C)", factor: (CAL_IT * 1e3) / HOUR, system: "metric" },
    // cal/(s·cm·°C) = 4.184 J / (1 s × 0.01 m × 1 K) = 418.4 W/(m·K)
    { id: "cal_th_s_cm_c", symbol: "cal_th/(s·cm·°C)", factor: CAL_TH * 100, system: "metric" },
    { id: "cal_it_s_cm_c", symbol: "cal_IT/(s·cm·°C)", factor: CAL_IT * 100, system: "metric" },
    // Btu_IT/(h·ft·°F) = 1,055.05585262 / (3,600 × 0.3048 × 5/9) ≈ 1.730735 W/(m·K)
    { id: "btu_h_ft_f", symbol: "Btu_IT/(h·ft·°F)", factor: BTU_IT / (HOUR * FOOT * RANKINE), system: "us" },
    { id: "btu_th_h_ft_f", symbol: "Btu_th/(h·ft·°F)", factor: BTU_TH / (HOUR * FOOT * RANKINE), system: "us" },
    // Btu_IT·in/(h·ft²·°F) ("k-value" in US insulation data) ≈ 0.1442279 W/(m·K)
    { id: "btu_in_h_ft2_f", symbol: "Btu_IT·in/(h·ft²·°F)", factor: (BTU_IT * INCH) / (HOUR * FOOT2 * RANKINE), system: "us" },
    { id: "btu_th_in_h_ft2_f", symbol: "Btu_th·in/(h·ft²·°F)", factor: (BTU_TH * INCH) / (HOUR * FOOT2 * RANKINE), system: "us" },
    { id: "btu_s_ft_f", symbol: "Btu_IT/(s·ft·°F)", factor: BTU_IT / (FOOT * RANKINE), system: "us" },
  ],
  defaultFrom: "w_mk",
  defaultTo: "btu_h_ft_f",
  defaultValue: 1,
  popularPairs: [
    ["w_mk", "btu_h_ft_f"],
    ["btu_h_ft_f", "w_mk"],
    ["btu_in_h_ft2_f", "w_mk"],
    ["w_mk", "btu_in_h_ft2_f"],
    ["mw_mk", "btu_in_h_ft2_f"],
    ["kcal_h_m_c", "w_mk"],
    ["cal_th_s_cm_c", "w_mk"],
  ],
  related: ["thermal-resistance", "heat-transfer-coefficient", "heat-flux-density", "specific-heat-capacity"],
  known: [
    // python: 1/(1055.05585262/(3600*0.3048*5/9))
    { value: 1, from: "w_mk", to: "btu_h_ft_f", expected: 0.5777893165429981 },
    // python: 1055.05585262/(3600*0.3048*5/9)
    { value: 1, from: "btu_h_ft_f", to: "w_mk", expected: 1.7307346663713912 },
    // fibreglass ≈ 0.25 Btu·in/(h·ft²·°F); python: 0.25*1055.05585262*0.0254/(3600*0.3048**2*5/9)
    { value: 0.25, from: "btu_in_h_ft2_f", to: "w_mk", expected: 0.03605697221607065 },
    // python: 4.184*100
    { value: 1, from: "cal_th_s_cm_c", to: "w_mk", expected: 418.4 },
    // python: 4186.8/3600
    { value: 1, from: "kcal_h_m_c", to: "w_mk", expected: 1.163 },
    // python: 0.04*1000
    { value: 0.04, from: "w_mk", to: "mw_mk", expected: 40 },
    // python: 4.184*453.59237*(5/9)/(3600*0.3048*5/9)
    { value: 1, from: "btu_th_h_ft_f", to: "w_mk", expected: 1.7295772055263925 },
  ],
};

/** Specific heat capacity. Base: J/(kg·K). */
export const specificHeatCapacity: LinearSpec = {
  id: "specific-heat-capacity",
  slug: "specific-heat-capacity-converter",
  group: "heat",
  kind: "linear",
  dimension: "specific-heat-capacity",
  baseUnit: "j_kgk",
  units: [
    { id: "j_kgk", symbol: "J/(kg·K)", factor: 1, system: "si" },
    { id: "kj_kgk", symbol: "kJ/(kg·K)", factor: 1e3, system: "si" },
    { id: "j_kgc", symbol: "J/(kg·°C)", factor: 1, system: "metric" },
    { id: "j_gk", symbol: "J/(g·K)", factor: 1e3, system: "metric" },
    { id: "cal_it_gc", symbol: "cal_IT/(g·°C)", factor: CAL_IT * 1e3, system: "metric" },
    { id: "cal_th_gc", symbol: "cal_th/(g·°C)", factor: CAL_TH * 1e3, system: "metric" },
    { id: "kcal_it_kgc", symbol: "kcal_IT/(kg·°C)", factor: CAL_IT * 1e3, system: "metric" },
    { id: "kcal_th_kgc", symbol: "kcal_th/(kg·°C)", factor: CAL_TH * 1e3, system: "metric" },
    // Btu_IT/(lb·°F) = 1,055.05585262 / (0.45359237 × 5/9) = 4,186.8 J/(kg·K) exactly
    { id: "btu_it_lbf", symbol: "Btu_IT/(lb·°F)", factor: BTU_IT / (POUND * RANKINE), system: "us" },
    // Btu_th/(lb·°F) = 4,184 J/(kg·K) exactly
    { id: "btu_th_lbf", symbol: "Btu_th/(lb·°F)", factor: BTU_TH / (POUND * RANKINE), system: "us" },
  ],
  defaultFrom: "kj_kgk",
  defaultTo: "btu_it_lbf",
  defaultValue: 1,
  popularPairs: [
    ["kj_kgk", "btu_it_lbf"],
    ["btu_it_lbf", "kj_kgk"],
    ["j_kgk", "btu_it_lbf"],
    ["cal_th_gc", "j_kgk"],
    ["j_gk", "kj_kgk"],
    ["kcal_it_kgc", "kj_kgk"],
    ["btu_it_lbf", "j_kgk"],
  ],
  related: ["energy", "temperature-interval", "heat-density", "thermal-conductivity"],
  known: [
    // python: 1055.05585262/(0.45359237*5/9)
    { value: 1, from: "btu_it_lbf", to: "j_kgk", expected: 4186.8 },
    // python: 4.184*453.59237*(5/9)/(0.45359237*5/9)
    { value: 1, from: "btu_th_lbf", to: "j_kgk", expected: 4184 },
    // water ≈ 4.186 kJ/(kg·K); python: 4186/4186.8
    { value: 4.186, from: "kj_kgk", to: "btu_it_lbf", expected: 0.999808923282698 },
    // python: 4184/4186.8
    { value: 1, from: "cal_th_gc", to: "btu_it_lbf", expected: 0.999331231489443 },
    // aluminium ≈ 0.9 J/(g·K); python: 0.9*1000
    { value: 0.9, from: "j_gk", to: "j_kgk", expected: 900 },
    // python: 1000/4186.8
    { value: 1, from: "kj_kgk", to: "btu_it_lbf", expected: 0.23884589662749595 },
  ],
};

/** Heat (energy) per unit area, e.g. solar irradiation or fire exposure. Base: J/m². */
export const heatDensity: LinearSpec = {
  id: "heat-density",
  slug: "heat-density-converter",
  group: "heat",
  kind: "linear",
  dimension: "heat-density",
  baseUnit: "j_m2",
  units: [
    { id: "j_m2", symbol: "J/m²", factor: 1, system: "si" },
    { id: "kj_m2", symbol: "kJ/m²", factor: 1e3, system: "si" },
    { id: "mj_m2", symbol: "MJ/m²", factor: 1e6, system: "si" },
    { id: "j_cm2", symbol: "J/cm²", factor: 1e4, system: "metric" },
    { id: "wh_m2", symbol: "Wh/m²", factor: HOUR, system: "metric" },
    { id: "kwh_m2", symbol: "kWh/m²", factor: 1e3 * HOUR, system: "metric" },
    { id: "kcal_it_m2", symbol: "kcal_IT/m²", factor: CAL_IT * 1e3, system: "metric" },
    { id: "cal_it_cm2", symbol: "cal_IT/cm²", factor: CAL_IT * 1e4, system: "metric" },
    { id: "cal_th_cm2", symbol: "cal_th/cm²", factor: CAL_TH * 1e4, system: "metric" },
    // langley = 1 cal_th/cm² (exact)
    { id: "langley", symbol: "ly", factor: LANGLEY, system: "other" },
    { id: "btu_it_ft2", symbol: "Btu_IT/ft²", factor: BTU_IT / FOOT2, system: "us" },
    { id: "btu_th_ft2", symbol: "Btu_th/ft²", factor: BTU_TH / FOOT2, system: "us" },
  ],
  defaultFrom: "kwh_m2",
  defaultTo: "btu_it_ft2",
  defaultValue: 1,
  popularPairs: [
    ["kwh_m2", "btu_it_ft2"],
    ["btu_it_ft2", "kwh_m2"],
    ["kwh_m2", "mj_m2"],
    ["mj_m2", "kwh_m2"],
    ["langley", "kj_m2"],
    ["cal_it_cm2", "j_cm2"],
    ["btu_it_ft2", "kj_m2"],
  ],
  related: ["heat-flux-density", "energy", "area", "specific-heat-capacity"],
  known: [
    // python: 3.6e6/(1055.05585262/0.3048**2)
    { value: 1, from: "kwh_m2", to: "btu_it_ft2", expected: 316.99833062815054 },
    // python: 1055.05585262/0.3048**2/1000
    { value: 1, from: "btu_it_ft2", to: "kj_m2", expected: 11.356526682226976 },
    // python: 41840/1000
    { value: 1, from: "langley", to: "kj_m2", expected: 41.84 },
    // daily solar irradiation; python: 5*3.6
    { value: 5, from: "kwh_m2", to: "mj_m2", expected: 18 },
    // python: 4.1868/4.184
    { value: 1, from: "cal_it_cm2", to: "langley", expected: 1.0006692160611854 },
    // python: 1000*4.184*453.59237*(5/9)/0.3048**2/1e6
    { value: 1000, from: "btu_th_ft2", to: "mj_m2", expected: 11.348931794792602 },
  ],
};

/** Heat flux density (heat flow rate per unit area, irradiance). Base: W/m². */
export const heatFluxDensity: LinearSpec = {
  id: "heat-flux-density",
  slug: "heat-flux-density-converter",
  group: "heat",
  kind: "linear",
  dimension: "heat-flux-density",
  baseUnit: "w_m2",
  units: [
    { id: "w_m2", symbol: "W/m²", factor: 1, system: "si" },
    { id: "mw_m2", symbol: "mW/m²", factor: 1e-3, system: "si" },
    { id: "kw_m2", symbol: "kW/m²", factor: 1e3, system: "si" },
    { id: "w_cm2", symbol: "W/cm²", factor: 1e4, system: "metric" },
    // erg/(s·cm²) = 1e-7 J / (1 s × 1e-4 m²) = 1e-3 W/m²
    { id: "erg_s_cm2", symbol: "erg/(s·cm²)", factor: 1e-3, system: "metric" },
    { id: "kcal_it_h_m2", symbol: "kcal_IT/(h·m²)", factor: (CAL_IT * 1e3) / HOUR, system: "metric" },
    { id: "cal_th_s_cm2", symbol: "cal_th/(s·cm²)", factor: CAL_TH * 1e4, system: "metric" },
    // langley per minute = 41,840 J/m² / 60 s
    { id: "langley_min", symbol: "ly/min", factor: LANGLEY / 60, system: "other" },
    { id: "w_ft2", symbol: "W/ft²", factor: 1 / FOOT2, system: "us" },
    // Btu_IT/(h·ft²) ≈ 3.154591 W/m²
    { id: "btu_h_ft2", symbol: "Btu_IT/(h·ft²)", factor: BTU_IT / (HOUR * FOOT2), system: "us" },
    { id: "btu_th_h_ft2", symbol: "Btu_th/(h·ft²)", factor: BTU_TH / (HOUR * FOOT2), system: "us" },
    { id: "btu_s_ft2", symbol: "Btu_IT/(s·ft²)", factor: BTU_IT / FOOT2, system: "us" },
  ],
  defaultFrom: "w_m2",
  defaultTo: "btu_h_ft2",
  defaultValue: 1,
  popularPairs: [
    ["w_m2", "btu_h_ft2"],
    ["btu_h_ft2", "w_m2"],
    ["kw_m2", "btu_h_ft2"],
    ["w_ft2", "w_m2"],
    ["kcal_it_h_m2", "w_m2"],
    ["langley_min", "w_m2"],
    ["w_cm2", "kw_m2"],
  ],
  related: ["heat-density", "heat-transfer-coefficient", "thermal-conductivity", "power"],
  known: [
    // python: 1/(1055.05585262/3600/0.3048**2)
    { value: 1, from: "w_m2", to: "btu_h_ft2", expected: 0.3169983306281505 },
    // python: 1055.05585262/3600/0.3048**2
    { value: 1, from: "btu_h_ft2", to: "w_m2", expected: 3.154590745063049 },
    // solar constant ≈ 1,361 W/m²; python: 1361/(1055.05585262/3600/0.3048**2)
    { value: 1361, from: "w_m2", to: "btu_h_ft2", expected: 431.43472798491285 },
    // python: 4.184*1e4/1e3
    { value: 1, from: "cal_th_s_cm2", to: "kw_m2", expected: 41.84 },
    // python: 41840/60
    { value: 1, from: "langley_min", to: "w_m2", expected: 697.3333333333334 },
    // python: 4186.8/3600
    { value: 1, from: "kcal_it_h_m2", to: "w_m2", expected: 1.163 },
    // python: 1000*1e-3
    { value: 1000, from: "erg_s_cm2", to: "w_m2", expected: 1 },
    // python: 1/0.3048**2
    { value: 1, from: "w_ft2", to: "w_m2", expected: 10.763910416709722 },
  ],
};

/** Heat transfer coefficient / U-factor (heat flux per degree). Base: W/(m²·K). */
export const heatTransferCoefficient: LinearSpec = {
  id: "heat-transfer-coefficient",
  slug: "heat-transfer-coefficient-converter",
  group: "heat",
  kind: "linear",
  dimension: "heat-transfer-coefficient",
  baseUnit: "w_m2k",
  units: [
    { id: "w_m2k", symbol: "W/(m²·K)", factor: 1, system: "si" },
    { id: "w_m2c", symbol: "W/(m²·°C)", factor: 1, system: "metric" },
    { id: "kw_m2k", symbol: "kW/(m²·K)", factor: 1e3, system: "si" },
    { id: "w_cm2k", symbol: "W/(cm²·K)", factor: 1e4, system: "metric" },
    { id: "kcal_it_h_m2c", symbol: "kcal_IT/(h·m²·°C)", factor: (CAL_IT * 1e3) / HOUR, system: "metric" },
    { id: "cal_th_s_cm2c", symbol: "cal_th/(s·cm²·°C)", factor: CAL_TH * 1e4, system: "metric" },
    { id: "cal_it_s_cm2c", symbol: "cal_IT/(s·cm²·°C)", factor: CAL_IT * 1e4, system: "metric" },
    // Btu_IT/(h·ft²·°F) = 1,055.05585262 / (3,600 × 0.3048² × 5/9) ≈ 5.678263 W/(m²·K)
    { id: "btu_h_ft2_f", symbol: "Btu_IT/(h·ft²·°F)", factor: BTU_IT / (HOUR * FOOT2 * RANKINE), system: "us" },
    { id: "btu_th_h_ft2_f", symbol: "Btu_th/(h·ft²·°F)", factor: BTU_TH / (HOUR * FOOT2 * RANKINE), system: "us" },
    { id: "btu_s_ft2_f", symbol: "Btu_IT/(s·ft²·°F)", factor: BTU_IT / (FOOT2 * RANKINE), system: "us" },
  ],
  defaultFrom: "btu_h_ft2_f",
  defaultTo: "w_m2k",
  defaultValue: 1,
  popularPairs: [
    ["btu_h_ft2_f", "w_m2k"],
    ["w_m2k", "btu_h_ft2_f"],
    ["kcal_it_h_m2c", "w_m2k"],
    ["w_m2k", "kcal_it_h_m2c"],
    ["kw_m2k", "btu_h_ft2_f"],
    ["cal_th_s_cm2c", "w_m2k"],
  ],
  related: ["thermal-resistance", "thermal-conductivity", "heat-flux-density"],
  known: [
    // python: 1055.05585262/(3600*0.3048**2*5/9)
    { value: 1, from: "btu_h_ft2_f", to: "w_m2k", expected: 5.678263341113488 },
    // python: 1/(1055.05585262/(3600*0.3048**2*5/9))
    { value: 1, from: "w_m2k", to: "btu_h_ft2_f", expected: 0.17611018368230585 },
    // python: 10/(4186.8/3600)
    { value: 10, from: "w_m2k", to: "kcal_it_h_m2c", expected: 8.598452278589853 },
    // python: 4.184*1e4
    { value: 1, from: "cal_th_s_cm2c", to: "w_m2k", expected: 41840 },
    // a U-0.30 window; python: 0.3*1055.05585262/(3600*0.3048**2*5/9)
    { value: 0.3, from: "btu_h_ft2_f", to: "w_m2k", expected: 1.7034790023340463 },
    // python: 4.184*453.59237*(5/9)/(3600*0.3048**2*5/9)
    { value: 1, from: "btu_th_h_ft2_f", to: "w_m2k", expected: 5.674465897396301 },
  ],
};

/** All converters of the "heat" group. */
export const heatConverters: readonly LinearSpec[] = [
  fuelEfficiencyMass,
  fuelEfficiencyVolume,
  temperatureInterval,
  thermalExpansion,
  thermalResistance,
  thermalConductivity,
  specificHeatCapacity,
  heatDensity,
  heatFluxDensity,
  heatTransferCoefficient,
];
