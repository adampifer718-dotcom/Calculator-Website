const text = {
  solve: "Find",
  solveOptions: { v1: "Stock volume needed (V₁)", c2: "Final concentration (C₂)", v2: "Final volume (V₂)", c1: "Stock concentration (C₁)" },
  c1: "Stock concentration (C₁)",
  v1: "Stock volume (V₁)",
  c2: "Final concentration (C₂)",
  v2: "Final volume (V₂)",
  tooConcentrated: "A dilution cannot be more concentrated than the stock (C₂ ≤ C₁).",
  stockTooLarge: "The stock volume cannot exceed the final volume (V₁ ≤ V₂).",
  results: { c1: "Stock concentration (C₁)", v1: "Stock volume needed (V₁)", c2: "Final concentration (C₂)", v2: "Final volume (V₂)" },
  caption: "In the same units as the matching inputs.",
  solvent: "Solvent to add (V₂ − V₁)",
  factor: "Dilution factor (C₁ ÷ C₂)",
  note: "Use the same concentration unit for C₁ and C₂, and the same volume unit for V₁ and V₂.",
};
export type DilutionText = typeof text;
export default text;
