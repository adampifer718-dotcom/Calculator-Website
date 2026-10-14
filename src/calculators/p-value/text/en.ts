const text = {
  distribution: "Test statistic",
  distributions: { z: "Z-score (normal)", t: "T-score (Student's t)" },
  statistic: "Statistic value",
  df: "Degrees of freedom",
  tail: "Alternative hypothesis",
  tails: { two: "Two-tailed (≠)", left: "Left-tailed (<)", right: "Right-tailed (>)" },
  pValue: "p-value",
  sig05: "Significant at α = 0.05?",
  sig01: "Significant at α = 0.01?",
  yes05: "Yes (p < 0.05)",
  no05: "No (p ≥ 0.05)",
  yes01: "Yes (p < 0.01)",
  no01: "No (p ≥ 0.01)",
  note: "A p-value is the probability of a result at least this extreme if the null hypothesis were true. It is not the probability that the null hypothesis is true.",
};
export type PValueText = typeof text;
export default text;
