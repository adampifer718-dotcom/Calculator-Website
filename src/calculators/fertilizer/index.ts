import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { fertilizerEngine, makeFertilizerEngine } from "./engine";

export const fertilizer = defineCalculator({
  id: "fertilizer",
  slug: "fertilizer-calculator",
  status: "published",
  title: "Fertilizer Calculator (N-P-K)",
  shortTitle: "Fertilizer (N-P-K)",
  category: "ecology",
  collections: ["agriculture-gardening", "environment-energy"],
  summary: "Work out how much of an N-P-K fertilizer to spread to supply a target rate of nitrogen, phosphate or potash over a lawn, garden or field.",
  metaTitle: "Fertilizer Calculator (N-P-K) – Product Needed for a Rate",
  metaDescription: "Find how much fertilizer to apply from its N-P-K grade, a nutrient rate per area and the area, with the nitrogen, phosphate and potash it supplies.",
  keywords: ["fertilizer calculator", "NPK calculator", "fertilizer rate", "lb N per 1000 sq ft", "kg N per hectare", "P2O5 to P", "K2O to K", "how much fertilizer"],
  addedOn: "2026-10-28",
  sources: [
    {
      title: "How to Calculate Fertilizer Rates for Lawn and Garden",
      publisher: "Iowa State University Extension and Outreach",
      url: "https://yardandgarden.extension.iastate.edu/how-to/how-calculate-fertilizer-rates-lawn-and-garden",
      usedFor: "Reading the grade as percent N, P₂O₅ and K₂O by weight, and dividing the nutrient rate by the grade fraction.",
    },
    {
      title: "Competency Area 4: Nutrient Sources, Analyses, Application Methods",
      publisher: "Cornell University, Nutrient Management for CCAs",
      url: "https://nrcca.cals.cornell.edu/nutrient/CA4/CA0432.php",
      usedFor: "Fertilizer grade as guaranteed N-P₂O₅-K₂O, and the P₂O₅ to P and K₂O to K conversion factors.",
    },
    {
      title: "Standard Atomic Weights",
      publisher: "IUPAC Commission on Isotopic Abundances and Atomic Weights (CIAAW)",
      url: "https://ciaaw.org/atomic-weights.htm",
      usedFor: "Atomic weights of phosphorus, potassium and oxygen used to compute the oxide-to-element factors.",
    },
  ],
  intro: [
    "Fertilizer bags carry three numbers, such as 10-10-10 or 46-0-0. They are the percentages by weight of nitrogen (N), phosphate (P₂O₅) and potash (K₂O). Soil test reports and growing guides usually recommend an amount of a nutrient per area, not an amount of product, so you need to convert one into the other.",
    "Enter the product's grade, choose the nutrient your recommendation is for, and enter the rate and the area. The calculator gives the amount of product to spread and the amounts of all three nutrients it supplies, including elemental phosphorus and potassium.",
  ],
  howToUse: [
    "Enter the three numbers of the fertilizer grade from the bag, for example 10, 20 and 10 for a 10-20-10 product.",
    "Choose the nutrient the recommended rate refers to: nitrogen, phosphate (P₂O₅) or potash (K₂O).",
    "Enter the recommended rate and its unit, for example 1 lb per 1,000 ft² or 120 kg per hectare.",
    "Enter the area and its unit. The product amount is shown in pounds for pound-based rates and in kilograms for metric rates.",
  ],
  formulas: [
    { title: "Product needed", expression: "product = rate × area ÷ (grade % ÷ 100)", explanation: "The grade % is the number on the bag for the chosen nutrient. Rate and area are converted to a common unit first." },
    { title: "Nutrients supplied", expression: "N = product × N%;  P₂O₅ = product × P₂O₅%;  K₂O = product × K₂O%", explanation: "Each percentage is the corresponding grade number ÷ 100." },
    { title: "Elemental phosphorus and potassium", expression: "P = P₂O₅ × 0.4364;  K = K₂O × 0.8302", explanation: "The factors are the mass shares 2P ÷ P₂O₅ and 2K ÷ K₂O, computed from standard atomic weights (P 30.973762, K 39.0983, O 15.999)." },
  ],
  examples: [
    {
      title: "10-10-10 on a 5,000 ft² lawn at 1 lb N per 1,000 ft²",
      inputs: { gradeN: 10, gradeP: 10, gradeK: 10, nutrient: "N", rate: 1, rateUnit: "lb1000ft2", area: 5000, areaUnit: "ft2" },
      steps: ["Nitrogen needed = 1 × 5,000 ÷ 1,000 = 5 lb", "Product = 5 ÷ 0.10 = 50 lb of 10-10-10", "It also supplies 5 lb of P₂O₅ (≈ 2.18 lb P) and 5 lb of K₂O (≈ 4.15 lb K)"],
      expectedPrimary: 50,
    },
    {
      title: "Urea (46-0-0) at 120 kg N per hectare on 2.5 ha",
      inputs: { gradeN: 46, gradeP: 0, gradeK: 0, nutrient: "N", rate: 120, rateUnit: "kgHa", area: 2.5, areaUnit: "ha" },
      steps: ["Nitrogen needed = 120 × 2.5 = 300 kg", "Product = 300 ÷ 0.46 ≈ 652.17 kg of urea"],
      expectedPrimary: 652.1739130434783,
    },
    {
      title: "15-30-15 at 6 g phosphate per m² on a 25 m² bed",
      inputs: { gradeN: 15, gradeP: 30, gradeK: 15, nutrient: "P2O5", rate: 6, rateUnit: "gM2", area: 25, areaUnit: "m2" },
      steps: ["Phosphate needed = 6 × 25 = 150 g", "Product = 150 ÷ 0.30 = 500 g = 0.5 kg", "It also supplies 75 g of N and 75 g of K₂O"],
      expectedPrimary: 0.5,
    },
  ],
  assumptions: [
    "This is arithmetic only. Base the rate on a soil test and on local recommendations, and follow the product label and any local rules on fertilizer use, timing and runoff.",
    "The grade is taken as the guaranteed percentage by weight of N, P₂O₅ and K₂O, as printed on labels. Liquid products whose grade is stated by weight need their weight, not their volume.",
    "The amounts assume an even spread over the whole area. Spreader settings and overlap affect what is actually applied.",
  ],
  faqs: [
    { question: "Why are phosphorus and potassium given as P₂O₅ and K₂O?", answer: "It is a long-standing labelling convention. The grade states phosphorus as the oxide P₂O₅ and potassium as K₂O, even though the product does not contain those oxides as such. Multiply by about 0.436 and 0.830 to get the elemental amounts." },
    { question: "What if my recommendation is for several nutrients?", answer: "Calculate the product amount for the nutrient you most need, then check the other nutrients it supplies. If they are too high or too low, a product with a different ratio, or separate products for each nutrient, may fit better." },
    { question: "How do I convert lb per acre to kg per hectare?", answer: "1 lb per acre is about 1.121 kg per hectare, because a pound is 0.45359237 kg and an acre is about 0.4047 ha. You can enter the rate in either unit and the calculator converts it for you." },
  ],
  related: ["plant-spacing-calculator", "gravel-calculator", "rainwater-harvesting-calculator"],
  updated: "2026-10-28",
  engine: fertilizerEngine,
  text,
  makeEngine: makeFertilizerEngine,
  translations,
});
