import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { weightedAverageEngine, makeWeightedAverageEngine } from "./engine";

export const weightedAverage = defineCalculator({
  id: "weighted-average",
  slug: "weighted-average-calculator",
  status: "published",
  title: "Weighted Average Calculator",
  shortTitle: "Weighted average",
  category: "statistics",
  collections: ["education-research", "business"],
  summary: "Average a list of values where some count more than others, and compare it with the plain mean.",
  metaTitle: "Weighted Average Calculator – Weighted Mean of a List",
  metaDescription: "Calculate the weighted average of up to 100 values and their weights, with the sum of weights and the plain unweighted mean for comparison.",
  keywords: ["weighted average", "weighted mean", "weighted grade", "average with weights", "course grade", "average price", "sumproduct"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Glossary: Weighted average",
      publisher: "Eurostat, European Commission",
      url: "https://ec.europa.eu/eurostat/statistics-explained/index.php/Glossary:Weighted_average",
      usedFor: "Definition of a weighted average: each value multiplied by its weight, summed, and divided by the sum of the weights.",
    },
  ],
  intro: [
    "A weighted average is a mean in which each value counts according to its weight. A final exam worth half the grade pulls the result more than a quiz worth a tenth, and a large purchase affects the average price more than a small one.",
    "Enter the values and a matching list of weights. The calculator gives the weighted average and, for comparison, the ordinary mean that treats every value equally.",
  ],
  howToUse: [
    "Type the values in the first box, separated by commas, spaces or new lines.",
    "Type the weights in the second box in the same order, one for each value.",
    "Weights can be percentages, credit hours, quantities or any other non-negative numbers. They do not have to add up to 100 or to 1.",
    "Read the weighted average. If it differs a lot from the unweighted mean, the heavily weighted values are pulling it toward them.",
  ],
  formulas: [
    { title: "Weighted average", expression: "x̄w = Σ(wᵢ·xᵢ) ÷ Σwᵢ", explanation: "Multiply each value by its weight, add the products, then divide by the total weight." },
    { title: "Unweighted mean", expression: "x̄ = Σxᵢ ÷ n", explanation: "The ordinary average, equal to the weighted average when all weights are the same." },
  ],
  examples: [
    {
      title: "Course grade with weighted components",
      inputs: { values: "82, 90, 75", weights: "20, 50, 30" },
      steps: ["Products: 82 × 20 = 1,640; 90 × 50 = 4,500; 75 × 30 = 2,250", "Sum of products = 8,390 and sum of weights = 100", "Weighted average = 8,390 ÷ 100 = 83.9, while the plain mean is about 82.33"],
      expectedPrimary: "83.9",
    },
    {
      title: "Grade points weighted by credit hours",
      inputs: { values: "3.7, 3.0, 4.0, 2.3", weights: "4, 3, 3, 2" },
      steps: ["Products: 14.8 + 9 + 12 + 4.6 = 40.4", "Sum of weights = 4 + 3 + 3 + 2 = 12 credits", "Weighted average = 40.4 ÷ 12 ≈ 3.3667"],
      expectedPrimary: "3.366666667",
    },
    {
      title: "Average price paid per kilogram",
      inputs: { values: "12.5\n14\n11.75", weights: "40\n25\n35" },
      steps: ["Prices per kg weighted by kilograms bought: 12.5 × 40 + 14 × 25 + 11.75 × 35 = 500 + 350 + 411.25 = 1,261.25", "Total quantity = 100 kg", "Average price = 1,261.25 ÷ 100 = 12.6125 per kg"],
      expectedPrimary: "12.6125",
    },
  ],
  assumptions: [
    "Values and weights are paired by position: the first weight goes with the first value, and so on.",
    "Weights must be zero or positive, and at least one must be greater than zero. A weight of 0 leaves that value out of the weighted average but not out of the unweighted mean.",
    "Results are shown to 10 significant digits. Up to 100 pairs are accepted.",
  ],
  faqs: [
    { question: "Do the weights have to add up to 100%?", answer: "No. The formula divides by the sum of the weights, so 20, 50 and 30 give the same result as 0.2, 0.5 and 0.3, or 2, 5 and 3." },
    { question: "When is the weighted average the same as the normal average?", answer: "When every weight is equal. Then each value has the same influence and the formula reduces to the sum of the values divided by their count." },
    { question: "How do I find the grade I need on a final exam?", answer: "Write the weighted average with the final exam score as an unknown and solve for it. For example, with 80 on work worth 60% and a target of 85, you need 0.6 × 80 + 0.4 × s = 85, so s = 92.5." },
  ],
  related: ["mean-median-mode-calculator", "gpa-calculator", "test-grade-calculator"],
  updated: "2026-10-15",
  engine: weightedAverageEngine,
  text,
  makeEngine: makeWeightedAverageEngine,
  translations,
});
