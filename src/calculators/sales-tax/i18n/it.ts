import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SalesTaxText } from "../text/en";

const it: CalculatorTranslation<SalesTaxText> = {
  content: {
    title: "Calcolatore dell'imposta sulle vendite",
    shortTitle: "Imposta sulle vendite",
    summary: "Aggiungi l'imposta sulle vendite a un prezzo o ricava il prezzo senza imposta da un totale che la comprende.",
    metaTitle: "Calcolatore imposta sulle vendite – Aggiungi o scorpora",
    metaDescription:
      "Calcola l'imposta sulle vendite e il prezzo totale, oppure scorpora l'imposta da un totale per ricavare il prezzo originale. Vale per ogni aliquota e valuta.",
    keywords: ["calcolo iva", "scorporo iva", "imposta sulle vendite", "prezzo ivato", "prezzo senza iva", "sales tax"],
    intro: [
      "Inserisci un prezzo e un'aliquota per vedere l'imposta e il totale da pagare. Passa allo scorporo per ricavare il prezzo prima delle imposte dal totale di uno scontrino.",
      "Gli stessi calcoli valgono per l'IVA e la GST, che sono anch'esse percentuali aggiunte al prezzo.",
    ],
    howToUse: [
      "Scegli se aggiungere l'imposta a un prezzo o scorporarla da un totale.",
      "Inserisci l'importo e l'aliquota in percentuale.",
      "Leggi l'imposta, il totale e il prezzo prima delle imposte.",
    ],
    formulas: [
      {
        title: "Aggiungere l'imposta",
        expression: "Imposta = prezzo × aliquota ÷ 100\nTotale = prezzo + imposta",
        explanation: "Moltiplica il prezzo per l'aliquota espressa in decimale.",
      },
      {
        title: "Scorporare l'imposta",
        expression: "Prezzo senza imposta = totale ÷ (1 + aliquota ÷ 100)",
        explanation: "Dividere per 1 più l'aliquota annulla l'imposta. Sottrarre la percentuale dal totale non dà il risultato corretto.",
      },
    ],
    examples: [
      { title: "$100 con un'imposta dell'8,25 %", steps: ["Imposta = $100 × 0,0825 = $8,25", "Totale = $100 + $8,25 = $108,25"] },
      { title: "Un totale di $54 che comprende l'8 % di imposta", steps: ["Prezzo = $54 ÷ 1,08 = $50", "Imposta = $54 − $50 = $4"] },
    ],
    assumptions: [
      "L'aliquota è un'unica percentuale applicata all'intero importo. In alcuni luoghi i prodotti sono tassati in modo diverso o si aggiungono imposte locali.",
      "I risultati vengono arrotondati al centesimo solo nella visualizzazione.",
      "La scelta della valuta cambia solo il formato.",
    ],
    faqs: [
      {
        question: "Come si calcola l'imposta sulle vendite?",
        answer: "Moltiplica il prezzo per l'aliquota in decimale. Con un'aliquota del 7 %, $50 × 0,07 = $3,50 di imposta.",
      },
      {
        question: "Come scorporo l'imposta da un totale?",
        answer: "Dividi il totale per 1 più l'aliquota. Un totale di $107 con il 7 % di imposta corrisponde a $107 ÷ 1,07 = $100 prima delle imposte.",
      },
      { question: "L'IVA si calcola allo stesso modo?", answer: "Sì. IVA e GST sono percentuali del prezzo, quindi valgono le stesse formule." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    mode: "Calcolo",
    modes: { add: "Aggiungi l'imposta a un prezzo", remove: "Scorpora l'imposta da un totale" },
    amount: "Importo",
    amountHelp: "Prezzo prima delle imposte oppure, se scorpori l'imposta, totale comprensivo di imposta.",
    rate: "Aliquota dell'imposta",
    beforeTax: "Prezzo prima delle imposte",
    beforeTaxCaption: "Il totale diviso per (1 + aliquota).",
    taxIncluded: "Imposta compresa",
    total: "Totale con imposta",
    totalCaption: "Il prezzo più l'imposta sulle vendite.",
    tax: "Imposta sulle vendite",
  },
};

export default it;
