import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { tipEngine, makeTipEngine } from "./engine";

export const tip = defineCalculator({
  id: "tip",
  slug: "tip-calculator",
  status: "published",
  title: "Tip Calculator",
  shortTitle: "Tip",
  category: "everyday-life",
  collections: ["food-hospitality", "personal-finance"],
  summary: "Work out the tip, the total bill and what each person pays when splitting.",
  metaTitle: "Tip Calculator – Tip Amount and Bill Split",
  metaDescription: "Calculate the tip for any bill and tip percentage, the total with tip, and how much each person pays when the bill is split evenly.",
  keywords: ["tip", "gratuity", "bill split", "restaurant", "split the bill", "service charge"],
  popularRank: 20,
  addedOn: "2026-10-14",
  sources: [],
  intro: ["Enter the bill and a tip percentage to see the tip and the total. Add the number of people to split it evenly.", "Customs vary by country and service, so choose the percentage that fits."],
  howToUse: ["Enter the bill amount.", "Enter the tip percentage.", "Enter how many people are splitting the bill.", "Read the tip, total and amount per person."],
  formulas: [
    { title: "Tip", expression: "Tip = bill × tip % ÷ 100", explanation: "Some people tip on the pre-tax amount; enter whichever you prefer." },
    { title: "Split", expression: "Per person = (bill + tip) ÷ people", explanation: "An even split." },
  ],
  examples: [
    {
      title: "$80 bill, 18% tip, 4 people",
      inputs: {"bill": 80, "percent": 18, "people": 4, "currency": "USD"},
      steps: ["Tip = $80 × 0.18 = $14.40", "Total = $94.40; each pays $23.60"],
      expectedPrimary: 14.4,
    },
    {
      title: "$45 bill, 20% tip, 1 person",
      inputs: {"bill": 45, "percent": 20, "people": 1, "currency": "USD"},
      steps: ["Tip = $45 × 0.20 = $9", "Total = $54"],
      expectedPrimary: 9,
    },
  ],
  assumptions: ["The bill is split evenly; amounts are rounded to the cent for display only.", "Choosing a currency changes formatting only."],
  faqs: [
    { question: "How much should I tip?", answer: "It depends on local custom and service. In the US, 15–20% at restaurants is common; elsewhere tipping may be smaller or included." },
    { question: "Should I tip before or after tax?", answer: "Either is common. Enter the pre-tax or post-tax amount as the bill, whichever you prefer." },
    { question: "How do I split a bill unevenly?", answer: "Calculate each person's share of the bill separately, then apply the tip percentage to each." },
  ],
  related: ["discount-calculator", "sales-tax-calculator", "percentage-calculator"],
  updated: "2026-10-14",
  engine: tipEngine,
  text,
  makeEngine: makeTipEngine,
  translations,
});
