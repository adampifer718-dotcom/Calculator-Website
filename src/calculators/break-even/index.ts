import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { breakEvenEngine, makeBreakEvenEngine } from "./engine";

export const breakEven = defineCalculator({
  id: "break-even",
  slug: "break-even-calculator",
  status: "published",
  title: "Break-Even Calculator",
  shortTitle: "Break-Even",
  category: "finance",
  collections: ["business", "accounting-finance", "manufacturing-operations"],
  summary: "Find how many units you need to sell to cover fixed costs, and the break-even revenue.",
  metaTitle: "Break-Even Calculator – Units and Revenue",
  metaDescription: "Calculate your break-even point in units and revenue from fixed costs, price per unit and variable cost per unit, with contribution margin.",
  keywords: ["break even", "break-even point", "contribution margin", "fixed costs", "variable costs", "business", "units"],
  popularRank: 17,
  addedOn: "2026-10-14",
  sources: [{"title": "Principles of Accounting, Volume 2: Managerial Accounting (cost-volume-profit analysis)", "publisher": "OpenStax, Rice University", "url": "https://openstax.org/details/books/principles-managerial-accounting", "usedFor": "Cost-volume-profit analysis and break-even formulas."}],
  intro: ["The break-even point is where total revenue equals total costs, so there is neither profit nor loss.", "Each unit sold contributes its price minus its variable cost toward fixed costs. Once those are covered, further sales are profit."],
  howToUse: ["Enter your fixed costs for the period.", "Enter the selling price per unit.", "Enter the variable cost per unit.", "Read the units and revenue needed to break even."],
  formulas: [
    { title: "Break-even units", expression: "units = fixed costs ÷ (price − variable cost)", explanation: "The denominator is the contribution margin per unit." },
    { title: "Break-even revenue", expression: "revenue = units × price", explanation: "Equivalently, fixed costs ÷ contribution margin ratio." },
  ],
  examples: [
    {
      title: "$10,000 fixed, $50 price, $30 variable",
      inputs: {"fixed": 10000, "price": 50, "variable": 30, "currency": "USD"},
      steps: ["Contribution = $50 − $30 = $20", "Units = 10,000 ÷ 20 = 500"],
      expectedPrimary: 500,
    },
    {
      title: "$2,500 fixed, $12 price, $4.50 variable",
      inputs: {"fixed": 2500, "price": 12, "variable": 4.5, "currency": "USD"},
      steps: ["Contribution = $7.50", "Units = 2,500 ÷ 7.5 ≈ 333.33, so 334 units"],
      expectedPrimary: 2500/7.5,
    },
  ],
  assumptions: ["Price and variable cost per unit stay constant at every volume.", "Fixed costs are for the same period as the sales you are planning.", "Taxes and financing costs are not included unless you add them to fixed costs."],
  faqs: [
    { question: "What is contribution margin?", answer: "Price minus variable cost per unit: the amount each sale contributes to fixed costs and profit." },
    { question: "What if variable cost is higher than price?", answer: "Each sale loses money, so you can never break even at that price." },
    { question: "How do I find units for a target profit?", answer: "Add the target profit to fixed costs and divide by the contribution margin." },
  ],
  related: ["profit-margin-calculator", "roi-calculator", "percentage-increase-calculator"],
  updated: "2026-10-14",
  engine: breakEvenEngine,
  text,
  makeEngine: makeBreakEvenEngine,
  translations,
});
