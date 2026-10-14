import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ScientificNotationText } from "../text/en";

const de: CalculatorTranslation<ScientificNotationText> = {
  content: {
    title: "Rechner für wissenschaftliche Notation",
    shortTitle: "Wissenschaftliche Notation",
    summary: "Wandeln Sie Zahlen in wissenschaftliche, technische und E-Notation um oder schreiben Sie sie wieder als Dezimalzahl aus.",
    metaTitle: "Rechner für wissenschaftliche Notation – Zahlen umwandeln",
    metaDescription:
      "Wandeln Sie jede Zahl in wissenschaftliche Notation, E-Notation und technische Notation um oder schreiben Sie E-Notation wieder als gewöhnliche Dezimalzahl aus.",
    keywords: ["wissenschaftliche Notation", "wissenschaftliche Schreibweise", "Exponentialschreibweise", "Zehnerpotenzen", "E-Notation", "technische Notation", "Gleitkommadarstellung"],
    intro: [
      "Die wissenschaftliche Notation schreibt eine Zahl als Wert zwischen 1 und 10, multipliziert mit einer Zehnerpotenz, etwa 1,234 × 10⁵. So bleiben sehr große und sehr kleine Zahlen gut lesbar.",
      "Geben Sie eine Dezimalzahl oder E-Notation ein, und der Rechner zeigt alle gängigen Schreibweisen.",
    ],
    howToUse: [
      "Geben Sie eine Zahl wie 123400 oder 0.00056 oder eine E-Notation wie 6.02e23 ein (mit Punkt als Dezimaltrennzeichen).",
      "Lesen Sie die wissenschaftliche, die E-, die technische und die Dezimalschreibweise ab.",
    ],
    formulas: [
      {
        title: "Wissenschaftliche Notation",
        expression: "x = a × 10ⁿ, wobei 1 ≤ |a| < 10",
        explanation: "Verschieben Sie das Komma, bis links davon genau eine von null verschiedene Ziffer steht; n zählt die Verschiebungen.",
      },
      {
        title: "Technische Notation",
        expression: "x = a × 10ⁿ, wobei n ein Vielfaches von 3 ist",
        explanation: "Passt zu Einheitenvorsätzen wie Kilo (10³) und Mikro (10⁻⁶).",
      },
    ],
    examples: [
      { title: "123.400", steps: ["Komma um 5 Stellen nach links verschieben", "1,234 × 10⁵"] },
      { title: "0,00056", steps: ["Komma um 4 Stellen nach rechts verschieben", "5,6 × 10⁻⁴"] },
    ],
    assumptions: [
      "Zahlen werden mit doppelter Genauigkeit von JavaScript umgewandelt, also mit etwa 15–17 signifikanten Stellen.",
      "Dezimalschreibweisen mit mehr als 21 Stellen werden nicht angezeigt.",
    ],
    faqs: [
      {
        question: "Wie schreibe ich eine Zahl in wissenschaftlicher Notation?",
        answer: "Verschieben Sie das Komma so, dass links davon genau eine von null verschiedene Ziffer steht, und multiplizieren Sie mit 10 hoch der Anzahl der verschobenen Stellen. Aus 4.500 wird 4,5 × 10³.",
      },
      {
        question: "Was bedeutet 6.02e23?",
        answer: "Das ist die E-Notation für 6,02 × 10²³. Das e steht für „mal zehn hoch“.",
      },
      {
        question: "Was ist die technische Notation?",
        answer: "Sie ähnelt der wissenschaftlichen Notation, doch der Exponent ist immer ein Vielfaches von 3 – passend zu Vorsätzen wie Kilo, Mega und Milli.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    number: "Zahl",
    numberHelp: "Eine Dezimalzahl wie 0.00056 oder eine E-Notation wie 6.02e23. Verwenden Sie einen Punkt als Dezimaltrennzeichen.",
    invalid: "Geben Sie eine Zahl wie 123400, 0.00056 oder 6.02e23 ein.",
    tooLarge: "Geben Sie eine Zahl unter 1,8 × 10³⁰⁸ ein.",
    scientific: "Wissenschaftliche Notation",
    eNotation: "E-Notation",
    engineering: "Technische Notation",
    decimal: "Dezimalschreibweise",
    tooLong: "Zu lang für die Anzeige",
  },
};

export default de;
