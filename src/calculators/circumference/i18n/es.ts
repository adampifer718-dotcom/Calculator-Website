import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CircumferenceText } from "../text/en";

const es: CalculatorTranslation<CircumferenceText> = {
  content: {
    title: "Calculadora de circunferencia",
    shortTitle: "Circunferencia",
    summary: "Calcula la longitud de una circunferencia a partir del radio, el diámetro o el área, además de las demás medidas.",
    metaTitle: "Calculadora de circunferencia – Radio, diámetro y área del círculo",
    metaDescription:
      "Calcula la longitud de la circunferencia de un círculo a partir de su radio, su diámetro o su área, y obtén las demás medidas con la fórmula C = 2πr.",
    keywords: ["longitud de la circunferencia", "perímetro del círculo", "calcular circunferencia", "radio y diámetro", "área del círculo", "número pi"],
    intro: [
      "La circunferencia es la línea que rodea un círculo, y su longitud es la distancia a su alrededor. Equivale a π por el diámetro, o 2π por el radio.",
      "Introduce la medida que conozcas y la calculadora obtiene el resto, en la misma unidad.",
    ],
    howToUse: [
      "Elige qué medida conoces.",
      "Introduce su valor.",
      "Consulta la circunferencia, el radio, el diámetro y el área.",
    ],
    formulas: [
      { title: "Circunferencia", expression: "C = 2πr = πd", explanation: "π ≈ 3,14159265." },
      { title: "A partir del área", expression: "r = √(A ÷ π)", explanation: "Después, usa C = 2πr." },
    ],
    examples: [
      { title: "Radio de 5", steps: ["C = 2 × π × 5", "≈ 31,415927"] },
      { title: "Diámetro de 10", steps: ["C = π × 10", "≈ 31,415927"] },
    ],
    assumptions: [
      "Los resultados usan π con toda su precisión y se muestran con 6 decimales.",
      "El área se expresa en la unidad que introduces elevada al cuadrado.",
    ],
    faqs: [
      { question: "¿Cómo calculo la circunferencia a partir del diámetro?", answer: "Multiplica el diámetro por π. Un diámetro de 20 cm da unos 62,83 cm." },
      { question: "¿Cómo calculo el radio a partir de la circunferencia?", answer: "Divide la circunferencia entre 2π." },
      {
        question: "¿Qué diferencia hay entre la circunferencia y el área?",
        answer: "La circunferencia es la longitud del contorno del círculo; el área es la superficie que encierra.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    known: "Dato conocido",
    options: { radius: "Radio", diameter: "Diámetro", area: "Área" },
    radius: "Radio (r)",
    diameter: "Diámetro (d)",
    area: "Área (A)",
    circumference: "Circunferencia",
    caption: "En la misma unidad que el dato introducido.",
    radiusOut: "Radio",
    diameterOut: "Diámetro",
    areaOut: "Área",
  },
};

export default es;
