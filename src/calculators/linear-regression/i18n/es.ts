import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LinearRegressionText } from "../text/en";

const es: CalculatorTranslation<LinearRegressionText> = {
  content: {
    title: "Calculadora de regresión lineal",
    shortTitle: "Regresión lineal",
    summary:
      "Ajusta una recta de mínimos cuadrados ŷ = a + bx a datos emparejados, con r², el error estándar de la pendiente, una prueba t y predicciones.",
    metaTitle: "Calculadora de regresión lineal – Mínimos cuadrados y r²",
    metaDescription:
      "Pega datos emparejados de X e Y para obtener la recta de mínimos cuadrados ŷ = a + bx, r y r², el error estándar de la pendiente, el estadístico t y el valor p.",
    keywords: [
      "regresión lineal",
      "mínimos cuadrados",
      "recta de mejor ajuste",
      "ecuación de regresión",
      "pendiente",
      "ordenada en el origen",
      "r cuadrado",
      "error estándar de la pendiente",
    ],
    intro: [
      "La regresión lineal simple busca la recta que mejor predice una variable, Y, a partir de otra, X. La recta de mínimos cuadrados ordinarios es la que hace mínima la suma de los cuadrados de las distancias verticales entre los puntos y la recta.",
      "Introduce observaciones emparejadas y la calculadora te dará la ecuación ŷ = a + bx, qué parte de la variación explica la recta (r²), el error estándar de la pendiente con una prueba t de si la pendiente podría ser cero, y una predicción opcional. Si solo necesitas la intensidad de la relación, la calculadora del coeficiente de correlación da por separado la r de Pearson y la ρ de Spearman.",
    ],
    howToUse: [
      "Escribe los valores de X (la variable predictora) en el primer cuadro, separados por punto y coma, espacios o saltos de línea.",
      "Escribe los valores de Y correspondientes (la variable respuesta) en el segundo cuadro, en el mismo orden. Necesitas al menos 3 pares.",
      "Si quieres, introduce un valor de x para obtener el ŷ previsto.",
      "Consulta la ecuación y revisa r² y el valor p de la pendiente.",
    ],
    formulas: [
      {
        title: "Pendiente y ordenada en el origen",
        expression: "b = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ Σ(xᵢ − x̄)²,  a = ȳ − b·x̄",
        explanation: "La recta de mínimos cuadrados siempre pasa por el punto de las medias (x̄, ȳ).",
      },
      {
        title: "Error estándar residual",
        expression: "s = √[Σ(yᵢ − ŷᵢ)² ÷ (n − 2)]",
        explanation: "La distancia vertical típica de los puntos a la recta, en unidades de Y. a y b consumen dos grados de libertad.",
      },
      {
        title: "Error estándar y prueba t de la pendiente",
        expression: "SE(b) = s ÷ √Σ(xᵢ − x̄)²,  t = b ÷ SE(b),  gl = n − 2",
        explanation: "El valor p bilateral de la distribución t de Student contrasta la hipótesis nula de que la pendiente real es 0.",
      },
      {
        title: "Coeficiente de determinación",
        expression: "r² = 1 − Σ(yᵢ − ŷᵢ)² ÷ Σ(yᵢ − ȳ)²",
        explanation: "La parte de la variación de Y que explica la recta. En la regresión simple es igual al cuadrado de la r de Pearson.",
      },
    ],
    examples: [
      {
        title: "Horas de estudio semanales y notas de examen",
        steps: [
          "x̄ = 4,5, ȳ = 66,125; Σ(x − x̄)² = 42 y Σ(x − x̄)(y − ȳ) = 171,5",
          "b = 171,5 ÷ 42 ≈ 4,08333 y a = 66,125 − 4,08333 × 4,5 = 47,75",
          "r² ≈ 0,9935; SE(b) ≈ 0,1349, t ≈ 30,28 con 6 gl, p ≈ 8,6 × 10⁻⁸",
        ],
      },
      {
        title: "Precio de coches usados según su antigüedad",
        steps: [
          "El precio baja a medida que aumenta la antigüedad, así que la pendiente es negativa: b ≈ −1245,26 por año.",
          "a ≈ 24.998,8, el precio estimado de un coche nuevo.",
          "A los 5 años: ŷ ≈ 24.998,78 − 1245,26 × 5 ≈ 18.772,5",
        ],
      },
      {
        title: "Recta de calibración de un sensor",
        steps: [
          "b = 5510 ÷ 1750 ≈ 3,14857 unidades de señal por unidad de concentración",
          "a ≈ 2,28571, la señal de un blanco",
          "r² ≈ 0,9990 y el error estándar residual es de unos 2,08",
        ],
      },
    ],
    assumptions: [
      "La relación es aproximadamente lineal en el intervalo de los datos. Un patrón curvo necesita otro modelo aunque r² parezca alto.",
      "El valor p y los errores estándar suponen observaciones independientes con residuos aproximadamente normales y de dispersión constante.",
      "Se considera que X se mide sin error; solo se minimizan las distancias verticales. Intercambiar X e Y da una recta distinta.",
      "Los valores atípicos y los puntos con valores extremos de X pueden desplazar mucho la recta. Las predicciones fuera del intervalo de X observado son extrapolaciones.",
    ],
    faqs: [
      {
        question: "¿En qué se diferencia del coeficiente de correlación?",
        answer: "La correlación da un único número para la intensidad y la dirección de una relación lineal y trata X e Y por igual. La regresión da una ecuación que predice Y a partir de X, con una pendiente en unidades de Y por unidad de X. Usa la calculadora del coeficiente de correlación si solo necesitas r.",
      },
      {
        question: "¿Qué significa el valor p de la pendiente?",
        answer: "Es la probabilidad de obtener una pendiente al menos así de alejada de 0 si, en realidad, Y no variara linealmente con X. Un valor p pequeño (por ejemplo, menor que 0,05) sugiere una tendencia lineal real; no dice nada sobre lo grande o importante que es esa tendencia.",
      },
      {
        question: "¿Por qué los valores de X deben ser distintos?",
        answer: "La pendiente se divide entre la dispersión de los valores de X. Si todos los X son iguales, esa dispersión es cero y cualquier recta vertical encajaría, así que no se puede calcular ninguna pendiente.",
      },
    ],
    sourcesUsedFor: [
      "La recta de mínimos cuadrados, su pendiente y su ordenada en el origen, y el coeficiente de determinación.",
      "La desviación típica (error estándar) de la pendiente de un ajuste lineal por mínimos cuadrados.",
    ],
  },
  text: {
    x: "Valores de X (variable predictora)",
    xHelp:
      "Un valor por observación, separados por punto y coma, espacios o saltos de línea. Usa la coma como separador decimal; una coma seguida de un espacio también separa valores.",
    y: "Valores de Y (variable respuesta)",
    yHelp: "Un valor por observación, en el mismo orden que los valores de X.",
    x0: "Predecir y para x =",
    x0Help: "Opcional. Un valor de x para el que estimar ŷ con la recta ajustada.",
    errors: {
      empty: "Introduce al menos un número.",
      tooMany: "Introduce como máximo {max} números.",
      notNumber: "«{token}» no es un número. Usa la coma decimal y separa los valores con punto y coma, espacios o saltos de línea.",
      tooLarge: "«{token}» es demasiado grande.",
    },
    tooBig: "{value} es demasiado grande. Cada número puede valer como máximo {max} en valor absoluto.",
    tooFew: "Introduce al menos {min} pares de valores.",
    countMismatch: "Introduce un valor de Y por cada valor de X: tienes {x} y {y}.",
    xCount: { zero: "{n} valores de X", one: "{n} valor de X", two: "{n} valores de X", few: "{n} valores de X", many: "{n} valores de X", other: "{n} valores de X" },
    yCount: { zero: "{n} valores de Y", one: "{n} valor de Y", two: "{n} valores de Y", few: "{n} valores de Y", many: "{n} valores de Y", other: "{n} valores de Y" },
    pairCount: { zero: "{n} pares", one: "{n} par", two: "{n} pares", few: "{n} pares", many: "{n} pares", other: "{n} pares" },
    constantX: "Todos los valores de X son iguales, así que no se puede ajustar ninguna recta. Al menos dos valores de X deben ser distintos.",
    equationLabel: "Recta de regresión",
    equation: "ŷ = {a} {sign} {b}x",
    caption: "Ajuste por mínimos cuadrados a {count}.",
    slope: "Pendiente (b)",
    intercept: "Ordenada en el origen (a)",
    rSquared: "Coeficiente de determinación (r²)",
    r: "Coeficiente de correlación (r)",
    slopeSe: "Error estándar de la pendiente",
    tStat: "Estadístico t de la pendiente",
    tInfinite: "Infinito (ajuste perfecto)",
    df: "Grados de libertad (n − 2)",
    pValue: "Valor p bilateral (H₀: pendiente = 0)",
    residualSe: "Error estándar residual",
    prediction: "ŷ previsto para x = {x0}",
    notDefined: "No definido (todos los valores de Y son iguales)",
    perfectNote: "Los puntos están exactamente sobre una recta, así que los residuos y los errores estándar son 0 y el valor p es 0.",
    constantYNote: "Todos los valores de Y son iguales, así que la recta es horizontal (pendiente 0) y r, r² y la prueba de la pendiente no están definidos.",
    extrapolationNote:
      "El valor de x está fuera del intervalo de los datos. Las predicciones más allá de los valores de X observados (extrapolación) pueden alejarse mucho de la realidad si la relación cambia.",
    note: "El valor p supone que los residuos son independientes y aproximadamente normales, con dispersión constante. Un buen ajuste no demuestra que X cause Y.",
  },
};

export default es;
