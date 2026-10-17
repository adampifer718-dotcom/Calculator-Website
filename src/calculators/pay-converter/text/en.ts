const text = {
  amount: "Your pay",
  amountHelp: "Gross pay before taxes and deductions.",
  period: "Pay period",
  periodHelp: "How often you receive the amount above.",
  primary: "Estimated annual salary",
  caption: "Gross pay per year, converted from {period} pay.",
  hourly: "Hourly rate",
  monthly: "Monthly pay",
  perMinute: "Earned per minute",
  timeToEarn: "Time to earn {target}",
  unreachable: "Not reachable at zero pay",
  hoursMinutes: "{h}h {m}m",
};
export type PayConverterText = typeof text;
export default text;
