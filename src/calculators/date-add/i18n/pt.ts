import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DateAddText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const pt: CalculatorTranslation<DateAddText> = {
  content: {
    title: "Calculadora para somar ou subtrair dias",
    shortTitle: "Somar ou subtrair dias",
    summary: "Calcule a data que fica um número de anos, meses, semanas e dias antes ou depois de uma data de início, com o dia da semana e os dias de calendário entre as duas.",
    metaTitle: "Calculadora para somar ou subtrair dias – Data mais dias",
    metaDescription:
      "Some ou subtraia anos, meses, semanas e dias a qualquer data. Veja a data resultante, o dia da semana e quantos dias de calendário há entre as datas.",
    keywords: ["somar dias a uma data", "subtrair dias a uma data", "calculadora de datas", "dias a partir de hoje", "data mais dias", "somar meses a uma data", "calcular prazos"],
    intro: [
      "Os prazos, os pré-avisos, as garantias e as datas de vencimento são muitas vezes expressos como «90 dias a partir de» ou «6 meses depois de» uma data. Esta calculadora encontra essa data por si, para a frente ou para trás.",
      "Indica-lhe também o dia da semana e quantos dias de calendário separam a data de início do resultado, o que é útil quando um prazo é fixado em meses mas precisa do número de dias.",
    ],
    howToUse: [
      "Escolha a data de início. Ao carregar a página, fica definida como hoje.",
      "Escolha Somar para avançar no tempo ou Subtrair para recuar.",
      "Introduza qualquer combinação de anos, meses, semanas e dias. Deixe o resto a 0.",
      "Consulte a data resultante com o seu dia da semana e o número de dias entre as duas datas.",
    ],
    formulas: [
      {
        title: "Anos e meses",
        expression: "data₁ = início ± (12 × anos + meses) meses",
        explanation: "Muda o mês e o dia mantém-se. Se esse dia não existir no novo mês, usa-se o último dia do mês.",
      },
      { title: "Semanas e dias", expression: "resultado = data₁ ± (7 × semanas + dias) dias", explanation: "Depois contam-se os dias inteiros no calendário, atravessando finais de mês e de ano conforme necessário." },
      { title: "Dias entre datas", expression: "N = |resultado − início| em dias de calendário", explanation: "A data de início não é contada, pelo que um dia depois de segunda-feira é terça-feira e N = 1." },
    ],
    examples: [
      {
        title: "Um mês depois de 31 de janeiro de 2026",
        steps: ["Fevereiro de 2026 tem 28 dias, por isso 31 de fevereiro não existe", "A data passa para o último dia de fevereiro: 28 de fevereiro de 2026, um sábado", "São 28 dias de calendário depois da data de início"],
      },
      {
        title: "Um prazo de 90 dias a partir de 15 de outubro de 2026",
        steps: ["Faltam 16 dias de outubro, depois 30 de novembro e 31 de dezembro: 77 dias até 31 de dezembro", "Mais 13 dias chegam a 13 de janeiro de 2027", "13 de janeiro de 2027 é uma quarta-feira"],
      },
      {
        title: "Dois anos e meio antes de 15 de agosto de 2024",
        steps: ["2 anos e 6 meses = 30 meses", "30 meses antes de agosto de 2024 é fevereiro de 2022, e o dia 15 existe em todos os meses", "15 de fevereiro de 2022 foi uma terça-feira, 912 dias de calendário antes"],
      },
    ],
    assumptions: [
      "As datas seguem o calendário gregoriano, também para os anos anteriores à sua adoção em cada país.",
      "Os anos e os meses são aplicados antes das semanas e dos dias. Quando o dia de início não existe no mês de destino, usa-se o último dia desse mês, pelo que 31 de março menos 1 mês é 28 ou 29 de fevereiro.",
      "Contam todos os dias, incluindo fins de semana e feriados. As regras de dias úteis para prazos legais ou contratuais podem ser diferentes.",
      "Os resultados estão limitados aos anos de 1000 a 9999.",
    ],
    faqs: [
      {
        question: "Porque é que somar um mês a 31 de janeiro dá 28 de fevereiro?",
        answer: "Fevereiro não tem dia 31, por isso a calculadora usa o último dia de fevereiro em vez de passar para março. Esta regra de fim de mês é a convenção habitual para prazos mensais.",
      },
      {
        question: "Somar 1 mês é o mesmo que somar 30 dias?",
        answer: "Não. Um mês é um mês de calendário, que pode ter de 28 a 31 dias. Se precisar de um número exato de dias, introduza-o no campo Dias.",
      },
      {
        question: "A contagem inclui a data de início?",
        answer: "Não. O valor de dias entre datas conta os dias que avança, pelo que a própria data de início não é incluída. Some 1 se quiser contar tanto o primeiro como o último dia.",
      },
    ],
    sourcesUsedFor: ["A regra dos anos bissextos do calendário gregoriano, usada para a duração dos meses e a contagem de dias."],
  },
  text: {
    start: "Data de início",
    startHelp: "Hoje, por predefinição.",
    operation: "Operação",
    operations: { add: "Somar", subtract: "Subtrair" },
    years: "Anos",
    months: "Meses",
    monthsHelp: "Os anos e os meses são aplicados primeiro. Se o dia não existir no novo mês, usa-se o último dia desse mês (31 de janeiro + 1 mês = 28 ou 29 de fevereiro).",
    weeks: "Semanas",
    days: "Dias",
    errors: {
      outOfRange: "O resultado fica fora das datas suportadas ({min} a {max}). Use uma quantidade menor.",
    },
    result: "Data resultante",
    captionAdd: "{start} mais {amount}.",
    captionSubtract: "{start} menos {amount}.",
    units: {
      years: forms("{n} ano", "{n} anos"),
      months: forms("{n} mês", "{n} meses"),
      weeks: forms("{n} semana", "{n} semanas"),
      days: forms("{n} dia", "{n} dias"),
    },
    separator: ", ",
    weekday: "Dia da semana",
    weekdayNames: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
    totalDays: "Dias de calendário entre as datas",
    inWeeks: "Em semanas e dias",
    weeksDays: "{weeks} e {days}",
    isoDate: "Resultado em formato ISO",
    notes: {
      clamped: "O dia de início não existe no mês de destino, por isso foi usado o último dia desse mês.",
      calendar: "As datas usam o calendário gregoriano, com anos bissextos de 4 em 4 anos, exceto os anos de fim de século não divisíveis por 400.",
    },
  },
};

export default pt;
