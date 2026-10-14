import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { cupsToGramsEngine, makeCupsToGramsEngine } from "./engine";

export const cupsToGrams = defineCalculator({
  id: "cooking-converter",
  slug: "cups-to-grams-converter",
  status: "published",
  title: "Cups to Grams Converter",
  shortTitle: "Cups to Grams",
  category: "food",
  collections: ["food-hospitality"],
  summary: "Convert cups to grams and grams to cups for flour, sugar, butter and other baking ingredients, each with its own density.",
  metaTitle: "Cups to Grams Converter – Flour, Sugar, Butter and More",
  metaDescription: "Convert cups to grams and grams to cups for 18 baking ingredients using a density for each, with US, metric and imperial cup sizes.",
  keywords: ["cups to grams", "grams to cups", "flour cups to grams", "sugar cups to grams", "baking conversion", "metric cup", "cup measurements"],
  popularRank: 14,
  addedOn: "2026-10-14",
  sources: [
    {
      title: "Ingredient Weight Chart",
      publisher: "King Arthur Baking Company",
      url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart",
      usedFor: "Grams per cup for flours, sugars, butter, oil, honey, maple syrup, cocoa, oats, chocolate chips and cornstarch.",
    },
    {
      title: "FoodData Central",
      publisher: "U.S. Department of Agriculture",
      url: "https://fdc.nal.usda.gov/",
      usedFor: "Portion weights for one cup of whole milk and of uncooked long-grain white rice.",
    },
    {
      title: "NIST Handbook 44, Appendix C: General Tables of Units of Measurement",
      publisher: "National Institute of Standards and Technology",
      url: "https://www.nist.gov/pml/owm/nist-handbook-44-current-edition",
      usedFor: "The size of the US cup (8 US fluid ounces) and the imperial fluid ounce.",
    },
  ],
  intro: [
    "A cup measures volume, but a cup of flour weighs much less than a cup of honey. Converting between cups and grams therefore needs the density of the specific ingredient.",
    "Choose the ingredient and the cup your recipe uses. US recipes use a 236.6 mL cup, while many Australian, New Zealand and Canadian recipes use a 250 mL metric cup.",
  ],
  howToUse: ["Choose cups to grams or grams to cups.", "Choose the ingredient.", "Choose the cup size used by the recipe.", "Enter the amount and read the result and the per-cup table."],
  formulas: [
    { title: "Cups to grams", expression: "grams = cups × cup volume (mL) × density (g/mL)", explanation: "Density = grams in one US cup ÷ 236.588 mL." },
    { title: "Grams to cups", expression: "cups = grams ÷ (cup volume (mL) × density (g/mL))", explanation: "The same relationship, solved for the number of cups." },
  ],
  examples: [
    {
      title: "2 US cups of all-purpose flour",
      inputs: { direction: "toGrams", ingredient: "flourAllPurpose", cup: "us", cups: 2 },
      steps: ["One US cup of all-purpose flour weighs 120 g", "2 × 120 g = 240 g (about 8.47 oz)"],
      expectedPrimary: 240,
    },
    {
      title: "500 g of granulated sugar in US cups",
      inputs: { direction: "toCups", ingredient: "sugarGranulated", cup: "us", grams: 500 },
      steps: ["One US cup of granulated sugar weighs 198 g", "500 ÷ 198 ≈ 2.53 cups, a little over 2 1/2 cups"],
      expectedPrimary: 500 / 198,
    },
  ],
  assumptions: [
    "Dry ingredients are spooned into the cup and levelled, not scooped or sifted.",
    "Weights are typical values; flour brands, sugar grain size, humidity and temperature can change them by several percent.",
    "Butter is measured solid and packed; liquids are measured at room temperature.",
  ],
  faqs: [
    { question: "Why does a cup of flour weigh less than a cup of sugar?", answer: "Flour particles trap more air and are less dense, so the same volume holds less mass. That is why each ingredient needs its own conversion." },
    { question: "Which cup size should I choose?", answer: "Use the US cup for American recipes and the 250 mL metric cup for most Australian, New Zealand and Canadian recipes. Older British recipes may use the larger imperial cup." },
    { question: "Is weighing better than using cups?", answer: "Yes, for baking. A kitchen scale avoids the variation caused by how the cup is filled." },
  ],
  related: ["recipe-scaler", "volume-converter", "weight-converter"],
  updated: "2026-10-14",
  engine: cupsToGramsEngine,
  text,
  makeEngine: makeCupsToGramsEngine,
  translations,
});
