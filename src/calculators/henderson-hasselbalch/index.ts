import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { hendersonHasselbalchEngine, makeHendersonHasselbalchEngine } from "./engine";

export const hendersonHasselbalch = defineCalculator({
  id: "henderson-hasselbalch",
  slug: "buffer-ph-calculator",
  status: "published",
  title: "Buffer pH Calculator (Henderson–Hasselbalch)",
  shortTitle: "Buffer pH",
  category: "chemistry",
  collections: ["education-research", "healthcare"],
  summary: "Find the pH of a buffer from its acid and base concentrations, or the base-to-acid ratio and base concentration needed for a target pH.",
  metaTitle: "Buffer pH Calculator – Henderson–Hasselbalch Equation",
  metaDescription: "Use pH = pKa + log([A⁻]/[HA]) to get a buffer's pH, the base-to-acid ratio for a target pH or the base concentration to add, with common pKa presets.",
  keywords: ["henderson-hasselbalch", "buffer ph", "buffer calculator", "pka", "conjugate base", "acetate buffer", "phosphate buffer", "tris buffer"],
  addedOn: "2026-10-24",
  sources: [
    {
      title: "Chemistry 2e, 14.6 Buffers",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/chemistry-2e/pages/14-6-buffers",
      usedFor: "The Henderson–Hasselbalch equation, its conditions of use and buffer capacity.",
    },
    {
      title: "Buffer Reference Center",
      publisher: "Sigma-Aldrich (Merck)",
      url: "https://www.sigmaaldrich.com/US/en/technical-documents/protocol/protein-biology/protein-concentration-and-buffer-exchange/buffer-reference-center",
      usedFor: "pKa values of common buffer substances at 25 °C.",
    },
  ],
  intro: [
    "A buffer is a mixture of a weak acid HA and its conjugate base A⁻. It keeps the pH fairly steady when small amounts of strong acid or base are added, because each form neutralizes one of them. The Henderson–Hasselbalch equation links the buffer's pH to the acid's pKa and the ratio of the two forms.",
    "Use this calculator to find the pH of a buffer you have made, the base-to-acid ratio that gives a target pH, or how concentrated the base form must be for a given acid concentration. Presets cover acetate, bicarbonate, phosphate, Tris and ammonium buffers.",
  ],
  howToUse: [
    "Choose what to calculate: the pH, the ratio, or the base concentration.",
    "Pick a buffer pair from the list, or choose Other and type the pKa.",
    "Enter the concentrations in mol/L (e-notation such as 5e-3 works) or the target pH.",
    "Read the result and check whether the pH sits within the effective range pKa ± 1.",
  ],
  formulas: [
    { title: "Henderson–Hasselbalch equation", expression: "pH = pKa + log₁₀([A⁻] ÷ [HA])", explanation: "When the two forms are equal, the log term is 0 and pH = pKa." },
    { title: "Ratio for a target pH", expression: "[A⁻] ÷ [HA] = 10^(pH − pKa)", explanation: "Each pH unit above the pKa multiplies the ratio by 10." },
    { title: "Effective range", expression: "pKa − 1 ≤ pH ≤ pKa + 1", explanation: "Within this range neither form is more than 10 times the other, so the buffer can absorb both added acid and added base." },
  ],
  examples: [
    {
      title: "Acetate buffer with more base than acid",
      inputs: { solve: "ph", acid: "acetic", base: "0.15", acidConc: "0.1" },
      steps: ["Ratio = 0.15 ÷ 0.10 = 1.5", "pH = 4.76 + log₁₀(1.5) = 4.76 + 0.1761", "pH ≈ 4.936"],
      expectedPrimary: 4.936091259055681,
    },
    {
      title: "Phosphate buffer at pH 7.40",
      inputs: { solve: "ratio", acid: "phosphate", targetPh: 7.4 },
      steps: ["pH − pKa = 7.40 − 7.21 = 0.19", "[HPO₄²⁻] ÷ [H₂PO₄⁻] = 10^0.19 ≈ 1.549"],
      expectedPrimary: "1.549",
    },
    {
      title: "Tris base needed for pH 7.8",
      inputs: { solve: "base", acid: "tris", acidConc: "0.05", targetPh: 7.8 },
      steps: ["Ratio = 10^(7.8 − 8.07) = 10^−0.27 ≈ 0.5370", "[Tris base] = 0.05 mol/L × 0.5370 ≈ 0.02685 mol/L"],
      expectedPrimary: "0.02685 mol/L",
    },
  ],
  assumptions: [
    "Concentrations stand in for activities. In concentrated or high-salt solutions the real pH can differ by a few tenths.",
    "Both forms must be present at concentrations much larger than the H⁺ and OH⁻ concentrations, so very dilute buffers and pH values far from the pKa are less accurate.",
    "The preset pKa values apply at 25 °C. pKa changes with temperature and ionic strength, which matters especially for Tris. Check the pH of a real buffer with a calibrated meter.",
    "For acids with several pKa values (such as phosphoric and carbonic acid), only the pair you choose is considered.",
  ],
  faqs: [
    { question: "Why is the useful range pKa ± 1?", answer: "At one pH unit from the pKa, one form is ten times the other. Beyond that, the buffer has very little of one form left, so it can no longer absorb much added acid or base in that direction." },
    { question: "Which buffer should I choose for a given pH?", answer: "Pick a pair whose pKa is close to the pH you need, ideally within about half a unit. For pH 7.4, for example, phosphate (pKa 7.21) suits better than acetate (pKa 4.76)." },
    { question: "Can I use moles instead of concentrations?", answer: "Yes. Both forms are in the same volume, so the ratio of moles equals the ratio of concentrations. Enter the amounts in moles in both fields and the pH is the same." },
  ],
  related: ["ph-calculator", "molarity-calculator", "dilution-calculator"],
  updated: "2026-10-24",
  engine: hendersonHasselbalchEngine,
  text,
  makeEngine: makeHendersonHasselbalchEngine,
  translations,
});
