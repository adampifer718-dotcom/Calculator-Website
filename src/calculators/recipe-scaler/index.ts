import type { CalculatorDefinition } from "@/calculators/framework/types";
import { recipeScalerEngine } from "./engine";

export const recipeScaler: CalculatorDefinition = {
  id: "recipe-scaler",
  slug: "recipe-scaler",
  status: "published",
  title: "Recipe Scaler",
  shortTitle: "Recipe Scaler",
  category: "food",
  collections: ["food-hospitality"],
  summary: "Scale a recipe's ingredient amounts up or down for any number of servings.",
  metaTitle: "Recipe Scaler – Adjust Servings and Ingredients",
  metaDescription: "Scale any recipe to a new number of servings. Paste your ingredient list and get adjusted amounts, shown as kitchen-friendly fractions.",
  keywords: ["recipe", "scale recipe", "servings", "ingredients", "cooking", "baking", "double recipe", "half recipe"],
  popularRank: 37,
  addedOn: "2026-10-14",
  sources: [],
  intro: ["Scaling a recipe means multiplying every amount by the same factor: the new servings divided by the original servings.", "Paste your ingredient list and each amount is rescaled and shown as a familiar fraction where possible."],
  howToUse: ["Enter how many servings the recipe makes.", "Enter how many servings you want.", "Paste the ingredients, one per line, starting with the amount.", "Read the scale factor and the adjusted list."],
  formulas: [
    { title: "Scale factor", expression: "factor = desired servings ÷ original servings", explanation: "For example, 6 ÷ 4 = 1.5." },
    { title: "New amount", expression: "new amount = original amount × factor", explanation: "Applied to every ingredient with a leading amount." },
  ],
  examples: [
    {
      title: "A 4-serving recipe for 6",
      inputs: {"original": 4, "desired": 6, "ingredients": "2 cups flour\n3/4 cup sugar"},
      steps: ["Factor = 6 ÷ 4 = 1.5", "2 cups → 3 cups; 3/4 cup → 1 1/8 cups"],
      expectedPrimary: 1.5,
    },
    {
      title: "An 8-serving recipe for 2",
      inputs: {"original": 8, "desired": 2, "ingredients": "4 eggs"},
      steps: ["Factor = 2 ÷ 8 = 0.25", "4 eggs → 1 egg"],
      expectedPrimary: 0.25,
    },
  ],
  assumptions: ["Amounts must start the line, as whole numbers, decimals, fractions (1/2), mixed numbers (1 1/2) or symbols such as ½.", "Units are not converted; scaled amounts keep the original unit.", "Cooking times, pan sizes, leavening and seasoning do not always scale linearly; adjust to taste and check doneness."],
  faqs: [
    { question: "How do I halve a recipe?", answer: "Use a factor of 0.5 by setting the desired servings to half the original." },
    { question: "What about eggs?", answer: "Round to the nearest whole egg, or beat an egg and use part of it by weight." },
    { question: "Do baking times change?", answer: "Often. Larger or smaller pans change cooking time, so check early and adjust." },
  ],
  related: ["weight-converter", "temperature-converter", "tip-calculator"],
  updated: "2026-10-14",
  engine: recipeScalerEngine,
};
