import type { CalculatorDefinition } from "@/calculators/framework/types";
import { roiEngine } from "./engine";

export const roi: CalculatorDefinition = {
  slug: "roi-calculator",
  title: "ROI Calculator",
  shortTitle: "ROI",
  category: "finance-and-investing",
  summary: "Measure return on investment as a percentage, with net gain or loss and an optional annualized rate.",
  metaTitle: "ROI Calculator – Return on Investment & Annualized ROI",
  metaDescription:
    "Calculate return on investment from the amount invested and the amount returned. See net gain or loss, total ROI and annualized ROI over any number of years.",
  keywords: ["return on investment", "roi", "investment return", "profit", "gain", "annualized return", "cagr"],
  popularRank: 5,
  intro: [
    "Return on investment (ROI) compares what you got back with what you put in. It is a quick way to compare investments, projects or purchases of different sizes.",
    "Add how long you held the investment to see the annualized ROI, which makes returns over different time periods comparable.",
  ],
  howToUse: [
    "Enter the total amount invested, including fees you paid to buy it.",
    "Enter the amount returned: the final value or total proceeds, including the original amount.",
    "Optionally, enter the number of years you held the investment.",
    "Read the total ROI, net gain or loss and annualized ROI.",
  ],
  formulas: [
    {
      title: "Return on investment",
      expression: "ROI = (amount returned − amount invested) ÷ amount invested × 100",
      explanation: "A positive ROI is a gain and a negative ROI is a loss.",
    },
    {
      title: "Annualized ROI",
      expression: "Annualized ROI = ((amount returned ÷ amount invested)^(1 ÷ years) − 1) × 100",
      explanation: "This is the constant yearly rate that would grow the amount invested into the amount returned over the period, also known as CAGR.",
    },
  ],
  examples: [
    {
      title: "$10,000 grows to $12,500 over 3 years",
      inputs: { invested: 10000, finalValue: 12500, years: 3, currency: "USD" },
      steps: ["Net gain = $12,500 − $10,000 = $2,500", "ROI = $2,500 ÷ $10,000 × 100 = 25%", "Annualized = (1.25^(1/3) − 1) × 100 ≈ 7.72%"],
      expectedPrimary: 25,
    },
    {
      title: "$5,000 falls to $4,200",
      inputs: { invested: 5000, finalValue: 4200, years: null, currency: "USD" },
      steps: ["Net loss = $4,200 − $5,000 = −$800", "ROI = −$800 ÷ $5,000 × 100 = −16%"],
      expectedPrimary: -16,
    },
  ],
  assumptions: [
    "Taxes, fees, dividends and other cash flows are only included if you add them to the amounts entered.",
    "Annualized ROI assumes growth compounds at a constant rate over the period. It does not account for the timing of deposits or withdrawals.",
    "Choosing a currency only changes formatting. No exchange-rate conversion is performed.",
    "Past returns do not predict future results. This calculator does not provide investment advice.",
  ],
  faqs: [
    {
      question: "What is a good ROI?",
      answer:
        "It depends on the risk, the time period and the alternatives available. Compare annualized ROI rather than total ROI when the holding periods differ.",
    },
    {
      question: "What is the difference between ROI and annualized ROI?",
      answer:
        "ROI is the total return over the whole period. Annualized ROI converts it to an equivalent yearly rate. A 25% return over 3 years is about 7.72% a year.",
    },
    {
      question: "Should I include fees and dividends?",
      answer: "Yes, for an accurate figure. Add purchase fees to the amount invested, and add dividends or interest received to the amount returned.",
    },
    {
      question: "Can ROI be negative?",
      answer: "Yes. If you get back less than you invested, ROI is negative. The lowest possible ROI is −100%, when nothing is returned.",
    },
  ],
  related: ["percentage-increase-calculator", "percentage-calculator", "hourly-to-salary-calculator"],
  updated: "2026-10-14",
  engine: roiEngine,
};
