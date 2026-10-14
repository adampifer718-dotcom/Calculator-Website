import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { meanMedianModeEngine, makeMeanMedianModeEngine } from "./engine";

export const meanMedianMode = defineCalculator({
  id: "mean-median-mode",
  slug: "mean-median-mode-calculator",
  status: "published",
  title: "Mean, Median and Mode Calculator",
  shortTitle: "Mean, Median, Mode",
  category: "statistics",
  collections: ["education-research", "software-data"],
  summary: "Find the mean, median, mode, range and sum of a list of numbers.",
  metaTitle: "Mean, Median and Mode Calculator – Averages",
  metaDescription: "Calculate the mean (average), median, mode, range and sum of a data set. Paste numbers separated by commas, spaces or new lines.",
  keywords: ["mean", "median", "mode", "average", "range", "data set", "statistics", "central tendency"],
  popularRank: 9,
  addedOn: "2026-10-14",
  sources: [{"title": "NIST/SEMATECH e-Handbook of Statistical Methods", "publisher": "National Institute of Standards and Technology", "url": "https://www.itl.nist.gov/div898/handbook/", "usedFor": "Definitions of the mean, median and mode."}],
  intro: ["The mean, median and mode are three ways to describe the center of a data set. They can differ a lot when data are skewed or contain outliers.", "Paste or type your numbers to see all three, plus the range and sum."],
  howToUse: ["Enter your numbers, separated by commas, spaces or new lines.", "Read the mean, median, mode, range and sum."],
  formulas: [
    { title: "Mean", expression: "mean = sum of values ÷ number of values", explanation: "The arithmetic average." },
    { title: "Median", expression: "The middle value when sorted; the average of the two middle values for an even count", explanation: "Resistant to outliers." },
    { title: "Mode", expression: "The value(s) that occur most often", explanation: "A data set can have several modes or none." },
  ],
  examples: [
    {
      title: "2, 4, 4, 5, 7, 9",
      inputs: {"data": "2, 4, 4, 5, 7, 9"},
      steps: ["Sum = 31; mean = 31 ÷ 6 ≈ 5.17", "Median = (4 + 5) ÷ 2 = 4.5; mode = 4"],
      expectedPrimary: "5.166666667",
    },
    {
      title: "10, 20, 30",
      inputs: {"data": "10 20 30"},
      steps: ["Mean = 60 ÷ 3 = 20", "Median = 20; no mode"],
      expectedPrimary: "20",
    },
  ],
  assumptions: ["Accepts up to 10,000 numbers.", "Results are shown to 10 significant digits."],
  faqs: [
    { question: "When should I use the median instead of the mean?", answer: "When data are skewed or have outliers, such as incomes or house prices; the median is less affected by extreme values." },
    { question: "Can there be more than one mode?", answer: "Yes. If several values tie for the highest count, they are all modes." },
    { question: "What if no number repeats?", answer: "Then there is no mode." },
  ],
  related: ["standard-deviation-calculator", "percentage-calculator", "confidence-interval-calculator"],
  updated: "2026-10-14",
  engine: meanMedianModeEngine,
  text,
  makeEngine: makeMeanMedianModeEngine,
  translations,
});
