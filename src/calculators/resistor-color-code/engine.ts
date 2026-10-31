import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem, type SelectOption } from "@/calculators/framework/types";
import en, { type ResistorColorCodeText } from "./text/en";

export type ResistorColorCodeValues = {
  mode: string;
  bands: string;
  band1: string;
  band2: string;
  band3: string;
  multiplier: string;
  tolerance: string;
  tcr: string;
  value: string;
  encodeBands: string;
  encodeTolerance: string;
};

export type Color = "black" | "brown" | "red" | "orange" | "yellow" | "green" | "blue" | "violet" | "grey" | "white" | "gold" | "silver" | "none";

/** Significant-figure colours (IEC 60062): black 0 … white 9. */
export const DIGITS: Partial<Record<Color, number>> = { black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, grey: 8, white: 9 };
/** Multiplier colours as powers of ten: black 10⁰ … white 10⁹, gold 10⁻¹, silver 10⁻². */
export const MULTIPLIERS: Partial<Record<Color, number>> = { ...DIGITS, gold: -1, silver: -2 };
/** Tolerance colours in percent. "none" (no band) is only for 4-band resistors. */
export const TOLERANCES: Partial<Record<Color, number>> = { brown: 1, red: 2, green: 0.5, blue: 0.25, violet: 0.1, gold: 5, silver: 10, none: 20 };
/** Temperature coefficient colours in ppm/K (6th band). */
export const TCRS: Partial<Record<Color, number>> = { black: 250, brown: 100, red: 50, orange: 15, yellow: 25, green: 20, blue: 10, violet: 5, grey: 1 };

const keys = (table: Partial<Record<Color, number>>) => Object.keys(table) as Color[];

/** Exact D × 10^e as a float, dividing for negative exponents to avoid 0.1-style error. */
export function scaleBy(digits: number, exponent: number): number {
  return exponent >= 0 ? digits * 10 ** exponent : digits / 10 ** -exponent;
}

/** Nominal resistance in ohms from digit colours and the multiplier colour. */
export function decodeBands(digitColors: readonly Color[], multiplier: Color): number {
  const digits = digitColors.reduce((n, c) => n * 10 + (DIGITS[c] ?? 0), 0);
  return scaleBy(digits, MULTIPLIERS[multiplier] ?? 0);
}

export type ParsedValue = { ok: true; digits: string; exponent: number } | { ok: false; error: "invalidValue" | "ambiguousM" | "zero" };

const PREFIX_EXP: Record<string, number> = { r: 0, k: 3, m: 6, g: 9 };

/**
 * Parses "470", "4.7k", "4,7k", "4k7", "R47", "2.2M", "1e3" (with an optional Ω or "ohm") into
 * its significant digits (no leading or trailing zeros) and a power of ten: value = digits × 10^exponent.
 */
export function parseResistance(text: string): ParsedValue {
  const s = text.replace(/\s+/g, "").replace(/(Ω|Ω|ohms?)$/i, "");
  let intPart: string;
  let fracPart: string;
  let exp = 0;
  let prefix = "";
  const decimal = /^(\d*)(?:[.,](\d*))?(?:e([+-]?\d+))?([rRkKMgG]|m)?$/.exec(s);
  const rkm = /^(\d*)([rRkKMgG]|m)(\d+)$/.exec(s);
  if (decimal && (decimal[1] + (decimal[2] ?? "")).length > 0) {
    intPart = decimal[1];
    fracPart = decimal[2] ?? "";
    exp = decimal[3] ? Number(decimal[3]) : 0;
    prefix = decimal[4] ?? "";
  } else if (rkm) {
    intPart = rkm[1];
    fracPart = rkm[3];
    prefix = rkm[2];
  } else {
    return { ok: false, error: "invalidValue" };
  }
  if (prefix === "m") return { ok: false, error: "ambiguousM" };
  if (Math.abs(exp) > 100) return { ok: false, error: "invalidValue" };
  let digits = (intPart + fracPart).replace(/^0+/, "");
  let exponent = exp + (prefix ? PREFIX_EXP[prefix.toLowerCase()] : 0) - fracPart.length;
  if (digits === "") return { ok: false, error: "zero" };
  const trimmed = digits.replace(/0+$/, "");
  exponent += digits.length - trimmed.length;
  digits = trimmed;
  return { ok: true, digits, exponent };
}

