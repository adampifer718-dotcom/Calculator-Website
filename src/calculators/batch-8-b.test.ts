import { describe, expect, it } from "vitest";
import { defaultRawValues, evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import type { AnyEngine, CalculatorDefinition, EngineValues, ResultValue } from "./framework/types";
import { solarPanelOutput } from "./solar-panel-output";
import { fertilizer } from "./fertilizer";
import { waterFootprint } from "./water-footprint";
import { foodCostPercentage } from "./food-cost-percentage";
import { abv } from "./abv";
import { dailyEnergyKwh, panelsNeeded, systemSizeNeededKw } from "./solar-panel-output/engine";
import { K_PER_K2O, P_PER_P2O5, productKg } from "./fertilizer/engine";
import { WEEKS_PER_YEAR, heatingKwh, litersPerYear } from "./water-footprint/engine";
import { costOfGoodsSold, foodCostPercent, priceForTarget } from "./food-cost-percentage/engine";
import { abvAlternative, abvStandard, abwFromAbv, apparentAttenuation, platoToSg } from "./abv/engine";

const CALCS: CalculatorDefinition[] = [solarPanelOutput, fertilizer, waterFootprint, foodCostPercentage, abv];

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
const text = (value: ResultValue, currency = "USD") => formatResultValue(value, currency);
const primary = (engine: AnyEngine, values: EngineValues) => num(ok(engine, values).primary.value);
const item = (result: ReturnType<typeof ok>, label: string) => {
  const found = result.secondary?.find((s) => s.label === label);
  if (!found) throw new Error(`missing ${label}`);
  return found.value;
};
const has = (result: ReturnType<typeof ok>, label: string) => result.secondary?.some((s) => s.label === label) ?? false;

describe("batch 8 group B: content and examples", () => {
  it.each(CALCS.map((c) => [c.slug, c] as const))("%s has valid content and defaults", (_slug, c) => {
    expect(c.metaTitle.length).toBeLessThanOrEqual(59);
    expect(c.metaDescription.length).toBeGreaterThanOrEqual(70);
    expect(c.metaDescription.length).toBeLessThanOrEqual(160);
    expect(c.examples.length).toBeGreaterThanOrEqual(2);
    expect(c.examples.length).toBeLessThanOrEqual(3);
    expect(c.faqs.length).toBe(3);
    expect(c.related.length).toBeGreaterThanOrEqual(2);
    expect(c.related.length).toBeLessThanOrEqual(4);
    expect(c.related).not.toContain(c.slug);
    expect(c.addedOn).toBe("2026-10-28");
    expect(c.updated).toBe("2026-10-28");
    expect(c.status).toBe("published");
    expect(c.sources.length).toBeGreaterThan(0);
    for (const s of c.sources) if (s.url) expect(s.url).toMatch(/^https:\/\//);
    expect(c.popularRank).toBeUndefined();
    expect(c.featured).toBeUndefined();
    expect(c.expertReview).toBeUndefined();
    expect(c.intro.length).toBeGreaterThan(0);
    expect(c.howToUse.length).toBeGreaterThan(0);
    expect(c.formulas.length).toBeGreaterThan(0);
    expect(c.assumptions.length).toBeGreaterThan(0);
    expect(Object.keys(c.translations).sort()).toEqual([]);
    const ids = (c.engine.fields as readonly { id: string }[]).map((f) => f.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(evaluate(c.engine, defaultRawValues(c.engine)).ok).toBe(true);
  });

  it("uses the backlog ids and the spec slugs", () => {
    expect(CALCS.map((c) => [c.id, c.slug])).toEqual([
      ["solar-panel-output", "solar-panel-calculator"],
      ["fertilizer", "fertilizer-calculator"],
      ["water-footprint", "shower-water-calculator"],
      ["food-cost-percentage", "food-cost-calculator"],
      ["abv", "abv-calculator"],
    ]);
  });

  it("has unique ids, slugs and titles within the group", () => {
    for (const key of ["id", "slug", "title", "metaTitle", "metaDescription"] as const) {
      expect(new Set(CALCS.map((c) => c[key])).size).toBe(CALCS.length);
    }
  });

  it.each(CALCS.flatMap((c) => c.examples.map((e) => [c.slug, e.title, c, e] as const)))("%s example “%s” matches", (_slug, _title, c, example) => {
    const value = ok(c.engine, example.inputs).primary.value;
    if (typeof example.expectedPrimary === "string") {
      expect(text(value)).toBe(example.expectedPrimary);
    } else {
      expect(num(value)).toBeCloseTo(example.expectedPrimary, 9);
    }
  });
});

describe("solar panel output", () => {
  const e = solarPanelOutput.engine;
  const base = { panelWatts: 400, panels: 10, sunHours: 4.5, losses: 14, annualUsage: null };

  it("matches reference values", () => {
    // python: 400*10/1000*4.5*0.86*365 = 5650.2
    expect(primary(e, base)).toBeCloseTo(5650.2, 9);
    // python: 300*20/1000*5*0.8*365 = 8760.0
    expect(primary(e, { ...base, panelWatts: 300, panels: 20, sunHours: 5, losses: 20 })).toBeCloseTo(8760, 9);
    // python: 425*12/1000*3.8*1*365 = 7073.7
    expect(primary(e, { ...base, panelWatts: 425, panels: 12, sunHours: 3.8, losses: 0 })).toBeCloseTo(7073.7, 9);
    // python: 450*6/1000*3.2*0.9*365 = 2838.24
    expect(primary(e, { ...base, panelWatts: 450, panels: 6, sunHours: 3.2, losses: 10 })).toBeCloseTo(2838.24, 9);
    expect(dailyEnergyKwh(400, 10, 4.5, 14)).toBeCloseTo(15.48, 12);
  });

  it("shows daily, monthly and size figures", () => {
    const r = ok(e, base);
    expect(num(item(r, "Energy per day"))).toBeCloseTo(15.48, 12);
    expect(num(item(r, "Average energy per month"))).toBeCloseTo(470.85, 9);
    expect(num(item(r, "System size (DC)"))).toBeCloseTo(4, 12);
    // python: 5650.2/4 = 1412.55
    expect(num(item(r, "Energy per kW installed per year"))).toBeCloseTo(1412.55, 9);
    expect(has(r, "Share of your annual use covered")).toBe(false);
  });

  it("sizes a system for the annual use", () => {
    const r = ok(e, { ...base, annualUsage: 8000 });
    // python: 5650.2/8000*100 = 70.6275
    expect(num(item(r, "Share of your annual use covered"))).toBeCloseTo(70.6275, 9);
    // python: 8000/(365*4.5*0.86) = 5.663516335704931; *1000/400 = 14.158… → 15
    expect(num(item(r, "System size to cover all of your use"))).toBeCloseTo(5.663516335704931, 9);
    expect(num(item(r, "Panels needed to cover all of your use"))).toBe(15);
    expect(num(item(r, "Additional panels needed"))).toBe(5);
    // python: 11000/(365*5.2*0.86) = 6.739039870610434 kW → 19.25 → 20 panels
    expect(systemSizeNeededKw(11000, 5.2, 14)).toBeCloseTo(6.739039870610434, 9);
    const r2 = ok(e, { ...base, panelWatts: 350, panels: 16, sunHours: 5.2, annualUsage: 11000 });
    expect(num(item(r2, "Panels needed to cover all of your use"))).toBe(20);
    // Exactly covered: the panel count is not pushed up by floating-point noise.
    const exact = ok(e, { ...base, annualUsage: 5650.2 });
    expect(num(item(exact, "Panels needed to cover all of your use"))).toBe(10);
    expect(has(exact, "Additional panels needed")).toBe(false);
    expect(exact.notes?.join(" ")).toMatch(/at least as much energy/);
    expect(panelsNeeded(4, 400)).toBe(10);
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { ...base, losses: 100 })).toHaveProperty("losses");
    expect(errors(e, { ...base, losses: -1 })).toHaveProperty("losses");
    expect(errors(e, { ...base, panelWatts: 0 })).toHaveProperty("panelWatts");
    expect(errors(e, { ...base, panels: 0 })).toHaveProperty("panels");
    expect(errors(e, { ...base, panels: 2.5 })).toHaveProperty("panels");
    expect(errors(e, { ...base, sunHours: 0 })).toHaveProperty("sunHours");
    expect(errors(e, { ...base, sunHours: 13 })).toHaveProperty("sunHours");
    expect(errors(e, { ...base, annualUsage: 0 })).toHaveProperty("annualUsage");
    expect(primary(e, { ...base, losses: 99 })).toBeCloseTo(65.7, 9); // python: 4*4.5*0.01*365 = 65.7
  });
});

describe("fertilizer", () => {
  const e = fertilizer.engine;
  const base = { gradeN: 10, gradeP: 10, gradeK: 10, nutrient: "N", rate: 1, rateUnit: "lb1000ft2", area: 5000, areaUnit: "ft2" };

  it("computes the oxide-to-element factors from atomic weights", () => {
    // python: 2*30.973762/(2*30.973762+5*15.999) = 0.4364268173785609
    expect(P_PER_P2O5).toBeCloseTo(0.4364268173785609, 12);
    expect(P_PER_P2O5).toBeCloseTo(0.4364, 4);
    // python: 2*39.0983/(2*39.0983+15.999) = 0.8301513021839662
    expect(K_PER_K2O).toBeCloseTo(0.8301513021839662, 12);
    expect(K_PER_K2O).toBeCloseTo(0.8301, 4);
  });

  it("matches reference values", () => {
    expect(primary(e, base)).toBeCloseTo(50, 9);
    // python: 100*2/0.6 = 333.33333333333337 (0-0-60 potash, 100 lb K2O/acre, 2 acres)
    expect(primary(e, { ...base, gradeN: 0, gradeP: 0, gradeK: 60, nutrient: "K2O", rate: 100, rateUnit: "lbAcre", area: 2, areaUnit: "acre" })).toBeCloseTo(333.33333333333337, 9);
    // python: 50*0.4/0.12 = 166.66666666666669 (12-24-12, 50 kg N/ha on 4000 m²)
    expect(primary(e, { ...base, gradeN: 12, gradeP: 24, gradeK: 12, rate: 50, rateUnit: "kgHa", area: 4000, areaUnit: "m2" })).toBeCloseTo(166.66666666666669, 9);
    // python: lb=0.45359237; 100*lb/4046.8564224*10000/0.46/lb = 537.1856118851418 (lb/acre rate on a hectare, in lb)
    expect(primary(e, { ...base, gradeN: 46, gradeP: 0, gradeK: 0, rate: 100, rateUnit: "lbAcre", area: 1, areaUnit: "ha" })).toBeCloseTo(537.1856118851418, 9);
    expect(productKg(6, "gM2", 25, "m2", 30)).toBeCloseTo(0.5, 12);
  });

  it("shows all nutrients applied, elemental P and K, and the other unit", () => {
    const r = ok(e, base);
    expect(num(item(r, "Nitrogen (N) applied"))).toBeCloseTo(5, 12);
    expect(num(item(r, "Phosphate (P₂O₅) applied"))).toBeCloseTo(5, 12);
    expect(num(item(r, "Potash (K₂O) applied"))).toBeCloseTo(5, 12);
    // python: 5*0.4364268173785609 = 2.1821340868928045; 5*0.8301513021839662 = 4.15075651091983
    expect(num(item(r, "Elemental phosphorus (P) applied"))).toBeCloseTo(2.1821340868928045, 12);
    expect(num(item(r, "Elemental potassium (K) applied"))).toBeCloseTo(4.15075651091983, 12);
    // python: 50*0.45359237 = 22.6796185
    const other = item(r, "Product needed in other units");
    expect(num(other)).toBeCloseTo(22.6796185, 9);
    expect(other.kind === "number" && other.suffix).toBe("kg");
    expect(num(item(r, "Product rate"))).toBeCloseTo(10, 12);
    expect(r.primary.value.kind === "number" && r.primary.value.suffix).toBe("lb");
    const metric = ok(e, { ...base, gradeN: 15, gradeP: 30, gradeK: 15, nutrient: "P2O5", rate: 6, rateUnit: "gM2", area: 25, areaUnit: "m2" });
    expect(metric.primary.value.kind === "number" && metric.primary.value.suffix).toBe("kg");
    expect(num(item(metric, "Nitrogen (N) applied"))).toBeCloseTo(0.075, 12);
    expect(num(item(metric, "Product rate"))).toBeCloseTo(20, 12);
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { ...base, gradeN: 0 })).toHaveProperty("gradeN");
    expect(errors(e, { ...base, gradeP: 0, nutrient: "P2O5" })).toHaveProperty("gradeP");
    expect(errors(e, { ...base, gradeK: 0, nutrient: "K2O" })).toHaveProperty("gradeK");
    expect(evaluate(e, rawFromValues(e, { ...base, gradeK: 0 })).ok).toBe(true);
    expect(errors(e, { ...base, gradeN: 50, gradeP: 40, gradeK: 20 })).toHaveProperty("gradeN");
    expect(errors(e, { ...base, gradeN: 101 })).toHaveProperty("gradeN");
    expect(errors(e, { ...base, gradeP: -1 })).toHaveProperty("gradeP");
    expect(errors(e, { ...base, rate: 0 })).toHaveProperty("rate");
    expect(errors(e, { ...base, area: 0 })).toHaveProperty("area");
  });
});

