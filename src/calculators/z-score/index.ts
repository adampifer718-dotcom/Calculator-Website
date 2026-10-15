import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { zScoreEngine, makeZScoreEngine } from "./engine";

export const zScore = defineCalculator({
  id: "z-score",
  slug: "z-score-calculator",
  status: "published",
  title: "Z-Score Calculator",
  shortTitle: "Z-score",
  category: "statistics",
  collections: ["education-research", "software-data"],
  summary: "Standardize a value as a z-score and find its percentile and tail probabilities under the normal curve.",
  metaTitle: "Z-Score Calculator – Percentile and Normal Probabilities",
  metaDescription: "Convert a value to a z-score from the mean and standard deviation, and find its percentile, right-tail and two-tailed normal probabilities.",
  keywords: ["z score", "z-score", "standard score", "standardize", "normal distribution", "percentile", "standard deviations from the mean", "bell curve"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Introductory Statistics, section 6.1: The Standard Normal Distribution",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/introductory-statistics/pages/6-1-the-standard-normal-distribution",
      usedFor: "Definition of the z-score, z = (x − μ)/σ, and the standard normal distribution.",
    },
  ],
  intro: [
    "A z-score says how many standard deviations a value sits above or below the mean. A z-score of 0 is exactly average, positive scores are above average and negative scores are below.",
    "Because z-scores remove the original units, they let you compare results from different scales, such as two exams with different averages. If the data are roughly normal, the z-score also gives the share of values below or above yours.",
  ],
  howToUse: [
    "Enter the value you want to look up.",
    "Enter the mean and the standard deviation of the group it belongs to. The standard deviation must be positive.",
    "Read the z-score and the plain-language position.",
    "Use the percentile for the share of values below x, P(X > x) for the share above, and the two-tailed probability for a two-sided test.",
  ],
  formulas: [
    { title: "Z-score", expression: "z = (x − μ) ÷ σ", explanation: "μ is the mean and σ the standard deviation of the distribution." },
    { title: "Percentile", expression: "P(X < x) = Φ(z)", explanation: "Φ is the cumulative distribution function of the standard normal distribution: the area under the bell curve to the left of z." },
    { title: "Right tail", expression: "P(X > x) = 1 − Φ(z) = Φ(−z)", explanation: "The area to the right of z. It is computed as Φ(−z) to keep precision for large z." },
    { title: "Two-tailed probability", expression: "P(|Z| > |z|) = 2·Φ(−|z|)", explanation: "The chance of a value at least this far from the mean in either direction." },
  ],
  examples: [
    {
      title: "An exam score of 1,310 when the mean is 1,050 and σ = 210",
      inputs: { x: 1310, mean: 1050, sd: 210 },
      steps: ["z = (1,310 − 1,050) ÷ 210 = 260 ÷ 210 ≈ 1.2381", "Φ(1.2381) ≈ 0.8922, so the score is near the 89th percentile", "About 10.78% of scores are higher"],
      expectedPrimary: (1310 - 1050) / 210,
    },
    {
      title: "A part measuring 58 mm when the mean is 70 mm and σ = 8 mm",
      inputs: { x: 58, mean: 70, sd: 8 },
      steps: ["z = (58 − 70) ÷ 8 = −1.5", "Φ(−1.5) ≈ 0.0668, so about 6.68% of parts are shorter", "Two-tailed probability = 2 × 0.0668 ≈ 0.1336"],
      expectedPrimary: -1.5,
    },
  ],
  assumptions: [
    "The z-score itself is valid for any distribution, but the percentile and probabilities assume the data are normally distributed.",
    "The mean and standard deviation you enter are treated as the true population values. With a small sample and an estimated σ, a t distribution may be more appropriate.",
    "Normal probabilities are computed with a numerical approximation accurate to about seven significant digits.",
  ],
  faqs: [
    { question: "What is a good z-score?", answer: "It depends on what is being measured. For test scores, a higher z-score is better; for something like reaction time, lower is better. In a normal distribution about 68% of values fall between z = −1 and z = 1, and about 95% between −2 and 2." },
    { question: "Can a z-score be negative?", answer: "Yes. A negative z-score means the value is below the mean. For example, z = −2 is two standard deviations below average." },
    { question: "How do I turn a z-score into a percentile?", answer: "Find the area under the standard normal curve to the left of z. This calculator does that for you: z = 1.6 gives about 94.52%, so the value is higher than roughly 94.5% of the distribution." },
  ],
  related: ["standard-deviation-calculator", "p-value-calculator", "confidence-interval-calculator"],
  updated: "2026-10-15",
  engine: zScoreEngine,
  text,
  makeEngine: makeZScoreEngine,
  translations,
});
