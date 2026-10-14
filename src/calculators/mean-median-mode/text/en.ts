const text = {
  data: "Data set",
  dataHelp: "Separate numbers with commas, spaces or new lines. Use a dot for decimals.",
  errors: { empty: "Enter at least one number.", tooMany: "Enter at most {max} numbers.", notNumber: "“{token}” is not a number. Separate values with commas, spaces or new lines.", tooLarge: "“{token}” is too large." },
  mean: "Mean (average)",
  caption: "{count} values.",
  median: "Median",
  mode: "Mode",
  modes: "Modes",
  noMode: "No mode (all values occur once)",
  range: "Range",
  sum: "Sum",
};
export type MeanMedianModeText = typeof text;
export default text;
