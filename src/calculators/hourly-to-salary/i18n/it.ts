import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HourlyToSalaryText } from "../text/en";

const it: CalculatorTranslation<HourlyToSalaryText> = {
  content: {
    title: "Calcolatore da paga oraria a stipendio annuo",
    shortTitle: "Da paga oraria a stipendio",
    summary: "Trasforma una paga oraria in retribuzione lorda annua, mensile, quindicinale, settimanale e giornaliera in base al tuo orario.",
    metaTitle: "Da paga oraria a stipendio – Annuo, mensile e settimanale",
    metaDescription:
      "Converti la paga oraria in stipendio annuo e vedi il lordo mensile, bimensile, quindicinale, settimanale e giornaliero in base a ore e settimane pagate.",
    keywords: ["paga oraria", "stipendio", "retribuzione", "annuo", "lordo annuo", "mensile", "reddito", "tariffa oraria", "all'ora"],
    intro: [
      "Usa questo calcolatore per vedere a quanto corrisponde una paga oraria in un anno e in ciascuno dei periodi di paga più comuni.",
      "È utile per confrontare un'offerta di lavoro pagata a ore con una a stipendio fisso, o per verificare come l'orario part-time o le settimane non retribuite cambiano il tuo reddito lordo annuo.",
    ],
    howToUse: [
      "Inserisci la tua paga oraria al lordo di imposte e trattenute.",
      "Imposta le ore pagate a settimana e le settimane pagate all'anno.",
      "Imposta i giorni lavorativi a settimana per ottenere un importo giornaliero preciso.",
      "Leggi lo stipendio annuo equivalente e la suddivisione per ogni periodo di paga.",
    ],
    formulas: [
      {
        title: "Stipendio annuo",
        expression: "Retribuzione annua = paga oraria × ore a settimana × settimane all'anno",
        explanation: "Moltiplicare per le settimane pagate, non per quelle del calendario, ti permette di escludere i periodi di assenza non retribuiti.",
      },
      {
        title: "Altri periodi di paga",
        expression: "Mensile = annuo ÷ 12\nBimensile = annuo ÷ 24\nQuindicinale = annuo ÷ 26\nSettimanale = annuo ÷ settimane all'anno\nGiornaliero = annuo ÷ (giorni lavorativi a settimana × settimane all'anno)",
        explanation: "Ogni periodo divide lo stesso importo annuo, quindi gli importi restano coerenti tra loro.",
      },
    ],
    examples: [
      { title: "$25 all'ora, a tempo pieno", steps: ["Ore annue = 40 × 52 = 2.080", "Retribuzione annua = $25 × 2.080 = $52.000"] },
      { title: "$18,50 all'ora, 30 ore a settimana, 50 settimane pagate", steps: ["Ore annue = 30 × 50 = 1.500", "Retribuzione annua = $18,50 × 1.500 = $27.750"] },
      { title: "$40 all'ora, 37,5 ore a settimana, 48 settimane pagate", steps: ["Ore annue = 37,5 × 48 = 1.800", "Retribuzione annua = $40 × 1.800 = $72.000"] },
    ],
    assumptions: [
      "I risultati sono retribuzioni lorde, prima di imposte e trattenute. Il netto in busta paga non viene stimato.",
      "Ogni ora pagata è retribuita alla stessa tariffa. Maggiorazioni per straordinari, mance, bonus e indennità di turno non sono incluse.",
      "Gli importi mensili, bimensili e quindicinali dividono il totale annuo per 12, 24 e 26.",
      "La scelta della valuta cambia solo la formattazione. Non viene effettuata alcuna conversione di cambio.",
      "I risultati sono arrotondati per la visualizzazione. I calcoli usano la precisione completa.",
    ],
    faqs: [
      {
        question: "Quanto fanno $20 all'ora in un anno?",
        answer: "Con 40 ore a settimana per 52 settimane, $20 all'ora corrispondono a $20 × 2.080 = $41.600 lordi all'anno.",
      },
      {
        question: "Quante ore lavorative ci sono in un anno?",
        answer: "Un orario a tempo pieno di 40 ore a settimana per 52 settimane dà 2.080 ore pagate. Modifica le ore a settimana o le settimane pagate in base alla tua situazione.",
      },
      {
        question: "Come tengo conto delle ferie non retribuite?",
        answer: "Riduci le settimane pagate all'anno. Ad esempio, due settimane non retribuite significano inserire 50 settimane.",
      },
      {
        question: "Perché l'importo mensile non è uguale a quattro settimane di paga?",
        answer: "In media un mese dura più di quattro settimane. La paga mensile è il totale annuo diviso per 12, cioè circa 4,33 settimane di paga con 52 settimane all'anno.",
      },
      {
        question: "È il mio stipendio netto?",
        answer: "No. Sono importi lordi, prima dell'imposta sul reddito e delle altre trattenute, che questo calcolatore non stima.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    hourlyRate: "Paga oraria",
    hourlyRateHelp: "Retribuzione lorda all'ora, prima di imposte e trattenute.",
    primary: "Stipendio annuo equivalente",
    caption: "Retribuzione lorda annua con la paga oraria e l'orario inseriti.",
    monthly: "Retribuzione lorda mensile",
    annualHours: "Ore pagate all'anno",
  },
};

export default it;
