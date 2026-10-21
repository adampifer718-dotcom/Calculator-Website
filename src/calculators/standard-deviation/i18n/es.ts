import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { StandardDeviationText } from "../text/en";

const es: CalculatorTranslation<StandardDeviationText> = {
  content: {
    title: "Calculadora de desviación estándar",
    shortTitle: "Desviación estándar",
    summary: "Calcula la desviación estándar muestral o poblacional, la varianza y el error estándar de un conjunto de datos.",
    metaTitle: "Calculadora de desviación estándar – Muestral y poblacional",
    metaDescription:
      "Calcula la desviación estándar muestral o poblacional, la varianza, la media y el error estándar de la media a partir de una lista de números.",
    keywords: ["desviación estándar", "desviación típica", "varianza", "desviación estándar muestral", "desviación estándar poblacional", "error estándar", "estadística"],
    intro: [
      "La desviación estándar mide cuánto se dispersan los valores alrededor de la media. Un valor pequeño indica que los datos están muy agrupados; uno grande, que están muy dispersos.",
      "Elige «muestra» cuando tus datos sean un subconjunto de un grupo mayor, que es lo más habitual.",
    ],
    howToUse: [
      "Introduce tus números separados por punto y coma, espacios o saltos de línea.",
      "Elige muestra o población.",
      "Consulta la desviación estándar, la varianza, la media y el error estándar.",
    ],
    formulas: [
      {
        title: "Desviación estándar muestral",
        expression: "s = √(Σ(x − x̄)² ÷ (n − 1))",
        explanation: "Dividir entre n − 1 (corrección de Bessel) corrige el sesgo al estimar la dispersión a partir de una muestra.",
      },
      { title: "Desviación estándar poblacional", expression: "σ = √(Σ(x − μ)² ÷ n)", explanation: "Úsala cuando tengas todos los miembros del grupo." },
      { title: "Error estándar de la media", expression: "SE = s ÷ √n", explanation: "Indica con qué precisión la media muestral estima la media poblacional." },
    ],
    examples: [
      {
        title: "Población: 2, 4, 4, 4, 5, 5, 7, 9",
        steps: ["Media = 5; la suma de las desviaciones al cuadrado es 32", "σ = √(32 ÷ 8) = 2"],
      },
      {
        title: "Muestra: 2, 4, 4, 4, 5, 5, 7, 9",
        steps: ["La suma de las desviaciones al cuadrado es 32", "s = √(32 ÷ 7) ≈ 2,138"],
      },
    ],
    assumptions: [
      "Admite hasta 10.000 números. Una muestra necesita al menos dos.",
      "Usa un cálculo en dos pasadas, numéricamente estable.",
      "Los resultados se muestran con 10 cifras significativas.",
    ],
    faqs: [
      {
        question: "¿Debo usar la desviación estándar muestral o la poblacional?",
        answer: "Usa la muestral (n − 1) cuando tus datos sean una muestra de un grupo mayor, y la poblacional (n) solo cuando tengas el grupo completo.",
      },
      { question: "¿Qué es la varianza?", answer: "El cuadrado de la desviación estándar, expresado en unidades al cuadrado." },
      { question: "¿Qué significa una desviación estándar de 0?", answer: "Que todos los valores son idénticos." },
    ],
    sourcesUsedFor: ["Fórmulas de la desviación estándar muestral y poblacional."],
  },
  text: {
    data: "Conjunto de datos",
    dataHelp: "Separa los valores con punto y coma, espacios o saltos de línea (por ejemplo, 1,5; 2,25; 3). Usa la coma como separador decimal; una coma seguida de un espacio también separa valores.",
    errors: {
      empty: "Introduce al menos un número.",
      tooMany: "Introduce como máximo {max} números.",
      notNumber: "«{token}» no es un número. Usa la coma decimal y separa los valores con punto y coma, espacios o saltos de línea.",
      tooLarge: "«{token}» es demasiado grande.",
    },
    kind: "Los datos son",
    kinds: { sample: "Una muestra (dividir entre n − 1)", population: "Toda la población (dividir entre n)" },
    needTwo: "Una muestra necesita al menos dos valores.",
    sampleSd: "Desviación estándar muestral (s)",
    populationSd: "Desviación estándar poblacional (σ)",
    sampleVariance: "Varianza muestral (s²)",
    populationVariance: "Varianza poblacional (σ²)",
    mean: "Media",
    count: "Recuento (n)",
    standardError: "Error estándar de la media",
  },
};

export default es;
