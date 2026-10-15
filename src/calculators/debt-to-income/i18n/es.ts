import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DebtToIncomeText } from "../text/en";

const es: CalculatorTranslation<DebtToIncomeText> = {
  content: {
    title: "Calculadora de ratio de endeudamiento",
    shortTitle: "Ratio de endeudamiento",
    summary: "Calcula tu ratio de endeudamiento total (back-end) y de vivienda (front-end) a partir de tus ingresos brutos mensuales y tus pagos mensuales de deudas.",
    metaTitle: "Calculadora de ratio de endeudamiento – Total y de vivienda",
    metaDescription:
      "Calcula tu ratio de endeudamiento (DTI): pagos mensuales de deudas divididos entre ingresos brutos mensuales, más el ratio de vivienda y la deuda total.",
    keywords: ["ratio de endeudamiento", "DTI", "relación deuda-ingresos", "ratio de vivienda", "endeudamiento hipoteca", "capacidad de endeudamiento", "deuda mensual"],
    intro: [
      "Tu ratio de endeudamiento, o DTI (debt-to-income), compara lo que pagas cada mes por tus deudas con lo que ganas antes de impuestos. Los prestamistas lo usan como una medida del margen que tiene tu presupuesto para un préstamo nuevo.",
      "Introduce tus ingresos brutos mensuales y tus pagos mensuales de deudas. La calculadora da el ratio total (back-end), que incluye todas las deudas, y el ratio de vivienda (front-end), que solo cuenta la vivienda.",
    ],
    howToUse: [
      "Elige la moneda de los importes.",
      "Introduce tus ingresos brutos mensuales, antes de impuestos y retenciones.",
      "Introduce tu pago mensual de vivienda: el alquiler o la cuota de la hipoteca con impuestos y seguro incluidos.",
      "Introduce tus otros pagos mensuales de deudas. Para las tarjetas de crédito, usa el pago mínimo.",
      "Consulta el ratio total, el ratio de vivienda y el total de tus pagos de deudas.",
    ],
    formulas: [
      { title: "DTI total (back-end)", expression: "DTI = pagos mensuales de deudas ÷ ingresos brutos mensuales × 100", explanation: "Todos los pagos de deudas, incluida la vivienda." },
      { title: "Ratio de vivienda (front-end)", expression: "ratio de vivienda = pago de vivienda ÷ ingresos brutos mensuales × 100", explanation: "Solo el alquiler o la cuota de la hipoteca." },
      { title: "Deuda mensual total", expression: "deuda = vivienda + coche + estudios + tarjetas + otras", explanation: "Pagos mensuales obligatorios, no saldos pendientes." },
    ],
    examples: [
      {
        title: "Ingresos de 6000 US$ con 2000 US$ en pagos",
        steps: ["Deuda total = 1500 + 100 + 400 = 2000 US$", "DTI = 2000 ÷ 6000 × 100 ≈ 33,33 %", "Ratio de vivienda = 1500 ÷ 6000 = 25 %"],
      },
      {
        title: "Ingresos de 5400 US$, alquiler y un préstamo de coche",
        steps: ["Deuda total = 1450 + 310 + 120 = 1880 US$", "DTI = 1880 ÷ 5400 × 100 ≈ 34,81 %", "Ratio de vivienda = 1450 ÷ 5400 ≈ 26,85 %"],
      },
    ],
    assumptions: [
      "Los ingresos son brutos (antes de impuestos). Los prestamistas pueden contar los ingresos de otra forma, por ejemplo promediando los ingresos como autónomo o excluyendo las primas irregulares.",
      "Solo se incluyen los pagos mensuales obligatorios. Los suministros, la compra, el teléfono y otros gastos de vida no son deudas y se dejan fuera.",
      "Cada prestamista y programa de préstamos fija sus propios límites y también tiene en cuenta el historial de crédito, los ahorros y otros factores. Un ratio del 43 % ha sido un punto de referencia habitual en las normas hipotecarias de EE. UU., pero no es un límite universal.",
      "Es una estimación, no asesoramiento financiero, y no ha sido revisada por profesionales.",
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre el DTI de vivienda (front-end) y el total (back-end)?",
        answer: "El ratio de vivienda solo cuenta tu pago de vivienda. El ratio total suma todos los demás pagos mensuales de deudas, como los del coche, los préstamos de estudios y las tarjetas de crédito. Cuando se habla de DTI, normalmente se refiere al ratio total.",
      },
      {
        question: "¿Por qué se menciona tanto la cifra del 43 %?",
        answer: "Las normas de EE. UU. sobre hipotecas cualificadas (qualified mortgages) usaban el 43 % como punto de referencia para el ratio de endeudamiento, así que la cifra se citó mucho. Los prestamistas y los programas de préstamos aplican sus propios límites, que pueden ser más altos o más bajos.",
      },
      {
        question: "¿Cómo puedo bajar mi ratio de endeudamiento?",
        answer: "Reduce tus pagos mensuales de deudas, por ejemplo saldando un préstamo o el saldo de una tarjeta, o aumenta tus ingresos brutos. Contraer deudas nuevas antes de pedir un préstamo eleva el ratio.",
      },
    ],
    sourcesUsedFor: [
      "La definición del DTI como pagos mensuales de deudas divididos entre ingresos brutos mensuales, y el punto de referencia del 43 % en las normas hipotecarias de EE. UU.",
    ],
  },
  text: {
    income: "Ingresos brutos mensuales",
    incomeHelp: "Tu sueldo antes de impuestos y retenciones, en un mes. Incluye todas tus fuentes de ingresos habituales.",
    housing: "Pago de vivienda",
    housingHelp: "El alquiler mensual, o la cuota de la hipoteca con el impuesto sobre bienes inmuebles, el seguro del hogar y las cuotas de comunidad si las hay.",
    car: "Pagos de préstamos de coche",
    student: "Pagos de préstamos de estudios",
    creditCards: "Pagos mínimos de tarjetas de crédito",
    creditCardsHelp: "El mínimo de cada tarjeta, no el saldo completo.",
    other: "Otros pagos de deudas",
    otherHelp: "Préstamos personales, pensión de alimentos, pensión compensatoria y cualquier otro pago mensual obligatorio de deudas.",
    backEnd: "Ratio de endeudamiento (total)",
    caption: "{debt} de pagos mensuales de deudas sobre {income} de ingresos brutos mensuales.",
    frontEnd: "Ratio de vivienda (front-end)",
    totalDebt: "Pagos mensuales de deudas totales",
    nonHousing: "Pagos de deudas distintos de la vivienda",
    remaining: "Ingresos brutos restantes tras los pagos de deudas",
    notes: {
      lenders: "Cada prestamista y programa de préstamos fija sus propios límites de endeudamiento y tiene en cuenta también otros factores, así que este ratio por sí solo no indica si te concederían un préstamo.",
      reference: "Según la Consumer Financial Protection Bureau, un ratio de endeudamiento del 43 % ha sido un punto de referencia habitual en las normas de EE. UU. sobre hipotecas cualificadas.",
      overIncome: "Tus pagos mensuales de deudas superan tus ingresos brutos mensuales.",
    },
  },
};

export default es;
