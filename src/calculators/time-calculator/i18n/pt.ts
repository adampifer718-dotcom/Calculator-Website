import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TimeCalculatorText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const pt: CalculatorTranslation<TimeCalculatorText> = {
  content: {
    title: "Calculadora de tempo e durações",
    shortTitle: "Tempo",
    summary:
      "Some ou subtraia duas durações em dias, horas, minutos e segundos e veja o resultado normalizado, com os totais em horas, minutos e segundos.",
    metaTitle: "Calculadora de tempo – Somar ou subtrair horas e minutos",
    metaDescription:
      "Some ou subtraia durações em dias, horas, minutos e segundos. Obtenha um resultado normalizado e o total em horas decimais, minutos e segundos.",
    keywords: ["calculadora de tempo", "somar horas e minutos", "subtrair tempo", "calculadora de durações", "horas minutos segundos", "total de horas", "soma de tempos"],
    intro: [
      "Somar tempos à mão é complicado porque não funciona em dezenas: 60 segundos fazem um minuto, 60 minutos uma hora e 24 horas um dia. Esta calculadora faz o transporte por si.",
      "Introduza duas durações, escolha se pretende somá-las ou subtraí-las e consulte o resultado em dias, horas, minutos e segundos, bem como o mesmo valor num único total em horas, minutos ou segundos.",
    ],
    howToUse: [
      "Introduza a primeira duração. Preencha apenas as partes de que precisa e deixe as outras a 0.",
      "Escolha Somar ou Subtrair.",
      "Introduza a segunda duração.",
      "Consulte o resultado normalizado. Os totais por baixo são práticos para folhas de horas e folhas de cálculo que precisam de horas decimais.",
    ],
    formulas: [
      {
        title: "Duração em segundos",
        expression: "T = dias × 86 400 + horas × 3600 + minutos × 60 + segundos",
        explanation: "Cada duração é primeiro convertida em segundos.",
      },
      { title: "Resultado", expression: "R = T₁ + T₂   ou   R = T₁ − T₂", explanation: "Um R negativo significa que a segunda duração é mais longa do que a primeira." },
      {
        title: "Normalização",
        expression: "dias = ⌊|R| ÷ 86 400⌋, horas = ⌊resto ÷ 3600⌋, minutos = ⌊resto ÷ 60⌋, segundos = o que sobra",
        explanation: "O resto de cada passo passa para a unidade imediatamente inferior.",
      },
    ],
    examples: [
      {
        title: "Duas sessões de trabalho num dia",
        steps: [
          "7 h 45 min = 27 900 s e 2 h 30 min = 9000 s",
          "27 900 + 9000 = 36 900 s",
          "36 900 s = 10 horas e 900 s = 10 horas e 15 minutos (10,25 horas)",
        ],
      },
      {
        title: "Tempo que falta num trabalho de 3 dias e 4 horas após 1 dia e 20,5 horas",
        steps: [
          "3 d 4 h = 273 600 s; 1 d 20 h 30 min = 160 200 s",
          "273 600 − 160 200 = 113 400 s",
          "113 400 s = 1 dia (86 400 s) + 27 000 s = 1 dia, 7 horas e 30 minutos",
        ],
      },
      {
        title: "Somar dois tempos de volta",
        steps: [
          "48 min 37 s = 2917 s e 51 min 52 s = 3112 s",
          "2917 + 3112 = 6029 s",
          "6029 s = 1 hora (3600 s) + 2429 s = 1 hora, 40 minutos e 29 segundos",
        ],
      },
    ],
    assumptions: [
      "Cada dia tem exatamente 24 horas, cada hora 60 minutos e cada minuto 60 segundos. Os segundos intercalares e as mudanças de hora de verão são ignorados.",
      "Esta ferramenta trabalha com intervalos de tempo, e não com horas do relógio nem datas. Para contar os dias entre duas datas, use a calculadora de dias entre datas.",
      "As frações de segundo são mantidas ao milissegundo mais próximo.",
    ],
    faqs: [
      {
        question: "Como converto minutos em horas decimais?",
        answer:
          "Divida os minutos por 60. Por exemplo, 45 minutos são 45 ÷ 60 = 0,75 horas, pelo que 7 horas e 45 minutos são 7,75 horas. A calculadora mostra-lhe este total.",
      },
      {
        question: "Posso introduzir mais de 60 minutos?",
        answer: "Sim. Introduza, por exemplo, 135 minutos e o resultado é convertido em 2 horas e 15 minutos.",
      },
      {
        question: "O que significa um resultado negativo?",
        answer:
          "Quando subtrai uma duração mais longa a uma mais curta, a diferença fica abaixo de zero. O resultado é apresentado com um sinal de menos, para que veja quanto mais longa é a segunda duração.",
      },
    ],
    sourcesUsedFor: ["O minuto (60 s), a hora (3600 s) e o dia (86 400 s) como unidades aceites para uso com o SI."],
  },
  text: {
    fieldLabels: {
      first: { days: "Dias (primeira duração)", hours: "Horas (primeira duração)", minutes: "Minutos (primeira duração)", seconds: "Segundos (primeira duração)" },
      second: { days: "Dias (segunda duração)", hours: "Horas (segunda duração)", minutes: "Minutos (segunda duração)", seconds: "Segundos (segunda duração)" },
    },
    partsHelp: "Deixe uma parte a 0 se não precisar dela. São aceites valores acima de 24 horas, 60 minutos ou 60 segundos, que passam para a unidade seguinte.",
    operation: "Operação",
    operations: { add: "Somar (+)", subtract: "Subtrair (−)" },
    operationHelp: "Ao subtrair, a segunda duração é retirada da primeira. O resultado é negativo quando a segunda é mais longa.",
    result: "Resultado",
    caption: "{first} {op} {second}.",
    opSymbols: { add: "+", subtract: "−" },
    units: {
      days: forms("{n} dia", "{n} dias"),
      hours: forms("{n} hora", "{n} horas"),
      minutes: forms("{n} minuto", "{n} minutos"),
      seconds: forms("{n} segundo", "{n} segundos"),
    },
    separator: ", ",
    negative: "−{duration}",
    totalDays: "Total em dias",
    totalHours: "Total em horas",
    totalMinutes: "Total em minutos",
    totalSeconds: "Total em segundos",
    notes: {
      negative: "A segunda duração é mais longa do que a primeira, pelo que o resultado é negativo.",
      days: "Um dia conta como exatamente 24 horas. Não estão incluídas as mudanças de hora de verão nem os segundos intercalares.",
      rounding: "O resultado é arredondado à milésima de segundo mais próxima.",
    },
  },
};

export default pt;
