import type { CalculatorDefinition } from "@/calculators/framework/types";
import { loanPaymentEngine } from "./engine";

export const loanPayment: CalculatorDefinition = {
  id: "loan-payment",
  slug: "loan-payment-calculator",
  status: "published",
  title: "Loan Payment Calculator",
  shortTitle: "Loan Payment",
  category: "finance",
  collections: ["personal-finance", "real-estate", "accounting-finance", "business"],
  summary: "Calculate the monthly payment, total interest and amortization schedule for a fixed-rate loan or mortgage.",
  metaTitle: "Loan Payment Calculator – Monthly Payment and Interest",
  metaDescription: "Calculate the monthly payment on a fixed-rate loan or mortgage, total interest and a year-by-year amortization schedule from the amount, APR and term.",
  keywords: ["loan", "mortgage", "monthly payment", "amortization", "interest", "apr", "car loan", "personal loan"],
  popularRank: 2,
  addedOn: "2026-10-14",
  featured: true,
  expertReview: { area: "financial", status: "pending" },
  sources: [{"title": "Principles of Finance (time value of money and loan amortization chapters)", "publisher": "OpenStax, Rice University", "url": "https://openstax.org/details/books/principles-finance", "usedFor": "Present value of an annuity and the level-payment loan formula."}],
  intro: ["Most car loans, personal loans and fixed-rate mortgages are repaid in equal monthly payments. Each payment covers that month's interest and pays down part of the balance.", "Enter the loan amount, annual rate and term to see the payment, total interest and how the balance falls each year."],
  howToUse: ["Enter the amount borrowed.", "Enter the annual interest rate (APR).", "Enter the term in years.", "Read the monthly payment, total interest and the yearly schedule."],
  formulas: [
    { title: "Monthly payment", expression: "M = P × r ÷ (1 − (1 + r)^(−n))", explanation: "P is the amount borrowed, r the monthly rate (APR ÷ 12) and n the number of monthly payments." },
    { title: "Zero interest", expression: "M = P ÷ n", explanation: "With no interest, the loan is split evenly." },
    { title: "Remaining balance", expression: "B_k = P(1 + r)^k − M((1 + r)^k − 1) ÷ r", explanation: "Balance after k payments, used for the schedule." },
  ],
  examples: [
    {
      title: "$200,000 at 6% for 30 years",
      inputs: {"principal": 200000, "rate": 6, "years": 30, "currency": "USD"},
      steps: ["r = 0.06 ÷ 12 = 0.005; n = 360", "M = 200,000 × 0.005 ÷ (1 − 1.005^−360) ≈ $1,199.10"],
      expectedPrimary: 200000*0.005/(1-1.005**-360),
    },
    {
      title: "$10,000 at 0% for 5 years",
      inputs: {"principal": 10000, "rate": 0, "years": 5, "currency": "USD"},
      steps: ["n = 60 payments", "M = 10,000 ÷ 60 ≈ $166.67"],
      expectedPrimary: 10000/60,
    },
  ],
  assumptions: ["Fixed rate, equal monthly payments and no extra payments.", "Property taxes, insurance, fees, points and private mortgage insurance are not included.", "Lenders may round payments to the cent each month, so final payments can differ slightly. This is not financial advice."],
  faqs: [
    { question: "How is a monthly loan payment calculated?", answer: "With the annuity formula M = P × r ÷ (1 − (1 + r)^−n), where r is the monthly rate and n the number of payments." },
    { question: "Why is most of an early payment interest?", answer: "Interest is charged on the outstanding balance, which is highest at the start. As the balance falls, more of each payment goes to principal." },
    { question: "Does a shorter term save money?", answer: "Usually yes: payments are higher, but you pay interest for fewer years, so total interest is lower." },
  ],
  related: ["compound-interest-calculator", "roi-calculator", "percentage-calculator"],
  updated: "2026-10-14",
  engine: loanPaymentEngine,
};
