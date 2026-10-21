import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RecipeScalerText } from "../text/en";

const it: CalculatorTranslation<RecipeScalerText> = {
  content: {
    title: "Calcolatore delle dosi di una ricetta",
    shortTitle: "Dosi della ricetta",
    summary: "Aumenta o riduci le quantità degli ingredienti di una ricetta per qualsiasi numero di porzioni.",
    metaTitle: "Calcolatore dosi ricetta – Adatta gli ingredienti",
    metaDescription:
      "Adatta qualsiasi ricetta a un nuovo numero di porzioni. Incolla l'elenco degli ingredienti e ottieni le quantità ricalcolate, in frazioni facili da misurare.",
    keywords: ["adattare ricetta", "calcolo dosi", "dosi per persone", "ricetta per più persone", "raddoppiare ricetta", "mezza dose"],
    intro: [
      "Riscalare una ricetta significa moltiplicare tutte le quantità per lo stesso fattore: le porzioni desiderate divise per le porzioni originali.",
      "Incolla l'elenco degli ingredienti e ogni quantità viene ricalcolata e mostrata, quando possibile, come una frazione comune in cucina.",
    ],
    howToUse: [
      "Inserisci per quante porzioni è la ricetta.",
      "Inserisci quante porzioni vuoi.",
      "Incolla gli ingredienti, uno per riga, iniziando dalla quantità.",
      "Leggi il fattore di scala e l'elenco ricalcolato.",
    ],
    formulas: [
      { title: "Fattore di scala", expression: "fattore = porzioni desiderate ÷ porzioni originali", explanation: "Per esempio, 6 ÷ 4 = 1,5." },
      { title: "Nuova quantità", expression: "nuova quantità = quantità originale × fattore", explanation: "Si applica a ogni ingrediente che inizia con una quantità." },
    ],
    examples: [
      { title: "Una ricetta da 4 porzioni per 6", steps: ["Fattore = 6 ÷ 4 = 1,5", "2 tazze → 3 tazze; 3/4 di tazza → 1 1/8 tazze"] },
      { title: "Una ricetta da 8 porzioni per 2", steps: ["Fattore = 2 ÷ 8 = 0,25", "4 uova → 1 uovo"] },
    ],
    assumptions: [
      "La quantità deve trovarsi all'inizio della riga, come numero intero, decimale, frazione (1/2), numero misto (1 1/2) o simbolo come ½.",
      "Le unità non vengono convertite; le quantità ricalcolate mantengono l'unità originale.",
      "Tempi di cottura, dimensioni della teglia, lievito e condimenti non sempre scalano in modo lineare; regolali a gusto e controlla la cottura.",
    ],
    faqs: [
      { question: "Come dimezzo una ricetta?", answer: "Usa un fattore di 0,5 indicando come porzioni desiderate la metà di quelle originali." },
      { question: "E le uova?", answer: "Arrotonda all'uovo intero più vicino, oppure sbatti un uovo e usane solo una parte, pesandola." },
      {
        question: "I tempi di cottura in forno cambiano?",
        answer: "Spesso sì. Una teglia più grande o più piccola cambia il tempo di cottura, quindi controlla prima e regolati di conseguenza.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    original: "La ricetta è per",
    desired: "Voglio servire",
    ingredients: "Ingredienti (uno per riga)",
    ingredientsHelp: "Inizia ogni riga con la quantità, ad es. «1 1/2 tazze di farina». Le righe senza quantità restano invariate.",
    defaultIngredients: "2 tazze di farina\n1 1/2 cucchiaini di lievito in polvere\n3/4 di tazza di zucchero\n2 uova\n1 tazza di latte\nSale q.b.",
    factor: "Fattore di scala",
    caption: "Moltiplica ogni quantità per {factor}.",
    tableCaption: "Ingredienti ricalcolati",
    original_: "Originale",
    scaled: "Ricalcolato",
    note: "Gli ingredienti interi come le uova possono richiedere un arrotondamento. Tempi di cottura e dimensioni delle teglie non scalano in proporzione.",
  },
};

export default it;
