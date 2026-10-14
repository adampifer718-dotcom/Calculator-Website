import type { CalculatorDefinition } from "@/calculators/framework/types";
import { weightConverterEngine } from "./engine";

export const weightConverter: CalculatorDefinition = {
  id: "weight-converter",
  slug: "weight-converter",
  status: "published",
  title: "Weight Converter",
  shortTitle: "Weight",
  category: "conversion",
  collections: ["food-hospitality", "manufacturing-operations", "education-research"],
  summary: "Convert between milligrams, grams, kilograms, tonnes, ounces, pounds and stones.",
  metaTitle: "Weight Converter – kg, lb, oz, g and Stone",
  metaDescription: "Convert weight (mass) between kilograms, grams, milligrams, tonnes, pounds, ounces and stones using the exact international pound definition.",
  keywords: ["weight", "mass", "kg to lb", "pounds to kg", "ounces to grams", "stone", "convert"],
  popularRank: 14,
  addedOn: "2026-10-14",
  sources: [{"title": "Guide for the Use of the International System of Units (SI), NIST Special Publication 811", "publisher": "National Institute of Standards and Technology", "url": "https://www.nist.gov/pml/special-publication-811", "usedFor": "Exact definition of the pound and related units in kilograms."}],
  intro: ["Convert a weight between metric and imperial units. Strictly these are units of mass, which is what scales report.", "The pound is defined as exactly 0.45359237 kg, so every conversion here is exact before rounding for display."],
  howToUse: ["Enter the value.", "Choose the units to convert from and to.", "Read the result and the full table."],
  formulas: [
    { title: "Conversion through kilograms", expression: "result = value × (kg per from-unit) ÷ (kg per to-unit)", explanation: "Every unit is defined as a fixed number of kilograms." },
    { title: "Key factors", expression: "1 lb = 0.45359237 kg\n1 oz = 1/16 lb = 28.349523125 g\n1 st = 14 lb\n1 t = 1,000 kg", explanation: "Ounces are avoirdupois ounces, used for food and body weight." },
  ],
  examples: [
    {
      title: "150 pounds to kilograms",
      inputs: {"value": 150, "from": "lb", "to": "kg"},
      steps: ["150 × 0.45359237", "≈ 68.04 kg"],
      expectedPrimary: "68.0388555 kg",
    },
    {
      title: "1 kilogram to pounds",
      inputs: {"value": 1, "from": "kg", "to": "lb"},
      steps: ["1 ÷ 0.45359237", "≈ 2.2046 lb"],
      expectedPrimary: "2.204622622 lb",
    },
  ],
  assumptions: ["Ounces are avoirdupois; troy ounces (used for precious metals) are not included.", "Tonnes are metric tonnes (1,000 kg), not US short tons or UK long tons."],
  faqs: [
    { question: "How many pounds are in a kilogram?", answer: "About 2.2046 pounds." },
    { question: "How many ounces are in a pound?", answer: "Exactly 16 avoirdupois ounces." },
    { question: "How much is a stone?", answer: "14 pounds, or about 6.35 kg." },
  ],
  related: ["length-converter", "temperature-converter", "recipe-scaler"],
  updated: "2026-10-14",
  engine: weightConverterEngine,
};
