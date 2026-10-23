/**
 * Chemical formula parser and standard atomic weights.
 *
 * Atomic weights: IUPAC/CIAAW abridged standard atomic weights (five
 * significant digits, based on "Atomic Weights 2021" with the 2024 revisions
 * for Gd, Lu and Zr). Elements whose standard atomic weight is an interval use
 * the CIAAW conventional single value (H, Li, B, C, N, O, Mg, Si, S, Cl, Ar,
 * Br, Tl, Pb). Elements without a standard atomic weight are listed in
 * NO_STANDARD_WEIGHT and rejected.
 */

export const ATOMIC_WEIGHTS: Readonly<Record<string, number>> = {
  H: 1.008, He: 4.0026, Li: 6.94, Be: 9.0122, B: 10.81, C: 12.011, N: 14.007, O: 15.999, F: 18.998, Ne: 20.18,
  Na: 22.99, Mg: 24.305, Al: 26.982, Si: 28.085, P: 30.974, S: 32.06, Cl: 35.45, Ar: 39.95, K: 39.098, Ca: 40.078,
  Sc: 44.956, Ti: 47.867, V: 50.942, Cr: 51.996, Mn: 54.938, Fe: 55.845, Co: 58.933, Ni: 58.693, Cu: 63.546, Zn: 65.38,
  Ga: 69.723, Ge: 72.63, As: 74.922, Se: 78.971, Br: 79.904, Kr: 83.798, Rb: 85.468, Sr: 87.62, Y: 88.906, Zr: 91.222,
  Nb: 92.906, Mo: 95.95, Ru: 101.07, Rh: 102.91, Pd: 106.42, Ag: 107.87, Cd: 112.41, In: 114.82, Sn: 118.71, Sb: 121.76,
  Te: 127.6, I: 126.9, Xe: 131.29, Cs: 132.91, Ba: 137.33, La: 138.91, Ce: 140.12, Pr: 140.91, Nd: 144.24, Sm: 150.36,
  Eu: 151.96, Gd: 157.25, Tb: 158.93, Dy: 162.5, Ho: 164.93, Er: 167.26, Tm: 168.93, Yb: 173.05, Lu: 174.97, Hf: 178.49,
  Ta: 180.95, W: 183.84, Re: 186.21, Os: 190.23, Ir: 192.22, Pt: 195.08, Au: 196.97, Hg: 200.59, Tl: 204.38, Pb: 207.2,
  Bi: 208.98, Th: 232.04, Pa: 231.04, U: 238.03,
};

/** Real elements that have no standard atomic weight (no stable isotope with a characteristic terrestrial composition). */
export const NO_STANDARD_WEIGHT: ReadonlySet<string> = new Set([
  "Tc", "Pm", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr",
  "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og",
]);

export const MAX_FORMULA_LENGTH = 200;
export const MAX_TOTAL_ATOMS = 1_000_000;

export type FormulaErrorCode =
  | "empty"
  | "tooLong"
  | "invalidChar"
  | "lowercase"
  | "unknownElement"
  | "noStandardWeight"
  | "unclosed"
  | "unexpectedClose"
  | "mismatched"
  | "emptyGroup"
  | "zeroCount"
  | "misplacedNumber"
  | "misplacedDot"
  | "tooManyAtoms";

export interface FormulaError {
  code: FormulaErrorCode;
  /** 1-based character position in the (trimmed) input, when it applies. */
  position?: number;
  /** The offending character or element symbol. */
  token?: string;
}

export type FormulaParse =
  | { ok: true; counts: Map<string, number>; totalAtoms: number }
  | { ok: false; error: FormulaError };

const SUBSCRIPTS: Record<string, string> = { "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9" };
const DOTS = new Set(["·", ".", "*", "•", "⋅"]);
const CLOSE_FOR: Record<string, string> = { "(": ")", "[": "]" };

class ParseFailure extends Error {
  constructor(readonly detail: FormulaError) {
    super(detail.code);
  }
}

/**
 * Parses formulas such as "H2O", "Ca(OH)2", "K4[Fe(CN)6]" and "CuSO4·5H2O".
 * Element symbols are case-sensitive, counts are integers ≥ 1, brackets nest,
 * and hydrate dots (·, . or *) may carry a leading coefficient. Spaces are ignored.
 */
