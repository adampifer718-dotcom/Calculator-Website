import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProbabilityEventsText } from "../text/en";

const es: CalculatorTranslation<ProbabilityEventsText> = {
  content: {
    title: "Calculadora de probabilidad (dos sucesos)",
    shortTitle: "Probabilidad",
    summary:
      "Combina las probabilidades de dos sucesos independientes o mutuamente excluyentes: ambos, alguno, exactamente uno o ninguno.",
    metaTitle: "Calculadora de probabilidad – Dos sucesos: y, o, ninguno",
    metaDescription:
      "Calcula P(A y B), P(A o B), exactamente uno y ninguno para dos sucesos independientes o mutuamente excluyentes, además del complementario de cada suceso.",
    keywords: [
      "probabilidad",
      "calcular probabilidad",
      "probabilidad de dos sucesos",
      "sucesos independientes",
      "sucesos mutuamente excluyentes",
      "P(A y B)",
      "P(A o B)",
      "regla del complementario",
      "regla de la suma",
      "regla del producto",
    ],
    intro: [
      "Muchas preguntas cotidianas combinan dos probabilidades. ¿Qué probabilidad hay de que dos máquinas fallen el mismo día, o de que un cliente pague con tarjeta o en efectivo? Esta calculadora responde a ese tipo de preguntas para dos sucesos, A y B.",
      "Introduce la probabilidad de cada suceso e indica cómo se relacionan. Los sucesos independientes no se influyen entre sí, como dos lanzamientos de moneda distintos. Los sucesos mutuamente excluyentes no pueden ocurrir a la vez, como que un mismo dado muestre un 2 y un 5. La calculadora da entonces la probabilidad de ambos, de al menos uno, de exactamente uno y de ninguno.",
    ],
    howToUse: [
      "Introduce P(A) y P(B) como porcentajes entre el 0 % y el 100 %.",
      "Elige Independientes si saber que un suceso ha ocurrido no cambia la probabilidad del otro.",
      "Elige Mutuamente excluyentes si los dos sucesos nunca pueden ocurrir juntos. En ese caso sus probabilidades no pueden sumar más del 100 %.",
      "Consulta P(A y B) como resultado principal y las demás combinaciones debajo.",
    ],
    formulas: [
      {
        title: "Ambos (independientes)",
        expression: "P(A y B) = P(A) × P(B)",
        explanation: "La regla del producto para sucesos independientes.",
      },
      {
        title: "Ambos (mutuamente excluyentes)",
        expression: "P(A y B) = 0",
        explanation: "Los sucesos no comparten ningún resultado.",
      },
      {
        title: "Al menos uno",
        expression: "P(A o B) = P(A) + P(B) − P(A y B)",
        explanation: "La regla de la suma. Se resta la intersección para no contarla dos veces.",
      },
      {
        title: "Exactamente uno",
        expression: "P(exactamente uno) = P(A) + P(B) − 2 × P(A y B)",
        explanation: "Al menos uno, menos el caso en que ocurren ambos.",
      },
      {
        title: "Ninguno y complementarios",
        expression: "P(ninguno) = 1 − P(A o B)\nP(no A) = 1 − P(A)",
        explanation: "La regla del complementario: un suceso o bien ocurre o bien no ocurre.",
      },
    ],
    examples: [
      {
        title: "Dos máquinas independientes que fallan el 8 % y el 5 % de los días",
        steps: [
          "P(fallan ambas) = 0,08 × 0,05 = 0,004 = 0,4 %",
          "P(falla al menos una) = 0,08 + 0,05 − 0,004 = 0,126 = 12,6 %",
          "P(no falla ninguna) = 1 − 0,126 = 87,4 %",
        ],
      },
      {
        title: "Un cliente paga con tarjeta (62 %) o en efectivo (18 %), nunca de las dos formas",
        steps: [
          "Los sucesos son mutuamente excluyentes, así que P(ambos) = 0",
          "P(tarjeta o efectivo) = 62 % + 18 % = 80 %",
          "P(ninguno, p. ej., un vale) = 100 % − 80 % = 20 %",
        ],
      },
      {
        title: "Encestar dos tiros libres cuando cada uno entra el 75 % de las veces",
        steps: [
          "P(entran ambos) = 0,75 × 0,75 = 0,5625 = 56,25 %",
          "P(exactamente uno) = 0,75 + 0,75 − 2 × 0,5625 = 37,5 %",
          "P(ninguno) = 0,25 × 0,25 = 6,25 %",
        ],
      },
    ],
    assumptions: [
      "Las probabilidades se introducen como porcentajes y se tratan como valores exactos.",
      "La calculadora solo cubre los dos casos especiales de sucesos independientes y mutuamente excluyentes. Para sucesos que no son ni lo uno ni lo otro, se necesita P(A y B) o una probabilidad condicionada, que esta herramienta no pide.",
      "La independencia es una propiedad de la situación, no de los números. Trata los sucesos como dependientes salvo que tengas buenos motivos para creer que son independientes.",
      "Los resultados se muestran con cuatro decimales de porcentaje.",
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre independientes y mutuamente excluyentes?",
        answer:
          "Los sucesos independientes no se influyen entre sí, así que pueden ocurrir ambos. Los sucesos mutuamente excluyentes no pueden ocurrir juntos: si ocurre uno, el otro queda descartado. Dos sucesos con probabilidades distintas de cero nunca pueden ser a la vez independientes y mutuamente excluyentes.",
      },
      {
        question: "¿Por qué las probabilidades de sucesos mutuamente excluyentes no pueden sumar más del 100 %?",
        answer:
          "Si A y B nunca se solapan, P(A o B) es igual a P(A) + P(B). Una probabilidad no puede superar el 100 %, y por tanto esa suma tampoco. Un total superior al 100 % significa que los sucesos se solapan y no son mutuamente excluyentes.",
      },
      {
        question: "¿Cómo calculo la probabilidad de que algo ocurra al menos una vez en varios intentos?",
        answer:
          "Para intentos independientes, calcula la probabilidad de que no ocurra nunca y réstala de 1. Con dos intentos del 30 % cada uno, P(ninguno) = 0,7 × 0,7 = 0,49, así que P(al menos una vez) = 51 %. Esta calculadora lo muestra como P(A o B).",
      },
    ],
    sourcesUsedFor: [
      "Definiciones de sucesos independientes y mutuamente excluyentes, P(A y B) = P(A)·P(B) para sucesos independientes y P(A y B) = 0 para los mutuamente excluyentes.",
    ],
  },
  text: {
    pA: "Probabilidad de A, P(A)",
    pB: "Probabilidad de B, P(B)",
    pHelp: "Como porcentaje del 0 % al 100 %.",
    relation: "¿Cómo se relacionan A y B?",
    relationHelp:
      "Independientes: que ocurra uno no cambia la probabilidad del otro. Mutuamente excluyentes: no pueden ocurrir ambos.",
    relationOptions: { independent: "Independientes", exclusive: "Mutuamente excluyentes" },
    exclusiveTooLarge: "Dos sucesos mutuamente excluyentes no pueden tener P(A) + P(B) por encima del 100 %. Aquí la suma es {sum}.",
    and: "P(A y B): ocurren ambos",
    or: "P(A o B): ocurre al menos uno",
    exactlyOne: "P(exactamente uno de A o B)",
    neither: "P(ni A ni B)",
    notA: "P(no A)",
    notB: "P(no B)",
    independentCaption: "Para sucesos independientes, P(A y B) = P(A) × P(B).",
    exclusiveCaption: "Los sucesos mutuamente excluyentes nunca ocurren juntos, así que P(A y B) = 0.",
    certainNote: "Con P(A) + P(B) = 100 %, es seguro que ocurrirá uno de los dos sucesos mutuamente excluyentes.",
  },
};

export default es;
