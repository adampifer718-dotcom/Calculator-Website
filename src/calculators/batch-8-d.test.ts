import { describe, expect, it } from "vitest";
import { defaultRawValues, evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import type { AnyEngine, CalculatorDefinition, EngineValues, ResultValue } from "./framework/types";
import { voltageDivider } from "./voltage-divider";
import { dividerVout, E24, nearestE24, parallel, siPrefix, solveR1, solveR2 } from "./voltage-divider/engine";
import vdText from "./voltage-divider/text/en";
import { waistToHeight } from "./waist-to-height";
import { bandOf, waistToHeight as whtr } from "./waist-to-height/engine";
import whtrText from "./waist-to-height/text/en";
import { bsa } from "./bsa";
import { BSA_FORMULAS, SQUARE_FOOT_M2 } from "./bsa/engine";
import bsaText from "./bsa/text/en";
import { passerRating } from "./passer-rating";
import { ncaaEfficiency, nflPasserRating, rawComponents } from "./passer-rating/engine";
import prText from "./passer-rating/text/en";
import { era } from "./era";
import { earnedRunAverage, inningsPitched, whip } from "./era/engine";
import eraText from "./era/text/en";

const DEFS: CalculatorDefinition[] = [voltageDivider, waistToHeight, bsa, passerRating, era];

const num = (value: ResultValue) => (value.kind === "currency" ? value.amount : value.kind === "number" || value.kind === "percent" ? value.value : Number.NaN);
const txt = (value: ResultValue) => formatResultValue(value, "USD");
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
const item = (result: ReturnType<typeof ok>, label: string) => {
  const found = result.secondary?.find((s) => s.label === label);
  if (!found) throw new Error(`missing ${label}`);
  return found.value;
};
const has = (result: ReturnType<typeof ok>, label: string) => (result.secondary ?? []).some((s) => s.label === label);

describe("batch 8 group D: content and examples", () => {
  it.each(DEFS.map((d) => [d.slug, d] as const))("%s has valid metadata and content", (_slug, d) => {
    expect(d.metaTitle.length).toBeLessThanOrEqual(59);
    expect(d.metaDescription.length).toBeGreaterThanOrEqual(70);
    expect(d.metaDescription.length).toBeLessThanOrEqual(160);
    expect(d.examples.length).toBeGreaterThanOrEqual(2);
    expect(d.examples.length).toBeLessThanOrEqual(3);
    expect(d.faqs.length).toBe(3);
    expect(d.intro.length).toBeGreaterThan(0);
    expect(d.howToUse.length).toBeGreaterThan(0);
    expect(d.formulas.length).toBeGreaterThan(0);
    expect(d.assumptions.length).toBeGreaterThan(0);
    expect(d.related.length).toBeGreaterThanOrEqual(2);
    expect(d.related.length).toBeLessThanOrEqual(4);
    expect(d.related).not.toContain(d.slug);
    expect(d.addedOn).toBe("2026-10-28");
    expect(d.updated).toBe("2026-10-28");
    expect(d.status).toBe("published");
    expect(d.sources.length).toBeGreaterThan(0);
    expect(d.popularRank).toBeUndefined();
    expect(d.featured).toBeUndefined();
    expect(Object.keys(d.translations)).toEqual([]);
    const ids = (d.engine.fields as readonly { id: string }[]).map((f) => f.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(evaluate(d.engine, defaultRawValues(d.engine)).ok).toBe(true);
  });

  it.each(DEFS.flatMap((d) => d.examples.map((e) => [d.slug, e.title, d, e] as const)))("%s example “%s”", (_slug, _title, d, example) => {
    const value = ok(d.engine, example.inputs).primary.value;
    if (typeof example.expectedPrimary === "string") expect(txt(value)).toBe(example.expectedPrimary);
    else expect(num(value)).toBeCloseTo(example.expectedPrimary, 9);
  });

  it("uses the backlog ids and the specified slugs and titles", () => {
    expect(DEFS.map((d) => d.id)).toEqual(["voltage-divider", "waist-to-height", "bsa", "passer-rating", "era"]);
    expect(DEFS.map((d) => d.slug)).toEqual(["voltage-divider-calculator", "waist-to-height-ratio-calculator", "body-surface-area-calculator", "passer-rating-calculator", "era-calculator"]);
    expect(DEFS.map((d) => d.title)).toEqual(["Voltage Divider Calculator", "Waist-to-Height Ratio Calculator", "Body Surface Area Calculator", "NFL Passer Rating Calculator", "Baseball ERA Calculator"]);
    for (const key of ["title", "metaTitle", "metaDescription"] as const) expect(new Set(DEFS.map((d) => d[key])).size).toBe(DEFS.length);
  });

  it("sets the medical review flag only where specified", () => {
    for (const d of [waistToHeight, bsa]) {
      expect(d.expertReview).toEqual({ area: "medical", status: "pending" });
      const text = d.assumptions.join(" ");
      expect(text).toMatch(/not medical advice/);
      expect(text).toMatch(/estimate/);
      expect(text).toContain("has not yet been professionally reviewed");
      expect(d.sources.every((s) => s.url)).toBe(true);
    }
    for (const d of [voltageDivider, passerRating, era]) expect(d.expertReview).toBeUndefined();
  });
});

describe("voltage divider", () => {
  const e = voltageDivider.engine;
  const base = { solve: "vout", vin: 12, r1: 10, r1Unit: "kohm", r2: 4.7, r2Unit: "kohm", load: null, loadUnit: "kohm" };

  it("matches python references", () => {
    // python: 12*4.7/14.7 = 3.8367346938775517 ; 12/14700 = 0.000816326530612245 A
    const r = ok(e, base);
    expect(num(r.primary.value)).toBeCloseTo(3.8367346938775517, 12);
    expect(txt(item(r, vdText.current))).toBe("816.3 µA");
    // python: (12/14700)**2*10000 = 0.006663890045814244 W ; *4700 = 0.0031320283215326946 W
    expect(txt(item(r, vdText.p1))).toBe("6.664 mW");
    expect(txt(item(r, vdText.p2))).toBe("3.132 mW");
    // python: 10*4.7/14.7 = 3.197278911564626 kΩ
    expect(txt(item(r, vdText.rOut))).toBe("3.19728 kΩ");
    expect(num(item(r, vdText.ratio))).toBeCloseTo(4.7 / 14.7, 12);
    // python: 10000*3.3/1.7 = 19411.764705882353
    expect(solveR2(5, 3.3, 10000)).toBeCloseTo(19411.764705882353, 8);
    // python: 1000*(9-2.5)/2.5 = 2600.0 ; 220*(24-5)/5 = 836.0
    expect(solveR1(9, 2.5, 1000)).toBeCloseTo(2600, 9);
    expect(solveR1(24, 5, 220)).toBeCloseTo(836, 9);
    expect(dividerVout(24, 836, 220)).toBeCloseTo(5, 12);
    // megohm inputs: python 3.3*2.2/(1+2.2) = 2.26875
    expect(num(ok(e, { ...base, vin: 3.3, r1: 1, r1Unit: "megohm", r2: 2.2, r2Unit: "megohm" }).primary.value)).toBeCloseTo(2.26875, 12);
  });

  it("solves resistors with the nearest E24 value", () => {
    const r = ok(e, { solve: "r2", vin: 5, vout: 3.3, r1: 10, r1Unit: "kohm", load: null, loadUnit: "kohm" });
    expect(txt(item(r, vdText.e24))).toBe("20 kΩ");
    // python: 5*20/30 = 3.3333333333333335 ; (3.33333-3.3)/3.3*100 = 1.0101010101010102
    expect(num(item(r, vdText.e24Vout))).toBeCloseTo(3.3333333333333335, 12);
    expect(num(item(r, vdText.e24Error))).toBeCloseTo(1.0101010101010102, 9);
    expect(E24).toHaveLength(24);
    expect(nearestE24(19411.76)).toBe(20000);
    expect(nearestE24(4.6)).toBe(4.7);
    expect(nearestE24(0.95)).toBe(0.91);
    expect(nearestE24(96)).toBe(100);
    expect(nearestE24(836)).toBe(820);
    expect(nearestE24(1e6)).toBe(1e6);
    const r1 = ok(e, { solve: "r1", vin: 9, vout: 2.5, r2: 1, r2Unit: "kohm", load: null, loadUnit: "kohm" });
    expect(txt(r1.primary.value)).toBe("2.6 kΩ");
    expect(txt(item(r1, vdText.e24))).toBe("2.7 kΩ");
  });

  it("shows the load effect", () => {
    // python: rl=10000; r2e=1000*rl/11000=909.0909 ; 9*r2e/(2600+r2e) = 2.3316062176165806 ; drop 6.735751295336775 %
    const r = ok(e, { solve: "r1", vin: 9, vout: 2.5, r2: 1, r2Unit: "kohm", load: 10, loadUnit: "kohm" });
    expect(num(item(r, vdText.vLoaded))).toBeCloseTo(2.3316062176165806, 12);
    expect(num(item(r, vdText.drop))).toBeCloseTo(6.735751295336775, 9);
    expect(parallel(1000, 10000)).toBeCloseTo(909.0909090909091, 9);
    expect(r.notes).not.toContain(vdText.notes.unloaded);
    // 10 kΩ load vs 742.9 Ω output resistance: not heavy. 1 kΩ load is heavy.
    expect(r.notes).not.toContain(vdText.notes.heavyLoad);
    expect(ok(e, { ...base, load: 1, loadUnit: "kohm" }).notes).toContain(vdText.notes.heavyLoad);
    expect(ok(e, base).notes).toContain(vdText.notes.unloaded);
    expect(has(ok(e, base), vdText.vLoaded)).toBe(false);
  });

  it("picks SI prefixes by the displayed value", () => {
    expect(siPrefix(999.99, 4)).toEqual([1e3, "k"]);
    expect(siPrefix(999.9, 4)).toEqual([1, ""]);
    expect(siPrefix(0, 4)).toEqual([1, ""]);
    expect(siPrefix(2e-12, 4)).toEqual([1e-9, "n"]);
  });

  it("rejects impossible inputs", () => {
    const solveR = { solve: "r2", vin: 5, r1: 10, r1Unit: "kohm", load: null, loadUnit: "kohm" };
    expect(errors(e, { ...solveR, vout: 5 }).vout).toBe(vdText.errors.voutRange);
    expect(errors(e, { ...solveR, vout: 6 }).vout).toBe(vdText.errors.voutRange);
    expect(errors(e, { ...solveR, vout: 0 }).vout).toBeDefined();
    expect(errors(e, { ...base, r1: 0 }).r1).toBeDefined();
    expect(errors(e, { ...base, r2: -1 }).r2).toBeDefined();
    expect(errors(e, { ...base, vin: 0 }).vin).toBeDefined();
    expect(errors(e, { ...base, load: 0 }).load).toBeDefined();
  });
});

describe("waist-to-height ratio", () => {
  const e = waistToHeight.engine;

  it("matches python references and bands", () => {
    // python: 84/172 = 0.4883720930232558 ; 38/68 = 0.5588235294117647 ; 104/168 = 0.6190476190476191
    expect(whtr(84, 172)).toBeCloseTo(0.4883720930232558, 12);
    const a = ok(e, { unit: "cm", waist: 84, height: 172 });
    expect(txt(item(a, whtrText.band))).toBe(whtrText.bands.healthy);
    expect(num(item(a, whtrText.waistHalf))).toBe(86);
    expect(num(item(a, whtrText.difference))).toBe(-2);
    const b = ok(e, { unit: "in", waist: 38, height: 68 });
    expect(txt(item(b, whtrText.band))).toBe(whtrText.bands.increased);
    expect(txt(item(b, whtrText.waistHalf))).toBe("34 in");
    const c = ok(e, { unit: "cm", waist: 104, height: 168 });
    expect(txt(item(c, whtrText.band))).toBe(whtrText.bands.high);
    // python: 168*0.6 = 100.8
    expect(num(item(c, whtrText.waistHigh))).toBeCloseTo(100.8, 12);
  });

  it("chooses the band from the displayed two-decimal ratio", () => {
    expect(bandOf(0.4949)).toBe("healthy");
    expect(bandOf(0.495)).toBe("increased"); // shown as 0.50
    expect(bandOf(0.5)).toBe("increased");
    expect(bandOf(0.5949)).toBe("increased");
    expect(bandOf(0.596)).toBe("high");
    expect(bandOf(0.399)).toBe("healthy"); // shown as 0.40
    expect(bandOf(0.39)).toBe("below");
    expect(ok(e, { unit: "cm", waist: 60, height: 170 }).notes).toContain(whtrText.notes.below);
  });

  it("always shows the scope and reference notes", () => {
    const r = ok(e, { unit: "cm", waist: 84, height: 172 });
    expect(r.notes).toContain(whtrText.notes.scope);
    expect(r.notes).toContain(whtrText.notes.reference);
    expect(whtrText.band).toMatch(/reference only, not a diagnosis/);
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { unit: "cm", waist: 0, height: 170 }).waist).toBeDefined();
    expect(errors(e, { unit: "cm", waist: 80, height: 0 }).height).toBeDefined();
    // waist in cm, height in m by mistake
    expect(errors(e, { unit: "cm", waist: 80, height: 1.7 }).waist).toMatch(/very unlikely/);
    expect(errors(e, { unit: "cm", waist: 30, height: 180 }).waist).toBeDefined();
    expect(errors(e, { unit: "m", waist: 80, height: 170 }).unit).toBeDefined();
  });
});

