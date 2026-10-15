const text = {
  principal: "Principal",
  principalHelp: "The amount borrowed or deposited.",
  rate: "Annual interest rate",
  time: "Time",
  timeUnit: "Time unit",
  timeUnits: { years: "Years", months: "Months", days: "Days" },
  tooLong: "Use a time of 100 years or less.",
  interest: "Simple interest",
  caption: "Interest on {principal} at {rate} per year, without compounding.",
  total: "Total amount (principal + interest)",
  perYear: "Interest per year",
  perMonth: "Interest per month",
  timeInYears: "Time in years",
  notes: {
    simple: "Simple interest is charged on the principal only; interest does not earn further interest.",
    days: "Days are converted with a 365-day year. Some lenders use a 360-day year, which gives slightly more interest.",
  },
};
export type SimpleInterestText = typeof text;
export default text;
