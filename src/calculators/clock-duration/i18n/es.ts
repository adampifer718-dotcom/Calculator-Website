import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ClockDurationText } from "../text/en";

const es: CalculatorTranslation<ClockDurationText> = {
  content: {
    title: "Calculadora de horas",
    shortTitle: "Horas",
    summary:
      "Cuenta las horas y los minutos entre una hora de inicio y una de fin, menos una pausa no remunerada, incluidos los turnos de noche, con horas decimales y el pago opcional.",
    metaTitle: "Calculadora de horas – Tiempo entre dos horas del reloj",
    metaDescription:
      "Calcula las horas entre dos horas del reloj, menos las pausas, aunque pasen de medianoche. Obtén h:mm, horas decimales para la hoja de horas y el pago por hora.",
    keywords: [
      "calculadora de horas",
      "horas trabajadas",
      "calcular horas de trabajo",
      "tiempo entre dos horas",
      "hoja de horas",
      "horas decimales",
      "turno de noche",
    ],
    intro: [
      "¿Cuánto dura un turno de 9:00 am a 5:30 pm con media hora para comer? Contar las horas a mano es fácil de hacer mal, sobre todo cuando el turno termina después de medianoche o necesitas el total en horas decimales para una hoja de horas.",
      "Escribe una hora de inicio y una de fin en formato de 24 horas o am/pm, añade la pausa no remunerada, y esta calculadora muestra el tiempo trabajado en horas y minutos, en horas decimales y en minutos totales. Añade una tarifa por hora para ver el pago del turno.",
    ],
    howToUse: [
      "Escribe la hora de inicio, por ejemplo 9:00 am, 9 am o 09:00.",
      "Escribe la hora de fin. Si es anterior a la de inicio, se considera que el turno termina al día siguiente.",
      "Introduce la pausa no remunerada en minutos, o 0 si no hay ninguna.",
      "Si quieres, elige una moneda e introduce tu tarifa por hora.",
      "Consulta el tiempo trabajado, las horas decimales para tu hoja de horas y el pago.",
    ],
    formulas: [
      {
        title: "Intervalo entre las horas",
        expression: "intervalo = fin − inicio   (se suman 24 h si fin ≤ inicio)",
        explanation: "Primero se pasan las dos horas a minutos desde medianoche.",
      },
      {
        title: "Tiempo trabajado",
        expression: "trabajado = intervalo − pausa",
        explanation: "La pausa no remunerada se resta del intervalo.",
      },
      {
        title: "Horas decimales y pago",
        expression: "horas decimales = minutos trabajados ÷ 60\npago = horas decimales × tarifa por hora",
        explanation: "Por ejemplo, 7 h 30 min son 450 ÷ 60 = 7,5 horas.",
      },
    ],
    examples: [
      {
        title: "Una jornada de 9:00 am a 5:30 pm con 30 minutos para comer",
        steps: [
          "9:00 am = 540 min y 5:30 pm = 17:30 = 1050 min desde medianoche",
          "Intervalo = 1050 − 540 = 510 min",
          "Trabajado = 510 − 30 = 480 min = 8:00, es decir, 8 horas decimales",
        ],
      },
      {
        title: "Un turno de noche de 22:00 a 6:15 con una pausa de 45 minutos, a 18,50 US$ la hora",
        steps: [
          "6:15 es anterior a 22:00, así que el turno pasa de medianoche: 375 + 1440 − 1320 = 495 min",
          "Trabajado = 495 − 45 = 450 min = 7:30, es decir, 7,5 horas",
          "Pago = 7,5 × 18,50 US$ = 138,75 US$",
        ],
      },
      {
        title: "Una mañana de 8:45 a 12:10 sin pausa",
        steps: ["8:45 = 525 min y 12:10 = 730 min", "Trabajado = 730 − 525 = 205 min", "205 min = 3:25, es decir, unas 3,42 horas decimales"],
      },
    ],
    assumptions: [
      "Un turno dura menos de 24 horas. Si la hora de fin es igual o anterior a la de inicio, se considera que es del día siguiente.",
      "Se ignoran los cambios de hora por el horario de verano durante el turno, así que un turno de noche que incluya uno tendrá una hora de diferencia.",
      "El pago es una estimación sencilla del sueldo bruto: horas × tarifa. No incluye recargos por horas extra, impuestos ni las reglas de redondeo de tu empresa. Para las horas extra semanales, usa la Calculadora de horas extra.",
    ],
    faqs: [
      {
        question: "¿Cómo paso horas y minutos a horas decimales?",
        answer:
          "Divide los minutos entre 60 y súmalos a las horas. 7 horas y 30 minutos son 7 + 30 ÷ 60 = 7,5 horas, y 3 horas y 25 minutos son unas 3,42 horas.",
      },
      {
        question: "¿Cómo introduzco un turno que termina después de medianoche?",
        answer:
          "Escribe la hora de fin real, como 6:15 o 6:15 am. Cuando la hora de fin es anterior a la de inicio, la calculadora suma 24 horas y muestra un aviso.",
      },
      {
        question: "¿Qué formatos de hora puedo escribir?",
        answer:
          "Horas en formato de 24 horas, como 9:30, 09:30 o 21:30, y horas en formato de 12 horas con am o pm, como 9:30 pm, 9 pm o 9 am. Si indicas los minutos, deben tener dos cifras.",
      },
    ],
    sourcesUsedFor: ["La hora (60 minutos) y el minuto (60 segundos) usados para convertir entre la hora del reloj y las horas decimales."],
  },
  text: {
    start: "Hora de inicio",
    end: "Hora de fin",
    timeHelp: "Escribe una hora en formato de 24 horas, como 9:30, 09:30 o 21:30, o de 12 horas con am/pm, como 9:30 pm o 9 am.",
    breakMinutes: "Pausa no remunerada",
    breakHelp: "Tiempo total de pausa no remunerada en minutos, como la pausa para comer. Introduce 0 si no hay ninguna.",
    rate: "Tarifa por hora (opcional)",
    rateHelp: "Déjalo vacío si solo necesitas las horas.",
    errors: {
      format: "Introduce una hora como 9:30, 21:30, 9:30 pm o 9 am.",
      hour24: "La hora debe estar entre 0 y 23.",
      hour12: "Con am o pm, la hora debe estar entre 1 y 12.",
      minute: "Los minutos deben estar entre 00 y 59.",
      breakTooLong: "La pausa debe ser más corta que el tiempo entre el inicio y el fin ({span}).",
    },
    worked: "Tiempo trabajado",
    caption: "De {start} a {end}, menos {break} min de pausa",
    decimalHours: "Horas decimales",
    totalMinutes: "Minutos totales",
    span: "Tiempo entre el inicio y el fin",
    pay: "Pago de este turno",
    notes: {
      overnight:
        "La hora de fin no es posterior a la de inicio, así que se considera que el turno pasa de medianoche al día siguiente (se suman 24 horas).",
      fullDay: "El inicio y el fin coinciden, así que se cuenta como un intervalo completo de 24 horas.",
      rounding: "El pago es horas decimales × tarifa, antes de impuestos, recargos por horas extra o reglas de redondeo que pueda aplicar tu empresa.",
    },
  },
};

export default es;
