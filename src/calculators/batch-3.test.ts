import { describe, expect, it } from "vitest";
import { evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import type { AnyEngine, RawValues } from "./framework/types";
import { breakEvenEngine } from "./break-even/engine";
import { dilutionEngine } from "./dilution/engine";
import { doublingTimeEngine } from "./doubling-time/engine";
import { fuelCostEngine } from "./fuel-cost/engine";
import { kineticEnergyEngine } from "./kinetic-energy/engine";
import { lengthConverterEngine } from "./length-converter/engine";
import { loanPaymentEngine } from "./loan-payment/engine";
import { meanMedianModeEngine } from "./mean-median-mode/engine";
import { molarityEngine } from "./molarity/engine";
import { ohmsLawEngine } from "./ohms-law/engine";
import { profitMarginEngine } from "./profit-margin/engine";
import { recipeScalerEngine } from "./recipe-scaler/engine";
import { runningPaceEngine } from "./running-pace/engine";
import { speedDistanceTimeEngine } from "./speed-distance-time/engine";
import { standardDeviationEngine } from "./standard-deviation/engine";
import { temperatureConverterEngine } from "./temperature-converter/engine";
import { weightConverterEngine } from "./weight-converter/engine";
import { bmrEngine, mifflinStJeor } from "./bmr/engine";

function run(engine: AnyEngine, raw: RawValues) {
  return evaluate(engine, { ...rawFromValues(engine, {}), ...raw });
}
function ok(engine: AnyEngine, raw: RawValues) {
  const result = run(engine, raw);
  if (!result.ok) throw new Error(JSON.stringify(result.errors));
  return result.result;
}
const primary = (engine: AnyEngine, raw: RawValues, currency = "USD") => formatResultValue(ok(engine, raw).primary.value, currency);
const secondary = (engine: AnyEngine, raw: RawValues, label: string, currency = "USD") => {
  const item = ok(engine, raw).secondary?.find((s) => s.label === label);
  if (!item) throw new Error(`missing ${label}`);
  return formatResultValue(item.value, currency);
};
const errors = (engine: AnyEngine, raw: RawValues) => {
  const result = run(engine, raw);
  return result.ok ? {} : result.errors;
};

describe("rejects invalid or impossible inputs", () => {
  it.each([
    [temperatureConverterEngine, { value: "-300", from: "C" }, "value"],
    [temperatureConverterEngine, { value: "-1", from: "K" }, "value"],
    [dilutionEngine, { solve: "v1", c1: "1", c2: "2" }, "c2"],
    [dilutionEngine, { solve: "c2", v1: "200", v2: "100" }, "v1"],
    [doublingTimeEngine, { initial: "100", final: "100" }, "final"],
    [breakEvenEngine, { price: "10", variable: "10" }, "variable"],
    [standardDeviationEngine, { data: "5", kind: "sample" }, "data"],
    [standardDeviationEngine, { data: "1, x, 3" }, "data"],
    [meanMedianModeEngine, { data: "" }, "data"],
    [runningPaceEngine, { hours: "0", minutes: "0", seconds: "0" }, "seconds"],
    [loanPaymentEngine, { years: "0.01" }, "years"],
    [speedDistanceTimeEngine, { solve: "speed", hours: "0", minutes: "0" }, "minutes"],
    [ohmsLawEngine, { known: "VR", resistance: "0" }, "resistance"],
    [molarityEngine, { molarMass: "0" }, "molarMass"],
    [profitMarginEngine, { price: "0" }, "price"],
    [fuelCostEngine, { efficiency: "0" }, "efficiency"],
    [bmrEngine, { age: "12" }, "age"],
  ] as const)("case %#", (engine, raw, field) => {
    expect(errors(engine as AnyEngine, raw as RawValues)).toHaveProperty(field);
  });
});

describe("results, units and rounding", () => {
  it("converts units in both directions", () => {
    expect(primary(lengthConverterEngine, { value: "1", from: "mi", to: "ft" })).toBe("5,280 ft");
    expect(primary(lengthConverterEngine, { value: "30.48", from: "cm", to: "ft" })).toBe("1 ft");
    expect(primary(weightConverterEngine, { value: "1", from: "st", to: "kg" })).toBe("6.35029318 kg");
    expect(primary(weightConverterEngine, { value: "1", from: "oz", to: "g" })).toBe("28.34952313 g");
    expect(primary(temperatureConverterEngine, { value: "0", from: "K", to: "C" })).toBe("-273.15 °C");
  });

  it("solves speed, distance and time", () => {
    expect(primary(speedDistanceTimeEngine, { solve: "distance", speed: "80", hours: "1", minutes: "45" })).toBe("140 km");
    expect(secondary(speedDistanceTimeEngine, { solve: "speed", distance: "36", hours: "1", minutes: "0" }, "In meters per second")).toBe("10 m/s");
  });

  it("solves Ohm's law for each pair", () => {
    expect(primary(ohmsLawEngine, { known: "VI", voltage: "9", current: "0.03" })).toBe("300 Ω");
    expect(secondary(ohmsLawEngine, { known: "VR", voltage: "12", resistance: "4" }, "Power (P = V × I)")).toBe("36 W");
  });

  it("handles kinetic energy units", () => {
    expect(primary(kineticEnergyEngine, { mass: "2", massUnit: "kg", velocity: "3", velocityUnit: "m/s" })).toBe("9 J");
  });

  it("solves dilution for every unknown", () => {
    expect(primary(dilutionEngine, { solve: "v2", c1: "5", v1: "10", c2: "1" })).toBe("50");
    expect(primary(dilutionEngine, { solve: "c1", v1: "10", c2: "0.1", v2: "100" })).toBe("1");
  });

  it("scales recipes with kitchen fractions and keeps lines without amounts", () => {
    const result = ok(recipeScalerEngine, { original: "4", desired: "6", ingredients: "2 cups flour\n3/4 cup sugar\nSalt to taste\n\n1 1/2 tsp yeast" });
    expect(result.tables![0].rows.map((r) => formatResultValue(r.cells[0], "USD"))).toEqual(["3 cups flour", "1 1/8 cup sugar", "Salt to taste", "2 1/4 tsp yeast"]);
  });

  it("formats running paces", () => {
    expect(primary(runningPaceEngine, { race: "5k", hours: "0", minutes: "25", seconds: "0" })).toBe("5:00 /km");
    expect(secondary(runningPaceEngine, { race: "10k", hours: "0", minutes: "50", seconds: "0" }, "Pace per mile")).toBe("8:03 /mi");
    expect(primary(runningPaceEngine, { race: "custom", distance: "1", unit: "mi", hours: "0", minutes: "8", seconds: "0" })).toBe("4:58 /km");
  });

  it("matches the Mifflin–St Jeor equation in both unit systems", () => {
    expect(mifflinStJeor("male", 80, 180, 30)).toBe(1780);
    expect(primary(bmrEngine, { units: "imperial", sex: "female", age: "40", weightLb: "150", heightFt: "5", heightIn: "6" })).toBe(
      `${Math.round(mifflinStJeor("female", 150 * 0.45359237, 66 * 2.54, 40)).toLocaleString("en-US")} kcal/day`,
    );
  });

  it("builds a loan schedule that ends at zero", () => {
    const result = ok(loanPaymentEngine, { principal: "12000", rate: "5", years: "2" });
    const rows = result.tables![0].rows;
    expect(rows).toHaveLength(2);
    expect(formatResultValue(rows[1].cells[2], "USD")).toBe("$0.00");
    const principalPaid = rows.reduce((s, r) => s + (r.cells[0].kind === "currency" ? r.cells[0].amount : 0), 0);
    expect(principalPaid).toBeCloseTo(12000, 6);
  });

  it("reports margin, markup and loss", () => {
    expect(secondary(profitMarginEngine, { cost: "60", price: "100" }, "Markup")).toBe("66.67%");
    expect(primary(profitMarginEngine, { cost: "120", price: "100" })).toBe("-20%");
    expect(secondary(profitMarginEngine, { cost: "0", price: "10" }, "Markup")).toBe("Undefined at zero cost");
  });

  it("describes data sets", () => {
    expect(secondary(meanMedianModeEngine, { data: "1 2 3" }, "Mode")).toBe("No mode (all values occur once)");
    expect(secondary(meanMedianModeEngine, { data: "1 1 2 2 3" }, "Modes")).toBe("1, 2");
    expect(secondary(standardDeviationEngine, { data: "1, 2, 3, 4", kind: "sample" }, "Standard error of the mean")).toBe("0.6454972244");
    expect(primary(standardDeviationEngine, { data: "7 7 7", kind: "population" })).toBe("0");
  });

  it("computes fuel cost per distance", () => {
    expect(secondary(fuelCostEngine, { units: "us", distance: "300", efficiency: "30", price: "3.5" }, "Cost per mile")).toBe("$0.12");
  });
});
