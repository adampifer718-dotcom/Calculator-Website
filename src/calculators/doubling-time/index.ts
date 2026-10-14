import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { doublingTimeEngine, makeDoublingTimeEngine } from "./engine";

export const doublingTime = defineCalculator({
  id: "doubling-time",
  slug: "doubling-time-calculator",
  status: "published",
  title: "Doubling Time Calculator",
  shortTitle: "Doubling Time",
  category: "biology",
  collections: ["education-research", "healthcare", "agriculture-gardening"],
  summary: "Find the doubling (generation) time and growth rate of an exponentially growing population.",
  metaTitle: "Doubling Time Calculator – Generation Time and Growth",
  metaDescription: "Calculate the doubling time, number of generations and growth rate of a population, such as bacteria in a culture, from start and end counts.",
  keywords: ["doubling time", "generation time", "bacterial growth", "exponential growth", "population", "growth rate", "biology"],
  popularRank: 35,
  addedOn: "2026-10-14",
  sources: [{"title": "Microbiology, section 9.1: How Microbes Grow", "publisher": "OpenStax, Rice University", "url": "https://openstax.org/books/microbiology/pages/9-1-how-microbes-grow", "usedFor": "Generation time and exponential growth of bacterial populations."}],
  intro: ["During exponential growth, a population doubles at a steady rate. The doubling (or generation) time is how long each doubling takes.", "Enter the starting and final counts and the time between them."],
  howToUse: ["Enter the initial count.", "Enter the final count, which must be higher.", "Enter the elapsed time and choose the unit.", "Read the doubling time, generations and growth rate."],
  formulas: [
    { title: "Generations", expression: "n = log₂(N ÷ N₀)", explanation: "The number of doublings needed to go from N₀ to N." },
    { title: "Doubling time", expression: "g = t ÷ n", explanation: "Elapsed time divided by the number of generations." },
    { title: "Growth rate constant", expression: "k = ln(N ÷ N₀) ÷ t", explanation: "Used in N = N₀ × e^(k·t)." },
  ],
  examples: [
    {
      title: "1,000 cells to 64,000 in 6 hours",
      inputs: {"initial": 1000, "final": 64000, "time": 6, "unit": "hours"},
      steps: ["N ÷ N₀ = 64, so n = log₂ 64 = 6", "g = 6 h ÷ 6 = 1 hour"],
      expectedPrimary: 1,
    },
    {
      title: "500 to 2,000 in 90 minutes",
      inputs: {"initial": 500, "final": 2000, "time": 90, "unit": "minutes"},
      steps: ["n = log₂ 4 = 2", "g = 90 ÷ 2 = 45 minutes"],
      expectedPrimary: 45,
    },
  ],
  assumptions: ["Assumes constant exponential growth, such as the log phase of a culture; lag, stationary and death phases are not modeled.", "Counts can be cells, colony-forming units, optical-density proxies or any quantity that grows exponentially."],
  faqs: [
    { question: "What is generation time?", answer: "The time for a population to double, often around 20 minutes for E. coli in ideal lab conditions." },
    { question: "Why use logarithms?", answer: "Exponential growth multiplies the population by 2 each generation, so log₂ counts the doublings." },
    { question: "Does this work for money or populations of people?", answer: "The math is the same for any steady exponential growth, but real populations rarely grow at a constant rate." },
  ],
  related: ["log-calculator", "exponent-calculator", "compound-interest-calculator"],
  updated: "2026-10-14",
  engine: doublingTimeEngine,
  text,
  makeEngine: makeDoublingTimeEngine,
  translations,
});
