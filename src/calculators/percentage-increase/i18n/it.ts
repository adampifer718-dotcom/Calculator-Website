import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentageIncreaseText } from "../text/en";

const it: CalculatorTranslation<PercentageIncreaseText> = {
  content: {
    title: "Calcolatore dell'aumento percentuale",
    shortTitle: "Aumento percentuale",
    summary: "Calcola l'aumento o la diminuzione percentuale tra un valore iniziale e un nuovo valore.",
    metaTitle: "Calcolatore aumento percentuale – Variazione in percentuale",
    metaDescription:
      "Calcola l'aumento o la diminuzione percentuale tra due numeri. Vedi la variazione percentuale, la variazione assoluta e la formula, con esempi svolti.",
    keywords: ["variazione percentuale", "aumento percentuale", "diminuzione percentuale", "calcolo aumento in percentuale", "percentuale di crescita", "differenza percentuale"],
    intro: [
      "Inserisci un valore iniziale e un nuovo valore per vedere di quanto è cambiato in percentuale. Un risultato positivo è un aumento, uno negativo una diminuzione.",
      "Si usa spesso per aumenti di stipendio, variazioni di prezzo, crescita delle vendite e miglioramenti nei voti.",
    ],
    howToUse: [
      "Inserisci il valore iniziale (di partenza).",
      "Inserisci il nuovo valore.",
      "Leggi la variazione percentuale, la variazione assoluta e il nuovo valore come percentuale di quello iniziale.",
    ],
    formulas: [
      {
        title: "Variazione percentuale",
        expression: "Variazione % = (nuovo valore − valore iniziale) ÷ |valore iniziale| × 100",
        explanation:
          "La variazione si misura rispetto all'entità del valore iniziale. Usare il valore assoluto mantiene il segno significativo quando il valore iniziale è negativo.",
      },
      {
        title: "Variazione assoluta",
        expression: "Variazione = nuovo valore − valore iniziale",
        explanation: "La differenza, nelle stesse unità dei dati inseriti.",
      },
    ],
    examples: [
      {
        title: "Da 80 a 100",
        steps: ["Variazione = 100 − 80 = 20", "20 ÷ 80 × 100 = aumento del 25 %"],
      },
      {
        title: "Da 250 a 200",
        steps: ["Variazione = 200 − 250 = −50", "−50 ÷ 250 × 100 = −20 %, una diminuzione del 20 %"],
      },
      {
        title: "Da −50 a −25",
        steps: ["Variazione = −25 − (−50) = 25", "25 ÷ |−50| × 100 = aumento del 50 %"],
      },
    ],
    assumptions: [
      "Il valore iniziale non può essere 0, perché una variazione a partire da zero non ha una percentuale definita.",
      "Quando il valore iniziale è negativo, la variazione si divide per il suo valore assoluto.",
      "I risultati vengono arrotondati per la visualizzazione. I calcoli usano la precisione completa.",
    ],
    faqs: [
      {
        question: "Come si calcola un aumento percentuale?",
        answer: "Sottrai il valore iniziale dal nuovo valore, dividi il risultato per il valore iniziale e moltiplica per 100. Da 50 a 65 si ha (65 − 50) ÷ 50 × 100 = 30 %.",
      },
      {
        question: "Come si calcola una diminuzione percentuale?",
        answer: "Con la stessa formula. Un risultato negativo è una diminuzione. Da 120 a 90 si ha (90 − 120) ÷ 120 × 100 = −25 %.",
      },
      {
        question: "Un aumento del 50 % seguito da un calo del 50 % riporta al valore di partenza?",
        answer: "No. 100 aumentato del 50 % diventa 150, e 150 ridotto del 50 % diventa 75. Ogni variazione si misura da un valore di partenza diverso.",
      },
      {
        question: "Cosa succede se il valore iniziale è zero?",
        answer: "La variazione percentuale non è definita perché non si può dividere per zero. Indica invece la variazione assoluta.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    original: "Valore iniziale",
    originalHelp: "Il valore di partenza. Non può essere 0.",
    newValue: "Nuovo valore",
    newValueHelp: "Il valore dopo la variazione.",
    originalZero: "Il valore iniziale non può essere 0. Una variazione a partire da 0 non ha percentuale.",
    primary: "Variazione percentuale",
    noChange: "I valori sono uguali, quindi non c'è variazione.",
    increase: "Un aumento da {from} a {to}.",
    decrease: "Una diminuzione da {from} a {to}.",
    absolute: "Variazione assoluta",
    ratio: "Nuovo valore come % di quello iniziale",
    formula: "Formula: ({to} − {from}) ÷ |{from}| × 100.",
    negativeNote: "Il valore iniziale è negativo, quindi la variazione si misura rispetto al suo valore assoluto.",
  },
};

export default it;
