import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TdeeText } from "../text/en";

const de: CalculatorTranslation<TdeeText> = {
  content: {
    title: "TDEE-Rechner",
    shortTitle: "TDEE",
    summary: "Schätzen Sie Ihren täglichen Gesamtenergieumsatz aus dem Grundumsatz nach Mifflin-St-Jeor und einem Aktivitätsfaktor – mit allen Aktivitätsstufen im Vergleich.",
    metaTitle: "TDEE-Rechner – täglicher Gesamtenergieumsatz",
    metaDescription: "Schätzen Sie Ihren täglichen Gesamtenergieumsatz in kcal und kJ aus dem Grundumsatz nach Mifflin-St-Jeor und Ihrer Aktivität – mit allen fünf Stufen.",
    keywords: ["TDEE berechnen", "Gesamtumsatz berechnen", "Kalorienbedarf pro Tag", "Erhaltungskalorien", "Aktivitätsfaktor", "PAL-Wert", "Mifflin-St-Jeor", "Leistungsumsatz"],
    intro: [
      "Der tägliche Gesamtenergieumsatz (TDEE, total daily energy expenditure) ist eine Schätzung der gesamten Energie, die Sie an einem Tag verbrauchen: die Energie in Ruhe plus die Energie für Bewegung, Sport und die Verdauung. Er wird oft auch als Erhaltungskalorien bezeichnet.",
      "Dieser Rechner schätzt zuerst Ihren Grundumsatz mit der Mifflin-St-Jeor-Formel, derselben wie im Grundumsatzrechner, und multipliziert ihn dann mit einem Faktor für Ihr Aktivitätsniveau. Die fünf Faktoren von 1,2 bis 1,9 sind weit verbreitete Konventionen; betrachten Sie das Ergebnis daher als erste Schätzung.",
    ],
    howToUse: [
      "Wählen Sie metrische oder angloamerikanische Einheiten.",
      "Wählen Sie das in der Formel verwendete Geschlecht und geben Sie Alter, Gewicht und Größe ein.",
      "Wählen Sie das Aktivitätsniveau, das am besten zu einer typischen Woche passt.",
      "Lesen Sie Ihren geschätzten TDEE, den zugrunde liegenden Grundumsatz und die Tabelle mit allen Aktivitätsstufen ab.",
    ],
    formulas: [
      {
        title: "Grundumsatz (Mifflin-St-Jeor)",
        expression: "BMR = 10 × Gewicht (kg) + 6,25 × Größe (cm) − 5 × Alter (Jahre) + s\ns = +5 für Männer, −161 für Frauen",
        explanation: "Energieverbrauch in völliger Ruhe, in kcal pro Tag.",
      },
      {
        title: "Täglicher Gesamtenergieumsatz",
        expression: "TDEE = BMR × Aktivitätsfaktor\nsitzend 1,2 · leicht 1,375 · mäßig 1,55 · sehr aktiv 1,725 · extrem aktiv 1,9",
        explanation: "Der Faktor rechnet den Ruheumsatz auf die tägliche Aktivität hoch. Diese Werte sind übliche Konventionen und wurden nicht für Sie gemessen.",
      },
      {
        title: "Grobe wöchentliche Veränderung",
        expression: "0,5 kg pro Woche ≈ 0,5 × 7.700 ÷ 7 = 550 kcal/Tag",
        explanation: "Eine Faustregel, die 1 kg Körpergewicht mit etwa 7.700 kcal gleichsetzt. Die tatsächliche Gewichtsveränderung folgt ihr selten genau.",
      },
      { title: "Energieeinheiten", expression: "1 kcal = 4,184 kJ", explanation: "Die thermochemische Kalorie." },
    ],
    examples: [
      {
        title: "Frau, 35 Jahre, 68 kg, 168 cm, mäßig aktiv",
        steps: ["BMR = 10 × 68 + 6,25 × 168 − 5 × 35 − 161 = 1.394 kcal/Tag", "TDEE = 1.394 × 1,55 = 2.160,7 ≈ 2.161 kcal/Tag", "In Kilojoule: 2.160,7 × 4,184 ≈ 9.040 kJ/Tag"],
      },
      {
        title: "Mann, 45 Jahre, 190 lb, 5 ft 10 in, sitzend",
        steps: [
          "190 lb = 86,18 kg; 5 ft 10 in = 70 in = 177,8 cm",
          "BMR = 10 × 86,18 + 6,25 × 177,8 − 5 × 45 + 5 ≈ 1.753 kcal/Tag",
          "TDEE = 1.753,08 × 1,2 ≈ 2.104 kcal/Tag; der Wert für 0,5 kg Abnahme pro Woche (≈ 1.554 kcal/Tag) liegt unter dem Grundumsatz, daher erscheint ein Hinweis",
        ],
      },
    ],
    assumptions: [
      "Das Ergebnis ist eine Schätzung, keine medizinische oder Ernährungsberatung, und dieser Rechner wurde noch nicht fachlich geprüft. Sprechen Sie mit einer Ärztin, einem Arzt oder einer Ernährungsfachkraft, bevor Sie Ihre Ernährung umstellen.",
      "Die Mifflin-St-Jeor-Formel wurde für gesunde Erwachsene entwickelt. Sie ist nicht geeignet für Kinder, in der Schwangerschaft und Stillzeit oder bei Erkrankungen, die den Stoffwechsel beeinflussen, und der individuelle Grundumsatz kann um 10 % oder mehr davon abweichen.",
      "Die Aktivitätsfaktoren (1,2 bis 1,9) sind weit verbreitete Konventionen für grobe Lebensstilgruppen. Die Wahl der Stufe ist subjektiv, und der Fehler beim TDEE ist größer als beim Grundumsatz.",
      "Die Werte für ±0,5 kg pro Woche beruhen auf der groben Faustregel von 7.700 kcal pro kg. In der Praxis hängt die Gewichtsveränderung von Wasser, Körperzusammensetzung und Anpassung ab und verlangsamt sich mit der Zeit.",
    ],
    faqs: [
      {
        question: "Was ist der Unterschied zwischen Grundumsatz und TDEE?",
        answer: "Der Grundumsatz ist die Energie in völliger Ruhe. Der TDEE enthält zusätzlich die Energie für Alltagsbewegung, Sport und Verdauung und ist daher immer höher als der Grundumsatz.",
      },
      {
        question: "Welches Aktivitätsniveau sollte ich wählen?",
        answer: "Wählen Sie die Stufe, die zu einer gewöhnlichen Woche passt, nicht zu Ihrer besten. Liegen Sie zwischen zwei Stufen, zeigt die Tabelle beide, sodass Sie einen Wert dazwischen nehmen können. Die meisten Menschen mit Bürotätigkeit sind sitzend oder leicht aktiv.",
      },
      {
        question: "Warum weicht mein TDEE von meinem Fitnesstracker ab?",
        answer: "Tracker schätzen die Aktivität aus Bewegung und Herzfrequenz, während dieser Rechner einen groben Faktor verwendet. Beides sind Schätzungen; am besten zeigt sich Ihr tatsächlicher Erhaltungsbedarf, wenn Sie Gewicht und Nahrungsaufnahme über mehrere Wochen verfolgen.",
      },
    ],
    sourcesUsedFor: [
      "Die Mifflin-St-Jeor-Formel für den Ruheenergieumsatz, die auch der Grundumsatzrechner verwendet.",
      "Schätzung des Gesamtenergieumsatzes als Ruheenergieumsatz multipliziert mit einem körperlichen Aktivitätsniveau (PAL).",
    ],
  },
  text: {
    units: "Einheiten",
    unitOptions: { metric: "Metrisch (kg, cm)", imperial: "Angloamerikanisch (lb, ft, in)" },
    sex: "In der Formel verwendetes Geschlecht",
    sexHelp: "Die Mifflin-St-Jeor-Formel hat getrennte Konstanten für Männer und Frauen.",
    sexes: { male: "Männlich", female: "Weiblich" },
    age: "Alter",
    weight: "Gewicht",
    height: "Größe",
    heightFt: "Größe (Fuß)",
    heightIn: "Größe (Zoll)",
    heightZero: "Geben Sie eine Größe über 0 ein.",
    activity: "Aktivitätsniveau",
    activityHelp: "Wählen Sie die Beschreibung, die einer typischen Woche am nächsten kommt. Die Faktoren sind grobe Konventionen, keine Messwerte.",
    activities: {
      sedentary: "Sitzend (wenig oder kein Sport)",
      light: "Leicht aktiv (leichter Sport an 1–3 Tagen pro Woche)",
      moderate: "Mäßig aktiv (Sport an 3–5 Tagen pro Woche)",
      very: "Sehr aktiv (intensiver Sport an 6–7 Tagen pro Woche)",
      extra: "Extrem aktiv (körperliche Arbeit oder zweimal täglich Training)",
    },
    activityShort: { sedentary: "Sitzend", light: "Leicht aktiv", moderate: "Mäßig aktiv", very: "Sehr aktiv", extra: "Extrem aktiv" },
    tdee: "Täglicher Gesamtenergieumsatz",
    caption: "Grundumsatz {bmr} kcal/Tag × Aktivitätsfaktor {factor}.",
    bmr: "Grundumsatz (Mifflin-St-Jeor)",
    kj: "TDEE in Kilojoule",
    multiplier: "Aktivitätsfaktor",
    lose: "Etwa 0,5 kg (1,1 lb) Abnahme pro Woche",
    gain: "Etwa 0,5 kg (1,1 lb) Zunahme pro Woche",
    kcalDay: "kcal/Tag",
    kjDay: "kJ/Tag",
    table: {
      caption: "Geschätzter TDEE je Aktivitätsstufe",
      level: "Aktivitätsniveau",
      factor: "Faktor",
      kcal: "kcal/Tag",
      kj: "kJ/Tag",
    },
    notes: {
      estimate: "Eine Schätzung für gesunde Erwachsene. Der tatsächliche Energieverbrauch kann um mehrere hundert kcal pro Tag abweichen; dies ist keine Ernährungsvorgabe.",
      rule: "Die Werte für ±0,5 kg pro Woche beruhen auf der groben Faustregel, dass 1 kg Körpergewicht etwa 7.700 kcal entspricht (550 kcal pro Tag für 0,5 kg pro Woche). Die tatsächliche Gewichtsveränderung folgt ihr nicht genau.",
      belowBmr: "Der Wert für die Gewichtsabnahme liegt unter Ihrem geschätzten Grundumsatz. Weniger als den Grundumsatz zu essen, wird ohne Rat einer Ärztin, eines Arztes oder einer Ernährungsfachkraft nicht empfohlen.",
    },
  },
};

export default de;
