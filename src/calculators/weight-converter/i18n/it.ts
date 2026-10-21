import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WeightConverterText } from "../text/en";

const it: CalculatorTranslation<WeightConverterText> = {
  content: {
    title: "Convertitore di peso",
    shortTitle: "Peso",
    summary: "Converti tra milligrammi, grammi, chilogrammi, tonnellate, once, libbre e stone.",
    metaTitle: "Convertitore di peso – kg, lb, oz, g e stone",
    metaDescription:
      "Converti il peso (massa) tra chilogrammi, grammi, milligrammi, tonnellate, libbre, once e stone con la definizione esatta della libbra internazionale.",
    keywords: ["peso", "massa", "kg in libbre", "libbre in kg", "once in grammi", "stone", "conversione peso"],
    intro: [
      "Converti un peso tra unità metriche e imperiali. A rigore si tratta di unità di massa, cioè ciò che indicano le bilance.",
      "La libbra è definita esattamente come 0,45359237 kg, quindi ogni conversione qui è esatta prima dell'arrotondamento per la visualizzazione.",
    ],
    howToUse: [
      "Inserisci il valore.",
      "Scegli le unità di partenza e di arrivo.",
      "Leggi il risultato e la tabella completa.",
    ],
    formulas: [
      {
        title: "Conversione tramite i chilogrammi",
        expression: "risultato = valore × (kg per unità di partenza) ÷ (kg per unità di arrivo)",
        explanation: "Ogni unità è definita come un numero fisso di chilogrammi.",
      },
      {
        title: "Fattori principali",
        expression: "1 lb = 0,45359237 kg\n1 oz = 1/16 lb = 28,349523125 g\n1 st = 14 lb\n1 t = 1.000 kg",
        explanation: "Le once sono once avoirdupois, usate per gli alimenti e il peso corporeo.",
      },
    ],
    examples: [
      { title: "150 libbre in chilogrammi", steps: ["150 × 0,45359237", "≈ 68,04 kg"] },
      { title: "1 chilogrammo in libbre", steps: ["1 ÷ 0,45359237", "≈ 2,2046 lb"] },
    ],
    assumptions: [
      "Le once sono avoirdupois; le once troy (usate per i metalli preziosi) non sono incluse.",
      "Le tonnellate sono tonnellate metriche (1.000 kg), non le short ton statunitensi né le long ton britanniche.",
    ],
    faqs: [
      { question: "Quante libbre ci sono in un chilogrammo?", answer: "Circa 2,2046 libbre." },
      { question: "Quante once ci sono in una libbra?", answer: "Esattamente 16 once avoirdupois." },
      { question: "Quanto vale uno stone?", answer: "14 libbre, cioè circa 6,35 kg." },
    ],
    sourcesUsedFor: ["Definizione esatta in chilogrammi della libbra e delle unità correlate."],
  },
  text: {
    value: "Valore",
    from: "Da",
    to: "A",
    unitNames: {
      mg: "Milligrammi",
      g: "Grammi",
      kg: "Chilogrammi",
      t: "Tonnellate metriche",
      oz: "Once (avoirdupois)",
      lb: "Libbre",
      st: "Stone",
    },
    primary: "{value} {symbol} in {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} in tutte le unità di massa",
    tableUnit: "Unità",
    tableValue: "Valore",
    note: "I risultati sono mostrati con 10 cifre significative.",
  },
};

export default it;