export function parseFormula(input: string): FormulaParse {
  const text = input.trim();
  if (text === "") return { ok: false, error: { code: "empty" } };
  if ([...text].length > MAX_FORMULA_LENGTH) return { ok: false, error: { code: "tooLong" } };
  const chars = [...text].map((ch) => SUBSCRIPTS[ch] ?? ch);
  let i = 0;
  const isDigit = (ch: string | undefined) => ch !== undefined && ch >= "0" && ch <= "9";
  const isUpper = (ch: string | undefined) => ch !== undefined && ch >= "A" && ch <= "Z";
  const isLower = (ch: string | undefined) => ch !== undefined && ch >= "a" && ch <= "z";
  const skipSpaces = () => {
    while (i < chars.length && /\s/.test(chars[i])) i++;
  };
  const fail = (code: FormulaErrorCode, position?: number, token?: string): never => {
    throw new ParseFailure({ code, position, token });
  };
  const checkTotal = (n: number) => {
    if (n > MAX_TOTAL_ATOMS) fail("tooManyAtoms");
  };

  /** Reads an optional integer; returns 1 when absent. */
  const readCount = (): number => {
    skipSpaces();
    if (!isDigit(chars[i])) return 1;
    const start = i;
    let digits = "";
    while (isDigit(chars[i])) digits += chars[i++];
    const n = Number(digits);
    if (n === 0) fail("zeroCount", start + 1);
    checkTotal(n);
    return n;
  };

  const add = (into: Map<string, number>, from: Map<string, number>, times: number) => {
    for (const [symbol, n] of from) {
      const total = (into.get(symbol) ?? 0) + n * times;
      checkTotal(total);
      into.set(symbol, total);
    }
  };

  /** Parses a sequence of elements and bracket groups until a closing bracket, a dot or the end. */
  const parseSequence = (closer: string | null, openPosition: number): Map<string, number> => {
    const counts = new Map<string, number>();
    let items = 0;
    for (;;) {
      skipSpaces();
      const ch = chars[i];
      if (ch === undefined) {
        if (closer !== null) fail("unclosed", openPosition, chars[openPosition - 1]);
        break;
      }
      if (ch === ")" || ch === "]") {
        if (closer === null) fail("unexpectedClose", i + 1, ch);
        if (ch !== closer) fail("mismatched", i + 1, ch);
        if (items === 0) fail("emptyGroup", openPosition, chars[openPosition - 1]);
        i++;
        break;
      }
      if (DOTS.has(ch)) {
        if (closer !== null) fail("misplacedDot", i + 1, ch);
        break;
      }
      if (ch === "(" || ch === "[") {
        const position = i + 1;
        i++;
        const inner = parseSequence(CLOSE_FOR[ch], position);
        add(counts, inner, readCount());
        items++;
        continue;
      }
      if (isUpper(ch)) {
        const position = i + 1;
        let symbol = ch;
        i++;
        if (isLower(chars[i])) symbol += chars[i++];
        if (isLower(chars[i])) {
          // Three-letter placeholder names (e.g. "Uue") have no standard atomic weight either.
          symbol += chars[i++];
          fail("unknownElement", position, symbol);
        }
        if (NO_STANDARD_WEIGHT.has(symbol)) fail("noStandardWeight", position, symbol);
        if (ATOMIC_WEIGHTS[symbol] === undefined) fail("unknownElement", position, symbol);
        const n = readCount();
        add(counts, new Map([[symbol, 1]]), n);
        items++;
        continue;
      }
      if (isLower(ch)) fail("lowercase", i + 1, ch);
      if (isDigit(ch)) fail("misplacedNumber", i + 1, ch);
      fail("invalidChar", i + 1, ch);
    }
    return counts;
  };

  try {
    const counts = new Map<string, number>();
    for (;;) {
      skipSpaces();
      const partStart = i;
      // Optional leading coefficient, e.g. the 5 in "·5H2O".
      let coefficient = 1;
      if (isDigit(chars[i])) {
        let digits = "";
        while (isDigit(chars[i])) digits += chars[i++];
        coefficient = Number(digits);
        if (coefficient === 0) fail("zeroCount", partStart + 1);
        checkTotal(coefficient);
      }
      const part = parseSequence(null, 0);
      if (part.size === 0) {
        // Nothing after a coefficient or around a dot.
        if (i < chars.length) fail("misplacedDot", i + 1, chars[i]);
        // Only a coefficient was left at the end, e.g. "H2O·5".
        fail("misplacedNumber", partStart + 1, chars[partStart]);
      }
      add(counts, part, coefficient);
      if (i >= chars.length) break;
      // parseSequence stopped at a hydrate dot.
      const dotPosition = i + 1;
      i++;
      skipSpaces();
      if (i >= chars.length) fail("misplacedDot", dotPosition, chars[dotPosition - 1]);
    }
    let totalAtoms = 0;
    for (const n of counts.values()) totalAtoms += n;
    return { ok: true, counts, totalAtoms };
  } catch (error) {
    if (error instanceof ParseFailure) return { ok: false, error: error.detail };
    throw error;
  }
}

export interface ElementShare {
  symbol: string;
  count: number;
  atomicWeight: number;
  mass: number;
  /** Mass percent, 0–100. */
  percent: number;
}

/** Molar mass in g/mol and each element's contribution, in order of first appearance. */
export function molarMass(counts: Map<string, number>): { total: number; elements: ElementShare[] } {
  let total = 0;
  const parts = [...counts].map(([symbol, count]) => {
    const atomicWeight = ATOMIC_WEIGHTS[symbol];
    const mass = count * atomicWeight;
    total += mass;
    return { symbol, count, atomicWeight, mass };
  });
  return { total, elements: parts.map((p) => ({ ...p, percent: total > 0 ? (p.mass / total) * 100 : 0 })) };
}
