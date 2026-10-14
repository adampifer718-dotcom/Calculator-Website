import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TestGradeText } from "../text/en";

const es: CalculatorTranslation<TestGradeText> = {
  content: {
    title: "Calculadora de notas de exámenes",
    shortTitle: "Nota de examen",
    summary: "Convierte las respuestas correctas o los puntos obtenidos en un porcentaje y una nota con letra.",
    metaTitle: "Calculadora de notas de exámenes – Porcentaje y nota con letra",
    metaDescription:
      "Calcula el porcentaje y la nota con letra de un examen a partir del número de respuestas correctas o incorrectas, o de los puntos obtenidos sobre el total posible.",
    keywords: ["calcular nota examen", "nota de examen", "porcentaje de aciertos", "calculadora de notas", "nota test", "puntuación examen"],
    intro: [
      "Introduce cuántas preguntas o puntos tenía un examen y cuántos acertaste o fallaste. La calculadora muestra el porcentaje obtenido y la nota con letra correspondiente.",
      "Sirve para cuestionarios, exámenes y trabajos calificados por puntos.",
    ],
    howToUse: [
      "Introduce el número total de preguntas o puntos.",
      "Elige si conoces el número de aciertos o el de fallos.",
      "Introduce ese número y consulta el porcentaje y la nota con letra.",
    ],
    formulas: [
      {
        title: "Porcentaje obtenido",
        expression: "Nota % = puntos obtenidos ÷ puntos totales × 100",
        explanation: "Si conoces el número de fallos, puntos obtenidos = total − puntos perdidos.",
      },
      {
        title: "Nota con letra",
        expression: "A ≥ 90 %, B ≥ 80 %, C ≥ 70 %, D ≥ 60 %, F < 60 %",
        explanation: "Una escala habitual en EE. UU. Los centros pueden usar notas con más y menos o umbrales distintos.",
      },
    ],
    examples: [
      {
        title: "45 aciertos de 50",
        steps: ["45 ÷ 50 = 0,9", "0,9 × 100 = 90 %, una A"],
      },
      {
        title: "7 fallos de 30",
        steps: ["Aciertos = 30 − 7 = 23", "23 ÷ 30 × 100 = 76,67 %, una C"],
      },
    ],
    assumptions: [
      "Todas las preguntas valen lo mismo, salvo que introduzcas puntos.",
      "Las notas con letra usan la escala habitual en EE. UU.; consulta el sistema de calificación de tu centro.",
      "Los puntos parciales pueden introducirse con decimales.",
    ],
    faqs: [
      {
        question: "¿Cómo calculo el porcentaje de un examen?",
        answer: "Divide los puntos obtenidos entre el total posible y multiplica por 100. 18 de 20 es un 90 %.",
      },
      { question: "¿Qué nota es un 75 %?", answer: "En la escala habitual de EE. UU., un 75 % es una C." },
      {
        question: "¿Puedo usar puntos en lugar de preguntas?",
        answer: "Sí. Introduce los puntos totales y los obtenidos; la fórmula es la misma.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    total: "Total de preguntas o puntos",
    mode: "Conozco el número de",
    modes: { correct: "Aciertos (puntos obtenidos)", wrong: "Fallos (puntos perdidos)" },
    correct: "Respuestas correctas o puntos obtenidos",
    wrong: "Respuestas incorrectas o puntos perdidos",
    overTotal: "No puede ser mayor que el total.",
    grade: "Nota",
    caption: "{earned} de {total}.",
    letter: "Nota con letra (escala A–F)",
    lost: "Puntos perdidos",
    note: "Las notas con letra usan la escala habitual A ≥ 90 %, B ≥ 80 %, C ≥ 70 %, D ≥ 60 %, F por debajo del 60 %. La escala de tu centro puede ser distinta.",
  },
};

export default es;
