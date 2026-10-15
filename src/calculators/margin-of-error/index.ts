import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { marginOfErrorEngine, makeMarginOfErrorEngine } from "./engine";

export const marginOfError = defineCalculator({
  id: "margin-of-error",
  slug: "margin-of-error-calculator",
  status: "published",
  title: "Margin of Error Calculator",
  shortTitle: "Margin of error",
  category: "statistics",
  collections: ["education-research", "marketing-ecommerce"],
  summary: "Find the ± margin of error of a survey or poll percentage from the sample size, the result and the confidence level.",
  metaTitle: "Margin of Error Calculator for Survey Proportions",
  metaDescription: "Calculate the ± margin of error of a poll or survey percentage from the sample size and confidence level, with the interval and standard error.",
  keywords: ["margin of error", "survey margin of error", "poll margin of error", "plus or minus", "sampling error", "proportion confidence interval", "standard error of a proportion"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Introductory Statistics, section 8.3: A Population Proportion",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/introductory-statistics/pages/8-3-a-population-proportion",
      usedFor: "Error bound for a proportion, z·√(p′q′/n), and the interval p′ ± error bound.",
    },
    {
      title: "Introductory Business Statistics 2e, section 7.4: Finite Population Correction Factor",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/introductory-business-statistics-2e/pages/7-4-finite-population-correction-factor",
      usedFor: "The finite population correction √((N − n)/(N − 1)).",
    },
  ],
  intro: [
    "When a poll reports that 47% of voters favor a plan, “±3 points” is its margin of error: the range around the result in which the true population figure probably lies. This calculator finds that margin for any survey percentage.",
    "Enter how many people answered, the share who gave the answer you are reporting and the confidence level. The calculator returns the margin of error in percentage points, the confidence interval and the standard error.",
    "This tool is for proportions (percentages of yes/no answers). If you are estimating the average of a measurement, such as height or spending, use the Confidence Interval Calculator instead.",
  ],
  howToUse: [
    "Enter the sample size: the number of completed responses.",
    "Enter the observed proportion as a percentage. Use 50% to get the largest possible margin for that sample size.",
    "Choose the confidence level.",
    "If the sample is a large share of a known, limited population, enter the population size to apply the finite population correction.",
    "Read the margin of error and the interval it gives around your result.",
  ],
  formulas: [
    { title: "Standard error of a proportion", expression: "SE = √(p × (1 − p) ÷ n)", explanation: "p is the observed proportion as a decimal and n the sample size." },
    { title: "Margin of error", expression: "MOE = z* × SE", explanation: "z* is the critical value for the confidence level: 1.645 for 90%, 1.960 for 95% and 2.576 for 99%." },
    { title: "Finite population correction", expression: "MOE = z* × SE × √((N − n) ÷ (N − 1))", explanation: "Used when a population size N is entered. It shrinks the margin when the sample is a large part of the population." },
    { title: "Confidence interval", expression: "p − MOE to p + MOE", explanation: "The interval is limited to the range 0% to 100%." },
  ],
  examples: [
    {
      title: "A poll of 1,000 people with a 50% result at 95% confidence",
      inputs: { n: 1000, proportion: 50, level: "95", population: null },
      steps: ["SE = √(0.5 × 0.5 ÷ 1,000) ≈ 0.015811", "MOE = 1.95996 × 0.015811 ≈ 0.030990", "Margin ≈ ±3.10 points; interval ≈ 46.90% to 53.10%"],
      expectedPrimary: 3.098975161522807,
    },
    {
      title: "600 customers, 42% satisfied, at 90% confidence",
      inputs: { n: 600, proportion: 42, level: "90", population: null },
      steps: ["SE = √(0.42 × 0.58 ÷ 600) ≈ 0.020149", "MOE = 1.64485 × 0.020149 ≈ 0.033143", "Margin ≈ ±3.31 points; interval ≈ 38.69% to 45.31%"],
      expectedPrimary: 3.314288222775347,
    },
    {
      title: "400 of a school's 3,000 students, 35% agree, at 99% confidence",
      inputs: { n: 400, proportion: 35, level: "99", population: 3000 },
      steps: ["SE before correction = √(0.35 × 0.65 ÷ 400) ≈ 0.023848", "Correction = √(2,600 ÷ 2,999) ≈ 0.93110", "MOE = 2.57583 × 0.023848 × 0.93110 ≈ 0.057197, so about ±5.72 points"],
      expectedPrimary: 5.719739181230278,
    },
  ],
  assumptions: [
    "The sample is a simple random sample of the population. Self-selected online polls, quota samples and weighted panels can have larger errors than this formula shows.",
    "The margin covers random sampling error only. It does not account for non-response, biased question wording or people answering untruthfully.",
    "It uses the normal (Wald) approximation, which is weak when fewer than about 10 responses fall in either category; the calculator warns you in that case.",
    "Critical values are computed numerically and agree with standard tables to many more digits than are shown.",
  ],
  faqs: [
    { question: "What does a margin of error of ±3 points mean?", answer: "At 95% confidence, if you repeated the survey many times with new random samples, about 95% of the intervals built this way would contain the true population percentage. It does not mean the true value is guaranteed to be within 3 points." },
    { question: "How do I halve the margin of error?", answer: "The margin shrinks with the square root of the sample size, so halving it takes about four times as many responses. Going from ±3.1 points with 1,000 people to about ±1.55 points needs roughly 4,000 people." },
    { question: "Should I use this for averages?", answer: "No. This calculator handles percentages of yes/no answers. For the average of a numeric measurement, use the Confidence Interval Calculator, which works from the mean and standard deviation." },
  ],
  related: ["sample-size-calculator", "confidence-interval-calculator", "p-value-calculator"],
  updated: "2026-10-15",
  engine: marginOfErrorEngine,
  text,
  makeEngine: makeMarginOfErrorEngine,
  translations,
});
