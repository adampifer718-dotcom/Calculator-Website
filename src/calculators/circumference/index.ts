import type { CalculatorDefinition } from "@/calculators/framework/types";
import { circumferenceEngine } from "./engine";

export const circumference: CalculatorDefinition = {
  slug: "circumference-calculator",
  title: "Circumference Calculator",
  shortTitle: "Circumference",
  category: "math",
  summary: "Find a circle's circumference from its radius, diameter or area, plus the other measurements.",
  metaTitle: "Circumference Calculator – Circle Radius, Diameter, Area",
  metaDescription: "Calculate the circumference of a circle from its radius, diameter or area, and see the other measurements using the formula C = 2πr.",
  keywords: ["circumference", "circle", "radius", "diameter", "area of a circle", "perimeter of circle", "pi"],
  popularRank: 16,
  intro: ["The circumference is the distance around a circle. It is π times the diameter, or 2π times the radius.", "Enter whichever measurement you know and the calculator finds the rest, in the same unit."],
  howToUse: ["Choose which measurement you know.", "Enter its value.", "Read the circumference, radius, diameter and area."],
  formulas: [
    { title: "Circumference", expression: "C = 2πr = πd", explanation: "π ≈ 3.14159265." },
    { title: "From area", expression: "r = √(A ÷ π)", explanation: "Then use C = 2πr." },
  ],
  examples: [
    {
      title: "Radius of 5",
      inputs: {"known": "radius", "radius": 5},
      steps: ["C = 2 × π × 5", "≈ 31.415927"],
      expectedPrimary: 10*Math.PI,
    },
    {
      title: "Diameter of 10",
      inputs: {"known": "diameter", "diameter": 10},
      steps: ["C = π × 10", "≈ 31.415927"],
      expectedPrimary: 10*Math.PI,
    },
  ],
  assumptions: ["Results use the full precision of π and are shown to 6 decimal places.", "Area is in square units of your input."],
  faqs: [
    { question: "How do I find circumference from diameter?", answer: "Multiply the diameter by π. A 20 cm diameter gives about 62.83 cm." },
    { question: "How do I find the radius from the circumference?", answer: "Divide the circumference by 2π." },
    { question: "What is the difference between circumference and area?", answer: "Circumference is the length around the circle; area is the space inside it." },
  ],
  related: ["square-footage-calculator", "pythagorean-theorem-calculator", "square-root-calculator"],
  updated: "2026-10-14",
  engine: circumferenceEngine,
};
