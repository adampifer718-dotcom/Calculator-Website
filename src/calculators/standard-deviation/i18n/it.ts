import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { StandardDeviationText } from "../text/en";

const it: CalculatorTranslation<StandardDeviationText> = {
  content: {
    title: "Calcolatore di deviazione standard",
    shortTitle: "Deviazione standard",
    summary: "Calcola la deviazione standard campionaria o della popolazione, la varianza e l'errore standard di un insieme di dati.",
    metaTitle: "Calcolatore di deviazione standard – Campione e popolazione",
    metaDescription:
      "Calcola la deviazione standard campionaria o della popolazione, la varianza, la media e l'errore standard della media da un elenco di numeri.",
    keywords: [
      "deviazione standard",
      "varianza",
      "deviazione standard campionaria",
      "deviazione standard della popolazione",
      "dispersione",
      "statistica",
      "errore standard",
    ],
    intro: [
      "La deviazione standard misura quanto i valori sono dispersi attorno alla media. Un valore piccolo indica dati raccolti vicino alla media; uno grande indica dati molto sparsi.",
      "Scegli campione quando i tuoi dati sono un sottoinsieme di un gruppo più ampio, che è il caso più comune.",
    ],
    howToUse: [
      "Inserisci i numeri separati da punti e virgola, spazi o a capo.",
      "Scegli campione o popolazione.",
      "Leggi la deviazione standard, la varianza, la media e l'errore standard.",
    ],
    formulas: [
      {
        title: "Deviazione standard campionaria",
        expression: "s = √(Σ(x − x̄)² ÷ (n − 1))",
        explanation: "Dividere per n − 1 (correzione di Bessel) corregge la distorsione nella stima della dispersione a partire da un campione.",
      },
      { title: "Deviazione standard della popolazione", expression: "σ = √(Σ(x − μ)² ÷ n)", explanation: "Usala quando hai tutti i membri del gruppo." },
      { title: "Errore standard della media", expression: "SE = s ÷ √n", explanation: "Indica con quanta precisione la media campionaria stima la media della popolazione." },
    ],
    examples: [
      { title: "Popolazione: 2, 4, 4, 4, 5, 5, 7, 9", steps: ["Media = 5; la somma degli scarti al quadrato è 32", "σ = √(32 ÷ 8) = 2"] },
      { title: "Campione: 2, 4, 4, 4, 5, 5, 7, 9", steps: ["La somma degli scarti al quadrato è 32", "s = √(32 ÷ 7) ≈ 2,138"] },
    ],
    assumptions: [
      "Accetta fino a 10.000 numeri. Un campione richiede almeno due valori.",
      "Usa un calcolo in due passaggi numericamente stabile.",
      "I risultati sono mostrati con 10 cifre significative.",
    ],
    faqs: [
      {
        question: "Devo usare la deviazione standard campionaria o quella della popolazione?",
        answer: "Usa quella campionaria (n − 1) quando i dati sono un campione di un gruppo più ampio, e quella della popolazione (n) solo quando hai l'intero gruppo.",
      },
      { question: "Che cos'è la varianza?", answer: "Il quadrato della deviazione standard, espresso in unità al quadrato." },
      { question: "Che cosa significa una deviazione standard pari a 0?", answer: "Che tutti i valori sono identici." },
    ],
    sourcesUsedFor: ["Formule della deviazione standard campionaria e della popolazione."],
  },
  text: {
    data: "Insieme di dati",
    dataHelp: "Separa i numeri con punti e virgola, spazi o a capo. Usa il punto per i decimali.",
    errors: {
      empty: "Inserisci almeno un numero.",
      tooMany: "Inserisci al massimo {max} numeri.",
      notNumber: "«{token}» non è un numero. Separa i valori con punti e virgola, spazi o a capo.",
      tooLarge: "«{token}» è troppo grande.",
    },
    kind: "I dati sono",
    kinds: { sample: "Un campione (dividi per n − 1)", population: "L'intera popolazione (dividi per n)" },
    needTwo: "Un campione richiede almeno due valori.",
    sampleSd: "Deviazione standard campionaria (s)",
    populationSd: "Deviazione standard della popolazione (σ)",
    sampleVariance: "Varianza campionaria (s²)",
    populationVariance: "Varianza della popolazione (σ²)",
    mean: "Media",
    count: "Numero di valori (n)",
    standardError: "Errore standard della media",
  },
};

export default it;
