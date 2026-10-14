import type { Collection, CollectionSlug } from "./framework/types";

/**
 * Industry collections group calculators across categories. Calculators keep
 * one canonical page; collections only link to them. A collection page is
 * published once it contains at least one published calculator.
 */
export const COLLECTIONS: readonly Collection[] = [
  {
    slug: "business",
    name: "Business & Entrepreneurship",
    description: "Pricing, margins, break-even and return figures for running and growing a business.",
    metaTitle: "Business and Entrepreneurship Calculators",
    metaDescription: "Calculators for founders and small businesses: profit margin, break-even point, ROI, sales tax, discounts and percentage change.",
  },
  {
    slug: "accounting-finance",
    name: "Accounting & Finance",
    description: "Interest, loans, returns and payroll conversions for finance and accounting work.",
    metaTitle: "Accounting and Finance Calculators",
    metaDescription: "Calculators for accounting and finance: loan payments, compound interest, ROI, profit margin, sales tax and salary conversions.",
  },
  {
    slug: "hr-payroll",
    name: "HR, Payroll & Employment",
    description: "Convert between salaries, hourly wages and pay periods for offers, budgets and payroll checks.",
    metaTitle: "HR, Payroll and Employment Calculators",
    metaDescription: "Calculators for HR and payroll: salary to hourly, hourly to salary and every common pay period, using your own work schedule.",
  },
  {
    slug: "marketing-ecommerce",
    name: "Digital Marketing & Ecommerce",
    description: "Campaign returns, discounts, margins and conversion statistics for online sellers and marketers.",
    metaTitle: "Digital Marketing and Ecommerce Calculators",
    metaDescription: "Calculators for marketers and online stores: ROI, discounts, sales tax, profit margin, percentage change and confidence intervals.",
  },
  {
    slug: "real-estate",
    name: "Real Estate & Property",
    description: "Floor area, mortgage-style loan payments and investment returns for property decisions.",
    metaTitle: "Real Estate and Property Calculators",
    metaDescription: "Calculators for real estate: square footage, loan and mortgage payments, ROI and rainwater harvesting for properties.",
  },
  {
    slug: "construction-engineering",
    name: "Construction & Civil Engineering",
    description: "Areas, right triangles, slopes and unit conversions for site and design work.",
    metaTitle: "Construction and Civil Engineering Calculators",
    metaDescription: "Calculators for construction and civil engineering: square footage, Pythagorean theorem, slope, circumference and unit conversion.",
  },
  {
    slug: "education-research",
    name: "Education & Academic Research",
    description: "Math, statistics and science tools for students, teachers and researchers.",
    metaTitle: "Education and Research Calculators",
    metaDescription: "Calculators for students and researchers: statistics, p-values, logarithms, significant figures, chemistry and physics formulas.",
  },
  {
    slug: "healthcare",
    name: "Healthcare & Medical Professionals",
    description: "General health measures and lab arithmetic. Always apply clinical judgment and local guidelines.",
    metaTitle: "Healthcare Calculators",
    metaDescription: "Calculators for health and lab settings: BMI, BMR, molarity, dilution and p-values, with sources and stated limitations.",
  },
  {
    slug: "agriculture-gardening",
    name: "Agriculture & Gardening",
    description: "Area, water and growth estimates for farms, plots and gardens.",
    metaTitle: "Agriculture and Gardening Calculators",
    metaDescription: "Calculators for growers and gardeners: square footage, rainwater harvesting, population doubling time and unit conversion.",
  },
  {
    slug: "food-hospitality",
    name: "Food Service & Hospitality",
    description: "Recipe scaling, tipping, pricing and margins for kitchens, restaurants and hosts.",
    metaTitle: "Food Service and Hospitality Calculators",
    metaDescription: "Calculators for kitchens and restaurants: recipe scaler, tip and bill split, profit margin, discounts and temperature conversion.",
  },
  {
    slug: "manufacturing-operations",
    name: "Manufacturing & Operations",
    description: "Unit conversions, break-even volumes, energy costs and geometry for production work.",
    metaTitle: "Manufacturing and Operations Calculators",
    metaDescription: "Calculators for manufacturing and operations: break-even point, unit conversions, electricity cost, Ohm's law and circumference.",
  },
  {
    slug: "software-data",
    name: "Software, IT & Data",
    description: "Statistics, logarithms and notation tools for engineers and data analysts.",
    metaTitle: "Software, IT and Data Calculators",
    metaDescription: "Calculators for engineers and analysts: standard deviation, mean and median, p-values, confidence intervals, logs and exponents.",
  },
  {
    slug: "environment-energy",
    name: "Environment & Energy",
    description: "Electricity use, water capture and fuel costs for sustainability decisions.",
    metaTitle: "Environment and Energy Calculators",
    metaDescription: "Calculators for energy and the environment: electricity cost, rainwater harvesting, fuel cost and kinetic energy.",
  },
  {
    slug: "fitness-sports",
    name: "Fitness & Sports",
    description: "Pace, body measures and energy needs for training and fitness goals.",
    metaTitle: "Fitness and Sports Calculators",
    metaDescription: "Calculators for fitness and sports: running pace, BMI, BMR and speed, distance and time, with clear formulas.",
  },
  {
    slug: "personal-finance",
    name: "Personal Finance & Household",
    description: "Everyday money decisions: pay, loans, savings, shopping, bills and household costs.",
    metaTitle: "Personal Finance and Household Calculators",
    metaDescription: "Household calculators for pay, loans, compound interest, discounts, tips, sales tax, fuel and electricity costs.",
  },
];

export function getCollection(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}

export function collectionPath(slug: CollectionSlug): string {
  return `/collections/${slug}`;
}
