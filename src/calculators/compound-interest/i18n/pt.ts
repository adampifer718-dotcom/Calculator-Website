import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CompoundInterestText } from "../text/en";

const pt: CalculatorTranslation<CompoundInterestText> = {
  content: {
    title: "Calculadora de juros compostos",
    shortTitle: "Juros compostos",
    summary: "Descubra como cresce um depósito com juros compostos, com uma tabela do saldo ano a ano.",
    metaTitle: "Calculadora de juros compostos – Valor futuro",
    metaDescription:
      "Calcule os juros compostos e o valor futuro de um depósito com capitalização anual, trimestral, mensal ou diária, bem como uma tabela do saldo ano a ano.",
    keywords: ["juros compostos", "calcular juros compostos", "valor futuro", "poupança", "TAE", "rentabilidade do investimento"],
    intro: [
      "Com os juros compostos, geram-se juros sobre os juros anteriores, além de sobre o depósito inicial, pelo que o crescimento acelera com o tempo.",
      "Introduza um depósito, uma taxa de juro, um prazo e uma frequência de capitalização para ver o valor futuro, os juros obtidos e o saldo de cada ano.",
    ],
    howToUse: [
      "Introduza o depósito inicial.",
      "Introduza a taxa de juro anual e o número de anos.",
      "Escolha a frequência com que os juros são capitalizados.",
      "Consulte o valor futuro, os juros obtidos e a taxa anual efetiva.",
    ],
    formulas: [
      {
        title: "Valor futuro",
        expression: "A = P × (1 + r ÷ n)^(n × t)",
        explanation: "P é o depósito, r a taxa anual em decimal, n os períodos de capitalização por ano e t os anos.",
      },
      { title: "Taxa anual efetiva", expression: "TAE = (1 + r ÷ n)ⁿ − 1", explanation: "A taxa equivalente com uma única capitalização por ano, conhecida como TAE." },
    ],
    examples: [
      { title: "10 000 US$ a 5 % com capitalização mensal durante 10 anos", steps: ["A = 10 000 × (1 + 0,05 ÷ 12)^120", "≈ 16 470,09 US$"] },
      { title: "1000 US$ a 10 % com capitalização anual durante 2 anos", steps: ["A = 1000 × 1,1²", "= 1210 US$"] },
    ],
    assumptions: [
      "A taxa mantém-se fixa e não há outros depósitos, levantamentos, impostos nem comissões.",
      "As taxas passadas ou anunciadas não garantem rendimentos futuros. Isto não constitui aconselhamento financeiro.",
      "Escolher uma moeda altera apenas a formatação.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre juros simples e compostos?",
        answer: "Os juros simples são pagos apenas sobre o depósito inicial. Os juros compostos são pagos também sobre os juros já obtidos.",
      },
      {
        question: "Capitalizar com mais frequência ajuda?",
        answer: "Sim, um pouco. Com a mesma taxa nominal, a capitalização mensal dá uma taxa efetiva superior à da capitalização anual.",
      },
      {
        question: "O que é a regra dos 72?",
        answer: "Divida 72 pela taxa anual para estimar os anos que o dinheiro demora a duplicar. A 6 %, o dinheiro duplica em cerca de 12 anos.",
      },
    ],
    sourcesUsedFor: ["Fórmulas dos juros compostos e do valor futuro."],
  },
  text: {
    principal: "Depósito inicial",
    rate: "Taxa de juro anual",
    years: "Prazo",
    frequency: "Capitalização",
    frequencies: { "1": "Anual", "2": "Semestral", "4": "Trimestral", "12": "Mensal", "365": "Diária" },
    future: "Valor futuro",
    interest: "Juros obtidos",
    effective: "Taxa anual efetiva",
    tableCaption: "Saldo no final de cada ano",
    tableColumns: { year: "Ano", balance: "Saldo", interest: "Juros acumulados" },
    note: "Pressupõe uma taxa fixa, sem outros depósitos nem levantamentos e sem impostos nem comissões.",
  },
};

export default pt;
