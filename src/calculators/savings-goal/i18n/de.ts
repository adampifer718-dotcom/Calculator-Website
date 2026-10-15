import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SavingsGoalText } from "../text/en";

const de: CalculatorTranslation<SavingsGoalText> = {
  content: {
    title: "Sparzielrechner",
    shortTitle: "Sparziel",
    summary: "Ermitteln Sie die monatliche Sparrate, mit der Sie ein Sparziel bis zu einem gewählten Termin erreichen – unter Berücksichtigung Ihres Ersparten und seiner Rendite.",
    metaTitle: "Sparzielrechner – nötige monatliche Sparrate",
    metaDescription: "Wie viel müssen Sie monatlich sparen, um ein Ziel in fester Zeit zu erreichen? Mit aktuellem Ersparten, erwarteter Rendite und monatlicher Verzinsung.",
    keywords: ["Sparziel berechnen", "Sparrechner", "wie viel monatlich sparen", "monatliche Sparrate", "Sparplan", "Endwert", "für ein Ziel sparen"],
    intro: [
      "Wer für eine Anzahlung, ein Auto oder einen Notgroschen spart, kommt mit einem monatlichen Zielbetrag leichter voran. Dieser Rechner ermittelt die regelmäßige Einzahlung, die Sie in der gewählten Zeit von Ihrem jetzigen Stand zu Ihrem Ziel bringt.",
      "Er berücksichtigt das Wachstum Ihres aktuellen Ersparten und Ihrer neuen Einzahlungen mit einer festen Jahresrendite bei monatlicher Verzinsung. Bei 0 % Rendite teilt er den noch fehlenden Betrag einfach auf die Monate auf.",
    ],
    howToUse: [
      "Wählen Sie die Währung für die Beträge.",
      "Geben Sie den Zielbetrag ein und was Sie dafür bereits gespart haben.",
      "Geben Sie die erwartete Jahresrendite ein, etwa den Zinssatz Ihres Sparkontos.",
      "Geben Sie ein, wie viele Jahre Sie Zeit haben; Dezimalzahlen wie 2,5 sind möglich.",
      "Lesen Sie die monatliche Sparrate, die Summe Ihrer Einzahlungen und den Anteil aus Wachstum ab.",
    ],
    formulas: [
      { title: "Monatliche Sparrate", expression: "PMT = (FV − PV × (1 + i)^n) × i ÷ ((1 + i)^n − 1)", explanation: "FV ist das Ziel, PV das aktuelle Ersparte, i = Jahresrendite ÷ 12 als Dezimalzahl und n die Zahl der Monate. Eingezahlt wird jeweils am Monatsende." },
      { title: "Ohne Rendite", expression: "PMT = (FV − PV) ÷ n", explanation: "Ohne Wachstum wird der fehlende Betrag gleichmäßig auf die Monate verteilt." },
      { title: "Wachstum des aktuellen Ersparten", expression: "PV × (1 + i)^n", explanation: "Erreicht dieser Betrag allein das Ziel, sind keine Einzahlungen nötig." },
    ],
    examples: [
      {
        title: "15.000 $ in 4 Jahren, ausgehend von 1.000 $ bei 4,5 %",
        steps: ["i = 0,045 ÷ 12 = 0,00375; n = 48", "1.000 × 1,00375^48 ≈ 1.196,81 $", "PMT = (15.000 − 1.196,81) × 0,00375 ÷ (1,00375^48 − 1) ≈ 263,00 $"],
      },
      {
        title: "30.000 $ in 10 Jahren ohne Startkapital bei 6 %",
        steps: ["i = 0,005; n = 120", "PMT = 30.000 × 0,005 ÷ (1,005^120 − 1)", "≈ 183,06 $ pro Monat; Einzahlungen insgesamt etwa 21.967 $"],
      },
      {
        title: "6.000 $ in 2 Jahren, ausgehend von 1.200 $ ohne Zinsen",
        steps: ["n = 24 Monate", "PMT = (6.000 − 1.200) ÷ 24 = 200 $"],
      },
    ],
    assumptions: [
      "Die Jahresrendite ist konstant und wird monatlich zum Jahressatz ÷ 12 verzinst. Echte Renditen schwanken, und Geldanlagen können an Wert verlieren.",
      "Die Einzahlungen sind jeden Monat gleich und erfolgen am Monatsende. Steuern, Gebühren und Inflation sind nicht berücksichtigt.",
      "Die Zeit wird auf den nächsten ganzen Monat gerundet.",
      "Dies ist eine Schätzung, keine Finanzberatung, und sie wurde nicht fachlich geprüft.",
    ],
    faqs: [
      {
        question: "Warum ist die Sparrate kleiner als das Ziel geteilt durch die Monate?",
        answer: "Ihr aktuelles Erspartes und jede Einzahlung erwirtschaften in der Zwischenzeit eine Rendite, sodass ein Teil des Ziels durch Wachstum gedeckt wird. Je höher die Rendite und je länger die Zeit, desto mehr hilft das Wachstum.",
      },
      {
        question: "Welche Rendite soll ich eingeben?",
        answer: "Verwenden Sie bei einem Sparkonto dessen jährlichen Zinssatz. Verwenden Sie bei Geldanlagen eine vorsichtige langfristige Schätzung und denken Sie daran, dass Renditen nicht garantiert sind. Mit 0 % sehen Sie die nötige Rate ganz ohne Wachstum.",
      },
      {
        question: "Was, wenn ich zu Beginn jedes Monats einzahle?",
        answer: "Dann bringt jede Einzahlung einen Monat zusätzliche Rendite, und die nötige Rate ist etwas kleiner: etwa das Ergebnis hier geteilt durch (1 + i), wobei i der Monatszins ist.",
      },
    ],
    sourcesUsedFor: ["Der Endwert einer nachschüssigen Rente und die daraus abgeleitete Sparrate (Tilgungsfonds)."],
  },
  text: {
    goal: "Sparziel",
    goalHelp: "Der Betrag, den Sie am Ende haben möchten.",
    current: "Aktuelles Erspartes",
    currentHelp: "Was Sie für dieses Ziel bereits zurückgelegt haben. Geben Sie 0 ein, wenn Sie bei null anfangen.",
    rate: "Jahresrendite",
    rateHelp: "Erwarteter jährlicher Zins oder erwartete Anlagerendite, monatlich verzinst. Verwenden Sie 0 % für Bargeld ohne Zinsen.",
    years: "Zeit bis zum Ziel",
    yearsHelp: "In Jahren; Dezimalzahlen sind erlaubt (1,5 = 18 Monate).",
    yearsSuffix: "Jahre",
    tooShort: "Verwenden Sie mindestens einen Monat (etwa 0,05 Jahre).",
    deposit: "Nötige monatliche Sparrate",
    caption: "Eingezahlt am Ende jedes Monats über {months} bei {rate} pro Jahr, plus {current} bereits gespart, um {goal} zu erreichen.",
    months: { zero: "{n} Monate", one: "{n} Monat", two: "{n} Monate", few: "{n} Monate", many: "{n} Monate", other: "{n} Monate" },
    totalDeposits: "Einzahlungen gesamt",
    growth: "Erzieltes Wachstum",
    currentGrows: "Aktuelles Erspartes am Ende",
    endBalance: "Endguthaben",
    numberOfDeposits: "Anzahl der Monatseinzahlungen",
    notes: {
      reached: "Ihr aktuelles Erspartes dürfte das Ziel von allein erreichen, daher sind keine weiteren Einzahlungen nötig.",
      constant: "Die Rendite wird jeden Monat als gleich angenommen. Echte Renditen schwanken, und Steuern, Gebühren und Inflation sind nicht berücksichtigt.",
    },
  },
};

export default de;
