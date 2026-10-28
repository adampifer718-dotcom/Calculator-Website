import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type ResultItem } from "@/calculators/framework/types";
import en, { type DnaToMrnaText } from "./text/en";

export const MAX_BASES = 20000;

/**
 * The standard genetic code (NCBI translation table 1), written as on the NCBI
 * "Genetic Codes" page: codon i has bases BASE1[i], BASE2[i], BASE3[i] (T, C, A, G order).
 */
const AAS = "FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG";
const ORDER = "UCAG";

/** Codon (RNA letters) → one-letter amino acid code, "*" for stop. */
export const CODON_TABLE: Readonly<Record<string, string>> = (() => {
  const table: Record<string, string> = {};
  for (let i = 0; i < 64; i++) table[ORDER[i >> 4] + ORDER[(i >> 2) & 3] + ORDER[i & 3]] = AAS[i];
  return table;
})();

export const THREE_LETTER: Readonly<Record<string, string>> = {
  A: "Ala", R: "Arg", N: "Asn", D: "Asp", C: "Cys", Q: "Gln", E: "Glu", G: "Gly", H: "His", I: "Ile",
  L: "Leu", K: "Lys", M: "Met", F: "Phe", P: "Pro", S: "Ser", T: "Thr", W: "Trp", Y: "Tyr", V: "Val", "*": "Ter",
};

export type SequenceIssue = { code: "invalidChar"; char: string; position: number } | { code: "empty" } | { code: "tooLong" };
export type SequenceParse = { ok: true; dna: string } | { ok: false; issue: SequenceIssue };

/** Reads a DNA sequence: A/C/G/T in any case; whitespace and digits are skipped. Positions are 1-based characters of the text. */
export function parseDna(text: string): SequenceParse {
  let dna = "";
  const chars = Array.from(text);
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (/[\s0-9]/u.test(ch)) continue;
    const upper = ch.toUpperCase();
    if (!"ACGT".includes(upper)) return { ok: false, issue: { code: "invalidChar", char: ch, position: i + 1 } };
    dna += upper;
  }
  if (dna.length === 0) return { ok: false, issue: { code: "empty" } };
  if (dna.length > MAX_BASES) return { ok: false, issue: { code: "tooLong" } };
  return { ok: true, dna };
}

const COMPLEMENT: Record<string, string> = { A: "T", T: "A", C: "G", G: "C" };

export function reverseComplement(dna: string): string {
  let out = "";
  for (let i = dna.length - 1; i >= 0; i--) out += COMPLEMENT[dna[i]];
  return out;
}

/** mRNA 5′→3′: the coding strand with U for T, or the reverse complement of the template strand with U for T. */
export function transcribe(dna: string, strand: "coding" | "template"): string {
  return (strand === "coding" ? dna : reverseComplement(dna)).replace(/T/g, "U");
}

export interface Translation {
  /** One-letter codes, "*" for read-through stops. The terminating stop is not included. */
  protein: string;
  codonsTranslated: number;
  /** 1-based codon number and codon of the stop that ended translation, if any. */
  stop: { index: number; codon: string } | null;
}

/** Translates the mRNA from `start` (0-based), stopping at the first stop codon unless `readThrough`. */
export function translate(mrna: string, start: number, readThrough: boolean): Translation {
  let protein = "";
  let n = 0;
  for (let i = start; i + 3 <= mrna.length; i += 3) {
    const codon = mrna.slice(i, i + 3);
    const aa = CODON_TABLE[codon];
    n++;
    if (aa === "*" && !readThrough) return { protein, codonsTranslated: n, stop: { index: n, codon } };
    protein += aa;
  }
  return { protein, codonsTranslated: n, stop: null };
}

/** The mRNA split into codons from `start`, with any bases before it as one leading group. */
export function groupCodons(mrna: string, start: number): string {
  const groups: string[] = [];
  if (start > 0) groups.push(mrna.slice(0, start));
  for (let i = start; i < mrna.length; i += 3) groups.push(mrna.slice(i, i + 3));
  return groups.join(" ");
}

export function gcPercent(dna: string): number {
  let gc = 0;
  for (const ch of dna) if (ch === "G" || ch === "C") gc++;
  return (gc / dna.length) * 100;
}

export type DnaToMrnaValues = { sequence: string; strand: string; frame: string; stops: string };

