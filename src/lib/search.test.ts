import { describe, expect, it } from "vitest";
import { searchEntries } from "@/calculators/registry";
import { searchCalculators } from "./search";

const entries = searchEntries();
const slugs = (query: string) => searchCalculators(entries, query).map((e) => e.slug);

describe("calculator search", () => {
  it("returns everything for an empty query", () => {
    expect(slugs("   ")).toHaveLength(entries.length);
  });

  it("ranks title matches first", () => {
    expect(slugs("salary")[0]).toMatch(/salary/);
    expect(slugs("salary")).toEqual(expect.arrayContaining(["salary-to-hourly-calculator", "hourly-to-salary-calculator"]));
    expect(slugs("roi")[0]).toBe("roi-calculator");
  });

  it("matches keywords and is case and punctuation insensitive", () => {
    expect(slugs("Return on Investment")).toContain("roi-calculator");
    expect(slugs("biweekly")).toContain("salary-to-hourly-calculator");
    expect(slugs("PERCENT")).toEqual(expect.arrayContaining(["percentage-calculator", "percentage-increase-calculator"]));
  });

  it("requires every term to match", () => {
    expect(slugs("percentage increase")).toEqual(["percentage-increase-calculator"]);
    expect(slugs("zzzz")).toEqual([]);
  });
});
