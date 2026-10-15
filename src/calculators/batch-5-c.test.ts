import { describe, expect, it } from "vitest";
import { defaultRawValues, evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import type { AnyEngine, CalculatorDefinition, EngineValues, ResultValue } from "./framework/types";
import { creditCardPayoff } from "./credit-card-payoff";
import { budgetRule } from "./budget-rule";
import { debtToIncome } from "./debt-to-income";
import { savingsGoal } from "./savings-goal";
import { finalGrade } from "./final-grade";
import { requiredPayment, simulatePayoff } from "./credit-card-payoff/engine";
import { monthlyDeposit } from "./savings-goal/engine";
import { neededScore, overallGrade } from "./final-grade/engine";

const CALCS: CalculatorDefinition[] = [creditCardPayoff, budgetRule, debtToIncome, savingsGoal, finalGrade];

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
  return num(found.value);
};

describe("batch 5 group C: content and examples", () => {
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
    expect(c.popularRank).toBeUndefined();
    expect(c.featured).toBeUndefined();
    expect(evaluate(c.engine, defaultRawValues(c.engine)).ok).toBe(true);
  });

  it("sets review flags exactly where required", () => {
    expect(creditCardPayoff.expertReview).toEqual({ area: "financial", status: "pending" });
    expect(debtToIncome.expertReview).toEqual({ area: "financial", status: "pending" });
    expect(savingsGoal.expertReview).toEqual({ area: "financial", status: "pending" });
    expect(budgetRule.expertReview).toBeUndefined();
    expect(finalGrade.expertReview).toBeUndefined();
    for (const c of [creditCardPayoff, debtToIncome, savingsGoal]) {
      const assumptions = c.assumptions.join(" ");
      expect(assumptions).toMatch(/not financial advice/i);
      expect(assumptions).toMatch(/estimate/i);
      expect(assumptions).toMatch(/not been professionally reviewed/i);
    }
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

describe("credit card payoff", () => {
  const e = creditCardPayoff.engine;
  it("matches reference values for a fixed payment", () => {
    // python3 month-by-month loop (interest = B*apr/1200, then pay; last payment = B + interest):
    // (4800, 22.9, 180) -> 38 months, interest 1971.3741185331285, total 6771.374118533129, last 111.37411853312942
    const r = ok(e, { mode: "payment", balance: 4800, apr: 22.9, payment: 180 });
    expect(num(r.primary.value)).toBe(38);
    expect(item(r, "Total interest")).toBeCloseTo(1971.3741185331285, 9);
    expect(item(r, "Total paid")).toBeCloseTo(6771.374118533129, 9);
    expect(item(r, "Final (partial) payment")).toBeCloseTo(111.37411853312942, 9);
    // same loop: (2000, 18, 100) -> 24 months, interest 395.6535443312162
    expect(primary(e, { mode: "payment", balance: 2000, apr: 18, payment: 100 })).toBe(24);
    // same loop: (10000, 29.99, 300) -> 73 months, interest 11756.626668219507
    const big = ok(e, { mode: "payment", balance: 10000, apr: 29.99, payment: 300 });
    expect(num(big.primary.value)).toBe(73);
    expect(item(big, "Total interest")).toBeCloseTo(11756.626668219507, 9);
    // python3: B=4800;i=22.9/1200; 12 months -> interest 980.4641535682395, balance 3620.46415356824
    const table = r.tables![0];
    expect(table.rows).toHaveLength(4);
    expect(num(table.rows[0].cells[0])).toBeCloseTo(980.4641535682395, 9);
    expect(num(table.rows[0].cells[2])).toBeCloseTo(3620.46415356824, 9);
    expect(num(table.rows[3].cells[2])).toBe(0);
  });

  it("matches reference values for a target number of months", () => {
    // python3: 5000*0.015/(1-1.015**-24) = 249.620509847545; interest = p*24-5000 = 990.8922363410802
    const r = ok(e, { mode: "months", balance: 5000, apr: 18, months: 24 });
    expect(num(r.primary.value)).toBeCloseTo(249.620509847545, 9);
    expect(item(r, "Total interest")).toBeCloseTo(990.8922363410802, 6);
    expect(item(r, "Number of payments")).toBe(24);
    // python3: 12000*(0.15/12)/(1-(1+0.15/12)**-60) = 285.4791610363054
    expect(requiredPayment(12000, 15, 60)).toBeCloseTo(285.4791610363054, 9);
    // the simulation with that payment ends in exactly n months
    const plan = simulatePayoff(12000, 15, requiredPayment(12000, 15, 60), 60);
    expect(plan.months).toBe(60);
    expect(plan.lastPayment).toBeCloseTo(285.4791610363054, 6);
  });

  it("handles edge cases", () => {
    // pays it all in the first month: python3 1000*(1+0.01) = 1010
    const one = ok(e, { mode: "payment", balance: 1000, apr: 12, payment: 2000 });
    expect(num(one.primary.value)).toBe(1);
    expect(item(one, "Total paid")).toBeCloseTo(1010, 9);
    // 0% APR
    expect(primary(e, { mode: "payment", balance: 1000, apr: 0, payment: 300 })).toBe(4);
    expect(primary(e, { mode: "months", balance: 999, apr: 0, months: 1 })).toBeCloseTo(999, 9);
    expect(primary(e, { mode: "months", balance: 1e6, apr: 100, months: 600 })).toBeGreaterThan(0);
    expect(ok(e, { mode: "months", balance: 1000, apr: 0, months: 5 }).notes).toHaveLength(3);
  });

  it("rejects impossible inputs", () => {
    // first month's interest is 5000*0.24/12 = 100
    expect(errors(e, { mode: "payment", balance: 5000, apr: 24, payment: 100 }).payment).toContain("never be paid off");
    expect(errors(e, { mode: "payment", balance: 5000, apr: 24, payment: 50 }).payment).toContain("$100.00");
    // python3: math.log(12/2)/math.log(1.001) = 1792.66 months > 1200; math.log(15/5)/math.log(1.001) = 1099.16 months
    expect(errors(e, { mode: "payment", balance: 10000, apr: 1.2, payment: 12 }).payment).toContain("1,200 months");
    expect(primary(e, { mode: "payment", balance: 10000, apr: 1.2, payment: 15 })).toBe(1100);
    expect(errors(e, { mode: "payment", balance: 0, apr: 10, payment: 100 }).balance).toBeDefined();
    expect(errors(e, { mode: "payment", balance: 100, apr: 101, payment: 100 }).apr).toBeDefined();
    expect(errors(e, { mode: "payment", balance: 100, apr: 10, payment: 0 }).payment).toBeDefined();
    expect(errors(e, { mode: "months", balance: 100, apr: 10, months: 0 }).months).toBeDefined();
    expect(errors(e, { mode: "months", balance: 100, apr: 10, months: 601 }).months).toBeDefined();
    expect(errors(e, { mode: "months", balance: 100, apr: 10, months: 12.5 }).months).toBeDefined();
  });
});

describe("budget rule", () => {
  const e = budgetRule.engine;
  it("matches reference values", () => {
    // python3: 3850*.5, 3850*.3, 3850*.2 = 1925.0 1155.0 770.0
    const r = ok(e, { income: 3850, rule: "50-30-20" });
    expect(num(r.primary.value)).toBeCloseTo(1925, 9);
    expect(item(r, "Wants")).toBeCloseTo(1155, 9);
    expect(item(r, "Savings and extra debt repayment")).toBeCloseTo(770, 9);
    // python3: 4100*0.8 = 3280.0; 4100*.2*12 = 9840.0
    const eighty = ok(e, { income: 4100, rule: "80-20" });
    expect(num(eighty.primary.value)).toBeCloseTo(3280, 9);
    expect(eighty.tables![0].rows).toHaveLength(2);
    expect(num(eighty.tables![0].rows[1].cells[2])).toBeCloseTo(9840, 9);
    // python3: 5200*0.1 = 520.0
    expect(item(ok(e, { income: 5200, rule: "70-20-10" }), "Debt repayment or giving")).toBeCloseTo(520, 9);
  });
  it("handles custom splits", () => {
    expect(primary(e, { income: 1000, rule: "custom", needsPct: 100, wantsPct: 0, savingsPct: 0 })).toBeCloseTo(1000, 9);
    expect(primary(e, { income: 1000, rule: "custom", needsPct: 33.3, wantsPct: 33.3, savingsPct: 33.4 })).toBeCloseTo(333, 9);
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { income: 3000, rule: "custom", needsPct: 50, wantsPct: 30, savingsPct: 10 }).savingsPct).toContain("90%");
    expect(errors(e, { income: 3000, rule: "custom", needsPct: 101, wantsPct: 0, savingsPct: 0 }).needsPct).toBeDefined();
    expect(errors(e, { income: 0, rule: "50-30-20" }).income).toBeDefined();
    // custom fields are ignored for fixed rules
    expect(errors(e, { income: 3000, rule: "50-30-20", needsPct: 90, wantsPct: 30, savingsPct: 10 })).toEqual({});
  });
});

