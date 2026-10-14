import type { Category, CategorySlug } from "./framework/types";

/**
 * Primary categories. Every category is defined here, but a category page
 * is only published once it contains at least one published calculator.
 */
export const CATEGORIES: readonly Category[] = [
  {
    slug: "biology",
    name: "Biology",
    description: "Growth rates, populations and lab quantities for life-science work.",
    metaTitle: "Biology Calculators",
    metaDescription: "Free biology calculators for population growth, doubling time and other life-science quantities, each with the formula and worked examples.",
  },
  {
    slug: "chemistry",
    name: "Chemistry",
    description: "Concentration, dilution and solution calculations for the lab and classroom.",
    metaTitle: "Chemistry Calculators",
    metaDescription: "Free chemistry calculators for molarity, solution dilution and concentration, with formulas, units and worked examples.",
  },
  {
    slug: "construction",
    name: "Construction",
    description: "Area and measurement tools for home projects and building work.",
    metaTitle: "Construction Calculators",
    metaDescription: "Free construction calculators, including square footage for rectangles, circles and triangles in feet, inches, yards or meters.",
  },
  {
    slug: "conversion",
    name: "Conversion",
    description: "Unit converters built on exact, published conversion factors.",
    metaTitle: "Unit Conversion Calculators",
    metaDescription: "Free unit converters for length, mass and temperature using exact SI conversion factors, with formulas and conversion tables.",
  },
  {
    slug: "ecology",
    name: "Ecology",
    description: "Water, energy and resource estimates for greener homes and gardens.",
    metaTitle: "Ecology and Environment Calculators",
    metaDescription: "Free ecology calculators for rainwater harvesting and other resource estimates, with clear assumptions and worked examples.",
  },
  {
    slug: "everyday-life",
    name: "Everyday Life",
    description: "Quick answers for tips, discounts, fuel, grades and other everyday sums.",
    metaTitle: "Everyday Life Calculators",
    metaDescription: "Free everyday calculators for tips and bill splitting, discounts, fuel costs and test grades, each with the formula shown.",
  },
  {
    slug: "finance",
    name: "Finance",
    description: "Pay, loans, interest, returns, taxes and business margins with transparent formulas.",
    metaTitle: "Finance Calculators",
    metaDescription: "Free finance calculators for salary and hourly pay, loans, compound interest, ROI, sales tax, profit margin and break-even.",
  },
  {
    slug: "food",
    name: "Food",
    description: "Kitchen maths for scaling recipes and planning meals.",
    metaTitle: "Food and Cooking Calculators",
    metaDescription: "Free food calculators, including a recipe scaler that adjusts ingredient amounts for any number of servings.",
  },
  {
    slug: "health",
    name: "Health",
    description: "General health measures with clear ranges and limitations. Not a substitute for medical advice.",
    metaTitle: "Health Calculators",
    metaDescription: "Free health calculators for BMI and basal metabolic rate (BMR), with metric and imperial units and clearly stated limitations.",
  },
  {
    slug: "math",
    name: "Math",
    description: "Percentages, roots, exponents, logarithms, geometry and number formatting with the formula behind every answer.",
    metaTitle: "Math Calculators",
    metaDescription: "Free math calculators for percentages, logarithms, exponents, square roots, slope, circumference, significant figures and more.",
  },
  {
    slug: "physics",
    name: "Physics",
    description: "Motion, energy and electricity calculations with SI units.",
    metaTitle: "Physics Calculators",
    metaDescription: "Free physics calculators for speed, distance and time, kinetic energy and Ohm's law, with formulas and unit handling.",
  },
  {
    slug: "sports",
    name: "Sports",
    description: "Training and performance numbers for runners, cyclists and athletes.",
    metaTitle: "Sports Calculators",
    metaDescription: "Free sports calculators, including a running pace calculator for pace, speed and finish times over common race distances.",
  },
  {
    slug: "statistics",
    name: "Statistics",
    description: "Descriptive statistics, p-values and confidence intervals with every assumption stated.",
    metaTitle: "Statistics Calculators",
    metaDescription: "Free statistics calculators for mean, median and mode, standard deviation, p-values and confidence intervals, with formulas.",
  },
  {
    slug: "other",
    name: "Other",
    description: "Useful tools that don't fit neatly elsewhere, such as household energy costs.",
    metaTitle: "Other Calculators",
    metaDescription: "Free miscellaneous calculators, including an electricity cost calculator for appliances and devices.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function categoryPath(slug: CategorySlug): string {
  return `/categories/${slug}`;
}
