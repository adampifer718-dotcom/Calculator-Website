import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SquareRootText } from "../text/en";

const pt: CalculatorTranslation<SquareRootText> = {
  content: {
    title: "Calculadora de raiz quadrada",
    shortTitle: "Raiz quadrada",
    summary: "Calcule a raiz quadrada ou a raiz cúbica de um número e verifique se é um quadrado ou um cubo perfeito.",
    metaTitle: "Calculadora de raiz quadrada – Raiz quadrada e cúbica",
    metaDescription:
      "Calcule a raiz quadrada ou a raiz cúbica de qualquer número, veja se é um quadrado ou um cubo perfeito e confirme o resultado elevando-o de volta.",
    keywords: ["raiz quadrada", "sqrt", "raiz cúbica", "radical", "quadrado perfeito", "raiz", "cubo perfeito"],
    intro: [
      "A raiz quadrada de x é o número que, multiplicado por si próprio, dá x. √144 = 12 porque 12 × 12 = 144.",
      "Mude para raiz cúbica para encontrar o número que dá x quando multiplicado por si próprio três vezes. São permitidas raízes cúbicas de números negativos.",
    ],
    howToUse: [
      "Escolha raiz quadrada ou raiz cúbica.",
      "Introduza o número.",
      "Consulte a raiz e se o número é um quadrado ou um cubo perfeito.",
    ],
    formulas: [
      { title: "Raiz quadrada", expression: "√x = x^(1/2)", explanation: "Definida para x ≥ 0 nos números reais." },
      { title: "Raiz cúbica", expression: "∛x = x^(1/3)", explanation: "Definida para todos os números reais." },
    ],
    examples: [
      {
        title: "Raiz quadrada de 144",
        steps: ["12 × 12 = 144", "√144 = 12"],
      },
      {
        title: "Raiz quadrada de 2",
        steps: ["2 não é um quadrado perfeito", "√2 ≈ 1,41421356237"],
      },
      {
        title: "Raiz cúbica de −27",
        steps: ["(−3) × (−3) × (−3) = −27", "∛−27 = −3"],
      },
    ],
    assumptions: [
      "São apresentadas apenas raízes reais; os números negativos não têm raiz quadrada real.",
      "Os resultados são apresentados com 12 algarismos significativos.",
    ],
    faqs: [
      {
        question: "O que é um quadrado perfeito?",
        answer: "Um número inteiro cuja raiz quadrada também é um número inteiro, como 1, 4, 9, 16 ou 25.",
      },
      {
        question: "Uma raiz quadrada tem duas respostas?",
        answer: "Todos os números positivos têm uma raiz quadrada positiva e uma negativa. A calculadora mostra a raiz positiva (principal).",
      },
      { question: "Posso calcular a raiz cúbica de um número negativo?", answer: "Sim. ∛−8 = −2, porque (−2)³ = −8." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    kind: "Raiz",
    kinds: { square: "Raiz quadrada (√x)", cube: "Raiz cúbica (∛x)" },
    value: "Número (x)",
    negative: "Os números negativos não têm raiz quadrada real.",
    squareRoot: "Raiz quadrada",
    cubeRoot: "Raiz cúbica",
    perfectSquare: "Quadrado perfeito?",
    perfectCube: "Cubo perfeito?",
    yes: "Sim",
    no: "Não",
    checkSquare: "Verificação: raiz²",
    checkCube: "Verificação: raiz³",
    principalNote: "−{root} também é raiz quadrada; a calculadora mostra a raiz principal (positiva).",
  },
};

export default pt;