describe("body surface area", () => {
  const e = bsa.engine;

  it("matches python references for all four formulas", () => {
    // python: [sqrt(175*70/3600), 0.007184*70**0.425*175**0.725, 0.024265*70**0.5378*175**0.3964, 0.0235*70**0.51456*175**0.42246]
    const expected = [1.8446619684315546, 1.8481430181213463, 1.8467763490366433, 1.8538532975180522];
    const r = ok(e, { weight: 70, weightUnit: "kg", height: 175, heightUnit: "cm" });
    const rows = r.tables![0].rows;
    expect(rows.map((row) => row.label)).toEqual([bsaText.formulas.mosteller, bsaText.formulas.duBois, bsaText.formulas.haycock, bsaText.formulas.gehanGeorge]);
    rows.forEach((row, i) => expect(num(row.cells[0])).toBeCloseTo(expected[i], 12));
    // python: 1.8446619684315546/0.09290304 = 19.85577617730867
    expect(num(item(r, bsaText.bsaFt))).toBeCloseTo(19.85577617730867, 10);
    // python: 1.8538532975180522-1.8446619684315546 = 0.0091913290864976
    expect(num(item(r, bsaText.spread))).toBeCloseTo(0.0091913290864976, 12);
    // child, python: f(18,110) -> [0.7416198487095663, 0.7410829729398755, 0.7400718908330328, 0.7575087195132294]
    expect(BSA_FORMULAS.mosteller(18, 110)).toBeCloseTo(0.7416198487095663, 12);
    expect(BSA_FORMULAS.duBois(18, 110)).toBeCloseTo(0.7410829729398755, 12);
    expect(BSA_FORMULAS.haycock(18, 110)).toBeCloseTo(0.7400718908330328, 12);
    expect(BSA_FORMULAS.gehanGeorge(18, 110)).toBeCloseTo(0.7575087195132294, 12);
    expect(SQUARE_FOOT_M2).toBeCloseTo(0.3048 ** 2, 15);
  });

  it("converts pounds and inches exactly", () => {
    // python: w=165*0.45359237; h=64*2.54; sqrt(h*w/3600) = 1.838359472848913 ; dubois = 1.8024568029919852
    const r = ok(e, { weight: 165, weightUnit: "lb", height: 64, heightUnit: "in" });
    expect(num(r.primary.value)).toBeCloseTo(1.838359472848913, 12);
    expect(num(r.tables![0].rows[1].cells[0])).toBeCloseTo(1.8024568029919852, 12);
    expect(r.notes).toContain(bsaText.notes.dosing);
  });

  it("rejects implausible inputs", () => {
    expect(errors(e, { weight: 0, weightUnit: "kg", height: 170, heightUnit: "cm" }).weight).toBeDefined();
    expect(errors(e, { weight: 600, weightUnit: "kg", height: 170, heightUnit: "cm" }).weight).toBe("Enter a weight between 0.5 kg and 500 kg.");
    expect(errors(e, { weight: 0.8, weightUnit: "lb", height: 70, heightUnit: "in" }).weight).toBe("Enter a weight between 1.1 lb and 1,102 lb.");
    expect(errors(e, { weight: 70, weightUnit: "kg", height: 1.75, heightUnit: "cm" }).height).toBe("Enter a height between 30 cm and 260 cm.");
    expect(errors(e, { weight: 70, weightUnit: "kg", height: 110, heightUnit: "in" }).height).toBeDefined(); // 279.4 cm
    expect(errors(e, { weight: 70, weightUnit: "kg", height: 110, heightUnit: "cm" })).toEqual({});
  });
});

