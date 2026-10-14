const text = {
  mode: "Calculation",
  modes: { add: "Add tax to a price", remove: "Remove tax from a total" },
  amount: "Amount",
  amountHelp: "Price before tax, or total including tax when removing tax.",
  rate: "Sales tax rate",
  beforeTax: "Price before tax",
  beforeTaxCaption: "The total divided by (1 + tax rate).",
  taxIncluded: "Sales tax included",
  total: "Total including tax",
  totalCaption: "The price plus sales tax.",
  tax: "Sales tax",
};
export type SalesTaxText = typeof text;
export default text;
