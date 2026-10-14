import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { molarityEngine, makeMolarityEngine } from "./engine";

export const molarity = defineCalculator({
  id: "molarity",
  slug: "molarity-calculator",
  status: "published",
  title: "Molarity Calculator",
  shortTitle: "Molarity",
  category: "chemistry",
  collections: ["education-research", "healthcare"],
  summary: "Calculate the molar concentration of a solution from the solute mass, molar mass and volume.",
  metaTitle: "Molarity Calculator – Molar Concentration (mol/L)",
  metaDescription: "Calculate molarity in mol/L from the mass of solute, its molar mass and the solution volume, with moles and millimolar shown too.",
  keywords: ["molarity", "molar concentration", "mol/L", "moles", "solution", "chemistry", "concentration"],
  popularRank: 33,
  addedOn: "2026-10-14",
  sources: [{"title": "Chemistry 2e, section 3.3: Molarity", "publisher": "OpenStax, Rice University", "url": "https://openstax.org/books/chemistry-2e/pages/3-3-molarity", "usedFor": "Definition of molarity and the moles-from-mass relationship."}],
  intro: ["Molarity is the number of moles of solute per liter of solution. It is the most common way to express concentration in chemistry labs.", "Enter the mass you weighed, the solute's molar mass and the final volume of the solution."],
  howToUse: ["Enter the mass of solute in grams.", "Enter its molar mass in g/mol.", "Enter the final solution volume and choose liters or milliliters.", "Read the molarity and the moles of solute."],
  formulas: [
    { title: "Moles", expression: "n = mass ÷ molar mass", explanation: "Gives moles from grams." },
    { title: "Molarity", expression: "M = n ÷ V", explanation: "V is the solution volume in liters." },
  ],
  examples: [
    {
      title: "58.44 g of NaCl in 1 L",
      inputs: {"mass": 58.44, "molarMass": 58.44, "volume": 1, "volumeUnit": "L"},
      steps: ["n = 58.44 ÷ 58.44 = 1 mol", "M = 1 ÷ 1 = 1 mol/L"],
      expectedPrimary: 1,
    },
    {
      title: "5 g of glucose in 250 mL",
      inputs: {"mass": 5, "molarMass": 180.16, "volume": 250, "volumeUnit": "mL"},
      steps: ["n = 5 ÷ 180.16 ≈ 0.02775 mol", "M = 0.02775 ÷ 0.25 ≈ 0.111 mol/L"],
      expectedPrimary: 5/180.16/0.25,
    },
  ],
  assumptions: ["Volume is the final volume of the solution after the solute dissolves.", "Molar mass must be for the exact form used, including any water of hydration."],
  faqs: [
    { question: "What is the difference between molarity and molality?", answer: "Molarity is moles per liter of solution; molality is moles per kilogram of solvent." },
    { question: "How do I make a 1 M solution?", answer: "Dissolve one molar mass in grams of solute and add solvent until the total volume is 1 liter." },
    { question: "What does mM mean?", answer: "Millimolar: one thousandth of a mole per liter." },
  ],
  related: ["dilution-calculator", "significant-figures-calculator", "scientific-notation-calculator"],
  updated: "2026-10-14",
  engine: molarityEngine,
  text,
  makeEngine: makeMolarityEngine,
  translations,
});
