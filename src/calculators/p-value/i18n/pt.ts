import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PValueText } from "../text/en";

const pt: CalculatorTranslation<PValueText> = {
  content: {
    title: "Calculadora do valor-p",
    shortTitle: "Valor-p",
    summary: "Obtenha o valor-p de um score z ou de um score t num teste bilateral, unilateral à esquerda ou unilateral à direita.",
    metaTitle: "Calculadora do valor-p – A partir de um score z ou t",
    metaDescription:
      "Calcule o valor-p a partir de um score z ou de um score t com graus de liberdade, para testes de hipóteses bilaterais, unilaterais à esquerda ou à direita.",
    keywords: ["valor-p", "valor p", "score z", "estatística t", "teste de hipóteses", "significância estatística", "teste t", "teste z"],
    intro: [
      "Um valor-p mede o quão surpreendente seria o resultado de um teste se a hipótese nula fosse verdadeira. Valores-p pequenos sugerem que os dados são pouco prováveis sob a hipótese nula.",
      "Introduza a estatística de teste de um teste z ou de um teste t e escolha a direção da sua hipótese alternativa.",
    ],
    howToUse: [
      "Escolha um score z ou um score t.",
      "Introduza a estatística e, no caso de um score t, os graus de liberdade.",
      "Escolha bilateral, unilateral à esquerda ou unilateral à direita.",
      "Compare o valor-p com o seu nível de significância, por exemplo 0,05.",
    ],
    formulas: [
      { title: "Unilateral à esquerda", expression: "p = P(T ≤ t)", explanation: "A probabilidade de um valor igual ou inferior à estatística." },
      { title: "Unilateral à direita", expression: "p = P(T ≥ t)", explanation: "A probabilidade de um valor igual ou superior." },
      { title: "Bilateral", expression: "p = 2 × P(T ≥ |t|)", explanation: "Conta os valores extremos nos dois sentidos." },
    ],
    examples: [
      { title: "z = 1,96, bilateral", steps: ["P(Z ≥ 1,96) ≈ 0,025", "p = 2 × 0,025 ≈ 0,05"] },
      { title: "z = −1,645, unilateral à esquerda", steps: ["P(Z ≤ −1,645)", "≈ 0,05"] },
    ],
    assumptions: [
      "Usa a distribuição normal padrão para z e a distribuição t de Student para t.",
      "A estatística de teste tem de provir de um teste cujos pressupostos se verifiquem.",
      "Apresentado com 6 algarismos significativos; os valores muito pequenos passam para notação científica.",
    ],
    faqs: [
      {
        question: "O que é um bom valor-p?",
        answer:
          "Não existe um limiar universal. É comum usar 0,05, o que significa que resultados tão extremos ocorreriam menos de 5% das vezes se a hipótese nula fosse verdadeira.",
      },
      {
        question: "Devo usar um score z ou um score t?",
        answer: "Use t quando o desvio-padrão da população é desconhecido e estimado a partir da amostra; use z quando é conhecido ou a amostra é grande.",
      },
      {
        question: "Qual é a diferença entre testes unilaterais e bilaterais?",
        answer: "Um teste unilateral procura um efeito num único sentido; um teste bilateral considera os dois sentidos.",
      },
    ],
    sourcesUsedFor: ["Definições das distribuições normal e t de Student e valores críticos usados para verificar os resultados."],
  },
  text: {
    distribution: "Estatística de teste",
    distributions: { z: "Score z (normal)", t: "Score t (t de Student)" },
    statistic: "Valor da estatística",
    df: "Graus de liberdade",
    tail: "Hipótese alternativa",
    tails: { two: "Bilateral (≠)", left: "Unilateral à esquerda (<)", right: "Unilateral à direita (>)" },
    pValue: "Valor-p",
    sig05: "Significativo para α = 0,05?",
    sig01: "Significativo para α = 0,01?",
    yes05: "Sim (p < 0,05)",
    no05: "Não (p ≥ 0,05)",
    yes01: "Sim (p < 0,01)",
    no01: "Não (p ≥ 0,01)",
    note: "Um valor-p é a probabilidade de obter um resultado pelo menos tão extremo como este se a hipótese nula fosse verdadeira. Não é a probabilidade de a hipótese nula ser verdadeira.",
  },
};

export default pt;
