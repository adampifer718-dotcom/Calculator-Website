import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { sampleSizeEngine, makeSampleSizeEngine } from "./engine";

export const sampleSize = defineCalculator({
  id: "sample-size",
  slug: "sample-size-calculator",
  status: "published",
  title: "Sample Size Calculator",
  shortTitle: "Sample size",
  category: "statistics",
  collections: ["education-research", "marketing-ecommerce", "healthcare"],
  summary: "Find how many survey responses you need for a chosen confidence level and margin of error, with an optional population size.",
  metaTitle: "Sample Size Calculator – Survey Responses Needed",
  metaDescription: "Work out how many completed survey responses you need for a confidence level, margin of error and expected proportion, with a finite population correction.",
  keywords: ["sample size", "survey sample size", "how many respondents", "margin of error", "confidence level", "finite population correction", "statistical sample", "poll size"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Introductory Statistics: A Population Proportion (sample size for a proportion)",
      publisher: "Lumen Learning",
      url: "https://courses.lumenlearning.com/introstatscorequisite/chapter/a-population-proportion-3",
      usedFor: "Sample size for estimating a proportion, n = z²·p(1 − p)/E², and the use of p = 0.5 when no estimate exists.",
    },
    {
      title: "Introductory Business Statistics 2e, section 7.4: Finite Population Correction Factor",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/introductory-business-statistics-2e/pages/7-4-finite-population-correction-factor",
      usedFor: "When and why a finite population correction is applied.",
    },
  ],
  intro: [
    "Before running a survey or poll you need to decide how many people to ask. Too few responses give a wide, vague answer; too many waste time and money. This calculator finds the smallest number of completed responses that estimates a percentage to the precision you choose.",
    "Pick a confidence level, the margin of error you can live with and, if you know it, your best guess of the result. If the group you are studying is small, such as the 600 staff of one company, enter its size too: the finite population correction lowers the number you need.",
  ],
  howToUse: [
    "Choose a confidence level. 95% is the most common choice.",
    "Enter the margin of error in percentage points, for example 5 for ±5 points.",
    "Enter the proportion you expect. Leave it at 50% if you are unsure; that gives the largest sample.",
    "Optionally enter the population size. Leave it empty for a large or unknown population.",
    "Read the required sample size. It is always rounded up to a whole response.",
  ],
  formulas: [
    { title: "Sample size for a large population", expression: "n₀ = z*² × p × (1 − p) ÷ E²", explanation: "z* is the critical value for the confidence level (1.96 for 95%), p the expected proportion and E the margin of error, both as decimals." },
    { title: "Finite population correction", expression: "n = n₀ ÷ (1 + (n₀ − 1) ÷ N)", explanation: "N is the population size. The correction matters when the sample is a noticeable share of the population." },
    { title: "Rounding", expression: "sample size = ⌈n⌉", explanation: "The result is rounded up, because rounding down would give a margin of error slightly wider than requested." },
  ],
  examples: [
    {
      title: "A national poll at 95% confidence and ±5 points",
      inputs: { level: "95", margin: 5, proportion: 50, population: null },
      steps: ["z* = 1.95996 for 95% confidence", "n₀ = 1.95996² × 0.5 × 0.5 ÷ 0.05² ≈ 384.15", "Round up: 385 completed responses"],
      expectedPrimary: 385,
    },
    {
      title: "A staff survey of 2,400 employees at 99% confidence, ±3 points, expecting 30%",
      inputs: { level: "99", margin: 3, proportion: 30, population: 2400 },
      steps: ["z* = 2.57583 for 99% confidence", "n₀ = 2.57583² × 0.3 × 0.7 ÷ 0.03² ≈ 1,548.14", "n = 1,548.14 ÷ (1 + 1,547.14 ÷ 2,400) ≈ 941.32", "Round up: 942 responses"],
      expectedPrimary: 942,
    },
    {
      title: "Estimating a 12% defect share at 90% confidence and ±4 points",
      inputs: { level: "90", margin: 4, proportion: 12, population: null },
      steps: ["z* = 1.64485 for 90% confidence", "n₀ = 1.64485² × 0.12 × 0.88 ÷ 0.04² ≈ 178.57", "Round up: 179 items to inspect"],
      expectedPrimary: 179,
    },
  ],
  assumptions: [
    "The formula assumes a simple random sample: every member of the population has the same chance of being chosen.",
    "It sizes a sample for estimating one proportion (a percentage of yes/no answers), not a mean or a difference between groups.",
    "It relies on the normal approximation to the sampling distribution of a proportion, which works well when the expected number of yes and no answers are both at least about 10.",
    "The result is the number of completed responses. Non-response, drop-outs and unusable answers are not included, so plan to contact more people than this.",
    "Critical values come from a numerical inverse of the normal distribution accurate to about nine significant digits.",
  ],
  faqs: [
    { question: "Why does 50% give the largest sample?", answer: "The product p × (1 − p) is largest when p = 0.5, where it equals 0.25. Any other expected proportion needs fewer responses for the same margin of error, so 50% is the safe choice when you have no prior estimate." },
    { question: "Does a bigger population need a much bigger sample?", answer: "Not really. Once the population is large, the required sample hardly changes: at 95% confidence and ±5 points you need 383 responses for a population of 100,000 and 385 for a population of 100 million. Population size only matters when you sample a sizeable share of it." },
    { question: "How many people should I invite?", answer: "Divide the sample size by the response rate you expect. If you need 385 completed responses and expect 20% of people to answer, invite about 385 ÷ 0.20 ≈ 1,925 people." },
  ],
  related: ["margin-of-error-calculator", "confidence-interval-calculator", "z-score-calculator"],
  updated: "2026-10-15",
  engine: sampleSizeEngine,
  text,
  makeEngine: makeSampleSizeEngine,
  translations,
});
