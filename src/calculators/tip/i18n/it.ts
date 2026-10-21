import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TipText } from "../text/en";

const it: CalculatorTranslation<TipText> = {
  content: {
    title: "Calcolatore della mancia",
    shortTitle: "Mancia",
    summary: "Calcola la mancia, il totale del conto e quanto paga ciascuno quando il conto si divide.",
    metaTitle: "Calcolatore della mancia – Importo e divisione del conto",
    metaDescription:
      "Calcola la mancia per qualsiasi conto e percentuale, il totale con mancia e quanto paga ciascuno se il conto viene diviso in parti uguali.",
    keywords: ["mancia", "calcolare la mancia", "dividere il conto", "ristorante", "conto alla romana", "coperto e servizio"],
    intro: [
      "Inserisci il conto e una percentuale di mancia per vedere la mancia e il totale. Aggiungi il numero di persone per dividerlo in parti uguali.",
      "Le usanze cambiano da paese a paese e a seconda del servizio, quindi scegli la percentuale più adatta.",
    ],
    howToUse: [
      "Inserisci l'importo del conto.",
      "Inserisci la percentuale di mancia.",
      "Indica quante persone dividono il conto.",
      "Leggi la mancia, il totale e l'importo a persona.",
    ],
    formulas: [
      { title: "Mancia", expression: "Mancia = conto × % di mancia ÷ 100", explanation: "C'è chi calcola la mancia sull'importo al netto delle imposte; inserisci quello che preferisci." },
      { title: "Divisione", expression: "A persona = (conto + mancia) ÷ persone", explanation: "Una divisione in parti uguali." },
    ],
    examples: [
      { title: "Conto di $80, mancia del 18%, 4 persone", steps: ["Mancia = $80 × 0,18 = $14,40", "Totale = $94,40; ciascuno paga $23,60"] },
      { title: "Conto di $45, mancia del 20%, 1 persona", steps: ["Mancia = $45 × 0,20 = $9", "Totale = $54"] },
    ],
    assumptions: [
      "Il conto viene diviso in parti uguali; gli importi sono arrotondati al centesimo solo nella visualizzazione.",
      "La scelta della valuta cambia solo la formattazione.",
    ],
    faqs: [
      {
        question: "Quanto dovrei lasciare di mancia?",
        answer: "Dipende dalle usanze locali e dal servizio. Negli Stati Uniti al ristorante è comune il 15–20%; altrove la mancia può essere più bassa o già inclusa.",
      },
      { question: "La mancia si calcola prima o dopo le imposte?", answer: "Sono diffuse entrambe le abitudini. Inserisci come conto l'importo al netto o al lordo delle imposte, come preferisci." },
      { question: "Come divido un conto in modo non uniforme?", answer: "Calcola separatamente la quota del conto di ciascuno, poi applica la percentuale di mancia a ogni quota." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    bill: "Importo del conto",
    percent: "Percentuale di mancia",
    people: "Dividi tra",
    tip: "Mancia",
    total: "Totale con mancia",
    each: "Ognuno paga",
    tipEach: "Mancia a persona",
  },
};

export default it;
