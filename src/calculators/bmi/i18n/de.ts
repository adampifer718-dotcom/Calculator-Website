import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BmiText } from "../text/en";

const de: CalculatorTranslation<BmiText> = {
  content: {
    title: "BMI-Rechner",
    shortTitle: "BMI",
    summary: "Berechnen Sie den Body-Mass-Index aus Größe und Gewicht in metrischen oder imperialen Einheiten.",
    metaTitle: "BMI-Rechner – Body-Mass-Index für Erwachsene",
    metaDescription: "Berechnen Sie Ihren Body-Mass-Index (BMI) aus Größe und Gewicht in kg und cm oder in lb, Fuß und Zoll – mit BMI-Kategorie und gesundem Gewichtsbereich.",
    keywords: ["BMI berechnen", "BMI-Rechner", "Body-Mass-Index", "Normalgewicht", "Übergewicht", "Idealgewicht", "Adipositas"],
    intro: [
      "Der Body-Mass-Index (BMI) setzt das Gewicht ins Verhältnis zur Körpergröße. Er ist ein schnelles Screening-Maß für Erwachsene, keine Diagnose.",
      "Geben Sie Ihre Größe und Ihr Gewicht in metrischen oder imperialen Einheiten ein, um Ihren BMI, die Kategorie für Erwachsene und den Gewichtsbereich zu sehen, der bei Ihrer Größe einem gesunden BMI entspricht.",
    ],
    howToUse: [
      "Wählen Sie metrische oder imperiale Einheiten.",
      "Geben Sie Ihr Gewicht und Ihre Größe ein.",
      "Lesen Sie Ihren BMI, die Kategorie und den gesunden Gewichtsbereich ab.",
    ],
    formulas: [
      { title: "BMI", expression: "BMI = Gewicht (kg) ÷ Größe (m)²", explanation: "Imperiale Einheiten werden mit 1 lb = 0,45359237 kg und 1 in = 2,54 cm umgerechnet." },
      {
        title: "Kategorien für Erwachsene",
        expression: "Unter 18,5: Untergewicht\n18,5–24,9: Normalgewicht\n25–29,9: Übergewicht\n30 oder mehr: Adipositas",
        explanation: "Kategorien der Weltgesundheitsorganisation für Erwachsene.",
      },
    ],
    examples: [
      { title: "70 kg, 175 cm", steps: ["Größe = 1,75 m", "BMI = 70 ÷ 1,75² ≈ 22,9, Normalgewicht"] },
      { title: "180 lb, 5 ft 10 in", steps: ["180 lb = 81,65 kg; 70 in = 1,778 m", "BMI = 81,65 ÷ 1,778² ≈ 25,8, Übergewicht"] },
    ],
    assumptions: [
      "Für Erwachsene ab 18 Jahren. Für Kinder und Jugendliche werden alters- und geschlechtsspezifische Perzentilen verwendet.",
      "Der BMI misst den Körperfettanteil nicht direkt und kann Sportler, ältere Menschen und Schwangere falsch einordnen.",
      "Dies ist keine medizinische Beratung. Sprechen Sie über Ihre Gesundheit mit medizinischem Fachpersonal.",
    ],
    faqs: [
      { question: "Was ist ein gesunder BMI?", answer: "Für die meisten Erwachsenen 18,5 bis 24,9." },
      { question: "Ist der BMI genau?", answer: "Er ist ein nützliches Screening-Instrument für Bevölkerungsgruppen, unterscheidet aber nicht zwischen Muskeln und Fett und berücksichtigt nicht, wo das Fett gespeichert ist." },
      { question: "Gilt der BMI auch für Kinder?", answer: "Nicht mit den Kategorien für Erwachsene. Der BMI von Kindern wird mit Wachstumskurven für ihr Alter und Geschlecht verglichen." },
    ],
    sourcesUsedFor: [
      "Definition des BMI für Erwachsene und Grenzwerte der Kategorien.",
      "Exakte Umrechnungsfaktoren für Pfund und Zoll.",
    ],
  },
  text: {
    units: "Einheiten",
    unitOptions: { metric: "Metrisch (kg, cm)", imperial: "Imperial (lb, ft, in)" },
    weight: "Gewicht",
    height: "Größe",
    heightFt: "Größe (Fuß)",
    heightIn: "Größe (Zoll)",
    heightZero: "Geben Sie eine Größe über 0 ein.",
    primary: "Body-Mass-Index",
    caption: "{category} (Bereich für Erwachsene).",
    category: "Kategorie",
    categories: { under: "Untergewicht", healthy: "Normalgewicht", over: "Übergewicht", obese: "Adipositas" },
    healthyRange: "Gesundes Gewicht für diese Größe",
    range: "{low}–{high} {unit}",
    note: "Kategorien für Erwachsene: unter 18,5 Untergewicht, 18,5–24,9 Normalgewicht, 25–29,9 Übergewicht, 30 oder mehr Adipositas. Bei Kindern, in der Schwangerschaft oder bei sehr muskulösen Menschen ist der BMI nicht in gleicher Weise anwendbar.",
  },
};

export default de;
