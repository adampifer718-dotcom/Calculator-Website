const text = {
  measured: "Measured value",
  measuredHelp: "The experimental or observed value.",
  trueValue: "True value",
  trueHelp: "The accepted, theoretical or reference value. It cannot be 0.",
  trueZero: "The true value cannot be 0, because percent error divides by it.",
  percentError: "Percent error",
  absoluteError: "Absolute error |measured − true|",
  relativeError: "Signed relative error",
  direction: "Direction",
  over: "The measurement is above the true value (overestimate).",
  under: "The measurement is below the true value (underestimate).",
  exact: "The measurement equals the true value.",
  note: "Percent error uses the size of the error, so it is never negative. The signed relative error keeps the direction.",
};
export type PercentErrorText = typeof text;
export default text;
