import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DiscountText } from "../text/en";

const it: CalculatorTranslation<DiscountText> = {
  content: {
    title: "Calcolatore di sconti",
    shortTitle: "Sconti",
    summary: "Calcola il prezzo scontato e quanto risparmi a partire dal prezzo originale e da una percentuale di sconto.",
    metaTitle: "Calcolatore di sconti – Prezzo scontato e risparmio",
    metaDescription:
      "Calcola il prezzo finale dopo uno sconto percentuale e quanto risparmi. Inserisci il prezzo originale e la percentuale di sconto per vederlo all'istante.",
    keywords: ["calcolo sconto", "prezzo scontato", "percentuale di sconto", "saldi", "coupon sconto", "quanto risparmio"],
    intro: [
      "Inserisci il prezzo originale e la percentuale di sconto per vedere il prezzo scontato e quanto risparmi.",
      "È utile durante i saldi, con i coupon e per confrontare le offerte.",
    ],
    howToUse: [
      "Inserisci il prezzo originale.",
      "Inserisci la percentuale di sconto.",
      "Leggi il prezzo scontato e l'importo risparmiato.",
    ],
    formulas: [
      { title: "Risparmio", expression: "Risparmio = prezzo × % di sconto ÷ 100", explanation: "L'importo che viene detratto." },
      {
        title: "Prezzo scontato",
        expression: "Prezzo scontato = prezzo − risparmio = prezzo × (1 − sconto ÷ 100)",
        explanation: "Quanto paghi prima di eventuali imposte sulle vendite.",
      },
    ],
    examples: [
      {
        title: "$120 con il 25% di sconto",
        steps: ["Risparmio = $120 × 0,25 = $30", "Prezzo scontato = $120 − $30 = $90"],
      },
      {
        title: "$59,99 con il 15% di sconto",
        steps: ["Risparmio = $59,99 × 0,15 = $9,00", "Prezzo scontato ≈ $50,99"],
      },
    ],
    assumptions: [
      "L'imposta sulle vendite non è inclusa; usa il calcolatore dell'imposta sulle vendite per aggiungerla.",
      "Due sconti consecutivi si moltiplicano, non si sommano: il 20% e poi il 10% equivalgono a uno sconto del 28%, non del 30%.",
    ],
    faqs: [
      {
        question: "Come si calcola uno sconto percentuale?",
        answer: "Moltiplica il prezzo per lo sconto espresso in forma decimale e sottrailo. Il 30% di sconto su $50 dà $50 − $15 = $35.",
      },
      {
        question: "Due sconti equivalgono alla loro somma?",
        answer: "No. Uno sconto del 20% seguito da uno del 10% lascia 0,8 × 0,9 = 72% del prezzo, cioè uno sconto totale del 28%.",
      },
      {
        question: "Come ricavo il prezzo originale da quello scontato?",
        answer: "Dividi il prezzo scontato per (1 − sconto ÷ 100). $60 dopo uno sconto del 25% erano $60 ÷ 0,75 = $80.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    price: "Prezzo originale",
    percent: "Sconto",
    sale: "Prezzo scontato",
    save: "Risparmi",
    share: "Percentuale del prezzo originale",
  },
};

export default it;
