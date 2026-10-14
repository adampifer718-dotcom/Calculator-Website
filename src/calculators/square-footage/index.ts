import type { CalculatorDefinition } from "@/calculators/framework/types";
import { squareFootageEngine } from "./engine";

export const squareFootage: CalculatorDefinition = {
  id: "square-footage",
  slug: "square-footage-calculator",
  status: "published",
  title: "Square Footage Calculator",
  shortTitle: "Square Footage",
  category: "construction",
  collections: ["construction-engineering", "real-estate", "agriculture-gardening"],
  summary: "Find the area of a rectangle, circle or triangle in square feet, square meters and square yards.",
  metaTitle: "Square Footage Calculator – Area in Sq Ft and m²",
  metaDescription: "Calculate square footage for rectangles, circles and triangles from feet, inches, yards, meters or centimeters, with square meters and square yards.",
  keywords: ["square feet", "sq ft", "area", "floor area", "room size", "flooring", "square meters", "m2"],
  popularRank: 9,
  addedOn: "2026-10-14",
  featured: true,
  sources: [
    {
      "title": "Guide for the Use of the International System of Units (SI), NIST Special Publication 811",
      "publisher": "National Institute of Standards and Technology",
      "url": "https://www.nist.gov/pml/special-publication-811",
      "usedFor": "Exact length conversion factors (1 ft = 0.3048 m, 1 in = 2.54 cm)."
    }
  ],
  intro: ["Square footage is the area of a surface measured in square feet. It is used for flooring, paint, tiles, carpet and property listings.", "Measure each dimension, choose the shape and unit, and the calculator converts the area to square feet, square meters and square yards."],
  howToUse: ["Choose the shape: rectangle, circle or triangle.", "Pick the unit you measured in.", "Enter the dimensions and, if needed, how many identical areas there are.", "Read the area in square feet, square meters and square yards."],
  formulas: [
    { title: "Rectangle", expression: "Area = length × width", explanation: "Use for square and rectangular rooms." },
    { title: "Circle", expression: "Area = π × (diameter ÷ 2)²", explanation: "Half the diameter is the radius." },
    { title: "Triangle", expression: "Area = base × height ÷ 2", explanation: "The height is measured at right angles to the base." },
    { title: "Unit conversion", expression: "1 ft = 12 in = 0.3048 m\n1 sq ft = 0.09290304 m²\n1 sq yd = 9 sq ft", explanation: "Areas convert with the square of the length factor." },
  ],
  examples: [
    {
      title: "A 12 ft × 15 ft room",
      inputs: {"shape": "rectangle", "unit": "ft", "length": 12, "width": 15, "quantity": 1},
      steps: ["Area = 12 × 15 = 180 sq ft", "180 × 0.09290304 = 16.72 m²"],
      expectedPrimary: 180,
    },
    {
      title: "A 4 m × 3.5 m room",
      inputs: {"shape": "rectangle", "unit": "m", "length": 4, "width": 3.5, "quantity": 1},
      steps: ["Area = 4 × 3.5 = 14 m²", "14 ÷ 0.09290304 = 150.69 sq ft"],
      expectedPrimary: 4*3.5/0.3048**2,
    },
    {
      title: "A circular patio 10 ft across",
      inputs: {"shape": "circle", "unit": "ft", "diameter": 10, "quantity": 1},
      steps: ["Radius = 10 ÷ 2 = 5 ft", "Area = π × 5² = 78.54 sq ft"],
      expectedPrimary: Math.PI*25,
    },
  ],
  assumptions: ["Measurements are taken at right angles and the shape is regular.", "For L-shaped or irregular rooms, split the space into rectangles and add the results.", "Add extra material (often 5–10%) for cuts and waste; this calculator gives the exact area only."],
  faqs: [
    { question: "How do I calculate square footage?", answer: "Multiply length by width in feet. A 10 ft by 12 ft room is 120 square feet." },
    { question: "How do I convert square meters to square feet?", answer: "Divide by 0.09290304, or multiply by about 10.764. So 20 m² is about 215.3 sq ft." },
    { question: "How do I measure an L-shaped room?", answer: "Split it into two rectangles, find each area, and add them together." },
  ],
  related: ["circumference-calculator", "pythagorean-theorem-calculator", "percentage-calculator"],
  updated: "2026-10-14",
  engine: squareFootageEngine,
};
