import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ZScoreText } from "../text/en";

const es: CalculatorTranslation<ZScoreText> = {
  content: {
    title: "Calculadora de puntuación z",
    shortTitle: "Puntuación z",
    summary: "Tipifica un valor como puntuación z y obtén su percentil y las probabilidades de las colas bajo la curva normal.",
    metaTitle: "Calculadora de puntuación z – Percentil y probabilidad",
    metaDescription:
      "Convierte un valor en puntuación z con la media y la desviación estándar, y obtén su percentil y las probabilidades normales de cola derecha y de dos colas.",
    keywords: [
      "puntuación z",
      "valor z",
      "puntuación típica",
      "tipificar",
      "distribución normal",
      "percentil",
      "desviaciones estándar de la media",
      "campana de Gauss",
    ],
    intro: [
      "Una puntuación z indica a cuántas desviaciones estándar está un valor por encima o por debajo de la media. Una puntuación z de 0 es exactamente la media; las positivas están por encima y las negativas, por debajo.",
      "Como las puntuaciones z eliminan las unidades originales, permiten comparar resultados en escalas distintas, como dos exámenes con medias diferentes. Si los datos son aproximadamente normales, la puntuación z también da la proporción de valores por debajo o por encima del tuyo.",
    ],
    howToUse: [
      "Introduce el valor que quieres consultar.",
      "Introduce la media y la desviación estándar del grupo al que pertenece. La desviación estándar debe ser positiva.",
      "Consulta la puntuación z y la posición explicada en palabras.",
      "Usa el percentil para la proporción de valores por debajo de x, P(X > x) para la proporción por encima y la probabilidad de dos colas para un contraste bilateral.",
    ],
    formulas: [
      { title: "Puntuación z", expression: "z = (x − μ) ÷ σ", explanation: "μ es la media y σ la desviación estándar de la distribución." },
      {
        title: "Percentil",
        expression: "P(X < x) = Φ(z)",
        explanation: "Φ es la función de distribución acumulada de la normal estándar: el área bajo la campana a la izquierda de z.",
      },
      {
        title: "Cola derecha",
        expression: "P(X > x) = 1 − Φ(z) = Φ(−z)",
        explanation: "El área a la derecha de z. Se calcula como Φ(−z) para conservar la precisión con z grandes.",
      },
      {
        title: "Probabilidad de dos colas",
        expression: "P(|Z| > |z|) = 2·Φ(−|z|)",
        explanation: "La probabilidad de un valor al menos así de alejado de la media en cualquiera de los dos sentidos.",
      },
    ],
    examples: [
      {
        title: "Una nota de examen de 1310 con media de 1050 y σ = 210",
        steps: [
          "z = (1310 − 1050) ÷ 210 = 260 ÷ 210 ≈ 1,2381",
          "Φ(1,2381) ≈ 0,8922, así que la nota está cerca del percentil 89",
          "Alrededor del 10,78 % de las notas son más altas",
        ],
      },
      {
        title: "Una pieza de 58 mm con media de 70 mm y σ = 8 mm",
        steps: [
          "z = (58 − 70) ÷ 8 = −1,5",
          "Φ(−1,5) ≈ 0,0668, así que alrededor del 6,68 % de las piezas son más cortas",
          "Probabilidad de dos colas = 2 × 0,0668 ≈ 0,1336",
        ],
      },
    ],
    assumptions: [
      "La puntuación z en sí es válida para cualquier distribución, pero el percentil y las probabilidades suponen que los datos siguen una distribución normal.",
      "La media y la desviación estándar que introduzcas se tratan como los valores reales de la población. Con una muestra pequeña y una σ estimada, puede ser más adecuada una distribución t.",
      "Las probabilidades normales se calculan con una aproximación numérica con una exactitud de unas siete cifras significativas.",
    ],
    faqs: [
      {
        question: "¿Qué es una buena puntuación z?",
        answer:
          "Depende de lo que se mida. En las notas de exámenes, una puntuación z más alta es mejor; en algo como el tiempo de reacción, es mejor más baja. En una distribución normal, alrededor del 68 % de los valores quedan entre z = −1 y z = 1, y alrededor del 95 % entre −2 y 2.",
      },
      {
        question: "¿Puede ser negativa una puntuación z?",
        answer: "Sí. Una puntuación z negativa significa que el valor está por debajo de la media. Por ejemplo, z = −2 está dos desviaciones estándar por debajo de la media.",
      },
      {
        question: "¿Cómo convierto una puntuación z en un percentil?",
        answer:
          "Busca el área bajo la curva normal estándar a la izquierda de z. Esta calculadora lo hace por ti: z = 1,6 da alrededor del 94,52 %, así que el valor es mayor que aproximadamente el 94,5 % de la distribución.",
      },
    ],
    sourcesUsedFor: ["Definición de la puntuación z, z = (x − μ)/σ, y de la distribución normal estándar."],
  },
  text: {
    x: "Valor (x)",
    xHelp: "La observación que quieres tipificar.",
    mean: "Media (μ)",
    sd: "Desviación estándar (σ)",
    sdHelp: "Debe ser mayor que 0.",
    z: "Puntuación z",
    above: "{n} desviaciones estándar por encima de la media",
    below: "{n} desviaciones estándar por debajo de la media",
    atMean: "Exactamente en la media",
    position: "Posición",
    percentile: "Percentil, P(X < x)",
    upper: "P(X > x)",
    twoTailed: "Dos colas, P(|Z| > |z|)",
    note: "Las probabilidades suponen que los valores siguen una distribución normal con esta media y esta desviación estándar.",
    unusual: "|z| es mayor que 3, algo muy poco habitual en datos con distribución normal. Comprueba si hay un error al introducir los datos o un valor atípico.",
  },
};

export default es;
