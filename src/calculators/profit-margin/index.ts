import type { CalculatorDefinition } from "@/calculators/framework/types";
import { profitMarginEngine } from "./engine";

export const profitMargin: CalculatorDefinition = {
  id: "profit-margin",
  slug: "profit-margin-calculator",
  status: "published",
  title: "Profit Margin Calculator",
  shortTitle: "Profit Margin",
  category: "finance",
  collections: ["business", "accounting-finance", "marketing-ecommerce", "food-hospitality"],
  summary: "Calculate profit, profit margin and markup from cost and selling price.",
  metaTitle: "Profit Margin Calculator – Margin and Markup",
  metaDescription: "Calculate gross profit, profit margin and markup percentage from cost and selling price, and see the difference between margin and markup.",
  keywords: ["profit margin", "margin", "markup", "gross margin", "pricing", "profit", "business", "ecommerce"],
  popularRank: 11,
  addedOn: "2026-10-14",
  sources: [{"title": "Principles of Accounting, Volume 2: Managerial Accounting (cost-volume-profit analysis)", "publisher": "OpenStax, Rice University", "url": "https://openstax.org/details/books/principles-managerial-accounting", "usedFor": "Gross profit and margin definitions."}],
  intro: ["Margin and markup both describe profit, but against different bases. Margin compares profit with the selling price; markup compares it with cost.", "Enter what an item costs you and what you sell it for."],
  howToUse: ["Enter the cost.", "Enter the selling price.", "Read the profit, margin and markup."],
  formulas: [
    { title: "Profit", expression: "profit = price − cost", explanation: "Gross profit per item or for a whole order." },
    { title: "Margin", expression: "margin = profit ÷ price × 100", explanation: "Share of the price that is profit." },
    { title: "Markup", expression: "markup = profit ÷ cost × 100", explanation: "How much was added on top of cost." },
  ],
  examples: [
    {
      title: "Cost $60, price $100",
      inputs: {"cost": 60, "price": 100, "currency": "USD"},
      steps: ["Profit = $40", "Margin = 40 ÷ 100 = 40%; markup = 40 ÷ 60 ≈ 66.67%"],
      expectedPrimary: 40,
    },
    {
      title: "Cost $25, price $40",
      inputs: {"cost": 25, "price": 40, "currency": "USD"},
      steps: ["Profit = $15", "Margin = 15 ÷ 40 = 37.5%"],
      expectedPrimary: 37.5,
    },
  ],
  assumptions: ["This is gross margin: only the cost you enter is included, not overheads or taxes.", "Choosing a currency changes formatting only."],
  faqs: [
    { question: "What is the difference between margin and markup?", answer: "Margin divides profit by price; markup divides it by cost. A 50% markup is a 33.3% margin." },
    { question: "Can margin be over 100%?", answer: "No. Margin is a share of the selling price, so it is at most 100% (when cost is zero)." },
    { question: "How do I set a price for a target margin?", answer: "Price = cost ÷ (1 − target margin). For a 40% margin on a $60 cost, price = 60 ÷ 0.6 = $100." },
  ],
  related: ["break-even-calculator", "discount-calculator", "sales-tax-calculator"],
  updated: "2026-10-14",
  engine: profitMarginEngine,
};
