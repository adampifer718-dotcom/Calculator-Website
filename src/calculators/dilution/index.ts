import type { CalculatorDefinition } from "@/calculators/framework/types";
import { dilutionEngine } from "./engine";

export const dilution: CalculatorDefinition = {
  id: "dilution",
  slug: "dilution-calculator",
  status: "published",
  title: "Dilution Calculator (C₁V₁ = C₂V₂)",
  shortTitle: "Dilution",
  category: "chemistry",
  collections: ["education-research", "healthcare"],
  summary: "Solve C₁V₁ = C₂V₂ for the stock volume, final concentration, final volume or stock concentration.",
  metaTitle: "Dilution Calculator – C1V1 = C2V2",
  metaDescription: "Solve the dilution equation C1V1 = C2V2 for any one value: stock volume needed, final concentration, final volume or stock concentration.",
  keywords: ["dilution", "c1v1", "c1v1=c2v2", "stock solution", "concentration", "solution prep", "chemistry"],
  popularRank: 34,
  addedOn: "2026-10-14",
  sources: [{"title": "Chemistry 2e, section 3.3: Molarity", "publisher": "OpenStax, Rice University", "url": "https://openstax.org/books/chemistry-2e/pages/3-3-molarity", "usedFor": "Dilution relationship C₁V₁ = C₂V₂."}],
  intro: ["When you dilute a solution, the amount of solute stays the same, so C₁V₁ = C₂V₂.", "Pick the unknown and enter the other three values to plan a dilution."],
  howToUse: ["Choose what you want to find, usually the stock volume needed.", "Enter the other three values, using matching units on each side.", "Read the result and how much solvent to add."],
  formulas: [
    { title: "Dilution equation", expression: "C₁ × V₁ = C₂ × V₂", explanation: "C₁ and V₁ are the stock concentration and volume; C₂ and V₂ the final ones." },
    { title: "Solvent to add", expression: "solvent = V₂ − V₁", explanation: "Add enough solvent to reach the final volume." },
  ],
  examples: [
    {
      title: "Make 100 mL of 0.5 M from a 2 M stock",
      inputs: {"solve": "v1", "c1": 2, "c2": 0.5, "v2": 100},
      steps: ["V₁ = 0.5 × 100 ÷ 2", "= 25 mL of stock, plus 75 mL of solvent"],
      expectedPrimary: 25,
    },
    {
      title: "10 mL of 1 M diluted to 250 mL",
      inputs: {"solve": "c2", "c1": 1, "v1": 10, "v2": 250},
      steps: ["C₂ = 1 × 10 ÷ 250", "= 0.04 M"],
      expectedPrimary: 0.04,
    },
  ],
  assumptions: ["Concentrations must share one unit and volumes must share one unit.", "Assumes volumes are additive, which is a good approximation for dilute aqueous solutions."],
  faqs: [
    { question: "What does C1V1 = C2V2 mean?", answer: "The amount of solute before dilution equals the amount after: concentration times volume is constant." },
    { question: "Can I use percent or mg/mL?", answer: "Yes, as long as C₁ and C₂ use the same unit." },
    { question: "What is a dilution factor?", answer: "The ratio C₁ ÷ C₂. A 1:10 dilution reduces the concentration tenfold." },
  ],
  related: ["molarity-calculator", "percentage-calculator", "significant-figures-calculator"],
  updated: "2026-10-14",
  engine: dilutionEngine,
};
