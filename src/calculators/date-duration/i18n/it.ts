import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DateDurationText } from "../text/en";

const years = { zero: "{n} anni", one: "{n} anno", two: "{n} anni", few: "{n} anni", many: "{n} anni", other: "{n} anni" };
const months = { zero: "{n} mesi", one: "{n} mese", two: "{n} mesi", few: "{n} mesi", many: "{n} mesi", other: "{n} mesi" };
const weeks = { zero: "{n} settimane", one: "{n} settimana", two: "{n} settimane", few: "{n} settimane", many: "{n} settimane", other: "{n} settimane" };
const days = { zero: "{n} giorni", one: "{n} giorno", two: "{n} giorni", few: "{n} giorni", many: "{n} giorni", other: "{n} giorni" };

const it: CalculatorTranslation<DateDurationText> = {
  content: {
    title: "Calcolatore dei giorni tra due date",
    shortTitle: "Giorni tra due date",
    summary: "Conta i giorni, le settimane, i mesi e gli anni tra due date, compresi i giorni feriali e quelli del fine settimana.",
    metaTitle: "Calcolatore dei giorni tra due date – Durata di un periodo",
    metaDescription:
      "Conta i giorni tra due date e ottieni la durata in anni, mesi e giorni, in settimane, in giorni feriali e di fine settimana. Includi la data finale se vuoi.",
    keywords: ["giorni tra due date", "calcolare giorni tra date", "differenza tra date", "quanti giorni mancano", "contare i giorni", "giorni lavorativi tra date", "settimane tra date"],
    intro: [
      "Scopri quanti giorni ci sono tra due date, che si tratti di una scadenza, di un periodo di preavviso, di un viaggio o di un conto alla rovescia.",
      "Il risultato è mostrato anche in anni, mesi e giorni, in settimane e in giorni feriali e di fine settimana. Scegli se contare anche la data finale.",
    ],
    howToUse: [
      "Inserisci la data di inizio.",
      "Inserisci la data finale (oggi per impostazione predefinita).",
      "Scegli se la data finale conta come giorno intero.",
      "Leggi il numero di giorni e le altre suddivisioni.",
    ],
    formulas: [
      { title: "Giorni tra le date", expression: "Giorni = data finale − data di inizio (+ 1 se si conta la data finale)", explanation: "Giorni di calendario, compreso il 29 febbraio degli anni bisestili." },
      { title: "Anni, mesi e giorni", expression: "Mesi interi di calendario dalla data di inizio, più i giorni rimanenti", explanation: "I mesi si contano sul calendario, quindi si tiene conto della loro durata (da 28 a 31 giorni)." },
      { title: "Giorni feriali", expression: "Giorni feriali = giorni che non cadono nel fine settimana", explanation: "Scegli un fine settimana di sabato e domenica o di venerdì e sabato. I festivi non vengono esclusi; sottraili tu per ottenere i giorni lavorativi." },
    ],
    examples: [
      {
        title: "Dal 1° gennaio al 14 ottobre 2026",
        steps: [
          "31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 giorni (da gennaio a settembre) + 13 giorni = 286 giorni",
          "286 giorni = 40 settimane e 6 giorni; 9 mesi e 13 giorni",
          "204 di questi giorni cadono dal lunedì al venerdì",
        ],
      },
      {
        title: "Dal 1° febbraio al 1° marzo 2024, entrambe le date incluse",
        steps: [
          "Il 2024 è bisestile, quindi febbraio ha 29 giorni",
          "29 giorni dal 1° febbraio al 1° marzo, più la data finale = 30 giorni",
          "22 giorni feriali e 8 giorni di fine settimana",
        ],
      },
    ],
    assumptions: [
      "Le date sono giorni di calendario del calendario gregoriano; non si usano orari né fusi orari.",
      "I giorni feriali escludono il fine settimana scelto (sabato e domenica, o venerdì e sabato); i festivi non vengono esclusi.",
      "Le ore sono giorni × 24 e non tengono conto dei cambi dell'ora legale.",
    ],
    faqs: [
      {
        question: "Devo contare la data finale?",
        answer: "No per le domande del tipo “quanto manca”, come periodi di preavviso o età. Contala quando sia il primo sia l'ultimo giorno fanno parte del periodo, come un soggiorno in hotel contato in giorni o il programma di un evento.",
      },
      { question: "Come vengono gestiti gli anni bisestili?", answer: "Si conta ogni 29 febbraio compreso tra le date, quindi i periodi che lo includono durano un giorno in più." },
      { question: "Come conto i giorni lavorativi?", answer: "Usa il conteggio dei giorni feriali e sottrai i festivi che nel tuo paese cadono in settimana." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    start: "Data di inizio",
    end: "Data finale",
    endHelp: "Oggi per impostazione predefinita.",
    includeEnd: "Conta la data finale",
    includeEndOptions: { no: "No (differenza tra le date)", yes: "Sì (entrambe le date incluse)" },
    includeEndHelp: "Includi la data finale quando conti i giorni di un evento, come un festival di 3 giorni dal venerdì alla domenica.",
    units: { years, months, weeks, days },
    ymd: "{years}, {months} e {days}",
    weeksDays: "{weeks} e {days}",
    totalDays: "Durata in giorni",
    caption: "Dal {start} al {end}.",
    calendar: "In anni, mesi e giorni",
    inWeeks: "In settimane e giorni",
    weekdays: "Giorni feriali",
    weekend: "Fine settimana",
    weekendOptions: { satSun: "Sabato e domenica", friSat: "Venerdì e sabato" },
    weekendHelp: "Scegli i giorni che il tuo paese o il tuo luogo di lavoro considera fine settimana.",
    weekendDays: "Giorni di fine settimana",
    hours: "Ore",
    reversed: "La data finale è precedente a quella di inizio, quindi le date sono state scambiate.",
    weekdaysNote: "I giorni feriali escludono i giorni di fine settimana scelti, ma non i festivi.",
    hoursNote: "Le ore presuppongono giorni di 24 ore; i cambi dell'ora legale non sono inclusi.",
  },
};

export default it;
