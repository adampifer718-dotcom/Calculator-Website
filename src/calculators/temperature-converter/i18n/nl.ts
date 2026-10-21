import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TemperatureConverterText } from "../text/en";

const nl: CalculatorTranslation<TemperatureConverterText> = {
  content: {
    title: "Temperatuur omrekenen",
    shortTitle: "Temperatuur",
    summary: "Reken temperaturen om tussen Celsius, Fahrenheit en Kelvin.",
    metaTitle: "Temperatuur omrekenen – Celsius, Fahrenheit, Kelvin",
    metaDescription:
      "Reken temperaturen om tussen Celsius, Fahrenheit en Kelvin met de exacte formules, en zie de waarde op alle drie de schalen tegelijk.",
    keywords: ["temperatuur omrekenen", "celsius naar fahrenheit", "fahrenheit naar celsius", "kelvin", "graden celsius", "graden fahrenheit", "omrekenen"],
    intro: [
      "Reken een temperatuur om tussen de schalen van Celsius, Fahrenheit en Kelvin.",
      "Anders dan bij lengte of gewicht hebben temperatuurschalen verschillende nulpunten, dus voor het omrekenen heb je naast een factor ook een verschuiving nodig.",
    ],
    howToUse: [
      "Vul de temperatuur in.",
      "Kies de schaal waarvan en waarnaar je omrekent.",
      "Lees de uitkomst af en de waarde op elke schaal.",
    ],
    formulas: [
      {
        title: "Celsius en Fahrenheit",
        expression: "°F = °C × 9/5 + 32\n°C = (°F − 32) × 5/9",
        explanation: "Een verandering van 1 °C is gelijk aan een verandering van 1,8 °F.",
      },
      { title: "Kelvin", expression: "K = °C + 273,15", explanation: "Kelvin begint bij het absolute nulpunt en heeft dus geen negatieve waarden." },
    ],
    examples: [
      { title: "100 °C naar Fahrenheit", steps: ["100 × 9/5 = 180", "180 + 32 = 212 °F"] },
      { title: "98,6 °F naar Celsius", steps: ["98,6 − 32 = 66,6", "66,6 × 5/9 = 37 °C"] },
      { title: "−40 °C naar Fahrenheit", steps: ["−40 × 9/5 = −72", "−72 + 32 = −40 °F"] },
    ],
    assumptions: [
      "Temperaturen onder het absolute nulpunt (0 K) worden geweigerd, omdat ze natuurkundig onmogelijk zijn.",
      "De uitkomsten worden met 10 significante cijfers weergegeven.",
    ],
    faqs: [
      { question: "Bij welke temperatuur zijn Celsius en Fahrenheit gelijk?", answer: "Bij −40 graden." },
      {
        question: "Waarom staat er geen gradenteken bij kelvin?",
        answer: "Kelvin is een absolute schaal en wordt gewoon als K geschreven, bijvoorbeeld 300 K.",
      },
      { question: "Wat is kamertemperatuur?", answer: "Meestal ongeveer 20–22 °C (68–72 °F), al verschillen de definities." },
    ],
    sourcesUsedFor: ["Verbanden tussen de kelvin, de graad Celsius en de graad Fahrenheit."],
  },
  text: {
    value: "Temperatuur",
    from: "Van",
    to: "Naar",
    scales: { C: "Celsius (°C)", F: "Fahrenheit (°F)", K: "Kelvin (K)" },
    belowZero: "Dit ligt onder het absolute nulpunt (0 K, −273,15 °C, −459,67 °F).",
    primary: "Omgerekende temperatuur",
    tableCaption: "Op elke schaal",
    tableScale: "Schaal",
    tableValue: "Temperatuur",
  },
};

export default nl;
