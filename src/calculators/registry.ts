import { CATEGORIES } from "./categories";
import type { CalculatorDefinition, Category, CategorySlug } from "./framework/types";
import { salesTax } from "./sales-tax";
import { squareFootage } from "./square-footage";
import { testGrade } from "./test-grade";
import { logCalculator } from "./log";
import { significantFigures } from "./significant-figures";
import { scientificNotation } from "./scientific-notation";
import { exponent } from "./exponent";
import { squareRoot } from "./square-root";
import { circumference } from "./circumference";
import { slope } from "./slope";
import { pythagorean } from "./pythagorean";
import { pValue } from "./p-value";
import { confidenceInterval } from "./confidence-interval";
import { bmi } from "./bmi";
import { tip } from "./tip";
import { discount } from "./discount";
import { compoundInterest } from "./compound-interest";
import { hourlyToSalary } from "./hourly-to-salary";
import { percentage } from "./percentage";
import { percentageIncrease } from "./percentage-increase";
import { roi } from "./roi";
import { salaryToHourly } from "./salary-to-hourly";
import type { SearchEntry } from "@/lib/search";

/**
 * Every published calculator. Only add a calculator here once its engine
 * is implemented and tested; everything else (directory, categories,
 * related links, sitemap and counts) is derived from this list.
 */
export const CALCULATORS: readonly CalculatorDefinition[] = [
  salaryToHourly,
  hourlyToSalary,
  percentage,
  percentageIncrease,
  roi,
  salesTax,
  squareFootage,
  testGrade,
  logCalculator,
  significantFigures,
  scientificNotation,
  exponent,
  squareRoot,
  circumference,
  slope,
  pythagorean,
  pValue,
  confidenceInterval,
  bmi,
  tip,
  discount,
  compoundInterest,
];

export function calculatorPath(slug: string): string {
  return `/calculators/${slug}`;
}

export function getCalculator(slug: string): CalculatorDefinition | undefined {
  return CALCULATORS.find((c) => c.slug === slug);
}

export function calculatorsInCategory(slug: CategorySlug): CalculatorDefinition[] {
  return CALCULATORS.filter((c) => c.category === slug);
}

/** Categories that contain at least one published calculator. */
export function activeCategories(): (Category & { count: number })[] {
  return CATEGORIES.map((category) => ({ ...category, count: calculatorsInCategory(category.slug).length })).filter(
    (category) => category.count > 0,
  );
}

export function popularCalculators(limit = 6): CalculatorDefinition[] {
  return CALCULATORS.filter((c) => c.popularRank !== undefined)
    .sort((a, b) => (a.popularRank ?? 0) - (b.popularRank ?? 0))
    .slice(0, limit);
}

/** Explicit related calculators first, then others from the same category, then the rest. */
export function relatedCalculators(calculator: CalculatorDefinition, limit = 4): CalculatorDefinition[] {
  const result: CalculatorDefinition[] = [];
  const add = (candidate: CalculatorDefinition | undefined) => {
    if (candidate && candidate.slug !== calculator.slug && !result.includes(candidate)) result.push(candidate);
  };
  calculator.related.forEach((slug) => add(getCalculator(slug)));
  calculatorsInCategory(calculator.category).forEach(add);
  CALCULATORS.forEach(add);
  return result.slice(0, limit);
}

export function searchEntries(): SearchEntry[] {
  return CALCULATORS.map((c) => ({
    slug: c.slug,
    title: c.title,
    summary: c.summary,
    category: CATEGORIES.find((cat) => cat.slug === c.category)?.name ?? "",
    keywords: [...c.keywords],
    href: calculatorPath(c.slug),
  }));
}
