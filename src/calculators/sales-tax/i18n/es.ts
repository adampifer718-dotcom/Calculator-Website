import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SalesTaxText } from "../text/en";

const es: CalculatorTranslation<SalesTaxText> = {
  content: {
    title: "Calculadora del impuesto sobre las ventas",
    shortTitle: "Impuesto sobre las ventas",
    summary: "Suma el impuesto sobre las ventas a un precio o calcula el precio sin impuesto a partir de un total que lo incluye.",
    metaTitle: "Calculadora del impuesto sobre las ventas – Añadir o quitar impuestos",
    metaDescription:
      "Calcula el impuesto sobre las ventas y el precio total, o quita el impuesto de un total con impuestos incluidos para obtener el precio original. Sirve para cualquier tipo y moneda.",
    keywords: ["calcular iva", "quitar iva", "impuesto sobre las ventas", "precio con impuestos", "precio sin iva", "sales tax"],
    intro: [
      "Introduce un precio y un tipo impositivo para ver el impuesto y el total que pagarás. Cambia a quitar el impuesto para obtener el precio antes de impuestos a partir del total de un tique.",
      "Los mismos cálculos sirven para el IVA y el GST, que también son porcentajes que se suman al precio.",
    ],
    howToUse: [
      "Elige si quieres añadir el impuesto a un precio o quitarlo de un total.",
      "Introduce el importe y el tipo impositivo en porcentaje.",
      "Consulta el impuesto, el total y el precio antes de impuestos.",
    ],
    formulas: [
      {
        title: "Añadir el impuesto",
        expression: "Impuesto = precio × tipo ÷ 100\nTotal = precio + impuesto",
        explanation: "Multiplica el precio por el tipo expresado en decimal.",
      },
      {
        title: "Quitar el impuesto",
        expression: "Precio sin impuesto = total ÷ (1 + tipo ÷ 100)",
        explanation: "Dividir entre 1 más el tipo deshace el impuesto. Restar el porcentaje al total no da el resultado correcto.",
      },
    ],
    examples: [
      { title: "100 US$ con un impuesto del 8,25 %", steps: ["Impuesto = 100 US$ × 0,0825 = 8,25 US$", "Total = 100 US$ + 8,25 US$ = 108,25 US$"] },
      { title: "Un total de 54 US$ con un 8 % de impuesto incluido", steps: ["Precio = 54 US$ ÷ 1,08 = 50 US$", "Impuesto = 54 US$ − 50 US$ = 4 US$"] },
    ],
    assumptions: [
      "El tipo es un único porcentaje aplicado a todo el importe. En algunos lugares los productos tributan de forma distinta o se añaden impuestos locales.",
      "Los resultados se redondean al céntimo solo al mostrarlos.",
      "Elegir una moneda solo cambia el formato.",
    ],
    faqs: [
      {
        question: "¿Cómo se calcula el impuesto sobre las ventas?",
        answer: "Multiplica el precio por el tipo impositivo en decimal. Con un tipo del 7 %, 50 US$ × 0,07 = 3,50 US$ de impuesto.",
      },
      {
        question: "¿Cómo quito el impuesto de un total?",
        answer: "Divide el total entre 1 más el tipo. Un total de 107 US$ con un 7 % de impuesto es 107 US$ ÷ 1,07 = 100 US$ antes de impuestos.",
      },
      { question: "¿El IVA se calcula igual?", answer: "Sí. El IVA y el GST son porcentajes del precio, así que se aplican las mismas fórmulas." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    mode: "Cálculo",
    modes: { add: "Añadir el impuesto a un precio", remove: "Quitar el impuesto de un total" },
    amount: "Importe",
    amountHelp: "Precio antes de impuestos o, si quitas el impuesto, total con impuestos incluidos.",
    rate: "Tipo impositivo",
    beforeTax: "Precio antes de impuestos",
    beforeTaxCaption: "El total dividido entre (1 + tipo impositivo).",
    taxIncluded: "Impuesto incluido",
    total: "Total con impuestos",
    totalCaption: "El precio más el impuesto.",
    tax: "Impuesto",
  },
};

export default es;
