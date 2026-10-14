import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TemperatureConverterText } from "../text/en";

const de: CalculatorTranslation<TemperatureConverterText> = {
  content: {
    title: "Temperaturumrechner",
    shortTitle: "Temperatur",
    summary: "Rechnen Sie Temperaturen zwischen Celsius, Fahrenheit und Kelvin um.",
    metaTitle: "Temperaturumrechner – Celsius, Fahrenheit, Kelvin",
    metaDescription:
      "Rechnen Sie Temperaturen mit den exakten Formeln zwischen Celsius, Fahrenheit und Kelvin um und sehen Sie den Wert gleichzeitig auf allen drei Skalen.",
    keywords: ["Temperatur umrechnen", "Celsius in Fahrenheit", "Fahrenheit in Celsius", "Kelvin in Celsius", "Temperaturumrechner", "Grad umrechnen"],
    intro: [
      "Rechnen Sie eine Temperatur zwischen den Skalen Celsius, Fahrenheit und Kelvin um.",
      "Anders als bei Länge oder Gewicht haben Temperaturskalen unterschiedliche Nullpunkte, daher braucht die Umrechnung neben einem Faktor auch einen Versatz.",
    ],
    howToUse: [
      "Geben Sie die Temperatur ein.",
      "Wählen Sie die Ausgangs- und die Zielskala.",
      "Lesen Sie das Ergebnis und den Wert auf jeder Skala ab.",
    ],
    formulas: [
      {
        title: "Celsius und Fahrenheit",
        expression: "°F = °C × 9/5 + 32\n°C = (°F − 32) × 5/9",
        explanation: "Eine Änderung um 1 °C entspricht einer Änderung um 1,8 °F.",
      },
      { title: "Kelvin", expression: "K = °C + 273,15", explanation: "Kelvin beginnt beim absoluten Nullpunkt und hat daher keine negativen Werte." },
    ],
    examples: [
      { title: "100 °C in Fahrenheit", steps: ["100 × 9/5 = 180", "180 + 32 = 212 °F"] },
      { title: "98,6 °F in Celsius", steps: ["98,6 − 32 = 66,6", "66,6 × 5/9 = 37 °C"] },
      { title: "−40 °C in Fahrenheit", steps: ["−40 × 9/5 = −72", "−72 + 32 = −40 °F"] },
    ],
    assumptions: [
      "Temperaturen unter dem absoluten Nullpunkt (0 K) werden abgelehnt, da sie physikalisch unmöglich sind.",
      "Die Ergebnisse werden mit 10 signifikanten Stellen angezeigt.",
    ],
    faqs: [
      { question: "Bei welcher Temperatur sind Celsius und Fahrenheit gleich?", answer: "Bei −40 Grad." },
      { question: "Warum gibt es bei Kelvin kein Gradzeichen?", answer: "Kelvin ist eine absolute Skala und wird einfach als K geschrieben, zum Beispiel 300 K." },
      { question: "Was ist Raumtemperatur?", answer: "Meist werden etwa 20–22 °C (68–72 °F) angenommen, die Definitionen unterscheiden sich jedoch." },
    ],
    sourcesUsedFor: ["Beziehungen zwischen Kelvin, Grad Celsius und Grad Fahrenheit."],
  },
  text: {
    value: "Temperatur",
    from: "Von",
    to: "In",
    scales: { C: "Celsius (°C)", F: "Fahrenheit (°F)", K: "Kelvin (K)" },
    belowZero: "Dieser Wert liegt unter dem absoluten Nullpunkt (0 K, −273,15 °C, −459,67 °F).",
    primary: "Umgerechnete Temperatur",
    tableCaption: "Auf allen Skalen",
    tableScale: "Skala",
    tableValue: "Temperatur",
  },
};

export default de;
