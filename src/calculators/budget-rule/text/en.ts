const text = {
  income: "Monthly take-home income",
  incomeHelp: "Your pay after income tax and other deductions, for one month.",
  rule: "Budget rule",
  rules: {
    "50-30-20": "50/30/20 (needs, wants, savings)",
    "70-20-10": "70/20/10 (spending, savings, debt or giving)",
    "80-20": "80/20 (spending, savings)",
    custom: "Custom split",
  },
  needsPct: "Needs",
  wantsPct: "Wants",
  savingsPct: "Savings and debt repayment",
  customHelp: "The three percentages must add up to 100%.",
  sumError: "The three percentages add up to {sum}. Change them so they total 100%.",
  buckets: {
    needs: "Needs",
    wants: "Wants",
    savings: "Savings and extra debt repayment",
    spending: "Everyday spending (needs and wants)",
    savingsOnly: "Savings",
    extra: "Debt repayment or giving",
  },
  primaryCaption: "{percent} of {income} a month for this bucket under the {rule} rule.",
  ruleNames: { "50-30-20": "50/30/20", "70-20-10": "70/20/10", "80-20": "80/20", custom: "custom" },
  yearlyIncome: "Yearly take-home income",
  tableCaption: "Monthly and yearly amounts for each bucket",
  tableColumns: { bucket: "Bucket", share: "Share", monthly: "Per month", yearly: "Per year" },
  notes: {
    thumb: "Budget rules are rough starting points, not advice. Adjust the split to your own costs and goals.",
    needs: "Needs are costs you must pay, such as housing, utilities, groceries, insurance and minimum debt payments. Wants are everything you could cut back on.",
  },
};
export type BudgetRuleText = typeof text;
export default text;
