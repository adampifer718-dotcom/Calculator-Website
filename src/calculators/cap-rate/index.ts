import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { capRateEngine, makeCapRateEngine } from "./engine";

export const capRate = defineCalculator({
  id: "cap-rate",
  slug: "cap-rate-calculator",
  status: "published",
  title: "Cap Rate Calculator",
  shortTitle: "Cap Rate",
  category: "finance",
  collections: ["real-estate", "business"],
  summary: "Find a rental property's capitalization rate from its income, vacancy and operating expenses, or its value from a target cap rate.",
  metaTitle: "Cap Rate Calculator – NOI and Property Value",
  metaDescription: "Calculate the cap rate of a rental property from rent, vacancy and operating expenses, or estimate its value from net operating income and a target cap rate.",
  keywords: ["cap rate calculator", "capitalization rate", "net operating income", "NOI", "rental property", "income approach", "real estate investment", "property value"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "Lesson 8 — Capitalization: Converting an Income Stream into Value (The Income Approach to Value)",
      publisher: "California State Board of Equalization",
      url: "https://www.boe.ca.gov/info/iav/lesson8.htm",
      usedFor: "The capitalization rate as the ratio of net operating income to value, and value = income ÷ rate.",
    },
    {
      title: "Approaches to Value",
      publisher: "Arizona Department of Revenue",
      url: "https://azdor.gov/sites/default/files/2023-05/PROPERTY_ApproachesToValue.pdf",
      usedFor: "The I = R × V relationship between net operating income, the overall cap rate and value.",
    },
  ],
  expertReview: { area: "financial", status: "pending" },
  intro: [
    "The capitalization rate, or cap rate, compares the income a property produces with what it is worth. It is the net operating income for one year divided by the property's value or price, written as a percentage.",
    "Investors use it to compare properties quickly regardless of how they are financed. Enter the rent, vacancy and running costs to get the cap rate, or switch modes to turn a net operating income and a target cap rate into an indicated value.",
  ],
  howToUse: [
    "Choose whether to find the cap rate or the value, and pick the currency.",
    "For the cap rate, enter the property value or asking price, the gross yearly rent, the vacancy allowance and the yearly operating expenses.",
    "For the value, enter the net operating income and the cap rate you are targeting.",
    "Read the cap rate or value, along with the effective gross income, NOI and expense ratio.",
  ],
  formulas: [
    { title: "Effective gross income", expression: "EGI = gross income × (1 − vacancy)", explanation: "Vacancy is the share of income lost to empty units and unpaid rent." },
    { title: "Net operating income", expression: "NOI = EGI − operating expenses", explanation: "Operating expenses exclude mortgage payments, depreciation and income tax." },
    { title: "Cap rate", expression: "cap rate = NOI ÷ value × 100%", explanation: "The yearly return the property would give an all-cash buyer, before tax." },
    { title: "Value from a cap rate", expression: "value = NOI ÷ cap rate", explanation: "Divide by the rate as a decimal, so 6% is 0.06." },
  ],
  examples: [
    {
      title: "Duplex worth $450,000",
      inputs: { mode: "rate", currency: "USD", value: 450000, gross: 48000, vacancy: 5, expenses: 16000 },
      steps: ["EGI = 48,000 × 0.95 = $45,600", "NOI = 45,600 − 16,000 = $29,600", "Cap rate = 29,600 ÷ 450,000 ≈ 6.58%"],
      expectedPrimary: (29600 / 450000) * 100,
    },
    {
      title: "Small apartment building priced at $720,000",
      inputs: { mode: "rate", currency: "USD", value: 720000, gross: 62400, vacancy: 8, expenses: 21500 },
      steps: ["EGI = 62,400 × 0.92 = $57,408", "NOI = 57,408 − 21,500 = $35,908", "Cap rate = 35,908 ÷ 720,000 ≈ 4.99%"],
      expectedPrimary: (35908 / 720000) * 100,
    },
    {
      title: "Value of a shop with $41,250 NOI at a 5.75% cap rate",
      inputs: { mode: "value", currency: "USD", noi: 41250, targetRate: 5.75 },
      steps: ["Value = 41,250 ÷ 0.0575", "≈ $717,391.30"],
      expectedPrimary: 41250 / 0.0575,
    },
  ],
  assumptions: [
    "The cap rate ignores financing, income taxes, capital improvements and future changes in rent or value. It is a snapshot of one year's income.",
    "The result depends entirely on the income and expense figures you enter. Use realistic, full-year operating costs, including management and maintenance even if you do them yourself.",
    "A negative net operating income is allowed and gives a negative cap rate, which means the property does not cover its running costs.",
    "This is an estimate, not investment or financial advice, and it has not been professionally reviewed.",
  ],
  faqs: [
    { question: "What is a good cap rate?", answer: "There is no single good figure. Cap rates depend on the location, property type, condition and interest rates. A higher cap rate means more income for the price, but usually also more risk or less expected growth." },
    { question: "Why are mortgage payments left out of operating expenses?", answer: "The cap rate describes the property, not the buyer's loan. Leaving financing out lets you compare properties fairly. To include the loan, look at cash-on-cash return or ROI instead." },
    { question: "How does a lower cap rate raise the value?", answer: "Value is NOI divided by the cap rate. For the same $40,000 NOI, a 5% cap rate gives $800,000 while an 8% cap rate gives $500,000, so buyers who accept lower cap rates pay more." },
  ],
  related: ["roi-calculator", "mortgage-calculator", "loan-payment-calculator"],
  updated: "2026-10-22",
  engine: capRateEngine,
  text,
  makeEngine: makeCapRateEngine,
  translations,
});
