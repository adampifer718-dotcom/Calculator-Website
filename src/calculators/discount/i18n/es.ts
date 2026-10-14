import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DiscountText } from "../text/en";

const es: CalculatorTranslation<DiscountText> = {
  content: {
    title: "Calculadora de descuentos",
    shortTitle: "Descuentos",
    summary: "Calcula el precio rebajado y cuánto ahorras a partir del precio original y un porcentaje de descuento.",
    metaTitle: "Calculadora de descuentos – Precio rebajado y ahorro",
    metaDescription:
      "Calcula el precio final tras aplicar un descuento porcentual y cuánto ahorras. Introduce el precio original y el porcentaje de descuento para verlo al instante.",
    keywords: ["calcular descuento", "precio con descuento", "porcentaje de descuento", "rebajas", "cupón de descuento", "cuánto ahorro"],
    intro: [
      "Introduce el precio original y el porcentaje de descuento para ver el precio rebajado y lo que ahorras.",
      "Resulta útil en rebajas, con cupones y para comparar ofertas.",
    ],
    howToUse: [
      "Introduce el precio original.",
      "Introduce el porcentaje de descuento.",
      "Consulta el precio rebajado y el importe ahorrado.",
    ],
    formulas: [
      { title: "Ahorro", expression: "Ahorro = precio × % de descuento ÷ 100", explanation: "El importe que se descuenta." },
      {
        title: "Precio rebajado",
        expression: "Precio rebajado = precio − ahorro = precio × (1 − descuento ÷ 100)",
        explanation: "Lo que pagas antes de cualquier impuesto sobre las ventas.",
      },
    ],
    examples: [
      {
        title: "120 US$ con un 25 % de descuento",
        steps: ["Ahorro = 120 US$ × 0,25 = 30 US$", "Precio rebajado = 120 US$ − 30 US$ = 90 US$"],
      },
      {
        title: "59,99 US$ con un 15 % de descuento",
        steps: ["Ahorro = 59,99 US$ × 0,15 = 9,00 US$", "Precio rebajado ≈ 50,99 US$"],
      },
    ],
    assumptions: [
      "No se incluye el impuesto sobre las ventas; usa la calculadora de impuesto sobre las ventas para añadirlo.",
      "Dos descuentos seguidos se multiplican, no se suman: un 20 % y luego un 10 % equivalen a un 28 % de descuento, no a un 30 %.",
    ],
    faqs: [
      {
        question: "¿Cómo se calcula un descuento porcentual?",
        answer: "Multiplica el precio por el descuento expresado en decimal y réstalo. Un 30 % de descuento sobre 50 US$ es 50 US$ − 15 US$ = 35 US$.",
      },
      {
        question: "¿Dos descuentos equivalen a sumarlos?",
        answer: "No. Un 20 % de descuento y luego un 10 % dejan 0,8 × 0,9 = 72 % del precio, es decir, un descuento total del 28 %.",
      },
      {
        question: "¿Cómo calculo el precio original a partir del precio rebajado?",
        answer: "Divide el precio rebajado entre (1 − descuento ÷ 100). 60 US$ tras un 25 % de descuento eran 60 US$ ÷ 0,75 = 80 US$.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    price: "Precio original",
    percent: "Descuento",
    sale: "Precio rebajado",
    save: "Ahorras",
    share: "Porcentaje del precio original",
  },
};

export default es;
