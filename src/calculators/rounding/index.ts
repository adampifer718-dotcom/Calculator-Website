import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeRoundingEngine, roundingEngine } from "./engine";

export const rounding = defineCalculator({
  id: "rounding",
  slug: "rounding-calculator",
  status: "published",
  title: "Rounding Calculator",
  shortTitle: "Rounding",
  category: "math",
  collections: ["education-research", "accounting-finance"],
  summary: "Round a number to decimal places, a whole number, the nearest 10, 100 or 1,000, or any increment, with six exact rounding methods.",
  metaTitle: "Rounding Calculator – Decimal Places, Half Even and More",
  metaDescription: "Round any number exactly to decimal places, tens, hundreds or a custom increment like 0.05, using half up, banker's rounding, ceiling, floor or truncation.",
  keywords: ["rounding calculator", "round to decimal places", "round to nearest", "banker's rounding", "round half even", "round half up", "ceiling", "floor", "truncate", "round to nearest 0.05"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "decimal — Decimal fixed point and floating point arithmetic",
      publisher: "Python Software Foundation",
      url: "https://docs.python.org/3.11/library/decimal.html",
      usedFor: "Definitions of the rounding modes (half up, half even, half down, ceiling, floor and round down) used to check the results.",
    },
    {
      title: "Good Laboratory Practice 9: Rounding (NIST IR 6969)",
      publisher: "National Institute of Standards and Technology (NIST)",
      url: "https://www.nist.gov/document/glp-9-rounding-20190506docx",
      usedFor: "The round-half-to-even rule for exact ties used in measurement practice.",
    },
  ],
  intro: [
    "Rounding replaces a number with a nearby, simpler one: 3.14159 becomes 3.14, a price of 19.97 becomes 19.95 in 5-cent steps, and 87,654 becomes 88,000 to the nearest thousand. This calculator rounds to a number of decimal places, to a whole number, to the nearest 10, 100 or 1,000, or to any increment you choose.",
    "It works on the digits you type, not on a binary approximation, so 1.005 really rounds to 1.01 with half up, a case where many spreadsheets and programming languages give 1.00. Six methods cover school rounding, banker's rounding, and always rounding up, down or toward zero. To round to significant figures instead, use the Significant Figures Calculator.",
  ],
  howToUse: [
    "Type the number exactly as you have it. Every digit is kept.",
    "Choose what to round to: decimal places, a whole number, 10, 100, 1,000 or a custom increment such as 0.05 or 0.25.",
    "Choose the rounding method. Half up is the one taught in most schools; half even is common in finance and statistics.",
    "Read the rounded number, how far it moved from the original, and the two candidates it was chosen from.",
  ],
  formulas: [
    { title: "Rounding to an increment", expression: "k = x ÷ q\nrounded = round(k) × q", explanation: "q is the increment: 0.01 for 2 decimal places, 1 for a whole number, 10, 100, 1,000 or your own value. The method decides how round() treats k." },
    { title: "Tie rules", expression: "Half up: 2.5 → 3, −2.5 → −3\nHalf even: 2.5 → 2, 3.5 → 4\nHalf down: 2.5 → 2, −2.5 → −2", explanation: "These only differ when the number is exactly halfway between two candidates. Otherwise all three round to the nearer one." },
    { title: "Directed rounding", expression: "Ceiling: 2.1 → 3, −2.9 → −2\nFloor: 2.9 → 2, −2.1 → −3\nTruncate: 2.9 → 2, −2.9 → −2", explanation: "Ceiling always moves toward +∞, floor toward −∞, and truncation simply drops the extra digits (toward zero)." },
    { title: "Exact decimal arithmetic", expression: "1.005 = 1005 × 10⁻³ exactly", explanation: "The number and the increment are scaled to whole numbers by the same power of 10 and divided exactly, so no binary rounding error can change a tie." },
  ],
  examples: [
    {
      title: "Round 1.005 to 2 decimal places, half up",
      inputs: { number: "1.005", target: "places", places: 2, method: "halfUp" },
      steps: ["The candidates are 1.00 and 1.01", "The dropped part, 0.005, is exactly half of 0.01", "Half up sends the tie away from zero: 1.01"],
      expectedPrimary: "1.01",
    },
    {
      title: "Round 7.325 to 2 decimal places with banker's rounding",
      inputs: { number: "7.325", target: "places", places: 2, method: "halfEven" },
      steps: ["The candidates are 7.32 and 7.33", "7.325 is exactly halfway", "Half even picks the candidate whose last digit is even: 7.32"],
      expectedPrimary: "7.32",
    },
    {
      title: "Round 3.38 hours to the nearest quarter hour",
      inputs: { number: "3.38", target: "increment", increment: "0.25", method: "halfUp" },
      steps: ["3.38 ÷ 0.25 = 13.52", "13.52 rounds to 14", "14 × 0.25 = 3.50 hours"],
      expectedPrimary: "3.50",
    },
  ],
  assumptions: [
    "The number is rounded exactly as typed, with up to 40 significant digits. Nothing is converted to binary floating point.",
    "Half up and half down are symmetric around zero: −2.5 half up gives −3. Ceiling and floor are not symmetric.",
    "When the rounded value is zero, it is shown as 0 without a sign.",
    "Results are shown with as many decimals as the rounding step, so rounding 2.5 to 2 decimal places shows 2.50.",
  ],
  faqs: [
    { question: "What is banker's rounding?", answer: "It is the half even method: an exact tie goes to the even neighbor, so 2.5 becomes 2 and 3.5 becomes 4. Over many values, ties round up and down equally often, which avoids a small upward bias in totals." },
    { question: "Why does my spreadsheet round 1.005 to 1.00?", answer: "Most software stores numbers in binary, where 1.005 is really 1.00499999999999989…, just below the tie. This calculator works with the decimal digits themselves, so 1.005 is exactly halfway and half up gives 1.01." },
    { question: "How do I round a price to the nearest 5 cents?", answer: "Choose “Nearest custom increment” and enter 0.05. For example, 19.97 becomes 19.95 and 19.98 becomes 20.00 with half up." },
  ],
  related: ["significant-figures-calculator", "scientific-notation-calculator", "percentage-calculator"],
  updated: "2026-10-22",
  engine: roundingEngine,
  text,
  makeEngine: makeRoundingEngine,
  translations,
});