export function makeDnaToMrnaEngine(ctx: EngineContext<DnaToMrnaText>) {
  const t = ctx.text;
  const issueText = (issue: SequenceIssue) =>
    issue.code === "invalidChar"
      ? fill(t.errors.invalidChar, { char: issue.char, position: ctx.fmt.number(issue.position, 0) })
      : issue.code === "empty"
        ? t.errors.empty
        : fill(t.errors.tooLong, { max: ctx.fmt.number(MAX_BASES, 0) });
  const strandOf = (v: string) => (v === "template" ? "template" : "coding");
  const mrnaOf = (v: DnaToMrnaValues) => {
    const parsed = parseDna(v.sequence);
    return parsed.ok ? { dna: parsed.dna, mrna: transcribe(parsed.dna, strandOf(v.strand)) } : null;
  };
  return defineEngine<DnaToMrnaValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "sequence",
        type: "text",
        multiline: true,
        label: t.sequence,
        help: t.sequenceHelp,
        defaultValue: "ATGGCTTCAAAGCTGTGA",
        check: (text) => {
          const parsed = parseDna(text);
          return parsed.ok ? undefined : issueText(parsed.issue);
        },
      },
      { id: "strand", type: "select", label: t.strand, options: (["coding", "template"] as const).map((value) => ({ value, label: t.strands[value] })), defaultValue: "coding" },
      { id: "frame", type: "select", label: t.frame, options: (["first", "aug"] as const).map((value) => ({ value, label: t.frames[value] })), defaultValue: "first" },
      { id: "stops", type: "select", label: t.stops, options: (["stop", "readThrough"] as const).map((value) => ({ value, label: t.stopModes[value] })), defaultValue: "stop" },
    ],
    validate: (v) => {
      const m = mrnaOf(v);
      if (m && v.frame === "aug" && !m.mrna.includes("AUG")) return { frame: t.errors.noAug };
      return {};
    },
    compute: (v) => {
      const { dna, mrna } = mrnaOf(v) ?? { dna: "A", mrna: "A" };
      const start = v.frame === "aug" ? Math.max(0, mrna.indexOf("AUG")) : 0;
      const readThrough = v.stops === "readThrough";
      const tr = translate(mrna, start, readThrough);
      const inFrame = Math.floor((mrna.length - start) / 3);
      const leftover = (mrna.length - start) % 3;
      const three = Array.from(tr.protein, (aa) => THREE_LETTER[aa]).join("-");
      const secondary: ResultItem[] = [
        { label: t.proteinOne, value: { kind: "text", text: tr.protein || t.noProtein } },
        { label: t.proteinThree, value: { kind: "text", text: three || t.noProtein } },
        { label: t.complement, value: { kind: "text", text: reverseComplement(dna) } },
        { label: t.length, value: { kind: "number", value: mrna.length, decimals: 0, suffix: t.bases } },
        { label: t.codonsInFrame, value: { kind: "number", value: inFrame, decimals: 0 } },
        { label: t.codonsTranslated, value: { kind: "number", value: tr.codonsTranslated, decimals: 0 } },
        { label: t.aminoAcids, value: { kind: "number", value: tr.protein.length, decimals: 0 } },
        { label: t.gc, value: { kind: "percent", value: gcPercent(dna), decimals: 2 } },
      ];
      const notes: string[] = [];
      if (strandOf(v.strand) === "template") notes.push(t.notes.template);
      if (v.frame === "aug") notes.push(fill(t.notes.augStart, { position: ctx.fmt.number(start + 1, 0) }));
      if (tr.stop) notes.push(fill(t.notes.stopped, { codon: ctx.fmt.number(tr.stop.index, 0), stop: tr.stop.codon }));
      else if (readThrough && tr.protein.includes("*")) notes.push(t.notes.readThrough);
      else notes.push(t.notes.noStop);
      if (leftover > 0 && (readThrough || !tr.stop)) notes.push(plural(ctx, leftover, t.notes.leftover));
      notes.push(t.notes.general);
      return {
        primary: { label: t.result, value: { kind: "text", text: groupCodons(mrna, start) }, caption: t.caption },
        secondary,
        notes,
      };
    },
  });
}

export const dnaToMrnaEngine = makeDnaToMrnaEngine(englishContext(en));
