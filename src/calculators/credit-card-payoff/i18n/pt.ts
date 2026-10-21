import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CreditCardPayoffText } from "../text/en";

const years = { zero: "{n} anos", one: "{n} ano", two: "{n} anos", few: "{n} anos", many: "{n} anos", other: "{n} anos" };
const months = { zero: "{n} meses", one: "{n} mês", two: "{n} meses", few: "{n} meses", many: "{n} meses", other: "{n} meses" };

const pt: CalculatorTranslation<CreditCardPayoffText> = {
  content: {
    title: "Calculadora para liquidar o cartão de crédito",
    shortTitle: "Liquidar o cartão de crédito",
    summary: "Descubra quantos meses um pagamento fixo demora a liquidar a dívida de um cartão de crédito, ou que pagamento precisa para a liquidar num prazo concreto.",
    metaTitle: "Liquidar o cartão de crédito – Meses e juros",
    metaDescription:
      "Estime quanto tempo um pagamento mensal fixo demora a liquidar um cartão de crédito, os juros totais ou o pagamento para liquidá-lo em N meses.",
    keywords: ["liquidar cartão de crédito", "pagar dívida do cartão", "juros do cartão de crédito", "amortizar dívida", "meses para pagar o cartão", "pagamento mensal do cartão", "APR"],
    intro: [
      "Os juros do cartão de crédito são cobrados sobre todo o saldo que transita de mês para mês, pelo que um pagamento mensal pequeno pode mantê-lo endividado durante anos. Esta calculadora mostra o efeito de pagar um montante fixo todos os meses.",
      "Escolha se quer saber quanto tempo o seu pagamento vai demorar ou quanto deve pagar por mês para liquidar o cartão num determinado número de meses. Uma tabela anual mostra como o saldo desce e quanto o emissor do cartão recebe em juros.",
    ],
    howToUse: [
      "Escolha a moeda dos montantes.",
      "Escolha o que pretende calcular: o tempo até à liquidação ou o pagamento necessário.",
      "Introduza o saldo atual e a APR (taxa de juro nominal anual) do cartão.",
      "Introduza o seu pagamento mensal fixo ou o número de meses em que quer ficar sem dívida.",
      "Consulte o resultado, os juros totais e a tabela ano a ano.",
    ],
    formulas: [
      { title: "Juros mensais", expression: "juros = saldo × APR ÷ 12", explanation: "Em cada mês, os juros são somados ao saldo e depois é subtraído o pagamento. O último pagamento corresponde apenas ao que ficou em dívida." },
      { title: "Pagamento para uma data pretendida", expression: "PMT = B × i ÷ (1 − (1 + i)^(−n))", explanation: "B é o saldo, i = APR ÷ 12 em decimal e n o número de meses. Com uma APR de 0 %, PMT = B ÷ n." },
      { title: "Quando o pagamento é demasiado pequeno", expression: "pagamento ≤ B × i", explanation: "Se o pagamento não ultrapassar os juros do primeiro mês, o saldo nunca desce." },
    ],
    examples: [
      {
        title: "3200 US$ com uma APR de 19,99 %, pagando 120 US$ por mês",
        steps: [
          "Taxa mensal = 19,99 % ÷ 12 ≈ 1,666 %",
          "Primeiro mês: juros ≈ 53,31 US$, pelo que 66,69 US$ dos 120 US$ reduzem o saldo",
          "Repetindo mês a mês, o 36.º pagamento é parcial, de cerca de 66,69 US$",
          "Juros totais ≈ 1066,69 US$",
        ],
      },
      {
        title: "6500 US$ com uma APR de 24,5 %, liquidados em 36 meses",
        steps: ["i = 0,245 ÷ 12 ≈ 0,020417; n = 36", "PMT = 6500 × i ÷ (1 − (1 + i)^−36)", "≈ 256,72 US$ por mês, cerca de 2742 US$ de juros no total"],
      },
      {
        title: "1500 US$ com uma taxa promocional de 0 %, liquidados em 10 meses",
        steps: ["Sem juros, pelo que o saldo é dividido em partes iguais", "PMT = 1500 ÷ 10 = 150 US$"],
      },
    ],
    assumptions: [
      "Os juros são capitalizados mensalmente a APR ÷ 12. Muitos emissores aplicam uma taxa periódica diária sobre o saldo médio diário, pelo que os extratos reais serão ligeiramente diferentes.",
      "Não há novas compras, adiantamentos de numerário, comissões, taxas de penalização nem alterações de taxa, e todos os pagamentos são feitos a tempo.",
      "Os pagamentos não são arredondados ao cêntimo e pressupõe-se que as taxas promocionais duram todo o período.",
      "É uma estimativa, não aconselhamento financeiro, e não foi revista por profissionais. Consulte o contrato e o extrato do seu cartão para conhecer os valores que se lhe aplicam.",
    ],
    faqs: [
      {
        question: "Porque é que um pagamento pequeno demora tanto?",
        answer: "A maior parte de um pagamento pequeno vai para juros. Só o que sobra reduz o saldo, pelo que este desce devagar e continua a gerar juros. Mesmo um aumento moderado do pagamento pode reduzir muito o tempo e os juros.",
      },
      {
        question: "Porque é que o prazo do meu extrato é diferente?",
        answer: "Os extratos costumam pressupor que paga apenas o mínimo, que diminui à medida que o saldo desce, e os emissores costumam cobrar juros diários. Esta calculadora pressupõe o mesmo pagamento fixo todos os meses e juros mensais.",
      },
      {
        question: "E se o meu pagamento for inferior aos juros?",
        answer: "Nesse caso, o saldo nunca desce e a calculadora mostra um erro. Tem de pagar mais do que os juros do primeiro mês, indicados na mensagem de erro, para que alguma parte do pagamento reduza o que deve.",
      },
    ],
    sourcesUsedFor: [
      "A informação sobre o prazo de liquidação e o pagamento a 36 meses que consta dos extratos de cartões dos EUA, que também pressupõe que não há novas compras.",
      "O que significa a taxa percentual anual (APR) de um cartão de crédito.",
    ],
  },
  text: {
    mode: "Calcular",
    modes: { payment: "Tempo até à liquidação", months: "Pagamento necessário" },
    balance: "Saldo do cartão",
    balanceHelp: "O que deve hoje no cartão.",
    apr: "APR de compras",
    aprHelp: "A taxa de juro anual indicada no seu extrato.",
    payment: "Pagamento mensal",
    paymentHelp: "O mesmo montante pago todos os meses até liquidar a dívida.",
    months: "Liquidar em",
    monthsHelp: "Número de pagamentos mensais, de 1 a 600.",
    monthsSuffix: "meses",
    errors: {
      neverPaid: "Este pagamento não cobre os juros do primeiro mês, de {interest}, pelo que a dívida nunca seria liquidada. Introduza um pagamento maior.",
      tooLong: "Com este pagamento, seriam precisos mais de 1200 meses (100 anos) para liquidar o cartão. Introduza um pagamento maior.",
    },
    units: { years, months },
    yearsMonths: "{years} e {months}",
    timeToPayoff: "Tempo até à liquidação",
    captionPayment: "Pagando {payment} por mês sobre {balance} com uma APR de {apr}: aproximadamente {duration}.",
    requiredPayment: "Pagamento mensal necessário",
    captionMonths: "Liquida {balance} com uma APR de {apr} em {duration}.",
    totalInterest: "Juros totais",
    totalPaid: "Total pago",
    lastPayment: "Último pagamento (parcial)",
    firstInterest: "Juros do primeiro mês",
    numberOfPayments: "Número de pagamentos",
    tableCaption: "Saldo por ano",
    tableColumns: { year: "Ano", interest: "Juros pagos", paid: "Pagamentos efetuados", balance: "Saldo no final do ano" },
    notes: {
      monthly: "Os juros são somados todos os meses a APR ÷ 12. Muitos emissores cobram juros sobre o saldo médio diário, pelo que os valores do seu extrato serão ligeiramente diferentes.",
      noPurchases: "A estimativa pressupõe que não há novas compras, comissões nem alterações de taxa enquanto liquida o cartão.",
      zeroRate: "Com uma APR de 0 %, o saldo é simplesmente dividido em pagamentos iguais.",
    },
  },
};

export default pt;
