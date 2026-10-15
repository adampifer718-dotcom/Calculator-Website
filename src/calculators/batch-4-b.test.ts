import { describe, expect, it } from "vitest";
import { defaultRawValues, evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import type { AnyEngine, CalculatorDefinition, EngineValues, ResultValue } from "./framework/types";
import { simpleInterest } from "./simple-interest";
import { aprApy } from "./apr-apy";
import { unitPrice } from "./unit-price";
import { pizzaSize } from "./pizza-size";
import { downloadTime } from "./download-time";
import { aprToApy, apyToApr } from "./apr-apy/engine";
import { unitPrice as unitPriceOf } from "./unit-price/engine";
import { pizzaArea } from "./pizza-size/engine";
import { downloadSeconds, splitSeconds } from "./download-time/engine";

const CALCS: CalculatorDefinition[] = [simpleInterest, aprApy, unitPrice, pizzaSize, downloadTime];

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
const item = (result: ReturnType<typeof ok>, label: string) => {
  const found = result.secondary?.find((s) => s.label === label);
  if (!found) throw new Error(`missing ${label}`);
  return found.value;
};

describe("batch 4 group B: content and examples", () => {
  it.each(CALCS.map((c) => [c.slug, c] as const))("%s has valid content and defaults", (_slug, c) => {
    expect(c.metaTitle.length).toBeLessThanOrEqual(59);
    expect(c.metaDescription.length).toBeGreaterThanOrEqual(70);
    expect(c.metaDescription.length).toBeLessThanOrEqual(160);
    expect(c.examples.length).toBeGreaterThanOrEqual(2);
    expect(c.examples.length).toBeLessThanOrEqual(3);
    expect(c.faqs.length).toBe(3);
    expect(c.related.length).toBeGreaterThanOrEqual(2);
    expect(c.related.length).toBeLessThanOrEqual(4);
    expect(c.addedOn).toBe("2026-10-15");
    expect(c.updated).toBe("2026-10-15");
    expect(c.status).toBe("published");
    expect(c.sources.length).toBeGreaterThan(0);
    expect(evaluate(c.engine, defaultRawValues(c.engine)).ok).toBe(true);
  });

  it.each(CALCS.flatMap((c) => c.examples.map((e) => [c.slug, e.title, c, e] as const)))("%s example “%s” matches", (_slug, _title, c, example) => {
    const value = ok(c.engine, example.inputs).primary.value;
    if (typeof example.expectedPrimary === "string") {
      expect(text(value, String(example.inputs.currency ?? "USD"))).toBe(example.expectedPrimary);
    } else {
      expect(num(value)).toBeCloseTo(example.expectedPrimary, 9);
    }
  });
});

describe("simple interest", () => {
  const e = simpleInterest.engine;
  it("matches reference values", () => {
    // python3: 10000*.0375*7/12 = 218.75
    expect(num(ok(e, { principal: 10000, rate: 3.75, time: 7, timeUnit: "months" }).primary.value)).toBeCloseTo(218.75, 9);
    // python3: 750*.12*45/365 = 11.095890410958905
    expect(num(ok(e, { principal: 750, rate: 12, time: 45, timeUnit: "days" }).primary.value)).toBeCloseTo(11.095890410958905, 9);
    // python3: 4000*0.055*2.5 = 550.0; total 4550, per year 220
    const r = ok(e, { principal: 4000, rate: 5.5, time: 2.5, timeUnit: "years" });
    expect(num(r.primary.value)).toBeCloseTo(550, 9);
    expect(num(item(r, "Total amount (principal + interest)"))).toBeCloseTo(4550, 9);
    expect(num(item(r, "Interest per year"))).toBeCloseTo(220, 9);
  });
  it("handles edge cases", () => {
    expect(num(ok(e, { principal: 1000, rate: 0, time: 5, timeUnit: "years" }).primary.value)).toBe(0);
    expect(ok(e, { principal: 1000, rate: 5, time: 30, timeUnit: "days" }).notes).toHaveLength(2);
    expect(ok(e, { principal: 1000, rate: 5, time: 100, timeUnit: "years" }).primary.value.kind).toBe("currency");
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { principal: 0 })).toHaveProperty("principal");
    expect(errors(e, { rate: -1 })).toHaveProperty("rate");
    expect(errors(e, { time: 0 })).toHaveProperty("time");
    expect(errors(e, { time: 1300, timeUnit: "months" }).time).toBe("Use a time of 100 years or less.");
  });
});

