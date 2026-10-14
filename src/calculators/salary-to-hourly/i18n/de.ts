import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SalaryToHourlyText } from "../text/en";

const de: CalculatorTranslation<SalaryToHourlyText> = {
  content: {
    title: "Gehalt-in-Stundenlohn-Rechner",
    shortTitle: "Gehalt in Stundenlohn",
    summary: "Rechnen Sie Jahres-, Monats-, Zweiwochen- oder andere Bruttobezüge anhand Ihrer eigenen Arbeitszeit in einen Stundenlohn um.",
    metaTitle: "Gehalt-in-Stundenlohn-Rechner – jeden Zahlungszeitraum umrechnen",
    metaDescription:
      "Rechnen Sie Ihr Gehalt in einen Stundenlohn um: Jahres-, Monats-, Halbmonats-, Zweiwochen-, Wochen- oder Tagesbrutto mit Ihren Stunden, Arbeitstagen und Wochen.",
    keywords: ["Gehalt in Stundenlohn", "Stundenlohn berechnen", "Jahresgehalt in Stundenlohn", "Monatsgehalt in Stundenlohn", "Bruttostundenlohn", "Stundensatz Rechner"],
    intro: [
      "Dieser Rechner wandelt Bruttobezüge aus jedem gängigen Zahlungszeitraum in einen entsprechenden Stundenlohn um. Außerdem zeigt er, was derselbe Verdienst pro Jahr, Monat, Halbmonat, zwei Wochen, Woche und Arbeitstag ergibt.",
      "Das Ergebnis hängt von der eingegebenen Arbeitszeit ab. Ein Gehalt von 60.000 $ entspricht bei 40 Wochenstunden und 52 Wochen etwa 28,85 $ pro Stunde, bei 37,5 Wochenstunden dagegen etwa 30,77 $ pro Stunde.",
    ],
    howToUse: [
      "Geben Sie Ihren Bruttoverdienst vor Steuern und Abzügen ein.",
      "Wählen Sie, wie oft Sie diesen Betrag erhalten: jährlich, monatlich, halbmonatlich, alle zwei Wochen, wöchentlich, täglich oder stündlich.",
      "Legen Sie Ihre bezahlten Wochenstunden, Arbeitstage pro Woche und bezahlten Wochen pro Jahr fest. Voreingestellt sind 40 Stunden, 5 Tage und 52 Wochen.",
      "Lesen Sie den entsprechenden Stundenlohn und die vollständige Aufschlüsselung nach Zahlungszeiträumen ab. Die Ergebnisse werden während der Eingabe aktualisiert.",
    ],
    formulas: [
      {
        title: "Betrag auf das Jahr hochrechnen",
        expression:
          "Jahresverdienst = Betrag × Zeiträume pro Jahr\nJährlich = 1, Monatlich = 12, Halbmonatlich = 24, Zweiwöchentlich = 26\nWöchentlich = Wochen pro Jahr\nTäglich = Arbeitstage pro Woche × Wochen pro Jahr\nStündlich = Stunden pro Woche × Wochen pro Jahr",
        explanation:
          "Jährliche, monatliche, halbmonatliche und zweiwöchentliche Zahlungen werden mit festen Kalenderwerten gerechnet. Wöchentliche, tägliche und stündliche Zahlungen werden mit der von Ihnen eingegebenen Arbeitszeit hochgerechnet.",
      },
      {
        title: "Durch die bezahlten Stunden teilen",
        expression: "Jahresstunden = Stunden pro Woche × Wochen pro Jahr\nStundenlohn = Jahresverdienst ÷ Jahresstunden",
        explanation: "Der Stundenlohn verteilt den hochgerechneten Bruttojahresverdienst gleichmäßig auf jede bezahlte Stunde des Jahres.",
      },
      {
        title: "Andere Zahlungszeiträume",
        expression: "Verdienst pro Zeitraum = Jahresverdienst ÷ Zeiträume pro Jahr",
        explanation: "Die Aufschlüsselung teilt den Jahresbetrag durch die Anzahl der jeweiligen Zeiträume. Gerundet wird nur für die Anzeige.",
      },
    ],
    examples: [
      { title: "Jahresgehalt von 60.000 $, Vollzeit", steps: ["Jahresstunden = 40 × 52 = 2.080", "Stundenlohn = 60.000 $ ÷ 2.080 = 28,846… $"] },
      {
        title: "4.500 $ pro Monat",
        steps: ["Jahresverdienst = 4.500 $ × 12 = 54.000 $", "Jahresstunden = 40 × 52 = 2.080", "Stundenlohn = 54.000 $ ÷ 2.080 = 25,961… $"],
      },
      {
        title: "2.000 $ alle zwei Wochen bei 37,5 Wochenstunden",
        steps: ["Jahresverdienst = 2.000 $ × 26 = 52.000 $", "Jahresstunden = 37,5 × 52 = 1.950", "Stundenlohn = 52.000 $ ÷ 1.950 = 26,666… $"],
      },
      {
        title: "250 $ pro Tag, 4 Tage pro Woche, 48 bezahlte Wochen",
        steps: ["Jahresverdienst = 250 $ × 4 × 48 = 48.000 $", "Jahresstunden = 32 × 48 = 1.536", "Stundenlohn = 48.000 $ ÷ 1.536 = 31,25 $"],
      },
    ],
    assumptions: [
      "Alle Beträge sind Bruttobezüge vor Einkommensteuer, Sozialabgaben, Altersvorsorgebeiträgen und sonstigen Abzügen. Dieser Rechner schätzt weder Steuern noch das Nettoeinkommen.",
      "Monatliche, halbmonatliche und zweiwöchentliche Zahlungen werden mit 12, 24 bzw. 26 Zeiträumen pro Jahr hochgerechnet, unabhängig von den eingegebenen Wochen pro Jahr.",
      "Wöchentliche, tägliche und stündliche Zahlungen werden mit Ihren Wochen pro Jahr, Arbeitstagen pro Woche und Stunden pro Woche hochgerechnet.",
      "Überstunden, Boni, Provisionen, Zusatzleistungen und unbezahlte Pausen sind nicht berücksichtigt, sofern Sie sie nicht zum Betrag hinzurechnen.",
      "Die Wahl der Währung ändert nur Symbol und Formatierung. Es findet keine Währungsumrechnung statt.",
      "Die Ergebnisse werden für die Anzeige gerundet. Gerechnet wird mit voller Genauigkeit.",
    ],
    faqs: [
      {
        question: "Wie rechne ich mein Jahresgehalt in einen Stundenlohn um?",
        answer:
          "Teilen Sie das Jahresgehalt durch die Zahl der bezahlten Stunden im Jahr. Bei 40 Stunden pro Woche und 52 Wochen sind das 2.080 Stunden, ein Gehalt von 50.000 $ ergibt also 50.000 $ ÷ 2.080 ≈ 24,04 $ pro Stunde.",
      },
      {
        question: "Warum wird eine zweiwöchentliche Zahlung mit 26 statt mit 2 × Wochen pro Jahr multipliziert?",
        answer:
          "Bei zweiwöchentlicher Zahlung gibt es in einem normalen Jahr 26 Gehaltsabrechnungen. Monats-, Halbmonats- und Zweiwochengehälter sind meist pro Abrechnung fest, deshalb werden sie mit einem Kalenderwert hochgerechnet und nicht mit den eingegebenen bezahlten Wochen.",
      },
      {
        question: "Was ist der Unterschied zwischen halbmonatlicher und zweiwöchentlicher Zahlung?",
        answer:
          "Halbmonatlich wird zweimal im Monat gezahlt, also 24-mal im Jahr. Zweiwöchentlich wird alle zwei Wochen gezahlt, also 26-mal im Jahr. Beim gleichen Jahresgehalt fällt die zweiwöchentliche Zahlung daher kleiner aus als die halbmonatliche.",
      },
      {
        question: "Ist der Stundenlohn mein Nettoverdienst?",
        answer:
          "Nein. Das Ergebnis ist der Bruttoverdienst vor Steuern und Abzügen. Ihr Nettoverdienst hängt von Ihrer steuerlichen Situation, Zusatzleistungen und Einbehalten ab, die dieser Rechner nicht schätzt.",
      },
      {
        question: "Sollte ich 52 Wochen pro Jahr verwenden?",
        answer:
          "Verwenden Sie 52, wenn Sie für jede Woche des Jahres bezahlt werden, einschließlich bezahlter Feiertage und Urlaub. Sind einige Wochen unbezahlt, geben Sie nur die bezahlten Wochen ein. Ein Kalenderjahr hat etwa 52,14 Wochen, die Sie ebenfalls eingeben können.",
      },
      {
        question: "Wird der Betrag beim Wechsel der Währung umgerechnet?",
        answer: "Nein. Die Währungseinstellung ändert nur die Formatierung der Zahlen. Geben Sie Beträge in der Währung ein, in der Sie bezahlt werden.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    amount: "Bruttoverdienst",
    amountHelp: "Verdienst vor Steuern und Abzügen.",
    period: "Zahlungszeitraum",
    periodHelp: "Wie oft Sie den obigen Betrag erhalten.",
    primary: "Entsprechender Stundenlohn",
    caption: "Bruttoverdienst pro Stunde, umgerechnet aus dem Zahlungszeitraum „{period}“.",
    annual: "Bruttojahresverdienst",
    annualHours: "Bezahlte Stunden pro Jahr",
  },
};

export default de;
