/** Number notation helpers: significant figures and scientific notation. */

const DECIMAL_TEXT = /^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i;

/** Removes thousands separators and spaces. */
export function cleanNumberText(text: string): string {
  return text.trim().replace(/[,\s_]/g, "");
}

/** True for decimal or e-notation text such as "1,200", "0.0045" or "6.02e23". */
export function isNumberText(text: string): boolean {
  return DECIMAL_TEXT.test(cleanNumberText(text));
}

/**
 * Counts significant figures using the standard rules: non-zero digits and
 * zeros between them count; leading zeros never count; trailing zeros count
 * only when the number has a decimal point. Returns null for invalid text
 * and 0 for zero.
 */
export function countSigFigs(text: string): number | null {
  const cleaned = cleanNumberText(text).replace(/^[+-]/, "");
  const match = /^(\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i.exec(cleaned);
  if (!match) return null;
  const mantissa = match[1];
  if (mantissa.includes(".")) {
    const digits = mantissa.replace(".", "").replace(/^0+/, "");
    return digits.length;
  }
  return mantissa.replace(/^0+/, "").replace(/0+$/, "").length;
}

/** Expands e-notation text from toPrecision/toExponential into plain decimal text. */
export function expandExponential(text: string): string {
  const [mantissa, exponentText] = text.toLowerCase().split("e");
  if (exponentText === undefined) return text;
  const negative = mantissa.startsWith("-");
  const unsigned = negative ? mantissa.slice(1) : mantissa;
  const [integer, fraction = ""] = unsigned.split(".");
  const digits = integer + fraction;
  const point = integer.length + Number(exponentText);
  let plain: string;
  if (point <= 0) plain = `0.${"0".repeat(-point)}${digits}`;
  else if (point >= digits.length) plain = digits + "0".repeat(point - digits.length);
  else plain = `${digits.slice(0, point)}.${digits.slice(point)}`;
  return (negative ? "-" : "") + plain;
}

/** Adds thousands separators to plain decimal text. */
export function groupThousands(plain: string): string {
  const [integer, fraction] = plain.split(".");
  const grouped = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return fraction === undefined ? grouped : `${grouped}.${fraction}`;
}

const SUPERSCRIPT: Record<string, string> = { "-": "⁻", "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹" };

export function superscript(n: number): string {
  return String(n)
    .split("")
    .map((ch) => SUPERSCRIPT[ch] ?? ch)
    .join("");
}

export interface ScientificParts {
  mantissa: string;
  exponent: number;
}

/** Splits e-notation text ("1.20e+3") into its mantissa and exponent, keeping trailing zeros. */
export function splitExponential(text: string): ScientificParts {
  const [mantissa, exponent] = text.split("e");
  return { mantissa, exponent: Number(exponent ?? 0) };
}

/** Formats parts as "1.2 × 10³". */
export function formatScientific({ mantissa, exponent }: ScientificParts): string {
  return `${mantissa} × 10${superscript(exponent)}`;
}

/** Rounds to `n` significant figures, returning plain and scientific text that keep significant trailing zeros. */
export function roundToSigFigs(value: number, n: number): { plain: string; scientific: string; value: number } {
  const precise = value.toPrecision(n);
  const exponential = value.toExponential(n - 1);
  return { plain: groupThousands(expandExponential(precise)), scientific: formatScientific(splitExponential(exponential)), value: Number(precise) };
}

/** Scientific, e-notation, engineering and decimal forms of a number, using the shortest exact representation. */
export function notations(value: number): { scientific: string; eNotation: string; engineering: string; decimal: string } {
  if (value === 0) return { scientific: "0 × 10⁰", eNotation: "0e0", engineering: "0 × 10⁰", decimal: "0" };
  const parts = splitExponential(value.toExponential());
  const engineeringExponent = Math.floor(parts.exponent / 3) * 3;
  const engineeringMantissa = Number((Number(parts.mantissa) * 10 ** (parts.exponent - engineeringExponent)).toPrecision(15));
  return {
    scientific: formatScientific(parts),
    eNotation: `${parts.mantissa}e${parts.exponent}`,
    engineering: formatScientific({ mantissa: String(engineeringMantissa), exponent: engineeringExponent }),
    decimal: groupThousands(expandExponential(value.toExponential())),
  };
}
