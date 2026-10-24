import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makePercentYieldEngine, percentYieldEngine } from "./engine";

export const percentYield = defineCalculator({
  id: "percent-yield",
  slug: "percent-yield-calculator",
  status: "published",
  title: "Percent Yield Calculator",
  shortTitle: "Percent yield",
  category: "chemistry",
  collections: ["education-research"],
  summary: "Find the percent yield of a reaction from the actual and theoretical yield, or work out the theoretical yield from moles and a balanced equation.",
  metaTitle: "Percent Yield Calculator – Actual vs Theoretical Yield",
  metaDescription: "Calculate percent yield from actual and theoretical yield, or get the theoretical yield from moles of limiting reactant, coefficients and a formula.",
  keywords: ["percent yield", "theoretical yield", "actual yield", "limiting reactant", "stoichiometry", "reaction yield", "chemistry lab"],
  addedOn: "2026-10-24",
  sources: [
    {
      title: "Chemistry 2e, 4.4 Reaction Yields",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/chemistry-2e/pages/4-4-reaction-yields",
      usedFor: "Definitions of theoretical, actual and percent yield, and the limiting reactant.",
    },
  ],
  intro: [
    "The theoretical yield is the amount of product a balanced equation predicts when the limiting reactant is used up completely. The actual yield is what you collect. The percent yield compares the two and shows how efficient the reaction and the work-up were.",
    "If you already know the theoretical yield, enter both masses. Otherwise enter the moles of the limiting reactant, the coefficients from the balanced equation and the product's formula or molar mass, and the calculator works out the theoretical yield first.",
  ],
  howToUse: [
    "Choose whether you know the theoretical yield or want it calculated from moles.",
    "Pick the mass unit and enter the actual yield you collected.",
    "Enter the theoretical yield, or the moles of limiting reactant, both coefficients and the product formula (or its molar mass).",
    "Read the percent yield, the theoretical yield and the mass lost.",
  ],
  formulas: [
    { title: "Percent yield", expression: "percent yield = actual yield ÷ theoretical yield × 100%", explanation: "Both yields must be in the same unit, so the units cancel." },
    { title: "Theoretical yield from moles", expression: "theoretical (g) = n(limiting) × (product coefficient ÷ reactant coefficient) × M(product)", explanation: "The coefficient ratio converts moles of the limiting reactant into moles of product; the molar mass converts moles into grams." },
    { title: "Mass lost", expression: "loss = theoretical yield − actual yield", explanation: "Also shown as a share of the theoretical yield, which equals 100% minus the percent yield." },
  ],
  examples: [
    {
      title: "Crystals recovered from a lab synthesis",
      inputs: { mode: "direct", unit: "g", actual: 4.25, theoretical: 5.6 },
      steps: ["Percent yield = 4.25 g ÷ 5.6 g × 100%", "≈ 75.89%", "Mass lost = 5.6 − 4.25 = 1.35 g"],
      expectedPrimary: 75.89285714285715,
    },
    {
      title: "Aspirin from 0.0200 mol of salicylic acid",
      inputs: { mode: "stoichiometry", unit: "g", actual: 2.95, moles: 0.02, reactantCoef: 1, productCoef: 1, massSource: "formula", formula: "C9H8O4" },
      steps: ["One salicylic acid gives one aspirin, so the ratio is 1 ÷ 1.", "M(C9H8O4) = 9 × 12.011 + 8 × 1.008 + 4 × 15.999 = 180.159 g/mol", "Theoretical yield = 0.0200 × 180.159 ≈ 3.6032 g", "Percent yield = 2.95 ÷ 3.6032 × 100% ≈ 81.87%"],
      expectedPrimary: 81.87212406818422,
    },
    {
      title: "Ammonia when hydrogen is the limiting reactant",
      inputs: { mode: "stoichiometry", unit: "g", actual: 8.1, moles: 0.9, reactantCoef: 3, productCoef: 2, massSource: "molarMass", molarMass: 17.031 },
      steps: ["N₂ + 3 H₂ → 2 NH₃, so 0.90 mol H₂ × 2 ÷ 3 = 0.60 mol NH₃", "Theoretical yield = 0.60 × 17.031 = 10.2186 g", "Percent yield = 8.1 ÷ 10.2186 × 100% ≈ 79.27%"],
      expectedPrimary: 79.26721860137397,
    },
  ],
  assumptions: [
    "The limiting reactant is known. If you are not sure, work out the product each reactant could make; the one giving the least product is limiting.",
    "The equation is balanced and gives one main product. Side products are not counted.",
    "Molar masses from a formula use IUPAC abridged standard atomic weights. Results are only as precise as the masses you measure.",
    "The actual yield should be the dry, purified product. Solvent or impurities make the yield look higher than it is.",
  ],
  faqs: [
    { question: "Can percent yield be over 100%?", answer: "Not for a pure, dry product, because mass cannot be created. A result above 100% usually means the product is still wet, contains impurities or unreacted starting material, or that a mass was measured or recorded wrongly." },
    { question: "Why is my yield lower than expected?", answer: "Side reactions use up reactants, many reactions stop before completion, and some product is always lost while filtering, transferring or recrystallizing. Yields well below 100% are normal, especially for multistep work." },
    { question: "Do I use moles or grams?", answer: "Percent yield itself compares masses (or moles) of the product, and the unit cancels. To calculate the theoretical yield you need moles, because the coefficients of a balanced equation relate amounts in moles, not grams." },
  ],
  related: ["molar-mass-calculator", "molarity-calculator", "ideal-gas-law-calculator"],
  updated: "2026-10-24",
  engine: percentYieldEngine,
  text,
  makeEngine: makePercentYieldEngine,
  translations,
});
