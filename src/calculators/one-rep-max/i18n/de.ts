import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OneRepMaxText } from "../text/en";

const de: CalculatorTranslation<OneRepMaxText> = {
  content: {
    title: "1RM-Rechner (Maximalkraft)",
    shortTitle: "1RM",
    summary: "Schätzen Sie Ihr Einwiederholungsmaximum aus einem Satz mit 1–12 Wiederholungen nach Epley, Brzycki und Lombardi – mit einer Tabelle der Trainingsgewichte.",
    metaTitle: "1RM-Rechner (Maximalkraft) – Epley, Brzycki, Lombardi",
    metaDescription: "Schätzen Sie Ihr One-Rep-Max (1RM) aus Gewicht und Wiederholungen eines harten Satzes mit drei Formeln und erhalten Sie Trainingsgewichte von 60 % bis 95 %.",
    keywords: ["1RM berechnen", "One-Rep-Max Rechner", "Maximalkraft berechnen", "Maximalgewicht", "Epley-Formel", "Brzycki-Formel", "Bankdrücken Maximum", "Kniebeuge Maximum", "Trainingsprozente"],
    intro: [
      "Ihr Einwiederholungsmaximum (1RM) ist das schwerste Gewicht, das Sie mit sauberer Technik einmal bewegen können. Es direkt zu testen ist anstrengend und riskanter, daher schätzen Kraftsportler es oft aus einem schwereren Satz, der nahe am Muskelversagen endet.",
      "Dieser Rechner wendet drei weit verbreitete Gleichungen von Epley, Brzycki und Lombardi an und bildet ihren Mittelwert. Jede wurde an anderen Sportlern angepasst, daher zeigt die Streuung zwischen ihnen, wie unsicher eine einzelne Schätzung ist.",
      "Die Tabelle rechnet die Schätzung in Gewichte bei gängigen Trainingsprozenten um, von 60 % für leichtere Volumenarbeit bis 95 % für schwere Einzelwiederholungen.",
    ],
    howToUse: [
      "Geben Sie das bewegte Gewicht ein und wählen Sie Kilogramm oder Pfund.",
      "Geben Sie an, wie viele vollständige Wiederholungen Sie in diesem Satz geschafft haben, von 1 bis 12.",
      "Lesen Sie die gemittelte Schätzung und das Ergebnis jeder Formel ab.",
      "Nutzen Sie die Tabelle, um Gewichte für einen Trainingsplan auszuwählen.",
    ],
    formulas: [
      {
        title: "Epley",
        expression: "1RM = w × (1 + r ÷ 30), und 1RM = w bei r = 1",
        explanation: "w ist das bewegte Gewicht und r die Anzahl der Wiederholungen. Addiert pro Wiederholung etwa 3,3 % des Gewichts.",
      },
      { title: "Brzycki", expression: "1RM = w × 36 ÷ (37 − r)", explanation: "Liefert bei 10 Wiederholungen dasselbe Ergebnis wie Epley und darunter etwas niedrigere Werte." },
      { title: "Lombardi", expression: "1RM = w × r^0,10", explanation: "Ein Potenzgesetz, das über die ersten Wiederholungen schnell ansteigt und dann abflacht." },
      {
        title: "Angezeigte Schätzung",
        expression: "1RM ≈ (Epley + Brzycki + Lombardi) ÷ 3",
        explanation: "Die Trainingsgewichte in der Tabelle sind dieser Mittelwert multipliziert mit dem jeweiligen Prozentsatz.",
      },
    ],
    examples: [
      {
        title: "Kniebeuge: 82,5 kg für 6 Wiederholungen",
        steps: [
          "Epley: 82,5 × (1 + 6 ÷ 30) = 99,0 kg",
          "Brzycki: 82,5 × 36 ÷ 31 ≈ 95,8 kg",
          "Lombardi: 82,5 × 6^0,1 ≈ 98,7 kg",
          "Mittelwert ≈ (99,0 + 95,8 + 98,7) ÷ 3 ≈ 97,8 kg",
        ],
      },
      {
        title: "Bankdrücken: 185 lb für 8 Wiederholungen",
        steps: ["Epley: 185 × (1 + 8 ÷ 30) ≈ 234,3 lb", "Brzycki: 185 × 36 ÷ 29 ≈ 229,7 lb", "Lombardi: 185 × 8^0,1 ≈ 227,8 lb", "Mittelwert ≈ 230,6 lb"],
      },
    ],
    assumptions: [
      "Der Satz wurde nahe am Muskelversagen mit gleichbleibender Technik ausgeführt. Wer deutlich vor dem Versagen aufhört, erhält eine zu niedrige Schätzung.",
      "Die Formeln sind oberhalb von etwa 10 Wiederholungen am wenigsten zuverlässig, da dann die Kraftausdauer mehr zählt als die Maximalkraft. Sätze mit 3–8 Wiederholungen liefern bessere Schätzungen.",
      "Die Gleichungen wurden überwiegend an Freihantelübungen wie Bankdrücken und Kniebeuge entwickelt. Bei Maschinen, Isolationsübungen und untrainierten Personen können die Ergebnisse abweichen.",
      "Ein echter Maximalversuch erfordert saubere Technik, gründliches Aufwärmen und einen Sicherungspartner oder Sicherheitsablagen. Dieses Werkzeug ersetzt keine medizinische Beratung oder Trainerberatung.",
    ],
    faqs: [
      {
        question: "Welche 1RM-Formel ist am genauesten?",
        answer: "Keine ist für alle die beste. Vergleichsstudien zeigen, dass die Genauigkeit von Übung, Person und Wiederholungszahl abhängt. Deshalb mittelt dieser Rechner drei Formeln und zeigt jede einzeln an.",
      },
      {
        question: "Wie viele Wiederholungen sollte ich für die Schätzung verwenden?",
        answer: "Ein Satz mit etwa 3 bis 8 harten Wiederholungen funktioniert am besten. Bei einer Wiederholung ist die Schätzung einfach das bewegte Gewicht, und ab etwa 10 Wiederholungen gehen die Vorhersagen auseinander.",
      },
      {
        question: "Kann ich die Trainingstabelle für ein Programm nutzen?",
        answer: "Ja, als Ausgangspunkt. Viele Programme geben die Belastung als Prozentsatz des 1RM vor, etwa 80 % für Sätze mit rund 5 Wiederholungen. Passen Sie die Gewichte daran an, wie sich die Sätze anfühlen.",
      },
    ],
    sourcesUsedFor: [
      "Ursprung der Brzycki-Vorhersagegleichung und ihre vorgesehene Anwendung bei Sätzen bis etwa 10 Wiederholungen.",
      "Belege dafür, dass die Genauigkeit der Gleichungen von Epley, Brzycki, Lombardi und anderen je nach Übung und Personengruppe variiert.",
    ],
  },
  text: {
    weight: "Bewegtes Gewicht",
    unit: "Einheit",
    units: { kg: "kg", lb: "lb" },
    reps: "Geschaffte Wiederholungen",
    repsHelp: "Vollständige Wiederholungen mit sauberer Technik in einem Satz nahe am Muskelversagen, von 1 bis 12.",
    estimate: "Geschätztes Einwiederholungsmaximum",
    caption: "Mittelwert der Schätzungen nach Epley, Brzycki und Lombardi für {weight} × {reps}.",
    repsCount: {
      zero: "{n} Wiederholungen",
      one: "{n} Wiederholung",
      two: "{n} Wiederholungen",
      few: "{n} Wiederholungen",
      many: "{n} Wiederholungen",
      other: "{n} Wiederholungen",
    },
    epley: "Epley-Formel",
    brzycki: "Brzycki-Formel",
    lombardi: "Lombardi-Formel",
    tableCaption: "Trainingsgewichte auf Basis des geschätzten 1RM",
    tablePercent: "Anteil am 1RM",
    tableLoad: "Gewicht",
    notes: {
      single: "Bei einer einzigen Wiederholung liefert jede Formel das bewegte Gewicht.",
      highReps: "Schätzungen aus mehr als etwa 10 Wiederholungen sind weniger zuverlässig; ein schwererer Satz mit 3–8 Wiederholungen ergibt eine bessere Vorhersage.",
      safety: "Ein echter Maximalversuch erfordert saubere Technik, Aufwärmen und einen Sicherungspartner oder Sicherheitsablagen.",
    },
  },
};

export default de;
