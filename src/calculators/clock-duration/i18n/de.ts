import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ClockDurationText } from "../text/en";

const de: CalculatorTranslation<ClockDurationText> = {
  content: {
    title: "Arbeitszeitrechner",
    shortTitle: "Arbeitszeit",
    summary: "Zählen Sie die Stunden und Minuten zwischen Beginn und Ende abzüglich einer unbezahlten Pause, auch bei Nachtschichten, mit Dezimalstunden und optionalem Lohn.",
    metaTitle: "Arbeitszeitrechner – Zeit zwischen zwei Uhrzeiten",
    metaDescription: "Berechnen Sie die Stunden zwischen zwei Uhrzeiten abzüglich Pausen, auch über Mitternacht. Mit h:mm, Dezimalstunden für den Stundenzettel und Lohn zum Stundensatz.",
    keywords: ["Arbeitszeit berechnen", "Stundenrechner", "Schichtrechner", "Zeit zwischen zwei Uhrzeiten", "Stundenzettel", "Dezimalstunden", "gearbeitete Stunden", "Nachtschicht Stunden"],
    intro: [
      "Wie lang ist eine Schicht von 9:00 bis 17:30 Uhr mit einer halben Stunde Mittagspause? Von Hand über die Stunden hinweg zu zählen ist fehleranfällig, besonders wenn die Schicht nach Mitternacht endet oder Sie die Summe für einen Stundenzettel in Dezimalstunden brauchen.",
      "Geben Sie Beginn und Ende im 24-Stunden- oder am/pm-Format ein, ergänzen Sie eine unbezahlte Pause, und dieser Rechner zeigt die Arbeitszeit in Stunden und Minuten, in Dezimalstunden und in Minuten insgesamt. Mit einem Stundensatz sehen Sie auch den Lohn für die Schicht.",
    ],
    howToUse: [
      "Geben Sie den Beginn ein, zum Beispiel 9:00, 09:00 oder 9 am.",
      "Geben Sie das Ende ein. Liegt es vor dem Beginn, wird angenommen, dass die Schicht am nächsten Tag endet.",
      "Geben Sie die unbezahlte Pause in Minuten ein, oder 0, wenn es keine gibt.",
      "Wählen Sie optional eine Währung und geben Sie Ihren Stundensatz ein.",
      "Lesen Sie die Arbeitszeit, die Dezimalstunden für Ihren Stundenzettel und den Lohn ab.",
    ],
    formulas: [
      { title: "Spanne zwischen den Uhrzeiten", expression: "Spanne = Ende − Beginn   (24 h addieren, wenn Ende ≤ Beginn)", explanation: "Beide Uhrzeiten werden zuerst in Minuten nach Mitternacht umgerechnet." },
      { title: "Arbeitszeit", expression: "Arbeitszeit = Spanne − Pause", explanation: "Die unbezahlte Pause wird von der Spanne abgezogen." },
      { title: "Dezimalstunden und Lohn", expression: "Dezimalstunden = Arbeitsminuten ÷ 60\nLohn = Dezimalstunden × Stundensatz", explanation: "Zum Beispiel sind 7 h 30 min gleich 450 ÷ 60 = 7,5 Stunden." },
    ],
    examples: [
      { title: "Ein Tag von 9:00 bis 17:30 Uhr mit 30 Minuten Mittagspause", steps: ["9:00 = 540 min und 17:30 = 1.050 min nach Mitternacht", "Spanne = 1.050 − 540 = 510 min", "Arbeitszeit = 510 − 30 = 480 min = 8:00, also 8 Dezimalstunden"] },
      { title: "Eine Nachtschicht von 22:00 bis 6:15 Uhr mit 45 Minuten Pause, für 18,50 $ pro Stunde", steps: ["6:15 liegt vor 22:00, die Schicht geht also über Mitternacht: 375 + 1.440 − 1.320 = 495 min", "Arbeitszeit = 495 − 45 = 450 min = 7:30, also 7,5 Stunden", "Lohn = 7,5 × 18,50 $ = 138,75 $"] },
      { title: "Ein Vormittag von 8:45 bis 12:10 Uhr ohne Pause", steps: ["8:45 = 525 min und 12:10 = 730 min", "Arbeitszeit = 730 − 525 = 205 min", "205 min = 3:25, also etwa 3,42 Dezimalstunden"] },
    ],
    assumptions: [
      "Eine Schicht dauert weniger als 24 Stunden. Ist das Ende gleich oder früher als der Beginn, wird es dem nächsten Tag zugeordnet.",
      "Zeitumstellungen (Sommer- und Winterzeit) während der Schicht werden ignoriert, eine Nachtschicht darüber hinweg weicht also um eine Stunde ab.",
      "Der Lohn ist eine einfache Schätzung des Bruttolohns: Stunden × Stundensatz. Überstundenzuschläge, Steuern und die Rundungsregeln Ihres Arbeitgebers sind nicht enthalten. Für wöchentliche Überstunden verwenden Sie den Überstundenrechner.",
    ],
    faqs: [
      { question: "Wie rechne ich Stunden und Minuten in Dezimalstunden um?", answer: "Teilen Sie die Minuten durch 60 und addieren Sie sie zu den Stunden. 7 Stunden 30 Minuten sind 7 + 30 ÷ 60 = 7,5 Stunden, und 3 Stunden 25 Minuten sind etwa 3,42 Stunden." },
      { question: "Wie gebe ich eine Schicht ein, die nach Mitternacht endet?", answer: "Geben Sie einfach das tatsächliche Ende ein, etwa 6:15 oder 6:15 am. Liegt das Ende vor dem Beginn, addiert der Rechner 24 Stunden und zeigt einen Hinweis an." },
      { question: "Welche Zeitformate kann ich eingeben?", answer: "24-Stunden-Zeiten wie 9:30, 09:30 oder 21:30 sowie 12-Stunden-Zeiten mit am oder pm wie 9:30 pm, 9 pm oder 9 am. Minuten müssen, wenn angegeben, zweistellig sein." },
    ],
    sourcesUsedFor: ["Die Stunde (60 Minuten) und die Minute (60 Sekunden) für die Umrechnung zwischen Uhrzeit und Dezimalstunden."],
  },
  text: {
    start: "Beginn",
    end: "Ende",
    timeHelp: "Geben Sie eine 24-Stunden-Zeit wie 9:30, 09:30 oder 21:30 ein, oder eine 12-Stunden-Zeit mit am/pm wie 9:30 pm oder 9 am.",
    breakMinutes: "Unbezahlte Pause",
    breakHelp: "Gesamte unbezahlte Pausenzeit in Minuten, etwa eine Mittagspause. Geben Sie 0 ein, wenn es keine gibt.",
    rate: "Stundensatz (optional)",
    rateHelp: "Leer lassen, wenn Sie nur die Stunden brauchen.",
    errors: {
      format: "Geben Sie eine Uhrzeit wie 9:30, 21:30, 9:30 pm oder 9 am ein.",
      hour24: "Die Stunde muss zwischen 0 und 23 liegen.",
      hour12: "Mit am oder pm muss die Stunde zwischen 1 und 12 liegen.",
      minute: "Die Minuten müssen zwischen 00 und 59 liegen.",
      breakTooLong: "Die Pause muss kürzer sein als die Zeit zwischen Beginn und Ende ({span}).",
    },
    worked: "Arbeitszeit",
    caption: "{start} bis {end}, abzüglich {break} min Pause",
    decimalHours: "Dezimalstunden",
    totalMinutes: "Minuten insgesamt",
    span: "Zeit zwischen Beginn und Ende",
    pay: "Lohn für diese Schicht",
    notes: {
      overnight: "Das Ende liegt nicht nach dem Beginn, daher wird angenommen, dass die Schicht über Mitternacht in den nächsten Tag reicht (24 Stunden addiert).",
      fullDay: "Beginn und Ende sind gleich, daher wird eine volle Spanne von 24 Stunden gezählt.",
      rounding: "Der Lohn ist Dezimalstunden × Stundensatz, vor Steuern, Überstundenzuschlägen und eventuellen Rundungsregeln Ihres Arbeitgebers.",
    },
  },
};

export default de;
