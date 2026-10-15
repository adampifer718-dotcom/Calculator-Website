import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeSavingsGoalEngine, savingsGoalEngine } from "./engine";

export const savingsGoal = defineCalculator({
  id: "savings-goal",
  slug: "savings-goal-calculator",
  status: "published",
  title: "Savings Goal Calculator",
  shortTitle: "Savings Goal",
  category: "finance",
  collections: ["personal-finance"],
  summary: "Find the monthly deposit needed to reach a savings target by a chosen date, counting what you have saved and the return it earns.",
  metaTitle: "Savings Goal Calculator – Monthly Deposit Needed",
  metaDescription: "Work out how much to save each month to reach a goal in a set time, with your current savings, an expected annual return and monthly compounding.",
  keywords: ["savings goal", "how much to save per month", "monthly savings", "sinking fund", "save for a goal", "future value", "savings plan"],
  addedOn: "2026-10-15",
  expertReview: { area: "financial", status: "pending" },
  sources: [
    {
      title: "Future Value of Annuities and Sinking Funds (Finite Mathematics)",
      publisher: "LibreTexts Mathematics, University of St. Thomas course",
      url: "https://math.libretexts.org/Courses/University_of_St._Thomas/Math_101%3A_Finite_Mathematics/05%3A_Mathematics_of_Finance/5.02%3A_Future_Value_of_Annuities_and_Sinking_Funds",
      usedFor: "The future value of an ordinary annuity and the sinking fund payment derived from it.",
    },
  ],
  intro: [
    "Saving for a deposit, a car or an emergency fund is easier with a monthly figure to aim for. This calculator works out the regular deposit that gets you from what you have now to your target in the time you choose.",
    "It counts the growth on both your current savings and your new deposits, using a fixed yearly return compounded monthly. With a 0% return it simply splits what is left to save over the months.",
  ],
  howToUse: [
    "Pick the currency for the amounts.",
    "Enter the goal amount and what you have already saved towards it.",
    "Enter the yearly return you expect, such as your savings account rate.",
    "Enter how many years you have; decimals such as 2.5 are fine.",
    "Read the monthly deposit, the total you will deposit and how much comes from growth.",
  ],
  formulas: [
    { title: "Monthly deposit", expression: "PMT = (FV − PV × (1 + i)^n) × i ÷ ((1 + i)^n − 1)", explanation: "FV is the goal, PV the current savings, i = annual return ÷ 12 as a decimal and n the number of months. Deposits are made at the end of each month." },
    { title: "Zero return", expression: "PMT = (FV − PV) ÷ n", explanation: "With no growth, the shortfall is split evenly over the months." },
    { title: "Growth of current savings", expression: "PV × (1 + i)^n", explanation: "If this alone reaches the goal, no deposits are needed." },
  ],
  examples: [
    {
      title: "$15,000 in 4 years from $1,000 at 4.5%",
      inputs: { currency: "USD", goal: 15000, current: 1000, rate: 4.5, years: 4 },
      steps: ["i = 0.045 ÷ 12 = 0.00375; n = 48", "1,000 × 1.00375^48 ≈ $1,196.81", "PMT = (15,000 − 1,196.81) × 0.00375 ÷ (1.00375^48 − 1) ≈ $263.00"],
      expectedPrimary: 262.99880508404374,
    },
    {
      title: "$30,000 in 10 years from nothing at 6%",
      inputs: { currency: "USD", goal: 30000, current: 0, rate: 6, years: 10 },
      steps: ["i = 0.005; n = 120", "PMT = 30,000 × 0.005 ÷ (1.005^120 − 1)", "≈ $183.06 a month; deposits total about $21,967"],
      expectedPrimary: 183.06150582495357,
    },
    {
      title: "$6,000 in 2 years from $1,200 with no interest",
      inputs: { currency: "USD", goal: 6000, current: 1200, rate: 0, years: 2 },
      steps: ["n = 24 months", "PMT = (6,000 − 1,200) ÷ 24 = $200"],
      expectedPrimary: 200,
    },
  ],
  assumptions: [
    "The yearly return is constant and compounded monthly at the annual rate ÷ 12. Real returns vary, and investments can lose value.",
    "Deposits are the same every month and made at the end of each month. Taxes, fees and inflation are not included.",
    "The time is rounded to the nearest whole month.",
    "This is an estimate, not financial advice, and it has not been professionally reviewed.",
  ],
  faqs: [
    {
      question: "Why is the monthly deposit less than the goal divided by the months?",
      answer: "Your current savings and each deposit earn a return while they wait, so part of the goal is covered by growth. The higher the return and the longer the time, the more growth helps.",
    },
    {
      question: "What return should I enter?",
      answer: "For a savings account, use its annual interest rate. For investments, use a cautious long-run estimate, and remember that returns are not guaranteed. Entering 0% shows the deposit needed with no growth at all.",
    },
    {
      question: "What if I deposit at the start of each month?",
      answer: "Each deposit then earns one extra month of return, so the deposit needed is slightly smaller: about the result here divided by (1 + i), where i is the monthly rate.",
    },
  ],
  related: ["compound-interest-calculator", "budget-calculator", "simple-interest-calculator"],
  updated: "2026-10-15",
  engine: savingsGoalEngine,
  text,
  makeEngine: makeSavingsGoalEngine,
  translations,
});
