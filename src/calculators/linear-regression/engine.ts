import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { MAX_INPUT_MAGNITUDE } from "@/calculators/framework/evaluate";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import { listError, mean, parseNumberList, sum } from "@/lib/math/data";
import { pValue, tCdf } from "@/lib/math/stats";
import en, { type LinearRegressionText } from "./text/en";

export type LinearRegressionValues = { x: string; y: string; x0: number | null };

export const MIN_PAIRS = 3;
export const MAX_PAIRS = 10000;

export interface RegressionFit {
  n: number;
  slope: number;
  intercept: number;
  sxx: number;
  syy: number;
  sxy: number;
  /** Residual sum of squares. */
  sse: number;
  /** Residual standard error √(SSE ÷ (n − 2)). */
  residualSe: number;
  /** Standard error of the slope, residualSe ÷ √Sxx. */
  slopeSe: number;
  /** Pearson's r, NaN when every y is equal. */
  r: number;
  minX: number;
  maxX: number;
}

/** Ordinary least squares fit of y = a + b·x, using centred sums and residuals computed directly. */
export function fitLine(x: readonly number[], y: readonly number[]): RegressionFit {
  const n = x.length;
  const mx = mean(x);
  const my = mean(y);
  const dx = x.map((v) => v - mx);
  const dy = y.map((v) => v - my);
  const sxx = sum(dx.map((d) => d * d));
  const syy = sum(dy.map((d) => d * d));
  const sxy = sum(dx.map((d, i) => d * dy[i]));
  const slope = sxy / sxx;
  const intercept = my - slope * mx;
  const sse = sum(dy.map((d, i) => (d - slope * dx[i]) ** 2));
  const residualSe = Math.sqrt(sse / (n - 2));
  const r = syy > 0 ? Math.max(-1, Math.min(1, sxy / Math.sqrt(sxx * syy))) : Number.NaN;
  return { n, slope, intercept, sxx, syy, sxy, sse, residualSe, slopeSe: residualSe / Math.sqrt(sxx), r, minX: Math.min(...x), maxX: Math.max(...x) };
}

/** Residuals this small relative to the spread of y count as an exact straight line. */
const PERFECT_TOLERANCE = 1e-24;

export function makeLinearRegressionEngine(ctx: EngineContext<LinearRegressionText>) {
  const t = ctx.text;
  const f = (v: number, digits = 10) => ctx.fmt.significant(v + 0, digits);
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
  const equation = (a: number, b: number) =>
    fill(t.equation, { a: f(a, 6), sign: b < 0 ? "−" : "+", b: f(Math.abs(b), 6) });

  return defineEngine<LinearRegressionValues>({
    locale: ctx.locale,
    fields: [
      { id: "x", type: "text", multiline: true, label: t.x, help: t.xHelp, defaultValue: "1, 2, 3, 4, 5, 6, 7, 8", check: checkList },
      { id: "y", type: "text", multiline: true, label: t.y, help: t.yHelp, defaultValue: "52, 55, 61, 64, 68, 73, 75, 81", check: checkList },
      { id: "x0", type: "number", label: t.x0, help: t.x0Help, defaultValue: null, optional: true },
    ],
    validate: ({ x, y }): FieldErrors => {
      const xs = list(x);
      const ys = list(y);
      if (xs.length !== ys.length) return { y: fill(t.countMismatch, { x: plural(ctx, xs.length, t.xCount), y: plural(ctx, ys.length, t.yCount) }) };
      if (xs.length < MIN_PAIRS) return { x: fill(t.tooFew, { min: ctx.fmt.number(MIN_PAIRS, 0) }) };
      if (!(fitLine(xs, ys).sxx > 0)) return { x: t.constantX };
      return {};
    },
    compute: ({ x, y, x0 }) => {
      const xs = list(x);
      const ys = list(y);
      const fit = fitLine(xs, ys);
      const df = fit.n - 2;
      const constantY = !(fit.syy > 0);
      const perfect = !constantY && fit.sse <= PERFECT_TOLERANCE * fit.syy;
      const notes: string[] = [];
      const tValue = fit.slope / fit.slopeSe;
      const p = pValue(tValue, "two", (v) => tCdf(v, df));
      const notDefined = { kind: "text", text: t.notDefined } as const;
      const secondary: ResultItem[] = [
        { label: t.slope, value: { kind: "text", text: f(fit.slope) } },
        { label: t.intercept, value: { kind: "text", text: f(fit.intercept) } },
        constantY ? { label: t.rSquared, value: notDefined } : { label: t.rSquared, value: { kind: "number", value: perfect ? 1 : fit.r * fit.r, decimals: 4 } },
        constantY ? { label: t.r, value: notDefined } : { label: t.r, value: { kind: "number", value: perfect ? Math.sign(fit.r) : fit.r + 0, decimals: 4 } },
        { label: t.slopeSe, value: { kind: "text", text: perfect || constantY ? f(0) : f(fit.slopeSe) } },
        constantY
          ? { label: t.tStat, value: notDefined }
          : { label: t.tStat, value: perfect ? { kind: "text", text: t.tInfinite } : { kind: "number", value: tValue + 0, decimals: 4 } },
        { label: t.df, value: { kind: "number", value: df, decimals: 0 } },
        constantY
          ? { label: t.pValue, value: notDefined }
          : { label: t.pValue, value: { kind: "text", text: perfect ? f(0) : p > 0 ? ctx.fmt.significant(p, 4) : `< ${ctx.fmt.significant(1e-300, 1)}` } },
        { label: t.residualSe, value: { kind: "text", text: perfect || constantY ? f(0) : f(fit.residualSe) } },
      ];
      if (x0 !== null) {
        const yHat = fit.intercept + fit.slope * x0;
        secondary.push({ label: fill(t.prediction, { x0: f(x0) }), value: { kind: "text", text: f(yHat) } });
        if (x0 < fit.minX || x0 > fit.maxX) notes.push(t.extrapolationNote);
      }
      if (perfect) notes.push(t.perfectNote);
      if (constantY) notes.push(t.constantYNote);
      notes.push(t.note);
      return {
        primary: { label: t.equationLabel, value: { kind: "text", text: equation(fit.intercept, fit.slope) }, caption: fill(t.caption, { count: plural(ctx, fit.n, t.pairCount) }) },
        secondary,
        notes,
      };
    },
  });
}

export const linearRegressionEngine = makeLinearRegressionEngine(englishContext(en));
