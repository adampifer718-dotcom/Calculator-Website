import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { concreteEngine, makeConcreteEngine } from "./engine";

export const concrete = defineCalculator({
  id: "concrete-volume",
  slug: "concrete-calculator",
  status: "published",
  title: "Concrete Calculator",
  shortTitle: "Concrete",
  category: "construction",
  collections: ["construction-engineering", "real-estate"],
  summary: "Estimate how much concrete to order for slabs, footings, round columns and hollow tubes, with an optional waste allowance.",
  metaTitle: "Concrete Calculator – Slab, Column and Tube Volume",
  metaDescription: "Estimate concrete volume for slabs, footings, round columns and tubes in cubic meters, cubic yards, cubic feet and liters, with an optional waste allowance.",
  keywords: ["concrete", "concrete volume", "cubic yards of concrete", "slab", "footing", "column", "sonotube", "ready mix"],
  popularRank: 13,
  addedOn: "2026-10-14",
  expertReview: { area: "engineering", status: "pending" },
  sources: [
    {
      title: "NIST Special Publication 811: Guide for the Use of the International System of Units",
      publisher: "National Institute of Standards and Technology",
      url: "https://www.nist.gov/pml/special-publication-811",
      usedFor: "Exact conversion factors between feet, inches, meters, cubic yards and cubic meters.",
    },
  ],
  intro: [
    "Concrete is ordered by volume. Enter the dimensions of a slab, footing, round column or hollow tube to see how much you need, in the units suppliers use.",
    "An optional waste allowance covers spillage, uneven ground and forms that bow outward, so the delivery is not short.",
  ],
  howToUse: [
    "Choose the shape and metric or US units.",
    "Enter the dimensions: long sides in meters or feet, thickness and diameters in centimeters or inches.",
    "Enter how many identical pieces you are pouring.",
    "Set the waste allowance (5–10% is common) and read the volume to order.",
  ],
  formulas: [
    { title: "Slab or footing", expression: "V = length × width × thickness", explanation: "A rectangular block. Convert all dimensions to the same unit first." },
    { title: "Round column", expression: "V = π × (diameter ÷ 2)² × height", explanation: "A cylinder, such as a column poured in a cardboard tube form." },
    { title: "Hollow tube", expression: "V = π × ((outer ÷ 2)² − (inner ÷ 2)²) × height", explanation: "The outer cylinder minus the hollow core." },
    { title: "With waste", expression: "Order = V × number of pieces × (1 + waste % ÷ 100)", explanation: "1 yd³ = 0.764555 m³ and 1 m³ = 1,000 L." },
  ],
  examples: [
    {
      title: "Patio slab 4 m × 3 m, 10 cm thick, 10% waste",
      inputs: { shape: "slab", units: "metric", lengthMetric: 4, widthMetric: 3, thicknessMetric: 10, quantity: 1, waste: 10 },
      steps: ["V = 4 m × 3 m × 0.10 m = 1.2 m³", "With 10% waste: 1.2 × 1.10 = 1.32 m³"],
      expectedPrimary: 1.32,
    },
    {
      title: "Garage pad 10 ft × 10 ft, 4 in thick, no waste",
      inputs: { shape: "slab", units: "imperial", lengthImperial: 10, widthImperial: 10, thicknessImperial: 4, quantity: 1, waste: 0 },
      steps: ["V = 10 ft × 10 ft × 4/12 ft = 33.33 ft³", "33.33 ft³ ÷ 27 = 1.235 yd³"],
      expectedPrimary: 100 / 3 / 27,
    },
  ],
  assumptions: [
    "Shapes are ideal rectangles and cylinders; measure the actual forms, because ground and formwork are rarely perfectly flat or straight.",
    "The waste allowance is a percentage of the exact volume; it does not account for reinforcement bars, which displace a small amount of concrete.",
    "This is a volume estimate only, not engineering advice or a structural design. Thickness, reinforcement and concrete strength must follow local codes or an engineer.",
  ],
  faqs: [
    { question: "How much extra concrete should I order?", answer: "5–10% is a common allowance for slabs on prepared ground; uneven excavations may need more. Running short mid-pour causes weak joints, so suppliers usually recommend rounding up." },
    { question: "How many cubic feet are in a cubic yard?", answer: "27, because a yard is 3 feet and 3 × 3 × 3 = 27. One cubic yard is about 0.765 cubic meters." },
    { question: "Can I use this for bags of premixed concrete?", answer: "Yes: divide the volume by the yield printed on the bag, which differs between products, and round up." },
  ],
  related: ["square-footage-calculator", "length-converter", "volume-converter"],
  updated: "2026-10-14",
  engine: concreteEngine,
  text,
  makeEngine: makeConcreteEngine,
  translations,
});
