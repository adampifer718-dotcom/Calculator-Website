import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ExponentText } from "../text/en";

const es: CalculatorTranslation<ExponentText> = {
  content: {
    title: "Calculadora de exponentes",
    shortTitle: "Exponentes",
    summary: "Eleva cualquier número a una potencia, incluidos los exponentes negativos y fraccionarios.",
    metaTitle: "Calculadora de exponentes – Potencias y exponentes negativos",
    metaDescription:
      "Calcula un número elevado a cualquier potencia, incluidos exponentes negativos y fraccionarios; los resultados muy grandes se muestran en notación científica.",
    keywords: ["calculadora de potencias", "exponente", "elevar a una potencia", "al cuadrado", "al cubo", "exponente negativo", "exponente fraccionario"],
    intro: [
      "Un exponente indica cuántas veces se multiplica una base por sí misma. 2¹⁰ significa multiplicar diez doses entre sí, lo que da 1024.",
      "Los exponentes negativos dan inversos y los exponentes fraccionarios dan raíces.",
    ],
    howToUse: [
      "Introduce la base a.",
      "Introduce el exponente b. Se admiten decimales y valores negativos.",
      "Consulta aᵇ. Los resultados muy grandes o muy pequeños se muestran en notación científica.",
    ],
    formulas: [
      { title: "Exponente positivo", expression: "aᵇ = a × a × … × a (b veces)", explanation: "Para exponentes enteros." },
      { title: "Exponente negativo", expression: "a⁻ᵇ = 1 ÷ aᵇ", explanation: "La base no puede ser 0." },
      { title: "Exponente fraccionario", expression: "a^(1/n) = ⁿ√a", explanation: "Por ejemplo, 9^0,5 = √9 = 3." },
    ],
    examples: [
      {
        title: "2 elevado a 10",
        steps: ["2 × 2 × … (10 veces)", "= 1024"],
      },
      {
        title: "5 elevado a −2",
        steps: ["1 ÷ 5²", "= 1 ÷ 25 = 0,04"],
      },
      {
        title: "9 elevado a 0,5",
        steps: ["9^0,5 = √9", "= 3"],
      },
    ],
    assumptions: [
      "Los resultados son números reales; una base negativa necesita un exponente entero.",
      "Los resultados se muestran con 12 cifras significativas.",
    ],
    faqs: [
      { question: "¿Cuánto es cualquier número elevado a 0?", answer: "Cualquier número distinto de cero elevado a 0 es 1." },
      { question: "¿Qué significa un exponente negativo?", answer: "Indica el inverso: 2⁻³ = 1 ÷ 2³ = 0,125." },
      {
        question: "¿Cómo funcionan los exponentes fraccionarios?",
        answer: "El denominador indica una raíz: 8^(1/3) es la raíz cúbica de 8, que es 2.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    base: "Base (a)",
    exponent: "Exponente (b)",
    zeroNegative: "0 elevado a una potencia negativa no está definido.",
    negativeBase: "Una base negativa necesita un exponente entero para dar un resultado real.",
    tooLarge: "Demasiado grande para mostrarlo",
    eNotation: "Notación e",
    negativeNote: "Un exponente negativo significa 1 ÷ {base}^{exponent}.",
    positiveNote: "{base} multiplicado por sí mismo {exponent} veces.",
  },
};

export default es;
