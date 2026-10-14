const text = {
  total: "Total questions or points",
  mode: "I know the number",
  modes: { correct: "Correct (points earned)", wrong: "Wrong (points lost)" },
  correct: "Correct answers or points earned",
  wrong: "Wrong answers or points lost",
  overTotal: "Cannot be more than the total.",
  grade: "Grade",
  caption: "{earned} out of {total}.",
  letter: "Letter grade (A–F scale)",
  lost: "Points lost",
  note: "Letter grades use the common scale A ≥ 90%, B ≥ 80%, C ≥ 70%, D ≥ 60%, F below 60%. Your school's scale may differ.",
};
export type TestGradeText = typeof text;
export default text;