describe("shower water use", () => {
  const e = waterFootprint.engine;
  const base = { flow: 2.5, flowUnit: "gpm", minutes: 8, showersPerWeek: 7, people: 1, newFlow: null, energy: "no" };
  const metric = { flow: 9, flowUnit: "lpm", minutes: 6, showersPerWeek: 5, people: 3, newFlow: 6, energy: "yes", tempUnit: "C", inletTemp: 15, showerTemp: 38, efficiency: 90, currency: "EUR", price: null };

  it("uses 52.1775 weeks per year", () => {
    // python: 365.2425/7 = 52.1775
    expect(WEEKS_PER_YEAR).toBeCloseTo(52.1775, 12);
  });

  it("matches reference values", () => {
    // python: 2.5*8*7*52.1775 = 7304.85
    expect(primary(e, base)).toBeCloseTo(7304.85, 9);
    // python: 9*6*5*3*52.1775 = 42263.775
    expect(primary(e, metric)).toBeCloseTo(42263.775, 9);
    // python: 2.0*5*14*4*52.1775 = 29219.4
    expect(primary(e, { ...base, flow: 2, minutes: 5, showersPerWeek: 14, people: 4 })).toBeCloseTo(29219.4, 9);
    // python: 8*7*3*52.1775 = 8765.82 (1 L/min, 7 min, 3 showers a week, 8 people)
    expect(litersPerYear(1, 7, 3, 8)).toBeCloseTo(8765.82, 9);
  });

  it("shows other units, energy and savings", () => {
    const r = ok(e, base);
    // python: 7304.85*3.785411784 = 27651.870234…
    expect(num(item(r, "Shower water per year in other units"))).toBeCloseTo(7304.85 * 3.785411784, 6);
    expect(num(item(r, "Shower water per week"))).toBeCloseTo(140, 9);
    expect(num(item(r, "Water per shower"))).toBeCloseTo(20, 9);
    expect(has(r, "Water-heating energy per year")).toBe(false);

    const m = ok(e, metric);
    // python: 42263.775*4.186*23/3600/0.9 = 1255.8863362499999
    expect(num(item(m, "Water-heating energy per year"))).toBeCloseTo(1255.8863362499999, 8);
    expect(has(m, "Water-heating cost per year")).toBe(false);
    // python: 6*6*5*3*52.1775 = 28175.85; saved 14087.925 L; (14087.925)*4.186*23/3600/0.9 = 418.62877875
    expect(num(item(m, "Water per year with the new flow rate"))).toBeCloseTo(28175.85, 8);
    expect(num(item(m, "Water saved per year"))).toBeCloseTo(14087.925, 8);
    expect(num(item(m, "Energy saved per year"))).toBeCloseTo(418.62877875, 8);
    expect(heatingKwh(3600, 1, 1)).toBeCloseTo(4.186, 12);

    const f = ok(e, { ...base, minutes: 10, people: 2, newFlow: 1.8, energy: "yes", tempUnit: "F", inletTemp: 55, showerTemp: 100, efficiency: 90, currency: "USD", price: 0.16 });
    expect(num(f.primary.value)).toBeCloseTo(18262.125, 9);
    // python: L=18262.125*3.785411784; e=L*4.186*25/3600/0.9 = 2232.845447949366; *0.16 = 357.2552716718986
    expect(num(item(f, "Water-heating energy per year"))).toBeCloseTo(2232.845447949366, 8);
    expect(num(item(f, "Water-heating cost per year"))).toBeCloseTo(357.2552716718986, 8);
    // python: saved gallons 5113.395; cost saved 100.03147606813154
    expect(num(item(f, "Water saved per year"))).toBeCloseTo(5113.395, 8);
    expect(num(item(f, "Cost saved per year"))).toBeCloseTo(100.03147606813154, 8);
  });

  it("flags a higher new flow and rejects impossible inputs", () => {
    const r = ok(e, { ...base, newFlow: 3 });
    expect(num(item(r, "Water saved per year"))).toBeLessThan(0);
    expect(r.notes?.join(" ")).toMatch(/negative/);
    expect(errors(e, { ...metric, showerTemp: 15 })).toHaveProperty("showerTemp");
    expect(errors(e, { ...metric, showerTemp: 65 })).toHaveProperty("showerTemp");
    expect(errors(e, { ...metric, inletTemp: -2 })).toHaveProperty("inletTemp");
    // °F defaults of 15/38 would be below freezing, so they are rejected rather than computed.
    expect(errors(e, { ...metric, tempUnit: "F" })).toHaveProperty("inletTemp");
    expect(errors(e, { ...metric, efficiency: 0 })).toHaveProperty("efficiency");
    expect(errors(e, { ...base, flow: 0 })).toHaveProperty("flow");
    expect(errors(e, { ...base, minutes: 0 })).toHaveProperty("minutes");
    expect(errors(e, { ...base, people: 1.5 })).toHaveProperty("people");
    expect(errors(e, { ...base, newFlow: 0 })).toHaveProperty("newFlow");
    // Hidden energy fields are ignored when the estimate is off.
    expect(evaluate(e, rawFromValues(e, { ...base, inletTemp: 50, showerTemp: 10 })).ok).toBe(true);
  });
});

