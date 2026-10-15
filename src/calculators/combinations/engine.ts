import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { groupDigits } from "@/lib/math/integers";
import en, { type CombinationsText } from "./text/en";

export type CombinationsValues = { n: number; r: number };

export const MAX_N = 10000;
/** Results with more digits than this are shown in scientific notation. */
export const MAX_EXACT_DIGITS = 30;

/** Product lo × (lo + 1) × … × hi as a bigint, split in halves so the operands stay balanced (fast for long products). */
function rangeProduct(lo: number, hi: number): bigint {
  if (lo > hi) return 1n;
  if (hi - lo < 16) {
    let p = 1n;
    for (let i = lo; i <= hi; i++) p *= BigInt(i);
    return p;
  }
  const mid = Math.floor((lo + hi) / 2);
  return rangeProduct(lo, mid) * rangeProduct(mid + 1, hi);
}

/** Exact binomial coefficient C(n, k) = n(n − 1)…(n − m + 1) ÷ m! with m = min(k, n − k). */
export function binomial(n: number, k: number): bigint {
  if (k < 0 || k > n) return 0n;
  const m = Math.min(k, n - k);
  return rangeProduct(n - m + 1, n) / rangeProduct(1, m);
}

/** Exact falling factorial nPr = n × (n − 1) × … × (n − r + 1). */
export function permutations(n: number, r: number): bigint {
  if (r < 0 || r > n) return 0n;
  return rangeProduct(n - r + 1, n);
}

/** Multisets of size r from n kinds: C(n + r − 1, r), with C(−1, 0) = 1 for n = r = 0. */
export function combinationsWithRepetition(n: number, r: number): bigint {
  if (n === 0) return r === 0 ? 1n : 0n;
  return binomial(n + r - 1, r);
}

const SUPERSCRIPT: Record<string, string> = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹" };

/** Mantissa (1 ≤ m < 10, rounded half up to 7 significant digits) and exponent of a positive bigint, read from its digits. */
export function scientificParts(value: bigint): { mantissa: number; exponent: number; digits: number } {
  const s = value.toString();
  let exponent = s.length - 1;
  let lead = Math.floor((Number(s.slice(0, 8).padEnd(8, "0")) + 5) / 10);
  if (lead >= 1e7) {
    lead = Math.round(lead / 10);
    exponent += 1;
  }
  return { mantissa: lead / 1e6, exponent, digits: s.length };
}

export function makeCombinationsEngine(ctx: EngineContext<CombinationsText>) {
  const t = ctx.text;
  const show = (value: bigint): string => {
    const digits = value.toString().length;
    if (digits <= MAX_EXACT_DIGITS) return ctx.fmt.numberText(groupDigits(value));
    const { mantissa, exponent } = scientificParts(value);
    const sci = `${ctx.fmt.number(mantissa, 6)} × 10${String(exponent)
      .split("")
      .map((d) => SUPERSCRIPT[d])
      .join("")}`;
    return fill(t.large, { value: sci, digits: plural(ctx, digits, t.digits) });
  };
  return defineEngine<CombinationsValues>({
    locale: ctx.locale,
    fields: [
      { id: "n", type: "number", label: t.n, help: t.nHelp, defaultValue: 10, min: 0, max: MAX_N, integer: true },
      { id: "r", type: "number", label: t.r, help: t.rHelp, defaultValue: 3, min: 0, max: MAX_N, integer: true },
    ],
    validate: ({ n, r }): FieldErrors => (r > n ? { r: fill(t.rTooLarge, { n: ctx.fmt.number(n, 0) }) } : {}),
    compute: ({ n, r }) => {
      const results = [binomial(n, r), permutations(n, r), combinationsWithRepetition(n, r), BigInt(n) ** BigInt(r)];
      const [nCr, nPr, withRepetition, power] = results;
      const notes: string[] = [];
      if (results.some((v) => v.toString().length > MAX_EXACT_DIGITS)) notes.push(t.largeNote);
      if (n === 0) notes.push(t.zeroRepeat);
      return {
        primary: {
          label: t.combinations,
          value: { kind: "text", text: show(nCr) },
          caption: fill(t.caption, { r: ctx.fmt.number(r, 0), n: ctx.fmt.number(n, 0) }),
        },
        secondary: [
          { label: t.permutations, value: { kind: "text", text: show(nPr) } },
          { label: t.combinationsRepeat, value: { kind: "text", text: show(withRepetition) } },
          { label: t.permutationsRepeat, value: { kind: "text", text: show(power) } },
        ],
        notes: notes.length ? notes : undefined,
      };
    },
  });
}

export const combinationsEngine = makeCombinationsEngine(englishContext(en));
