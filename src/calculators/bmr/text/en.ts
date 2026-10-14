const text = {
  units: "Units",
  unitOptions: { metric: "Metric (kg, cm)", imperial: "Imperial (lb, ft, in)" },
  sex: "Sex used in the equation",
  sexHelp: "The equation has separate constants for males and females.",
  sexes: { male: "Male", female: "Female" },
  age: "Age",
  weight: "Weight",
  height: "Height",
  heightFt: "Height (feet)",
  heightIn: "Height (inches)",
  heightZero: "Enter a height greater than 0.",
  bmr: "Basal metabolic rate",
  caption: "Estimated energy used at complete rest.",
  kj: "In kilojoules",
  kcalDay: "kcal/day",
  kjDay: "kJ/day",
  note: "An estimate for healthy adults. Individual results can differ by 10% or more; it is not a prescription for diet or treatment.",
};
export type BmrText = typeof text;
export default text;
