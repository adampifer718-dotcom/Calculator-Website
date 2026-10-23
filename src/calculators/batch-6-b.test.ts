import { describe, expect, it } from "vitest";
import { evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import type { AnyEngine, CalculatorDefinition, EngineValues, ResultValue } from "./framework/types";
import { correlation } from "./correlation";
import { bayes } from "./bayes";
import { projectileMotion } from "./projectile-motion";
import { force } from "./force";
import { momentum } from "./momentum";
import { correlationEngine, pearson, ranks, spearman, strengthOf } from "./correlation/engine";
import { bayesEngine } from "./bayes/engine";
import { GRAVITY, projectileMotionEngine } from "./projectile-motion/engine";
import { FORCE_N, forceEngine } from "./force/engine";
import { LB_FT_S, momentumEngine } from "./momentum/engine";

const DEFINITIONS: CalculatorDefinition[] = [correlation, bayes, projectileMotion, force, momentum];

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
const primary = (engine: AnyEngine, values: EngineValues) => num(ok(engine, values).primary.value);
const item = (engine: AnyEngine, values: EngineValues, label: string) => {
  const found = ok(engine, values).secondary?.find((s) => s.label === label);
  if (!found) throw new Error(`missing ${label}`);
  return found.value;
};

describe("batch 6 group B: content and examples", () => {
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
    expect(def.addedOn).toBe("2026-10-22");
    expect(def.updated).toBe("2026-10-22");
    expect(def.status).toBe("published");
    expect(def.sources.length).toBeGreaterThan(0);
    expect(def.expertReview).toBeUndefined();
    expect(def.popularRank).toBeUndefined();
    expect(def.featured).toBeUndefined();
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

describe("correlation coefficient calculator", () => {
  const study = { x: "2, 4, 5, 7, 8, 10", y: "51, 58, 62, 69, 70, 81" };
  const tied = { x: "1, 2, 2, 3, 4, 5, 5, 6", y: "2, 1, 4, 3, 6, 5, 8, 7" };

  it("matches Python's statistics module and an mpmath t test", () => {
    // python: statistics.correlation(x, y) -> 0.9927552567394832; r*r -> 0.9855629997838772
    expect(primary(correlationEngine, study)).toBeCloseTo(0.9927552567394832, 12);
    expect(num(item(correlationEngine, study, "Coefficient of determination (r²)"))).toBeCloseTo(0.9855629997838772, 12);
    // python: r*sqrt(4/(1-r*r)) -> 16.524704785970364
    expect(num(item(correlationEngine, study, "t statistic"))).toBeCloseTo(16.524704785970364, 9);
    // mpmath: betainc(2, 0.5, 0, 4/(4+t**2), regularized=True) -> 7.85393324643e-5
    expect(text(item(correlationEngine, study, "Two-tailed p-value (H₀: no correlation)"))).toBe("0.00007854");
    // python: statistics.covariance(x, y) -> 30.2
    expect(text(item(correlationEngine, study, "Sample covariance"))).toBe("30.2");
    expect(text(item(correlationEngine, study, "Strength and direction (rule of thumb)"))).toBe("Very strong, positive");
  });

  it("uses average ranks for ties in Spearman's rho", () => {
    // python: statistics.correlation(x, y, method='ranked') -> 0.8434347122457898
    expect(num(item(correlationEngine, tied, "Spearman rank correlation (ρ)"))).toBeCloseTo(0.8434347122457898, 12);
    // python: statistics.correlation(x, y) -> 0.8553372034476997; p (df 6) -> 0.00677110987741
    expect(primary(correlationEngine, tied)).toBeCloseTo(0.8553372034476997, 12);
    expect(text(item(correlationEngine, tied, "Two-tailed p-value (H₀: no correlation)"))).toBe("0.006771");
    expect(ranks([10, 20, 20, 5])).toEqual([2, 3.5, 3.5, 1]);
    expect(spearman([1, 2, 3, 4, 5, 6], [1, 4, 9, 16, 25, 36])).toBe(1);
  });

  it("handles negative and weak correlations", () => {
    const weak = { x: "10, 20, 30, 40", y: "3, 1, 4, 1" };
    // python: statistics.correlation -> -0.25819888974716115; p (df 2) -> 0.741801110253; covariance -> -5.0
    expect(primary(correlationEngine, weak)).toBeCloseTo(-0.25819888974716115, 12);
    expect(text(item(correlationEngine, weak, "Two-tailed p-value (H₀: no correlation)"))).toBe("0.7418");
    expect(text(item(correlationEngine, weak, "Sample covariance"))).toBe("-5");
    expect(text(item(correlationEngine, weak, "Strength and direction (rule of thumb)"))).toBe("Weak, negative");
    const five = { x: "1 2 3 4 5", y: "5 3 4 1 2" };
    // python: correlation -> -0.8 (both Pearson and Spearman); p (df 3) -> 0.104088038662
    expect(primary(correlationEngine, five)).toBeCloseTo(-0.8, 12);
    expect(text(item(correlationEngine, five, "Two-tailed p-value (H₀: no correlation)"))).toBe("0.1041");
    expect(strengthOf(0.05)).toBe("negligible");
    expect(strengthOf(-0.7)).toBe("strong");
  });

  it("reports a perfect correlation with p = 0 and no infinite numbers", () => {
    const result = ok(correlationEngine, { x: "1, 2, 3", y: "2, 4, 6" });
    expect(num(result.primary.value)).toBe(1);
    expect(text(result.secondary!.find((s) => s.label === "t statistic")!.value)).toBe("Infinite (perfect correlation)");
    expect(text(result.secondary!.find((s) => s.label === "Two-tailed p-value (H₀: no correlation)")!.value)).toBe("0");
    expect(primary(correlationEngine, { x: "0.1, 0.2, 0.3, 0.4", y: "-3, -6, -9, -12" })).toBe(-1);
    expect(pearson([1, 1, 1], [1, 2, 3])).toBeNaN();
  });

  it("accepts decimal commas in German", async () => {
    const { makeCorrelationEngine } = await import("./correlation/engine");
    const { engineContext } = await import("./framework/i18n");
    const en = (await import("./correlation/text/en")).default;
    const de = makeCorrelationEngine(engineContext("de", en));
    const result = evaluate(de, { x: "1,5; 2,5; 4", y: "3; 5; 8,5" });
    expect(result.ok).toBe(true);
    // python: statistics.correlation([1.5,2.5,4],[3,5,8.5]) -> 0.9993...
    if (result.ok) expect(num(result.result.primary.value)).toBeCloseTo(pearson([1.5, 2.5, 4], [3, 5, 8.5]), 12);
  });

  it("rejects mismatched, short, constant and invalid lists", () => {
    expect(errors(correlationEngine, { x: "1, 2, 3", y: "1, 2" }).y).toBe("Enter one Y value for each X value: you have 3 X values and 2 Y values.");
    expect(errors(correlationEngine, { x: "1, 2", y: "3, 4" }).x).toBe("Enter at least 3 pairs of values.");
    expect(errors(correlationEngine, { x: "4, 4, 4", y: "1, 2, 3" })).toHaveProperty("x");
    expect(errors(correlationEngine, { x: "1, 2, 3", y: "7, 7, 7" })).toHaveProperty("y");
    expect(errors(correlationEngine, { x: "1, two, 3", y: "1, 2, 3" })).toHaveProperty("x");
    expect(errors(correlationEngine, { x: "1, 2, 3e13", y: "1, 2, 3" })).toHaveProperty("x");
    expect(errors(correlationEngine, { x: "", y: "1, 2, 3" })).toHaveProperty("x");
    const tooMany = Array.from({ length: 10001 }, (_, i) => i).join(" ");
    expect(errors(correlationEngine, { x: tooMany, y: tooMany })).toHaveProperty("x");
  });

  it("handles 10,000 pairs", () => {
    const xs = Array.from({ length: 10000 }, (_, i) => i);
    const ys = xs.map((v) => (v * 7919) % 10007);
    const result = ok(correlationEngine, { x: xs.join(" "), y: ys.join(" ") });
    expect(Math.abs(num(result.primary.value))).toBeLessThanOrEqual(1);
  });
});

describe("Bayes' theorem calculator", () => {
  const rows = (values: EngineValues) => ok(bayesEngine, values).tables![0].rows.map((r) => num(r.cells[0]));

  it("matches exact fractions", () => {
    // python (fractions): tp/(tp+fp) with 1%, 90%, 5% -> 15.384615384615385; P(B) -> 5.85
    expect(primary(bayesEngine, { prior: 1, likelihood: 90, falseAlarm: 5 })).toBeCloseTo(15.384615384615385, 9);
    expect(num(item(bayesEngine, { prior: 1, likelihood: 90, falseAlarm: 5 }, "Overall probability of the evidence P(B)"))).toBeCloseTo(5.85, 9);
    // python: fn/(fn+tn) -> 0.10621348911311737
    expect(num(item(bayesEngine, { prior: 1, likelihood: 90, falseAlarm: 5 }, "P(A | not B)"))).toBeCloseTo(0.10621348911311737, 9);
    // python: 2%, 95%, 8% -> P(B) 9.74; P(A|not B) 0.11079104808331487; counts [190, 784, 10, 9016]
    expect(num(item(bayesEngine, { prior: 2, likelihood: 95, falseAlarm: 8 }, "P(A | not B)"))).toBeCloseTo(0.11079104808331487, 9);
    expect(num(item(bayesEngine, { prior: 2, likelihood: 95, falseAlarm: 8 }, "P(not A | B)"))).toBeCloseTo(100 - 19.50718685831622, 9);
    const counts = rows({ prior: 2, likelihood: 95, falseAlarm: 8 });
    [190, 784, 10, 9016].forEach((c, i) => expect(counts[i]).toBeCloseTo(c, 9));
    // python: 40%, 30%, 2% -> P(A|not B) 32.25806451612903
    expect(num(item(bayesEngine, { prior: 40, likelihood: 30, falseAlarm: 2 }, "P(A | not B)"))).toBeCloseTo(32.25806451612903, 9);
  });

  it("handles the edges of the probability range", () => {
    expect(primary(bayesEngine, { prior: 100, likelihood: 50, falseAlarm: 10 })).toBeCloseTo(100, 12);
    expect(primary(bayesEngine, { prior: 0, likelihood: 90, falseAlarm: 10 })).toBe(0);
    expect(primary(bayesEngine, { prior: 30, likelihood: 70, falseAlarm: 0 })).toBeCloseTo(100, 12);
    // B always happens: P(A | not B) is undefined but shown as text.
    expect(text(item(bayesEngine, { prior: 30, likelihood: 100, falseAlarm: 100 }, "P(A | not B)"))).toMatch(/^Undefined/);
    expect(primary(bayesEngine, { prior: 30, likelihood: 100, falseAlarm: 100 })).toBeCloseTo(30, 12);
  });

  it("rejects P(B) = 0 and out-of-range percentages", () => {
    expect(errors(bayesEngine, { prior: 0, likelihood: 90, falseAlarm: 0 })).toHaveProperty("prior");
    expect(errors(bayesEngine, { prior: 50, likelihood: 0, falseAlarm: 0 })).toHaveProperty("prior");
    expect(errors(bayesEngine, { prior: 101 })).toHaveProperty("prior");
    expect(errors(bayesEngine, { likelihood: -1 })).toHaveProperty("likelihood");
    expect(errors(bayesEngine, { falseAlarm: 100.5 })).toHaveProperty("falseAlarm");
  });
});

describe("projectile motion calculator", () => {
  const kick = { speed: 25, speedUnit: "ms", angle: 35, height: 0, lengthUnit: "m", gravity: "earth" };
  const throwFromHeight = { speed: 15, speedUnit: "ms", angle: 20, height: 1.8, lengthUnit: "m", gravity: "earth" };

  it("matches independent python values", () => {
    // python: T=(vy+sqrt(vy*vy+2*g*h))/g with vy=25*sin(35°) -> 2.924425957646322; H -> 10.483636369745454
    expect(num(item(projectileMotionEngine, kick, "Time of flight"))).toBeCloseTo(2.924425957646322, 9);
    expect(num(item(projectileMotionEngine, kick, "Maximum height above the ground"))).toBeCloseTo(10.483636369745454, 9);
    expect(num(item(projectileMotionEngine, kick, "Time to the highest point"))).toBeCloseTo(1.462212978823161, 9);
    expect(num(item(projectileMotionEngine, kick, "Impact speed"))).toBeCloseTo(25, 9);
    expect(num(item(projectileMotionEngine, kick, "Impact angle (below horizontal)"))).toBeCloseTo(35, 9);
    // python: 15 m/s, 20°, h=1.8 -> T 1.3236318088839807, H 3.1419465438817014, impact 16.133937523121876 at 29.114579966887305°
    expect(num(item(projectileMotionEngine, throwFromHeight, "Time of flight"))).toBeCloseTo(1.3236318088839807, 9);
    expect(num(item(projectileMotionEngine, throwFromHeight, "Maximum height above the ground"))).toBeCloseTo(3.1419465438817014, 9);
    expect(num(item(projectileMotionEngine, throwFromHeight, "Impact speed"))).toBeCloseTo(16.133937523121876, 9);
    expect(num(item(projectileMotionEngine, throwFromHeight, "Impact angle (below horizontal)"))).toBeCloseTo(29.114579966887305, 9);
  });

  it("works in feet and other speed units", () => {
    const feet = { speed: 88, speedUnit: "fts", angle: 30, height: 5, lengthUnit: "ft", gravity: "earth" };
    // python: v=88*0.3048, h=5*0.3048 -> range 216.77197473425588 ft, H 35.086359766077095 ft, T 2.8443944992179406 s
    expect(primary(projectileMotionEngine, feet)).toBeCloseTo(216.77197473425588, 9);
    expect(num(item(projectileMotionEngine, feet, "Maximum height above the ground"))).toBeCloseTo(35.086359766077095, 9);
    expect(num(item(projectileMotionEngine, feet, "Time of flight"))).toBeCloseTo(2.8443944992179406, 9);
    // python: 27.373925749881035 / 0.3048 -> 89.8094676833367
    expect(num(item(projectileMotionEngine, feet, "Impact speed"))).toBeCloseTo(27.373925749881035 / 0.3048, 9);
    // python: 72 km/h = 20 m/s at 45° -> 40.78864851911713 m
    expect(primary(projectileMotionEngine, { ...kick, speed: 72, speedUnit: "kmh", angle: 45 })).toBeCloseTo(40.78864851911713, 9);
  });

  it("uses the Moon, Mars and custom gravity", () => {
    expect(GRAVITY).toEqual({ earth: 9.80665, moon: 1.62, mars: 3.73 });
    // python: level throw 12 m/s from 20 m on Mars (3.73) -> range 39.296767359834774, impact 17.123083834403193 m/s
    const mars = { speed: 12, speedUnit: "ms", angle: 0, height: 20, lengthUnit: "m", gravity: "mars" };
    expect(primary(projectileMotionEngine, mars)).toBeCloseTo(39.296767359834774, 9);
    expect(num(item(projectileMotionEngine, mars, "Impact speed"))).toBeCloseTo(17.123083834403193, 9);
    expect(num(item(projectileMotionEngine, mars, "Time to the highest point"))).toBe(0);
    // python: 400/10 * sin(60°) -> 34.64101615137755
    expect(primary(projectileMotionEngine, { ...kick, speed: 20, angle: 30, gravity: "custom", customGravity: 10 })).toBeCloseTo(34.64101615137755, 9);
  });

  it("builds a 10-row table ending on the ground", () => {
    const table = ok(projectileMotionEngine, kick).tables![0];
    expect(table.rows).toHaveLength(10);
    expect(table.rows[0].label).toBe("0 s");
    expect(num(table.rows[0].cells[1])).toBe(0);
    expect(num(table.rows[9].cells[0])).toBeCloseTo(59.88873753944443, 9);
    expect(num(table.rows[9].cells[1])).toBe(0);
    // Row 4 at T·4/9: y = vy·t − ½gt² (python: 9.835...)
    const tt = (2.924425957646322 * 4) / 9;
    const vy = 25 * Math.sin((35 * Math.PI) / 180);
    expect(num(table.rows[4].cells[1])).toBeCloseTo(vy * tt - 0.5 * 9.80665 * tt * tt, 9);
  });

  it("handles a vertical launch and extremes", () => {
    const up = ok(projectileMotionEngine, { ...kick, speed: 10, angle: 90 });
    expect(num(up.primary.value)).toBe(0);
    expect(num(up.secondary!.find((s) => s.label === "Time of flight")!.value)).toBeCloseTo(2.0394324259558565, 9);
    expect(up.notes!.some((n) => n.startsWith("At 90°"))).toBe(true);
    const huge = ok(projectileMotionEngine, { ...kick, speed: 1e12, angle: 45 });
    expect(huge.primary.value.kind).toBe("text");
    expect(ok(projectileMotionEngine, { ...kick, speed: 0.001, angle: 1 }).primary.value).toBeDefined();
  });

  it("rejects impossible inputs", () => {
    expect(errors(projectileMotionEngine, { ...kick, angle: 0, height: 0 })).toHaveProperty("angle");
    expect(errors(projectileMotionEngine, { ...kick, angle: 91 })).toHaveProperty("angle");
    expect(errors(projectileMotionEngine, { ...kick, angle: -5 })).toHaveProperty("angle");
    expect(errors(projectileMotionEngine, { ...kick, speed: 0 })).toHaveProperty("speed");
    expect(errors(projectileMotionEngine, { ...kick, height: -1 })).toHaveProperty("height");
    expect(errors(projectileMotionEngine, { ...kick, gravity: "custom", customGravity: 0 })).toHaveProperty("customGravity");
    // Custom gravity is ignored while hidden.
    expect(run(projectileMotionEngine, { ...kick, customGravity: 0 }).ok).toBe(true);
  });
});

describe("force calculator", () => {
  it("uses the exact pound-force", () => {
    expect(FORCE_N.lbf).toBeCloseTo(4.4482216152605, 13);
  });

  it("matches independent reference values", () => {
    // python: 5000/2000 -> 2.5 m/s²; 2.5/0.3048 -> 8.202099737532809 ft/s²
    expect(primary(forceEngine, { solve: "acceleration", force: 5, forceUnit: "kN", mass: 2, massUnit: "t", accelerationUnit: "fts2" })).toBeCloseTo(8.202099737532809, 9);
    // python: 0.002*9.80665/1e-5 -> 1961.33 dyn
    expect(primary(forceEngine, { solve: "force", mass: 2, massUnit: "g", acceleration: 1, accelerationUnit: "g", forceUnit: "dyn" })).toBeCloseTo(1961.33, 9);
    // python: 100 lbf under 1 g -> 100 lb
    expect(primary(forceEngine, { solve: "mass", force: 100, forceUnit: "lbf", acceleration: 1, accelerationUnit: "g", massUnit: "lb" })).toBeCloseTo(100, 9);
    // python: 3780/9.80665 -> 385.4527285056569 kg; /0.45359237 -> 849.7778049169057 lb
    const car = { solve: "force", mass: 1350, massUnit: "kg", acceleration: 2.8, accelerationUnit: "ms2", forceUnit: "kN" };
    expect(num(item(forceEngine, car, "Weight equivalent: mass that weighs this much at standard gravity"))).toBeCloseTo(385.4527285056569, 9);
    expect(num(item(forceEngine, car, "Weight equivalent in pounds"))).toBeCloseTo(849.7778049169057, 9);
    // python: 3780/4.4482216152605 -> 849.7778049169057 lbf
    expect(num(item(forceEngine, car, "In lbf"))).toBeCloseTo(849.7778049169057, 9);
    expect(num(item(forceEngine, car, "In N"))).toBeCloseTo(3780, 9);
    expect(text(item(forceEngine, car, "In dyn"))).toBe("378,000,000 dyn");
  });

  it("allows negative force and acceleration in the same direction", () => {
    expect(primary(forceEngine, { solve: "force", mass: 1000, massUnit: "kg", acceleration: -6, accelerationUnit: "ms2", forceUnit: "N" })).toBeCloseTo(-6000, 9);
    expect(primary(forceEngine, { solve: "mass", force: -6000, forceUnit: "N", acceleration: -6, accelerationUnit: "ms2", massUnit: "kg" })).toBeCloseTo(1000, 9);
    expect(primary(forceEngine, { solve: "acceleration", force: -10, forceUnit: "N", mass: 4, massUnit: "kg", accelerationUnit: "ms2" })).toBeCloseTo(-2.5, 9);
    expect(text(ok(forceEngine, { solve: "force", mass: 0.000001, massUnit: "g", acceleration: 0.000001, accelerationUnit: "ms2", forceUnit: "N" }).primary.value)).toBe("1 × 10⁻¹⁵ N");
  });

  it("rejects impossible inputs", () => {
    expect(errors(forceEngine, { solve: "mass", force: 10, acceleration: 0 })).toHaveProperty("acceleration");
    expect(errors(forceEngine, { solve: "mass", force: 0, acceleration: 2 })).toHaveProperty("force");
    expect(errors(forceEngine, { solve: "mass", force: 10, acceleration: -2 })).toHaveProperty("acceleration");
    expect(errors(forceEngine, { solve: "force", mass: 0 })).toHaveProperty("mass");
    expect(errors(forceEngine, { solve: "acceleration", mass: -3 })).toHaveProperty("mass");
    // Hidden fields are ignored.
    expect(run(forceEngine, { solve: "mass", mass: -3, force: 10, acceleration: 2 }).ok).toBe(true);
  });
});

describe("momentum calculator", () => {
  it("matches independent reference values", () => {
    const ball = { mode: "momentum", solve: "momentum", mass: 0.145, massUnit: "kg", velocity: 40, velocityUnit: "ms" };
    // python: 5.8/(0.45359237*0.3048) -> 41.95148033701738; 5.8**2/(2*0.145) -> 116
    expect(num(item(momentumEngine, ball, "In lb·ft/s"))).toBeCloseTo(41.95148033701738, 9);
    expect(num(item(momentumEngine, ball, "Kinetic energy (p² ÷ 2m)"))).toBeCloseTo(116, 9);
    expect(LB_FT_S).toBeCloseTo(0.138254954376, 12);
    // python: -12000*90/3.6 -> -300000; KE 3750000 J
    const truck = { mode: "momentum", solve: "momentum", mass: 12, massUnit: "t", velocity: -90, velocityUnit: "kmh" };
    expect(primary(momentumEngine, truck)).toBeCloseTo(-300000, 6);
    expect(num(item(momentumEngine, truck, "Kinetic energy (p² ÷ 2m)"))).toBeCloseTo(3750000, 6);
    // python: 20/4.4704 -> 4.473872584108805 kg; /0.45359237 -> 9.863200706195311 lb
    const mass = { mode: "momentum", solve: "mass", momentum: 20, velocity: 10, velocityUnit: "mph", massUnit: "lb" };
    expect(primary(momentumEngine, mass)).toBeCloseTo(9.863200706195311, 9);
    expect(num(item(momentumEngine, mass, "In kg"))).toBeCloseTo(4.473872584108805, 9);
    // python: -900/60 -> -15 m/s -> -49.21259842519685 ft/s
    expect(primary(momentumEngine, { mode: "momentum", solve: "velocity", momentum: -900, mass: 60, massUnit: "kg", velocityUnit: "fts" })).toBeCloseTo(-15 / 0.3048, 9);
  });

  it("computes impulse and the velocity change", () => {
    // python: 100*0.45359237*9.80665*0.5 -> 222.41108076302502 N·s; /(2*0.45359237) -> 245.16625 m/s; /0.3048 -> 804.351213910761 ft/s
    const kick = { mode: "impulse", force: 100, forceUnit: "lbf", duration: 0.5, impulseMass: 2, massUnit: "lb" };
    expect(primary(momentumEngine, kick)).toBeCloseTo(222.41108076302502, 9);
    expect(num(item(momentumEngine, kick, "In lbf·s"))).toBeCloseTo(50, 9);
    expect(num(item(momentumEngine, kick, "Velocity change (Δv = J ÷ m)"))).toBeCloseTo(245.16625, 9);
    expect(num(item(momentumEngine, kick, "In ft/s"))).toBeCloseTo(804.351213910761, 9);
    // Without a mass only the impulse is shown.
    const bare = ok(momentumEngine, { mode: "impulse", force: -40, forceUnit: "N", duration: 3 });
    expect(num(bare.primary.value)).toBeCloseTo(-120, 9);
    expect(bare.secondary).toHaveLength(1);
  });

  it("rejects impossible inputs", () => {
    expect(errors(momentumEngine, { mode: "momentum", solve: "momentum", mass: 0 })).toHaveProperty("mass");
    expect(errors(momentumEngine, { mode: "momentum", solve: "mass", momentum: 10, velocity: 0 })).toHaveProperty("velocity");
    expect(errors(momentumEngine, { mode: "momentum", solve: "mass", momentum: 0, velocity: 3 })).toHaveProperty("momentum");
    expect(errors(momentumEngine, { mode: "momentum", solve: "mass", momentum: 10, velocity: -3 })).toHaveProperty("velocity");
    expect(errors(momentumEngine, { mode: "impulse", duration: 0 })).toHaveProperty("duration");
    expect(errors(momentumEngine, { mode: "impulse", impulseMass: -1 })).toHaveProperty("impulseMass");
    // Momentum-mode fields are ignored in impulse mode.
    expect(run(momentumEngine, { mode: "impulse", mass: -1, velocity: 0, solve: "mass" }).ok).toBe(true);
  });
});
