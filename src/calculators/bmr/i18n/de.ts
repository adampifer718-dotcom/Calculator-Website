import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BmrText } from "../text/en";

const de: CalculatorTranslation<BmrText> = {
  content: {
    title: "Grundumsatzrechner",
    shortTitle: "Grundumsatz",
    summary: "Schätzen Sie Ihren Grundumsatz (Kalorienverbrauch in Ruhe) mit der Mifflin-St-Jeor-Formel.",
    metaTitle: "Grundumsatzrechner – BMR nach Mifflin-St-Jeor",
    metaDescription:
      "Schätzen Sie Ihren Grundumsatz (BMR) in kcal und kJ pro Tag mit der Mifflin-St-Jeor-Formel – wahlweise mit metrischen oder angloamerikanischen Einheiten.",
    keywords: ["Grundumsatz berechnen", "Grundumsatzrechner", "BMR Rechner", "Kalorienbedarf in Ruhe", "Ruheumsatz", "Mifflin-St-Jeor", "kcal pro Tag"],
    intro: [
      "Der Grundumsatz (BMR, basal metabolic rate) ist die Energie, die Ihr Körper in völliger Ruhe benötigt, um die lebenswichtigen Funktionen aufrechtzuerhalten. Er ist der Ausgangspunkt, um den täglichen Kalorienbedarf abzuschätzen.",
      "Dieser Rechner verwendet die Mifflin-St-Jeor-Formel, eine weit verbreitete Schätzung für gesunde Erwachsene.",
    ],
    howToUse: [
      "Wählen Sie metrische oder angloamerikanische Einheiten.",
      "Wählen Sie das in der Formel verwendete Geschlecht und geben Sie Ihr Alter ein.",
      "Geben Sie Ihr Gewicht und Ihre Größe ein.",
      "Lesen Sie Ihren geschätzten Grundumsatz in kcal und kJ pro Tag ab.",
    ],
    formulas: [
      {
        title: "Mifflin-St-Jeor",
        expression: "BMR = 10 × Gewicht (kg) + 6,25 × Größe (cm) − 5 × Alter (Jahre) + s\ns = +5 für Männer, −161 für Frauen",
        explanation: "Ergebnis in Kilokalorien pro Tag.",
      },
      { title: "Energieeinheiten", expression: "1 kcal = 4,184 kJ", explanation: "Die thermochemische Kalorie." },
    ],
    examples: [
      { title: "Mann, 30 Jahre, 80 kg, 180 cm", steps: ["10 × 80 + 6,25 × 180 − 5 × 30 + 5", "= 800 + 1.125 − 150 + 5 = 1.780 kcal/Tag"] },
      { title: "Frau, 25 Jahre, 60 kg, 165 cm", steps: ["10 × 60 + 6,25 × 165 − 5 × 25 − 161", "≈ 1.345 kcal/Tag"] },
    ],
    assumptions: [
      "Für gesunde Erwachsene. Nicht geeignet für Kinder, in der Schwangerschaft oder bei Erkrankungen, die den Stoffwechsel beeinflussen.",
      "Formeln schätzen Durchschnittswerte; der individuelle Grundumsatz kann um 10 % oder mehr abweichen.",
      "Dies ist keine medizinische oder Ernährungsberatung. Wenden Sie sich an medizinisches Fachpersonal oder eine Ernährungsfachkraft.",
    ],
    faqs: [
      {
        question: "Was ist der Unterschied zwischen Grundumsatz und täglichem Kalorienbedarf?",
        answer: "Der Grundumsatz umfasst nur den Ruhezustand. Beim täglichen Bedarf kommt die Energie für Bewegung und Verdauung hinzu, deshalb ist er höher.",
      },
      {
        question: "Warum berücksichtigt die Formel das Geschlecht?",
        answer: "Die ursprüngliche Studie hat für Männer und Frauen getrennte Konstanten ermittelt, weil sich die Körperzusammensetzung im Durchschnitt unterscheidet.",
      },
      {
        question: "Warum sinkt der Grundumsatz mit dem Alter?",
        answer: "Muskelmasse und Stoffwechselrate nehmen mit dem Alter tendenziell ab, was der Term −5 × Alter widerspiegelt.",
      },
    ],
    sourcesUsedFor: ["Die Mifflin-St-Jeor-Formel und ihre Koeffizienten."],
  },
  text: {
    units: "Einheiten",
    unitOptions: { metric: "Metrisch (kg, cm)", imperial: "Angloamerikanisch (lb, ft, in)" },
    sex: "In der Formel verwendetes Geschlecht",
    sexHelp: "Die Formel hat getrennte Konstanten für Männer und Frauen.",
    sexes: { male: "Männlich", female: "Weiblich" },
    age: "Alter",
    weight: "Gewicht",
    height: "Größe",
    heightFt: "Größe (Fuß)",
    heightIn: "Größe (Zoll)",
    heightZero: "Geben Sie eine Größe über 0 ein.",
    bmr: "Grundumsatz",
    caption: "Geschätzter Energieverbrauch in völliger Ruhe.",
    kj: "In Kilojoule",
    kcalDay: "kcal/Tag",
    kjDay: "kJ/Tag",
    note: "Eine Schätzung für gesunde Erwachsene. Individuelle Werte können um 10 % oder mehr abweichen; sie ist keine Vorgabe für Ernährung oder Behandlung.",
  },
};

export default de;
