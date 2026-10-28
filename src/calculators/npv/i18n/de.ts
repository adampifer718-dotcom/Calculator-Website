import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { NpvText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const de: CalculatorTranslation<NpvText> = {
  content: {
    title: "Kapitalwertrechner (NPV und IRR)",
    shortTitle: "Kapitalwert und IRR",
    summary: "Zinsen Sie eine Reihe jährlicher Zahlungsströme ab und ermitteln Sie Kapitalwert, internen Zinsfuß, Rentabilitätsindex und dynamische Amortisationsdauer.",
    metaTitle: "Kapitalwertrechner – NPV und interner Zinsfuß (IRR)",
    metaDescription: "Berechnen Sie Kapitalwert und internen Zinsfuß einer Investition aus ihren jährlichen Zahlungsströmen – mit Rentabilitätsindex und dynamischer Amortisation.",
    keywords: ["Kapitalwert berechnen", "Kapitalwertmethode", "NPV Rechner", "interner Zinsfuß", "IRR berechnen", "Barwert Zahlungsströme", "dynamische Amortisationsrechnung", "Investitionsrechnung"],
    intro: [
      "Geld, das Sie später erhalten, ist weniger wert als derselbe Betrag heute, weil das heutige Geld in der Zwischenzeit angelegt werden könnte. Der Kapitalwert (Net Present Value, NPV) rechnet jeden künftigen Zahlungsstrom eines Projekts auf heute um, indem er ihn mit Ihrer geforderten Rendite abzinst, und zieht dann die Anfangsauszahlung ab.",
      "Ein positiver Kapitalwert bedeutet, dass das Projekt voraussichtlich mehr als diesen Zinssatz erwirtschaftet; ein negativer, dass es weniger erwirtschaftet. Der interne Zinsfuß (Internal Rate of Return, IRR) ist der Zinssatz, bei dem der Kapitalwert genau null ist; er zeigt also die eigene jährliche Rendite des Projekts. Diese Seite deckt beides ab, daher gibt es keinen separaten IRR-Rechner.",
    ],
    howToUse: [
      "Wählen Sie die Währung und geben Sie die Anfangsinvestition als positiven Betrag ein.",
      "Geben Sie den Netto-Zahlungsstrom für jedes Jahr ein, beginnend mit Jahr 1. Verwenden Sie ein Minuszeichen für ein Jahr mit Nettoauszahlung, etwa wegen einer größeren Reparatur.",
      "Geben Sie den Kalkulationszinssatz ein: die jährliche Rendite, die Sie verlangen, oder Ihre Kapitalkosten.",
      "Lesen Sie Kapitalwert, internen Zinsfuß, Rentabilitätsindex und dynamische Amortisationsdauer ab und prüfen Sie die Tabelle Jahr für Jahr.",
    ],
    formulas: [
      { title: "Kapitalwert", expression: "NPV = −C₀ + Σ CFₜ ÷ (1 + r)ᵗ", explanation: "C₀ ist die Anfangsinvestition, CFₜ der Zahlungsstrom am Ende von Jahr t und r der Kalkulationszinssatz als Dezimalzahl. Die Summe läuft von Jahr 1 bis zum letzten Jahr." },
      { title: "Interner Zinsfuß", expression: "−C₀ + Σ CFₜ ÷ (1 + IRR)ᵗ = 0", explanation: "Ermittelt per Bisektion zwischen −99,99 % und 1.000 % pro Jahr. Wechseln die Zahlungsströme mehr als einmal das Vorzeichen, kann es mehrere Lösungen geben; dann wird kein IRR angegeben." },
      { title: "Rentabilitätsindex", expression: "PI = (Σ CFₜ ÷ (1 + r)ᵗ) ÷ C₀", explanation: "Der erhaltene Barwert je investierter Einheit. Ein PI über 1 entspricht einem positiven Kapitalwert." },
      { title: "Dynamische Amortisationsdauer", expression: "k + (−kumuliertₖ) ÷ abgezinster CFₖ₊₁", explanation: "k ist das letzte Jahr, in dem der kumulierte abgezinste Wert noch negativ ist. Der Bruchteil nimmt an, dass der Zahlungsstrom des Folgejahres gleichmäßig eingeht." },
    ],
    examples: [
      {
        title: "Maschine für 50.000 $ mit fünf Jahren Zahlungsströmen bei 8 %",
        steps: [
          "Abgezinste Werte: 12.000 ÷ 1,08 ≈ 11.111,11; 15.000 ÷ 1,08² ≈ 12.860,08; 18.000 ÷ 1,08³ ≈ 14.288,98; 20.000 ÷ 1,08⁴ ≈ 14.700,60; 9.000 ÷ 1,08⁵ ≈ 6.125,25",
          "Barwert der Zahlungsströme ≈ 59.086,02 $",
          "NPV = 59.086,02 − 50.000 ≈ 9.086,02 $, und der IRR beträgt etwa 14,60 %",
        ],
      },
      {
        title: "Projekt über 250.000 € bei 12 % geforderter Rendite",
        steps: [
          "Barwert der fünf Zahlungsströme ≈ 246.211,12 €",
          "NPV = 246.211,12 − 250.000 ≈ −3.788,88 €",
          "Der IRR beträgt etwa 11,38 %, knapp unter den geforderten 12 % – deshalb ist der Kapitalwert negativ",
        ],
      },
      {
        title: "Zahlungsströme mit zwei Vorzeichenwechseln",
        steps: [
          "NPV = −1.000 + 3.000 ÷ 1,1 − 2.200 ÷ 1,1² = −1.000 + 2.727,27 − 1.818,18 ≈ −90,91 $",
          "Sowohl 27,64 % als auch 72,36 % machen den Kapitalwert null, daher wird der IRR als nicht eindeutig angegeben",
        ],
      },
    ],
    assumptions: [
      "Jeder Zahlungsstrom fällt am Ende seines Jahres an, und die Anfangsinvestition wird zu Beginn (Jahr 0) gezahlt. Zahlungen zur Jahresmitte oder monatlich ergeben einen anderen Kapitalwert.",
      "Für jedes Jahr wird ein konstanter Kalkulationszinssatz verwendet. Steuern, Inflation und Finanzierungskosten sind nur enthalten, wenn Sie sie bereits in die Zahlungsströme oder den Zinssatz eingerechnet haben.",
      "Der IRR setzt voraus, dass die Zahlungsströme nur einmal das Vorzeichen wechseln. Bei mehreren Vorzeichenwechseln kann der IRR mehrere Werte oder keinen haben, und der Kapitalwert ist die verlässlichere Richtschnur.",
      "Dies ist eine Schätzung zum Vergleich von Optionen, keine Anlage- oder Finanzberatung, und sie wurde nicht fachlich geprüft.",
    ],
    faqs: [
      { question: "Welchen Kalkulationszinssatz sollte ich verwenden?", answer: "Verwenden Sie die Rendite, die Sie anderswo mit einer Anlage ähnlichen Risikos erzielen könnten, oder die Kapitalkosten Ihrer Organisation. Ein höherer Zinssatz senkt den Wert späterer Zahlungsströme, daher erhalten riskantere Projekte meist einen höheren Zinssatz." },
      { question: "Warum können IRR und Kapitalwert beim Vergleich von Projekten zu unterschiedlichen Ergebnissen führen?", answer: "Der IRR ist ein Prozentsatz und ignoriert die Größe des Projekts, der Kapitalwert dagegen ist ein Betrag. Ein kleines Projekt kann einen höheren IRR haben, aber weniger Wert schaffen als ein größeres. Wenn beide die Projekte unterschiedlich reihen, wird im Allgemeinen der Kapitalwert bei Ihrer geforderten Rendite bevorzugt." },
      { question: "Warum wird der IRR als nicht eindeutig angezeigt?", answer: "Wenn die Zahlungsströme mehr als einmal zwischen Aus- und Einzahlungen wechseln, etwa durch hohe Rückbaukosten am Ende, kann der Kapitalwert bei mehreren Zinssätzen null werden. Dann beschreibt kein einzelner Zinssatz das Projekt, und der Rechner gibt nur den Kapitalwert an." },
    ],
    sourcesUsedFor: [
      "Die Definitionen von Kapitalwert und internem Zinsfuß sowie die jeweiligen Annahme- und Ablehnungsregeln.",
      "Die Abzinsungsformel für den Kapitalwert und die Definition des IRR als Zinssatz, bei dem der Kapitalwert null ist.",
    ],
  },
  text: {
    initial: "Anfangsinvestition",
    initialHelp: "Der zu Beginn (Jahr 0) gezahlte Betrag. Geben Sie ihn als positive Zahl ein; er wird als Auszahlung behandelt.",
    cashFlows: "Jährliche Zahlungsströme",
    cashFlowsHelp: "Netto-Zahlungsstrom am Ende von Jahr 1, Jahr 2 usw., getrennt durch Kommas, Leerzeichen oder Zeilenumbrüche. Verwenden Sie ein Minuszeichen für ein Jahr mit Nettoauszahlung.",
    rate: "Kalkulationszinssatz",
    rateHelp: "Ihre geforderte Rendite oder Ihre Kapitalkosten pro Jahr.",
    errors: {
      empty: "Geben Sie mindestens einen Zahlungsstrom ein.",
      tooMany: "Geben Sie höchstens {max} Zahlungsströme ein.",
      notNumber: "„{token}“ ist keine Zahl. Trennen Sie die Werte durch Kommas, Leerzeichen oder Zeilenumbrüche.",
      tooLarge: "„{token}“ ist zu groß.",
    },
    tooBig: "{value} ist zu groß. Jeder Zahlungsstrom darf betragsmäßig höchstens {max} sein.",
    npv: "Kapitalwert (NPV)",
    caption: "{count}, abgezinst mit {rate} pro Jahr, nach einer Anfangsinvestition von {initial}.",
    yearCount: forms("{n} Jahr mit Zahlungsströmen", "{n} Jahre mit Zahlungsströmen"),
    irr: "Interner Zinsfuß (IRR)",
    irrNone: "Nicht gefunden",
    irrNotUnique: "Nicht eindeutig",
    irrOutOfRange: "Nicht gefunden zwischen {low} und {high}",
    pvInflows: "Barwert der jährlichen Zahlungsströme",
    profitabilityIndex: "Rentabilitätsindex (Barwert der Zahlungsströme ÷ Anfangsinvestition)",
    totalUndiscounted: "Summe der nicht abgezinsten Zahlungsströme (einschließlich Anfangsinvestition)",
    payback: "Dynamische Amortisationsdauer",
    paybackYears: forms("{n} Jahr", "{n} Jahre"),
    paybackNever: "Mit diesen Zahlungsströmen nicht erreicht",
    table: {
      caption: "Zahlungsströme nach Jahr",
      year: "Jahr",
      cashFlow: "Zahlungsstrom",
      discounted: "Abgezinster Wert",
      cumulative: "Kumulierter abgezinster Wert",
      yearLabel: "Jahr {n}",
    },
    notes: {
      positive: "Ein positiver Kapitalwert bedeutet, dass die Zahlungsströme nach Rückgewinnung der Anfangsinvestition mehr als den Kalkulationszinssatz erwirtschaften.",
      negative: "Ein negativer Kapitalwert bedeutet, dass die Zahlungsströme weniger als den Kalkulationszinssatz erwirtschaften.",
      zero: "Ein Kapitalwert von null bedeutet, dass die Zahlungsströme genau den Kalkulationszinssatz erwirtschaften.",
      irrNone: "Die Zahlungsströme wechseln nie das Vorzeichen (sie sind alle Auszahlungen oder alle Einzahlungen), daher macht kein Zinssatz den Kapitalwert null.",
      irrNotUnique: "Die Zahlungsströme wechseln mehr als einmal das Vorzeichen, daher kann es mehrere Zinssätze geben, die den Kapitalwert null machen, oder keinen. Der IRR wird nicht angegeben; verlassen Sie sich stattdessen auf den Kapitalwert.",
      irrOutOfRange: "Kein Zinssatz zwischen {low} und {high} pro Jahr macht den Kapitalwert null.",
      payback: "Die dynamische Amortisationsdauer nimmt an, dass der Zahlungsstrom des Jahres, in dem die Null überschritten wird, gleichmäßig über das Jahr eingeht.",
      timing: "Die Zahlungsströme gelten als am Ende jedes Jahres eingehend und werden mit einem konstanten Zinssatz abgezinst.",
    },
  },
};

export default de;