describe("debt to income", () => {
  const e = debtToIncome.engine;
  const zero = { housing: 0, car: 0, student: 0, creditCards: 0, other: 0 };
  it("matches reference values", () => {
    // python3: (2100+450+380+150+200)/7800*100 = 42.05128205128205; 2100/7800*100 = 26.923076923076923
    const r = ok(e, { income: 7800, housing: 2100, car: 450, student: 380, creditCards: 150, other: 200 });
    expect(num(r.primary.value)).toBeCloseTo(42.05128205128205, 9);
    expect(item(r, "Housing ratio (front-end)")).toBeCloseTo(26.923076923076923, 9);
    expect(item(r, "Total monthly debt payments")).toBeCloseTo(3280, 9);
    expect(item(r, "Debt payments other than housing")).toBeCloseTo(1180, 9);
    // python3: 1450/5400*100 = 26.851851851851855
    expect(item(ok(e, { income: 5400, ...zero, housing: 1450, car: 310, creditCards: 120 }), "Housing ratio (front-end)")).toBeCloseTo(26.851851851851855, 9);
    // python3: 500/4000*100 = 12.5
    expect(primary(e, { income: 4000, ...zero, student: 500 })).toBeCloseTo(12.5, 9);
  });
  it("handles edge cases and never labels results as approved or good", () => {
    expect(primary(e, { income: 3000, ...zero })).toBe(0);
    const over = ok(e, { income: 1000, ...zero, housing: 1500 });
    expect(num(over.primary.value)).toBeCloseTo(150, 9);
    expect(over.notes).toHaveLength(3);
    const all = JSON.stringify(over) + JSON.stringify(debtToIncome);
    expect(all).not.toMatch(/approved|\bgood\b/i);
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { income: 0, ...zero }).income).toBeDefined();
    expect(errors(e, { income: 5000, ...zero, car: -1 }).car).toBeDefined();
  });
});

