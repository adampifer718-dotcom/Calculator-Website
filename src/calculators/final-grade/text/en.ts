const text = {
  current: "Current grade",
  currentHelp: "Your grade in the course so far, before the final exam.",
  weight: "Final exam weight",
  weightHelp: "How much of the overall grade the final is worth, as a percentage. Check your syllabus.",
  desired: "Grade you want overall",
  weightTooHigh: "The final must be worth less than 100% of the grade; otherwise your current grade does not count.",
  needed: "Score needed on the final",
  caption: "To finish with {desired} when the final counts for {weight} and you have {current} now.",
  ifFull: "Overall grade if you score 100% on the final",
  ifZero: "Overall grade if you score 0% on the final",
  currentShare: "Current grade's share of the overall grade",
  notes: {
    over: "You would need more than 100% on the final. That is only possible with extra credit; otherwise this goal is out of reach.",
    secured: "You already have this grade secured: even a score of 0% on the final keeps you at or above your goal.",
    rounding: "Instructors may round or curve grades, or weight the final differently. Check your syllabus.",
  },
};
export type FinalGradeText = typeof text;
export default text;
