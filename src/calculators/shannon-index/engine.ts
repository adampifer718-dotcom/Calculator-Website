import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type ResultItem, type ResultValue } from "@/calculators/framework/types";
import { MAX_DATA_POINTS, listError, parseNumberList, sum } from "@/lib/math/data";
import en, { type ShannonIndexText } from "./text/en";

export const MAX_COUNT = 1e12;
export const MAX_TABLE_ROWS = 200;

const BASES = ["e", "2", "10"] as const;
type Base = (typeof BASES)[number];

const logIn = (base: Base) => (base === "e" ? Math.log : base === "2" ? Math.log2 : Math.log10);
const baseValue = (base: Base) => (base === "e" ? Math.E : Number(base));

export interface Diversity {
  /** Number of species with at least one individual. */
  richness: number;
  /** Total individuals. */
  total: number;
  shannon: number;
  /** H′ ÷ log S, or null when S < 2. */
  evenness: number | null;
  /** base^H′ (Hill number of order 1). */
  effective: number;
  /** Σ n(n − 1) ÷ (N(N − 1)), or null when N < 2. */
  simpson: number | null;
}

/** Shannon and Simpson diversity of non-negative integer counts; zero counts are skipped. */
export function diversity(counts: readonly number[], base: Base = "e"): Diversity {
  const present = counts.filter((n) => n > 0);
  const total = sum(present);
  const log = logIn(base);
  const shannon = present.length < 2 ? 0 : -sum(present.map((n) => (n / total) * log(n / total)));
  const evenness = present.length >= 2 ? shannon / log(present.length) : null;
  const simpson = total >= 2 ? sum(present.map((n) => n * (n - 1))) / (total * (total - 1)) : null;
  return { richness: present.length, total, shannon, evenness, effective: baseValue(base) ** shannon, simpson };
}

export type ShannonIndexValues = { counts: string; base: string };

export function makeShannonIndexEngine(ctx: EngineContext<ShannonIndexText>) {
  const t = ctx.text;
  const countsOf = (text: string) => {
    const parsed = parseNumberList(text, ctx.locale);
    return parsed.ok ? parsed.values : [];
  };
  const check = (text: string) => {
    const parsed = parseNumberList(text, ctx.locale);
    const listIssue = listError(parsed, t.errors, ctx.fmt.number(MAX_DATA_POINTS, 0));
    if (listIssue || !parsed.ok) return listIssue;
    for (const n of parsed.values) {
      if (n < 0) return fill(t.errors.negative, { value: ctx.fmt.significant(n, 10) });
      if (!Number.isInteger(n)) return fill(t.errors.notInteger, { value: ctx.fmt.significant(n, 10) });
      if (n > MAX_COUNT) return fill(t.errors.countTooLarge, { max: ctx.fmt.significant(MAX_COUNT, 3) });
    }
    if (!parsed.values.some((n) => n > 0)) return t.errors.allZero;
    return undefined;
  };
  const na: ResultValue = { kind: "text", text: t.notAvailable };
  return defineEngine<ShannonIndexValues>({
    locale: ctx.locale,
    fields: [
      { id: "counts", type: "text", multiline: true, label: t.counts, help: t.countsHelp, defaultValue: "42, 27, 15, 9, 5, 2", check },
      { id: "base", type: "select", label: t.base, options: BASES.map((value) => ({ value, label: t.bases[value] })), defaultValue: "e" },
    ],
    compute: (v) => {
      const base: Base = (BASES as readonly string[]).includes(v.base) ? (v.base as Base) : "e";
      const counts = countsOf(v.counts);
      const d = diversity(counts, base);
      const log = logIn(base);
      const zeros = counts.filter((n) => n === 0).length;
      const notes: string[] = [];
      const secondary: ResultItem[] = [
        { label: t.richness, value: { kind: "number", value: d.richness, decimals: 0 } },
        { label: t.total, value: { kind: "number", value: d.total, decimals: 0 } },
        { label: t.evenness, value: d.evenness === null ? na : { kind: "number", value: d.evenness, decimals: 4 } },
        { label: t.effective, value: { kind: "number", value: d.effective, decimals: 3 } },
        { label: t.simpson, value: d.simpson === null ? na : { kind: "number", value: d.simpson, decimals: 4 } },
        { label: t.giniSimpson, value: d.simpson === null ? na : { kind: "number", value: 1 - d.simpson, decimals: 4 } },
        { label: t.inverseSimpson, value: d.simpson === null || d.simpson === 0 ? na : { kind: "number", value: 1 / d.simpson, decimals: 4 } },
      ];
      if (zeros > 0) notes.push(fill(t.notes.zeros, { count: ctx.fmt.number(zeros, 0) }));
      if (d.richness < 2) notes.push(t.notes.single);
      if (d.simpson === null) notes.push(t.notes.simpsonUndefined);
      else if (d.simpson === 0) notes.push(t.notes.simpsonZero);
      const rows = counts
        .map((n, i) => ({ n, i }))
        .filter(({ n }) => n > 0);
      if (rows.length > MAX_TABLE_ROWS) notes.push(fill(t.notes.truncated, { shown: ctx.fmt.number(MAX_TABLE_ROWS, 0) }));
      notes.push(t.notes.general);
      return {
        primary: { label: t.result, value: { kind: "number", value: d.shannon, decimals: 4 }, caption: fill(t.caption, { log: t.logNames[base] }) },
        secondary,
        tables: [
          {
            caption: t.table.caption,
            columns: [t.table.species, t.table.count, t.table.proportion, t.table.term],
            rows: rows.slice(0, MAX_TABLE_ROWS).map(({ n, i }) => {
              const p = n / d.total;
              return {
                label: fill(t.table.label, { n: ctx.fmt.number(i + 1, 0) }),
                cells: [
                  { kind: "number", value: n, decimals: 0 },
                  { kind: "number", value: p, decimals: 4 },
                  { kind: "number", value: p === 1 ? 0 : -p * log(p), decimals: 4 },
                ],
              };
            }),
          },
        ],
        notes,
      };
    },
  });
}

export const shannonIndexEngine = makeShannonIndexEngine(englishContext(en));
