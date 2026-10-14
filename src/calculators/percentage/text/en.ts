const text = {
  question: "Question",
  modes: { percentOf: "What is X% of Y?", whatPercent: "X is what % of Y?", findWhole: "X is Y% of what?" },
  percentX: "Percentage (X)",
  valueY: "Value (Y)",
  partX: "Part (X)",
  wholeY: "Whole (Y)",
  percentY: "Percentage (Y)",
  wholeZero: "The whole cannot be 0.",
  percentZero: "The percentage cannot be 0.",
  percentResult: "Percentage",
  percentCaption: "{part} is {percent} of {whole}.",
  percentFormula: "Formula: {part} ÷ {whole} × 100.",
  wholeResult: "Whole value",
  wholeCaption: "{part} is {percent} of {whole}.",
  wholeFormula: "Formula: {part} ÷ ({percent} ÷ 100).",
  result: "Result",
  resultCaption: "{percent} of {value} is {result}.",
  minus: "{value} minus {percent}",
  plus: "{value} plus {percent}",
  resultFormula: "Formula: {percent} ÷ 100 × {value}.",
};
export type PercentageText = typeof text;
export default text;
