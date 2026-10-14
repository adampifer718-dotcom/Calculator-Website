import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PythagoreanText } from "../text/en";

const es: CalculatorTranslation<PythagoreanText> = {
  content: {
    title: "Calculadora del teorema de Pitágoras",
    shortTitle: "Teorema de Pitágoras",
    summary: "Halla el lado que falta de un triángulo rectángulo con a² + b² = c².",
    metaTitle: "Calculadora del teorema de Pitágoras – Halla el lado que falta",
    metaDescription:
      "Calcula la hipotenusa o el cateto que falta de un triángulo rectángulo con el teorema de Pitágoras a² + b² = c², además del área y el perímetro del triángulo.",
    keywords: ["teorema de Pitágoras", "calcular hipotenusa", "calcular cateto", "triángulo rectángulo", "a2 + b2 = c2", "Pitágoras"],
    intro: [
      "En un triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los otros dos lados: a² + b² = c².",
      "Introduce dos lados para hallar el tercero. La calculadora también muestra el área y el perímetro del triángulo.",
    ],
    howToUse: [
      "Elige si quieres hallar la hipotenusa o un cateto.",
      "Introduce los dos lados conocidos en la misma unidad.",
      "Consulta el lado que falta, el área y el perímetro.",
    ],
    formulas: [
      { title: "Hipotenusa", expression: "c = √(a² + b²)", explanation: "La hipotenusa es el lado más largo, opuesto al ángulo recto." },
      { title: "Cateto desconocido", expression: "a = √(c² − b²)", explanation: "La hipotenusa debe ser más larga que el cateto conocido." },
    ],
    examples: [
      {
        title: "Catetos de 3 y 4",
        steps: ["c = √(3² + 4²) = √25", "= 5"],
      },
      {
        title: "Hipotenusa de 13 y cateto de 5",
        steps: ["a = √(13² − 5²) = √144", "= 12"],
      },
    ],
    assumptions: [
      "El triángulo tiene un ángulo recto.",
      "Todos los lados usan la misma unidad; los resultados se muestran con 6 decimales.",
    ],
    faqs: [
      {
        question: "¿El teorema de Pitágoras sirve para todos los triángulos?",
        answer: "No, solo para triángulos rectángulos. Para los demás triángulos se necesita el teorema del coseno.",
      },
      {
        question: "¿Qué es una terna pitagórica?",
        answer: "Tres números enteros que cumplen a² + b² = c², como 3, 4, 5 o 5, 12, 13.",
      },
      { question: "¿Cuál es la hipotenusa?", answer: "El lado más largo, opuesto al ángulo recto." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    solve: "Calcular",
    modes: { hypotenuse: "La hipotenusa (c) a partir de los dos catetos", leg: "Un cateto a partir de la hipotenusa y el otro cateto" },
    a: "Cateto a",
    b: "Cateto b",
    c: "Hipotenusa c",
    leg: "Cateto conocido",
    legTooLong: "Un cateto debe ser más corto que la hipotenusa.",
    missingLeg: "Cateto desconocido",
    hypotenuse: "Hipotenusa (c)",
    area: "Área del triángulo",
    perimeter: "Perímetro",
  },
};

export default es;
