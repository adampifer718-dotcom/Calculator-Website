import type { CalculatorDefinition } from "@/calculators/framework/types";
import { compoundInterestEngine } from "./engine";

export const compoundInterest: CalculatorDefinition = {
  slug: "compound-interest-calculator",
  title: "Compound Interest Calculator",
  shortTitle: "Compound Interest",
  category: "finance-and-investing",
  summary: "See how a deposit grows with compound interest, with a year-by-year balance table.",
  metaTitle: "Compound Interest Calculator – Future Value",
  metaDescription: "Calculate compound interest and the future value of a deposit with annual, quarterly, monthly or daily compounding, plus a year-by-year balance table.",
  keywords: ["compound interest", "future value", "savings", "interest rate", "apy", "effective annual rate", "investment growth"],
  popularRank: 22,
  intro: ["Compound interest earns interest on previous interest as well as on the original deposit, so growth speeds up over time.", "Enter a deposit, rate, time and compounding frequency to see the future value, the interest earned and a balance for each year."],
  howToUse: ["Enter the initial deposit.", "Enter the annual interest rate and the number of years.", "Choose how often interest compounds.", "Read the future value, interest earned and effective annual rate."],
  formulas: [
    { title: "Future value", expression: "A = P × (1 + r ÷ n)^(n × t)", explanation: "P is the deposit, r the annual rate as a decimal, n the compounding periods per year and t the years." },
    { title: "Effective annual rate", expression: "EAR = (1 + r ÷ n)ⁿ − 1", explanation: "The equivalent once-a-year rate, often called APY." },
  ],
  examples: [
    {
      title: "$10,000 at 5% compounded monthly for 10 years",
      inputs: {"principal": 10000, "rate": 5, "years": 10, "frequency": "12", "currency": "USD"},
      steps: ["A = 10,000 × (1 + 0.05 ÷ 12)^120", "≈ $16,470.09"],
      expectedPrimary: 10000*(1+0.05/12)**120,
    },
    {
      title: "$1,000 at 10% compounded annually for 2 years",
      inputs: {"principal": 1000, "rate": 10, "years": 2, "frequency": "1", "currency": "USD"},
      steps: ["A = 1,000 × 1.1²", "= $1,210"],
      expectedPrimary: 1000*1.1**2,
    },
  ],
  assumptions: ["The rate stays fixed and there are no further deposits, withdrawals, taxes or fees.", "Past or advertised rates do not guarantee future returns. This is not financial advice.", "Choosing a currency changes formatting only."],
  faqs: [
    { question: "What is the difference between simple and compound interest?", answer: "Simple interest is paid only on the original deposit. Compound interest is also paid on interest already earned." },
    { question: "Does compounding more often help?", answer: "Yes, slightly. Monthly compounding gives a higher effective rate than annual compounding at the same nominal rate." },
    { question: "What is the rule of 72?", answer: "Divide 72 by the annual rate to estimate the years to double. At 6%, money doubles in about 12 years." },
  ],
  related: ["roi-calculator", "percentage-increase-calculator", "sales-tax-calculator"],
  updated: "2026-10-14",
  engine: compoundInterestEngine,
};
