import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MeanMedianModeText } from "../text/en";

const it: CalculatorTranslation<MeanMedianModeText> = {
  content: {
    title: "Calcolatore di media, mediana e moda",
    shortTitle: "Media, mediana, moda",
    summary: "Trova media, mediana, moda, campo di variazione e somma di un elenco di numeri.",
    metaTitle: "Calcolatore di media, mediana e moda – Valori medi",
    metaDescription:
      "Calcola la media aritmetica, la mediana, la moda, il campo di variazione e la somma di un insieme di dati. Incolla numeri separati da spazi o a capo.",
    keywords: ["media", "mediana", "moda", "media aritmetica", "campo di variazione", "insieme di dati", "statistica", "tendenza centrale"],
    intro: [
      "Media, mediana e moda sono tre modi per descrivere il centro di un insieme di dati. Possono differire molto quando i dati sono asimmetrici o contengono valori anomali.",
      "Incolla o digita i tuoi numeri per vederle tutte e tre, insieme al campo di variazione e alla somma.",
    ],
    howToUse: [
      "Inserisci i tuoi numeri, separati da punto e virgola, spazi o a capo.",
      "Leggi media, mediana, moda, campo di variazione e somma.",
    ],
    formulas: [
      { title: "Media", expression: "media = somma dei valori ÷ numero di valori", explanation: "La media aritmetica." },
      { title: "Mediana", expression: "Il valore centrale dopo l'ordinamento; con un numero pari di valori, la media dei due valori centrali", explanation: "Poco sensibile ai valori anomali." },
      { title: "Moda", expression: "Il valore o i valori che compaiono più spesso", explanation: "Un insieme di dati può avere più mode o nessuna." },
    ],
    examples: [
      { title: "2, 4, 4, 5, 7, 9", steps: ["Somma = 31; media = 31 ÷ 6 ≈ 5,17", "Mediana = (4 + 5) ÷ 2 = 4,5; moda = 4"] },
      { title: "10, 20, 30", steps: ["Media = 60 ÷ 3 = 20", "Mediana = 20; nessuna moda"] },
    ],
    assumptions: ["Accetta fino a 10.000 numeri.", "I risultati sono mostrati con 10 cifre significative."],
    faqs: [
      { question: "Quando conviene usare la mediana invece della media?", answer: "Quando i dati sono asimmetrici o hanno valori anomali, come redditi o prezzi delle case; la mediana risente meno dei valori estremi." },
      { question: "Può esserci più di una moda?", answer: "Sì. Se più valori sono a pari merito con la frequenza più alta, sono tutti mode." },
      { question: "E se nessun numero si ripete?", answer: "Allora non c'è moda." },
    ],
    sourcesUsedFor: ["Definizioni di media, mediana e moda."],
  },
  text: {
    data: "Insieme di dati",
    dataHelp: "Separa i valori con punto e virgola, spazi o a capo (ad esempio 1,5; 2,25; 3). Usa la virgola come separatore decimale; anche una virgola seguita da uno spazio separa i valori.",
    errors: {
      empty: "Inserisci almeno un numero.",
      tooMany: "Inserisci al massimo {max} numeri.",
      notNumber: "«{token}» non è un numero. Usa la virgola decimale e separa i valori con punto e virgola, spazi o a capo.",
      tooLarge: "«{token}» è troppo grande.",
    },
    mean: "Media (aritmetica)",
    caption: "{count} valori.",
    median: "Mediana",
    mode: "Moda",
    modes: "Mode",
    noMode: "Nessuna moda (tutti i valori compaiono una sola volta)",
    range: "Campo di variazione",
    sum: "Somma",
  },
};

export default it;
