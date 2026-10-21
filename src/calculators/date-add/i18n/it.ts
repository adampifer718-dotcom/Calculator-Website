import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DateAddText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const it: CalculatorTranslation<DateAddText> = {
  content: {
    title: "Calcolatore per aggiungere o sottrarre giorni",
    shortTitle: "Aggiungi o sottrai giorni",
    summary: "Calcola la data che cade un certo numero di anni, mesi, settimane e giorni prima o dopo una data di partenza, con il giorno della settimana e i giorni di calendario che le separano.",
    metaTitle: "Aggiungere o sottrarre giorni a una data – Calcolatore",
    metaDescription:
      "Aggiungi o sottrai anni, mesi, settimane e giorni a qualsiasi data. Vedi la data risultante, il suo giorno della settimana e quanti giorni di calendario separano le due date.",
    keywords: ["aggiungere giorni a una data", "sottrarre giorni da una data", "calcolatore di date", "giorni da oggi", "data più giorni", "aggiungere mesi a una data", "calcolo scadenze"],
    intro: [
      "Scadenze, preavvisi, garanzie e date di scadenza sono spesso espressi come «90 giorni da» o «6 mesi dopo» una certa data. Questo calcolatore trova quella data per te, in avanti o all'indietro.",
      "Ti indica anche il giorno della settimana e quanti giorni di calendario separano la data di partenza dal risultato, utile quando una scadenza è fissata in mesi ma ti serve il numero di giorni.",
    ],
    howToUse: [
      "Scegli la data di partenza. All'apertura della pagina è impostata su oggi.",
      "Scegli Aggiungi per andare avanti nel tempo o Sottrai per tornare indietro.",
      "Inserisci qualsiasi combinazione di anni, mesi, settimane e giorni. Lascia gli altri campi a 0.",
      "Leggi la data risultante con il suo giorno della settimana e il numero di giorni tra le due date.",
    ],
    formulas: [
      {
        title: "Anni e mesi",
        expression: "data₁ = partenza ± (12 × anni + mesi) mesi",
        explanation: "Cambia il mese e il giorno resta lo stesso. Se quel giorno non esiste nel nuovo mese, si usa l'ultimo giorno del mese.",
      },
      { title: "Settimane e giorni", expression: "risultato = data₁ ± (7 × settimane + giorni) giorni", explanation: "Poi si contano i giorni interi sul calendario, superando fine mese e fine anno quando serve." },
      { title: "Giorni tra le date", expression: "N = |risultato − partenza| in giorni di calendario", explanation: "La data di partenza non si conta, quindi un giorno dopo lunedì è martedì e N = 1." },
    ],
    examples: [
      {
        title: "Un mese dopo il 31 gennaio 2026",
        steps: ["Febbraio 2026 ha 28 giorni, quindi il 31 febbraio non esiste", "La data passa all'ultimo giorno di febbraio: sabato 28 febbraio 2026", "Sono 28 giorni di calendario dopo la data di partenza"],
      },
      {
        title: "Una scadenza di 90 giorni dal 15 ottobre 2026",
        steps: ["Restano 16 giorni di ottobre, poi 30 di novembre e 31 di dicembre: 77 giorni fino al 31 dicembre", "Altri 13 giorni portano al 13 gennaio 2027", "Il 13 gennaio 2027 è un mercoledì"],
      },
      {
        title: "Due anni e mezzo prima del 15 agosto 2024",
        steps: ["2 anni e 6 mesi = 30 mesi", "30 mesi prima di agosto 2024 è febbraio 2022, e il giorno 15 esiste in tutti i mesi", "Il 15 febbraio 2022 era un martedì, 912 giorni di calendario prima"],
      },
    ],
    assumptions: [
      "Le date seguono il calendario gregoriano, anche per gli anni precedenti alla sua adozione nei singoli paesi.",
      "Anni e mesi si applicano prima di settimane e giorni. Quando il giorno di partenza non esiste nel mese di arrivo, si usa l'ultimo giorno di quel mese, quindi il 31 marzo meno 1 mese è il 28 o il 29 febbraio.",
      "Contano tutti i giorni, compresi fine settimana e festivi. Le regole sui giorni lavorativi per le scadenze legali o contrattuali possono essere diverse.",
      "I risultati sono limitati agli anni dal 1000 al 9999.",
    ],
    faqs: [
      {
        question: "Perché aggiungere un mese al 31 gennaio dà il 28 febbraio?",
        answer: "Febbraio non ha il giorno 31, quindi il calcolatore usa l'ultimo giorno di febbraio invece di passare a marzo. Questa regola di fine mese è la convenzione abituale per le scadenze mensili.",
      },
      {
        question: "Aggiungere 1 mese equivale ad aggiungere 30 giorni?",
        answer: "No. Un mese è un mese di calendario, che può durare da 28 a 31 giorni. Se ti serve un numero esatto di giorni, inseriscilo nel campo Giorni.",
      },
      {
        question: "Il conteggio include la data di partenza?",
        answer: "No. Il numero di giorni tra le date conta i giorni di cui avanzi, quindi la data di partenza stessa non è inclusa. Aggiungi 1 se vuoi contare sia il primo sia l'ultimo giorno.",
      },
    ],
    sourcesUsedFor: ["La regola degli anni bisestili del calendario gregoriano, usata per la durata dei mesi e il conteggio dei giorni."],
  },
  text: {
    start: "Data di partenza",
    startHelp: "Oggi per impostazione predefinita.",
    operation: "Operazione",
    operations: { add: "Aggiungi", subtract: "Sottrai" },
    years: "Anni",
    months: "Mesi",
    monthsHelp: "Anni e mesi si applicano per primi. Se il giorno non esiste nel nuovo mese, si usa l'ultimo giorno di quel mese (31 gennaio + 1 mese = 28 o 29 febbraio).",
    weeks: "Settimane",
    days: "Giorni",
    errors: {
      outOfRange: "Il risultato cade fuori dalle date supportate (da {min} a {max}). Usa una quantità più piccola.",
    },
    result: "Data risultante",
    captionAdd: "{start} più {amount}.",
    captionSubtract: "{start} meno {amount}.",
    units: {
      years: forms("{n} anno", "{n} anni"),
      months: forms("{n} mese", "{n} mesi"),
      weeks: forms("{n} settimana", "{n} settimane"),
      days: forms("{n} giorno", "{n} giorni"),
    },
    separator: ", ",
    weekday: "Giorno della settimana",
    weekdayNames: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
    totalDays: "Giorni di calendario tra le date",
    inWeeks: "In settimane e giorni",
    weeksDays: "{weeks} e {days}",
    isoDate: "Risultato in formato ISO",
    notes: {
      clamped: "Il giorno di partenza non esiste nel mese di arrivo, quindi è stato usato l'ultimo giorno di quel mese.",
      calendar: "Le date usano il calendario gregoriano, con anni bisestili ogni 4 anni tranne gli anni di fine secolo non divisibili per 400.",
    },
  },
};

export default it;
