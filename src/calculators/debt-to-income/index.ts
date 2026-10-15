import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { debtToIncomeEngine, makeDebtToIncomeEngine } from "./engine";

export const debtToIncome = defineCalculator({
  id: "debt-to-income",
  slug: "debt-to-income-calculator",
  status: "published",
  title: "Debt-to-Income Ratio Calculator",
  shortTitle: "Debt-to-Income Ratio",
  category: "finance",
  collections: ["personal-finance", "real-estate"],
  summary: "Work out your back-end and front-end debt-to-income ratios from your gross monthly income and monthly debt payments.",
  metaTitle: "Debt-to-Income Ratio Calculator – Front-End and Back-End",
  metaDescription: "Calculate your debt-to-income ratio: total monthly debt payments divided by gross monthly income, plus the housing (front-end) ratio and total debt.",
  keywords: ["debt-to-income ratio", "DTI", "back-end ratio", "front-end ratio", "housing ratio", "mortgage qualification", "monthly debt"],
  addedOn: "2026-10-15",
  expertReview: { area: "financial", status: "pending" },
  sources: [
    {
      title: "What is a debt-to-income ratio? Why is the 43% debt-to-income ratio important?",
      publisher: "Consumer Financial Protection Bureau",
      url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-why-is-the-43-debt-to-income-ratio-important-en-1791/",
      usedFor: "The definition of DTI as monthly debt payments divided by gross monthly income, and the 43% reference point in US mortgage rules.",
    },
  ],
  intro: [
    "Your debt-to-income ratio, or DTI, compares what you pay towards debts each month with what you earn before tax. Lenders use it as one measure of how much room your budget has for a new loan.",
    "Enter your gross monthly income and your monthly debt payments. The calculator gives the back-end ratio, which includes every debt, and the front-end ratio, which counts housing only.",
  ],
  howToUse: [
    "Pick the currency for the amounts.",
    "Enter your gross monthly income, before tax and deductions.",
    "Enter your monthly housing payment: rent, or a mortgage payment including taxes and insurance.",
    "Enter your other monthly debt payments. For credit cards, use the minimum payment due.",
    "Read the back-end ratio, the front-end ratio and the total of your debt payments.",
  ],
  formulas: [
    { title: "Back-end DTI", expression: "DTI = total monthly debt payments ÷ gross monthly income × 100", explanation: "All debt payments, including housing." },
    { title: "Front-end (housing) ratio", expression: "housing ratio = housing payment ÷ gross monthly income × 100", explanation: "Only the rent or mortgage payment." },
    { title: "Total monthly debt", expression: "debt = housing + car + student + cards + other", explanation: "Monthly required payments, not balances." },
  ],
  examples: [
    {
      title: "$6,000 income with $2,000 of payments",
      inputs: { currency: "USD", income: 6000, housing: 1500, car: 100, student: 0, creditCards: 0, other: 400 },
      steps: ["Total debt = 1,500 + 100 + 400 = $2,000", "DTI = 2,000 ÷ 6,000 × 100 ≈ 33.33%", "Housing ratio = 1,500 ÷ 6,000 = 25%"],
      expectedPrimary: 33.33333333333333,
    },
    {
      title: "$5,400 income, rent and a car loan",
      inputs: { currency: "USD", income: 5400, housing: 1450, car: 310, student: 0, creditCards: 120, other: 0 },
      steps: ["Total debt = 1,450 + 310 + 120 = $1,880", "DTI = 1,880 ÷ 5,400 × 100 ≈ 34.81%", "Housing ratio = 1,450 ÷ 5,400 ≈ 26.85%"],
      expectedPrimary: 34.81481481481482,
    },
  ],
  assumptions: [
    "Income is gross (before tax). Lenders may count income differently, for example by averaging self-employment income or excluding irregular bonuses.",
    "Only required monthly payments are included. Utilities, groceries, phone bills and other living costs are not debts and are left out.",
    "Lenders and loan programs set their own limits and also consider credit history, savings and other factors. A 43% ratio has been a common reference point in US mortgage rules, but it is not a universal cut-off.",
    "This is an estimate, not financial advice, and it has not been professionally reviewed.",
  ],
  faqs: [
    {
      question: "What is the difference between front-end and back-end DTI?",
      answer: "The front-end ratio counts only your housing payment. The back-end ratio adds every other monthly debt payment, such as car, student and credit card payments. When people say DTI they usually mean the back-end ratio.",
    },
    {
      question: "Why does the 43% figure come up so often?",
      answer: "US rules for qualified mortgages used 43% as a reference point for the debt-to-income ratio, so the number became widely quoted. Lenders and loan programs apply their own limits, which can be higher or lower.",
    },
    {
      question: "How can I lower my debt-to-income ratio?",
      answer: "Either reduce your monthly debt payments, for example by paying off a loan or a card balance, or increase your gross income. Taking on new debt before applying for a loan raises the ratio.",
    },
  ],
  related: ["mortgage-calculator", "loan-payment-calculator", "credit-card-payoff-calculator"],
  updated: "2026-10-15",
  engine: debtToIncomeEngine,
  text,
  makeEngine: makeDebtToIncomeEngine,
  translations,
});
