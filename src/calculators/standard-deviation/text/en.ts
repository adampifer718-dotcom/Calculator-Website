const text = {
  data: "Data set",
  dataHelp: "Separate numbers with commas, spaces or new lines. Use a dot for decimals.",
  errors: { empty: "Enter at least one number.", tooMany: "Enter at most {max} numbers.", notNumber: "“{token}” is not a number. Separate values with commas, spaces or new lines.", tooLarge: "“{token}” is too large." },
  kind: "Data is a",
  kinds: { sample: "Sample (divide by n − 1)", population: "Whole population (divide by n)" },
  needTwo: "A sample needs at least two values.",
  sampleSd: "Sample standard deviation (s)",
  populationSd: "Population standard deviation (σ)",
  sampleVariance: "Sample variance (s²)",
  populationVariance: "Population variance (σ²)",
  mean: "Mean",
  count: "Count (n)",
  standardError: "Standard error of the mean",
};
export type StandardDeviationText = typeof text;
export default text;
