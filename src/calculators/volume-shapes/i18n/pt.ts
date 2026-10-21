import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { VolumeShapesText } from "../text/en";

const pt: CalculatorTranslation<VolumeShapesText> = {
  content: {
    title: "Calculadora de volume de sólidos",
    shortTitle: "Volume",
    summary:
      "Calcule o volume de um cubo, paralelepípedo, cilindro, esfera, hemisfério, cone ou pirâmide quadrangular, com o resultado em litros, metros cúbicos e galões dos EUA.",
    metaTitle: "Calculadora de volume – Cilindro, esfera, cone e mais",
    metaDescription:
      "Calcule o volume de um cubo, paralelepípedo, cilindro, esfera, hemisfério, cone ou pirâmide quadrangular em mm, cm, m, in ou ft, com litros e galões dos EUA.",
    keywords: ["calculadora de volume", "volume do cilindro", "volume da esfera", "volume do cone", "pés cúbicos", "metros cúbicos", "litros", "volume da pirâmide"],
    intro: [
      "O volume é o espaço que um sólido ocupa. Esta calculadora abrange sete sólidos comuns, desde um simples cubo até um cone ou uma pirâmide quadrangular, para dimensionar um depósito, um vaso, uma caixa ou uma figura de um trabalho de casa.",
      "Escolha uma forma e uma unidade de comprimento e escreva as dimensões necessárias. O resultado aparece nessa unidade ao cubo e é também convertido em litros, metros cúbicos e galões dos EUA, o que ajuda quando precisa de saber quanto líquido ou material cabe lá dentro.",
    ],
    howToUse: [
      "Escolha a forma.",
      "Escolha a unidade em que mediu. Todas as dimensões têm de usar a mesma unidade.",
      "Introduza as dimensões indicadas para essa forma. Nas formas redondas, use o raio, que é metade do diâmetro.",
      "Consulte o volume e as conversões em litros, metros cúbicos e galões dos EUA.",
    ],
    formulas: [
      {
        title: "Cubo e paralelepípedo",
        expression: "V = a³\nV = l × w × h",
        explanation: "Um cubo tem três arestas iguais a; num paralelepípedo multiplicam-se o comprimento, a largura e a altura.",
      },
      {
        title: "Cilindro e cone",
        expression: "V = πr²h\nV = 1/3 πr²h",
        explanation: "Um cone tem exatamente um terço do volume do cilindro com o mesmo raio da base r e a mesma altura h.",
      },
      { title: "Esfera e hemisfério", expression: "V = 4/3 πr³\nV = 2/3 πr³", explanation: "Um hemisfério é metade de uma esfera de raio r." },
      { title: "Pirâmide quadrangular", expression: "V = 1/3 a²h", explanation: "Um terço da área da base a² vezes a altura perpendicular h." },
      {
        title: "Conversões de unidades",
        expression: "1 m³ = 1000 L\n1 US gal = 3,785411784 L",
        explanation: "O volume na sua unidade ao cubo é convertido em metros cúbicos com o fator de comprimento exato e depois em litros e galões.",
      },
    ],
    examples: [
      {
        title: "Um depósito de água cilíndrico com 1,2 m de altura e 0,5 m de raio",
        steps: ["V = π × 0,5² × 1,2", "= π × 0,3 ≈ 0,94248 m³", "0,94248 m³ × 1000 ≈ 942,48 L, cerca de 248,98 US gal"],
      },
      {
        title: "Uma bola com 4 polegadas de raio",
        steps: ["V = 4/3 × π × 4³", "= 4/3 × π × 64 ≈ 268,08 in³", "Isto corresponde a cerca de 4,39 L ou 1,16 US gal"],
      },
      {
        title: "Uma pirâmide quadrangular com 9 cm de base e 15 cm de altura",
        steps: ["Área da base = 9² = 81 cm²", "V = 1/3 × 81 × 15 = 405 cm³", "405 cm³ = 0,405 L"],
      },
    ],
    assumptions: [
      "As formas são ideais: as arestas são retas, as formas redondas são perfeitamente circulares e o cilindro, o cone e a pirâmide são retos (o vértice ou o topo fica exatamente por cima do centro da base).",
      "O resultado é o espaço delimitado pelas dimensões exteriores. Num recipiente com paredes grossas, meça o interior para saber quanto leva.",
      "Os galões dos EUA são galões para líquidos de 3,785411784 L. Os galões imperiais não são apresentados.",
    ],
    faqs: [
      {
        question: "Como calculo o volume se só souber o diâmetro?",
        answer: "Divida o diâmetro por dois para obter o raio e introduza o raio. Um vaso com 30 cm de largura tem um raio de 15 cm.",
      },
      {
        question: "Quantos litros tem um metro cúbico?",
        answer: "Exatamente 1000. Um litro é o volume de um cubo com 10 cm de aresta, pelo que 1000 cm³ fazem 1 L.",
      },
      {
        question: "Porque é que um cone tem um terço do volume de um cilindro?",
        answer:
          "Um cone estreita de forma regular até um ponto, e somar as suas fatias circulares da base ao vértice dá exatamente um terço de πr²h. O mesmo raciocínio faz com que uma pirâmide tenha um terço do volume do paralelepípedo com a mesma base e a mesma altura.",
      },
    ],
    sourcesUsedFor: [
      "Fórmulas do volume do paralelepípedo, do cilindro, da esfera e do cone.",
      "O galão dos EUA de 231 polegadas cúbicas (3,785411784 L) e a polegada de 2,54 cm.",
    ],
  },
  text: {
    shape: "Forma",
    shapes: {
      cube: "Cubo",
      box: "Paralelepípedo retângulo (caixa)",
      cylinder: "Cilindro",
      sphere: "Esfera",
      hemisphere: "Hemisfério",
      cone: "Cone",
      pyramid: "Pirâmide quadrangular",
    },
    unit: "Unidade de comprimento",
    unitHelp: "Introduza todas as dimensões nesta unidade. O volume é apresentado na mesma unidade ao cubo.",
    units: { mm: "Milímetros (mm)", cm: "Centímetros (cm)", m: "Metros (m)", in: "Polegadas (in)", ft: "Pés (ft)" },
    edge: "Comprimento da aresta (a)",
    length: "Comprimento (l)",
    width: "Largura (w)",
    height: "Altura (h)",
    heightHelp: "A altura perpendicular, medida na vertical desde a base até ao topo ou ao vértice.",
    radius: "Raio (r)",
    radiusHelp: "Metade do diâmetro.",
    baseSide: "Lado da base (a)",
    volume: "Volume",
    formula: {
      cube: "V = a³",
      box: "V = l × w × h",
      cylinder: "V = πr²h",
      sphere: "V = 4/3 πr³",
      hemisphere: "V = 2/3 πr³",
      cone: "V = 1/3 πr²h",
      pyramid: "V = 1/3 a²h",
    },
    liters: "Em litros",
    cubicMeters: "Em metros cúbicos",
    usGallons: "Em galões dos EUA",
    note: "1 litro equivale a 1000 cm³ e 1 galão dos EUA a 3,785411784 litros.",
  },
};

export default pt;
