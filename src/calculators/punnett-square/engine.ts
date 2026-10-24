import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultValue } from "@/calculators/framework/types";
import en, { type PunnettText } from "./text/en";

export type PunnettValues = { parent1: string; parent2: string };

export const MAX_GENES = 2;

/** One gene of a parent: its letter (upper case) and two alleles, dominant first. */
export interface Gene {
  gene: string;
  alleles: [string, string];
}

export type GenotypeIssue =
  | { code: "invalidChar"; token: string }
  | { code: "length" }
  | { code: "pairMismatch"; token: string }
  | { code: "duplicateGene"; token: string };

export type GenotypeParse = { ok: true; genes: Gene[] } | { ok: false; issue: GenotypeIssue };

const isUpper = (ch: string) => ch === ch.toUpperCase();

/** Orders a pair so the dominant (upper-case) allele comes first: "aA" → ["A", "a"]. */
const orderPair = (a: string, b: string): [string, string] => (isUpper(b) && !isUpper(a) ? [b, a] : [a, b]);

/**
 * Parses a genotype such as "Aa" or "AaBb": one or two genes, each written as
 * two letters of the same name, upper case for the dominant allele. Spaces are ignored.
 */
export function parseGenotype(text: string): GenotypeParse {
  const s = text.replace(/\s+/g, "");
  const bad = s.match(/[^A-Za-z]/u);
  if (bad) return { ok: false, issue: { code: "invalidChar", token: bad[0] } };
  if (s.length === 0 || s.length % 2 !== 0 || s.length > MAX_GENES * 2) return { ok: false, issue: { code: "length" } };
  const genes: Gene[] = [];
  for (let i = 0; i < s.length; i += 2) {
    const a = s[i];
    const b = s[i + 1];
    if (a.toUpperCase() !== b.toUpperCase()) return { ok: false, issue: { code: "pairMismatch", token: a + b } };
    const gene = a.toUpperCase();
    if (genes.some((g) => g.gene === gene)) return { ok: false, issue: { code: "duplicateGene", token: gene } };
    genes.push({ gene, alleles: orderPair(a, b) });
  }
  return { ok: true, genes };
}

/** Parent 2's genes in parent 1's gene order, or null when the two parents do not have the same genes. */
export function alignGenes(p1: readonly Gene[], p2: readonly Gene[]): Gene[] | null {
  if (p1.length !== p2.length) return null;
  const aligned: Gene[] = [];
  for (const g of p1) {
    const match = p2.find((h) => h.gene === g.gene);
    if (!match) return null;
    aligned.push(match);
  }
  return aligned;
}

/** All 2ⁿ gametes of a parent (duplicates kept, so every gamete is equally likely), as allele lists. */
export function gametes(genes: readonly Gene[]): string[][] {
  let result: string[][] = [[]];
  for (const g of genes) result = result.flatMap((prefix) => g.alleles.map((allele) => [...prefix, allele]));
  return result;
}

/** Rank of a genotype at one gene: 0 = homozygous dominant, 1 = heterozygous, 2 = homozygous recessive. */
const pairRank = (pair: readonly [string, string]) => (isUpper(pair[0]) ? (isUpper(pair[1]) ? 0 : 1) : 2);

export interface CrossResult {
  /** Gamete labels such as "Ab". */
  rows: string[];
  columns: string[];
  /** Offspring genotype in each cell, e.g. "AaBb". */
  grid: string[][];
  /** Distinct genotypes with their cell counts, in canonical order (AA before Aa before aa, gene by gene). */
  genotypes: { genotype: string; count: number }[];
  /** Distinct phenotypes, most frequent first; `dominant[k]` tells whether gene k shows the dominant trait. */
  phenotypes: { dominant: boolean[]; count: number }[];
  /** Number of cells in the grid. */
  total: number;
}

/** Crosses two parents with the same genes, assuming complete dominance and independent assortment. */
export function cross(p1: readonly Gene[], p2Aligned: readonly Gene[]): CrossResult {
  const g1 = gametes(p1);
  const g2 = gametes(p2Aligned);
  const genotypeMap = new Map<string, { count: number; key: number[] }>();
  const phenotypeMap = new Map<string, { dominant: boolean[]; count: number }>();
  const grid = g1.map((a) =>
    g2.map((b) => {
      const pairs = a.map((allele, k) => orderPair(allele, b[k]));
      const genotype = pairs.map((p) => p.join("")).join("");
      const entry = genotypeMap.get(genotype) ?? { count: 0, key: pairs.map(pairRank) };
      entry.count++;
      genotypeMap.set(genotype, entry);
      const dominant = pairs.map((p) => isUpper(p[0]));
      const pkey = dominant.map((d) => (d ? "1" : "0")).join("");
      const pentry = phenotypeMap.get(pkey) ?? { dominant, count: 0 };
      pentry.count++;
      phenotypeMap.set(pkey, pentry);
      return genotype;
    }),
  );
  const compareKeys = (x: readonly number[], y: readonly number[]) => {
    for (let k = 0; k < x.length; k++) if (x[k] !== y[k]) return x[k] - y[k];
    return 0;
  };
  const genotypes = [...genotypeMap.entries()]
    .sort((x, y) => compareKeys(x[1].key, y[1].key))
    .map(([genotype, { count }]) => ({ genotype, count }));
  const phenotypes = [...phenotypeMap.values()].sort(
    (x, y) => y.count - x.count || compareKeys(x.dominant.map((d) => (d ? 0 : 1)), y.dominant.map((d) => (d ? 0 : 1))),
  );
  return { rows: g1.map((g) => g.join("")), columns: g2.map((g) => g.join("")), grid, genotypes, phenotypes, total: g1.length * g2.length };
}

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

