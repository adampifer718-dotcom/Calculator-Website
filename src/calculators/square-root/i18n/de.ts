import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SquareRootText } from "../text/en";

const de: CalculatorTranslation<SquareRootText> = {
  content: {
    title: "Wurzelrechner",
    shortTitle: "Quadratwurzel",
    summary: "Ermitteln Sie die Quadrat- oder Kubikwurzel einer Zahl und prüfen Sie, ob sie eine Quadrat- oder Kubikzahl ist.",
    metaTitle: "Wurzelrechner – Quadratwurzel und Kubikwurzel berechnen",
    metaDescription:
      "Berechnen Sie die Quadrat- oder Kubikwurzel jeder Zahl, sehen Sie, ob es sich um eine Quadrat- oder Kubikzahl handelt, und prüfen Sie das Ergebnis durch Potenzieren.",
    keywords: ["Wurzel berechnen", "Quadratwurzel berechnen", "Wurzelrechner", "Kubikwurzel", "dritte Wurzel", "Quadratzahl", "Wurzel ziehen"],
    intro: [
      "Die Quadratwurzel von x ist die Zahl, die mit sich selbst multipliziert x ergibt. √144 = 12, weil 12 × 12 = 144.",
      "Wechseln Sie zur Kubikwurzel, um die Zahl zu finden, die dreimal mit sich selbst multipliziert x ergibt. Kubikwurzeln negativer Zahlen sind möglich.",
    ],
    howToUse: [
      "Wählen Sie Quadratwurzel oder Kubikwurzel.",
      "Geben Sie die Zahl ein.",
      "Lesen Sie die Wurzel ab und ob die Zahl eine Quadrat- oder Kubikzahl ist.",
    ],
    formulas: [
      { title: "Quadratwurzel", expression: "√x = x^(1/2)", explanation: "In den reellen Zahlen für x ≥ 0 definiert." },
      { title: "Kubikwurzel", expression: "∛x = x^(1/3)", explanation: "Für jede reelle Zahl definiert." },
    ],
    examples: [
      { title: "Quadratwurzel aus 144", steps: ["12 × 12 = 144", "√144 = 12"] },
      { title: "Quadratwurzel aus 2", steps: ["2 ist keine Quadratzahl", "√2 ≈ 1,41421356237"] },
      { title: "Kubikwurzel aus −27", steps: ["(−3) × (−3) × (−3) = −27", "∛−27 = −3"] },
    ],
    assumptions: [
      "Es werden nur reelle Wurzeln angezeigt; negative Zahlen haben keine reelle Quadratwurzel.",
      "Die Ergebnisse werden mit 12 signifikanten Stellen angezeigt.",
    ],
    faqs: [
      { question: "Was ist eine Quadratzahl?", answer: "Eine ganze Zahl, deren Quadratwurzel ebenfalls eine ganze Zahl ist, zum Beispiel 1, 4, 9, 16 oder 25." },
      {
        question: "Hat eine Quadratwurzel zwei Lösungen?",
        answer: "Jede positive Zahl hat eine positive und eine negative Quadratwurzel. Der Rechner zeigt die positive Wurzel (den Hauptwert).",
      },
      { question: "Kann ich die Kubikwurzel einer negativen Zahl ziehen?", answer: "Ja. ∛−8 = −2, weil (−2)³ = −8." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    kind: "Wurzel",
    kinds: { square: "Quadratwurzel (√x)", cube: "Kubikwurzel (∛x)" },
    value: "Zahl (x)",
    negative: "Negative Zahlen haben keine reelle Quadratwurzel.",
    squareRoot: "Quadratwurzel",
    cubeRoot: "Kubikwurzel",
    perfectSquare: "Quadratzahl?",
    perfectCube: "Kubikzahl?",
    yes: "Ja",
    no: "Nein",
    checkSquare: "Probe: Wurzel²",
    checkCube: "Probe: Wurzel³",
    principalNote: "−{root} ist ebenfalls eine Quadratwurzel; der Rechner zeigt den Hauptwert (die positive Wurzel).",
  },
};

export default de;
