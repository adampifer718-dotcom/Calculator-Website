import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makePhEngine, phEngine } from "./engine";

export const ph = defineCalculator({
  id: "ph",
  slug: "ph-calculator",
  status: "published",
  title: "pH Calculator",
  shortTitle: "pH",
  category: "chemistry",
  collections: ["education-research", "agriculture-gardening"],
  summary: "Find pH, pOH, [H⁺] and [OH⁻] from a hydrogen ion concentration, a pH or pOH, or the concentration of a strong acid, strong base or weak acid.",
  metaTitle: "pH Calculator – pH, pOH, [H⁺] and [OH⁻] at 25 °C",
  metaDescription: "Calculate pH and pOH from [H⁺], from a strong acid or base concentration, or from a weak acid's concentration and Ka or pKa, with [H⁺] and [OH⁻].",
  keywords: ["pH calculator", "pOH calculator", "hydrogen ion concentration", "calculate pH", "weak acid pH", "strong acid pH", "pKa", "Ka", "acidic or basic"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "Chemistry: Atoms First 2e (OpenStax), Chapter 14 Key Equations",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/chemistry-atoms-first-2e/pages/14-key-equations",
      usedFor: "Kw = 1.0 × 10⁻¹⁴ at 25 °C, pH = −log[H₃O⁺], pOH = −log[OH⁻] and pH + pOH = 14.00.",
    },
    {
      title: "Chemistry 2e (OpenStax), 14.3 Relative Strengths of Acids and Bases",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases",
      usedFor: "The acid ionization constant Ka and equilibrium calculations for weak acids, including percent ionization.",
    },
  ],
  intro: [
    "pH measures how acidic or basic a water solution is. It is the negative base-10 logarithm of the hydrogen ion concentration, so every step of one pH unit is a tenfold change: a solution at pH 3 has ten times more H⁺ than one at pH 4. At 25 °C, pH 7 is neutral, lower is acidic and higher is basic.",
    "This calculator converts between pH, pOH, [H⁺] and [OH⁻], and works out the pH of a strong acid, a strong base or a weak acid from its concentration. The strong acid and base formulas include the ions from water itself, so even extremely dilute solutions give a sensible answer.",
  ],
  howToUse: [
    "Choose what you know: [H⁺], pH, pOH, or the concentration of a strong acid, strong base or weak acid.",
    "Enter the value. Concentrations are in mol/L and accept e-notation, so 3.2 × 10⁻⁵ can be typed as 3.2e-5.",
    "For a weak acid, also enter its strength as pKa or Ka.",
    "Read the pH, pOH, both ion concentrations and whether the solution is acidic, neutral or basic.",
  ],
  formulas: [
    { title: "pH and pOH", expression: "pH = −log₁₀[H⁺]   pOH = −log₁₀[OH⁻]\npH + pOH = 14   (Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25 °C)", explanation: "Concentrations are in mol/L." },
    { title: "Strong monoprotic acid", expression: "[H⁺] = (C + √(C² + 4Kw)) ÷ 2", explanation: "From the charge balance [H⁺] = C + [OH⁻]. For C well above 10⁻⁶ mol/L this is simply [H⁺] ≈ C. A strong base uses the same formula for [OH⁻]." },
    { title: "Weak monoprotic acid", expression: "Ka = x² ÷ (C − x)   ⇒   x = [H⁺] = (−Ka + √(Ka² + 4·Ka·C)) ÷ 2", explanation: "The exact solution of the quadratic, without the x ≪ C shortcut, ignoring H⁺ from water. Ka = 10^(−pKa)." },
  ],
  examples: [
    {
      title: "A 0.025 mol/L hydrochloric acid solution",
      inputs: { mode: "strongAcid", concentration: "0.025" },
      steps: ["[H⁺] = (0.025 + √(0.025² + 4 × 10⁻¹⁴)) ÷ 2 ≈ 0.025 mol/L", "pH = −log₁₀(0.025) ≈ 1.602", "pOH = 14 − 1.602 = 12.398"],
      expectedPrimary: 1.6020599913210136,
    },
    {
      title: "A 0.05 mol/L weak acid with pKa 4.76",
      inputs: { mode: "weakAcid", concentration: "0.05", constantType: "pka", pka: 4.76 },
      steps: ["Ka = 10^(−4.76) ≈ 1.738 × 10⁻⁵", "[H⁺] = (−Ka + √(Ka² + 4 × Ka × 0.05)) ÷ 2 ≈ 9.235 × 10⁻⁴ mol/L", "pH = −log₁₀(9.235 × 10⁻⁴) ≈ 3.035, with about 1.85% of the acid ionized"],
      expectedPrimary: 3.0345632077482056,
    },
    {
      title: "A solution with [H⁺] = 2.5 × 10⁻⁹ mol/L",
      inputs: { mode: "hydrogen", hydrogen: "2.5e-9" },
      steps: ["pH = −log₁₀(2.5 × 10⁻⁹) ≈ 8.602", "pOH = 14 − 8.602 = 5.398", "The pH is above 7, so the solution is basic"],
      expectedPrimary: 8.602059991327963,
    },
  ],
  assumptions: [
    "Everything is calculated for 25 °C, where Kw = 1.0 × 10⁻¹⁴ and neutral water has pH 7. At other temperatures Kw changes, and so do the neutral point and pH + pOH.",
    "Concentrations are used in place of activities. That works well for dilute solutions but becomes inaccurate above roughly 0.1 mol/L, and pH values below 0 or above 14 are only rough.",
    "Acids and bases are monoprotic: each one releases a single H⁺ or OH⁻. The weak-acid mode ignores the H⁺ from water, so it is not reliable when the acid is extremely dilute or extremely weak.",
  ],
  faqs: [
    { question: "Why is the pH of 10⁻⁸ mol/L HCl not 8?", answer: "Because an acid cannot make water basic. At that dilution, water itself supplies about 10⁻⁷ mol/L of H⁺, more than the acid does. The formula used here includes water's contribution and gives a pH of about 6.98." },
    { question: "What is the difference between Ka and pKa?", answer: "pKa is −log₁₀ of Ka, just as pH is −log₁₀ of [H⁺]. A smaller pKa (larger Ka) means a stronger acid. A pKa of 4.76 is the same as a Ka of about 1.74 × 10⁻⁵." },
    { question: "Can pH be negative?", answer: "Yes. A strong acid more concentrated than 1 mol/L has [H⁺] above 1, so its pH is below 0. At such concentrations, though, real solutions deviate strongly from the simple formulas, so treat the number as a rough guide." },
  ],
  related: ["molarity-calculator", "dilution-calculator", "log-calculator"],
  updated: "2026-10-22",
  engine: phEngine,
  text,
  makeEngine: makePhEngine,
  translations,
});
