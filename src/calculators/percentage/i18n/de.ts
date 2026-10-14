import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentageText } from "../text/en";

const de: CalculatorTranslation<PercentageText> = {
  content: {
    title: "Prozentrechner",
    shortTitle: "Prozent",
    summary: "Berechnen Sie X % einer Zahl, wie viel Prozent eine Zahl von einer anderen ist, oder den Grundwert aus Anteil und Prozentsatz.",
    metaTitle: "Prozentrechner – Prozent von einer Zahl und mehr",
    metaDescription:
      "Kostenloser Prozentrechner: Berechnen Sie X % von Y, wie viel Prozent X von Y ist, oder den Grundwert, wenn X gleich Y % davon ist – mit Formeln und Beispielen.",
    keywords: ["Prozentrechner", "Prozent berechnen", "Prozent von", "wie viel Prozent", "Prozentsatz berechnen", "Grundwert berechnen", "Prozentrechnung"],
    intro: [
      "Dieser Rechner beantwortet die drei häufigsten Fragen der Prozentrechnung. Wählen Sie eine Frage, geben Sie zwei Zahlen ein, und das Ergebnis wird während der Eingabe aktualisiert.",
      "Prozente drücken einen Anteil von Hundert aus: 25 % bedeutet also 25 von je 100.",
    ],
    howToUse: [
      "Wählen Sie die Frage, die Sie beantworten möchten.",
      "Geben Sie die beiden bekannten Werte ein. Negative Zahlen und Dezimalzahlen sind erlaubt.",
      "Lesen Sie das Ergebnis und die verwendete Formel ab.",
    ],
    formulas: [
      { title: "Wie viel sind X % von Y?", expression: "Ergebnis = X ÷ 100 × Y", explanation: "Wandeln Sie den Prozentsatz in eine Dezimalzahl um und multiplizieren Sie dann." },
      { title: "Wie viel Prozent von Y ist X?", expression: "Prozentsatz = X ÷ Y × 100", explanation: "Teilen Sie den Anteil durch den Grundwert und multiplizieren Sie mit 100. Y darf nicht 0 sein." },
      { title: "X ist Y % wovon?", expression: "Grundwert = X ÷ (Y ÷ 100)", explanation: "Teilen Sie den Anteil durch den Prozentsatz als Dezimalzahl. Y darf nicht 0 sein." },
    ],
    examples: [
      { title: "Wie viel sind 20 % von 150?", steps: ["20 ÷ 100 = 0,2", "0,2 × 150 = 30"] },
      { title: "Wie viel Prozent von 180 sind 45?", steps: ["45 ÷ 180 = 0,25", "0,25 × 100 = 25 %"] },
      { title: "30 sind 12 % von welcher Zahl?", steps: ["12 ÷ 100 = 0,12", "30 ÷ 0,12 = 250"] },
    ],
    assumptions: [
      "Die Ergebnisse werden mit bis zu 4 bis 6 Nachkommastellen angezeigt. Gerechnet wird mit voller Genauigkeit.",
      "Eine Division durch null ist nicht definiert, daher darf der Grundwert (bzw. der Prozentsatz) bei der zweiten und dritten Frage nicht 0 sein.",
    ],
    faqs: [
      {
        question: "Wie berechne ich den Prozentsatz einer Zahl?",
        answer: "Teilen Sie den Prozentsatz durch 100 und multiplizieren Sie mit der Zahl. Zum Beispiel sind 15 % von 80 gleich 0,15 × 80 = 12.",
      },
      {
        question: "Wie finde ich heraus, wie viel Prozent eine Zahl von einer anderen ist?",
        answer: "Teilen Sie den Anteil durch den Grundwert und multiplizieren Sie mit 100. Zum Beispiel sind 18 von 24 gleich 18 ÷ 24 × 100 = 75 %.",
      },
      {
        question: "Kann ein Prozentsatz größer als 100 % sein?",
        answer: "Ja. Ein Wert, der größer als der Grundwert ist, entspricht mehr als 100 % davon. Zum Beispiel sind 300 gleich 150 % von 200.",
      },
      {
        question: "Wie berechne ich die prozentuale Steigerung zwischen zwei Zahlen?",
        answer: "Verwenden Sie den Rechner für prozentuale Veränderung: Er teilt die Veränderung durch den Ausgangswert und multipliziert mit 100.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    question: "Frage",
    modes: { percentOf: "Wie viel sind X % von Y?", whatPercent: "Wie viel % von Y ist X?", findWhole: "X ist Y % wovon?" },
    percentX: "Prozentsatz (X)",
    valueY: "Wert (Y)",
    partX: "Anteil (X)",
    wholeY: "Grundwert (Y)",
    percentY: "Prozentsatz (Y)",
    wholeZero: "Der Grundwert darf nicht 0 sein.",
    percentZero: "Der Prozentsatz darf nicht 0 sein.",
    percentResult: "Prozentsatz",
    percentCaption: "{part} sind {percent} von {whole}.",
    percentFormula: "Formel: {part} ÷ {whole} × 100.",
    wholeResult: "Grundwert",
    wholeCaption: "{part} sind {percent} von {whole}.",
    wholeFormula: "Formel: {part} ÷ ({percent} ÷ 100).",
    result: "Ergebnis",
    resultCaption: "{percent} von {value} sind {result}.",
    minus: "{value} minus {percent}",
    plus: "{value} plus {percent}",
    resultFormula: "Formel: {percent} ÷ 100 × {value}.",
  },
};

export default de;
