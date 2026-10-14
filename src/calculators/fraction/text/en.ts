const text = {
  a: "First number",
  aHelp: "A fraction (3/4), mixed number (1 1/2), whole number or decimal.",
  b: "Second number",
  bHelp: "Same formats as the first number.",
  operation: "Operation",
  operations: { add: "Add (+)", subtract: "Subtract (−)", multiply: "Multiply (×)", divide: "Divide (÷)" },
  errors: {
    invalid: "Enter a fraction such as 3/4, a mixed number such as 1 1/2, a whole number or a decimal.",
    zeroDenominator: "A denominator cannot be 0.",
    tooLarge: "Use numerators and denominators no larger than {max}.",
    divideByZero: "You cannot divide by zero.",
  },
  result: "Result in lowest terms",
  caption: "{a} {op} {b} = {result}",
  mixed: "As a mixed number",
  decimal: "As a decimal",
  note: "Fractions are reduced to lowest terms by dividing by the greatest common divisor. The decimal is rounded for display only.",
};
export type FractionText = typeof text;
export default text;
