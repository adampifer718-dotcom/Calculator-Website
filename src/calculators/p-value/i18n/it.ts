import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PValueText } from "../text/en";

const it: CalculatorTranslation<PValueText> = {
  content: {
    title: "Calcolatore del p-value",
    shortTitle: "P-value",
    summary: "Calcola il p-value di un punteggio z o t per un test bilaterale, unilaterale sinistro o unilaterale destro.",
    metaTitle: "Calcolatore del p-value – Da punteggio z o t",
    metaDescription:
      "Calcola il p-value da un punteggio z oppure da un punteggio t con i suoi gradi di libertà, per test d'ipotesi bilaterali o unilaterali.",
    keywords: ["p-value", "valore p", "calcolo p-value", "punteggio z", "test t", "test d'ipotesi", "significatività statistica"],
    intro: [
      "Il p-value misura quanto sarebbe sorprendente il risultato di un test se l'ipotesi nulla fosse vera. Un p-value piccolo indica che i dati sono poco probabili sotto l'ipotesi nulla.",
      "Inserisci la statistica di un test z o t e scegli la direzione della tua ipotesi alternativa.",
    ],
    howToUse: [
      "Scegli punteggio z o punteggio t.",
      "Inserisci la statistica e, per un punteggio t, i gradi di libertà.",
      "Scegli bilaterale, unilaterale sinistro o unilaterale destro.",
      "Confronta il p-value con il tuo livello di significatività, per esempio 0,05.",
    ],
    formulas: [
      { title: "Unilaterale sinistro", expression: "p = P(T ≤ t)", explanation: "La probabilità di un valore pari o inferiore alla statistica." },
      { title: "Unilaterale destro", expression: "p = P(T ≥ t)", explanation: "La probabilità di un valore pari o superiore." },
      { title: "Bilaterale", expression: "p = 2 × P(T ≥ |t|)", explanation: "Tiene conto dei valori estremi in entrambe le direzioni." },
    ],
    examples: [
      { title: "z = 1,96, bilaterale", steps: ["P(Z ≥ 1,96) ≈ 0,025", "p = 2 × 0,025 ≈ 0,05"] },
      { title: "z = −1,645, unilaterale sinistro", steps: ["P(Z ≤ −1,645)", "≈ 0,05"] },
    ],
    assumptions: [
      "Usa la distribuzione normale standard per z e la distribuzione t di Student per t.",
      "La statistica deve provenire da un test di cui sono rispettate le ipotesi.",
      "Il risultato è mostrato con 6 cifre significative; i valori molto piccoli passano alla notazione scientifica.",
    ],
    faqs: [
      {
        question: "Che cos'è un buon p-value?",
        answer: "Non esiste una soglia universale. La più comune è 0,05: risultati così estremi si verificherebbero meno del 5 % delle volte se l'ipotesi nulla fosse vera.",
      },
      {
        question: "Devo usare il punteggio z o il punteggio t?",
        answer: "Usa t quando la deviazione standard della popolazione è ignota e viene stimata dal campione; z quando è nota o il campione è grande.",
      },
      {
        question: "Che differenza c'è tra un test unilaterale e uno bilaterale?",
        answer: "Un test unilaterale cerca un effetto in una sola direzione; un test bilaterale considera entrambe le direzioni.",
      },
    ],
    sourcesUsedFor: ["Definizioni della distribuzione normale e della t di Student, e valori critici usati per verificare i risultati."],
  },
  text: {
    distribution: "Statistica test",
    distributions: { z: "Punteggio z (normale)", t: "Punteggio t (t di Student)" },
    statistic: "Valore della statistica",
    df: "Gradi di libertà",
    tail: "Ipotesi alternativa",
    tails: { two: "Bilaterale (≠)", left: "Unilaterale sinistro (<)", right: "Unilaterale destro (>)" },
    pValue: "P-value",
    sig05: "Significativo con α = 0,05?",
    sig01: "Significativo con α = 0,01?",
    yes05: "Sì (p < 0,05)",
    no05: "No (p ≥ 0,05)",
    yes01: "Sì (p < 0,01)",
    no01: "No (p ≥ 0,01)",
    note: "Il p-value è la probabilità di ottenere un risultato almeno così estremo se l'ipotesi nulla fosse vera. Non è la probabilità che l'ipotesi nulla sia vera.",
  },
};

export default it;
