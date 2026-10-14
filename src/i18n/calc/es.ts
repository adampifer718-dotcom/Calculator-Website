import type { CalcCommonText } from "./en";

/** Spanish (Spain) shared calculator strings. */
const es: CalcCommonText = {
  validation: {
    required: "Introduce un valor para «{labelLower}».",
    invalidNumber: "Introduce un número válido, por ejemplo {example}.",
    tooLarge: "Introduce un número más pequeño.",
    wholeNumber: "Introduce un número entero.",
    greaterThan: "Debe ser mayor que {bound}.",
    atLeast: "Debe ser como mínimo {bound}.",
    atMost: "No puede ser mayor que {bound}.",
    choose: "Elige una opción para «{labelLower}».",
    invalidDate: "Introduce una fecha válida.",
    dateAtLeast: "Debe ser el {bound} o posterior.",
    dateAtMost: "Debe ser el {bound} o anterior.",
    notFinite: "Con estos datos no se obtiene un resultado finito. Revisa los valores e inténtalo de nuevo.",
  },
  optional: "Opcional",
  currency: {
    label: "Moneda",
    help: "Cambia el formato de los importes. No se aplica ninguna conversión de tipo de cambio.",
  },
  units: {
    hours: "horas",
    days: "días",
    weeks: "semanas",
    years: "años",
    people: "personas",
    h: "h",
    min: "min",
    s: "s",
  },
  schedule: {
    hoursPerWeek: "Horas por semana",
    hoursPerWeekHelp: "Horas pagadas en una semana normal.",
    daysPerWeek: "Días laborables por semana",
    daysPerWeekHelp: "Se usa para calcular el equivalente diario.",
    weeksPerYear: "Semanas pagadas al año",
    weeksPerYearHelp: "52 para un año completo. Redúcelo para excluir las semanas no retribuidas.",
    errors: {
      hoursPositive: "Las horas por semana deben ser mayores que 0.",
      hoursMax: "Una semana tiene como máximo 168 horas.",
      daysPositive: "Los días laborables por semana deben ser mayores que 0.",
      daysMax: "Una semana tiene como máximo 7 días.",
      weeksPositive: "Las semanas al año deben ser mayores que 0.",
      weeksMax: "Usa 53 semanas al año o menos.",
      hoursPerDay: "Las horas por semana divididas entre los días laborables no pueden superar las 24 horas diarias.",
    },
    notes: {
      annualHours: "Supone {hours} horas por semana × {weeks} semanas = {annual} horas pagadas al año.",
      daily: "El sueldo diario supone {days} días laborables por semana, es decir, {perDay} horas por día laborable.",
      gross: "Todos los importes son sueldo bruto, antes de impuestos y deducciones, no sueldo neto.",
    },
    table: {
      caption: "Sueldo bruto por periodo",
      period: "Periodo de pago",
      periodsPerYear: "Periodos al año",
      grossPay: "Sueldo bruto",
    },
  },
  payPeriods: {
    annual: "Anual",
    monthly: "Mensual",
    semimonthly: "Quincenal (2 al mes)",
    biweekly: "Cada dos semanas",
    weekly: "Semanal",
    daily: "Diario",
    hourly: "Por hora",
  },
  choosePayPeriod: "Elige un periodo de pago.",
};

export default es;
