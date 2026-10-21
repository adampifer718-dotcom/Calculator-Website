import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TileText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const pt: CalculatorTranslation<TileText> = {
  content: {
    title: "Calculadora de azulejos e mosaicos",
    shortTitle: "Azulejos e mosaicos",
    summary: "Estime quantas peças e caixas precisa para um pavimento ou uma parede a partir da área, do tamanho da peça, da junta e de uma margem de desperdício.",
    metaTitle: "Calculadora de azulejos – Quantas peças e caixas comprar",
    metaDescription:
      "Estime as peças para um pavimento ou uma parede a partir da área, do tamanho da peça e da largura da junta, com margem de desperdício e caixas inteiras.",
    keywords: ["calculadora de azulejos", "quantos azulejos preciso", "mosaico para pavimento", "azulejo de parede", "junta", "caixas de azulejos", "desperdício de azulejos", "frente de cozinha"],
    intro: [
      "Antes de comprar azulejos ou mosaicos precisa de um número de peças, e não apenas de uma área. Esta calculadora divide a área a revestir pelo espaço que cada peça ocupa, incluindo a junta à sua volta, e acrescenta uma margem de desperdício para cortes e quebras.",
      "Introduza as dimensões da área e de uma peça, escolha a largura da junta e uma percentagem de desperdício e, se quiser, o número de peças por caixa. Obtém o número de peças a comprar e, se tiver indicado o conteúdo da caixa, o número de caixas.",
    ],
    howToUse: [
      "Escolha unidades dos EUA (área em pés, peça e junta em polegadas) ou unidades métricas (área em metros, peça e junta em milímetros).",
      "Introduza o comprimento e a largura da área a revestir. Numa divisão em L, divida-a em retângulos, calcule cada um e some os resultados.",
      "Introduza o comprimento e a largura da peça, bem como a largura da junta.",
      "Defina uma margem de desperdício e, se o souber, o número de peças por caixa.",
      "Consulte as peças necessárias e as caixas a comprar.",
    ],
    formulas: [
      {
        title: "Área por peça com junta",
        expression: "a = (comprimento da peça + g) × (largura da peça + g)",
        explanation: "Cada peça ocupa o seu próprio tamanho mais a largura de uma junta g em cada direção.",
      },
      {
        title: "Peças necessárias",
        expression: "peças = ⌈área ÷ a × (1 + desperdício%)⌉",
        explanation:
          "Divida a área pelo espaço por peça, acrescente a margem de desperdício e arredonde para cima até uma peça inteira. Os tamanhos das peças são convertidos com 144 in² por ft² ou 1 000 000 mm² por m².",
      },
      { title: "Caixas", expression: "caixas = ⌈peças ÷ peças por caixa⌉", explanation: "Arredonde para cima, porque as caixas são vendidas inteiras." },
    ],
    examples: [
      {
        title: "Um pavimento de 10 × 14 ft com peças de 18 polegadas",
        steps: [
          "Área = 10 × 14 = 140 ft²",
          "Por peça = 18,25 × 18,25 = 333,0625 in² ≈ 2,3129 ft²",
          "140 ÷ 2,3129 ≈ 60,53 peças; × 1,10 ≈ 66,58, arredondado para cima: 67 peças",
        ],
      },
      {
        title: "Uma casa de banho de 3,2 × 2,5 m com peças de 600 × 300 mm, 8 por caixa",
        steps: [
          "Área = 3,2 × 2,5 = 8 m²",
          "Por peça = 602 × 302 = 181 804 mm² = 0,181804 m²",
          "8 ÷ 0,181804 ≈ 44,00; × 1,12 ≈ 49,28, arredondado para cima: 50 peças",
          "50 ÷ 8 = 6,25, pelo que são 7 caixas",
        ],
      },
      {
        title: "Uma frente de cozinha de 8 × 5 ft com azulejos de 4 polegadas",
        steps: [
          "Área = 8 × 5 = 40 ft²",
          "Por peça = 4,0625 × 4,0625 ≈ 16,504 in² ≈ 0,11461 ft²",
          "40 ÷ 0,11461 ≈ 349,01; × 1,15 ≈ 401,36, arredondado para cima: 402 peças",
        ],
      },
    ],
    assumptions: [
      "A área é um retângulo simples. As colocações reais com muitos cortes, frisos, nichos ou padrões como a diagonal ou a espinha podem precisar de mais peças do que esta estimativa.",
      "A margem de desperdício é escolhida por si. Cerca de 10% é um ponto de partida habitual para uma colocação reta; é uma regra prática comum, não uma norma.",
      "A estimativa abrange apenas as peças. Não inclui cola, argamassa de juntas, remates nem a preparação da superfície por baixo; para isso, siga as instruções dos fabricantes das peças e dos produtos.",
    ],
    faqs: [
      {
        question: "Porquê incluir a junta?",
        answer:
          "Cada junta acrescenta um pouco ao espaço que cada peça cobre, pelo que são precisas menos peças. Com peças pequenas e juntas largas, a diferença pode ser de vários pontos percentuais.",
      },
      {
        question: "Quantas peças a mais devo comprar?",
        answer:
          "Muitos aplicadores acrescentam cerca de 10% para uma colocação reta e mais para colocações na diagonal, com padrões ou em divisões com muitos cantos. Guardar algumas peças de reserva também ajuda em reparações futuras.",
      },
      {
        question: "Como meço uma divisão em L?",
        answer: "Divida-a em dois retângulos, use a calculadora para cada um com as mesmas definições de peça e some as duas quantidades de peças.",
      },
    ],
    sourcesUsedFor: ["Área de um retângulo, usada tanto para a área a revestir como para cada peça com a respetiva junta."],
  },
  text: {
    units: "Unidades",
    unitSystems: { imperial: "EUA (ft, in)", metric: "Métricas (m, mm)" },
    areaLength: "Comprimento da área",
    areaWidth: "Largura da área",
    areaHelp: "A área de pavimento ou de parede a revestir, medida como um retângulo.",
    tileLength: "Comprimento da peça",
    tileWidth: "Largura da peça",
    grout: "Largura da junta",
    groutHelpImperial: "O espaço entre peças. 1/8 in são 0,125 in; introduza 0 se não houver junta.",
    groutHelpMetric: "O espaço entre peças. Introduza 0 se não houver junta.",
    waste: "Margem de desperdício",
    wasteHelp:
      "Peças a mais para cortes, quebras e reserva. Cerca de 10% é habitual numa colocação reta; as colocações na diagonal e com padrões precisam de mais.",
    perBox: "Peças por caixa (opcional)",
    perBoxHelp: "Deixe em branco se comprar as peças avulso.",
    tilesNeeded: "Peças necessárias",
    caption: "{area} a {perTile} por peça, junta incluída, mais {waste} de desperdício.",
    tilesBeforeWaste: "Peças sem desperdício",
    area: "Área a revestir",
    tileFootprint: "Área por peça com junta",
    boxes: "Caixas a comprar",
    boxesCaption: "{boxes} ({tiles})",
    boxesCount: forms("{n} caixa", "{n} caixas"),
    tilesCount: forms("{n} peça", "{n} peças"),
    spare: "Peças de sobra nas caixas",
    notes: {
      layout: "Pressupõe uma área retangular simples. As colocações reais com muitos cortes, frisos ou padrões podem precisar de mais peças.",
      batch: "Se possível, compre todas as peças do mesmo lote, porque a cor pode variar de lote para lote.",
    },
  },
};

export default pt;
