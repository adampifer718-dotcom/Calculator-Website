import { describe, expect, it } from "vitest";
import { CATEGORIES } from "./categories";
import { evaluate, defaultRawValues, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import type { Field } from "./framework/types";
import { CALCULATORS, activeCategories, getCalculator, popularCalculators, relatedCalculators } from "./registry";

const unique = (values: string[]) => new Set(values).size === values.length;

describe("calculator registry", () => {
  it("has unique slugs, titles and metadata", () => {
    expect(unique(CALCULATORS.map((c) => c.slug))).toBe(true);
    expect(unique(CALCULATORS.map((c) => c.title))).toBe(true);
    expect(unique(CALCULATORS.map((c) => c.metaTitle))).toBe(true);
    expect(unique(CALCULATORS.map((c) => c.metaDescription))).toBe(true);
    expect(unique(CATEGORIES.map((c) => c.metaTitle))).toBe(true);
  });

  it.each(CALCULATORS.map((c) => [c.slug, c] as const))("%s has valid SEO fields", (slug, calculator) => {
    expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    // Title template adds " | CalcNest" (11 characters).
    expect(calculator.metaTitle.length + 11).toBeLessThanOrEqual(70);
    expect(calculator.metaDescription.length).toBeGreaterThanOrEqual(70);
    expect(calculator.metaDescription.length).toBeLessThanOrEqual(160);
    expect(calculator.updated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it.each(CALCULATORS.map((c) => [c.slug, c] as const))("%s has complete content", (_slug, calculator) => {
    expect(CATEGORIES.some((c) => c.slug === calculator.category)).toBe(true);
    expect(calculator.intro.length).toBeGreaterThan(0);
    expect(calculator.howToUse.length).toBeGreaterThan(0);
    expect(calculator.formulas.length).toBeGreaterThan(0);
    expect(calculator.examples.length).toBeGreaterThan(0);
    expect(calculator.faqs.length).toBeGreaterThan(0);
    expect(calculator.assumptions.length).toBeGreaterThan(0);
    for (const slug of calculator.related) {
      expect(getCalculator(slug), `related slug ${slug}`).toBeDefined();
      expect(slug).not.toBe(calculator.slug);
    }
  });

  it.each(CALCULATORS.map((c) => [c.slug, c] as const))("%s has valid default inputs", (_slug, calculator) => {
    const fields = calculator.engine.fields as readonly Field[];
    expect(unique(fields.map((f) => f.id))).toBe(true);
    expect(evaluate(calculator.engine, defaultRawValues(calculator.engine)).ok).toBe(true);
  });

  it.each(CALCULATORS.flatMap((c) => c.examples.map((e) => [c.slug, e.title, c, e] as const)))(
    "%s example “%s” matches its expected result",
    (_slug, _title, calculator, example) => {
      const evaluation = evaluate(calculator.engine, rawFromValues(calculator.engine, example.inputs));
      expect(evaluation.ok).toBe(true);
      if (!evaluation.ok) return;
      const value = evaluation.result.primary.value;
      if (typeof example.expectedPrimary === "string") {
        expect(formatResultValue(value, String(example.inputs.currency ?? "USD"))).toBe(example.expectedPrimary);
        return;
      }
      const actual = value.kind === "currency" ? value.amount : value.kind === "text" ? Number.NaN : value.value;
      expect(actual).toBeCloseTo(example.expectedPrimary, 9);
    },
  );

  it("only exposes categories that contain calculators", () => {
    for (const category of activeCategories()) expect(category.count).toBeGreaterThan(0);
    const total = activeCategories().reduce((sum, c) => sum + c.count, 0);
    expect(total).toBe(CALCULATORS.length);
  });

  it("returns related calculators without the current page or duplicates", () => {
    for (const calculator of CALCULATORS) {
      const related = relatedCalculators(calculator);
      expect(related.map((c) => c.slug)).not.toContain(calculator.slug);
      expect(unique(related.map((c) => c.slug))).toBe(true);
      expect(related.length).toBe(Math.min(4, CALCULATORS.length - 1));
    }
  });

  it("orders popular calculators by rank", () => {
    const ranks = popularCalculators().map((c) => c.popularRank ?? 0);
    expect(ranks).toEqual([...ranks].sort((a, b) => a - b));
  });

  it("states accurate figures in the salary intro", () => {
    const salary = getCalculator("salary-to-hourly-calculator")!;
    expect(salary.intro.join(" ")).toContain("$28.85");
    expect((60000 / 2080).toFixed(2)).toBe("28.85");
    expect((60000 / (37.5 * 52)).toFixed(2)).toBe("30.77");
  });
});

describe("calculator widgets", () => {
  it("registers exactly one interactive form per published calculator", async () => {
    const { readFile } = await import("node:fs/promises");
    const source = await readFile(new URL("./widgets.tsx", import.meta.url), "utf8");
    const registered = [...source.matchAll(/^\s+"([a-z0-9-]+)": dynamic\(\(\) => import\("\.\/([a-z0-9-]+)\/widget"\)\)/gm)];
    expect(registered.map((m) => m[1]).sort()).toEqual(CALCULATORS.map((c) => c.slug).sort());
  });
});
