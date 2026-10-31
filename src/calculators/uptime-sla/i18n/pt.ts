import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { UptimeSlaText } from "../text/en";

const pt: CalculatorTranslation<UptimeSlaText> = {
  content: {
    title: "Calculadora de disponibilidade e SLA",
    shortTitle: "Disponibilidade / SLA",
    summary:
      "Converta uma percentagem de SLA em tempo de inatividade permitido por dia, semana, mês e ano, calcule a disponibilidade alcançada a partir da inatividade real ou combine componentes em série ou em paralelo.",
    metaTitle: "Disponibilidade e SLA – Inatividade permitida e noves",
    metaDescription:
      "Converta um SLA como 99,9 % em inatividade permitida por dia, semana, mês e ano, meça a disponibilidade alcançada e combine componentes em série ou redundantes.",
    keywords: ["calculadora de disponibilidade", "calculadora SLA", "tempo de inatividade permitido", "disponibilidade 99,9", "noves de disponibilidade", "SLA composto", "uptime"],
    intro: [
      "Um acordo de nível de serviço (SLA) promete muitas vezes uma disponibilidade como 99,9 %, os «três noves». Parece quase perfeito, mas ainda permite cerca de 43 minutos de inatividade por mês. Ver a margem em tempo torna os objetivos mais fáceis de comparar e de planear manutenções.",
      "Esta calculadora converte um objetivo de disponibilidade em tempo de inatividade permitido por dia, semana, mês e ano; calcula a disponibilidade realmente alcançada a partir da inatividade medida; e combina as disponibilidades de vários componentes que dependem uns dos outros (em série) ou que se substituem mutuamente (em paralelo).",
    ],
    howToUse: [
      "Escolha o que pretende calcular.",
      "Para a inatividade permitida, introduza a percentagem do SLA. A margem mensal é apresentada primeiro, seguida de uma tabela para cada período.",
      "Para a disponibilidade alcançada, introduza a duração do período de medição e a inatividade total nesse período.",
      "Para vários componentes, indique as suas disponibilidades em percentagem e escolha se todos têm de funcionar (série) ou se basta um (paralelo).",
    ],
    formulas: [
      {
        title: "Inatividade permitida",
        expression: "inatividade = (1 − A) × período",
        explanation: "A é a disponibilidade em fração (99,9 % = 0,999). Um ano tem 365 dias e um mês 365 ÷ 12 = 30,42 dias.",
      },
      {
        title: "Disponibilidade alcançada",
        expression: "A = 1 − inatividade ÷ período",
        explanation: "Os dois tempos têm de estar na mesma unidade; a calculadora faz a conversão.",
      },
      {
        title: "Número de noves",
        expression: "noves = −log₁₀(1 − A)",
        explanation: "99,9 % dá 3 noves e 99,95 % cerca de 3,3. Não está definido para 100 %.",
      },
      {
        title: "Componentes em série",
        expression: "A = A₁ × A₂ × … × Aₙ",
        explanation: "Todos os componentes têm de estar disponíveis, pelo que a disponibilidade combinada fica abaixo da do componente mais fraco.",
      },
      {
        title: "Componentes em paralelo",
        expression: "A = 1 − (1 − A₁) × (1 − A₂) × … × (1 − Aₙ)",
        explanation: "O sistema só fica indisponível quando todos os componentes redundantes estão indisponíveis ao mesmo tempo.",
      },
    ],
    examples: [
      {
        title: "Inatividade mensal permitida por um SLA de 99,9 %",
        steps: ["Um mês tem 365 × 86 400 ÷ 12 = 2 628 000 segundos", "Inatividade permitida = (1 − 0,999) × 2 628 000 = 2628 s", "2628 s = 43 min 48 s"],
      },
      {
        title: "25 minutos de inatividade num mês de 30 dias",
        steps: ["Período = 30 × 1440 = 43 200 min", "Fração de inatividade = 25 ÷ 43 200 ≈ 0,0579 %", "Disponibilidade = 100 % − 0,0579 % ≈ 99,94213 %"],
      },
      {
        title: "Dois servidores redundantes com 99,9 % cada",
        steps: [
          "Cada servidor está indisponível 0,1 % do tempo",
          "Ambos estão indisponíveis em simultâneo 0,001 × 0,001 = 0,000001 do tempo",
          "Disponibilidade = 1 − 0,000001 = 99,9999 %, ou seja, 6 noves",
        ],
      },
    ],
    assumptions: [
      "Considera-se que um ano tem 365 dias e um mês um doze avos do ano (cerca de 30,42 dias). Os contratos podem usar meses de calendário, meses de 30 dias ou anos de 365,25 dias, o que altera ligeiramente a margem.",
      "Muitos SLA excluem a manutenção planeada e só contam alguns tipos de falha. Verifique as definições do contrato antes de comparar valores.",
      "As disponibilidades combinadas pressupõem que os componentes falham de forma independente. Alimentação elétrica, redes, versões de software ou fornecedores partilhados tornam os sistemas reais menos disponíveis do que as fórmulas indicam.",
    ],
    faqs: [
      {
        question: "Quanta inatividade permite 99,99 %?",
        answer:
          "Cerca de 52 minutos e 34 segundos por ano de 365 dias, ou 4 minutos e 23 segundos por mês de 365 ÷ 12 dias. Cada nove adicional divide a margem por 10.",
      },
      {
        question: "Porque é que uma cadeia de serviços fiáveis é menos fiável do que cada um deles?",
        answer:
          "Quando um pedido precisa de todos os serviços da cadeia, a falha de qualquer um deles causa uma interrupção. As disponibilidades multiplicam-se: três serviços a 99,9 % dão cerca de 99,7 % em conjunto, o que corresponde a cerca do triplo da inatividade de um só.",
      },
      {
        question: "Acrescentar um segundo servidor duplica os noves?",
        answer:
          "No caso ideal, sim: dois servidores independentes a 99,9 % dão 99,9999 %. Na prática, o balanceador de carga, a base de dados e as causas de falha partilhadas mantêm-se, pelo que o ganho real é menor.",
      },
    ],
    sourcesUsedFor: [
      "A disponibilidade baseada no tempo como tempo disponível ÷ (tempo disponível + inatividade), e a inatividade que um objetivo de disponibilidade permite por período.",
      "A combinação de disponibilidades: o produto para componentes em série e um menos o produto das indisponibilidades para componentes redundantes.",
      "Cálculos resolvidos de disponibilidade em série e em paralelo, e o pressuposto de que as falhas são independentes.",
    ],
  },
  text: {
    mode: "O que pretende calcular?",
    modes: {
      allowed: "Inatividade permitida por um SLA",
      achieved: "Disponibilidade a partir da inatividade",
      composite: "Disponibilidade de vários componentes",
    },
    sla: "Objetivo de disponibilidade (SLA)",
    slaHelp: "A disponibilidade prometida em percentagem, por exemplo 99,9 para «três noves».",
    periodLength: "Período de medição",
    periodUnit: "Unidade do período",
    downtime: "Inatividade no período",
    downtimeUnit: "Unidade da inatividade",
    timeUnits: { s: "Segundos", min: "Minutos", h: "Horas", d: "Dias", w: "Semanas", mo: "Meses (365 ÷ 12 dias)", y: "Anos (365 dias)" },
    components: "Disponibilidades dos componentes (%)",
    componentsHelp: "Uma disponibilidade por componente, separadas por ponto e vírgula, espaços ou mudanças de linha, por exemplo 99,95; 99,9; 99,99.",
    topology: "Como estão ligados os componentes?",
    topologies: {
      serial: "Em série (todos têm de funcionar)",
      parallel: "Em paralelo (basta um)",
    },
    errors: {
      empty: "Introduza pelo menos uma disponibilidade.",
      tooMany: "Introduza no máximo {max} disponibilidades.",
      notNumber: "«{token}» não é um número. Use a vírgula decimal e separe os valores com ponto e vírgula, espaços ou mudanças de linha.",
      tooLarge: "«{token}» é demasiado grande.",
      outOfRange: "{value} não é uma disponibilidade válida. Cada valor tem de estar entre 0 e 100 %.",
      downtimeTooLong: "A inatividade não pode ser superior ao período de medição.",
    },
    allowedMonth: "Inatividade permitida por mês",
    achievedAvailability: "Disponibilidade alcançada",
    compositeAvailability: "Disponibilidade combinada",
    captionAllowed: "Com {sla} de disponibilidade e um mês de 365 ÷ 12 dias.",
    captionAchieved: "{downtime} de inatividade em {period}.",
    captionComposite: "{count} {topology}.",
    componentCount: {
      zero: "{n} componentes",
      one: "{n} componente",
      two: "{n} componentes",
      few: "{n} componentes",
      many: "{n} componentes",
      other: "{n} componentes",
    },
    topologyCaption: { serial: "em série", parallel: "em paralelo" },
    nines: "Número de noves",
    downtimeYear: "Inatividade permitida por ano",
    downtimeYearHours: "Inatividade permitida por ano em horas",
    downtimeFraction: "Inatividade em fração do período",
    uptime: "Tempo disponível no período",
    equivalentMonth: "Mesma taxa de inatividade por mês",
    equivalentYear: "Mesma taxa de inatividade por ano",
    serialValue: "Disponibilidade combinada em série",
    parallelValue: "Disponibilidade combinada em paralelo",
    weakest: "Disponibilidade mais baixa dos componentes",
    table: {
      caption: "Inatividade permitida por período",
      period: "Período",
      downtime: "Inatividade permitida",
      uptime: "Tempo disponível exigido",
    },
    periods: { day: "Dia", week: "Semana", month: "Mês (365 ÷ 12 dias)", year: "Ano (365 dias)" },
    duration: {
      d: "{n} d",
      h: "{n} h",
      min: "{n} min",
      s: "{n} s",
      pair: "{a} {b}",
    },
    notes: {
      periods:
        "Considera-se que um ano tem 365 dias e um mês um doze avos disso (30,42 dias). Os contratos podem definir o período de outra forma, por exemplo como mês de calendário, e muitas vezes excluem a manutenção planeada.",
      hundred: "Uma disponibilidade de 100 % não permite qualquer inatividade, pelo que o número de noves não está definido.",
      zero: "Sem inatividade, a disponibilidade é de 100 % e o número de noves não está definido.",
      independent:
        "Estas fórmulas pressupõem que os componentes falham de forma independente. Dependências partilhadas, como uma única fonte de alimentação ou uma alteração de configuração, tornam a disponibilidade real inferior à calculada.",
      parallelHelp:
        "Em paralelo, o sistema só fica indisponível quando todos os componentes estão indisponíveis ao mesmo tempo, pelo que a redundância aumenta a disponibilidade.",
      serialHelp:
        "Em série, o sistema fica indisponível quando qualquer componente está indisponível, pelo que a disponibilidade combinada é inferior à do componente mais fraco.",
      allDown: "Pelo menos um componente tem 0 % de disponibilidade, pelo que um sistema em série nunca está disponível.",
    },
  },
};

export default pt;
