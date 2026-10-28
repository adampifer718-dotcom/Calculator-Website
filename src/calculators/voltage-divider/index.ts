import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeVoltageDividerEngine, voltageDividerEngine } from "./engine";

export const voltageDivider = defineCalculator({
  id: "voltage-divider",
  slug: "voltage-divider-calculator",
  status: "published",
  title: "Voltage Divider Calculator",
  shortTitle: "Voltage Divider",
  category: "physics",
  collections: ["education-research", "manufacturing-operations"],
  summary: "Find the output voltage of a two-resistor divider, or the resistor needed for a target voltage, with current, power, load effect and the nearest E24 value.",
  metaTitle: "Voltage Divider Calculator – Vout, R1, R2 and Load",
  metaDescription: "Calculate a resistive voltage divider's output voltage, or solve for R1 or R2, with divider current, resistor power, the loaded output and the nearest E24 value.",
  keywords: ["voltage divider", "resistor divider", "vout formula", "potential divider", "r1 r2 calculator", "divider ratio", "loaded voltage divider", "e24 resistor"],
  addedOn: "2026-10-28",
  sources: [
    {
      title: "Fundamentals of Electrical Engineering I, section 3.2: voltage and current dividers",
      publisher: "UMass Amherst Libraries Open Books",
      url: "https://openbooks.library.umass.edu/funee/chapter/3-2/",
      usedFor: "The voltage divider relation Vout = Vin × R2 ÷ (R1 + R2) and how a load resistance lowers the output.",
    },
    {
      title: "DIN EN 60063: Preferred number series for resistors and capacitors (IEC 60063:2015)",
      publisher: "DIN / International Electrotechnical Commission",
      url: "https://6sku3uaup9f9.din.de/en/standard/din-en-60063/240741276",
      usedFor: "The E24 series of 24 preferred resistor values per decade used for the nearest standard value.",
    },
  ],
  intro: [
    "A voltage divider is two resistors in series across a voltage. The point between them sits at a fixed fraction of the input voltage, set only by the ratio of the resistors. Dividers are used to scale a signal down for a microcontroller input, set a bias point or make a reference.",
    "This calculator finds the output voltage from both resistors, or the resistor you need for a target output. It also shows the current through the divider, the power each resistor dissipates, what happens when a load is connected, and the closest standard E24 resistor value.",
  ],
  howToUse: [
    "Choose what to solve for: the output voltage, the bottom resistor R2 or the top resistor R1.",
    "Enter the input voltage and the known values, choosing Ω, kΩ or MΩ for each resistor.",
    "Optionally enter the load resistance connected across the output to see how much it pulls the voltage down.",
    "Read the result, the divider current and power, and, when solving for a resistor, the nearest E24 value and the output it would give.",
  ],
  formulas: [
    { title: "Unloaded output", expression: "Vout = Vin × R2 ÷ (R1 + R2)", explanation: "R1 is the top resistor (input to output) and R2 the bottom one (output to ground)." },
    { title: "Solving for a resistor", expression: "R2 = R1 × Vout ÷ (Vin − Vout)\nR1 = R2 × (Vin − Vout) ÷ Vout", explanation: "Rearranged from the divider equation. Vout must be between 0 and Vin." },
    { title: "Current and power", expression: "I = Vin ÷ (R1 + R2)\nP1 = I² × R1, P2 = I² × R2", explanation: "The same current flows through both resistors when nothing is connected to the output." },
    { title: "Loaded output", expression: "R2′ = R2 × RL ÷ (R2 + RL)\nVout,loaded = Vin × R2′ ÷ (R1 + R2′)", explanation: "A load RL is in parallel with R2, which lowers the effective bottom resistance and so the output." },
  ],
  examples: [
    {
      title: "12 V across 10 kΩ and 4.7 kΩ",
      inputs: { solve: "vout", vin: 12, r1: 10, r1Unit: "kohm", r2: 4.7, r2Unit: "kohm", load: null, loadUnit: "kohm" },
      steps: ["Vout = 12 × 4.7 ÷ (10 + 4.7) = 56.4 ÷ 14.7", "Vout ≈ 3.8367 V", "I = 12 V ÷ 14.7 kΩ ≈ 0.8163 mA"],
      expectedPrimary: 3.8367346938775517,
    },
    {
      title: "R2 for 3.3 V from 5 V with R1 = 10 kΩ",
      inputs: { solve: "r2", vin: 5, vout: 3.3, r1: 10, r1Unit: "kohm", load: null, loadUnit: "kohm" },
      steps: ["R2 = 10 kΩ × 3.3 ÷ (5 − 3.3) = 33 ÷ 1.7 kΩ", "R2 ≈ 19.4118 kΩ", "The nearest E24 value is 20 kΩ, giving 5 × 20 ÷ 30 ≈ 3.3333 V (1.01% high)"],
      expectedPrimary: "19.4118 kΩ",
    },
    {
      title: "R1 for 2.5 V from 9 V with R2 = 1 kΩ and a 10 kΩ load",
      inputs: { solve: "r1", vin: 9, vout: 2.5, r2: 1, r2Unit: "kohm", load: 10, loadUnit: "kohm" },
      steps: ["R1 = 1 kΩ × (9 − 2.5) ÷ 2.5 = 2.6 kΩ", "With the load, R2 ∥ RL = 1 × 10 ÷ 11 ≈ 0.9091 kΩ", "Loaded Vout = 9 × 0.9091 ÷ (2.6 + 0.9091) ≈ 2.3316 V, about 6.74% lower"],
      expectedPrimary: "2.6 kΩ",
    },
  ],
  assumptions: [
    "The resistors are ideal and exact. Real resistors have a tolerance (5% for E24 parts), so the actual output can differ from the calculated value.",
    "Without a load resistance the divider is treated as unloaded. Anything connected to the output, including a voltmeter, draws current and lowers the voltage; keeping the load at least 10 times the divider's output resistance keeps the error small.",
    "An unloaded divider is not a power supply. Its output sags under load and it draws current all the time, so use a voltage regulator to power a circuit.",
    "The input is a steady DC voltage. Frequency effects such as stray capacitance are not modelled.",
  ],
  faqs: [
    { question: "Which resistor is R1 and which is R2?", answer: "R1 connects the input to the output point and R2 connects the output point to ground. The output is taken across R2, so a larger R2 gives a higher output." },
    { question: "Why is my measured voltage lower than calculated?", answer: "Whatever is connected to the output acts as a resistor in parallel with R2, which lowers the output. Enter its resistance as the load to see the effect, or use smaller divider resistors so the load matters less." },
    { question: "How do I choose the size of the resistors?", answer: "The ratio sets the voltage, while the size sets the current. Small resistors waste more power but resist loading; large ones save power but are sensitive to the load and to input leakage. Check the power figures against the resistors' ratings." },
  ],
  related: ["ohms-law-calculator", "resistor-calculator", "resistor-color-code-calculator"],
  updated: "2026-10-28",
  engine: voltageDividerEngine,
  text,
  makeEngine: makeVoltageDividerEngine,
  translations,
});
