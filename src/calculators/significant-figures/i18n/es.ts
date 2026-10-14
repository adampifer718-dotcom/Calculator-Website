import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SigFigText } from "../text/en";

const es: CalculatorTranslation<SigFigText> = {
  content: {
    title: "Calculadora de cifras significativas",
    shortTitle: "Cifras significativas",
    summary: "Cuenta las cifras significativas de un número o redondea un número a las cifras significativas que elijas.",
    metaTitle: "Calculadora de cifras significativas – Contar y redondear",
    metaDescription:
      "Cuenta las cifras significativas de cualquier número, incluidos decimales y notación e, o redondea a un número de cifras significativas con su notación científica.",
    keywords: ["cifras significativas", "contar cifras significativas", "redondear cifras significativas", "dígitos significativos", "notación científica", "química"],
    intro: [
      "Las cifras significativas indican con qué precisión se conoce un número. Esta calculadora las cuenta con las reglas habituales o redondea un número a la precisión que elijas.",
      "Escribe el número tal como aparece, porque los ceros finales y el separador decimal cambian el recuento.",
    ],
    howToUse: [
      "Elige si quieres contar o redondear.",
      "Escribe el número tal como aparece, incluidos los ceros finales.",
      "Para redondear, introduce cuántas cifras significativas quieres conservar.",
    ],
    formulas: [
      {
        title: "Reglas de recuento",
        expression:
          "1. Las cifras distintas de cero son significativas.\n2. Los ceros entre cifras distintas de cero son significativos.\n3. Los ceros a la izquierda nunca son significativos.\n4. Los ceros finales solo son significativos si hay separador decimal.",
        explanation: "Son las reglas que se enseñan en la mayoría de los cursos de química y física.",
      },
      {
        title: "Redondeo",
        expression: "Conserva n cifras a partir de la primera cifra distinta de cero y redondea la última.",
        explanation: "La notación científica elimina cualquier ambigüedad sobre los ceros finales.",
      },
    ],
    examples: [
      {
        title: "¿Cuántas cifras significativas tiene 0,004050?",
        steps: ["Los ceros iniciales 0,00 no cuentan", "Cuentan el 4, el 0 y el 5 0 final: 4 cifras significativas"],
      },
      {
        title: "Redondea 123.456 a 3 cifras significativas",
        steps: ["Se conservan 1, 2 y 3; la cifra siguiente es 4, así que se redondea hacia abajo", "123.000, o 1,23 × 10⁵"],
      },
    ],
    assumptions: [
      "Los ceros finales de un número entero sin separador decimal se consideran no significativos.",
      "Se admiten números de hasta 15 cifras significativas.",
    ],
    faqs: [
      {
        question: "¿Son significativos los ceros finales?",
        answer:
          "Solo cuando el número tiene separador decimal. 2,50 tiene 3 cifras significativas, pero 250 tiene 2, salvo que se escriba con separador decimal final (250. en la calculadora) o como 2,50 × 10².",
      },
      {
        question: "¿Son significativos los ceros a la izquierda?",
        answer: "No. En 0,0071 los ceros solo sitúan la coma decimal, así que tiene 2 cifras significativas.",
      },
      { question: "¿Por qué usar notación científica?", answer: "Muestra exactamente qué cifras son significativas; así, 1,20 × 10³ tiene claramente 3." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    task: "Tarea",
    tasks: { count: "Contar cifras significativas", round: "Redondear a cifras significativas" },
    number: "Número",
    numberHelp: "Escríbelo tal como aparece, incluidos los ceros finales. Usa el punto como separador decimal. Se admite notación e, como 6.02e23.",
    invalid: "Introduce un número como 1200, 0.0045 o 6.02e23.",
    zero: "Introduce un número distinto de cero.",
    tooLarge: "Introduce un número más pequeño.",
    digits: "Cifras significativas que conservar",
    rounded: "Redondeado a {digits} cifras significativas",
    scientific: "Notación científica",
    originalCount: "Cifras significativas del original",
    roundNote: "Los ceros finales de un número entero como 123000 son ambiguos; la notación científica muestra exactamente qué cifras son significativas.",
    count: "Cifras significativas",
    countCaption: "{number} tiene {count} cifras significativas.",
    countCaptionOne: "{number} tiene 1 cifra significativa.",
    inScientific: "En notación científica",
    countNote: "Los ceros finales de un número entero sin punto decimal (como 1200) se consideran no significativos. Escribe 1200. para que sean significativos.",
  },
};

export default es;
