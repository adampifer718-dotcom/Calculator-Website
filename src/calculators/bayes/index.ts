import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { bayesEngine, makeBayesEngine } from "./engine";

export const bayes = defineCalculator({
  id: "bayes",
  slug: "bayes-theorem-calculator",
  status: "published",
  title: "Bayes' Theorem Calculator",
  shortTitle: "Bayes' theorem",
  category: "statistics",
  collections: ["education-research", "healthcare"],
  summary: "Update a prior probability with new evidence and see the result as natural frequencies out of 10,000 cases.",
  metaTitle: "Bayes' Theorem Calculator – Posterior Probability P(A|B)",
  metaDescription: "Find P(A|B) from a prior, a likelihood and a false-alarm rate. See P(B), P(A|not B) and true and false positives out of 10,000 cases.",
  keywords: ["bayes theorem", "bayes rule", "posterior probability", "conditional probability", "positive predictive value", "false positive", "sensitivity", "prevalence"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "Diagnostic Testing Accuracy: Sensitivity, Specificity, Predictive Values and Likelihood Ratios (StatPearls)",
      publisher: "National Library of Medicine, NCBI Bookshelf",
      url: "https://ncbi.nlm.nih.gov/books/NBK557491",
      usedFor: "How sensitivity, the false-positive rate and prevalence combine into predictive values via a 2×2 table.",
    },
    {
      title: "Introductory Statistics, 3.4 Contingency Tables",
      publisher: "OpenStax",
      url: "https://openstax.org/books/introductory-statistics/pages/3-4-contingency-tables",
      usedFor: "Conditional probabilities read from a table of counts.",
    },
  ],
  intro: [
    "Bayes' theorem tells you how much to believe something after seeing evidence. It combines how likely the idea was to begin with (the prior) with how much more often the evidence turns up when the idea is true than when it is false.",
    "The classic case is a screening test. Even a test that catches most cases can produce more false alarms than real positives when the condition is rare. Enter three percentages to get the updated probability, and a breakdown of 10,000 imaginary cases that makes the result easy to check by hand.",
  ],
  howToUse: [
    "Enter the prior P(A): how common A is before you look at the evidence, such as the prevalence of a condition.",
    "Enter P(B | A): how often the evidence appears when A is true, such as a test's sensitivity.",
    "Enter P(B | not A): how often the evidence appears anyway when A is false, such as the false-positive rate.",
    "Read P(A | B), then use the table of 10,000 cases to see where the positives come from.",
  ],
  formulas: [
    { title: "Bayes' theorem", expression: "P(A | B) = P(B | A) · P(A) ÷ P(B)", explanation: "The posterior is the share of all cases with B that also have A." },
    { title: "Total probability", expression: "P(B) = P(B | A) · P(A) + P(B | not A) · (1 − P(A))", explanation: "B can occur with A (true positives) or without it (false positives)." },
    { title: "Negative result", expression: "P(A | not B) = (1 − P(B | A)) · P(A) ÷ (1 − P(B))", explanation: "The chance that A is still true when B is not observed (false negatives among all negatives)." },
  ],
  examples: [
    {
      title: "A screening test for a condition that affects 2% of people",
      inputs: { prior: 2, likelihood: 95, falseAlarm: 8 },
      steps: ["Out of 10,000 people, 200 have the condition and 95% of them test positive: 190 true positives.", "Of the 9,800 without it, 8% test positive: 784 false positives.", "P(A | B) = 190 ÷ (190 + 784) ≈ 19.51%"],
      expectedPrimary: 19.50718685831622,
    },
    {
      title: "A word that flags spam email",
      inputs: { prior: 40, likelihood: 30, falseAlarm: 2 },
      steps: ["P(B) = 0.30 × 0.40 + 0.02 × 0.60 = 0.132", "P(A | B) = 0.12 ÷ 0.132 ≈ 90.91%"],
      expectedPrimary: 90.9090909090909,
    },
    {
      title: "A very rare condition and an accurate test",
      inputs: { prior: 0.1, likelihood: 99, falseAlarm: 1 },
      steps: ["Out of 10,000 people: 9.9 true positives and 99.9 false positives.", "P(A | B) = 9.9 ÷ 109.8 ≈ 9.02%, even though the test is right 99% of the time."],
      expectedPrimary: 9.01639344262295,
    },
  ],
  assumptions: [
    "The three percentages are taken as exact. In practice a test's sensitivity and false-positive rate are estimates, and the prior depends on who is being tested.",
    "The prior should describe the group the case comes from. Someone tested because of symptoms has a higher prior than a random member of the public.",
    "The diagnostic examples illustrate the arithmetic only. Interpreting a real medical test result needs a clinician, who can weigh symptoms, history and follow-up tests.",
  ],
  faqs: [
    { question: "Why is P(A | B) so low when the test is accurate?", answer: "When A is rare, the few true cases are outnumbered by the many people without A, and even a small false-positive rate among that large group produces more false alarms than true positives." },
    { question: "How do sensitivity and specificity map to the inputs?", answer: "Sensitivity is P(B | A). The false-alarm rate P(B | not A) is 100% minus the specificity, so a specificity of 97% means a false-alarm rate of 3%." },
    { question: "What does the 10,000 cases table show?", answer: "It turns the probabilities into expected counts of true positives, false positives, false negatives and true negatives. P(A | B) is the true positives divided by all positives." },
  ],
  related: ["probability-calculator", "percentage-calculator", "p-value-calculator"],
  updated: "2026-10-22",
  engine: bayesEngine,
  text,
  makeEngine: makeBayesEngine,
  translations,
});
