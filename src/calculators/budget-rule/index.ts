import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { budgetRuleEngine, makeBudgetRuleEngine } from "./engine";

export const budgetRule = defineCalculator({
  id: "budget-rule",
  slug: "budget-calculator",
  status: "published",
  title: "50/30/20 Budget Calculator",
  shortTitle: "50/30/20 Budget",
  category: "finance",
  collections: ["personal-finance"],
  summary: "Split your monthly take-home pay into needs, wants and savings with the 50/30/20 rule or another simple budget split.",
  metaTitle: "50/30/20 Budget Calculator – Needs, Wants, Savings",
  metaDescription: "Divide your after-tax income with the 50/30/20, 70/20/10 or 80/20 budget rule, or your own split, and see each bucket per month and per year.",
  keywords: ["50/30/20 rule", "budget calculator", "needs wants savings", "70/20/10 budget", "80/20 budget", "monthly budget", "take-home pay"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "What is a budget?",
      publisher: "Consumer Financial Protection Bureau",
      url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-budget-en-1791/",
      usedFor: "What a budget is and why income is planned against spending and saving.",
    },
    {
      title: "The 50/30/20 Rule for Budgeting",
      publisher: "InCharge Debt Solutions",
      url: "https://www.incharge.org/financial-literacy/budgeting-saving/50-30-20-rule/",
      usedFor: "The origin of the 50/30/20 rule in Elizabeth Warren and Amelia Warren Tyagi's book All Your Worth.",
    },
  ],
  intro: [
    "A percentage rule is a quick way to start a budget without tracking dozens of categories. The best known is 50/30/20: half of your take-home pay for needs, 30% for wants and 20% for savings and paying down debt.",
    "Enter your monthly income after tax and pick a rule, or set your own three percentages. The calculator shows how much goes into each bucket every month and over a year.",
  ],
  howToUse: [
    "Pick the currency for the amounts.",
    "Enter your monthly take-home pay: what reaches your bank account after tax.",
    "Choose a budget rule, or choose Custom split and enter three percentages that add up to 100%.",
    "Read the amount for each bucket per month and per year.",
  ],
  formulas: [
    { title: "Amount per bucket", expression: "bucket = income × share ÷ 100", explanation: "For the 50/30/20 rule the shares are 50% for needs, 30% for wants and 20% for savings." },
    { title: "Yearly amount", expression: "yearly = monthly × 12", explanation: "Each monthly amount over twelve months." },
    { title: "Custom split", expression: "needs % + wants % + savings % = 100%", explanation: "Your own shares must cover the whole income, no more and no less." },
  ],
  examples: [
    {
      title: "$3,850 a month with the 50/30/20 rule",
      inputs: { currency: "USD", income: 3850, rule: "50-30-20" },
      steps: ["Needs = 3,850 × 50% = $1,925", "Wants = 3,850 × 30% = $1,155", "Savings = 3,850 × 20% = $770"],
      expectedPrimary: 1925,
    },
    {
      title: "$5,200 a month with the 70/20/10 rule",
      inputs: { currency: "USD", income: 5200, rule: "70-20-10" },
      steps: ["Spending = 5,200 × 70% = $3,640", "Savings = 5,200 × 20% = $1,040", "Debt repayment or giving = 5,200 × 10% = $520"],
      expectedPrimary: 3640,
    },
    {
      title: "$2,900 a month with a 55/25/20 custom split",
      inputs: { currency: "USD", income: 2900, rule: "custom", needsPct: 55, wantsPct: 25, savingsPct: 20 },
      steps: ["55 + 25 + 20 = 100%", "Needs = 2,900 × 55% = $1,595", "Wants = $725; savings = $580"],
      expectedPrimary: 1595,
    },
  ],
  assumptions: [
    "These splits are rules of thumb, not financial advice. They do not account for your debts, where you live or your goals.",
    "Income means take-home pay after tax and payroll deductions. If retirement savings are already taken from your paycheck, you may count them towards the savings bucket.",
    "The 50/30/20 split is popularly attributed to Elizabeth Warren and Amelia Warren Tyagi's 2005 book All Your Worth. The 70/20/10 and 80/20 splits are informal variants with no single source.",
    "Minimum debt payments usually count as needs; anything paid above the minimum belongs in savings and debt repayment.",
  ],
  faqs: [
    {
      question: "What counts as a need?",
      answer: "Needs are bills you would struggle to stop paying: rent or mortgage, utilities, basic groceries, insurance, transport to work and minimum loan payments. Eating out, streaming services, travel and hobbies are wants.",
    },
    {
      question: "What if my needs are more than 50%?",
      answer: "That is common where housing is expensive. Use a custom split that reflects your real costs, and look for ways to bring needs down or income up over time. The rule is a target, not a test you pass or fail.",
    },
    {
      question: "Should I use gross or net income?",
      answer: "Use net income, the take-home amount after tax. The rule is designed for the money you actually have to spend and save each month.",
    },
  ],
  related: ["savings-goal-calculator", "salary-to-hourly-calculator", "debt-to-income-calculator"],
  updated: "2026-10-15",
  engine: budgetRuleEngine,
  text,
  makeEngine: makeBudgetRuleEngine,
  translations,
});
