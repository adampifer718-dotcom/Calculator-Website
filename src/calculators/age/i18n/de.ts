import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AgeText } from "../text/en";

const years = { zero: "{n} Jahre", one: "{n} Jahr", two: "{n} Jahre", few: "{n} Jahre", many: "{n} Jahre", other: "{n} Jahre" };
const months = { zero: "{n} Monate", one: "{n} Monat", two: "{n} Monate", few: "{n} Monate", many: "{n} Monate", other: "{n} Monate" };
const weeks = { zero: "{n} Wochen", one: "{n} Woche", two: "{n} Wochen", few: "{n} Wochen", many: "{n} Wochen", other: "{n} Wochen" };
const days = { zero: "{n} Tage", one: "{n} Tag", two: "{n} Tage", few: "{n} Tage", many: "{n} Tage", other: "{n} Tage" };

const de: CalculatorTranslation<AgeText> = {
  content: {
    title: "Altersrechner",
    shortTitle: "Alter",
    summary: "Ermitteln Sie das genaue Alter in Jahren, Monaten und Tagen zu einem beliebigen Datum – mit Gesamtzahl der Tage und Wochen und dem nächsten Geburtstag.",
    metaTitle: "Altersrechner – genaues Alter in Jahren, Monaten und Tagen",
    metaDescription:
      "Berechnen Sie aus dem Geburtsdatum Ihr genaues Alter in Jahren, Monaten und Tagen, dazu Tage und Wochen insgesamt und den nächsten Geburtstag.",
    keywords: ["Altersrechner", "Alter berechnen", "wie alt bin ich", "Geburtsdatum", "Alter in Tagen", "genaues Alter", "nächster Geburtstag"],
    intro: [
      "Geben Sie ein Geburtsdatum ein, um das genaue Alter am heutigen Tag zu sehen, oder wählen Sie ein anderes Datum, um das Alter an diesem Tag zu ermitteln.",
      "Der Rechner zählt echte Kalendermonate und berücksichtigt Schaltjahre, unterschiedlich lange Monate und Geburtstage am 29. Februar.",
    ],
    howToUse: [
      "Geben Sie das Geburtsdatum ein.",
      "Übernehmen Sie das heutige Datum oder wählen Sie ein anderes.",
      "Wenn der Geburtstag auf den 29. Februar fällt, wählen Sie, wie er in anderen Jahren gezählt wird.",
      "Lesen Sie das Alter, die Gesamtwerte und den nächsten Geburtstag ab.",
    ],
    formulas: [
      { title: "Jahre, Monate und Tage", expression: "Alter = größte Anzahl voller Monate von der Geburt bis zum Datum, danach die verbleibenden Tage", explanation: "Volle Monate werden im Kalender gezählt. Ist ein Monat kürzer als der Geburtstag (zum Beispiel der 31.), gilt der letzte Tag dieses Monats." },
      { title: "Tage insgesamt", expression: "Tage = Datum − Geburtsdatum", explanation: "Kalendertage zwischen den beiden Daten, jeder Schalttag mitgezählt." },
      { title: "Nächster Geburtstag", expression: "Nächster Geburtstag = Geburtsdatum + (vollendete Jahre + 1) Jahre", explanation: "Ein Geburtstag am 29. Februar fällt in Gemeinjahren nach Ihrer Wahl auf den 28. Februar oder den 1. März." },
    ],
    examples: [
      {
        title: "Geboren am 15. Mai 1990, Alter am 14. Oktober 2026",
        steps: [
          "15. Mai 1990 → 15. Mai 2026: 36 Jahre",
          "15. Mai → 15. September: 4 Monate; 15. September → 14. Oktober: 29 Tage",
          "Insgesamt: 13.301 Tage; nächster Geburtstag am 15. Mai 2027, in 213 Tagen",
        ],
      },
      {
        title: "Geboren am 29. Februar 2000, Alter am 28. Februar 2025",
        steps: [
          "2025 ist kein Schaltjahr, daher gilt der 28. Februar als Geburtstag",
          "29. Februar 2000 → 28. Februar 2025: genau 25 Jahre",
          "Mit der 1.-März-Regel wäre das Alter 24 Jahre, 11 Monate und 30 Tage",
        ],
      },
    ],
    assumptions: [
      "Alle Daten beziehen sich auf den gregorianischen Kalender, auch für Zeiträume vor seiner Einführung in manchen Ländern.",
      "Das Alter wird in Kalendertagen Ihrer eigenen Zeitzone gezählt; die Geburtszeit und Zeitunterschiede zwischen Orten werden nicht berücksichtigt.",
      "Ist ein späterer Monat kürzer als der Geburtstag, gilt der letzte Tag dieses Monats als monatlicher Jahrestag.",
    ],
    faqs: [
      { question: "Wie wird ein Geburtstag am 29. Februar behandelt?", answer: "In Gemeinjahren können Sie ihn am 28. Februar oder am 1. März zählen. Die Praxis unterscheidet sich je nach Land und Zweck; prüfen Sie daher die für Sie geltende Regel, etwa bei gesetzlichen Altersgrenzen." },
      { question: "Warum wirken Monate und Tage manchmal ungleichmäßig?", answer: "Monate haben 28 bis 31 Tage, daher kann dieselbe Anzahl von Tagen je nach Datum einer unterschiedlichen Anzahl von Monaten entsprechen." },
      { question: "Spielt die Zeitzone eine Rolle?", answer: "Nur kurz vor oder nach Mitternacht. Der Rechner verwendet Kalenderdaten; wurden Sie spätabends in einer anderen Zeitzone geboren, kann Ihr Geburtsdatum dort von der Ortszeit abweichen." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    birth: "Geburtsdatum",
    asOf: "Alter am",
    asOfHelp: "Standardmäßig heute. Ändern Sie das Datum, um das Alter an einem beliebigen Tag zu sehen.",
    leapDay: "Geburtstag am 29. Februar in anderen Jahren",
    leapDayOptions: { feb28: "Am 28. Februar feiern", mar1: "Am 1. März feiern" },
    leapDayHelp: "Nur relevant, wenn Sie am 29. Februar geboren sind. Gesetze und Bräuche sind unterschiedlich.",
    units: { years, months, weeks, days },
    ymd: "{years}, {months} und {days}",
    weeksDays: "{weeks} und {days}",
    orderError: "Dieses Datum muss am oder nach dem Geburtsdatum liegen.",
    age: "Alter",
    ageCaption: "Geboren am {birth}; Alter am {asOf}.",
    totalMonths: "Monate insgesamt",
    totalWeeks: "Wochen insgesamt",
    totalDays: "Tage insgesamt",
    nextBirthday: "Nächster Geburtstag",
    daysToBirthday: "Tage bis zum nächsten Geburtstag",
    bornOn: "Wochentag der Geburt",
    weekdays: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    birthdayToday: "Herzlichen Glückwunsch zum Geburtstag! Heute jährt sich das Geburtsdatum.",
    note: "Das Alter wird anhand von Kalenderdaten in Ihrer eigenen Zeitzone berechnet; die Geburtszeit wird nicht berücksichtigt.",
  },
};

export default de;
