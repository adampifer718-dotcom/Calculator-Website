import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TipText } from "../text/en";

const de: CalculatorTranslation<TipText> = {
  content: {
    title: "Trinkgeldrechner",
    shortTitle: "Trinkgeld",
    summary: "Berechnen Sie das Trinkgeld, den Gesamtbetrag der Rechnung und den Anteil jeder Person beim Aufteilen.",
    metaTitle: "Trinkgeldrechner – Trinkgeld berechnen und Rechnung teilen",
    metaDescription: "Berechnen Sie das Trinkgeld für jeden Rechnungsbetrag und Prozentsatz, den Gesamtbetrag mit Trinkgeld und wie viel jede Person bei gleichmäßiger Aufteilung zahlt.",
    keywords: ["Trinkgeld berechnen", "Trinkgeldrechner", "Rechnung teilen", "wie viel Trinkgeld", "Trinkgeld Restaurant", "Trinkgeld USA", "Servicegebühr"],
    intro: [
      "Geben Sie den Rechnungsbetrag und einen Trinkgeldsatz ein, um Trinkgeld und Gesamtbetrag zu sehen. Ergänzen Sie die Anzahl der Personen, um die Rechnung gleichmäßig aufzuteilen.",
      "Die Gepflogenheiten unterscheiden sich je nach Land und Dienstleistung – wählen Sie also den passenden Prozentsatz.",
    ],
    howToUse: [
      "Geben Sie den Rechnungsbetrag ein.",
      "Geben Sie den Trinkgeldsatz in Prozent ein.",
      "Geben Sie ein, auf wie viele Personen die Rechnung aufgeteilt wird.",
      "Lesen Sie Trinkgeld, Gesamtbetrag und Betrag pro Person ab.",
    ],
    formulas: [
      {
        title: "Trinkgeld",
        expression: "Trinkgeld = Rechnung × Trinkgeld-% ÷ 100",
        explanation: "Manche geben Trinkgeld auf den Betrag vor Steuern; geben Sie den Betrag ein, den Sie bevorzugen.",
      },
      { title: "Aufteilung", expression: "Pro Person = (Rechnung + Trinkgeld) ÷ Personen", explanation: "Eine gleichmäßige Aufteilung." },
    ],
    examples: [
      { title: "Rechnung über 80 $, 18 % Trinkgeld, 4 Personen", steps: ["Trinkgeld = 80 $ × 0,18 = 14,40 $", "Gesamt = 94,40 $; jede Person zahlt 23,60 $"] },
      { title: "Rechnung über 45 $, 20 % Trinkgeld, 1 Person", steps: ["Trinkgeld = 45 $ × 0,20 = 9 $", "Gesamt = 54 $"] },
    ],
    assumptions: [
      "Die Rechnung wird gleichmäßig aufgeteilt; die Beträge werden nur für die Anzeige auf den Cent gerundet.",
      "Die Wahl einer Währung ändert nur die Formatierung.",
    ],
    faqs: [
      {
        question: "Wie viel Trinkgeld sollte ich geben?",
        answer: "Das hängt von den örtlichen Gepflogenheiten und vom Service ab. In den USA sind in Restaurants 15–20 % üblich; anderswo fällt das Trinkgeld oft geringer aus oder ist bereits enthalten.",
      },
      {
        question: "Gebe ich Trinkgeld auf den Betrag vor oder nach Steuern?",
        answer: "Beides ist üblich. Geben Sie als Rechnung den Betrag vor oder nach Steuern ein – ganz wie Sie möchten.",
      },
      {
        question: "Wie teile ich eine Rechnung ungleichmäßig auf?",
        answer: "Berechnen Sie den Anteil jeder Person an der Rechnung einzeln und wenden Sie dann den Trinkgeldsatz auf jeden Anteil an.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    bill: "Rechnungsbetrag",
    percent: "Trinkgeldsatz",
    people: "Anzahl der Personen",
    tip: "Trinkgeld",
    total: "Gesamtbetrag mit Trinkgeld",
    each: "Jede Person zahlt",
    tipEach: "Trinkgeld pro Person",
  },
};

export default de;
