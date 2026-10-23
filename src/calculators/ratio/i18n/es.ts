import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RatioText } from "../text/en";

const es: CalculatorTranslation<RatioText> = {
  content: {
    title: "Calculadora de razones y proporciones",
    shortTitle: "Razones",
    summary: "Simplifica una razón de dos o tres términos, resuelve una proporción para hallar un término desconocido o reparte una cantidad según una razón dada.",
    metaTitle: "Calculadora de razones y proporciones – Simplifica y reparte",
    metaDescription:
      "Simplifica razones con términos enteros o decimales, halla el término que falta en A : B = C : x o reparte una cantidad en dos o tres partes según una razón.",
    keywords: ["calculadora de razones", "simplificar una razón", "razón irreducible", "calculadora de proporciones", "término desconocido", "regla de tres", "reparto proporcional", "razón 1 a n"],
    intro: [
      "Una razón compara cantidades: 3 : 4 significa tres partes de una cosa por cada cuatro partes de otra. Las razones aparecen en recetas, en la mezcla de hormigón o pintura, en las escalas de los mapas, en el formato de las pantallas y en el reparto de gastos.",
      "Esta calculadora hace las tres tareas más habituales. Reduce una razón de dos o tres términos a los números enteros más pequeños posibles, incluso cuando los términos son decimales; resuelve una proporción A : B = C : x para hallar el término que falta; y reparte una cantidad en partes que siguen una razón.",
    ],
    howToUse: [
      "Elige la tarea.",
      "Para simplificar o repartir, introduce dos o tres términos positivos. Deja vacío el tercer término si la razón tiene dos partes.",
      "Para hallar un término desconocido, introduce A, B y C de A : B = C : x.",
      "Para repartir, introduce también la cantidad que se va a repartir y consulta en la tabla lo que corresponde a cada parte.",
    ],
    formulas: [
      {
        title: "Simplificación",
        expression: "A : B : C = (A ÷ g) : (B ÷ g) : (C ÷ g)",
        explanation:
          "g es el máximo común divisor de los términos. Los términos decimales se multiplican primero por la misma potencia de 10 para convertirlos en enteros: 1,5 : 2,25 pasa a ser 150 : 225.",
      },
      {
        title: "Término desconocido",
        expression: "A : B = C : x  ⇒  x = B × C ÷ A",
        explanation: "Dos razones son iguales cuando sus productos cruzados son iguales, A × x = B × C. A no puede ser 0.",
      },
      {
        title: "Reparto de una cantidad",
        expression: "parte i = cantidad × término i ÷ (suma de los términos)",
        explanation: "A cada parte le corresponde la fracción del total que su término representa dentro de la suma de todos los términos.",
      },
      {
        title: "Forma 1 : n",
        expression: "A : B = 1 : (B ÷ A)",
        explanation: "Al dividir todos los términos entre el primero se obtiene una razón unitaria, útil para escalas e instrucciones de mezcla.",
      },
    ],
    examples: [
      {
        title: "Simplificar 1,5 : 2,25 : 3",
        steps: ["Multiplica cada término por 100: 150 : 225 : 300", "El máximo común divisor es 75", "150 ÷ 75 : 225 ÷ 75 : 300 ÷ 75 = 2 : 3 : 4"],
      },
      {
        title: "Adaptar una receta: 4 huevos llevan 7 dl de leche; ¿cuánta leche para 10 huevos?",
        steps: ["4 : 7 = 10 : x", "x = 7 × 10 ÷ 4", "x = 17,5 dl de leche"],
      },
      {
        title: "Repartir 700 en la razón 2 : 3 : 5",
        steps: [
          "Total de partes = 2 + 3 + 5 = 10, así que una parte es 700 ÷ 10 = 70",
          "Partes: 2 × 70 = 140, 3 × 70 = 210, 5 × 70 = 350",
          "Comprobación: 140 + 210 + 350 = 700",
        ],
      },
    ],
    assumptions: [
      "Los términos de la razón para simplificar y repartir deben ser positivos. Los decimales se tratan de forma exacta a partir de las cifras que escribes, hasta 40 cifras por término.",
      "El modo de término desconocido acepta cualquier número, incluidos los negativos, siempre que A no sea 0.",
      "Las partes se muestran con hasta 4 decimales y no se redondean a unidades enteras, así que con dinero o personas quizá tengas que ajustar la última parte a mano.",
    ],
    faqs: [
      {
        question: "¿Cómo simplifico una razón con decimales?",
        answer: "Multiplica todos los términos por la misma potencia de 10 hasta que sean enteros y luego divídelos entre su máximo común divisor. 0,6 : 0,8 pasa a 6 : 8, que se simplifica a 3 : 4.",
      },
      {
        question: "¿Qué diferencia hay entre una razón y una fracción?",
        answer: "Una fracción compara una parte con el todo, mientras que una razón puede comparar partes entre sí. En una clase de 12 chicas y 18 chicos, la razón entre chicas y chicos es 2 : 3, pero la fracción de chicas es 12/30 = 2/5.",
      },
      {
        question: "¿Cómo divido una cuenta según una razón?",
        answer: "Elige «Repartir una cantidad según una razón», introduce el importe de la cuenta y el término de la razón de cada persona. Para 90 repartido 1 : 2, el total son 3 partes de 30, así que las partes son 30 y 60.",
      },
    ],
    sourcesUsedFor: ["Definición de proporción y su resolución para hallar un término desconocido."],
  },
  text: {
    mode: "Tarea",
    modes: {
      simplify: "Simplificar una razón",
      missing: "Hallar un término desconocido (A : B = C : x)",
      divide: "Repartir una cantidad según una razón",
    },
    termA: "Primer término (A)",
    termB: "Segundo término (B)",
    termC: "Tercer término (opcional)",
    termHelp: "Un número positivo. Se admiten decimales como 1,5.",
    termInvalid: "Introduce un número positivo, como 4 o 1,5.",
    termTooLong: "Introduce como máximo 40 cifras.",
    propA: "A",
    propB: "B",
    propC: "C",
    propHelp: "Resuelve A : B = C : x para hallar x.",
    propAZero: "A no puede ser 0, porque x = B × C ÷ A.",
    amount: "Cantidad que repartir",
    amountHelp: "Cualquier cantidad: dinero, gramos, litros, personas o minutos.",
    simplified: "Razón simplificada",
    simplifiedCaption: "{original} reducida a los menores términos enteros.",
    decimalValue: "Valor decimal (A ÷ B)",
    oneToN: "Forma 1 : n",
    totalParts: "Total de partes",
    missingTerm: "Término desconocido x",
    missingCaption: "{a} : {b} = {c} : x",
    proportion: "Proporción completa",
    ratioValue: "Valor de la razón (B ÷ A)",
    shares: "Partes",
    sharesCaption: "{amount} repartido según la razón {ratio}.",
    sharesTable: "Cómo se reparte la cantidad",
    colPart: "Parte",
    colTerm: "Término de la razón",
    colShare: "Importe",
    colPercent: "Porcentaje del total",
    partN: "Parte {n}",
    decimalNote:
      "Los términos decimales se multiplican primero por la misma potencia de 10 para convertirlos en enteros y después se dividen entre su máximo común divisor.",
  },
};

export default es;
