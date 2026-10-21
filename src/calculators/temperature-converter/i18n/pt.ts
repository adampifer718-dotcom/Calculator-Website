import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TemperatureConverterText } from "../text/en";

const pt: CalculatorTranslation<TemperatureConverterText> = {
  content: {
    title: "Conversor de temperatura",
    shortTitle: "Temperatura",
    summary: "Converta temperaturas entre graus Celsius, Fahrenheit e kelvin.",
    metaTitle: "Conversor de temperatura – Celsius, Fahrenheit, kelvin",
    metaDescription:
      "Converta temperaturas entre graus Celsius, Fahrenheit e kelvin com as fórmulas exatas e veja o valor nas três escalas ao mesmo tempo.",
    keywords: ["temperatura", "celsius", "fahrenheit", "kelvin", "celsius para fahrenheit", "fahrenheit para celsius", "converter temperatura"],
    intro: [
      "Converta uma temperatura entre as escalas Celsius, Fahrenheit e kelvin.",
      "Ao contrário do comprimento ou do peso, as escalas de temperatura têm zeros diferentes, pelo que a conversão precisa de um desvio além de um fator.",
    ],
    howToUse: [
      "Introduza a temperatura.",
      "Escolha a escala de origem e a de destino.",
      "Consulte o resultado e o valor em todas as escalas.",
    ],
    formulas: [
      {
        title: "Celsius e Fahrenheit",
        expression: "°F = °C × 9/5 + 32\n°C = (°F − 32) × 5/9",
        explanation: "Uma variação de 1 °C equivale a uma variação de 1,8 °F.",
      },
      { title: "Kelvin", expression: "K = °C + 273,15", explanation: "A escala kelvin começa no zero absoluto, pelo que não tem valores negativos." },
    ],
    examples: [
      {
        title: "100 °C em Fahrenheit",
        steps: ["100 × 9/5 = 180", "180 + 32 = 212 °F"],
      },
      {
        title: "98,6 °F em Celsius",
        steps: ["98,6 − 32 = 66,6", "66,6 × 5/9 = 37 °C"],
      },
      {
        title: "−40 °C em Fahrenheit",
        steps: ["−40 × 9/5 = −72", "−72 + 32 = −40 °F"],
      },
    ],
    assumptions: [
      "As temperaturas abaixo do zero absoluto (0 K) são rejeitadas, por serem fisicamente impossíveis.",
      "Os resultados são apresentados com 10 algarismos significativos.",
    ],
    faqs: [
      { question: "A que temperatura são iguais as escalas Celsius e Fahrenheit?", answer: "A −40 graus." },
      { question: "Porque é que o kelvin não leva o símbolo de grau?", answer: "O kelvin é uma escala absoluta e escreve-se simplesmente K, por exemplo 300 K." },
      {
        question: "O que é a temperatura ambiente?",
        answer: "Costuma considerar-se cerca de 20–22 °C (68–72 °F), embora as definições variem.",
      },
    ],
    sourcesUsedFor: ["Relações entre o kelvin, o grau Celsius e o grau Fahrenheit."],
  },
  text: {
    value: "Temperatura",
    from: "De",
    to: "Para",
    scales: { C: "Celsius (°C)", F: "Fahrenheit (°F)", K: "Kelvin (K)" },
    belowZero: "Este valor está abaixo do zero absoluto (0 K, −273,15 °C, −459,67 °F).",
    primary: "Temperatura convertida",
    tableCaption: "Em todas as escalas",
    tableScale: "Escala",
    tableValue: "Temperatura",
  },
};

export default pt;