describe("NFL passer rating", () => {
  const e = passerRating.engine;

  it("matches python references", () => {
    // python: components (34,23,287,2,1) -> a 1.8823529411764708, b 1.3602941176470589, c 1.1764705882352942, d 1.6397058823529411; rating 100.98039215686273; ncaa 152.08235294117648
    const r = ok(e, { attempts: 34, completions: 23, yards: 287, touchdowns: 2, interceptions: 1 });
    const comps = rawComponents({ att: 34, cmp: 23, yds: 287, td: 2, int: 1 });
    expect(comps.a).toBeCloseTo(1.8823529411764708, 12);
    expect(comps.b).toBeCloseTo(1.3602941176470589, 12);
    expect(comps.c).toBeCloseTo(1.1764705882352942, 12);
    expect(comps.d).toBeCloseTo(1.6397058823529411, 12);
    expect(num(item(r, prText.ncaa))).toBeCloseTo(152.08235294117648, 9);
    expect(num(item(r, prText.completionPct))).toBeCloseTo((23 / 34) * 100, 12);
    expect(num(item(r, prText.yardsPerAttempt))).toBeCloseTo(287 / 34, 12);
    expect(txt(r.primary.value)).toBe("101");
    // NCAA manual sample line, python: (8.4*1567+330*16+100*98-200*7)/166 = 161.70361445783135 ; NFL 105.17068273092369
    expect(ncaaEfficiency({ att: 166, cmp: 98, yds: 1567, td: 16, int: 7 })).toBeCloseTo(161.70361445783135, 9);
    expect(nflPasserRating({ att: 166, cmp: 98, yds: 1567, td: 16, int: 7 })).toBeCloseTo(105.17068273092369, 9);
  });

  it("clamps components and caps the rating at 158.3", () => {
    // python: (20,16,260,3,0) -> raw a 2.5, b 2.5, c 3.0 -> rating 158.33333333333331
    const r = ok(e, { attempts: 20, completions: 16, yards: 260, touchdowns: 3, interceptions: 0 });
    expect(num(r.primary.value)).toBeCloseTo(475 / 3, 9);
    expect(txt(r.primary.value)).toBe("158.3");
    expect(r.notes).toContain(prText.notes.perfect);
    expect(r.notes).toContain(prText.notes.clamped);
    expect(r.tables![0].rows.map((row) => num(row.cells[1]))).toEqual([2.375, 2.375, 2.375, 2.375]);
    // all four at the lower limit: 0 completions, negative yards, many interceptions
    expect(nflPasserRating({ att: 10, cmp: 0, yds: 0, td: 0, int: 10 })).toBe(0);
    const negative = ok(e, { attempts: 5, completions: 2, yards: -12, touchdowns: 0, interceptions: 0 });
    expect(num(item(negative, prText.yardsPerAttempt))).toBeCloseTo(-2.4, 12);
    // python: a=(0.4-0.3)*5=0.5, b=0, c=0, d=2.375 -> 2.875/6*100 = 47.916666666666664
    expect(num(negative.primary.value)).toBeCloseTo(47.916666666666664, 9);
    expect(ok(e, { attempts: 34, completions: 23, yards: 287, touchdowns: 2, interceptions: 1 }).notes).not.toContain(prText.notes.clamped);
  });

  it("rejects impossible passing lines", () => {
    const base = { attempts: 30, completions: 20, yards: 200, touchdowns: 2, interceptions: 1 };
    expect(errors(e, { ...base, attempts: 0 }).attempts).toBeDefined();
    expect(errors(e, { ...base, completions: 31 }).completions).toBe(prText.errors.completions);
    expect(errors(e, { ...base, touchdowns: 21 }).touchdowns).toBe(prText.errors.touchdowns);
    expect(errors(e, { ...base, interceptions: 11 }).interceptions).toBe(prText.errors.interceptions);
    expect(errors(e, { ...base, interceptions: 10 })).toEqual({});
    expect(errors(e, { ...base, completions: 20.5 }).completions).toBeDefined();
    expect(errors(e, { ...base, touchdowns: -1 }).touchdowns).toBeDefined();
  });
});

