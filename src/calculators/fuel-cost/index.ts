import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { fuelCostEngine, makeFuelCostEngine } from "./engine";

export const fuelCost = defineCalculator({
  id: "fuel-cost",
  slug: "fuel-cost-calculator",
  status: "published",
  title: "Fuel Cost Calculator",
  shortTitle: "Fuel Cost",
  category: "everyday-life",
  collections: ["personal-finance", "environment-energy", "business"],
  summary: "Estimate the fuel used and cost of a trip from distance, fuel economy and fuel price.",
  metaTitle: "Fuel Cost Calculator – Trip Gas Cost",
  metaDescription: "Calculate the fuel cost of a trip from distance, fuel economy and fuel price, in miles and MPG or kilometers and liters per 100 km.",
  keywords: ["fuel cost", "gas cost", "trip cost", "mpg", "l/100km", "petrol", "diesel", "road trip"],
  popularRank: 18,
  addedOn: "2026-10-14",
  sources: [],
  intro: ["Work out how much fuel a trip needs and what it will cost. It works with miles per gallon or liters per 100 kilometers.", "Use your car's real-world fuel economy for the best estimate."],
  howToUse: ["Choose US or metric units.", "Enter the trip distance.", "Enter the fuel economy and the fuel price.", "Read the fuel used and the cost."],
  formulas: [
    { title: "US units", expression: "gallons = miles ÷ MPG\ncost = gallons × price per gallon", explanation: "MPG means miles per gallon." },
    { title: "Metric units", expression: "liters = km × (L/100 km) ÷ 100\ncost = liters × price per liter", explanation: "Lower L/100 km means better economy." },
  ],
  examples: [
    {
      title: "300 miles at 30 MPG, $3.50 per gallon",
      inputs: {"units": "us", "distance": 300, "efficiency": 30, "price": 3.5, "currency": "USD"},
      steps: ["300 ÷ 30 = 10 gallons", "10 × $3.50 = $35.00"],
      expectedPrimary: 35,
    },
    {
      title: "500 km at 6.5 L/100 km, €1.80 per liter",
      inputs: {"units": "metric", "distance": 500, "efficiency": 6.5, "price": 1.8, "currency": "EUR"},
      steps: ["500 × 6.5 ÷ 100 = 32.5 L", "32.5 × €1.80 = €58.50"],
      expectedPrimary: 58.5,
    },
  ],
  assumptions: ["Fuel economy varies with speed, load, terrain and weather.", "US gallons are used for MPG.", "Choosing a currency changes formatting only."],
  faqs: [
    { question: "How do I calculate gas cost for a trip?", answer: "Divide the distance by your MPG to get gallons, then multiply by the price per gallon." },
    { question: "How do I convert MPG to L/100 km?", answer: "Divide 235.215 by the MPG (US gallons). 30 MPG is about 7.84 L/100 km." },
    { question: "Should I calculate the round trip?", answer: "Yes, double the distance for a return trip." },
  ],
  related: ["speed-distance-time-calculator", "electricity-cost-calculator", "tip-calculator"],
  updated: "2026-10-14",
  engine: fuelCostEngine,
  text,
  makeEngine: makeFuelCostEngine,
  translations,
});
