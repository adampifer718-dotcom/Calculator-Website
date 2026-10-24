import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DepreciationText } from "../text/en";

const years = { zero: "{n} Jahre", one: "{n} Jahr", two: "{n} Jahre", few: "{n} Jahre", many: "{n} Jahre", other: "{n} Jahre" };

const de: CalculatorTranslation<DepreciationText> = {
  content: {
    title: "Abschreibungsrechner",
    shortTitle: "Abschreibung",
    summary: "Erstellen Sie einen jährlichen Abschreibungsplan mit linearer, degressiver oder digitaler Abschreibung (Summe der Jahresziffern).",
    metaTitle: "Abschreibungsrechner – linear, degressiv und digital",
    metaDescription: "Berechnen Sie jährliche Abschreibung und Buchwert linear, doppelt oder 150 % degressiv oder digital nach Jahresziffern, mit vollständigem Abschreibungsplan.",
    keywords: ["Abschreibung berechnen", "lineare Abschreibung", "degressive Abschreibung", "doppelt degressiv", "digitale Abschreibung", "Buchwert", "Abschreibungsplan", "Restwert"],
    intro: [
      "Die Abschreibung verteilt die Kosten eines langlebigen Wirtschaftsguts, etwa einer Maschine, eines Fahrzeugs oder eines Computers, auf die Jahre seiner Nutzung. Jedes Jahr wird ein Teil der Kosten zu Aufwand, und der Buchwert sinkt, bis er den erwarteten Restwert erreicht.",
      "Dieser Rechner vergleicht vier gängige Methoden der Rechnungslegung. Die lineare Abschreibung setzt jedes Jahr denselben Betrag an. Die degressive und die digitale Abschreibung setzen in den ersten Jahren mehr und später weniger an, was zu Wirtschaftsgütern passt, die schnell an Wert verlieren.",
    ],
    howToUse: [
      "Wählen Sie die Währung und geben Sie die Anschaffungskosten des Wirtschaftsguts ein.",
      "Geben Sie den Restwert ein, den Sie am Ende der Nutzungsdauer erwarten, oder 0.",
      "Geben Sie die Nutzungsdauer in ganzen Jahren ein.",
      "Wählen Sie eine Methode und lesen Sie die Abschreibung im ersten Jahr sowie den vollständigen Plan mit Abschreibung, kumulierter Abschreibung und Buchwert ab.",
    ],
    formulas: [
      { title: "Linear", expression: "D = (C − S) ÷ N", explanation: "C sind die Anschaffungskosten, S der Restwert und N die Nutzungsdauer in Jahren. Der Betrag ist jedes Jahr gleich." },
      { title: "Degressiv", expression: "Dₖ = min(Bₖ₋₁ × f ÷ N, Bₖ₋₁ − S)", explanation: "Bₖ₋₁ ist der Buchwert zu Beginn des Jahres k und f ist 2 (doppelt degressiv) oder 1,5. Im letzten Jahr wird abgeschrieben, was noch über dem Restwert liegt." },
      { title: "Digital (Summe der Jahresziffern)", expression: "Dₖ = (C − S) × (N − k + 1) ÷ (N(N + 1) ÷ 2)", explanation: "Bei 5 Jahren Nutzungsdauer ergeben die Ziffern zusammen 15, die jährlichen Anteile sind also 5/15, 4/15, 3/15, 2/15 und 1/15." },
      { title: "Buchwert", expression: "Bₖ = C − (D₁ + … + Dₖ)", explanation: "Die Anschaffungskosten abzüglich der kumulierten Abschreibung. Er endet beim Restwert." },
    ],
    examples: [
      { title: "Linear: Transporter für 30.000 $, 3.000 $ Restwert, 5 Jahre", steps: ["Abschreibungsbetrag = 30.000 − 3.000 = 27.000 $", "Jährliche Abschreibung = 27.000 ÷ 5 = 5.400 $", "Buchwert nach Jahr 5 = 3.000 $"] },
      {
        title: "Doppelt degressiv: Ausrüstung für 12.000 $, 1.500 $ Restwert, 5 Jahre",
        steps: [
          "Satz = 2 ÷ 5 = 40 % des Buchwerts pro Jahr",
          "Jahr 1 = 12.000 × 0,40 = 4.800 $, verbleibend 7.200 $",
          "Jahre 2–4 = 2.880 $, 1.728 $ und 1.036,80 $, verbleibend 1.555,20 $",
          "Jahr 5 nimmt die restlichen 55,20 $, sodass der Buchwert bei 1.500 $ endet",
        ],
      },
      { title: "Digital: Maschine für 50.000 €, 5.000 € Restwert, 10 Jahre", steps: ["Ziffernsumme = 10 × 11 ÷ 2 = 55", "Jahr 1 = 45.000 × 10 ÷ 55 ≈ 8.181,82 €", "Jahr 2 = 45.000 × 9 ÷ 55 ≈ 7.363,64 €"] },
    ],
    assumptions: [
      "Es handelt sich um Methoden der Rechnungslegung mit Ganzjahreskonvention: Im ersten Jahr wird eine volle Jahresabschreibung angesetzt, ohne Halbjahres-, Quartalsmitte- oder Monatsmitte-Konventionen.",
      "Die US-Steuerabschreibung für die meisten Betriebsvermögen verwendet MACRS, beschrieben in IRS Publication 946, mit eigenen Nutzungsdauern, Konventionen und Prozenttabellen. Dieses Werkzeug berechnet weder MACRS noch Section 179 noch Sonderabschreibungen (Bonus Depreciation), und andere Länder haben eigene Steuerregeln.",
      "Bei der degressiven Methode wird der Buchwert nie unter den Restwert gesenkt, und der verbleibende Betrag wird im letzten Jahr angesetzt. Manche Unternehmen wechseln stattdessen zwischendurch zur linearen Abschreibung; dieses Werkzeug tut das nicht.",
      "Dies ist eine Schätzung, keine Steuer- oder Buchhaltungsberatung, und sie wurde nicht fachlich geprüft.",
    ],
    faqs: [
      { question: "Welche Abschreibungsmethode sollte ich verwenden?", answer: "Die lineare Abschreibung ist die einfachste und im Jahresabschluss die gebräuchlichste. Beschleunigte Methoden passen zu Wirtschaftsgütern, die früh den Großteil ihres Werts oder Nutzens verlieren, etwa Fahrzeuge und Computer. Welche Methode Sie steuerlich verwenden dürfen, entscheiden Ihre Steuerberatung und die örtlichen Vorschriften." },
      { question: "Warum sieht das letzte Jahr bei der degressiven Methode anders aus?", answer: "Ein fester Prozentsatz eines sinkenden Werts erreicht den Restwert nie genau. Der Rechner setzt im letzten Jahr an, was noch über dem Restwert liegt, und das kann größer oder kleiner sein als im Vorjahr." },
      { question: "Wird der Restwert abgezogen, bevor der degressive Satz angewendet wird?", answer: "Nein. Der degressive Satz wird auf den vollen Buchwert angewendet. Der Restwert wirkt nur als Untergrenze: Der Buchwert darf nicht darunter fallen." },
    ],
    sourcesUsedFor: ["Dass die US-Steuerabschreibung für die meisten Betriebsvermögen MACRS verwendet, das sich von den hier berechneten Methoden der Rechnungslegung unterscheidet, sowie die allgemeinen Konzepte der linearen und degressiven Abschreibung."],
  },
  text: {
    cost: "Anschaffungskosten",
    costHelp: "Der Kaufpreis zuzüglich der Kosten, um das Wirtschaftsgut einsatzbereit zu machen, etwa Lieferung und Installation.",
    salvage: "Restwert",
    salvageHelp: "Was das Wirtschaftsgut am Ende seiner Nutzungsdauer voraussichtlich noch wert ist. Geben Sie 0 ein, wenn es keinen Wert mehr hat.",
    life: "Nutzungsdauer",
    method: "Methode",
    methods: {
      straightLine: "Linear",
      declining200: "Doppelt degressiv (200 %)",
      declining150: "Degressiv mit 150 %",
      sumOfYears: "Digital (Summe der Jahresziffern)",
    },
    errors: {
      salvage: "Der Restwert muss kleiner sein als die Anschaffungskosten.",
    },
    firstYear: "Abschreibung im ersten Jahr",
    caption: "{method}: {cost} Anschaffungskosten, {salvage} Restwert, {life}.",
    lifeYears: years,
    base: "Abschreibungsbetrag (Kosten − Restwert)",
    rateStraight: "Angewandter Satz (Anteil am Abschreibungsbetrag pro Jahr)",
    rateDeclining: "Jährlich auf den Buchwert angewandter Satz",
    rateSumOfYears: "Anteil am Abschreibungsbetrag im ersten Jahr",
    total: "Gesamte Abschreibung über die Nutzungsdauer",
    finalYear: "Abschreibung im letzten Jahr",
    table: {
      caption: "Abschreibungsplan",
      year: "Jahr",
      depreciation: "Abschreibung",
      accumulated: "Kumulierte Abschreibung",
      bookValue: "Buchwert am Jahresende",
      yearLabel: "Jahr {n}",
    },
    notes: {
      fullYear: "Im ersten Jahr wird unabhängig vom Kaufdatum eine volle Jahresabschreibung angesetzt.",
      declining: "Der Betrag jedes Jahres ist der Satz mal dem Buchwert zu Jahresbeginn, begrenzt, damit der Buchwert nie unter den Restwert fällt. Der Rest wird im letzten Jahr angesetzt.",
      macrs: "Die US-Steuerabschreibung verwendet MACRS (IRS Publication 946), das dieses Werkzeug nicht berechnet.",
    },
  },
};

export default de;
