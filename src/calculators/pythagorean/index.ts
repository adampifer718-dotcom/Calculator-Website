import type { CalculatorDefinition } from "@/calculators/framework/types";
import { pythagoreanEngine } from "./engine";

export const pythagorean: CalculatorDefinition = {
  slug: "pythagorean-theorem-calculator",
  title: "Pythagorean Theorem Calculator",
  shortTitle: "Pythagorean Theorem",
  category: "math",
  summary: "Find the missing side of a right triangle using a² + b² = c².",
  metaTitle: "Pythagorean Theorem Calculator – Find a Missing Side",
  metaDescription: "Find the hypotenuse or a missing leg of a right triangle with the Pythagorean theorem a² + b² = c², plus the triangle's area and perimeter.",
  keywords: ["pythagorean theorem", "pythagoras", "hypotenuse", "right triangle", "a2 + b2 = c2", "triangle side"],
  popularRank: 18,
  intro: ["In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides: a² + b² = c².", "Enter two sides to find the third. The calculator also shows the triangle's area and perimeter."],
  howToUse: ["Choose whether to find the hypotenuse or a leg.", "Enter the two known sides in the same unit.", "Read the missing side, area and perimeter."],
  formulas: [
    { title: "Hypotenuse", expression: "c = √(a² + b²)", explanation: "The hypotenuse is the longest side, opposite the right angle." },
    { title: "Missing leg", expression: "a = √(c² − b²)", explanation: "The hypotenuse must be longer than the known leg." },
  ],
  examples: [
    {
      title: "Legs of 3 and 4",
      inputs: {"solve": "hypotenuse", "a": 3, "b": 4},
      steps: ["c = √(3² + 4²) = √25", "= 5"],
      expectedPrimary: 5,
    },
    {
      title: "Hypotenuse 13, leg 5",
      inputs: {"solve": "leg", "c": 13, "leg": 5},
      steps: ["a = √(13² − 5²) = √144", "= 12"],
      expectedPrimary: 12,
    },
  ],
  assumptions: ["The triangle has a right angle.", "All sides use the same unit; results are shown to 6 decimal places."],
  faqs: [
    { question: "Does the Pythagorean theorem work for all triangles?", answer: "No, only right triangles. Other triangles need the law of cosines." },
    { question: "What is a Pythagorean triple?", answer: "Three whole numbers that satisfy a² + b² = c², such as 3, 4, 5 or 5, 12, 13." },
    { question: "Which side is the hypotenuse?", answer: "The longest side, opposite the right angle." },
  ],
  related: ["square-root-calculator", "slope-calculator", "circumference-calculator"],
  updated: "2026-10-14",
  engine: pythagoreanEngine,
};
