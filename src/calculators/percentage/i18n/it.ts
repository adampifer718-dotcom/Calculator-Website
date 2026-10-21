import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentageText } from "../text/en";

const it: CalculatorTranslation<PercentageText> = {
  content: {
    title: "Calcolatore di percentuali",
    shortTitle: "Percentuali",
    summary: "Calcola l'X % di un numero, che percentuale è un numero rispetto a un altro o il totale a partire da una parte e da una percentuale.",
    metaTitle: "Calcolatore di percentuali – Percentuale di un numero",
    metaDescription:
      "Calcolatore di percentuali gratuito. Trova l'X % di Y, che percentuale è X di Y o il totale quando X ne è l'Y %, con formule ed esempi svolti.",
    keywords: ["calcolo percentuale", "percentuale di un numero", "che percentuale è", "calcolare la percentuale", "proporzione percentuale", "calcolatrice %"],
    intro: [
      "Questo calcolatore risponde alle tre domande più comuni sulle percentuali. Scegli una domanda, inserisci due numeri e il risultato si aggiorna mentre scrivi.",
      "Una percentuale esprime una parte su cento: il 25 % significa 25 su 100.",
    ],
    howToUse: [
      "Scegli la domanda a cui vuoi rispondere.",
      "Inserisci i due valori noti. Sono ammessi numeri negativi e decimali.",
      "Leggi il risultato e la formula usata per ottenerlo.",
    ],
    formulas: [
      { title: "Quanto è l'X % di Y?", expression: "Risultato = X ÷ 100 × Y", explanation: "Converti la percentuale in decimale e moltiplica." },
      { title: "Che percentuale di Y è X?", expression: "Percentuale = X ÷ Y × 100", explanation: "Dividi la parte per il totale e moltiplica per 100. Y non può essere 0." },
      { title: "X è l'Y % di quale numero?", expression: "Totale = X ÷ (Y ÷ 100)", explanation: "Dividi la parte per la percentuale espressa in decimale. Y non può essere 0." },
    ],
    examples: [
      { title: "Quanto è il 20 % di 150?", steps: ["20 ÷ 100 = 0,2", "0,2 × 150 = 30"] },
      { title: "Che percentuale di 180 è 45?", steps: ["45 ÷ 180 = 0,25", "0,25 × 100 = 25 %"] },
      { title: "30 è il 12 % di quale numero?", steps: ["12 ÷ 100 = 0,12", "30 ÷ 0,12 = 250"] },
    ],
    assumptions: [
      "I risultati sono mostrati con al massimo 4–6 decimali. I calcoli usano la precisione completa.",
      "La divisione per zero non ha risultato, quindi il totale (o la percentuale) non può essere 0 nella seconda e nella terza domanda.",
    ],
    faqs: [
      {
        question: "Come si calcola la percentuale di un numero?",
        answer: "Dividi la percentuale per 100 e moltiplicala per il numero. Per esempio, il 15 % di 80 è 0,15 × 80 = 12.",
      },
      {
        question: "Come trovo che percentuale è un numero rispetto a un altro?",
        answer: "Dividi la parte per il totale e moltiplica per 100. Per esempio, 18 su 24 è 18 ÷ 24 × 100 = 75 %.",
      },
      {
        question: "Una percentuale può superare il 100 %?",
        answer: "Sì. Un valore maggiore del totale ne è più del 100 %. Per esempio, 300 è il 150 % di 200.",
      },
      {
        question: "Come calcolo l'aumento percentuale tra due numeri?",
        answer: "Usa il calcolatore dell'aumento percentuale, che divide la variazione per il valore iniziale e moltiplica per 100.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    question: "Domanda",
    modes: { percentOf: "Quanto è l'X % di Y?", whatPercent: "X è che % di Y?", findWhole: "X è l'Y % di cosa?" },
    percentX: "Percentuale (X)",
    valueY: "Valore (Y)",
    partX: "Parte (X)",
    wholeY: "Totale (Y)",
    percentY: "Percentuale (Y)",
    wholeZero: "Il totale non può essere 0.",
    percentZero: "La percentuale non può essere 0.",
    percentResult: "Percentuale",
    percentCaption: "{part} è il {percent} di {whole}.",
    percentFormula: "Formula: {part} ÷ {whole} × 100.",
    wholeResult: "Valore totale",
    wholeCaption: "{part} è il {percent} di {whole}.",
    wholeFormula: "Formula: {part} ÷ ({percent} ÷ 100).",
    result: "Risultato",
    resultCaption: "Il {percent} di {value} è {result}.",
    minus: "{value} meno il {percent}",
    plus: "{value} più il {percent}",
    resultFormula: "Formula: {percent} ÷ 100 × {value}.",
  },
};

export default it;
