import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TemperatureConverterText } from "../text/en";

const es: CalculatorTranslation<TemperatureConverterText> = {
  content: {
    title: "Calculadora de conversión de temperatura",
    shortTitle: "Temperatura",
    summary: "Convierte temperaturas entre grados Celsius, Fahrenheit y Kelvin.",
    metaTitle: "Conversión de temperatura – Celsius, Fahrenheit y Kelvin",
    metaDescription:
      "Convierte temperaturas entre Celsius, Fahrenheit y Kelvin con las fórmulas exactas y consulta el valor en las tres escalas a la vez.",
    keywords: ["conversor de temperatura", "celsius a fahrenheit", "fahrenheit a celsius", "kelvin a celsius", "convertir grados", "pasar grados fahrenheit"],
    intro: [
      "Convierte una temperatura entre las escalas Celsius, Fahrenheit y Kelvin.",
      "A diferencia de la longitud o el peso, las escalas de temperatura tienen ceros distintos, así que la conversión necesita un desplazamiento además de un factor.",
    ],
    howToUse: [
      "Introduce la temperatura.",
      "Elige la escala de origen y la de destino.",
      "Consulta el resultado y el valor en todas las escalas.",
    ],
    formulas: [
      { title: "Celsius y Fahrenheit", expression: "°F = °C × 9/5 + 32\n°C = (°F − 32) × 5/9", explanation: "Una variación de 1 °C equivale a una variación de 1,8 °F." },
      { title: "Kelvin", expression: "K = °C + 273,15", explanation: "La escala Kelvin empieza en el cero absoluto, así que no tiene valores negativos." },
    ],
    examples: [
      {
        title: "100 °C a Fahrenheit",
        steps: ["100 × 9/5 = 180", "180 + 32 = 212 °F"],
      },
      {
        title: "98,6 °F a Celsius",
        steps: ["98,6 − 32 = 66,6", "66,6 × 5/9 = 37 °C"],
      },
      {
        title: "−40 °C a Fahrenheit",
        steps: ["−40 × 9/5 = −72", "−72 + 32 = −40 °F"],
      },
    ],
    assumptions: [
      "Se rechazan las temperaturas por debajo del cero absoluto (0 K) porque son físicamente imposibles.",
      "Los resultados se muestran con 10 cifras significativas.",
    ],
    faqs: [
      { question: "¿A qué temperatura coinciden Celsius y Fahrenheit?", answer: "A −40 grados." },
      {
        question: "¿Por qué el kelvin no lleva el símbolo de grado?",
        answer: "Porque Kelvin es una escala absoluta y se escribe simplemente K; por ejemplo, 300 K.",
      },
      {
        question: "¿Qué es la temperatura ambiente?",
        answer: "Se suele considerar que ronda los 20–22 °C (68–72 °F), aunque las definiciones varían.",
      },
    ],
    sourcesUsedFor: ["Relaciones entre el kelvin, el grado Celsius y el grado Fahrenheit."],
  },
  text: {
    value: "Temperatura",
    from: "De",
    to: "A",
    scales: { C: "Celsius (°C)", F: "Fahrenheit (°F)", K: "Kelvin (K)" },
    belowZero: "Está por debajo del cero absoluto (0 K, −273,15 °C, −459,67 °F).",
    primary: "Temperatura convertida",
    tableCaption: "En todas las escalas",
    tableScale: "Escala",
    tableValue: "Temperatura",
  },
};

export default es;
