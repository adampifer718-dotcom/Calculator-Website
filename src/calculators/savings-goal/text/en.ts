const text = {
  goal: "Savings goal",
  goalHelp: "The amount you want to have at the end.",
  current: "Current savings",
  currentHelp: "What you already have set aside for this goal. Enter 0 if you are starting from nothing.",
  rate: "Annual return",
  rateHelp: "Expected yearly interest or investment return, compounded monthly. Use 0% for cash with no interest.",
  years: "Time to reach the goal",
  yearsHelp: "In years; decimals are allowed (1.5 = 18 months).",
  yearsSuffix: "years",
  tooShort: "Use at least one month (about 0.05 years).",
  deposit: "Monthly deposit needed",
  caption: "Deposited at the end of each month for {months} at {rate} a year, plus {current} already saved, to reach {goal}.",
  months: { zero: "{n} months", one: "{n} month", two: "{n} months", few: "{n} months", many: "{n} months", other: "{n} months" },
  totalDeposits: "Total deposits",
  growth: "Growth earned",
  currentGrows: "Current savings at the end",
  endBalance: "Balance at the end",
  numberOfDeposits: "Number of monthly deposits",
  notes: {
    reached: "Your current savings are expected to reach the goal on their own, so no further deposits are needed.",
    constant: "The return is assumed to be the same every month. Real returns vary, and taxes, fees and inflation are not included.",
  },
};
export type SavingsGoalText = typeof text;
export default text;
