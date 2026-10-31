import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AspectRatioText } from "../text/en";

const pt: CalculatorTranslation<AspectRatioText> = {
  content: {
    title: "Calculadora de relação de aspeto",
    shortTitle: "Relação de aspeto",
    summary:
      "Encontre a relação de aspeto de uma imagem ou de um ecrã, redimensione mantendo a proporção sem distorção, ou calcule a largura e a altura de um ecrã a partir da diagonal.",
    metaTitle: "Relação de aspeto – Simplificar, redimensionar, ecrãs",
    metaDescription:
      "Reduza largura × altura à relação de aspeto, veja a proporção comum mais próxima, redimensione em píxeis inteiros ou obtenha as medidas de um ecrã.",
    keywords: ["relação de aspeto", "proporção 16:9", "redimensionar imagem", "tamanho do ecrã", "proporção de ecrã", "proporção 21:9", "medidas da televisão pela diagonal"],
    intro: [
      "A relação de aspeto descreve a forma de uma imagem ou de um ecrã: a largura em comparação com a altura, escrita L:A. Um vídeo de 1920 × 1080 e outro de 3840 × 2160 têm tamanhos diferentes, mas a mesma forma 16:9, pelo que um pode ser escalado para o outro sem deformar.",
      "Esta calculadora faz três coisas. Reduz qualquer largura e altura à menor relação de números inteiros e compara-a com os formatos comuns; calcula o lado em falta quando redimensiona para uma proporção; e converte a diagonal de um ecrã na sua largura, altura e área. Para razões gerais entre quaisquer grandezas, consulte a Calculadora de razões e proporções.",
    ],
    howToUse: [
      "Escolha o que pretende fazer.",
      "Para encontrar uma proporção, introduza a largura e a altura na mesma unidade, normalmente píxeis. Os decimais são escalados para números inteiros antes de a proporção ser reduzida.",
      "Para redimensionar, introduza a proporção (por exemplo, 16 e 9), escolha se conhece a nova largura ou a nova altura e introduza-a. O outro lado é apresentado de forma exata e arredondado a píxeis inteiros.",
      "Para um ecrã, introduza a diagonal em polegadas ou centímetros e a proporção. A largura, a altura e a área são apresentadas nas duas unidades.",
    ],
    formulas: [
      {
        title: "Proporção simplificada",
        expression: "L:A = (largura ÷ g) : (altura ÷ g), g = mdc(largura, altura)",
        explanation:
          "g é o máximo divisor comum, obtido com o algoritmo de Euclides. As medidas decimais são primeiro multiplicadas por uma potência de 10 para as tornar números inteiros.",
      },
      {
        title: "Redimensionamento",
        expression: "nova altura = nova largura × A ÷ L;  nova largura = nova altura × L ÷ A",
        explanation: "Manter a mesma proporção significa escalar os dois lados pelo mesmo fator.",
      },
      {
        title: "Tamanho do ecrã",
        expression: "largura = d × L ÷ √(L² + A²);  altura = d × A ÷ √(L² + A²)",
        explanation: "A diagonal d é a hipotenusa de um triângulo retângulo cujos lados estão na proporção L:A. A área é largura × altura.",
      },
      {
        title: "Diferença em relação a uma proporção comum",
        expression: "diferença = (largura ÷ altura) ÷ (Lc ÷ Ac) − 1",
        explanation: "Apresentada em percentagem. A proporção comum mais próxima é a que tem a menor diferença.",
      },
    ],
    examples: [
      {
        title: "Um monitor ultrapanorâmico de 2560 × 1080 píxeis",
        steps: [
          "mdc(2560, 1080) = 40",
          "2560 ÷ 40 = 64 e 1080 ÷ 40 = 27, pelo que a proporção é 64:27",
          "64 ÷ 27 ≈ 2,3704: 1,59 % mais larga do que «21:9» (2,3333) e 0,82 % mais estreita do que 2,39:1, a proporção comum mais próxima",
        ],
      },
      {
        title: "Redimensionar um diapositivo 4:3 para uma altura de 900 píxeis",
        steps: ["Nova largura = 900 × 4 ÷ 3 = 1200", "Os dois lados já são números inteiros, pelo que não é preciso arredondar"],
      },
      {
        title: "Um ecrã de 81 cm em 4:3",
        steps: ["√(4² + 3²) = 5", "Largura = 81 × 4 ÷ 5 = 64,8 cm; altura = 81 × 3 ÷ 5 = 48,6 cm", "Área = 64,8 × 48,6 = 3149,28 cm²"],
      },
    ],
    assumptions: [
      "A largura e a altura usam a mesma unidade e descrevem píxeis quadrados. Alguns formatos de vídeo antigos usam píxeis não quadrados, pelo que o tamanho armazenado e a forma apresentada diferem.",
      "A lista de proporções comuns serve apenas para comparação. «21:9», em particular, é uma designação comercial: os ecrãs de 2560 × 1080 são 64:27, e o formato panorâmico de cinema é muitas vezes indicado como 2,39:1.",
      "A diagonal de um ecrã é medida ao longo da imagem visível. As molduras e a curvatura dos ecrãs curvos não estão incluídas.",
    ],
    faqs: [
      {
        question: "Porque é que 1366 × 768 não é exatamente 16:9?",
        answer:
          "1366 × 768 reduz-se a 683:384, cerca de 1,7786:1, o que fica a menos de 0,05 % de 16:9 (1,7778:1). Os fabricantes arredondaram a largura para um número conveniente, por isso é vendido como 16:9, embora a proporção reduzida não o seja.",
      },
      {
        question: "Como mantenho a proporção exata ao redimensionar?",
        answer:
          "Escolha uma largura que seja múltipla da parte da largura da proporção. Em 16:9, qualquer largura múltipla de 16, como 1280 ou 1920, dá uma altura inteira. Outras larguras exigem arredondamento, o que altera ligeiramente a forma.",
      },
      {
        question: "Um ecrã 21:9 maior mostra mais do que um ecrã 16:9 com a mesma diagonal?",
        answer:
          "Não necessariamente. Com a mesma diagonal, um ecrã mais largo é mais baixo e a sua área é menor. Use o modo de tamanho do ecrã para as duas formas e compare a altura e a área.",
      },
    ],
    sourcesUsedFor: [
      "Que «21:9» é uma designação comercial para ecrãs ultrapanorâmicos cuja proporção real é 64:27 (cerca de 2,37:1), por exemplo 2560 × 1080.",
      "As resoluções de ecrãs ultrapanorâmicos e as suas proporções exatas, como 2560 × 1080 (64:27).",
      "A largura e a altura de um ecrã a partir da diagonal e da proporção, com o teorema de Pitágoras.",
    ],
  },
  text: {
    mode: "O que pretende fazer?",
    modes: {
      simplify: "Encontrar a proporção de um tamanho",
      resize: "Redimensionar para uma proporção",
      screen: "Tamanho do ecrã a partir da diagonal",
    },
    width: "Largura",
    height: "Altura",
    sizeHelp: "Em píxeis ou noutra unidade qualquer, desde que ambas usem a mesma. São permitidos decimais.",
    ratioWidth: "Largura da proporção (L)",
    ratioHeight: "Altura da proporção (A)",
    ratioHelp: "Para 16:9, introduza 16 e 9. Proporções decimais como 2,39:1 também funcionam.",
    knownSide: "Que novo lado conhece?",
    knownSides: { width: "A nova largura", height: "A nova altura" },
    newSize: "Nova medida",
    newSizeHelp: "A largura ou a altura que pretende, normalmente em píxeis.",
    diagonal: "Diagonal do ecrã",
    lengthUnit: "Unidade de comprimento",
    lengthUnits: { in: "Polegadas (in)", cm: "Centímetros (cm)" },
    errors: {
      tooPrecise: "Use no máximo 6 casas decimais para que a proporção possa ser simplificada de forma exata.",
      tooLarge: "Estes valores são demasiado grandes para serem simplificados de forma exata. Use números menores.",
    },
    ratioText: "{w}:{h}",
    sizeText: "{w} × {h}",
    sizeUnitText: "{w} × {h} {unit}",
    primaryRatio: "Relação de aspeto simplificada",
    primaryResize: "Novo tamanho (píxeis inteiros)",
    primaryScreen: "Largura × altura do ecrã",
    captionSimplify: "{w} × {h} reduz-se a {ratio} dividindo os dois lados por {gcd}.",
    captionResize: "Mantendo a forma {ratio}: {side} de {size}.",
    captionScreen: "Uma diagonal de {diagonal} {unit} em {ratio}.",
    sides: { width: "uma largura", height: "uma altura" },
    decimalRatio: "Proporção decimal (largura ÷ altura)",
    decimalSuffix: ":1",
    nearest: "Proporção comum mais próxima",
    difference: "Diferença em relação à proporção comum mais próxima",
    orientation: "Orientação",
    orientations: { landscape: "Horizontal (mais larga do que alta)", portrait: "Vertical (mais alta do que larga)", square: "Quadrada" },
    pixels: "Total de píxeis (se o tamanho estiver em píxeis)",
    inputRatio: "Proporção na forma irredutível",
    exactWidth: "Largura exata",
    exactHeight: "Altura exata",
    roundedWidth: "Largura arredondada a píxeis inteiros",
    roundedHeight: "Altura arredondada a píxeis inteiros",
    roundedRatio: "Proporção decimal após arredondamento",
    screenWidth: "Largura",
    screenHeight: "Altura",
    screenArea: "Área do ecrã",
    otherWidth: "Largura em {unit}",
    otherHeight: "Altura em {unit}",
    otherArea: "Área em {unit}",
    table: {
      caption: "Proporções comuns comparadas com a sua",
      ratio: "Proporção",
      decimal: "Decimal (L ÷ A)",
      difference: "A sua proporção em comparação",
    },
    notes: {
      marketing:
        "«21:9» é uma designação comercial. Os monitores ultrapanorâmicos como 2560 × 1080 são na realidade 64:27 (cerca de 2,37:1), e 3440 × 1440 é 43:18 (cerca de 2,39:1).",
      rounding:
        "Arredondar a píxeis inteiros altera muito ligeiramente a forma. Larguras múltiplas de {w}, ou alturas múltiplas de {h}, mantêm a proporção exata.",
      roundingSimple: "Arredondar a píxeis inteiros altera muito ligeiramente a forma.",
      diagonal:
        "Os tamanhos de ecrã são medidos na diagonal da imagem visível. A moldura não está incluída, e os ecrãs curvos são medidos ao longo da curva.",
      difference: "A diferença compara a sua proporção decimal com cada proporção comum: um valor positivo significa que a sua forma é mais larga.",
    },
  },
};

export default pt;
