import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SalaryToHourlyText } from "../text/en";

const it: CalculatorTranslation<SalaryToHourlyText> = {
  content: {
    title: "Calcolatore da stipendio a paga oraria",
    shortTitle: "Stipendio in paga oraria",
    summary: "Converti una retribuzione lorda annuale, mensile, bimensile o di qualsiasi altro periodo in una paga oraria in base al tuo orario.",
    metaTitle: "Calcolatore da stipendio a paga oraria – Ogni periodo",
    metaDescription:
      "Converti lo stipendio in paga oraria: inserisci la retribuzione lorda annua, mensile, bimensile, settimanale o giornaliera e ore, giorni e settimane di lavoro.",
    keywords: ["paga oraria", "stipendio orario", "calcolo paga oraria", "da stipendio annuo a orario", "stipendio mensile all'ora", "retribuzione lorda oraria"],
    intro: [
      "Questo calcolatore converte la retribuzione lorda di qualsiasi periodo di pagamento comune nel suo equivalente orario. Mostra anche a quanto corrisponde la stessa retribuzione per anno, mese, mezzo mese, due settimane, settimana e giorno lavorativo.",
      "Il risultato dipende dall'orario che inserisci. Uno stipendio di $60.000 corrisponde a circa $28,85 l'ora con 40 ore settimanali per 52 settimane, ma a circa $30,77 l'ora con 37,5 ore settimanali.",
    ],
    howToUse: [
      "Inserisci la tua retribuzione lorda, prima di imposte e trattenute.",
      "Scegli ogni quanto ricevi quell'importo: annuale, mensile, due volte al mese, ogni due settimane, settimanale, giornaliero o orario.",
      "Indica le ore retribuite a settimana, i giorni lavorativi a settimana e le settimane retribuite all'anno. I valori predefiniti sono 40 ore, 5 giorni e 52 settimane.",
      "Leggi l'equivalente orario e il dettaglio completo per periodo di pagamento. I risultati si aggiornano mentre scrivi.",
    ],
    formulas: [
      {
        title: "Annualizzare l'importo",
        expression:
          "Retribuzione annua = importo × periodi all'anno\nAnnuale = 1, Mensile = 12, Due volte al mese = 24, Ogni due settimane = 26\nSettimanale = settimane all'anno\nGiornaliero = giorni lavorativi a settimana × settimane all'anno\nOrario = ore settimanali × settimane all'anno",
        explanation:
          "Le retribuzioni annuali, mensili, bimensili e ogni due settimane usano un numero fisso di periodi del calendario. Quelle settimanali, giornaliere e orarie si annualizzano con l'orario che inserisci.",
      },
      {
        title: "Dividere per le ore retribuite",
        expression: "Ore annue = ore settimanali × settimane all'anno\nEquivalente orario = retribuzione annua ÷ ore annue",
        explanation: "L'equivalente orario distribuisce la retribuzione lorda annualizzata in parti uguali su tutte le ore retribuite dell'anno.",
      },
      {
        title: "Altri periodi di pagamento",
        expression: "Retribuzione per periodo = retribuzione annua ÷ periodi all'anno",
        explanation: "La tabella di dettaglio divide l'importo annualizzato per il numero di periodi di ciascun tipo. I valori vengono arrotondati solo nella visualizzazione.",
      },
    ],
    examples: [
      {
        title: "Stipendio annuo di $60.000 a tempo pieno",
        steps: ["Ore annue = 40 × 52 = 2.080", "Orario = $60.000 ÷ 2.080 = $28,846…"],
      },
      {
        title: "$4.500 al mese",
        steps: ["Retribuzione annua = $4.500 × 12 = $54.000", "Ore annue = 40 × 52 = 2.080", "Orario = $54.000 ÷ 2.080 = $25,961…"],
      },
      {
        title: "$2.000 ogni due settimane con 37,5 ore settimanali",
        steps: ["Retribuzione annua = $2.000 × 26 = $52.000", "Ore annue = 37,5 × 52 = 1.950", "Orario = $52.000 ÷ 1.950 = $26,666…"],
      },
      {
        title: "$250 al giorno, 4 giorni a settimana, 48 settimane retribuite",
        steps: ["Retribuzione annua = $250 × 4 × 48 = $48.000", "Ore annue = 32 × 48 = 1.536", "Orario = $48.000 ÷ 1.536 = $31,25"],
      },
    ],
    assumptions: [
      "Tutti gli importi sono lordi, prima dell'imposta sul reddito, dei contributi previdenziali, dei versamenti pensionistici e delle altre trattenute. Questo calcolatore non stima le imposte né lo stipendio netto.",
      "Le retribuzioni mensili, bimensili e ogni due settimane si annualizzano con 12, 24 e 26 periodi all'anno, indipendentemente dalle settimane all'anno inserite.",
      "Le retribuzioni settimanali, giornaliere e orarie si annualizzano con le tue settimane all'anno, i giorni lavorativi a settimana e le ore settimanali.",
      "Straordinari, premi, provvigioni, benefit e pause non retribuite non sono inclusi, a meno che tu non li aggiunga all'importo.",
      "La scelta della valuta cambia solo il simbolo e il formato. Non viene applicato alcun tasso di cambio.",
      "I risultati vengono arrotondati per la visualizzazione. I calcoli usano la precisione completa.",
    ],
    faqs: [
      {
        question: "Come converto il mio stipendio annuo in paga oraria?",
        answer:
          "Dividi lo stipendio annuo per il numero di ore retribuite in un anno. Con 40 ore settimanali per 52 settimane sono 2.080 ore, quindi uno stipendio di $50.000 corrisponde a $50.000 ÷ 2.080 ≈ $24,04 l'ora.",
      },
      {
        question: "Perché la paga ogni due settimane si moltiplica per 26 e non per 2 × settimane all'anno?",
        answer:
          "Essere pagati ogni due settimane significa 26 pagamenti in un anno normale. Le retribuzioni mensili, bimensili e ogni due settimane sono di solito fisse per busta paga, quindi si annualizzano con un numero di periodi del calendario e non con le settimane retribuite che inserisci.",
      },
      {
        question: "Che differenza c'è tra essere pagati due volte al mese e ogni due settimane?",
        answer:
          "La paga bimensile arriva due volte al mese, con 24 buste paga all'anno. La paga ogni due settimane arriva ogni 14 giorni, con 26 buste paga all'anno. A parità di stipendio annuo, ogni busta paga quattordicinale è più bassa di una bimensile.",
      },
      {
        question: "La paga oraria è il mio stipendio netto?",
        answer:
          "No. Il risultato è la retribuzione lorda prima di imposte e trattenute. Il tuo netto dipende dalla tua situazione fiscale, dai benefit e dalle trattenute, che questo calcolatore non stima.",
      },
      {
        question: "Devo usare 52 settimane all'anno?",
        answer:
          "Usa 52 se sei pagato tutte le settimane dell'anno, comprese ferie e festività retribuite. Se alcune settimane non sono retribuite, inserisci solo quelle retribuite. Un anno solare ha circa 52,14 settimane, valore che puoi anche inserire.",
      },
      {
        question: "Cambiare valuta converte l'importo?",
        answer: "No. La valuta cambia solo il formato dei numeri. Inserisci gli importi nella valuta in cui sei pagato.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    amount: "Retribuzione lorda",
    amountHelp: "Retribuzione prima di imposte e trattenute.",
    period: "Periodo di pagamento",
    periodHelp: "Ogni quanto ricevi l'importo indicato sopra.",
    primary: "Equivalente orario",
    caption: "Retribuzione lorda oraria, convertita dalla periodicità: {period}.",
    annual: "Retribuzione lorda annua",
    annualHours: "Ore retribuite all'anno",
  },
};

export default it;
