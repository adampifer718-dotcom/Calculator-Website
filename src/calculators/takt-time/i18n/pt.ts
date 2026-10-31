import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TaktTimeText } from "../text/en";

const pt: CalculatorTranslation<TaktTimeText> = {
  content: {
    title: "Calculadora de takt time",
    shortTitle: "Takt time",
    summary:
      "Calcule o takt time, o ritmo de produção necessário para satisfazer a procura dos clientes, a partir da duração do turno, das pausas, dos turnos e da procura, e o número mínimo de operadores.",
    metaTitle: "Takt time – Ritmo de produção por unidade",
    metaDescription:
      "Calcule o takt time pela duração do turno, pausas, turnos por dia e procura, com unidades por hora, operadores mínimos e comparação com o tempo de ciclo.",
    keywords: ["calculadora takt time", "fórmula takt time", "lean manufacturing", "tempo disponível de produção", "procura do cliente", "tempo de ciclo vs takt time", "balanceamento de linha"],
    intro: [
      "O takt time é o ritmo que uma linha de produção tem de manter para produzir exatamente o que os clientes precisam: se os clientes querem 645 unidades por dia com 860 minutos de trabalho, tem de sair uma unidade da linha a cada 80 segundos. A palavra vem do alemão e designa o compasso na música.",
      "Esta calculadora determina o tempo disponível líquido a partir da duração do turno, das pausas, do número de turnos e dos dias úteis, divide-o pela procura e apresenta o takt time em segundos e minutos. Com o conteúdo total de trabalho por unidade estima o número mínimo de operadores e, com um tempo de ciclo medido, mostra se a linha consegue acompanhar o ritmo.",
    ],
    howToUse: [
      "Introduza a duração de um turno em horas e minutos e as pausas planeadas por turno em minutos.",
      "Introduza o número de turnos por dia e o número de dias úteis do período a que se refere a procura.",
      "Introduza a procura dos clientes para esse período.",
      "Se quiser, junte o conteúdo total de trabalho por unidade e o tempo de ciclo real, ambos em segundos, para ver os operadores mínimos e se a linha acompanha o takt.",
    ],
    formulas: [
      {
        title: "Tempo disponível líquido",
        expression: "disponível = (duração do turno − pausas) × turnos por dia × dias",
        explanation: "Em minutos. Só conta o tempo em que a linha deve funcionar.",
      },
      {
        title: "Takt time",
        expression: "takt = tempo disponível ÷ procura dos clientes",
        explanation: "Apresentado em segundos por unidade. As unidades por hora são 3600 ÷ takt.",
      },
      {
        title: "Operadores mínimos",
        expression: "operadores = ⌈conteúdo de trabalho ÷ takt⌉",
        explanation: "O trabalho manual total por unidade dividido pelo takt time, arredondado por excesso a uma pessoa ou posto inteiro.",
      },
    ],
    examples: [
      {
        title: "Dois turnos de 8 horas para 645 unidades por dia",
        steps: ["Disponível = (480 − 50) × 2 × 1 = 860 min = 51 600 s", "Takt = 51 600 ÷ 645 = 80 s por unidade (1:20)", "Operadores = ⌈300 ÷ 80⌉ = ⌈3,75⌉ = 4"],
      },
      {
        title: "Uma procura semanal de 1400 unidades num só turno",
        steps: [
          "Disponível = (450 − 30) × 1 × 5 = 2100 min = 126 000 s",
          "Takt = 126 000 ÷ 1400 = 90 s por unidade",
          "Um ciclo real de 95 s é 5 s mais longo do que o takt, pelo que se conseguem produzir cerca de 1326 unidades em vez de 1400",
        ],
      },
      {
        title: "Um turno de 10 horas para 216 unidades",
        steps: ["Disponível = 600 − 60 = 540 min = 32 400 s", "Takt = 32 400 ÷ 216 = 150 s por unidade, ou 2:30", "Unidades por hora = 3600 ÷ 150 = 24"],
      },
    ],
    assumptions: [
      "O takt time é definido pela procura, e não pelo equipamento. Pressupõe que a procura se distribui uniformemente pelo período.",
      "Só as pausas são retiradas do turno. Inclua nas pausas a manutenção planeada, as reuniões ou o tempo de arranque se a linha não funcionar nesses momentos.",
      "O número mínimo de operadores é um limite inferior. O trabalho desigual, as deslocações e a variação dos tempos das tarefas costumam exigir mais.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre takt time e tempo de ciclo?",
        answer:
          "O takt time é o ritmo que os clientes exigem: o tempo disponível dividido pela procura. O tempo de ciclo é o tempo que o processo realmente leva por unidade. Se o tempo de ciclo for superior ao takt time, a linha não consegue acompanhar sem horas extraordinárias ou alterações.",
      },
      {
        question: "O takt time deve incluir as avarias?",
        answer:
          "Não. O takt time usa o tempo disponível planeado. As paragens não planeadas tornam a linha mais lenta, pelo que o tempo de ciclo tem de ser inferior ao takt para lhes deixar margem. A eficiência global do equipamento (OEE) mede essas perdas.",
      },
      {
        question: "E se a procura mudar durante o mês?",
        answer:
          "Recalcule o takt para cada período com a respetiva procura. Muitas fábricas revêem o takt time semanal ou mensalmente e voltam a distribuir o trabalho entre os postos quando muda muito.",
      },
    ],
    sourcesUsedFor: [
      "A definição de takt time como o tempo de produção disponível dividido pela procura dos clientes.",
      "O tempo disponível líquido depois das pausas e a comparação entre o tempo de ciclo e o takt time.",
    ],
  },
  text: {
    shiftHours: "Duração do turno: horas",
    shiftMinutes: "Duração do turno: minutos",
    breaks: "Pausas por turno",
    breaksHelp: "Pausas planeadas, refeições e reuniões em que a linha não funciona, em minutos por turno.",
    shifts: "Turnos por dia",
    days: "Dias úteis no período",
    daysHelp: "Use 1 para uma procura diária, 5 para uma procura semanal numa semana de cinco dias, e assim por diante.",
    demand: "Procura dos clientes no período",
    demandHelp: "O número de unidades de que os clientes precisam no mesmo período.",
    workContent: "Conteúdo total de trabalho por unidade (opcional)",
    workContentHelp: "A soma de todos os tempos de trabalho manual necessários para fazer uma unidade, em segundos. Dá o número mínimo de operadores ou postos.",
    actualCycle: "Tempo de ciclo real (opcional)",
    actualCycleHelp: "O tempo medido do posto mais lento, em segundos por unidade, para comparar com o takt time.",
    minutes: "min",
    seconds: "s",
    units: "unidades",
    errors: {
      noShift: "Introduza uma duração do turno superior a 0 minutos.",
      breaksTooLong: "As pausas têm de ser mais curtas do que o turno.",
      tooManyHours: "Os turnos somam mais de 24 horas por dia.",
    },
    takt: "Takt time",
    perUnit: "s por unidade",
    caption: "{available} de tempo disponível ÷ {demand}.",
    demandUnits: {
      zero: "{n} unidades",
      one: "{n} unidade",
      two: "{n} unidades",
      few: "{n} unidades",
      many: "{n} unidades",
      other: "{n} unidades",
    },
    minutesText: "{n} min",
    taktClock: "Takt time (m:ss)",
    clockText: "{m}:{ss}",
    clockTextHours: "{h}:{mm}:{ss}",
    unitsPerHour: "Unidades por hora de tempo disponível",
    available: "Tempo disponível líquido no período",
    availablePerShift: "Tempo disponível por turno",
    operators: "Operadores ou postos mínimos",
    capacity: "Unidades possíveis com o tempo de ciclo real",
    gap: "Tempo de ciclo real menos takt time",
    meetsTakt: "A linha consegue acompanhar o takt?",
    verdict: {
      yes: "Sim: o tempo de ciclo está dentro do takt time",
      no: "Não: o tempo de ciclo é superior ao takt time",
    },
    notes: {
      operators:
        "Operadores mínimos = conteúdo de trabalho ÷ takt time, arredondado por excesso ({ratio} → {operators}). As linhas reais costumam precisar de mais, porque o trabalho não pode ser perfeitamente balanceado.",
      slower:
        "Com este tempo de ciclo, a linha produz cerca de {capacity} no período, abaixo da procura de {demand}. As opções incluem encurtar o ciclo, acrescentar um posto ou alargar o tempo disponível.",
      faster: "O tempo de ciclo deixa {gap} de margem por unidade, o que absorve pequenas perturbações.",
      plannedStops:
        "Só as pausas são retiradas do turno. Se também planear manutenção ou reuniões, inclua-as nas pausas para obter um takt time mais realista.",
    },
  },
};

export default pt;
