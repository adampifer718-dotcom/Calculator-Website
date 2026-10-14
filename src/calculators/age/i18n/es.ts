import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AgeText } from "../text/en";

const years = { zero: "{n} años", one: "{n} año", two: "{n} años", few: "{n} años", many: "{n} años", other: "{n} años" };
const months = { zero: "{n} meses", one: "{n} mes", two: "{n} meses", few: "{n} meses", many: "{n} meses", other: "{n} meses" };
const weeks = { zero: "{n} semanas", one: "{n} semana", two: "{n} semanas", few: "{n} semanas", many: "{n} semanas", other: "{n} semanas" };
const days = { zero: "{n} días", one: "{n} día", two: "{n} días", few: "{n} días", many: "{n} días", other: "{n} días" };

const es: CalculatorTranslation<AgeText> = {
  content: {
    title: "Calculadora de edad",
    shortTitle: "Edad",
    summary: "Calcula la edad exacta en años, meses y días en cualquier fecha, con el total de días y semanas y el próximo cumpleaños.",
    metaTitle: "Calculadora de edad – Edad exacta en años, meses y días",
    metaDescription:
      "Calcula la edad exacta a partir de la fecha de nacimiento en años, meses y días, además del total de días y semanas, el próximo cumpleaños y el día en que naciste.",
    keywords: ["calculadora de edad", "cuántos años tengo", "calcular edad", "fecha de nacimiento", "edad en días", "edad exacta", "próximo cumpleaños"],
    intro: [
      "Introduce una fecha de nacimiento para ver la edad exacta hoy, o elige otra fecha para saber la edad de alguien ese día.",
      "La calculadora cuenta meses reales del calendario y tiene en cuenta los años bisiestos, los meses de distinta duración y los cumpleaños el 29 de febrero.",
    ],
    howToUse: [
      "Introduce la fecha de nacimiento.",
      "Deja la fecha de hoy o elige otra.",
      "Si el cumpleaños es el 29 de febrero, elige cómo se cuenta en los demás años.",
      "Consulta la edad, los totales y el próximo cumpleaños.",
    ],
    formulas: [
      {
        title: "Años, meses y días",
        expression: "Edad = el mayor número de meses completos desde el nacimiento hasta la fecha, más los días restantes",
        explanation: "Los meses completos se cuentan en el calendario. Si un mes es más corto que el día de nacimiento (por ejemplo, el 31), se usa el último día de ese mes.",
      },
      { title: "Total de días", expression: "Días = fecha − fecha de nacimiento", explanation: "Días naturales entre las dos fechas, contando cada 29 de febrero." },
      {
        title: "Próximo cumpleaños",
        expression: "Próximo cumpleaños = fecha de nacimiento + (años cumplidos + 1) años",
        explanation: "Un cumpleaños el 29 de febrero cae el 28 de febrero o el 1 de marzo en los años no bisiestos, según elijas.",
      },
    ],
    examples: [
      {
        title: "Nacido el 15 de mayo de 1990, edad el 14 de octubre de 2026",
        steps: [
          "15 de mayo de 1990 → 15 de mayo de 2026: 36 años",
          "15 de mayo → 15 de septiembre: 4 meses; 15 de septiembre → 14 de octubre: 29 días",
          "Total: 13.301 días; próximo cumpleaños el 15 de mayo de 2027, dentro de 213 días",
        ],
      },
      {
        title: "Nacido el 29 de febrero de 2000, edad el 28 de febrero de 2025",
        steps: [
          "2025 no es bisiesto, así que el cumpleaños se toma el 28 de febrero",
          "29 de febrero de 2000 → 28 de febrero de 2025: 25 años exactos",
          "Con la regla del 1 de marzo, la edad sería de 24 años, 11 meses y 30 días",
        ],
      },
    ],
    assumptions: [
      "Las fechas usan el calendario gregoriano, también para fechas anteriores a su adopción en algunos países.",
      "La edad se cuenta en días naturales en tu propia zona horaria; no se usan la hora de nacimiento ni las diferencias horarias entre lugares.",
      "Si un mes posterior es más corto que el día de nacimiento, el último día de ese mes cuenta como aniversario mensual.",
    ],
    faqs: [
      {
        question: "¿Cómo se trata un cumpleaños el 29 de febrero?",
        answer: "En los años no bisiestos puedes contarlo el 28 de febrero o el 1 de marzo. La práctica varía según el país y la finalidad, así que comprueba la regla que se te aplica, por ejemplo para la mayoría de edad.",
      },
      {
        question: "¿Por qué los meses y los días pueden parecer irregulares?",
        answer: "Los meses tienen entre 28 y 31 días, así que el mismo número de días puede equivaler a un número distinto de meses según las fechas.",
      },
      {
        question: "¿Influye la zona horaria?",
        answer: "Solo cerca de la medianoche. La calculadora usa fechas del calendario; si naciste a última hora de la noche en otra zona horaria, tu fecha de nacimiento allí puede no coincidir con la hora local.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    birth: "Fecha de nacimiento",
    asOf: "Edad el día",
    asOfHelp: "Hoy por defecto. Cámbiala para ver la edad en cualquier fecha.",
    leapDay: "Cumpleaños del 29 de febrero en los demás años",
    leapDayOptions: { feb28: "Celebrarlo el 28 de febrero", mar1: "Celebrarlo el 1 de marzo" },
    leapDayHelp: "Solo importa si naciste el 29 de febrero. Las leyes y costumbres varían.",
    units: { years, months, weeks, days },
    ymd: "{years}, {months} y {days}",
    weeksDays: "{weeks} y {days}",
    orderError: "Esta fecha debe ser igual o posterior a la fecha de nacimiento.",
    age: "Edad",
    ageCaption: "Fecha de nacimiento: {birth}; edad el {asOf}.",
    totalMonths: "Total de meses",
    totalWeeks: "Total de semanas",
    totalDays: "Total de días",
    nextBirthday: "Próximo cumpleaños",
    daysToBirthday: "Días hasta el próximo cumpleaños",
    bornOn: "Día de la semana en que naciste",
    weekdays: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    birthdayToday: "¡Feliz cumpleaños! Hoy es el aniversario de la fecha de nacimiento.",
    note: "La edad se calcula con fechas del calendario en tu propia zona horaria; no se tiene en cuenta la hora de nacimiento.",
  },
};

export default es;
