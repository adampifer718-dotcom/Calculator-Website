import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DnaToMrnaText } from "../text/en";

const leftover = {
  zero: "{n} bases no fim não formam um codão completo e não são traduzidas.",
  one: "{n} base no fim não forma um codão completo e não é traduzida.",
  two: "{n} bases no fim não formam um codão completo e não são traduzidas.",
  few: "{n} bases no fim não formam um codão completo e não são traduzidas.",
  many: "{n} bases no fim não formam um codão completo e não são traduzidas.",
  other: "{n} bases no fim não formam um codão completo e não são traduzidas.",
};

const pt: CalculatorTranslation<DnaToMrnaText> = {
  content: {
    title: "Tradutor de ADN para ARNm e proteína",
    shortTitle: "ADN para ARNm",
    summary:
      "Transcreva uma sequência de ADN em ARNm e traduza-a numa proteína com o código genético padrão, com a cadeia complementar e o conteúdo em GC.",
    metaTitle: "ADN para ARNm – Transcrição e tradução de sequências",
    metaDescription:
      "Converta uma cadeia de ADN codificante ou molde em ARNm e depois em proteína, com códigos de uma e três letras, segundo o código genético padrão, e o teor de GC.",
    keywords: ["adn para arnm", "transcrição", "tradução", "codão", "código genético", "complemento reverso", "sequência proteica", "aminoácidos"],
    intro: [
      "Um gene é copiado para ARN mensageiro (transcrição) e o ARNm é lido três bases de cada vez para construir uma proteína (tradução). Esta ferramenta faz os dois passos para uma sequência de ADN que cole, com o código genético padrão partilhado pela maioria dos organismos.",
      "O ARNm tem a mesma sequência que a cadeia codificante (sense), com uracilo (U) em vez de timina (T). Se tiver antes a cadeia molde (antisense), o ARNm é o seu complemento reverso. Obtém também a cadeia de ADN complementar, a proteína em códigos de uma e de três letras, o número de codões e o conteúdo em GC.",
    ],
    howToUse: [
      "Cole a sequência de ADN. Funciona em maiúsculas ou minúsculas, e os espaços, as quebras de linha e os números de posição de um ficheiro de sequência são ignorados.",
      "Indique se a sequência é a cadeia codificante ou a cadeia molde. Ambas são lidas no sentido 5′→3′, como as sequências se escrevem normalmente.",
      "Escolha onde começa a tradução: na primeira base ou no primeiro codão de iniciação AUG do ARNm.",
      "Escolha se a tradução para no primeiro codão de terminação ou se continua e marca cada codão de terminação com *.",
    ],
    formulas: [
      {
        title: "Transcrição (cadeia codificante)",
        expression: "ARNm = cadeia codificante com T → U",
        explanation:
          "O ARNm é sintetizado a partir da cadeia molde, pelo que corresponde à cadeia codificante base a base, exceto que o ARN usa U em vez de T.",
      },
      {
        title: "Transcrição (cadeia molde)",
        expression: "ARNm = complemento reverso da cadeia molde, com T → U",
        explanation: "Cada base é emparelhada (A–U, T–A, C–G, G–C) e o resultado é invertido para se ler no sentido 5′→3′.",
      },
      {
        title: "Tradução",
        expression: "codão (3 bases) → aminoácido, desde o início até ao primeiro UAA, UAG ou UGA",
        explanation:
          "Os codões são procurados no código genético padrão (tabela de tradução 1 do NCBI). AUG codifica a metionina e é o codão de iniciação habitual.",
      },
      {
        title: "Conteúdo em GC",
        expression: "GC % = (G + C) ÷ total de bases × 100",
        explanation: "A proporção de bases do ADN que são guanina ou citosina. É igual nas duas cadeias.",
      },
    ],
    examples: [
      {
        title: "Cadeia codificante traduzida a partir do primeiro AUG",
        steps: [
          "Substitua T por U: GCAUGCCGUGGAAAUAGC.",
          "O primeiro AUG começa na base 3, pelo que a grelha de leitura é AUG CCG UGG AAA UAG, sobrando uma base (C).",
          "AUG = Met, CCG = Pro, UGG = Trp, AAA = Lys, UAG = terminação.",
          "Proteína: MPWK (Met-Pro-Trp-Lys).",
        ],
      },
      {
        title: "Uma cadeia molde",
        steps: [
          "Complemento reverso de TCACTTAGCCAT: ATGGCTAAGTGA.",
          "Substitua T por U: AUG GCU AAG UGA.",
          "AUG = Met, GCU = Ala, AAG = Lys, UGA = terminação, o que dá MAK.",
        ],
      },
      {
        title: "Leitura através dos codões de terminação",
        steps: [
          "Maiúsculas, espaços removidos e T → U: AUG UAA CAG UGG UAG.",
          "AUG = Met, UAA = terminação, CAG = Gln, UGG = Trp, UAG = terminação.",
          "Com leitura contínua, a proteína é apresentada como M*QW*.",
        ],
      },
    ],
    assumptions: [
      "Usa-se o código genético padrão (tabela de tradução 1 do NCBI). As mitocôndrias e alguns micróbios usam outros códigos, em que alguns codões têm um significado diferente.",
      "A sequência é tratada como uma única região codificante contínua. Os intrões, o splicing, a edição de ARN e outros processamentos dos genes reais não são modelados.",
      "Quando começa no primeiro AUG, só AUG é usado como codão de iniciação; os raros codões de iniciação alternativos são ignorados.",
      "As duas cadeias são introduzidas e apresentadas no sentido 5′→3′. A cadeia complementar é apresentada como complemento reverso, pelo que também se lê no sentido 5′→3′.",
    ],
    faqs: [
      {
        question: "Que cadeia devo escolher?",
        answer:
          "A maioria das bases de dados indica a cadeia codificante (sense), cuja sequência corresponde ao ARNm, com U em vez de T. Escolha a cadeia molde (antisense) apenas se a sua sequência for a que a ARN polimerase lê, ou seja, a cadeia complementar do ARNm.",
      },
      {
        question: "Porque é que a proteína termina cedo?",
        answer:
          "A tradução termina no primeiro codão de terminação (UAA, UAG ou UGA) da grelha de leitura. Se esperava uma proteína mais longa, verifique se escolheu a cadeia e o ponto de partida corretos, ou mude para leitura contínua para ver onde estão os codões de terminação.",
      },
      {
        question: "O que são as bases que sobram no fim?",
        answer:
          "Os codões têm três bases. Se o número de bases a partir do início não for múltiplo de três, a última ou as duas últimas bases não formam um codão e, por isso, não são traduzidas.",
      },
    ],
    sourcesUsedFor: [
      "A tabela de codões: o aminoácido que cada um dos 64 codões codifica e os codões de terminação UAA, UAG e UGA.",
      "A transcrição a partir da cadeia molde, a correspondência entre o ARNm e a cadeia codificante com U em vez de T, e a leitura dos codões desde um codão de iniciação até um codão de terminação.",
    ],
  },
  text: {
    sequence: "Sequência de ADN",
    sequenceHelp: "Letras A, C, G e T, em maiúsculas ou minúsculas. Os espaços, as quebras de linha e os números de posição são ignorados.",
    strand: "A sequência é a…",
    strands: {
      coding: "Cadeia codificante (sense), 5′→3′",
      template: "Cadeia molde (antisense), 5′→3′",
    },
    frame: "Começar a traduzir em",
    frames: {
      first: "Na primeira base",
      aug: "No primeiro AUG (codão de iniciação)",
    },
    stops: "Num codão de terminação",
    stopModes: {
      stop: "Parar a tradução",
      readThrough: "Continuar a leitura e marcá-lo com *",
    },
    errors: {
      invalidChar: "«{char}» (carácter {position}) não é uma base de ADN. Use apenas A, C, G e T.",
      empty: "Introduza pelo menos uma base (A, C, G ou T).",
      tooLong: "Introduza no máximo {max} bases.",
      noAug: "O ARNm não contém nenhum codão de iniciação AUG. Escolha «Na primeira base» para o traduzir mesmo assim.",
    },
    result: "ARNm (5′→3′)",
    caption: "Agrupado em codões a partir do início da grelha de leitura.",
    complement: "Cadeia de ADN complementar (5′→3′)",
    proteinOne: "Proteína (código de uma letra)",
    proteinThree: "Proteína (código de três letras)",
    noProtein: "(nenhum codão completo traduzido)",
    length: "Comprimento do ARNm",
    bases: "bases",
    codonsInFrame: "Codões completos na grelha de leitura",
    codonsTranslated: "Codões traduzidos",
    aminoAcids: "Aminoácidos na proteína",
    gc: "Conteúdo em GC",
    notes: {
      stopped: "A tradução parou no codão {codon} ({stop}), um codão de terminação. A proteína acima termina antes dele.",
      noStop: "Não foi encontrado nenhum codão de terminação antes do fim da sequência, pelo que a proteína pode estar incompleta.",
      readThrough: "Os codões de terminação foram lidos e são apresentados como * (Ter no código de três letras).",
      augStart: "O primeiro AUG começa na base {position} do ARNm. As bases anteriores não são traduzidas.",
      leftover,
      template: "O ARNm é o complemento reverso da cadeia molde que introduziu, com U em vez de T.",
      general:
        "Usa o código genético padrão (tabela 1 do NCBI) e ignora intrões, splicing e codões de iniciação alternativos. Os genes reais podem exigir outro código ou processamento.",
    },
  },
};

export default pt;
