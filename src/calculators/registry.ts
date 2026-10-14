import { CATEGORIES, categoryPath } from "./categories";
import { COLLECTIONS, collectionPath } from "./collections";
import type { CalculatorDefinition, Category, CategorySlug, Collection, CollectionSlug } from "./framework/types";
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
import { lengthConverter } from "./length-converter";
import { weightConverter } from "./weight-converter";
import { temperatureConverter } from "./temperature-converter";
import { speedDistanceTime } from "./speed-distance-time";
import { ohmsLaw } from "./ohms-law";
import { kineticEnergy } from "./kinetic-energy";
import { molarity } from "./molarity";
import { dilution } from "./dilution";
import { doublingTime } from "./doubling-time";
import { rainwaterHarvesting } from "./rainwater-harvesting";
import { recipeScaler } from "./recipe-scaler";
import { runningPace } from "./running-pace";
import { bmr } from "./bmr";
import { electricityCost } from "./electricity-cost";
import { loanPayment } from "./loan-payment";
import { breakEven } from "./break-even";
import { profitMargin } from "./profit-margin";
import { fuelCost } from "./fuel-cost";
import { meanMedianMode } from "./mean-median-mode";
import { standardDeviation } from "./standard-deviation";
import { hourlyToSalary } from "./hourly-to-salary";
import { percentage } from "./percentage";
import { percentageIncrease } from "./percentage-increase";
import { roi } from "./roi";
import { salaryToHourly } from "./salary-to-hourly";

/**
 * Every calculator definition, whatever its publication status. Add a
 * calculator here as soon as work starts; it only appears on public pages
 * once its status is "published" (after implementation and tests).
 */
export const ALL_CALCULATORS: readonly CalculatorDefinition[] = [] = [
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
  lengthConverter,
  weightConverter,
  temperatureConverter,
  speedDistanceTime,
  ohmsLaw,
  kineticEnergy,
  molarity,
  dilution,
  doublingTime,
  rainwaterHarvesting,
  recipeScaler,
  runningPace,
  bmr,
  electricityCost,
  loanPayment,
  breakEven,
  profitMargin,
  fuelCost,
  meanMedianMode,
  standardDeviation,
];

/**
 * Published calculators. Public pages, navigation, counts, related links,
 * search and the sitemap are all derived from this list.
 */
export const CALCULATORS: readonly CalculatorDefinition[] = ALL_CALCULATORS.filter((c) => c.status === "published");

export function calculatorPath(slug: string): string {
  return `/calculators/${slug}`;
}

/** Published calculator by slug. Unpublished calculators are never returned. */
export function getCalculator(slug: string): CalculatorDefinition | undefined {
  return CALCULATORS.find((c) => c.slug === slug);
}

export function calculatorsInCategory(slug: CategorySlug): CalculatorDefinition[] {
  return CALCULATORS.filter((c) => c.category === slug);
}

export function calculatorsInCollection(slug: CollectionSlug): CalculatorDefinition[] {
  return CALCULATORS.filter((c) => c.collections.includes(slug));
}

/** Categories that contain at least one published calculator. */
export function activeCategories(): (Category & { count: number })[] {
  return CATEGORIES.map((category) => ({ ...category, count: calculatorsInCategory(category.slug).length })).filter(
    (category) => category.count > 0,
  );
}

/** Collections that contain at least one published calculator. */
export function activeCollections(): (Collection & { count: number })[] {
  return COLLECTIONS.map((collection) => ({ ...collection, count: calculatorsInCollection(collection.slug).length })).filter(
    (collection) => collection.count > 0,
  );
}

export function popularCalculators(limit = 6): CalculatorDefinition[] {
  return CALCULATORS.filter((c) => c.popularRank !== undefined)
    .sort((a, b) => (a.popularRank ?? 0) - (b.popularRank ?? 0))
    .slice(0, limit);
}

export function featuredCalculators(limit = 6): CalculatorDefinition[] {
  return CALCULATORS.filter((c) => c.featured).slice(0, limit);
}

/** Newest first by publication date; for the same date, later registry entries count as newer. */
export function recentlyAdded(limit = 6): CalculatorDefinition[] {
  return CALCULATORS.map((calculator, index) => ({ calculator, index }))
    .sort((a, b) => (a.calculator.addedOn === b.calculator.addedOn ? b.index - a.index : a.calculator.addedOn < b.calculator.addedOn ? 1 : -1))
    .slice(0, limit)
    .map(({ calculator }) => calculator);
}

/** Explicit related calculators first, then others from the same category, shared collections, then the rest. */
export function relatedCalculators(calculator: CalculatorDefinition, limit = 4): CalculatorDefinition[] {
  const result: CalculatorDefinition[] = [];
  const add = (candidate: CalculatorDefinition | undefined) => {
    if (candidate && candidate.slug !== calculator.slug && !result.includes(candidate)) result.push(candidate);
  };
  calculator.related.forEach((slug) => add(getCalculator(slug)));
  calculatorsInCategory(calculator.category).forEach(add);
  CALCULATORS.filter((c) => c.collections.some((slug) => calculator.collections.includes(slug))).forEach(add);
  CALCULATORS.forEach(add);
  return result.slice(0, limit);
}

export { categoryPath, collectionPath };