describe("APR to APY", () => {
  const e = aprApy.engine;
  it("matches reference values", () => {
    // python3: (1.03**4-1)*100 = 12.550881000000015
    expect(num(ok(e, { direction: "aprToApy", rate: 12, compounding: "4" }).primary.value)).toBeCloseTo(12.550881, 9);
    // python3: 365*(1.1**(1/365)-1)*100 = 9.532262476476205
    expect(num(ok(e, { direction: "apyToApr", rate: 10, compounding: "365" }).primary.value)).toBeCloseTo(9.532262476476205, 9);
    // python3: math.log(1.07)*100 = 6.765864847381486
    expect(num(ok(e, { direction: "apyToApr", rate: 7, compounding: "continuous" }).primary.value)).toBeCloseTo(6.765864847381486, 9);
    // python3: ((1+0.05/52)**52-1)*100 = 5.124584192720016
    expect(num(ok(e, { direction: "aprToApy", rate: 5, compounding: "52" }).primary.value)).toBeCloseTo(5.124584192720016, 9);
  });
  it("round-trips and shows the comparison table", () => {
    for (const n of [1, 2, 4, 12, 52, 365, Infinity]) expect(apyToApr(aprToApy(0.0725, n), n)).toBeCloseTo(0.0725, 12);
    const r = ok(e, { direction: "aprToApy", rate: 6, compounding: "12" });
    expect(r.tables![0].rows).toHaveLength(7);
    expect(r.tables![0].rows.find((row) => row.highlight)!.label).toBe("Monthly");
    expect(num(r.tables![0].rows[0].cells[0])).toBeCloseTo(6, 12);
    expect(num(item(r, "Rate per compounding period"))).toBeCloseTo(0.5, 12);
    expect(r.notes!.some((n) => n.includes("Regulation Z"))).toBe(true);
  });
  it("handles edge cases", () => {
    expect(num(ok(e, { direction: "aprToApy", rate: 0, compounding: "365" }).primary.value)).toBe(0);
    expect(num(ok(e, { direction: "aprToApy", rate: 9, compounding: "1" }).primary.value)).toBeCloseTo(9, 12);
    // python3: ((1+10/365)**365-1)*100 = 1925283.27075858
    expect(num(ok(e, { direction: "aprToApy", rate: 1000, compounding: "365" }).primary.value)).toBeCloseTo(1925283.27075858, 4);
    const continuous = ok(e, { direction: "aprToApy", rate: 1000, compounding: "continuous" });
    expect(continuous.secondary!.map((s) => s.label)).not.toContain("Rate per compounding period");
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { rate: -0.5 })).toHaveProperty("rate");
    expect(errors(e, { rate: 1001 })).toHaveProperty("rate");
    expect(errors(e, { compounding: "7" })).toHaveProperty("compounding");
  });
});

describe("unit price", () => {
  const e = unitPrice.engine;
  it("matches reference values", () => {
    // python3: 7.99/(2*453.59237)*1000 = 8.807467374285858 ; 4.50/(16*28.349523125)*1000 = 9.92080179831949
    const r = ok(e, { priceA: 7.99, quantityA: 2, unitA: "lb", priceB: 4.5, quantityB: 16, unitB: "oz" });
    expect(text(r.primary.value)).toBe("Item A is cheaper per unit");
    expect(num(item(r, "Item A price per kg"))).toBeCloseTo(8.807467374285858, 9);
    expect(num(item(r, "Item B price per kg"))).toBeCloseTo(9.92080179831949, 9);
    // python3: (9.92080179831949-8.807467374285858)/9.92080179831949*100
    expect(num(item(r, "Saving per unit with the cheaper item"))).toBeCloseTo(((9.92080179831949 - 8.807467374285858) / 9.92080179831949) * 100, 9);
    // python3: 2.99/3.785411784 = 0.7898744365508639 (price per L of one US gallon)
    expect(unitPriceOf(2.99, 1, "gal")).toBeCloseTo(0.7898744365508639, 12);
    // python3: 128 fl oz = 1 US gal exactly
    expect(unitPriceOf(2.99, 128, "floz")).toBeCloseTo(0.7898744365508639, 12);
  });
  it("handles equal prices and counts", () => {
    const r = ok(e, { priceA: 2, quantityA: 500, unitA: "g", priceB: 4, quantityB: 1, unitB: "kg" });
    expect(text(r.primary.value)).toBe("Both cost the same per unit");
    expect(num(item(r, "Saving per unit with the cheaper item"))).toBe(0);
    expect(ok(e, { priceA: 3, quantityA: 6, unitA: "item", priceB: 5, quantityB: 12, unitB: "item" }).secondary![0].label).toBe("Item A price per item");
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { unitA: "g", unitB: "L" }).unitB).toMatch(/same way/);
    expect(errors(e, { unitA: "item", unitB: "kg" })).toHaveProperty("unitB");
    expect(errors(e, { priceA: 0 })).toHaveProperty("priceA");
    expect(errors(e, { quantityB: -1 })).toHaveProperty("quantityB");
  });
});

