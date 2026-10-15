import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makePaintEngine, paintEngine } from "./engine";

export const paint = defineCalculator({
  id: "paint-coverage",
  slug: "paint-calculator",
  status: "published",
  title: "Paint Calculator",
  shortTitle: "Paint",
  category: "construction",
  collections: ["construction-engineering", "real-estate"],
  summary: "Estimate how many gallons or liters of wall paint you need from the wall size, doors, windows, number of coats and coverage.",
  metaTitle: "Paint Calculator – Gallons or Liters for Your Walls",
  metaDescription: "Work out how much wall paint to buy in gallons or liters from wall length and height, minus doors and windows, for any number of coats and coverage.",
  keywords: ["paint calculator", "how much paint", "gallons of paint", "paint coverage", "liters of paint", "wall paint estimate", "coats of paint"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "How to Use Paint Calculator",
      publisher: "Sherwin-Williams",
      url: "https://www.sherwin-williams.com/en-us/color/color-tools/paint-calculator",
      usedFor: "Typical wall-paint coverage of roughly 350–400 ft² per gallon per coat, used for the US default.",
    },
  ],
  intro: [
    "Buying paint is easier when you know the area you are covering. Add up the widths of the walls, multiply by the height, take away the doors and windows, and divide by how far a gallon or liter of your paint spreads.",
    "The calculator does that for any number of coats and shows both the exact amount and the whole number of gallons or liters to buy.",
  ],
  howToUse: [
    "Choose US units (feet and gallons) or metric units (meters and liters).",
    "Enter the total length of the walls you are painting and their height. For a whole room, the total length is the perimeter.",
    "Enter how many doors and windows there are. Adjust the typical opening sizes if yours are larger or smaller.",
    "Set the number of coats and the coverage printed on your paint can, then read how much paint you need.",
  ],
  formulas: [
    { title: "Paintable area", expression: "A = L × H − (doors × door area) − (windows × window area)", explanation: "L is the combined width of the walls and H their height." },
    { title: "Paint needed", expression: "paint = A × coats ÷ coverage", explanation: "Coverage is the area one gallon or liter covers in a single coat, as stated by the manufacturer." },
    { title: "Amount to buy", expression: "buy = ⌈paint⌉", explanation: "Rounded up to a whole gallon or liter. Larger pails and smaller quarts can bring the total closer to what you need." },
  ],
  examples: [
    {
      title: "Bedroom 14 ft × 12 ft with 9 ft walls, two coats",
      inputs: { units: "imperial", lengthImperial: 52, heightImperial: 9, doors: 2, doorAreaImperial: 20, windows: 3, windowAreaImperial: 15, coats: 2, coverageImperial: 350 },
      steps: [
        "Wall length = 14 + 12 + 14 + 12 = 52 ft; wall area = 52 × 9 = 468 ft²",
        "Openings = 2 × 20 + 3 × 15 = 85 ft², so the paintable area is 383 ft²",
        "Paint = 383 × 2 ÷ 350 ≈ 2.19 gal, so buy 3 gallons",
      ],
      expectedPrimary: (383 * 2) / 350,
    },
    {
      title: "Metric room with 16 m of wall, 2.5 m high",
      inputs: { units: "metric", lengthMetric: 16, heightMetric: 2.5, doors: 1, doorAreaMetric: 1.9, windows: 2, windowAreaMetric: 1.4, coats: 2, coverageMetric: 10 },
      steps: ["Wall area = 16 × 2.5 = 40 m²", "Openings = 1.9 + 2 × 1.4 = 4.7 m², so 35.3 m² is paintable", "Paint = 35.3 × 2 ÷ 10 = 7.06 L, so buy 8 L"],
      expectedPrimary: 7.06,
    },
    {
      title: "One accent wall, single coat of a high-coverage paint",
      inputs: { units: "imperial", lengthImperial: 14, heightImperial: 9, doors: 0, windows: 0, coats: 1, coverageImperial: 400 },
      steps: ["Area = 14 × 9 = 126 ft²", "Paint = 126 × 1 ÷ 400 = 0.315 gal, so one gallon (or a quart, 0.25 gal, would fall just short)"],
      expectedPrimary: 0.315,
    },
  ],
  assumptions: [
    "The US default of 350 ft² per gallon is at the low end of the 350–400 ft² range commonly quoted for wall paint. The metric default of 10 m² per liter is a typical label value. Coverage varies by product, sheen and surface, so use the figure on your can.",
    "Rough, porous, patched or previously unpainted surfaces absorb more paint, and dark-to-light color changes may need an extra coat or a primer.",
    "Door and window sizes are typical values. Walls are treated as flat rectangles of one height; for gable ends or sloped ceilings, work out those areas separately.",
  ],
  faqs: [
    { question: "How many coats of paint do I need?", answer: "Two coats is the usual recommendation for an even finish, especially over a different color. A single coat may be enough when repainting the same color in good condition." },
    { question: "Should I subtract doors and windows?", answer: "Yes, for a closer estimate. If you are painting the doors or trim as well, estimate them separately, because trim paint is usually a different product." },
    { question: "How much paint does a gallon cover?", answer: "Most wall paints list around 350–400 ft² per gallon per coat on smooth, primed walls, which is roughly 8.5–10 m² per liter. Check your product's label, because coverage varies." },
  ],
  related: ["square-footage-calculator", "concrete-calculator", "length-converter"],
  updated: "2026-10-15",
  engine: paintEngine,
  text,
  makeEngine: makePaintEngine,
  translations,
});
