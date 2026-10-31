import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OeeText } from "../text/en";

const pt: CalculatorTranslation<OeeText> = {
  content: {
    title: "Calculadora de OEE (eficiência global do equipamento)",
    shortTitle: "OEE",
    summary:
      "Calcule a eficiência global do equipamento a partir do tempo planeado, das paragens, do tempo de ciclo ideal e das contagens de peças, com disponibilidade, desempenho, qualidade e o tempo perdido em cada uma.",
    metaTitle: "OEE – Disponibilidade × desempenho × qualidade",
    metaDescription:
      "Calcule a eficiência global do equipamento (OEE) pelo tempo planeado, paragens, tempo de ciclo ideal e peças rejeitadas, com o tempo perdido em cada fator.",
    keywords: ["calculadora OEE", "eficiência global do equipamento", "fórmula OEE", "disponibilidade desempenho qualidade", "tempo de ciclo ideal", "eficiência produtiva", "perdas de produção"],
    intro: [
      "A eficiência global do equipamento (OEE) mede que parte do tempo de produção planeado é verdadeiramente produtiva: fazer apenas peças boas, o mais depressa possível, sem paragens. Uma pontuação de 100 % significa produção perfeita; as linhas reais perdem tempo com avarias, ciclos lentos e rejeições.",
      "O OEE divide essas perdas em três fatores. A disponibilidade contabiliza o tempo em que o equipamento esteve parado, o desempenho contabiliza o funcionamento abaixo da velocidade ideal e a qualidade contabiliza as peças que não ficaram boas à primeira. Esta calculadora dá os três fatores, o OEE e os minutos perdidos em cada um.",
    ],
    howToUse: [
      "Introduza o tempo de produção planeado em minutos, excluindo as pausas planeadas e o tempo sem produção programada.",
      "Introduza o tempo total de paragem nesse período, como avarias e mudanças de série.",
      "Indique a velocidade ideal como tempo de ciclo em segundos por peça ou como ritmo em peças por minuto.",
      "Introduza o número total de peças produzidas e quantas foram rejeitadas. O OEE e a tabela de perdas de tempo atualizam-se de imediato.",
    ],
    formulas: [
      {
        title: "Disponibilidade",
        expression: "D = tempo de funcionamento ÷ tempo de produção planeado, tempo de funcionamento = planeado − tempo de paragem",
        explanation: "A parte do tempo planeado em que o equipamento esteve efetivamente a funcionar.",
      },
      {
        title: "Desempenho",
        expression: "P = (tempo de ciclo ideal × contagem total) ÷ tempo de funcionamento",
        explanation: "Quão perto da velocidade ideal o equipamento funcionou. Com um ritmo ideal, o tempo de ciclo ideal é 60 ÷ ritmo segundos.",
      },
      {
        title: "Qualidade",
        expression: "Q = peças boas ÷ contagem total, boas = total − rejeitadas",
        explanation: "A parte das peças que ficaram boas à primeira.",
      },
      {
        title: "OEE",
        expression: "OEE = D × P × Q = (peças boas × tempo de ciclo ideal) ÷ tempo de produção planeado",
        explanation: "O tempo totalmente produtivo (peças boas feitas à velocidade ideal) em proporção do tempo planeado.",
      },
    ],
    examples: [
      {
        title: "Um turno de 450 minutos com 54 minutos de paragens",
        steps: [
          "Tempo de funcionamento = 450 − 54 = 396 min, pelo que a disponibilidade = 396 ÷ 450 = 88 %",
          "Desempenho = 1,5 s × 13 200 ÷ (396 × 60 s) = 19 800 ÷ 23 760 = 83,33 %",
          "Qualidade = (13 200 − 330) ÷ 13 200 = 97,5 %",
          "OEE = 0,88 × 0,8333 × 0,975 = 71,5 %",
        ],
      },
      {
        title: "Ritmo ideal de 25 peças por minuto",
        steps: [
          "Tempo de ciclo ideal = 60 ÷ 25 = 2,4 s",
          "Disponibilidade = 384 ÷ 420 = 91,43 %; desempenho = 2,4 × 8800 ÷ (384 × 60) = 91,67 %",
          "Qualidade = 8624 ÷ 8800 = 98 %",
          "OEE = 0,9143 × 0,9167 × 0,98 ≈ 82,13 %",
        ],
      },
      {
        title: "Dois turnos de 8 horas numa máquina mais lenta",
        steps: [
          "Disponibilidade = 840 ÷ 960 = 87,5 %",
          "Desempenho = 12 × 3900 ÷ (840 × 60) = 46 800 ÷ 50 400 = 92,86 %",
          "Qualidade = 3815 ÷ 3900 = 97,82 %",
          "OEE = peças boas × tempo de ciclo ideal ÷ tempo planeado = 3815 × 12 ÷ 57 600 ≈ 79,48 %",
        ],
      },
    ],
    assumptions: [
      "O tempo de produção planeado exclui as pausas planeadas e os períodos sem produção programada; a forma como trata as mudanças de série e a manutenção altera o resultado, por isso mantenha as mesmas definições ao comparar.",
      "O tempo de ciclo ideal é o tempo mais rápido em que o equipamento consegue fazer uma peça em condições ideais. Se for definido demasiado lento, o desempenho pode ultrapassar 100 %, o que indica um ideal errado e não uma linha excelente.",
      "As rejeições incluem todas as peças que não ficaram boas à primeira, incluindo as que foram retrabalhadas. O valor de 85 % muitas vezes citado como «classe mundial» é apenas uma referência aproximada.",
    ],
    faqs: [
      {
        question: "O que é uma boa pontuação de OEE?",
        answer:
          "Um OEE de 85 % é muitas vezes citado como classe mundial na produção discreta, e muitas fábricas funcionam bem abaixo disso. Como a pontuação depende da forma como se definem as paragens e a velocidade ideal, a tendência numa mesma linha é mais útil do que comparar fábricas diferentes.",
      },
      {
        question: "Porque é que as perdas de tempo somam o tempo planeado?",
        answer:
          "O tempo de produção planeado divide-se nas paragens (perda de disponibilidade), no funcionamento abaixo da velocidade ideal (perda de desempenho), na produção de rejeições (perda de qualidade) e no tempo totalmente produtivo que resta. O OEE é o tempo totalmente produtivo dividido pelo tempo planeado.",
      },
      {
        question: "Devo introduzir o tempo de ciclo ideal ou o ritmo ideal?",
        answer:
          "Qualquer um; são a mesma coisa escrita de duas formas. Um ritmo ideal de 40 peças por minuto equivale a um tempo de ciclo ideal de 60 ÷ 40 = 1,5 segundos por peça.",
      },
    ],
    sourcesUsedFor: [
      "A fórmula do OEE como disponibilidade × desempenho × qualidade, com disponibilidade = tempo de funcionamento ÷ tempo de produção planeado, desempenho = tempo de ciclo ideal × contagem total ÷ tempo de funcionamento e qualidade = peças boas ÷ contagem total, e a referência muitas vezes citada de 85 %.",
      "Os três fatores do OEE e as perdas que cada um mede.",
    ],
  },
  text: {
    planned: "Tempo de produção planeado",
    plannedHelp: "O tempo em que o equipamento estava programado para funcionar, descontadas as pausas planeadas e os períodos sem produção programada.",
    stopTime: "Tempo de paragem (paragens não planeadas e planeadas)",
    stopTimeHelp:
      "Tempo dentro do tempo de produção planeado em que o equipamento não esteve a funcionar, por exemplo avarias, mudanças de série e espera por material.",
    speedMode: "Velocidade ideal indicada como",
    speedModes: { cycle: "Tempo de ciclo ideal (segundos por peça)", rate: "Ritmo ideal (peças por minuto)" },
    idealCycle: "Tempo de ciclo ideal",
    idealCycleHelp: "O tempo mais rápido em que o equipamento consegue fazer uma peça em condições ideais.",
    idealRate: "Ritmo de produção ideal",
    idealRateHelp: "O número máximo de peças por minuto que o equipamento consegue fazer em condições ideais.",
    perPiece: "s por peça",
    perMinute: "peças/min",
    totalCount: "Contagem total (todas as peças produzidas)",
    rejects: "Peças rejeitadas",
    rejectsHelp: "Peças que foram para sucata ou precisam de retrabalho. Não ficaram boas à primeira.",
    minutes: "min",
    pieces: "peças",
    errors: {
      stopTooLong: "O tempo de paragem tem de ser inferior ao tempo de produção planeado.",
      rejectsTooMany: "O número de peças rejeitadas não pode ser superior à contagem total.",
    },
    oee: "Eficiência global do equipamento (OEE)",
    caption: "Disponibilidade {a} × desempenho {p} × qualidade {q}.",
    availability: "Disponibilidade",
    performance: "Desempenho",
    quality: "Qualidade",
    goodCount: "Peças boas",
    runTime: "Tempo de funcionamento",
    productiveTime: "Tempo totalmente produtivo",
    idealCycleUsed: "Tempo de ciclo ideal usado",
    table: {
      caption: "Para onde vai o tempo de produção planeado",
      item: "Tempo",
      minutes: "Minutos",
      share: "Parte do tempo planeado",
      planned: "Tempo de produção planeado",
      availabilityLoss: "Perda de disponibilidade (paragens)",
      performanceLoss: "Perda de desempenho (ciclos lentos e micro-paragens)",
      qualityLoss: "Perda de qualidade (tempo gasto a produzir rejeições)",
      productive: "Tempo totalmente produtivo",
    },
    notes: {
      overPerformance:
        "O desempenho está acima de 100 %, o que não é fisicamente possível. O tempo de ciclo ideal está provavelmente definido demasiado lento (ou o ritmo ideal demasiado baixo), ou a contagem inclui peças feitas fora do tempo de funcionamento.",
      benchmark:
        "Um OEE de 85 % é muitas vezes citado como «classe mundial» na produção discreta. Trate-o apenas como uma referência aproximada; um objetivo justo depende do processo e da forma como as perdas são definidas.",
    },
  },
};

export default pt;
