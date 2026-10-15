const text = {
  x: "Value (x)",
  xHelp: "The observation you want to standardize.",
  mean: "Mean (μ)",
  sd: "Standard deviation (σ)",
  sdHelp: "Must be greater than 0.",
  z: "Z-score",
  above: "{n} standard deviations above the mean",
  below: "{n} standard deviations below the mean",
  atMean: "Exactly at the mean",
  position: "Position",
  percentile: "Percentile, P(X < x)",
  upper: "P(X > x)",
  twoTailed: "Two-tailed P(|Z| > |z|)",
  note: "Probabilities assume the values follow a normal distribution with this mean and standard deviation.",
  unusual: "|z| is above 3, which is very unusual for normally distributed data. Check for a data entry error or an outlier.",
};
export type ZScoreText = typeof text;
export default text;
