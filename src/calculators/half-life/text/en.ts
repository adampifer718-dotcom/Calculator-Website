const text = {
  solve: "Find",
  solveOptions: { N: "Remaining amount (N)", N0: "Initial amount (N₀)", T: "Half-life (T½)", t: "Elapsed time (t)" },
  initial: "Initial amount (N₀)",
  remaining: "Remaining amount (N)",
  amountHelp: "Any unit (grams, atoms, becquerels…), as long as N and N₀ use the same one.",
  halfLife: "Half-life (T½)",
  elapsed: "Elapsed time (t)",
  timeHelp: "Any time unit, as long as t and T½ use the same one.",
  remainingTooLarge: "The remaining amount cannot be larger than the initial amount (N ≤ N₀).",
  remainingMustDrop: "To find the half-life, the remaining amount must be less than the initial amount.",
  timeMustBePositive: "To find the half-life, the elapsed time must be greater than 0.",
  tooManyHalfLives: "That is too many half-lives: the initial amount would be too large to show.",
  results: { N: "Remaining amount", N0: "Initial amount", T: "Half-life", t: "Elapsed time" },
  amountCaption: "In the same unit as the other amount.",
  timeCaption: "In the same time unit as the other time value.",
  percentRemaining: "Percent remaining (N ÷ N₀)",
  halfLives: "Number of half-lives (t ÷ T½)",
  decayConstant: "Decay constant λ = ln 2 ÷ T½ (per time unit)",
  meanLifetime: "Mean lifetime τ = 1 ÷ λ (time unit)",
  note: "Assumes simple exponential (first-order) decay with a constant half-life.",
};
export type HalfLifeText = typeof text;
export default text;
