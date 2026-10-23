import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeMolarMassEngine, molarMassEngine } from "./engine";

export const molarMass = defineCalculator({
  id: "molar-mass",
  slug: "molar-mass-calculator",
  status: "published",
  title: "Molar Mass Calculator",
  shortTitle: "Molar Mass",
  category: "chemistry",
  collections: ["education-research", "healthcare"],
  summary: "Type a chemical formula, including brackets and hydrates, and get its molar mass in g/mol with a breakdown of each element's share by mass.",
  metaTitle: "Molar Mass Calculator – g/mol From a Chemical Formula",
  metaDescription: "Find the molar mass of any chemical formula in g/mol, with brackets and hydrates such as CuSO4·5H2O, plus each element's atom count and mass percent.",
  keywords: ["molar mass calculator", "molecular weight calculator", "g/mol", "formula mass", "molar mass of compound", "mass percent composition", "hydrate molar mass"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "Abridged Standard Atomic Weights",
      publisher: "Commission on Isotopic Abundances and Atomic Weights (CIAAW), IUPAC",
      url: "https://ciaaw.org/abridged-atomic-weights.htm",
      usedFor: "The abridged standard atomic weights and conventional values used for each element.",
    },
  ],
  intro: [
    "The molar mass of a substance is the mass of one mole of it, in grams per mole. For a compound it is simply the sum of the atomic weights of all the atoms in its formula: water, H2O, is two hydrogens and one oxygen, so about 2 × 1.008 + 15.999 = 18.015 g/mol.",
    "Type any formula and this calculator counts the atoms for you, including groups in round or square brackets such as Ca(OH)2 or K4[Fe(CN)6] and hydrates such as CuSO4·5H2O. It also shows how much of the total mass each element contributes.",
  ],
  howToUse: [
    "Type the formula with correct capital letters: Co is cobalt, while CO is carbon monoxide.",
    "Put the count after each element or bracket group, for example Al2(SO4)3. A missing count means 1.",
    "For a hydrate, separate the parts with ·, . or * and put the number of water molecules in front, as in MgSO4·7H2O.",
    "Read the molar mass and the table of atom counts, mass contributions and mass percentages.",
  ],
  formulas: [
    { title: "Molar mass", expression: "M = Σ (nᵢ × Aᵣ,ᵢ)  g/mol", explanation: "nᵢ is the number of atoms of element i in the formula and Aᵣ,ᵢ is its standard atomic weight." },
    { title: "Groups and hydrates", expression: "(X)ₖ → every count inside × k\nA·nB → atoms of A + n × atoms of B", explanation: "Bracket multipliers apply to everything inside, including nested groups; a hydrate coefficient applies to the part after the dot." },
    { title: "Mass percent", expression: "% element i = nᵢ × Aᵣ,ᵢ ÷ M × 100", explanation: "The share of the molar mass that comes from each element." },
  ],
  examples: [
    {
      title: "Glucose, C6H12O6",
      inputs: { formula: "C6H12O6" },
      steps: ["Carbon: 6 × 12.011 = 72.066", "Hydrogen: 12 × 1.008 = 12.096", "Oxygen: 6 × 15.999 = 95.994", "M = 72.066 + 12.096 + 95.994 = 180.156 g/mol"],
      expectedPrimary: 180.156,
    },
    {
      title: "Copper(II) sulfate pentahydrate, CuSO4·5H2O",
      inputs: { formula: "CuSO4·5H2O" },
      steps: ["CuSO4: 63.546 + 32.06 + 4 × 15.999 = 159.602", "5 H2O: 5 × (2 × 1.008 + 15.999) = 5 × 18.015 = 90.075", "M = 159.602 + 90.075 = 249.677 g/mol", "Copper makes up 63.546 ÷ 249.677 ≈ 25.45% of the mass"],
      expectedPrimary: 249.677,
    },
    {
      title: "Potassium ferrocyanide, K4[Fe(CN)6]",
      inputs: { formula: "K4[Fe(CN)6]" },
      steps: ["Potassium: 4 × 39.098 = 156.392", "Iron: 1 × 55.845 = 55.845", "(CN)6: 6 × (12.011 + 14.007) = 156.108", "M = 156.392 + 55.845 + 156.108 = 368.345 g/mol"],
      expectedPrimary: 368.345,
    },
  ],
  assumptions: [
    "Atomic weights are the IUPAC/CIAAW abridged standard atomic weights. Where an element's atomic weight varies in nature and is given as a range, the conventional single value is used, so the last digit may differ from other tables.",
    "Elements without a standard atomic weight, such as technetium, promethium, polonium and most elements heavier than bismuth except thorium, protactinium and uranium, are rejected because their molar mass depends on the isotope.",
    "Charges, isotopes (such as D or ¹³C) and state symbols are not supported. The formula is treated as a neutral formula unit with natural isotope abundances; the mass of the electrons gained or lost by an ion is negligible.",
  ],
  faqs: [
    { question: "Is molar mass the same as molecular weight?", answer: "They have the same number. Molecular weight (relative molecular mass) has no unit, while molar mass is expressed in grams per mole. Water has a molecular weight of 18.015 and a molar mass of 18.015 g/mol." },
    { question: "How do I enter a hydrate?", answer: "Write the salt, then a dot (·, . or *), then the number of water molecules and H2O, for example CuSO4·5H2O or Na2CO3*10H2O. The coefficient multiplies everything in the part after the dot." },
    { question: "Why does my textbook give a slightly different value?", answer: "Tables round atomic weights differently, and some use older values. Chlorine, for example, is listed as 35.45 here but as 35.453 in older tables, which changes the last decimal of NaCl." },
  ],
  related: ["molarity-calculator", "dilution-calculator", "ideal-gas-law-calculator"],
  updated: "2026-10-22",
  engine: molarMassEngine,
  text,
  makeEngine: makeMolarMassEngine,
  translations,
});
