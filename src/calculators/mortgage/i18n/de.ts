import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MortgageText } from "../text/en";

const de: CalculatorTranslation<MortgageText> = {
  content: {
    title: "Hypothekenrechner",
    shortTitle: "Hypothek",
    summary: "Schätzen Sie die gesamten monatlichen Kosten einer Immobilienfinanzierung: Zins und Tilgung plus Grundsteuer, Gebäudeversicherung, HOA-Gebühren und Hypothekenversicherung.",
    metaTitle: "Hypothekenrechner – Monatsrate mit Steuern und PMI",
    metaDescription:
      "Schätzen Sie Ihre monatliche Hypothekenrate: Zins und Tilgung getrennt von Grundsteuer, Gebäudeversicherung, HOA-Gebühren und PMI, dazu die Gesamtzinsen.",
    keywords: ["Hypothekenrechner", "Baufinanzierungsrechner", "Hypothek berechnen", "Monatsrate Immobilienkredit", "Eigenkapital", "PMI", "Grundsteuer", "Hauskauf USA"],
    intro: [
      "Eine Hypothekenrate umfasst mehr als die Rückzahlung des Darlehens. Kreditgeber ziehen mit jeder Rate oft Grundsteuer und Gebäudeversicherung ein, und manche Käufer zahlen zusätzlich Gebühren an eine Eigentümergemeinschaft (HOA) oder eine Hypothekenversicherung.",
      "Dieser Rechner weist Zins und Tilgung getrennt von diesen weiteren Kosten aus. So sehen Sie, was durch das Darlehen festgelegt ist und was von Ihren örtlichen Steuern und Versicherungen abhängt.",
    ],
    howToUse: [
      "Geben Sie den Kaufpreis der Immobilie und Ihr Eigenkapital ein.",
      "Geben Sie den Zinssatz und die Laufzeit ein.",
      "Geben Sie die jährliche Grundsteuer und Gebäudeversicherung sowie eventuelle monatliche HOA- oder Nebenkosten ein.",
      "Geben Sie den Satz der Hypothekenversicherung ein, wenn Ihr Eigenkapital unter 20 % liegt, oder 0, wenn keine anfällt.",
      "Lesen Sie die gesamte Monatsrate und ihre Aufschlüsselung ab.",
    ],
    formulas: [
      { title: "Zins und Tilgung", expression: "M = L × r ÷ (1 − (1 + r)^(−n))", explanation: "L ist der Darlehensbetrag (Kaufpreis − Eigenkapital), r der Monatszins (Jahreszins ÷ 12) und n die Anzahl der Monatsraten." },
      { title: "Monatsrate", expression: "Rate = M + Grundsteuer ÷ 12 + Versicherung ÷ 12 + HOA + PMI", explanation: "Steuern und Versicherung werden wie bei einem üblichen Treuhandkonto (Escrow) gleichmäßig auf 12 Monate verteilt." },
      { title: "Hypothekenversicherung", expression: "PMI = L × PMI-Satz ÷ 12, solange L ÷ Kaufpreis > 80 %", explanation: "Sie entfällt, sobald die planmäßige Restschuld 78 % des Kaufpreises erreicht. Nach US-Recht endet sie außerdem spätestens zur Hälfte der Kreditlaufzeit." },
    ],
    examples: [
      {
        title: "Immobilie für 400.000, 20 % Eigenkapital, 6,5 % über 30 Jahre",
        steps: [
          "Darlehen = 400.000 $ − 80.000 $ = 320.000 $; r = 0,065 ÷ 12; n = 360",
          "Zins und Tilgung ≈ 2.022,62 $",
          "Steuer 400 $ + Versicherung 125 $ pro Monat; keine PMI bei 80 % Beleihungsauslauf",
          "Gesamt ≈ 2.547,62 $ pro Monat",
        ],
      },
      {
        title: "Immobilie für 300.000, 5 % Eigenkapital, 6 % über 30 Jahre mit PMI",
        steps: [
          "Darlehen = 285.000 $; Zins und Tilgung ≈ 1.708,72 $",
          "PMI = 285.000 $ × 0,5 % ÷ 12 = 118,75 $ für die ersten 129 Raten",
          "Gesamt ≈ 1.708,72 $ + 300 $ + 100 $ + 50 $ + 118,75 $ = 2.277,47 $",
        ],
      },
    ],
    assumptions: [
      "Fester Zinssatz mit gleich hohen Monatsraten; Darlehen mit variablem Zins oder tilgungsfreie Darlehen werden nicht abgebildet.",
      "Grundsteuer, Versicherung, HOA-Gebühren und PMI-Satz sind Ihre Schätzwerte; sie hängen von Ort und Kreditgeber ab und ändern sich oft jedes Jahr.",
      "Die PMI-Regeln entsprechen konventionellen Darlehen in den USA: fällig über 80 % Beleihungsauslauf und planmäßig endend bei 78 %. Für FHA- und VA-Darlehen sowie Finanzierungen in anderen Ländern gelten andere Regeln.",
      "Abschlusskosten, Disagio (Points), Nebenkosten für Versorger und Instandhaltung sind nicht enthalten. Dies ist eine Schätzung, keine Finanzberatung und kein Kreditangebot.",
    ],
    faqs: [
      { question: "Was bedeutet PITI?", answer: "Principal, Interest, Taxes und Insurance – Tilgung, Zinsen, Steuern und Versicherung: die vier Bestandteile einer typischen US-Hypothekenrate, wenn der Kreditgeber Steuern und Versicherung über ein Treuhandkonto (Escrow) einzieht." },
      { question: "Warum weicht die Rate meines Kreditgebers ab?", answer: "Kreditgeber verwenden die tatsächlichen Steuer- und Versicherungsbeträge, schlagen eventuell einen Puffer auf das Treuhandkonto auf und nennen unter Umständen einen effektiven Jahreszins (APR) inklusive Gebühren. Fordern Sie für genaue Zahlen eine „Loan Estimate“ an." },
      { question: "Wie kann ich eine Hypothekenversicherung vermeiden?", answer: "Bei vielen konventionellen Darlehen in den USA vermeidet ein Eigenkapital von mindestens 20 % die PMI. Manche Kreditgeber bieten andere Lösungen an, oft mit einem höheren Zinssatz." },
    ],
    sourcesUsedFor: [
      "Die Formel für Darlehen mit gleich hohen Raten und die Formel für die Restschuld.",
      "Wann die PMI bei konventionellen US-Darlehen automatisch endet (bei 78 % des ursprünglichen Immobilienwerts).",
      "Endgültiges Ende der PMI zur Hälfte der Tilgungsdauer nach dem Homeowners Protection Act.",
    ],
  },
  text: {
    price: "Kaufpreis der Immobilie",
    down: "Eigenkapital (Anzahlung)",
    rate: "Zinssatz",
    rateHelp: "Jährlicher Sollzins des Darlehens (nicht der effektive Jahreszins inklusive Gebühren).",
    years: "Laufzeit",
    propertyTax: "Grundsteuer pro Jahr",
    insurance: "Gebäudeversicherung pro Jahr",
    hoa: "HOA- oder Nebenkosten pro Monat",
    pmiRate: "Satz der Hypothekenversicherung (PMI)",
    pmiHelp: "Jährlicher Satz auf den Darlehensbetrag, solange das Eigenkapital unter 20 % liegt. Geben Sie 0 ein, wenn keine anfällt.",
    errors: { downTooLarge: "Das Eigenkapital muss kleiner als der Kaufpreis sein.", termTooShort: "Geben Sie eine Laufzeit von mindestens einem Monat ein." },
    monthly: "Geschätzte Monatsrate",
    caption: "Zins und Tilgung von {pi} plus {extras} für Steuern, Versicherung und weitere Kosten.",
    principalInterest: "Zins und Tilgung",
    monthlyTax: "Grundsteuer",
    monthlyInsurance: "Gebäudeversicherung",
    monthlyHoa: "HOA- oder Nebenkosten",
    monthlyPmi: "Hypothekenversicherung (PMI)",
    pmiMonths: "Monate mit PMI",
    loanAmount: "Darlehensbetrag",
    downShare: "Eigenkapitalanteil",
    totalInterest: "Gesamtzinsen",
    totalCost: "Summe aller Zahlungen über die Laufzeit",
    tableCaption: "Restschuld nach Jahren",
    tableColumns: { year: "Jahr", principal: "Getilgt", interest: "Gezahlte Zinsen", balance: "Restschuld" },
    notes: {
      fixed: "Bei einem Festzinsdarlehen bleiben Zins und Tilgung über die gesamte Laufzeit gleich; Steuern, Versicherung und HOA-Gebühren sind Ihre Schätzwerte und ändern sich in der Regel mit der Zeit.",
      pmi: "Es wird angenommen, dass PMI anfällt, solange das Darlehen über 80 % des Kaufpreises liegt, und endet, sobald die planmäßige Restschuld 78 % erreicht – wie bei den meisten konventionellen US-Darlehen. Für FHA- und andere Darlehen gelten andere Regeln. Nach US-Recht endet sie außerdem spätestens zur Hälfte der Kreditlaufzeit.",
      noPmi: "Es ist keine Hypothekenversicherung enthalten, da das Darlehen höchstens 80 % des Kaufpreises beträgt.",
      excluded: "Abschlusskosten, Disagio (Points), Versorgerkosten, Instandhaltung und Zinsänderungen sind nicht berücksichtigt.",
    },
  },
};

export default de;
