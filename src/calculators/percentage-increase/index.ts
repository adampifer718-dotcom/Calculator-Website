import type { CalculatorDefinition } from "@/calculators/framework/types";
import { percentageIncreaseEngine } from "./engine";

export const percentageIncrease: CalculatorDefinition = {
  slug: "percentage-increase-calculator",
  title: "Percentage Increase Calculator",
  shortTitle: "Percentage Increase",
  category: "math",
  summary: "Calculate the percentage increase or decrease from an original value to a new value.",
  metaTitle: "Percentage Increase Calculator – Find Percent Change",
  metaDescription:
    "Calculate the percentage increase or decrease between two numbers. See the percent change, the absolute change and the formula, with worked examples.",
  keywords: ["percent change", "percentage increase", "percentage decrease", "growth", "difference", "raise", "price change"],
  popularRank: 4,
  intro: [
    "Enter an original value and a new value to see how much it changed in percentage terms. A positive result is an increase and a negative result is a decrease.",
    "Common uses include pay raises, price changes, sales growth and test score improvements.",
  ],
  howToUse: [
    "Enter the original (starting) value.",
    "Enter the new value.",
    "Read the percentage change, the absolute change and the new value as a percentage of the original.",
  ],
  formulas: [
    {
      title: "Percentage change",
      expression: "Change % = (new value − original value) ÷ |original value| × 100",
      explanation:
        "The change is measured against the size of the original value. Using the absolute value keeps the sign meaningful when the original value is negative.",
    },
    {
      title: "Absolute change",
      expression: "Change = new value − original value",
      explanation: "The difference in the same units as your inputs.",
    },
  ],
  examples: [
    {
      title: "From 80 to 100",
      inputs: { original: 80, newValue: 100 },
      steps: ["Change = 100 − 80 = 20", "20 ÷ 80 × 100 = 25% increase"],
      expectedPrimary: 25,
    },
    {
      title: "From 250 to 200",
      inputs: { original: 250, newValue: 200 },
      steps: ["Change = 200 − 250 = −50", "−50 ÷ 250 × 100 = −20%, a 20% decrease"],
      expectedPrimary: -20,
    },
    {
      title: "From −50 to −25",
      inputs: { original: -50, newValue: -25 },
      steps: ["Change = −25 − (−50) = 25", "25 ÷ |−50| × 100 = 50% increase"],
      expectedPrimary: 50,
    },
  ],
  assumptions: [
    "The original value cannot be 0, because a change from zero has no defined percentage.",
    "When the original value is negative, the change is divided by its absolute value.",
    "Results are rounded for display. Calculations use full precision.",
  ],
  faqs: [
    {
      question: "How do I calculate a percentage increase?",
      answer: "Subtract the original value from the new value, divide by the original value, and multiply by 100. From 50 to 65 is (65 − 50) ÷ 50 × 100 = 30%.",
    },
    {
      question: "How do I calculate a percentage decrease?",
      answer: "Use the same formula. A negative result is a decrease. From 120 to 90 is (90 − 120) ÷ 120 × 100 = −25%.",
    },
    {
      question: "Is a 50% increase followed by a 50% decrease back to the start?",
      answer: "No. 100 increased by 50% is 150, and 150 decreased by 50% is 75. Each change is measured from a different starting value.",
    },
    {
      question: "What if the original value is zero?",
      answer: "The percentage change is undefined because you cannot divide by zero. Report the absolute change instead.",
    },
  ],
  related: ["percentage-calculator", "roi-calculator", "hourly-to-salary-calculator"],
  updated: "2026-10-14",
  engine: percentageIncreaseEngine,
};
