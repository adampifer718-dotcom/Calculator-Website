import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WeightConverterText } from "../text/en";

const de: CalculatorTranslation<WeightConverterText> = {
  content: {
    title: "Gewichtsumrechner",
    shortTitle: "Gewicht",
    summary: "Rechnen Sie zwischen Milligramm, Gramm, Kilogramm, Tonnen, Unzen, Pfund und Stone um.",
    metaTitle: "Gewichtsumrechner – kg, lb, oz, g und Stone",
    metaDescription: "Rechnen Sie Gewicht (Masse) zwischen Kilogramm, Gramm, Milligramm, Tonnen, Pfund, Unzen und Stone um – mit der exakten internationalen Definition des Pfunds.",
    keywords: ["Gewicht umrechnen", "kg in lb", "Pfund in kg", "Unzen in Gramm", "lbs in kg", "Stone in kg", "Gewichtsumrechner"],
    intro: [
      "Rechnen Sie ein Gewicht zwischen metrischen und imperialen Einheiten um. Genau genommen handelt es sich um Masseeinheiten – also das, was eine Waage anzeigt.",
      "Das Pfund ist als exakt 0,45359237 kg definiert, daher ist jede Umrechnung hier vor dem Runden für die Anzeige exakt.",
    ],
    howToUse: [
      "Geben Sie den Wert ein.",
      "Wählen Sie die Ausgangs- und die Zieleinheit.",
      "Lesen Sie das Ergebnis und die vollständige Tabelle ab.",
    ],
    formulas: [
      {
        title: "Umrechnung über Kilogramm",
        expression: "Ergebnis = Wert × (kg pro Ausgangseinheit) ÷ (kg pro Zieleinheit)",
        explanation: "Jede Einheit ist als feste Anzahl von Kilogramm definiert.",
      },
      {
        title: "Wichtige Faktoren",
        expression: "1 lb = 0,45359237 kg\n1 oz = 1/16 lb = 28,349523125 g\n1 st = 14 lb\n1 t = 1.000 kg",
        explanation: "Gemeint sind Avoirdupois-Unzen, wie sie für Lebensmittel und Körpergewicht verwendet werden.",
      },
    ],
    examples: [
      { title: "150 Pfund in Kilogramm", steps: ["150 × 0,45359237", "≈ 68,04 kg"] },
      { title: "1 Kilogramm in Pfund", steps: ["1 ÷ 0,45359237", "≈ 2,2046 lb"] },
    ],
    assumptions: [
      "Unzen sind Avoirdupois-Unzen; Feinunzen (Troy-Unzen, für Edelmetalle) sind nicht enthalten.",
      "Tonnen sind metrische Tonnen (1.000 kg), keine US-amerikanischen Short Tons oder britischen Long Tons.",
    ],
    faqs: [
      { question: "Wie viele Pfund hat ein Kilogramm?", answer: "Etwa 2,2046 Pfund (englische Pfund, lb)." },
      { question: "Wie viele Unzen hat ein Pfund?", answer: "Genau 16 Avoirdupois-Unzen." },
      { question: "Wie viel ist ein Stone?", answer: "14 Pfund oder etwa 6,35 kg." },
    ],
    sourcesUsedFor: ["Exakte Definition des Pfunds und verwandter Einheiten in Kilogramm."],
  },
  text: {
    value: "Wert",
    from: "Von",
    to: "In",
    unitNames: { mg: "Milligramm", g: "Gramm", kg: "Kilogramm", t: "Metrische Tonnen", oz: "Unzen (Avoirdupois)", lb: "Pfund", st: "Stone" },
    primary: "{value} {symbol} in {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} in allen Masseeinheiten",
    tableUnit: "Einheit",
    tableValue: "Wert",
    note: "Die Ergebnisse werden mit 10 signifikanten Stellen angezeigt.",
  },
};

export default de;
