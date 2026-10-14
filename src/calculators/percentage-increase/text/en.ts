const text = {
  original: "Original value",
  originalHelp: "The starting value. It cannot be 0.",
  newValue: "New value",
  newValueHelp: "The value after the change.",
  originalZero: "The original value cannot be 0. A change from 0 has no percentage.",
  primary: "Percentage change",
  noChange: "The values are equal, so there is no change.",
  increase: "An increase from {from} to {to}.",
  decrease: "A decrease from {from} to {to}.",
  absolute: "Absolute change",
  ratio: "New value as % of original",
  formula: "Formula: ({to} − {from}) ÷ |{from}| × 100.",
  negativeNote: "The original value is negative, so the change is measured against its absolute value.",
};
export type PercentageIncreaseText = typeof text;
export default text;
