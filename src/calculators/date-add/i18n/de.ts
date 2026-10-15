import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DateAddText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const de: CalculatorTranslation<DateAddText> = {
  content: {
    title: "Rechner für Datum plus oder minus Tage",
    shortTitle: "Tage addieren oder abziehen",
    summary: "Finden Sie das Datum eine bestimmte Zahl von Jahren, Monaten, Wochen und Tagen vor oder nach einem Startdatum – mit Wochentag und der Zahl der Kalendertage dazwischen.",
    metaTitle: "Tage zu einem Datum addieren oder abziehen – Rechner",
    metaDescription: "Addieren oder subtrahieren Sie Jahre, Monate, Wochen und Tage zu einem beliebigen Datum. Mit Ergebnisdatum, Wochentag und Kalendertagen zwischen beiden Daten.",
    keywords: ["Tage zu Datum addieren", "Tage vom Datum abziehen", "Datum plus Tage", "Tage ab heute", "Monate zum Datum addieren", "Datum berechnen", "Frist berechnen"],
    intro: [
      "Fristen, Kündigungsfristen, Garantien und Fälligkeiten werden oft als „90 Tage ab“ oder „6 Monate nach“ einem Datum angegeben. Dieser Rechner ermittelt dieses Datum für Sie, vorwärts oder rückwärts.",
      "Er nennt außerdem den Wochentag und wie viele Kalendertage zwischen Startdatum und Ergebnis liegen. Das ist praktisch, wenn ein Zeitraum in Monaten festgelegt ist, Sie aber die Zahl der Tage brauchen.",
    ],
    howToUse: [
      "Wählen Sie das Startdatum. Beim Laden der Seite ist es auf heute gesetzt.",
      "Wählen Sie Addieren, um in der Zeit vorwärts zu gehen, oder Subtrahieren, um zurückzugehen.",
      "Geben Sie eine beliebige Kombination aus Jahren, Monaten, Wochen und Tagen ein. Lassen Sie den Rest auf 0.",
      "Lesen Sie das Ergebnisdatum mit Wochentag und die Zahl der Tage zwischen beiden Daten ab.",
    ],
    formulas: [
      {
        title: "Jahre und Monate",
        expression: "Datum₁ = Start ± (12 × Jahre + Monate) Monate",
        explanation: "Der Monat ändert sich, der Tag bleibt gleich. Gibt es diesen Tag im neuen Monat nicht, wird der letzte Tag des Monats verwendet.",
      },
      { title: "Wochen und Tage", expression: "Ergebnis = Datum₁ ± (7 × Wochen + Tage) Tage", explanation: "Anschließend werden ganze Tage im Kalender gezählt, über Monats- und Jahresgrenzen hinweg." },
      { title: "Tage dazwischen", expression: "N = |Ergebnis − Start| in Kalendertagen", explanation: "Das Startdatum wird nicht mitgezählt: Ein Tag nach Montag ist Dienstag, und N = 1." },
    ],
    examples: [
      {
        title: "Ein Monat nach dem 31. Januar 2026",
        steps: ["Der Februar 2026 hat 28 Tage, einen 31. Februar gibt es also nicht", "Das Datum wird auf den letzten Tag im Februar verschoben: Samstag, 28. Februar 2026", "Das sind 28 Kalendertage nach dem Startdatum"],
      },
      {
        title: "Ein Zeitraum von 90 Tagen ab dem 15. Oktober 2026",
        steps: ["Im Oktober bleiben 16 Tage, dann 30 im November und 31 im Dezember: 77 Tage bis zum 31. Dezember", "13 weitere Tage führen zum 13. Januar 2027", "Der 13. Januar 2027 ist ein Mittwoch"],
      },
      {
        title: "Zweieinhalb Jahre vor dem 15. August 2024",
        steps: ["2 Jahre und 6 Monate = 30 Monate", "30 Monate vor August 2024 ist Februar 2022, und den 15. gibt es in jedem Monat", "Der 15. Februar 2022 war ein Dienstag, 912 Kalendertage früher"],
      },
    ],
    assumptions: [
      "Die Daten folgen dem gregorianischen Kalender, auch für Jahre vor seiner Einführung im jeweiligen Land.",
      "Jahre und Monate werden vor Wochen und Tagen angewendet. Gibt es den Starttag im Zielmonat nicht, wird der letzte Tag dieses Monats verwendet; 31. März minus 1 Monat ergibt also den 28. oder 29. Februar.",
      "Jeder Tag zählt, auch Wochenenden und Feiertage. Werktagsregeln für gesetzliche oder vertragliche Fristen können davon abweichen.",
      "Ergebnisse sind auf die Jahre 1000 bis 9999 beschränkt.",
    ],
    faqs: [
      {
        question: "Warum ergibt der 31. Januar plus ein Monat den 28. Februar?",
        answer: "Der Februar hat keinen 31. Tag, daher verwendet der Rechner den letzten Tag im Februar, statt in den März überzulaufen. Diese Monatsende-Regel ist die übliche Konvention für monatliche Zeiträume.",
      },
      {
        question: "Ist 1 Monat dasselbe wie 30 Tage?",
        answer: "Nein. Ein Monat ist ein Kalendermonat mit 28 bis 31 Tagen. Wenn Sie eine genaue Zahl von Tagen brauchen, geben Sie sie stattdessen im Feld „Tage“ ein.",
      },
      {
        question: "Wird das Startdatum mitgezählt?",
        answer: "Nein. Die Zahl der Tage dazwischen zählt die Tage, über die Sie sich bewegen, das Startdatum selbst ist also nicht enthalten. Addieren Sie 1, wenn Sie den ersten und den letzten Tag mitzählen möchten.",
      },
    ],
    sourcesUsedFor: ["Die gregorianische Schaltjahrregel für Monatslängen und Tageszählungen."],
  },
  text: {
    start: "Startdatum",
    startHelp: "Standardmäßig heute.",
    operation: "Rechenart",
    operations: { add: "Addieren", subtract: "Subtrahieren" },
    years: "Jahre",
    months: "Monate",
    monthsHelp: "Jahre und Monate werden zuerst angewendet. Gibt es den Tag im neuen Monat nicht, wird der letzte Tag dieses Monats verwendet (31. Januar + 1 Monat = 28. oder 29. Februar).",
    weeks: "Wochen",
    days: "Tage",
    errors: {
      outOfRange: "Das Ergebnis liegt außerhalb des unterstützten Zeitraums ({min} bis {max}). Verwenden Sie einen kleineren Wert.",
    },
    result: "Ergebnisdatum",
    captionAdd: "{start} plus {amount}.",
    captionSubtract: "{start} minus {amount}.",
    units: {
      years: forms("{n} Jahr", "{n} Jahre"),
      months: forms("{n} Monat", "{n} Monate"),
      weeks: forms("{n} Woche", "{n} Wochen"),
      days: forms("{n} Tag", "{n} Tage"),
    },
    separator: ", ",
    weekday: "Wochentag",
    weekdayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    totalDays: "Kalendertage zwischen den Daten",
    inWeeks: "In Wochen und Tagen",
    weeksDays: "{weeks} und {days}",
    isoDate: "Ergebnis im ISO-Format",
    notes: {
      clamped: "Den Starttag gibt es im erreichten Monat nicht, daher wurde der letzte Tag dieses Monats verwendet.",
      calendar: "Die Daten folgen dem gregorianischen Kalender: Schaltjahre alle 4 Jahre, außer bei Jahrhundertjahren, die nicht durch 400 teilbar sind.",
    },
  },
};

export default de;
