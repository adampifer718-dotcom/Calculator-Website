import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SimpleInterestText } from "../text/en";

const pt: CalculatorTranslation<SimpleInterestText> = {
  content: {
    title: "Calculadora de juros simples",
    shortTitle: "Juros simples",
    summary: "Calcule os juros simples e o montante total devido ou obtido a partir do capital, da taxa anual e do prazo.",
    metaTitle: "Calculadora de juros simples – I = Prt",
    metaDescription:
      "Calcule juros simples com I = Prt para um prazo em anos, meses ou dias e veja o montante total, os juros por ano e os juros por mês.",
    keywords: ["juros simples", "I = Prt", "fórmula dos juros", "capital", "taxa de juro", "juro simples", "montante total"],
    intro: [
      "Os juros simples são calculados apenas sobre o montante inicial. Os juros de cada ano são sempre os mesmos, pelo que o total cresce em linha reta, sem efeito bola de neve.",
      "São usados em muitos empréstimos de curto prazo, em alguns créditos automóvel, em obrigações com cupão fixo e em exercícios de matemática financeira. Introduza o capital, a taxa anual e durante quanto tempo o dinheiro é emprestado ou investido.",
    ],
    howToUse: [
      "Escolha a moeda em que pretende ver os montantes.",
      "Introduza o capital: o montante emprestado ou depositado.",
      "Introduza a taxa de juro anual em percentagem.",
      "Introduza o prazo e escolha anos, meses ou dias.",
      "Consulte os juros, o montante total e os juros por ano e por mês.",
    ],
    formulas: [
      {
        title: "Juros simples",
        expression: "I = P × r × t",
        explanation: "P é o capital, r a taxa anual em forma decimal (5% = 0,05) e t o prazo em anos.",
      },
      { title: "Montante total", expression: "A = P + I = P × (1 + r × t)", explanation: "O que é reembolsado ou detido no final." },
      {
        title: "Conversão do prazo",
        expression: "t = meses ÷ 12, ou t = dias ÷ 365",
        explanation: "Os meses e os dias são convertidos em anos antes de aplicar a fórmula.",
      },
    ],
    examples: [
      { title: "2500 US$ a 4,2% durante 3 anos", steps: ["I = 2500 × 0,042 × 3", "= 315 US$", "A = 2500 + 315 = 2815 US$"] },
      { title: "8000 US$ a 6,5% durante 18 meses", steps: ["t = 18 ÷ 12 = 1,5 anos", "I = 8000 × 0,065 × 1,5", "= 780 US$"] },
      { title: "1200 US$ a 9% durante 90 dias", steps: ["t = 90 ÷ 365 ≈ 0,2466 anos", "I = 1200 × 0,09 × 90 ÷ 365", "≈ 26,63 US$"] },
    ],
    assumptions: [
      "Os juros são simples: nunca são somados ao capital, pelo que não se obtêm juros sobre juros.",
      "Os dias são convertidos com um ano de 365 dias. Alguns credores e mercados monetários usam um ano de 360 dias (por vezes chamado juro comercial ou bancário), o que dá um pouco mais de juros para o mesmo número de dias.",
      "A taxa é fixa durante todo o período. Não estão incluídas comissões, impostos nem amortizações antecipadas.",
      "A escolha da moeda altera apenas a formatação. Isto não constitui aconselhamento financeiro.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre juros simples e juros compostos?",
        answer:
          "Os juros simples são sempre calculados sobre o capital inicial. Os juros compostos somam os juros de cada período ao saldo, pelo que os juros seguintes também incidem sobre os juros anteriores e o total cresce mais depressa.",
      },
      {
        question: "Como encontro a taxa se souber os juros?",
        answer:
          "Reorganize a fórmula: r = I ÷ (P × t). Por exemplo, 90 US$ de juros sobre 1000 US$ ao longo de 2 anos significam r = 90 ÷ 2000 = 0,045, ou seja, 4,5% ao ano.",
      },
      {
        question: "Porque é que o valor do meu credor difere ligeiramente para um certo número de dias?",
        answer:
          "Os credores podem dividir por 360 em vez de 365, ou contar os dias reais de um ano bissexto. Dividir por 360 aumenta os juros em cerca de 1,4%.",
      },
    ],
    sourcesUsedFor: ["A fórmula dos juros simples I = Prt e o significado de cada variável."],
  },
  text: {
    principal: "Capital",
    principalHelp: "O montante emprestado ou depositado.",
    rate: "Taxa de juro anual",
    time: "Prazo",
    timeUnit: "Unidade de tempo",
    timeUnits: { years: "Anos", months: "Meses", days: "Dias" },
    tooLong: "Use um prazo de 100 anos ou menos.",
    interest: "Juros simples",
    caption: "Juros sobre {principal} a {rate} ao ano, sem capitalização.",
    total: "Montante total (capital + juros)",
    perYear: "Juros por ano",
    perMonth: "Juros por mês",
    timeInYears: "Prazo em anos",
    notes: {
      simple: "Os juros simples incidem apenas sobre o capital; os juros não geram novos juros.",
      days: "Os dias são convertidos com um ano de 365 dias. Alguns credores usam um ano de 360 dias, o que dá um pouco mais de juros.",
    },
  },
};

export default pt;
