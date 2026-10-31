import { describe, expect, it } from "vitest";
import { evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import { engineContext } from "./framework/i18n";
import type { AnyEngine, CalculatorDefinition, EngineValues, ResultValue } from "./framework/types";
import { dnaToMrna } from "./dna-to-mrna";
import { hemocytometer } from "./hemocytometer";
import { proteinConcentration } from "./protein-concentration";
import { feedConversionRatio } from "./feed-conversion-ratio";
import { shannonIndex } from "./shannon-index";
import { CODON_TABLE, MAX_BASES, dnaToMrnaEngine, parseDna, reverseComplement, transcribe, translate } from "./dna-to-mrna/engine";
import { cellsPerMl, hemocytometerEngine } from "./hemocytometer/engine";
import { molarConcentration, paceEpsilon, proteinConcentrationEngine } from "./protein-concentration/engine";
import { feedConversionRatioEngine, liveWeightGain } from "./feed-conversion-ratio/engine";
import { diversity, makeShannonIndexEngine, shannonIndexEngine } from "./shannon-index/engine";
import shannonText from "./shannon-index/text/en";

const DEFINITIONS: CalculatorDefinition[] = [dnaToMrna, hemocytometer, proteinConcentration, feedConversionRatio, shannonIndex];

const run = (engine: AnyEngine, values: EngineValues) => evaluate(engine, rawFromValues(engine, values));
const ok = (engine: AnyEngine, values: EngineValues) => {
  const result = run(engine, values);
  if (!result.ok) throw new Error(JSON.stringify(result.errors));
  return result.result;
};
const errors = (engine: AnyEngine, values: EngineValues) => {
  const result = run(engine, values);
  return result.ok ? {} : result.errors;
};
const num = (value: ResultValue) => (value.kind === "currency" ? value.amount : value.kind === "number" || value.kind === "percent" ? value.value : Number.NaN);
const text = (value: ResultValue) => formatResultValue(value, "USD");
const primary = (engine: AnyEngine, values: EngineValues) => ok(engine, values).primary.value;
const item = (engine: AnyEngine, values: EngineValues, label: string) => {
  const found = ok(engine, values).secondary?.find((s) => s.label === label);
  if (!found) throw new Error(`missing ${label}`);
  return found.value;
};
const has = (engine: AnyEngine, values: EngineValues, label: string) => ok(engine, values).secondary?.some((s) => s.label === label) ?? false;
const notes = (engine: AnyEngine, values: EngineValues) => ok(engine, values).notes ?? [];

describe("batch 8 group A: content and examples", () => {
  it.each(DEFINITIONS.map((d) => [d.slug, d] as const))("%s has valid content", (_slug, def) => {
    expect(def.metaTitle.length).toBeLessThanOrEqual(59);
    expect(def.metaDescription.length).toBeGreaterThanOrEqual(70);
    expect(def.metaDescription.length).toBeLessThanOrEqual(160);
    expect(def.intro.length).toBeGreaterThan(0);
    expect(def.howToUse.length).toBeGreaterThan(0);
    expect(def.formulas.length).toBeGreaterThan(0);
    expect(def.assumptions.length).toBeGreaterThan(0);
    expect(def.examples.length).toBeGreaterThanOrEqual(2);
    expect(def.examples.length).toBeLessThanOrEqual(3);
    expect(def.faqs).toHaveLength(3);
    expect(def.related.length).toBeGreaterThanOrEqual(2);
    expect(def.related.length).toBeLessThanOrEqual(4);
    expect(def.related).not.toContain(def.slug);
    expect(def.addedOn).toBe("2026-10-28");
    expect(def.updated).toBe("2026-10-28");
    expect(def.status).toBe("published");
    expect(def.sources.length).toBeGreaterThan(0);
    expect(def.expertReview).toBeUndefined();
    expect(def.popularRank).toBeUndefined();
    expect(def.featured).toBeUndefined();
    expect(Object.keys(def.translations)).toEqual([]);
  });

  it("uses the specified ids, slugs and categories", () => {
    expect(DEFINITIONS.map((d) => [d.id, d.slug, d.category])).toEqual([
      ["dna-to-mrna", "dna-to-mrna-calculator", "biology"],
      ["hemocytometer", "cell-count-calculator", "biology"],
      ["protein-concentration", "protein-concentration-calculator", "biology"],
      ["feed-conversion-ratio", "feed-conversion-ratio-calculator", "biology"],
      ["shannon-index", "shannon-diversity-calculator", "ecology"],
    ]);
  });

  it("has unique titles and metadata within the group", () => {
    for (const key of ["title", "metaTitle", "metaDescription", "slug", "id"] as const) {
      expect(new Set(DEFINITIONS.map((d) => d[key])).size).toBe(DEFINITIONS.length);
    }
  });

  it.each(DEFINITIONS.flatMap((d) => d.examples.map((e) => [d.slug, e.title, d, e] as const)))("%s: %s", (_slug, _title, def, example) => {
    const value = ok(def.engine, example.inputs).primary.value;
    if (typeof example.expectedPrimary === "string") expect(text(value)).toBe(example.expectedPrimary);
    else expect(num(value)).toBeCloseTo(example.expectedPrimary, 9);
  });

  it.each(DEFINITIONS.map((d) => [d.slug, d] as const))("%s evaluates its defaults", (_slug, def) => {
    expect(run(def.engine, {}).ok).toBe(true);
  });
});

describe("DNA to mRNA translator", () => {
  const base = { strand: "coding", frame: "first", stops: "stop" };

  it("matches the standard genetic code", () => {
    // NCBI table 1: AAs = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG in TCAG order
    expect(Object.keys(CODON_TABLE)).toHaveLength(64);
    expect([CODON_TABLE.UUU, CODON_TABLE.UGG, CODON_TABLE.AUA, CODON_TABLE.AGA, CODON_TABLE.GGG, CODON_TABLE.CAU, CODON_TABLE.AUG]).toEqual(["F", "W", "I", "R", "G", "H", "M"]);
    const values = Object.values(CODON_TABLE);
    const countOf = (aa: string) => values.filter((x) => x === aa).length;
    expect([countOf("*"), countOf("M"), countOf("W"), countOf("L"), countOf("S"), countOf("R")]).toEqual([3, 1, 1, 6, 6, 6]);
    expect(["UAA", "UAG", "UGA"].map((c) => CODON_TABLE[c])).toEqual(["*", "*", "*"]);
  });

  it("transcribes and translates reference sequences", () => {
    // python (independent translator, scratchpad mrna.py): ATGGCTTCAAAGCTGTGA → MASKL, GC 44.444…%
    const v = { ...base, sequence: "ATGGCTTCAAAGCTGTGA" };
    expect(text(primary(dnaToMrnaEngine, v))).toBe("AUG GCU UCA AAG CUG UGA");
    expect(text(item(dnaToMrnaEngine, v, "Protein (one-letter code)"))).toBe("MASKL");
    expect(text(item(dnaToMrnaEngine, v, "Protein (three-letter code)"))).toBe("Met-Ala-Ser-Lys-Leu");
    expect(num(item(dnaToMrnaEngine, v, "GC content"))).toBeCloseTo(44.44444444444444, 9);
    expect(text(item(dnaToMrnaEngine, v, "Complementary DNA strand (5′→3′)"))).toBe("TCACAGCTTTGAAGCCAT");
    expect(num(item(dnaToMrnaEngine, v, "Codons translated"))).toBe(6);
    // python: GCATGCCGTGGAAATAGC from first AUG → MPWK, GC 55.56%
    const aug = { ...base, sequence: "GCATGCCGTGGAAATAGC", frame: "aug" };
    expect(text(item(dnaToMrnaEngine, aug, "Protein (one-letter code)"))).toBe("MPWK");
    expect(num(item(dnaToMrnaEngine, aug, "GC content"))).toBeCloseTo(55.55555555555556, 9);
    expect(num(item(dnaToMrnaEngine, aug, "Complete codons in the reading frame"))).toBe(5);
    expect(notes(dnaToMrnaEngine, aug).some((n) => n.includes("base 3"))).toBe(true);
    // python: template TCACTTAGCCAT → reverse complement ATGGCTAAGTGA → MAK
    const tpl = { ...base, sequence: "TCACTTAGCCAT", strand: "template" };
    expect(text(item(dnaToMrnaEngine, tpl, "Protein (one-letter code)"))).toBe("MAK");
    expect(text(item(dnaToMrnaEngine, tpl, "Complementary DNA strand (5′→3′)"))).toBe("ATGGCTAAGTGA");
  });

  it("reads through stops when asked", () => {
    const v = { ...base, sequence: "ATGTAACAGTGGTAG", stops: "readThrough" };
    expect(text(item(dnaToMrnaEngine, v, "Protein (one-letter code)"))).toBe("M*QW*");
    expect(text(item(dnaToMrnaEngine, v, "Protein (three-letter code)"))).toBe("Met-Ter-Gln-Trp-Ter");
    const stopped = { ...v, stops: "stop" };
    expect(text(item(dnaToMrnaEngine, stopped, "Protein (one-letter code)"))).toBe("M");
    expect(notes(dnaToMrnaEngine, stopped)[0]).toMatch(/codon 2 \(UAA\)/);
  });

  it("notes leftover bases and missing stops", () => {
    const v = { ...base, sequence: "ATGGC" };
    expect(text(primary(dnaToMrnaEngine, v))).toBe("AUG GC");
    const n = notes(dnaToMrnaEngine, v);
    expect(n.some((x) => x.startsWith("2 bases at the end"))).toBe(true);
    expect(n.some((x) => x.includes("No stop codon"))).toBe(true);
    expect(notes(dnaToMrnaEngine, { ...base, sequence: "ATGG" }).some((x) => x.startsWith("1 base at the end does"))).toBe(true);
    expect(text(item(dnaToMrnaEngine, { ...base, sequence: "AT" }, "Protein (one-letter code)"))).toBe("(no complete codon translated)");
  });

  it("helpers agree", () => {
    expect(reverseComplement("AACGT")).toBe("ACGTT");
    expect(transcribe("AACGT", "template")).toBe("ACGUU");
    expect(translate("AUGUUUUAA", 0, false)).toEqual({ protein: "MF", codonsTranslated: 3, stop: { index: 3, codon: "UAA" } });
    expect(parseDna("1 acgt\n61 TTGA")).toEqual({ ok: true, dna: "ACGTTTGA" });
  });

  it("rejects invalid sequences", () => {
    expect(errors(dnaToMrnaEngine, { ...base, sequence: "ATGXC" }).sequence).toBe("“X” (character 4) is not a DNA base. Use only A, C, G and T.");
    expect(errors(dnaToMrnaEngine, { ...base, sequence: "12 atgc 5n" }).sequence).toMatch(/“n” \(character 10\)/);
    expect(errors(dnaToMrnaEngine, { ...base, sequence: "ACGU" }).sequence).toMatch(/“U”/);
    expect(errors(dnaToMrnaEngine, { ...base, sequence: "123 456" }).sequence).toMatch(/at least one base/);
    expect(errors(dnaToMrnaEngine, { ...base, sequence: "A".repeat(MAX_BASES + 1) }).sequence).toMatch(/at most 20,000 bases/);
    expect(run(dnaToMrnaEngine, { ...base, sequence: "A".repeat(MAX_BASES) }).ok).toBe(true);
    expect(errors(dnaToMrnaEngine, { ...base, sequence: "CCCGGG", frame: "aug" }).frame).toMatch(/no AUG/);
  });
});

describe("Hemocytometer cell count calculator", () => {
  const base = { live: 182, dead: 14, squares: 4, dilution: 2, volume: 10, target: 1000000 };

  it("gives reference concentrations", () => {
    // python: 182/4*2*1e4 = 910000.0; 95/5*10*1e4 = 1900000.0; 37/4*1*1e4 = 92500.0
    expect(cellsPerMl(182, 4, 2)).toBeCloseTo(910000, 6);
    expect(cellsPerMl(95, 5, 10)).toBeCloseTo(1900000, 6);
    expect(cellsPerMl(37, 4, 1)).toBeCloseTo(92500, 6);
    // python: (182+14)/4*2*1e4 = 980000.0
    expect(text(item(hemocytometerEngine, base, "Total cells per mL (live + dead)"))).toBe("9.8 × 10⁵ cells/mL");
  });

  it("gives viability, total cells and seeding volume", () => {
    // python: 182/196*100 = 92.85714285714286; 1e6/910000 = 1.098901098901099
    expect(num(item(hemocytometerEngine, base, "Viability"))).toBeCloseTo(92.85714285714286, 9);
    expect(num(item(hemocytometerEngine, base, "Volume of suspension for 1 × 10⁶ cells"))).toBeCloseTo(1.098901098901099, 9);
    expect(num(item(hemocytometerEngine, base, "Same volume in µL"))).toBeCloseTo(1098.901098901099, 6);
    // python: 910000*10 = 9100000.0
    expect(text(item(hemocytometerEngine, base, "Live cells in 10 mL"))).toBe("9.1 × 10⁶ cells");
    expect(notes(hemocytometerEngine, base).some((n) => n.includes("±7.1%"))).toBe(true);
    expect(notes(hemocytometerEngine, { ...base, target: 2e7 }).some((n) => n.includes("more live cells than the sample"))).toBe(true);
  });

  it("formats small results without scientific notation and flags sparse counts", () => {
    // python: 3/25*1*1e4 = 1200.0
    expect(text(primary(hemocytometerEngine, { live: 3, dead: null, squares: 25, dilution: 1, volume: null, target: null }))).toBe("1,200 cells/mL");
    expect(notes(hemocytometerEngine, { ...base, live: 37, dilution: 1 }).some((n) => n.includes("9.3 live cells per square"))).toBe(true);
    const zero = { live: 0, dead: 0, squares: 4, dilution: 1, volume: null, target: null };
    expect(text(primary(hemocytometerEngine, zero))).toBe("0 cells/mL");
    expect(has(hemocytometerEngine, zero, "Viability")).toBe(false);
    expect(has(hemocytometerEngine, { ...base, dead: null }, "Viability")).toBe(false);
  });

  it("rejects impossible inputs", () => {
    expect(errors(hemocytometerEngine, { ...base, squares: 26 }).squares).toBeDefined();
    expect(errors(hemocytometerEngine, { ...base, squares: 0 }).squares).toBeDefined();
    expect(errors(hemocytometerEngine, { ...base, dilution: 0.5 }).dilution).toBeDefined();
    expect(errors(hemocytometerEngine, { ...base, live: 12.5 }).live).toBeDefined();
    expect(errors(hemocytometerEngine, { ...base, live: -1 }).live).toBeDefined();
    expect(errors(hemocytometerEngine, { ...base, live: 0 }).target).toMatch(/No live cells/);
  });
});

describe("Protein concentration calculator", () => {
  const molar = { mode: "molar", a280: 0.72, pathLength: 1, dilution: 1, epsilon: 43824, mw: 66463, volume: 2 };

  it("gives reference concentrations", () => {
    // python: 0.72/43824*66463 = 1.0919441401971521; 0.72/43824*1e6 = 16.42935377875137
    expect(num(primary(proteinConcentrationEngine, molar))).toBeCloseTo(1.0919441401971521, 9);
    expect(num(item(proteinConcentrationEngine, molar, "Molar concentration"))).toBeCloseTo(16.42935377875137, 9);
    expect(num(item(proteinConcentrationEngine, molar, "Total protein in 2 mL"))).toBeCloseTo(2.1838882803943042, 9);
    expect(molarConcentration(0.72, 43824)).toBeCloseTo(1.642935377875137e-5, 15);
    // python: 0.45*5/(42925)*66463 = 3.4837914967967385 (ε = 5500*2+1490*20+125*17 = 42925)
    const res = { mode: "residues", a280: 0.45, pathLength: 1, dilution: 5, trp: 2, tyr: 20, cystine: 17, mw: 66463, volume: null };
    expect(num(primary(proteinConcentrationEngine, res))).toBeCloseTo(3.4837914967967385, 9);
    expect(num(item(proteinConcentrationEngine, res, "Molar ε used"))).toBe(42925);
    expect(num(item(proteinConcentrationEngine, res, "Molar concentration"))).toBeCloseTo(52.41700640652301, 9);
  });

  it("estimates ε with the Pace equation", () => {
    // python: 5500*6 + 1490*3 + 125*4 = 37970
    expect(paceEpsilon(6, 3, 4)).toBe(37970);
    expect(paceEpsilon(1, 0, 0)).toBe(5500);
    const noTrp = { mode: "residues", a280: 0.5, pathLength: 1, dilution: 1, trp: 0, tyr: 4, cystine: 0, mw: 10000, volume: null };
    expect(notes(proteinConcentrationEngine, noTrp).some((n) => n.includes("no tryptophan"))).toBe(true);
  });

  it("handles the mass extinction coefficient mode", () => {
    const mass = { mode: "mass", a280: 0.88, pathLength: 0.5, dilution: 4, e01: 1.45, mwOptional: 50000, volume: null };
    // python: 0.88*4/(1.45*0.5) = 4.855172413793103; µM = /50000*1e6 = 97.10344827586206; ε = 1.45*50000 = 72500
    expect(num(primary(proteinConcentrationEngine, mass))).toBeCloseTo(4.855172413793103, 9);
    expect(num(item(proteinConcentrationEngine, mass, "Molar concentration"))).toBeCloseTo(97.10344827586206, 9);
    expect(num(item(proteinConcentrationEngine, mass, "Molar ε used"))).toBeCloseTo(72500, 9);
    expect(has(proteinConcentrationEngine, { ...mass, mwOptional: null }, "Molar concentration")).toBe(false);
    // E0.1% from ε: 43824/66463
    expect(num(item(proteinConcentrationEngine, molar, "Mass extinction coefficient E0.1% used"))).toBeCloseTo(0.6593743887576546, 9);
  });

  it("notes readings outside the usual range", () => {
    expect(notes(proteinConcentrationEngine, { ...molar, a280: 1.8 }).some((n) => n.includes("above about 1.5"))).toBe(true);
    expect(notes(proteinConcentrationEngine, { ...molar, a280: 0.9, pathLength: 0.5 }).some((n) => n.includes("above about 1.5"))).toBe(true);
    expect(notes(proteinConcentrationEngine, { ...molar, a280: 0.05 }).some((n) => n.includes("below about 0.1"))).toBe(true);
    expect(num(primary(proteinConcentrationEngine, { ...molar, a280: 0 }))).toBe(0);
  });

  it("rejects impossible inputs", () => {
    expect(errors(proteinConcentrationEngine, { ...molar, epsilon: 0 }).epsilon).toBeDefined();
    expect(errors(proteinConcentrationEngine, { ...molar, pathLength: 0 }).pathLength).toBeDefined();
    expect(errors(proteinConcentrationEngine, { ...molar, mw: -5 }).mw).toBeDefined();
    expect(errors(proteinConcentrationEngine, { ...molar, a280: -0.1 }).a280).toBeDefined();
    expect(errors(proteinConcentrationEngine, { ...molar, dilution: 0.5 }).dilution).toBeDefined();
    expect(errors(proteinConcentrationEngine, { mode: "residues", trp: 0, tyr: 0, cystine: 0 }).trp).toMatch(/ε at 280 nm is zero/);
    expect(errors(proteinConcentrationEngine, { mode: "residues", trp: 1.5 }).trp).toBeDefined();
  });
});

describe("Feed conversion ratio calculator", () => {
  const flock = { unit: "kg", feed: 5300, initial: 1080, final: 4510, removed: 160, currency: "USD", price: 0.21, head: 120 };

  it("gives reference ratios", () => {
    // python: 4200/(2850-900) = 2.1538461538461537; 1950/4200*100 = 46.42857142857143
    const pigs = { unit: "kg", feed: 4200, initial: 900, final: 2850, removed: null, price: null, head: null };
    expect(num(primary(feedConversionRatioEngine, pigs))).toBeCloseTo(2.1538461538461537, 9);
    expect(num(item(feedConversionRatioEngine, pigs, "Feed efficiency (gain ÷ feed)"))).toBeCloseTo(46.42857142857143, 9);
    expect(has(feedConversionRatioEngine, pigs, "FCR without the removed animals")).toBe(false);
    expect(ok(feedConversionRatioEngine, pigs).primary.label).toBe("Feed conversion ratio (FCR)");
    // python: 5300/3590 = 1.4763231197771587; 5300/3430 = 1.5451895043731778
    expect(num(primary(feedConversionRatioEngine, flock))).toBeCloseTo(1.4763231197771587, 9);
    expect(num(item(feedConversionRatioEngine, flock, "FCR without the removed animals"))).toBeCloseTo(1.5451895043731778, 9);
    expect(ok(feedConversionRatioEngine, flock).primary.label).toMatch(/mortality-adjusted/);
  });

  it("gives gain per head and feed costs", () => {
    // python: 3590/120 = 29.916666666666668; 5300*0.21 = 1113.0; 1113/3590 = 0.31002785515320336
    expect(num(item(feedConversionRatioEngine, flock, "Gain per head"))).toBeCloseTo(29.916666666666668, 9);
    expect(num(item(feedConversionRatioEngine, flock, "Total feed cost"))).toBeCloseTo(1113, 9);
    expect(num(item(feedConversionRatioEngine, flock, "Feed cost per kg of gain"))).toBeCloseTo(0.31002785515320336, 9);
    expect(text(item(feedConversionRatioEngine, { ...flock, unit: "lb" }, "Total live-weight gain"))).toBe("3,590 lb");
    expect(notes(feedConversionRatioEngine, flock)[0]).toBe("An FCR of 1.48 means 1.48 kg of feed per kg of live-weight gain. Lower is more efficient.");
    expect(liveWeightGain(100, 150, 10)).toBe(60);
  });

  it("handles removed animals when the survivors lost weight", () => {
    // python: 300/(950-1000+100) = 6.0
    const v = { unit: "kg", feed: 300, initial: 1000, final: 950, removed: 100, price: null, head: null };
    expect(num(primary(feedConversionRatioEngine, v))).toBeCloseTo(6, 9);
    expect(text(item(feedConversionRatioEngine, v, "FCR without the removed animals"))).toMatch(/Not meaningful/);
  });

  it("rejects impossible inputs", () => {
    expect(errors(feedConversionRatioEngine, { feed: 100, initial: 900, final: 800, removed: null }).final).toMatch(/zero or negative/);
    expect(errors(feedConversionRatioEngine, { feed: 100, initial: 900, final: 900, removed: null }).final).toMatch(/zero or negative/);
    expect(errors(feedConversionRatioEngine, { feed: 0 }).feed).toBeDefined();
    expect(errors(feedConversionRatioEngine, { initial: -1 }).initial).toBeDefined();
    expect(errors(feedConversionRatioEngine, { head: 2.5 }).head).toBeDefined();
    expect(errors(feedConversionRatioEngine, { head: 0 }).head).toBeDefined();
  });
});

describe("Shannon diversity index calculator", () => {
  it("gives reference indices", () => {
    // python: H = -sum(p*ln p) for [42,27,15,9,5,2] = 1.4471804111294126; J = 0.807686765988128; e^H = 4.251111215065765
    // python: D = 2728/9900 = 0.27555555555555555; 1-D = 0.7244444444444444; 1/D = 3.629032258064516
    const v = { counts: "42, 27, 15, 9, 5, 2", base: "e" };
    expect(num(primary(shannonIndexEngine, v))).toBeCloseTo(1.4471804111294126, 9);
    expect(num(item(shannonIndexEngine, v, "Pielou's evenness J′"))).toBeCloseTo(0.807686765988128, 9);
    expect(num(item(shannonIndexEngine, v, "Effective number of species"))).toBeCloseTo(4.251111215065765, 9);
    expect(num(item(shannonIndexEngine, v, "Simpson's index D"))).toBeCloseTo(0.27555555555555555, 9);
    expect(num(item(shannonIndexEngine, v, "Gini–Simpson index (1 − D)"))).toBeCloseTo(0.7244444444444444, 9);
    expect(num(item(shannonIndexEngine, v, "Inverse Simpson index (1 ÷ D)"))).toBeCloseTo(3.629032258064516, 9);
    expect(num(item(shannonIndexEngine, v, "Species richness S"))).toBe(6);
    expect(num(item(shannonIndexEngine, v, "Total individuals N"))).toBe(100);
    // python (log2, zeros dropped) [12,30,8,25,5]: H = 2.047774181190933, J = 0.8819283360668718, 2^H = 4.134675711449479, D = 0.2655063291139241
    const b2 = { counts: "12 0 30 8 0 25 5", base: "2" };
    expect(num(item(shannonIndexEngine, b2, "Pielou's evenness J′"))).toBeCloseTo(0.8819283360668718, 9);
    expect(num(item(shannonIndexEngine, b2, "Effective number of species"))).toBeCloseTo(4.134675711449479, 9);
    expect(num(item(shannonIndexEngine, b2, "Simpson's index D"))).toBeCloseTo(0.2655063291139241, 9);
    expect(notes(shannonIndexEngine, b2)[0]).toMatch(/Zero counts ignored: 2/);
    // python (log10) [60,25,10,5]: J = 0.7452342853664141, 10^H = 2.809802194682973
    const b10 = { counts: "60 25 10 5", base: "10" };
    expect(num(item(shannonIndexEngine, b10, "Pielou's evenness J′"))).toBeCloseTo(0.7452342853664141, 9);
    expect(num(item(shannonIndexEngine, b10, "Effective number of species"))).toBeCloseTo(2.809802194682973, 9);
  });

  it("builds the proportions table", () => {
    const table = ok(shannonIndexEngine, { counts: "12 0 30 8 0 25 5", base: "e" }).tables![0];
    expect(table.rows.map((r) => r.label)).toEqual(["Species 1", "Species 3", "Species 4", "Species 6", "Species 7"]);
    expect(num(table.rows[1].cells[1])).toBeCloseTo(30 / 80, 12);
    // python: -(30/80)*ln(30/80) = 0.3678109698793973
    expect(num(table.rows[1].cells[2])).toBeCloseTo(0.3678109698793973, 9);
  });

  it("handles edge cases", () => {
    // python: ln 4 = 1.3862943611198906 for equal counts; J = 1; effective = 4
    const even = diversity([10, 10, 10, 10]);
    expect(even.shannon).toBeCloseTo(1.3862943611198906, 12);
    expect(even.evenness).toBeCloseTo(1, 12);
    expect(even.effective).toBeCloseTo(4, 9);
    // python: [1,1,1] → H = ln 3 = 1.0986122886681098, D = 0
    const ones = { counts: "1 1 1", base: "e" };
    expect(num(primary(shannonIndexEngine, ones))).toBeCloseTo(1.0986122886681098, 12);
    expect(text(item(shannonIndexEngine, ones, "Inverse Simpson index (1 ÷ D)"))).toBe("Not defined for these counts");
    expect(notes(shannonIndexEngine, ones).some((n) => n.includes("exactly one individual"))).toBe(true);
    const single = { counts: "0 25 0", base: "e" };
    expect(num(primary(shannonIndexEngine, single))).toBe(0);
    expect(text(item(shannonIndexEngine, single, "Pielou's evenness J′"))).toBe("Not defined for these counts");
    expect(num(item(shannonIndexEngine, single, "Effective number of species"))).toBe(1);
    const one = { counts: "1", base: "2" };
    expect(text(item(shannonIndexEngine, one, "Simpson's index D"))).toBe("Not defined for these counts");
  });

  it("parses decimal-comma locale lists", () => {
    const de = makeShannonIndexEngine(engineContext("de", shannonText));
    // python: [3,2,1] → H = 1.0114042647073518
    expect(num(ok(de, { counts: "3; 2; 1", base: "e" }).primary.value)).toBeCloseTo(1.0114042647073518, 12);
  });

  it("rejects invalid counts", () => {
    expect(errors(shannonIndexEngine, { counts: "3, 2.5" }).counts).toMatch(/2.5 is not a whole number/);
    expect(errors(shannonIndexEngine, { counts: "3, -1" }).counts).toMatch(/cannot be negative/);
    expect(errors(shannonIndexEngine, { counts: "0 0 0" }).counts).toMatch(/above zero/);
    expect(errors(shannonIndexEngine, { counts: "4, x" }).counts).toMatch(/“x” is not a number/);
    expect(errors(shannonIndexEngine, { counts: "2e13" }).counts).toMatch(/at most/);
    expect(errors(shannonIndexEngine, { counts: "" }).counts).toBeDefined();
  });
});