/** Counts divided by their greatest common divisor. */
export function reduceRatio(counts: readonly number[]): number[] {
  const d = counts.reduce((acc, c) => gcd(acc, c), 0) || 1;
  return counts.map((c) => c / d);
}

export function makePunnettEngine(ctx: EngineContext<PunnettText>) {
  const t = ctx.text;
  const issueMessage = (issue: GenotypeIssue) => fill(t.errors[issue.code], { token: "token" in issue ? issue.token : "" });
  const check = (text: string) => {
    const parsed = parseGenotype(text);
    return parsed.ok ? undefined : issueMessage(parsed.issue);
  };
  const genesOf = (text: string) => {
    const parsed = parseGenotype(text);
    return parsed.ok ? parsed.genes : [];
  };
  const ratio = (counts: readonly number[]) => reduceRatio(counts).map((c) => ctx.fmt.number(c, 0)).join(" : ");
  const symbol = (genes: readonly Gene[], dominant: readonly boolean[]) =>
    genes.map((g, k) => (dominant[k] ? `${g.gene}_` : `${g.gene.toLowerCase()}${g.gene.toLowerCase()}`)).join("");
  const describe = (genes: readonly Gene[], dominant: readonly boolean[]) =>
    genes.map((g, k) => fill(dominant[k] ? t.dominantTrait : t.recessiveTrait, { gene: dominant[k] ? g.gene : g.gene.toLowerCase() })).join(t.listSeparator);

  return defineEngine<PunnettValues>({
    locale: ctx.locale,
    fields: [
      { id: "parent1", type: "text", label: t.parent1, help: t.parentHelp, placeholder: "AaBb", defaultValue: "AaBb", check },
      { id: "parent2", type: "text", label: t.parent2, help: t.parent2Help, placeholder: "aabb", defaultValue: "AaBb", check },
    ],
    validate: ({ parent1, parent2 }): FieldErrors => {
      const p1 = genesOf(parent1);
      const p2 = genesOf(parent2);
      if (p1.length !== p2.length) return { parent2: t.errors.geneCount };
      if (!alignGenes(p1, p2)) return { parent2: fill(t.errors.geneMismatch, { genes: p1.map((g) => g.gene).join(t.listSeparator) }) };
      return {};
    },
    compute: ({ parent1, parent2 }) => {
      const p1 = genesOf(parent1);
      const p2 = alignGenes(p1, genesOf(parent2)) ?? p1;
      const result = cross(p1, p2);
      const pct = (count: number): ResultValue => ({ kind: "percent", value: (count / result.total) * 100, decimals: 2 });
      const fraction = (count: number) => fill(t.fraction, { count: ctx.fmt.number(count, 0), total: ctx.fmt.number(result.total, 0) });
      const phenotypeSymbols = result.phenotypes.map((p) => symbol(p1, p.dominant));
      const notes = [t.note];
      if (result.phenotypes.length === 1) notes.unshift(t.singlePhenotype);
      if (p1.length === 2) notes.push(t.linkageNote);
      return {
        primary: {
          label: t.phenotypeRatio,
          value: { kind: "text", text: ratio(result.phenotypes.map((p) => p.count)) },
          caption: fill(t.caption, { order: phenotypeSymbols.join(" : ") }),
        },
        secondary: [
          { label: t.genotypeRatio, value: { kind: "text", text: ratio(result.genotypes.map((g) => g.count)) } },
          { label: t.genotypeOrder, value: { kind: "text", text: result.genotypes.map((g) => g.genotype).join(" : ") } },
          { label: t.genotypeCount, value: { kind: "number", value: result.genotypes.length, decimals: 0 } },
          { label: t.phenotypeCount, value: { kind: "number", value: result.phenotypes.length, decimals: 0 } },
          ...result.phenotypes.map((p) => ({ label: fill(t.probabilityOf, { phenotype: describe(p1, p.dominant) }), value: pct(p.count) })),
        ],
        tables: [
          {
            caption: t.gridCaption,
            columns: [t.gridCorner, ...result.columns],
            rows: result.rows.map((label, i) => ({ label, cells: result.grid[i].map((g) => ({ kind: "text", text: g }) as ResultValue) })),
          },
          {
            caption: t.genotypeTable,
            columns: [t.columns.genotype, t.columns.cells, t.columns.probability],
            rows: result.genotypes.map((g) => ({ label: g.genotype, cells: [{ kind: "text", text: fraction(g.count) }, pct(g.count)] })),
          },
          {
            caption: t.phenotypeTable,
            columns: [t.columns.phenotype, t.columns.description, t.columns.cells, t.columns.probability],
            rows: result.phenotypes.map((p, i) => ({
              label: phenotypeSymbols[i],
              cells: [{ kind: "text", text: describe(p1, p.dominant) }, { kind: "text", text: fraction(p.count) }, pct(p.count)],
            })),
          },
        ],
        notes,
      };
    },
  });
}

export const punnettEngine = makePunnettEngine(englishContext(en));
