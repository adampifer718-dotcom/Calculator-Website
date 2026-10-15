const text = {
  pA: "Probability of A, P(A)",
  pB: "Probability of B, P(B)",
  pHelp: "As a percentage from 0% to 100%.",
  relation: "How are A and B related?",
  relationHelp: "Independent: one happening does not change the chance of the other. Mutually exclusive: they cannot both happen.",
  relationOptions: { independent: "Independent", exclusive: "Mutually exclusive" },
  exclusiveTooLarge: "Mutually exclusive events cannot have P(A) + P(B) above 100%. Here the sum is {sum}.",
  and: "P(A and B): both happen",
  or: "P(A or B): at least one happens",
  exactlyOne: "P(exactly one of A or B)",
  neither: "P(neither A nor B)",
  notA: "P(not A)",
  notB: "P(not B)",
  independentCaption: "For independent events, P(A and B) = P(A) × P(B).",
  exclusiveCaption: "Mutually exclusive events never happen together, so P(A and B) = 0.",
  certainNote: "With P(A) + P(B) = 100%, one of the two mutually exclusive events is certain to happen.",
};
export type ProbabilityEventsText = typeof text;
export default text;
