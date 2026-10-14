import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeMortgageEngine, mortgageEngine } from "./engine";

export const mortgage = defineCalculator({
  id: "mortgage",
  slug: "mortgage-calculator",
  status: "published",
  title: "Mortgage Calculator",
  shortTitle: "Mortgage",
  category: "finance",
  collections: ["real-estate", "personal-finance", "accounting-finance"],
  summary: "Estimate the full monthly cost of a home loan: principal and interest plus property tax, insurance, HOA dues and mortgage insurance.",
  metaTitle: "Mortgage Calculator – Monthly Payment with Taxes and PMI",
  metaDescription: "Estimate your monthly mortgage payment with principal and interest shown separately from property tax, home insurance, HOA dues and PMI, plus total interest.",
  keywords: ["mortgage", "mortgage payment", "home loan", "piti", "pmi", "property tax", "house payment", "down payment"],
  popularRank: 3,
  addedOn: "2026-10-14",
  featured: true,
  expertReview: { area: "financial", status: "pending" },
  sources: [
    {
      title: "Principles of Finance (time value of money and loan amortization chapters)",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/details/books/principles-finance",
      usedFor: "The level-payment loan formula and the remaining-balance formula.",
    },
    {
      title: "When can I remove private mortgage insurance (PMI) from my loan?",
      publisher: "Consumer Financial Protection Bureau",
      url: "https://www.consumerfinance.gov/ask-cfpb/when-can-i-remove-private-mortgage-insurance-pmi-from-my-loan-en-202/",
      usedFor: "When PMI ends automatically (78% of the original home value) on US conventional loans.",
    },
  ],
  intro: [
    "A mortgage payment is more than the loan repayment. Lenders often collect property tax and home insurance with each payment, and some buyers also pay HOA dues or mortgage insurance.",
    "This calculator shows principal and interest separately from those other costs, so you can see what is fixed by the loan and what depends on your local taxes and insurance.",
  ],
  howToUse: [
    "Enter the home price and your down payment.",
    "Enter the interest rate and loan term.",
    "Enter yearly property tax and home insurance, and any monthly HOA or service charges.",
    "Enter the mortgage insurance rate if your down payment is under 20%, or 0 if it does not apply.",
    "Read the total monthly payment and the breakdown.",
  ],
  formulas: [
    { title: "Principal and interest", expression: "M = L × r ÷ (1 − (1 + r)^(−n))", explanation: "L is the loan amount (price − down payment), r the monthly rate (annual rate ÷ 12) and n the number of monthly payments." },
    { title: "Monthly payment", expression: "Payment = M + property tax ÷ 12 + insurance ÷ 12 + HOA + PMI", explanation: "Taxes and insurance are spread evenly over 12 months, as with a typical escrow account." },
    { title: "Mortgage insurance", expression: "PMI = L × PMI rate ÷ 12, while L ÷ price > 80%", explanation: "It stops once the scheduled balance reaches 78% of the home price." },
  ],
  examples: [
    {
      title: "400,000 home, 20% down, 6.5% for 30 years",
      inputs: { price: 400000, down: 80000, rate: 6.5, years: 30, propertyTax: 4800, insurance: 1500, hoa: 0, pmiRate: 0.5, currency: "USD" },
      steps: ["Loan = $400,000 − $80,000 = $320,000; r = 0.065 ÷ 12; n = 360", "Principal and interest ≈ $2,022.62", "Tax $400 + insurance $125 per month; no PMI at 80% loan-to-value", "Total ≈ $2,547.62 per month"],
      expectedPrimary: 2547.617675177489,
    },
    {
      title: "300,000 home, 5% down, 6% for 30 years with PMI",
      inputs: { price: 300000, down: 15000, rate: 6, years: 30, propertyTax: 3600, insurance: 1200, hoa: 50, pmiRate: 0.5, currency: "USD" },
      steps: ["Loan = $285,000; principal and interest ≈ $1,708.72", "PMI = $285,000 × 0.5% ÷ 12 = $118.75 for the first 129 payments", "Total ≈ $1,708.72 + $300 + $100 + $50 + $118.75 = $2,277.47"],
      expectedPrimary: 2277.4689966853575,
    },
  ],
  assumptions: [
    "Fixed interest rate with equal monthly payments; adjustable-rate and interest-only loans are not modelled.",
    "Property tax, insurance, HOA dues and the PMI rate are your estimates; they vary by location and lender and often change each year.",
    "PMI rules follow US conventional loans: charged above 80% loan-to-value and stopping at 78% on schedule. FHA, VA and loans in other countries differ.",
    "Closing costs, points, utilities and maintenance are not included. This is an estimate, not financial advice or a loan offer.",
  ],
  faqs: [
    { question: "What is PITI?", answer: "Principal, interest, taxes and insurance: the four parts of a typical monthly mortgage payment when the lender collects taxes and insurance in escrow." },
    { question: "Why is my lender's payment different?", answer: "Lenders use actual tax and insurance amounts, may add escrow cushions and may quote an APR that includes fees. Ask for a Loan Estimate for exact figures." },
    { question: "How can I avoid mortgage insurance?", answer: "On many US conventional loans, a down payment of at least 20% avoids PMI. Some lenders offer other options, often with a higher rate." },
  ],
  related: ["loan-payment-calculator", "compound-interest-calculator", "salary-to-hourly-calculator"],
  updated: "2026-10-14",
  engine: mortgageEngine,
  text,
  makeEngine: makeMortgageEngine,
  translations,
});
