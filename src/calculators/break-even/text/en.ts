const text = {
  fixed: "Fixed costs",
  fixedHelp: "Costs that don't change with volume, e.g. rent and salaries.",
  price: "Price per unit",
  variable: "Variable cost per unit",
  variableHelp: "Materials, packaging and other per-unit costs.",
  variableTooHigh: "The variable cost must be lower than the price, or you never break even.",
  units: "Break-even volume",
  unitsSuffix: "units",
  caption: "Round up to {count} whole units.",
  revenue: "Break-even revenue",
  contribution: "Contribution margin per unit",
  ratio: "Contribution margin ratio",
};
export type BreakEvenText = typeof text;
export default text;
