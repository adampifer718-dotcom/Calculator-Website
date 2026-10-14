import type { CalculatorDefinition } from "@/calculators/framework/types";
import { confidenceIntervalEngine } from "./engine";

export const confidenceInterval: CalculatorDefinition = {
  slug: "confidence-interval-calculator",
  title: "Confidence Interval Calculator",
  shortTitle: "Confidence Interval",
  category: "statistics",
  summary: "Calculate a confidence interval for a mean from the sample mean, standard deviation and size.",
  metaTitle: "Confidence Interval Calculator – For a Mean",
  metaDescription: "Calculate a confidence interval for a mean from the sample mean, standard deviation, sample size and confidence level, with margin of error and z*.",
  keywords: ["confidence interval", "margin of error", "standard error", "z score", "95% confidence", "statistics", "mean"],
  popularRank: 7,
  intro: ["A confidence interval gives a range of plausible values for a population mean. A 95% interval is built so that 95% of intervals made this way would contain the true mean.", "Enter the sample mean, standard deviation, sample size and confidence level."],
  howToUse: ["Enter the sample mean.", "Enter the standard deviation and the sample size.", "Choose the confidence level, such as 95%.", "Read the interval, margin of error and critical value."],
  formulas: [
    { title: "Confidence interval", expression: "CI = x̄ ± z* × σ ÷ √n", explanation: "z* is the critical value for the confidence level." },
    { title: "Critical value", expression: "z* = Φ⁻¹(1 − (1 − level) ÷ 2)", explanation: "For 95%, z* ≈ 1.96; for 99%, z* ≈ 2.576." },
  ],
  examples: [
    {
      title: "Mean 100, σ 15, n 36, 95%",
      inputs: {"mean": 100, "sd": 15, "n": 36, "level": 95},
      steps: ["SE = 15 ÷ √36 = 2.5", "ME = 1.96 × 2.5 ≈ 4.9", "CI ≈ 95.1 to 104.9"],
      expectedPrimary: "95.1001 to 104.8999",
    },
    {
      title: "Mean 50, σ 8, n 64, 99%",
      inputs: {"mean": 50, "sd": 8, "n": 64, "level": 99},
      steps: ["SE = 8 ÷ √64 = 1", "ME = 2.576 × 1", "CI ≈ 47.42 to 52.58"],
      expectedPrimary: "47.4242 to 52.5758",
    },
  ],
  assumptions: ["Uses the normal (z) distribution: appropriate when σ is known or the sample is large (n ≥ 30). Small samples with an estimated σ need a t interval, which is wider.", "Assumes a random sample of independent observations."],
  faqs: [
    { question: "What does 95% confidence mean?", answer: "If you repeated the sampling many times, about 95% of the intervals would contain the true mean. It is not a 95% chance for one specific interval." },
    { question: "How do I make the interval narrower?", answer: "Increase the sample size or accept a lower confidence level." },
    { question: "What is the margin of error?", answer: "Half the width of the interval: z* × σ ÷ √n." },
  ],
  related: ["p-value-calculator", "percentage-calculator", "square-root-calculator"],
  updated: "2026-10-14",
  engine: confidenceIntervalEngine,
};
