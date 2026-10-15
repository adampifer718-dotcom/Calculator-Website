import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { halfLifeEngine, makeHalfLifeEngine } from "./engine";

export const halfLife = defineCalculator({
  id: "half-life",
  slug: "half-life-calculator",
  status: "published",
  title: "Half-Life Calculator",
  shortTitle: "Half-life",
  category: "chemistry",
  collections: ["education-research", "healthcare"],
  summary: "Solve exponential decay for the remaining amount, starting amount, half-life or elapsed time.",
  metaTitle: "Half-Life Calculator – Remaining Amount & Decay Time",
  metaDescription: "Solve N = N₀(1/2)^(t/T) for the amount left, the starting amount, the half-life or the time elapsed, with the decay constant and mean lifetime.",
  keywords: ["half-life", "radioactive decay", "exponential decay", "decay constant", "mean lifetime", "carbon dating", "first-order kinetics"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Chemistry 2e, 21.3 Radioactive Decay",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/chemistry-2e/pages/21-3-radioactive-decay",
      usedFor: "First-order decay, the definition of half-life and λ = ln 2 ÷ T½.",
    },
  ],
  intro: [
    "A half-life is the time it takes for half of a decaying quantity to disappear. After one half-life 50% is left, after two 25%, after three 12.5%, and so on.",
    "The same rule describes radioactive isotopes and any other process with first-order decay. Enter three of the four values to find the missing one. The calculator also shows the decay constant, the mean lifetime and the share remaining.",
  ],
  howToUse: [
    "Choose what to find: the remaining amount, the initial amount, the half-life or the elapsed time.",
    "Enter the other values. Amounts can be in any unit, and times in any unit, as long as each pair matches.",
    "Read the result in those same units, along with the number of half-lives and the decay constant.",
  ],
  formulas: [
    { title: "Decay law", expression: "N = N₀ × (1/2)^(t ÷ T½)", explanation: "N₀ is the starting amount, t the elapsed time and T½ the half-life." },
    { title: "Half-life and elapsed time", expression: "T½ = t × ln 2 ÷ ln(N₀ ÷ N);  t = T½ × log₂(N₀ ÷ N)", explanation: "The decay law rearranged with logarithms." },
    { title: "Decay constant and mean lifetime", expression: "λ = ln 2 ÷ T½;  τ = 1 ÷ λ = T½ ÷ ln 2", explanation: "λ is the fraction decaying per unit time; τ is the average lifetime, about 1.4427 half-lives." },
  ],
  examples: [
    {
      title: "40 g of cobalt-60 after 15.81 years (T½ = 5.27 years)",
      inputs: { solve: "N", initial: 40, halfLife: 5.27, elapsed: 15.81 },
      steps: ["t ÷ T½ = 15.81 ÷ 5.27 = 3 half-lives", "N = 40 × (1/2)³ = 5 g"],
      expectedPrimary: 40 * 0.5 ** (15.81 / 5.27),
    },
    {
      title: "Half-life from 1,200 counts falling to 150 in 36 hours",
      inputs: { solve: "T", initial: 1200, remaining: 150, elapsed: 36 },
      steps: ["N₀ ÷ N = 1,200 ÷ 150 = 8", "T½ = 36 × ln 2 ÷ ln 8 = 36 ÷ 3 = 12 hours"],
      expectedPrimary: 12,
    },
    {
      title: "Age of a sample with 30% of its carbon-14 left (T½ = 5,730 years)",
      inputs: { solve: "t", initial: 100, remaining: 30, halfLife: 5730 },
      steps: ["N₀ ÷ N = 100 ÷ 30 ≈ 3.333", "t = 5,730 × log₂(3.333) ≈ 9,952.8 years"],
      expectedPrimary: 5730 * Math.log2(100 / 30),
    },
  ],
  assumptions: [
    "Decay is first order: the half-life stays the same however much material is left.",
    "Large samples follow the curve closely; for a handful of atoms, decay is random and the result is only an average.",
    "This is a general math tool. It does not give medication, dosing or radiation-safety advice; ask a qualified professional for those.",
  ],
  faqs: [
    { question: "Does the time unit matter?", answer: "Only that the half-life and the elapsed time use the same unit. Enter both in days, or both in years, and the result comes out in that unit." },
    { question: "How much is left after 10 half-lives?", answer: "(1/2)¹⁰ = 1/1,024, or just under 0.1% of the starting amount." },
    { question: "What is the difference between half-life and mean lifetime?", answer: "The half-life is when half the material is gone. The mean lifetime is the average time before a single atom decays, which is longer: about 1.4427 times the half-life." },
  ],
  related: ["doubling-time-calculator", "exponent-calculator", "log-calculator"],
  updated: "2026-10-15",
  engine: halfLifeEngine,
  text,
  makeEngine: makeHalfLifeEngine,
  translations,
});
