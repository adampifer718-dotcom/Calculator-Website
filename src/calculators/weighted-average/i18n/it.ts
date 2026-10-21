import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WeightedAverageText } from "../text/en";

const it: CalculatorTranslation<WeightedAverageText> = {
  content: {
    title: "Calcolatore della media ponderata",
    shortTitle: "Media ponderata",
    summary: "Calcola la media di un elenco di valori in cui alcuni contano più di altri e confrontala con la media semplice.",
    metaTitle: "Calcolatore della media ponderata – Media pesata di un elenco",
    metaDescription:
      "Calcola la media ponderata di un massimo di 100 valori con i rispettivi pesi, con la somma dei pesi e la media semplice non ponderata per confronto.",
    keywords: ["media ponderata", "media pesata", "voto ponderato", "media con pesi", "voto finale del corso", "prezzo medio", "matr.somma.prodotto"],
    intro: [
      "Una media ponderata è una media in cui ogni valore conta in base al suo peso. Un esame finale che vale metà del voto incide sul risultato più di un quiz che ne vale un decimo, e un acquisto grande influisce sul prezzo medio più di uno piccolo.",
      "Inserisci i valori e un elenco corrispondente di pesi. Il calcolatore fornisce la media ponderata e, per confronto, la media ordinaria che tratta tutti i valori allo stesso modo.",
    ],
    howToUse: [
      "Digita i valori nella prima casella, separati da virgole, spazi o a capo.",
      "Digita i pesi nella seconda casella nello stesso ordine, uno per ogni valore.",
      "I pesi possono essere percentuali, crediti, quantità o qualsiasi altro numero non negativo. Non devono per forza sommare a 100 o a 1.",
      "Leggi la media ponderata. Se si discosta molto dalla media non ponderata, i valori con peso maggiore la stanno attirando verso di sé.",
    ],
    formulas: [
      {
        title: "Media ponderata",
        expression: "x̄w = Σ(wᵢ·xᵢ) ÷ Σwᵢ",
        explanation: "Moltiplica ogni valore per il suo peso, somma i prodotti e dividi per il peso totale.",
      },
      {
        title: "Media non ponderata",
        expression: "x̄ = Σxᵢ ÷ n",
        explanation: "La media ordinaria, uguale alla media ponderata quando tutti i pesi sono uguali.",
      },
    ],
    examples: [
      {
        title: "Voto di un corso con componenti ponderate",
        steps: [
          "Prodotti: 82 × 20 = 1.640; 90 × 50 = 4.500; 75 × 30 = 2.250",
          "Somma dei prodotti = 8.390 e somma dei pesi = 100",
          "Media ponderata = 8.390 ÷ 100 = 83,9, mentre la media semplice è circa 82,33",
        ],
      },
      {
        title: "Punti voto ponderati per ore di credito",
        steps: ["Prodotti: 14,8 + 9 + 12 + 4,6 = 40,4", "Somma dei pesi = 4 + 3 + 3 + 2 = 12 crediti", "Media ponderata = 40,4 ÷ 12 ≈ 3,3667"],
      },
      {
        title: "Prezzo medio pagato al chilogrammo",
        steps: [
          "Prezzi al kg ponderati per i chilogrammi acquistati: 12,5 × 40 + 14 × 25 + 11,75 × 35 = 500 + 350 + 411,25 = 1.261,25",
          "Quantità totale = 100 kg",
          "Prezzo medio = 1.261,25 ÷ 100 = 12,6125 al kg",
        ],
      },
    ],
    assumptions: [
      "Valori e pesi sono abbinati per posizione: il primo peso va con il primo valore, e così via.",
      "I pesi devono essere zero o positivi e almeno uno deve essere maggiore di zero. Un peso pari a 0 esclude quel valore dalla media ponderata ma non dalla media non ponderata.",
      "I risultati sono mostrati con 10 cifre significative. Sono accettate fino a 100 coppie.",
    ],
    faqs: [
      {
        question: "I pesi devono sommare al 100%?",
        answer: "No. La formula divide per la somma dei pesi, quindi 20, 50 e 30 danno lo stesso risultato di 0,2, 0,5 e 0,3, oppure di 2, 5 e 3.",
      },
      {
        question: "Quando la media ponderata coincide con la media normale?",
        answer: "Quando tutti i pesi sono uguali. In quel caso ogni valore ha la stessa influenza e la formula si riduce alla somma dei valori divisa per il loro numero.",
      },
      {
        question: "Come trovo il voto che mi serve all'esame finale?",
        answer: "Scrivi la media ponderata con il voto dell'esame finale come incognita e risolvi. Per esempio, con 80 sulle prove che valgono il 60% e un obiettivo di 85, serve 0,6 × 80 + 0,4 × s = 85, quindi s = 92,5.",
      },
    ],
    sourcesUsedFor: [
      "Definizione di media ponderata: ogni valore moltiplicato per il suo peso, sommato e diviso per la somma dei pesi.",
    ],
  },
  text: {
    values: "Valori",
    valuesHelp: "Un valore per elemento, separati da virgole, spazi o a capo.",
    weights: "Pesi",
    weightsHelp: "Un peso per ogni valore, nello stesso ordine. Vanno bene percentuali, crediti o quantità; non devono per forza sommare a 100.",
    errors: {
      empty: "Inserisci almeno un numero.",
      tooMany: "Inserisci al massimo {max} numeri.",
      notNumber: "«{token}» non è un numero. Separa i valori con virgole, spazi o a capo.",
      tooLarge: "«{token}» è troppo grande.",
    },
    maxCount: "Inserisci al massimo {max} numeri.",
    tooBig: "{value} è troppo grande. Ogni numero può valere al massimo {max} in valore assoluto.",
    negativeWeight: "I pesi non possono essere negativi ({value}).",
    zeroTotal: "La somma dei pesi è 0. Almeno un peso deve essere maggiore di 0.",
    countMismatch: "Inserisci un peso per ogni valore: hai {values} e {weights}.",
    valueCount: { zero: "{n} valori", one: "{n} valore", two: "{n} valori", few: "{n} valori", many: "{n} valori", other: "{n} valori" },
    weightCount: { zero: "{n} pesi", one: "{n} peso", two: "{n} pesi", few: "{n} pesi", many: "{n} pesi", other: "{n} pesi" },
    weightedMean: "Media ponderata",
    caption: "Calcolata su {count}.",
    sumOfWeights: "Somma dei pesi",
    sumOfProducts: "Somma di valore × peso",
    unweightedMean: "Media non ponderata (per confronto)",
  },
};

export default it;
