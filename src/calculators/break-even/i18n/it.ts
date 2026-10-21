import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BreakEvenText } from "../text/en";

const it: CalculatorTranslation<BreakEvenText> = {
  content: {
    title: "Calcolatore del punto di pareggio",
    shortTitle: "Punto di pareggio",
    summary: "Scopri quante unità devi vendere per coprire i costi fissi e qual è il fatturato di pareggio.",
    metaTitle: "Calcolatore del punto di pareggio – Unità e fatturato",
    metaDescription:
      "Calcola il punto di pareggio in unità e fatturato a partire da costi fissi, prezzo unitario e costo variabile unitario, con il margine di contribuzione.",
    keywords: ["punto di pareggio", "break even point", "margine di contribuzione", "costi fissi", "costi variabili", "analisi costi volumi risultati"],
    intro: [
      "Il punto di pareggio è il livello in cui i ricavi totali eguagliano i costi totali, per cui non ci sono né utili né perdite.",
      "Ogni unità venduta contribuisce alla copertura dei costi fissi con il suo prezzo meno il suo costo variabile. Una volta coperti i costi fissi, il resto delle vendite è utile.",
    ],
    howToUse: [
      "Inserisci i costi fissi del periodo.",
      "Inserisci il prezzo di vendita per unità.",
      "Inserisci il costo variabile per unità.",
      "Leggi le unità e il fatturato necessari per raggiungere il pareggio.",
    ],
    formulas: [
      { title: "Unità di pareggio", expression: "unità = costi fissi ÷ (prezzo − costo variabile)", explanation: "Il denominatore è il margine di contribuzione unitario." },
      { title: "Fatturato di pareggio", expression: "fatturato = unità × prezzo", explanation: "Equivale a costi fissi ÷ rapporto di margine di contribuzione." },
    ],
    examples: [
      {
        title: "$10.000 di costi fissi, prezzo di $50, costo variabile di $30",
        steps: ["Contribuzione = $50 − $30 = $20", "Unità = 10.000 ÷ 20 = 500"],
      },
      {
        title: "$2500 di costi fissi, prezzo di $12, costo variabile di $4,50",
        steps: ["Contribuzione = $7,50", "Unità = 2500 ÷ 7,5 ≈ 333,33, cioè 334 unità"],
      },
    ],
    assumptions: [
      "Il prezzo e il costo variabile per unità restano costanti a qualsiasi volume.",
      "I costi fissi si riferiscono allo stesso periodo delle vendite che stai pianificando.",
      "Imposte e oneri finanziari non sono inclusi, a meno che tu non li aggiunga ai costi fissi.",
    ],
    faqs: [
      {
        question: "Che cos'è il margine di contribuzione?",
        answer: "Il prezzo meno il costo variabile per unità: ciò che ogni vendita apporta alla copertura dei costi fissi e all'utile.",
      },
      { question: "E se il costo variabile supera il prezzo?", answer: "Ogni vendita fa perdere denaro, quindi a quel prezzo non raggiungerai mai il pareggio." },
      {
        question: "Come calcolo le unità per un utile obiettivo?",
        answer: "Aggiungi l'utile obiettivo ai costi fissi e dividi per il margine di contribuzione unitario.",
      },
    ],
    sourcesUsedFor: ["Analisi costi-volumi-risultati e formule del punto di pareggio."],
  },
  text: {
    fixed: "Costi fissi",
    fixedHelp: "Costi che non variano con il volume, come affitto e stipendi.",
    price: "Prezzo per unità",
    variable: "Costo variabile per unità",
    variableHelp: "Materiali, imballaggio e altri costi per unità.",
    variableTooHigh: "Il costo variabile deve essere inferiore al prezzo, altrimenti non raggiungerai mai il pareggio.",
    units: "Volume di pareggio",
    unitsSuffix: "unità",
    caption: "Arrotonda per eccesso a {count} unità intere.",
    revenue: "Fatturato di pareggio",
    contribution: "Margine di contribuzione unitario",
    ratio: "Rapporto di margine di contribuzione",
  },
};

export default it;
