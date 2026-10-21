import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SpeedDistanceTimeText } from "../text/en";

const it: CalculatorTranslation<SpeedDistanceTimeText> = {
  content: {
    title: "Calcolatore di velocità, distanza e tempo",
    shortTitle: "Velocità, distanza, tempo",
    summary: "Trova la velocità media, la distanza percorsa o il tempo di viaggio a partire dagli altri due valori.",
    metaTitle: "Calcolatore di velocità, distanza e tempo",
    metaDescription:
      "Calcola velocità media, distanza o tempo di viaggio dagli altri due valori, in chilometri e km/h o in miglia e mph, con le relative conversioni.",
    keywords: ["velocità", "distanza", "tempo", "tempo di viaggio", "velocità media", "km/h", "mph"],
    intro: [
      "Velocità, distanza e tempo sono legati da una relazione semplicissima. Se ne conosci due, puoi trovare la terza.",
      "Il calcolatore lavora in chilometri e km/h oppure in miglia e mph e mostra le conversioni.",
    ],
    howToUse: [
      "Scegli che cosa vuoi trovare.",
      "Scegli unità metriche o imperiali.",
      "Inserisci i due valori noti, indicando il tempo in ore e minuti.",
      "Leggi il risultato.",
    ],
    formulas: [
      {
        title: "La relazione",
        expression: "velocità = distanza ÷ tempo\ndistanza = velocità × tempo\ntempo = distanza ÷ velocità",
        explanation: "Usa unità coerenti, per esempio km e ore per i km/h.",
      },
    ],
    examples: [
      { title: "150 km in 2 h 30 min", steps: ["Tempo = 2,5 h", "Velocità = 150 ÷ 2,5 = 60 km/h"] },
      { title: "90 miglia a 60 mph", steps: ["Tempo = 90 ÷ 60 = 1,5 h", "= 1 h 30 min"] },
    ],
    assumptions: [
      "Fornisce la velocità media sull'intero viaggio; la velocità effettiva può variare lungo il percorso.",
      "I tempi sono arrotondati al minuto più vicino nella visualizzazione.",
    ],
    faqs: [
      { question: "Come si calcola la velocità media?", answer: "Dividi la distanza totale per il tempo totale. 120 km in 1,5 ore corrispondono a 80 km/h." },
      { question: "Come si convertono i km/h in m/s?", answer: "Dividi per 3,6. Quindi 72 km/h sono 20 m/s." },
      {
        question: "Velocità scalare e velocità vettoriale sono la stessa cosa?",
        answer: "La velocità vettoriale ha anche una direzione. Per un viaggio lungo un percorso, di solito ti serve la velocità media.",
      },
    ],
    sourcesUsedFor: ["Definizione di velocità media scalare e vettoriale."],
  },
  text: {
    solve: "Trova",
    solveOptions: { speed: "Velocità", distance: "Distanza", time: "Tempo" },
    units: "Unità",
    unitOptions: { metric: "Chilometri e km/h", imperial: "Miglia e mph" },
    distance: "Distanza",
    speed: "Velocità",
    hours: "Ore",
    minutes: "Minuti",
    timeZero: "Inserisci un tempo maggiore di zero.",
    distanceOut: "Distanza",
    inKm: "In chilometri",
    inMiles: "In miglia",
    timeOut: "Tempo",
    inHours: "In ore",
    speedOut: "Velocità media",
    inKmh: "In km/h",
    inMph: "In mph",
    inMps: "In metri al secondo",
    hoursMinutes: "{h} h {m} min",
    hoursOnly: "{h} h",
    minutesOnly: "{m} min",
  },
};

export default it;
