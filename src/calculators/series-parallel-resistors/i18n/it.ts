import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ResistorsText } from "../text/en";

const it: CalculatorTranslation<ResistorsText> = {
  content: {
    title: "Calcolatore di resistenze in serie e in parallelo",
    shortTitle: "Resistenze in serie/parallelo",
    summary: "Trova la resistenza totale di un massimo di 50 resistori collegati in serie o in parallelo, oltre alla conduttanza in parallelo.",
    metaTitle: "Resistenze in serie e in parallelo – Totale in Ω",
    metaDescription:
      "Somma fino a 50 resistori in serie o in parallelo per ottenere la resistenza equivalente in Ω, kΩ o MΩ e la conduttanza totale in siemens.",
    keywords: [
      "calcolatore resistenze",
      "resistenze in serie",
      "resistenze in parallelo",
      "resistenza equivalente",
      "resistenza totale",
      "conduttanza",
      "siemens",
      "ohm",
    ],
    intro: [
      "Quando i resistori sono collegati uno dopo l'altro, in serie, la stessa corrente attraversa ciascuno di essi e le resistenze si sommano semplicemente. Quando sono collegati affiancati, in parallelo, ognuno riceve la stessa tensione e la corrente si ripartisce tra loro, quindi l'insieme oppone meno resistenza di qualsiasi resistore preso da solo.",
      "Inserisci un elenco di valori per ottenere entrambi i totali in un colpo solo. Scegli il collegamento che stai realizzando per renderlo il risultato principale e indica l'unità in cui hai digitato i valori. I totali sono mostrati nell'unità più leggibile e anche in ohm.",
    ],
    howToUse: [
      "Scegli se hai digitato i valori in ohm, kiloohm o megaohm.",
      "Scegli serie o parallelo per stabilire quale totale è il risultato principale.",
      "Inserisci da 1 a 50 resistenze, separate da virgole, spazi o a capo.",
      "Leggi la resistenza totale, il totale dell'altro collegamento e la conduttanza in parallelo in siemens.",
    ],
    formulas: [
      { title: "Serie", expression: "R_totale = R₁ + R₂ + … + Rₙ", explanation: "La stessa corrente attraversa ogni resistore, quindi le cadute di tensione si sommano." },
      {
        title: "Parallelo",
        expression: "1 ÷ R_totale = 1 ÷ R₁ + 1 ÷ R₂ + … + 1 ÷ Rₙ",
        explanation: "Ai capi di ogni resistore c'è l'intera tensione, quindi le correnti (e le conduttanze) si sommano.",
      },
      { title: "Conduttanza", expression: "G = 1 ÷ R, in siemens (S)", explanation: "La conduttanza totale in parallelo è la somma delle singole conduttanze." },
    ],
    examples: [
      {
        title: "220 Ω, 470 Ω e 1 kΩ in serie",
        steps: ["R_totale = 220 + 470 + 1.000 = 1.690 Ω", "Mostrato come 1,69 kΩ", "In parallelo gli stessi tre darebbero circa 130,325 Ω"],
      },
      {
        title: "4,7 kΩ, 10 kΩ e 22 kΩ in parallelo",
        steps: [
          "G = 1/4.700 + 1/10.000 + 1/22.000 ≈ 0,000358221 S",
          "R_totale = 1 ÷ 0,000358221 ≈ 2.791,58 Ω",
          "Mostrato come 2,79158 kΩ, meno del resistore più piccolo (4,7 kΩ)",
        ],
      },
      {
        title: "Tre resistori uguali da 330 Ω in parallelo",
        steps: ["Resistori uguali in parallelo: R_totale = R ÷ n", "330 ÷ 3 = 110 Ω", "In serie darebbero 990 Ω"],
      },
    ],
    assumptions: [
      "I resistori sono ideali: i loro valori non cambiano con temperatura, corrente o frequenza e i fili di collegamento non hanno resistenza.",
      "Tutti i resistori formano una sola catena in serie o un solo gruppo in parallelo. Per le reti miste, combina un gruppo alla volta e inserisci i totali parziali.",
      "I resistori reali hanno una tolleranza (spesso ±1% o ±5%), quindi un totale misurato può differire da quello calcolato.",
      "I risultati sono mostrati con 6 cifre significative nell'unità leggibile e con 12 cifre significative in ohm.",
    ],
    faqs: [
      {
        question: "Perché la resistenza in parallelo è minore di ogni singolo resistore?",
        answer: "Ogni resistore aggiunto in parallelo offre alla corrente un nuovo percorso, aumentando la conduttanza totale. La resistenza totale, che ne è il reciproco, scende quindi sotto il valore più piccolo. Due resistori da 1 kΩ in parallelo danno 500 Ω.",
      },
      {
        question: "Esiste una scorciatoia per due resistori in parallelo?",
        answer: "Sì: R_totale = (R₁ × R₂) ÷ (R₁ + R₂), il prodotto diviso la somma. Per 6 Ω e 3 Ω si ottiene 18 ÷ 9 = 2 Ω. Con più di due resistori, somma invece i reciproci.",
      },
      {
        question: "Che cos'è il siemens?",
        answer: "Il siemens (S) è l'unità SI della conduttanza, il reciproco dell'ohm. Un resistore da 100 Ω ha una conduttanza di 0,01 S. Sostituisce il vecchio nome «mho».",
      },
    ],
    sourcesUsedFor: ["Resistenza equivalente di resistori in serie (la somma) e in parallelo (il reciproco della somma dei reciproci)."],
  },
  text: {
    unit: "Unità dei valori",
    unitOptions: { ohm: "Ω (ohm)", kohm: "kΩ (kiloohm)", megohm: "MΩ (megaohm)" },
    connection: "Collegamento",
    connectionHelp: "Scegli quale totale mostrare come risultato principale. L'altro compare sotto.",
    connectionOptions: { series: "Serie", parallel: "Parallelo" },
    values: "Resistenze",
    valuesHelp: "Da 1 a 50 valori, separati da virgole, spazi o a capo. Ognuno deve essere maggiore di 0.",
    errors: {
      empty: "Inserisci almeno una resistenza.",
      tooMany: "Inserisci al massimo {max} resistenze.",
      notNumber: "«{token}» non è un numero. Separa i valori con virgole, spazi o a capo.",
      tooLarge: "«{token}» è troppo grande.",
    },
    maxCount: "Inserisci al massimo {max} resistenze.",
    notPositive: "Ogni resistenza deve essere maggiore di 0 ({value} non lo è).",
    tooBig: "{value} è troppo grande. Ogni valore può essere al massimo {max}.",
    series: "Resistenza totale in serie",
    parallel: "Resistenza totale in parallelo",
    seriesOhms: "Resistenza in serie in ohm",
    parallelOhms: "Resistenza in parallelo in ohm",
    conductance: "Conduttanza totale in parallelo",
    count: { zero: "{n} resistori", one: "{n} resistore", two: "{n} resistori", few: "{n} resistori", many: "{n} resistori", other: "{n} resistori" },
    caption: "{count} collegati in {connection}.",
    connectionWords: { series: "serie", parallel: "parallelo" },
    single: "Con un solo resistore, i totali in serie e in parallelo coincidono con la sua resistenza.",
    parallelNote: "Un totale in parallelo è sempre minore del resistore più piccolo del gruppo ({smallest}).",
    table: "Ogni resistore",
    resistorColumn: "Resistore",
    ohmsColumn: "Resistenza",
    conductanceColumn: "Conduttanza",
    resistorLabel: "R{i}",
  },
};

export default it;
