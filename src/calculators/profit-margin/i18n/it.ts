import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProfitMarginText } from "../text/en";

const it: CalculatorTranslation<ProfitMarginText> = {
  content: {
    title: "Calcolatore del margine di profitto",
    shortTitle: "Margine di profitto",
    summary: "Calcola profitto, margine di profitto e ricarico a partire dal costo e dal prezzo di vendita.",
    metaTitle: "Calcolatore margine di profitto – Margine e ricarico",
    metaDescription:
      "Calcola il profitto lordo, il margine di profitto e la percentuale di ricarico (markup) a partire dal costo e dal prezzo di vendita, e capisci in cosa differiscono.",
    keywords: ["margine di profitto", "calcolo margine", "ricarico", "markup", "margine lordo", "prezzo di vendita"],
    intro: [
      "Margine e ricarico descrivono entrambi il profitto, ma rispetto a basi diverse. Il margine confronta il profitto con il prezzo di vendita; il ricarico lo confronta con il costo.",
      "Inserisci quanto ti costa un articolo e il prezzo a cui lo vendi.",
    ],
    howToUse: ["Inserisci il costo.", "Inserisci il prezzo di vendita.", "Leggi profitto, margine e ricarico."],
    formulas: [
      { title: "Profitto", expression: "profitto = prezzo − costo", explanation: "Profitto lordo per articolo o su un intero ordine." },
      { title: "Margine", expression: "margine = profitto ÷ prezzo × 100", explanation: "Quota del prezzo che è profitto." },
      { title: "Ricarico", expression: "ricarico = profitto ÷ costo × 100", explanation: "Quanto è stato aggiunto al costo." },
    ],
    examples: [
      { title: "Costo $60, prezzo $100", steps: ["Profitto = $40", "Margine = 40 ÷ 100 = 40 %; ricarico = 40 ÷ 60 ≈ 66,67 %"] },
      { title: "Costo $25, prezzo $40", steps: ["Profitto = $15", "Margine = 15 ÷ 40 = 37,5 %"] },
    ],
    assumptions: [
      "Si tratta del margine lordo: è incluso solo il costo che inserisci, non le spese generali né le imposte.",
      "La scelta della valuta cambia solo il formato.",
    ],
    faqs: [
      {
        question: "Che differenza c'è tra margine e ricarico?",
        answer: "Il margine divide il profitto per il prezzo; il ricarico lo divide per il costo. Un ricarico del 50 % corrisponde a un margine del 33,3 %.",
      },
      {
        question: "Il margine può superare il 100 %?",
        answer: "No. Il margine è una quota del prezzo di vendita, quindi al massimo arriva al 100 % (quando il costo è zero).",
      },
      {
        question: "Come fisso un prezzo per ottenere un margine obiettivo?",
        answer: "Prezzo = costo ÷ (1 − margine obiettivo). Per un margine del 40 % con un costo di $60, prezzo = 60 ÷ 0,6 = $100.",
      },
    ],
    sourcesUsedFor: ["Definizioni di profitto lordo e margine."],
  },
  text: {
    cost: "Costo",
    price: "Prezzo di vendita (ricavo)",
    margin: "Margine di profitto",
    caption: "Profitto come quota del prezzo di vendita.",
    profit: "Profitto",
    loss: "Perdita",
    markup: "Ricarico (markup)",
    undefinedMarkup: "Non definito con costo zero",
  },
};

export default it;
