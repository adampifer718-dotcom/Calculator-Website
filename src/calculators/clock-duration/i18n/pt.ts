import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ClockDurationText } from "../text/en";

const pt: CalculatorTranslation<ClockDurationText> = {
  content: {
    title: "Calculadora de horas",
    shortTitle: "Horas",
    summary: "Conte as horas e os minutos entre uma hora de início e uma hora de fim, descontando uma pausa não remunerada, incluindo turnos noturnos, com horas decimais e remuneração opcional.",
    metaTitle: "Calculadora de horas – Tempo entre duas horas do relógio",
    metaDescription:
      "Calcule as horas entre duas horas do relógio, descontando pausas, mesmo após a meia-noite. Obtenha h:mm, horas decimais para a folha de horas e a remuneração.",
    keywords: ["calculadora de horas", "horas de trabalho", "calcular horas trabalhadas", "tempo entre duas horas", "folha de horas", "horas decimais", "turno noturno", "calculadora de turnos"],
    intro: [
      "Quanto dura um turno das 9:00 às 17:30 com meia hora de almoço? Contar as horas à mão é fácil de errar, sobretudo quando o turno termina depois da meia-noite ou quando precisa do total em horas decimais para uma folha de horas.",
      "Escreva uma hora de início e uma hora de fim no formato de 24 horas ou com am/pm, acrescente qualquer pausa não remunerada e esta calculadora mostra o tempo trabalhado em horas e minutos, em horas decimais e em minutos totais. Introduza um valor por hora para ver a remuneração do turno.",
    ],
    howToUse: [
      "Escreva a hora de início, por exemplo 9:00, 09:00 ou 9 am.",
      "Escreva a hora de fim. Se for anterior à de início, considera-se que o turno termina no dia seguinte.",
      "Introduza a pausa não remunerada em minutos, ou 0 se não houver.",
      "Se quiser, escolha uma moeda e introduza o seu valor por hora.",
      "Consulte o tempo trabalhado, as horas decimais para a sua folha de horas e a remuneração.",
    ],
    formulas: [
      { title: "Intervalo entre as horas", expression: "intervalo = fim − início   (some 24 h se fim ≤ início)", explanation: "As duas horas são primeiro convertidas em minutos após a meia-noite." },
      { title: "Tempo trabalhado", expression: "trabalhado = intervalo − pausa", explanation: "A pausa não remunerada é subtraída ao intervalo." },
      { title: "Horas decimais e remuneração", expression: "horas decimais = minutos trabalhados ÷ 60\nremuneração = horas decimais × valor por hora", explanation: "Por exemplo, 7 h 30 min correspondem a 450 ÷ 60 = 7,5 horas." },
    ],
    examples: [
      { title: "Um dia das 9:00 às 17:30 com 30 minutos de almoço", steps: ["9:00 = 540 min e 17:30 = 1050 min após a meia-noite", "Intervalo = 1050 − 540 = 510 min", "Trabalhado = 510 − 30 = 480 min = 8:00, ou seja, 8 horas decimais"] },
      { title: "Um turno noturno das 22:00 às 6:15 com 45 minutos de pausa, a 18,50 US$ por hora", steps: ["6:15 é anterior a 22:00, pelo que o turno passa a meia-noite: 375 + 1440 − 1320 = 495 min", "Trabalhado = 495 − 45 = 450 min = 7:30, ou seja, 7,5 horas", "Remuneração = 7,5 × 18,50 US$ = 138,75 US$"] },
      { title: "Uma manhã das 8:45 às 12:10 sem pausa", steps: ["8:45 = 525 min e 12:10 = 730 min", "Trabalhado = 730 − 525 = 205 min", "205 min = 3:25, ou seja, cerca de 3,42 horas decimais"] },
    ],
    assumptions: [
      "Um turno dura menos de 24 horas. Se a hora de fim for igual ou anterior à hora de início, considera-se que é no dia seguinte.",
      "As mudanças de hora (horário de verão) durante o turno são ignoradas, pelo que um turno noturno que inclua uma fica errado em uma hora.",
      "A remuneração é uma estimativa simples do valor bruto: horas × valor por hora. Não inclui acréscimos por trabalho suplementar, impostos nem as regras de arredondamento do seu empregador. Para as horas extraordinárias semanais, use a Calculadora de horas extraordinárias.",
    ],
    faqs: [
      { question: "Como converto horas e minutos em horas decimais?", answer: "Divida os minutos por 60 e some-os às horas. 7 horas e 30 minutos são 7 + 30 ÷ 60 = 7,5 horas, e 3 horas e 25 minutos são cerca de 3,42 horas." },
      { question: "Como introduzo um turno que termina depois da meia-noite?", answer: "Basta escrever a hora de fim real, como 6:15 ou 6:15 am. Quando a hora de fim é anterior à hora de início, a calculadora soma 24 horas e mostra uma nota." },
      { question: "Que formatos de hora posso escrever?", answer: "Horas no formato de 24 horas, como 9:30, 09:30 ou 21:30, e horas no formato de 12 horas com am ou pm, como 9:30 pm, 9 pm ou 9 am. Os minutos, quando indicados, precisam de dois algarismos." },
    ],
    sourcesUsedFor: ["A hora (60 minutos) e o minuto (60 segundos) usados para converter entre horas do relógio e horas decimais."],
  },
  text: {
    start: "Hora de início",
    end: "Hora de fim",
    timeHelp: "Escreva uma hora no formato de 24 horas, como 9:30, 09:30 ou 21:30, ou no formato de 12 horas com am/pm, como 9:30 pm ou 9 am.",
    breakMinutes: "Pausa não remunerada",
    breakHelp: "Tempo total de pausa não remunerada em minutos, como a pausa para almoço. Introduza 0 se não houver.",
    rate: "Valor por hora (opcional)",
    rateHelp: "Deixe em branco se só precisar das horas.",
    errors: {
      format: "Introduza uma hora como 9:30, 21:30, 9:30 pm ou 9 am.",
      hour24: "A hora tem de estar entre 0 e 23.",
      hour12: "Com am ou pm, a hora tem de estar entre 1 e 12.",
      minute: "Os minutos têm de estar entre 00 e 59.",
      breakTooLong: "A pausa tem de ser mais curta do que o tempo entre o início e o fim ({span}).",
    },
    worked: "Tempo trabalhado",
    caption: "Das {start} às {end}, menos {break} min de pausa",
    decimalHours: "Horas decimais",
    totalMinutes: "Minutos totais",
    span: "Tempo entre o início e o fim",
    pay: "Remuneração deste turno",
    notes: {
      overnight: "A hora de fim não é posterior à hora de início, pelo que se considera que o turno passa a meia-noite e termina no dia seguinte (somam-se 24 horas).",
      fullDay: "O início e o fim são iguais, pelo que se conta um intervalo completo de 24 horas.",
      rounding: "A remuneração é horas decimais × valor por hora, antes de impostos, acréscimos por trabalho suplementar ou regras de arredondamento que o seu empregador possa aplicar.",
    },
  },
};

export default pt;
