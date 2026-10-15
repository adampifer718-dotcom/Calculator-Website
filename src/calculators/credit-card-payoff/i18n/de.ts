import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CreditCardPayoffText } from "../text/en";

const years = { zero: "{n} Jahre", one: "{n} Jahr", two: "{n} Jahre", few: "{n} Jahre", many: "{n} Jahre", other: "{n} Jahre" };
const months = { zero: "{n} Monate", one: "{n} Monat", two: "{n} Monate", few: "{n} Monate", many: "{n} Monate", other: "{n} Monate" };

const de: CalculatorTranslation<CreditCardPayoffText> = {
  content: {
    title: "Kreditkarten-Tilgungsrechner",
    shortTitle: "Kreditkarte abbezahlen",
    summary: "Sehen Sie, wie viele Monate eine feste Rate braucht, um einen Kreditkartensaldo zu tilgen, oder welche Rate nötig ist, um ihn bis zu einem Termin abzuzahlen.",
    metaTitle: "Kreditkarten-Tilgungsrechner – Monate und Zinsen",
    metaDescription: "Wie lange dauert es mit fester Monatsrate, eine Kreditkarte abzuzahlen? Mit Gesamtzinsen oder der Rate, um in festen Monaten schuldenfrei zu sein.",
    keywords: ["Kreditkarte abbezahlen", "Kreditkartenschulden tilgen", "Kreditkartenzinsen", "Schulden abbezahlen", "Tilgungsdauer berechnen", "Kreditkarte Rate", "Sollzins"],
    intro: [
      "Kreditkartenzinsen fallen auf den gesamten offenen Saldo an, daher kann eine kleine Monatsrate Sie jahrelang verschuldet halten. Dieser Rechner zeigt, was eine feste monatliche Zahlung bewirkt.",
      "Wählen Sie, ob Sie wissen möchten, wie lange Ihre Rate braucht, oder wie viel Sie monatlich zahlen müssen, um die Karte in einer gewählten Zahl von Monaten abzuzahlen. Eine Jahrestabelle zeigt, wie der Saldo sinkt und wie viel Zinsen an den Kartenanbieter gehen.",
    ],
    howToUse: [
      "Wählen Sie die Währung für die Beträge.",
      "Wählen Sie, was Sie berechnen möchten: die Tilgungsdauer oder die nötige Rate.",
      "Geben Sie den aktuellen Saldo und den nominalen Jahreszins (APR) der Karte ein.",
      "Geben Sie Ihre feste Monatsrate ein oder die Zahl der Monate, in denen Sie schuldenfrei sein möchten.",
      "Lesen Sie das Ergebnis, die Gesamtzinsen und die Tabelle nach Jahren ab.",
    ],
    formulas: [
      { title: "Monatliche Zinsen", expression: "Zinsen = Saldo × APR ÷ 12", explanation: "Jeden Monat werden die Zinsen zum Saldo addiert und dann die Rate abgezogen. Die letzte Rate ist nur noch der Restbetrag." },
      { title: "Rate für einen Zieltermin", expression: "PMT = B × i ÷ (1 − (1 + i)^(−n))", explanation: "B ist der Saldo, i = APR ÷ 12 als Dezimalzahl und n die Zahl der Monate. Bei 0 % APR gilt PMT = B ÷ n." },
      { title: "Wenn die Rate zu klein ist", expression: "Rate ≤ B × i", explanation: "Übersteigt die Rate nicht die Zinsen des ersten Monats, sinkt der Saldo nie." },
    ],
    examples: [
      {
        title: "3.200 $ zu 19,99 % APR, 120 $ pro Monat",
        steps: [
          "Monatszins = 19,99 % ÷ 12 ≈ 1,666 %",
          "Erster Monat: Zinsen ≈ 53,31 $, also senken 66,69 $ der 120 $ den Saldo",
          "Monat für Monat wiederholt, ist die 36. Rate eine Teilzahlung von etwa 66,69 $",
          "Gesamtzinsen ≈ 1.066,69 $",
        ],
      },
      {
        title: "6.500 $ zu 24,5 % APR, getilgt in 36 Monaten",
        steps: ["i = 0,245 ÷ 12 ≈ 0,020417; n = 36", "PMT = 6.500 × i ÷ (1 − (1 + i)^−36)", "≈ 256,72 $ pro Monat, insgesamt etwa 2.742 $ Zinsen"],
      },
      {
        title: "1.500 $ zu einem Aktionszins von 0 %, getilgt in 10 Monaten",
        steps: ["Keine Zinsen, also wird der Saldo gleichmäßig aufgeteilt", "PMT = 1.500 ÷ 10 = 150 $"],
      },
    ],
    assumptions: [
      "Die Zinsen werden monatlich zu APR ÷ 12 berechnet. Viele Anbieter verwenden einen täglichen Zinssatz auf den durchschnittlichen Tagessaldo, daher weichen echte Abrechnungen leicht ab.",
      "Es gibt keine neuen Einkäufe, Bargeldabhebungen, Gebühren, Strafzinsen oder Zinsänderungen, und jede Rate wird pünktlich gezahlt.",
      "Die Raten werden nicht auf Cent gerundet, und Aktionszinsen gelten annahmegemäß für den gesamten Zeitraum.",
      "Dies ist eine Schätzung, keine Finanzberatung, und sie wurde nicht fachlich geprüft. Prüfen Sie Ihren Kartenvertrag und Ihre Abrechnung auf die Werte, die für Sie gelten.",
    ],
    faqs: [
      {
        question: "Warum dauert es mit einer kleinen Rate so lange?",
        answer: "Ein Großteil einer kleinen Rate wird von den Zinsen aufgezehrt. Nur der Rest senkt den Saldo, daher sinkt er langsam und verursacht weiter Zinsen. Schon eine moderate Erhöhung der Rate kann Dauer und Zinsen deutlich verringern.",
      },
      {
        question: "Warum weicht die Tilgungsdauer auf meiner Abrechnung ab?",
        answer: "Abrechnungen gehen meist davon aus, dass Sie nur den Mindestbetrag zahlen, der mit sinkendem Saldo kleiner wird, und Anbieter berechnen Zinsen meist täglich. Dieser Rechner geht von derselben festen Rate jeden Monat und monatlichen Zinsen aus.",
      },
      {
        question: "Was ist, wenn meine Rate kleiner als die Zinsen ist?",
        answer: "Dann sinkt der Saldo nie, und der Rechner zeigt einen Fehler an. Sie müssen mehr als die Zinsen des ersten Monats zahlen, die in der Fehlermeldung stehen, bevor ein Teil der Rate Ihre Schulden verringert.",
      },
    ],
    sourcesUsedFor: [
      "Die Angaben zu Tilgungsdauer und 36-Monats-Rate auf US-Kartenabrechnungen, die ebenfalls keine neuen Einkäufe annehmen.",
      "Was der Jahreszins (APR) einer Kreditkarte bedeutet.",
    ],
  },
  text: {
    mode: "Berechnen",
    modes: { payment: "Tilgungsdauer", months: "Nötige Rate" },
    balance: "Kartensaldo",
    balanceHelp: "Der Betrag, den Sie heute auf der Karte schulden.",
    apr: "Jahreszins für Einkäufe (APR)",
    aprHelp: "Der jährliche Zinssatz, der auf Ihrer Abrechnung steht.",
    payment: "Monatsrate",
    paymentHelp: "Derselbe Betrag, jeden Monat gezahlt, bis der Saldo getilgt ist.",
    months: "Abzahlen innerhalb von",
    monthsHelp: "Anzahl der Monatsraten, von 1 bis 600.",
    monthsSuffix: "Monaten",
    errors: {
      neverPaid: "Diese Rate deckt nicht die Zinsen des ersten Monats von {interest}, daher würde der Saldo nie getilgt. Geben Sie eine höhere Rate ein.",
      tooLong: "Mit dieser Rate würde die Tilgung der Karte mehr als 1.200 Monate (100 Jahre) dauern. Geben Sie eine höhere Rate ein.",
    },
    units: { years, months },
    yearsMonths: "{years} und {months}",
    timeToPayoff: "Tilgungsdauer",
    captionPayment: "Mit {payment} pro Monat auf {balance} bei {apr} APR: etwa {duration}.",
    requiredPayment: "Nötige Monatsrate",
    captionMonths: "Tilgt {balance} bei {apr} APR in {duration}.",
    totalInterest: "Zinsen gesamt",
    totalPaid: "Gezahlt gesamt",
    lastPayment: "Letzte (Teil-)Rate",
    firstInterest: "Zinsen im ersten Monat",
    numberOfPayments: "Anzahl der Raten",
    tableCaption: "Saldo nach Jahren",
    tableColumns: { year: "Jahr", interest: "Gezahlte Zinsen", paid: "Geleistete Raten", balance: "Saldo am Jahresende" },
    notes: {
      monthly: "Die Zinsen werden jeden Monat zu APR ÷ 12 aufgeschlagen. Viele Anbieter berechnen Zinsen auf den durchschnittlichen Tagessaldo, daher weichen die Werte auf Ihrer Abrechnung leicht ab.",
      noPurchases: "Die Schätzung geht davon aus, dass während der Tilgung keine neuen Einkäufe, Gebühren oder Zinsänderungen anfallen.",
      zeroRate: "Bei 0 % APR wird der Saldo einfach in gleiche Raten aufgeteilt.",
    },
  },
};

export default de;
