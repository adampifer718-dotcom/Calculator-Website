import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { GravelMulchText } from "../text/en";

const pt: CalculatorTranslation<GravelMulchText> = {
  content: {
    title: "Calculadora de gravilha e cobertura do solo",
    shortTitle: "Gravilha e cobertura",
    summary: "Calcule quantas jardas cúbicas ou metros cúbicos de gravilha, brita ou cobertura do solo (mulch) deve encomendar, com o peso, os sacos e o custo.",
    metaTitle: "Calculadora de gravilha e cobertura do solo – Volume e sacos",
    metaDescription:
      "Estime a gravilha, a brita ou a cobertura do solo para uma área retangular ou circular em m³ ou jardas cúbicas, com o peso em toneladas, os sacos e o custo.",
    keywords: ["calcular gravilha", "quanta gravilha preciso", "calculadora de brita", "cobertura do solo", "mulch", "casca de pinheiro", "toneladas de gravilha", "sacos de mulch"],
    intro: [
      "A gravilha, a brita e a cobertura do solo (mulch) são vendidas por volume (jardas cúbicas ou metros cúbicos) ou por peso (toneladas curtas ou toneladas métricas). Para saber quanto encomendar, multiplique a área a cobrir pela espessura da camada e use a densidade aparente do material para converter esse volume em peso.",
      "Esta calculadora trata canteiros retangulares e circulares em unidades dos EUA ou métricas e mostra o volume nos dois sistemas, o peso, o número de sacos se comprar material ensacado e o custo a um preço por tonelada ou por jarda cúbica.",
    ],
    howToUse: [
      "Escolha unidades dos EUA (pés e polegadas) ou unidades métricas (metros e centímetros).",
      "Escolha um retângulo ou um círculo e introduza as suas dimensões.",
      "Introduza a espessura da camada que pretende espalhar.",
      "Escolha o material. Está preenchida uma densidade aparente típica; substitua-a pelo valor do seu fornecedor, se o tiver.",
      "Se quiser, introduza o tamanho do saco e um preço por tonelada ou por jarda cúbica (por tonelada métrica ou m³ no sistema métrico) para ver os sacos e o custo.",
    ],
    formulas: [
      { title: "Área", expression: "A = C × L, ou A = π × d² ÷ 4 para um círculo", explanation: "C e L são o comprimento e a largura, d o diâmetro." },
      { title: "Volume", expression: "V = A × espessura", explanation: "Com pés e polegadas, V (ft³) = A × espessura (in) ÷ 12 e 1 yd³ = 27 ft³. Com metros e centímetros, V (m³) = A × espessura (cm) ÷ 100." },
      { title: "Peso", expression: "peso = V × densidade aparente", explanation: "1 tonelada curta = 2000 lb; 1 tonelada métrica = 1000 kg." },
      { title: "Sacos", expression: "sacos = ⌈V ÷ tamanho do saco⌉", explanation: "Arredondado para cima até um saco inteiro." },
    ],
    examples: [
      { title: "Caminho de gravilha de 20 ft × 4 ft, com 3 in de espessura", steps: ["Volume = 20 × 4 × 3 ÷ 12 = 20 ft³", "= 20 ÷ 27 ≈ 0,74 yd³", "Peso = 20 × 100 = 2000 lb = 1 tonelada curta, ou seja, cerca de 45 US$ a 45 US$ por tonelada"] },
      { title: "Caldeira circular de árvore com 3 m de diâmetro e 8 cm de casca em sacos de 50 L", steps: ["Área = π × 3² ÷ 4 ≈ 7,07 m²", "Volume = 7,07 × 0,08 ≈ 0,565 m³ (565 L)", "Sacos = 565 ÷ 50 ≈ 11,3, pelo que deve comprar 12 sacos; peso ≈ 170 kg"] },
      { title: "Base de brita de 12 ft × 10 ft, com 4 in de espessura, a 38 US$ por jarda cúbica", steps: ["Volume = 12 × 10 × 4 ÷ 12 = 40 ft³ ≈ 1,48 yd³", "Peso = 40 × 92,6 = 3704 lb ≈ 1,85 toneladas curtas", "Custo = 1,48 × 38 US$ ≈ 56,30 US$"] },
    ],
    assumptions: [
      "As densidades aparentes são valores típicos para material solto e seco, arredondados a partir de tabelas publicadas. As densidades reais variam com o tipo de rocha, a humidade, a granulometria e a compactação; o material molhado pode pesar bastante mais. Confirme com o seu fornecedor.",
      "A área é considerada plana e a camada com espessura uniforme. As camadas de base compactadas precisam de mais material solto do que o seu volume final.",
      "Os preços são os que introduzir; o custo exclui o transporte, os impostos e as bordaduras ou a manta geotêxtil.",
    ],
    faqs: [
      { question: "Que espessura deve ter a gravilha ou a cobertura do solo?", answer: "A cobertura decorativa é muitas vezes espalhada com cerca de 2–4 in (5–10 cm) de espessura e a gravilha decorativa com 2–3 in. Acessos para automóveis e caminhos com base compactada precisam de camadas mais espessas; siga as indicações para o seu projeto." },
      { question: "Quantos pés quadrados cobre uma jarda cúbica?", answer: "Uma jarda cúbica cobre 324 ft² com 1 in de espessura, 108 ft² com 3 in e 81 ft² com 4 in. Divida 324 pela espessura em polegadas." },
      { question: "Porque é que o meu fornecedor indica um peso diferente?", answer: "A densidade aparente depende da pedra, do tamanho dos fragmentos e da humidade do material. Os fornecedores conhecem o peso dos seus próprios produtos, por isso use o valor deles quando encomendar à tonelada." },
    ],
    sourcesUsedFor: [
      "Pesos típicos de cerca de 2700 lb por jarda cúbica para a gravilha e 2500 lb por jarda cúbica para a brita, usados nas densidades predefinidas.",
      "Peso típico de cerca de 500 lb por jarda cúbica para estilha de madeira triturada, usado no valor predefinido da cobertura do solo.",
    ],
  },
  text: {
    units: "Unidades",
    unitSystems: { imperial: "EUA (ft, in)", metric: "Métricas (m, cm)" },
    shape: "Forma da área",
    shapes: { rectangle: "Retângulo", circle: "Círculo" },
    length: "Comprimento",
    width: "Largura",
    diameter: "Diâmetro",
    depth: "Espessura",
    depthHelp: "A espessura final da camada. A gravilha e a cobertura decorativas são muitas vezes espalhadas com cerca de 2–4 in (5–10 cm) de espessura.",
    material: "Material",
    materials: { gravel: "Gravilha", crushedStone: "Brita", woodMulch: "Estilha ou casca de árvore", custom: "Outro (introduza a densidade)" },
    density: "Densidade aparente",
    densityHelp: "Peso por unidade de volume solto. Está preenchido um valor típico; o valor do seu fornecedor para o produto exato é melhor, porque a humidade e a granulometria o alteram.",
    bag: "Tamanho do saco (opcional)",
    bagHelp: "Preencha para ver quantos sacos comprar em vez de uma entrega a granel.",
    priceBasis: "O preço é indicado",
    priceBases: { weight: "Por tonelada curta / métrica", volume: "Por jarda cúbica / m³" },
    price: "Preço (opcional)",
    priceHelp: "Deixe em branco para não calcular o custo.",
    volume: "Volume necessário",
    caption: "{area} com {depth} de espessura.",
    area: "Área coberta",
    volumeCubicFeet: "Volume em pés cúbicos",
    volumeOther: "Volume no outro sistema",
    weightShortTons: "Peso em toneladas curtas dos EUA",
    weightTonnes: "Peso em toneladas métricas",
    weightPounds: "Peso em libras",
    weightKilograms: "Peso em quilogramas",
    bags: "Sacos necessários",
    shortTonUnit: "ton curta",
    cost: "Custo estimado",
    notes: {
      density: "O peso usa uma densidade aparente de {density}. As densidades variam com a humidade, a granulometria e a compactação; confirme com o seu fornecedor.",
      order: "Os fornecedores vendem normalmente em quantidades fixas, por isso arredonde a encomenda para cima e preveja um pouco mais para o assentamento e o terreno irregular.",
      shortTon: "Uma tonelada curta dos EUA são 2000 lb (907,18474 kg); uma tonelada métrica são 1000 kg.",
    },
  },
};

export default pt;
