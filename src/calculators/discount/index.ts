import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { discountEngine, makeDiscountEngine } from "./engine";

export const discount = defineCalculator({
  id: "discount",
  slug: "discount-calculator",
  status: "published",
  title: "Discount Calculator",
  shortTitle: "Discount",
  category: "everyday-life",
  collections: ["marketing-ecommerce", "personal-finance", "business"],
  summary: "Find the sale price and how much you save from an original price and a percentage discount.",
  metaTitle: "Discount Calculator – Sale Price and Savings",
  metaDescription: "Calculate the sale price after a percentage discount and how much you save. Enter the original price and the discount percentage for instant results.",
  keywords: ["discount", "sale price", "percent off", "savings", "coupon", "markdown", "clearance"],
  popularRank: 21,
  addedOn: "2026-10-14",
  sources: [],
  intro: ["Enter the original price and the percentage off to see the sale price and your savings.", "Useful for sales, coupons and comparing offers."],
  howToUse: ["Enter the original price.", "Enter the discount percentage.", "Read the sale price and the amount saved."],
  formulas: [
    { title: "Savings", expression: "Savings = price × discount % ÷ 100", explanation: "The amount taken off." },
    { title: "Sale price", expression: "Sale price = price − savings = price × (1 − discount ÷ 100)", explanation: "What you pay before any sales tax." },
  ],
  examples: [
    {
      title: "$120 with 25% off",
      inputs: {"price": 120, "percent": 25, "currency": "USD"},
      steps: ["Savings = $120 × 0.25 = $30", "Sale price = $120 − $30 = $90"],
      expectedPrimary: 90,
    },
    {
      title: "$59.99 with 15% off",
      inputs: {"price": 59.99, "percent": 15, "currency": "USD"},
      steps: ["Savings = $59.99 × 0.15 = $9.00", "Sale price ≈ $50.99"],
      expectedPrimary: 59.99*0.85,
    },
  ],
  assumptions: ["Sales tax is not included; use the sales tax calculator to add it.", "Two discounts in a row multiply rather than add: 20% then 10% off is 28% off, not 30%."],
  faqs: [
    { question: "How do I calculate a percentage off?", answer: "Multiply the price by the discount as a decimal and subtract it. 30% off $50 is $50 − $15 = $35." },
    { question: "Are two discounts the same as adding them?", answer: "No. 20% off then 10% off leaves 0.8 × 0.9 = 72% of the price, a 28% total discount." },
    { question: "How do I find the original price from a sale price?", answer: "Divide the sale price by (1 − discount ÷ 100). $60 after 25% off was $60 ÷ 0.75 = $80." },
  ],
  related: ["sales-tax-calculator", "percentage-calculator", "tip-calculator"],
  updated: "2026-10-14",
  engine: discountEngine,
  text,
  makeEngine: makeDiscountEngine,
  translations,
});
