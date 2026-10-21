import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { QuadraticText } from "../text/en";

const es: CalculatorTranslation<QuadraticText> = {
  content: {
    title: "Calculadora de ecuaciones de segundo grado",
    shortTitle: "Ecuación de segundo grado",
    summary: "Resuelve ax² + bx + c = 0 con raíces reales o complejas, junto con el discriminante, el vértice y el eje de simetría.",
    metaTitle: "Ecuación de segundo grado – Raíces, discriminante y vértice",
    metaDescription:
      "Resuelve cualquier ecuación de segundo grado ax² + bx + c = 0: raíces reales o complejas, el discriminante y su significado, el vértice y el eje de simetría.",
    keywords: [
      "ecuación de segundo grado",
      "ecuación cuadrática",
      "fórmula general",
      "resolver ecuación cuadrática",
      "discriminante",
      "vértice de la parábola",
      "raíces complejas",
      "álgebra",
    ],
    intro: [
      "Una ecuación de segundo grado tiene la forma ax² + bx + c = 0, con a distinto de cero. Su gráfica es una parábola, y las raíces son los puntos en los que esa parábola corta el eje x.",
      "Escribe los tres coeficientes para obtener las dos raíces a la vez. Si la parábola nunca llega al eje x, la calculadora da el par de raíces complejas. También muestra el discriminante, el vértice y el eje de simetría.",
    ],
    howToUse: [
      "Reordena la ecuación para que un lado sea 0; por ejemplo, 3x² = 7x + 6 pasa a ser 3x² − 7x − 6 = 0.",
      "Introduce a, b y c. Incluye los signos menos y usa 0 para cualquier término que falte.",
      "Consulta las raíces. Las raíces reales aparecen de mayor a menor; las complejas, como parte real ± parte imaginaria.",
      "Usa el discriminante, el vértice y el eje de simetría para dibujar la parábola o comprobar tus cálculos.",
    ],
    formulas: [
      { title: "Fórmula general", expression: "x = (−b ± √(b² − 4ac)) ÷ 2a", explanation: "Da las dos raíces. El ± produce una raíz con + y otra con −." },
      {
        title: "Discriminante",
        expression: "D = b² − 4ac",
        explanation: "Si D > 0 hay dos raíces reales; si D = 0, una raíz doble; y si D < 0, dos raíces complejas conjugadas.",
      },
      {
        title: "Forma estable usada en el cálculo",
        expression: "q = −½(b + sign(b)·√D),  x₁ = q ÷ a,  x₂ = c ÷ q",
        explanation:
          "Es algebraicamente idéntica a la fórmula general, pero evita restar dos números casi iguales, lo que hace perder precisión cuando b² es mucho mayor que 4ac.",
      },
      { title: "Raíces complejas", expression: "x = −b ÷ 2a ± (√(−D) ÷ 2|a|)·i", explanation: "Se usa cuando D < 0; i es la unidad imaginaria, con i² = −1." },
      {
        title: "Vértice y eje",
        expression: "h = −b ÷ 2a,  k = −D ÷ 4a,  eje: x = h",
        explanation: "El vértice (h, k) es el punto de giro de la parábola. k es el valor de ax² + bx + c en x = h.",
      },
      {
        title: "Suma y producto de las raíces",
        expression: "x₁ + x₂ = −b ÷ a,  x₁·x₂ = c ÷ a",
        explanation: "Son las fórmulas de Vieta. También se cumplen con raíces complejas.",
      },
    ],
    examples: [
      {
        title: "Dos raíces reales: 3x² − 7x − 6 = 0",
        steps: ["D = (−7)² − 4·3·(−6) = 49 + 72 = 121", "√D = 11, así que x = (7 ± 11) ÷ 6", "x₁ = 18 ÷ 6 = 3 y x₂ = −4 ÷ 6 ≈ −0,6667"],
      },
      {
        title: "Una raíz doble: 4x² + 12x + 9 = 0",
        steps: ["D = 12² − 4·4·9 = 144 − 144 = 0", "x = −12 ÷ (2·4) = −1,5", "La parábola solo toca el eje x en su vértice (−1,5; 0)."],
      },
      {
        title: "Raíces complejas: x² − 2x + 10 = 0",
        steps: ["D = (−2)² − 4·1·10 = 4 − 40 = −36", "Parte real: −(−2) ÷ 2 = 1", "Parte imaginaria: √36 ÷ 2 = 3, así que x = 1 ± 3i"],
      },
    ],
    assumptions: [
      "Los coeficientes son números reales. No se admiten ecuaciones con coeficientes complejos.",
      "Los resultados se muestran con 10 cifras significativas. Un discriminante que solo difiere de cero por un error de redondeo mínimo se trata como exactamente cero, de modo que se indica la raíz doble.",
      "Los coeficientes muy grandes o muy pequeños se calculan en coma flotante de doble precisión, así que las últimas cifras de resultados extremos pueden diferir de la aritmética exacta.",
    ],
    faqs: [
      {
        question: "¿Qué pasa si a es 0?",
        answer:
          "Entonces no hay término en x² y la ecuación es lineal: bx + c = 0, con la única solución x = −c ÷ b. La calculadora pide una a distinta de cero porque la fórmula general dividiría entre cero.",
      },
      {
        question: "¿Qué significa un discriminante negativo?",
        answer: "La parábola nunca corta el eje x, así que no hay soluciones reales. Las dos soluciones son números complejos que solo se diferencian en el signo de su parte imaginaria.",
      },
      {
        question: "¿Por qué la calculadora no usa directamente la fórmula de los libros de texto?",
        answer:
          "Cuando b² es mucho mayor que 4ac, −b + √D resta dos números casi iguales y pierde cifras. La forma estable calcula primero la raíz mayor y obtiene la menor a partir del producto de las raíces, c ÷ a, lo que conserva toda la precisión.",
      },
    ],
    sourcesUsedFor: ["La fórmula general y cómo el discriminante predice el número y el tipo de soluciones."],
  },
  text: {
    a: "Coeficiente a",
    aHelp: "El número que acompaña a x². No puede ser 0.",
    b: "Coeficiente b",
    bHelp: "El número que acompaña a x. Usa 0 si no hay término en x.",
    c: "Término independiente c",
    cHelp: "El número sin x. Usa 0 si no hay ninguno.",
    aZero: "El coeficiente a no puede ser 0. Con a = 0 la ecuación es lineal, no de segundo grado.",
    roots: "Raíces",
    twoRoots: "x₁ = {x1}, x₂ = {x2}",
    oneRoot: "x = {x} (raíz doble)",
    complexRoots: "x = {re} ± {im}i",
    imaginaryRoots: "x = ±{im}i",
    discriminant: "Discriminante (b² − 4ac)",
    meaning: "Qué significa el discriminante",
    meanings: {
      positive: "Positivo: dos raíces reales distintas",
      zero: "Cero: una raíz real doble",
      negative: "Negativo: ninguna raíz real, dos raíces complejas conjugadas",
    },
    vertex: "Vértice (h, k)",
    vertexValue: "({h}, {k})",
    axis: "Eje de simetría",
    axisValue: "x = {h}",
    sum: "Suma de las raíces (−b/a)",
    product: "Producto de las raíces (c/a)",
    opensUp: "La parábola se abre hacia arriba, así que el vértice es su punto más bajo.",
    opensDown: "La parábola se abre hacia abajo, así que el vértice es su punto más alto.",
  },
};

export default es;
