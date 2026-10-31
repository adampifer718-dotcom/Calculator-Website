import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { EraText } from "../text/en";

const pt: CalculatorTranslation<EraText> = {
  content: {
    title: "Calculadora de ERA (basebol)",
    shortTitle: "ERA",
    summary:
      "Calcule a média de corridas limpas (ERA) de um lançador a partir das corridas limpas e das entradas lançadas, com WHIP, K/9 e BB/9, para basebol de 9 entradas ou jogos de 7 entradas.",
    metaTitle: "ERA – Média de corridas limpas, WHIP e K/9",
    metaDescription:
      "Calcule a média de corridas limpas de um lançador pelas corridas limpas e entradas, com WHIP, strikeouts e walks por nove, em jogos de 9 ou de 7 entradas.",
    keywords: ["calculadora ERA", "média de corridas limpas", "ERA basebol", "ERA softbol", "calculadora WHIP", "K/9", "BB/9", "entradas lançadas"],
    intro: [
      "A média de corridas limpas (ERA) é o número de corridas limpas que um lançador sofre por jogo completo. Converte as corridas permitidas por um lançador para uma duração de jogo padrão, para que titulares e relevistas com cargas de trabalho muito diferentes possam ser comparados.",
      "Introduza as corridas limpas e as entradas lançadas para obter a ERA. As entradas são introduzidas como entradas completas mais eliminações adicionais, porque cada eliminação é um terço de entrada. Junte as batidas (hits), os walks e os strikeouts para ver também WHIP, K/9 e BB/9. Escolha 7 entradas para softbol e muitas ligas jovens.",
    ],
    howToUse: [
      "Introduza as corridas limpas permitidas.",
      "Introduza as entradas completas lançadas e escolha 0, 1 ou 2 eliminações adicionais. Um «5.1» numa folha de jogo significa 5 entradas e 1 eliminação.",
      "Escolha 9 entradas por jogo para basebol ou 7 para softbol e muitas ligas jovens.",
      "Se quiser, introduza as batidas, os walks e os strikeouts e consulte a ERA e as restantes taxas.",
    ],
    formulas: [
      {
        title: "Entradas lançadas",
        expression: "IP = entradas completas + eliminações adicionais ÷ 3",
        explanation: "Cada eliminação é um terço de entrada, pelo que «6.2» na notação das folhas de jogo corresponde a 6⅔ = 6,667 entradas.",
      },
      {
        title: "Média de corridas limpas",
        expression: "ERA = corridas limpas × entradas por jogo ÷ IP",
        explanation: "As entradas por jogo são 9 no basebol; usam-se 7 no softbol e em muitas ligas jovens.",
      },
      {
        title: "WHIP",
        expression: "WHIP = (walks + batidas) ÷ IP",
        explanation: "Corredores em base permitidos por entrada através de batidas e walks.",
      },
      {
        title: "Taxas por nove entradas",
        expression: "K/9 = strikeouts × 9 ÷ IP\nBB/9 = walks × 9 ÷ IP",
        explanation: "Strikeouts e walks por nove entradas.",
      },
    ],
    examples: [
      {
        title: "3 corridas limpas em 6⅔ entradas",
        steps: ["IP = 6 + 2 ÷ 3 = 6,667", "ERA = 3 × 9 ÷ 6,667 = 4,05", "WHIP = (2 + 7) ÷ 6,667 = 1,35; K/9 = 8 × 9 ÷ 6,667 = 10,8"],
      },
      {
        title: "Uma época: 61 corridas limpas em 187⅓ entradas",
        steps: ["IP = 187 + 1 ÷ 3 = 187,333", "ERA = 61 × 9 ÷ 187,333 ≈ 2,93", "WHIP = (45 + 158) ÷ 187,333 ≈ 1,08; K/9 ≈ 9,66; BB/9 ≈ 2,16"],
      },
      {
        title: "Softbol: 4 corridas limpas num jogo completo de 7 entradas",
        steps: ["IP = 7", "ERA = 4 × 7 ÷ 7 = 4,00", "WHIP = (3 + 5) ÷ 7 ≈ 1,14"],
      },
    ],
    assumptions: [
      "As corridas limpas são as que o marcador oficial registou. As corridas que resultam de um erro ou de uma bola passada (passed ball) não são limpas e não devem ser incluídas.",
      "As entradas são introduzidas como entradas completas mais eliminações, e não como um decimal do tipo «6.2», porque nas folhas de jogo o algarismo depois do ponto conta eliminações, e não décimas.",
      "A ERA depende da defesa que joga atrás do lançador, do estádio e da liga, por isso compare lançadores da mesma liga e da mesma época sempre que possível.",
      "K/9 e BB/9 usam sempre 9 entradas, como é habitual, mesmo quando se escolhem 7 entradas por jogo para a ERA.",
    ],
    faqs: [
      {
        question: "O que significa «6.2» entradas lançadas?",
        answer:
          "Significa 6 entradas e 2 eliminações, ou 6⅔ entradas, e não 6,2 em decimal. Cada eliminação é um terço de entrada, pelo que o algarismo depois do ponto só pode ser 0, 1 ou 2. Aqui, introduza 6 entradas e 2 eliminações adicionais.",
      },
      {
        question: "O que é uma boa ERA?",
        answer:
          "Depende da liga e da época histórica. Nas épocas recentes da Major League Baseball, a média da liga tem rondado 4,00, e uma ERA abaixo de 3,00 numa época completa é geralmente considerada excelente.",
      },
      {
        question: "Porque é que o softbol usa 7 entradas?",
        answer:
          "Os jogos de softbol, e muitos jogos de basebol escolar e juvenil, estão previstos para sete entradas, pelo que a ERA é ajustada a um jogo de sete entradas para mostrar as corridas permitidas por jogo completo nesse formato.",
      },
    ],
    sourcesUsedFor: [
      "A definição de corrida limpa e ERA = 9 × corridas limpas ÷ entradas lançadas.",
      "WHIP = (walks + batidas) ÷ entradas lançadas, sem contar os batedores atingidos nem os erros.",
    ],
  },
  text: {
    earnedRuns: "Corridas limpas permitidas",
    earnedRunsHelp: "Corridas marcadas sem a ajuda de um erro ou de uma bola passada, segundo a decisão do marcador oficial.",
    innings: "Entradas lançadas (entradas completas)",
    inningsHelp:
      "Introduza aqui as entradas completas e as eliminações adicionais no campo seguinte. 6⅔ entradas, escritas «6.2» nas folhas de jogo, são 6 entradas e 2 eliminações.",
    outs: "Eliminações adicionais",
    outsOptions: { "0": "0 eliminações", "1": "1 eliminação (⅓ de entrada)", "2": "2 eliminações (⅔ de entrada)" },
    gameLength: "Entradas por jogo",
    gameLengthHelp: "Use 9 para basebol profissional e a maioria do basebol universitário, e 7 para softbol e muitas ligas escolares e jovens.",
    gameLengths: { "9": "9 entradas (basebol)", "7": "7 entradas (softbol, muitas ligas jovens)" },
    hits: "Batidas permitidas (opcional)",
    walks: "Walks permitidos (opcional)",
    walksHelp: "Bases por bolas. Os batedores atingidos não contam para o WHIP.",
    strikeouts: "Strikeouts (opcional)",
    errors: {
      noInnings: "Introduza pelo menos uma eliminação lançada.",
    },
    era: "Média de corridas limpas (ERA)",
    caption: "{er} corridas limpas × {length} ÷ {ip} entradas lançadas ({notation} na notação das folhas de jogo).",
    notation: "{whole}.{outs}",
    inningsNotation: "Entradas lançadas (notação do basebol)",
    inningsDecimal: "Entradas lançadas em decimal",
    totalOuts: "Eliminações registadas",
    whip: "WHIP (walks + batidas por entrada)",
    k9: "Strikeouts por 9 entradas (K/9)",
    bb9: "Walks por 9 entradas (BB/9)",
    kbb: "Relação strikeouts/walks",
    notes: {
      notation:
        "Nas folhas de jogo, o algarismo depois do ponto conta eliminações, e não décimas: «6.1» significa 6⅓ entradas e «6.2» significa 6⅔ entradas.",
      whip: "Introduza as batidas e os walks para ver o WHIP.",
      perNine: "K/9 e BB/9 são sempre por 9 entradas, seja qual for a duração do jogo.",
    },
  },
};

export default pt;