export type Encoded = { ok: true; digitColors: Color[]; multiplier: Color } | { ok: false; error: "tooManyDigits" | "tooSmall" | "tooLarge"; needed: number };

/** Colour bands for a parsed value with `count` significant-digit bands (2 or 3). */
export function encodeValue(digits: string, exponent: number, count: number): Encoded {
  if (digits.length > count) return { ok: false, error: "tooManyDigits", needed: digits.length };
  const mantissa = digits.padEnd(count, "0");
  const e = exponent - (count - digits.length);
  if (e < -2) return { ok: false, error: "tooSmall", needed: digits.length };
  if (e > 9) return { ok: false, error: "tooLarge", needed: digits.length };
  const byDigit = keys(DIGITS);
  const multiplier = keys(MULTIPLIERS).find((c) => MULTIPLIERS[c] === e) as Color;
  return { ok: true, digitColors: [...mantissa].map((d) => byDigit[Number(d)]), multiplier };
}

/** The SI prefix exponent (0, 3, 6 or 9) used to display a resistance. */
export function prefixExponent(ohms: number): number {
  if (ohms >= 1e9) return 9;
  if (ohms >= 1e6) return 6;
  if (ohms >= 1e3) return 3;
  return 0;
}

export function makeResistorColorCodeEngine(ctx: EngineContext<ResistorColorCodeText>) {
  const t = ctx.text;
  const decode = { field: "mode", oneOf: ["decode"] } as const;
  const encode = { field: "mode", oneOf: ["encode"] } as const;
  const multiplierText = (e: number) => ctx.fmt.number(scaleBy(1, e), 2);
  const percentText = (p: number) => ctx.fmt.percent(p, 2);
  const option = (color: Color, meaning: string): SelectOption => ({ value: color, label: fill(t.colorOption, { color: t.colors[color], meaning }) });
  const digitOptions = (colors: readonly Color[]) => colors.map((c) => option(c, ctx.fmt.number(DIGITS[c] ?? 0, 0)));
  const multiplierOptions = keys(MULTIPLIERS).map((c) => option(c, fill(t.meanings.multiplier, { n: multiplierText(MULTIPLIERS[c] ?? 0) })));
  const toleranceOptions = keys(TOLERANCES).map((c) => option(c, fill(t.toleranceText, { value: percentText(TOLERANCES[c] ?? 0) })));
  const tcrOptions = keys(TCRS).map((c) => option(c, fill(t.tcrText, { value: ctx.fmt.number(TCRS[c] ?? 0, 0) })));
  const PREFIX_SYMBOL: Record<number, string> = { 0: "", 3: "k", 6: "M", 9: "G" };
  const ohmsText = (ohms: number, p = prefixExponent(ohms)) => fill(t.valueText, { value: ctx.fmt.number(ohms / 10 ** p, 6), prefix: PREFIX_SYMBOL[p] });
  const nominalText = (digits: number, e: number) => {
    const ohms = scaleBy(digits, e);
    const p = prefixExponent(ohms);
    return fill(t.valueText, { value: ctx.fmt.number(scaleBy(digits, e - p), 4), prefix: PREFIX_SYMBOL[p] });
  };
  const parse = (text: string) => parseResistance(text);
  const checkValue = (text: string): string | undefined => {
    const parsed = parse(text);
    return parsed.ok ? undefined : t.errors[parsed.error];
  };
  const bandRows = (colors: Color[], digitCount: number, tcrColor: Color | null) => {
    const meanings = colors.map((c, i) => {
      if (i < digitCount) return fill(t.meanings.digit, { n: ctx.fmt.number(DIGITS[c] ?? 0, 0) });
      if (i === digitCount) return fill(t.meanings.multiplier, { n: multiplierText(MULTIPLIERS[c] ?? 0) });
      if (i === digitCount + 1) return fill(t.meanings.tolerance, { n: percentText(TOLERANCES[c] ?? 0) });
      return fill(t.meanings.tcr, { n: ctx.fmt.number(TCRS[tcrColor ?? c] ?? 0, 0) });
    });
    return colors.map((c, i) => ({
      label: fill(t.table.bandLabel, { n: ctx.fmt.number(i + 1, 0) }),
      cells: [
        { kind: "text" as const, text: t.colors[c] },
        { kind: "text" as const, text: meanings[i] },
      ],
    }));
  };

  return defineEngine<ResistorColorCodeValues>({
    locale: ctx.locale,
    fields: [
      { id: "mode", type: "select", label: t.mode, options: (["decode", "encode"] as const).map((value) => ({ value, label: t.modes[value] })), defaultValue: "decode", display: "segmented" },
      { id: "bands", type: "select", label: t.bands, options: (["4", "5", "6"] as const).map((value) => ({ value, label: t.bandCounts[value] })), defaultValue: "4", display: "segmented", visibleWhen: decode },
      { id: "band1", type: "select", label: t.band1, options: digitOptions(keys(DIGITS).filter((c) => c !== "black")), defaultValue: "yellow", visibleWhen: decode },
      { id: "band2", type: "select", label: t.band2, options: digitOptions(keys(DIGITS)), defaultValue: "violet", visibleWhen: decode },
      { id: "band3", type: "select", label: t.band3, options: digitOptions(keys(DIGITS)), defaultValue: "black", visibleWhen: [decode, { field: "bands", oneOf: ["5", "6"] }] },
      { id: "multiplier", type: "select", label: t.multiplier, options: multiplierOptions, defaultValue: "red", visibleWhen: decode },
      { id: "tolerance", type: "select", label: t.tolerance, options: toleranceOptions, defaultValue: "gold", visibleWhen: decode },
      { id: "tcr", type: "select", label: t.tcr, options: tcrOptions, defaultValue: "brown", visibleWhen: [decode, { field: "bands", oneOf: ["6"] }] },
      { id: "value", type: "text", label: t.value, help: t.valueHelp, defaultValue: "4.7k", check: checkValue, visibleWhen: encode },
      {
        id: "encodeBands",
        type: "select",
        label: t.bands,
        options: (["4", "5"] as const).map((value) => ({ value, label: t.encodeBandCounts[value] })),
        defaultValue: "4",
        display: "segmented",
        visibleWhen: encode,
      },
      { id: "encodeTolerance", type: "select", label: t.tolerance, options: toleranceOptions, defaultValue: "gold", visibleWhen: encode },
    ],
    validate: ({ mode, bands, tolerance, value, encodeBands, encodeTolerance }): FieldErrors => {
      if (mode === "decode") return bands !== "4" && tolerance === "none" ? { tolerance: t.errors.noneNeedsFour } : {};
      const errors: FieldErrors = {};
      if (encodeBands !== "4" && encodeTolerance === "none") errors.encodeTolerance = t.errors.noneNeedsFour;
      const parsed = parse(value);
      if (parsed.ok) {
        const count = encodeBands === "5" ? 3 : 2;
        const result = encodeValue(parsed.digits, parsed.exponent, count);
        if (!result.ok)
          errors.value =
            result.error === "tooManyDigits"
              ? fill(t.errors.tooManyDigits, { value, digits: ctx.fmt.number(result.needed, 0), bands: ctx.fmt.number(Number(encodeBands), 0), max: ctx.fmt.number(count, 0) })
              : t.errors[result.error];
      }
      return errors;
    },
    compute: ({ mode, bands, band1, band2, band3, multiplier, tolerance, tcr, value, encodeBands, encodeTolerance }) => {
      let digitColors: Color[];
      let mult: Color;
      let tol: Color;
      let tcrColor: Color | null = null;
      let bandCount: number;
      if (mode === "decode") {
        bandCount = Number(bands);
        digitColors = (bandCount === 4 ? [band1, band2] : [band1, band2, band3]) as Color[];
        mult = multiplier as Color;
        tol = tolerance as Color;
        if (bandCount === 6) tcrColor = tcr as Color;
      } else {
        bandCount = Number(encodeBands);
        const parsed = parse(value);
        const encoded = parsed.ok ? encodeValue(parsed.digits, parsed.exponent, bandCount === 5 ? 3 : 2) : null;
        digitColors = encoded?.ok ? encoded.digitColors : ["brown", "black"];
        mult = encoded?.ok ? encoded.multiplier : "black";
        tol = encodeTolerance as Color;
      }
      const digitValue = digitColors.reduce((n, c) => n * 10 + (DIGITS[c] ?? 0), 0);
      const e = MULTIPLIERS[mult] ?? 0;
      const ohms = scaleBy(digitValue, e);
      const tolerancePercent = TOLERANCES[tol] ?? 20;
      const nominal = nominalText(digitValue, e);
      const p = prefixExponent(ohms);
      const colors: Color[] = [...digitColors, mult, ...(tol === "none" ? [] : [tol]), ...(tcrColor ? [tcrColor] : [])];
      const bandsText = colors.map((c) => t.colors[c]).join(t.bandSeparator);
      const toleranceText = fill(t.toleranceText, { value: percentText(tolerancePercent) });

      const secondary: ResultItem[] = [];
      if (mode === "encode") secondary.push({ label: t.resistance, value: { kind: "text", text: nominal } });
      else secondary.push({ label: t.bandsResult, value: { kind: "text", text: bandsText } });
      secondary.push(
        { label: t.ohms, value: { kind: "number", value: ohms, decimals: 2, suffix: "Ω" } },
        { label: t.toleranceResult, value: { kind: "text", text: toleranceText } },
        { label: t.minimum, value: { kind: "text", text: ohmsText(ohms * (1 - tolerancePercent / 100), p) } },
        { label: t.maximum, value: { kind: "text", text: ohmsText(ohms * (1 + tolerancePercent / 100), p) } },
        { label: t.significantDigits, value: { kind: "number", value: digitValue, decimals: 0 } },
        { label: t.multiplierResult, value: { kind: "text", text: fill(t.meanings.multiplier, { n: multiplierText(e) }) } },
      );
      const notes: string[] = [];
      if (tcrColor) {
        const ppm = TCRS[tcrColor] ?? 0;
        const tcrText = fill(t.tcrText, { value: ctx.fmt.number(ppm, 0) });
        secondary.push({ label: t.tcrResult, value: { kind: "text", text: tcrText } });
        secondary.push({ label: t.tcrChange, value: { kind: "text", text: ohmsText(ohms * ppm * 1e-6 * 10, prefixExponent(ohms * ppm * 1e-5)) } });
        notes.push(fill(t.notes.tcr, { value: tcrText, percent: ctx.fmt.percent(ppm * 1e-3, 4) }));
      }
      if (tol === "none") notes.push(t.notes.noTolerance);
      notes.push(t.notes.reading, t.notes.colors);

      return {
        primary:
          mode === "decode"
            ? {
                label: t.resistance,
                value: { kind: "text", text: nominal },
                caption: fill(t.captionDecode, { bands: t.bandCounts[bands as "4" | "5" | "6"], digits: ctx.fmt.number(digitValue, 0), multiplier: multiplierText(e), tolerance: percentText(tolerancePercent) }),
              }
            : {
                label: t.bandsResult,
                value: { kind: "text", text: bandsText },
                caption: fill(t.captionEncode, { value: nominal, bands: ctx.fmt.number(bandCount, 0), tolerance: percentText(tolerancePercent) }),
              },
        secondary,
        tables: [{ caption: t.table.caption, columns: [t.table.band, t.table.color, t.table.meaning], rows: bandRows(colors, digitColors.length, tcrColor) }],
        notes,
      };
    },
  });
}

export const resistorColorCodeEngine = makeResistorColorCodeEngine(englishContext(en));
