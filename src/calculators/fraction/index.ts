import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { fractionEngine, makeFractionEngine } from "./engine";

export const fraction = defineCalculator({
  id: "fraction",
  slug: "fraction-calculator",
  status: "published",
  title: "Fraction Calculator",
  shortTitle: "Fraction",
  category: "math",
  collections: ["education-research"],
  summary: "Add, subtract, multiply or divide fractions and mixed numbers, with the answer in lowest terms and as a decimal.",
  metaTitle: "Fraction Calculator – Add, Subtract, Multiply, Divide",
  metaDescription: "Add, subtract, multiply and divide fractions, mixed numbers and decimals. Get the exact answer in lowest terms, as a mixed number and as a decimal.",
  keywords: ["fraction", "fractions", "mixed numbers", "simplify fractions", "add fractions", "divide fractions", "lowest terms"],
  popularRank: 9,
  addedOn: "2026-10-14",
  sources: [],
  intro: [
    "Enter two numbers as fractions (3/4), mixed numbers (1 1/2), whole numbers or decimals, choose an operation and get the exact answer.",
    "The calculator works with exact whole-number numerators and denominators, so the result has no rounding error. It is reduced to lowest terms and also shown as a mixed number and a decimal.",
  ],
  howToUse: ["Enter the first number, for example 1/2 or 2 1/4.", "Choose add, subtract, multiply or divide.", "Enter the second number.", "Read the simplified fraction, the mixed number and the decimal."],
  formulas: [
    { title: "Add and subtract", expression: "a/b ± c/d = (a × d ± c × b) ÷ (b × d)", explanation: "Rewrite both fractions over a common denominator, then add or subtract the numerators." },
    { title: "Multiply", expression: "a/b × c/d = (a × c) ÷ (b × d)", explanation: "Multiply the numerators and the denominators." },
    { title: "Divide", expression: "a/b ÷ c/d = (a × d) ÷ (b × c)", explanation: "Multiply by the reciprocal of the second fraction. Dividing by zero is undefined." },
    { title: "Lowest terms", expression: "n/d = (n ÷ g) ÷ (d ÷ g), g = gcd(n, d)", explanation: "Divide the numerator and denominator by their greatest common divisor." },
  ],
  examples: [
    {
      title: "1/2 + 1/3",
      inputs: { a: "1/2", operation: "add", b: "1/3" },
      steps: ["1/2 + 1/3 = (1 × 3 + 1 × 2) ÷ (2 × 3)", "= 5/6 ≈ 0.8333"],
      expectedPrimary: "5/6",
    },
    {
      title: "2 1/4 × 4/3",
      inputs: { a: "2 1/4", operation: "multiply", b: "4/3" },
      steps: ["2 1/4 = 9/4", "9/4 × 4/3 = 36/12 = 3"],
      expectedPrimary: "3",
    },
  ],
  assumptions: [
    "Whole numbers, fractions, mixed numbers and finite decimals are converted to exact fractions; 0.75 becomes 3/4.",
    "Numerators and denominators are limited to 1,000,000,000,000 to keep results readable.",
    "A negative mixed number such as −1 1/2 means −(1 + 1/2).",
  ],
  faqs: [
    { question: "How do I enter a mixed number?", answer: "Type the whole number, a space and the fraction, for example 2 1/4. For a negative value, put the minus sign first: -2 1/4." },
    { question: "How do I simplify a fraction?", answer: "Enter it as the first number, choose multiply and enter 1 as the second number. The result is shown in lowest terms." },
    { question: "Why is the decimal different from the fraction?", answer: "Some fractions, such as 1/3, have decimals that never end. The fraction is exact; the decimal is rounded for display." },
  ],
  related: ["percentage-calculator", "exponent-calculator", "square-root-calculator"],
  updated: "2026-10-14",
  engine: fractionEngine,
  text,
  makeEngine: makeFractionEngine,
  translations,
});
