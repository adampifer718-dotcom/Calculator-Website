const text = {
  principal: "Loan amount",
  rate: "Annual interest rate (APR)",
  years: "Loan term",
  termTooShort: "The term must be at least one month.",
  payment: "Monthly payment",
  caption: "{count} monthly payments at {rate} APR.",
  total: "Total of payments",
  interest: "Total interest",
  tableCaption: "Amortization by year",
  tableColumns: { year: "Year", principal: "Principal paid", interest: "Interest paid", balance: "Balance" },
  note: "Fixed rate with equal monthly payments. Taxes, insurance, fees and any rate changes are not included.",
};
export type LoanPaymentText = typeof text;
export default text;