describe("savings goal", () => {
  const e = savingsGoal.engine;
  it("matches reference values", () => {
    // python3: n=round(5*12)=60; i=4/1200; (20000-2500*(1+i)**60)*i/((1+i)**60-1) = 255.62246930048792; 2500*(1+i)**60 = 3052.4914848553035
    const r = ok(e, { goal: 20000, current: 2500, rate: 4, years: 5 });
    expect(num(r.primary.value)).toBeCloseTo(255.62246930048792, 9);
    expect(item(r, "Current savings at the end")).toBeCloseTo(3052.4914848553035, 9);
    // python3: n=150; i=7/1200; (50000-5000*(1+i)**150)*i/((1+i)**150-1) = 159.30468586647882
    expect(primary(e, { goal: 50000, current: 5000, rate: 7, years: 12.5 })).toBeCloseTo(159.30468586647882, 9);
    // python3: 15000-1000-262.99880508404374*48 = 1376.0573559659006
    expect(item(ok(e, { goal: 15000, current: 1000, rate: 4.5, years: 4 }), "Growth earned")).toBeCloseTo(1376.0573559659006, 6);
    expect(monthlyDeposit(6000, 1200, 0, 24)).toBeCloseTo(200, 9);
  });
  it("handles a goal already reached", () => {
    // python3: 9000*(1+5/1200)**36 = 10453.25008200121 > 10000
    const r = ok(e, { goal: 10000, current: 9000, rate: 5, years: 3 });
    expect(num(r.primary.value)).toBe(0);
    expect(r.notes).toHaveLength(2);
    expect(item(r, "Balance at the end")).toBeCloseTo(10453.25008200121, 9);
    expect(item(r, "Growth earned")).toBeCloseTo(1453.25008200121, 9);
    expect(primary(e, { goal: 100, current: 500, rate: 0, years: 1 })).toBe(0);
    expect(primary(e, { goal: 1e6, current: 0, rate: 30, years: 100 })).toBeGreaterThan(0);
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { goal: 1000, current: 0, rate: 4, years: 0.04 }).years).toBeDefined();
    expect(errors(e, { goal: 1000, current: 0, rate: 4, years: 0 }).years).toBeDefined();
    expect(errors(e, { goal: 1000, current: 0, rate: 31, years: 2 }).rate).toBeDefined();
    expect(errors(e, { goal: 0, current: 0, rate: 4, years: 2 }).goal).toBeDefined();
    expect(errors(e, { goal: 1000, current: -5, rate: 4, years: 2 }).current).toBeDefined();
  });
});

describe("final grade", () => {
  const e = finalGrade.engine;
  it("matches reference values", () => {
    // python3: (88/100-84/100*(1-0.3))/0.3*100 = 97.33333333333334; 84*.7+30 = 88.8; 84*.7 = 58.8
    const r = ok(e, { current: 84, weight: 30, desired: 88 });
    expect(num(r.primary.value)).toBeCloseTo(97.33333333333334, 9);
    expect(item(r, "Overall grade if you score 100% on the final")).toBeCloseTo(88.8, 9);
    expect(item(r, "Overall grade if you score 0% on the final")).toBeCloseTo(58.8, 9);
    // python3: (40-95*0.5)/0.5 = -15.0
    expect(neededScore(95, 50, 40)).toBeCloseTo(-15, 9);
    // python3: 70*0.9+100*0.1 = 73.0
    expect(overallGrade(70, 10, 100)).toBeCloseTo(73, 9);
  });
  it("adds notes for impossible and secured goals", () => {
    const over = ok(e, { current: 65, weight: 20, desired: 75 });
    expect(over.notes?.[0]).toContain("more than 100%");
    const secured = ok(e, { current: 95, weight: 50, desired: 40 });
    expect(secured.notes?.[0]).toContain("secured");
    expect(ok(e, { current: 80, weight: 30, desired: 80 }).notes).toHaveLength(1);
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { current: 80, weight: 0, desired: 80 }).weight).toBeDefined();
    expect(errors(e, { current: 80, weight: 100, desired: 80 }).weight).toBeDefined();
    expect(errors(e, { current: 201, weight: 30, desired: 80 }).current).toBeDefined();
    expect(errors(e, { current: 80, weight: 30, desired: -1 }).desired).toBeDefined();
  });
});
