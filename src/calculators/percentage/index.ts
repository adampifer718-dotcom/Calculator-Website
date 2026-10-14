import type { CalculatorDefinition } from "@/calculators/framework/types";
import { percentageEngine } from "./engine";

export const percentage: CalculatorDefinition = {
  slug: "percentage-calculator",
  title: "Percentage Calculator",
  shortTitle: "Percentage",
  category: "math",
  summary: "Find X% of a number, what percent one number is of another, or the whole from a part and a percentage.",
  metaTitle: "Percentage Calculator – Percent of a Number & More",
  metaDescription:
    "Free percentage calculator. Work out X% of Y, find what percent X is of Y, or find the whole when X is Y% of it, with formulas and worked examples.",
  keywords: ["percent", "percentage", "% of", "what percent", "fraction", "proportion", "math"],
  popularRank: 3,
  intro: [
    "This calculator answers the three most common percentage questions. Pick a question, enter two numbers, and the answer updates as you type.",
    "Percentages express a part per hundred, so 25% means 25 out of every 100.",
  ],
  howToUse: [
    "Choose the question you want to answer.",
    "Enter the two known values. Negative numbers and decimals are allowed.",
    "Read the result and the formula used to get it.",
  ],
  formulas: [
    { title: "What is X% of Y?", expression: "Result = X ÷ 100 × Y", explanation: "Convert the percentage to a decimal, then multiply." },
    { title: "X is what % of Y?", expression: "Percentage = X ÷ Y × 100", explanation: "Divide the part by the whole, then multiply by 100. Y cannot be 0." },
    { title: "X is Y% of what?", expression: "Whole = X ÷ (Y ÷ 100)", explanation: "Divide the part by the percentage as a decimal. Y cannot be 0." },
  ],
  examples: [
    {
      title: "What is 20% of 150?",
      inputs: { mode: "percentOf", percent: 20, ofValue: 150 },
      steps: ["20 ÷ 100 = 0.2", "0.2 × 150 = 30"],
      expectedPrimary: 30,
    },
    {
      title: "45 is what percent of 180?",
      inputs: { mode: "whatPercent", part: 45, whole: 180 },
      steps: ["45 ÷ 180 = 0.25", "0.25 × 100 = 25%"],
      expectedPrimary: 25,
    },
    {
      title: "30 is 12% of what number?",
      inputs: { mode: "findWhole", partKnown: 30, percentKnown: 12 },
      steps: ["12 ÷ 100 = 0.12", "30 ÷ 0.12 = 250"],
      expectedPrimary: 250,
    },
  ],
  assumptions: [
    "Results are shown with up to 4 to 6 decimal places. Calculations use full precision.",
    "Dividing by zero has no answer, so the whole (or percentage) cannot be 0 in the second and third questions.",
  ],
  faqs: [
    {
      question: "How do I calculate a percentage of a number?",
      answer: "Divide the percentage by 100 and multiply by the number. For example, 15% of 80 is 0.15 × 80 = 12.",
    },
    {
      question: "How do I find what percent one number is of another?",
      answer: "Divide the part by the whole and multiply by 100. For example, 18 out of 24 is 18 ÷ 24 × 100 = 75%.",
    },
    {
      question: "Can a percentage be more than 100%?",
      answer: "Yes. A value larger than the whole is more than 100% of it. For example, 300 is 150% of 200.",
    },
    {
      question: "How do I calculate a percentage increase between two numbers?",
      answer: "Use the percentage increase calculator, which divides the change by the original value and multiplies by 100.",
    },
  ],
  related: ["percentage-increase-calculator", "roi-calculator", "salary-to-hourly-calculator"],
  updated: "2026-10-14",
  engine: percentageEngine,
};