describe("food cost percentage", () => {
  const e = foodCostPercentage.engine;
  const dish = { currency: "USD", mode: "dish", plateCost: 4.2, menuPrice: 14, target: 28 };
  const period = { currency: "USD", mode: "period", beginInventory: 9200, purchases: 14600, endInventory: 8100, sales: 48500, target: 30 };

  it("matches reference values", () => {
    // python: 4.2/14*100 = 30.0
    expect(primary(e, dish)).toBeCloseTo(30, 9);
    // python: 3.85/12.5*100 = 30.8
    expect(primary(e, { ...dish, plateCost: 3.85, menuPrice: 12.5 })).toBeCloseTo(30.8, 9);
    // python: (9200+14600-8100)/48500*100 = 32.371134020618555
    expect(primary(e, period)).toBeCloseTo(32.371134020618555, 9);
    // python: (8000+12000-7000)/45000*100 = 28.888888888888886
    expect(primary(e, { ...period, beginInventory: 8000, purchases: 12000, endInventory: 7000, sales: 45000 })).toBeCloseTo(28.888888888888886, 9);
    expect(costOfGoodsSold(100, 50, 30)).toBe(120);
    expect(foodCostPercent(25, 100)).toBe(25);
    expect(priceForTarget(6, 30)).toBeCloseTo(20, 12);
  });

  it("shows profit, margin and the suggested price", () => {
    const r = ok(e, dish);
    expect(num(item(r, "Gross profit per plate"))).toBeCloseTo(9.8, 12);
    expect(num(item(r, "Contribution margin after food cost"))).toBeCloseTo(70, 9);
    // python: 4.2/0.28 = 15.0
    expect(num(item(r, "Suggested menu price at the target"))).toBeCloseTo(15, 9);
    const p = ok(e, period);
    expect(num(item(p, "Cost of goods sold (food)"))).toBe(15700);
    expect(num(item(p, "Gross profit on food for the period"))).toBe(32800);
    // python: 15700/0.30 = 52333.333333333336
    expect(num(item(p, "Food sales needed at the target"))).toBeCloseTo(52333.333333333336, 6);
    const noTarget = ok(e, { ...dish, target: null });
    expect(has(noTarget, "Suggested menu price at the target")).toBe(false);
    const loss = ok(e, { ...dish, plateCost: 20 });
    expect(num(loss.primary.value)).toBeCloseTo(142.85714285714286, 9);
    expect(loss.notes?.[0]).toMatch(/loses money/);
  });

  it("rejects impossible inputs", () => {
    expect(errors(e, { ...dish, menuPrice: 0 })).toHaveProperty("menuPrice");
    expect(errors(e, { ...dish, plateCost: -1 })).toHaveProperty("plateCost");
    expect(errors(e, { ...period, sales: 0 })).toHaveProperty("sales");
    expect(errors(e, { ...period, endInventory: 23801 })).toHaveProperty("endInventory");
    expect(evaluate(e, rawFromValues(e, { ...period, endInventory: 23800 })).ok).toBe(true);
    expect(errors(e, { ...dish, target: 0 })).toHaveProperty("target");
    expect(errors(e, { ...dish, target: 101 })).toHaveProperty("target");
  });
});

