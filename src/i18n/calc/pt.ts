import type { CalcCommonText } from "./en";

/** European Portuguese (Portugal) shared calculator strings. */
const pt: CalcCommonText = {
  validation: {
    required: "Introduza um valor para «{labelLower}».",
    invalidNumber: "Introduza um número válido, por exemplo {example}.",
    tooLarge: "Introduza um número mais pequeno.",
    wholeNumber: "Introduza um número inteiro.",
    greaterThan: "Tem de ser maior do que {bound}.",
    atLeast: "Tem de ser, no mínimo, {bound}.",
    atMost: "Não pode ser superior a {bound}.",
    choose: "Escolha uma opção para «{labelLower}».",
    invalidDate: "Introduza uma data válida.",
    dateAtLeast: "Tem de ser {bound} ou uma data posterior.",
    dateAtMost: "Tem de ser {bound} ou uma data anterior.",
    notFinite: "Estes dados não produzem um resultado finito. Verifique os valores e tente novamente.",
  },
  optional: "Opcional",
  currency: {
    label: "Moeda",
    help: "Altera a formatação dos montantes. Não é aplicada nenhuma conversão cambial.",
  },
  units: {
    hours: "horas",
    days: "dias",
    weeks: "semanas",
    years: "anos",
    people: "pessoas",
    h: "h",
    min: "min",
    s: "s",
  },
  schedule: {
    hoursPerWeek: "Horas por semana",
    hoursPerWeekHelp: "Horas pagas numa semana normal.",
    daysPerWeek: "Dias úteis por semana",
    daysPerWeekHelp: "Utilizado para o equivalente diário.",
    weeksPerYear: "Semanas pagas por ano",
    weeksPerYearHelp: "52 para um ano completo. Reduza o valor para excluir semanas não remuneradas.",
    errors: {
      hoursPositive: "As horas por semana têm de ser superiores a 0.",
      hoursMax: "Uma semana tem, no máximo, 168 horas.",
      daysPositive: "Os dias úteis por semana têm de ser superiores a 0.",
      daysMax: "Uma semana tem, no máximo, 7 dias.",
      weeksPositive: "As semanas por ano têm de ser superiores a 0.",
      weeksMax: "Utilize 53 semanas por ano ou menos.",
      hoursPerDay: "As horas por semana divididas pelos dias úteis por semana não podem exceder 24 horas por dia.",
    },
    notes: {
      annualHours: "Pressupõe {hours} horas por semana × {weeks} semanas = {annual} horas pagas por ano.",
      daily: "O salário diário pressupõe {days} dias úteis por semana, ou seja, {perDay} horas por dia útil.",
      gross: "Todos os montantes são salário bruto, antes de impostos e descontos, e não salário líquido.",
    },
    table: {
      caption: "Salário bruto por período",
      period: "Período de pagamento",
      periodsPerYear: "Períodos por ano",
      grossPay: "Salário bruto",
    },
  },
  payPeriods: {
    annual: "Anual",
    monthly: "Mensal",
    semimonthly: "Quinzenal (2 vezes por mês)",
    biweekly: "De duas em duas semanas",
    weekly: "Semanal",
    daily: "Diário",
    hourly: "Por hora",
  },
  choosePayPeriod: "Escolha um período de pagamento.",
};

export default pt;
