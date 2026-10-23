import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { MAX_INPUT_MAGNITUDE } from "@/calculators/framework/evaluate";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { listError, mean, parseNumberList, sum } from "@/lib/math/data";
import { pValue, tCdf } from "@/lib/math/stats";
import en, { type CorrelationText } from "./text/en";

export type CorrelationValues = { x: string; y: string };

export const MIN_PAIRS = 3;
export const MAX_PAIRS = 10000;

/** Sums of squared deviations and cross products, using two passes for accuracy. */
export function moments(x: readonly number[], y: readonly number[]) {
  const mx = mean(x);
  const my = mean(y);
  const dx = x.map((v) => v - mx);
  const dy = y.map((v) => v - my);
  return { sxx: sum(dx.map((d) => d * d)), syy: sum(dy.map((d) => d * d)), sxy: sum(dx.map((d, i) => d * dy[i])) };
}

/** Pearson's r, clamped to [−1, 1] against rounding. NaN when either list has no variation. */
export function pearson(x: readonly number[], y: readonly number[]): number {
  const { sxx, syy, sxy } = moments(x, y);
  if (!(sxx > 0 && syy > 0)) return Number.NaN;
  return Math.max(-1, Math.min(1, sxy / Math.sqrt(sxx * syy)));
}

/** Ranks starting at 1, with tied values sharing the average of their ranks. */
export function ranks(values: readonly number[]): number[] {
  const order = values.map((v, i) => [v, i] as const).sort((a, b) => a[0] - b[0]);
  const result = new Array<number>(values.length);
  let start = 0;
  while (start < order.length) {
    let end = start;
    while (end + 1 < order.length && order[end + 1][0] === order[start][0]) end++;
    const rank = (start + end) / 2 + 1;
    for (let k = start; k <= end; k++) result[order[k][1]] = rank;
    start = end + 1;
  }
  return result;
}

/** Spearman's ρ as Pearson's r of the (average) ranks. */
export function spearman(x: readonly number[], y: readonly number[]): number {
  return pearson(ranks(x), ranks(y));
}

/** Rule-of-thumb bands for |r|. */
export function strengthOf(r: number): "negligible" | "weak" | "moderate" | "strong" | "veryStrong" | "perfect" {
  const a = Math.abs(r);
  if (a >= 1) return "perfect";
  if (a >= 0.9) return "veryStrong";
  if (a >= 0.7) return "strong";
  if (a >= 0.4) return "moderate";
  if (a >= 0.1) return "weak";
  return "negligible";
}

const PERFECT_TOLERANCE = 1e-12;

export function makeCorrelationEngine(ctx: EngineContext<CorrelationText>) {
  const t = ctx.text;
  const f = (v: number) => ctx.fmt.significant(v + 0, 10);
  const list = (text: string) => {
    const parsed = parseNumberList(text, ctx.locale);
    return parsed.ok ? parsed.values : [];
  };
  const checkList = (text: string): string | undefined => {
    const parsed = parseNumberList(text, ctx.locale);
    const problem = listError(parsed, t.errors, ctx.fmt.number(MAX_PAIRS, 0));
    if (problem || !parsed.ok) return problem;
    for (const v of parsed.values) {
      if (Math.abs(v) > MAX_INPUT_MAGNITUDE) return fill(t.tooBig, { value: f(v), max: ctx.fmt.number(MAX_INPUT_MAGNITUDE, 0) });
    }
    return undefined;
  };

  return defineEngine<CorrelationValues>({
    locale: ctx.locale,
    fields: [
      { id: "x", type: "text", multiline: true, label: t.x, help: t.xHelp, defaultValue: "2, 4, 5, 7, 8, 10", check: checkList },
      { id: "y", type: "text", multiline: true, label: t.y, help: t.yHelp, defaultValue: "51, 58, 62, 69, 70, 81", check: checkList },
    ],
    validate: ({ x, y }): FieldErrors => {
      const xs = list(x);
      const ys = list(y);
      if (xs.length !== ys.length) return { y: fill(t.countMismatch, { x: plural(ctx, xs.length, t.xCount), y: plural(ctx, ys.length, t.yCount) }) };
      if (xs.length < MIN_PAIRS) return { x: fill(t.tooFew, { min: ctx.fmt.number(MIN_PAIRS, 0) }) };
      const { sxx, syy } = moments(xs, ys);
      if (!(sxx > 0)) return { x: t.constantX };
      if (!(syy > 0)) return { y: t.constantY };
      return {};
    },
    compute: ({ x, y }) => {
      const xs = list(x);
      const ys = list(y);
      const n = xs.length;
      const df = n - 2;
      const { sxy } = moments(xs, ys);
      let r = pearson(xs, ys);
      const perfect = 1 - Math.abs(r) < PERFECT_TOLERANCE;
      if (perfect) r = Math.sign(r);
      const rho = spearman(xs, ys);
      const tValue = perfect ? Number.POSITIVE_INFINITY : r * Math.sqrt(df / (1 - r * r));
      const p = perfect ? 0 : pValue(tValue, "two", (v) => tCdf(v, df));
      const pText = perfect || p > 0 ? ctx.fmt.significant(p, 4) : `< ${ctx.fmt.significant(1e-300, 1)}`;
      const direction = r > 0 ? "positive" : r < 0 ? "negative" : "none";
      const notes = [perfect ? t.perfectNote : "", n < 10 && !perfect ? t.smallNote : "", t.note].filter(Boolean);
      return {
        primary: { label: t.pearson, value: { kind: "number", value: r + 0, decimals: 4 }, caption: fill(t.caption, { count: plural(ctx, n, t.pairCount) }) },
        secondary: [
          { label: t.rSquared, value: { kind: "number", value: r * r, decimals: 4 } },
          { label: t.tStat, value: perfect ? { kind: "text", text: t.tInfinite } : { kind: "number", value: tValue + 0, decimals: 4 } },
          { label: t.df, value: { kind: "number", value: df, decimals: 0 } },
          { label: t.pValue, value: { kind: "text", text: pText } },
          { label: t.spearman, value: { kind: "number", value: rho + 0, decimals: 4 } },
          { label: t.covariance, value: { kind: "text", text: f(sxy / (n - 1)) } },
          { label: t.strength, value: { kind: "text", text: fill(t.describe, { strength: t.strengths[strengthOf(r)], direction: t.directions[direction] }) } },
        ],
        notes,
      };
    },
  });
}

export const correlationEngine = makeCorrelationEngine(englishContext(en));