describe("ABV", () => {
  const e = abv.engine;
  const sg = { scale: "sg", og: 1.05, fg: 1.01 };

  it("matches reference values", () => {
    // python: (1.05-1.01)*131.25 = 5.250000000000004
    expect(primary(e, sg)).toBeCloseTo(5.25, 9);
    // python: (1.092-1.021)*131.25 = 9.318750000000023
    expect(primary(e, { ...sg, og: 1.092, fg: 1.021 })).toBeCloseTo(9.31875, 9);
    // python: (1.065-1.012)*131.25 = 6.956249999999993
    expect(primary(e, { ...sg, og: 1.065, fg: 1.012 })).toBeCloseTo(6.95625, 9);
    // python: sg=lambda p: 1+p/(258.6-(p/258.2)*227.1); (sg(12)-sg(2.5))*131.25 = 5.069911199465911
    expect(primary(e, { scale: "plato", ogPlato: 12, fgPlato: 2.5 })).toBeCloseTo(5.069911199465911, 9);
    expect(platoToSg(12)).toBeCloseTo(1.0483782421572725, 12);
    expect(platoToSg(0)).toBe(1);
    expect(abvStandard(1.04, 1.04)).toBe(0);
  });

  it("shows the alternative formula, ABW and attenuation", () => {
    const r = ok(e, { ...sg, og: 1.092, fg: 1.021 });
    // python: 76.08*(0.071)/(1.775-1.092)*1.021/0.794 = 10.169822866225857 (Brewer's Friend quotes 10.17%)
    expect(num(item(r, "Alcohol by volume (alternative formula)"))).toBeCloseTo(10.169822866225857, 9);
    // python: 9.31875*0.789/1.021 = 7.201267140058785
    expect(num(item(r, "Alcohol by weight (approximate)"))).toBeCloseTo(7.201267140058785, 9);
    // python: 0.071/0.092*100 = 77.17391304347838
    expect(num(item(r, "Apparent attenuation"))).toBeCloseTo(77.17391304347838, 9);
    expect(r.notes?.join(" ")).toMatch(/strong worts/);
    expect(abvAlternative(1.05, 1.01)).toBeCloseTo(5.339411100495099, 9);
    expect(abwFromAbv(5.25, 1.01)).toBeCloseTo(4.10123762376238, 9);
    expect(apparentAttenuation(1.05, 1.01)).toBeCloseTo(80, 9);
    const p = ok(e, { scale: "plato", ogPlato: 12, fgPlato: 2.5 });
    expect(num(item(p, "Original gravity as SG"))).toBeCloseTo(1.0483782421572725, 12);
    expect(num(item(p, "Final gravity as SG"))).toBeCloseTo(1.0097503473041989, 12);
    expect(has(ok(e, sg), "Original gravity as SG")).toBe(false);
  });

  it("handles edge cases and rejects impossible inputs", () => {
    const flat = ok(e, { ...sg, og: 1, fg: 0.99 });
    expect(has(flat, "Apparent attenuation")).toBe(false);
    expect(flat.notes?.join(" ")).toMatch(/above 1\.000/);
    expect(primary(e, { ...sg, og: 1.05, fg: 1.05 })).toBe(0);
    expect(errors(e, { ...sg, fg: 1.06 })).toHaveProperty("fg");
    expect(errors(e, { ...sg, og: 1.21 })).toHaveProperty("og");
    expect(errors(e, { ...sg, fg: 0.97 })).toHaveProperty("fg");
    expect(errors(e, { scale: "plato", ogPlato: 2, fgPlato: 3 })).toHaveProperty("fgPlato");
    // python: sg(45) = 1.205460485062869, above 1.200
    expect(errors(e, { scale: "plato", ogPlato: 45, fgPlato: 3 })).toHaveProperty("ogPlato");
    // python: sg(-5) = 0.9809884307753569, inside the range
    expect(evaluate(e, rawFromValues(e, { scale: "plato", ogPlato: 10, fgPlato: -5 })).ok).toBe(true);
  });
});
