import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeRoofingEngine, roofingEngine } from "./engine";

export const roofing = defineCalculator({
  id: "roofing",
  slug: "roofing-calculator",
  status: "published",
  title: "Roofing Calculator",
  shortTitle: "Roofing",
  category: "construction",
  collections: ["construction-engineering", "real-estate"],
  summary: "Estimate the roof area, roofing squares and shingle bundles for a simple gable or hip roof from the building footprint, overhang and pitch.",
  metaTitle: "Roofing Calculator – Squares, Bundles and Roof Area",
  metaDescription: "Estimate roof area from the footprint, overhang and pitch, then the roofing squares, shingle bundles and underlayment rolls to buy, with a waste allowance.",
  keywords: ["roofing calculator", "roof area calculator", "roofing squares", "shingle calculator", "bundles of shingles", "roof square footage", "underlayment rolls", "pitch factor"],
  addedOn: "2026-10-24",
  sources: [
    {
      title: "How Many Bundles of Shingles Are in a Square?",
      publisher: "GAF",
      url: "https://www.gaf.com/en-us/blog/your-home/how-many-bundles-of-shingles-are-in-a-square---63a47862-f7e1-4e73-abcf-8d09917a8b8d",
      usedFor: "A roofing square of 100 ft² and the common packaging of three bundles of shingles per square, which varies by product.",
    },
    {
      title: "Don't Fall Short on Shingles: How to Estimate Materials for Roofing Projects",
      publisher: "Fine Homebuilding",
      url: "https://www.finehomebuilding.com/project-guides/roofing/dont-fall-short-on-shingles-how-to-estimate-materials-for-roofing-projects",
      usedFor: "The general method of estimating roofing material from roof area, squares and a waste allowance.",
    },
  ],
  intro: [
    "Roofing is sold by the square: one square covers 100 ft² (about 9.29 m²) of roof. A sloped roof has more surface than the footprint under it, so the plan area is multiplied by a pitch factor that grows with the steepness of the roof.",
    "Enter the building's length and width, the overhang and the pitch to estimate the roof area, the number of squares and shingle bundles, and optionally the rolls of underlayment. A waste allowance covers cuts, starter rows and caps.",
  ],
  howToUse: [
    "Choose US units (feet) or metric units (meters).",
    "Enter the building's length and width and how far the roof overhangs the walls.",
    "Enter the pitch as the rise per 12 of run (for example 6 for a 6/12 roof), or as an angle.",
    "Choose gable or hip and check the waste allowance; hip roofs default to 15% because of the extra cutting.",
    "Check the bundles per square for your shingles and, if you want, enter the coverage of one underlayment roll.",
  ],
  formulas: [
    { title: "Plan area", expression: "plan = (L + 2 × overhang) × (W + 2 × overhang)", explanation: "L and W are the building's outside length and width." },
    { title: "Pitch factor", expression: "factor = √(1 + (rise ÷ 12)²)", explanation: "For a 6/12 roof the factor is √1.25 ≈ 1.118. From an angle θ, the factor is 1 ÷ cos θ." },
    { title: "Roof area and squares", expression: "area = plan × factor; squares = area × (1 + waste) ÷ 100 ft²", explanation: "Metric areas are converted with 1 ft² = 0.09290304 m²." },
    { title: "Bundles and rolls", expression: "bundles = ⌈squares × bundles per square⌉; rolls = ⌈area with waste ÷ roll coverage⌉", explanation: "Both are rounded up to whole units." },
  ],
  examples: [
    {
      title: "40 × 30 ft house, 1 ft overhang, 6/12 gable roof",
      inputs: { units: "imperial", lengthImperial: 40, widthImperial: 30, overhangImperial: 1, pitchMode: "rise", rise: 6, roofType: "gable", wasteGable: 10, bundles: 3 },
      steps: [
        "Plan area = 42 × 32 = 1,344 ft²",
        "Roof area = 1,344 × √1.25 ≈ 1,502.64 ft²",
        "With 10% waste: 1,652.90 ft², or 16.53 squares",
        "Bundles = ⌈16.53 × 3⌉ = 50",
      ],
      expectedPrimary: 16.529014489678445,
    },
    {
      title: "12 × 9 m house, 0.5 m overhang, 30° hip roof",
      inputs: { units: "metric", lengthMetric: 12, widthMetric: 9, overhangMetric: 0.5, pitchMode: "angle", angle: 30, roofType: "hip", wasteHip: 15, bundles: 3 },
      steps: [
        "Plan area = 13 × 10 = 130 m²",
        "Pitch factor = 1 ÷ cos 30° ≈ 1.1547, so the roof area ≈ 150.11 m²",
        "With 15% waste: 172.63 m² ÷ 0.09290304 ≈ 1,858.15 ft², or 18.58 squares",
        "Bundles = ⌈18.58 × 3⌉ = 56",
      ],
      expectedPrimary: 18.581494264094918,
    },
    {
      title: "50 × 28 ft, 1.5 ft overhang, 8/12 roof with underlayment",
      inputs: { units: "imperial", lengthImperial: 50, widthImperial: 28, overhangImperial: 1.5, pitchMode: "rise", rise: 8, roofType: "gable", wasteGable: 12, bundles: 3, rollCoverageImperial: 400 },
      steps: [
        "Plan area = 53 × 31 = 1,643 ft²",
        "Pitch factor = √(1 + (8 ÷ 12)²) ≈ 1.2019, so the roof area ≈ 1,974.64 ft²",
        "With 12% waste: 2,211.60 ft², or 22.12 squares and ⌈66.35⌉ = 67 bundles",
        "Underlayment at 400 ft² per roll: ⌈5.53⌉ = 6 rolls",
      ],
      expectedPrimary: 22.11597078352605,
    },
  ],
  assumptions: [
    "The roof is a simple rectangle in plan with the same pitch on every slope. Dormers, valleys, chimneys, skylights, L-shaped plans and slopes of different pitch need extra material and should be measured section by section.",
    "A hip roof and a gable roof over the same footprint and at the same pitch have the same roof area; the hip roof's higher default waste allows for its extra cuts.",
    "Bundles per square and underlayment coverage vary by product. Use the figures printed on the packaging.",
    "This is a material estimate only. Roof structure, ventilation, fire ratings and installation details must follow the manufacturer's instructions and the local building code.",
  ],
  faqs: [
    { question: "What is a roofing square?", answer: "A square is 100 ft² of roof surface, a 10 × 10 ft area. Roofers price and order shingles by the square; 1 square is about 9.29 m²." },
    { question: "How many bundles of shingles are in a square?", answer: "Many asphalt shingles are packed three bundles to a square, but heavier products may come in four or more smaller bundles. The bundle label states its coverage, so check it and adjust the bundles per square." },
    { question: "Why is the roof area bigger than the house?", answer: "Because the roof slopes and overhangs the walls. A 6/12 roof has about 12% more surface than its plan area, and a 12/12 roof about 41% more, before the overhang is added." },
  ],
  related: ["roof-pitch-calculator", "square-footage-calculator", "drywall-calculator"],
  updated: "2026-10-24",
  engine: roofingEngine,
  text,
  makeEngine: makeRoofingEngine,
  translations,
});
