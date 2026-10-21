import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RunningPaceText } from "../text/en";

const it: CalculatorTranslation<RunningPaceText> = {
  content: {
    title: "Calcolatore del passo di corsa",
    shortTitle: "Passo di corsa",
    summary: "Calcola il tuo passo di corsa al chilometro e al miglio, e la velocità media, dalla distanza e dal tempo finale.",
    metaTitle: "Calcolatore passo di corsa – Passo al km e al miglio",
    metaDescription:
      "Calcola il passo al chilometro e al miglio e la velocità media dal tempo finale su 5 km, 10 km, mezza maratona, maratona o una distanza personalizzata.",
    keywords: ["passo di corsa", "calcolo passo", "min/km", "passo maratona", "passo 10 km", "running"],
    intro: [
      "Il passo è il tempo che impieghi a percorrere un chilometro o un miglio. È il modo in cui la maggior parte dei runner pianifica e confronta le proprie gare.",
      "Scegli una distanza di gara o inserisci la tua, aggiungi il tempo finale e leggi passo e velocità.",
    ],
    howToUse: [
      "Scegli una distanza di gara, oppure «Distanza personalizzata» e inseriscila.",
      "Inserisci il tempo finale in ore, minuti e secondi.",
      "Leggi il passo al km e al miglio e la velocità media.",
    ],
    formulas: [
      { title: "Passo", expression: "passo = tempo ÷ distanza", explanation: "Mostrato come minuti:secondi al km o al miglio." },
      { title: "Velocità", expression: "velocità = distanza ÷ tempo", explanation: "Mostrata in km/h e mph." },
    ],
    examples: [
      { title: "10 km in 50 minuti", steps: ["3.000 s ÷ 10 km = 300 s", "= 5:00 al km"] },
      { title: "Maratona in 3 h 30 min", steps: ["12.600 s ÷ 42,195 km ≈ 298,6 s", "≈ 4:59 al km"] },
    ],
    assumptions: [
      "Presuppone un passo medio costante su tutta la distanza; i parziali varieranno con il percorso e lo sforzo.",
      "I passi sono arrotondati al secondo più vicino.",
      "Distanze di gara: mezza maratona 21,0975 km; maratona 42,195 km.",
    ],
    faqs: [
      {
        question: "Qual è un buon passo sui 5 km?",
        answer: "Dipende da età, esperienza e percorso. Segui l'andamento del tuo passo invece di confrontarti con gli altri.",
      },
      { question: "Come converto il passo al km in passo al miglio?", answer: "Moltiplica per 1,609344. Un passo di 5:00/km corrisponde a circa 8:03/mi." },
      {
        question: "Come calcolo un tempo obiettivo?",
        answer: "Scegli un passo obiettivo e moltiplicalo per la distanza, oppure regola qui il tempo finché il passo coincide con il tuo obiettivo.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    race: "Distanza",
    races: { "5k": "5 km", "10k": "10 km", half: "Mezza maratona", marathon: "Maratona", custom: "Distanza personalizzata" },
    distance: "Distanza personalizzata",
    unit: "Unità",
    units: { km: "Chilometri", mi: "Miglia" },
    hours: "Ore",
    minutes: "Minuti",
    seconds: "Secondi",
    timeZero: "Inserisci un tempo finale maggiore di zero.",
    perKm: "Passo al chilometro",
    caption: "Tempo finale {time} su {km} km.",
    perMile: "Passo al miglio",
    speed: "Velocità media",
    speedMph: "Velocità media (mph)",
  },
};

export default it;
