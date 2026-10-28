import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoofingText } from "../text/en";

const pt: CalculatorTranslation<RoofingText> = {
  content: {
    title: "Calculadora de materiais para telhado",
    shortTitle: "Materiais para telhado",
    summary: "Estime a área do telhado, os squares e os pacotes de telhas asfálticas para um telhado simples de duas ou de quatro águas, a partir da planta do edifício, do beiral e da inclinação.",
    metaTitle: "Calculadora de materiais para telhado – Área e telhas",
    metaDescription:
      "Estime a área do telhado pela planta, beiral e inclinação, e depois os squares, os pacotes de telhas asfálticas e os rolos de subtelha a comprar, com desperdício.",
    keywords: ["calculadora de telhado", "área do telhado", "telhas asfálticas", "pacotes de telhas", "square de cobertura", "subtelha", "fator de inclinação", "materiais de cobertura"],
    intro: [
      "Os materiais de cobertura vendem-se ao square: um square cobre 100 ft² (cerca de 9,29 m²) de telhado. Um telhado inclinado tem mais superfície do que a planta por baixo dele, pelo que a área em planta é multiplicada por um fator de inclinação que aumenta com a inclinação do telhado.",
      "Introduza o comprimento e a largura do edifício, o beiral e a inclinação para estimar a área do telhado, o número de squares e de pacotes de telhas e, opcionalmente, os rolos de subtelha. Uma margem de desperdício cobre os cortes, as fiadas de arranque e as peças de remate.",
    ],
    howToUse: [
      "Escolha unidades americanas (pés) ou métricas (metros).",
      "Introduza o comprimento e a largura do edifício e quanto o telhado sobressai das paredes.",
      "Introduza a inclinação como altura por 12 de avanço (por exemplo 6 para um telhado de 6/12) ou como ângulo.",
      "Escolha duas ou quatro águas e verifique a margem de desperdício; nos telhados de quatro águas a predefinição é 15% por causa dos cortes adicionais.",
      "Verifique os pacotes por square das suas telhas e, se quiser, introduza a cobertura de um rolo de subtelha.",
    ],
    formulas: [
      { title: "Área em planta", expression: "planta = (C + 2 × beiral) × (L + 2 × beiral)", explanation: "C e L são o comprimento e a largura exteriores do edifício." },
      { title: "Fator de inclinação", expression: "fator = √(1 + (altura ÷ 12)²)", explanation: "Para um telhado de 6/12, o fator é √1,25 ≈ 1,118. A partir de um ângulo θ, o fator é 1 ÷ cos θ." },
      { title: "Área do telhado e squares", expression: "área = planta × fator; squares = área × (1 + desperdício) ÷ 100 ft²", explanation: "As áreas métricas são convertidas com 1 ft² = 0,09290304 m²." },
      { title: "Pacotes e rolos", expression: "pacotes = ⌈squares × pacotes por square⌉; rolos = ⌈área com desperdício ÷ cobertura do rolo⌉", explanation: "Ambos são arredondados por excesso a unidades inteiras." },
    ],
    examples: [
      {
        title: "Casa de 40 × 30 ft, beiral de 1 ft, telhado de duas águas 6/12",
        steps: [
          "Área em planta = 42 × 32 = 1344 ft²",
          "Área do telhado = 1344 × √1,25 ≈ 1502,64 ft²",
          "Com 10% de desperdício: 1652,90 ft², ou 16,53 squares",
          "Pacotes = ⌈16,53 × 3⌉ = 50",
        ],
      },
      {
        title: "Casa de 12 × 9 m, beiral de 0,5 m, telhado de quatro águas a 30°",
        steps: [
          "Área em planta = 13 × 10 = 130 m²",
          "Fator de inclinação = 1 ÷ cos 30° ≈ 1,1547, pelo que a área do telhado ≈ 150,11 m²",
          "Com 15% de desperdício: 172,63 m² ÷ 0,09290304 ≈ 1858,15 ft², ou 18,58 squares",
          "Pacotes = ⌈18,58 × 3⌉ = 56",
        ],
      },
      {
        title: "50 × 28 ft, beiral de 1,5 ft, telhado 8/12 com subtelha",
        steps: [
          "Área em planta = 53 × 31 = 1643 ft²",
          "Fator de inclinação = √(1 + (8 ÷ 12)²) ≈ 1,2019, pelo que a área do telhado ≈ 1974,64 ft²",
          "Com 12% de desperdício: 2211,60 ft², ou 22,12 squares e ⌈66,35⌉ = 67 pacotes",
          "Subtelha a 400 ft² por rolo: ⌈5,53⌉ = 6 rolos",
        ],
      },
    ],
    assumptions: [
      "O telhado é um retângulo simples em planta, com a mesma inclinação em todas as águas. Trapeiras, laróis, chaminés, claraboias, plantas em L e águas com inclinações diferentes exigem material adicional e devem ser medidos secção a secção.",
      "Um telhado de quatro águas e um de duas águas sobre a mesma planta e com a mesma inclinação têm a mesma área; a margem de desperdício predefinida mais alta do telhado de quatro águas tem em conta os cortes adicionais.",
      "Os pacotes por square e a cobertura da subtelha variam consoante o produto. Use os valores indicados na embalagem.",
      "Trata-se apenas de uma estimativa de materiais. A estrutura do telhado, a ventilação, a classificação de resistência ao fogo e os pormenores de instalação têm de seguir as instruções do fabricante e a regulamentação de construção local.",
    ],
    faqs: [
      { question: "O que é um square de cobertura?", answer: "Um square são 100 ft² de superfície de telhado, uma área de 10 × 10 ft. Nos EUA, os profissionais orçamentam e encomendam as telhas asfálticas ao square; 1 square são cerca de 9,29 m²." },
      { question: "Quantos pacotes de telhas asfálticas tem um square?", answer: "Muitas telhas asfálticas vêm em três pacotes por square, mas os produtos mais pesados podem vir em quatro ou mais pacotes mais pequenos. O rótulo do pacote indica a cobertura, por isso confirme-a e ajuste os pacotes por square." },
      { question: "Porque é que a área do telhado é maior do que a casa?", answer: "Porque o telhado é inclinado e sobressai das paredes. Um telhado de 6/12 tem cerca de 12% mais superfície do que a sua área em planta, e um de 12/12 cerca de 41% mais, antes de somar o beiral." },
    ],
    sourcesUsedFor: [
      "Um square de cobertura de 100 ft² e a embalagem habitual de três pacotes de telhas asfálticas por square, que varia consoante o produto.",
      "O método geral de estimar o material de cobertura a partir da área do telhado, dos squares e de uma margem de desperdício.",
    ],
  },
  text: {
    units: "Unidades",
    unitSystems: { imperial: "EUA (ft)", metric: "Métricas (m)" },
    length: "Comprimento do edifício",
    lengthHelp: "O comprimento exterior da planta do edifício, sem contar com o beiral.",
    width: "Largura do edifício",
    overhang: "Beiral (beirados e empenas)",
    overhangHelp: "Quanto o telhado sobressai das paredes em cada lado. É somado às duas extremidades do comprimento e da largura.",
    pitchMode: "Inclinação do telhado indicada como",
    pitchModes: { rise: "Altura em 12", angle: "Ângulo" },
    rise: "Altura por 12 de avanço",
    riseHelp: "Para um telhado de 6 em 12 (6/12), introduza 6. A altura e o avanço usam a mesma unidade.",
    angle: "Ângulo do telhado",
    roofType: "Tipo de telhado",
    roofTypes: { gable: "Duas águas", hip: "Quatro águas" },
    roofTypeHelp: "Com a mesma inclinação em todas as águas, um telhado de duas águas e um de quatro águas sobre a mesma planta têm a mesma área. Os de quatro águas exigem mais cortes, pelo que a margem de desperdício predefinida é maior.",
    waste: "Margem de desperdício",
    wasteHelp: "Material extra para cortes, fiadas de arranque, peças de cumeeira e de rincão e erros.",
    bundles: "Pacotes por square",
    bundlesHelp: "Muitas telhas asfálticas vêm em 3 pacotes por square (100 ft²), mas alguns produtos diferem. Confirme a cobertura indicada no pacote.",
    rollCoverage: "Cobertura da subtelha por rolo (opcional)",
    rollCoverageHelp: "A cobertura útil indicada no rótulo do rolo, já descontadas as sobreposições. Deixe em branco para não contar os rolos.",
    errors: {
      angle: "O ângulo do telhado tem de ser inferior a 90°.",
    },
    squares: "Squares de cobertura (com desperdício)",
    caption: "{area} de telhado mais {waste} de desperdício; 1 square = 100 ft² (9,29 m²).",
    planArea: "Planta incluindo o beiral",
    pitchFactor: "Fator de inclinação (área do telhado ÷ área em planta)",
    pitchText: "Inclinação",
    pitchValue: "{rise} em 12",
    angleOut: "Ângulo do telhado",
    roofArea: "Área do telhado",
    roofAreaOther: "Área do telhado noutras unidades",
    areaWithWaste: "Área do telhado com desperdício",
    squaresNoWaste: "Squares sem desperdício",
    bundlesOut: "Pacotes de telhas asfálticas",
    rolls: "Rolos de subtelha",
    notes: {
      hip: "Um telhado de quatro águas com a mesma inclinação nas quatro águas tem a mesma área que um de duas águas sobre a mesma planta; apenas exige mais peças cortadas e peças de rincão.",
      shape: "Pressupõe-se um telhado retangular simples. Trapeiras, laróis, chaminés, claraboias e plantas em L exigem material adicional; nesses casos, meça cada secção separadamente.",
      bundles: "Os pacotes são arredondados por excesso a pacotes inteiros. Não estão incluídas peças de cumeeira, faixas de arranque, pingadeiras, rufos nem pregos.",
    },
  },
};

export default pt;
