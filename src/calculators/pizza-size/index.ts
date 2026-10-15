import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makePizzaSizeEngine, pizzaSizeEngine } from "./engine";

export const pizzaSize = defineCalculator({
  id: "pizza-size",
  slug: "pizza-size-calculator",
  status: "published",
  title: "Pizza Size Calculator",
  shortTitle: "Pizza Size",
  category: "food",
  collections: ["food-hospitality", "personal-finance"],
  summary: "Compare two pizzas by area and price per square inch or square centimeter to find the better deal.",
  metaTitle: "Pizza Size Calculator – Price per Square Inch",
  metaDescription: "Compare two pizza sizes by area and price per square inch or cm², see which is the better value and how many small pizzas equal one large.",
  keywords: ["pizza size", "pizza area", "price per square inch", "pizza comparison", "large vs medium pizza", "pizza value", "pizza deal"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Prealgebra 2e, section 9.5: Solve Geometry Applications: Circles and Irregular Figures",
      publisher: "OpenStax, Rice University",
      usedFor: "The area of a circle, A = πr², and its diameter form.",
    },
  ],
  intro: [
    "Pizza sizes are named by diameter, but what you eat is area, and area grows with the square of the diameter. A 16-inch pizza is only a third wider than a 12-inch one, yet it has almost 78% more pizza.",
    "Enter the diameter and price of two pizzas to see the area of each, the price per square unit and which one gives you more for your money.",
  ],
  howToUse: [
    "Choose whether diameters are in inches or centimeters.",
    "Enter the diameter and price of pizza A.",
    "Enter the diameter and price of pizza B.",
    "Read which pizza is the better value, the price per square inch or square centimeter, and how the sizes compare.",
  ],
  formulas: [
    { title: "Area", expression: "A = π × d² ÷ 4", explanation: "d is the diameter. This is the same as π × r² with the radius r = d ÷ 2." },
    { title: "Price per area", expression: "price ÷ A", explanation: "The lower figure is the better value." },
    { title: "Size ratio", expression: "A_B ÷ A_A = (d_B ÷ d_A)²", explanation: "How many pizza A have the same area as one pizza B." },
  ],
  examples: [
    {
      title: "12-inch for $12.99 against 16-inch for $18.99",
      inputs: { unit: "in", diameterA: 12, priceA: 12.99, diameterB: 16, priceB: 18.99, currency: "USD" },
      steps: ["A: π × 12² ÷ 4 ≈ 113.10 in², so $12.99 ÷ 113.10 ≈ $0.1149 per in²", "B: π × 16² ÷ 4 ≈ 201.06 in², so $18.99 ÷ 201.06 ≈ $0.0944 per in²", "(16 ÷ 12)² ≈ 1.778, so B has about 77.78% more pizza"],
      expectedPrimary: "Pizza B is the better value",
    },
    {
      title: "30 cm for €9.50 against 40 cm for €17.90",
      inputs: { unit: "cm", diameterA: 30, priceA: 9.5, diameterB: 40, priceB: 17.9, currency: "EUR" },
      steps: ["A: π × 30² ÷ 4 ≈ 706.86 cm², so €9.50 ÷ 706.86 ≈ €0.0134 per cm²", "B: π × 40² ÷ 4 ≈ 1,256.64 cm², so €17.90 ÷ 1,256.64 ≈ €0.0142 per cm²", "The smaller pizza is cheaper per square centimeter here"],
      expectedPrimary: "Pizza A is the better value",
    },
  ],
  assumptions: [
    "Pizzas are round and the diameter is the full width, crust included.",
    "Both pizzas have the same thickness and toppings, so area is a fair measure of how much food you get.",
    "Choosing a currency changes formatting only.",
  ],
  faqs: [
    { question: "Why does a slightly bigger pizza have so much more area?", answer: "Area depends on the diameter squared. Going from 10 to 14 inches is 40% wider but almost doubles the area, because 1.4² = 1.96." },
    { question: "Are two medium pizzas better than one large?", answer: "Compare the areas. Two 12-inch pizzas have about 226 in², while one 18-inch pizza has about 254 in², so the single large is bigger." },
    { question: "Should I count the crust?", answer: "This calculator does, because sizes are sold by full diameter. If you leave the crust, subtract twice its width from the diameter of each pizza before entering it." },
  ],
  related: ["unit-price-calculator", "circumference-calculator", "recipe-scaler"],
  updated: "2026-10-15",
  engine: pizzaSizeEngine,
  text,
  makeEngine: makePizzaSizeEngine,
  translations,
});
