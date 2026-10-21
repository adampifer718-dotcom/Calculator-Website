import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HourlyToSalaryText } from "../text/en";

const es: CalculatorTranslation<HourlyToSalaryText> = {
  content: {
    title: "Calculadora de salario por horas",
    shortTitle: "Salario por horas",
    summary: "Convierte tu sueldo por hora en salario bruto anual, mensual, quincenal, semanal y diario según tu jornada.",
    metaTitle: "Calculadora de salario por horas – Sueldo anual y mensual",
    metaDescription:
      "Convierte un sueldo por hora en salario anual y consulta el bruto mensual, quincenal, cada dos semanas, semanal y diario según tus horas y semanas pagadas.",
    keywords: ["sueldo por hora a anual", "calcular salario anual", "precio por hora", "salario bruto", "sueldo mensual", "cuánto gano al año"],
    intro: [
      "Usa esta calculadora para ver a cuánto asciende un sueldo por hora a lo largo de un año y en cada periodo de pago habitual.",
      "Es útil para comparar una oferta de trabajo pagada por horas con otra con salario fijo, o para comprobar cómo cambian tus ingresos brutos anuales con una jornada parcial o con semanas sin sueldo.",
    ],
    howToUse: [
      "Introduce tu tarifa por hora antes de impuestos y retenciones.",
      "Indica tus horas pagadas por semana y tus semanas pagadas al año.",
      "Indica tus días laborables por semana para obtener una cifra diaria precisa.",
      "Consulta el salario anual equivalente y el desglose de cada periodo de pago.",
    ],
    formulas: [
      {
        title: "Salario anual",
        expression: "Salario anual = tarifa por hora × horas por semana × semanas por año",
        explanation: "Multiplicar por las semanas pagadas, y no por las semanas naturales, permite excluir el tiempo libre no retribuido.",
      },
      {
        title: "Otros periodos de pago",
        expression: "Mensual = anual ÷ 12\nQuincenal = anual ÷ 24\nCada dos semanas = anual ÷ 26\nSemanal = anual ÷ semanas por año\nDiario = anual ÷ (días laborables por semana × semanas por año)",
        explanation: "Cada periodo divide el mismo importe anual, así que las cifras son coherentes entre sí.",
      },
    ],
    examples: [
      {
        title: "25 US$ la hora, a jornada completa",
        steps: ["Horas anuales = 40 × 52 = 2080", "Salario anual = 25 US$ × 2080 = 52.000 US$"],
      },
      {
        title: "18,50 US$ la hora, 30 horas semanales, 50 semanas pagadas",
        steps: ["Horas anuales = 30 × 50 = 1500", "Salario anual = 18,50 US$ × 1500 = 27.750 US$"],
      },
      {
        title: "40 US$ la hora, 37,5 horas semanales, 48 semanas pagadas",
        steps: ["Horas anuales = 37,5 × 48 = 1800", "Salario anual = 40 US$ × 1800 = 72.000 US$"],
      },
    ],
    assumptions: [
      "Los resultados son salario bruto antes de impuestos y retenciones. No se estima el salario neto.",
      "Todas las horas pagadas se retribuyen a la misma tarifa. No se incluyen pluses por horas extra, propinas, bonificaciones ni complementos por turno.",
      "Los importes mensual, quincenal y cada dos semanas dividen el total anual entre 12, 24 y 26.",
      "Elegir una moneda solo cambia el formato. No se realiza ninguna conversión de divisas.",
      "Los resultados se redondean al mostrarlos. Los cálculos usan la precisión completa.",
    ],
    faqs: [
      {
        question: "¿Cuánto son 20 US$ la hora al año?",
        answer: "Con 40 horas semanales durante 52 semanas, 20 US$ la hora equivalen a 20 US$ × 2080 = 41.600 US$ brutos al año.",
      },
      {
        question: "¿Cuántas horas de trabajo tiene un año?",
        answer:
          "Una jornada completa de 40 horas semanales durante 52 semanas da 2080 horas pagadas. Cambia las horas por semana o las semanas pagadas para ajustarlo a tu caso.",
      },
      {
        question: "¿Cómo tengo en cuenta las vacaciones no retribuidas?",
        answer: "Reduce las semanas pagadas al año. Por ejemplo, con dos semanas sin sueldo, introduce 50 semanas.",
      },
      {
        question: "¿Por qué el importe mensual no equivale a cuatro semanas de sueldo?",
        answer:
          "Un mes dura, de media, más de cuatro semanas. El sueldo mensual es el total anual dividido entre 12, lo que equivale a unas 4,33 semanas de sueldo con 52 semanas al año.",
      },
      {
        question: "¿Es este mi salario neto?",
        answer: "No. Son cifras brutas antes del impuesto sobre la renta y otras retenciones, que esta calculadora no estima.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    hourlyRate: "Tarifa por hora",
    hourlyRateHelp: "Sueldo bruto por hora, antes de impuestos y retenciones.",
    primary: "Salario anual equivalente",
    caption: "Sueldo bruto anual con la tarifa por hora y la jornada introducidas.",
    monthly: "Sueldo bruto mensual",
    annualHours: "Horas pagadas al año",
  },
};

export default es;
