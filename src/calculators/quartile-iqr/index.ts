import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeQuartileEngine, quartileEngine } from "./engine";

export const quartileIqr = defineCalculator({
  id: "quartile-iqr",
  slug: "quartile-calculator",
  status: "published",
  title: "Quartile and IQR Calculator",
  shortTitle: "Quartiles",
  category: "statistics",
  collections: ["education-research", "software-data"],
  summary: "Find the quartiles, interquartile range, five-number summary, 1.5 × IQR fences and outliers of a data set, with two common quartile methods.",
  metaTitle: "Quartile and IQR Calculator – Five-Number Summary, Outliers",
  metaDescription: "Find Q1, the median, Q3 and the interquartile range of a list of numbers, with the five-number summary, 1.5 × IQR fences and any outliers.",
  keywords: ["quartile calculator", "IQR calculator", "interquartile range", "five number summary", "Q1 Q3", "outlier fences", "box plot", "1.5 IQR rule"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "NIST/SEMATECH e-Handbook of Statistical Methods, section 7.1.6: What are outliers in the data?",
      publisher: "National Institute of Standards and Technology (NIST)",
      url: "https://itl.nist.gov/div898/handbook/prc/section1/prc16.htm",
      usedFor: "The inner fences Q1 − 1.5 × IQR and Q3 + 1.5 × IQR for flagging outliers.",
    },
    {
      title: "Dataplot Reference Manual: QUANTILE",
      publisher: "National Institute of Standards and Technology (NIST)",
      url: "https://itl.nist.gov/div898/software/dataplot/refman2/auxillar/quantile.htm",
      usedFor: "The different sample quantile definitions compared by Hyndman and Fan (1996), including linear interpolation.",
    },
  ],
  intro: [
    "Quartiles split sorted data into four groups of roughly equal size. The first quartile Q1 has a quarter of the values below it, the median Q2 has half, and the third quartile Q3 has three quarters. The interquartile range, IQR = Q3 − Q1, is the spread of the middle half of the data, and unlike the range it is barely affected by a few extreme values.",
    "Paste a list of numbers to get the IQR, the five-number summary used for box plots, and the 1.5 × IQR fences that flag possible outliers. Two quartile methods are offered because textbooks, calculators and software do not all agree; for the mean and mode, use the Mean, Median and Mode Calculator.",
  ],
  howToUse: [
    "Paste or type at least 4 numbers, separated by commas, spaces or new lines. They do not need to be sorted.",
    "Choose the quartile method: inclusive to match Excel QUARTILE.INC, NumPy and R, or median of halves to match a TI-83 or many school textbooks.",
    "Read the IQR, the quartiles and the fences.",
    "Check the outliers list for values outside the fences.",
  ],
  formulas: [
    { title: "Inclusive (linear interpolation)", expression: "h = (n − 1) × p\nQ = x₍⌊h⌋₎ + (h − ⌊h⌋)(x₍⌊h⌋+1₎ − x₍⌊h⌋₎)", explanation: "x₍₀₎ ≤ x₍₁₎ ≤ … are the sorted values counted from 0, p = 0.25 for Q1 and 0.75 for Q3. This is type 7 of Hyndman and Fan, the default in R and NumPy and Excel's QUARTILE.INC." },
    { title: "Median of halves", expression: "Q1 = median of the lower half\nQ3 = median of the upper half", explanation: "With an odd number of values, the median itself is left out of both halves. This is the method of TI-83 and TI-84 calculators." },
    { title: "Interquartile range and fences", expression: "IQR = Q3 − Q1\nlower fence = Q1 − 1.5 × IQR\nupper fence = Q3 + 1.5 × IQR", explanation: "Values outside the fences are flagged as possible outliers; they are the points drawn separately on a box plot." },
  ],
  examples: [
    {
      title: "Eleven delivery times in minutes, inclusive method",
      inputs: { data: "12, 15, 17, 18, 21, 22, 24, 26, 29, 31, 58", method: "inclusive" },
      steps: ["n = 11, so h = 10 × 0.25 = 2.5 for Q1: halfway between 17 and 18, Q1 = 17.5", "h = 10 × 0.75 = 7.5 for Q3: halfway between 26 and 29, Q3 = 27.5", "IQR = 27.5 − 17.5 = 10; the fences are 2.5 and 42.5, so 58 is an outlier"],
      expectedPrimary: "10",
    },
    {
      title: "The same data with the median-of-halves method",
      inputs: { data: "12, 15, 17, 18, 21, 22, 24, 26, 29, 31, 58", method: "exclusive" },
      steps: ["The median is 22; leave it out, giving halves 12, 15, 17, 18, 21 and 24, 26, 29, 31, 58", "Q1 = 17 and Q3 = 29", "IQR = 29 − 17 = 12; the fences are −1 and 47, so 58 is still an outlier"],
      expectedPrimary: "12",
    },
    {
      title: "Eight pH readings, inclusive method",
      inputs: { data: "3.2, 4.1, 4.4, 5.0, 5.6, 6.3, 7.7, 9.9", method: "inclusive" },
      steps: ["h = 7 × 0.25 = 1.75: Q1 = 4.1 + 0.75 × (4.4 − 4.1) = 4.325", "h = 7 × 0.75 = 5.25: Q3 = 6.3 + 0.25 × (7.7 − 6.3) = 6.65", "IQR = 6.65 − 4.325 = 2.325, with fences 0.8375 and 10.1375: no outliers"],
      expectedPrimary: "2.325",
    },
  ],
  assumptions: [
    "Quartiles have no single agreed definition. The two methods here are the most common; others, such as Excel's QUARTILE.EXC, can give slightly different values for small data sets.",
    "The 1.5 × IQR rule is a convention for flagging values worth a second look. It does not prove that a value is an error.",
    "Up to 10,000 numbers are accepted. Results are shown with up to 10 significant digits.",
  ],
  faqs: [
    { question: "Why do different calculators give different quartiles?", answer: "Because there are several definitions. For 1, 2, 3, 4, 5, 6 the inclusive method gives Q1 = 2.25, while the median-of-halves method gives Q1 = 2. With large data sets the methods agree closely." },
    { question: "What is the five-number summary?", answer: "The minimum, Q1, the median, Q3 and the maximum. Together they describe the center, spread and range of the data, and they are exactly what a box plot draws." },
    { question: "Is the median of halves the same as Tukey's hinges?", answer: "Not quite. Tukey's hinges include the median in both halves when the number of values is odd, while the TI-83 method used here leaves it out. For an even number of values they are the same." },
  ],
  related: ["mean-median-mode-calculator", "standard-deviation-calculator", "z-score-calculator"],
  updated: "2026-10-22",
  engine: quartileEngine,
  text,
  makeEngine: makeQuartileEngine,
  translations,
});
