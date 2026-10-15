import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { aprApyEngine, makeAprApyEngine } from "./engine";

export const aprApy = defineCalculator({
  id: "apr-apy",
  slug: "apr-to-apy-calculator",
  status: "published",
  title: "APR to APY Calculator",
  shortTitle: "APR to APY",
  category: "finance",
  collections: ["personal-finance", "accounting-finance"],
  summary: "Convert a nominal APR to the effective APY, or back again, for any compounding frequency.",
  metaTitle: "APR to APY Calculator – Effective Annual Rate",
  metaDescription: "Convert APR to APY or APY to APR for annual, quarterly, monthly, daily or continuous compounding, with a table comparing every frequency.",
  keywords: ["apr to apy", "apy to apr", "annual percentage yield", "annual percentage rate", "effective annual rate", "nominal rate", "compounding frequency"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Compliance Guide to Small Entities: Regulation DD (Truth in Savings)",
      publisher: "Board of Governors of the Federal Reserve System",
      url: "https://www.federalreserve.gov/supervisionreg/regddcg.htm",
      usedFor: "How the annual percentage yield reflects compounding over a year.",
    },
    {
      title: "Regulation Z, § 1026.22: Determination of annual percentage rate",
      publisher: "Consumer Financial Protection Bureau",
      url: "https://www.consumerfinance.gov/rules-policy/regulations/1026/22/",
      usedFor: "The note that a disclosed loan APR measures the cost of credit and can differ from a nominal interest rate.",
    },
  ],
  intro: [
    "Banks quote two kinds of yearly rate. The APR is the nominal rate: the rate per period multiplied by the number of periods. The APY is the effective rate: what a balance actually grows by in a year once interest is added to interest.",
    "The more often interest compounds, the further the APY pulls ahead of the APR. Use this tool to compare a savings account quoted as an APY with a loan quoted as an APR on the same footing.",
  ],
  howToUse: [
    "Choose whether you are converting APR to APY or APY to APR.",
    "Enter the rate you know, as a percentage.",
    "Choose how often interest compounds.",
    "Read the converted rate, the rate charged in each period and the table for the other frequencies.",
  ],
  formulas: [
    { title: "APR to APY", expression: "APY = (1 + APR ÷ n)ⁿ − 1", explanation: "n is the number of compounding periods per year and both rates are decimals." },
    { title: "Continuous compounding", expression: "APY = e^APR − 1", explanation: "The limit as n grows without bound; e ≈ 2.71828." },
    { title: "APY to APR", expression: "APR = n × ((1 + APY)^(1/n) − 1)", explanation: "The inverse. For continuous compounding, APR = ln(1 + APY)." },
    { title: "Rate per period", expression: "i = APR ÷ n", explanation: "The interest applied at each compounding step." },
  ],
  examples: [
    {
      title: "6% APR compounded monthly",
      inputs: { direction: "aprToApy", rate: 6, compounding: "12" },
      steps: ["Rate per month = 0.06 ÷ 12 = 0.005", "APY = 1.005¹² − 1", "≈ 0.061678, or about 6.1678%"],
      expectedPrimary: ((1 + 0.06 / 12) ** 12 - 1) * 100,
    },
    {
      title: "5% APY back to a monthly APR",
      inputs: { direction: "apyToApr", rate: 5, compounding: "12" },
      steps: ["APR = 12 × (1.05^(1/12) − 1)", "= 12 × 0.0040741", "≈ 4.8889%"],
      expectedPrimary: 12 * (1.05 ** (1 / 12) - 1) * 100,
    },
    {
      title: "8% APR compounded continuously",
      inputs: { direction: "aprToApy", rate: 8, compounding: "continuous" },
      steps: ["APY = e^0.08 − 1", "≈ 1.083287 − 1", "≈ 8.3287%"],
      expectedPrimary: (Math.exp(0.08) - 1) * 100,
    },
  ],
  assumptions: [
    "The rate is a nominal interest rate that stays the same all year, with no deposits, withdrawals or fees.",
    "On US loans the APR disclosed under the Truth in Lending Act (Regulation Z) can include certain fees, so it can be higher than the interest rate alone. This tool converts nominal rates only.",
    "Daily compounding uses 365 periods a year. Banks may use 360 or 366 days in their own calculations.",
    "This is not financial advice.",
  ],
  faqs: [
    { question: "Why is the APY higher than the APR?", answer: "Each time interest is added, the next period's interest is worked out on a larger balance. The APY counts that extra growth; the APR does not. With annual compounding the two are equal." },
    { question: "Which rate should I compare between accounts?", answer: "Compare APY with APY for savings, because it already includes compounding. For loans, compare the disclosed APR, which also captures many fees." },
    { question: "Does daily compounding make a big difference over monthly?", answer: "Only a small one at everyday rates. At 5% APR, monthly compounding gives about 5.116% APY and daily about 5.127%." },
  ],
  related: ["compound-interest-calculator", "simple-interest-calculator", "loan-payment-calculator"],
  updated: "2026-10-15",
  engine: aprApyEngine,
  text,
  makeEngine: makeAprApyEngine,
  translations,
});
