import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BudgetRuleText } from "../text/en";

const pt: CalculatorTranslation<BudgetRuleText> = {
  content: {
    title: "Calculadora de orçamento 50/30/20",
    shortTitle: "Orçamento 50/30/20",
    summary: "Divida o seu rendimento líquido mensal entre necessidades, desejos e poupança com a regra 50/30/20 ou outra divisão simples do orçamento.",
    metaTitle: "Orçamento 50/30/20 – Necessidades, desejos e poupança",
    metaDescription:
      "Divida o seu rendimento líquido com a regra 50/30/20, 70/20/10 ou 80/20, ou com a sua própria divisão, e veja cada parcela por mês e por ano.",
    keywords: ["regra 50/30/20", "calculadora de orçamento", "necessidades desejos poupança", "orçamento 70/20/10", "orçamento 80/20", "orçamento mensal", "salário líquido"],
    intro: [
      "Uma regra de percentagens é uma forma rápida de começar um orçamento sem controlar dezenas de categorias. A mais conhecida é a 50/30/20: metade do seu rendimento líquido para necessidades, 30 % para desejos e 20 % para poupar e reduzir dívidas.",
      "Introduza o seu rendimento mensal depois de impostos e escolha uma regra, ou defina as suas próprias três percentagens. A calculadora mostra quanto vai para cada parcela em cada mês e ao longo de um ano.",
    ],
    howToUse: [
      "Escolha a moeda dos montantes.",
      "Introduza o seu rendimento líquido mensal: o que chega à sua conta bancária depois de impostos.",
      "Escolha uma regra de orçamento, ou escolha Divisão personalizada e introduza três percentagens que somem 100 %.",
      "Consulte o montante de cada parcela por mês e por ano.",
    ],
    formulas: [
      { title: "Montante por parcela", expression: "parcela = rendimento × percentagem ÷ 100", explanation: "Na regra 50/30/20, as percentagens são 50 % para necessidades, 30 % para desejos e 20 % para poupança." },
      { title: "Montante anual", expression: "anual = mensal × 12", explanation: "Cada montante mensal ao longo de doze meses." },
      { title: "Divisão personalizada", expression: "necessidades % + desejos % + poupança % = 100 %", explanation: "As suas próprias percentagens têm de cobrir todo o rendimento, nem mais nem menos." },
    ],
    examples: [
      {
        title: "3850 US$ por mês com a regra 50/30/20",
        steps: ["Necessidades = 3850 × 50 % = 1925 US$", "Desejos = 3850 × 30 % = 1155 US$", "Poupança = 3850 × 20 % = 770 US$"],
      },
      {
        title: "5200 US$ por mês com a regra 70/20/10",
        steps: ["Despesas = 5200 × 70 % = 3640 US$", "Poupança = 5200 × 20 % = 1040 US$", "Pagamento de dívidas ou donativos = 5200 × 10 % = 520 US$"],
      },
      {
        title: "2900 US$ por mês com uma divisão personalizada 55/25/20",
        steps: ["55 + 25 + 20 = 100 %", "Necessidades = 2900 × 55 % = 1595 US$", "Desejos = 725 US$; poupança = 580 US$"],
      },
    ],
    assumptions: [
      "Estas divisões são regras práticas, não aconselhamento financeiro. Não têm em conta as suas dívidas, onde vive nem os seus objetivos.",
      "O rendimento é o salário líquido depois de impostos e descontos no recibo de vencimento. Se a poupança para a reforma já é descontada no seu vencimento, pode contá-la na parcela de poupança.",
      "A divisão 50/30/20 é popularmente atribuída ao livro All Your Worth, de 2005, de Elizabeth Warren e Amelia Warren Tyagi. As divisões 70/20/10 e 80/20 são variantes informais sem uma fonte única.",
      "Os pagamentos mínimos de dívidas costumam contar como necessidades; o que pagar acima do mínimo vai para a parcela de poupança e pagamento de dívidas.",
    ],
    faqs: [
      {
        question: "O que conta como necessidade?",
        answer: "As necessidades são as despesas que lhe custaria deixar de pagar: renda ou prestação da casa, água, luz e gás, as compras essenciais de supermercado, seguros, o transporte para o trabalho e os pagamentos mínimos de empréstimos. Comer fora, as plataformas de streaming, as viagens e os passatempos são desejos.",
      },
      {
        question: "E se as minhas necessidades ultrapassarem 50 %?",
        answer: "É comum onde a habitação é cara. Use uma divisão personalizada que reflita os seus custos reais e procure formas de reduzir as necessidades ou aumentar o rendimento com o tempo. A regra é um objetivo, não um exame em que se passa ou chumba.",
      },
      {
        question: "Devo usar o rendimento bruto ou o líquido?",
        answer: "Use o rendimento líquido, o que recebe depois de impostos. A regra foi pensada para o dinheiro que tem realmente para gastar e poupar em cada mês.",
      },
    ],
    sourcesUsedFor: [
      "O que é um orçamento e porque se planeia o rendimento face às despesas e à poupança.",
      "A origem da regra 50/30/20 no livro All Your Worth, de Elizabeth Warren e Amelia Warren Tyagi.",
    ],
  },
  text: {
    income: "Rendimento líquido mensal",
    incomeHelp: "O seu salário depois do imposto sobre o rendimento e de outros descontos, num mês.",
    rule: "Regra de orçamento",
    rules: {
      "50-30-20": "50/30/20 (necessidades, desejos, poupança)",
      "70-20-10": "70/20/10 (despesas, poupança, dívidas ou donativos)",
      "80-20": "80/20 (despesas, poupança)",
      custom: "Divisão personalizada",
    },
    needsPct: "Necessidades",
    wantsPct: "Desejos",
    savingsPct: "Poupança e pagamento de dívidas",
    customHelp: "As três percentagens têm de somar 100 %.",
    sumError: "As três percentagens somam {sum}. Altere-as para que somem 100 %.",
    buckets: {
      needs: "Necessidades",
      wants: "Desejos",
      savings: "Poupança e pagamentos extra de dívidas",
      spending: "Despesas do dia a dia (necessidades e desejos)",
      savingsOnly: "Poupança",
      extra: "Pagamento de dívidas ou donativos",
    },
    primaryCaption: "{percent} de {income} por mês para esta parcela segundo a regra {rule}.",
    ruleNames: { "50-30-20": "50/30/20", "70-20-10": "70/20/10", "80-20": "80/20", custom: "personalizada" },
    yearlyIncome: "Rendimento líquido anual",
    tableCaption: "Montantes mensais e anuais de cada parcela",
    tableColumns: { bucket: "Parcela", share: "Percentagem", monthly: "Por mês", yearly: "Por ano" },
    notes: {
      thumb: "As regras de orçamento são pontos de partida aproximados, não aconselhamento. Ajuste a divisão aos seus próprios custos e objetivos.",
      needs: "As necessidades são as despesas que tem de pagar, como a habitação, a água, a luz e o gás, as compras de supermercado, os seguros e os pagamentos mínimos de dívidas. Os desejos são tudo aquilo em que poderia cortar.",
    },
  },
};

export default pt;
