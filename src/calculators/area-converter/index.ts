import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { areaConverterEngine, makeAreaConverterEngine } from "./engine";

export const areaConverter = defineCalculator({
  id: "area-converter",
  slug: "area-converter",
  status: "published",
  title: "Area Converter",
  shortTitle: "Area",
  category: "conversion",
  collections: ["real-estate", "construction-engineering", "agriculture-gardening"],
  summary: "Convert between square meters, hectares, square kilometers, square feet, square yards, acres, square miles and more.",
  metaTitle: "Area Converter – Acres, Hectares, m² and ft²",
  metaDescription: "Convert area between square meters, hectares, km², square inches, square feet, square yards, acres and square miles, using exact factors.",
  keywords: ["area converter", "acres to hectares", "square feet to square meters", "m2 to ft2", "hectare", "acre", "square miles", "land area"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "NIST Guide to the SI, Appendix B.8: Factors for Units Listed Alphabetically",
      publisher: "National Institute of Standards and Technology",
      url: "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
      usedFor: "Conversion factors for the acre, square mile, square foot and other area units in square meters.",
    },
    {
      title: "NIST Handbook 44, Appendix C: General Tables of Units of Measurement",
      publisher: "National Institute of Standards and Technology",
      url: "https://www.nist.gov/document/2026-nist-handbook-44-appendix-c",
      usedFor: "Definitions of the acre (43,560 ft²) and the square mile (640 acres).",
    },
  ],
  intro: [
    "Convert an area from one unit to another, whether you are comparing a plot listed in acres with one listed in hectares or working out the floor area of a room in square meters. The table lists your value in all ten units at once.",
    "Every factor is exact. Square units are the square of a length unit, so one square foot is 0.3048 m × 0.3048 m = 0.09290304 m², and an acre is 43,560 square feet.",
  ],
  howToUse: [
    "Type the area you want to convert.",
    "Pick the unit it is in and the unit you want.",
    "Read the converted value, or scan the table for the other units.",
  ],
  formulas: [
    { title: "Conversion through square meters", expression: "result = value × (m² per from-unit) ÷ (m² per to-unit)", explanation: "Each unit is a fixed number of square meters, so any pair can be converted through m²." },
    {
      title: "Key factors",
      expression: "1 ha = 10,000 m²\n1 ft² = 0.09290304 m²\n1 yd² = 9 ft² = 0.83612736 m²\n1 acre = 43,560 ft² = 4,046.8564224 m²\n1 mi² = 640 acres = 2,589,988.110336 m²",
      explanation: "Imperial values follow from the international foot of exactly 0.3048 m.",
    },
  ],
  examples: [
    {
      title: "2.5 acres to hectares",
      inputs: { value: 2.5, from: "acre", to: "ha" },
      steps: ["2.5 × 4,046.8564224 m² = 10,117.141056 m²", "10,117.141056 ÷ 10,000 ≈ 1.0117 ha"],
      expectedPrimary: "1.011714106 ha",
    },
    {
      title: "1,500 square meters to square feet",
      inputs: { value: 1500, from: "m2", to: "ft2" },
      steps: ["1 ft² = 0.09290304 m²", "1,500 ÷ 0.09290304 ≈ 16,145.87 ft²"],
      expectedPrimary: "16,145.86563 ft²",
    },
    {
      title: "640 acres to square miles",
      inputs: { value: 640, from: "acre", to: "mi2" },
      steps: ["640 × 4,046.8564224 m² = 2,589,988.110336 m²", "2,589,988.110336 ÷ 2,589,988.110336 = 1 mi²"],
      expectedPrimary: "1 mi²",
    },
  ],
  assumptions: [
    "Acres and square miles use the international foot. The older US survey acre is larger by about 4 parts per million, which only matters for precise land surveys.",
    "Results are shown to 10 significant digits.",
  ],
  faqs: [
    { question: "How many square feet are in an acre?", answer: "Exactly 43,560 square feet. A square plot of one acre is about 208.7 feet on each side." },
    { question: "Is a hectare bigger than an acre?", answer: "Yes. A hectare is 10,000 m², about 2.471 acres, so one acre is roughly 0.405 hectares." },
    { question: "Why is a square meter not 3.28 square feet?", answer: "Because area scales with the square of length. One meter is about 3.2808 feet, so one square meter is about 3.2808² ≈ 10.764 square feet." },
  ],
  related: ["length-converter", "square-footage-calculator", "volume-converter"],
  updated: "2026-10-15",
  engine: areaConverterEngine,
  text,
  makeEngine: makeAreaConverterEngine,
  translations,
});
