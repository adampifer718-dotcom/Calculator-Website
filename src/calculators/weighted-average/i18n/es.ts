import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WeightedAverageText } from "../text/en";

const es: CalculatorTranslation<WeightedAverageText> = {
  content: {
    title: "Calculadora de media ponderada",
    shortTitle: "Media ponderada",
    summary: "Calcula la media de una lista de valores en la que unos cuentan más que otros y compárala con la media simple.",
    metaTitle: "Calculadora de media ponderada – Promedio con pesos",
    metaDescription:
      "Calcula la media ponderada de hasta 100 valores y sus pesos, con la suma de los pesos y la media simple sin ponderar para comparar.",
    keywords: [
      "media ponderada",
      "promedio ponderado",
      "nota ponderada",
      "media con pesos",
      "nota final",
      "precio medio",
      "calcular media ponderada",
    ],
    intro: [
      "Una media ponderada es una media en la que cada valor cuenta según su peso. Un examen final que vale la mitad de la nota influye más en el resultado que un control que vale una décima parte, y una compra grande afecta al precio medio más que una pequeña.",
      "Introduce los valores y una lista equivalente de pesos. La calculadora da la media ponderada y, para comparar, la media normal, que trata todos los valores por igual.",
    ],
    howToUse: [
      "Escribe los valores en el primer cuadro, separados por comas, espacios o saltos de línea.",
      "Escribe los pesos en el segundo cuadro en el mismo orden, uno por cada valor.",
      "Los pesos pueden ser porcentajes, créditos, cantidades o cualquier otro número no negativo. No hace falta que sumen 100 ni 1.",
      "Consulta la media ponderada. Si difiere mucho de la media sin ponderar, los valores con más peso la están atrayendo hacia ellos.",
    ],
    formulas: [
      {
        title: "Media ponderada",
        expression: "x̄w = Σ(wᵢ·xᵢ) ÷ Σwᵢ",
        explanation: "Multiplica cada valor por su peso, suma los productos y divide entre el peso total.",
      },
      {
        title: "Media sin ponderar",
        expression: "x̄ = Σxᵢ ÷ n",
        explanation: "La media normal, que coincide con la media ponderada cuando todos los pesos son iguales.",
      },
    ],
    examples: [
      {
        title: "Nota de una asignatura con partes ponderadas",
        steps: [
          "Productos: 82 × 20 = 1640; 90 × 50 = 4500; 75 × 30 = 2250",
          "Suma de productos = 8390 y suma de pesos = 100",
          "Media ponderada = 8390 ÷ 100 = 83,9, mientras que la media simple es de aproximadamente 82,33",
        ],
      },
      {
        title: "Puntos de calificación ponderados por créditos",
        steps: ["Productos: 14,8 + 9 + 12 + 4,6 = 40,4", "Suma de pesos = 4 + 3 + 3 + 2 = 12 créditos", "Media ponderada = 40,4 ÷ 12 ≈ 3,3667"],
      },
      {
        title: "Precio medio pagado por kilogramo",
        steps: [
          "Precios por kg ponderados por los kilogramos comprados: 12,5 × 40 + 14 × 25 + 11,75 × 35 = 500 + 350 + 411,25 = 1261,25",
          "Cantidad total = 100 kg",
          "Precio medio = 1261,25 ÷ 100 = 12,6125 por kg",
        ],
      },
    ],
    assumptions: [
      "Los valores y los pesos se emparejan por posición: el primer peso corresponde al primer valor, y así sucesivamente.",
      "Los pesos deben ser cero o positivos, y al menos uno debe ser mayor que cero. Un peso de 0 deja ese valor fuera de la media ponderada, pero no de la media sin ponderar.",
      "Los resultados se muestran con 10 cifras significativas. Se aceptan hasta 100 pares.",
    ],
    faqs: [
      {
        question: "¿Tienen que sumar 100 % los pesos?",
        answer: "No. La fórmula divide entre la suma de los pesos, así que 20, 50 y 30 dan el mismo resultado que 0,2; 0,5 y 0,3, o que 2, 5 y 3.",
      },
      {
        question: "¿Cuándo coincide la media ponderada con la media normal?",
        answer: "Cuando todos los pesos son iguales. Entonces cada valor tiene la misma influencia y la fórmula se reduce a la suma de los valores dividida entre su número.",
      },
      {
        question: "¿Cómo calculo la nota que necesito en el examen final?",
        answer:
          "Escribe la media ponderada con la nota del examen final como incógnita y despéjala. Por ejemplo, con un 80 en trabajos que valen el 60 % y un objetivo de 85, necesitas 0,6 × 80 + 0,4 × s = 85, así que s = 92,5.",
      },
    ],
    sourcesUsedFor: ["Definición de media ponderada: cada valor multiplicado por su peso, sumado y dividido entre la suma de los pesos."],
  },
  text: {
    values: "Valores",
    valuesHelp: "Un valor por elemento, separados por comas, espacios o saltos de línea.",
    weights: "Pesos",
    weightsHelp: "Un peso por valor, en el mismo orden. Sirven porcentajes, créditos o cantidades; no hace falta que sumen 100.",
    errors: {
      empty: "Introduce al menos un número.",
      tooMany: "Introduce como máximo {max} números.",
      notNumber: "«{token}» no es un número. Separa los valores con comas, espacios o saltos de línea.",
      tooLarge: "«{token}» es demasiado grande.",
    },
    maxCount: "Introduce como máximo {max} números.",
    tooBig: "{value} es demasiado grande. Cada número puede valer como máximo {max} en valor absoluto.",
    negativeWeight: "Los pesos no pueden ser negativos ({value}).",
    zeroTotal: "Los pesos suman 0. Al menos un peso debe ser mayor que 0.",
    countMismatch: "Introduce un peso por cada valor: tienes {values} y {weights}.",
    valueCount: { zero: "{n} valores", one: "{n} valor", two: "{n} valores", few: "{n} valores", many: "{n} valores", other: "{n} valores" },
    weightCount: { zero: "{n} pesos", one: "{n} peso", two: "{n} pesos", few: "{n} pesos", many: "{n} pesos", other: "{n} pesos" },
    weightedMean: "Media ponderada",
    caption: "Calculada con {count}.",
    sumOfWeights: "Suma de los pesos",
    sumOfProducts: "Suma de valor × peso",
    unweightedMean: "Media sin ponderar (para comparar)",
  },
};

export default es;
