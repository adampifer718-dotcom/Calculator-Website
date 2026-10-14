import type { CalculatorDefinition } from "@/calculators/framework/types";
import { exponentEngine } from "./engine";

export const exponent: CalculatorDefinition = {
  id: "exponent",
  slug: "exponent-calculator",
  status: "published",
  title: "Exponent Calculator",
  shortTitle: "Exponent",
  category: "math",
  collections: ["education-research", "software-data"],
  summary: "Raise any number to a power, including negative and fractional exponents.",
  metaTitle: "Exponent Calculator – Powers and Negative Exponents",
  metaDescription: "Calculate a number raised to any power, including negative and fractional exponents, with very large results shown in scientific notation.",
  keywords: ["exponent", "power", "raise to the power", "squared", "cubed", "negative exponent", "fractional exponent"],
  popularRank: 14,
  addedOn: "2026-10-14",
  sources: [],
  intro: ["An exponent tells you how many times to multiply a base by itself. 2¹⁰ means ten 2s multiplied together, which is 1,024.", "Negative exponents give reciprocals and fractional exponents give roots."],
  howToUse: ["Enter the base a.", "Enter the exponent b. Decimals and negative values are allowed.", "Read aᵇ. Very large or small results switch to scientific notation."],
  formulas: [
    { title: "Positive exponent", expression: "aᵇ = a × a × … × a (b times)", explanation: "For whole-number exponents." },
    { title: "Negative exponent", expression: "a⁻ᵇ = 1 ÷ aᵇ", explanation: "The base cannot be 0." },
    { title: "Fractional exponent", expression: "a^(1/n) = ⁿ√a", explanation: "For example, 9^0.5 = √9 = 3." },
  ],
  examples: [
    {
      title: "2 to the power of 10",
      inputs: {"base": 2, "exponent": 10},
      steps: ["2 × 2 × … (10 times)", "= 1,024"],
      expectedPrimary: "1,024",
    },
    {
      title: "5 to the power of −2",
      inputs: {"base": 5, "exponent": -2},
      steps: ["1 ÷ 5²", "= 1 ÷ 25 = 0.04"],
      expectedPrimary: "0.04",
    },
    {
      title: "9 to the power of 0.5",
      inputs: {"base": 9, "exponent": 0.5},
      steps: ["9^0.5 = √9", "= 3"],
      expectedPrimary: "3",
    },
  ],
  assumptions: ["Results are real numbers; a negative base needs a whole-number exponent.", "Results are shown to 12 significant digits."],
  faqs: [
    { question: "What is any number to the power of 0?", answer: "Any non-zero number to the power of 0 is 1." },
    { question: "What does a negative exponent mean?", answer: "It means the reciprocal: 2⁻³ = 1 ÷ 2³ = 0.125." },
    { question: "How do fractional exponents work?", answer: "The denominator is a root: 8^(1/3) is the cube root of 8, which is 2." },
  ],
  related: ["log-calculator", "square-root-calculator", "scientific-notation-calculator"],
  updated: "2026-10-14",
  engine: exponentEngine,
};
