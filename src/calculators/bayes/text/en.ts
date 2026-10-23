const text = {
  prior: "Prior probability P(A)",
  priorHelp: "How likely A is before any evidence, for example how common a condition is in the group being tested.",
  likelihood: "Likelihood P(B | A)",
  likelihoodHelp: "How often the evidence B appears when A is true, for example a test's sensitivity (true-positive rate).",
  falseAlarm: "False-alarm rate P(B | not A)",
  falseAlarmHelp: "How often B appears when A is false, for example a test's false-positive rate (100% minus its specificity).",
  zeroEvidence: "With these values the evidence B can never occur (P(B) = 0), so P(A | B) is undefined. Raise P(A) or one of the rates above 0%.",
  posterior: "Posterior probability P(A | B)",
  caption: "The chance that A is true once B has been observed.",
  pB: "Overall probability of the evidence P(B)",
  pNotAGivenB: "P(not A | B)",
  pAGivenNotB: "P(A | not B)",
  undefinedNotB: "Undefined: B always occurs, so “not B” never happens",
  tableCaption: "Out of 10,000 cases",
  tableColumns: { outcome: "Outcome", cases: "Cases" },
  rows: {
    tp: "True positives (A and B)",
    fp: "False positives (not A, but B)",
    fn: "False negatives (A, but not B)",
    tn: "True negatives (not A and not B)",
  },
  liftNote: "Seeing B multiplies the odds of A by {ratio} (the likelihood ratio P(B | A) ÷ P(B | not A)).",
  rareNote: "When A is rare, most cases with B can still be false alarms even if the test is accurate.",
  note: "Figures out of 10,000 are expected counts and may be fractional.",
};
export type BayesText = typeof text;
export default text;
