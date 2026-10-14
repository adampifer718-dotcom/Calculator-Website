const text = {
  mean: "Sample mean (x̄)",
  sd: "Standard deviation (σ)",
  n: "Sample size (n)",
  level: "Confidence level",
  primary: "{level} confidence interval",
  interval: "{lower} to {upper}",
  margin: "Margin of error",
  standardError: "Standard error",
  critical: "Critical value (z*)",
  note: "Uses the normal (z) distribution, which assumes a known population standard deviation or a large sample (n ≥ 30).",
};
export type ConfidenceIntervalText = typeof text;
export default text;
