import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeResistorColorCodeEngine, resistorColorCodeEngine } from "./engine";

export const resistorColorCode = defineCalculator({
  id: "resistor-color-code",
  slug: "resistor-color-code-calculator",
  status: "published",
  title: "Resistor Color Code Calculator",
  shortTitle: "Resistor color code",
  category: "physics",
  collections: ["education-research", "manufacturing-operations"],
  summary: "Read the value, tolerance and temperature coefficient of a 4-, 5- or 6-band resistor from its colours, or find the colour bands for a resistance.",
  metaTitle: "Resistor Color Code Calculator – 4, 5 and 6 Bands",
  metaDescription: "Decode 4-, 5- and 6-band resistor colours into ohms, tolerance range and temperature coefficient, or find the colour bands for a value such as 4.7k.",
  keywords: ["resistor color code calculator", "resistor colour code", "4 band resistor", "5 band resistor", "6 band resistor", "resistor bands to ohms", "iec 60062", "resistor tolerance"],
  addedOn: "2026-10-28",
  sources: [
    {
      title: "IEC 60062:2016 Marking codes for resistors and capacitors (preview)",
      publisher: "International Electrotechnical Commission (via VDE Verlag)",
      url: "https://www.vde-verlag.de/iec-normen/preview-pdf/info_iec60062{ed6.0}b.pdf",
      usedFor: "That the colours black to white mark the digits 0 to 9 and, with gold and silver, the multiplier, tolerance and temperature coefficient bands.",
    },
    {
      title: "Resistor Colour Code Calculator",
      publisher: "Farnell",
      url: "https://uk.farnell.com/resistor-colour-code-calculator",
      usedFor: "Tolerance colours: brown ±1%, red ±2%, green ±0.5%, blue ±0.25%, violet ±0.1%, gold ±5% and silver ±10%.",
    },
    {
      title: "Resistor Colour Codes",
      publisher: "Oregon State University",
      url: "https://web.engr.oregonstate.edu/~moon/ece323/resistor.html",
      usedFor: "That a 4-band resistor with no tolerance band is ±20%.",
    },
    {
      title: "Resistor color code calculator (temperature coefficient table)",
      publisher: "All About Circuits",
      url: "https://www.allaboutcircuits.com/tools/resistor-color-code-calculator/",
      usedFor: "Temperature coefficient colours of the sixth band in ppm/K.",
    },
  ],
  intro: [
    "Small through-hole resistors are too small to print a value on, so they carry coloured bands instead. The international standard IEC 60062 gives each colour a digit from 0 (black) to 9 (white); the bands after the digits give a power-of-ten multiplier, the tolerance and, on precision parts, the temperature coefficient.",
    "Choose 4, 5 or 6 bands and pick the colours to read the resistance, its tolerance range and the temperature coefficient. Or go the other way: type a value such as 4.7k and get the colours for a 4- or 5-band resistor.",
  ],
  howToUse: [
    "To read a resistor, choose “Colours to value” and the number of bands. Hold the resistor with the tolerance band (often gold, silver or set apart) on the right.",
    "Pick the colours from left to right: the digit bands, the multiplier, the tolerance and, on 6-band parts, the temperature coefficient. Each list shows only the colours that are valid for that band.",
    "To find the colours for a value, choose “Value to colours”, type the resistance (for example 470, 4.7k, 4k7 or 2.2M), choose 4 or 5 bands and a tolerance.",
  ],
  formulas: [
    { title: "Resistance", expression: "R = (significant digits) × 10ⁿ Ω", explanation: "Two digit bands on a 4-band resistor, three on 5- and 6-band ones. The multiplier band sets n, from −2 (silver) and −1 (gold) to 9 (white)." },
    { title: "Tolerance range", expression: "R_min = R × (1 − tol);  R_max = R × (1 + tol)", explanation: "For example ±5% for gold. With no tolerance band the tolerance is ±20%." },
    { title: "Temperature coefficient", expression: "ΔR = R × TCR × ΔT", explanation: "TCR is in parts per million per kelvin: 100 ppm/K means the resistance changes by 0.1% for a 10 K change." },
  ],
  examples: [
    {
      title: "Yellow, violet, red, gold (4 bands)",
      inputs: { mode: "decode", bands: "4", band1: "yellow", band2: "violet", multiplier: "red", tolerance: "gold" },
      steps: ["Digits: yellow 4, violet 7, so 47", "Multiplier red: × 100, so 4,700 Ω = 4.7 kΩ", "Gold tolerance ±5%: 4,465 Ω to 4,935 Ω"],
      expectedPrimary: "4.7 kΩ",
    },
    {
      title: "Brown, black, black, red, brown, red (6 bands)",
      inputs: { mode: "decode", bands: "6", band1: "brown", band2: "black", band3: "black", multiplier: "red", tolerance: "brown", tcr: "red" },
      steps: ["Digits: 1, 0, 0, so 100", "Multiplier red: × 100, so 10,000 Ω = 10 kΩ", "Brown tolerance ±1%: 9.9 kΩ to 10.1 kΩ", "Red sixth band: 50 ppm/K, about 5 Ω more or less for every 10 K"],
      expectedPrimary: "10 kΩ",
    },
    {
      title: "Colours for 4k7 on a 5-band, 1% resistor",
      inputs: { mode: "encode", value: "4k7", encodeBands: "5", encodeTolerance: "brown" },
      steps: ["4k7 = 4,700 Ω = 470 × 10¹", "Digits 4, 7, 0: yellow, violet, black", "Multiplier 10¹: brown; tolerance 1%: brown"],
      expectedPrimary: "Yellow – Violet – Black – Brown – Brown",
    },
  ],
  assumptions: [
    "The colour meanings follow IEC 60062 for digits, multipliers, the common tolerance colours and the temperature coefficient band. Some rarely used colours and older or manufacturer-specific variants are not included.",
    "Value-to-colour conversion only accepts values that the chosen number of digit bands can show exactly, from 0.1 Ω upwards. It does not check whether the value is in a standard E-series.",
    "Colours are hard to tell apart under some light and on old or heat-damaged parts. A multimeter gives the definitive value.",
  ],
  faqs: [
    { question: "Which end do I start reading from?", answer: "Start at the end where the bands are closer to the edge, and keep the tolerance band, which is often gold or silver, set apart or wider, on the right. Gold and silver never start the code, so if one is at an end, read from the other end." },
    { question: "What is the difference between 4-, 5- and 6-band resistors?", answer: "A 4-band resistor has two significant digits, so values such as 4.7 kΩ. A 5-band resistor has three, for precision values such as 4.99 kΩ, and usually a tighter tolerance. A 6-band resistor adds a temperature coefficient band to the 5-band code." },
    { question: "Why can't I get colours for 4.99k with 4 bands?", answer: "4.99k has three significant digits, but a 4-band code has only two digit bands. Choose 5 bands, or round to the nearest value that two digits can show." },
  ],
  related: ["resistor-calculator", "ohms-law-calculator", "voltage-divider-calculator"],
  updated: "2026-10-28",
  engine: resistorColorCodeEngine,
  text,
  makeEngine: makeResistorColorCodeEngine,
  translations,
});
