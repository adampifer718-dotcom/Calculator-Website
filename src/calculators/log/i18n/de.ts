import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LogText } from "../text/en";

const de: CalculatorTranslation<LogText> = {
  content: {
    title: "Logarithmusrechner",
    shortTitle: "Logarithmus",
    summary: "Berechnen Sie Logarithmen zur Basis 10, zur Basis e (natürlicher Logarithmus), zur Basis 2 oder zu jeder anderen Basis.",
    metaTitle: "Logarithmusrechner – Logarithmus zu jeder Basis",
    metaDescription:
      "Berechnen Sie den Zehnerlogarithmus, den natürlichen Logarithmus (ln), den Zweierlogarithmus oder einen Logarithmus zu beliebiger Basis – mit Basiswechselformel und Beispielen.",
    keywords: ["Logarithmus berechnen", "Logarithmusrechner", "natürlicher Logarithmus", "ln berechnen", "Zehnerlogarithmus", "Logarithmus Basis 2", "Basiswechsel"],
    intro: [
      "Ein Logarithmus beantwortet die Frage: Mit welcher Potenz muss die Basis erhoben werden, um diese Zahl zu erhalten? log₁₀(1.000) = 3, weil 10³ = 1.000.",
      "Wählen Sie eine gängige Basis oder geben Sie eine eigene ein. Der natürliche, der dekadische und der binäre Logarithmus werden zusätzlich angezeigt.",
    ],
    howToUse: [
      "Geben Sie eine positive Zahl x ein.",
      "Wählen Sie die Basis oder wählen Sie „Andere Basis“ und geben Sie sie ein.",
      "Lesen Sie den Logarithmus sowie die Werte für ln, log₁₀ und log₂ ab.",
    ],
    formulas: [
      {
        title: "Definition",
        expression: "log_b(x) = y  bedeutet  bʸ = x",
        explanation: "Zahl und Basis müssen positiv sein, und die Basis darf nicht 1 sein.",
      },
      { title: "Basiswechsel", expression: "log_b(x) = ln(x) ÷ ln(b)", explanation: "Jeder Logarithmus lässt sich über natürliche Logarithmen berechnen." },
    ],
    examples: [
      { title: "log₁₀ von 1.000", steps: ["10³ = 1.000", "Also ist log₁₀(1.000) = 3"] },
      { title: "log₂ von 8", steps: ["2³ = 8", "Also ist log₂(8) = 3"] },
      { title: "Logarithmus von 81 zur Basis 3", steps: ["ln(81) ÷ ln(3) = 4,394 ÷ 1,099", "= 4, weil 3⁴ = 81"] },
    ],
    assumptions: [
      "Logarithmen sind nur für positive Zahlen und positive Basen ungleich 1 definiert.",
      "Die Ergebnisse werden mit 12 signifikanten Stellen angezeigt.",
    ],
    faqs: [
      {
        question: "Was ist der Unterschied zwischen log und ln?",
        answer: "log steht meist für die Basis 10, ln für die Basis e (etwa 2,71828), also den natürlichen Logarithmus.",
      },
      {
        question: "Warum kann ich keinen Logarithmus einer negativen Zahl bilden?",
        answer: "Keine reelle Potenz einer positiven Basis ergibt eine negative Zahl oder null, daher ist der Logarithmus in den reellen Zahlen nicht definiert.",
      },
      {
        question: "Wofür wird der Logarithmus zur Basis 2 verwendet?",
        answer: "Er zählt Verdopplungen und kommt in der Informatik vor, etwa bei der Anzahl der Bits, die zur Darstellung eines Werts nötig sind.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    value: "Zahl (x)",
    base: "Basis",
    bases: { ten: "10 (dekadischer Logarithmus)", e: "e (natürlicher Logarithmus, ln)", two: "2 (binärer Logarithmus)", custom: "Andere Basis" },
    customBase: "Eigene Basis (b)",
    baseOne: "Die Basis darf nicht 1 sein.",
    primaryNatural: "Logarithmus von x",
    primaryBase: "Logarithmus von x zur Basis {base}",
    caption: "{base} hoch dieses Ergebnis ergibt {value}.",
    ln: "Natürlicher Logarithmus (ln x)",
    log10: "Dekadischer Logarithmus (log₁₀ x)",
    log2: "Binärer Logarithmus (log₂ x)",
  },
};

export default de;
