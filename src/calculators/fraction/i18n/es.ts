import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FractionText } from "../text/en";

const es: CalculatorTranslation<FractionText> = {
  content: {
    title: "Calculadora de fracciones",
    shortTitle: "Fracciones",
    summary: "Suma, resta, multiplica o divide fracciones y números mixtos, con el resultado simplificado y en forma decimal.",
    metaTitle: "Calculadora de fracciones – Sumar, restar, multiplicar y dividir",
    metaDescription:
      "Suma, resta, multiplica y divide fracciones, números mixtos y decimales. Obtén el resultado exacto simplificado, como número mixto y en forma decimal.",
    keywords: ["calculadora de fracciones", "sumar fracciones", "simplificar fracciones", "dividir fracciones", "números mixtos", "fracción irreducible", "operaciones con fracciones"],
    intro: [
      "Introduce dos números como fracciones (3/4), números mixtos (1 1/2), números enteros o decimales, elige una operación y obtén el resultado exacto.",
      "La calculadora trabaja con numeradores y denominadores enteros exactos, así que el resultado no tiene errores de redondeo. Se simplifica a su fracción irreducible y también se muestra como número mixto y en forma decimal.",
    ],
    howToUse: [
      "Introduce el primer número, por ejemplo 1/2 o 2 1/4.",
      "Elige sumar, restar, multiplicar o dividir.",
      "Introduce el segundo número.",
      "Consulta la fracción simplificada, el número mixto y el decimal.",
    ],
    formulas: [
      { title: "Suma y resta", expression: "a/b ± c/d = (a × d ± c × b) ÷ (b × d)", explanation: "Escribe ambas fracciones con un denominador común y después suma o resta los numeradores." },
      { title: "Multiplicación", expression: "a/b × c/d = (a × c) ÷ (b × d)", explanation: "Multiplica los numeradores entre sí y los denominadores entre sí." },
      { title: "División", expression: "a/b ÷ c/d = (a × d) ÷ (b × c)", explanation: "Multiplica por la inversa de la segunda fracción. La división entre cero no está definida." },
      { title: "Fracción irreducible", expression: "n/d = (n ÷ g) ÷ (d ÷ g), g = mcd(n, d)", explanation: "Divide el numerador y el denominador entre su máximo común divisor." },
    ],
    examples: [
      { title: "1/2 + 1/3", steps: ["1/2 + 1/3 = (1 × 3 + 1 × 2) ÷ (2 × 3)", "= 5/6 ≈ 0,8333"] },
      { title: "2 1/4 × 4/3", steps: ["2 1/4 = 9/4", "9/4 × 4/3 = 36/12 = 3"] },
    ],
    assumptions: [
      "Los números enteros, las fracciones, los números mixtos y los decimales finitos se convierten en fracciones exactas: 0,75 pasa a ser 3/4.",
      "Los numeradores y denominadores están limitados a 1.000.000.000.000 para que los resultados sean legibles.",
      "Un número mixto negativo como −1 1/2 significa −(1 + 1/2).",
    ],
    faqs: [
      { question: "¿Cómo introduzco un número mixto?", answer: "Escribe el número entero, un espacio y la fracción, por ejemplo 2 1/4. Para un valor negativo, pon primero el signo menos: -2 1/4." },
      { question: "¿Cómo simplifico una fracción?", answer: "Introdúcela como primer número, elige multiplicar e introduce 1 como segundo número. El resultado se muestra como fracción irreducible." },
      { question: "¿Por qué el decimal es distinto de la fracción?", answer: "Algunas fracciones, como 1/3, tienen decimales que nunca terminan. La fracción es exacta; el decimal se redondea al mostrarlo." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    a: "Primer número",
    aHelp: "Una fracción (3/4), un número mixto (1 1/2), un número entero o un decimal.",
    b: "Segundo número",
    bHelp: "Los mismos formatos que el primer número.",
    operation: "Operación",
    operations: { add: "Sumar (+)", subtract: "Restar (−)", multiply: "Multiplicar (×)", divide: "Dividir (÷)" },
    errors: {
      invalid: "Introduce una fracción como 3/4, un número mixto como 1 1/2, un número entero o un decimal.",
      zeroDenominator: "El denominador no puede ser 0.",
      tooLarge: "Usa numeradores y denominadores que no superen {max}.",
      divideByZero: "No se puede dividir entre cero.",
    },
    result: "Resultado simplificado",
    caption: "{a} {op} {b} = {result}",
    mixed: "Como número mixto",
    decimal: "En forma decimal",
    note: "Las fracciones se simplifican dividiendo entre el máximo común divisor. El decimal solo se redondea al mostrarlo.",
  },
};

export default es;
