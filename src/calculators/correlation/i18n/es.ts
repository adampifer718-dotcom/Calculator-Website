import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CorrelationText } from "../text/en";

const es: CalculatorTranslation<CorrelationText> = {
  content: {
    title: "Calculadora del coeficiente de correlación",
    shortTitle: "Correlación",
    summary: "Mide hasta qué punto dos listas de números varían juntas con la r de Pearson, la ρ de Spearman, r² y una prueba de significación.",
    metaTitle: "Calculadora de correlación – r de Pearson y ρ de Spearman",
    metaDescription:
      "Pega datos emparejados de X e Y para obtener la r de Pearson, r², el estadístico t y el valor p, la correlación por rangos de Spearman y la covarianza muestral.",
    keywords: ["coeficiente de correlación", "r de Pearson", "rho de Spearman", "correlación por rangos", "r cuadrado", "covarianza", "relación lineal", "diagrama de dispersión"],
    intro: [
      "Un coeficiente de correlación resume, en un número entre −1 y +1, hasta qué punto dos magnitudes medidas siguen un patrón rectilíneo. Los valores cercanos a +1 indican que a valores de X más altos les corresponden valores de Y más altos; los cercanos a −1, lo contrario; y los cercanos a 0, que apenas hay un patrón lineal.",
      "Introduce observaciones emparejadas, como horas de práctica y notas de examen. La calculadora devuelve la r de Pearson con r², una prueba t para ver si la correlación podría ser cero, la correlación por rangos de Spearman para patrones monótonos pero curvos y la covarianza muestral.",
    ],
    howToUse: [
      "Escribe los valores de X en el primer cuadro, separados por punto y coma, espacios o saltos de línea.",
      "Escribe los valores de Y correspondientes en el segundo cuadro, en el mismo orden. Ambas listas necesitan el mismo número de valores, al menos 3.",
      "Consulta la r de Pearson y r², y después revisa el valor p para ver si el patrón podría deberse fácilmente al azar.",
      "Compara r con la ρ de Spearman. Una ρ mucho más cercana a ±1 que r sugiere una relación curva pero que sube o baja de forma constante.",
    ],
    formulas: [
      {
        title: "r de Pearson",
        expression: "r = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ √[Σ(xᵢ − x̄)² · Σ(yᵢ − ȳ)²]",
        explanation: "La suma de los productos cruzados de las desviaciones, escalada por la dispersión de cada lista. Va de −1 a +1.",
      },
      {
        title: "Prueba de significación",
        expression: "t = r·√[(n − 2) ÷ (1 − r²)], gl = n − 2",
        explanation: "El valor p bilateral se obtiene de la distribución t de Student. Contrasta la hipótesis nula de que la correlación poblacional es 0.",
      },
      {
        title: "ρ de Spearman",
        expression: "ρ = r de Pearson de los rangos",
        explanation: "Cada lista se sustituye por sus rangos; los valores empatados reciben la media de los rangos que ocupan.",
      },
      {
        title: "Covarianza muestral",
        expression: "cov = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ (n − 1)",
        explanation: "La variación conjunta sin escalar, en unidades de X por unidades de Y.",
      },
    ],
    examples: [
      {
        title: "Horas de práctica y notas de un test",
        steps: [
          "x̄ = 6, ȳ = 65,1667; Σ productos cruzados = 151, Σ(x − x̄)² = 42, Σ(y − ȳ)² = 550,8333",
          "r = 151 ÷ √(42 × 550,8333) ≈ 0,9928",
          "t = 0,9928 × √(4 ÷ 0,01444) ≈ 16,52 con 4 gl, p ≈ 0,0000785",
        ],
      },
      {
        title: "Temperatura exterior y coste semanal de calefacción",
        steps: [
          "El coste baja a medida que sube la temperatura, así que los productos cruzados son en su mayoría negativos.",
          "r ≈ −0,9924 y r² ≈ 0,9849",
          "Las dos listas tienen el mismo orden invertido, así que la ρ de Spearman = −1.",
        ],
      },
      {
        title: "Un patrón curvo pero siempre creciente (y = x²)",
        steps: ["La r de Pearson ≈ 0,9789, porque los puntos se curvan y se apartan de una recta.", "Los rangos de x e y son idénticos, así que la ρ de Spearman = 1."],
      },
    ],
    assumptions: [
      "La r de Pearson solo mide la asociación lineal. Una relación curva fuerte puede dar una r modesta; la ρ de Spearman recoge cualquier patrón que suba o baje de forma constante.",
      "El valor p supone que los pares son independientes y, para la r de Pearson, que los datos siguen aproximadamente una distribución normal bivariante. Los valores atípicos pueden cambiar mucho r.",
      "Las etiquetas de intensidad siguen una regla práctica habitual (|r| por debajo de 0,1 despreciable, 0,1 débil, 0,4 moderada, 0,7 fuerte, 0,9 muy fuerte). Cada disciplina tiene su propio criterio sobre qué es fuerte.",
      "Correlación no implica causalidad: un tercer factor, el azar o una causalidad inversa pueden explicar una asociación.",
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre r y r²?",
        answer:
          "r muestra la dirección y la intensidad de un patrón lineal. r² es la proporción de la variación de Y que explica un ajuste lineal sobre X, así que r = 0,8 significa r² = 0,64, es decir, el 64 %.",
      },
      {
        question: "¿Cuándo debo usar Spearman en lugar de Pearson?",
        answer: "Usa la ρ de Spearman cuando los datos sean rangos, cuando la relación sea monótona pero no rectilínea o cuando los valores atípicos puedan distorsionar la r de Pearson.",
      },
      {
        question: "¿Por qué las listas deben tener al menos tres valores y algo de variación?",
        answer:
          "Con dos puntos cualquier recta encaja a la perfección, y la prueba necesita n − 2 ≥ 1 grados de libertad. Si todos los valores de X o todos los de Y son iguales, la fórmula divide entre cero y r no está definida.",
      },
    ],
    sourcesUsedFor: [
      "Prueba de si r difiere de cero con n − 2 grados de libertad.",
      "Definición del coeficiente de correlación como medida de asociación lineal entre −1 y +1.",
    ],
  },
  text: {
    x: "Valores de X",
    xHelp: "Un valor por observación, separados por punto y coma, espacios o saltos de línea. Usa la coma como separador decimal; una coma seguida de un espacio también separa valores.",
    y: "Valores de Y",
    yHelp: "Un valor por observación, en el mismo orden que los valores de X.",
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
    constantX: "Todos los valores de X son iguales, así que la correlación no está definida. Al menos dos valores de X deben ser distintos.",
    constantY: "Todos los valores de Y son iguales, así que la correlación no está definida. Al menos dos valores de Y deben ser distintos.",
    pearson: "Coeficiente de correlación de Pearson (r)",
    caption: "A partir de {count}.",
    rSquared: "Coeficiente de determinación (r²)",
    tStat: "Estadístico t",
    tInfinite: "Infinito (correlación perfecta)",
    df: "Grados de libertad (n − 2)",
    pValue: "Valor p bilateral (H₀: sin correlación)",
    spearman: "Correlación por rangos de Spearman (ρ)",
    covariance: "Covarianza muestral",
    strength: "Intensidad y dirección (regla práctica)",
    describe: "{strength}, {direction}",
    strengths: { negligible: "Despreciable", weak: "Débil", moderate: "Moderada", strong: "Fuerte", veryStrong: "Muy fuerte", perfect: "Perfecta" },
    directions: { positive: "positiva", negative: "negativa", none: "sin dirección" },
    perfectNote: "Los puntos están exactamente sobre una recta, así que |r| = 1 y el valor p es 0.",
    smallNote: "Con solo unos pocos pares, incluso una r grande puede surgir por azar. Revisa el valor p.",
    note: "La correlación mide hasta qué punto dos variables varían juntas. No demuestra que una cause la otra.",
  },
};

export default es;
