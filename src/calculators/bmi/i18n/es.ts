import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BmiText } from "../text/en";

const es: CalculatorTranslation<BmiText> = {
  content: {
    title: "Calculadora del IMC",
    shortTitle: "IMC",
    summary: "Calcula el índice de masa corporal a partir de la altura y el peso en unidades métricas o imperiales.",
    metaTitle: "Calculadora del IMC – Índice de masa corporal para adultos",
    metaDescription:
      "Calcula tu índice de masa corporal (IMC) con la altura y el peso en kg y cm o en libras, pies y pulgadas, con la categoría para adultos y el rango de peso saludable.",
    keywords: ["calcular imc", "índice de masa corporal", "peso ideal", "sobrepeso", "obesidad", "imc adultos"],
    intro: [
      "El índice de masa corporal (IMC) relaciona el peso con la altura. Es una medida rápida de cribado para adultos, no un diagnóstico.",
      "Introduce tu altura y tu peso en unidades métricas o imperiales para ver tu IMC, la categoría para adultos y el rango de peso que corresponde a un IMC saludable para tu altura.",
    ],
    howToUse: [
      "Elige unidades métricas o imperiales.",
      "Introduce tu peso y tu altura.",
      "Consulta tu IMC, tu categoría y tu rango de peso saludable.",
    ],
    formulas: [
      { title: "IMC", expression: "IMC = peso (kg) ÷ altura (m)²", explanation: "Las unidades imperiales se convierten con 1 lb = 0,45359237 kg y 1 in = 2,54 cm." },
      {
        title: "Categorías para adultos",
        expression: "Menos de 18,5: bajo peso\n18,5–24,9: peso saludable\n25–29,9: sobrepeso\n30 o más: obesidad",
        explanation: "Categorías de la Organización Mundial de la Salud para adultos.",
      },
    ],
    examples: [
      { title: "70 kg, 175 cm", steps: ["Altura = 1,75 m", "IMC = 70 ÷ 1,75² ≈ 22,9: peso saludable"] },
      { title: "180 lb, 5 ft 10 in", steps: ["180 lb = 81,65 kg; 70 in = 1,778 m", "IMC = 81,65 ÷ 1,778² ≈ 25,8: sobrepeso"] },
    ],
    assumptions: [
      "Para adultos de 18 años o más. En niños y adolescentes se usan percentiles específicos por edad y sexo.",
      "El IMC no mide directamente la grasa corporal y puede clasificar mal a deportistas, personas mayores y embarazadas.",
      "Esto no es consejo médico. Consulta a un profesional sanitario sobre tu salud.",
    ],
    faqs: [
      { question: "¿Cuál es un IMC saludable?", answer: "Para la mayoría de los adultos, entre 18,5 y 24,9." },
      {
        question: "¿Es fiable el IMC?",
        answer: "Es una herramienta de cribado útil a nivel de población, pero no distingue el músculo de la grasa ni tiene en cuenta dónde se acumula la grasa.",
      },
      {
        question: "¿Sirve el IMC para niños?",
        answer: "No con las categorías para adultos. El IMC infantil se compara con curvas de crecimiento según la edad y el sexo.",
      },
    ],
    sourcesUsedFor: ["Definición del IMC en adultos y umbrales de cada categoría.", "Factores exactos de conversión de libras y pulgadas."],
  },
  text: {
    units: "Unidades",
    unitOptions: { metric: "Métricas (kg, cm)", imperial: "Imperiales (lb, ft, in)" },
    weight: "Peso",
    height: "Altura",
    heightFt: "Altura (pies)",
    heightIn: "Altura (pulgadas)",
    heightZero: "Introduce una altura mayor que 0.",
    primary: "Índice de masa corporal",
    caption: "{category} (rango para adultos).",
    category: "Categoría",
    categories: { under: "Bajo peso", healthy: "Peso saludable", over: "Sobrepeso", obese: "Obesidad" },
    healthyRange: "Peso saludable para esta altura",
    range: "{low}–{high} {unit}",
    note: "Categorías para adultos: menos de 18,5, bajo peso; 18,5–24,9, saludable; 25–29,9, sobrepeso; 30 o más, obesidad. El IMC no se interpreta igual en niños, en el embarazo ni en personas muy musculadas.",
  },
};

export default es;
