import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentageIncreaseText } from "../text/en";

const es: CalculatorTranslation<PercentageIncreaseText> = {
  content: {
    title: "Calculadora de aumento porcentual",
    shortTitle: "Aumento porcentual",
    summary: "Calcula el aumento o la disminución porcentual entre un valor original y un valor nuevo.",
    metaTitle: "Calculadora de aumento porcentual – Variación en porcentaje",
    metaDescription:
      "Calcula el aumento o la disminución porcentual entre dos números. Consulta la variación porcentual, la variación absoluta y la fórmula, con ejemplos resueltos.",
    keywords: ["variación porcentual", "aumento porcentual", "disminución porcentual", "calcular porcentaje de aumento", "porcentaje de crecimiento", "diferencia porcentual"],
    intro: [
      "Introduce un valor original y un valor nuevo para ver cuánto ha cambiado en porcentaje. Un resultado positivo es un aumento y uno negativo, una disminución.",
      "Se usa a menudo para subidas salariales, cambios de precio, crecimiento de ventas y mejoras en las notas de exámenes.",
    ],
    howToUse: [
      "Introduce el valor original (inicial).",
      "Introduce el valor nuevo.",
      "Consulta la variación porcentual, la variación absoluta y el valor nuevo como porcentaje del original.",
    ],
    formulas: [
      {
        title: "Variación porcentual",
        expression: "Variación % = (valor nuevo − valor original) ÷ |valor original| × 100",
        explanation:
          "La variación se mide respecto al tamaño del valor original. Usar el valor absoluto mantiene el signo con sentido cuando el valor original es negativo.",
      },
      {
        title: "Variación absoluta",
        expression: "Variación = valor nuevo − valor original",
        explanation: "La diferencia, en las mismas unidades que los datos introducidos.",
      },
    ],
    examples: [
      {
        title: "De 80 a 100",
        steps: ["Variación = 100 − 80 = 20", "20 ÷ 80 × 100 = aumento del 25 %"],
      },
      {
        title: "De 250 a 200",
        steps: ["Variación = 200 − 250 = −50", "−50 ÷ 250 × 100 = −20 %, una disminución del 20 %"],
      },
      {
        title: "De −50 a −25",
        steps: ["Variación = −25 − (−50) = 25", "25 ÷ |−50| × 100 = aumento del 50 %"],
      },
    ],
    assumptions: [
      "El valor original no puede ser 0, porque un cambio desde cero no tiene un porcentaje definido.",
      "Cuando el valor original es negativo, la variación se divide entre su valor absoluto.",
      "Los resultados se redondean al mostrarlos. Los cálculos usan la precisión completa.",
    ],
    faqs: [
      {
        question: "¿Cómo se calcula un aumento porcentual?",
        answer: "Resta el valor original al valor nuevo, divide el resultado entre el valor original y multiplica por 100. De 50 a 65 es (65 − 50) ÷ 50 × 100 = 30 %.",
      },
      {
        question: "¿Cómo se calcula una disminución porcentual?",
        answer: "Con la misma fórmula. Un resultado negativo es una disminución. De 120 a 90 es (90 − 120) ÷ 120 × 100 = −25 %.",
      },
      {
        question: "¿Un aumento del 50 % seguido de una bajada del 50 % deja el valor como al principio?",
        answer: "No. 100 aumentado un 50 % es 150, y 150 reducido un 50 % es 75. Cada cambio se mide desde un valor de partida distinto.",
      },
      {
        question: "¿Qué pasa si el valor original es cero?",
        answer: "La variación porcentual no está definida porque no se puede dividir entre cero. En su lugar, indica la variación absoluta.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    original: "Valor original",
    originalHelp: "El valor inicial. No puede ser 0.",
    newValue: "Valor nuevo",
    newValueHelp: "El valor después del cambio.",
    originalZero: "El valor original no puede ser 0. Un cambio desde 0 no tiene porcentaje.",
    primary: "Variación porcentual",
    noChange: "Los valores son iguales, así que no hay variación.",
    increase: "Un aumento de {from} a {to}.",
    decrease: "Una disminución de {from} a {to}.",
    absolute: "Variación absoluta",
    ratio: "Valor nuevo como % del original",
    formula: "Fórmula: ({to} − {from}) ÷ |{from}| × 100.",
    negativeNote: "El valor original es negativo, así que la variación se mide respecto a su valor absoluto.",
  },
};

export default es;
