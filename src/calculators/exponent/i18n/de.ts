import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ExponentText } from "../text/en";

const de: CalculatorTranslation<ExponentText> = {
  content: {
    title: "Potenzrechner",
    shortTitle: "Potenz",
    summary: "Erheben Sie jede Zahl in eine beliebige Potenz, auch mit negativen und gebrochenen Exponenten.",
    metaTitle: "Potenzrechner – Potenzen und negative Exponenten",
    metaDescription:
      "Berechnen Sie eine Zahl hoch einen beliebigen Exponenten, auch negativ oder gebrochen. Sehr große Ergebnisse werden in wissenschaftlicher Notation angezeigt.",
    keywords: ["Potenz berechnen", "Potenzrechner", "Exponent berechnen", "hoch rechnen", "negativer Exponent", "gebrochener Exponent", "Quadrat und Kubik"],
    intro: [
      "Ein Exponent gibt an, wie oft eine Basis mit sich selbst multipliziert wird. 2¹⁰ bedeutet, dass zehn Zweien miteinander multipliziert werden, das ergibt 1.024.",
      "Negative Exponenten ergeben Kehrwerte, gebrochene Exponenten ergeben Wurzeln.",
    ],
    howToUse: [
      "Geben Sie die Basis a ein.",
      "Geben Sie den Exponenten b ein. Dezimalzahlen und negative Werte sind erlaubt.",
      "Lesen Sie aᵇ ab. Sehr große oder sehr kleine Ergebnisse werden in wissenschaftlicher Notation angezeigt.",
    ],
    formulas: [
      { title: "Positiver Exponent", expression: "aᵇ = a × a × … × a (b-mal)", explanation: "Für ganzzahlige Exponenten." },
      { title: "Negativer Exponent", expression: "a⁻ᵇ = 1 ÷ aᵇ", explanation: "Die Basis darf nicht 0 sein." },
      { title: "Gebrochener Exponent", expression: "a^(1/n) = ⁿ√a", explanation: "Zum Beispiel 9^0,5 = √9 = 3." },
    ],
    examples: [
      { title: "2 hoch 10", steps: ["2 × 2 × … (10-mal)", "= 1.024"] },
      { title: "5 hoch −2", steps: ["1 ÷ 5²", "= 1 ÷ 25 = 0,04"] },
      { title: "9 hoch 0,5", steps: ["9^0,5 = √9", "= 3"] },
    ],
    assumptions: [
      "Die Ergebnisse sind reelle Zahlen; eine negative Basis erfordert einen ganzzahligen Exponenten.",
      "Die Ergebnisse werden mit 12 signifikanten Stellen angezeigt.",
    ],
    faqs: [
      { question: "Was ergibt eine Zahl hoch 0?", answer: "Jede von null verschiedene Zahl hoch 0 ergibt 1." },
      { question: "Was bedeutet ein negativer Exponent?", answer: "Er steht für den Kehrwert: 2⁻³ = 1 ÷ 2³ = 0,125." },
      { question: "Wie funktionieren gebrochene Exponenten?", answer: "Der Nenner gibt eine Wurzel an: 8^(1/3) ist die Kubikwurzel aus 8, also 2." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    base: "Basis (a)",
    exponent: "Exponent (b)",
    zeroNegative: "0 hoch einen negativen Exponenten ist nicht definiert.",
    negativeBase: "Eine negative Basis erfordert für ein reelles Ergebnis einen ganzzahligen Exponenten.",
    tooLarge: "Zu groß für die Anzeige",
    eNotation: "E-Notation",
    negativeNote: "Ein negativer Exponent bedeutet 1 ÷ {base}^{exponent}.",
    positiveNote: "{base} wird {exponent}-mal mit sich selbst multipliziert.",
  },
};

export default de;
