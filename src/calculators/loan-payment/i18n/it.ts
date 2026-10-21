import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LoanPaymentText } from "../text/en";

const it: CalculatorTranslation<LoanPaymentText> = {
  content: {
    title: "Calcolatore della rata del prestito",
    shortTitle: "Rata del prestito",
    summary: "Calcola la rata mensile, gli interessi totali e il piano di ammortamento di un prestito o mutuo a tasso fisso.",
    metaTitle: "Calcolatore rata prestito – Rata mensile e interessi",
    metaDescription:
      "Calcola la rata mensile di un prestito o mutuo a tasso fisso, gli interessi totali e il piano di ammortamento anno per anno da importo, TAN e durata.",
    keywords: ["prestito", "mutuo", "rata mensile", "ammortamento", "interessi", "tan", "prestito auto", "prestito personale"],
    intro: [
      "La maggior parte dei prestiti auto, dei prestiti personali e dei mutui a tasso fisso si rimborsa con rate mensili costanti. Ogni rata copre gli interessi del mese e ripaga una parte del debito residuo.",
      "Inserisci l'importo del prestito, il tasso annuo e la durata per vedere la rata, gli interessi totali e come scende il debito residuo ogni anno.",
    ],
    howToUse: [
      "Inserisci l'importo preso in prestito.",
      "Inserisci il tasso di interesse annuo (TAN).",
      "Inserisci la durata in anni.",
      "Leggi la rata mensile, gli interessi totali e il piano annuale.",
    ],
    formulas: [
      { title: "Rata mensile", expression: "M = P × r ÷ (1 − (1 + r)^(−n))", explanation: "P è l'importo preso in prestito, r il tasso mensile (TAN ÷ 12) e n il numero di rate mensili." },
      { title: "Interessi zero", expression: "M = P ÷ n", explanation: "Senza interessi, il prestito viene suddiviso in parti uguali." },
      { title: "Debito residuo", expression: "B_k = P(1 + r)^k − M((1 + r)^k − 1) ÷ r", explanation: "Debito residuo dopo k rate, usato per il piano di ammortamento." },
    ],
    examples: [
      { title: "$200.000 al 6% per 30 anni", steps: ["r = 0,06 ÷ 12 = 0,005; n = 360", "M = 200.000 × 0,005 ÷ (1 − 1,005^−360) ≈ $1.199,10"] },
      { title: "$10.000 allo 0% per 5 anni", steps: ["n = 60 rate", "M = 10.000 ÷ 60 ≈ $166,67"] },
    ],
    assumptions: [
      "Tasso fisso, rate mensili costanti e nessun rimborso anticipato.",
      "Imposte sugli immobili, assicurazioni, commissioni, punti e assicurazione sul mutuo non sono inclusi.",
      "I finanziatori possono arrotondare le rate al centesimo ogni mese, quindi le ultime rate possono differire leggermente. Questa non è una consulenza finanziaria.",
    ],
    faqs: [
      { question: "Come si calcola la rata mensile di un prestito?", answer: "Con la formula della rendita M = P × r ÷ (1 − (1 + r)^−n), dove r è il tasso mensile e n il numero di rate." },
      { question: "Perché le prime rate sono composte soprattutto da interessi?", answer: "Gli interessi si calcolano sul debito residuo, che è massimo all'inizio. Man mano che il debito scende, una parte maggiore di ogni rata va a rimborsare il capitale." },
      { question: "Una durata più breve fa risparmiare?", answer: "Di solito sì: le rate sono più alte, ma paghi interessi per meno anni, quindi gli interessi totali sono minori." },
    ],
    sourcesUsedFor: ["Il valore attuale di una rendita e la formula del prestito a rate costanti."],
  },
  text: {
    principal: "Importo del prestito",
    rate: "Tasso di interesse annuo (TAN)",
    years: "Durata del prestito",
    termTooShort: "La durata deve essere di almeno un mese.",
    payment: "Rata mensile",
    caption: "{count} rate mensili con TAN {rate}.",
    total: "Totale delle rate",
    interest: "Interessi totali",
    tableCaption: "Ammortamento per anno",
    tableColumns: { year: "Anno", principal: "Capitale rimborsato", interest: "Interessi pagati", balance: "Debito residuo" },
    note: "Tasso fisso con rate mensili costanti. Imposte, assicurazioni, commissioni ed eventuali variazioni del tasso non sono inclusi.",
  },
};

export default it;
