import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LoanPaymentText } from "../text/en";

const de: CalculatorTranslation<LoanPaymentText> = {
  content: {
    title: "Kreditrechner",
    shortTitle: "Kreditrate",
    summary: "Berechnen Sie die Monatsrate, die Gesamtzinsen und den Tilgungsplan für einen Kredit oder eine Hypothek mit festem Zinssatz.",
    metaTitle: "Kreditrechner – Monatsrate und Zinsen berechnen",
    metaDescription:
      "Berechnen Sie aus Betrag, effektivem Jahreszins und Laufzeit die Monatsrate eines Kredits mit Festzins, die Gesamtzinsen und einen jährlichen Tilgungsplan.",
    keywords: ["Kreditrechner", "Monatsrate berechnen", "Tilgungsplan", "Annuitätendarlehen", "Baufinanzierung Rechner", "Autokredit", "Ratenkredit", "Zinsen berechnen"],
    intro: [
      "Die meisten Autokredite, Ratenkredite und Hypotheken mit festem Zinssatz werden in gleich hohen Monatsraten zurückgezahlt. Jede Rate deckt die Zinsen des Monats und tilgt einen Teil der Restschuld.",
      "Geben Sie Kreditbetrag, Jahreszins und Laufzeit ein, um die Rate, die Gesamtzinsen und die jährliche Entwicklung der Restschuld zu sehen.",
    ],
    howToUse: [
      "Geben Sie den geliehenen Betrag ein.",
      "Geben Sie den effektiven Jahreszins ein.",
      "Geben Sie die Laufzeit in Jahren ein.",
      "Lesen Sie die Monatsrate, die Gesamtzinsen und den jährlichen Tilgungsplan ab.",
    ],
    formulas: [
      { title: "Monatsrate", expression: "M = P × r ÷ (1 − (1 + r)^(−n))", explanation: "P ist der Kreditbetrag, r der Monatszins (Jahreszins ÷ 12) und n die Anzahl der Monatsraten." },
      { title: "Ohne Zinsen", expression: "M = P ÷ n", explanation: "Ohne Zinsen wird der Kredit gleichmäßig aufgeteilt." },
      { title: "Restschuld", expression: "B_k = P(1 + r)^k − M((1 + r)^k − 1) ÷ r", explanation: "Restschuld nach k Raten, Grundlage für den Tilgungsplan." },
    ],
    examples: [
      {
        title: "200.000 $ zu 6 % über 30 Jahre",
        steps: ["r = 0,06 ÷ 12 = 0,005; n = 360", "M = 200.000 × 0,005 ÷ (1 − 1,005^−360) ≈ 1.199,10 $"],
      },
      {
        title: "10.000 $ zu 0 % über 5 Jahre",
        steps: ["n = 60 Raten", "M = 10.000 ÷ 60 ≈ 166,67 $"],
      },
    ],
    assumptions: [
      "Fester Zinssatz, gleich hohe Monatsraten und keine Sondertilgungen.",
      "Grundsteuer, Versicherungen, Gebühren, Disagio und private Hypothekenversicherung sind nicht enthalten.",
      "Kreditgeber runden die Raten unter Umständen jeden Monat auf den Cent, daher kann die letzte Rate leicht abweichen. Dies ist keine Finanzberatung.",
    ],
    faqs: [
      {
        question: "Wie wird die monatliche Kreditrate berechnet?",
        answer: "Mit der Annuitätenformel M = P × r ÷ (1 − (1 + r)^−n), wobei r der Monatszins und n die Anzahl der Raten ist.",
      },
      {
        question: "Warum besteht eine frühe Rate größtenteils aus Zinsen?",
        answer: "Zinsen werden auf die Restschuld berechnet, und die ist zu Beginn am höchsten. Mit sinkender Restschuld fließt ein immer größerer Teil jeder Rate in die Tilgung.",
      },
      {
        question: "Spart eine kürzere Laufzeit Geld?",
        answer: "Meistens ja: Die Raten sind höher, aber Sie zahlen weniger Jahre lang Zinsen, sodass die Gesamtzinsen niedriger ausfallen.",
      },
    ],
    sourcesUsedFor: ["Barwert einer Annuität und die Formel für Kredite mit gleich hohen Raten."],
  },
  text: {
    principal: "Kreditbetrag",
    rate: "Effektiver Jahreszins",
    years: "Laufzeit",
    termTooShort: "Die Laufzeit muss mindestens einen Monat betragen.",
    payment: "Monatsrate",
    caption: "{count} Monatsraten bei {rate} effektivem Jahreszins.",
    total: "Summe aller Raten",
    interest: "Gesamtzinsen",
    tableCaption: "Tilgungsplan nach Jahren",
    tableColumns: { year: "Jahr", principal: "Getilgt", interest: "Gezahlte Zinsen", balance: "Restschuld" },
    note: "Fester Zinssatz mit gleich hohen Monatsraten. Steuern, Versicherungen, Gebühren und Zinsänderungen sind nicht berücksichtigt.",
  },
};

export default de;
