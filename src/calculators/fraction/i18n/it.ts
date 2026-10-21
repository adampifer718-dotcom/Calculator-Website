import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FractionText } from "../text/en";

const it: CalculatorTranslation<FractionText> = {
  content: {
    title: "Calcolatore di frazioni",
    shortTitle: "Frazioni",
    summary: "Somma, sottrai, moltiplica o dividi frazioni e numeri misti, con il risultato ridotto ai minimi termini e in forma decimale.",
    metaTitle: "Calcolatore di frazioni – Somma, sottrai, moltiplica, dividi",
    metaDescription:
      "Somma, sottrai, moltiplica e dividi frazioni, numeri misti e decimali. Ottieni il risultato esatto ai minimi termini, come numero misto e come decimale.",
    keywords: ["frazione", "frazioni", "numeri misti", "semplificare frazioni", "sommare frazioni", "dividere frazioni", "minimi termini"],
    intro: [
      "Inserisci due numeri come frazioni (3/4), numeri misti (1 1/2), numeri interi o decimali, scegli un'operazione e ottieni il risultato esatto.",
      "Il calcolatore lavora con numeratori e denominatori interi esatti, quindi il risultato non ha errori di arrotondamento. Viene ridotto ai minimi termini e mostrato anche come numero misto e come decimale.",
    ],
    howToUse: [
      "Inserisci il primo numero, ad esempio 1/2 o 2 1/4.",
      "Scegli tra somma, sottrazione, moltiplicazione o divisione.",
      "Inserisci il secondo numero.",
      "Leggi la frazione semplificata, il numero misto e il decimale.",
    ],
    formulas: [
      { title: "Somma e sottrazione", expression: "a/b ± c/d = (a × d ± c × b) ÷ (b × d)", explanation: "Riscrivi entrambe le frazioni con un denominatore comune, poi somma o sottrai i numeratori." },
      { title: "Moltiplicazione", expression: "a/b × c/d = (a × c) ÷ (b × d)", explanation: "Moltiplica tra loro i numeratori e i denominatori." },
      { title: "Divisione", expression: "a/b ÷ c/d = (a × d) ÷ (b × c)", explanation: "Moltiplica per il reciproco della seconda frazione. La divisione per zero non è definita." },
      { title: "Minimi termini", expression: "n/d = (n ÷ g) ÷ (d ÷ g), g = MCD(n, d)", explanation: "Dividi numeratore e denominatore per il loro massimo comun divisore." },
    ],
    examples: [
      { title: "1/2 + 1/3", steps: ["1/2 + 1/3 = (1 × 3 + 1 × 2) ÷ (2 × 3)", "= 5/6 ≈ 0,8333"] },
      { title: "2 1/4 × 4/3", steps: ["2 1/4 = 9/4", "9/4 × 4/3 = 36/12 = 3"] },
    ],
    assumptions: [
      "Numeri interi, frazioni, numeri misti e decimali finiti vengono convertiti in frazioni esatte; 0,75 diventa 3/4.",
      "Numeratori e denominatori sono limitati a 1.000.000.000.000 per mantenere leggibili i risultati.",
      "Un numero misto negativo come −1 1/2 significa −(1 + 1/2).",
    ],
    faqs: [
      { question: "Come inserisco un numero misto?", answer: "Scrivi la parte intera, uno spazio e la frazione, ad esempio 2 1/4. Per un valore negativo, metti prima il segno meno: -2 1/4." },
      { question: "Come semplifico una frazione?", answer: "Inseriscila come primo numero, scegli la moltiplicazione e inserisci 1 come secondo numero. Il risultato viene mostrato ai minimi termini." },
      { question: "Perché il decimale è diverso dalla frazione?", answer: "Alcune frazioni, come 1/3, hanno decimali che non finiscono mai. La frazione è esatta; il decimale è arrotondato per la visualizzazione." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    a: "Primo numero",
    aHelp: "Una frazione (3/4), un numero misto (1 1/2), un numero intero o un decimale.",
    b: "Secondo numero",
    bHelp: "Gli stessi formati del primo numero.",
    operation: "Operazione",
    operations: { add: "Somma (+)", subtract: "Sottrazione (−)", multiply: "Moltiplicazione (×)", divide: "Divisione (÷)" },
    errors: {
      invalid: "Inserisci una frazione come 3/4, un numero misto come 1 1/2, un numero intero o un decimale.",
      zeroDenominator: "Un denominatore non può essere 0.",
      tooLarge: "Usa numeratori e denominatori non superiori a {max}.",
      divideByZero: "Non puoi dividere per zero.",
    },
    result: "Risultato ai minimi termini",
    caption: "{a} {op} {b} = {result}",
    mixed: "Come numero misto",
    decimal: "Come decimale",
    note: "Le frazioni vengono ridotte ai minimi termini dividendo per il massimo comun divisore. Il decimale è arrotondato solo per la visualizzazione.",
  },
};

export default it;
