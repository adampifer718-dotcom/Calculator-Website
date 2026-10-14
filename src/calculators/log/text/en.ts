const text = {
  value: "Number (x)",
  base: "Base",
  bases: { ten: "10 (common log)", e: "e (natural log, ln)", two: "2 (binary log)", custom: "Other base" },
  customBase: "Custom base (b)",
  baseOne: "The base cannot be 1.",
  primaryNatural: "log of x",
  primaryBase: "log base {base} of x",
  caption: "{base} raised to this power equals {value}.",
  ln: "Natural log (ln x)",
  log10: "Common log (log₁₀ x)",
  log2: "Binary log (log₂ x)",
};
export type LogText = typeof text;
export default text;
