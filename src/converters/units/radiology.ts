import type { LinearSpec } from "../types";

/*
 * Ionizing-radiation units. Every factor is exact by definition (NIST SP 811
 * Appendix B.8): 1 rem = 0.01 Sv, 1 rad = 0.01 Gy, 1 Ci = 3.7 × 10¹⁰ Bq,
 * 1 R = 2.58 × 10⁻⁴ C/kg. Dose equivalent (Sv) and absorbed dose (Gy) are
 * different quantities and live in separate converters.
 */

/** Curie (exact, by definition), in becquerels. */
const CURIE = 3.7e10;
/** Roentgen (exact, by definition), in coulombs per kilogram. */
const ROENTGEN = 2.58e-4;

export const radiation: LinearSpec = {
  id: "radiation",
  slug: "radiation-converter",
  group: "radiology",
  kind: "linear",
  dimension: "dose-equivalent",
  baseUnit: "sv",
  units: [
    { id: "sv", symbol: "Sv", factor: 1, system: "si" },
    { id: "csv", symbol: "cSv", factor: 1e-2, system: "si" },
    { id: "msv", symbol: "mSv", factor: 1e-3, system: "si" },
    { id: "usv", symbol: "µSv", factor: 1e-6, system: "si" },
    { id: "nsv", symbol: "nSv", factor: 1e-9, system: "si" },
    // rem = 0.01 Sv (exact)
    { id: "rem", symbol: "rem", factor: 1e-2, system: "other" },
    { id: "mrem", symbol: "mrem", factor: 1e-5, system: "other" },
    { id: "urem", symbol: "µrem", factor: 1e-8, system: "other" },
  ],
  defaultFrom: "msv",
  defaultTo: "mrem",
  defaultValue: 1,
  popularPairs: [
    ["msv", "mrem"],
    ["mrem", "msv"],
    ["sv", "rem"],
    ["rem", "sv"],
    ["usv", "mrem"],
    ["msv", "usv"],
  ],
  related: ["radiation-absorbed-dose", "radiation-activity", "radiation-exposure"],
  known: [
    { value: 1, from: "rem", to: "sv", expected: 0.01 },
    { value: 5, from: "sv", to: "rem", expected: 500 },
    // 2.4e-3*1e5 (typical annual natural background)
    { value: 2.4, from: "msv", to: "mrem", expected: 240 },
    { value: 1, from: "msv", to: "usv", expected: 1000 },
    { value: 100, from: "mrem", to: "msv", expected: 1 },
    { value: 0, from: "sv", to: "rem", expected: 0 },
  ],
};

export const radiationActivity: LinearSpec = {
  id: "radiation-activity",
  slug: "radiation-activity-converter",
  group: "radiology",
  kind: "linear",
  dimension: "activity",
  baseUnit: "bq",
  units: [
    { id: "bq", symbol: "Bq", factor: 1, system: "si" },
    { id: "kbq", symbol: "kBq", factor: 1e3, system: "si" },
    { id: "mbq", symbol: "MBq", factor: 1e6, system: "si" },
    { id: "gbq", symbol: "GBq", factor: 1e9, system: "si" },
    { id: "tbq", symbol: "TBq", factor: 1e12, system: "si" },
    { id: "pbq", symbol: "PBq", factor: 1e15, system: "si" },
    // curie = 3.7e10 Bq (exact)
    { id: "kci", symbol: "kCi", factor: CURIE * 1e3, system: "other" },
    { id: "ci", symbol: "Ci", factor: CURIE, system: "other" },
    { id: "mci", symbol: "mCi", factor: CURIE * 1e-3, system: "other" },
    { id: "uci", symbol: "µCi", factor: CURIE * 1e-6, system: "other" },
    { id: "nci", symbol: "nCi", factor: CURIE * 1e-9, system: "other" },
    { id: "pci", symbol: "pCi", factor: CURIE * 1e-12, system: "other" },
    // rutherford = 10⁶ Bq
    { id: "rd", symbol: "Rd", factor: 1e6, system: "other" },
    // disintegrations per second / per minute
    { id: "dps", symbol: "dps", factor: 1, system: "other" },
    { id: "dpm", symbol: "dpm", factor: 1 / 60, system: "other" },
  ],
  defaultFrom: "mci",
  defaultTo: "mbq",
  defaultValue: 1,
  popularPairs: [
    ["mci", "mbq"],
    ["mbq", "mci"],
    ["ci", "bq"],
    ["gbq", "mci"],
    ["uci", "kbq"],
    ["pci", "bq"],
    ["dpm", "bq"],
  ],
  related: ["radiation", "radiation-absorbed-dose", "radiation-exposure"],
  known: [
    { value: 1, from: "ci", to: "bq", expected: 3.7e10 },
    // 1e9/3.7e10*1e3
    { value: 1, from: "gbq", to: "mci", expected: 27.027027027027028 },
    // 1/3.7e10*1e12 (radon in air is quoted in pCi/L)
    { value: 1, from: "bq", to: "pci", expected: 27.027027027027028 },
    // 5*3.7e10/1e9
    { value: 5, from: "ci", to: "gbq", expected: 185 },
    // 1e6/3.7e10*1e6
    { value: 1, from: "mbq", to: "uci", expected: 27.027027027027028 },
    { value: 1, from: "bq", to: "dpm", expected: 60 },
    { value: 1, from: "rd", to: "bq", expected: 1e6 },
  ],
};

