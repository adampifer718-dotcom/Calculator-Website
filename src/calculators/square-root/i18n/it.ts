import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SquareRootText } from "../text/en";

const it: CalculatorTranslation<SquareRootText> = {
  content: {
    title: "Calcolatore di radice quadrata e cubica",
    shortTitle: "Radice quadrata",
    summary: "Trova la radice quadrata o cubica di un numero e verifica se è un quadrato o un cubo perfetto.",
    metaTitle: "Calcolatore di radice quadrata – Radici quadrate e cubiche",
    metaDescription:
      "Calcola la radice quadrata o cubica di qualsiasi numero, scopri se è un quadrato o un cubo perfetto e verifica il risultato elevandolo di nuovo.",
    keywords: ["radice quadrata", "sqrt", "radice cubica", "radicale", "quadrato perfetto", "cubo perfetto", "radice"],
    intro: [
      "La radice quadrata di x è il numero che, moltiplicato per sé stesso, dà x. √144 = 12 perché 12 × 12 = 144.",
      "Passa alla radice cubica per trovare il numero che, moltiplicato per sé stesso tre volte, dà x. Le radici cubiche dei numeri negativi sono ammesse.",
    ],
    howToUse: [
      "Scegli radice quadrata o radice cubica.",
      "Inserisci il numero.",
      "Leggi la radice e se il numero è un quadrato o un cubo perfetto.",
    ],
    formulas: [
      { title: "Radice quadrata", expression: "√x = x^(1/2)", explanation: "Nei numeri reali è definita per x ≥ 0." },
      { title: "Radice cubica", expression: "∛x = x^(1/3)", explanation: "È definita per ogni numero reale." },
    ],
    examples: [
      { title: "Radice quadrata di 144", steps: ["12 × 12 = 144", "√144 = 12"] },
      { title: "Radice quadrata di 2", steps: ["2 non è un quadrato perfetto", "√2 ≈ 1,41421356237"] },
      { title: "Radice cubica di −27", steps: ["(−3) × (−3) × (−3) = −27", "∛−27 = −3"] },
    ],
    assumptions: [
      "Sono mostrate solo le radici reali; i numeri negativi non hanno radice quadrata reale.",
      "I risultati sono mostrati con 12 cifre significative.",
    ],
    faqs: [
      { question: "Che cos'è un quadrato perfetto?", answer: "Un numero intero la cui radice quadrata è anch'essa un numero intero, come 1, 4, 9, 16 o 25." },
      {
        question: "Una radice quadrata ha due risultati?",
        answer: "Ogni numero positivo ha una radice quadrata positiva e una negativa. Il calcolatore mostra la radice positiva (principale).",
      },
      { question: "Posso calcolare la radice cubica di un numero negativo?", answer: "Sì. ∛−8 = −2, perché (−2)³ = −8." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    kind: "Radice",
    kinds: { square: "Radice quadrata (√x)", cube: "Radice cubica (∛x)" },
    value: "Numero (x)",
    negative: "I numeri negativi non hanno radice quadrata reale.",
    squareRoot: "Radice quadrata",
    cubeRoot: "Radice cubica",
    perfectSquare: "Quadrato perfetto?",
    perfectCube: "Cubo perfetto?",
    yes: "Sì",
    no: "No",
    checkSquare: "Verifica: radice²",
    checkCube: "Verifica: radice³",
    principalNote: "Anche −{root} è una radice quadrata; il calcolatore mostra la radice principale (positiva).",
  },
};

export default it;
