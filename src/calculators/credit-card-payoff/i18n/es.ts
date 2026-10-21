import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CreditCardPayoffText } from "../text/en";

const years = { zero: "{n} años", one: "{n} año", two: "{n} años", few: "{n} años", many: "{n} años", other: "{n} años" };
const months = { zero: "{n} meses", one: "{n} mes", two: "{n} meses", few: "{n} meses", many: "{n} meses", other: "{n} meses" };

const es: CalculatorTranslation<CreditCardPayoffText> = {
  content: {
    title: "Calculadora para saldar la tarjeta de crédito",
    shortTitle: "Saldar la tarjeta de crédito",
    summary: "Descubre cuántos meses tarda un pago fijo en saldar la deuda de una tarjeta de crédito, o qué pago necesitas para saldarla en un plazo concreto.",
    metaTitle: "Calculadora para saldar la tarjeta – Meses e intereses",
    metaDescription:
      "Estima cuánto tarda un pago mensual fijo en saldar una tarjeta de crédito, los intereses totales o el pago necesario para liquidarla en cierto número de meses.",
    keywords: ["saldar tarjeta de crédito", "pagar deuda de tarjeta", "intereses tarjeta de crédito", "liquidar deuda", "meses para pagar la tarjeta", "pago mensual tarjeta", "APR"],
    intro: [
      "Los intereses de la tarjeta de crédito se cobran sobre todo el saldo que arrastras, así que un pago mensual pequeño puede mantenerte endeudado durante años. Esta calculadora muestra el efecto de pagar una cantidad fija cada mes.",
      "Elige si quieres saber cuánto tardará tu pago o cuánto debes pagar cada mes para saldar la tarjeta en un número de meses determinado. Una tabla anual muestra cómo baja el saldo y cuántos intereses se lleva el emisor de la tarjeta.",
    ],
    howToUse: [
      "Elige la moneda de los importes.",
      "Elige qué quieres calcular: el tiempo para saldarla o el pago necesario.",
      "Introduce el saldo actual y la APR (tipo de interés nominal anual) de la tarjeta.",
      "Introduce tu pago mensual fijo o el número de meses en los que quieres quedar sin deuda.",
      "Consulta el resultado, los intereses totales y la tabla año a año.",
    ],
    formulas: [
      { title: "Intereses mensuales", expression: "intereses = saldo × APR ÷ 12", explanation: "Cada mes se suman los intereses al saldo y luego se resta el pago. El último pago es solo lo que queda pendiente." },
      { title: "Pago para una fecha objetivo", expression: "PMT = B × i ÷ (1 − (1 + i)^(−n))", explanation: "B es el saldo, i = APR ÷ 12 en decimal y n el número de meses. Con una APR del 0 %, PMT = B ÷ n." },
      { title: "Cuando el pago es demasiado pequeño", expression: "pago ≤ B × i", explanation: "Si el pago no supera los intereses del primer mes, el saldo nunca baja." },
    ],
    examples: [
      {
        title: "3200 US$ con una APR del 19,99 %, pagando 120 US$ al mes",
        steps: [
          "Tipo mensual = 19,99 % ÷ 12 ≈ 1,666 %",
          "Primer mes: intereses ≈ 53,31 US$, así que 66,69 US$ de los 120 US$ reducen el saldo",
          "Repitiendo mes a mes, el pago número 36 es parcial, de unos 66,69 US$",
          "Intereses totales ≈ 1066,69 US$",
        ],
      },
      {
        title: "6500 US$ con una APR del 24,5 %, saldados en 36 meses",
        steps: ["i = 0,245 ÷ 12 ≈ 0,020417; n = 36", "PMT = 6500 × i ÷ (1 − (1 + i)^−36)", "≈ 256,72 US$ al mes, unos 2742 US$ de intereses en total"],
      },
      {
        title: "1500 US$ con un tipo promocional del 0 %, saldados en 10 meses",
        steps: ["Sin intereses, así que el saldo se reparte a partes iguales", "PMT = 1500 ÷ 10 = 150 US$"],
      },
    ],
    assumptions: [
      "Los intereses se capitalizan mensualmente a APR ÷ 12. Muchos emisores aplican un tipo periódico diario sobre el saldo medio diario, así que los extractos reales serán algo distintos.",
      "No hay compras nuevas, disposiciones de efectivo, comisiones, tipos de penalización ni cambios de tipo, y todos los pagos se hacen a tiempo.",
      "Los pagos no se redondean al céntimo y se supone que los tipos promocionales duran todo el periodo.",
      "Es una estimación, no asesoramiento financiero, y no ha sido revisada por profesionales. Consulta el contrato y el extracto de tu tarjeta para conocer las cifras que te corresponden.",
    ],
    faqs: [
      {
        question: "¿Por qué tarda tanto un pago pequeño?",
        answer: "La mayor parte de un pago pequeño se va en intereses. Solo lo que sobra reduce el saldo, así que este baja despacio y sigue generando intereses. Incluso un aumento moderado del pago puede recortar mucho el tiempo y los intereses.",
      },
      {
        question: "¿Por qué el plazo de mi extracto es distinto?",
        answer: "Los extractos suelen suponer que pagas solo el mínimo, que se reduce a medida que baja el saldo, y los emisores suelen cobrar intereses diarios. Esta calculadora supone el mismo pago fijo cada mes e intereses mensuales.",
      },
      {
        question: "¿Y si mi pago es menor que los intereses?",
        answer: "Entonces el saldo nunca baja y la calculadora muestra un error. Tienes que pagar más que los intereses del primer mes, que aparecen en el mensaje de error, para que alguna parte del pago reduzca lo que debes.",
      },
    ],
    sourcesUsedFor: [
      "La información sobre el plazo de amortización y el pago a 36 meses que figura en los extractos de tarjetas de EE. UU., que también supone que no hay compras nuevas.",
      "Qué significa la tasa de porcentaje anual (APR) de una tarjeta de crédito.",
    ],
  },
  text: {
    mode: "Calcular",
    modes: { payment: "Tiempo para saldarla", months: "Pago necesario" },
    balance: "Saldo de la tarjeta",
    balanceHelp: "Lo que debes hoy en la tarjeta.",
    apr: "APR de compras",
    aprHelp: "El tipo de interés anual que figura en tu extracto.",
    payment: "Pago mensual",
    paymentHelp: "La misma cantidad pagada cada mes hasta saldar la deuda.",
    months: "Saldarla en",
    monthsHelp: "Número de pagos mensuales, de 1 a 600.",
    monthsSuffix: "meses",
    errors: {
      neverPaid: "Este pago no cubre los intereses del primer mes, de {interest}, así que la deuda nunca se saldaría. Introduce un pago mayor.",
      tooLong: "Con este pago se tardaría más de 1200 meses (100 años) en saldar la tarjeta. Introduce un pago mayor.",
    },
    units: { years, months },
    yearsMonths: "{years} y {months}",
    timeToPayoff: "Tiempo para saldarla",
    captionPayment: "Pagando {payment} al mes sobre {balance} con una APR del {apr}: aproximadamente {duration}.",
    requiredPayment: "Pago mensual necesario",
    captionMonths: "Salda {balance} con una APR del {apr} en {duration}.",
    totalInterest: "Intereses totales",
    totalPaid: "Total pagado",
    lastPayment: "Último pago (parcial)",
    firstInterest: "Intereses del primer mes",
    numberOfPayments: "Número de pagos",
    tableCaption: "Saldo por año",
    tableColumns: { year: "Año", interest: "Intereses pagados", paid: "Pagos realizados", balance: "Saldo a final de año" },
    notes: {
      monthly: "Los intereses se suman cada mes a APR ÷ 12. Muchos emisores cobran intereses sobre el saldo medio diario, así que las cifras de tu extracto serán algo distintas.",
      noPurchases: "La estimación supone que no hay compras nuevas, comisiones ni cambios de tipo mientras saldas la tarjeta.",
      zeroRate: "Con una APR del 0 %, el saldo simplemente se reparte en pagos iguales.",
    },
  },
};

export default es;
