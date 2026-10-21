import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SquareFootageText } from "../text/en";

const pt: CalculatorTranslation<SquareFootageText> = {
  content: {
    title: "Calculadora de pés quadrados",
    shortTitle: "Pés quadrados",
    summary: "Calcule a área de um retângulo, círculo ou triângulo em pés quadrados, metros quadrados e jardas quadradas.",
    metaTitle: "Calculadora de pés quadrados – Área em ft² e m²",
    metaDescription:
      "Calcule a área em pés quadrados de retângulos, círculos e triângulos medidos em pés, polegadas, jardas, metros ou centímetros, com m² e jardas quadradas.",
    keywords: ["pés quadrados", "ft²", "área", "área de pavimento", "área de uma divisão", "pavimentos", "metros quadrados", "m2"],
    intro: [
      "A área em pés quadrados é a área de uma superfície medida em pés quadrados. É usada para pavimentos, tinta, azulejos, alcatifas e anúncios de imóveis.",
      "Meça cada dimensão, escolha a forma e a unidade, e a calculadora converte a área em pés quadrados, metros quadrados e jardas quadradas.",
    ],
    howToUse: [
      "Escolha a forma: retângulo, círculo ou triângulo.",
      "Escolha a unidade em que mediu.",
      "Introduza as dimensões e, se necessário, quantas áreas idênticas existem.",
      "Consulte a área em pés quadrados, metros quadrados e jardas quadradas.",
    ],
    formulas: [
      { title: "Retângulo", expression: "Área = comprimento × largura", explanation: "Use para divisões quadradas e retangulares." },
      { title: "Círculo", expression: "Área = π × (diâmetro ÷ 2)²", explanation: "Metade do diâmetro é o raio." },
      { title: "Triângulo", expression: "Área = base × altura ÷ 2", explanation: "A altura é medida perpendicularmente à base." },
      {
        title: "Conversão de unidades",
        expression: "1 ft = 12 in = 0,3048 m\n1 ft² = 0,09290304 m²\n1 yd² = 9 ft²",
        explanation: "As áreas convertem-se com o quadrado do fator de comprimento.",
      },
    ],
    examples: [
      {
        title: "Uma divisão de 12 ft × 15 ft",
        steps: ["Área = 12 × 15 = 180 ft²", "180 × 0,09290304 = 16,72 m²"],
      },
      {
        title: "Uma divisão de 4 m × 3,5 m",
        steps: ["Área = 4 × 3,5 = 14 m²", "14 ÷ 0,09290304 = 150,69 ft²"],
      },
      {
        title: "Um pátio circular com 10 ft de diâmetro",
        steps: ["Raio = 10 ÷ 2 = 5 ft", "Área = π × 5² = 78,54 ft²"],
      },
    ],
    assumptions: [
      "As medições são feitas em ângulo reto e a forma é regular.",
      "Em divisões em L ou irregulares, divida o espaço em retângulos e some os resultados.",
      "Acrescente material extra (muitas vezes 5–10%) para cortes e desperdício; esta calculadora dá apenas a área exata.",
    ],
    faqs: [
      {
        question: "Como calculo a área em pés quadrados?",
        answer: "Multiplique o comprimento pela largura, em pés. Uma divisão de 10 ft por 12 ft tem 120 pés quadrados.",
      },
      {
        question: "Como converto metros quadrados em pés quadrados?",
        answer: "Divida por 0,09290304 ou multiplique por cerca de 10,764. Assim, 20 m² são cerca de 215,3 ft².",
      },
      { question: "Como meço uma divisão em L?", answer: "Divida-a em dois retângulos, calcule a área de cada um e some-as." },
    ],
    sourcesUsedFor: ["Fatores exatos de conversão de comprimento (1 ft = 0,3048 m, 1 in = 2,54 cm)."],
  },
  text: {
    shape: "Forma",
    shapes: { rectangle: "Retângulo ou quadrado", circle: "Círculo", triangle: "Triângulo" },
    unit: "Unidade de medida",
    units: { ft: "Pés (ft)", in: "Polegadas (in)", yd: "Jardas (yd)", m: "Metros (m)", cm: "Centímetros (cm)" },
    length: "Comprimento",
    width: "Largura",
    diameter: "Diâmetro",
    base: "Base",
    height: "Altura",
    quantity: "Número de áreas",
    quantityHelp: "Para várias divisões ou peças idênticas.",
    area: "Área",
    quantityCaption: "Total de {count} áreas idênticas.",
    sqM: "Metros quadrados",
    sqYd: "Jardas quadradas",
    sqUnit: "Área em {unit}²",
    sqFtSuffix: "ft²",
    sqYdSuffix: "yd²",
  },
};

export default pt;
