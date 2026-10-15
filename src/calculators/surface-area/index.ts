import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeSurfaceAreaEngine, surfaceAreaEngine } from "./engine";

export const surfaceArea = defineCalculator({
  id: "surface-area",
  slug: "surface-area-calculator",
  status: "published",
  title: "Surface Area Calculator",
  shortTitle: "Surface area",
  category: "math",
  collections: ["education-research", "construction-engineering"],
  summary: "Find the total, lateral and base areas of a cube, box, cylinder, sphere, hemisphere, cone or square pyramid.",
  metaTitle: "Surface Area Calculator – Box, Cylinder, Cone, Sphere",
  metaDescription: "Work out the total surface area of seven solids, plus lateral area, base area and slant height, in mm, cm, m, in or ft with m² and ft² totals.",
  keywords: ["surface area calculator", "surface area of a cylinder", "surface area of a cone", "surface area of a sphere", "lateral area", "slant height", "pyramid surface area"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Prealgebra (OpenStax), Appendix C: Geometric Formulas",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/prealgebra/pages/c-geometric-formulas",
      usedFor: "Surface area formulas for the rectangular solid, cylinder, sphere and cone.",
    },
    {
      title: "Prealgebra (OpenStax), 9.10 Solve Geometry Applications: Volume and Surface Area (Part 2)",
      publisher: "OpenStax via LibreTexts",
      url: "https://math.libretexts.org/Bookshelves/PreAlgebra/Prealgebra_1e_(OpenStax)/09%3A_Math_Models_and_Geometry/9.10%3A_Solve_Geometry_Applications-_Volume_and_Surface_Area_(Part_2)",
      usedFor: "Worked use of the cylinder and sphere surface area formulas.",
    },
  ],
  intro: [
    "Surface area is the total area of every face or curved surface of a solid. It tells you how much paint, wrapping, sheet metal or fabric you need to cover an object completely.",
    "Choose one of seven solids and enter its dimensions in a single unit. Besides the total, the calculator shows the lateral area (the sides without the ends), the base area and, for cones and pyramids, the slant height. The total is also given in square meters and square feet.",
  ],
  howToUse: [
    "Choose the shape.",
    "Pick the unit your measurements are in.",
    "Enter the dimensions shown for that shape, using the radius (half the diameter) for round shapes and the perpendicular height for cones and pyramids.",
    "Read the total surface area and the partial areas below it.",
  ],
  formulas: [
    { title: "Cube and rectangular box", expression: "A = 6a²\nA = 2(lw + lh + wh)", explanation: "Add the areas of the six rectangular faces." },
    { title: "Cylinder", expression: "A = 2πr² + 2πrh", explanation: "Two circular ends plus the curved side, which unrolls into a rectangle 2πr wide and h tall." },
    { title: "Sphere and hemisphere", expression: "A = 4πr²\nA = 2πr² + πr² = 3πr²", explanation: "A closed hemisphere has half the sphere's curved surface plus its flat circular base." },
    { title: "Cone", expression: "s = √(r² + h²)\nA = πr² + πrs", explanation: "The base circle plus the lateral surface πrs, where s is the slant height." },
    { title: "Square pyramid", expression: "s = √((a/2)² + h²)\nA = a² + 2as", explanation: "The square base plus four triangles, each with base a and height s (the slant height of a face)." },
  ],
  examples: [
    {
      title: "A shipping box of 30 × 20 × 10 cm",
      inputs: { shape: "box", unit: "cm", length: 30, width: 20, height: 10 },
      steps: ["lw = 600, lh = 300, wh = 200", "A = 2 × (600 + 300 + 200) = 2,200 cm²", "2,200 cm² = 0.22 m²"],
      expectedPrimary: 2200,
    },
    {
      title: "A cone with a 0.6 m radius and 0.8 m height",
      inputs: { shape: "cone", unit: "m", radius: 0.6, height: 0.8 },
      steps: ["s = √(0.6² + 0.8²) = 1 m", "Base = π × 0.36 ≈ 1.131 m², lateral = π × 0.6 × 1 ≈ 1.885 m²", "A ≈ 1.131 + 1.885 ≈ 3.016 m²"],
      expectedPrimary: 3.015928947446201,
    },
    {
      title: "A square pyramid with a 6 ft base and 4 ft height",
      inputs: { shape: "pyramid", unit: "ft", baseSide: 6, height: 4 },
      steps: ["s = √(3² + 4²) = 5 ft", "Lateral = 2 × 6 × 5 = 60 ft², base = 36 ft²", "A = 36 + 60 = 96 ft²"],
      expectedPrimary: 96,
    },
  ],
  assumptions: [
    "Shapes are ideal and right: cones and pyramids have their apex directly above the center of the base, and round shapes are perfect circles.",
    "Totals are for closed solids. A cylinder includes both ends, a cone and a pyramid include the base, and a hemisphere includes its flat face. Use the lateral or curved area for open shapes.",
    "Real objects have seams, overlaps and thickness. Add an allowance when buying material to cover them.",
  ],
  faqs: [
    { question: "What is the difference between lateral and total surface area?", answer: "Lateral area counts only the sides. Total surface area adds the base and, for prisms and cylinders, the top as well." },
    { question: "What is the slant height?", answer: "It is the distance measured along the sloping surface from the edge of the base to the apex. It is longer than the vertical height and follows from the Pythagorean theorem." },
    { question: "How do I convert cm² to m²?", answer: "Divide by 10,000, because one meter is 100 cm and area scales with the square: 100 × 100 = 10,000." },
  ],
  related: ["volume-calculator", "area-converter", "square-footage-calculator"],
  updated: "2026-10-15",
  engine: surfaceAreaEngine,
  text,
  makeEngine: makeSurfaceAreaEngine,
  translations,
});
