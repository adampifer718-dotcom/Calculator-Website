import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DueDateText } from "../text/en";

const weeks = { zero: "{n} semanas", one: "{n} semana", two: "{n} semanas", few: "{n} semanas", many: "{n} semanas", other: "{n} semanas" };
const days = { zero: "{n} dias", one: "{n} dia", two: "{n} dias", few: "{n} dias", many: "{n} dias", other: "{n} dias" };

const pt: CalculatorTranslation<DueDateText> = {
  content: {
    title: "Calculadora da data prevista do parto",
    shortTitle: "Data prevista do parto",
    summary:
      "Estime a data prevista do parto a partir da última menstruação, da data de conceção ou de uma transferência de FIV, com a idade gestacional de hoje e as datas dos trimestres.",
    metaTitle: "Calculadora da data prevista do parto – DUM, conceção ou FIV",
    metaDescription:
      "Estime a data prevista do parto a partir do 1.º dia da última menstruação, da conceção ou da transferência de embriões, com idade gestacional e trimestres.",
    keywords: ["data prevista do parto", "calculadora de gravidez", "DPP", "regra de Naegele", "idade gestacional", "data do parto FIV", "semanas de gravidez"],
    intro: [
      "A maioria das gravidezes é datada a partir do primeiro dia da última menstruação, embora a conceção aconteça geralmente cerca de duas semanas depois. Uma gravidez típica dura cerca de 40 semanas, ou 280 dias, a contar dessa data.",
      "Esta calculadora estima a data prevista do parto a partir da última menstruação (ajustada à duração do seu ciclo), de uma data de conceção conhecida ou de uma transferência de embriões em FIV. Mostra também de quantas semanas está grávida numa data à escolha, o trimestre e as datas em que termina cada trimestre.",
    ],
    howToUse: [
      "Escolha a base do cálculo: a última menstruação, a conceção ou uma transferência de FIV.",
      "Introduza a data. Para a última menstruação, introduza também a duração habitual do ciclo; para a FIV, escolha a idade do embrião na transferência.",
      "Mantenha a data de hoje ou escolha outra data para ver a idade gestacional nesse dia.",
      "Consulte a data prevista do parto, a idade gestacional, o trimestre e as datas dos trimestres.",
    ],
    formulas: [
      {
        title: "A partir da última menstruação (regra de Naegele, ajustada ao ciclo)",
        expression: "Data prevista do parto = primeiro dia da última menstruação + 280 dias + (duração do ciclo − 28)",
        explanation: "Para um ciclo de 28 dias, são exatamente 40 semanas. Ciclos mais longos atrasam a ovulação e, por isso, a data prevista do parto.",
      },
      {
        title: "A partir da conceção",
        expression: "Data prevista do parto = data de conceção + 266 dias",
        explanation: "266 dias são 38 semanas, o tempo habitual entre a fecundação e o nascimento.",
      },
      {
        title: "A partir de uma transferência de FIV",
        expression: "Data prevista do parto = data da transferência + 266 dias − idade do embrião (3 ou 5 dias)",
        explanation: "O embrião já tinha 3 ou 5 dias desde a fecundação quando foi transferido.",
      },
      {
        title: "Idade gestacional",
        expression: "Idade gestacional = data − (data prevista do parto − 280 dias), em semanas e dias",
        explanation: "Contada a partir da data que teria sido o primeiro dia da última menstruação, a convenção clínica habitual.",
      },
    ],
    examples: [
      {
        title: "Última menstruação a 1 de junho de 2026, ciclo de 28 dias",
        steps: [
          "1 de junho de 2026 + 280 dias = 8 de março de 2027",
          "A 24 de outubro de 2026: 145 dias = 20 semanas e 5 dias",
          "Corresponde ao segundo trimestre (14 semanas e 0 dias a 27 semanas e 6 dias)",
        ],
      },
      {
        title: "Última menstruação a 10 de março de 2026, ciclo de 32 dias",
        steps: [
          "10 de março de 2026 + 280 + (32 − 28) = 284 dias = 19 de dezembro de 2026",
          "A datação começa então a 14 de março de 2026 (data prevista do parto − 280 dias)",
          "A 24 de outubro de 2026: 224 dias = 32 semanas e 0 dias, terceiro trimestre",
        ],
      },
      {
        title: "Embrião de dia 5 transferido a 20 de junho de 2026",
        steps: [
          "266 − 5 = 261 dias",
          "20 de junho de 2026 + 261 dias = 8 de março de 2027",
          "É a mesma data que para uma última menstruação iniciada a 1 de junho de 2026",
        ],
      },
    ],
    assumptions: [
      "A data prevista do parto é uma estimativa, não um aconselhamento médico, e esta calculadora ainda não foi revista por profissionais. Só uma pequena parte dos bebés nasce na própria data prevista; a maioria nasce cerca de duas semanas antes ou depois.",
      "Uma ecografia de datação no início da gravidez é mais precisa do que uma estimativa baseada em datas e pode alterar a data prevista do parto. É a sua parteira ou o seu médico quem define a data usada no seu acompanhamento.",
      "O ajuste ao ciclo pressupõe que a ovulação ocorre cerca de 14 dias antes da menstruação seguinte. Não tem em conta ciclos irregulares, contraceção hormonal recente nem datas incertas.",
      "Consideram-se os trimestres até às 13 semanas e 6 dias, das 14 semanas e 0 dias às 27 semanas e 6 dias, e a partir das 28 semanas e 0 dias. Algumas fontes fixam os limites uma semana antes ou depois.",
    ],
    faqs: [
      {
        question: "Porque é que a gravidez se conta a partir da última menstruação e não da conceção?",
        answer: "O primeiro dia da última menstruação costuma ser conhecido, ao passo que o dia da conceção não. Contar a partir dele é uma convenção antiga, pelo que, no momento da conceção, a gravidez já tem cerca de 2 semanas.",
      },
      {
        question: "Como é que a duração do ciclo altera a data prevista do parto?",
        answer: "Num ciclo de 28 dias, a ovulação ocorre por volta do dia 14. Num ciclo mais longo ocorre mais tarde, pelo que a data prevista do parto se atrasa o mesmo número de dias; um ciclo mais curto antecipa-a.",
      },
      {
        question: "A data prevista do parto pode mudar?",
        answer: "Sim. Uma ecografia precoce pode indicar uma data diferente, e o profissional de saúde que a acompanha pode atualizá-la com base nessa ecografia, normalmente apenas uma vez.",
      },
    ],
    sourcesUsedFor: [
      "Que a ecografia do primeiro trimestre é o método mais preciso para confirmar a data prevista do parto e que as gravidezes por FIV são datadas a partir da transferência.",
      "Contagem de 280 dias (40 semanas) a partir do primeiro dia da última menstruação, ajuste para ciclos mais longos ou mais curtos do que 28 dias, e que uma ecografia de datação dá uma data mais precisa.",
    ],
  },
  text: {
    method: "Calcular a partir de",
    methods: { lmp: "Primeiro dia da última menstruação", conception: "Data de conceção", ivf: "Data da transferência de embriões (FIV)" },
    lmp: "Primeiro dia da sua última menstruação",
    cycle: "Duração média do ciclo",
    cycleHelp: "Dias entre o primeiro dia de uma menstruação e o primeiro dia da seguinte. Use 28 se não tiver a certeza.",
    daysSuffix: "dias",
    conception: "Data de conceção",
    conceptionHelp: "Normalmente só se conhece de forma aproximada, por exemplo através do registo da ovulação.",
    transfer: "Data da transferência de embriões",
    embryoAge: "Idade do embrião na transferência",
    embryoAges: { "3": "Embrião de dia 3", "5": "Embrião de dia 5 (blastocisto)" },
    asOf: "Idade gestacional em",
    asOfHelp: "Por predefinição, a data de hoje. Altere-a para ver em que fase está a gravidez noutra data.",
    units: { weeks, days },
    weeksDays: "{weeks} e {days}",
    dueDate: "Data prevista do parto",
    caption: "{days} dias após a {from}.",
    captionFrom: {
      lmp: "data do primeiro dia da última menstruação, ajustada à duração do ciclo",
      conception: "data de conceção",
      ivf: "data da transferência",
    },
    gestationalAge: "Idade gestacional",
    trimester: "Trimestre",
    trimesters: { first: "Primeiro trimestre", second: "Segundo trimestre", third: "Terceiro trimestre" },
    notStarted: "Ainda não iniciada nesta data",
    firstEnds: "Fim do primeiro trimestre (13 semanas e 6 dias)",
    secondEnds: "Fim do segundo trimestre (27 semanas e 6 dias)",
    thirdStarts: "Início do terceiro trimestre (28 semanas e 0 dias)",
    daysToDue: "Dias até à data prevista do parto",
    startDate: "Início da datação da gravidez (0 semanas e 0 dias)",
    notes: {
      estimate:
        "Apenas uma estimativa: só uma pequena parte dos bebés nasce na data prevista, e a maioria nasce cerca de duas semanas antes ou depois. Uma ecografia de datação pode alterá-la.",
      beforeStart: "A data escolhida é anterior ao início da datação da gravidez, pelo que ainda não há idade gestacional.",
      pastDue: "A data escolhida coincide com a data prevista do parto ou é posterior a ela.",
      veryLate: "A data escolhida corresponde a mais de 42 semanas de gravidez. Verifique se as datas estão corretas.",
      clinician:
        "A idade gestacional conta-se a partir do primeiro dia da última menstruação, mesmo quando a data vem da conceção ou da transferência. É a sua parteira ou o seu médico quem define a data prevista do parto oficial.",
    },
    errors: { range: "Esta data dá uma data prevista do parto fora do intervalo suportado." },
  },
};

export default pt;
