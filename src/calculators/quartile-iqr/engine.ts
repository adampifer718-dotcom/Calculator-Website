import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { MAX_DATA_POINTS, listError, parseNumberList } from "@/lib/math/data";
import en, { type QuartileText } from "./text/en";

export const METHODS = ["inclusive", "exclusive"] as const;
export type QuartileMethod = (typeof METHODS)[number];

export type QuartileValues = { data: string; method: string };

export const MIN_VALUES = 4;
/** Outliers listed by value; any beyond this are counted. */
export const MAX_LISTED_OUTLIERS = 50;

/** Linear-interpolation quantile of sorted data (R type 7, Excel QUARTILE.INC, NumPy's default): h = (n − 1)p. */
export function quantileInclusive(sorted: readonly number[], p: number): number {
  const h = (sorted.length - 1) * p;
  const lo = Math.floor(h);
  const hi = Math.min(lo + 1, sorted.length - 1);
  return sorted[lo] + (h - lo) * (sorted[hi] - sorted[lo]);
}

function medianSorted(sorted: readonly number[]): number {
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

export interface FiveNumberSummary {
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
}

/** Five-number summary of unsorted data with either quartile method. */
export function fiveNumberSummary(values: readonly number[], method: QuartileMethod): FiveNumberSummary {
  const sorted = [...values].sort((a, b) => a - b);
  const n = sorted.length;
  const median = medianSorted(sorted);
  let q1: number;
  let q3: number;
  if (method === "inclusive") {
    q1 = quantileInclusive(sorted, 0.25);
    q3 = quantileInclusive(sorted, 0.75);
  } else {
    // Lower and upper halves; for odd n the middle value belongs to neither.
    const half = Math.floor(n / 2);
    q1 = medianSorted(sorted.slice(0, half));
    q3 = medianSorted(sorted.slice(n - half));
  }
  return { min: sorted[0], q1, median, q3, max: sorted[n - 1] };
}

/** Tukey fences at 1.5 × IQR and the values outside them, in ascending order. */
export function fences(values: readonly number[], s: FiveNumberSummary) {
  const iqr = s.q3 - s.q1;
  const lower = s.q1 - 1.5 * iqr;
  const upper = s.q3 + 1.5 * iqr;
  const outliers = values.filter((v) => v < lower || v > upper).sort((a, b) => a - b);
  return { iqr, lower, upper, outliers };
}

const asMethod = (v: string): QuartileMethod => ((METHODS as readonly string[]).includes(v) ? (v as QuartileMethod) : "inclusive");

export function makeQuartileEngine(ctx: EngineContext<QuartileText>) {
  const t = ctx.text;
  const f = (x: number) => ctx.fmt.significant(x + 0, 10);
  const list = (text: string) => {
    const parsed = parseNumberList(text, ctx.locale);
    return parsed.ok ? parsed.values : [];
  };
  const separator = ctx.locale === "ar" || ctx.locale === "ur" ? "، " : ", ";
  return defineEngine<QuartileValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "data",
        type: "text",
        multiline: true,
        label: t.data,
        help: t.dataHelp,
        defaultValue: "12, 15, 17, 18, 21, 22, 24, 26, 29, 31, 58",
        check: (text) => {
          const parsed = parseNumberList(text, ctx.locale);
          const problem = listError(parsed, t.errors, ctx.fmt.number(MAX_DATA_POINTS, 0));
          if (problem || !parsed.ok) return problem;
          if (parsed.values.length < MIN_VALUES) return fill(t.tooFew, { count: ctx.fmt.number(parsed.values.length, 0) });
          return undefined;
        },
      },
      { id: "method", type: "select", label: t.method, help: t.methodHelp, options: METHODS.map((value) => ({ value, label: t.methods[value] })), defaultValue: "inclusive" },
    ],
    compute: ({ data, method }) => {
      const values = list(data);
      const m = asMethod(method);
      const s = fiveNumberSummary(values, m);
      const fence = fences(values, s);
      const shown = fence.outliers.slice(0, MAX_LISTED_OUTLIERS).map(f).join(separator);
      const extra = fence.outliers.length - MAX_LISTED_OUTLIERS;
      const outlierText = fence.outliers.length === 0 ? t.noOutliers : extra > 0 ? fill(t.moreOutliers, { list: shown, count: ctx.fmt.number(extra, 0) }) : shown;
      return {
        primary: { label: t.iqr, value: { kind: "text", text: f(fence.iqr) }, caption: fill(t.caption, { count: plural(ctx, values.length, t.valueCount), method: t.methodShort[m] }) },
        secondary: [
          { label: t.q1, value: { kind: "text", text: f(s.q1) } },
          { label: t.median, value: { kind: "text", text: f(s.median) } },
          { label: t.q3, value: { kind: "text", text: f(s.q3) } },
          { label: t.lowerFence, value: { kind: "text", text: f(fence.lower) } },
          { label: t.upperFence, value: { kind: "text", text: f(fence.upper) } },
          { label: t.outlierCount, value: { kind: "number", value: fence.outliers.length, decimals: 0 } },
          { label: t.outliers, value: { kind: "text", text: outlierText } },
        ],
        tables: [
          {
            caption: t.summaryTable,
            columns: [t.colStatistic, t.colValue],
            rows: [
              { label: t.min, cells: [{ kind: "text", text: f(s.min) }] },
              { label: t.q1, cells: [{ kind: "text", text: f(s.q1) }] },
              { label: t.median, cells: [{ kind: "text", text: f(s.median) }] },
              { label: t.q3, cells: [{ kind: "text", text: f(s.q3) }] },
              { label: t.max, cells: [{ kind: "text", text: f(s.max) }] },
            ],
          },
        ],
        notes: [fence.outliers.length === 0 ? t.noOutliersNote : t.outliersNote],
      };
    },
  });
}

export const quartileEngine = makeQuartileEngine(englishContext(en));
