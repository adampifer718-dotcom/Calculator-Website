import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { gravelMulchEngine, makeGravelMulchEngine } from "./engine";

export const gravelMulch = defineCalculator({
  id: "gravel-mulch",
  slug: "gravel-calculator",
  status: "published",
  title: "Gravel and Mulch Calculator",
  shortTitle: "Gravel and Mulch",
  category: "construction",
  collections: ["construction-engineering", "agriculture-gardening"],
  summary: "Work out how many cubic yards or cubic meters of gravel, crushed stone or mulch to order, with the weight, bags and cost.",
  metaTitle: "Gravel and Mulch Calculator – Yards, Tons and Bags",
  metaDescription: "Estimate gravel, crushed stone or mulch for a rectangular or round area in cubic yards or m³, with the weight in tons or tonnes, bags needed and cost.",
  keywords: ["gravel calculator", "mulch calculator", "how much gravel", "cubic yards of gravel", "tons of gravel", "crushed stone calculator", "landscape rock", "bags of mulch"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "Weights of Building Materials, Agricultural Commodities, and Floor Loads",
      publisher: "Ohio University",
      url: "https://people.ohio.edu/ziff/hcia350/Weights%20and%20Floor%20Loads.pdf",
      usedFor: "Typical weights of about 2,700 lb per cubic yard for gravel and 2,500 lb per cubic yard for crushed stone, used for the default densities.",
    },
    {
      title: "Standard Volume-to-Weight Conversion Factors",
      publisher: "U.S. Environmental Protection Agency",
      url: "https://www.epa.gov/sites/default/files/2016-03/documents/conversions.pdf",
      usedFor: "A typical weight of about 500 lb per cubic yard for shredded wood chips, used for the mulch default.",
    },
  ],
  intro: [
    "Gravel, crushed stone and mulch are sold by volume (cubic yards or cubic meters) or by weight (tons or tonnes). To know how much to order, multiply the area you are covering by the depth of the layer, then use the material's bulk density to turn that volume into a weight.",
    "This calculator handles rectangular and round beds in US or metric units, shows the volume in both systems, the weight, the number of bags if you buy bagged material, and the cost at a price per ton or per cubic yard.",
  ],
  howToUse: [
    "Choose US units (feet and inches) or metric units (meters and centimeters).",
    "Pick a rectangle or a circle and enter its size.",
    "Enter the depth of the layer you want to spread.",
    "Choose the material. A typical bulk density is filled in; replace it with your supplier's figure if you have one.",
    "Optionally enter a bag size, and a price per ton or per cubic yard (per tonne or m³ in metric), to see the bags and cost.",
  ],
  formulas: [
    { title: "Area", expression: "A = L × W, or A = π × d² ÷ 4 for a circle", explanation: "L and W are the length and width, d the diameter." },
    { title: "Volume", expression: "V = A × depth", explanation: "With feet and inches, V (ft³) = A × depth (in) ÷ 12 and 1 yd³ = 27 ft³. With meters and centimeters, V (m³) = A × depth (cm) ÷ 100." },
    { title: "Weight", expression: "weight = V × bulk density", explanation: "1 short ton = 2,000 lb; 1 tonne = 1,000 kg." },
    { title: "Bags", expression: "bags = ⌈V ÷ bag size⌉", explanation: "Rounded up to a whole bag." },
  ],
  examples: [
    {
      title: "Gravel path 20 ft × 4 ft, 3 in deep",
      inputs: { units: "imperial", shape: "rectangle", lengthImperial: 20, widthImperial: 4, depthImperial: 3, material: "gravel", densityGravelImperial: 100, priceBasis: "weight", priceWeightImperial: 45 },
      steps: ["Volume = 20 × 4 × 3 ÷ 12 = 20 ft³", "= 20 ÷ 27 ≈ 0.74 yd³", "Weight = 20 × 100 = 2,000 lb = 1 ton, so about $45 at $45 per ton"],
      expectedPrimary: 20 / 27,
    },
    {
      title: "Round tree bed 3 m across with 8 cm of bark mulch in 50 L bags",
      inputs: { units: "metric", shape: "circle", diameterMetric: 3, depthMetric: 8, material: "woodMulch", densityWoodMulchMetric: 300, bagMetric: 50 },
      steps: ["Area = π × 3² ÷ 4 ≈ 7.07 m²", "Volume = 7.07 × 0.08 ≈ 0.565 m³ (565 L)", "Bags = 565 ÷ 50 ≈ 11.3, so buy 12 bags; weight ≈ 170 kg"],
      expectedPrimary: (Math.PI * 9 * 0.08) / 4,
    },
    {
      title: "Crushed stone pad 12 ft × 10 ft, 4 in deep, at $38 per cubic yard",
      inputs: { units: "imperial", shape: "rectangle", lengthImperial: 12, widthImperial: 10, depthImperial: 4, material: "crushedStone", densityCrushedStoneImperial: 92.6, priceBasis: "volume", priceVolumeImperial: 38 },
      steps: ["Volume = 12 × 10 × 4 ÷ 12 = 40 ft³ ≈ 1.48 yd³", "Weight = 40 × 92.6 = 3,704 lb ≈ 1.85 tons", "Cost = 1.48 × $38 ≈ $56.30"],
      expectedPrimary: 40 / 27,
    },
  ],
  assumptions: [
    "Bulk densities are typical values for loose, dry material, rounded from published tables. Real densities vary with rock type, moisture, grading and compaction; wet material can weigh noticeably more. Check with your supplier.",
    "The area is treated as flat and the layer as an even depth. Compacted base layers need more loose material than their finished volume.",
    "Prices are whatever you enter; the cost excludes delivery, tax and edging or fabric.",
  ],
  faqs: [
    { question: "How deep should gravel or mulch be?", answer: "Decorative mulch is often spread about 2–4 in (5–10 cm) deep and decorative gravel 2–3 in. Driveways and paths with a compacted base need deeper layers; follow the guidance for your project." },
    { question: "How many square feet does a cubic yard cover?", answer: "One cubic yard covers 324 ft² at 1 in deep, 108 ft² at 3 in and 81 ft² at 4 in. Divide 324 by the depth in inches." },
    { question: "Why does my supplier quote a different weight?", answer: "Bulk density depends on the stone, the size of the pieces and how wet the material is. Suppliers know the weight of their own products, so use their figure for ordering by the ton." },
  ],
  related: ["concrete-calculator", "square-footage-calculator", "plant-spacing-calculator"],
  updated: "2026-10-22",
  engine: gravelMulchEngine,
  text,
  makeEngine: makeGravelMulchEngine,
  translations,
});
