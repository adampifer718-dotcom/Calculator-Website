import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentageText } from "../text/en";

const es: CalculatorTranslation<PercentageText> = {
  content: {
    title: "Calculadora de porcentajes",
    shortTitle: "Porcentajes",
    summary: "Calcula el X % de un número, qué porcentaje es un número de otro o el total a partir de una parte y un porcentaje.",
    metaTitle: "Calculadora de porcentajes – Porcentaje de un número y más",
    metaDescription:
      "Calculadora de porcentajes gratuita. Calcula el X % de Y, qué porcentaje es X de Y o el total cuando X es el Y % de él, con fórmulas y ejemplos resueltos.",
    keywords: ["calcular porcentaje", "porcentaje de un número", "qué porcentaje es", "sacar el tanto por ciento", "regla de tres porcentaje", "calculadora %"],
    intro: [
      "Esta calculadora responde a las tres preguntas más habituales sobre porcentajes. Elige una pregunta, introduce dos números y el resultado se actualiza mientras escribes.",
      "Un porcentaje expresa una parte de cada cien, así que el 25 % significa 25 de cada 100.",
    ],
    howToUse: [
      "Elige la pregunta que quieres responder.",
      "Introduce los dos valores conocidos. Se admiten números negativos y decimales.",
      "Consulta el resultado y la fórmula empleada para obtenerlo.",
    ],
    formulas: [
      { title: "¿Cuánto es el X % de Y?", expression: "Resultado = X ÷ 100 × Y", explanation: "Convierte el porcentaje en decimal y multiplica." },
      { title: "¿Qué porcentaje de Y es X?", expression: "Porcentaje = X ÷ Y × 100", explanation: "Divide la parte entre el total y multiplica por 100. Y no puede ser 0." },
      { title: "¿X es el Y % de qué número?", expression: "Total = X ÷ (Y ÷ 100)", explanation: "Divide la parte entre el porcentaje expresado en decimal. Y no puede ser 0." },
    ],
    examples: [
      { title: "¿Cuánto es el 20 % de 150?", steps: ["20 ÷ 100 = 0,2", "0,2 × 150 = 30"] },
      { title: "¿Qué porcentaje de 180 es 45?", steps: ["45 ÷ 180 = 0,25", "0,25 × 100 = 25 %"] },
      { title: "¿30 es el 12 % de qué número?", steps: ["12 ÷ 100 = 0,12", "30 ÷ 0,12 = 250"] },
    ],
    assumptions: [
      "Los resultados se muestran con entre 4 y 6 decimales como máximo. Los cálculos usan la precisión completa.",
      "La división entre cero no tiene resultado, así que el total (o el porcentaje) no puede ser 0 en la segunda y la tercera pregunta.",
    ],
    faqs: [
      {
        question: "¿Cómo calculo el porcentaje de un número?",
        answer: "Divide el porcentaje entre 100 y multiplícalo por el número. Por ejemplo, el 15 % de 80 es 0,15 × 80 = 12.",
      },
      {
        question: "¿Cómo averiguo qué porcentaje es un número de otro?",
        answer: "Divide la parte entre el total y multiplica por 100. Por ejemplo, 18 de 24 es 18 ÷ 24 × 100 = 75 %.",
      },
      {
        question: "¿Puede un porcentaje ser mayor que el 100 %?",
        answer: "Sí. Un valor mayor que el total es más del 100 % de él. Por ejemplo, 300 es el 150 % de 200.",
      },
      {
        question: "¿Cómo calculo el aumento porcentual entre dos números?",
        answer: "Usa la calculadora de aumento porcentual, que divide la variación entre el valor original y multiplica por 100.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    question: "Pregunta",
    modes: { percentOf: "¿Cuánto es el X % de Y?", whatPercent: "¿Qué % de Y es X?", findWhole: "¿X es el Y % de qué?" },
    percentX: "Porcentaje (X)",
    valueY: "Valor (Y)",
    partX: "Parte (X)",
    wholeY: "Total (Y)",
    percentY: "Porcentaje (Y)",
    wholeZero: "El total no puede ser 0.",
    percentZero: "El porcentaje no puede ser 0.",
    percentResult: "Porcentaje",
    percentCaption: "{part} es el {percent} de {whole}.",
    percentFormula: "Fórmula: {part} ÷ {whole} × 100.",
    wholeResult: "Valor total",
    wholeCaption: "{part} es el {percent} de {whole}.",
    wholeFormula: "Fórmula: {part} ÷ ({percent} ÷ 100).",
    result: "Resultado",
    resultCaption: "El {percent} de {value} es {result}.",
    minus: "{value} menos el {percent}",
    plus: "{value} más el {percent}",
    resultFormula: "Fórmula: {percent} ÷ 100 × {value}.",
  },
};

export default es;
