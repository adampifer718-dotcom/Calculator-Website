import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DateDurationText } from "../text/en";

const years = { zero: "{n} anos", one: "{n} ano", two: "{n} anos", few: "{n} anos", many: "{n} anos", other: "{n} anos" };
const months = { zero: "{n} meses", one: "{n} mês", two: "{n} meses", few: "{n} meses", many: "{n} meses", other: "{n} meses" };
const weeks = { zero: "{n} semanas", one: "{n} semana", two: "{n} semanas", few: "{n} semanas", many: "{n} semanas", other: "{n} semanas" };
const days = { zero: "{n} dias", one: "{n} dia", two: "{n} dias", few: "{n} dias", many: "{n} dias", other: "{n} dias" };

const pt: CalculatorTranslation<DateDurationText> = {
  content: {
    title: "Calculadora de dias entre datas",
    shortTitle: "Dias entre datas",
    summary: "Conte os dias, semanas, meses e anos entre duas datas, incluindo os dias úteis e os de fim de semana.",
    metaTitle: "Dias entre datas – Calcule a duração entre duas datas",
    metaDescription:
      "Conte os dias entre duas datas e obtenha a duração em anos, meses e dias, em semanas e em dias úteis e de fim de semana. Inclua a data final, se quiser.",
    keywords: ["dias entre datas", "calcular dias entre duas datas", "diferença entre datas", "quantos dias faltam", "contar dias", "dias úteis entre datas", "semanas entre datas"],
    intro: [
      "Descubra quantos dias há entre duas datas, seja para um prazo, um período de pré-aviso, uma viagem ou uma contagem decrescente.",
      "O resultado é também apresentado em anos, meses e dias, em semanas e em dias úteis e de fim de semana. Escolha se a própria data final é contada.",
    ],
    howToUse: [
      "Introduza a data de início.",
      "Introduza a data final (hoje, por predefinição).",
      "Escolha se a data final conta como um dia completo.",
      "Consulte o número de dias e as restantes decomposições.",
    ],
    formulas: [
      { title: "Dias entre datas", expression: "Dias = data final − data de início (+ 1 se a data final for contada)", explanation: "Dias de calendário, incluindo o 29 de fevereiro dos anos bissextos." },
      { title: "Anos, meses e dias", expression: "Meses completos do calendário desde a data de início, mais os dias restantes", explanation: "Os meses são contados no calendário, pelo que se tem em conta a sua duração (de 28 a 31 dias)." },
      { title: "Dias úteis", expression: "Dias úteis = dias que não são de fim de semana", explanation: "Escolha um fim de semana de sábado e domingo ou de sexta-feira e sábado. Os feriados não são descontados; subtraia-os para obter os dias úteis efetivos." },
    ],
    examples: [
      {
        title: "De 1 de janeiro a 14 de outubro de 2026",
        steps: [
          "31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 dias (de janeiro a setembro) + 13 dias = 286 dias",
          "286 dias = 40 semanas e 6 dias; 9 meses e 13 dias",
          "204 desses dias calham de segunda a sexta-feira",
        ],
      },
      {
        title: "De 1 de fevereiro a 1 de março de 2024, ambas as datas incluídas",
        steps: [
          "2024 é bissexto, por isso fevereiro tem 29 dias",
          "29 dias de 1 de fevereiro a 1 de março, mais a data final = 30 dias",
          "22 dias úteis e 8 dias de fim de semana",
        ],
      },
    ],
    assumptions: [
      "As datas são dias de calendário do calendário gregoriano; não se usam horas do dia nem fusos horários.",
      "Os dias úteis excluem o fim de semana escolhido (sábado e domingo, ou sexta-feira e sábado); os feriados não são excluídos.",
      "As horas são dias × 24 e não têm em conta as mudanças da hora de verão.",
    ],
    faqs: [
      {
        question: "Devo contar a data final?",
        answer: "Não para perguntas do tipo “quanto falta”, como períodos de pré-aviso ou idades. Conte-a quando tanto o primeiro como o último dia fizerem parte do período, como uma estadia num hotel contada em dias ou o programa de um evento.",
      },
      { question: "Como são tratados os anos bissextos?", answer: "É contado cada 29 de fevereiro que exista entre as datas, pelo que os períodos que o incluem têm mais um dia." },
      { question: "Como conto os dias úteis efetivos?", answer: "Use a contagem de dias úteis e subtraia os feriados que calhem em dias de semana no seu país." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    start: "Data de início",
    end: "Data final",
    endHelp: "Hoje, por predefinição.",
    includeEnd: "Contar a data final",
    includeEndOptions: { no: "Não (diferença entre datas)", yes: "Sim (ambas as datas incluídas)" },
    includeEndHelp: "Inclua a data final ao contar os dias de um evento, como um festival de 3 dias de sexta-feira a domingo.",
    units: { years, months, weeks, days },
    ymd: "{years}, {months} e {days}",
    weeksDays: "{weeks} e {days}",
    totalDays: "Duração em dias",
    caption: "De {start} a {end}.",
    calendar: "Em anos, meses e dias",
    inWeeks: "Em semanas e dias",
    weekdays: "Dias úteis",
    weekend: "Fim de semana",
    weekendOptions: { satSun: "Sábado e domingo", friSat: "Sexta-feira e sábado" },
    weekendHelp: "Escolha os dias que o seu país ou o seu local de trabalho considera fim de semana.",
    weekendDays: "Dias de fim de semana",
    hours: "Horas",
    reversed: "A data final é anterior à data de início, por isso as datas foram trocadas.",
    weekdaysNote: "Os dias úteis excluem os dias de fim de semana escolhidos, mas não os feriados.",
    hoursNote: "As horas pressupõem dias de 24 horas; as mudanças da hora de verão não estão incluídas.",
  },
};

export default pt;
