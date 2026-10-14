import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { squareRootEngine, makeSquareRootEngine } from "./engine";

export const squareRoot = defineCalculator({
  id: "square-root",
  slug: "square-root-calculator",
  status: "published",
  title: "Square Root Calculator",
  shortTitle: "Square Root",
  category: "math",
  collections: ["education-research"],
  summary: "Find the square root or cube root of a number and check whether it is a perfect square or cube.",
  metaTitle: "Square Root Calculator – Square and Cube Roots",
  metaDescription: "Calculate the square root or cube root of any number, see whether it is a perfect square or cube, and check the answer by squaring it back.",
  keywords: ["square root", "sqrt", "cube root", "radical", "perfect square", "root"],
  popularRank: 15,
  addedOn: "2026-10-14",
  sources: [],
  intro: ["The square root of x is the number that gives x when multiplied by itself. √144 = 12 because 12 × 12 = 144.", "Switch to cube root to find the number that gives x when multiplied by itself three times. Cube roots of negative numbers are allowed."],
  howToUse: ["Choose square root or cube root.", "Enter the number.", "Read the root and whether the number is a perfect square or cube."],
  formulas: [
    { title: "Square root", expression: "√x = x^(1/2)", explanation: "Defined for x ≥ 0 in the real numbers." },
    { title: "Cube root", expression: "∛x = x^(1/3)", explanation: "Defined for every real number." },
  ],
  examples: [
    {
      title: "Square root of 144",
      inputs: {"kind": "square", "value": 144},
      steps: ["12 × 12 = 144", "√144 = 12"],
      expectedPrimary: "12",
    },
    {
      title: "Square root of 2",
      inputs: {"kind": "square", "value": 2},
      steps: ["2 is not a perfect square", "√2 ≈ 1.41421356237"],
      expectedPrimary: "1.41421356237",
    },
    {
      title: "Cube root of −27",
      inputs: {"kind": "cube", "value": -27},
      steps: ["(−3) × (−3) × (−3) = −27", "∛−27 = −3"],
      expectedPrimary: "-3",
    },
  ],
  assumptions: ["Only real roots are shown; negative numbers have no real square root.", "Results are shown to 12 significant digits."],
  faqs: [
    { question: "What is a perfect square?", answer: "A whole number whose square root is also a whole number, such as 1, 4, 9, 16 or 25." },
    { question: "Does a square root have two answers?", answer: "Every positive number has a positive and a negative square root. The calculator shows the positive (principal) root." },
    { question: "Can I take the cube root of a negative number?", answer: "Yes. ∛−8 = −2, because (−2)³ = −8." },
  ],
  related: ["exponent-calculator", "pythagorean-theorem-calculator", "log-calculator"],
  updated: "2026-10-14",
  engine: squareRootEngine,
  text,
  makeEngine: makeSquareRootEngine,
  translations,
});
