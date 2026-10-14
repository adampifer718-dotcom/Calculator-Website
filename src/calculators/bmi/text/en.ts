const text = {
  units: "Units",
  unitOptions: { metric: "Metric (kg, cm)", imperial: "Imperial (lb, ft, in)" },
  weight: "Weight",
  height: "Height",
  heightFt: "Height (feet)",
  heightIn: "Height (inches)",
  heightZero: "Enter a height greater than 0.",
  primary: "Body mass index",
  caption: "{category} (adult range).",
  category: "Category",
  categories: { under: "Underweight", healthy: "Healthy weight", over: "Overweight", obese: "Obesity" },
  healthyRange: "Healthy weight for this height",
  range: "{low}–{high} {unit}",
  note: "Adult categories: under 18.5 underweight, 18.5–24.9 healthy, 25–29.9 overweight, 30 or more obesity. BMI does not apply the same way to children, pregnancy or very muscular people.",
};
export type BmiText = typeof text;
export default text;
