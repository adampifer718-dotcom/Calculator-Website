import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RainwaterText } from "../text/en";

const pt: CalculatorTranslation<RainwaterText> = {
  content: {
    title: "Calculadora de aproveitamento de águas pluviais",
    shortTitle: "Águas pluviais",
    summary: "Estime quanta água da chuva um telhado consegue recolher a partir da sua área, da precipitação e de um coeficiente de escoamento.",
    metaTitle: "Aproveitamento de águas pluviais – Recolha no telhado",
    metaDescription:
      "Estime a água da chuva recolhida num telhado, em litros ou galões americanos, a partir da área de captação, da precipitação e de um coeficiente de escoamento.",
    keywords: ["água da chuva", "aproveitamento de águas pluviais", "telhado", "depósito de água", "litros", "área de captação", "cisterna"],
    intro: [
      "Cada milímetro de chuva que cai num metro quadrado de telhado corresponde a um litro de água. Esta calculadora aplica esse princípio a qualquer área e tem em conta as perdas.",
      "Use-a para dimensionar um barril ou um depósito, ou para estimar a recolha anual a partir da precipitação média.",
    ],
    howToUse: [
      "Escolha unidades métricas ou dos EUA.",
      "Introduza a área de projeção do telhado.",
      "Introduza a precipitação do período que lhe interessa.",
      "Ajuste o coeficiente de escoamento para as perdas e consulte o volume recolhido.",
    ],
    formulas: [
      {
        title: "Métrico",
        expression: "Litros = área (m²) × precipitação (mm) × coeficiente de escoamento",
        explanation: "1 mm de chuva em 1 m² equivale a 1 litro.",
      },
      {
        title: "Unidades dos EUA",
        expression: "Galões = área (ft²) × precipitação (in) × 0,6234 × coeficiente de escoamento",
        explanation: "0,6234 = 144 in³ ÷ 231 in³ por galão americano.",
      },
    ],
    examples: [
      { title: "Telhado de 100 m², 25 mm de chuva", steps: ["100 × 25 = 2500 L de chuva", "2500 × 0,8 = 2000 L recolhidos"] },
      { title: "Telhado de 1000 ft², 1 polegada de chuva", steps: ["1000 × 1 × 0,6234 ≈ 623 gal", "623 × 0,8 ≈ 499 gal recolhidos"] },
    ],
    assumptions: [
      "O coeficiente de escoamento cobre as perdas por evaporação, salpicos, desviadores das primeiras águas e transbordo das caleiras. Depende do material do telhado e da conceção do sistema; consulte as orientações locais.",
      "Use a área de projeção horizontal do telhado e não a área da superfície inclinada.",
      "Verifique as regras locais sobre a recolha e a utilização de água da chuva e trate-a antes de a beber.",
    ],
    faqs: [
      {
        question: "Quanta água dá 1 polegada de chuva?",
        answer: "Cerca de 0,623 galões americanos por pé quadrado de telhado antes das perdas, ou 623 galões por 1000 ft².",
      },
      {
        question: "Que coeficiente de escoamento devo usar?",
        answer: "Telhados lisos e duros perdem menos água do que os rugosos ou absorventes. 0,8 é um valor intermédio prudente; ajuste-o ao seu telhado.",
      },
      {
        question: "A água da chuva recolhida é potável?",
        answer: "Não sem filtração e desinfeção adequadas. Muitas pessoas usam-na antes para o jardim e para os autoclismos.",
      },
    ],
    sourcesUsedFor: ["Definições do galão americano (231 in³) e do litro."],
  },
  text: {
    units: "Unidades",
    unitOptions: { metric: "Métrico (m², mm, litros)", imperial: "EUA (ft², polegadas, galões)" },
    area: "Área de captação (telhado)",
    areaHelp: "A área de projeção horizontal do telhado, não a superfície inclinada.",
    rainfall: "Precipitação",
    rainfallHelp: "Para uma chuvada, um mês ou um ano.",
    coefficient: "Coeficiente de escoamento",
    coefficientHelp: "Fração da chuva que chega ao depósito depois das perdas (0 a 1).",
    collected: "Água recolhida",
    inLiters: "Em litros",
    inGallons: "Em galões americanos",
    inCubic: "Em metros cúbicos",
    gallons: "gal EUA",
    note: "1 mm de chuva em 1 m² é exatamente 1 litro; 1 polegada de chuva em 1 ft² corresponde a 144 ÷ 231 ≈ 0,623 galões americanos.",
  },
};

export default pt;
