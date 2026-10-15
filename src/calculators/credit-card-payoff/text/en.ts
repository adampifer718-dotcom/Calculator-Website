const years = { zero: "{n} years", one: "{n} year", two: "{n} years", few: "{n} years", many: "{n} years", other: "{n} years" };
const months = { zero: "{n} months", one: "{n} month", two: "{n} months", few: "{n} months", many: "{n} months", other: "{n} months" };

const text = {
  mode: "Find",
  modes: { payment: "Time to pay off", months: "Payment needed" },
  balance: "Card balance",
  balanceHelp: "The amount you owe on the card today.",
  apr: "Purchase APR",
  aprHelp: "The yearly interest rate shown on your statement.",
  payment: "Monthly payment",
  paymentHelp: "The same amount paid every month until the balance is cleared.",
  months: "Pay off within",
  monthsHelp: "Number of monthly payments, from 1 to 600.",
  monthsSuffix: "months",
  errors: {
    neverPaid: "This payment does not cover the first month's interest of {interest}, so the balance would never be paid off. Enter a larger payment.",
    tooLong: "At this payment the card would take more than 1,200 months (100 years) to pay off. Enter a larger payment.",
  },
  units: { years, months },
  yearsMonths: "{years} and {months}",
  timeToPayoff: "Time to pay off",
  captionPayment: "Paying {payment} a month on {balance} at {apr} APR: about {duration}.",
  requiredPayment: "Monthly payment needed",
  captionMonths: "Clears {balance} at {apr} APR in {duration}.",
  totalInterest: "Total interest",
  totalPaid: "Total paid",
  lastPayment: "Final (partial) payment",
  firstInterest: "Interest in the first month",
  numberOfPayments: "Number of payments",
  tableCaption: "Balance by year",
  tableColumns: { year: "Year", interest: "Interest paid", paid: "Payments made", balance: "Balance at year end" },
  notes: {
    monthly: "Interest is added each month at APR ÷ 12. Many issuers charge interest on the average daily balance, so your statement figures will differ slightly.",
    noPurchases: "The estimate assumes no new purchases, fees or rate changes while you pay the card off.",
    zeroRate: "At 0% APR the balance is simply split into equal payments.",
  },
};
export type CreditCardPayoffText = typeof text;
export default text;
