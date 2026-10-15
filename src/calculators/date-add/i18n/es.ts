import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DateAddText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const es: CalculatorTranslation<DateAddText> = {
  content: {
    title: "Calculadora para sumar o restar días",
    shortTitle: "Sumar o restar días",
    summary: "Calcula la fecha que cae un número de años, meses, semanas y días antes o después de una fecha de inicio, con el día de la semana y los días naturales que hay entre ambas.",
    metaTitle: "Calculadora para sumar o restar días – Fecha más días",
    metaDescription:
      "Suma o resta años, meses, semanas y días a cualquier fecha. Consulta la fecha resultante, su día de la semana y cuántos días naturales hay entre las dos fechas.",
    keywords: ["sumar días a una fecha", "restar días a una fecha", "calculadora de fechas", "días desde hoy", "fecha más días", "sumar meses a una fecha", "calcular plazos"],
    intro: [
      "Los plazos, los preavisos, las garantías y las fechas de vencimiento suelen expresarse como «90 días desde» o «6 meses después de» una fecha. Esta calculadora encuentra esa fecha por ti, hacia delante o hacia atrás.",
      "También te indica el día de la semana y cuántos días naturales separan la fecha de inicio del resultado, algo útil cuando un plazo se fija en meses pero necesitas el número de días.",
    ],
    howToUse: [
      "Elige la fecha de inicio. Al cargar la página se fija en hoy.",
      "Elige Sumar para avanzar en el tiempo o Restar para retroceder.",
      "Introduce cualquier combinación de años, meses, semanas y días. Deja el resto en 0.",
      "Consulta la fecha resultante con su día de la semana y el número de días entre las dos fechas.",
    ],
    formulas: [
      {
        title: "Años y meses",
        expression: "fecha₁ = inicio ± (12 × años + meses) meses",
        explanation: "Cambia el mes y el día se mantiene. Si ese día no existe en el nuevo mes, se usa el último día del mes.",
      },
      { title: "Semanas y días", expression: "resultado = fecha₁ ± (7 × semanas + días) días", explanation: "Después se cuentan los días enteros en el calendario, cruzando finales de mes y de año según haga falta." },
      { title: "Días entre fechas", expression: "N = |resultado − inicio| en días naturales", explanation: "La fecha de inicio no se cuenta, así que un día después del lunes es martes y N = 1." },
    ],
    examples: [
      {
        title: "Un mes después del 31 de enero de 2026",
        steps: ["Febrero de 2026 tiene 28 días, así que el 31 de febrero no existe", "La fecha pasa al último día de febrero: el 28 de febrero de 2026, sábado", "Son 28 días naturales después de la fecha de inicio"],
      },
      {
        title: "Un plazo de 90 días a partir del 15 de octubre de 2026",
        steps: ["Quedan 16 días de octubre, luego 30 de noviembre y 31 de diciembre: 77 días hasta el 31 de diciembre", "13 días más llegan al 13 de enero de 2027", "El 13 de enero de 2027 es miércoles"],
      },
      {
        title: "Dos años y medio antes del 15 de agosto de 2024",
        steps: ["2 años y 6 meses = 30 meses", "30 meses antes de agosto de 2024 es febrero de 2022, y el día 15 existe en todos los meses", "El 15 de febrero de 2022 fue martes, 912 días naturales antes"],
      },
    ],
    assumptions: [
      "Las fechas siguen el calendario gregoriano, también para los años anteriores a su adopción en cada país.",
      "Los años y los meses se aplican antes que las semanas y los días. Cuando el día de inicio no existe en el mes de destino, se usa el último día de ese mes, así que el 31 de marzo menos 1 mes es el 28 o el 29 de febrero.",
      "Cuentan todos los días, incluidos los fines de semana y los festivos. Las reglas de días hábiles para plazos legales o contractuales pueden ser distintas.",
      "Los resultados se limitan a los años 1000 a 9999.",
    ],
    faqs: [
      {
        question: "¿Por qué sumar un mes al 31 de enero da el 28 de febrero?",
        answer: "Febrero no tiene día 31, así que la calculadora usa el último día de febrero en lugar de pasarse a marzo. Esta regla de fin de mes es la convención habitual para los plazos mensuales.",
      },
      {
        question: "¿Sumar 1 mes es lo mismo que sumar 30 días?",
        answer: "No. Un mes es un mes natural, que puede durar de 28 a 31 días. Si necesitas un número exacto de días, introdúcelo en el campo Días.",
      },
      {
        question: "¿El recuento incluye la fecha de inicio?",
        answer: "No. La cifra de días entre fechas cuenta los días que avanzas, así que la propia fecha de inicio no se incluye. Suma 1 si quieres contar tanto el primer día como el último.",
      },
    ],
    sourcesUsedFor: ["La regla de los años bisiestos del calendario gregoriano, usada para la duración de los meses y el recuento de días."],
  },
  text: {
    start: "Fecha de inicio",
    startHelp: "Hoy por defecto.",
    operation: "Operación",
    operations: { add: "Sumar", subtract: "Restar" },
    years: "Años",
    months: "Meses",
    monthsHelp: "Primero se aplican los años y los meses. Si el día no existe en el nuevo mes, se usa el último día de ese mes (31 de enero + 1 mes = 28 o 29 de febrero).",
    weeks: "Semanas",
    days: "Días",
    errors: {
      outOfRange: "El resultado queda fuera de las fechas admitidas ({min} a {max}). Usa una cantidad menor.",
    },
    result: "Fecha resultante",
    captionAdd: "{start} más {amount}.",
    captionSubtract: "{start} menos {amount}.",
    units: {
      years: forms("{n} año", "{n} años"),
      months: forms("{n} mes", "{n} meses"),
      weeks: forms("{n} semana", "{n} semanas"),
      days: forms("{n} día", "{n} días"),
    },
    separator: ", ",
    weekday: "Día de la semana",
    weekdayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    totalDays: "Días naturales entre las fechas",
    inWeeks: "En semanas y días",
    weeksDays: "{weeks} y {days}",
    isoDate: "Resultado en formato ISO",
    notes: {
      clamped: "El día de inicio no existe en el mes de destino, así que se ha usado el último día de ese mes.",
      calendar: "Las fechas usan el calendario gregoriano, con años bisiestos cada 4 años salvo los años de fin de siglo no divisibles entre 400.",
    },
  },
};

export default es;
