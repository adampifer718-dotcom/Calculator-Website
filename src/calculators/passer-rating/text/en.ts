const text = {
  attempts: "Pass attempts",
  completions: "Completions",
  yards: "Passing yards",
  yardsHelp: "Total passing yards; this can be negative.",
  touchdowns: "Touchdown passes",
  interceptions: "Interceptions",
  errors: {
    completions: "Completions cannot be more than attempts.",
    touchdowns: "Touchdown passes cannot be more than completions.",
    interceptions: "Interceptions cannot be more than the incomplete passes (attempts minus completions).",
  },
  rating: "NFL passer rating",
  caption: "{cmp} of {att} for {yds} yards, {td} TD, {int} INT.",
  ncaa: "NCAA passing efficiency",
  completionPct: "Completion percentage",
  yardsPerAttempt: "Yards per attempt",
  tdPct: "Touchdown percentage",
  intPct: "Interception percentage",
  table: {
    caption: "Passer rating components (each limited to 0–2.375)",
    component: "Component",
    raw: "Before the limit",
    used: "Used",
  },
  components: {
    a: "a: completions per attempt",
    b: "b: yards per attempt",
    c: "c: touchdowns per attempt",
    d: "d: interceptions per attempt",
  },
  notes: {
    clamped: "At least one component reached the 0 or 2.375 limit, so better (or worse) figures in that area no longer change the rating.",
    perfect: "This is a perfect passer rating of 158.3, the highest the NFL formula allows.",
    scale: "The NFL and NCAA ratings use different scales and cannot be compared with each other.",
  },
};
export type PasserRatingText = typeof text;
export default text;
