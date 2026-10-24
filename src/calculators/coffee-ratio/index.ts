import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { coffeeRatioEngine, makeCoffeeRatioEngine } from "./engine";

export const coffeeRatio = defineCalculator({
  id: "coffee-ratio",
  slug: "coffee-ratio-calculator",
  status: "published",
  title: "Coffee to Water Ratio Calculator",
  shortTitle: "Coffee ratio",
  category: "food",
  collections: ["food-hospitality"],
  summary: "Work out how much ground coffee to use for a given amount of water, or how much water for your coffee, for drip, French press, espresso and cold brew.",
  metaTitle: "Coffee to Water Ratio Calculator – Grams per Cup",
  metaDescription: "Find how many grams of coffee to use for your water, or how much water for your coffee, with editable ratios for drip, French press, espresso and cold brew.",
  keywords: ["coffee ratio calculator", "coffee to water ratio", "how much coffee per cup", "pour over ratio", "French press ratio", "cold brew ratio", "espresso brew ratio", "grams of coffee"],
  addedOn: "2026-10-24",
  sources: [
    {
      title: "Golden Cup Standard",
      publisher: "Specialty Coffee Association",
      usedFor: "The widely quoted Golden Cup guideline of about 55 g of coffee per liter of water (roughly 1:18), given for comparison only.",
    },
  ],
  intro: [
    "The ratio of coffee to water is the simplest way to make coffee taste the same every time. It is written as 1 : n, meaning n grams of water for every gram of ground coffee: at 1:16, 20 g of coffee goes with 320 g of water. A smaller n makes stronger coffee.",
    "Choose a brew method to start from a typical ratio, adjust it to your taste, and the calculator works out the coffee for your water or the water for your coffee, in grams, milliliters, fluid ounces or cups.",
  ],
  howToUse: [
    "Choose the brew method. Its typical ratio is filled in; change it if you like your coffee stronger or lighter.",
    "Choose whether to work out the coffee from the water or the water from the coffee.",
    "Enter the amount and pick its unit. The result appears in the unit chosen for the other ingredient.",
    "Weigh the coffee on a kitchen scale for the most consistent results.",
  ],
  formulas: [
    { title: "Coffee from water", expression: "coffee (g) = water (g) ÷ n", explanation: "For a ratio of 1 : n. Water is taken as 1 g per mL." },
    { title: "Water from coffee", expression: "water (g) = coffee (g) × n", explanation: "1 US cup = 8 US fl oz = 236.5882365 mL, and 1 oz = 28.349523125 g." },
    { title: "Strength in grams per liter", expression: "g/L = coffee (g) ÷ water (mL) × 1,000", explanation: "A 1:18 ratio is about 55.6 g of coffee per liter of water." },
  ],
  examples: [
    {
      title: "Pour-over with 500 mL of water at 1:16",
      inputs: { method: "drip", ratioDrip: 16, solve: "coffee", water: 500, waterUnit: "mL", coffeeUnit: "g" },
      steps: ["500 mL of water weighs 500 g", "Coffee = 500 ÷ 16 = 31.25 g"],
      expectedPrimary: 31.25,
    },
    {
      title: "French press with 30 g of coffee at 1:12, water in cups",
      inputs: { method: "frenchPress", ratioFrenchPress: 12, solve: "water", coffee: 30, coffeeUnit: "g", waterUnit: "cup" },
      steps: ["Water = 30 × 12 = 360 g = 360 mL", "In US cups: 360 ÷ 236.588 ≈ 1.52 cups"],
      expectedPrimary: 1.521631021582935,
    },
    {
      title: "Cold brew concentrate with 4 cups of water at 1:8",
      inputs: { method: "coldBrew", ratioColdBrew: 8, solve: "coffee", water: 4, waterUnit: "cup", coffeeUnit: "g" },
      steps: ["4 US cups = 4 × 236.588 ≈ 946.35 mL of water", "Coffee = 946.35 ÷ 8 ≈ 118.29 g, about 4.17 oz"],
      expectedPrimary: 118.29411825,
    },
  ],
  assumptions: [
    "The ratios offered for each method are typical starting points, not rules. Taste, roast level, grind size and brew time all change the best ratio.",
    "Water is taken as 1 g per mL. Ground coffee holds back some of the water, so you end up with a little less brewed coffee than the water used.",
    "For espresso, the ratio is taken as dry coffee to the weight of the drink in the cup, as baristas usually describe it.",
    "Coffee amounts are by weight. Scoops and spoons hold different amounts depending on the grind and the roast, so they are not converted.",
  ],
  faqs: [
    { question: "What is the best coffee to water ratio?", answer: "There is no single best ratio. For drip and pour-over, many people start between 1:15 and 1:17 and adjust; the Specialty Coffee Association's often-quoted Golden Cup guideline works out to about 1:18. If the coffee tastes weak, lower n; if it tastes too strong, raise it." },
    { question: "How much coffee do I need for one cup?", answer: "For one US cup (about 237 mL) at 1:16, use about 14.8 g of coffee. Many mugs hold more than a US cup, so measure your mug's volume for a better answer." },
    { question: "Why weigh coffee instead of using scoops?", answer: "A scoop of coffee can weigh quite different amounts depending on the bean, the roast and how fine it is ground. Weighing both the coffee and the water makes it much easier to repeat a cup you liked." },
  ],
  related: ["recipe-scaler", "cups-to-grams-converter", "unit-price-calculator"],
  updated: "2026-10-24",
  engine: coffeeRatioEngine,
  text,
  makeEngine: makeCoffeeRatioEngine,
  translations,
});
