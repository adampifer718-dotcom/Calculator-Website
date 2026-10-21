import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SavingsGoalText } from "../text/en";

const pt: CalculatorTranslation<SavingsGoalText> = {
  content: {
    title: "Calculadora de objetivo de poupança",
    shortTitle: "Objetivo de poupança",
    summary:
      "Saiba qual o depósito mensal necessário para atingir um objetivo de poupança numa data escolhida, contando com o que já poupou e o retorno obtido.",
    metaTitle: "Objetivo de poupança – Depósito mensal necessário",
    metaDescription:
      "Calcule quanto poupar por mês para atingir um objetivo num prazo definido, com a sua poupança atual, um retorno anual esperado e capitalização mensal.",
    keywords: ["objetivo de poupança", "quanto poupar por mês", "poupança mensal", "fundo de amortização", "poupar para um objetivo", "valor futuro", "plano de poupança"],
    intro: [
      "Poupar para uma entrada, um carro ou um fundo de emergência é mais fácil com um valor mensal como meta. Esta calculadora determina o depósito regular que o leva do que tem agora até ao seu objetivo no prazo que escolher.",
      "Conta com o crescimento tanto da poupança atual como dos novos depósitos, usando um retorno anual fixo capitalizado mensalmente. Com um retorno de 0%, limita-se a dividir o que falta poupar pelos meses.",
    ],
    howToUse: [
      "Escolha a moeda dos montantes.",
      "Introduza o montante do objetivo e o que já poupou para ele.",
      "Introduza o retorno anual que espera, como a taxa da sua conta poupança.",
      "Introduza quantos anos tem; são aceites decimais como 2,5.",
      "Consulte o depósito mensal, o total que vai depositar e quanto provém do crescimento.",
    ],
    formulas: [
      {
        title: "Depósito mensal",
        expression: "PMT = (FV − PV × (1 + i)^n) × i ÷ ((1 + i)^n − 1)",
        explanation:
          "FV é o objetivo, PV a poupança atual, i = retorno anual ÷ 12 em forma decimal e n o número de meses. Os depósitos são feitos no fim de cada mês.",
      },
      { title: "Retorno nulo", expression: "PMT = (FV − PV) ÷ n", explanation: "Sem crescimento, o montante em falta é dividido igualmente pelos meses." },
      { title: "Crescimento da poupança atual", expression: "PV × (1 + i)^n", explanation: "Se isto, por si só, atingir o objetivo, não são necessários depósitos." },
    ],
    examples: [
      {
        title: "15 000 US$ em 4 anos a partir de 1000 US$ a 4,5%",
        steps: [
          "i = 0,045 ÷ 12 = 0,00375; n = 48",
          "1000 × 1,00375^48 ≈ 1196,81 US$",
          "PMT = (15 000 − 1196,81) × 0,00375 ÷ (1,00375^48 − 1) ≈ 263,00 US$",
        ],
      },
      {
        title: "30 000 US$ em 10 anos a partir do zero a 6%",
        steps: ["i = 0,005; n = 120", "PMT = 30 000 × 0,005 ÷ (1,005^120 − 1)", "≈ 183,06 US$ por mês; os depósitos totalizam cerca de 21 967 US$"],
      },
      {
        title: "6000 US$ em 2 anos a partir de 1200 US$ sem juros",
        steps: ["n = 24 meses", "PMT = (6000 − 1200) ÷ 24 = 200 US$"],
      },
    ],
    assumptions: [
      "O retorno anual é constante e capitalizado mensalmente à taxa anual ÷ 12. Os retornos reais variam e os investimentos podem perder valor.",
      "Os depósitos são iguais todos os meses e feitos no fim de cada mês. Impostos, comissões e inflação não estão incluídos.",
      "O prazo é arredondado ao mês inteiro mais próximo.",
      "Trata-se de uma estimativa, não de aconselhamento financeiro, e não foi revista por profissionais.",
    ],
    faqs: [
      {
        question: "Porque é que o depósito mensal é inferior ao objetivo dividido pelos meses?",
        answer:
          "A sua poupança atual e cada depósito rendem enquanto esperam, pelo que parte do objetivo é coberta pelo crescimento. Quanto maior o retorno e mais longo o prazo, mais o crescimento ajuda.",
      },
      {
        question: "Que retorno devo introduzir?",
        answer:
          "Para uma conta poupança, use a sua taxa de juro anual. Para investimentos, use uma estimativa prudente de longo prazo e lembre-se de que os retornos não são garantidos. Introduzir 0% mostra o depósito necessário sem qualquer crescimento.",
      },
      {
        question: "E se eu depositar no início de cada mês?",
        answer:
          "Cada depósito rende então mais um mês, pelo que o depósito necessário é ligeiramente menor: cerca do resultado aqui apresentado dividido por (1 + i), em que i é a taxa mensal.",
      },
    ],
    sourcesUsedFor: ["O valor futuro de uma renda postecipada e a prestação do fundo de amortização dele derivada."],
  },
  text: {
    goal: "Objetivo de poupança",
    goalHelp: "O montante que pretende ter no fim.",
    current: "Poupança atual",
    currentHelp: "O que já tem reservado para este objetivo. Introduza 0 se começar do zero.",
    rate: "Retorno anual",
    rateHelp: "Juro anual ou retorno do investimento esperado, capitalizado mensalmente. Use 0% para dinheiro sem juros.",
    years: "Prazo para atingir o objetivo",
    yearsHelp: "Em anos; são aceites decimais (1,5 = 18 meses).",
    yearsSuffix: "anos",
    tooShort: "Use pelo menos um mês (cerca de 0,05 anos).",
    deposit: "Depósito mensal necessário",
    caption: "Depositado no fim de cada mês durante {months} a {rate} por ano, mais {current} já poupados, para atingir {goal}.",
    months: { zero: "{n} meses", one: "{n} mês", two: "{n} meses", few: "{n} meses", many: "{n} meses", other: "{n} meses" },
    totalDeposits: "Total de depósitos",
    growth: "Crescimento obtido",
    currentGrows: "Poupança atual no fim",
    endBalance: "Saldo no fim",
    numberOfDeposits: "Número de depósitos mensais",
    notes: {
      reached: "Prevê-se que a sua poupança atual atinja o objetivo por si só, pelo que não são necessários mais depósitos.",
      constant: "Assume-se que o retorno é o mesmo todos os meses. Os retornos reais variam, e impostos, comissões e inflação não estão incluídos.",
    },
  },
};

export default pt;
