import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { standardDeviationEngine, makeStandardDeviationEngine } from "./engine";

export const standardDeviation = defineCalculator({
  id: "standard-deviation",
  slug: "standard-deviation-calculator",
  status: "published",
  title: "Standard Deviation Calculator",
  shortTitle: "Standard Deviation",
  category: "statistics",
  collections: ["education-research", "software-data", "manufacturing-operations"],
  summary: "Calculate sample or population standard deviation, variance and standard error from a data set.",
  metaTitle: "Standard Deviation Calculator – Sample and Population",
  metaDescription: "Calculate the sample or population standard deviation, variance, mean and standard error of the mean from a list of numbers.",
  keywords: ["standard deviation", "variance", "sample standard deviation", "population standard deviation", "spread", "statistics", "standard error"],
  popularRank: 10,
  addedOn: "2026-10-14",
  sources: [{"title": "NIST/SEMATECH e-Handbook of Statistical Methods", "publisher": "National Institute of Standards and Technology", "url": "https://www.itl.nist.gov/div898/handbook/", "usedFor": "Sample and population standard deviation formulas."}],
  intro: ["Standard deviation measures how spread out values are around the mean. A small value means data cluster closely; a large one means they are spread widely.", "Choose sample when your data are a subset of a larger group, which is the usual case."],
  howToUse: ["Enter your numbers, separated by commas, spaces or new lines.", "Choose sample or population.", "Read the standard deviation, variance, mean and standard error."],
  formulas: [
    { title: "Sample standard deviation", expression: "s = √(Σ(x − x̄)² ÷ (n − 1))", explanation: "Dividing by n − 1 (Bessel's correction) corrects the bias in estimating spread from a sample." },
    { title: "Population standard deviation", expression: "σ = √(Σ(x − μ)² ÷ n)", explanation: "Use when you have every member of the group." },
    { title: "Standard error of the mean", expression: "SE = s ÷ √n", explanation: "How precisely the sample mean estimates the population mean." },
  ],
  examples: [
    {
      title: "Population: 2, 4, 4, 4, 5, 5, 7, 9",
      inputs: {"data": "2, 4, 4, 4, 5, 5, 7, 9", "kind": "population"},
      steps: ["Mean = 5; squared deviations sum to 32", "σ = √(32 ÷ 8) = 2"],
      expectedPrimary: "2",
    },
    {
      title: "Sample: 2, 4, 4, 4, 5, 5, 7, 9",
      inputs: {"data": "2, 4, 4, 4, 5, 5, 7, 9", "kind": "sample"},
      steps: ["Squared deviations sum to 32", "s = √(32 ÷ 7) ≈ 2.138"],
      expectedPrimary: "2.138089935",
    },
  ],
  assumptions: ["Accepts up to 10,000 numbers. A sample needs at least two.", "Uses a numerically stable two-pass calculation.", "Results are shown to 10 significant digits."],
  faqs: [
    { question: "Should I use sample or population standard deviation?", answer: "Use sample (n − 1) when your data are a sample from a larger group, and population (n) only when you have the whole group." },
    { question: "What is variance?", answer: "The square of the standard deviation, in squared units." },
    { question: "What does a standard deviation of 0 mean?", answer: "All values are identical." },
  ],
  related: ["mean-median-mode-calculator", "confidence-interval-calculator", "p-value-calculator"],
  updated: "2026-10-14",
  engine: standardDeviationEngine,
  text,
  makeEngine: makeStandardDeviationEngine,
  translations,
});
