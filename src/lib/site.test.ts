import { describe, expect, it } from "vitest";
import { PRODUCTION_ORIGIN, absoluteUrl, isIndexable, normalizeOrigin, originProblem, resolveSiteUrl } from "./site";

describe("site origin", () => {
  it("normalizes a configured URL to a bare origin", () => {
    expect(normalizeOrigin("https://hourlytosalarycalculator.net")).toBe(PRODUCTION_ORIGIN);
    expect(normalizeOrigin(" https://hourlytosalarycalculator.net/ ")).toBe(PRODUCTION_ORIGIN);
    expect(normalizeOrigin("https://hourlytosalarycalculator.net//")).toBe(PRODUCTION_ORIGIN);
    expect(normalizeOrigin("https://HourlyToSalaryCalculator.NET/es/")).toBe(PRODUCTION_ORIGIN);
    expect(normalizeOrigin("http://localhost:3000/")).toBe("http://localhost:3000");
    expect(() => normalizeOrigin("hourlytosalarycalculator.net")).toThrow();
    expect(() => normalizeOrigin("ftp://hourlytosalarycalculator.net")).toThrow();
  });

  it("defaults every production build to the production domain", () => {
    expect(resolveSiteUrl({ NEXT_PUBLIC_SITE_URL: "https://hourlytosalarycalculator.net/" })).toBe(PRODUCTION_ORIGIN);
    expect(resolveSiteUrl({ NODE_ENV: "production" })).toBe(PRODUCTION_ORIGIN);
    expect(resolveSiteUrl({ VERCEL_ENV: "production" })).toBe(PRODUCTION_ORIGIN);
    // Previews keep production canonicals (and are noindexed) instead of advertising a vercel.app URL.
    expect(resolveSiteUrl({ VERCEL_ENV: "preview", NODE_ENV: "production" })).toBe(PRODUCTION_ORIGIN);
    expect(resolveSiteUrl({ NEXT_PUBLIC_SITE_URL: "  ", NODE_ENV: "production" })).toBe(PRODUCTION_ORIGIN);
    expect(resolveSiteUrl({ NODE_ENV: "development" })).toBe("http://localhost:3000");
    expect(resolveSiteUrl({ NODE_ENV: "test" })).toBe("http://localhost:3000");
  });

  it("flags origins that must not be used in production", () => {
    expect(originProblem(PRODUCTION_ORIGIN)).toBeUndefined();
    expect(originProblem("http://localhost:3000")).toMatch(/local/);
    expect(originProblem("https://calcnest.example")).toMatch(/placeholder/);
    expect(originProblem("https://calculator-website-abc.vercel.app")).toMatch(/Vercel/);
    expect(originProblem("https://www.hourlytosalarycalculator.net")).toMatch(/not the intended/);
    expect(originProblem("http://hourlytosalarycalculator.net")).toMatch(/not the intended/);
  });

  it("indexes production only", () => {
    expect(isIndexable({})).toBe(true);
    expect(isIndexable({ VERCEL_ENV: "production" })).toBe(true);
    expect(isIndexable({ VERCEL_ENV: "preview" })).toBe(false);
    expect(isIndexable({ VERCEL_ENV: "development" })).toBe(false);
  });

  it("builds absolute URLs without duplicate slashes", () => {
    for (const path of ["/", "", "/es", "calculators/tip-calculator", "/ar/calculators/bmi-calculator", "/sitemap.xml"]) {
      const url = absoluteUrl(path);
      expect(url.replace(/^https?:\/\//, "")).not.toContain("//");
      expect(url.endsWith("/")).toBe(false);
    }
  });
});
