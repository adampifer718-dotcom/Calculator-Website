import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TemperatureConverterText } from "../text/en";

const fr: CalculatorTranslation<TemperatureConverterText> = {
  content: {
    title: "Convertisseur de température",
    shortTitle: "Température",
    summary: "Convertissez des températures entre degrés Celsius, Fahrenheit et kelvins.",
    metaTitle: "Convertisseur de température – Celsius, Fahrenheit, Kelvin",
    metaDescription: "Convertissez des températures entre Celsius, Fahrenheit et Kelvin avec les formules exactes, et affichez la valeur sur les trois échelles à la fois.",
    keywords: ["convertisseur de température", "Celsius en Fahrenheit", "Fahrenheit en Celsius", "conversion kelvin", "convertir degrés", "°C en °F"],
    intro: [
      "Convertissez une température entre les échelles Celsius, Fahrenheit et Kelvin.",
      "Contrairement aux longueurs ou aux masses, les échelles de température n’ont pas le même zéro : la conversion nécessite donc un décalage en plus d’un facteur.",
    ],
    howToUse: [
      "Saisissez la température.",
      "Choisissez l’échelle de départ et l’échelle d’arrivée.",
      "Consultez le résultat et la valeur sur chaque échelle.",
    ],
    formulas: [
      { title: "Celsius et Fahrenheit", expression: "°F = °C × 9/5 + 32\n°C = (°F − 32) × 5/9", explanation: "Une variation de 1 °C équivaut à une variation de 1,8 °F." },
      { title: "Kelvin", expression: "K = °C + 273,15", explanation: "L’échelle Kelvin part du zéro absolu : elle n’a donc pas de valeurs négatives." },
    ],
    examples: [
      {
        title: "100 °C en Fahrenheit",
        steps: ["100 × 9/5 = 180", "180 + 32 = 212 °F"],
      },
      {
        title: "98,6 °F en Celsius",
        steps: ["98,6 − 32 = 66,6", "66,6 × 5/9 = 37 °C"],
      },
      {
        title: "−40 °C en Fahrenheit",
        steps: ["−40 × 9/5 = −72", "−72 + 32 = −40 °F"],
      },
    ],
    assumptions: [
      "Les températures inférieures au zéro absolu (0 K) sont refusées, car elles sont physiquement impossibles.",
      "Les résultats sont affichés avec 10 chiffres significatifs.",
    ],
    faqs: [
      { question: "À quelle température les degrés Celsius et Fahrenheit sont-ils égaux ?", answer: "À −40 degrés." },
      { question: "Pourquoi le kelvin n’a-t-il pas de symbole degré ?", answer: "Le kelvin est une unité d’échelle absolue, notée simplement K, par exemple 300 K." },
      { question: "Qu’est-ce que la température ambiante ?", answer: "On la considère souvent comme environ 20–22 °C (68–72 °F), mais les définitions varient." },
    ],
    sourcesUsedFor: ["Relations entre le kelvin, le degré Celsius et le degré Fahrenheit."],
  },
  text: {
    value: "Température",
    from: "De",
    to: "Vers",
    scales: { C: "Celsius (°C)", F: "Fahrenheit (°F)", K: "Kelvin (K)" },
    belowZero: "Cette valeur est inférieure au zéro absolu (0 K, −273,15 °C, −459,67 °F).",
    primary: "Température convertie",
    tableCaption: "Sur chaque échelle",
    tableScale: "Échelle",
    tableValue: "Température",
  },
};

export default fr;
