const text = {
  weight: "Weight lifted",
  unit: "Unit",
  units: { kg: "kg", lb: "lb" },
  reps: "Repetitions completed",
  repsHelp: "Full repetitions with good form in one set taken close to failure, from 1 to 12.",
  estimate: "Estimated one-rep max",
  caption: "Average of the Epley, Brzycki and Lombardi estimates for {weight} × {reps}.",
  repsCount: { zero: "{n} reps", one: "{n} rep", two: "{n} reps", few: "{n} reps", many: "{n} reps", other: "{n} reps" },
  epley: "Epley formula",
  brzycki: "Brzycki formula",
  lombardi: "Lombardi formula",
  tableCaption: "Training loads from the estimated one-rep max",
  tablePercent: "Share of 1RM",
  tableLoad: "Load",
  notes: {
    single: "With a single repetition, every formula returns the weight lifted.",
    highReps: "Estimates from more than about 10 repetitions are less reliable; a heavier set of 3–8 reps gives a better prediction.",
    safety: "Attempting a true maximum lift needs proper technique, a warm-up and a spotter or safety bars.",
  },
};
export type OneRepMaxText = typeof text;
export default text;
