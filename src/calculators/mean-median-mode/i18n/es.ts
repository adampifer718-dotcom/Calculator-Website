import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MeanMedianModeText } from "../text/en";

const es: CalculatorTranslation<MeanMedianModeText> = {
  content: {
    title: "Calculadora de media, mediana y moda",
    shortTitle: "Media, mediana y moda",
    summary: "Calcula la media, la mediana, la moda, el rango y la suma de una lista de números.",
    metaTitle: "Calculadora de media, mediana y moda – Promedios",
    metaDescription:
      "Calcula la media (promedio), la mediana, la moda, el rango y la suma de un conjunto de datos. Pega números separados por comas, espacios o saltos de línea.",
    keywords: ["media mediana y moda", "calcular la media", "calcular promedio", "mediana", "moda estadística", "medidas de tendencia central", "estadística"],
    intro: [
      "La media, la mediana y la moda son tres formas de describir el centro de un conjunto de datos. Pueden ser muy distintas cuando los datos son asimétricos o tienen valores atípicos.",
      "Pega o escribe tus números para ver las tres, además del rango y la suma.",
    ],
    howToUse: [
      "Introduce tus números separados por comas, espacios o saltos de línea.",
      "Consulta la media, la mediana, la moda, el rango y la suma.",
    ],
    formulas: [
      { title: "Media", expression: "media = suma de los valores ÷ número de valores", explanation: "El promedio aritmético." },
      {
        title: "Mediana",
        expression: "El valor central de los datos ordenados; con un número par de valores, la media de los dos centrales",
        explanation: "Se ve poco afectada por los valores atípicos.",
      },
      { title: "Moda", expression: "El valor o valores que más se repiten", explanation: "Un conjunto de datos puede tener varias modas o ninguna." },
    ],
    examples: [
      {
        title: "2, 4, 4, 5, 7, 9",
        steps: ["Suma = 31; media = 31 ÷ 6 ≈ 5,17", "Mediana = (4 + 5) ÷ 2 = 4,5; moda = 4"],
      },
      {
        title: "10, 20, 30",
        steps: ["Media = 60 ÷ 3 = 20", "Mediana = 20; sin moda"],
      },
    ],
    assumptions: ["Admite hasta 10.000 números.", "Los resultados se muestran con 10 cifras significativas."],
    faqs: [
      {
        question: "¿Cuándo debo usar la mediana en lugar de la media?",
        answer: "Cuando los datos son asimétricos o tienen valores atípicos, como los ingresos o los precios de la vivienda; la mediana se ve menos afectada por los valores extremos.",
      },
      { question: "¿Puede haber más de una moda?", answer: "Sí. Si varios valores empatan en la mayor frecuencia, todos son modas." },
      { question: "¿Y si ningún número se repite?", answer: "Entonces no hay moda." },
    ],
    sourcesUsedFor: ["Definiciones de la media, la mediana y la moda."],
  },
  text: {
    data: "Conjunto de datos",
    dataHelp: "Separa los números con comas, espacios o saltos de línea. Usa el punto como separador decimal.",
    errors: {
      empty: "Introduce al menos un número.",
      tooMany: "Introduce como máximo {max} números.",
      notNumber: "«{token}» no es un número. Separa los valores con comas, espacios o saltos de línea.",
      tooLarge: "«{token}» es demasiado grande.",
    },
    mean: "Media (promedio)",
    caption: "{count} valores.",
    median: "Mediana",
    mode: "Moda",
    modes: "Modas",
    noMode: "Sin moda (todos los valores aparecen una vez)",
    range: "Rango",
    sum: "Suma",
  },
};

export default es;
