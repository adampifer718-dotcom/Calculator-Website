import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ConfidenceIntervalText } from "../text/en";

const es: CalculatorTranslation<ConfidenceIntervalText> = {
  content: {
    title: "Calculadora de intervalos de confianza",
    shortTitle: "Intervalo de confianza",
    summary: "Calcula un intervalo de confianza para una media a partir de la media muestral, la desviación típica y el tamaño de la muestra.",
    metaTitle: "Calculadora de intervalos de confianza – Para una media",
    metaDescription:
      "Calcula un intervalo de confianza para una media con la media muestral, la desviación típica, el tamaño de la muestra y el nivel de confianza, con margen de error y z*.",
    keywords: ["intervalo de confianza", "margen de error", "error estándar", "nivel de confianza 95 %", "estadística", "intervalo de confianza media"],
    intro: [
      "Un intervalo de confianza da un rango de valores plausibles para la media de una población. Un intervalo al 95 % se construye de forma que el 95 % de los intervalos obtenidos así contendrían la media real.",
      "Introduce la media muestral, la desviación típica, el tamaño de la muestra y el nivel de confianza.",
    ],
    howToUse: [
      "Introduce la media muestral.",
      "Introduce la desviación típica y el tamaño de la muestra.",
      "Elige el nivel de confianza, por ejemplo el 95 %.",
      "Consulta el intervalo, el margen de error y el valor crítico.",
    ],
    formulas: [
      { title: "Intervalo de confianza", expression: "IC = x̄ ± z* × σ ÷ √n", explanation: "z* es el valor crítico para el nivel de confianza." },
      { title: "Valor crítico", expression: "z* = Φ⁻¹(1 − (1 − nivel) ÷ 2)", explanation: "Para el 95 %, z* ≈ 1,96; para el 99 %, z* ≈ 2,576." },
    ],
    examples: [
      { title: "Media 100, σ 15, n 36, 95 %", steps: ["EE = 15 ÷ √36 = 2,5", "ME = 1,96 × 2,5 ≈ 4,9", "IC ≈ de 95,1 a 104,9"] },
      { title: "Media 50, σ 8, n 64, 99 %", steps: ["EE = 8 ÷ √64 = 1", "ME = 2,576 × 1", "IC ≈ de 47,42 a 52,58"] },
    ],
    assumptions: [
      "Usa la distribución normal (z): adecuada cuando σ es conocida o la muestra es grande (n ≥ 30). Las muestras pequeñas con σ estimada requieren un intervalo t, que es más amplio.",
      "Supone una muestra aleatoria de observaciones independientes.",
    ],
    faqs: [
      {
        question: "¿Qué significa un 95 % de confianza?",
        answer: "Si repitieras el muestreo muchas veces, alrededor del 95 % de los intervalos contendrían la media real. No es un 95 % de probabilidad para un intervalo concreto.",
      },
      { question: "¿Cómo consigo un intervalo más estrecho?", answer: "Aumenta el tamaño de la muestra o acepta un nivel de confianza menor." },
      { question: "¿Qué es el margen de error?", answer: "La mitad de la anchura del intervalo: z* × σ ÷ √n." },
    ],
    sourcesUsedFor: ["Intervalo de confianza para una media y valores críticos de z."],
  },
  text: {
    mean: "Media muestral (x̄)",
    sd: "Desviación típica (σ)",
    n: "Tamaño de la muestra (n)",
    level: "Nivel de confianza",
    primary: "Intervalo de confianza al {level}",
    interval: "De {lower} a {upper}",
    margin: "Margen de error",
    standardError: "Error estándar",
    critical: "Valor crítico (z*)",
    note: "Usa la distribución normal (z), que supone una desviación típica poblacional conocida o una muestra grande (n ≥ 30).",
  },
};

export default es;
