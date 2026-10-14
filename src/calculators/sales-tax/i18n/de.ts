import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SalesTaxText } from "../text/en";

const de: CalculatorTranslation<SalesTaxText> = {
  content: {
    title: "Umsatzsteuerrechner",
    shortTitle: "Umsatzsteuer",
    summary: "Schlagen Sie die Umsatzsteuer auf einen Preis auf oder ermitteln Sie den Preis vor Steuern aus einem Bruttobetrag.",
    metaTitle: "Umsatzsteuerrechner – Steuer aufschlagen oder herausrechnen",
    metaDescription: "Berechnen Sie Umsatzsteuer und Gesamtpreis oder rechnen Sie die Steuer aus einem Bruttobetrag heraus, um den Nettopreis zu finden – für jeden Steuersatz.",
    keywords: ["Umsatzsteuer berechnen", "Mehrwertsteuer berechnen", "MwSt-Rechner", "Brutto Netto", "Steuer herausrechnen", "Sales Tax USA", "Steuersatz"],
    intro: [
      "Geben Sie einen Preis und einen Steuersatz ein, um die Steuer und den zu zahlenden Gesamtbetrag zu sehen. Wechseln Sie zum Herausrechnen, um aus dem Betrag auf einem Kassenbon den Preis vor Steuern zu ermitteln.",
      "Die Rechnung funktioniert gleichermaßen für die US-amerikanische Sales Tax, die Mehrwertsteuer und die GST – alle sind Prozentsätze, die auf einen Preis aufgeschlagen werden.",
    ],
    howToUse: [
      "Wählen Sie, ob Sie die Steuer auf einen Preis aufschlagen oder aus einem Gesamtbetrag herausrechnen möchten.",
      "Geben Sie den Betrag und den Steuersatz in Prozent ein.",
      "Lesen Sie die Steuer, den Gesamtbetrag und den Preis vor Steuern ab.",
    ],
    formulas: [
      {
        title: "Steuer aufschlagen",
        expression: "Umsatzsteuer = Preis × Steuersatz ÷ 100\nGesamtbetrag = Preis + Umsatzsteuer",
        explanation: "Multiplizieren Sie den Preis mit dem Steuersatz als Dezimalzahl.",
      },
      {
        title: "Steuer herausrechnen",
        expression: "Preis vor Steuern = Gesamtbetrag ÷ (1 + Steuersatz ÷ 100)",
        explanation: "Die Division durch 1 plus Steuersatz macht den Steueraufschlag rückgängig. Den Steuersatz einfach vom Gesamtbetrag abzuziehen, führt nicht zum richtigen Ergebnis.",
      },
    ],
    examples: [
      { title: "100 $ mit 8,25 % Umsatzsteuer", steps: ["Steuer = 100 $ × 0,0825 = 8,25 $", "Gesamtbetrag = 100 $ + 8,25 $ = 108,25 $"] },
      { title: "Ein Gesamtbetrag von 54 $ inklusive 8 % Steuer", steps: ["Preis = 54 $ ÷ 1,08 = 50 $", "Steuer = 54 $ − 50 $ = 4 $"] },
    ],
    assumptions: [
      "Der Steuersatz ist ein einziger Prozentsatz, der auf den gesamten Betrag angewendet wird. Manche Orte besteuern Waren unterschiedlich oder erheben zusätzlich lokale Steuern.",
      "Die Ergebnisse werden nur für die Anzeige auf den Cent gerundet.",
      "Die Wahl einer Währung ändert nur die Formatierung.",
    ],
    faqs: [
      {
        question: "Wie berechne ich die Umsatzsteuer?",
        answer: "Multiplizieren Sie den Preis mit dem Steuersatz als Dezimalzahl. Bei einem Satz von 7 % ergibt 50 $ × 0,07 = 3,50 $ Steuer.",
      },
      {
        question: "Wie rechne ich die Umsatzsteuer aus einem Gesamtbetrag heraus?",
        answer: "Teilen Sie den Gesamtbetrag durch 1 plus Steuersatz. Ein Gesamtbetrag von 107 $ mit 7 % Steuer entspricht 107 $ ÷ 1,07 = 100 $ vor Steuern.",
      },
      {
        question: "Wird die Mehrwertsteuer genauso berechnet?",
        answer: "Ja. Mehrwertsteuer und GST sind Prozentsätze des Preises, daher gelten dieselben Formeln.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    mode: "Berechnung",
    modes: { add: "Steuer auf einen Preis aufschlagen", remove: "Steuer aus einem Gesamtbetrag herausrechnen" },
    amount: "Betrag",
    amountHelp: "Preis vor Steuern bzw. beim Herausrechnen der Gesamtbetrag inklusive Steuer.",
    rate: "Steuersatz",
    beforeTax: "Preis vor Steuern",
    beforeTaxCaption: "Der Gesamtbetrag geteilt durch (1 + Steuersatz).",
    taxIncluded: "Enthaltene Umsatzsteuer",
    total: "Gesamtbetrag inklusive Steuer",
    totalCaption: "Der Preis zuzüglich Umsatzsteuer.",
    tax: "Umsatzsteuer",
  },
};

export default de;
