import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TriangleText } from "../text/en";

const pt: CalculatorTranslation<TriangleText> = {
  content: {
    title: "Calculadora de triângulos",
    shortTitle: "Triângulos",
    summary: "Resolva qualquer triângulo a partir de três lados e ângulos conhecidos (LLL, LAL, ALA, LAA ou LLA) e obtenha a área, o perímetro, o tipo e os raios inscrito e circunscrito.",
    metaTitle: "Calculadora de triângulos – Resolver LLL, LAL, ALA e LLA",
    metaDescription:
      "Resolva um triângulo a partir de três lados, dois lados e um ângulo ou dois ângulos e um lado. Trata o caso ambíguo LLA e calcula área, perímetro e tipo.",
    keywords: ["resolver triângulo", "lei dos senos", "lei dos cossenos", "caso ambíguo", "área do triângulo", "lado em falta", "ângulo em falta", "raio circunscrito"],
    intro: [
      "Um triângulo fica determinado por três medidas, desde que pelo menos uma seja um lado. Esta calculadora aceita qualquer um desses conjuntos, LLL, LAL, ALA, LAA ou LLA, e determina os lados e ângulos em falta com a lei dos cossenos e a lei dos senos.",
      "Calcula também a área, o perímetro, o raio da circunferência inscrita e o da circunscrita, e indica se o triângulo é acutângulo, retângulo ou obtusângulo e se é equilátero, isósceles ou escaleno. No caso LLA, dois triângulos diferentes podem corresponder aos mesmos valores; a calculadora mostra ambos quando isso acontece e avisa quando não existe nenhum triângulo. Para triângulos retângulos a partir de dois lados, a Calculadora do teorema de Pitágoras é mais rápida.",
    ],
    howToUse: [
      "Escolha os valores que conhece. O lado a é sempre oposto ao ângulo A, b oposto a B e c oposto a C.",
      "Introduza os lados numa mesma unidade e os ângulos em graus.",
      "Consulte a área e depois a tabela com os três lados e ângulos.",
      "No caso LLA, leia a nota: pode existir um segundo triângulo, apresentado à parte.",
    ],
    formulas: [
      {
        title: "Lei dos cossenos",
        expression: "c² = a² + b² − 2ab cos C\ncos A = (b² + c² − a²) ÷ (2bc)",
        explanation: "Obtém o terceiro lado a partir de dois lados e do ângulo entre eles (LAL), ou todos os ângulos a partir dos três lados (LLL).",
      },
      {
        title: "Lei dos senos",
        expression: "a ÷ sin A = b ÷ sin B = c ÷ sin C = 2R",
        explanation: "Obtém os lados restantes quando se conhecem dois ângulos (ALA, LAA) e o segundo ângulo no caso LLA. R é o raio da circunferência circunscrita.",
      },
      {
        title: "Caso ambíguo LLA",
        expression: "h = b sin A\na < h: nenhum triângulo; a = h: um triângulo retângulo\nh < a < b: dois triângulos; a ≥ b: um triângulo",
        explanation: "Para um ângulo A agudo, sin B = b sin A ÷ a tem dois ângulos possíveis, B e 180° − B. Se A for igual ou superior a 90°, só existe triângulo quando a > b.",
      },
      {
        title: "Área e raios",
        expression: "Área = √(s(s − a)(s − b)(s − c)), s = (a + b + c) ÷ 2\nr = Área ÷ s\nR = abc ÷ (4 × Área)",
        explanation: "A fórmula de Herão dá a área a partir dos três lados. r é o raio da circunferência inscrita e R o da circunscrita.",
      },
    ],
    examples: [
      {
        title: "Três lados: 5, 6 e 7",
        steps: [
          "cos A = (36 + 49 − 25) ÷ 84 ≈ 0,7143, pelo que A ≈ 44,4153°; do mesmo modo, B ≈ 57,1217° e C ≈ 78,4630°",
          "s = 9, Área = √(9 × 4 × 3 × 2) = √216 ≈ 14,6969",
          "Todos os ângulos são inferiores a 90° e todos os lados são diferentes: um triângulo acutângulo e escaleno",
        ],
      },
      {
        title: "Dois lados de 8 e 11 com um ângulo de 37° entre eles",
        steps: ["c² = 64 + 121 − 176 × cos 37° ≈ 44,4401, pelo que c ≈ 6,6663", "Área = ½ × 8 × 11 × sin 37° ≈ 26,4799", "B ≈ 96,7625°, pelo que o triângulo é obtusângulo"],
      },
      {
        title: "LLA: a = 6, b = 8 e A = 35° (dois triângulos)",
        steps: [
          "h = 8 × sin 35° ≈ 4,5886; como 4,5886 < 6 < 8, há dois triângulos possíveis",
          "sin B = 8 × sin 35° ÷ 6 ≈ 0,7648, pelo que B ≈ 49,8864° ou 130,1136°",
          "Triângulo 1: C ≈ 95,1136°, c ≈ 10,4190, área ≈ 23,9045. Triângulo 2: C ≈ 14,8864°, c ≈ 2,6874, área ≈ 6,1657",
        ],
      },
    ],
    assumptions: [
      "O triângulo é plano (euclidiano). Os ângulos são em graus e todos os lados usam a mesma unidade de comprimento.",
      "Cada ângulo tem de ser maior do que 0° e menor do que 180°, a soma dos ângulos dados tem de ser inferior a 180° e três lados têm de satisfazer a desigualdade triangular.",
      "A classificação em acutângulo, retângulo ou obtusângulo e a igualdade de lados são avaliadas com uma tolerância mínima, para que os arredondamentos internos do computador não escondam um ângulo reto ou lados iguais.",
      "Os resultados só são arredondados na apresentação.",
    ],
    faqs: [
      {
        question: "Porque é que o caso LLA pode dar dois triângulos?",
        answer: "Quando o lado oposto ao ângulo conhecido é mais curto do que o outro lado conhecido, mas mais comprido do que a altura b × sin A, pode encontrar o terceiro lado em dois pontos. Um dá um ângulo B agudo e o outro o seu suplementar, 180° − B.",
      },
      {
        question: "Porque é que AAA não é uma opção?",
        answer: "Três ângulos fixam a forma, mas não o tamanho: qualquer cópia ampliada ou reduzida tem os mesmos ângulos. É preciso conhecer pelo menos o comprimento de um lado.",
      },
      {
        question: "Como verifico se três comprimentos formam um triângulo?",
        answer: "Cada lado tem de ser mais curto do que a soma dos outros dois. Os comprimentos 3, 4 e 8 falham porque 3 + 4 é menor do que 8.",
      },
    ],
    sourcesUsedFor: [
      "A lei dos cossenos para LLL e LAL e a fórmula de Herão para a área.",
      "A lei dos senos para ALA, LAA e LLA, incluindo o caso ambíguo.",
    ],
  },
  text: {
    given: "Valores conhecidos",
    modes: {
      sss: "LLL: três lados a, b e c",
      sas: "LAL: lados a, b e o ângulo C entre eles",
      asa: "ALA: ângulos A, B e o lado c entre eles",
      aas: "LAA: ângulos A, B e o lado a oposto a A",
      ssa: "LLA: lados a, b e o ângulo A oposto a a",
    },
    givenHelp: "O lado a é oposto ao ângulo A, o lado b ao ângulo B e o lado c ao ângulo C.",
    sideA: "Lado a",
    sideB: "Lado b",
    sideC: "Lado c",
    angleA: "Ângulo A",
    angleB: "Ângulo B",
    angleC: "Ângulo C",
    angleHelp: "Em graus, entre 0 e 180.",
    notTriangle: "Estes lados não podem formar um triângulo: cada lado tem de ser mais curto do que a soma dos outros dois.",
    angleRange: "Introduza um ângulo inferior a 180°.",
    angleSum: "A soma dos dois ângulos tem de ser inferior a 180°.",
    noSolution: "Nenhum triângulo tem estes valores: o lado a é demasiado curto para chegar ao terceiro lado. Tem de ser pelo menos b × sin A.",
    noSolutionObtuse: "Nenhum triângulo tem estes valores: quando o ângulo A é igual ou superior a 90°, o lado a tem de ser mais comprido do que o lado b.",
    area: "Área",
    areaTwo: "Área (triângulo 1)",
    caption: "Obtido com {method}.",
    methods: {
      sss: "a lei dos cossenos",
      sas: "a lei dos cossenos",
      asa: "a soma dos ângulos e a lei dos senos",
      aas: "a soma dos ângulos e a lei dos senos",
      ssa: "a lei dos senos",
    },
    perimeter: "Perímetro",
    classification: "Tipo",
    inradius: "Raio da circunferência inscrita (r)",
    circumradius: "Raio da circunferência circunscrita (R)",
    secondArea: "Área (triângulo 2)",
    secondPerimeter: "Perímetro (triângulo 2)",
    secondClassification: "Tipo (triângulo 2)",
    byAngle: { acute: "acutângulo", right: "retângulo", obtuse: "obtusângulo" },
    bySide: { equilateral: "equilátero", isosceles: "isósceles", scalene: "escaleno" },
    type: "{angle}, {side}",
    tableCaption: "Lados e ângulos",
    tableCaptionN: "Triângulo {n}: lados e ângulos",
    colVertex: "Vértice",
    colSide: "Lado oposto",
    colAngle: "Ângulo",
    rowA: "A",
    rowB: "B",
    rowC: "C",
    degrees: "{value}°",
    ambiguous: "Dois triângulos diferentes correspondem a estes valores (o caso ambíguo LLA). O ângulo B pode ser agudo ou obtuso; são apresentados ambos.",
    tolerance: "O tipo é avaliado com uma tolerância mínima, pelo que um ângulo reto ou lados iguais continuam a ser reconhecidos quando os arredondamentos do computador os fazem diferir no 10.º algarismo.",
  },
};

export default pt;
