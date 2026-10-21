import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SurfaceAreaText } from "../text/en";

const pt: CalculatorTranslation<SurfaceAreaText> = {
  content: {
    title: "Calculadora de área de superfície",
    shortTitle: "Área de superfície",
    summary: "Calcule a área total, lateral e da base de um cubo, paralelepípedo, cilindro, esfera, hemisfério, cone ou pirâmide quadrangular.",
    metaTitle: "Área de superfície – Paralelepípedo, cilindro, cone, esfera",
    metaDescription:
      "Calcule a área total de sete sólidos, com a área lateral, a área da base e a geratriz ou apótema, em mm, cm, m, in ou ft, com totais em m² e ft².",
    keywords: ["calculadora de área de superfície", "área do cilindro", "área do cone", "área da esfera", "área lateral", "geratriz", "área da pirâmide", "área total"],
    intro: [
      "A área de superfície é a área total de todas as faces ou superfícies curvas de um sólido. Indica quanta tinta, papel de embrulho, chapa metálica ou tecido é preciso para cobrir completamente um objeto.",
      "Escolha um de sete sólidos e introduza as suas dimensões numa única unidade. Além do total, a calculadora mostra a área lateral (os lados sem as bases), a área da base e, nos cones e pirâmides, a geratriz ou o apótema. O total é dado também em metros quadrados e pés quadrados.",
    ],
    howToUse: [
      "Escolha a forma.",
      "Escolha a unidade das suas medidas.",
      "Introduza as dimensões indicadas para essa forma, usando o raio (metade do diâmetro) nas formas redondas e a altura perpendicular nos cones e pirâmides.",
      "Consulte a área total e as áreas parciais por baixo.",
    ],
    formulas: [
      { title: "Cubo e paralelepípedo", expression: "A = 6a²\nA = 2(lw + lh + wh)", explanation: "Some as áreas das seis faces retangulares." },
      {
        title: "Cilindro",
        expression: "A = 2πr² + 2πrh",
        explanation: "As duas bases circulares mais a superfície lateral curva, que se desenrola num retângulo com 2πr de largura e h de altura.",
      },
      {
        title: "Esfera e hemisfério",
        expression: "A = 4πr²\nA = 2πr² + πr² = 3πr²",
        explanation: "Um hemisfério fechado tem metade da superfície curva da esfera mais a sua base circular plana.",
      },
      { title: "Cone", expression: "s = √(r² + h²)\nA = πr² + πrs", explanation: "O círculo da base mais a superfície lateral πrs, em que s é a geratriz." },
      {
        title: "Pirâmide quadrangular",
        expression: "s = √((a/2)² + h²)\nA = a² + 2as",
        explanation: "A base quadrada mais quatro triângulos, cada um com base a e altura s (o apótema de uma face).",
      },
    ],
    examples: [
      {
        title: "Uma caixa de envio de 30 × 20 × 10 cm",
        steps: ["lw = 600, lh = 300, wh = 200", "A = 2 × (600 + 300 + 200) = 2200 cm²", "2200 cm² = 0,22 m²"],
      },
      {
        title: "Um cone com 0,6 m de raio e 0,8 m de altura",
        steps: ["s = √(0,6² + 0,8²) = 1 m", "Base = π × 0,36 ≈ 1,131 m², lateral = π × 0,6 × 1 ≈ 1,885 m²", "A ≈ 1,131 + 1,885 ≈ 3,016 m²"],
      },
      {
        title: "Uma pirâmide quadrangular com 6 ft de base e 4 ft de altura",
        steps: ["s = √(3² + 4²) = 5 ft", "Lateral = 2 × 6 × 5 = 60 ft², base = 36 ft²", "A = 36 + 60 = 96 ft²"],
      },
    ],
    assumptions: [
      "As formas são ideais e retas: os cones e as pirâmides têm o vértice exatamente por cima do centro da base, e as formas redondas são círculos perfeitos.",
      "Os totais referem-se a sólidos fechados. Um cilindro inclui as duas bases, um cone e uma pirâmide incluem a base e um hemisfério inclui a face plana. Para formas abertas, use a área lateral ou curva.",
      "Os objetos reais têm costuras, sobreposições e espessura. Acrescente uma margem ao comprar material para as cobrir.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre área lateral e área total?",
        answer: "A área lateral conta apenas os lados. A área total acrescenta a base e, nos prismas e cilindros, também o topo.",
      },
      {
        question: "O que é a geratriz ou o apótema?",
        answer:
          "É a distância medida ao longo da superfície inclinada, desde a aresta da base até ao vértice. É maior do que a altura vertical e obtém-se pelo teorema de Pitágoras.",
      },
      {
        question: "Como converto cm² em m²?",
        answer: "Divida por 10 000, porque um metro tem 100 cm e a área varia com o quadrado: 100 × 100 = 10 000.",
      },
    ],
    sourcesUsedFor: [
      "Fórmulas da área de superfície do paralelepípedo, do cilindro, da esfera e do cone.",
      "Aplicação prática das fórmulas da área de superfície do cilindro e da esfera.",
    ],
  },
  text: {
    shape: "Forma",
    shapes: {
      cube: "Cubo",
      box: "Paralelepípedo retângulo (caixa)",
      cylinder: "Cilindro (fechado)",
      sphere: "Esfera",
      hemisphere: "Hemisfério (com base plana)",
      cone: "Cone (com base)",
      pyramid: "Pirâmide quadrangular (com base)",
    },
    unit: "Unidade de comprimento",
    unitHelp: "Introduza todas as dimensões nesta unidade. As áreas são apresentadas na mesma unidade ao quadrado.",
    units: { mm: "Milímetros (mm)", cm: "Centímetros (cm)", m: "Metros (m)", in: "Polegadas (in)", ft: "Pés (ft)" },
    edge: "Comprimento da aresta (a)",
    length: "Comprimento (l)",
    width: "Largura (w)",
    height: "Altura (h)",
    heightHelp: "A altura perpendicular, medida na vertical a partir da base, e não ao longo do lado inclinado.",
    radius: "Raio (r)",
    radiusHelp: "Metade do diâmetro.",
    baseSide: "Lado da base (a)",
    total: "Área total",
    formula: {
      cube: "A = 6a²",
      box: "A = 2(lw + lh + wh)",
      cylinder: "A = 2πr² + 2πrh",
      sphere: "A = 4πr²",
      hemisphere: "A = 3πr²",
      cone: "A = πr² + πr√(r² + h²)",
      pyramid: "A = a² + 2a√((a/2)² + h²)",
    },
    lateral: "Área lateral (só os lados)",
    curved: "Área da superfície curva",
    base: "Área da base",
    eachEnd: "Área de cada base circular",
    face: "Área de uma face",
    slant: "Geratriz ou apótema",
    inSquareMeters: "Total em metros quadrados",
    inSquareFeet: "Total em pés quadrados",
    note: "A área lateral deixa de fora as faces superior e inferior, que é o que precisa para um rótulo, uma parede ou um revestimento lateral.",
  },
};

export default pt;
