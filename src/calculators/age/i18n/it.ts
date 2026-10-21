import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AgeText } from "../text/en";

const years = { zero: "{n} anni", one: "{n} anno", two: "{n} anni", few: "{n} anni", many: "{n} anni", other: "{n} anni" };
const months = { zero: "{n} mesi", one: "{n} mese", two: "{n} mesi", few: "{n} mesi", many: "{n} mesi", other: "{n} mesi" };
const weeks = { zero: "{n} settimane", one: "{n} settimana", two: "{n} settimane", few: "{n} settimane", many: "{n} settimane", other: "{n} settimane" };
const days = { zero: "{n} giorni", one: "{n} giorno", two: "{n} giorni", few: "{n} giorni", many: "{n} giorni", other: "{n} giorni" };

const it: CalculatorTranslation<AgeText> = {
  content: {
    title: "Calcolatore dell'età",
    shortTitle: "Età",
    summary: "Calcola l'età esatta in anni, mesi e giorni a qualsiasi data, con il totale di giorni e settimane e il prossimo compleanno.",
    metaTitle: "Calcolatore dell'età – Età esatta in anni, mesi e giorni",
    metaDescription:
      "Calcola l'età esatta dalla data di nascita in anni, mesi e giorni, con il totale di giorni e settimane, il prossimo compleanno e il giorno in cui sei nato.",
    keywords: ["calcolatore età", "quanti anni ho", "calcolo dell'età", "data di nascita", "età in giorni", "età esatta", "prossimo compleanno"],
    intro: [
      "Inserisci una data di nascita per vedere l'età esatta oggi, oppure scegli un'altra data per sapere quanti anni aveva una persona quel giorno.",
      "Il calcolatore conta i mesi reali del calendario e tiene conto degli anni bisestili, dei mesi di lunghezza diversa e dei compleanni il 29 febbraio.",
    ],
    howToUse: [
      "Inserisci la data di nascita.",
      "Lascia la data di oggi o scegline un'altra.",
      "Se il compleanno cade il 29 febbraio, scegli come contarlo negli altri anni.",
      "Leggi l'età, i totali e il prossimo compleanno.",
    ],
    formulas: [
      {
        title: "Anni, mesi e giorni",
        expression: "Età = il numero massimo di mesi interi dalla nascita alla data, più i giorni rimanenti",
        explanation: "I mesi interi si contano sul calendario. Se un mese è più corto del giorno di nascita (per esempio il 31), si usa l'ultimo giorno di quel mese.",
      },
      { title: "Totale dei giorni", expression: "Giorni = data − data di nascita", explanation: "Giorni di calendario tra le due date, contando ogni 29 febbraio." },
      {
        title: "Prossimo compleanno",
        expression: "Prossimo compleanno = data di nascita + (anni compiuti + 1) anni",
        explanation: "Un compleanno il 29 febbraio cade il 28 febbraio o il 1° marzo negli anni non bisestili, a tua scelta.",
      },
    ],
    examples: [
      {
        title: "Nato il 15 maggio 1990, età al 14 ottobre 2026",
        steps: [
          "15 maggio 1990 → 15 maggio 2026: 36 anni",
          "15 maggio → 15 settembre: 4 mesi; 15 settembre → 14 ottobre: 29 giorni",
          "Totale: 13.301 giorni; prossimo compleanno il 15 maggio 2027, tra 213 giorni",
        ],
      },
      {
        title: "Nato il 29 febbraio 2000, età al 28 febbraio 2025",
        steps: [
          "Il 2025 non è bisestile, quindi il compleanno si considera il 28 febbraio",
          "29 febbraio 2000 → 28 febbraio 2025: esattamente 25 anni",
          "Con la regola del 1° marzo l'età sarebbe di 24 anni, 11 mesi e 30 giorni",
        ],
      },
    ],
    assumptions: [
      "Le date usano il calendario gregoriano, anche per le date anteriori alla sua adozione in alcuni paesi.",
      "L'età si conta in giorni di calendario nel tuo fuso orario; l'ora di nascita e le differenze di fuso tra luoghi non vengono considerate.",
      "Se un mese successivo è più corto del giorno di nascita, l'ultimo giorno di quel mese vale come mesiversario.",
    ],
    faqs: [
      {
        question: "Come si gestisce un compleanno il 29 febbraio?",
        answer: "Negli anni non bisestili puoi contarlo il 28 febbraio o il 1° marzo. La prassi varia secondo il paese e lo scopo, quindi verifica la regola che ti riguarda, per esempio per la maggiore età.",
      },
      {
        question: "Perché mesi e giorni possono sembrare irregolari?",
        answer: "I mesi durano da 28 a 31 giorni, quindi lo stesso numero di giorni può corrispondere a un numero diverso di mesi a seconda delle date.",
      },
      {
        question: "Il fuso orario conta?",
        answer: "Solo vicino alla mezzanotte. Il calcolatore usa date di calendario; se sei nato a tarda sera in un altro fuso orario, la tua data di nascita lì potrebbe non coincidere con l'ora locale.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    birth: "Data di nascita",
    asOf: "Età alla data",
    asOfHelp: "Oggi per impostazione predefinita. Cambiala per vedere l'età a qualsiasi data.",
    leapDay: "Compleanno del 29 febbraio negli altri anni",
    leapDayOptions: { feb28: "Festeggialo il 28 febbraio", mar1: "Festeggialo il 1° marzo" },
    leapDayHelp: "Conta solo se sei nato il 29 febbraio. Leggi e usanze variano.",
    units: { years, months, weeks, days },
    ymd: "{years}, {months} e {days}",
    weeksDays: "{weeks} e {days}",
    orderError: "Questa data deve essere uguale o successiva alla data di nascita.",
    age: "Età",
    ageCaption: "Data di nascita: {birth}; età al {asOf}.",
    totalMonths: "Totale dei mesi",
    totalWeeks: "Totale delle settimane",
    totalDays: "Totale dei giorni",
    nextBirthday: "Prossimo compleanno",
    daysToBirthday: "Giorni al prossimo compleanno",
    bornOn: "Giorno della settimana in cui sei nato",
    weekdays: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
    birthdayToday: "Buon compleanno! Oggi è l'anniversario della data di nascita.",
    note: "L'età è calcolata con date di calendario nel tuo fuso orario; l'ora di nascita non viene considerata.",
  },
};

export default it;
