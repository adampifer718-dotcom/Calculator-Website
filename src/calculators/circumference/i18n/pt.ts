import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CircumferenceText } from "../text/en";

const pt: CalculatorTranslation<CircumferenceText> = {
  content: {
    title: "Calculadora de perímetro da circunferência",
    shortTitle: "Circunferência",
    summary: "Calcule o perímetro de uma circunferência a partir do raio, do diâmetro ou da área, bem como as restantes medidas.",
    metaTitle: "Calculadora de circunferência – Raio, diâmetro e área",
    metaDescription:
      "Calcule o perímetro da circunferência de um círculo a partir do raio, do diâmetro ou da área, e obtenha as restantes medidas com a fórmula C = 2πr.",
    keywords: ["perímetro da circunferência", "perímetro do círculo", "calcular circunferência", "raio e diâmetro", "área do círculo", "número pi"],
    intro: [
      "A circunferência é a linha que contorna um círculo, e o seu perímetro é a distância à sua volta. Equivale a π vezes o diâmetro, ou 2π vezes o raio.",
      "Introduza a medida que conhece e a calculadora obtém as restantes, na mesma unidade.",
    ],
    howToUse: [
      "Escolha a medida que conhece.",
      "Introduza o seu valor.",
      "Consulte o perímetro, o raio, o diâmetro e a área.",
    ],
    formulas: [
      { title: "Perímetro da circunferência", expression: "C = 2πr = πd", explanation: "π ≈ 3,14159265." },
      { title: "A partir da área", expression: "r = √(A ÷ π)", explanation: "Depois, use C = 2πr." },
    ],
    examples: [
      { title: "Raio de 5", steps: ["C = 2 × π × 5", "≈ 31,415927"] },
      { title: "Diâmetro de 10", steps: ["C = π × 10", "≈ 31,415927"] },
    ],
    assumptions: [
      "Os resultados usam π com toda a precisão e são apresentados com 6 casas decimais.",
      "A área é expressa na unidade introduzida elevada ao quadrado.",
    ],
    faqs: [
      { question: "Como calculo o perímetro a partir do diâmetro?", answer: "Multiplique o diâmetro por π. Um diâmetro de 20 cm dá cerca de 62,83 cm." },
      { question: "Como calculo o raio a partir do perímetro?", answer: "Divida o perímetro por 2π." },
      {
        question: "Qual é a diferença entre o perímetro e a área?",
        answer: "O perímetro é o comprimento do contorno do círculo; a área é a superfície que ele delimita.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    known: "Valor conhecido",
    options: { radius: "Raio", diameter: "Diâmetro", area: "Área" },
    radius: "Raio (r)",
    diameter: "Diâmetro (d)",
    area: "Área (A)",
    circumference: "Perímetro da circunferência",
    caption: "Na mesma unidade do valor introduzido.",
    radiusOut: "Raio",
    diameterOut: "Diâmetro",
    areaOut: "Área",
  },
};

export default pt;
