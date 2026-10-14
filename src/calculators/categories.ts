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
    slug: "finance-and-investing",
    name: "Finance",
    description: "Returns, interest and taxes worked out with clear, transparent formulas.",
    metaTitle: "Finance Calculators",
    metaDescription: "Free finance calculators for return on investment, compound interest and sales tax, each with the formula and worked examples.",
  },
  {
    slug: "math",
    name: "Math",
    description: "Percentages, roots, exponents, logarithms, geometry and number formatting with the formula behind every answer.",
    metaTitle: "Math Calculators",
    metaDescription: "Free math calculators for percentages, logarithms, exponents, square roots, slope, circumference, significant figures and more.",
  },
  {
    slug: "statistics",
    name: "Statistics",
    description: "P-values and confidence intervals computed from standard distributions, with every assumption stated.",
    metaTitle: "Statistics Calculators",
    metaDescription: "Free statistics calculators: find p-values from z or t test statistics and confidence intervals for a mean, with formulas.",
  },
  {
    slug: "construction",
    name: "Construction",
    description: "Area and measurement tools for home projects and building work.",
    metaTitle: "Construction Calculators",
    metaDescription: "Free construction calculators, including square footage for rectangles, circles and triangles in feet, inches, yards or meters.",
  },
  {
    slug: "everyday-life",
    name: "Everyday Life",
    description: "Quick answers for tips, discounts, test grades and other everyday sums.",
    metaTitle: "Everyday Life Calculators",
    metaDescription: "Free everyday calculators for tips and bill splitting, discounts and sale prices, and test grades with letter grades.",
  },
  {
    slug: "health",
    name: "Health",
    description: "General health measures with clear ranges and limitations. Not a substitute for medical advice.",
    metaTitle: "Health Calculators",
    metaDescription: "Free health calculators, including a BMI calculator with metric and imperial units and the standard adult BMI ranges.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function categoryPath(slug: CategorySlug): string {
  return `/categories/${slug}`;
}
