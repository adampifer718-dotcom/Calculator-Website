import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeVolumeConverterEngine, volumeConverterEngine } from "./engine";

export const volumeConverter = defineCalculator({
  id: "volume-converter",
  slug: "volume-converter",
  status: "published",
  title: "Volume Converter",
  shortTitle: "Volume",
  category: "conversion",
  collections: ["food-hospitality", "construction-engineering", "manufacturing-operations"],
  summary: "Convert between liters, milliliters, cubic meters, US and imperial gallons, quarts, pints, cups, fluid ounces, spoons and cubic feet.",
  metaTitle: "Volume Converter – Liters, Gallons, Cups and More",
  metaDescription: "Convert volume between liters, milliliters, cubic meters, US and imperial gallons, quarts, pints, cups, fluid ounces, teaspoons, tablespoons and cubic feet.",
  keywords: ["volume", "liters to gallons", "gallons to liters", "ml to cups", "fluid ounces", "cubic feet", "imperial gallon"],
  popularRank: 15,
  addedOn: "2026-10-14",
  sources: [
    {
      title: "NIST Handbook 44, Appendix C: General Tables of Units of Measurement",
      publisher: "National Institute of Standards and Technology",
      url: "https://www.nist.gov/pml/owm/nist-handbook-44-current-edition",
      usedFor: "Exact definitions of the US gallon (231 cubic inches) and its subdivisions, and of the imperial gallon (4.54609 liters).",
    },
  ],
  intro: [
    "Convert any volume between 15 metric, US and imperial units. The table shows the value in every unit at once.",
    "US and imperial units share names but not sizes: an imperial gallon is about 20% larger than a US gallon, and an imperial pint is 20 fluid ounces instead of 16.",
  ],
  howToUse: ["Enter the value.", "Choose the unit to convert from and the unit you want.", "Read the result, or use the table to compare every unit."],
  formulas: [
    { title: "Conversion through liters", expression: "result = value × (liters per from-unit) ÷ (liters per to-unit)", explanation: "Every unit is defined as a fixed number of liters." },
    {
      title: "Key factors",
      expression: "1 US gal = 231 in³ = 3.785411784 L\n1 US gal = 4 qt = 8 pt = 16 cups = 128 fl oz\n1 US fl oz = 2 tbsp = 6 tsp\n1 imp gal = 4.54609 L = 160 imp fl oz",
      explanation: "Exact by definition. A cubic foot is 28.316846592 L.",
    },
  ],
  examples: [
    {
      title: "1 US gallon in liters",
      inputs: { value: 1, from: "gal", to: "l" },
      steps: ["1 US gallon = 231 in³ × 0.016387064 L/in³", "= 3.785411784 L"],
      expectedPrimary: "3.785411784 L",
    },
    {
      title: "500 milliliters in US cups",
      inputs: { value: 500, from: "ml", to: "cup" },
      steps: ["1 US cup = 236.5882365 mL", "500 ÷ 236.5882365 ≈ 2.113 cups"],
      expectedPrimary: "2.113376419 cup",
    },
  ],
  assumptions: [
    "US units are the US customary liquid measures; US dry pints and quarts, which are slightly larger, are not included.",
    "Spoons and cups are US customary sizes; metric cups (250 mL) and tablespoons (15 mL, or 20 mL in Australia) differ slightly.",
    "Results are rounded to 10 significant digits for display.",
  ],
  faqs: [
    { question: "How many liters are in a gallon?", answer: "A US gallon is 3.785 liters; an imperial (UK) gallon is 4.546 liters." },
    { question: "How many milliliters are in a cup?", answer: "A US customary cup is 236.6 mL, a US nutrition-label cup 240 mL and a metric cup 250 mL." },
    { question: "Why do UK and US pints differ?", answer: "Both systems divide their own gallon into 8 pints, but the imperial gallon is larger, so an imperial pint is 568 mL and a US pint 473 mL." },
  ],
  related: ["cups-to-grams-converter", "length-converter", "weight-converter"],
  updated: "2026-10-14",
  engine: volumeConverterEngine,
  text,
  makeEngine: makeVolumeConverterEngine,
  translations,
});
