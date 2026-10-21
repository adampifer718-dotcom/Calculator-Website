import type { CalcCommonText } from "./en";

/** Italian shared calculator strings. */
const it: CalcCommonText = {
  validation: {
    required: "Inserisci un valore per «{labelLower}».",
    invalidNumber: "Inserisci un numero valido, ad esempio {example}.",
    tooLarge: "Inserisci un numero più piccolo.",
    wholeNumber: "Inserisci un numero intero.",
    greaterThan: "Deve essere maggiore di {bound}.",
    atLeast: "Deve essere almeno {bound}.",
    atMost: "Non può essere maggiore di {bound}.",
    choose: "Scegli un'opzione per «{labelLower}».",
    invalidDate: "Inserisci una data valida.",
    dateAtLeast: "Deve essere il {bound} o una data successiva.",
    dateAtMost: "Deve essere il {bound} o una data precedente.",
    notFinite: "Con questi dati non si ottiene un risultato finito. Controlla i valori e riprova.",
  },
  optional: "Facoltativo",
  currency: {
    label: "Valuta",
    help: "Cambia il formato degli importi. Non viene applicata alcuna conversione di cambio.",
  },
  units: {
    hours: "ore",
    days: "giorni",
    weeks: "settimane",
    years: "anni",
    people: "persone",
    h: "h",
    min: "min",
    s: "s",
  },
  schedule: {
    hoursPerWeek: "Ore settimanali",
    hoursPerWeekHelp: "Ore retribuite in una settimana tipo.",
    daysPerWeek: "Giorni lavorativi a settimana",
    daysPerWeekHelp: "Serve per calcolare l'equivalente giornaliero.",
    weeksPerYear: "Settimane retribuite all'anno",
    weeksPerYearHelp: "52 per un anno intero. Riducilo per escludere le settimane non retribuite.",
    errors: {
      hoursPositive: "Le ore settimanali devono essere maggiori di 0.",
      hoursMax: "Una settimana ha al massimo 168 ore.",
      daysPositive: "I giorni lavorativi a settimana devono essere maggiori di 0.",
      daysMax: "Una settimana ha al massimo 7 giorni.",
      weeksPositive: "Le settimane all'anno devono essere maggiori di 0.",
      weeksMax: "Usa al massimo 53 settimane all'anno.",
      hoursPerDay: "Le ore settimanali divise per i giorni lavorativi non possono superare 24 ore al giorno.",
    },
    notes: {
      annualHours: "Ipotesi: {hours} ore settimanali × {weeks} settimane = {annual} ore retribuite all'anno.",
      daily: "La retribuzione giornaliera presuppone {days} giorni lavorativi a settimana, cioè {perDay} ore per giorno lavorativo.",
      gross: "Tutti gli importi sono retribuzioni lorde, prima di imposte e trattenute, non lo stipendio netto.",
    },
    table: {
      caption: "Retribuzione lorda per periodo",
      period: "Periodo di pagamento",
      periodsPerYear: "Periodi all'anno",
      grossPay: "Retribuzione lorda",
    },
  },
  payPeriods: {
    annual: "Annuale",
    monthly: "Mensile",
    semimonthly: "Due volte al mese",
    biweekly: "Ogni due settimane",
    weekly: "Settimanale",
    daily: "Giornaliero",
    hourly: "Orario",
  },
  choosePayPeriod: "Scegli un periodo di pagamento.",
};

export default it;