describe("baseball ERA", () => {
  const e = era.engine;

  it("matches python references", () => {
    // python: ip=6+2/3 ; 3*9/ip = 4.05 ; 9/ip = 1.35 ; 8*9/ip = 10.8 ; 2*9/ip = 2.7
    const r = ok(e, { earnedRuns: 3, innings: 6, outs: "2", gameLength: "9", hits: 7, walks: 2, strikeouts: 8 });
    expect(num(r.primary.value)).toBeCloseTo(4.05, 12);
    expect(num(item(r, eraText.whip))).toBeCloseTo(1.35, 12);
    expect(num(item(r, eraText.k9))).toBeCloseTo(10.8, 12);
    expect(num(item(r, eraText.bb9))).toBeCloseTo(2.7, 12);
    expect(num(item(r, eraText.kbb))).toBe(4);
    expect(txt(item(r, eraText.inningsNotation))).toBe("6.2");
    expect(num(item(r, eraText.totalOuts))).toBe(20);
    expect(r.primary.caption).toBe("3 earned runs × 9 ÷ 6.667 innings pitched (6.2 in box-score notation).");
    // python: ip=187+1/3 ; 61*9/ip = 2.9306049822064058 ; (158+45)/ip = 1.083629893238434 ; 201*9/ip = 9.656583629893237
    expect(earnedRunAverage(61, inningsPitched(187, 1))).toBeCloseTo(2.9306049822064058, 12);
    expect(whip(45, 158, inningsPitched(187, 1))).toBeCloseTo(1.083629893238434, 12);
    const s = ok(e, { earnedRuns: 61, innings: 187, outs: "1", gameLength: "9", hits: 158, walks: 45, strikeouts: 201 });
    expect(num(item(s, eraText.k9))).toBeCloseTo(9.656583629893237, 12);
    // python: 1 earned run in 1/3 inning -> 1*9/(1/3) = 27.0 ; 7-inning game: 2*7/5 = 2.8
    expect(num(ok(e, { earnedRuns: 1, innings: 0, outs: "1", gameLength: "9", hits: null, walks: null, strikeouts: null }).primary.value)).toBeCloseTo(27, 12);
    expect(num(ok(e, { earnedRuns: 2, innings: 5, outs: "0", gameLength: "7", hits: null, walks: null, strikeouts: null }).primary.value)).toBeCloseTo(2.8, 12);
  });

  it("shows optional rates only when given", () => {
    const r = ok(e, { earnedRuns: 2, innings: 5, outs: "0", gameLength: "9", hits: 4, walks: null, strikeouts: null });
    expect(has(r, eraText.whip)).toBe(false);
    expect(has(r, eraText.k9)).toBe(false);
    expect(has(r, eraText.bb9)).toBe(false);
    expect(r.notes).toContain(eraText.notes.whip);
    const noWalks = ok(e, { earnedRuns: 0, innings: 9, outs: "0", gameLength: "9", hits: 3, walks: 0, strikeouts: 10 });
    expect(num(noWalks.primary.value)).toBe(0);
    expect(has(noWalks, eraText.kbb)).toBe(false); // no division by zero walks
    expect(num(item(noWalks, eraText.whip))).toBeCloseTo(1 / 3, 12);
  });

  it("rejects impossible inputs", () => {
    const base = { earnedRuns: 3, innings: 6, outs: "0", gameLength: "9", hits: null, walks: null, strikeouts: null };
    expect(errors(e, { ...base, innings: 0 }).innings).toBe(eraText.errors.noInnings);
    expect(errors(e, { ...base, innings: 6.2 }).innings).toBeDefined();
    expect(errors(e, { ...base, earnedRuns: -1 }).earnedRuns).toBeDefined();
    expect(errors(e, { ...base, outs: "3" }).outs).toBeDefined();
    expect(errors(e, { ...base, gameLength: "6" }).gameLength).toBeDefined();
  });
});
