import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeSimpleInterestEngine, simpleInterestEngine } from "./engine";

export const simpleInterest = defineCalculator({
  id: "simple-interest",
  slug: "simple-interest-calculator",
  status: "published",
  title: "Simple Interest Calculator",
  shortTitle: "Simple Interest",
  category: "finance",
  collections: ["personal-finance", "accounting-finance"],
  summary: "Work out simple interest and the total amount owed or earned from the principal, annual rate and time.",
  metaTitle: "Simple Interest Calculator – I = Prt",
  metaDescription: "Calculate simple interest with I = Prt for a time in years, months or days, and see the total amount, interest per year and interest per month.",
  keywords: ["simple interest", "I = Prt", "interest formula", "principal", "interest rate", "flat interest", "total amount"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Prealgebra 2e, section 6.4: Solve Simple Interest Applications",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/prealgebra-2e/pages/6-4-solve-simple-interest-applications",
      usedFor: "The simple interest formula I = Prt and the meaning of each variable.",
    },
  ],
  intro: [
    "Simple interest is worked out on the original amount only. The interest for each year is the same, so the total grows in a straight line rather than snowballing.",
    "It is used for many short-term loans, some car loans, bonds that pay a fixed coupon and classroom finance problems. Enter the principal, the yearly rate and how long the money is borrowed or invested.",
  ],
  howToUse: [
    "Pick the currency you want amounts shown in.",
    "Enter the principal: the amount borrowed or deposited.",
    "Enter the annual interest rate as a percentage.",
    "Enter the time and choose years, months or days.",
    "Read the interest, the total amount and the interest for each year and month.",
  ],
  formulas: [
    { title: "Simple interest", expression: "I = P × r × t", explanation: "P is the principal, r the annual rate as a decimal (5% = 0.05) and t the time in years." },
    { title: "Total amount", expression: "A = P + I = P × (1 + r × t)", explanation: "What is repaid or held at the end." },
    { title: "Converting time", expression: "t = months ÷ 12, or t = days ÷ 365", explanation: "Months and days are turned into years before using the formula." },
  ],
  examples: [
    {
      title: "$2,500 at 4.2% for 3 years",
      inputs: { currency: "USD", principal: 2500, rate: 4.2, time: 3, timeUnit: "years" },
      steps: ["I = 2,500 × 0.042 × 3", "= $315", "A = 2,500 + 315 = $2,815"],
      expectedPrimary: 315,
    },
    {
      title: "$8,000 at 6.5% for 18 months",
      inputs: { currency: "USD", principal: 8000, rate: 6.5, time: 18, timeUnit: "months" },
      steps: ["t = 18 ÷ 12 = 1.5 years", "I = 8,000 × 0.065 × 1.5", "= $780"],
      expectedPrimary: 780,
    },
    {
      title: "$1,200 at 9% for 90 days",
      inputs: { currency: "USD", principal: 1200, rate: 9, time: 90, timeUnit: "days" },
      steps: ["t = 90 ÷ 365 ≈ 0.2466 years", "I = 1,200 × 0.09 × 90 ÷ 365", "≈ $26.63"],
      expectedPrimary: (1200 * 0.09 * 90) / 365,
    },
  ],
  assumptions: [
    "Interest is simple: it is never added to the principal, so no interest is earned on interest.",
    "Days are converted with a 365-day year. Some lenders and money markets use a 360-day year (sometimes called ordinary or banker's interest), which gives slightly more interest for the same number of days.",
    "The rate is fixed for the whole period. Fees, taxes and early repayment are not included.",
    "Choosing a currency changes formatting only. This is not financial advice.",
  ],
  faqs: [
    { question: "How is simple interest different from compound interest?", answer: "Simple interest is always worked out on the starting principal. Compound interest adds each period's interest to the balance, so later interest is also earned on earlier interest and the total grows faster." },
    { question: "How do I find the rate if I know the interest?", answer: "Rearrange the formula: r = I ÷ (P × t). For example, $90 of interest on $1,000 over 2 years means r = 90 ÷ 2,000 = 0.045, or 4.5% a year." },
    { question: "Why does my lender's figure differ slightly for a number of days?", answer: "Lenders may divide by 360 instead of 365, or count the actual days in a leap year. Dividing by 360 raises the interest by about 1.4%." },
  ],
  related: ["compound-interest-calculator", "loan-payment-calculator", "apr-to-apy-calculator"],
  updated: "2026-10-15",
  engine: simpleInterestEngine,
  text,
  makeEngine: makeSimpleInterestEngine,
  translations,
});
