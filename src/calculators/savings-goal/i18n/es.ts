import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SavingsGoalText } from "../text/en";

const es: CalculatorTranslation<SavingsGoalText> = {
  content: {
    title: "Calculadora de objetivo de ahorro",
    shortTitle: "Objetivo de ahorro",
    summary: "Calcula el depósito mensual necesario para alcanzar una meta de ahorro en una fecha elegida, teniendo en cuenta lo que ya has ahorrado y la rentabilidad que genera.",
    metaTitle: "Calculadora de objetivo de ahorro – Depósito mensual necesario",
    metaDescription:
      "Calcula cuánto ahorrar cada mes para alcanzar una meta en un plazo dado, con tus ahorros actuales, una rentabilidad anual prevista y capitalización mensual.",
    keywords: ["objetivo de ahorro", "cuánto ahorrar al mes", "ahorro mensual", "meta de ahorro", "ahorrar para un objetivo", "valor futuro", "plan de ahorro"],
    intro: [
      "Ahorrar para una entrada, un coche o un fondo de emergencia es más fácil con una cifra mensual como objetivo. Esta calculadora obtiene el depósito periódico que te lleva de lo que tienes ahora a tu meta en el plazo que elijas.",
      "Tiene en cuenta el crecimiento tanto de tus ahorros actuales como de los nuevos depósitos, con una rentabilidad anual fija capitalizada mensualmente. Con una rentabilidad del 0 %, simplemente reparte lo que falta por ahorrar entre los meses.",
    ],
    howToUse: [
      "Elige la moneda de los importes.",
      "Introduce el importe de la meta y lo que ya has ahorrado para ella.",
      "Introduce la rentabilidad anual que esperas, como el tipo de tu cuenta de ahorro.",
      "Introduce cuántos años tienes; se admiten decimales como 2,5.",
      "Consulta el depósito mensual, el total que depositarás y cuánto procede del crecimiento.",
    ],
    formulas: [
      { title: "Depósito mensual", expression: "PMT = (FV − PV × (1 + i)^n) × i ÷ ((1 + i)^n − 1)", explanation: "FV es la meta, PV los ahorros actuales, i = rentabilidad anual ÷ 12 en decimal y n el número de meses. Los depósitos se hacen al final de cada mes." },
      { title: "Rentabilidad nula", expression: "PMT = (FV − PV) ÷ n", explanation: "Sin crecimiento, lo que falta se reparte a partes iguales entre los meses." },
      { title: "Crecimiento de los ahorros actuales", expression: "PV × (1 + i)^n", explanation: "Si esto por sí solo alcanza la meta, no hacen falta depósitos." },
    ],
    examples: [
      {
        title: "15.000 US$ en 4 años partiendo de 1000 US$ al 4,5 %",
        steps: ["i = 0,045 ÷ 12 = 0,00375; n = 48", "1000 × 1,00375^48 ≈ 1196,81 US$", "PMT = (15.000 − 1196,81) × 0,00375 ÷ (1,00375^48 − 1) ≈ 263,00 US$"],
      },
      {
        title: "30.000 US$ en 10 años partiendo de cero al 6 %",
        steps: ["i = 0,005; n = 120", "PMT = 30.000 × 0,005 ÷ (1,005^120 − 1)", "≈ 183,06 US$ al mes; los depósitos suman unos 21.967 US$"],
      },
      {
        title: "6000 US$ en 2 años partiendo de 1200 US$ sin intereses",
        steps: ["n = 24 meses", "PMT = (6000 − 1200) ÷ 24 = 200 US$"],
      },
    ],
    assumptions: [
      "La rentabilidad anual es constante y se capitaliza mensualmente al tipo anual ÷ 12. Las rentabilidades reales varían y las inversiones pueden perder valor.",
      "Los depósitos son iguales cada mes y se hacen al final de cada mes. No se incluyen impuestos, comisiones ni inflación.",
      "El plazo se redondea al mes entero más próximo.",
      "Es una estimación, no asesoramiento financiero, y no ha sido revisada por profesionales.",
    ],
    faqs: [
      {
        question: "¿Por qué el depósito mensual es menor que la meta dividida entre los meses?",
        answer: "Tus ahorros actuales y cada depósito generan rentabilidad mientras esperan, así que parte de la meta la cubre el crecimiento. Cuanto mayor sea la rentabilidad y más largo el plazo, más ayuda el crecimiento.",
      },
      {
        question: "¿Qué rentabilidad debo introducir?",
        answer: "Para una cuenta de ahorro, usa su tipo de interés anual. Para inversiones, usa una estimación prudente a largo plazo y recuerda que la rentabilidad no está garantizada. Si introduces 0 %, verás el depósito necesario sin ningún crecimiento.",
      },
      {
        question: "¿Y si deposito al principio de cada mes?",
        answer: "Entonces cada depósito genera un mes más de rentabilidad, así que el depósito necesario es algo menor: aproximadamente el resultado de aquí dividido entre (1 + i), donde i es el tipo mensual.",
      },
    ],
    sourcesUsedFor: ["El valor futuro de una renta ordinaria y el pago de un fondo de amortización que se deriva de él."],
  },
  text: {
    goal: "Meta de ahorro",
    goalHelp: "El importe que quieres tener al final.",
    current: "Ahorros actuales",
    currentHelp: "Lo que ya tienes reservado para esta meta. Introduce 0 si empiezas de cero.",
    rate: "Rentabilidad anual",
    rateHelp: "Interés anual o rentabilidad de la inversión prevista, capitalizada mensualmente. Usa 0 % para efectivo sin intereses.",
    years: "Plazo para alcanzar la meta",
    yearsHelp: "En años; se admiten decimales (1,5 = 18 meses).",
    yearsSuffix: "años",
    tooShort: "Usa al menos un mes (unos 0,05 años).",
    deposit: "Depósito mensual necesario",
    caption: "Depositado al final de cada mes durante {months} al {rate} anual, más {current} ya ahorrados, para llegar a {goal}.",
    months: { zero: "{n} meses", one: "{n} mes", two: "{n} meses", few: "{n} meses", many: "{n} meses", other: "{n} meses" },
    totalDeposits: "Total depositado",
    growth: "Crecimiento obtenido",
    currentGrows: "Ahorros actuales al final",
    endBalance: "Saldo al final",
    numberOfDeposits: "Número de depósitos mensuales",
    notes: {
      reached: "Se prevé que tus ahorros actuales alcancen la meta por sí solos, así que no hacen falta más depósitos.",
      constant: "Se supone que la rentabilidad es la misma cada mes. Las rentabilidades reales varían, y no se incluyen impuestos, comisiones ni inflación.",
    },
  },
};

export default es;
