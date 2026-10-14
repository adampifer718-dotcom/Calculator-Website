import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { ohmsLawEngine, makeOhmsLawEngine } from "./engine";

export const ohmsLaw = defineCalculator({
  id: "ohms-law",
  slug: "ohms-law-calculator",
  status: "published",
  title: "Ohm's Law Calculator",
  shortTitle: "Ohm's Law",
  category: "physics",
  collections: ["education-research", "manufacturing-operations", "construction-engineering"],
  summary: "Find voltage, current, resistance and power from any two of V, I and R.",
  metaTitle: "Ohm's Law Calculator – Voltage, Current, Resistance",
  metaDescription: "Use Ohm's law to find voltage, current or resistance from the other two values, plus the electrical power dissipated, with formulas and examples.",
  keywords: ["ohms law", "voltage", "current", "resistance", "power", "watts", "amps", "volts", "electronics"],
  popularRank: 31,
  addedOn: "2026-10-14",
  sources: [{"title": "University Physics Volume 2, section 9.4: Ohm's Law", "publisher": "OpenStax, Rice University", "url": "https://openstax.org/books/university-physics-volume-2/pages/9-4-ohms-law", "usedFor": "Ohm's law and its limits."}, {"title": "University Physics Volume 2, section 9.5: Electrical Energy and Power", "publisher": "OpenStax, Rice University", "url": "https://openstax.org/books/university-physics-volume-2/pages/9-5-electrical-energy-and-power", "usedFor": "Power formulas P = IV = I²R = V²/R."}],
  intro: ["Ohm's law relates the voltage across a resistor, the current through it and its resistance: V = I × R.", "Enter any two values to find the third, along with the power the component dissipates."],
  howToUse: ["Choose which two values you know.", "Enter them in volts, amperes or ohms.", "Read the missing value and the power in watts."],
  formulas: [
    { title: "Ohm's law", expression: "V = I × R\nI = V ÷ R\nR = V ÷ I", explanation: "V in volts, I in amperes, R in ohms." },
    { title: "Power", expression: "P = V × I = I² × R = V² ÷ R", explanation: "Power in watts." },
  ],
  examples: [
    {
      title: "12 V across 4 Ω",
      inputs: {"known": "VR", "voltage": 12, "resistance": 4},
      steps: ["I = 12 ÷ 4 = 3 A", "P = 12 × 3 = 36 W"],
      expectedPrimary: 3,
    },
    {
      title: "0.5 A through 220 Ω",
      inputs: {"known": "IR", "current": 0.5, "resistance": 220},
      steps: ["V = 0.5 × 220", "= 110 V"],
      expectedPrimary: 110,
    },
  ],
  assumptions: ["Applies to ohmic components whose resistance does not change with current.", "For AC circuits with reactance (capacitors, inductors), use impedance instead.", "Working on mains-voltage circuits is dangerous; follow local electrical codes and use a qualified electrician."],
  faqs: [
    { question: "What does Ohm's law say?", answer: "The current through a conductor is proportional to the voltage across it: V = I × R." },
    { question: "How do I calculate power from current and resistance?", answer: "P = I² × R. A 2 A current through 10 Ω dissipates 40 W." },
    { question: "Does Ohm's law apply to LEDs?", answer: "Not directly. LEDs are non-linear, so use the forward voltage and a series resistor calculation." },
  ],
  related: ["electricity-cost-calculator", "kinetic-energy-calculator", "speed-distance-time-calculator"],
  updated: "2026-10-14",
  engine: ohmsLawEngine,
  text,
  makeEngine: makeOhmsLawEngine,
  translations,
});
