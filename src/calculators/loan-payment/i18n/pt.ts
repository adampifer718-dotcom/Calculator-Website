import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LoanPaymentText } from "../text/en";

const pt: CalculatorTranslation<LoanPaymentText> = {
  content: {
    title: "Calculadora de prestação de empréstimo",
    shortTitle: "Prestação de empréstimo",
    summary: "Calcule a prestação mensal, os juros totais e o plano de amortização de um empréstimo ou crédito à habitação a taxa fixa.",
    metaTitle: "Calculadora de prestação de empréstimo – Prestação e juros",
    metaDescription:
      "Calcule a prestação mensal de um empréstimo a taxa fixa, os juros totais e o plano de amortização anual a partir do montante, da taxa e do prazo.",
    keywords: ["prestação do empréstimo", "simulador de crédito", "prestação mensal", "plano de amortização", "juros do empréstimo", "crédito automóvel", "crédito pessoal"],
    intro: [
      "A maioria dos créditos automóveis, créditos pessoais e créditos à habitação a taxa fixa é reembolsada em prestações mensais iguais. Cada prestação cobre os juros desse mês e amortiza parte do capital em dívida.",
      "Introduza o montante do empréstimo, a taxa de juro anual e o prazo para ver a prestação, os juros totais e a forma como o saldo desce todos os anos.",
    ],
    howToUse: [
      "Introduza o montante que pede emprestado.",
      "Introduza a taxa de juro nominal anual (TAN).",
      "Introduza o prazo em anos.",
      "Consulte a prestação mensal, os juros totais e o plano anual.",
    ],
    formulas: [
      { title: "Prestação mensal", expression: "M = P × r ÷ (1 − (1 + r)^(−n))", explanation: "P é o montante emprestado, r a taxa mensal (TAN ÷ 12) e n o número de prestações mensais." },
      { title: "Sem juros", expression: "M = P ÷ n", explanation: "Sem juros, o empréstimo é repartido em partes iguais." },
      { title: "Saldo em dívida", expression: "B_k = P(1 + r)^k − M((1 + r)^k − 1) ÷ r", explanation: "Saldo após k prestações; usado para o plano de amortização." },
    ],
    examples: [
      {
        title: "200 000 US$ a 6 % durante 30 anos",
        steps: ["r = 0,06 ÷ 12 = 0,005; n = 360", "M = 200 000 × 0,005 ÷ (1 − 1,005^−360) ≈ 1199,10 US$"],
      },
      {
        title: "10 000 US$ a 0 % durante 5 anos",
        steps: ["n = 60 prestações", "M = 10 000 ÷ 60 ≈ 166,67 US$"],
      },
    ],
    assumptions: [
      "Taxa fixa, prestações mensais iguais e sem amortizações antecipadas.",
      "Não estão incluídos impostos sobre o imóvel, seguros, comissões, pontos nem o seguro de crédito hipotecário privado.",
      "As instituições podem arredondar as prestações ao cêntimo todos os meses, pelo que as últimas prestações podem variar ligeiramente. Isto não constitui aconselhamento financeiro.",
    ],
    faqs: [
      {
        question: "Como se calcula a prestação mensal de um empréstimo?",
        answer: "Com a fórmula da anuidade M = P × r ÷ (1 − (1 + r)^−n), em que r é a taxa mensal e n o número de prestações.",
      },
      {
        question: "Porque é que as primeiras prestações são quase só juros?",
        answer: "Os juros incidem sobre o capital em dívida, que é maior no início. À medida que o saldo desce, uma parte maior de cada prestação destina-se a amortizar capital.",
      },
      {
        question: "Um prazo mais curto poupa dinheiro?",
        answer: "Normalmente sim: as prestações são mais altas, mas paga juros durante menos anos, pelo que os juros totais são menores.",
      },
    ],
    sourcesUsedFor: ["Valor atual de uma anuidade e fórmula do empréstimo de prestação constante."],
  },
  text: {
    principal: "Montante do empréstimo",
    rate: "Taxa de juro anual (TAN)",
    years: "Prazo do empréstimo",
    termTooShort: "O prazo tem de ser de pelo menos um mês.",
    payment: "Prestação mensal",
    caption: "{count} prestações mensais com uma TAN de {rate}.",
    total: "Total pago",
    interest: "Juros totais",
    tableCaption: "Amortização por ano",
    tableColumns: { year: "Ano", principal: "Capital amortizado", interest: "Juros pagos", balance: "Saldo em dívida" },
    note: "Taxa fixa com prestações mensais iguais. Não estão incluídos impostos, seguros, comissões nem eventuais alterações da taxa.",
  },
};

export default pt;
