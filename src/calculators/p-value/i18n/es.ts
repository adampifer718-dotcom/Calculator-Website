import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PValueText } from "../text/en";

const es: CalculatorTranslation<PValueText> = {
  content: {
    title: "Calculadora del valor p",
    shortTitle: "Valor p",
    summary: "Calcula el valor p de una puntuación z o t en un contraste bilateral, unilateral izquierdo o unilateral derecho.",
    metaTitle: "Calculadora del valor p – A partir de la puntuación z o t",
    metaDescription:
      "Calcula el valor p a partir de una puntuación z o de una puntuación t con sus grados de libertad, para contrastes de hipótesis bilaterales o unilaterales.",
    keywords: ["valor p", "p-valor", "calcular valor p", "puntuación z", "prueba t", "contraste de hipótesis", "significación estadística"],
    intro: [
      "El valor p mide lo sorprendente que sería el resultado de una prueba si la hipótesis nula fuera cierta. Un valor p pequeño indica que los datos son poco probables bajo la hipótesis nula.",
      "Introduce el estadístico de una prueba z o t y elige la dirección de tu hipótesis alternativa.",
    ],
    howToUse: [
      "Elige puntuación z o puntuación t.",
      "Introduce el estadístico y, para una puntuación t, los grados de libertad.",
      "Elige bilateral, unilateral izquierdo o unilateral derecho.",
      "Compara el valor p con tu nivel de significación, por ejemplo 0,05.",
    ],
    formulas: [
      { title: "Unilateral izquierdo", expression: "p = P(T ≤ t)", explanation: "La probabilidad de un valor igual o inferior al estadístico." },
      { title: "Unilateral derecho", expression: "p = P(T ≥ t)", explanation: "La probabilidad de un valor igual o superior." },
      { title: "Bilateral", expression: "p = 2 × P(T ≥ |t|)", explanation: "Tiene en cuenta los valores extremos en ambas direcciones." },
    ],
    examples: [
      { title: "z = 1,96, bilateral", steps: ["P(Z ≥ 1,96) ≈ 0,025", "p = 2 × 0,025 ≈ 0,05"] },
      { title: "z = −1,645, unilateral izquierdo", steps: ["P(Z ≤ −1,645)", "≈ 0,05"] },
    ],
    assumptions: [
      "Usa la distribución normal estándar para z y la distribución t de Student para t.",
      "El estadístico debe proceder de una prueba cuyos supuestos se cumplan.",
      "Se muestra con 6 cifras significativas; los valores muy pequeños pasan a notación científica.",
    ],
    faqs: [
      {
        question: "¿Qué es un buen valor p?",
        answer: "No hay un umbral universal. Lo habitual es 0,05, lo que significa que resultados así de extremos se darían menos del 5 % de las veces si la hipótesis nula fuera cierta.",
      },
      {
        question: "¿Debo usar la puntuación z o la t?",
        answer: "Usa t cuando la desviación típica de la población es desconocida y se estima a partir de la muestra; z cuando se conoce o la muestra es grande.",
      },
      {
        question: "¿Qué diferencia hay entre una prueba unilateral y una bilateral?",
        answer: "Una prueba unilateral busca un efecto en una sola dirección; una bilateral considera ambas direcciones.",
      },
    ],
    sourcesUsedFor: ["Definiciones de la distribución normal y la t de Student, y valores críticos usados para comprobar los resultados."],
  },
  text: {
    distribution: "Estadístico de contraste",
    distributions: { z: "Puntuación z (normal)", t: "Puntuación t (t de Student)" },
    statistic: "Valor del estadístico",
    df: "Grados de libertad",
    tail: "Hipótesis alternativa",
    tails: { two: "Bilateral (≠)", left: "Unilateral izquierdo (<)", right: "Unilateral derecho (>)" },
    pValue: "Valor p",
    sig05: "¿Significativo con α = 0,05?",
    sig01: "¿Significativo con α = 0,01?",
    yes05: "Sí (p < 0,05)",
    no05: "No (p ≥ 0,05)",
    yes01: "Sí (p < 0,01)",
    no01: "No (p ≥ 0,01)",
    note: "El valor p es la probabilidad de obtener un resultado al menos así de extremo si la hipótesis nula fuera cierta. No es la probabilidad de que la hipótesis nula sea cierta.",
  },
};

export default es;
