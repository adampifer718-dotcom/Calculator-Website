import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TestGradeText } from "../text/en";

const pt: CalculatorTranslation<TestGradeText> = {
  content: {
    title: "Calculadora de nota de teste",
    shortTitle: "Nota de teste",
    summary: "Transforme respostas certas ou pontos numa percentagem e numa nota por letra.",
    metaTitle: "Calculadora de nota de teste – Percentagem e letra",
    metaDescription:
      "Calcule a percentagem e a nota por letra de um teste a partir do número de respostas certas ou erradas, ou dos pontos obtidos sobre o total possível.",
    keywords: ["nota", "nota de teste", "exame", "teste", "percentagem de acerto", "nota por letra", "pontuação"],
    intro: [
      "Introduza quantas perguntas ou pontos tinha um teste e quantos acertou ou errou. A calculadora mostra a percentagem obtida e a nota por letra correspondente.",
      "Funciona para testes rápidos, exames e trabalhos avaliados em pontos.",
    ],
    howToUse: [
      "Introduza o número total de perguntas ou pontos.",
      "Escolha se sabe o número de respostas certas ou de respostas erradas.",
      "Introduza esse número e consulte a percentagem e a nota por letra.",
    ],
    formulas: [
      {
        title: "Percentagem obtida",
        expression: "Nota % = pontos obtidos ÷ total de pontos × 100",
        explanation: "Pontos obtidos = total − pontos perdidos, quando sabe o número de respostas erradas.",
      },
      {
        title: "Nota por letra",
        expression: "A ≥ 90%, B ≥ 80%, C ≥ 70%, D ≥ 60%, F < 60%",
        explanation: "Uma escala habitual nos EUA. As escolas podem usar notas com mais e menos ou limites diferentes.",
      },
    ],
    examples: [
      {
        title: "45 certas em 50",
        steps: ["45 ÷ 50 = 0,9", "0,9 × 100 = 90%, um A"],
      },
      {
        title: "7 erradas em 30",
        steps: ["Certas = 30 − 7 = 23", "23 ÷ 30 × 100 = 76,67%, um C"],
      },
    ],
    assumptions: [
      "Todas as perguntas valem o mesmo, a não ser que introduza pontos.",
      "As notas por letra usam a escala habitual nos EUA; consulte as regras de avaliação da sua escola.",
      "A cotação parcial pode ser introduzida como pontos decimais.",
    ],
    faqs: [
      {
        question: "Como calculo a percentagem de um teste?",
        answer: "Divida os pontos que obteve pelo total possível e multiplique por 100. 18 em 20 são 90%.",
      },
      { question: "A que nota corresponde 75%?", answer: "Na escala habitual nos EUA, 75% corresponde a um C." },
      {
        question: "Posso usar pontos em vez de perguntas?",
        answer: "Sim. Introduza o total de pontos e os pontos obtidos; a fórmula é a mesma.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    total: "Total de perguntas ou pontos",
    mode: "Sei o número de",
    modes: { correct: "Respostas certas (pontos obtidos)", wrong: "Respostas erradas (pontos perdidos)" },
    correct: "Respostas certas ou pontos obtidos",
    wrong: "Respostas erradas ou pontos perdidos",
    overTotal: "Não pode ser maior do que o total.",
    grade: "Nota",
    caption: "{earned} em {total}.",
    letter: "Nota por letra (escala A–F)",
    lost: "Pontos perdidos",
    note: "As notas por letra usam a escala habitual A ≥ 90%, B ≥ 80%, C ≥ 70%, D ≥ 60%, F abaixo de 60%. A escala da sua escola pode ser diferente.",
  },
};

export default pt;
