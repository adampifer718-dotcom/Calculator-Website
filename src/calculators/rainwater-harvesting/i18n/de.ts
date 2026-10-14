import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RainwaterText } from "../text/en";

const de: CalculatorTranslation<RainwaterText> = {
  content: {
    title: "Regenwasserrechner",
    shortTitle: "Regenwassernutzung",
    summary: "Schätzen Sie, wie viel Regenwasser ein Dach anhand von Fläche, Niederschlag und Abflussbeiwert sammeln kann.",
    metaTitle: "Regenwasserrechner – Ertrag der Dachfläche berechnen",
    metaDescription:
      "Schätzen Sie die von einem Dach gesammelte Regenwassermenge in Litern oder US-Gallonen aus Auffangfläche, Niederschlagshöhe und Abflussbeiwert für Verluste.",
    keywords: ["Regenwasser berechnen", "Regenwassernutzung", "Zisterne Größe berechnen", "Regentonne", "Dachfläche Regenwasser", "Niederschlag Liter pro Quadratmeter"],
    intro: [
      "Jeder Millimeter Regen, der auf einen Quadratmeter Dach fällt, ergibt einen Liter Wasser. Dieser Rechner rechnet das hoch und berücksichtigt Verluste.",
      "Nutzen Sie ihn, um eine Regentonne oder Zisterne zu dimensionieren oder die jährliche Sammelmenge aus dem durchschnittlichen Niederschlag abzuschätzen.",
    ],
    howToUse: [
      "Wählen Sie metrische oder US-Einheiten.",
      "Geben Sie die Grundfläche des Dachs ein.",
      "Geben Sie den Niederschlag für den gewünschten Zeitraum ein.",
      "Passen Sie den Abflussbeiwert für Verluste an und lesen Sie die gesammelte Menge ab.",
    ],
    formulas: [
      { title: "Metrisch", expression: "Liter = Fläche (m²) × Niederschlag (mm) × Abflussbeiwert", explanation: "1 mm Regen auf 1 m² ergibt 1 Liter." },
      {
        title: "US-Einheiten",
        expression: "Gallonen = Fläche (ft²) × Niederschlag (in) × 0,6234 × Abflussbeiwert",
        explanation: "0,6234 = 144 in³ ÷ 231 in³ pro US-Gallone.",
      },
    ],
    examples: [
      { title: "100 m² Dach, 25 mm Regen", steps: ["100 × 25 = 2.500 L Regen", "2.500 × 0,8 = 2.000 L gesammelt"] },
      { title: "1.000 ft² Dach, 1 Zoll Regen", steps: ["1.000 × 1 × 0,6234 ≈ 623 gal", "623 × 0,8 ≈ 499 gal gesammelt"] },
    ],
    assumptions: [
      "Der Abflussbeiwert erfasst Verluste durch Verdunstung, Spritzwasser, Erstspülungsabscheider und überlaufende Dachrinnen. Er hängt vom Dachmaterial und von der Anlage ab; beachten Sie örtliche Empfehlungen.",
      "Verwenden Sie die waagerechte Grundfläche des Dachs, nicht die geneigte Dachfläche.",
      "Beachten Sie die örtlichen Vorschriften zum Sammeln und Nutzen von Regenwasser und bereiten Sie es vor dem Trinken auf.",
    ],
    faqs: [
      {
        question: "Wie viel Wasser liefert 1 Zoll Regen?",
        answer: "Etwa 0,623 US-Gallonen pro Quadratfuß Dachfläche vor Verlusten, also 623 Gallonen pro 1.000 ft².",
      },
      {
        question: "Welchen Abflussbeiwert sollte ich verwenden?",
        answer: "Glatte, harte Dächer verlieren weniger Wasser als raue oder saugfähige. 0,8 ist ein vorsichtiger Mittelwert; passen Sie ihn an Ihr Dach an.",
      },
      {
        question: "Kann man gesammeltes Regenwasser trinken?",
        answer: "Nicht ohne geeignete Filterung und Desinfektion. Viele nutzen es stattdessen für den Garten und die Toilettenspülung.",
      },
    ],
    sourcesUsedFor: ["Definitionen der US-Gallone (231 in³) und des Liters."],
  },
  text: {
    units: "Einheiten",
    unitOptions: { metric: "Metrisch (m², mm, Liter)", imperial: "US (ft², Zoll, Gallonen)" },
    area: "Auffangfläche (Dach)",
    areaHelp: "Die waagerechte Grundfläche des Dachs, nicht die geneigte Fläche.",
    rainfall: "Niederschlag",
    rainfallHelp: "Für ein Unwetter, einen Monat oder ein Jahr.",
    coefficient: "Abflussbeiwert",
    coefficientHelp: "Anteil des Regens, der nach Verlusten den Tank erreicht (0 bis 1).",
    collected: "Gesammeltes Wasser",
    inLiters: "In Litern",
    inGallons: "In US-Gallonen",
    inCubic: "In Kubikmetern",
    gallons: "US-gal",
    note: "1 mm Regen auf 1 m² ergibt genau 1 Liter; 1 Zoll Regen auf 1 ft² ergibt 144 ÷ 231 ≈ 0,623 US-Gallonen.",
  },
};

export default de;
