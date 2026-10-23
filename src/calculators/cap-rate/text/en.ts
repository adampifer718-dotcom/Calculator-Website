const text = {
  mode: "Calculate",
  modes: { rate: "Cap rate from income", value: "Value from a target cap rate" },
  value: "Property value or price",
  gross: "Gross annual rental income",
  grossHelp: "All the rent the property would bring in for a year if fully let, plus other income such as parking or laundry.",
  vacancy: "Vacancy and credit loss",
  vacancyHelp: "The share of gross income you expect to lose to empty units and unpaid rent.",
  expenses: "Annual operating expenses",
  expensesHelp: "Property tax, insurance, maintenance, management, utilities you pay and similar running costs. Do not include mortgage payments, depreciation or income tax.",
  noi: "Net operating income (NOI) per year",
  noiHelp: "Income after vacancy and operating expenses, before mortgage payments and income tax.",
  targetRate: "Target cap rate",
  errors: {
    noiPositive: "The net operating income must be greater than 0 to work out a value.",
  },
  capRate: "Cap rate",
  capCaption: "Net operating income of {noi} on a value of {value}.",
  propertyValue: "Indicated property value",
  valueCaption: "{noi} of net operating income capitalized at {rate}.",
  egi: "Effective gross income",
  noiResult: "Net operating income (NOI)",
  monthlyNoi: "NOI per month",
  expenseRatio: "Operating expense ratio (of effective gross income)",
  grm: "Gross rent multiplier (value ÷ gross income)",
  valuePerPoint: "Value change if the cap rate is 1 point lower",
  notes: {
    negative: "The operating expenses are larger than the income after vacancy, so the NOI and the cap rate are negative: the property does not cover its running costs.",
    financing: "The cap rate ignores financing, income taxes and future changes in value.",
  },
};
export type CapRateText = typeof text;
export default text;
