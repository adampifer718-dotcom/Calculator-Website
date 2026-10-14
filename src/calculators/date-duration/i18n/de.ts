import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DateDurationText } from "../text/en";

const years = { zero: "{n} Jahre", one: "{n} Jahr", two: "{n} Jahre", few: "{n} Jahre", many: "{n} Jahre", other: "{n} Jahre" };
const months = { zero: "{n} Monate", one: "{n} Monat", two: "{n} Monate", few: "{n} Monate", many: "{n} Monate", other: "{n} Monate" };
const weeks = { zero: "{n} Wochen", one: "{n} Woche", two: "{n} Wochen", few: "{n} Wochen", many: "{n} Wochen", other: "{n} Wochen" };
const days = { zero: "{n} Tage", one: "{n} Tag", two: "{n} Tage", few: "{n} Tage", many: "{n} Tage", other: "{n} Tage" };

const de: CalculatorTranslation<DateDurationText> = {
  content: {
    title: "Datumsrechner",
    shortTitle: "Zeitraum",
    summary: "Zählen Sie die Tage, Wochen, Monate und Jahre zwischen zwei Daten, einschließlich Werktagen und Wochenendtagen.",
    metaTitle: "Datumsrechner – Tage zwischen zwei Daten berechnen",
    metaDescription:
      "Berechnen Sie die Tage zwischen zwei Daten sowie die Dauer in Jahren, Monaten und Tagen, in Wochen, Werktagen und Wochenendtagen. Das Enddatum lässt sich mitzählen.",
    keywords: ["Tage zwischen zwei Daten", "Datumsrechner", "Tagerechner", "Tage zählen", "wie viele Tage bis", "Zeitraum berechnen", "Werktage berechnen"],
    intro: [
      "Ermitteln Sie, wie viele Tage zwischen zwei Daten liegen – für eine Frist, eine Kündigungsfrist, eine Reise oder einen Countdown.",
      "Das Ergebnis wird außerdem in Jahren, Monaten und Tagen, in Wochen sowie als Werktage und Wochenendtage angezeigt. Wählen Sie, ob das Enddatum selbst mitgezählt wird.",
    ],
    howToUse: [
      "Geben Sie das Startdatum ein.",
      "Geben Sie das Enddatum ein (standardmäßig heute).",
      "Wählen Sie, ob das Enddatum als voller Tag mitgezählt wird.",
      "Lesen Sie die Anzahl der Tage und die weiteren Aufschlüsselungen ab.",
    ],
    formulas: [
      { title: "Tage zwischen zwei Daten", expression: "Tage = Enddatum − Startdatum (+ 1, wenn das Enddatum mitgezählt wird)", explanation: "Kalendertage, einschließlich des 29. Februar in Schaltjahren." },
      { title: "Jahre, Monate und Tage", expression: "Volle Kalendermonate ab dem Startdatum, danach die verbleibenden Tage", explanation: "Monate werden im Kalender gezählt, ihre Länge (28 bis 31 Tage) wird also berücksichtigt." },
      { title: "Werktage", expression: "Werktage = Tage von Montag bis Freitag", explanation: "Feiertage werden nicht abgezogen; ziehen Sie sie für Arbeitstage selbst ab." },
    ],
    examples: [
      {
        title: "1. Januar bis 14. Oktober 2026",
        steps: [
          "31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 Tage (Januar–September) + 13 Tage = 286 Tage",
          "286 Tage = 40 Wochen und 6 Tage; 9 Monate und 13 Tage",
          "204 dieser Tage fallen auf Montag bis Freitag",
        ],
      },
      {
        title: "1. Februar bis 1. März 2024, beide Daten mitgezählt",
        steps: [
          "2024 ist ein Schaltjahr, der Februar hat also 29 Tage",
          "29 Tage vom 1. Februar bis zum 1. März, plus das Enddatum = 30 Tage",
          "22 Werktage und 8 Wochenendtage",
        ],
      },
    ],
    assumptions: [
      "Die Daten sind Kalendertage im gregorianischen Kalender; Uhrzeiten und Zeitzonen werden nicht berücksichtigt.",
      "Werktage sind Montag bis Freitag; Feiertage werden nicht ausgenommen.",
      "Stunden werden als Tage × 24 berechnet; Zeitumstellungen bleiben unberücksichtigt.",
    ],
    faqs: [
      { question: "Soll ich das Enddatum mitzählen?", answer: "Nicht bei Fragen wie „Wie lange noch bis …“, etwa bei Kündigungsfristen oder dem Alter. Zählen Sie es mit, wenn sowohl der erste als auch der letzte Tag zum Zeitraum gehören, zum Beispiel bei einem Hotelaufenthalt, der in Tagen gezählt wird, oder einem Veranstaltungsplan." },
      { question: "Wie werden Schaltjahre berücksichtigt?", answer: "Jeder 29. Februar zwischen den Daten wird mitgezählt, Zeiträume über einen Schalttag sind also einen Tag länger." },
      { question: "Wie zähle ich Arbeitstage?", answer: "Verwenden Sie die Zahl der Werktage und ziehen Sie die Feiertage ab, die in Ihrem Land bzw. Bundesland auf einen Werktag fallen." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    start: "Startdatum",
    end: "Enddatum",
    endHelp: "Standardmäßig heute.",
    includeEnd: "Enddatum mitzählen",
    includeEndOptions: { no: "Nein (Differenz zwischen den Daten)", yes: "Ja (beide Daten mitgezählt)" },
    includeEndHelp: "Zählen Sie das Enddatum mit, wenn Sie die Tage einer Veranstaltung zählen, etwa ein dreitägiges Festival von Freitag bis Sonntag.",
    units: { years, months, weeks, days },
    ymd: "{years}, {months} und {days}",
    weeksDays: "{weeks} und {days}",
    totalDays: "Dauer in Tagen",
    caption: "Vom {start} bis zum {end}.",
    calendar: "In Jahren, Monaten und Tagen",
    inWeeks: "In Wochen und Tagen",
    weekdays: "Werktage (Montag bis Freitag)",
    weekendDays: "Wochenendtage",
    hours: "Stunden",
    reversed: "Das Enddatum liegt vor dem Startdatum, daher wurden die Daten vertauscht.",
    weekdaysNote: "Bei den Werktagen sind Samstage und Sonntage ausgenommen, Feiertage jedoch nicht.",
    hoursNote: "Die Stunden gehen von 24-Stunden-Tagen aus; Zeitumstellungen sind nicht berücksichtigt.",
  },
};

export default de;
