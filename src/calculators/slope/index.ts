import type { CalculatorDefinition } from "@/calculators/framework/types";
import { slopeEngine } from "./engine";

export const slope: CalculatorDefinition = {
  id: "slope",
  slug: "slope-calculator",
  status: "published",
  title: "Slope Calculator",
  shortTitle: "Slope",
  category: "math",
  collections: ["education-research", "construction-engineering"],
  summary: "Find the slope between two points, plus the line equation, intercept, angle and distance.",
  metaTitle: "Slope Calculator – Slope From Two Points",
  metaDescription: "Calculate the slope of a line through two points, with the line equation y = mx + b, the y-intercept, the angle and the distance between the points.",
  keywords: ["slope", "gradient", "rise over run", "line equation", "y = mx + b", "two points", "intercept"],
  popularRank: 17,
  addedOn: "2026-10-14",
  sources: [],
  intro: ["Slope measures how steep a line is: how much y changes for each step in x. It is often described as rise over run.", "Enter two points and the calculator also gives the equation of the line through them."],
  howToUse: ["Enter the coordinates of the first point (x₁, y₁).", "Enter the second point (x₂, y₂).", "Read the slope, equation, intercept, angle and distance."],
  formulas: [
    { title: "Slope", expression: "m = (y₂ − y₁) ÷ (x₂ − x₁)", explanation: "Undefined when x₁ = x₂ (a vertical line)." },
    { title: "Line equation", expression: "y = mx + b, where b = y₁ − m × x₁", explanation: "b is where the line crosses the y-axis." },
    { title: "Angle and distance", expression: "θ = arctan(m)\nd = √((x₂ − x₁)² + (y₂ − y₁)²)", explanation: "The angle is measured from the positive x-axis." },
  ],
  examples: [
    {
      title: "Points (1, 3) and (4, 9)",
      inputs: {"x1": 1, "y1": 3, "x2": 4, "y2": 9},
      steps: ["m = (9 − 3) ÷ (4 − 1) = 6 ÷ 3 = 2", "b = 3 − 2 × 1 = 1, so y = 2x + 1"],
      expectedPrimary: 2,
    },
    {
      title: "Points (−2, 5) and (3, −5)",
      inputs: {"x1": -2, "y1": 5, "x2": 3, "y2": -5},
      steps: ["m = (−5 − 5) ÷ (3 − (−2)) = −10 ÷ 5", "= −2"],
      expectedPrimary: -2,
    },
  ],
  assumptions: ["Vertical lines (x₁ = x₂) have an undefined slope and are rejected.", "Results are shown to 6 decimal places."],
  faqs: [
    { question: "What does a negative slope mean?", answer: "The line goes down from left to right." },
    { question: "What is the slope of a horizontal line?", answer: "0, because y does not change." },
    { question: "How is slope related to angle?", answer: "The slope is the tangent of the angle the line makes with the x-axis. A slope of 1 is 45°." },
  ],
  related: ["pythagorean-theorem-calculator", "percentage-increase-calculator", "exponent-calculator"],
  updated: "2026-10-14",
  engine: slopeEngine,
};
