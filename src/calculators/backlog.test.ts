import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { BACKLOG, priorityScore } from "./backlog";
import { renderBacklogMarkdown } from "./backlog-report";
import { ALL_CALCULATORS, CALCULATORS } from "./registry";

const normalize = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\bcalculator\b|\bconverter\b/g, "").trim();

describe("master backlog", () => {
  it("is deduplicated by id and by normalized name", () => {
    expect(new Set(BACKLOG.map((i) => i.id)).size).toBe(BACKLOG.length);
    expect(new Set(BACKLOG.map((i) => normalize(i.name))).size).toBe(BACKLOG.length);
  });

  it("lists exactly the published registry calculators as published", () => {
    const published = BACKLOG.filter((i) => i.status === "published").map((i) => i.id).sort();
    expect(published).toEqual(CALCULATORS.map((c) => c.id).sort());
  });

  it("matches the registry's status and category for every registered calculator", () => {
    for (const calculator of ALL_CALCULATORS) {
      const item = BACKLOG.find((i) => i.id === calculator.id);
      expect(item, calculator.id).toBeDefined();
      expect(item?.status).toBe(calculator.status);
      expect(item?.category).toBe(calculator.category);
      expect(Boolean(item?.review)).toBe(Boolean(calculator.expertReview));
    }
  });

  it("scores every item within range", () => {
    for (const item of BACKLOG) {
      for (const score of [item.usefulness, item.demand, item.difficulty]) expect(score >= 1 && score <= 5).toBe(true);
      expect(item.collections.length).toBeGreaterThan(0);
    }
    expect(priorityScore({ usefulness: 5, demand: 5, difficulty: 1 })).toBe(19);
  });

  it("keeps docs/calculator-backlog.md up to date (run npm run backlog:report)", () => {
    const committed = readFileSync(new URL("../../docs/calculator-backlog.md", import.meta.url), "utf8");
    expect(committed).toBe(renderBacklogMarkdown() + "\n");
  });
});
