import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { resistorsEngine, makeResistorsEngine } from "./engine";

export const seriesParallelResistors = defineCalculator({
  id: "series-parallel-resistors",
  slug: "resistor-calculator",
  status: "published",
  title: "Series and Parallel Resistor Calculator",
  shortTitle: "Resistors in series/parallel",
  category: "physics",
  collections: ["education-research", "manufacturing-operations"],
  summary: "Find the total resistance of up to 50 resistors connected in series or in parallel, plus the parallel conductance.",
  metaTitle: "Series and Parallel Resistor Calculator – Total Ω",
  metaDescription: "Add up to 50 resistors in series or parallel to get the equivalent resistance in Ω, kΩ or MΩ, plus the total conductance in siemens.",
  keywords: ["resistor calculator", "resistors in series", "resistors in parallel", "equivalent resistance", "total resistance", "parallel resistance", "conductance", "siemens", "ohms"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "University Physics Volume 2, section 10.2: Resistors in Series and Parallel",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel",
      usedFor: "Equivalent resistance of resistors in series (the sum) and in parallel (the reciprocal of the sum of reciprocals).",
    },
  ],
  intro: [
    "When resistors are joined end to end, in series, the same current flows through each one and their resistances simply add. When they are connected side by side, in parallel, each gets the same voltage and the current splits between them, so the combination resists less than any single resistor.",
    "Enter a list of resistor values to get both totals at once. Choose the connection you are building to make it the main result, and pick the unit you typed the values in. The totals are shown in the easiest unit to read and also in plain ohms.",
  ],
  howToUse: [
    "Choose whether you typed the values in ohms, kilohms or megohms.",
    "Choose series or parallel to set which total is the main result.",
    "Enter 1 to 50 resistances, separated by commas, spaces or new lines.",
    "Read the total resistance, the other connection's total and the parallel conductance in siemens.",
  ],
  formulas: [
    { title: "Series", expression: "R_total = R₁ + R₂ + … + Rₙ", explanation: "The same current flows through every resistor, so the voltage drops add up." },
    { title: "Parallel", expression: "1 ÷ R_total = 1 ÷ R₁ + 1 ÷ R₂ + … + 1 ÷ Rₙ", explanation: "Each resistor has the full voltage across it, so the currents (and conductances) add up." },
    { title: "Conductance", expression: "G = 1 ÷ R, in siemens (S)", explanation: "The total parallel conductance is the sum of the individual conductances." },
  ],
  examples: [
    {
      title: "220 Ω, 470 Ω and 1 kΩ in series",
      inputs: { unit: "ohm", connection: "series", values: "220, 470, 1000" },
      steps: ["R_total = 220 + 470 + 1,000 = 1,690 Ω", "Shown as 1.69 kΩ", "In parallel the same three would give about 130.325 Ω"],
      expectedPrimary: "1.69 kΩ",
    },
    {
      title: "4.7 kΩ, 10 kΩ and 22 kΩ in parallel",
      inputs: { unit: "kohm", connection: "parallel", values: "4.7, 10, 22" },
      steps: ["G = 1/4,700 + 1/10,000 + 1/22,000 ≈ 0.000358221 S", "R_total = 1 ÷ 0.000358221 ≈ 2,791.58 Ω", "Shown as 2.79158 kΩ, less than the smallest resistor (4.7 kΩ)"],
      expectedPrimary: "2.79158 kΩ",
    },
    {
      title: "Three equal 330 Ω resistors in parallel",
      inputs: { unit: "ohm", connection: "parallel", values: "330 330 330" },
      steps: ["Equal resistors in parallel: R_total = R ÷ n", "330 ÷ 3 = 110 Ω", "In series they would give 990 Ω"],
      expectedPrimary: "110 Ω",
    },
  ],
  assumptions: [
    "Resistors are ideal: their values do not change with temperature, current or frequency, and the connecting wires have no resistance.",
    "All resistors are in one simple series chain or one parallel group. For mixed networks, combine each group step by step and enter the partial totals.",
    "Real resistors have a tolerance (often ±1% or ±5%), so a measured total can differ from the calculated one.",
    "Results are shown to 6 significant digits in the readable unit and 12 significant digits in ohms.",
  ],
  faqs: [
    { question: "Why is the parallel resistance smaller than every resistor?", answer: "Each resistor added in parallel gives the current another path, which increases the total conductance. The total resistance, its reciprocal, therefore drops below the smallest single value. Two 1 kΩ resistors in parallel give 500 Ω." },
    { question: "Is there a shortcut for two resistors in parallel?", answer: "Yes: R_total = (R₁ × R₂) ÷ (R₁ + R₂), the product over the sum. For 6 Ω and 3 Ω that is 18 ÷ 9 = 2 Ω. For more than two resistors, add the reciprocals instead." },
    { question: "What is a siemens?", answer: "The siemens (S) is the SI unit of conductance, the reciprocal of the ohm. A 100 Ω resistor has a conductance of 0.01 S. It replaces the older name “mho”." },
  ],
  related: ["ohms-law-calculator", "electricity-cost-calculator", "scientific-notation-calculator"],
  updated: "2026-10-15",
  engine: resistorsEngine,
  text,
  makeEngine: makeResistorsEngine,
  translations,
});
