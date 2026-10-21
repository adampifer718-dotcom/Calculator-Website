import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CreditCardPayoffText } from "../text/en";

const years = { zero: "{n} anni", one: "{n} anno", two: "{n} anni", few: "{n} anni", many: "{n} anni", other: "{n} anni" };
const months = { zero: "{n} mesi", one: "{n} mese", two: "{n} mesi", few: "{n} mesi", many: "{n} mesi", other: "{n} mesi" };

const it: CalculatorTranslation<CreditCardPayoffText> = {
  content: {
    title: "Calcolatore per estinguere la carta di credito",
    shortTitle: "Estinzione carta di credito",
    summary: "Scopri quanti mesi servono a una rata fissa per estinguere il debito di una carta di credito, o quale rata ti serve per estinguerlo entro un certo periodo.",
    metaTitle: "Calcolatore estinzione carta di credito – Mesi e interessi",
    metaDescription:
      "Stima quanto tempo serve a una rata mensile fissa per estinguere una carta di credito, gli interessi totali o la rata necessaria per azzerare il debito in un dato numero di mesi.",
    keywords: ["estinguere carta di credito", "debito carta di credito", "interessi carta di credito", "carta revolving", "mesi per estinguere il debito", "rata mensile carta", "APR"],
    intro: [
      "Gli interessi della carta di credito si applicano a tutto il saldo che porti avanti, quindi una piccola rata mensile può tenerti indebitato per anni. Questo calcolatore mostra l'effetto di pagare un importo fisso ogni mese.",
      "Scegli se vuoi sapere quanto tempo richiederà la tua rata o quanto devi pagare ogni mese per estinguere la carta in un certo numero di mesi. Una tabella annuale mostra come scende il saldo e quanti interessi incassa l'emittente della carta.",
    ],
    howToUse: [
      "Scegli la valuta degli importi.",
      "Scegli che cosa calcolare: il tempo per estinguere il debito o la rata necessaria.",
      "Inserisci il saldo attuale e l'APR (tasso d'interesse nominale annuo) della carta.",
      "Inserisci la tua rata mensile fissa o il numero di mesi entro cui vuoi azzerare il debito.",
      "Leggi il risultato, gli interessi totali e la tabella anno per anno.",
    ],
    formulas: [
      { title: "Interessi mensili", expression: "interessi = saldo × APR ÷ 12", explanation: "Ogni mese gli interessi si sommano al saldo e poi si sottrae la rata. L'ultima rata è solo l'importo residuo." },
      { title: "Rata per una data obiettivo", expression: "PMT = B × i ÷ (1 − (1 + i)^(−n))", explanation: "B è il saldo, i = APR ÷ 12 in forma decimale e n il numero di mesi. Con un APR dello 0%, PMT = B ÷ n." },
      { title: "Quando la rata è troppo bassa", expression: "rata ≤ B × i", explanation: "Se la rata non supera gli interessi del primo mese, il saldo non scende mai." },
    ],
    examples: [
      {
        title: "$3200 con un APR del 19,99%, pagando $120 al mese",
        steps: [
          "Tasso mensile = 19,99% ÷ 12 ≈ 1,666%",
          "Primo mese: interessi ≈ $53,31, quindi $66,69 dei $120 riducono il saldo",
          "Ripetendo mese per mese, la 36ª rata è parziale, di circa $66,69",
          "Interessi totali ≈ $1066,69",
        ],
      },
      {
        title: "$6500 con un APR del 24,5%, estinti in 36 mesi",
        steps: ["i = 0,245 ÷ 12 ≈ 0,020417; n = 36", "PMT = 6500 × i ÷ (1 − (1 + i)^−36)", "≈ $256,72 al mese, circa $2742 di interessi in totale"],
      },
      {
        title: "$1500 a un tasso promozionale dello 0%, estinti in 10 mesi",
        steps: ["Nessun interesse, quindi il saldo si divide in parti uguali", "PMT = 1500 ÷ 10 = $150"],
      },
    ],
    assumptions: [
      "Gli interessi si capitalizzano mensilmente a APR ÷ 12. Molti emittenti applicano un tasso periodico giornaliero sul saldo medio giornaliero, quindi gli estratti conto reali saranno leggermente diversi.",
      "Non ci sono nuovi acquisti, anticipi di contante, commissioni, tassi di penalità o variazioni di tasso, e tutte le rate vengono pagate puntualmente.",
      "Le rate non vengono arrotondate al centesimo e si presume che i tassi promozionali durino per tutto il periodo.",
      "È una stima, non una consulenza finanziaria, e non è stata verificata da professionisti. Consulta il contratto e l'estratto conto della tua carta per i dati che ti riguardano.",
    ],
    faqs: [
      {
        question: "Perché una rata piccola richiede così tanto tempo?",
        answer: "Gran parte di una rata piccola se ne va in interessi. Solo ciò che avanza riduce il saldo, che quindi scende lentamente e continua a generare interessi. Anche un aumento moderato della rata può ridurre molto il tempo e gli interessi.",
      },
      {
        question: "Perché la durata indicata nel mio estratto conto è diversa?",
        answer: "Gli estratti conto di solito presuppongono che tu paghi solo il minimo, che si riduce man mano che scende il saldo, e gli emittenti spesso applicano interessi giornalieri. Questo calcolatore presuppone la stessa rata fissa ogni mese e interessi mensili.",
      },
      {
        question: "E se la mia rata è inferiore agli interessi?",
        answer: "In quel caso il saldo non scende mai e il calcolatore mostra un errore. Devi pagare più degli interessi del primo mese, indicati nel messaggio di errore, perché una parte della rata riduca il debito.",
      },
    ],
    sourcesUsedFor: [
      "Le informazioni sui tempi di rimborso e sulla rata a 36 mesi riportate negli estratti conto delle carte statunitensi, che presuppongono anch'esse nessun nuovo acquisto.",
      "Che cosa significa il tasso percentuale annuo (APR) di una carta di credito.",
    ],
  },
  text: {
    mode: "Calcola",
    modes: { payment: "Tempo di estinzione", months: "Rata necessaria" },
    balance: "Saldo della carta",
    balanceHelp: "Quanto devi oggi sulla carta.",
    apr: "APR sugli acquisti",
    aprHelp: "Il tasso d'interesse annuo riportato nell'estratto conto.",
    payment: "Rata mensile",
    paymentHelp: "Lo stesso importo pagato ogni mese fino all'estinzione del debito.",
    months: "Estinguila in",
    monthsHelp: "Numero di rate mensili, da 1 a 600.",
    monthsSuffix: "mesi",
    errors: {
      neverPaid: "Questa rata non copre gli interessi del primo mese, pari a {interest}, quindi il debito non verrebbe mai estinto. Inserisci una rata più alta.",
      tooLong: "Con questa rata servirebbero più di 1200 mesi (100 anni) per estinguere la carta. Inserisci una rata più alta.",
    },
    units: { years, months },
    yearsMonths: "{years} e {months}",
    timeToPayoff: "Tempo di estinzione",
    captionPayment: "Pagando {payment} al mese su {balance} con un APR del {apr}: circa {duration}.",
    requiredPayment: "Rata mensile necessaria",
    captionMonths: "Estingue {balance} con un APR del {apr} in {duration}.",
    totalInterest: "Interessi totali",
    totalPaid: "Totale pagato",
    lastPayment: "Ultima rata (parziale)",
    firstInterest: "Interessi del primo mese",
    numberOfPayments: "Numero di rate",
    tableCaption: "Saldo per anno",
    tableColumns: { year: "Anno", interest: "Interessi pagati", paid: "Rate pagate", balance: "Saldo a fine anno" },
    notes: {
      monthly: "Gli interessi si sommano ogni mese a APR ÷ 12. Molti emittenti applicano gli interessi sul saldo medio giornaliero, quindi i dati del tuo estratto conto saranno leggermente diversi.",
      noPurchases: "La stima presuppone che non ci siano nuovi acquisti, commissioni o variazioni di tasso mentre estingui la carta.",
      zeroRate: "Con un APR dello 0% il saldo viene semplicemente diviso in rate uguali.",
    },
  },
};

export default it;