describe("pizza size", () => {
  const e = pizzaSize.engine;
  it("matches reference values", () => {
    // python3: math.pi*14*14/4 = 153.93804002589985
    expect(pizzaArea(14)).toBeCloseTo(153.93804002589985, 9);
    const r = ok(e, { unit: "in", diameterA: 10, priceA: 8, diameterB: 14, priceB: 14 });
    // python3: 8/a(10) = 0.10185916357881301 ; 14/a(14) = 0.09094568176679735 -> B cheaper
    expect(text(r.primary.value)).toBe("Pizza B is the better value");
    expect(text(item(r, "Pizza A price per in²"))).toBe("$0.1019");
    expect(text(item(r, "Pizza B price per in²"))).toBe("$0.0909");
    // python3: a(14)/a(10) = 1.96 ; (1.96-1)*100 = 96
    expect(num(item(r, "Number of pizza A that match one pizza B by area"))).toBeCloseTo(1.96, 12);
    expect(num(item(r, "Extra pizza in B compared with A"))).toBeCloseTo(96, 9);
    expect(num(item(r, "Area of pizza A"))).toBeCloseTo(78.53981633974483, 9);
  });
  it("handles equal value and equal size", () => {
    // Price proportional to area: 10 in at 5, 20 in at 20.
    expect(text(ok(e, { diameterA: 10, priceA: 5, diameterB: 20, priceB: 20 }).primary.value)).toBe("Both pizzas are the same value");
    const same = ok(e, { diameterA: 12, priceA: 10, diameterB: 12, priceB: 11 });
    expect(text(same.primary.value)).toBe("Pizza A is the better value");
    expect(text(item(same, "Both pizzas have the same area"))).toBe("Same size");
    expect(ok(e, { unit: "cm", diameterA: 40, priceA: 15, diameterB: 30, priceB: 9 }).secondary!.map((s) => s.label)).toContain("Extra pizza in A compared with B");
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { diameterA: 0 })).toHaveProperty("diameterA");
    expect(errors(e, { priceB: 0 })).toHaveProperty("priceB");
    expect(errors(e, { diameterB: -12 })).toHaveProperty("diameterB");
  });
});

describe("download time", () => {
  const e = downloadTime.engine;
  it("matches reference values", () => {
    // python3: 1e9*8/1e6 = 8000.0 s at 1 Mbit/s
    expect(downloadSeconds(1, "GB", 1, "Mbps")).toBeCloseTo(8000, 9);
    // python3: 100*2**20*8/8e6 = 104.8576 s
    expect(downloadSeconds(100, "MiB", 1, "MBps")).toBeCloseTo(104.8576, 9);
    // python3: 3*2**40*8/(20e6*0.88) = 1499334.0378763636 -> 17 d 8 h 28 min 54 s
    const r = ok(e, { size: 3, sizeUnit: "TiB", speed: 20, speedUnit: "Mbps", overhead: 12 });
    expect(num(item(r, "Total time in seconds"))).toBeCloseTo(1499334.0378763636, 6);
    expect(text(r.primary.value)).toBe("17 days, 8 hours, 28 minutes, 54 seconds");
    expect(num(item(r, "Effective speed"))).toBeCloseTo(17.6, 12);
    // python3: 700*2**20*8/(25e6*0.95) = 247.24318315789475 -> 4 min 7 s
    expect(text(ok(e, { size: 700, sizeUnit: "MiB", speed: 25, speedUnit: "Mbps", overhead: 5 }).primary.value)).toBe("4 minutes, 7 seconds");
  });
  it("handles singular words, tiny and huge values", () => {
    expect(splitSeconds(90061)).toEqual({ days: 1, hours: 1, minutes: 1, seconds: 1 });
    expect(text(ok(e, { size: 90061 * 125, sizeUnit: "B", speed: 1, speedUnit: "kbps" }).primary.value)).toBe("1 day, 1 hour, 1 minute, 1 second");
    expect(text(ok(e, { size: 3, sizeUnit: "MB", speed: 8, speedUnit: "Mbps" }).primary.value)).toBe("3 seconds");
    expect(text(ok(e, { size: 1, sizeUnit: "B", speed: 1, speedUnit: "Gbps" }).primary.value)).toBe("8 × 10⁻⁹ seconds");
    expect(text(ok(e, { size: 3600, sizeUnit: "kB", speed: 8, speedUnit: "kbps" }).primary.value)).toBe("1 hour");
    expect(ok(e, { size: 1e12, sizeUnit: "TiB", speed: 0.001, speedUnit: "kbps" }).primary.value.kind).toBe("text");
    expect(run(e, { overhead: null }).ok).toBe(true);
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { size: 0 })).toHaveProperty("size");
    expect(errors(e, { speed: 0 })).toHaveProperty("speed");
    expect(errors(e, { overhead: 95 })).toHaveProperty("overhead");
    expect(errors(e, { overhead: -1 })).toHaveProperty("overhead");
  });
});
