import type { CalculatorDefinition } from "@/calculators/framework/types";
import { scientificNotationEngine } from "./engine";

export const scientificNotation: CalculatorDefinition = {
  id: "scientific-notation",
  slug: "scientific-notation-calculator",
  status: "published",
  title: "Scientific Notation Calculator",
  shortTitle: "Scientific Notation",
  category: "math",
  collections: ["education-research", "software-data"],
  summary: "Convert numbers to scientific, engineering and e-notation, or expand them back to decimals.",
  metaTitle: "Scientific Notation Calculator – Convert Numbers",
  metaDescription: "Convert any number to scientific notation, e-notation and engineering notation, or expand e-notation back into a normal decimal number.",
  keywords: ["scientific notation", "standard form", "e notation", "engineering notation", "exponent", "powers of ten"],
  popularRank: 13,
  addedOn: "2026-10-14",
  sources: [],
  intro: ["Scientific notation writes a number as a value between 1 and 10 multiplied by a power of ten, such as 1.234 × 10⁵. It keeps very large and very small numbers readable.", "Enter a decimal or e-notation and the calculator shows every common form."],
  howToUse: ["Type a number such as 123400 or 0.00056, or e-notation such as 6.02e23.", "Read the scientific, e-notation, engineering and decimal forms."],
  formulas: [
    { title: "Scientific notation", expression: "x = a × 10ⁿ, where 1 ≤ |a| < 10", explanation: "Move the decimal point until one non-zero digit is left of it; n counts the moves." },
    { title: "Engineering notation", expression: "x = a × 10ⁿ, where n is a multiple of 3", explanation: "Matches unit prefixes such as kilo (10³) and micro (10⁻⁶)." },
  ],
  examples: [
    {
      title: "123,400",
      inputs: {"number": "123400"},
      steps: ["Move the decimal point 5 places left", "1.234 × 10⁵"],
      expectedPrimary: "1.234 × 10⁵",
    },
    {
      title: "0.00056",
      inputs: {"number": "0.00056"},
      steps: ["Move the decimal point 4 places right", "5.6 × 10⁻⁴"],
      expectedPrimary: "5.6 × 10⁻⁴",
    },
  ],
  assumptions: ["Numbers are converted with JavaScript double precision, about 15–17 significant digits.", "Decimal forms with more than 21 digits are not displayed."],
  faqs: [
    { question: "How do I write a number in scientific notation?", answer: "Move the decimal point so one non-zero digit is to its left, then multiply by 10 to the number of places moved. 4,500 becomes 4.5 × 10³." },
    { question: "What does 6.02e23 mean?", answer: "It is e-notation for 6.02 × 10²³. The e stands for 'times ten to the power of'." },
    { question: "What is engineering notation?", answer: "Like scientific notation, but the exponent is always a multiple of 3, matching prefixes like kilo, mega and milli." },
  ],
  related: ["significant-figures-calculator", "exponent-calculator", "log-calculator"],
  updated: "2026-10-14",
  engine: scientificNotationEngine,
};
