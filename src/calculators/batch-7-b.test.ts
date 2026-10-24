import { describe, expect, it } from "vitest";
import { evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import { engineContext } from "./framework/i18n";
import type { AnyEngine, CalculatorDefinition, EngineValues, ResultValue } from "./framework/types";
import { punnettSquare } from "./punnett-square";
import { dnaConcentration } from "./dna-concentration";
import { percentYield } from "./percent-yield";
import { hendersonHasselbalch } from "./henderson-hasselbalch";
import { linearRegression } from "./linear-regression";
import { cross, parseGenotype, punnettEngine, reduceRatio } from "./punnett-square/engine";
import { concentration, dnaConcentrationEngine } from "./dna-concentration/engine";
import { percentYieldEngine, theoreticalGrams } from "./percent-yield/engine";
import { bufferPh, bufferRatio, hendersonHasselbalchEngine, PRESETS } from "./henderson-hasselbalch/engine";
import { fitLine, linearRegressionEngine, makeLinearRegressionEngine } from "./linear-regression/engine";
import lrText from "./linear-regression/text/en";

const DEFINITIONS: CalculatorDefinition[] = [punnettSquare, dnaConcentration, percentYield, hendersonHasselbalch, linearRegression];

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
const notes = (engine: AnyEngine, values: EngineValues) => ok(engine, values).notes ?? [];

describe("batch 7 group B: content and examples", () => {
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
    expect(def.addedOn).toBe("2026-10-24");
    expect(def.updated).toBe("2026-10-24");
    expect(def.status).toBe("published");
    expect(def.sources.length).toBeGreaterThan(0);
    expect(def.expertReview).toBeUndefined();
    expect(def.popularRank).toBeUndefined();
    expect(def.featured).toBeUndefined();
    expect(Object.keys(def.translations)).toHaveLength(0);
  });

  it("uses the specified ids and slugs", () => {
    expect(DEFINITIONS.map((d) => [d.id, d.slug])).toEqual([
      ["punnett-square", "punnett-square-calculator"],
      ["dna-concentration", "dna-concentration-calculator"],
      ["percent-yield", "percent-yield-calculator"],
      ["henderson-hasselbalch", "buffer-ph-calculator"],
      ["linear-regression", "linear-regression-calculator"],
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

describe("Punnett square calculator", () => {
  const ratio = (p1: string, p2: string) => text(primary(punnettEngine, { parent1: p1, parent2: p2 }));

  it("gives reference phenotype ratios", () => {
    // python: itertools.product over gametes, grouped by dominance, reduced by gcd
    expect(ratio("AaBB", "Aabb")).toBe("3 : 1");
    expect(ratio("AaBb", "Aabb")).toBe("3 : 3 : 1 : 1");
    expect(ratio("Aa", "aa")).toBe("1 : 1");
    expect(ratio("AA", "aa")).toBe("1");
  });

  it("gives genotype ratios in canonical order", () => {
    const v = { parent1: "AaBb", parent2: "AaBb" };
    expect(text(item(punnettEngine, v, "Genotype ratio"))).toBe("1 : 2 : 1 : 2 : 4 : 2 : 1 : 2 : 1");
    expect(text(item(punnettEngine, v, "Genotypes in that order"))).toBe("AABB : AABb : AAbb : AaBB : AaBb : Aabb : aaBB : aaBb : aabb");
    const w = { parent1: "AaBb", parent2: "Aabb" };
    // python: geno 1 : 1 : 2 : 2 : 1 : 1 for AABb, AAbb, AaBb, Aabb, aaBb, aabb
    expect(text(item(punnettEngine, w, "Genotype ratio"))).toBe("1 : 1 : 2 : 2 : 1 : 1");
  });

  it("gives phenotype probabilities", () => {
    const v = { parent1: "AaBb", parent2: "AaBb" };
    // python: 9/16*100, 3/16*100, 1/16*100
    expect(num(item(punnettEngine, v, "Chance of offspring with dominant A, dominant B"))).toBeCloseTo(56.25, 9);
    expect(num(item(punnettEngine, v, "Chance of offspring with dominant A, recessive b"))).toBeCloseTo(18.75, 9);
    expect(num(item(punnettEngine, v, "Chance of offspring with recessive a, recessive b"))).toBeCloseTo(6.25, 9);
  });

  it("builds the grid with gametes as headers", () => {
    const result = ok(punnettEngine, { parent1: "AaBb", parent2: "aabb" });
    const grid = result.tables![0];
    expect(grid.columns).toEqual(["Parent 1 ↓ · Parent 2 →", "ab", "ab", "ab", "ab"]);
    expect(grid.rows.map((r) => r.label)).toEqual(["AB", "Ab", "aB", "ab"]);
    expect(grid.rows.map((r) => text(r.cells[0]))).toEqual(["AaBb", "Aabb", "aaBb", "aabb"]);
    expect(result.tables![2].rows.map((r) => r.label)).toEqual(["A_B_", "A_bb", "aaB_", "aabb"]);
  });

  it("normalizes allele order, spaces and gene order", () => {
    expect(ratio("aA", "Aa")).toBe("3 : 1");
    expect(ratio("Aa Bb", "BbAa")).toBe("9 : 3 : 3 : 1");
    expect(parseGenotype("bBaA")).toEqual({ ok: true, genes: [{ gene: "B", alleles: ["B", "b"] }, { gene: "A", alleles: ["A", "a"] }] });
    expect(ratio("Gg", "gg")).toBe("1 : 1");
  });

  it("helpers agree", () => {
    expect(reduceRatio([4, 8, 4])).toEqual([1, 2, 1]);
    const p = parseGenotype("Aa");
    if (!p.ok) throw new Error("parse");
    expect(cross(p.genes, p.genes).total).toBe(4);
  });

  it("notes a single phenotype and linkage", () => {
    expect(notes(punnettEngine, { parent1: "AA", parent2: "aa" })[0]).toMatch(/same traits/);
    expect(notes(punnettEngine, { parent1: "AaBb", parent2: "aabb" }).some((n) => n.includes("independently"))).toBe(true);
  });

  it("rejects invalid genotypes", () => {
    expect(errors(punnettEngine, { parent1: "A1" }).parent1).toMatch(/“1” is not allowed/);
    expect(errors(punnettEngine, { parent1: "Aab" }).parent1).toMatch(/one gene/);
    expect(errors(punnettEngine, { parent1: "AaBbCc" }).parent1).toMatch(/one gene/);
    expect(errors(punnettEngine, { parent1: "Ab" }).parent1).toMatch(/mixes two genes/);
    expect(errors(punnettEngine, { parent1: "AaAa" }).parent1).toMatch(/appears twice/);
    expect(errors(punnettEngine, { parent1: "Aa×aa" }).parent1).toMatch(/not allowed/);
    expect(errors(punnettEngine, { parent1: "" }).parent1).toBeDefined();
    expect(errors(punnettEngine, { parent1: "AaBb", parent2: "aa" }).parent2).toMatch(/same number of genes/);
    expect(errors(punnettEngine, { parent1: "Aa", parent2: "Bb" }).parent2).toMatch(/same gene letters as parent 1 \(A\)/);
  });
});

describe("DNA and RNA concentration calculator", () => {
  const base = { type: "dsDNA", a260: 1, pathLength: 1, dilution: 1, a280: null, a230: null, volume: null };

  it("matches reference concentrations", () => {
    // python: 1.234*50*50 = 3085.0
    expect(num(primary(dnaConcentrationEngine, { ...base, a260: 1.234, dilution: 50 }))).toBeCloseTo(3085, 9);
    // python: 0.5/0.5*37*4 = 148.0
    expect(num(primary(dnaConcentrationEngine, { ...base, type: "custom", factor: 37, a260: 0.5, pathLength: 0.5, dilution: 4 }))).toBeCloseTo(148, 9);
    // python: 0.25*40*1 = 10.0 ; 0.25*33 = 8.25
    expect(num(primary(dnaConcentrationEngine, { ...base, type: "rna", a260: 0.25 }))).toBeCloseTo(10, 9);
    expect(num(primary(dnaConcentrationEngine, { ...base, type: "ssDNA", a260: 0.25 }))).toBeCloseTo(8.25, 9);
    expect(concentration(0.65, 50, 10)).toBeCloseTo(325, 9);
  });

  it("gives the total yield and purity ratios", () => {
    const v = { ...base, a260: 1.234, dilution: 50, a280: 0.65, a230: 0.5, volume: 120 };
    // python: 3085*120/1000 = 370.2 ; 1.234/0.65 = 1.8984615 ; 1.234/0.5 = 2.468
    expect(num(item(dnaConcentrationEngine, v, "Total amount in 120 µL"))).toBeCloseTo(370.2, 9);
    expect(num(item(dnaConcentrationEngine, v, "A260/A280 ratio"))).toBeCloseTo(1.234 / 0.65, 12);
    expect(num(item(dnaConcentrationEngine, v, "A260/A230 ratio"))).toBeCloseTo(2.468, 12);
    expect(text(item(dnaConcentrationEngine, v, "Same concentration in µg/mL"))).toBe("3,085 µg/mL");
  });

  it("compares ratios with the type's reference value", () => {
    const n = (v: EngineValues) => notes(dnaConcentrationEngine, { ...base, ...v }).join(" ");
    expect(n({ a260: 0.5, a280: 0.28 })).toMatch(/close to the value of about 1.8 commonly cited for pure DNA/);
    expect(n({ a260: 0.5, a280: 0.33 })).toMatch(/below the value of about 1.8/);
    expect(n({ type: "rna", a260: 0.5, a280: 0.2 })).toMatch(/above the value of about 2 commonly cited for pure RNA/);
    expect(n({ type: "custom", factor: 30, a260: 0.5, a280: 0.25 })).toMatch(/about 1.8 are commonly cited/);
    expect(n({ a260: 0.5, a230: 0.4 })).toMatch(/below the 2.0–2.2 range/);
    expect(n({ a260: 0.5 })).not.toMatch(/outside roughly/);
    expect(n({ a260: 1.5 })).toMatch(/outside roughly 0.1–1.0/);
    expect(n({ a260: 0.05 })).toMatch(/outside roughly/);
  });

  it("rejects impossible inputs", () => {
    expect(errors(dnaConcentrationEngine, { a260: 0 }).a260).toBeDefined();
    expect(errors(dnaConcentrationEngine, { a260: -1 }).a260).toBeDefined();
    expect(errors(dnaConcentrationEngine, { pathLength: 0 }).pathLength).toBeDefined();
    expect(errors(dnaConcentrationEngine, { dilution: 0.5 }).dilution).toBeDefined();
    expect(errors(dnaConcentrationEngine, { a280: 0 }).a280).toBeDefined();
    expect(errors(dnaConcentrationEngine, { type: "custom", factor: 0 }).factor).toBeDefined();
    expect(errors(dnaConcentrationEngine, { volume: -5 }).volume).toBeDefined();
  });
});

describe("percent yield calculator", () => {
  it("matches reference values in direct mode", () => {
    // python: 1.2/1.1*100 = 109.09090909090908
    expect(num(primary(percentYieldEngine, { mode: "direct", actual: 1.2, theoretical: 1.1 }))).toBeCloseTo(109.09090909090908, 9);
    // python: 450/500*100 = 90.0 (same unit, mg)
    expect(num(primary(percentYieldEngine, { mode: "direct", unit: "mg", actual: 450, theoretical: 500 }))).toBeCloseTo(90, 9);
    expect(num(primary(percentYieldEngine, { mode: "direct", actual: 0, theoretical: 3 }))).toBe(0);
  });

  it("computes the theoretical yield from moles and a formula in mg", () => {
    const v = { mode: "stoichiometry", unit: "mg", actual: 7, moles: 0.001, reactantCoef: 2, productCoef: 1, massSource: "formula", formula: "H2O" };
    // python: th = 0.001*(1/2)*(2*1.008+15.999)*1000 = 9.0075 mg; 7/th*100 = 77.71301693033583
    expect(num(primary(percentYieldEngine, v))).toBeCloseTo(77.71301693033583, 9);
    expect(num(item(percentYieldEngine, v, "Theoretical yield"))).toBeCloseTo(9.0075, 9);
    expect(num(item(percentYieldEngine, v, "Mass lost (theoretical − actual)"))).toBeCloseTo(2.0075, 9);
    expect(num(item(percentYieldEngine, v, "Share of the theoretical yield lost"))).toBeCloseTo(100 - 77.71301693033583, 9);
    expect(theoreticalGrams(0.9, 3, 2, 17.031)).toBeCloseTo(10.2186, 9);
  });

  it("notes yields above 100%", () => {
    const v = { mode: "direct", actual: 1.2, theoretical: 1.1 };
    expect(notes(percentYieldEngine, v)[0]).toMatch(/above 100%/);
    expect(num(item(percentYieldEngine, v, "Mass above the theoretical yield"))).toBeCloseTo(0.1, 9);
    expect(notes(percentYieldEngine, { mode: "direct", actual: 1, theoretical: 1.1 })[0]).not.toMatch(/above 100%/);
  });

  it("rejects impossible inputs", () => {
    expect(errors(percentYieldEngine, { mode: "direct", theoretical: 0 }).theoretical).toBeDefined();
    expect(errors(percentYieldEngine, { mode: "direct", actual: -1 }).actual).toBeDefined();
    expect(errors(percentYieldEngine, { mode: "stoichiometry", moles: 0 }).moles).toBeDefined();
    expect(errors(percentYieldEngine, { mode: "stoichiometry", reactantCoef: 0 }).reactantCoef).toBeDefined();
    expect(errors(percentYieldEngine, { mode: "stoichiometry", massSource: "formula", formula: "Xy2" }).formula).toMatch(/Unknown element/);
    expect(errors(percentYieldEngine, { mode: "stoichiometry", massSource: "molarMass", molarMass: 0 }).molarMass).toBeDefined();
    // the formula is ignored in direct mode
    expect(run(percentYieldEngine, { mode: "direct", formula: "Xy2" }).ok).toBe(true);
  });
});

describe("buffer pH (Henderson–Hasselbalch) calculator", () => {
  it("matches reference pH values", () => {
    // python: 9.25+math.log10(0.2/0.05) = 9.852059991327963
    expect(num(primary(hendersonHasselbalchEngine, { solve: "ph", acid: "ammonium", base: "0.2", acidConc: "0.05" }))).toBeCloseTo(9.852059991327963, 9);
    // python: 3.75+math.log10(0.18/0.15) = 3.8291812460476247
    expect(num(primary(hendersonHasselbalchEngine, { solve: "ph", acid: "custom", pka: 3.75, base: "0.18", acidConc: "0.15" }))).toBeCloseTo(3.8291812460476247, 9);
    // equal forms: pH = pKa
    expect(num(primary(hendersonHasselbalchEngine, { solve: "ph", acid: "acetic", base: "1e-2", acidConc: "1e-2" }))).toBeCloseTo(4.76, 12);
    expect(bufferPh(7.21, 2, 1)).toBeCloseTo(7.21 + Math.log10(2), 12);
  });

  it("solves for the ratio and the base concentration", () => {
    // python: 10**(7.4-6.35) = 11.220184543019652
    expect(text(primary(hendersonHasselbalchEngine, { solve: "ratio", acid: "carbonic", targetPh: 7.4 }))).toBe("11.22");
    expect(bufferRatio(6.35, 7.4)).toBeCloseTo(11.220184543019652, 9);
    // python: 0.2*10**(9-9.25) = 0.11246826503806982
    expect(text(primary(hendersonHasselbalchEngine, { solve: "base", acid: "ammonium", acidConc: "0.2", targetPh: 9 }))).toBe("0.1125 mol/L");
    // python: 1/(1+10**(4.76-5)) *100 = 63.474...
    expect(num(item(hendersonHasselbalchEngine, { solve: "ratio", acid: "acetic", targetPh: 5 }, "Share of the buffer in the base form"))).toBeCloseTo(100 / (1 + 10 ** -0.24), 9);
  });

  it("lists the presets with the specified pKa values", () => {
    expect(PRESETS).toEqual({ acetic: 4.76, carbonic: 6.35, phosphate: 7.21, tris: 8.07, ammonium: 9.25 });
    expect(text(item(hendersonHasselbalchEngine, { solve: "ph", acid: "tris", base: "0.1", acidConc: "0.1" }, "Effective buffer range (pKa ± 1)"))).toBe("pH 7.07 to 9.07");
  });

  it("notes when the pH is outside pKa ± 1", () => {
    expect(notes(hendersonHasselbalchEngine, { solve: "ph", acid: "acetic", base: "0.5", acidConc: "0.01" })[0]).toMatch(/more than 1 unit/);
    expect(notes(hendersonHasselbalchEngine, { solve: "ratio", acid: "acetic", targetPh: 5.76 })[0]).toMatch(/within 1 unit/);
    expect(notes(hendersonHasselbalchEngine, { solve: "base", acid: "acetic", acidConc: "1", targetPh: 7 }).join(" ")).toMatch(/above 20 mol\/L/);
  });

  it("parses e-notation and rejects bad concentrations", () => {
    expect(run(hendersonHasselbalchEngine, { solve: "ph", base: "1.5e-3", acidConc: "1e-3" }).ok).toBe(true);
    expect(errors(hendersonHasselbalchEngine, { solve: "ph", base: "abc" }).base).toMatch(/positive number/);
    expect(errors(hendersonHasselbalchEngine, { solve: "ph", base: "0" }).base).toMatch(/greater than 0/);
    expect(errors(hendersonHasselbalchEngine, { solve: "ph", acidConc: "-1" }).acidConc).toBeDefined();
    expect(errors(hendersonHasselbalchEngine, { solve: "ph", acidConc: "25" }).acidConc).toMatch(/at most 20/);
    expect(errors(hendersonHasselbalchEngine, { solve: "ratio", targetPh: 15 }).targetPh).toBeDefined();
    // the hidden base field is not validated when solving for the ratio
    expect(run(hendersonHasselbalchEngine, { solve: "ratio", base: "abc" }).ok).toBe(true);
  });
});

describe("linear regression calculator", () => {
  const study = { x: "1, 2, 3, 4, 5, 6, 7, 8", y: "52, 55, 61, 64, 68, 73, 75, 81", x0: null };
  const cars = { x: "1, 3, 4, 6, 8, 10, 12", y: "23900, 21500, 19800, 17200, 15100, 12400, 10300", x0: 5 };
  const sensor = { x: "0, 10, 20, 30, 40, 50", y: "3, 35, 62, 98, 127, 161", x0: null };
  const val = (v: EngineValues, label: string) => {
    const value = item(linearRegressionEngine, v, label);
    if (value.kind !== "text") return num(value);
    const sup: Record<string, string> = { "⁻": "-", "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9" };
    const plain = value.text.replace(/,/g, "").replace(/−/g, "-").replace(/ × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/, (_m, e: string) => "e" + [...e].map((c) => sup[c]).join(""));
    return Number(plain);
  };

  it("matches reference fit statistics (python, centred sums; p from mpmath.betainc)", () => {
    // python: b = 4.083333333333333, a = 47.75, r2 = 0.9934976650706389, se = 0.13486226561878115,
    // t = 30.277804652012914, s = 0.874007373475126, p = 8.612313957e-08
    const f = fitLine([1, 2, 3, 4, 5, 6, 7, 8], [52, 55, 61, 64, 68, 73, 75, 81]);
    expect(f.slope).toBeCloseTo(4.083333333333333, 12);
    expect(f.intercept).toBeCloseTo(47.75, 12);
    expect(f.slopeSe).toBeCloseTo(0.13486226561878115, 12);
    expect(f.residualSe).toBeCloseTo(0.874007373475126, 12);
    expect(num(item(linearRegressionEngine, study, "Coefficient of determination (r²)"))).toBeCloseTo(0.9934976650706389, 12);
    expect(num(item(linearRegressionEngine, study, "t statistic for the slope"))).toBeCloseTo(30.277804652012914, 9);
    expect(val(study, "Two-tailed p-value (H₀: slope = 0)") / 8.612313957e-8).toBeCloseTo(1, 3);
    expect(num(item(linearRegressionEngine, study, "Degrees of freedom (n − 2)"))).toBe(6);
  });

  it("handles a negative slope and predicts ŷ", () => {
    // python: b = -1245.2599388379206, a = 24998.77675840979, r = -0.9989071196534555,
    // se = 26.057486497512762, t = -47.78895074767795, p = 7.579334349e-08, yhat(5) = 18772.477064220187
    expect(val(cars, "Slope (b)")).toBeCloseTo(-1245.2599388, 6);
    expect(val(cars, "Intercept (a)")).toBeCloseTo(24998.776758, 5);
    expect(num(item(linearRegressionEngine, cars, "Correlation coefficient (r)"))).toBeCloseTo(-0.9989071196534555, 12);
    expect(val(cars, "Standard error of the slope")).toBeCloseTo(26.05748650, 7);
    expect(val(cars, "Two-tailed p-value (H₀: slope = 0)") / 7.579334349e-8).toBeCloseTo(1, 3);
    expect(val(cars, "Predicted ŷ at x = 5")).toBeCloseTo(18772.47706, 4);
    expect(notes(linearRegressionEngine, cars).join(" ")).not.toMatch(/outside the range/);
    expect(notes(linearRegressionEngine, { ...cars, x0: 20 }).join(" ")).toMatch(/outside the range/);
  });

  it("matches the calibration example", () => {
    // python: a = 2.285714285714292, b = 3.1485714285714286, r2 = 0.9989996874023133, s = 2.083952289006917, p = 3.753596726e-07
    expect(val(sensor, "Residual standard error")).toBeCloseTo(2.083952289, 8);
    expect(num(item(linearRegressionEngine, sensor, "Coefficient of determination (r²)"))).toBeCloseTo(0.9989996874023133, 12);
    expect(val(sensor, "Two-tailed p-value (H₀: slope = 0)") / 3.753596726e-7).toBeCloseTo(1, 3);
  });

  it("handles a perfect line and constant Y", () => {
    const perfect = { x: "1, 2, 3, 4", y: "5, 7, 9, 11", x0: null };
    expect(text(primary(linearRegressionEngine, perfect))).toBe("ŷ = 3 + 2x");
    expect(text(item(linearRegressionEngine, perfect, "t statistic for the slope"))).toBe("Infinite (perfect fit)");
    expect(text(item(linearRegressionEngine, perfect, "Two-tailed p-value (H₀: slope = 0)"))).toBe("0");
    const flat = { x: "1, 2, 3", y: "4, 4, 4", x0: null };
    expect(text(primary(linearRegressionEngine, flat))).toBe("ŷ = 4 + 0x");
    expect(text(item(linearRegressionEngine, flat, "Correlation coefficient (r)"))).toMatch(/Not defined/);
    const down = { x: "0, 1, 2", y: "1, -1, -3", x0: null };
    expect(text(primary(linearRegressionEngine, down))).toBe("ŷ = 1 − 2x");
  });

  it("parses decimal-comma lists in German", () => {
    const de = makeLinearRegressionEngine(engineContext("de", lrText));
    expect(text(ok(de, { x: "1; 2; 3", y: "1,5; 2,5; 3,5" }).primary.value)).toBe("ŷ = 0,5 + 1x");
  });

  it("rejects invalid data", () => {
    expect(errors(linearRegressionEngine, { x: "2, 2, 2", y: "1, 2, 3" }).x).toMatch(/All X values are the same/);
    expect(errors(linearRegressionEngine, { x: "1, 2", y: "1, 2" }).x).toMatch(/at least 3 pairs/);
    expect(errors(linearRegressionEngine, { x: "1, 2, 3", y: "1, 2" }).y).toMatch(/you have 3 X values and 2 Y values/);
    expect(errors(linearRegressionEngine, { x: "1, 2, a", y: "1, 2, 3" }).x).toMatch(/“a” is not a number/);
    expect(errors(linearRegressionEngine, { x: "1, 2, 1e13", y: "1, 2, 3" }).x).toMatch(/too large/);
  });
});
