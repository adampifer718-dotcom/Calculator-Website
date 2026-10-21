import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OhmsLawText } from "../text/en";

const it: CalculatorTranslation<OhmsLawText> = {
  content: {
    title: "Calcolatore della legge di Ohm",
    shortTitle: "Legge di Ohm",
    summary: "Calcola tensione, corrente, resistenza e potenza a partire da due valori qualsiasi tra V, I e R.",
    metaTitle: "Calcolatore legge di Ohm – Tensione, corrente, resistenza",
    metaDescription:
      "Usa la legge di Ohm per calcolare tensione, corrente o resistenza a partire dagli altri due valori, oltre alla potenza dissipata, con formule ed esempi.",
    keywords: ["legge di ohm", "calcolo resistenza", "tensione", "corrente elettrica", "potenza elettrica", "volt ampere ohm"],
    intro: [
      "La legge di Ohm lega la tensione ai capi di un resistore, la corrente che lo attraversa e la sua resistenza: V = I × R.",
      "Inserisci due valori qualsiasi per ottenere il terzo, insieme alla potenza dissipata dal componente.",
    ],
    howToUse: [
      "Scegli quali due valori conosci.",
      "Inseriscili in volt, ampere oppure ohm.",
      "Leggi il valore mancante e la potenza in watt.",
    ],
    formulas: [
      { title: "Legge di Ohm", expression: "V = I × R\nI = V ÷ R\nR = V ÷ I", explanation: "V in volt, I in ampere, R in ohm." },
      { title: "Potenza", expression: "P = V × I = I² × R = V² ÷ R", explanation: "Potenza in watt." },
    ],
    examples: [
      { title: "12 V ai capi di 4 Ω", steps: ["I = 12 ÷ 4 = 3 A", "P = 12 × 3 = 36 W"] },
      { title: "0,5 A attraverso 220 Ω", steps: ["V = 0,5 × 220", "= 110 V"] },
    ],
    assumptions: [
      "Vale per componenti ohmici, la cui resistenza non cambia con la corrente.",
      "Nei circuiti in corrente alternata con reattanza (condensatori, induttori) usa l'impedenza.",
      "Lavorare su circuiti alla tensione di rete è pericoloso: rispetta le norme elettriche locali e affidati a un elettricista qualificato.",
    ],
    faqs: [
      { question: "Che cosa afferma la legge di Ohm?", answer: "La corrente che attraversa un conduttore è proporzionale alla tensione ai suoi capi: V = I × R." },
      { question: "Come calcolo la potenza da corrente e resistenza?", answer: "P = I² × R. Una corrente di 2 A attraverso 10 Ω dissipa 40 W." },
      {
        question: "La legge di Ohm vale per i LED?",
        answer: "Non direttamente. I LED non sono lineari: usa la loro tensione diretta e calcola una resistenza in serie.",
      },
    ],
    sourcesUsedFor: ["La legge di Ohm e i suoi limiti.", "Formule della potenza P = IV = I²R = V²/R."],
  },
  text: {
    known: "Conosco",
    knownOptions: { VR: "Tensione e resistenza", VI: "Tensione e corrente", IR: "Corrente e resistenza" },
    voltage: "Tensione (V)",
    current: "Corrente (I)",
    resistance: "Resistenza (R)",
    currentOut: "Corrente (I = V ÷ R)",
    resistanceOut: "Resistenza (R = V ÷ I)",
    voltageOut: "Tensione (V = I × R)",
    power: "Potenza (P = V × I)",
    voltageShort: "Tensione",
    currentShort: "Corrente",
    resistanceShort: "Resistenza",
    note: "Vale per componenti ohmici (lineari) e circuiti in corrente continua, oppure per i valori efficaci con carichi in corrente alternata puramente resistivi.",
  },
};

export default it;
