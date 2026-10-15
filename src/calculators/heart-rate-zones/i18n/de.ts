import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HeartRateZonesText } from "../text/en";

const de: CalculatorTranslation<HeartRateZonesText> = {
  content: {
    title: "Pulszonenrechner",
    shortTitle: "Pulszonen",
    summary: "Schätzen Sie Ihre maximale Herzfrequenz aus Ihrem Alter und sehen Sie fünf Trainingszonen in Schlägen pro Minute – nach Prozent des Maximums oder mit der Karvonen-Methode.",
    metaTitle: "Pulszonenrechner – Maximalpuls und Trainingszonen",
    metaDescription: "Schätzen Sie den Maximalpuls mit 220 − Alter oder der Tanaka-Formel und erhalten Sie fünf Trainingszonen in bpm, nach Prozent des Maximums oder nach Karvonen.",
    keywords: ["Pulszonen berechnen", "Herzfrequenzzonen", "Trainingspuls", "maximale Herzfrequenz", "Maximalpuls", "Karvonen-Formel", "Fettverbrennungszone", "Herzfrequenzreserve"],
    intro: [
      "Pulszonen teilen die Trainingsintensität anhand Ihrer maximalen Herzfrequenz in Bereiche ein. Das Training in einer bestimmten Zone hilft Ihnen, lockere Läufe, gleichmäßige Radfahrten oder harte Intervalle ohne Raten zu dosieren.",
      "Dieser Rechner schätzt Ihre maximale Herzfrequenz aus Ihrem Alter oder verwendet einen gemessenen Maximalwert und leitet daraus fünf Zonen in Schlägen pro Minute ab. Außerdem zeigt er die von der American Heart Association empfohlenen Bereiche für moderate und intensive Belastung.",
    ],
    howToUse: [
      "Geben Sie Ihr Alter ein und wählen Sie eine Formel für die maximale Herzfrequenz.",
      "Wenn Sie Ihren echten Maximalpuls aus einem Belastungstest kennen, geben Sie ihn ein; er ersetzt die Formel.",
      "Für die Karvonen-Methode geben Sie Ihren Ruhepuls ein und wählen Karvonen als Zonenmethode.",
      "Lesen Sie Ihren geschätzten Maximalpuls und den bpm-Bereich jeder Zone in der Tabelle ab.",
    ],
    formulas: [
      { title: "Maximale Herzfrequenz (Fox)", expression: "HFmax = 220 − Alter", explanation: "Die klassische Faustregel." },
      { title: "Maximale Herzfrequenz (Tanaka)", expression: "HFmax = 208 − 0,7 × Alter", explanation: "Aus einer Analyse von 351 Studien aus dem Jahr 2001; sie liefert für ältere Erwachsene höhere Werte als 220 − Alter." },
      { title: "Prozent des Maximums", expression: "Ziel = HFmax × Intensität", explanation: "Jede Zone umfasst 10 Prozentpunkte, von 50–60 % (Zone 1) bis 90–100 % (Zone 5)." },
      {
        title: "Karvonen (Herzfrequenzreserve)",
        expression: "Ziel = HFRuhe + Intensität × (HFmax − HFRuhe)",
        explanation: "Die Herzfrequenzreserve ist HFmax − HFRuhe. Diese Methode ergibt bei niedriger Intensität höhere Zielwerte als die Methode mit Prozent des Maximums.",
      },
    ],
    examples: [
      {
        title: "Alter 40 mit 220 − Alter",
        steps: ["HFmax = 220 − 40 = 180 bpm", "Zone 2 (60–70 %) = 108–126 bpm", "AHA-Bereich moderat (50–70 %) = 90–126 bpm; intensiv (70–85 %) = 126–153 bpm"],
      },
      {
        title: "Alter 55 mit der Tanaka-Formel",
        steps: ["HFmax = 208 − 0,7 × 55 = 169,5 bpm, angezeigt als 170 bpm", "Zone 3 (70–80 %) = 118,65–135,6, gerundet 119–136 bpm", "220 − Alter ergäbe 165 bpm, etwas weniger"],
      },
      {
        title: "Alter 30, Ruhepuls 60 bpm, Karvonen",
        steps: ["HFmax = 220 − 30 = 190 bpm; Reserve = 190 − 60 = 130 bpm", "Zone 3 unten = 60 + 0,7 × 130 = 151 bpm; oben = 60 + 0,8 × 130 = 164 bpm", "Zone 3 liegt also bei 151–164 bpm"],
      },
    ],
    assumptions: [
      "Diese Ergebnisse sind Schätzungen, keine medizinische Beratung, und dieser Rechner wurde nicht fachlich geprüft.",
      "Altersformeln beschreiben Durchschnittswerte der Bevölkerung. Die echte maximale Herzfrequenz eines Menschen kann um 10 bpm oder mehr von der Schätzung abweichen, daher ist ein gemessener Maximalwert genauer.",
      "Medikamente wie Betablocker sowie Hitze, Flüssigkeitsmangel, Koffein und Krankheit verändern die Herzfrequenz. Zonen auf Basis eines geschätzten Maximums passen möglicherweise nicht zu Ihnen.",
      "Wenn Sie eine Herzerkrankung, andere gesundheitliche Probleme oder Beschwerden wie Brustschmerzen oder Schwindel haben, sprechen Sie mit einer Ärztin oder einem Arzt, bevor Sie mit intensivem Training beginnen.",
      "Die Zonennamen und die Bereiche zu 10 Punkten sind eine verbreitete Konvention; Trainer und Geräte verwenden verschiedene Zonensysteme.",
    ],
    faqs: [
      {
        question: "Welche Formel für die maximale Herzfrequenz soll ich verwenden?",
        answer: "220 − Alter ist einfach und weit verbreitet. Die Tanaka-Formel, 208 − 0,7 × Alter, wurde an einen viel größeren Datensatz angepasst und liefert für ältere Erwachsene höhere Werte. Keine von beiden ersetzt einen Maximalwert, der in einem überwachten Belastungstest gemessen wurde.",
      },
      {
        question: "Was ist die Karvonen-Methode?",
        answer: "Sie legt Zielwerte anhand der Herzfrequenzreserve fest, also des Abstands zwischen maximaler Herzfrequenz und Ruhepuls. Da sie Ihren Ruhepuls berücksichtigt, kann sie für Menschen mit niedrigem Ruhepuls besser passen als ein einfacher Prozentsatz des Maximums.",
      },
      {
        question: "Welche Herzfrequenz gilt als moderate Belastung?",
        answer: "Die American Heart Association nennt etwa 50–70 % der maximalen Herzfrequenz für moderate und etwa 70–85 % für intensive Aktivität. Der Rechner zeigt beide Bereiche in Schlägen pro Minute.",
      },
    ],
    sourcesUsedFor: [
      "Die Gleichung 208 − 0,7 × Alter für die maximale Herzfrequenz.",
      "Zielbereiche von etwa 50–70 % der maximalen Herzfrequenz für moderate und etwa 70–85 % für intensive Aktivität sowie die Schätzung 220 − Alter.",
    ],
  },
  text: {
    age: "Alter",
    ageSuffix: "Jahre",
    formula: "Formel für die maximale Herzfrequenz",
    formulas: { fox: "220 − Alter", tanaka: "208 − 0,7 × Alter (Tanaka)" },
    formulaHelp: "Beide Formeln schätzen einen Durchschnitt für Menschen Ihres Alters. Die Version von Tanaka ergibt für ältere Erwachsene höhere Werte.",
    measuredMax: "Gemessene maximale Herzfrequenz",
    measuredMaxHelp: "Optional. Wenn Sie Ihren Maximalwert aus einem Belastungstest kennen, geben Sie ihn hier ein; er ersetzt die Formel.",
    resting: "Ruhepuls",
    restingHelp: "Optional, für die Karvonen-Methode aber erforderlich. Zählen Sie Ihren Puls nach dem Aufwachen eine volle Minute lang, bevor Sie aufstehen.",
    method: "Zonenmethode",
    methods: { percentMax: "Prozent der maximalen Herzfrequenz", karvonen: "Karvonen (Herzfrequenzreserve)" },
    methodHelp: "Karvonen wendet die Prozentsätze auf die Differenz zwischen maximaler Herzfrequenz und Ruhepuls an und addiert dann den Ruhepuls wieder hinzu.",
    errors: {
      restingRequired: "Geben Sie Ihren Ruhepuls ein, um die Karvonen-Methode zu verwenden.",
      restingTooHigh: "Der Ruhepuls muss niedriger sein als die maximale Herzfrequenz ({max} bpm).",
    },
    maxHr: "Geschätzte maximale Herzfrequenz",
    maxHrMeasured: "Maximale Herzfrequenz (gemessen)",
    captionFormula: "Geschätzt mit {formula} für das Alter {age}.",
    captionMeasured: "Ihr gemessener Maximalwert, verwendet anstelle einer Formel.",
    zonesCaption: "Trainingszonen nach Herzfrequenz",
    zonesCaptionKarvonen: "Trainingszonen nach Herzfrequenz (Karvonen)",
    columns: { zone: "Zone", intensity: "Intensität", heartRate: "Herzfrequenz" },
    zoneNames: ["Zone 1 – sehr leicht", "Zone 2 – leicht", "Zone 3 – moderat", "Zone 4 – hart", "Zone 5 – maximal"],
    percentRange: "{low}–{high}",
    bpmRange: "{low}–{high} bpm",
    ahaModerate: "AHA moderate Intensität ({range} des Maximums)",
    ahaVigorous: "AHA hohe Intensität ({range} des Maximums)",
    reserve: "Herzfrequenzreserve",
    notes: {
      aha: "Die American Heart Association empfiehlt etwa 50–70 % der maximalen Herzfrequenz für moderate und etwa 70–85 % für intensive Aktivität. Diese Bereiche werden als Prozent der maximalen Herzfrequenz angezeigt.",
      restingIgnored: "Der Ruhepuls wird nur bei der Karvonen-Methode verwendet.",
      estimate: "Formeln liefern Durchschnittswerte der Bevölkerung; Ihr echter Maximalpuls kann um 10 bpm oder mehr abweichen. Medikamente wie Betablocker senken die Herzfrequenz.",
      doctor: "Wenn Sie eine Herzerkrankung oder andere gesundheitliche Bedenken haben, sprechen Sie mit einer Ärztin oder einem Arzt, bevor Sie mit intensivem Training beginnen.",
    },
  },
};

export default de;