export const radiationExposure: LinearSpec = {
  id: "radiation-exposure",
  slug: "radiation-exposure-converter",
  group: "radiology",
  kind: "linear",
  dimension: "exposure",
  baseUnit: "c_kg",
  units: [
    { id: "c_kg", symbol: "C/kg", factor: 1, system: "si" },
    { id: "mc_kg", symbol: "mC/kg", factor: 1e-3, system: "si" },
    { id: "uc_kg", symbol: "µC/kg", factor: 1e-6, system: "si" },
    { id: "nc_kg", symbol: "nC/kg", factor: 1e-9, system: "si" },
    // roentgen = 2.58e-4 C/kg (exact)
    { id: "kr", symbol: "kR", factor: ROENTGEN * 1e3, system: "other" },
    { id: "r", symbol: "R", factor: ROENTGEN, system: "other" },
    { id: "mr", symbol: "mR", factor: ROENTGEN * 1e-3, system: "other" },
    { id: "ur", symbol: "µR", factor: ROENTGEN * 1e-6, system: "other" },
  ],
  defaultFrom: "r",
  defaultTo: "c_kg",
  defaultValue: 1,
  popularPairs: [
    ["r", "c_kg"],
    ["c_kg", "r"],
    ["mr", "uc_kg"],
    ["uc_kg", "mr"],
    ["ur", "nc_kg"],
    ["r", "mc_kg"],
  ],
  related: ["radiation", "radiation-absorbed-dose", "radiation-activity", "charge"],
  known: [
    { value: 1, from: "r", to: "c_kg", expected: 2.58e-4 },
    // 1/2.58e-4
    { value: 1, from: "c_kg", to: "r", expected: 3875.968992248062 },
    // 2.58e-4*1e-3/1e-6
    { value: 1, from: "mr", to: "uc_kg", expected: 0.258 },
    // 1e-6/2.58e-4*1e3
    { value: 1, from: "uc_kg", to: "mr", expected: 3.875968992248062 },
    // 100*2.58e-4*1e3
    { value: 100, from: "r", to: "mc_kg", expected: 25.8 },
    { value: 0, from: "r", to: "c_kg", expected: 0 },
  ],
};

export const radiationAbsorbedDose: LinearSpec = {
  id: "radiation-absorbed-dose",
  slug: "radiation-absorbed-dose-converter",
  group: "radiology",
  kind: "linear",
  dimension: "absorbed-dose",
  baseUnit: "gy",
  units: [
    { id: "gy", symbol: "Gy", factor: 1, system: "si" },
    { id: "kgy", symbol: "kGy", factor: 1e3, system: "si" },
    { id: "cgy", symbol: "cGy", factor: 1e-2, system: "si" },
    { id: "mgy", symbol: "mGy", factor: 1e-3, system: "si" },
    { id: "ugy", symbol: "µGy", factor: 1e-6, system: "si" },
    // 1 Gy = 1 J/kg
    { id: "j_kg", symbol: "J/kg", factor: 1, system: "si" },
    // rad = 0.01 Gy (exact)
    { id: "krad", symbol: "krad", factor: 10, system: "other" },
    { id: "rad", symbol: "rad", factor: 1e-2, system: "other" },
    { id: "mrad", symbol: "mrad", factor: 1e-5, system: "other" },
    // erg per gram = 1e-7 J / 1e-3 kg = 1e-4 Gy (CGS)
    { id: "erg_g", symbol: "erg/g", factor: 1e-4, system: "metric" },
  ],
  defaultFrom: "rad",
  defaultTo: "gy",
  defaultValue: 1,
  popularPairs: [
    ["rad", "gy"],
    ["gy", "rad"],
    ["cgy", "rad"],
    ["mgy", "mrad"],
    ["krad", "kgy"],
    ["gy", "j_kg"],
  ],
  related: ["radiation", "radiation-activity", "radiation-exposure", "energy"],
  known: [
    { value: 1, from: "rad", to: "gy", expected: 0.01 },
    { value: 2, from: "gy", to: "rad", expected: 200 },
    { value: 1, from: "erg_g", to: "gy", expected: 1e-4 },
    // 50*0.01/1e-3
    { value: 50, from: "rad", to: "mgy", expected: 500 },
    { value: 1, from: "kgy", to: "krad", expected: 100 },
    { value: 1, from: "cgy", to: "rad", expected: 1 },
    { value: 0, from: "gy", to: "rad", expected: 0 },
  ],
};

/** All converters of the "radiology" group. */
export const radiologyConverters: readonly LinearSpec[] = [radiation, radiationActivity, radiationExposure, radiationAbsorbedDose];
