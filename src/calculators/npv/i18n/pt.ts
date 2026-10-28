import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { NpvText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const pt: CalculatorTranslation<NpvText> = {
  content: {
    title: "Calculadora de VAL e TIR",
    shortTitle: "VAL e TIR",
    summary: "Atualize uma série de fluxos de caixa anuais para obter o valor atual líquido, a taxa interna de rendibilidade, o índice de rendibilidade e o período de recuperação atualizado.",
    metaTitle: "Calculadora de VAL e TIR – Valor atual líquido",
    metaDescription:
      "Obtenha o valor atual líquido e a TIR de um investimento pelos seus fluxos de caixa anuais, com o índice de rendibilidade e o período de recuperação atualizado.",
    keywords: ["calculadora de VAL", "valor atual líquido", "calculadora de TIR", "taxa interna de rendibilidade", "fluxos de caixa atualizados", "índice de rendibilidade", "payback atualizado", "avaliação de investimentos"],
    intro: [
      "O dinheiro que recebe mais tarde vale menos do que o mesmo montante hoje, porque o dinheiro de hoje poderia ser investido entretanto. O valor atual líquido (VAL) converte cada fluxo de caixa futuro de um projeto em valores de hoje, atualizando-o à taxa de rendibilidade que exige, e subtrai depois o que paga à cabeça.",
      "Um VAL positivo significa que se espera que o projeto renda mais do que essa taxa; um VAL negativo significa que rende menos. A taxa interna de rendibilidade (TIR) é a taxa à qual o VAL é exatamente zero, pelo que mostra a rendibilidade anual do próprio projeto. Esta página trata de ambos, por isso não existe uma calculadora de TIR separada.",
    ],
    howToUse: [
      "Escolha a moeda e introduza o investimento inicial como um valor positivo.",
      "Indique o fluxo de caixa líquido de cada ano, começando pelo ano 1. Use um sinal de menos para um ano com saída líquida, como uma grande reparação.",
      "Introduza a taxa de atualização: a rendibilidade anual que exige ou o seu custo do capital.",
      "Consulte o VAL, a TIR, o índice de rendibilidade e o período de recuperação atualizado, e verifique a tabela ano a ano.",
    ],
    formulas: [
      { title: "Valor atual líquido", expression: "VAL = −C₀ + Σ CFₜ ÷ (1 + r)ᵗ", explanation: "C₀ é o investimento inicial, CFₜ o fluxo de caixa no fim do ano t e r a taxa de atualização em forma decimal. A soma vai do ano 1 ao último ano." },
      { title: "Taxa interna de rendibilidade", expression: "−C₀ + Σ CFₜ ÷ (1 + TIR)ᵗ = 0", explanation: "Obtida por bisseção entre −99,99% e 1000% ao ano. Quando os fluxos de caixa mudam de sinal mais de uma vez, pode haver várias soluções, pelo que não é indicada nenhuma TIR." },
      { title: "Índice de rendibilidade", expression: "IR = (Σ CFₜ ÷ (1 + r)ᵗ) ÷ C₀", explanation: "O valor atual recebido por cada unidade investida. Um IR superior a 1 corresponde a um VAL positivo." },
      { title: "Período de recuperação atualizado", expression: "k + (−acumuladoₖ) ÷ CF atualizadoₖ₊₁", explanation: "k é o último ano em que o valor atualizado acumulado ainda é negativo. A fração pressupõe que o fluxo de caixa do ano seguinte chega de forma uniforme." },
    ],
    examples: [
      {
        title: "Máquina de 50 000 US$ com cinco anos de fluxos de caixa a 8%",
        steps: [
          "Valores atualizados: 12 000 ÷ 1,08 ≈ 11 111,11; 15 000 ÷ 1,08² ≈ 12 860,08; 18 000 ÷ 1,08³ ≈ 14 288,98; 20 000 ÷ 1,08⁴ ≈ 14 700,60; 9000 ÷ 1,08⁵ ≈ 6125,25",
          "Valor atual dos fluxos de caixa ≈ 59 086,02 US$",
          "VAL = 59 086,02 − 50 000 ≈ 9086,02 US$, e a TIR é de cerca de 14,60%",
        ],
      },
      {
        title: "Projeto de 250 000 € com uma rendibilidade exigida de 12%",
        steps: [
          "Valor atual dos cinco fluxos de caixa ≈ 246 211,12 €",
          "VAL = 246 211,12 − 250 000 ≈ −3788,88 €",
          "A TIR é de cerca de 11,38%, ligeiramente abaixo da rendibilidade exigida de 12%, e é por isso que o VAL é negativo",
        ],
      },
      {
        title: "Fluxos de caixa que mudam de sinal duas vezes",
        steps: [
          "VAL = −1000 + 3000 ÷ 1,1 − 2200 ÷ 1,1² = −1000 + 2727,27 − 1818,18 ≈ −90,91 US$",
          "Tanto 27,64% como 72,36% anulam o VAL, pelo que a TIR é indicada como não única",
        ],
      },
    ],
    assumptions: [
      "Cada fluxo de caixa ocorre no fim do respetivo ano, e o investimento inicial é pago no início (ano 0). Fluxos a meio do ano ou mensais dão um VAL diferente.",
      "É usada uma única taxa de atualização constante em todos os anos. Impostos, inflação e custos de financiamento só são incluídos se já os tiver incorporado nos fluxos de caixa ou na taxa.",
      "A TIR pressupõe que os fluxos de caixa mudam de sinal apenas uma vez. Com várias mudanças de sinal, a TIR pode ter mais de um valor ou nenhum, e o VAL é o indicador mais fiável.",
      "Trata-se de uma estimativa para comparar opções, não de aconselhamento de investimento ou financeiro, e não foi revista por um profissional.",
    ],
    faqs: [
      { question: "Que taxa de atualização devo usar?", answer: "Use a rendibilidade que poderia obter noutro investimento de risco semelhante, ou o custo do capital da sua organização. Uma taxa mais alta reduz o valor dos fluxos de caixa mais tardios, pelo que os projetos mais arriscados costumam ter uma taxa mais alta." },
      { question: "Porque podem a TIR e o VAL discordar quando comparo projetos?", answer: "A TIR é uma percentagem e ignora a dimensão do projeto, enquanto o VAL é um montante. Um projeto pequeno pode ter uma TIR mais alta mas acrescentar menos valor do que um maior. Quando os dois ordenam os projetos de forma diferente, o VAL à taxa exigida é geralmente preferível." },
      { question: "Porque é que a TIR aparece como não única?", answer: "Quando os fluxos de caixa alternam entre saídas e entradas mais de uma vez, por exemplo com um grande custo de descontaminação no fim, o VAL pode anular-se a várias taxas. Nenhuma taxa única descreve então o projeto, pelo que a calculadora indica apenas o VAL." },
    ],
    sourcesUsedFor: [
      "As definições de valor atual líquido e de taxa interna de rendibilidade e as regras de aceitação ou rejeição de cada um.",
      "A fórmula de atualização do VAL e a definição da TIR como a taxa à qual o VAL é igual a zero.",
    ],
  },
  text: {
    initial: "Investimento inicial",
    initialHelp: "O montante pago no início (ano 0). Introduza-o como número positivo; é tratado como uma saída.",
    cashFlows: "Fluxos de caixa anuais",
    cashFlowsHelp: "Fluxo de caixa líquido no fim do ano 1, do ano 2 e assim por diante, separados por vírgulas, espaços ou mudanças de linha. Use um sinal de menos para um ano com saída líquida.",
    rate: "Taxa de atualização",
    rateHelp: "A rendibilidade que exige ou o seu custo do capital por ano.",
    errors: {
      empty: "Introduza pelo menos um fluxo de caixa.",
      tooMany: "Introduza no máximo {max} fluxos de caixa.",
      notNumber: "«{token}» não é um número. Separe os valores com vírgulas, espaços ou mudanças de linha.",
      tooLarge: "«{token}» é demasiado grande.",
    },
    tooBig: "{value} é demasiado grande. Cada fluxo de caixa pode ter, no máximo, {max} em valor absoluto.",
    npv: "Valor atual líquido (VAL)",
    caption: "{count} atualizados a {rate} por ano, após um investimento inicial de {initial}.",
    yearCount: forms("{n} ano de fluxos de caixa", "{n} anos de fluxos de caixa"),
    irr: "Taxa interna de rendibilidade (TIR)",
    irrNone: "Não encontrada",
    irrNotUnique: "Não única",
    irrOutOfRange: "Não encontrada entre {low} e {high}",
    pvInflows: "Valor atual dos fluxos de caixa anuais",
    profitabilityIndex: "Índice de rendibilidade (VA dos fluxos de caixa ÷ investimento inicial)",
    totalUndiscounted: "Fluxo de caixa total não atualizado (incluindo o investimento inicial)",
    payback: "Período de recuperação atualizado",
    paybackYears: forms("{n} ano", "{n} anos"),
    paybackNever: "Não atingido com estes fluxos de caixa",
    table: {
      caption: "Fluxos de caixa por ano",
      year: "Ano",
      cashFlow: "Fluxo de caixa",
      discounted: "Valor atualizado",
      cumulative: "Valor atualizado acumulado",
      yearLabel: "Ano {n}",
    },
    notes: {
      positive: "Um VAL positivo significa que os fluxos de caixa rendem mais do que a taxa de atualização depois de recuperado o investimento inicial.",
      negative: "Um VAL negativo significa que os fluxos de caixa rendem menos do que a taxa de atualização.",
      zero: "Um VAL igual a zero significa que os fluxos de caixa rendem exatamente a taxa de atualização.",
      irrNone: "Os fluxos de caixa nunca mudam de sinal (são todos saídas ou todos entradas), pelo que nenhuma taxa anula o VAL.",
      irrNotUnique: "Os fluxos de caixa mudam de sinal mais de uma vez, pelo que pode haver várias taxas que anulam o VAL, ou nenhuma. A TIR não é indicada; baseie-se antes no VAL.",
      irrOutOfRange: "Nenhuma taxa entre {low} e {high} por ano anula o VAL.",
      payback: "O período de recuperação atualizado pressupõe que o fluxo de caixa de cada ano chega de forma uniforme ao longo do ano em que o acumulado passa por zero.",
      timing: "Pressupõe-se que os fluxos de caixa ocorrem no fim de cada ano e são atualizados a uma taxa constante.",
    },
  },
};

export default pt;
