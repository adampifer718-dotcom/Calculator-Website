import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { temperatureConverterEngine, makeTemperatureConverterEngine } from "./engine";

export const temperatureConverter = defineCalculator({
  id: "temperature-converter",
  slug: "temperature-converter",
  status: "published",
  title: "Temperature Converter",
  shortTitle: "Temperature",
  category: "conversion",
  collections: ["food-hospitality", "education-research", "healthcare"],
  summary: "Convert temperatures between Celsius, Fahrenheit and Kelvin.",
  metaTitle: "Temperature Converter – Celsius, Fahrenheit, Kelvin",
  metaDescription: "Convert temperatures between Celsius, Fahrenheit and Kelvin with the exact formulas, and see the value on all three scales at once.",
  keywords: ["temperature", "celsius", "fahrenheit", "kelvin", "c to f", "f to c", "convert"],
  popularRank: 12,
  addedOn: "2026-10-14",
  sources: [{"title": "Guide for the Use of the International System of Units (SI), NIST Special Publication 811", "publisher": "National Institute of Standards and Technology", "url": "https://www.nist.gov/pml/special-publication-811", "usedFor": "Relationships between the kelvin, degree Celsius and degree Fahrenheit."}],
  intro: ["Convert a temperature between the Celsius, Fahrenheit and Kelvin scales.", "Unlike length or weight, temperature scales have different zero points, so conversion needs an offset as well as a factor."],
  howToUse: ["Enter the temperature.", "Choose the scale to convert from and to.", "Read the result and the value on every scale."],
  formulas: [
    { title: "Celsius and Fahrenheit", expression: "°F = °C × 9/5 + 32\n°C = (°F − 32) × 5/9", explanation: "A 1 °C change equals a 1.8 °F change." },
    { title: "Kelvin", expression: "K = °C + 273.15", explanation: "Kelvin starts at absolute zero, so it has no negative values." },
  ],
  examples: [
    {
      title: "100 °C to Fahrenheit",
      inputs: {"value": 100, "from": "C", "to": "F"},
      steps: ["100 × 9/5 = 180", "180 + 32 = 212 °F"],
      expectedPrimary: "212 °F",
    },
    {
      title: "98.6 °F to Celsius",
      inputs: {"value": 98.6, "from": "F", "to": "C"},
      steps: ["98.6 − 32 = 66.6", "66.6 × 5/9 = 37 °C"],
      expectedPrimary: "37 °C",
    },
    {
      title: "−40 °C to Fahrenheit",
      inputs: {"value": -40, "from": "C", "to": "F"},
      steps: ["−40 × 9/5 = −72", "−72 + 32 = −40 °F"],
      expectedPrimary: "-40 °F",
    },
  ],
  assumptions: ["Temperatures below absolute zero (0 K) are rejected because they are physically impossible.", "Results are shown to 10 significant digits."],
  faqs: [
    { question: "At what temperature are Celsius and Fahrenheit equal?", answer: "At −40 degrees." },
    { question: "Why is there no degree sign for kelvin?", answer: "Kelvin is an absolute scale, written simply as K, for example 300 K." },
    { question: "What is room temperature?", answer: "Often taken as about 20–22 °C (68–72 °F), though definitions vary." },
  ],
  related: ["length-converter", "weight-converter", "recipe-scaler"],
  updated: "2026-10-14",
  engine: temperatureConverterEngine,
  text,
  makeEngine: makeTemperatureConverterEngine,
  translations,
});
