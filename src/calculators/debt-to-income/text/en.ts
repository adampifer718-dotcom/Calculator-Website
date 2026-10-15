const text = {
  income: "Gross monthly income",
  incomeHelp: "Your pay before tax and deductions, for one month. Include every regular source of income.",
  housing: "Housing payment",
  housingHelp: "Monthly rent, or the mortgage payment including property tax, home insurance and any HOA dues.",
  car: "Car loan payments",
  student: "Student loan payments",
  creditCards: "Minimum credit card payments",
  creditCardsHelp: "The minimum due on each card, not the full balance.",
  other: "Other debt payments",
  otherHelp: "Personal loans, child support, alimony and any other required monthly debt payments.",
  backEnd: "Debt-to-income ratio (back-end)",
  caption: "{debt} of monthly debt payments on {income} of gross monthly income.",
  frontEnd: "Housing ratio (front-end)",
  totalDebt: "Total monthly debt payments",
  nonHousing: "Debt payments other than housing",
  remaining: "Gross income left after debt payments",
  notes: {
    lenders: "Each lender and loan program sets its own debt-to-income limits and looks at other factors too, so this ratio alone does not show whether a loan would be offered.",
    reference: "A 43% debt-to-income ratio has been a common reference point in US mortgage rules for qualified mortgages, according to the Consumer Financial Protection Bureau.",
    overIncome: "Your monthly debt payments are higher than your gross monthly income.",
  },
};
export type DebtToIncomeText = typeof text;
export default text;
