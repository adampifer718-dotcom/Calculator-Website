import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { probabilityEventsEngine, makeProbabilityEventsEngine } from "./engine";

export const probabilityEvents = defineCalculator({
  id: "probability-events",
  slug: "probability-calculator",
  status: "published",
  title: "Probability Calculator (Two Events)",
  shortTitle: "Probability",
  category: "statistics",
  collections: ["education-research"],
  summary: "Combine the probabilities of two independent or mutually exclusive events: both, either, exactly one or neither.",
  metaTitle: "Probability Calculator – Two Events, And, Or, Neither",
  metaDescription: "Find P(A and B), P(A or B), exactly one and neither for two independent or mutually exclusive events, plus the complements of each event.",
  keywords: ["probability", "probability of two events", "independent events", "mutually exclusive events", "P(A and B)", "P(A or B)", "complement rule", "addition rule", "multiplication rule"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Introductory Statistics, section 3.2: Independent and Mutually Exclusive Events",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/introductory-statistics/pages/3-2-independent-and-mutually-exclusive-events",
      usedFor: "Definitions of independent and mutually exclusive events, P(A and B) = P(A)·P(B) for independent events and P(A and B) = 0 for mutually exclusive ones.",
    },
  ],
  intro: [
    "Many everyday questions combine two chances. What is the probability that both of two machines fail on the same day, or that a customer pays by card or by cash? This calculator answers such questions for two events, A and B.",
    "Enter the probability of each event and say how they relate. Independent events do not affect each other, like two separate coin tosses. Mutually exclusive events cannot both happen, like a single die showing a 2 and a 5. The calculator then gives the chance of both, at least one, exactly one and neither.",
  ],
  howToUse: [
    "Enter P(A) and P(B) as percentages between 0% and 100%.",
    "Choose Independent if knowing that one event happened does not change the chance of the other.",
    "Choose Mutually exclusive if the two events can never happen together. Their probabilities then cannot add up to more than 100%.",
    "Read P(A and B) as the main result and the other combinations below it.",
  ],
  formulas: [
    { title: "Both (independent)", expression: "P(A and B) = P(A) × P(B)", explanation: "The multiplication rule for independent events." },
    { title: "Both (mutually exclusive)", expression: "P(A and B) = 0", explanation: "The events share no outcomes." },
    { title: "At least one", expression: "P(A or B) = P(A) + P(B) − P(A and B)", explanation: "The addition rule. The overlap is subtracted so it is not counted twice." },
    { title: "Exactly one", expression: "P(exactly one) = P(A) + P(B) − 2 × P(A and B)", explanation: "At least one, minus the case where both happen." },
    { title: "Neither and complements", expression: "P(neither) = 1 − P(A or B)\nP(not A) = 1 − P(A)", explanation: "The complement rule: an event either happens or it does not." },
  ],
  examples: [
    {
      title: "Two independent machines that fail on 8% and 5% of days",
      inputs: { pA: 8, pB: 5, relation: "independent" },
      steps: ["P(both fail) = 0.08 × 0.05 = 0.004 = 0.4%", "P(at least one fails) = 0.08 + 0.05 − 0.004 = 0.126 = 12.6%", "P(neither fails) = 1 − 0.126 = 87.4%"],
      expectedPrimary: 0.4,
    },
    {
      title: "A shopper pays by card (62%) or in cash (18%), never both",
      inputs: { pA: 62, pB: 18, relation: "exclusive" },
      steps: ["The events are mutually exclusive, so P(both) = 0", "P(card or cash) = 62% + 18% = 80%", "P(neither, e.g. a voucher) = 100% − 80% = 20%"],
      expectedPrimary: 0,
    },
    {
      title: "Making two free throws when each goes in 75% of the time",
      inputs: { pA: 75, pB: 75, relation: "independent" },
      steps: ["P(both go in) = 0.75 × 0.75 = 0.5625 = 56.25%", "P(exactly one) = 0.75 + 0.75 − 2 × 0.5625 = 37.5%", "P(neither) = 0.25 × 0.25 = 6.25%"],
      expectedPrimary: 56.25,
    },
  ],
  assumptions: [
    "Probabilities are entered as percentages and treated as exact values.",
    "The calculator covers only the two special cases of independent and mutually exclusive events. For events that are neither, you need P(A and B) or a conditional probability, which this tool does not ask for.",
    "Independence is a property of the situation, not of the numbers. Treat events as dependent unless you have a good reason to believe they are independent.",
    "Results are shown to four decimal places of a percent.",
  ],
  faqs: [
    { question: "What is the difference between independent and mutually exclusive?", answer: "Independent events do not influence each other, so both can happen. Mutually exclusive events cannot happen together, so if one occurs the other is ruled out. Two events with non-zero probabilities can never be both independent and mutually exclusive." },
    { question: "Why can't mutually exclusive probabilities add up to more than 100%?", answer: "If A and B never overlap, P(A or B) equals P(A) + P(B). A probability cannot exceed 100%, so neither can that sum. A total above 100% means the events must overlap and are not mutually exclusive." },
    { question: "How do I find the chance that something happens at least once in several tries?", answer: "For independent tries, find the chance it never happens and subtract from 1. With two tries at 30% each, P(neither) = 0.7 × 0.7 = 0.49, so P(at least once) = 51%. This calculator shows that as P(A or B)." },
  ],
  related: ["percentage-calculator", "z-score-calculator", "permutations-combinations-calculator"],
  updated: "2026-10-15",
  engine: probabilityEventsEngine,
  text,
  makeEngine: makeProbabilityEventsEngine,
  translations,
});
