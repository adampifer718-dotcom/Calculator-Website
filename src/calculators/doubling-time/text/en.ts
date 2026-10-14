const text = {
  initial: "Initial count (N₀)",
  final: "Final count (N)",
  time: "Elapsed time",
  unit: "Time unit",
  units: { minutes: "Minutes", hours: "Hours", days: "Days" },
  unitWords: { minutes: "minutes", hours: "hours", days: "days" },
  perUnit: { minutes: "per minute", hours: "per hour", days: "per day" },
  notGrowth: "The final count must be larger than the initial count for growth.",
  doubling: "Doubling time",
  generations: "Number of doublings (generations)",
  rate: "Growth rate constant (k)",
  fold: "Fold increase (N ÷ N₀)",
  note: "Assumes steady exponential growth over the whole period, such as the log phase of a bacterial culture.",
};
export type DoublingTimeText = typeof text;
export default text;
