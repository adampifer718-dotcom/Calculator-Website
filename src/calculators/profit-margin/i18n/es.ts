import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProfitMarginText } from "../text/en";

const es: CalculatorTranslation<ProfitMarginText> = {
  content: {
    title: "Calculadora de margen de beneficio",
    shortTitle: "Margen de beneficio",
    summary: "Calcula el beneficio, el margen de beneficio y el margen sobre el coste a partir del coste y el precio de venta.",
    metaTitle: "Calculadora de margen de beneficio – Margen y markup",
    metaDescription:
      "Calcula el beneficio bruto, el margen de beneficio y el porcentaje de margen sobre el coste (markup) a partir del coste y el precio de venta, y entiende en qué se diferencian.",
    keywords: ["margen de beneficio", "calcular margen", "markup", "margen bruto", "margen sobre coste", "precio de venta"],
    intro: [
      "El margen y el markup describen el beneficio, pero respecto a bases distintas. El margen compara el beneficio con el precio de venta; el markup, con el coste.",
      "Introduce lo que te cuesta un artículo y el precio al que lo vendes.",
    ],
    howToUse: ["Introduce el coste.", "Introduce el precio de venta.", "Consulta el beneficio, el margen y el markup."],
    formulas: [
      { title: "Beneficio", expression: "beneficio = precio − coste", explanation: "Beneficio bruto por artículo o de un pedido completo." },
      { title: "Margen", expression: "margen = beneficio ÷ precio × 100", explanation: "Parte del precio que es beneficio." },
      { title: "Markup", expression: "markup = beneficio ÷ coste × 100", explanation: "Cuánto se ha añadido sobre el coste." },
    ],
    examples: [
      { title: "Coste de 60 US$, precio de 100 US$", steps: ["Beneficio = 40 US$", "Margen = 40 ÷ 100 = 40 %; markup = 40 ÷ 60 ≈ 66,67 %"] },
      { title: "Coste de 25 US$, precio de 40 US$", steps: ["Beneficio = 15 US$", "Margen = 15 ÷ 40 = 37,5 %"] },
    ],
    assumptions: [
      "Es el margen bruto: solo se incluye el coste que introduces, no los gastos generales ni los impuestos.",
      "Elegir una moneda solo cambia el formato.",
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre margen y markup?",
        answer: "El margen divide el beneficio entre el precio; el markup lo divide entre el coste. Un markup del 50 % equivale a un margen del 33,3 %.",
      },
      {
        question: "¿Puede el margen superar el 100 %?",
        answer: "No. El margen es una parte del precio de venta, así que como máximo es del 100 % (cuando el coste es cero).",
      },
      {
        question: "¿Cómo fijo un precio para un margen objetivo?",
        answer: "Precio = coste ÷ (1 − margen objetivo). Para un margen del 40 % con un coste de 60 US$, precio = 60 ÷ 0,6 = 100 US$.",
      },
    ],
    sourcesUsedFor: ["Definiciones de beneficio bruto y margen."],
  },
  text: {
    cost: "Coste",
    price: "Precio de venta (ingresos)",
    margin: "Margen de beneficio",
    caption: "Beneficio como porcentaje del precio de venta.",
    profit: "Beneficio",
    loss: "Pérdida",
    markup: "Markup (margen sobre coste)",
    undefinedMarkup: "No definido con coste cero",
  },
};

export default es;
