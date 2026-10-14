import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SlopeText } from "../text/en";

const es: CalculatorTranslation<SlopeText> = {
  content: {
    title: "Calculadora de pendientes",
    shortTitle: "Pendiente",
    summary: "Calcula la pendiente entre dos puntos, además de la ecuación de la recta, la ordenada en el origen, el ángulo y la distancia.",
    metaTitle: "Calculadora de pendientes – Pendiente a partir de dos puntos",
    metaDescription:
      "Calcula la pendiente de la recta que pasa por dos puntos, con la ecuación y = mx + b, la ordenada en el origen, el ángulo y la distancia entre los puntos.",
    keywords: ["pendiente de una recta", "calcular pendiente", "ecuación de la recta", "y = mx + b", "pendiente entre dos puntos", "ordenada en el origen"],
    intro: [
      "La pendiente mide lo inclinada que está una recta: cuánto cambia y por cada paso en x. Se suele describir como el desplazamiento vertical dividido entre el horizontal.",
      "Introduce dos puntos y la calculadora también te dará la ecuación de la recta que pasa por ellos.",
    ],
    howToUse: [
      "Introduce las coordenadas del primer punto (x₁, y₁).",
      "Introduce el segundo punto (x₂, y₂).",
      "Consulta la pendiente, la ecuación, la ordenada en el origen, el ángulo y la distancia.",
    ],
    formulas: [
      { title: "Pendiente", expression: "m = (y₂ − y₁) ÷ (x₂ − x₁)", explanation: "No está definida cuando x₁ = x₂ (una recta vertical)." },
      { title: "Ecuación de la recta", expression: "y = mx + b, donde b = y₁ − m × x₁", explanation: "b es el punto en el que la recta corta el eje y." },
      {
        title: "Ángulo y distancia",
        expression: "θ = arctan(m)\nd = √((x₂ − x₁)² + (y₂ − y₁)²)",
        explanation: "El ángulo se mide desde el semieje x positivo.",
      },
    ],
    examples: [
      { title: "Puntos (1, 3) y (4, 9)", steps: ["m = (9 − 3) ÷ (4 − 1) = 6 ÷ 3 = 2", "b = 3 − 2 × 1 = 1, así que y = 2x + 1"] },
      { title: "Puntos (−2, 5) y (3, −5)", steps: ["m = (−5 − 5) ÷ (3 − (−2)) = −10 ÷ 5", "= −2"] },
    ],
    assumptions: [
      "Las rectas verticales (x₁ = x₂) tienen una pendiente no definida y no se admiten.",
      "Los resultados se muestran con 6 decimales.",
    ],
    faqs: [
      { question: "¿Qué significa una pendiente negativa?", answer: "Que la recta desciende de izquierda a derecha." },
      { question: "¿Cuál es la pendiente de una recta horizontal?", answer: "0, porque y no cambia." },
      {
        question: "¿Qué relación hay entre la pendiente y el ángulo?",
        answer: "La pendiente es la tangente del ángulo que forma la recta con el eje x. Una pendiente de 1 corresponde a 45°.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    vertical: "x₂ debe ser distinto de x₁. Una recta vertical tiene una pendiente no definida.",
    slope: "Pendiente (m)",
    caption: "Desplazamiento vertical de {rise} en un desplazamiento horizontal de {run}.",
    equation: "Ecuación de la recta",
    intercept: "Ordenada en el origen (b)",
    angle: "Ángulo con el eje x",
    degrees: "grados",
    distance: "Distancia entre los puntos",
  },
};

export default es;
