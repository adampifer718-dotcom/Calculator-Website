import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DebtToIncomeText } from "../text/en";

const pt: CalculatorTranslation<DebtToIncomeText> = {
  content: {
    title: "Calculadora de taxa de esforço (DTI)",
    shortTitle: "Taxa de esforço",
    summary: "Calcule a sua taxa de esforço total (back-end) e com a habitação (front-end) a partir do seu rendimento bruto mensal e dos seus pagamentos mensais de dívidas.",
    metaTitle: "Taxa de esforço (DTI) – Total e com a habitação",
    metaDescription:
      "Calcule a sua taxa de esforço (DTI): pagamentos mensais de dívidas divididos pelo rendimento bruto mensal, bem como o rácio da habitação e a dívida total.",
    keywords: ["taxa de esforço", "DTI", "rácio dívida-rendimento", "taxa de esforço habitação", "taxa de esforço crédito habitação", "capacidade de endividamento", "dívida mensal"],
    intro: [
      "A sua taxa de esforço, ou DTI (debt-to-income), compara o que paga todos os meses pelas suas dívidas com o que ganha antes de impostos. Os credores usam-na como medida da margem que o seu orçamento tem para um novo empréstimo.",
      "Introduza o seu rendimento bruto mensal e os seus pagamentos mensais de dívidas. A calculadora dá a taxa total (back-end), que inclui todas as dívidas, e a taxa da habitação (front-end), que conta apenas a habitação.",
    ],
    howToUse: [
      "Escolha a moeda dos montantes.",
      "Introduza o seu rendimento bruto mensal, antes de impostos e descontos.",
      "Introduza o seu pagamento mensal com a habitação: a renda ou a prestação do crédito à habitação com impostos e seguro incluídos.",
      "Introduza os seus outros pagamentos mensais de dívidas. Para os cartões de crédito, use o pagamento mínimo.",
      "Consulte a taxa total, a taxa da habitação e o total dos seus pagamentos de dívidas.",
    ],
    formulas: [
      { title: "DTI total (back-end)", expression: "DTI = pagamentos mensais de dívidas ÷ rendimento bruto mensal × 100", explanation: "Todos os pagamentos de dívidas, incluindo a habitação." },
      { title: "Taxa da habitação (front-end)", expression: "taxa da habitação = pagamento da habitação ÷ rendimento bruto mensal × 100", explanation: "Apenas a renda ou a prestação do crédito à habitação." },
      { title: "Dívida mensal total", expression: "dívida = habitação + automóvel + estudos + cartões + outras", explanation: "Pagamentos mensais obrigatórios, não saldos em dívida." },
    ],
    examples: [
      {
        title: "Rendimento de 6000 US$ com 2000 US$ em pagamentos",
        steps: ["Dívida total = 1500 + 100 + 400 = 2000 US$", "DTI = 2000 ÷ 6000 × 100 ≈ 33,33 %", "Taxa da habitação = 1500 ÷ 6000 = 25 %"],
      },
      {
        title: "Rendimento de 5400 US$, renda e um crédito automóvel",
        steps: ["Dívida total = 1450 + 310 + 120 = 1880 US$", "DTI = 1880 ÷ 5400 × 100 ≈ 34,81 %", "Taxa da habitação = 1450 ÷ 5400 ≈ 26,85 %"],
      },
    ],
    assumptions: [
      "O rendimento é bruto (antes de impostos). Os credores podem contar o rendimento de outra forma, por exemplo calculando a média dos rendimentos como trabalhador independente ou excluindo prémios irregulares.",
      "Só são incluídos os pagamentos mensais obrigatórios. A água, a luz e o gás, as compras de supermercado, o telemóvel e outras despesas correntes não são dívidas e ficam de fora.",
      "Cada credor e cada programa de crédito fixa os seus próprios limites e tem também em conta o historial de crédito, as poupanças e outros fatores. Uma taxa de 43 % tem sido uma referência habitual nas regras hipotecárias dos EUA, mas não é um limite universal.",
      "É uma estimativa, não aconselhamento financeiro, e não foi revista por profissionais.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre a DTI da habitação (front-end) e a total (back-end)?",
        answer: "A taxa da habitação conta apenas o seu pagamento com a habitação. A taxa total soma todos os outros pagamentos mensais de dívidas, como os do automóvel, os créditos para estudos e os cartões de crédito. Quando se fala em DTI, normalmente refere-se à taxa total.",
      },
      {
        question: "Porque é que se fala tanto no valor de 43 %?",
        answer: "As regras dos EUA sobre hipotecas qualificadas (qualified mortgages) usavam 43 % como referência para a taxa de esforço, pelo que o valor foi muito citado. Os credores e os programas de crédito aplicam os seus próprios limites, que podem ser mais altos ou mais baixos.",
      },
      {
        question: "Como posso baixar a minha taxa de esforço?",
        answer: "Reduza os seus pagamentos mensais de dívidas, por exemplo liquidando um empréstimo ou o saldo de um cartão, ou aumente o seu rendimento bruto. Contrair novas dívidas antes de pedir um empréstimo faz subir a taxa.",
      },
    ],
    sourcesUsedFor: [
      "A definição da DTI como pagamentos mensais de dívidas divididos pelo rendimento bruto mensal, e a referência de 43 % nas regras hipotecárias dos EUA.",
    ],
  },
  text: {
    income: "Rendimento bruto mensal",
    incomeHelp: "O seu salário antes de impostos e descontos, num mês. Inclua todas as suas fontes de rendimento habituais.",
    housing: "Pagamento da habitação",
    housingHelp: "A renda mensal, ou a prestação do crédito à habitação com o imposto sobre imóveis, o seguro da casa e as quotas do condomínio, se existirem.",
    car: "Pagamentos de crédito automóvel",
    student: "Pagamentos de créditos para estudos",
    creditCards: "Pagamentos mínimos de cartões de crédito",
    creditCardsHelp: "O mínimo de cada cartão, não o saldo completo.",
    other: "Outros pagamentos de dívidas",
    otherHelp: "Créditos pessoais, pensão de alimentos, pensão de compensação e qualquer outro pagamento mensal obrigatório de dívidas.",
    backEnd: "Taxa de esforço (total)",
    caption: "{debt} de pagamentos mensais de dívidas sobre {income} de rendimento bruto mensal.",
    frontEnd: "Taxa da habitação (front-end)",
    totalDebt: "Pagamentos mensais de dívidas totais",
    nonHousing: "Pagamentos de dívidas além da habitação",
    remaining: "Rendimento bruto restante após os pagamentos de dívidas",
    notes: {
      lenders: "Cada credor e cada programa de crédito fixa os seus próprios limites de endividamento e tem também em conta outros fatores, pelo que esta taxa, por si só, não indica se lhe concederiam um empréstimo.",
      reference: "Segundo o Consumer Financial Protection Bureau, uma taxa de esforço de 43 % tem sido uma referência habitual nas regras dos EUA sobre hipotecas qualificadas.",
      overIncome: "Os seus pagamentos mensais de dívidas ultrapassam o seu rendimento bruto mensal.",
    },
  },
};

export default pt;
