import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { cleanNumberText } from "@/lib/math/numbers";
import { formatExactDecimal, parseExactDecimal, rescale, type ExactDecimal } from "@/lib/math/decimal-rounding";
import { groupDigits } from "@/lib/math/integers";
import { sciNumber } from "@/lib/math/sci-result";
import en, { type RatioText } from "./text/en";

export const MODES = ["simplify", "missing", "divide"] as const;
export type RatioMode = (typeof MODES)[number];

export type RatioValues = {
  mode: string;
  a: string;
  b: string;
  c: string;
  propA: number | null;
  propB: number | null;
  propC: number | null;
  amount: number | null;
};

function gcdBig(x: bigint, y: bigint): bigint {
  let a = x < 0n ? -x : x;
  let b = y < 0n ? -y : y;
  while (b !== 0n) [a, b] = [b, a % b];
  return a;
}

/** Scales positive decimal terms to whole numbers exactly and divides by their GCD: 1.5 : 2.25 → 2 : 3. */
export function simplifyRatio(terms: readonly ExactDecimal[]): bigint[] {
  const exp = Math.min(...terms.map((d) => d.exp));
  const ints = terms.map((d) => rescale(d, exp));
  const g = ints.reduce((acc, n) => gcdBig(acc, n), 0n);
  return ints.map((n) => n / g);
}

/** Shares of `amount` in proportion to the terms. */
export function divideAmount(amount: number, terms: readonly ExactDecimal[]): number[] {
  const parts = simplifyRatio(terms).map(Number);
  const total = parts.reduce((s, p) => s + p, 0);
  return parts.map((p) => (amount * p) / total);
}

const asMode = (v: string): RatioMode => ((MODES as readonly string[]).includes(v) ? (v as RatioMode) : "simplify");

export function makeRatioEngine(ctx: EngineContext<RatioText>) {
  const t = ctx.text;
  const read = (text: string) => parseExactDecimal(cleanNumberText(text, ctx.locale));
  const check = (text: string) => {
    const cleaned = cleanNumberText(text, ctx.locale);
    if (!/^\+?(\d+\.?\d*|\.\d+)$/.test(cleaned)) return t.termInvalid;
    const d = read(text);
    if (!d) return t.termTooLong;
    return d.coef > 0n ? undefined : t.termInvalid;
  };
  const terms = (v: RatioValues) => [v.a, v.b, v.c].filter((s) => s && s.trim() !== "").map((s) => read(s) ?? { coef: 1n, exp: 0 });
  const big = (n: bigint) => ctx.fmt.numberText(groupDigits(n));
  const sig = (x: number) => ctx.fmt.significant(x, 10);
  const termText = (d: ExactDecimal) => ctx.fmt.numberText(formatExactDecimal(d));
  const ratioModes = { field: "mode", oneOf: ["simplify", "divide"] } as const;
  const propModes = { field: "mode", oneOf: ["missing"] } as const;
  return defineEngine<RatioValues>({
    locale: ctx.locale,
    fields: [
      { id: "mode", type: "select", label: t.mode, options: MODES.map((value) => ({ value, label: t.modes[value] })), defaultValue: "simplify" },
      { id: "a", type: "text", label: t.termA, help: t.termHelp, defaultValue: "1.5", check, visibleWhen: ratioModes },
      { id: "b", type: "text", label: t.termB, help: t.termHelp, defaultValue: "2", check, visibleWhen: ratioModes },
      { id: "c", type: "text", label: t.termC, help: t.termHelp, defaultValue: "", optional: true, check, visibleWhen: ratioModes },
      { id: "propA", type: "number", label: t.propA, help: t.propHelp, defaultValue: 4, visibleWhen: propModes },
      { id: "propB", type: "number", label: t.propB, defaultValue: 7, visibleWhen: propModes },
      { id: "propC", type: "number", label: t.propC, defaultValue: 10, visibleWhen: propModes },
      { id: "amount", type: "number", label: t.amount, help: t.amountHelp, defaultValue: 700, min: 0, minExclusive: true, visibleWhen: { field: "mode", oneOf: ["divide"] } },
    ],
    validate: (v): FieldErrors => (asMode(v.mode) === "missing" && v.propA === 0 ? { propA: t.propAZero } : {}),
    compute: (v) => {
      const mode = asMode(v.mode);
      if (mode === "missing") {
        const a = v.propA ?? 1;
        const b = v.propB ?? 0;
        const c = v.propC ?? 0;
        const x = (b * c) / a;
        const n = (value: number) => ctx.fmt.significant(value, 10);
        return {
          primary: { label: t.missingTerm, value: sciNumber(ctx.fmt, x, undefined, 10), caption: fill(t.missingCaption, { a: n(a), b: n(b), c: n(c) }) },
          secondary: [
            { label: t.proportion, value: { kind: "text", text: `${n(a)} : ${n(b)} = ${n(c)} : ${n(x)}` } },
            { label: t.ratioValue, value: { kind: "text", text: n(b / a) } },
          ],
        };
      }
      const list = terms(v);
      const original = list.map(termText).join(" : ");
      const simple = simplifyRatio(list);
      const total = simple.reduce((s, p) => s + p, 0n);
      if (mode === "divide") {
        const amount = v.amount ?? 0;
        const shares = divideAmount(amount, list);
        return {
          primary: {
            label: t.shares,
            value: { kind: "text", text: shares.map((s) => ctx.fmt.number(s, 4)).join(" : ") },
            caption: fill(t.sharesCaption, { amount: ctx.fmt.number(amount, 4), ratio: original }),
          },
          secondary: [
            { label: t.simplified, value: { kind: "text", text: simple.map(big).join(" : ") } },
            { label: t.totalParts, value: { kind: "text", text: big(total) } },
          ],
          tables: [
            {
              caption: t.sharesTable,
              columns: [t.colPart, t.colTerm, t.colShare, t.colPercent],
              rows: shares.map((share, i) => ({
                label: fill(t.partN, { n: ctx.fmt.number(i + 1, 0) }),
                cells: [
                  { kind: "text", text: termText(list[i]) },
                  { kind: "number", value: share, decimals: 4 },
                  { kind: "percent", value: (Number(simple[i]) / Number(total)) * 100, decimals: 2 },
                ],
              })),
            },
          ],
        };
      }
      const [first, ...rest] = simple.map(Number);
      return {
        primary: { label: t.simplified, value: { kind: "text", text: simple.map(big).join(" : ") }, caption: fill(t.simplifiedCaption, { original }) },
        secondary: [
          { label: t.decimalValue, value: { kind: "text", text: sig(Number(simple[0]) / Number(simple[1])) } },
          { label: t.oneToN, value: { kind: "text", text: ["1", ...rest.map((r) => sig(r / first))].join(" : ") } },
          { label: t.totalParts, value: { kind: "text", text: big(total) } },
        ],
        notes: list.some((d) => d.exp < 0) ? [t.decimalNote] : [],
      };
    },
  });
}

export const ratioEngine = makeRatioEngine(englishContext(en));
