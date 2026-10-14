import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ScientificNotationText } from "../text/en";

const es: CalculatorTranslation<ScientificNotationText> = {
  content: {
    title: "Calculadora de notación científica",
    shortTitle: "Notación científica",
    summary: "Convierte números a notación científica, de ingeniería y exponencial (e), o vuelve a expresarlos en forma decimal.",
    metaTitle: "Calculadora de notación científica – Convierte números",
    metaDescription:
      "Convierte cualquier número a notación científica, notación e y notación de ingeniería, o pasa la notación e de nuevo a un número decimal normal.",
    keywords: ["notación científica", "convertir a notación científica", "notación exponencial", "notación de ingeniería", "potencias de diez", "notación e"],
    intro: [
      "La notación científica expresa un número como un valor entre 1 y 10 multiplicado por una potencia de diez, por ejemplo 1,234 × 10⁵. Así los números muy grandes y muy pequeños se leen con facilidad.",
      "Introduce un número decimal o en notación e y la calculadora mostrará todas las formas habituales.",
    ],
    howToUse: [
      "Escribe un número como 123400 o 0.00056, o en notación e como 6.02e23 (con punto decimal).",
      "Consulta las formas científica, en notación e, de ingeniería y decimal.",
    ],
    formulas: [
      {
        title: "Notación científica",
        expression: "x = a × 10ⁿ, donde 1 ≤ |a| < 10",
        explanation: "Desplaza la coma decimal hasta que quede una sola cifra distinta de cero a su izquierda; n cuenta los desplazamientos.",
      },
      {
        title: "Notación de ingeniería",
        expression: "x = a × 10ⁿ, donde n es múltiplo de 3",
        explanation: "Coincide con los prefijos de unidades como kilo (10³) y micro (10⁻⁶).",
      },
    ],
    examples: [
      {
        title: "123.400",
        steps: ["Desplaza la coma decimal 5 posiciones a la izquierda", "1,234 × 10⁵"],
      },
      {
        title: "0,00056",
        steps: ["Desplaza la coma decimal 4 posiciones a la derecha", "5,6 × 10⁻⁴"],
      },
    ],
    assumptions: [
      "Los números se convierten con la doble precisión de JavaScript, de unas 15–17 cifras significativas.",
      "No se muestran formas decimales de más de 21 cifras.",
    ],
    faqs: [
      {
        question: "¿Cómo se escribe un número en notación científica?",
        answer:
          "Desplaza la coma decimal hasta que quede una sola cifra distinta de cero a su izquierda y multiplica por 10 elevado al número de posiciones desplazadas. 4500 se convierte en 4,5 × 10³.",
      },
      {
        question: "¿Qué significa 6.02e23?",
        answer: "Es la notación e de 6,02 × 10²³. La «e» significa «por diez elevado a».",
      },
      {
        question: "¿Qué es la notación de ingeniería?",
        answer: "Es como la notación científica, pero el exponente es siempre múltiplo de 3, en correspondencia con prefijos como kilo, mega y mili.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    number: "Número",
    numberHelp: "Un decimal como 0.00056 o un número en notación e como 6.02e23. Usa el punto como separador decimal.",
    invalid: "Introduce un número como 123400, 0.00056 o 6.02e23.",
    tooLarge: "Introduce un número inferior a 1,8 × 10³⁰⁸.",
    scientific: "Notación científica",
    eNotation: "Notación e",
    engineering: "Notación de ingeniería",
    decimal: "Forma decimal",
    tooLong: "Demasiado largo para mostrarlo",
  },
};

export default es;
