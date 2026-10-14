import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DilutionText } from "../text/en";

const de: CalculatorTranslation<DilutionText> = {
  content: {
    title: "Verdünnungsrechner (C₁V₁ = C₂V₂)",
    shortTitle: "Verdünnung",
    summary: "Lösen Sie C₁V₁ = C₂V₂ nach dem Volumen der Stammlösung, der Endkonzentration, dem Endvolumen oder der Stammkonzentration.",
    metaTitle: "Verdünnungsrechner – C1V1 = C2V2",
    metaDescription:
      "Lösen Sie die Verdünnungsgleichung C1V1 = C2V2 nach einem beliebigen Wert: benötigtes Volumen der Stammlösung, Endkonzentration, Endvolumen oder Stammkonzentration.",
    keywords: ["Verdünnung berechnen", "Verdünnungsrechner", "C1V1=C2V2", "Mischungsgleichung", "Stammlösung verdünnen", "Konzentration berechnen", "Chemie Rechner"],
    intro: [
      "Beim Verdünnen einer Lösung bleibt die Stoffmenge des gelösten Stoffes gleich, daher gilt C₁V₁ = C₂V₂.",
      "Wählen Sie die Unbekannte und geben Sie die anderen drei Werte ein, um eine Verdünnung zu planen.",
    ],
    howToUse: [
      "Wählen Sie, was Sie berechnen möchten – meist das benötigte Volumen der Stammlösung.",
      "Geben Sie die anderen drei Werte ein und verwenden Sie auf beiden Seiten passende Einheiten.",
      "Lesen Sie das Ergebnis ab und wie viel Lösungsmittel Sie zugeben müssen.",
    ],
    formulas: [
      {
        title: "Verdünnungsgleichung",
        expression: "C₁ × V₁ = C₂ × V₂",
        explanation: "C₁ und V₁ sind Konzentration und Volumen der Stammlösung, C₂ und V₂ die Endwerte.",
      },
      { title: "Zuzugebendes Lösungsmittel", expression: "Lösungsmittel = V₂ − V₁", explanation: "Geben Sie so viel Lösungsmittel zu, bis das Endvolumen erreicht ist." },
    ],
    examples: [
      { title: "100 mL einer 0,5-M-Lösung aus einer 2-M-Stammlösung herstellen", steps: ["V₁ = 0,5 × 100 ÷ 2", "= 25 mL Stammlösung plus 75 mL Lösungsmittel"] },
      { title: "10 mL einer 1-M-Lösung auf 250 mL verdünnt", steps: ["C₂ = 1 × 10 ÷ 250", "= 0,04 M"] },
    ],
    assumptions: [
      "Die Konzentrationen müssen dieselbe Einheit haben, ebenso die Volumina.",
      "Es wird angenommen, dass sich die Volumina addieren – eine gute Näherung für verdünnte wässrige Lösungen.",
    ],
    faqs: [
      {
        question: "Was bedeutet C1V1 = C2V2?",
        answer: "Die Menge des gelösten Stoffes vor der Verdünnung ist gleich der Menge danach: Konzentration mal Volumen bleibt konstant.",
      },
      { question: "Kann ich Prozent oder mg/mL verwenden?", answer: "Ja, solange C₁ und C₂ dieselbe Einheit haben." },
      { question: "Was ist ein Verdünnungsfaktor?", answer: "Das Verhältnis C₁ ÷ C₂. Eine Verdünnung von 1:10 verringert die Konzentration auf ein Zehntel." },
    ],
    sourcesUsedFor: ["Verdünnungsbeziehung C₁V₁ = C₂V₂."],
  },
  text: {
    solve: "Gesuchter Wert",
    solveOptions: {
      v1: "Benötigtes Volumen der Stammlösung (V₁)",
      c2: "Endkonzentration (C₂)",
      v2: "Endvolumen (V₂)",
      c1: "Konzentration der Stammlösung (C₁)",
    },
    c1: "Konzentration der Stammlösung (C₁)",
    v1: "Volumen der Stammlösung (V₁)",
    c2: "Endkonzentration (C₂)",
    v2: "Endvolumen (V₂)",
    tooConcentrated: "Eine Verdünnung kann nicht konzentrierter sein als die Stammlösung (C₂ ≤ C₁).",
    stockTooLarge: "Das Volumen der Stammlösung darf das Endvolumen nicht überschreiten (V₁ ≤ V₂).",
    results: {
      c1: "Konzentration der Stammlösung (C₁)",
      v1: "Benötigtes Volumen der Stammlösung (V₁)",
      c2: "Endkonzentration (C₂)",
      v2: "Endvolumen (V₂)",
    },
    caption: "In denselben Einheiten wie die entsprechenden Eingaben.",
    solvent: "Zuzugebendes Lösungsmittel (V₂ − V₁)",
    factor: "Verdünnungsfaktor (C₁ ÷ C₂)",
    note: "Verwenden Sie für C₁ und C₂ dieselbe Konzentrationseinheit und für V₁ und V₂ dieselbe Volumeneinheit.",
  },
};

export default de;
