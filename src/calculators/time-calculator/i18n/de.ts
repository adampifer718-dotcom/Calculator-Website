import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TimeCalculatorText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const de: CalculatorTranslation<TimeCalculatorText> = {
  content: {
    title: "Zeitrechner",
    shortTitle: "Zeit",
    summary: "Addieren oder subtrahieren Sie zwei Zeitspannen in Tagen, Stunden, Minuten und Sekunden – mit normalisiertem Ergebnis und Summen in Stunden, Minuten und Sekunden.",
    metaTitle: "Zeitrechner – Stunden und Minuten addieren oder abziehen",
    metaDescription: "Addieren oder subtrahieren Sie Zeitspannen in Tagen, Stunden, Minuten und Sekunden – mit normalisiertem Ergebnis und Summe in Dezimalstunden.",
    keywords: ["Zeitrechner", "Stunden addieren", "Zeit subtrahieren", "Zeitspanne berechnen", "Stunden Minuten Sekunden", "Gesamtstunden", "Zeiten zusammenrechnen", "Dezimalstunden"],
    intro: [
      "Zeit von Hand zu addieren ist mühsam, weil sie nicht im Zehnersystem funktioniert: 60 Sekunden ergeben eine Minute, 60 Minuten eine Stunde und 24 Stunden einen Tag. Dieser Rechner übernimmt die Überträge für Sie.",
      "Geben Sie zwei Zeitspannen ein, wählen Sie, ob addiert oder subtrahiert wird, und lesen Sie das Ergebnis in Tagen, Stunden, Minuten und Sekunden ab – dazu denselben Wert als eine Summe in Stunden, Minuten oder Sekunden.",
    ],
    howToUse: [
      "Geben Sie die erste Zeitspanne ein. Füllen Sie nur die benötigten Teile aus und lassen Sie die anderen auf 0.",
      "Wählen Sie Addieren oder Subtrahieren.",
      "Geben Sie die zweite Zeitspanne ein.",
      "Lesen Sie das normalisierte Ergebnis ab. Die Summen darunter sind praktisch für Stundenzettel und Tabellen, die Dezimalstunden brauchen.",
    ],
    formulas: [
      { title: "Zeitspanne in Sekunden", expression: "T = Tage × 86.400 + Stunden × 3.600 + Minuten × 60 + Sekunden", explanation: "Jede Zeitspanne wird zuerst in Sekunden umgerechnet." },
      { title: "Ergebnis", expression: "R = T₁ + T₂   oder   R = T₁ − T₂", explanation: "Ein negatives R bedeutet, dass die zweite Zeitspanne länger ist als die erste." },
      {
        title: "Normalisieren",
        expression: "Tage = ⌊|R| ÷ 86.400⌋, Stunden = ⌊Rest ÷ 3.600⌋, Minuten = ⌊Rest ÷ 60⌋, Sekunden = was übrig bleibt",
        explanation: "Der Rest nach jedem Schritt wird in die nächstkleinere Einheit übertragen.",
      },
    ],
    examples: [
      {
        title: "Zwei Arbeitsblöcke an einem Tag",
        steps: ["7 h 45 min = 27.900 s und 2 h 30 min = 9.000 s", "27.900 + 9.000 = 36.900 s", "36.900 s = 10 Stunden und 900 s = 10 Stunden, 15 Minuten (10,25 Stunden)"],
      },
      {
        title: "Restzeit eines Auftrags von 3 Tagen und 4 Stunden nach 1 Tag und 20,5 Stunden",
        steps: ["3 d 4 h = 273.600 s; 1 d 20 h 30 min = 160.200 s", "273.600 − 160.200 = 113.400 s", "113.400 s = 1 Tag (86.400 s) + 27.000 s = 1 Tag, 7 Stunden, 30 Minuten"],
      },
      {
        title: "Zwei Rundenzeiten addieren",
        steps: ["48 min 37 s = 2.917 s und 51 min 52 s = 3.112 s", "2.917 + 3.112 = 6.029 s", "6.029 s = 1 Stunde (3.600 s) + 2.429 s = 1 Stunde, 40 Minuten, 29 Sekunden"],
      },
    ],
    assumptions: [
      "Jeder Tag hat genau 24 Stunden, jede Stunde 60 Minuten und jede Minute 60 Sekunden. Schaltsekunden und Zeitumstellungen werden ignoriert.",
      "Dieses Werkzeug rechnet mit Zeitspannen, nicht mit Uhrzeiten oder Daten. Um die Tage zwischen zwei Daten zu zählen, verwenden Sie den Datumsrechner.",
      "Sekundenbruchteile werden auf die nächste Millisekunde genau berücksichtigt.",
    ],
    faqs: [
      { question: "Wie rechne ich Minuten in Dezimalstunden um?", answer: "Teilen Sie die Minuten durch 60. Zum Beispiel sind 45 Minuten 45 ÷ 60 = 0,75 Stunden, also sind 7 Stunden 45 Minuten 7,75 Stunden. Der Rechner zeigt Ihnen diese Summe an." },
      { question: "Kann ich mehr als 60 Minuten eingeben?", answer: "Ja. Geben Sie zum Beispiel 135 Minuten ein, und das Ergebnis wird auf 2 Stunden, 15 Minuten übertragen." },
      { question: "Was bedeutet ein negatives Ergebnis?", answer: "Wenn Sie eine längere Zeitspanne von einer kürzeren abziehen, liegt die Differenz unter null. Das Ergebnis wird mit Minuszeichen angezeigt, damit Sie sehen, um wie viel die zweite länger ist." },
    ],
    sourcesUsedFor: ["Die Minute (60 s), die Stunde (3.600 s) und der Tag (86.400 s) als zur Verwendung mit dem SI zugelassene Einheiten."],
  },
  text: {
    fieldLabels: {
      first: { days: "Tage (erste Zeitspanne)", hours: "Stunden (erste Zeitspanne)", minutes: "Minuten (erste Zeitspanne)", seconds: "Sekunden (erste Zeitspanne)" },
      second: { days: "Tage (zweite Zeitspanne)", hours: "Stunden (zweite Zeitspanne)", minutes: "Minuten (zweite Zeitspanne)", seconds: "Sekunden (zweite Zeitspanne)" },
    },
    partsHelp: "Lassen Sie einen Teil auf 0, wenn Sie ihn nicht brauchen. Werte über 24 Stunden, 60 Minuten oder 60 Sekunden sind möglich und werden übertragen.",
    operation: "Rechenart",
    operations: { add: "Addieren (+)", subtract: "Subtrahieren (−)" },
    operationHelp: "Beim Subtrahieren wird die zweite Zeitspanne von der ersten abgezogen. Das Ergebnis ist negativ, wenn die zweite länger ist.",
    result: "Ergebnis",
    caption: "{first} {op} {second}.",
    opSymbols: { add: "+", subtract: "−" },
    units: {
      days: forms("{n} Tag", "{n} Tage"),
      hours: forms("{n} Stunde", "{n} Stunden"),
      minutes: forms("{n} Minute", "{n} Minuten"),
      seconds: forms("{n} Sekunde", "{n} Sekunden"),
    },
    separator: ", ",
    negative: "−{duration}",
    totalDays: "Gesamt in Tagen",
    totalHours: "Gesamt in Stunden",
    totalMinutes: "Gesamt in Minuten",
    totalSeconds: "Gesamt in Sekunden",
    notes: {
      negative: "Die zweite Zeitspanne ist länger als die erste, daher ist das Ergebnis negativ.",
      days: "Ein Tag zählt als genau 24 Stunden. Zeitumstellungen und Schaltsekunden sind nicht berücksichtigt.",
      rounding: "Das Ergebnis wird auf die nächste Tausendstelsekunde gerundet.",
    },
  },
};

export default de;
