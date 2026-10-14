import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { logEngine, makeLogEngine } from "./engine";

export const logCalculator = defineCalculator({
  id: "log",
  slug: "log-calculator",
  status: "published",
  title: "Log Calculator (Logarithm)",
  shortTitle: "Logarithm",
  category: "math",
  collections: ["education-research", "software-data"],
  summary: "Calculate logarithms in base 10, base e (natural log), base 2 or any other base.",
  metaTitle: "Log Calculator – Logarithm in Any Base",
  metaDescription: "Calculate log base 10, natural log (ln), log base 2 or a logarithm in any base, with the change-of-base formula and worked examples.",
  keywords: ["logarithm", "log", "ln", "natural log", "log base 2", "log10", "change of base"],
  popularRank: 11,
  addedOn: "2026-10-14",
  sources: [],
  intro: ["A logarithm answers the question: what power must the base be raised to, to get this number? log₁₀(1000) = 3 because 10³ = 1000.", "Choose a common base or enter your own. The natural, common and binary logs are shown alongside."],
  howToUse: ["Enter a positive number x.", "Choose the base, or select Other base and enter it.", "Read the logarithm and the ln, log₁₀ and log₂ values."],
  formulas: [
    { title: "Definition", expression: "log_b(x) = y  means  bʸ = x", explanation: "The number and the base must be positive, and the base cannot be 1." },
    { title: "Change of base", expression: "log_b(x) = ln(x) ÷ ln(b)", explanation: "Any logarithm can be computed from natural logs." },
  ],
  examples: [
    {
      title: "log₁₀ of 1000",
      inputs: {"value": 1000, "baseType": "10"},
      steps: ["10³ = 1000", "So log₁₀(1000) = 3"],
      expectedPrimary: "3",
    },
    {
      title: "log₂ of 8",
      inputs: {"value": 8, "baseType": "2"},
      steps: ["2³ = 8", "So log₂(8) = 3"],
      expectedPrimary: "3",
    },
    {
      title: "log base 3 of 81",
      inputs: {"value": 81, "baseType": "custom", "base": 3},
      steps: ["ln(81) ÷ ln(3) = 4.394 ÷ 1.099", "= 4, because 3⁴ = 81"],
      expectedPrimary: "4",
    },
  ],
  assumptions: ["Logarithms are defined only for positive numbers and positive bases other than 1.", "Results are shown to 12 significant digits."],
  faqs: [
    { question: "What is the difference between log and ln?", answer: "log usually means base 10 and ln means base e (about 2.71828), the natural logarithm." },
    { question: "Why can't I take the log of a negative number?", answer: "No real power of a positive base gives a negative number or zero, so the logarithm is undefined in the real numbers." },
    { question: "What is log base 2 used for?", answer: "It counts doublings and appears in computing, such as the number of bits needed to represent a value." },
  ],
  related: ["exponent-calculator", "scientific-notation-calculator", "square-root-calculator"],
  updated: "2026-10-14",
  engine: logEngine,
  text,
  makeEngine: makeLogEngine,
  translations,
});
