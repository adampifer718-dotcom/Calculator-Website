const text = {
  n: "Total items (n)",
  nHelp: "A whole number from 0 to 10,000.",
  r: "Items chosen (r)",
  rHelp: "A whole number from 0 to n.",
  rTooLarge: "r cannot be larger than n ({n}). You cannot choose more distinct items than there are.",
  combinations: "Combinations, nCr (order does not matter)",
  permutations: "Permutations, nPr (order matters)",
  combinationsRepeat: "Combinations with repetition, C(n + r − 1, r)",
  permutationsRepeat: "Permutations with repetition, nʳ",
  digits: { zero: "{n} digits", one: "{n} digit", two: "{n} digits", few: "{n} digits", many: "{n} digits", other: "{n} digits" },
  large: "{value} ({digits})",
  caption: "Ways to choose {r} of {n} items when order does not matter.",
  largeNote: "Results longer than 30 digits are shown in scientific notation, rounded to 7 significant digits, with the exact number of digits.",
  zeroRepeat: "With n = 0 and r = 0 there is exactly one way to choose nothing, so every count is 1.",
};
export type CombinationsText = typeof text;
export default text;
