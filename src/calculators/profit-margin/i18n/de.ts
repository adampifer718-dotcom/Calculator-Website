import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProfitMarginText } from "../text/en";

const de: CalculatorTranslation<ProfitMarginText> = {
  content: {
    title: "Gewinnmargenrechner",
    shortTitle: "Gewinnmarge",
    summary: "Berechnen Sie Gewinn, Gewinnmarge und Aufschlag aus Kosten und Verkaufspreis.",
    metaTitle: "Gewinnmargenrechner – Marge und Aufschlag",
    metaDescription: "Berechnen Sie Rohgewinn, Gewinnmarge und prozentualen Aufschlag aus Kosten und Verkaufspreis und sehen Sie den Unterschied zwischen Marge und Aufschlag.",
    keywords: ["Gewinnmarge berechnen", "Marge berechnen", "Handelsspanne", "Aufschlag berechnen", "Kalkulationsaufschlag", "Rohertrag", "Preiskalkulation"],
    intro: [
      "Marge und Aufschlag beschreiben beide den Gewinn, aber bezogen auf unterschiedliche Grundlagen. Die Marge setzt den Gewinn ins Verhältnis zum Verkaufspreis, der Aufschlag ins Verhältnis zu den Kosten.",
      "Geben Sie ein, was ein Artikel Sie kostet und zu welchem Preis Sie ihn verkaufen.",
    ],
    howToUse: [
      "Geben Sie die Kosten ein.",
      "Geben Sie den Verkaufspreis ein.",
      "Lesen Sie Gewinn, Marge und Aufschlag ab.",
    ],
    formulas: [
      { title: "Gewinn", expression: "Gewinn = Preis − Kosten", explanation: "Rohgewinn pro Artikel oder für einen gesamten Auftrag." },
      { title: "Marge", expression: "Marge = Gewinn ÷ Preis × 100", explanation: "Anteil des Preises, der Gewinn ist." },
      { title: "Aufschlag", expression: "Aufschlag = Gewinn ÷ Kosten × 100", explanation: "Wie viel auf die Kosten aufgeschlagen wurde." },
    ],
    examples: [
      { title: "Kosten 60 $, Preis 100 $", steps: ["Gewinn = 40 $", "Marge = 40 ÷ 100 = 40 %; Aufschlag = 40 ÷ 60 ≈ 66,67 %"] },
      { title: "Kosten 25 $, Preis 40 $", steps: ["Gewinn = 15 $", "Marge = 15 ÷ 40 = 37,5 %"] },
    ],
    assumptions: [
      "Es handelt sich um die Bruttomarge: Berücksichtigt werden nur die eingegebenen Kosten, keine Gemeinkosten oder Steuern.",
      "Die Wahl einer Währung ändert nur die Formatierung.",
    ],
    faqs: [
      {
        question: "Was ist der Unterschied zwischen Marge und Aufschlag?",
        answer: "Bei der Marge wird der Gewinn durch den Preis geteilt, beim Aufschlag durch die Kosten. Ein Aufschlag von 50 % entspricht einer Marge von 33,3 %.",
      },
      {
        question: "Kann die Marge über 100 % liegen?",
        answer: "Nein. Die Marge ist ein Anteil am Verkaufspreis und beträgt daher höchstens 100 % (wenn die Kosten null sind).",
      },
      {
        question: "Wie lege ich einen Preis für eine Zielmarge fest?",
        answer: "Preis = Kosten ÷ (1 − Zielmarge). Für eine Marge von 40 % bei Kosten von 60 $ gilt: Preis = 60 ÷ 0,6 = 100 $.",
      },
    ],
    sourcesUsedFor: ["Definitionen von Rohgewinn und Marge."],
  },
  text: {
    cost: "Kosten",
    price: "Verkaufspreis (Erlös)",
    margin: "Gewinnmarge",
    caption: "Gewinn als Anteil am Verkaufspreis.",
    profit: "Gewinn",
    loss: "Verlust",
    markup: "Aufschlag",
    undefinedMarkup: "Bei Kosten von null nicht definiert",
  },
};

export default de;
