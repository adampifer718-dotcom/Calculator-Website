import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { idealGasLawEngine, makeIdealGasLawEngine } from "./engine";

export const idealGasLaw = defineCalculator({
  id: "ideal-gas-law",
  slug: "ideal-gas-law-calculator",
  status: "published",
  title: "Ideal Gas Law Calculator",
  shortTitle: "Ideal gas law",
  category: "chemistry",
  collections: ["education-research"],
  summary: "Solve PV = nRT for pressure, volume, moles or temperature, with unit conversions built in.",
  metaTitle: "Ideal Gas Law Calculator – Solve PV = nRT",
  metaDescription: "Solve PV = nRT for pressure, volume, amount of gas or temperature. Mix Pa, kPa, bar, atm, mmHg, liters, m³, kelvin, °C and °F freely.",
  keywords: ["ideal gas law", "pv=nrt", "gas constant", "pressure", "moles", "kelvin", "gas laws", "chemistry"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "CODATA Recommended Values of the Fundamental Physical Constants: 2018 (wall chart)",
      publisher: "National Institute of Standards and Technology (NIST)",
      url: "https://physics.nist.gov/cuu/pdf/wall_2018.pdf",
      usedFor: "Exact value of the molar gas constant R = Nₐk = 8.314462618… J/(mol·K) and the Avogadro constant.",
    },
    {
      title: "Chemistry, Chapter 9 summary: Gases",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/chemistry/pages/9-summary",
      usedFor: "The ideal gas law and its breakdown at low temperature and high pressure.",
    },
  ],
  intro: [
    "The ideal gas law links four properties of a gas: pressure, volume, amount in moles and absolute temperature. Knowing any three lets you find the fourth.",
    "Pick the value to solve for, enter the other three in whatever units you have, and the calculator converts everything to SI units, solves PV = nRT and converts the answer back.",
  ],
  howToUse: [
    "Choose what to find: pressure, volume, amount or temperature.",
    "Enter the three known values and choose a unit for each.",
    "Set the unit you want for the answer with the matching unit list.",
    "Read the result, the same value in other units and the molar volume.",
  ],
  formulas: [
    { title: "Ideal gas law", expression: "P × V = n × R × T", explanation: "P in pascals, V in cubic meters, n in moles and T in kelvin." },
    { title: "Gas constant", expression: "R = Nₐ × k = 8.31446261815324 J/(mol·K)", explanation: "Exact since the 2019 SI redefinition, because Nₐ and k are fixed." },
    { title: "Kelvin", expression: "T(K) = T(°C) + 273.15 = (T(°F) − 32) × 5/9 + 273.15", explanation: "The law needs absolute temperature, so Celsius and Fahrenheit are converted first." },
  ],
  examples: [
    {
      title: "Pressure of 2 mol in a 50 L tank at 25 °C",
      inputs: { solve: "P", moles: 2, volume: 50, volumeUnit: "L", temperature: 25, temperatureUnit: "C", pressureUnit: "kPa" },
      steps: ["T = 25 + 273.15 = 298.15 K and V = 0.05 m³", "P = 2 × 8.314463 × 298.15 ÷ 0.05 ≈ 99,158 Pa", "≈ 99.158 kPa"],
      expectedPrimary: (2 * 8.31446261815324 * 298.15) / 0.05 / 1000,
    },
    {
      title: "Volume of 1 mol at 0 °C and 1 atm",
      inputs: { solve: "V", moles: 1, pressure: 1, pressureUnit: "atm", temperature: 0, temperatureUnit: "C", volumeUnit: "L" },
      steps: ["T = 273.15 K and P = 101,325 Pa", "V = 1 × 8.314463 × 273.15 ÷ 101,325 ≈ 0.022414 m³", "≈ 22.414 L"],
      expectedPrimary: (8.31446261815324 * 273.15) / 101325 / 0.001,
    },
    {
      title: "Temperature of 0.5 mol in 10 L at 200 kPa",
      inputs: { solve: "T", moles: 0.5, pressure: 200, pressureUnit: "kPa", volume: 10, volumeUnit: "L", temperatureUnit: "C" },
      steps: ["T = 200,000 × 0.01 ÷ (0.5 × 8.314463) ≈ 481.09 K", "481.09 − 273.15 ≈ 207.94 °C"],
      expectedPrimary: (200000 * 0.01) / (0.5 * 8.31446261815324) - 273.15,
    },
  ],
  assumptions: [
    "The gas is treated as ideal: its molecules take up no space and do not attract each other.",
    "Real gases deviate noticeably at high pressure, at low temperature and close to the point where they condense. Use an equation of state such as van der Waals for those cases.",
    "Pressure is absolute pressure, not gauge pressure. Add atmospheric pressure to a gauge reading first.",
  ],
  faqs: [
    { question: "Why must temperature be in kelvin?", answer: "The law is proportional to absolute temperature. At 0 °C a gas still has plenty of thermal energy, so Celsius or Fahrenheit values would give wrong answers. The calculator converts them for you." },
    { question: "Which value of R should I use?", answer: "In SI units R = 8.314462618 J/(mol·K). With liters and atmospheres it is about 0.082057 L·atm/(mol·K). This tool always works in SI internally, so you do not need to choose." },
    { question: "What is the molar volume of a gas?", answer: "It is the volume one mole occupies. For an ideal gas at 0 °C and 1 atm it is about 22.414 L; at 25 °C and 1 bar it is about 24.79 L." },
  ],
  related: ["molarity-calculator", "temperature-converter", "density-calculator"],
  updated: "2026-10-15",
  engine: idealGasLawEngine,
  text,
  makeEngine: makeIdealGasLawEngine,
  translations,
});
