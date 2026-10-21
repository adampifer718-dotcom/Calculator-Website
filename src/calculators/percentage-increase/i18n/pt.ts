import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentageIncreaseText } from "../text/en";

const pt: CalculatorTranslation<PercentageIncreaseText> = {
  content: {
    title: "Calculadora de aumento percentual",
    shortTitle: "Aumento percentual",
    summary: "Calcule o aumento ou a diminuição percentual de um valor inicial para um novo valor.",
    metaTitle: "Calculadora de aumento percentual – Variação percentual",
    metaDescription:
      "Calcule o aumento ou a diminuição percentual entre dois números. Veja a variação percentual, a variação absoluta e a fórmula, com exemplos resolvidos.",
    keywords: ["variação percentual", "aumento percentual", "diminuição percentual", "crescimento", "diferença", "aumento salarial", "variação de preço"],
    intro: [
      "Introduza um valor inicial e um novo valor para ver quanto variou em termos percentuais. Um resultado positivo é um aumento e um resultado negativo é uma diminuição.",
      "Entre as utilizações habituais estão aumentos salariais, variações de preços, crescimento das vendas e melhorias nas notas de testes.",
    ],
    howToUse: [
      "Introduza o valor inicial (de partida).",
      "Introduza o novo valor.",
      "Consulte a variação percentual, a variação absoluta e o novo valor em percentagem do inicial.",
    ],
    formulas: [
      {
        title: "Variação percentual",
        expression: "Variação % = (novo valor − valor inicial) ÷ |valor inicial| × 100",
        explanation:
          "A variação é medida em relação à grandeza do valor inicial. O uso do valor absoluto mantém o sinal com significado quando o valor inicial é negativo.",
      },
      {
        title: "Variação absoluta",
        expression: "Variação = novo valor − valor inicial",
        explanation: "A diferença nas mesmas unidades dos valores introduzidos.",
      },
    ],
    examples: [
      { title: "De 80 para 100", steps: ["Variação = 100 − 80 = 20", "20 ÷ 80 × 100 = aumento de 25%"] },
      { title: "De 250 para 200", steps: ["Variação = 200 − 250 = −50", "−50 ÷ 250 × 100 = −20%, uma diminuição de 20%"] },
      { title: "De −50 para −25", steps: ["Variação = −25 − (−50) = 25", "25 ÷ |−50| × 100 = aumento de 50%"] },
    ],
    assumptions: [
      "O valor inicial não pode ser 0, porque uma variação a partir de zero não tem percentagem definida.",
      "Quando o valor inicial é negativo, a variação é dividida pelo seu valor absoluto.",
      "Os resultados são arredondados para apresentação. Os cálculos usam a precisão total.",
    ],
    faqs: [
      {
        question: "Como calculo um aumento percentual?",
        answer: "Subtraia o valor inicial ao novo valor, divida pelo valor inicial e multiplique por 100. De 50 para 65 é (65 − 50) ÷ 50 × 100 = 30%.",
      },
      {
        question: "Como calculo uma diminuição percentual?",
        answer: "Use a mesma fórmula. Um resultado negativo é uma diminuição. De 120 para 90 é (90 − 120) ÷ 120 × 100 = −25%.",
      },
      {
        question: "Um aumento de 50% seguido de uma diminuição de 50% volta ao ponto de partida?",
        answer: "Não. 100 aumentado em 50% dá 150, e 150 diminuído em 50% dá 75. Cada variação é medida a partir de um valor de partida diferente.",
      },
      {
        question: "E se o valor inicial for zero?",
        answer: "A variação percentual não está definida, porque não é possível dividir por zero. Indique antes a variação absoluta.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    original: "Valor inicial",
    originalHelp: "O valor de partida. Não pode ser 0.",
    newValue: "Novo valor",
    newValueHelp: "O valor após a variação.",
    originalZero: "O valor inicial não pode ser 0. Uma variação a partir de 0 não tem percentagem.",
    primary: "Variação percentual",
    noChange: "Os valores são iguais, pelo que não há variação.",
    increase: "Um aumento de {from} para {to}.",
    decrease: "Uma diminuição de {from} para {to}.",
    absolute: "Variação absoluta",
    ratio: "Novo valor em % do inicial",
    formula: "Fórmula: ({to} − {from}) ÷ |{from}| × 100.",
    negativeNote: "O valor inicial é negativo, pelo que a variação é medida em relação ao seu valor absoluto.",
  },
};

export default pt;
