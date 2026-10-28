import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { StairsText } from "../text/en";

const pt: CalculatorTranslation<StairsText> = {
  content: {
    title: "Calculadora de escadas",
    shortTitle: "Escadas",
    summary: "Calcule o número de degraus, a altura do espelho, o desenvolvimento total, o ângulo da escada e o comprimento do banzo a partir da altura entre pisos, com a verificação de conforto 2E + C.",
    metaTitle: "Calculadora de escadas – Espelhos, cobertores e banzo",
    metaDescription:
      "Saiba quantos degraus uma escada precisa pela altura total, com a altura do espelho, o desenvolvimento, o ângulo, o banzo e a regra 2E + C, em polegadas ou cm.",
    keywords: ["calculadora de escadas", "altura do espelho", "quantos degraus", "comprimento do banzo", "cobertor do degrau", "ângulo da escada", "dimensões de escada", "regra de Blondel"],
    intro: [
      "Uma escada divide a altura entre dois pisos em degraus iguais. Cada degrau tem um espelho (a sua altura) e um cobertor (a sua profundidade). O número de espelhos depende da altura total e do espelho mais alto que aceitar; há sempre um cobertor a menos do que espelhos, porque o último degrau é o próprio piso superior.",
      "Introduza a altura entre pisos, o espelho máximo e a profundidade do cobertor para obter o número de degraus, a altura exata do espelho, o desenvolvimento total, o ângulo da escada e o comprimento da diagonal do banzo, com a tradicional verificação de conforto 2E + C. As predefinições são os limites do International Residential Code (EUA), mas a regulamentação local pode ser diferente.",
    ],
    howToUse: [
      "Escolha polegadas ou centímetros.",
      "Meça a altura total desde o pavimento acabado em baixo até ao pavimento acabado em cima.",
      "Verifique a altura máxima do espelho e a profundidade do cobertor. As predefinições são o espelho máximo de 7¾ in e o cobertor mínimo de 10 in do International Residential Code.",
      "Opcionalmente, introduza uma altura de espelho pretendida e o espaço horizontal disponível para ver se a escada cabe.",
      "Consulte o número de espelhos e a disposição e, depois, confirme tudo com a regulamentação de construção local.",
    ],
    formulas: [
      { title: "Número de espelhos", expression: "n = ⌈altura total ÷ espelho máximo⌉", explanation: "Com uma altura de espelho pretendida, n é o número inteiro mais próximo de altura total ÷ altura pretendida." },
      { title: "Altura do espelho e cobertores", expression: "espelho = altura total ÷ n; cobertores = n − 1", explanation: "Todos os espelhos têm a mesma altura." },
      { title: "Desenvolvimento total e ângulo", expression: "desenvolvimento = cobertores × profundidade do cobertor; ângulo = arctan(espelho ÷ cobertor)", explanation: "O desenvolvimento é medido de focinho a focinho, sem patamares." },
      { title: "Diagonal do banzo", expression: "banzo = √(altura total² + desenvolvimento total²)", explanation: "A linha reta da base ao topo do lanço." },
      { title: "Regra prática de conforto", expression: "24 in ≤ 2 × espelho + cobertor ≤ 25 in", explanation: "Cerca de 61–63,5 cm. Uma orientação tradicional para um passo confortável, não uma regra regulamentar." },
    ],
    examples: [
      {
        title: "108 in entre pisos com as predefinições do IRC",
        steps: [
          "n = ⌈108 ÷ 7,75⌉ = ⌈13,94⌉ = 14 espelhos",
          "Espelho = 108 ÷ 14 ≈ 7,714 in; 13 cobertores de 10 in dão um desenvolvimento de 130 in",
          "Ângulo = arctan(7,714 ÷ 10) ≈ 37,6°; banzo = √(108² + 130²) ≈ 169,01 in",
          "2E + C ≈ 25,43 in, um pouco acima do intervalo de conforto de 24–25 in",
        ],
      },
      {
        title: "Altura de 252 cm com cobertores de 24 cm",
        steps: [
          "n = ⌈252 ÷ 19,6⌉ = ⌈12,86⌉ = 13 espelhos",
          "Espelho = 252 ÷ 13 ≈ 19,385 cm; 12 cobertores dão um desenvolvimento de 288 cm",
          "2E + C ≈ 62,77 cm ≈ 24,71 in, dentro do intervalo de conforto",
        ],
      },
      {
        title: "Altura de 100 in, com espelhos pretendidos de 7 in num espaço de 130 in",
        steps: [
          "n = arredondar(100 ÷ 7) = arredondar(14,29) = 14 espelhos de ≈ 7,143 in",
          "13 cobertores × 10,5 in = 136,5 in de desenvolvimento, 6,5 in mais do que o espaço disponível",
          "2E + C ≈ 24,79 in, dentro do intervalo de conforto",
        ],
      },
    ],
    assumptions: [
      "Trata-se de uma estimativa geométrica para um único lanço reto com degraus iguais. Patamares, degraus em leque, escadas em caracol e a espessura das tábuas dos cobertores não estão incluídos.",
      "A regulamentação de construção varia consoante a jurisdição e muda ao longo do tempo, e abrange muito mais do que as dimensões dos degraus: pé-direito livre, largura, corrimãos, guardas, focinhos e a variação admitida entre degraus. As predefinições foram retiradas do International Residential Code apenas como ponto de partida; confirme a regulamentação aplicável ao local onde vai construir.",
      "O resultado não foi revisto por um profissional e não constitui aconselhamento de segurança nem de engenharia. As escadas são uma causa frequente de quedas, por isso peça aos serviços de licenciamento da sua câmara municipal ou a um profissional qualificado que verifiquem o projeto antes de construir.",
      "A altura total deve ser medida entre superfícies de pavimento acabadas. Mudar o revestimento do pavimento mais tarde altera a altura do primeiro e do último degrau.",
    ],
    faqs: [
      { question: "Quantos degraus preciso para uma altura de 9 ft (108 in)?", answer: "Com um espelho máximo de 7¾ in, precisa de ⌈108 ÷ 7,75⌉ = 14 espelhos de cerca de 7,71 in cada e 13 cobertores. Um espelho máximo mais baixo dá mais degraus, menos altos, e uma escada mais comprida." },
      { question: "Porque há menos cobertores do que espelhos?", answer: "O último espelho leva-o até ao piso superior, que funciona como o último degrau. Assim, um lanço com 14 espelhos tem 13 cobertores, e o desenvolvimento total é igual a 13 profundidades de cobertor." },
      { question: "O que é a regra 2E + C?", answer: "É uma orientação tradicional de conforto: duas alturas de espelho mais uma profundidade de cobertor devem somar cerca de 24–25 in (61–63,5 cm), aproximadamente o comprimento de um passo confortável. Não é uma exigência regulamentar, mas as escadas muito fora deste intervalo tendem a ser desconfortáveis." },
    ],
    sourcesUsedFor: [
      "Os limites do International Residential Code (R311.7.5) usados como predefinições: altura máxima do espelho de 7¾ in (196 mm) e profundidade mínima do cobertor de 10 in (254 mm).",
      "A regra prática de conforto 2 × espelho + cobertor = 24–25 in, atribuída às Architectural Graphic Standards.",
    ],
  },
  text: {
    unit: "Unidades",
    units: { in: "Polegadas (in)", cm: "Centímetros (cm)" },
    rise: "Altura total (entre pisos)",
    riseHelp: "A distância vertical desde o topo do pavimento acabado inferior até ao topo do pavimento acabado superior.",
    maxRiser: "Altura máxima do espelho",
    maxRiserHelp: "O degrau mais alto que aceita. A predefinição é o máximo de 7¾ in (196 mm) do International Residential Code; a regulamentação local pode ser diferente.",
    targetRiser: "Altura de espelho pretendida (opcional)",
    targetRiserHelp: "Se introduzir uma altura de degrau preferida, o número de espelhos é escolhido para se aproximar o mais possível dela, mesmo que ultrapasse o máximo acima.",
    tread: "Profundidade do cobertor",
    treadHelp: "A profundidade horizontal de cada degrau, de focinho a focinho. A predefinição é o mínimo de 10 in (254 mm) do International Residential Code.",
    runLimit: "Desenvolvimento total disponível (opcional)",
    runLimitHelp: "O espaço horizontal de que dispõe para a escada, para comparar com o resultado.",
    steps: "Número de espelhos (degraus)",
    caption: "{risers} de {riser} cada, com {treads} de {tread}.",
    risersCount: { zero: "{n} espelhos", one: "{n} espelho", two: "{n} espelhos", few: "{n} espelhos", many: "{n} espelhos", other: "{n} espelhos" },
    treadsCount: { zero: "{n} cobertores", one: "{n} cobertor", two: "{n} cobertores", few: "{n} cobertores", many: "{n} cobertores", other: "{n} cobertores" },
    riserHeight: "Altura do espelho",
    treads: "Número de cobertores",
    totalRun: "Desenvolvimento total",
    angle: "Ângulo da escada",
    stringer: "Comprimento do banzo (diagonal da altura e do desenvolvimento)",
    comfort: "Verificação de conforto 2E + C",
    comfortStatus: "Em comparação com a regra prática de 24–25 in (61–63,5 cm)",
    comfortOptions: { low: "Abaixo do intervalo: escada suave e comprida", ok: "Dentro do intervalo", high: "Acima do intervalo: escada íngreme ou funda" },
    notes: {
      overMax: "A altura do espelho de {riser} está acima do máximo que introduziu ({max}).",
      overRun: "O desenvolvimento total de {run} excede em {over} o espaço que introduziu ({limit}).",
      comfort: "A regra 2E + C (dois espelhos mais um cobertor, cerca de 24–25 in) é uma orientação tradicional de conforto, não uma exigência regulamentar.",
      code: "A regulamentação de construção varia consoante a jurisdição e define mais do que as dimensões dos degraus: pé-direito livre, largura, corrimãos, guardas, focinhos, patamares e a variação admitida entre degraus. Confirme a regulamentação de construção local e peça a um profissional qualificado que reveja o projeto.",
      stringer: "O comprimento do banzo é a diagonal reta da altura e do desenvolvimento totais. Um banzo recortado fica mais comprido quando se acrescenta a madeira necessária para as ligações em cima e em baixo.",
    },
  },
};

export default pt;
