import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { lengthConverterEngine, makeLengthConverterEngine } from "./engine";

export const lengthConverter = defineCalculator({
  id: "length-converter",
  slug: "length-converter",
  status: "published",
  title: "Length Converter",
  shortTitle: "Length",
  category: "conversion",
  collections: ["construction-engineering", "manufacturing-operations", "education-research"],
  summary: "Convert between millimeters, centimeters, meters, kilometers, inches, feet, yards, miles and nautical miles.",
  metaTitle: "Length Converter – Metric and Imperial Units",
  metaDescription: "Convert length between metric and imperial units: mm, cm, m, km, inches, feet, yards, miles and nautical miles, using exact conversion factors.",
  keywords: ["length", "distance", "convert", "km to miles", "feet to meters", "inches to cm", "unit converter"],
  popularRank: 13,
  addedOn: "2026-10-14",
  sources: [{"title": "Guide for the Use of the International System of Units (SI), NIST Special Publication 811", "publisher": "National Institute of Standards and Technology", "url": "https://www.nist.gov/pml/special-publication-811", "usedFor": "Exact definitions of the inch, foot, yard, mile and nautical mile in meters."}],
  intro: ["Convert any length between nine common units. The table shows your value in every unit at once.", "All factors are exact by definition: an inch is exactly 2.54 cm and a mile is exactly 1,609.344 m."],
  howToUse: ["Enter the value.", "Choose the unit you are converting from and the unit you want.", "Read the result, or use the table to see every unit."],
  formulas: [
    { title: "Conversion through meters", expression: "result = value × (meters per from-unit) ÷ (meters per to-unit)", explanation: "Every unit is defined as a fixed number of meters." },
    { title: "Key factors", expression: "1 in = 0.0254 m\n1 ft = 0.3048 m\n1 yd = 0.9144 m\n1 mi = 1,609.344 m\n1 nmi = 1,852 m", explanation: "Exact values from the 1959 international yard and pound agreement and the SI." },
  ],
  examples: [
    {
      title: "10 kilometers to miles",
      inputs: {"value": 10, "from": "km", "to": "mi"},
      steps: ["10 × 1,000 m = 10,000 m", "10,000 ÷ 1,609.344 ≈ 6.2137 mi"],
      expectedPrimary: "6.213711922 mi",
    },
    {
      title: "6 feet to meters",
      inputs: {"value": 6, "from": "ft", "to": "m"},
      steps: ["6 × 0.3048", "= 1.8288 m"],
      expectedPrimary: "1.8288 m",
    },
  ],
  assumptions: ["Uses international units: the US survey foot, which differs by about 2 parts per million, is not included.", "Results are shown to 10 significant digits."],
  faqs: [
    { question: "How many feet are in a mile?", answer: "Exactly 5,280 feet." },
    { question: "How do I convert inches to centimeters?", answer: "Multiply by 2.54. For example, 12 in × 2.54 = 30.48 cm." },
    { question: "What is a nautical mile?", answer: "A unit used at sea and in aviation, defined as exactly 1,852 meters." },
  ],
  related: ["weight-converter", "temperature-converter", "square-footage-calculator"],
  updated: "2026-10-14",
  engine: lengthConverterEngine,
  text,
  makeEngine: makeLengthConverterEngine,
  translations,
});
