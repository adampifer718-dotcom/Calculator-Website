import type { Category, CategorySlug } from "./framework/types";

export const CATEGORIES: readonly Category[] = [
  {
    slug: "salary-and-pay",
    name: "Salary & Pay",
    description: "Convert between salaries, hourly wages and pay periods using your own work schedule.",
    metaTitle: "Salary & Pay Calculators",
    metaDescription: "Free salary and pay calculators. Convert salaries to hourly wages and hourly rates to annual, monthly and biweekly gross pay.",
  },
  {
    slug: "math",
    name: "Math & Percentages",
    description: "Everyday percentage and arithmetic calculations with the formula behind every answer.",
    metaTitle: "Math & Percentage Calculators",
    metaDescription: "Free percentage calculators. Find percentages of numbers, what percent one value is of another, and percentage increases or decreases.",
  },
  {
    slug: "finance-and-investing",
    name: "Finance & Investing",
    description: "Measure returns and compare investments with clear, transparent formulas.",
    metaTitle: "Finance & Investing Calculators",
    metaDescription: "Free finance calculators, including a return on investment (ROI) calculator with net gain and annualized return.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function categoryPath(slug: CategorySlug): string {
  return `/categories/${slug}`;
}
