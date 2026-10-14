const text = {
  task: "Task",
  tasks: { count: "Count significant figures", round: "Round to significant figures" },
  number: "Number",
  numberHelp: "Type it exactly as written, including trailing zeros. Use a dot for decimals. E-notation such as 6.02e23 is allowed.",
  invalid: "Enter a number such as 1200, 0.0045 or 6.02e23.",
  zero: "Enter a non-zero number.",
  tooLarge: "Enter a smaller number.",
  digits: "Significant figures to keep",
  rounded: "Rounded to {digits} significant figures",
  scientific: "Scientific notation",
  originalCount: "Significant figures in the original",
  roundNote: "Trailing zeros in a whole number such as 123,000 are ambiguous; the scientific form shows exactly which digits are significant.",
  count: "Significant figures",
  countCaption: "{number} has {count} significant figures.",
  countCaptionOne: "{number} has 1 significant figure.",
  inScientific: "In scientific notation",
  countNote: "Trailing zeros in a whole number without a decimal point (such as 1200) are treated as not significant. Write 1200. to make them significant.",
};
export type SigFigText = typeof text;
export default text;
