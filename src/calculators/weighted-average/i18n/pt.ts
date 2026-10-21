import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WeightedAverageText } from "../text/en";

const pt: CalculatorTranslation<WeightedAverageText> = {
  content: {
    title: "Calculadora de média ponderada",
    shortTitle: "Média ponderada",
    summary: "Calcule a média de uma lista de valores em que alguns contam mais do que outros e compare-a com a média simples.",
    metaTitle: "Calculadora de média ponderada – Média ponderada de uma lista",
    metaDescription:
      "Calcule a média ponderada de até 100 valores e respetivos pesos, com a soma dos pesos e a média simples não ponderada para comparação.",
    keywords: ["média ponderada", "calcular média ponderada", "nota ponderada", "média com pesos", "nota da disciplina", "preço médio", "somarproduto"],
    intro: [
      "Uma média ponderada é uma média em que cada valor conta de acordo com o seu peso. Um exame final que vale metade da nota pesa mais no resultado do que um teste que vale um décimo, e uma compra grande afeta mais o preço médio do que uma pequena.",
      "Introduza os valores e uma lista correspondente de pesos. A calculadora indica a média ponderada e, para comparação, a média simples, que trata todos os valores por igual.",
    ],
    howToUse: [
      "Escreva os valores na primeira caixa, separados por ponto e vírgula, espaços ou mudanças de linha.",
      "Escreva os pesos na segunda caixa pela mesma ordem, um para cada valor.",
      "Os pesos podem ser percentagens, créditos, quantidades ou quaisquer outros números não negativos. Não têm de somar 100 nem 1.",
      "Consulte a média ponderada. Se for muito diferente da média não ponderada, os valores com mais peso estão a puxá-la para si.",
    ],
    formulas: [
      {
        title: "Média ponderada",
        expression: "x̄w = Σ(wᵢ·xᵢ) ÷ Σwᵢ",
        explanation: "Multiplique cada valor pelo seu peso, some os produtos e divida pelo peso total.",
      },
      {
        title: "Média não ponderada",
        expression: "x̄ = Σxᵢ ÷ n",
        explanation: "A média habitual, igual à média ponderada quando todos os pesos são iguais.",
      },
    ],
    examples: [
      {
        title: "Nota de uma disciplina com componentes ponderadas",
        steps: [
          "Produtos: 82 × 20 = 1640; 90 × 50 = 4500; 75 × 30 = 2250",
          "Soma dos produtos = 8390 e soma dos pesos = 100",
          "Média ponderada = 8390 ÷ 100 = 83,9, enquanto a média simples é cerca de 82,33",
        ],
      },
      {
        title: "Pontos de nota ponderados pelos créditos",
        steps: ["Produtos: 14,8 + 9 + 12 + 4,6 = 40,4", "Soma dos pesos = 4 + 3 + 3 + 2 = 12 créditos", "Média ponderada = 40,4 ÷ 12 ≈ 3,3667"],
      },
      {
        title: "Preço médio pago por quilograma",
        steps: [
          "Preços por kg ponderados pelos quilogramas comprados: 12,5 × 40 + 14 × 25 + 11,75 × 35 = 500 + 350 + 411,25 = 1261,25",
          "Quantidade total = 100 kg",
          "Preço médio = 1261,25 ÷ 100 = 12,6125 por kg",
        ],
      },
    ],
    assumptions: [
      "Os valores e os pesos são emparelhados pela posição: o primeiro peso corresponde ao primeiro valor, e assim por diante.",
      "Os pesos têm de ser zero ou positivos, e pelo menos um tem de ser maior do que zero. Um peso de 0 deixa esse valor fora da média ponderada, mas não da média não ponderada.",
      "Os resultados são apresentados com 10 algarismos significativos. São aceites até 100 pares.",
    ],
    faqs: [
      {
        question: "Os pesos têm de somar 100%?",
        answer: "Não. A fórmula divide pela soma dos pesos, pelo que 20, 50 e 30 dão o mesmo resultado que 0,2, 0,5 e 0,3, ou que 2, 5 e 3.",
      },
      {
        question: "Quando é que a média ponderada é igual à média normal?",
        answer:
          "Quando todos os pesos são iguais. Nesse caso, cada valor tem a mesma influência e a fórmula reduz-se à soma dos valores a dividir pelo seu número.",
      },
      {
        question: "Como descubro a nota de que preciso no exame final?",
        answer:
          "Escreva a média ponderada com a nota do exame final como incógnita e resolva em ordem a ela. Por exemplo, com 80 em trabalhos que valem 60% e um objetivo de 85, precisa de 0,6 × 80 + 0,4 × s = 85, pelo que s = 92,5.",
      },
    ],
    sourcesUsedFor: [
      "Definição de média ponderada: cada valor multiplicado pelo seu peso, somado e dividido pela soma dos pesos.",
    ],
  },
  text: {
    values: "Valores",
    valuesHelp: "Um valor por elemento, separados por ponto e vírgula, espaços ou mudanças de linha.",
    weights: "Pesos",
    weightsHelp: "Um peso por valor, pela mesma ordem. Servem percentagens, créditos ou quantidades; não precisam de somar 100.",
    errors: {
      empty: "Introduza pelo menos um número.",
      tooMany: "Introduza no máximo {max} números.",
      notNumber: "«{token}» não é um número. Separe os valores com ponto e vírgula, espaços ou mudanças de linha.",
      tooLarge: "«{token}» é demasiado grande.",
    },
    maxCount: "Introduza no máximo {max} números.",
    tooBig: "{value} é demasiado grande. Cada número pode valer no máximo {max} em valor absoluto.",
    negativeWeight: "Os pesos não podem ser negativos ({value}).",
    zeroTotal: "Os pesos somam 0. Pelo menos um peso tem de ser maior do que 0.",
    countMismatch: "Introduza um peso para cada valor: tem {values} e {weights}.",
    valueCount: { zero: "{n} valores", one: "{n} valor", two: "{n} valores", few: "{n} valores", many: "{n} valores", other: "{n} valores" },
    weightCount: { zero: "{n} pesos", one: "{n} peso", two: "{n} pesos", few: "{n} pesos", many: "{n} pesos", other: "{n} pesos" },
    weightedMean: "Média ponderada",
    caption: "Calculada com {count}.",
    sumOfWeights: "Soma dos pesos",
    sumOfProducts: "Soma de valor × peso",
    unweightedMean: "Média não ponderada (para comparação)",
  },
};

export default pt;
