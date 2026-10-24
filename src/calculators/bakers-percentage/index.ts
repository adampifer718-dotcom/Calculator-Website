import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { bakersPercentageEngine, makeBakersPercentageEngine } from "./engine";

export const bakersPercentage = defineCalculator({
  id: "bakers-percentage",
  slug: "bakers-percentage-calculator",
  status: "published",
  title: "Baker's Percentage Calculator",
  shortTitle: "Baker's percentage",
  category: "food",
  collections: ["food-hospitality"],
  summary: "Turn baker's percentages into ingredient weights from a flour weight, or find the flour needed for a target dough weight, with hydration.",
  metaTitle: "Baker's Percentage Calculator – Dough Weights & Hydration",
  metaDescription: "Convert baker's percentages into grams or ounces of flour, water, salt, yeast and extras, find the flour for a target dough weight and see the hydration.",
  keywords: ["baker's percentage calculator", "baker's math", "bread hydration", "dough calculator", "flour percentage", "bread formula", "pizza dough weights", "dough hydration"],
  addedOn: "2026-10-24",
  sources: [
    {
      title: "Baker's Percentage",
      publisher: "King Arthur Baking Company",
      url: "https://www.kingarthurbaking.com/pro/reference/bakers-percentage",
      usedFor: "The definition of baker's percentage: every ingredient as a percentage of the total flour weight, with the flour always 100%.",
    },
  ],
  intro: [
    "Bakers write bread formulas as percentages of the flour. The flour is always 100%, and every other ingredient is given relative to it: a dough with 70% water uses 700 g of water for every 1,000 g of flour. Because the percentages are relative to the flour, they add up to more than 100%.",
    "This makes recipes easy to scale and compare. Enter a flour weight to get the weight of every ingredient, or enter the total dough you want, such as four 250 g pizza balls, to work out how much flour to start with.",
  ],
  howToUse: [
    "Choose whether to start from the flour weight or from the total dough weight you want.",
    "Choose grams or ounces and enter the weight.",
    "Enter the percentages for water, salt and yeast, and up to three extra ingredients such as oil, sugar or butter, each with an optional name.",
    "Read the weight of each ingredient in the table, the total dough weight and the hydration.",
  ],
  formulas: [
    { title: "Ingredient weight", expression: "weight = flour weight × percentage ÷ 100", explanation: "Each ingredient's percentage is relative to the total flour weight, which is 100%." },
    { title: "Total dough weight", expression: "dough = flour × Σ% ÷ 100", explanation: "Σ% is the sum of all the percentages, including the flour's 100%." },
    { title: "Flour for a target dough weight", expression: "flour = target dough ÷ (Σ% ÷ 100)", explanation: "For 1,500 g of dough with Σ% = 171.5%, the flour is 1,500 ÷ 1.715 ≈ 874.6 g." },
    { title: "Hydration", expression: "hydration = water ÷ flour × 100%", explanation: "In baker's percentages this is simply the water percentage." },
  ],
  examples: [
    {
      title: "Basic bread with 1,000 g of flour at 70% hydration",
      inputs: { mode: "fromFlour", unit: "g", flour: 1000, water: 70, salt: 2, yeast: 1 },
      steps: ["Water = 1,000 × 0.70 = 700 g", "Salt = 20 g and yeast = 10 g", "Total = 1,000 × 173% = 1,730 g of dough"],
      expectedPrimary: 1730,
    },
    {
      title: "1,500 g of pizza dough with 3% olive oil",
      inputs: { mode: "fromDough", unit: "g", dough: 1500, water: 65, salt: 2, yeast: 1.5, extra1Name: "Olive oil", extra1Pct: 3 },
      steps: ["Σ% = 100 + 65 + 2 + 1.5 + 3 = 171.5%", "Flour = 1,500 ÷ 1.715 ≈ 874.6 g", "Water = 874.6 × 0.65 ≈ 568.5 g"],
      expectedPrimary: 874.6355685131194,
    },
    {
      title: "Sandwich loaf with 16 oz of flour and 5% sugar",
      inputs: { mode: "fromFlour", unit: "oz", flour: 16, water: 68, salt: 2, yeast: 0.5, extra1Name: "Sugar", extra1Pct: 5 },
      steps: ["Σ% = 100 + 68 + 2 + 0.5 + 5 = 175.5%", "Water = 16 × 0.68 = 10.88 oz; sugar = 0.8 oz", "Total = 16 × 1.755 = 28.08 oz of dough"],
      expectedPrimary: 28.08,
    },
  ],
  assumptions: [
    "All percentages are by weight, relative to the total weight of all the flours in the recipe.",
    "Hydration counts only the water line. Milk, eggs, butter or a sourdough starter also contain water (and a starter contains flour), so add them as extra lines and adjust the water if you want an exact overall hydration.",
    "The dough weight is the sum of the ingredients before baking. Some dough always sticks to bowls and tools, and bread loses weight in the oven, so allow a little extra when you need exact piece weights.",
  ],
  faqs: [
    { question: "Why do baker's percentages add up to more than 100%?", answer: "Because each ingredient is compared with the flour, not with the whole dough. The flour alone is 100%, so once water, salt and yeast are added the total is always above 100%, often around 160–180% for bread." },
    { question: "What does 70% hydration mean?", answer: "It means the dough has 70 g of water for every 100 g of flour. Higher hydration gives a wetter, stickier dough and usually a more open crumb; lower hydration gives a stiffer dough that is easier to shape." },
    { question: "How do I scale a recipe with baker's percentages?", answer: "Keep the percentages the same and change only the flour weight, or enter the total dough you need and let the calculator find the flour. Every other ingredient scales with it automatically." },
  ],
  related: ["recipe-scaler", "cups-to-grams-converter", "pizza-size-calculator"],
  updated: "2026-10-24",
  engine: bakersPercentageEngine,
  text,
  makeEngine: makeBakersPercentageEngine,
  translations,
});
