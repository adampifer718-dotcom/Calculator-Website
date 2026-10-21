import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ExponentText } from "../text/en";

const pt: CalculatorTranslation<ExponentText> = {
  content: {
    title: "Calculadora de expoentes",
    shortTitle: "Expoentes",
    summary: "Eleve qualquer número a uma potência, incluindo expoentes negativos e fracionários.",
    metaTitle: "Calculadora de expoentes – Potências e expoentes negativos",
    metaDescription:
      "Calcule um número elevado a qualquer potência, incluindo expoentes negativos e fracionários; os resultados muito grandes surgem em notação científica.",
    keywords: ["calculadora de potências", "expoente", "elevar a uma potência", "ao quadrado", "ao cubo", "expoente negativo", "expoente fracionário"],
    intro: [
      "Um expoente indica quantas vezes uma base é multiplicada por si própria. 2¹⁰ significa multiplicar dez dois entre si, o que dá 1024.",
      "Os expoentes negativos dão inversos e os expoentes fracionários dão raízes.",
    ],
    howToUse: [
      "Introduza a base a.",
      "Introduza o expoente b. São aceites decimais e valores negativos.",
      "Consulte aᵇ. Os resultados muito grandes ou muito pequenos são apresentados em notação científica.",
    ],
    formulas: [
      { title: "Expoente positivo", expression: "aᵇ = a × a × … × a (b vezes)", explanation: "Para expoentes inteiros." },
      { title: "Expoente negativo", expression: "a⁻ᵇ = 1 ÷ aᵇ", explanation: "A base não pode ser 0." },
      { title: "Expoente fracionário", expression: "a^(1/n) = ⁿ√a", explanation: "Por exemplo, 9^0,5 = √9 = 3." },
    ],
    examples: [
      {
        title: "2 elevado a 10",
        steps: ["2 × 2 × … (10 vezes)", "= 1024"],
      },
      {
        title: "5 elevado a −2",
        steps: ["1 ÷ 5²", "= 1 ÷ 25 = 0,04"],
      },
      {
        title: "9 elevado a 0,5",
        steps: ["9^0,5 = √9", "= 3"],
      },
    ],
    assumptions: [
      "Os resultados são números reais; uma base negativa exige um expoente inteiro.",
      "Os resultados são apresentados com 12 algarismos significativos.",
    ],
    faqs: [
      { question: "Quanto é qualquer número elevado a 0?", answer: "Qualquer número diferente de zero elevado a 0 é igual a 1." },
      { question: "O que significa um expoente negativo?", answer: "Indica o inverso: 2⁻³ = 1 ÷ 2³ = 0,125." },
      {
        question: "Como funcionam os expoentes fracionários?",
        answer: "O denominador indica uma raiz: 8^(1/3) é a raiz cúbica de 8, que é 2.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    base: "Base (a)",
    exponent: "Expoente (b)",
    zeroNegative: "0 elevado a uma potência negativa não está definido.",
    negativeBase: "Uma base negativa exige um expoente inteiro para dar um resultado real.",
    tooLarge: "Demasiado grande para apresentar",
    eNotation: "Notação E",
    negativeNote: "Um expoente negativo significa 1 ÷ {base}^{exponent}.",
    positiveNote: "{base} multiplicado por si próprio {exponent} vezes.",
  },
};

export default pt;
