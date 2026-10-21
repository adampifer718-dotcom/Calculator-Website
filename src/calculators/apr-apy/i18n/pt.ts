import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AprApyText } from "../text/en";

const pt: CalculatorTranslation<AprApyText> = {
  content: {
    title: "Calculadora de APR para APY",
    shortTitle: "APR para APY",
    summary: "Converta uma taxa nominal anual (APR) no rendimento efetivo anual (APY), ou vice-versa, para qualquer frequência de capitalização.",
    metaTitle: "Calculadora de APR para APY – Taxa anual efetiva",
    metaDescription:
      "Converta APR em APY ou APY em APR com capitalização anual, trimestral, mensal, diária ou contínua, com uma tabela que compara todas as frequências.",
    keywords: [
      "apr para apy",
      "apy para apr",
      "rendimento percentual anual",
      "taxa percentual anual",
      "taxa anual efetiva",
      "taxa nominal",
      "frequência de capitalização",
      "TAN e TAE",
    ],
    intro: [
      "Os bancos dos EUA indicam dois tipos de taxa anual. A APR é a taxa nominal: a taxa de cada período multiplicada pelo número de períodos. A APY é a taxa efetiva: o quanto um saldo cresce realmente num ano depois de os juros gerarem, por sua vez, juros.",
      "Quanto mais frequentemente os juros são capitalizados, mais a APY se afasta da APR. Use esta ferramenta para comparar em pé de igualdade uma conta poupança expressa em APY com um empréstimo expresso em APR.",
    ],
    howToUse: [
      "Escolha se converte de APR para APY ou de APY para APR.",
      "Introduza a taxa que conhece, em percentagem.",
      "Escolha a frequência com que os juros são capitalizados.",
      "Consulte a taxa convertida, a taxa aplicada em cada período e a tabela com as restantes frequências.",
    ],
    formulas: [
      {
        title: "De APR para APY",
        expression: "APY = (1 + APR ÷ n)ⁿ − 1",
        explanation: "n é o número de períodos de capitalização por ano e ambas as taxas são expressas em decimal.",
      },
      { title: "Capitalização contínua", expression: "APY = e^APR − 1", explanation: "O limite quando n cresce indefinidamente; e ≈ 2,71828." },
      {
        title: "De APY para APR",
        expression: "APR = n × ((1 + APY)^(1/n) − 1)",
        explanation: "A operação inversa. Com capitalização contínua, APR = ln(1 + APY).",
      },
      { title: "Taxa por período", expression: "i = APR ÷ n", explanation: "O juro aplicado em cada passo de capitalização." },
    ],
    examples: [
      {
        title: "APR de 6 % com capitalização mensal",
        steps: ["Taxa mensal = 0,06 ÷ 12 = 0,005", "APY = 1,005¹² − 1", "≈ 0,061678, ou seja, aproximadamente 6,1678 %"],
      },
      {
        title: "APY de 5 % convertida em APR mensal",
        steps: ["APR = 12 × (1,05^(1/12) − 1)", "= 12 × 0,0040741", "≈ 4,8889 %"],
      },
      {
        title: "APR de 8 % com capitalização contínua",
        steps: ["APY = e^0,08 − 1", "≈ 1,083287 − 1", "≈ 8,3287 %"],
      },
    ],
    assumptions: [
      "A taxa é uma taxa de juro nominal que se mantém igual durante todo o ano, sem depósitos, levantamentos nem comissões.",
      "Nos empréstimos dos EUA, a APR divulgada ao abrigo da Truth in Lending Act (Regulation Z) pode incluir certas comissões, pelo que pode ser superior à taxa de juro por si só. Esta ferramenta converte apenas taxas nominais.",
      "A capitalização diária usa 365 períodos por ano. Os bancos podem usar 360 ou 366 dias nos seus próprios cálculos.",
      "Isto não constitui aconselhamento financeiro.",
    ],
    faqs: [
      {
        question: "Porque é que a APY é superior à APR?",
        answer:
          "Sempre que os juros são somados, os do período seguinte são calculados sobre um saldo maior. A APY tem em conta esse crescimento adicional; a APR não. Com capitalização anual, as duas coincidem.",
      },
      {
        question: "Que taxa devo comparar entre contas?",
        answer:
          "Na poupança, compare APY com APY, porque já inclui a capitalização. Nos empréstimos, compare a APR divulgada, que inclui também muitas comissões.",
      },
      {
        question: "Há muita diferença entre a capitalização diária e a mensal?",
        answer: "Muito pouca com as taxas habituais. Com uma APR de 5 %, a capitalização mensal dá uma APY de cerca de 5,116 % e a diária, de cerca de 5,127 %.",
      },
    ],
    sourcesUsedFor: [
      "Como a APY (rendimento percentual anual) reflete a capitalização ao longo de um ano.",
      "O esclarecimento de que a APR divulgada num empréstimo mede o custo do crédito e pode diferir da taxa de juro nominal.",
    ],
  },
  text: {
    direction: "Converter",
    directions: { aprToApy: "De APR para APY", apyToApr: "De APY para APR" },
    rate: "Taxa",
    rateHelp: "Introduza a APR (taxa nominal anual) para obter a APY, ou a APY (taxa efetiva anual) para obter a APR.",
    compounding: "Capitalização",
    frequencies: {
      "1": "Anual",
      "2": "Semestral",
      "4": "Trimestral",
      "12": "Mensal",
      "52": "Semanal",
      "365": "Diária",
      continuous: "Contínua",
    },
    inSentence: {
      "1": "anualmente",
      "2": "semestralmente",
      "4": "trimestralmente",
      "12": "mensalmente",
      "52": "semanalmente",
      "365": "diariamente",
      continuous: "de forma contínua",
    },
    apy: "Rendimento percentual anual (APY)",
    apr: "Taxa percentual anual (APR)",
    captionToApy: "Uma APR de {rate} capitalizada {frequency} dá esta taxa efetiva anual.",
    captionToApr: "A taxa nominal que, capitalizada {frequency}, rende uma APY de {rate}.",
    periodRate: "Taxa por período de capitalização",
    periodsPerYear: "Períodos de capitalização por ano",
    difference: "Diferença entre APY e APR",
    tableCaption: "A mesma taxa com outras frequências de capitalização",
    tableColumns: { frequency: "Capitalização", apy: "APY", apr: "APR" },
    notes: {
      continuous: "A capitalização contínua é o limite de capitalizar cada vez com mais frequência; não tem períodos separados.",
      regZ: "Nos empréstimos dos EUA, a APR divulgada ao abrigo da Regulation Z pode incluir algumas comissões além dos juros. Esta ferramenta converte apenas taxas de juro nominais, pelo que não reproduz uma APR com comissões incluídas como a de um credor.",
    },
  },
};

export default pt;
