import type { CalculatorDefinition } from "@/calculators/framework/types";
import { sigFigEngine } from "./engine";

export const significantFigures: CalculatorDefinition = {
  id: "significant-figures",
  slug: "significant-figures-calculator",
  status: "published",
  title: "Significant Figures Calculator",
  shortTitle: "Sig Figs",
  category: "math",
  collections: ["education-research"],
  summary: "Count the significant figures in a number or round a number to a chosen number of sig figs.",
  metaTitle: "Significant Figures Calculator – Count and Round Sig Figs",
  metaDescription: "Count significant figures in any number, including decimals and e-notation, or round to a set number of sig figs with the scientific notation shown.",
  keywords: ["sig figs", "significant figures", "significant digits", "rounding", "precision", "chemistry", "physics"],
  popularRank: 12,
  addedOn: "2026-10-14",
  sources: [],
  intro: ["Significant figures show how precisely a number is known. This calculator counts them using the standard rules, or rounds a number to the precision you choose.", "Type the number exactly as written, because trailing zeros and decimal points change the count."],
  howToUse: ["Choose whether to count or round.", "Type the number exactly as written, including any trailing zeros.", "When rounding, enter how many significant figures to keep."],
  formulas: [
    { title: "Counting rules", expression: "1. Non-zero digits are significant.\n2. Zeros between non-zero digits are significant.\n3. Leading zeros are never significant.\n4. Trailing zeros are significant only with a decimal point.", explanation: "These are the rules taught in most chemistry and physics courses." },
    { title: "Rounding", expression: "Keep n digits from the first non-zero digit, then round the last one.", explanation: "Scientific notation removes any ambiguity about trailing zeros." },
  ],
  examples: [
    {
      title: "How many sig figs in 0.004050?",
      inputs: {"mode": "count", "number": "0.004050"},
      steps: ["Leading zeros 0.00 do not count", "4, 0 and the trailing 5 0 count: 4 significant figures"],
      expectedPrimary: 4,
    },
    {
      title: "Round 123,456 to 3 sig figs",
      inputs: {"mode": "round", "number": "123456", "digits": 3},
      steps: ["Keep 1, 2, 3; the next digit is 4, so round down", "123,000, or 1.23 × 10⁵"],
      expectedPrimary: "123,000",
    },
  ],
  assumptions: ["Trailing zeros in a whole number without a decimal point are treated as not significant.", "Numbers are handled with up to 15 significant digits."],
  faqs: [
    { question: "Are trailing zeros significant?", answer: "Only when the number has a decimal point. 2.50 has 3 significant figures, but 250 has 2 unless written as 250. or 2.50 × 10²." },
    { question: "Are leading zeros significant?", answer: "No. In 0.0071 the zeros only place the decimal point, so it has 2 significant figures." },
    { question: "Why use scientific notation?", answer: "It shows exactly which digits are significant, so 1.20 × 10³ clearly has 3." },
  ],
  related: ["scientific-notation-calculator", "log-calculator", "percentage-calculator"],
  updated: "2026-10-14",
  engine: sigFigEngine,
};
