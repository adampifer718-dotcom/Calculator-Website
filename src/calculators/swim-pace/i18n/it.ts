import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SwimPaceText } from "../text/en";

const it: CalculatorTranslation<SwimPaceText> = {
  content: {
    title: "Calcolatore del passo di nuoto",
    shortTitle: "Passo di nuoto",
    summary:
      "Calcola il tuo passo di nuoto ogni 100 m o 100 yd da distanza e tempo, oppure il tempo per una distanza a un passo dato.",
    metaTitle: "Calcolatore del passo di nuoto – Passo ogni 100 m e 100 yd",
    metaDescription:
      "Trova il tuo passo di nuoto ogni 100 metri o 100 yard da distanza e tempo, o il tempo finale da un passo, con velocità e tempi previsti sulle distanze.",
    keywords: [
      "passo di nuoto",
      "passo nuoto 100 m",
      "passo ogni 100 yard",
      "velocità di nuoto",
      "tempo di nuoto",
      "nuoto triathlon",
      "tempi in vasca",
    ],
    intro: [
      "Chi nuota misura di solito il passo come il tempo impiegato ogni 100 metri o 100 yard. Così puoi confrontare un allenamento in piscina con una nuotata in acque libere o una gara, qualunque sia la distanza totale.",
      "Inserisci una distanza e un tempo per ottenere il passo in entrambe le unità, la velocità e i tempi che faresti sulle distanze più comuni a quel passo. Oppure cambia modalità, inserisci un passo obiettivo e scopri quanto tempo richiede una distanza.",
    ],
    howToUse: [
      "Scegli se calcolare il passo o il tempo totale.",
      "Inserisci la distanza e scegli metri o yard.",
      "Inserisci il tempo in ore, minuti e secondi, oppure il passo ogni 100 m o 100 yd.",
      "Leggi il passo, la velocità e i tempi previsti da 50 m a 1.500 m.",
    ],
    formulas: [
      {
        title: "Passo",
        expression: "passo ogni 100 m = tempo (s) ÷ distanza (m) × 100",
        explanation: "Mostrato come minuti:secondi, arrotondato al secondo più vicino.",
      },
      {
        title: "Tempo dal passo",
        expression: "tempo = passo ogni 100 m × distanza (m) ÷ 100",
        explanation: "Un passo ogni 100 yd viene prima diviso per 0,9144 per ottenere il passo ogni 100 m.",
      },
      {
        title: "Yard e metri",
        expression: "1 yd = 0,9144 m esatti\npasso ogni 100 yd = passo ogni 100 m × 0,9144",
        explanation: "100 yard sono un po' meno di 100 metri, quindi il passo ogni 100 yd è più veloce.",
      },
      {
        title: "Velocità",
        expression: "velocità (m/s) = 100 ÷ passo ogni 100 m (s)\nkm/h = m/s × 3,6",
        explanation: "Velocità media sull'intera nuotata.",
      },
    ],
    examples: [
      {
        title: "1.500 m in 27:30",
        steps: [
          "27:30 = 1.650 s",
          "1.650 ÷ 1.500 × 100 = 110 s = 1:50 ogni 100 m",
          "Ogni 100 yd: 110 × 0,9144 ≈ 101 s = 1:41; velocità ≈ 0,909 m/s",
        ],
      },
      {
        title: "500 yd in 7:05",
        steps: ["7:05 = 425 s", "425 ÷ 500 × 100 = 85 s = 1:25 ogni 100 yd", "Ogni 100 m: 85 ÷ 0,9144 ≈ 93 s = 1:33"],
      },
      {
        title: "1.650 yd a 1:30 ogni 100 yd",
        steps: ["1.650 yd ÷ 100 = 16,5 tratti da 100 yd", "16,5 × 90 s = 1.485 s", "1.485 s = 24:45"],
      },
    ],
    assumptions: [
      "Il passo è una media sull'intera distanza; i tempi previsti presuppongono che tu possa mantenere quel passo su ogni distanza, cosa raramente vera per nuotate molto più lunghe.",
      "La lunghezza della vasca e il numero di virate influiscono sui tempi: la stessa nuotata è di solito un po' più veloce in vasca da 25 m che in vasca da 50 m.",
      "I tempi sono arrotondati al secondo più vicino per la visualizzazione.",
    ],
    faqs: [
      {
        question: "Perché il mio passo ogni 100 yd è più veloce di quello ogni 100 m?",
        answer:
          "100 yard sono 91,44 metri, quindi si nuotano in meno tempo. A parità di velocità il passo ogni 100 yd è circa l'8,6% più basso di quello ogni 100 m.",
      },
      {
        question: "Qual è un buon passo di nuoto?",
        answer:
          "Dipende da età, esperienza e distanza. Molti nuotatori amatoriali nuotano intorno a 2–3 minuti ogni 100 m, mentre i fondisti allenati stanno spesso ben sotto 1:30.",
      },
      {
        question: "Posso usarlo per le nuotate in acque libere?",
        answer:
          "Sì, se conosci la distanza. In acque libere le distanze GPS possono essere imprecise, quindi il passo è affidabile solo quanto la distanza misurata.",
      },
    ],
    sourcesUsedFor: ["La conversione esatta 1 yd = 0,9144 m, usata tra vasche in yard e in metri."],
  },
  text: {
    mode: "Calcola",
    modes: { pace: "Passo da distanza e tempo", time: "Tempo da distanza e passo" },
    distance: "Distanza",
    unit: "Unità di distanza",
    units: { m: "Metri (m)", yd: "Yard (yd)" },
    hours: "Ore",
    minutes: "Minuti",
    seconds: "Secondi",
    timeZero: "Inserisci un tempo maggiore di 0.",
    paceMinutes: "Passo: minuti",
    paceSeconds: "Passo: secondi",
    paceUnit: "Passo ogni",
    paceUnits: { m: "100 m", yd: "100 yd" },
    paceZero: "Inserisci un passo maggiore di 0.",
    pace: "Passo ogni 100 {unit}",
    time: "Tempo totale",
    caption: "{distance} in {time}.",
    pace100m: "Passo ogni 100 m",
    pace100yd: "Passo ogni 100 yd",
    speedMs: "Velocità (m/s)",
    speedKmh: "Velocità (km/h)",
    distanceM: "Distanza in metri",
    table: {
      caption: "Tempi previsti allo stesso passo costante",
      distance: "Distanza",
      time: "Tempo",
    },
    notes: {
      even: "I tempi previsti presuppongono lo stesso passo per tutta la distanza. Le nuotate più lunghe sono di solito più lente ogni 100, e le virate cambiano tra vasche da 25 m, 50 m e 25 yd.",
    },
  },
};

export default it;
