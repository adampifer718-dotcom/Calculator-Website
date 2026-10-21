import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DoublingTimeText } from "../text/en";

const it: CalculatorTranslation<DoublingTimeText> = {
  content: {
    title: "Calcolatore del tempo di raddoppio",
    shortTitle: "Tempo di raddoppio",
    summary: "Calcola il tempo di raddoppio (tempo di generazione) e il tasso di crescita di una popolazione in crescita esponenziale.",
    metaTitle: "Calcolatore del tempo di raddoppio – Generazioni e crescita",
    metaDescription:
      "Calcola il tempo di raddoppio, le generazioni e il tasso di crescita di una popolazione, come una coltura batterica, dai conteggi iniziale e finale.",
    keywords: ["tempo di raddoppio", "tempo di generazione", "crescita batterica", "crescita esponenziale", "tasso di crescita", "biologia"],
    intro: [
      "Durante la crescita esponenziale una popolazione raddoppia a ritmo costante. Il tempo di raddoppio (o di generazione) è il tempo necessario per ciascun raddoppio.",
      "Inserisci i conteggi iniziale e finale e il tempo trascorso tra i due.",
    ],
    howToUse: [
      "Inserisci il conteggio iniziale.",
      "Inserisci il conteggio finale, che deve essere maggiore.",
      "Inserisci il tempo trascorso e scegli l'unità.",
      "Leggi il tempo di raddoppio, le generazioni e il tasso di crescita.",
    ],
    formulas: [
      { title: "Generazioni", expression: "n = log₂(N ÷ N₀)", explanation: "Il numero di raddoppi necessari per passare da N₀ a N." },
      { title: "Tempo di raddoppio", expression: "g = t ÷ n", explanation: "Il tempo trascorso diviso per il numero di generazioni." },
      { title: "Costante di crescita", expression: "k = ln(N ÷ N₀) ÷ t", explanation: "Si usa in N = N₀ × e^(k·t)." },
    ],
    examples: [
      {
        title: "Da 1000 a 64.000 cellule in 6 ore",
        steps: ["N ÷ N₀ = 64, quindi n = log₂ 64 = 6", "g = 6 h ÷ 6 = 1 ora"],
      },
      {
        title: "Da 500 a 2000 in 90 minuti",
        steps: ["n = log₂ 4 = 2", "g = 90 ÷ 2 = 45 minuti"],
      },
    ],
    assumptions: [
      "Presuppone una crescita esponenziale costante, come nella fase logaritmica di una coltura; le fasi di latenza, stazionaria e di morte non sono modellate.",
      "I conteggi possono essere cellule, unità formanti colonie, misure indirette di densità ottica o qualsiasi grandezza che cresca in modo esponenziale.",
    ],
    faqs: [
      {
        question: "Che cos'è il tempo di generazione?",
        answer: "Il tempo che una popolazione impiega a raddoppiare; per E. coli è in genere di circa 20 minuti in condizioni di laboratorio ideali.",
      },
      {
        question: "Perché si usano i logaritmi?",
        answer: "La crescita esponenziale moltiplica la popolazione per 2 a ogni generazione, quindi log₂ conta i raddoppi.",
      },
      {
        question: "Vale anche per il denaro o per le popolazioni umane?",
        answer: "La matematica è la stessa per qualsiasi crescita esponenziale costante, ma le popolazioni reali raramente crescono a ritmo costante.",
      },
    ],
    sourcesUsedFor: ["Tempo di generazione e crescita esponenziale delle popolazioni batteriche."],
  },
  text: {
    initial: "Conteggio iniziale (N₀)",
    final: "Conteggio finale (N)",
    time: "Tempo trascorso",
    unit: "Unità di tempo",
    units: { minutes: "Minuti", hours: "Ore", days: "Giorni" },
    unitWords: { minutes: "minuti", hours: "ore", days: "giorni" },
    perUnit: { minutes: "al minuto", hours: "all'ora", days: "al giorno" },
    notGrowth: "Perché ci sia crescita, il conteggio finale deve essere maggiore di quello iniziale.",
    doubling: "Tempo di raddoppio",
    generations: "Numero di raddoppi (generazioni)",
    rate: "Costante di crescita (k)",
    fold: "Fattore di aumento (N ÷ N₀)",
    note: "Presuppone una crescita esponenziale costante per tutto il periodo, come nella fase logaritmica di una coltura batterica.",
  },
};

export default it;
