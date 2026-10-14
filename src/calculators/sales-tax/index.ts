import type { CalculatorDefinition } from "@/calculators/framework/types";
import { salesTaxEngine } from "./engine";

export const salesTax: CalculatorDefinition = {
  slug: "sales-tax-calculator",
  title: "Sales Tax Calculator",
  shortTitle: "Sales Tax",
  category: "finance-and-investing",
  summary: "Add sales tax to a price, or work out the price before tax from a total that includes it.",
  metaTitle: "Sales Tax Calculator – Add or Remove Sales Tax",
  metaDescription: "Calculate sales tax and the total price, or remove tax from a tax-inclusive total to find the original price. Works with any tax rate and currency.",
  keywords: ["sales tax", "vat", "gst", "tax rate", "price with tax", "reverse sales tax", "tax included"],
  popularRank: 8,
  intro: ["Enter a price and a sales tax rate to see the tax and the total you will pay. Switch to removing tax to find the pre-tax price from a receipt total.", "The same math works for VAT and GST, which are also percentages added to a price."],
  howToUse: ["Choose whether to add tax to a price or remove it from a total.", "Enter the amount and the tax rate as a percentage.", "Read the tax, the total and the price before tax."],
  formulas: [
    { title: "Adding tax", expression: "Sales tax = price × rate ÷ 100\nTotal = price + sales tax", explanation: "Multiply the price by the rate as a decimal." },
    { title: "Removing tax", expression: "Price before tax = total ÷ (1 + rate ÷ 100)", explanation: "Dividing by 1 plus the rate undoes the tax. Subtracting the rate from the total does not." },
  ],
  examples: [
    {
      title: "$100 at 8.25% sales tax",
      inputs: {"mode": "add", "amount": 100, "rate": 8.25, "currency": "USD"},
      steps: ["Tax = $100 × 0.0825 = $8.25", "Total = $100 + $8.25 = $108.25"],
      expectedPrimary: 108.25,
    },
    {
      title: "A $54 total that includes 8% tax",
      inputs: {"mode": "remove", "amount": 54, "rate": 8, "currency": "USD"},
      steps: ["Price = $54 ÷ 1.08 = $50", "Tax = $54 − $50 = $4"],
      expectedPrimary: 50,
    },
  ],
  assumptions: ["The rate is a single percentage applied to the whole amount. Some places tax items differently or add local taxes on top.", "Results are rounded to the cent for display only.", "Choosing a currency changes formatting only."],
  faqs: [
    { question: "How do I calculate sales tax?", answer: "Multiply the price by the tax rate as a decimal. For a 7% rate, $50 × 0.07 = $3.50 in tax." },
    { question: "How do I remove sales tax from a total?", answer: "Divide the total by 1 plus the rate. A $107 total with 7% tax is $107 ÷ 1.07 = $100 before tax." },
    { question: "Is VAT calculated the same way?", answer: "Yes. VAT and GST are percentages of the price, so the same formulas apply." },
  ],
  related: ["discount-calculator", "tip-calculator", "percentage-calculator"],
  updated: "2026-10-14",
  engine: salesTaxEngine,
};
