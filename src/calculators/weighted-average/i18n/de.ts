import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WeightedAverageText } from "../text/en";

const de: CalculatorTranslation<WeightedAverageText> = {
  content: {
    title: "Rechner für den gewichteten Durchschnitt",
    shortTitle: "Gewichteter Durchschnitt",
    summary: "Mitteln Sie eine Liste von Werten, von denen einige stärker zählen als andere, und vergleichen Sie das Ergebnis mit dem einfachen Mittelwert.",
    metaTitle: "Rechner für den gewichteten Durchschnitt – gewichtetes Mittel",
    metaDescription: "Berechnen Sie den gewichteten Durchschnitt von bis zu 100 Werten und ihren Gewichten, mit Summe der Gewichte und ungewichtetem Mittelwert zum Vergleich.",
    keywords: ["gewichteter Durchschnitt", "gewichtetes Mittel", "gewichteter Mittelwert", "Durchschnittsnote berechnen", "Notendurchschnitt gewichtet", "Durchschnittspreis", "Summenprodukt"],
    intro: [
      "Ein gewichteter Durchschnitt ist ein Mittelwert, bei dem jeder Wert entsprechend seinem Gewicht zählt. Eine Abschlussprüfung, die die Hälfte der Note ausmacht, beeinflusst das Ergebnis stärker als ein Test mit einem Zehntel, und ein großer Einkauf wirkt sich stärker auf den Durchschnittspreis aus als ein kleiner.",
      "Geben Sie die Werte und eine passende Liste von Gewichten ein. Der Rechner liefert den gewichteten Durchschnitt und zum Vergleich den gewöhnlichen Mittelwert, der jeden Wert gleich behandelt.",
    ],
    howToUse: [
      "Geben Sie die Werte in das erste Feld ein, getrennt durch Kommas, Leerzeichen oder Zeilenumbrüche.",
      "Geben Sie die Gewichte in derselben Reihenfolge in das zweite Feld ein, eines pro Wert.",
      "Gewichte können Prozentsätze, Leistungspunkte, Mengen oder andere nicht negative Zahlen sein. Sie müssen sich nicht zu 100 oder zu 1 addieren.",
      "Lesen Sie den gewichteten Durchschnitt ab. Weicht er stark vom ungewichteten Mittelwert ab, ziehen die stark gewichteten Werte ihn zu sich hin.",
    ],
    formulas: [
      { title: "Gewichteter Durchschnitt", expression: "x̄w = Σ(wᵢ·xᵢ) ÷ Σwᵢ", explanation: "Multiplizieren Sie jeden Wert mit seinem Gewicht, addieren Sie die Produkte und teilen Sie durch das Gesamtgewicht." },
      { title: "Ungewichteter Mittelwert", expression: "x̄ = Σxᵢ ÷ n", explanation: "Der gewöhnliche Durchschnitt; er entspricht dem gewichteten Durchschnitt, wenn alle Gewichte gleich sind." },
    ],
    examples: [
      {
        title: "Kursnote aus gewichteten Teilleistungen",
        steps: ["Produkte: 82 × 20 = 1.640; 90 × 50 = 4.500; 75 × 30 = 2.250", "Summe der Produkte = 8.390 und Summe der Gewichte = 100", "Gewichteter Durchschnitt = 8.390 ÷ 100 = 83,9, während der einfache Mittelwert etwa 82,33 beträgt"],
      },
      {
        title: "Notenpunkte gewichtet nach Leistungspunkten",
        steps: ["Produkte: 14,8 + 9 + 12 + 4,6 = 40,4", "Summe der Gewichte = 4 + 3 + 3 + 2 = 12 Leistungspunkte", "Gewichteter Durchschnitt = 40,4 ÷ 12 ≈ 3,3667"],
      },
      {
        title: "Durchschnittlich bezahlter Preis pro Kilogramm",
        steps: ["Kilopreise gewichtet nach gekauften Kilogramm: 12,5 × 40 + 14 × 25 + 11,75 × 35 = 500 + 350 + 411,25 = 1.261,25", "Gesamtmenge = 100 kg", "Durchschnittspreis = 1.261,25 ÷ 100 = 12,6125 pro kg"],
      },
    ],
    assumptions: [
      "Werte und Gewichte werden nach Position gepaart: Das erste Gewicht gehört zum ersten Wert und so weiter.",
      "Gewichte müssen null oder positiv sein, und mindestens eines muss größer als null sein. Ein Gewicht von 0 lässt den Wert beim gewichteten Durchschnitt weg, nicht aber beim ungewichteten Mittelwert.",
      "Ergebnisse werden mit 10 signifikanten Stellen angezeigt. Es werden bis zu 100 Paare akzeptiert.",
    ],
    faqs: [
      { question: "Müssen sich die Gewichte zu 100 % addieren?", answer: "Nein. Die Formel teilt durch die Summe der Gewichte, daher ergeben 20, 50 und 30 dasselbe wie 0,2, 0,5 und 0,3 oder 2, 5 und 3." },
      { question: "Wann ist der gewichtete Durchschnitt gleich dem normalen Durchschnitt?", answer: "Wenn alle Gewichte gleich sind. Dann hat jeder Wert denselben Einfluss, und die Formel reduziert sich auf die Summe der Werte geteilt durch ihre Anzahl." },
      { question: "Wie ermittle ich die Note, die ich in der Abschlussprüfung brauche?", answer: "Schreiben Sie den gewichteten Durchschnitt mit dem Prüfungsergebnis als Unbekannte auf und lösen Sie danach auf. Bei 80 in Leistungen, die 60 % zählen, und einem Ziel von 85 brauchen Sie zum Beispiel 0,6 × 80 + 0,4 × s = 85, also s = 92,5." },
    ],
    sourcesUsedFor: ["Definition eines gewichteten Durchschnitts: jeder Wert mit seinem Gewicht multipliziert, aufsummiert und durch die Summe der Gewichte geteilt."],
  },
  text: {
    values: "Werte",
    valuesHelp: "Ein Wert pro Position, getrennt durch Kommas, Leerzeichen oder Zeilenumbrüche.",
    weights: "Gewichte",
    weightsHelp: "Ein Gewicht pro Wert, in derselben Reihenfolge. Prozentsätze, Leistungspunkte oder Anzahlen funktionieren alle; sie müssen sich nicht zu 100 addieren.",
    errors: {
      empty: "Geben Sie mindestens eine Zahl ein.",
      tooMany: "Geben Sie höchstens {max} Zahlen ein.",
      notNumber: "„{token}“ ist keine Zahl. Trennen Sie Werte durch Kommas, Leerzeichen oder Zeilenumbrüche.",
      tooLarge: "„{token}“ ist zu groß.",
    },
    maxCount: "Geben Sie höchstens {max} Zahlen ein.",
    tooBig: "{value} ist zu groß. Jede Zahl darf betragsmäßig höchstens {max} sein.",
    negativeWeight: "Gewichte dürfen nicht negativ sein ({value}).",
    zeroTotal: "Die Gewichte ergeben zusammen 0. Mindestens ein Gewicht muss größer als 0 sein.",
    countMismatch: "Geben Sie für jeden Wert ein Gewicht ein: Sie haben {values} und {weights}.",
    valueCount: { zero: "{n} Werte", one: "{n} Wert", two: "{n} Werte", few: "{n} Werte", many: "{n} Werte", other: "{n} Werte" },
    weightCount: { zero: "{n} Gewichte", one: "{n} Gewicht", two: "{n} Gewichte", few: "{n} Gewichte", many: "{n} Gewichte", other: "{n} Gewichte" },
    weightedMean: "Gewichteter Durchschnitt",
    caption: "Auf Grundlage von {count}.",
    sumOfWeights: "Summe der Gewichte",
    sumOfProducts: "Summe von Wert × Gewicht",
    unweightedMean: "Ungewichteter Mittelwert (zum Vergleich)",
  },
};

export default de;
