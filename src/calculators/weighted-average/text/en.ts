const text = {
  values: "Values",
  valuesHelp: "One value per item, separated by commas, spaces or new lines.",
  weights: "Weights",
  weightsHelp: "One weight per value, in the same order. Percentages, credits or counts all work; they do not need to add up to 100.",
  errors: {
    empty: "Enter at least one number.",
    tooMany: "Enter at most {max} numbers.",
    notNumber: "“{token}” is not a number. Separate values with commas, spaces or new lines.",
    tooLarge: "“{token}” is too large.",
  },
  maxCount: "Enter at most {max} numbers.",
  tooBig: "{value} is too large. Each number can be at most {max} in size.",
  negativeWeight: "Weights cannot be negative ({value}).",
  zeroTotal: "The weights add up to 0. At least one weight must be greater than 0.",
  countMismatch: "Enter one weight for each value: you have {values} and {weights}.",
  valueCount: { zero: "{n} values", one: "{n} value", two: "{n} values", few: "{n} values", many: "{n} values", other: "{n} values" },
  weightCount: { zero: "{n} weights", one: "{n} weight", two: "{n} weights", few: "{n} weights", many: "{n} weights", other: "{n} weights" },
  weightedMean: "Weighted average",
  caption: "Based on {count}.",
  sumOfWeights: "Sum of weights",
  sumOfProducts: "Sum of value × weight",
  unweightedMean: "Unweighted mean (for comparison)",
};
export type WeightedAverageText = typeof text;
export default text;
