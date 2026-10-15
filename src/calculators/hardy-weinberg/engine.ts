import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type CalculationResult, type FieldErrors } from "@/calculators/framework/types";
import { sciNumber } from "@/lib/math/sci-result";
import { erfc } from "@/lib/math/stats";
import en, { type HardyWeinbergText } from "./text/en";

export type HardyWeinbergValues = { mode: string; q2: number | null; countAA: number | null; countAa: number | null; countaa: number | null };

export interface HardyWeinbergTest {
  n: number;
  p: number;
  q: number;
  expected: [number, number, number];
  /** Null when only one allele is present and the test does not apply. */
  chiSquare: number | null;
  pValue: number | null;
}

/** Allele frequencies, expected counts and the 1-df chi-square test from observed genotype counts. */
export function hardyWeinbergTest(AA: number, Aa: number, aa: number): HardyWeinbergTest {
  const n = AA + Aa + aa;
  const p = (2 * AA + Aa) / (2 * n);
  const q = 1 - p;
  const expected: [number, number, number] = [p * p * n, 2 * p * q * n, q * q * n];
  if (p === 0 || q === 0) return { n, p, q, expected, chiSquare: null, pValue: null };
  const chiSquare = [AA, Aa, aa].reduce((sum, o, i) => sum + (o - expected[i]) ** 2 / expected[i], 0);
  return { n, p, q, expected, chiSquare, pValue: Math.min(1, erfc(Math.sqrt(chiSquare / 2))) };
}

const count = { min: 0, integer: true } as const;

export function makeHardyWeinbergEngine(ctx: EngineContext<HardyWeinbergText>) {
  const t = ctx.text;
  const counts = { field: "mode", oneOf: ["counts"] };
  const freq = (v: number) => ({ kind: "number" as const, value: v, decimals: 6 });
  return defineEngine<HardyWeinbergValues>({
    locale: ctx.locale,
    fields: [
      { id: "mode", type: "select", label: t.mode, options: (["phenotype", "counts"] as const).map((value) => ({ value, label: t.modeOptions[value] })), defaultValue: "phenotype", display: "segmented" },
      { id: "q2", type: "number", label: t.q2, help: t.q2Help, defaultValue: 16, min: 0, max: 100, suffix: "%", visibleWhen: { field: "mode", oneOf: ["phenotype"] } },
      { id: "countAA", type: "number", label: t.countAA, defaultValue: 380, ...count, visibleWhen: counts },
      { id: "countAa", type: "number", label: t.countAa, defaultValue: 440, ...count, visibleWhen: counts },
      { id: "countaa", type: "number", label: t.countaa, defaultValue: 180, ...count, visibleWhen: counts },
    ],
    validate: ({ mode, countAA, countAa, countaa }): FieldErrors =>
      mode === "counts" && (countAA ?? 0) + (countAa ?? 0) + (countaa ?? 0) <= 0 ? { countAA: t.noIndividuals } : {},
    compute: ({ mode, q2, countAA, countAa, countaa }): CalculationResult => {
      if (mode === "counts") {
        const observed = [countAA ?? 0, countAa ?? 0, countaa ?? 0] as const;
        const r = hardyWeinbergTest(...observed);
        const notes = [t.countsNote];
        const secondary: CalculationResult["secondary"] = [
          { label: t.allelea, value: freq(r.q) },
          { label: t.total, value: { kind: "number", value: r.n, decimals: 0 } },
        ];
        if (r.chiSquare === null || r.pValue === null) {
          notes.unshift(t.monomorphic);
        } else {
          secondary.push(
            { label: t.chiSquare, value: { kind: "number", value: r.chiSquare, decimals: 4 } },
            { label: t.pValue, value: sciNumber(ctx.fmt, r.pValue, undefined, 4) },
            { label: t.verdict, value: { kind: "text", text: r.pValue < 0.05 ? t.departure : t.consistent } },
          );
          if (r.expected.some((e) => e < 5)) notes.unshift(t.smallExpected);
        }
        return {
          primary: { label: t.alleleA, value: freq(r.p) },
          secondary,
          tables: [
            {
              caption: t.countsCaption,
              columns: [t.colGenotype, t.colObserved, t.colExpected],
              rows: (["AA", "Aa", "aa"] as const).map((g, i) => ({
                label: t.genotypes[g],
                cells: [
                  { kind: "number", value: observed[i], decimals: 0 },
                  { kind: "number", value: r.expected[i], decimals: 2 },
                ],
              })),
            },
          ],
          notes,
        };
      }
      const qq = (q2 ?? 0) / 100;
      const q = Math.sqrt(qq);
      const p = 1 - q;
      const freqs = { AA: p * p, Aa: 2 * p * q, aa: qq };
      return {
        primary: { label: t.carrier, value: { kind: "percent", value: freqs.Aa * 100, decimals: 4 } },
        secondary: [
          { label: t.carrierRatio, value: { kind: "text", text: freqs.Aa > 0 ? fill(t.oneIn, { n: ctx.fmt.number(1 / freqs.Aa, 1) }) : t.none } },
          { label: t.alleleA, value: freq(p) },
          { label: t.allelea, value: freq(q) },
        ],
        tables: [
          {
            caption: t.frequencyCaption,
            columns: [t.colGenotype, t.colFrequency, t.colPercent],
            rows: (["AA", "Aa", "aa"] as const).map((g) => ({
              label: t.genotypes[g],
              cells: [freq(freqs[g]), { kind: "percent", value: freqs[g] * 100, decimals: 4 }],
              highlight: g === "Aa",
            })),
          },
        ],
        notes: [t.phenotypeNote],
      };
    },
  });
}

export const hardyWeinbergEngine = makeHardyWeinbergEngine(englishContext(en));
