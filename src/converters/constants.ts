/**
 * Exact or conventional constants used by the unit converters. Values marked
 * "exact" are fixed by definition (SI 2019, the 1959 international yard and
 * pound agreement, or the named convention); see NIST SP 811 and SP 330.
 */

/** Standard acceleration of gravity (exact, CGPM 1901). */
export const G_N = 9.80665;
/** International foot, inch, yard, mile (exact). */
export const FOOT = 0.3048;
export const INCH = 0.0254;
export const YARD = 0.9144;
export const MILE = 1609.344;
export const NAUTICAL_MILE = 1852;
/** International avoirdupois pound and ounce (exact). */
export const POUND = 0.45359237;
export const OUNCE = POUND / 16;
export const GRAIN = POUND / 7000;
/** Pound-force, kilogram-force and psi (exact from the above). */
export const POUND_FORCE = POUND * G_N;
export const KILOGRAM_FORCE = G_N;
export const PSI = POUND_FORCE / (INCH * INCH);
/** US liquid gallon (231 in³) and imperial gallon (exact), in cubic metres. */
export const US_GALLON = 231 * INCH ** 3;
export const IMPERIAL_GALLON = 4.54609e-3;
/** US dry gallon (268.8025 in³) and bushel (2150.42 in³), exact, in cubic metres. */
export const US_DRY_GALLON = 268.8025 * INCH ** 3;
export const US_BUSHEL = 2150.42 * INCH ** 3;
/** Thermochemical calorie (exact) and International Table calorie (exact), in joules. */
export const CAL_TH = 4.184;
export const CAL_IT = 4.1868;
/** International Table British thermal unit (exact from its definition via the IT calorie), in joules. */
export const BTU_IT = 1055.05585262;
/** Thermochemical Btu, in joules. */
export const BTU_TH = 1054.3502644888888;
/** Degree Fahrenheit/Rankine interval in kelvins (exact). */
export const RANKINE = 5 / 9;
/** Speed of light in vacuum (exact, SI). */
export const C_LIGHT = 299792458;
/** Elementary charge (exact, SI 2019), in coulombs. */
export const ELEMENTARY_CHARGE = 1.602176634e-19;
/** Avogadro constant (exact, SI 2019). */
export const AVOGADRO = 6.02214076e23;
/** Standard atmosphere (exact), in pascals. */
export const ATMOSPHERE = 101325;
/** Electronvolt (exact, SI 2019), in joules. */
export const ELECTRONVOLT = ELEMENTARY_CHARGE;
/** Hour, day, Julian year in seconds (exact). */
export const HOUR = 3600;
export const DAY = 86400;
export const JULIAN_YEAR = 365.25 * DAY;
/** Mechanical horsepower (550 ft·lbf/s), exact from the above, in watts. */
export const HORSEPOWER = 550 * FOOT * POUND_FORCE;
/** Metric horsepower (75 kgf·m/s, exact), in watts. */
export const METRIC_HORSEPOWER = 75 * G_N;
