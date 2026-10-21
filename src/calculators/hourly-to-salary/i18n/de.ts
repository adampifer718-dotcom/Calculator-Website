import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HourlyToSalaryText } from "../text/en";

const de: CalculatorTranslation<HourlyToSalaryText> = {
  content: {
    title: "Jahresgehaltsrechner",
    shortTitle: "Stundenlohn in Gehalt",
    summary: "Rechnen Sie einen Stundenlohn in das Brutto-Jahres-, Monats-, Zweiwochen-, Wochen- und Tagesentgelt für Ihren Arbeitsplan um.",
    metaTitle: "Stundenlohn in Gehalt umrechnen – Jahres- und Monatslohn",
    metaDescription:
      "Rechnen Sie Ihren Stundenlohn in ein Jahresgehalt um und sehen Sie das Bruttoentgelt pro Monat, Halbmonat, zwei Wochen, Woche und Tag – passend zu Ihrem Plan.",
    keywords: ["Stundenlohn in Jahresgehalt", "Stundenlohn Rechner", "Jahresgehalt berechnen", "Bruttogehalt pro Monat", "Stundenlohn umrechnen", "Verdienst pro Jahr"],
    intro: [
      "Mit diesem Rechner sehen Sie, was ein Stundenlohn über ein Jahr und in jedem üblichen Abrechnungszeitraum ergibt.",
      "Er hilft beim Vergleich eines Jobangebots mit Stundenlohn mit einer Festanstellung oder bei der Frage, wie sich Teilzeitstunden oder unbezahlte Wochen auf Ihr jährliches Bruttoeinkommen auswirken.",
    ],
    howToUse: [
      "Geben Sie Ihren Stundenlohn vor Steuern und Abzügen ein.",
      "Legen Sie Ihre bezahlten Stunden pro Woche und die bezahlten Wochen pro Jahr fest.",
      "Legen Sie Ihre Arbeitstage pro Woche fest, um einen genauen Tageswert zu erhalten.",
      "Lesen Sie das entsprechende Jahresgehalt und die Aufschlüsselung für jeden Abrechnungszeitraum ab.",
    ],
    formulas: [
      {
        title: "Jahresgehalt",
        expression: "Jahresentgelt = Stundenlohn × Stunden pro Woche × Wochen pro Jahr",
        explanation: "Wenn Sie mit den bezahlten statt den Kalenderwochen rechnen, können Sie unbezahlte Freizeit herausrechnen.",
      },
      {
        title: "Andere Abrechnungszeiträume",
        expression: "Monatlich = jährlich ÷ 12\nHalbmonatlich = jährlich ÷ 24\nZweiwöchentlich = jährlich ÷ 26\nWöchentlich = jährlich ÷ Wochen pro Jahr\nTäglich = jährlich ÷ (Arbeitstage pro Woche × Wochen pro Jahr)",
        explanation: "Jeder Zeitraum teilt denselben Jahresbetrag, sodass die Werte untereinander stimmig bleiben.",
      },
    ],
    examples: [
      {
        title: "25 $ pro Stunde, Vollzeit",
        steps: ["Jahresstunden = 40 × 52 = 2.080", "Jahresentgelt = 25 $ × 2.080 = 52.000 $"],
      },
      {
        title: "18,50 $ pro Stunde, 30 Stunden pro Woche, 50 bezahlte Wochen",
        steps: ["Jahresstunden = 30 × 50 = 1.500", "Jahresentgelt = 18,50 $ × 1.500 = 27.750 $"],
      },
      {
        title: "40 $ pro Stunde, 37,5 Stunden pro Woche, 48 bezahlte Wochen",
        steps: ["Jahresstunden = 37,5 × 48 = 1.800", "Jahresentgelt = 40 $ × 1.800 = 72.000 $"],
      },
    ],
    assumptions: [
      "Die Ergebnisse sind Bruttobeträge vor Steuern und Abzügen. Das Nettoentgelt wird nicht geschätzt.",
      "Jede bezahlte Stunde wird mit demselben Satz vergütet. Überstundenzuschläge, Trinkgelder, Boni und Schichtzulagen sind nicht enthalten.",
      "Monatliche, halbmonatliche und zweiwöchentliche Beträge teilen die Jahressumme durch 12, 24 und 26.",
      "Die Wahl einer Währung ändert nur die Formatierung. Es findet keine Wechselkursumrechnung statt.",
      "Die Ergebnisse werden für die Anzeige gerundet. Gerechnet wird mit voller Genauigkeit.",
    ],
    faqs: [
      {
        question: "Wie viel sind 20 $ pro Stunde im Jahr?",
        answer: "Bei 40 Stunden pro Woche und 52 Wochen ergeben 20 $ pro Stunde 20 $ × 2.080 = 41.600 $ Bruttoentgelt im Jahr.",
      },
      {
        question: "Wie viele Arbeitsstunden hat ein Jahr?",
        answer:
          "Eine Vollzeitstelle mit 40 Stunden pro Woche über 52 Wochen ergibt 2.080 bezahlte Stunden. Passen Sie die Stunden pro Woche oder die bezahlten Wochen an Ihre Situation an.",
      },
      {
        question: "Wie berücksichtige ich unbezahlten Urlaub?",
        answer: "Verringern Sie die bezahlten Wochen pro Jahr. Bei zwei unbezahlten Wochen geben Sie zum Beispiel 50 Wochen ein.",
      },
      {
        question: "Warum entspricht der Monatsbetrag nicht vier Wochenlöhnen?",
        answer:
          "Ein Monat ist im Durchschnitt länger als vier Wochen. Das Monatsentgelt ist die Jahressumme geteilt durch 12 – bei 52 Wochen im Jahr also etwa 4,33 Wochenlöhne.",
      },
      {
        question: "Ist das mein Nettoentgelt?",
        answer: "Nein. Es handelt sich um Bruttowerte vor Einkommensteuer und sonstigen Abzügen, die dieser Rechner nicht schätzt.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    hourlyRate: "Stundenlohn",
    hourlyRateHelp: "Bruttoentgelt pro Stunde, vor Steuern und Abzügen.",
    primary: "Entsprechendes Jahresgehalt",
    caption: "Bruttoentgelt pro Jahr beim eingegebenen Stundenlohn und Arbeitsplan.",
    monthly: "Bruttoentgelt pro Monat",
    annualHours: "Bezahlte Stunden pro Jahr",
  },
};

export default de;
