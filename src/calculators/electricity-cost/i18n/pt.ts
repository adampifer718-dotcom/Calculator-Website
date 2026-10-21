import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ElectricityCostText } from "../text/en";

const pt: CalculatorTranslation<ElectricityCostText> = {
  content: {
    title: "Calculadora de custo de eletricidade",
    shortTitle: "Custo de eletricidade",
    summary: "Calcule quanto custa utilizar um eletrodoméstico a partir da potência, das horas de utilização e do preço da sua eletricidade.",
    metaTitle: "Calculadora de custo de eletricidade – Consumo de aparelhos",
    metaDescription:
      "Calcule a energia consumida em kWh e o custo de funcionamento de qualquer aparelho por dia, num período e por ano, a partir da potência e da sua tarifa.",
    keywords: ["custo da eletricidade", "consumo elétrico", "calcular consumo kWh", "consumo de eletrodomésticos", "preço do kWh", "fatura da luz", "watts"],
    intro: [
      "A eletricidade é faturada ao quilowatt-hora (kWh): o consumo de 1000 watts durante uma hora. Multiplique a energia consumida pelo preço do kWh para obter o custo.",
      "Encontra a potência na etiqueta do aparelho e o preço na sua fatura da eletricidade.",
    ],
    howToUse: [
      "Introduza a potência nominal em watts.",
      "Introduza quantas horas por dia funciona e durante quantos dias.",
      "Introduza o preço por kWh.",
      "Consulte o custo e a energia consumida.",
    ],
    formulas: [
      { title: "Energia", expression: "kWh = watts × horas por dia × dias ÷ 1000", explanation: "Converte watts-hora em quilowatts-hora." },
      { title: "Custo", expression: "custo = kWh × preço por kWh", explanation: "Use o preço da energia da sua tarifa." },
    ],
    examples: [
      {
        title: "Um aparelho de 100 W, 5 horas por dia durante 30 dias a 0,15 US$/kWh",
        steps: ["100 × 5 × 30 ÷ 1000 = 15 kWh", "15 × 0,15 US$ = 2,25 US$"],
      },
      {
        title: "Um aquecedor de 1500 W, 1 hora por dia durante 30 dias a 0,20 US$/kWh",
        steps: ["1500 × 1 × 30 ÷ 1000 = 45 kWh", "45 × 0,20 US$ = 9,00 US$"],
      },
    ],
    assumptions: [
      "Pressupõe que o aparelho consome toda a sua potência nominal enquanto está ligado. Termóstatos, ciclos de funcionamento e cargas variáveis consomem normalmente menos.",
      "Não estão incluídos encargos fixos, impostos, tarifas bi-horárias ou o consumo em modo de espera.",
      "Escolher uma moeda altera apenas a formatação.",
    ],
    faqs: [
      { question: "O que é um quilowatt-hora?", answer: "A energia consumida por um aparelho de 1000 watts a funcionar durante uma hora." },
      {
        question: "Onde encontro a potência de um aparelho?",
        answer: "Na placa de características ou no manual. Se só aparecerem os amperes, multiplique-os pela tensão para obter uma potência aproximada.",
      },
      {
        question: "Como posso reduzir o custo de funcionamento?",
        answer: "Use aparelhos eficientes, reduza as horas de utilização e verifique se a sua tarifa tem preços mais baratos nas horas de vazio.",
      },
    ],
    sourcesUsedFor: ["Definição de watt e de quilowatt-hora, e a forma como o consumo de eletricidade é faturado."],
  },
  text: {
    power: "Potência nominal",
    powerHelp: "Consta da etiqueta, por exemplo 100 W. 1 kW equivale a 1000 W.",
    hours: "Utilização diária",
    days: "Número de dias",
    rate: "Preço da eletricidade por kWh",
    cost: "Custo durante {days} dias",
    energy: "Energia consumida",
    perDay: "Custo por dia",
    perYear: "Custo anual (365 dias)",
    note: "Pressupõe que o aparelho consome a sua potência nominal sempre que está ligado. A utilização real varia muitas vezes e o consumo em modo de espera não está incluído.",
  },
};

export default pt;
