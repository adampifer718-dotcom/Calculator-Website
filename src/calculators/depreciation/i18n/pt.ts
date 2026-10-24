import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DepreciationText } from "../text/en";

const pt: CalculatorTranslation<DepreciationText> = {
  content: {
    title: "Calculadora de depreciações",
    shortTitle: "Depreciações",
    summary: "Elabore um plano anual de depreciações pelo método das quotas constantes, das quotas degressivas ou da soma dos dígitos dos anos.",
    metaTitle: "Calculadora de depreciações – Quotas lineares e degressivas",
    metaDescription:
      "Calcule a depreciação anual e o valor contabilístico por quotas constantes, quotas degressivas (200% ou 150%) ou soma dos dígitos, com o plano completo.",
    keywords: ["depreciações", "calcular depreciação", "quotas constantes", "quotas degressivas", "soma dos dígitos dos anos", "valor contabilístico", "plano de depreciações", "valor residual"],
    intro: [
      "A depreciação reparte o custo de um ativo de longa duração, como uma máquina, um veículo ou um computador, pelos anos em que é utilizado. Em cada ano, parte do custo passa a gasto e o valor contabilístico do ativo diminui até atingir o valor residual esperado.",
      "Esta calculadora compara quatro métodos contabilísticos habituais. O método das quotas constantes imputa o mesmo montante todos os anos. Os métodos das quotas degressivas e da soma dos dígitos dos anos imputam mais nos primeiros anos e menos depois, o que se adequa a ativos que perdem valor rapidamente.",
    ],
    howToUse: [
      "Escolha a moeda e introduza o custo do ativo.",
      "Introduza o valor residual que espera no fim da vida útil, ou 0.",
      "Introduza a vida útil em anos completos.",
      "Escolha um método e consulte a depreciação do primeiro ano e o plano completo de depreciações, depreciações acumuladas e valor contabilístico.",
    ],
    formulas: [
      { title: "Quotas constantes", expression: "D = (C − S) ÷ N", explanation: "C é o custo, S o valor residual e N a vida útil em anos. O montante é o mesmo todos os anos." },
      { title: "Quotas degressivas", expression: "Dₖ = min(Bₖ₋₁ × f ÷ N, Bₖ₋₁ − S)", explanation: "Bₖ₋₁ é o valor contabilístico no início do ano k e f é 2 (dupla degressiva) ou 1,5. No último ano, a depreciação corresponde ao que resta acima do valor residual." },
      { title: "Soma dos dígitos dos anos", expression: "Dₖ = (C − S) × (N − k + 1) ÷ (N(N + 1) ÷ 2)", explanation: "Para uma vida útil de 5 anos, os dígitos somam 15, pelo que as frações anuais são 5/15, 4/15, 3/15, 2/15 e 1/15." },
      { title: "Valor contabilístico", expression: "Bₖ = C − (D₁ + … + Dₖ)", explanation: "O custo menos as depreciações acumuladas. Termina no valor residual." },
    ],
    examples: [
      { title: "Quotas constantes: carrinha de 30 000 US$, valor residual de 3000 US$, 5 anos", steps: ["Montante depreciável = 30 000 − 3000 = 27 000 US$", "Depreciação anual = 27 000 ÷ 5 = 5400 US$", "Valor contabilístico após o ano 5 = 3000 US$"] },
      {
        title: "Dupla degressiva: equipamento de 12 000 US$, valor residual de 1500 US$, 5 anos",
        steps: [
          "Taxa = 2 ÷ 5 = 40% do valor contabilístico em cada ano",
          "Ano 1 = 12 000 × 0,40 = 4800 US$, restando 7200 US$",
          "Anos 2–4 = 2880 US$, 1728 US$ e 1036,80 US$, restando 1555,20 US$",
          "O ano 5 absorve os 55,20 US$ restantes, pelo que o valor contabilístico termina em 1500 US$",
        ],
      },
      { title: "Soma dos dígitos dos anos: máquina de 50 000 €, valor residual de 5000 €, 10 anos", steps: ["Dígitos = 10 × 11 ÷ 2 = 55", "Ano 1 = 45 000 × 10 ÷ 55 ≈ 8181,82 €", "Ano 2 = 45 000 × 9 ÷ 55 ≈ 7363,64 €"] },
    ],
    assumptions: [
      "Trata-se de métodos contabilísticos com a convenção de ano completo: no primeiro ano é registado um ano inteiro de depreciação, sem convenções de meio ano, meio trimestre ou meio mês.",
      "Nos EUA, a depreciação fiscal da maioria dos bens empresariais usa o MACRS, descrito na IRS Publication 946, com os seus próprios períodos de recuperação, convenções e tabelas de percentagens. Esta ferramenta não calcula o MACRS, a Section 179 nem a bonus depreciation, e outros países têm as suas próprias regras fiscais.",
      "No método das quotas degressivas, o valor contabilístico nunca desce abaixo do valor residual e o montante restante é registado no último ano. Algumas empresas passam para as quotas constantes a meio da vida útil; esta ferramenta não o faz.",
      "Isto é uma estimativa, não aconselhamento fiscal nem contabilístico, e não foi revista por profissionais.",
    ],
    faqs: [
      { question: "Que método de depreciação devo usar?", answer: "O método das quotas constantes é o mais simples e o mais comum nas demonstrações financeiras. Os métodos acelerados adequam-se a ativos que perdem a maior parte do valor ou da utilidade no início, como veículos e computadores. O seu contabilista e as regras locais determinam qual pode usar para efeitos fiscais." },
      { question: "Porque é que o último ano das quotas degressivas parece diferente?", answer: "Uma percentagem fixa de um saldo decrescente nunca atinge exatamente o valor residual. A calculadora regista no último ano o que resta acima do valor residual, o que pode ser maior ou menor do que no ano anterior." },
      { question: "O valor residual é subtraído antes de aplicar a taxa degressiva?", answer: "Não. A taxa degressiva aplica-se ao valor contabilístico total. O valor residual funciona apenas como limite mínimo: o valor contabilístico não pode descer abaixo dele." },
    ],
    sourcesUsedFor: ["O facto de a depreciação fiscal nos EUA da maioria dos bens empresariais usar o MACRS, que difere dos métodos contabilísticos calculados aqui, e os conceitos gerais das quotas constantes e degressivas."],
  },
  text: {
    cost: "Custo do ativo",
    costHelp: "O preço de compra mais os custos para pôr o ativo em condições de uso, como o transporte e a instalação.",
    salvage: "Valor residual",
    salvageHelp: "O valor que espera que o ativo tenha no fim da sua vida útil. Use 0 se não tiver valor.",
    life: "Vida útil",
    method: "Método",
    methods: {
      straightLine: "Quotas constantes",
      declining200: "Quotas degressivas duplas (200%)",
      declining150: "Quotas degressivas a 150%",
      sumOfYears: "Soma dos dígitos dos anos",
    },
    errors: {
      salvage: "O valor residual tem de ser inferior ao custo do ativo.",
    },
    firstYear: "Depreciação do primeiro ano",
    caption: "{method}: custo de {cost}, valor residual de {salvage}, {life}.",
    lifeYears: { zero: "{n} anos", one: "{n} ano", two: "{n} anos", few: "{n} anos", many: "{n} anos", other: "{n} anos" },
    base: "Montante depreciável (custo − valor residual)",
    rateStraight: "Taxa aplicada (parte do montante depreciável por ano)",
    rateDeclining: "Taxa aplicada ao valor contabilístico em cada ano",
    rateSumOfYears: "Fração do montante depreciável no primeiro ano",
    total: "Depreciação total ao longo da vida útil",
    finalYear: "Depreciação do último ano",
    table: {
      caption: "Plano de depreciações",
      year: "Ano",
      depreciation: "Depreciação",
      accumulated: "Depreciações acumuladas",
      bookValue: "Valor contabilístico no fim do ano",
      yearLabel: "Ano {n}",
    },
    notes: {
      fullYear: "No primeiro ano é registado um ano completo de depreciação, seja qual for a data de compra.",
      declining: "A depreciação de cada ano é a taxa vezes o valor contabilístico no início do ano, limitada para que o valor contabilístico nunca desça abaixo do valor residual. O que resta é registado no último ano.",
      macrs: "Nos EUA, a depreciação fiscal usa o MACRS (IRS Publication 946), que esta ferramenta não calcula.",
    },
  },
};

export default pt;
