import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { rainwaterEngine, makeRainwaterEngine } from "./engine";

export const rainwaterHarvesting = defineCalculator({
  id: "rainwater-harvesting",
  slug: "rainwater-harvesting-calculator",
  status: "published",
  title: "Rainwater Harvesting Calculator",
  shortTitle: "Rainwater Harvesting",
  category: "ecology",
  collections: ["environment-energy", "agriculture-gardening", "real-estate"],
  summary: "Estimate how much rainwater a roof can collect from its area, the rainfall and a runoff coefficient.",
  metaTitle: "Rainwater Harvesting Calculator – Roof Collection",
  metaDescription: "Estimate rainwater collected from a roof in liters or US gallons from the catchment area, rainfall depth and a runoff coefficient for losses.",
  keywords: ["rainwater", "rain harvesting", "roof", "water tank", "gallons", "liters", "catchment", "rain barrel"],
  popularRank: 36,
  addedOn: "2026-10-14",
  sources: [{"title": "Guide for the Use of the International System of Units (SI), NIST Special Publication 811", "publisher": "National Institute of Standards and Technology", "url": "https://www.nist.gov/pml/special-publication-811", "usedFor": "Definitions of the US gallon (231 in³) and the liter."}],
  intro: ["Every millimeter of rain falling on a square meter of roof is a liter of water. This calculator scales that up and allows for losses.", "Use it to size a rain barrel or tank, or to estimate yearly collection from average rainfall."],
  howToUse: ["Choose metric or US units.", "Enter the roof's footprint area.", "Enter the rainfall for the period you care about.", "Adjust the runoff coefficient for losses and read the volume collected."],
  formulas: [
    { title: "Metric", expression: "Liters = area (m²) × rainfall (mm) × runoff coefficient", explanation: "1 mm of rain on 1 m² is 1 liter." },
    { title: "US units", expression: "Gallons = area (ft²) × rainfall (in) × 0.6234 × runoff coefficient", explanation: "0.6234 = 144 in³ ÷ 231 in³ per US gallon." },
  ],
  examples: [
    {
      title: "100 m² roof, 25 mm of rain",
      inputs: {"units": "metric", "area": 100, "rainfall": 25, "coefficient": 0.8},
      steps: ["100 × 25 = 2,500 L of rain", "2,500 × 0.8 = 2,000 L collected"],
      expectedPrimary: 2000,
    },
    {
      title: "1,000 ft² roof, 1 inch of rain",
      inputs: {"units": "imperial", "area": 1000, "rainfall": 1, "coefficient": 0.8},
      steps: ["1,000 × 1 × 0.6234 ≈ 623 gal", "623 × 0.8 ≈ 499 gal collected"],
      expectedPrimary: 1000*144/231*0.8,
    },
  ],
  assumptions: ["The runoff coefficient covers losses from evaporation, splash, first-flush diverters and gutter overflow. It depends on roof material and system design; check local guidance.", "Use the roof's horizontal footprint, not the sloped surface area.", "Check local rules on collecting and using rainwater, and treat it before drinking."],
  faqs: [
    { question: "How much water does 1 inch of rain give?", answer: "About 0.623 US gallons per square foot of roof before losses, or 623 gallons per 1,000 ft²." },
    { question: "What runoff coefficient should I use?", answer: "Smooth, hard roofs lose less water than rough or absorbent ones. 0.8 is a cautious middle value; adjust it for your roof." },
    { question: "Is harvested rainwater safe to drink?", answer: "Not without proper filtration and disinfection. Many people use it for gardens and toilets instead." },
  ],
  related: ["square-footage-calculator", "length-converter", "electricity-cost-calculator"],
  updated: "2026-10-14",
  engine: rainwaterEngine,
  text,
  makeEngine: makeRainwaterEngine,
  translations,
});
