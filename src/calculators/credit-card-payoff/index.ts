import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { creditCardPayoffEngine, makeCreditCardPayoffEngine } from "./engine";

export const creditCardPayoff = defineCalculator({
  id: "credit-card-payoff",
  slug: "credit-card-payoff-calculator",
  status: "published",
  title: "Credit Card Payoff Calculator",
  shortTitle: "Credit Card Payoff",
  category: "finance",
  collections: ["personal-finance"],
  summary: "See how many months a fixed payment takes to clear a credit card balance, or the payment needed to clear it by a set date.",
  metaTitle: "Credit Card Payoff Calculator – Months and Interest",
  metaDescription: "Estimate how long a fixed monthly payment takes to clear a credit card, the total interest, or the payment needed to be debt-free in a set number of months.",
  keywords: ["credit card payoff", "pay off credit card", "credit card interest", "debt payoff", "months to pay off", "credit card payment", "APR"],
  addedOn: "2026-10-15",
  expertReview: { area: "financial", status: "pending" },
  sources: [
    {
      title: "A box on my credit card bill says that I will pay off the balance in three years if I pay a certain amount. What does that mean?",
      publisher: "Consumer Financial Protection Bureau",
      url: "https://www.consumerfinance.gov/ask-cfpb/a-box-on-my-credit-card-bill-says-that-i-will-pay-off-the-balance-in-three-years-if-i-pay-a-certain-amount-what-does-that-mean-en-36/",
      usedFor: "The payoff-time and 36-month payment disclosures on US card statements, which also assume no new purchases.",
    },
    {
      title: "What is APR?",
      publisher: "Consumer Financial Protection Bureau",
      url: "https://www.consumerfinance.gov/ask-cfpb/what-is-apr-en-36/",
      usedFor: "What the annual percentage rate on a credit card means.",
    },
  ],
  intro: [
    "Credit card interest is charged on whatever balance you carry, so a small monthly payment can keep you in debt for years. This calculator shows the effect of paying a fixed amount every month.",
    "Choose whether you want to know how long your payment will take, or how much you must pay each month to clear the card within a chosen number of months. A yearly table shows how the balance falls and how much interest goes to the card issuer.",
  ],
  howToUse: [
    "Pick the currency for the amounts.",
    "Choose what to find: the time to pay off, or the payment needed.",
    "Enter the current balance and the card's APR.",
    "Enter your fixed monthly payment, or the number of months you want to be debt-free in.",
    "Read the result, the total interest and the year-by-year table.",
  ],
  formulas: [
    { title: "Monthly interest", expression: "interest = balance × APR ÷ 12", explanation: "Each month the interest is added to the balance, then the payment is taken off. The last payment is just what is left." },
    { title: "Payment for a target date", expression: "PMT = B × i ÷ (1 − (1 + i)^(−n))", explanation: "B is the balance, i = APR ÷ 12 as a decimal and n the number of months. At 0% APR, PMT = B ÷ n." },
    { title: "When a payment is too small", expression: "payment ≤ B × i", explanation: "If the payment does not beat the first month's interest, the balance never goes down." },
  ],
  examples: [
    {
      title: "$3,200 at 19.99% APR, paying $120 a month",
      inputs: { currency: "USD", mode: "payment", balance: 3200, apr: 19.99, payment: 120 },
      steps: [
        "Monthly rate = 19.99% ÷ 12 ≈ 1.666%",
        "First month: interest ≈ $53.31, so $66.69 of the $120 reduces the balance",
        "Repeating month by month, the 36th payment is a partial one of about $66.69",
        "Total interest ≈ $1,066.69",
      ],
      expectedPrimary: 36,
    },
    {
      title: "$6,500 at 24.5% APR, cleared in 36 months",
      inputs: { currency: "USD", mode: "months", balance: 6500, apr: 24.5, months: 36 },
      steps: ["i = 0.245 ÷ 12 ≈ 0.020417; n = 36", "PMT = 6,500 × i ÷ (1 − (1 + i)^−36)", "≈ $256.72 a month, about $2,742 of interest in total"],
      expectedPrimary: 256.72309170515376,
    },
    {
      title: "$1,500 on a 0% promotional rate, cleared in 10 months",
      inputs: { currency: "USD", mode: "months", balance: 1500, apr: 0, months: 10 },
      steps: ["No interest, so the balance is split evenly", "PMT = 1,500 ÷ 10 = $150"],
      expectedPrimary: 150,
    },
  ],
  assumptions: [
    "Interest is compounded monthly at APR ÷ 12. Many issuers use a daily periodic rate on the average daily balance, so actual statements will differ slightly.",
    "There are no new purchases, cash advances, fees, penalty rates or rate changes, and every payment is made on time.",
    "Payments are not rounded to the cent and promotional rates are assumed to last for the whole period.",
    "This is an estimate, not financial advice, and it has not been professionally reviewed. Check your card agreement and statement for the figures that apply to you.",
  ],
  faqs: [
    {
      question: "Why does a small payment take so long?",
      answer: "Most of a small payment is used up by interest. Only what is left over reduces the balance, so the balance falls slowly and keeps attracting interest. Even a modest increase in the payment can cut the time and interest a lot.",
    },
    {
      question: "Why is my statement's payoff time different?",
      answer: "Statements usually assume you pay only the minimum, which shrinks as the balance falls, and issuers usually charge interest daily. This calculator assumes the same fixed payment every month and monthly interest.",
    },
    {
      question: "What if my payment is less than the interest?",
      answer: "Then the balance never goes down, and the calculator shows an error. You need to pay more than the first month's interest, shown in the error message, before any of the payment reduces what you owe.",
    },
  ],
  related: ["loan-payment-calculator", "apr-to-apy-calculator", "debt-to-income-calculator"],
  updated: "2026-10-15",
  engine: creditCardPayoffEngine,
  text,
  makeEngine: makeCreditCardPayoffEngine,
  translations,
});
