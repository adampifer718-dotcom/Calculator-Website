import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DateDurationText } from "../text/en";

const years = { zero: "{n} años", one: "{n} año", two: "{n} años", few: "{n} años", many: "{n} años", other: "{n} años" };
const months = { zero: "{n} meses", one: "{n} mes", two: "{n} meses", few: "{n} meses", many: "{n} meses", other: "{n} meses" };
const weeks = { zero: "{n} semanas", one: "{n} semana", two: "{n} semanas", few: "{n} semanas", many: "{n} semanas", other: "{n} semanas" };
const days = { zero: "{n} días", one: "{n} día", two: "{n} días", few: "{n} días", many: "{n} días", other: "{n} días" };

const es: CalculatorTranslation<DateDurationText> = {
  content: {
    title: "Calculadora de días entre fechas",
    shortTitle: "Días entre fechas",
    summary: "Cuenta los días, semanas, meses y años entre dos fechas, incluidos los días laborables y los de fin de semana.",
    metaTitle: "Calculadora de días entre fechas – Duración entre dos fechas",
    metaDescription:
      "Cuenta los días entre dos fechas y obtén la duración en años, meses y días, en semanas, en días laborables y de fin de semana. Incluye la fecha final si quieres.",
    keywords: ["días entre fechas", "calcular días entre dos fechas", "diferencia entre fechas", "cuántos días faltan", "contar días", "días laborables entre fechas", "semanas entre fechas"],
    intro: [
      "Averigua cuántos días hay entre dos fechas, ya sea para un plazo, un periodo de preaviso, un viaje o una cuenta atrás.",
      "El resultado también se muestra en años, meses y días, en semanas, y en días laborables y de fin de semana. Elige si se cuenta la propia fecha final.",
    ],
    howToUse: [
      "Introduce la fecha de inicio.",
      "Introduce la fecha final (hoy por defecto).",
      "Elige si la fecha final cuenta como un día completo.",
      "Consulta el número de días y los demás desgloses.",
    ],
    formulas: [
      { title: "Días entre fechas", expression: "Días = fecha final − fecha de inicio (+ 1 si se cuenta la fecha final)", explanation: "Días naturales, incluido el 29 de febrero de los años bisiestos." },
      { title: "Años, meses y días", expression: "Meses completos del calendario desde la fecha de inicio, más los días restantes", explanation: "Los meses se cuentan en el calendario, así que se tiene en cuenta su duración (de 28 a 31 días)." },
      { title: "Días laborables", expression: "Días laborables = días que no son de fin de semana", explanation: "Elige un fin de semana de sábado y domingo o de viernes y sábado. No se descuentan los festivos; réstalos tú para obtener los días hábiles." },
    ],
    examples: [
      {
        title: "Del 1 de enero al 14 de octubre de 2026",
        steps: [
          "31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 días (de enero a septiembre) + 13 días = 286 días",
          "286 días = 40 semanas y 6 días; 9 meses y 13 días",
          "204 de esos días caen de lunes a viernes",
        ],
      },
      {
        title: "Del 1 de febrero al 1 de marzo de 2024, ambas fechas incluidas",
        steps: [
          "2024 es bisiesto, así que febrero tiene 29 días",
          "29 días del 1 de febrero al 1 de marzo, más la fecha final = 30 días",
          "22 días laborables y 8 días de fin de semana",
        ],
      },
    ],
    assumptions: [
      "Las fechas son días naturales del calendario gregoriano; no se usan horas del día ni zonas horarias.",
      "Los días laborables excluyen el fin de semana elegido (sábado y domingo, o viernes y sábado); no se excluyen los festivos.",
      "Las horas son días × 24 y no tienen en cuenta los cambios de horario de verano.",
    ],
    faqs: [
      {
        question: "¿Debo contar la fecha final?",
        answer: "No para preguntas del tipo “cuánto falta”, como periodos de preaviso o edades. Cuéntala cuando tanto el primer día como el último formen parte del periodo, como una estancia de hotel contada en días o el programa de un evento.",
      },
      { question: "¿Cómo se tratan los años bisiestos?", answer: "Se cuenta cada 29 de febrero que haya entre las fechas, así que los periodos que lo incluyen duran un día más." },
      { question: "¿Cómo cuento los días hábiles?", answer: "Usa el recuento de días laborables y resta los festivos que caigan entre semana en tu país." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    start: "Fecha de inicio",
    end: "Fecha final",
    endHelp: "Hoy por defecto.",
    includeEnd: "Contar la fecha final",
    includeEndOptions: { no: "No (diferencia entre fechas)", yes: "Sí (ambas fechas incluidas)" },
    includeEndHelp: "Incluye la fecha final al contar los días de un evento, como un festival de 3 días de viernes a domingo.",
    units: { years, months, weeks, days },
    ymd: "{years}, {months} y {days}",
    weeksDays: "{weeks} y {days}",
    totalDays: "Duración en días",
    caption: "Del {start} al {end}.",
    calendar: "En años, meses y días",
    inWeeks: "En semanas y días",
    weekdays: "Días laborables",
    weekend: "Fin de semana",
    weekendOptions: { satSun: "Sábado y domingo", friSat: "Viernes y sábado" },
    weekendHelp: "Elige los días que tu país o tu lugar de trabajo considera fin de semana.",
    weekendDays: "Días de fin de semana",
    hours: "Horas",
    reversed: "La fecha final es anterior a la de inicio, así que se han intercambiado las fechas.",
    weekdaysNote: "Los días laborables excluyen los días de fin de semana elegidos, pero no los festivos.",
    hoursNote: "Las horas suponen días de 24 horas; no se incluyen los cambios de horario de verano.",
  },
};

export default es;
