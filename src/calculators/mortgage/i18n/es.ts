import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MortgageText } from "../text/en";

const es: CalculatorTranslation<MortgageText> = {
  content: {
    title: "Calculadora de hipoteca",
    shortTitle: "Hipoteca",
    summary: "Estima el coste mensual completo de una hipoteca: capital e intereses más impuesto sobre la propiedad, seguro, cuotas de comunidad y seguro hipotecario.",
    metaTitle: "Calculadora de hipoteca – Cuota mensual con impuestos y PMI",
    metaDescription:
      "Estima la cuota mensual de tu hipoteca: capital e intereses por separado del impuesto sobre la propiedad, el seguro, la comunidad y el PMI, más los intereses totales.",
    keywords: ["calculadora de hipoteca", "cuota hipoteca", "simulador hipoteca", "préstamo hipotecario", "entrada vivienda", "seguro hipotecario PMI", "impuesto sobre la propiedad"],
    intro: [
      "La cuota de una hipoteca es más que la devolución del préstamo. En EE. UU., los prestamistas suelen cobrar el impuesto sobre la propiedad y el seguro de hogar junto con cada cuota, y algunos compradores también pagan cuotas de comunidad (HOA) o un seguro hipotecario.",
      "Esta calculadora muestra el capital y los intereses por separado de esos otros costes, para que veas qué fija el préstamo y qué depende de los impuestos y seguros de tu zona.",
    ],
    howToUse: [
      "Introduce el precio de la vivienda y tu entrada.",
      "Introduce el tipo de interés y el plazo del préstamo.",
      "Introduce el impuesto sobre la propiedad y el seguro de hogar anuales, y las cuotas mensuales de comunidad o servicios, si las hay.",
      "Introduce el tipo del seguro hipotecario si tu entrada es inferior al 20 %, o 0 si no se aplica.",
      "Consulta la cuota mensual total y su desglose.",
    ],
    formulas: [
      {
        title: "Capital e intereses",
        expression: "M = L × r ÷ (1 − (1 + r)^(−n))",
        explanation: "L es el importe del préstamo (precio − entrada), r el tipo mensual (tipo anual ÷ 12) y n el número de cuotas mensuales.",
      },
      {
        title: "Cuota mensual",
        expression: "Cuota = M + impuesto sobre la propiedad ÷ 12 + seguro ÷ 12 + comunidad + PMI",
        explanation: "Los impuestos y el seguro se reparten a partes iguales en 12 meses, como en una cuenta de depósito en garantía (escrow) habitual.",
      },
      { title: "Seguro hipotecario", expression: "PMI = L × tipo del PMI ÷ 12, mientras L ÷ precio > 80 %", explanation: "Se deja de pagar cuando el saldo previsto llega al 78 % del precio de la vivienda. Según la ley de EE. UU., también termina como muy tarde a la mitad del plazo del préstamo." },
    ],
    examples: [
      {
        title: "Vivienda de 400.000, 20 % de entrada, 6,5 % a 30 años",
        steps: [
          "Préstamo = 400.000 US$ − 80.000 US$ = 320.000 US$; r = 0,065 ÷ 12; n = 360",
          "Capital e intereses ≈ 2022,62 US$",
          "Impuesto de 400 US$ + seguro de 125 US$ al mes; sin PMI con una relación préstamo-valor del 80 %",
          "Total ≈ 2547,62 US$ al mes",
        ],
      },
      {
        title: "Vivienda de 300.000, 5 % de entrada, 6 % a 30 años con PMI",
        steps: [
          "Préstamo = 285.000 US$; capital e intereses ≈ 1708,72 US$",
          "PMI = 285.000 US$ × 0,5 % ÷ 12 = 118,75 US$ durante las primeras 129 cuotas",
          "Total ≈ 1708,72 US$ + 300 US$ + 100 US$ + 50 US$ + 118,75 US$ = 2277,47 US$",
        ],
      },
    ],
    assumptions: [
      "Tipo de interés fijo con cuotas mensuales iguales; no se modelan los préstamos a tipo variable ni los de solo intereses.",
      "El impuesto sobre la propiedad, el seguro, las cuotas de comunidad y el tipo del PMI son estimaciones tuyas; varían según la zona y la entidad, y suelen cambiar cada año.",
      "Las reglas del PMI siguen las de los préstamos convencionales de EE. UU.: se cobra por encima de una relación préstamo-valor del 80 % y se deja de pagar al llegar al 78 % según el calendario. Los préstamos FHA y VA, y los de otros países, son diferentes.",
      "No se incluyen gastos de cierre, puntos, suministros ni mantenimiento. Es una estimación, no asesoramiento financiero ni una oferta de préstamo.",
    ],
    faqs: [
      {
        question: "¿Qué es PITI?",
        answer: "Son las siglas en inglés de capital, intereses, impuestos y seguro: las cuatro partes de una cuota hipotecaria mensual típica en EE. UU. cuando la entidad cobra los impuestos y el seguro mediante una cuenta de depósito en garantía (escrow).",
      },
      {
        question: "¿Por qué la cuota de mi entidad es distinta?",
        answer: "Las entidades usan los importes reales de impuestos y seguro, pueden añadir un margen de reserva en la cuenta de depósito y pueden indicar una TAE que incluye comisiones. Pide un Loan Estimate (estimación oficial del préstamo) para obtener cifras exactas.",
      },
      {
        question: "¿Cómo puedo evitar el seguro hipotecario?",
        answer: "En muchos préstamos convencionales de EE. UU., una entrada de al menos el 20 % evita el PMI. Algunas entidades ofrecen otras opciones, a menudo con un tipo más alto.",
      },
    ],
    sourcesUsedFor: [
      "La fórmula del préstamo de cuota constante y la del saldo pendiente.",
      "Cuándo termina automáticamente el PMI (al 78 % del valor original de la vivienda) en los préstamos convencionales de EE. UU.",
    ],
  },
  text: {
    price: "Precio de la vivienda",
    down: "Entrada",
    rate: "Tipo de interés",
    rateHelp: "Tipo anual del préstamo (no la TAE con comisiones).",
    years: "Plazo del préstamo",
    propertyTax: "Impuesto sobre la propiedad al año",
    insurance: "Seguro de hogar al año",
    hoa: "Comunidad (HOA) o gastos de servicios al mes",
    pmiRate: "Tipo del seguro hipotecario (PMI)",
    pmiHelp: "Tipo anual que se cobra sobre el importe del préstamo mientras la entrada es inferior al 20 %. Introduce 0 si no se aplica.",
    errors: { downTooLarge: "La entrada debe ser inferior al precio de la vivienda.", termTooShort: "Introduce un plazo de al menos un mes." },
    monthly: "Cuota mensual estimada",
    caption: "Capital e intereses de {pi} más {extras} en impuestos, seguros y otros costes.",
    principalInterest: "Capital e intereses",
    monthlyTax: "Impuesto sobre la propiedad",
    monthlyInsurance: "Seguro de hogar",
    monthlyHoa: "Comunidad (HOA) o gastos de servicios",
    monthlyPmi: "Seguro hipotecario (PMI)",
    pmiMonths: "Meses con PMI",
    loanAmount: "Importe del préstamo",
    downShare: "Porcentaje de entrada",
    totalInterest: "Intereses totales",
    totalCost: "Total de todos los pagos durante el plazo",
    tableCaption: "Saldo del préstamo por año",
    tableColumns: { year: "Año", principal: "Capital amortizado", interest: "Intereses pagados", balance: "Saldo pendiente" },
    notes: {
      fixed: "En un préstamo a tipo fijo, el capital y los intereses se mantienen iguales durante todo el plazo; los impuestos, el seguro y la comunidad son estimaciones tuyas y suelen cambiar con el tiempo.",
      pmi: "Se supone que el PMI se aplica mientras el préstamo supera el 80 % del precio de la vivienda y que se deja de pagar cuando el saldo previsto llega al 78 %, como en la mayoría de los préstamos convencionales de EE. UU. Los préstamos FHA y otros tienen reglas distintas. Según la ley de EE. UU., también termina como muy tarde a la mitad del plazo del préstamo.",
      noPmi: "No se incluye seguro hipotecario porque el préstamo es igual o inferior al 80 % del precio de la vivienda.",
      excluded: "No se incluyen gastos de cierre, puntos, suministros, mantenimiento ni posibles cambios de tipo.",
    },
  },
};

export default es;
