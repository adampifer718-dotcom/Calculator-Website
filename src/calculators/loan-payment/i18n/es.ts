import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LoanPaymentText } from "../text/en";

const es: CalculatorTranslation<LoanPaymentText> = {
  content: {
    title: "Calculadora de cuota de préstamo",
    shortTitle: "Cuota de préstamo",
    summary: "Calcula la cuota mensual, los intereses totales y el cuadro de amortización de un préstamo o hipoteca a tipo fijo.",
    metaTitle: "Calculadora de cuota de préstamo – Cuota mensual e intereses",
    metaDescription:
      "Calcula la cuota mensual de un préstamo o hipoteca a tipo fijo, los intereses totales y el cuadro de amortización anual con el importe, el tipo y el plazo.",
    keywords: ["cuota préstamo", "calcular hipoteca", "cuota mensual", "cuadro de amortización", "intereses préstamo", "préstamo coche", "préstamo personal"],
    intro: [
      "La mayoría de los préstamos para coche, préstamos personales e hipotecas a tipo fijo se devuelven en cuotas mensuales iguales. Cada cuota cubre los intereses de ese mes y amortiza parte del capital pendiente.",
      "Introduce el importe del préstamo, el tipo de interés anual y el plazo para ver la cuota, los intereses totales y cómo baja el saldo cada año.",
    ],
    howToUse: [
      "Introduce el importe que pides prestado.",
      "Introduce el tipo de interés nominal anual (TIN).",
      "Introduce el plazo en años.",
      "Consulta la cuota mensual, los intereses totales y el cuadro anual.",
    ],
    formulas: [
      { title: "Cuota mensual", expression: "M = P × r ÷ (1 − (1 + r)^(−n))", explanation: "P es el importe prestado, r el tipo mensual (TIN ÷ 12) y n el número de cuotas mensuales." },
      { title: "Sin intereses", expression: "M = P ÷ n", explanation: "Sin intereses, el préstamo se reparte a partes iguales." },
      { title: "Saldo pendiente", expression: "B_k = P(1 + r)^k − M((1 + r)^k − 1) ÷ r", explanation: "Saldo tras k cuotas; se usa para el cuadro de amortización." },
    ],
    examples: [
      {
        title: "200.000 US$ al 6 % durante 30 años",
        steps: ["r = 0,06 ÷ 12 = 0,005; n = 360", "M = 200.000 × 0,005 ÷ (1 − 1,005^−360) ≈ 1199,10 US$"],
      },
      {
        title: "10.000 US$ al 0 % durante 5 años",
        steps: ["n = 60 cuotas", "M = 10.000 ÷ 60 ≈ 166,67 US$"],
      },
    ],
    assumptions: [
      "Tipo fijo, cuotas mensuales iguales y sin amortizaciones anticipadas.",
      "No se incluyen impuestos sobre la vivienda, seguros, comisiones, puntos ni el seguro hipotecario privado.",
      "Las entidades pueden redondear las cuotas al céntimo cada mes, por lo que las últimas cuotas pueden variar ligeramente. Esto no es asesoramiento financiero.",
    ],
    faqs: [
      {
        question: "¿Cómo se calcula la cuota mensual de un préstamo?",
        answer: "Con la fórmula de la anualidad M = P × r ÷ (1 − (1 + r)^−n), donde r es el tipo mensual y n el número de cuotas.",
      },
      {
        question: "¿Por qué las primeras cuotas son casi todo intereses?",
        answer: "Los intereses se cobran sobre el capital pendiente, que es mayor al principio. A medida que baja el saldo, una parte mayor de cada cuota se destina a amortizar capital.",
      },
      {
        question: "¿Un plazo más corto ahorra dinero?",
        answer: "Normalmente sí: las cuotas son más altas, pero pagas intereses durante menos años, así que los intereses totales son menores.",
      },
    ],
    sourcesUsedFor: ["Valor actual de una anualidad y fórmula del préstamo de cuota constante."],
  },
  text: {
    principal: "Importe del préstamo",
    rate: "Tipo de interés anual (TIN)",
    years: "Plazo del préstamo",
    termTooShort: "El plazo debe ser de al menos un mes.",
    payment: "Cuota mensual",
    caption: "{count} cuotas mensuales con un TIN del {rate}.",
    total: "Total pagado",
    interest: "Intereses totales",
    tableCaption: "Amortización por año",
    tableColumns: { year: "Año", principal: "Capital amortizado", interest: "Intereses pagados", balance: "Saldo pendiente" },
    note: "Tipo fijo con cuotas mensuales iguales. No se incluyen impuestos, seguros, comisiones ni posibles cambios de tipo.",
  },
};

export default es;
