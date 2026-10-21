import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TemperatureConverterText } from "../text/en";

const it: CalculatorTranslation<TemperatureConverterText> = {
  content: {
    title: "Convertitore di temperatura",
    shortTitle: "Temperatura",
    summary: "Converti le temperature tra Celsius, Fahrenheit e Kelvin.",
    metaTitle: "Convertitore di temperatura – Celsius, Fahrenheit, Kelvin",
    metaDescription:
      "Converti le temperature tra Celsius, Fahrenheit e Kelvin con le formule esatte e vedi il valore su tutte e tre le scale contemporaneamente.",
    keywords: ["temperatura", "celsius", "fahrenheit", "kelvin", "da celsius a fahrenheit", "da fahrenheit a celsius", "conversione temperatura"],
    intro: [
      "Converti una temperatura tra le scale Celsius, Fahrenheit e Kelvin.",
      "A differenza di lunghezza o peso, le scale di temperatura hanno zeri diversi, quindi la conversione richiede uno scostamento oltre a un fattore.",
    ],
    howToUse: [
      "Inserisci la temperatura.",
      "Scegli la scala di partenza e quella di arrivo.",
      "Leggi il risultato e il valore su ogni scala.",
    ],
    formulas: [
      { title: "Celsius e Fahrenheit", expression: "°F = °C × 9/5 + 32\n°C = (°F − 32) × 5/9", explanation: "Una variazione di 1 °C equivale a una variazione di 1,8 °F." },
      { title: "Kelvin", expression: "K = °C + 273,15", explanation: "La scala Kelvin parte dallo zero assoluto, quindi non ha valori negativi." },
    ],
    examples: [
      { title: "100 °C in Fahrenheit", steps: ["100 × 9/5 = 180", "180 + 32 = 212 °F"] },
      { title: "98,6 °F in Celsius", steps: ["98,6 − 32 = 66,6", "66,6 × 5/9 = 37 °C"] },
      { title: "−40 °C in Fahrenheit", steps: ["−40 × 9/5 = −72", "−72 + 32 = −40 °F"] },
    ],
    assumptions: [
      "Le temperature inferiori allo zero assoluto (0 K) vengono rifiutate perché fisicamente impossibili.",
      "I risultati sono mostrati con 10 cifre significative.",
    ],
    faqs: [
      { question: "A quale temperatura Celsius e Fahrenheit coincidono?", answer: "A −40 gradi." },
      { question: "Perché il kelvin non ha il simbolo del grado?", answer: "Il kelvin è una scala assoluta e si scrive semplicemente K, per esempio 300 K." },
      { question: "Qual è la temperatura ambiente?", answer: "Di solito si considera intorno a 20–22 °C (68–72 °F), anche se le definizioni variano." },
    ],
    sourcesUsedFor: ["Relazioni tra kelvin, grado Celsius e grado Fahrenheit."],
  },
  text: {
    value: "Temperatura",
    from: "Da",
    to: "A",
    scales: { C: "Celsius (°C)", F: "Fahrenheit (°F)", K: "Kelvin (K)" },
    belowZero: "Questo valore è inferiore allo zero assoluto (0 K, −273,15 °C, −459,67 °F).",
    primary: "Temperatura convertita",
    tableCaption: "Su tutte le scale",
    tableScale: "Scala",
    tableValue: "Temperatura",
  },
};

export default it;
