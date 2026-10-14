const text = {
  base: "Base (a)",
  exponent: "Exponent (b)",
  zeroNegative: "0 raised to a negative power is undefined.",
  negativeBase: "A negative base needs a whole-number exponent for a real result.",
  tooLarge: "Too large to display",
  eNotation: "E-notation",
  negativeNote: "A negative exponent means 1 ÷ {base}^{exponent}.",
  positiveNote: "{base} multiplied by itself {exponent} times.",
};
export type ExponentText = typeof text;
export default text;
