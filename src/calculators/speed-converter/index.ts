import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeSpeedConverterEngine, speedConverterEngine } from "./engine";

export const speedConverter = defineCalculator({
  id: "speed-converter",
  slug: "speed-converter",
  status: "published",
  title: "Speed Converter",
  shortTitle: "Speed",
  category: "conversion",
  collections: ["education-research"],
  summary: "Convert a speed between meters per second, kilometers per hour, miles per hour, feet per second, knots and centimeters per second.",
  metaTitle: "Speed Converter – km/h, mph, m/s, ft/s and Knots",
  metaDescription: "Convert speed between km/h, mph, m/s, ft/s, knots and cm/s with exact factors, and see your value in every unit at once in a single table.",
  keywords: ["speed converter", "km/h to mph", "mph to km/h", "m/s to km/h", "knots to mph", "feet per second", "velocity units"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "NIST Guide to the SI (Special Publication 811), Appendix B: Conversion Factors",
      publisher: "National Institute of Standards and Technology (NIST)",
      usedFor: "Conversion factors for the mile per hour, foot per second and knot in meters per second.",
    },
    {
      title: "Nautical mile (Glossary of Meteorology)",
      publisher: "American Meteorological Society",
      url: "https://glossary.ametsoc.org/wiki/nautical-mile/",
      usedFor: "The international nautical mile of 1,852 m, which defines the knot as 1,852 m per hour.",
    },
  ],
  intro: [
    "Speeds turn up in many units: road signs use km/h or mph, physics problems use m/s, pilots and sailors use knots, and lab work may use cm/s. This converter changes a value from one of these units to another and lists it in all six at once.",
    "Each unit is a fixed number of meters per second, so the conversion is a single multiplication and division. Every factor is exact; for instance, one mile per hour is exactly 0.44704 m/s because a mile is exactly 1,609.344 m.",
  ],
  howToUse: [
    "Type the speed you want to convert.",
    "Choose its unit in From and the unit you want in To.",
    "Read the converted speed, or look in the table for the other units.",
  ],
  formulas: [
    { title: "Conversion through meters per second", expression: "result = value × (m/s per from-unit) ÷ (m/s per to-unit)", explanation: "Each unit is first turned into meters per second and then into the target unit." },
    {
      title: "Exact factors",
      expression: "1 km/h = 1/3.6 m/s ≈ 0.2778 m/s\n1 mph = 0.44704 m/s\n1 ft/s = 0.3048 m/s\n1 kn = 1,852/3,600 m/s ≈ 0.5144 m/s\n1 cm/s = 0.01 m/s",
      explanation: "They follow from 1 km = 1,000 m, 1 mi = 1,609.344 m, 1 ft = 0.3048 m, 1 nautical mile = 1,852 m and 1 h = 3,600 s.",
    },
  ],
  examples: [
    {
      title: "Highway speed of 100 km/h in mph",
      inputs: { value: 100, from: "kmh", to: "mph" },
      steps: ["100 km/h = 100 ÷ 3.6 ≈ 27.778 m/s", "27.778 ÷ 0.44704 ≈ 62.137 mph"],
      expectedPrimary: "62.13711922 mph",
    },
    {
      title: "A boat at 30 knots in km/h",
      inputs: { value: 30, from: "kn", to: "kmh" },
      steps: ["1 kn = 1.852 km/h", "30 × 1.852 = 55.56 km/h"],
      expectedPrimary: "55.56 km/h",
    },
    {
      title: "25 mph in feet per second",
      inputs: { value: 25, from: "mph", to: "fts" },
      steps: ["25 × 0.44704 = 11.176 m/s", "11.176 ÷ 0.3048 ≈ 36.667 ft/s"],
      expectedPrimary: "36.66666667 ft/s",
    },
  ],
  assumptions: [
    "Miles and feet are the international units (1 ft = 0.3048 m). The knot uses the international nautical mile of 1,852 m.",
    "Running or walking pace, such as minutes per kilometer, is not included because it is the inverse of speed rather than a multiple of it. Use the Running Pace Calculator for pace.",
    "Results are shown to 10 significant digits.",
  ],
  faqs: [
    { question: "How do I convert km/h to m/s?", answer: "Divide by 3.6. For example, 90 km/h ÷ 3.6 = 25 m/s. To go from m/s to km/h, multiply by 3.6." },
    { question: "Is a knot faster than a mile per hour?", answer: "Yes. A knot is one nautical mile per hour, and a nautical mile (1,852 m) is longer than a statute mile (1,609.344 m), so 1 knot is about 1.151 mph." },
    { question: "Why is pace not in the list?", answer: "Pace is time per distance, so doubling your speed halves your pace. That inverse relationship cannot be written as a single conversion factor, so pace is handled by a separate calculator." },
  ],
  related: ["speed-distance-time-calculator", "running-pace-calculator", "length-converter"],
  updated: "2026-10-15",
  engine: speedConverterEngine,
  text,
  makeEngine: makeSpeedConverterEngine,
  translations,
});
