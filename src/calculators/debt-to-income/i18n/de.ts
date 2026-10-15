import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DebtToIncomeText } from "../text/en";

const de: CalculatorTranslation<DebtToIncomeText> = {
  content: {
    title: "Rechner für die Schuldenquote (DTI)",
    shortTitle: "Schuldenquote",
    summary: "Berechnen Sie Ihre Gesamt- und Wohnkostenquote (DTI) aus Ihrem monatlichen Bruttoeinkommen und Ihren monatlichen Schuldenzahlungen.",
    metaTitle: "Schuldenquote (DTI) – Gesamtquote und Wohnkostenquote",
    metaDescription: "Berechnen Sie Ihre Schuldenquote: monatliche Schuldenzahlungen geteilt durch das monatliche Bruttoeinkommen, dazu die Wohnkostenquote und die Gesamtschulden.",
    keywords: ["Schuldenquote berechnen", "Debt-to-Income", "DTI", "Schuldendienstquote", "Wohnkostenquote", "Baufinanzierung Kreditwürdigkeit", "monatliche Schulden"],
    intro: [
      "Ihre Schuldenquote (Debt-to-Income, kurz DTI) vergleicht, was Sie jeden Monat für Schulden zahlen, mit dem, was Sie vor Steuern verdienen. Kreditgeber nutzen sie als eine Kennzahl dafür, wie viel Spielraum Ihr Budget für einen neuen Kredit hat.",
      "Geben Sie Ihr monatliches Bruttoeinkommen und Ihre monatlichen Schuldenzahlungen ein. Der Rechner liefert die Gesamtquote (Back-End), die alle Schulden enthält, und die Wohnkostenquote (Front-End), die nur das Wohnen berücksichtigt.",
    ],
    howToUse: [
      "Wählen Sie die Währung für die Beträge.",
      "Geben Sie Ihr monatliches Bruttoeinkommen vor Steuern und Abzügen ein.",
      "Geben Sie Ihre monatlichen Wohnkosten ein: die Miete oder die Hypothekenrate einschließlich Steuern und Versicherung.",
      "Geben Sie Ihre anderen monatlichen Schuldenzahlungen ein. Verwenden Sie bei Kreditkarten den fälligen Mindestbetrag.",
      "Lesen Sie die Gesamtquote, die Wohnkostenquote und die Summe Ihrer Schuldenzahlungen ab.",
    ],
    formulas: [
      { title: "Gesamtquote (Back-End-DTI)", expression: "DTI = monatliche Schuldenzahlungen gesamt ÷ monatliches Bruttoeinkommen × 100", explanation: "Alle Schuldenzahlungen, einschließlich Wohnen." },
      { title: "Wohnkostenquote (Front-End)", expression: "Wohnkostenquote = Wohnkosten ÷ monatliches Bruttoeinkommen × 100", explanation: "Nur die Miete oder die Hypothekenrate." },
      { title: "Monatliche Schulden gesamt", expression: "Schulden = Wohnen + Auto + Studium + Karten + Sonstiges", explanation: "Monatlich fällige Zahlungen, nicht die Restschulden." },
    ],
    examples: [
      {
        title: "6.000 $ Einkommen bei 2.000 $ Zahlungen",
        steps: ["Schulden gesamt = 1.500 + 100 + 400 = 2.000 $", "DTI = 2.000 ÷ 6.000 × 100 ≈ 33,33 %", "Wohnkostenquote = 1.500 ÷ 6.000 = 25 %"],
      },
      {
        title: "5.400 $ Einkommen, Miete und ein Autokredit",
        steps: ["Schulden gesamt = 1.450 + 310 + 120 = 1.880 $", "DTI = 1.880 ÷ 5.400 × 100 ≈ 34,81 %", "Wohnkostenquote = 1.450 ÷ 5.400 ≈ 26,85 %"],
      },
    ],
    assumptions: [
      "Das Einkommen ist brutto (vor Steuern). Kreditgeber können Einkommen anders ansetzen, etwa Einkünfte aus Selbstständigkeit mitteln oder unregelmäßige Boni nicht berücksichtigen.",
      "Nur monatlich fällige Zahlungen sind enthalten. Nebenkosten, Lebensmittel, Telefonrechnungen und andere Lebenshaltungskosten sind keine Schulden und bleiben außen vor.",
      "Kreditgeber und Kreditprogramme legen eigene Grenzwerte fest und berücksichtigen auch Kredithistorie, Ersparnisse und andere Faktoren. Eine Quote von 43 % war ein gängiger Bezugspunkt in US-Hypothekenregeln, ist aber keine allgemeingültige Grenze.",
      "Dies ist eine Schätzung, keine Finanzberatung, und sie wurde nicht fachlich geprüft.",
    ],
    faqs: [
      {
        question: "Was ist der Unterschied zwischen Front-End- und Back-End-DTI?",
        answer: "Die Front-End-Quote zählt nur Ihre Wohnkosten. Die Back-End-Quote addiert alle anderen monatlichen Schuldenzahlungen, etwa für Auto, Studienkredit und Kreditkarten. Wer von DTI spricht, meint meist die Back-End-Quote.",
      },
      {
        question: "Warum taucht der Wert 43 % so oft auf?",
        answer: "US-Regeln für sogenannte Qualified Mortgages nutzten 43 % als Bezugspunkt für die Schuldenquote, deshalb wird die Zahl oft zitiert. Kreditgeber und Kreditprogramme wenden eigene Grenzwerte an, die höher oder niedriger sein können.",
      },
      {
        question: "Wie kann ich meine Schuldenquote senken?",
        answer: "Verringern Sie entweder Ihre monatlichen Schuldenzahlungen, etwa indem Sie einen Kredit oder einen Kartensaldo abbezahlen, oder erhöhen Sie Ihr Bruttoeinkommen. Neue Schulden vor einem Kreditantrag erhöhen die Quote.",
      },
    ],
    sourcesUsedFor: ["Die Definition der DTI als monatliche Schuldenzahlungen geteilt durch das monatliche Bruttoeinkommen und der Bezugspunkt von 43 % in US-Hypothekenregeln."],
  },
  text: {
    income: "Monatliches Bruttoeinkommen",
    incomeHelp: "Ihr Lohn vor Steuern und Abzügen, für einen Monat. Berücksichtigen Sie alle regelmäßigen Einkommensquellen.",
    housing: "Wohnkosten",
    housingHelp: "Monatliche Miete oder Hypothekenrate einschließlich Grundsteuer, Gebäudeversicherung und eventueller Hausgeldbeiträge (HOA).",
    car: "Raten für Autokredite",
    student: "Raten für Studienkredite",
    creditCards: "Mindestzahlungen für Kreditkarten",
    creditCardsHelp: "Der fällige Mindestbetrag jeder Karte, nicht der gesamte Saldo.",
    other: "Sonstige Schuldenzahlungen",
    otherHelp: "Privatkredite, Kindesunterhalt, Ehegattenunterhalt und alle anderen monatlich fälligen Schuldenzahlungen.",
    backEnd: "Schuldenquote (Back-End)",
    caption: "{debt} monatliche Schuldenzahlungen bei {income} monatlichem Bruttoeinkommen.",
    frontEnd: "Wohnkostenquote (Front-End)",
    totalDebt: "Monatliche Schuldenzahlungen gesamt",
    nonHousing: "Schuldenzahlungen ohne Wohnkosten",
    remaining: "Bruttoeinkommen nach Schuldenzahlungen",
    notes: {
      lenders: "Jeder Kreditgeber und jedes Kreditprogramm legt eigene Grenzwerte für die Schuldenquote fest und berücksichtigt weitere Faktoren. Diese Quote allein zeigt daher nicht, ob ein Kredit angeboten würde.",
      reference: "Laut dem Consumer Financial Protection Bureau war eine Schuldenquote von 43 % ein gängiger Bezugspunkt in US-Hypothekenregeln für Qualified Mortgages.",
      overIncome: "Ihre monatlichen Schuldenzahlungen sind höher als Ihr monatliches Bruttoeinkommen.",
    },
  },
};

export default de;
