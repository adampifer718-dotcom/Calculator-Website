import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SimpleInterestText } from "../text/en";

const de: CalculatorTranslation<SimpleInterestText> = {
  content: {
    title: "Rechner für einfache Zinsen",
    shortTitle: "Einfache Zinsen",
    summary: "Berechnen Sie einfache Zinsen und den geschuldeten oder erzielten Gesamtbetrag aus Kapital, Jahreszins und Laufzeit.",
    metaTitle: "Rechner für einfache Zinsen – I = Prt",
    metaDescription: "Berechnen Sie einfache Zinsen mit I = Prt für eine Laufzeit in Jahren, Monaten oder Tagen – mit Gesamtbetrag, Zinsen pro Jahr und Zinsen pro Monat.",
    keywords: ["einfache Zinsen berechnen", "Zinsrechnung", "Zinsformel", "Kapital", "Zinssatz", "lineare Verzinsung", "Tageszinsen", "Gesamtbetrag"],
    intro: [
      "Einfache Zinsen werden nur auf den ursprünglichen Betrag berechnet. Die Zinsen sind in jedem Jahr gleich hoch, sodass der Gesamtbetrag linear wächst, statt sich lawinenartig zu vergrößern.",
      "Sie werden für viele kurzfristige Kredite, manche Autokredite, Anleihen mit festem Kupon und Finanzaufgaben im Unterricht verwendet. Geben Sie das Kapital, den Jahreszins und die Dauer ein, für die das Geld geliehen oder angelegt wird.",
    ],
    howToUse: [
      "Wählen Sie die Währung, in der die Beträge angezeigt werden sollen.",
      "Geben Sie das Kapital ein: den geliehenen oder eingezahlten Betrag.",
      "Geben Sie den jährlichen Zinssatz in Prozent ein.",
      "Geben Sie die Laufzeit ein und wählen Sie Jahre, Monate oder Tage.",
      "Lesen Sie die Zinsen, den Gesamtbetrag sowie die Zinsen pro Jahr und pro Monat ab.",
    ],
    formulas: [
      { title: "Einfache Zinsen", expression: "I = P × r × t", explanation: "P ist das Kapital, r der Jahreszins als Dezimalzahl (5 % = 0,05) und t die Laufzeit in Jahren." },
      { title: "Gesamtbetrag", expression: "A = P + I = P × (1 + r × t)", explanation: "Was am Ende zurückgezahlt wird oder vorhanden ist." },
      { title: "Umrechnung der Laufzeit", expression: "t = Monate ÷ 12 oder t = Tage ÷ 365", explanation: "Monate und Tage werden vor der Anwendung der Formel in Jahre umgerechnet." },
    ],
    examples: [
      {
        title: "2.500 $ zu 4,2 % für 3 Jahre",
        steps: ["I = 2.500 × 0,042 × 3", "= 315 $", "A = 2.500 + 315 = 2.815 $"],
      },
      {
        title: "8.000 $ zu 6,5 % für 18 Monate",
        steps: ["t = 18 ÷ 12 = 1,5 Jahre", "I = 8.000 × 0,065 × 1,5", "= 780 $"],
      },
      {
        title: "1.200 $ zu 9 % für 90 Tage",
        steps: ["t = 90 ÷ 365 ≈ 0,2466 Jahre", "I = 1.200 × 0,09 × 90 ÷ 365", "≈ 26,63 $"],
      },
    ],
    assumptions: [
      "Die Zinsen sind einfach: Sie werden nie dem Kapital zugeschlagen, es fallen also keine Zinsen auf Zinsen an.",
      "Tage werden mit einem Jahr von 365 Tagen umgerechnet. Manche Kreditgeber und Geldmärkte verwenden ein Jahr mit 360 Tagen (mitunter als „ordinary interest“ oder „banker’s interest“ bezeichnet), was bei gleicher Anzahl von Tagen etwas mehr Zinsen ergibt.",
      "Der Zinssatz ist für den gesamten Zeitraum fest. Gebühren, Steuern und vorzeitige Rückzahlung sind nicht berücksichtigt.",
      "Die Wahl einer Währung ändert nur die Formatierung. Dies ist keine Finanzberatung.",
    ],
    faqs: [
      { question: "Wie unterscheiden sich einfache Zinsen vom Zinseszins?", answer: "Einfache Zinsen werden immer auf das Anfangskapital berechnet. Beim Zinseszins werden die Zinsen jeder Periode dem Guthaben zugeschlagen, sodass spätere Zinsen auch auf frühere Zinsen anfallen und der Gesamtbetrag schneller wächst." },
      { question: "Wie ermittle ich den Zinssatz, wenn ich die Zinsen kenne?", answer: "Stellen Sie die Formel um: r = I ÷ (P × t). Zum Beispiel bedeuten 90 $ Zinsen auf 1.000 $ über 2 Jahre r = 90 ÷ 2.000 = 0,045, also 4,5 % pro Jahr." },
      { question: "Warum weicht der Betrag meines Kreditgebers bei einer Anzahl von Tagen leicht ab?", answer: "Kreditgeber teilen möglicherweise durch 360 statt 365 oder zählen in einem Schaltjahr die tatsächlichen Tage. Die Division durch 360 erhöht die Zinsen um etwa 1,4 %." },
    ],
    sourcesUsedFor: ["Die Formel für einfache Zinsen I = Prt und die Bedeutung jeder Variablen."],
  },
  text: {
    principal: "Kapital",
    principalHelp: "Der geliehene oder eingezahlte Betrag.",
    rate: "Jährlicher Zinssatz",
    time: "Laufzeit",
    timeUnit: "Zeiteinheit",
    timeUnits: { years: "Jahre", months: "Monate", days: "Tage" },
    tooLong: "Verwenden Sie eine Laufzeit von höchstens 100 Jahren.",
    interest: "Einfache Zinsen",
    caption: "Zinsen auf {principal} zu {rate} pro Jahr, ohne Zinseszins.",
    total: "Gesamtbetrag (Kapital + Zinsen)",
    perYear: "Zinsen pro Jahr",
    perMonth: "Zinsen pro Monat",
    timeInYears: "Laufzeit in Jahren",
    notes: {
      simple: "Einfache Zinsen werden nur auf das Kapital berechnet; Zinsen werden nicht weiter verzinst.",
      days: "Tage werden mit einem Jahr von 365 Tagen umgerechnet. Manche Kreditgeber verwenden ein Jahr mit 360 Tagen, was etwas mehr Zinsen ergibt.",
    },
  },
};

export default de;
