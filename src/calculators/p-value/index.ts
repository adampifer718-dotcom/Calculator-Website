import type { CalculatorDefinition } from "@/calculators/framework/types";
import { pValueEngine } from "./engine";

export const pValue: CalculatorDefinition = {
  slug: "p-value-calculator",
  title: "P-value Calculator",
  shortTitle: "P-value",
  category: "statistics",
  summary: "Find the p-value for a z-score or t-score in a two-tailed, left-tailed or right-tailed test.",
  metaTitle: "P-value Calculator – From Z-score or T-score",
  metaDescription: "Calculate the p-value from a z-score or t-score with degrees of freedom, for two-tailed, left-tailed or right-tailed hypothesis tests.",
  keywords: ["p value", "p-value", "z score", "t score", "hypothesis test", "significance", "statistics", "t test", "z test"],
  popularRank: 6,
  intro: ["A p-value measures how surprising a test result would be if the null hypothesis were true. Small p-values suggest the data are unlikely under the null hypothesis.", "Enter the test statistic from a z-test or t-test and choose the direction of your alternative hypothesis."],
  howToUse: ["Choose a z-score or t-score.", "Enter the statistic, and the degrees of freedom for a t-score.", "Choose two-tailed, left-tailed or right-tailed.", "Compare the p-value with your significance level, such as 0.05."],
  formulas: [
    { title: "Left-tailed", expression: "p = P(T ≤ t)", explanation: "The probability of a value at least as low as the statistic." },
    { title: "Right-tailed", expression: "p = P(T ≥ t)", explanation: "The probability of a value at least as high." },
    { title: "Two-tailed", expression: "p = 2 × P(T ≥ |t|)", explanation: "Counts extreme values in both directions." },
  ],
  examples: [
    {
      title: "z = 1.96, two-tailed",
      inputs: {"distribution": "z", "statistic": 1.96, "tail": "two"},
      steps: ["P(Z ≥ 1.96) ≈ 0.025", "p = 2 × 0.025 ≈ 0.05"],
      expectedPrimary: "0.0499958",
    },
    {
      title: "z = −1.645, left-tailed",
      inputs: {"distribution": "z", "statistic": -1.645, "tail": "left"},
      steps: ["P(Z ≤ −1.645)", "≈ 0.05"],
      expectedPrimary: "0.0499849",
    },
  ],
  assumptions: ["Uses the standard normal distribution for z and Student's t distribution for t.", "The test statistic must come from a test whose assumptions hold.", "Displayed to 6 significant digits; very small values switch to scientific notation."],
  faqs: [
    { question: "What is a good p-value?", answer: "There is no universal threshold. 0.05 is common, meaning results this extreme would occur less than 5% of the time if the null hypothesis were true." },
    { question: "Should I use a z-score or t-score?", answer: "Use t when the population standard deviation is unknown and estimated from the sample; z when it is known or the sample is large." },
    { question: "What is the difference between one-tailed and two-tailed tests?", answer: "A one-tailed test looks for an effect in one direction only; a two-tailed test considers both directions." },
  ],
  related: ["confidence-interval-calculator", "percentage-calculator", "significant-figures-calculator"],
  updated: "2026-10-14",
  engine: pValueEngine,
};
