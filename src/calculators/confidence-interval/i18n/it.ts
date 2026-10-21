import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ConfidenceIntervalText } from "../text/en";

const it: CalculatorTranslation<ConfidenceIntervalText> = {
  content: {
    title: "Calcolatore dell'intervallo di confidenza",
    shortTitle: "Intervallo di confidenza",
    summary: "Calcola un intervallo di confidenza per una media a partire da media campionaria, deviazione standard e dimensione del campione.",
    metaTitle: "Calcolatore dell'intervallo di confidenza – Per una media",
    metaDescription:
      "Calcola un intervallo di confidenza per una media da media campionaria, deviazione standard, dimensione del campione e livello di confidenza, con margine d'errore e z*.",
    keywords: ["intervallo di confidenza", "margine di errore", "errore standard", "livello di confidenza 95%", "statistica", "intervallo di confidenza media"],
    intro: [
      "Un intervallo di confidenza fornisce un insieme di valori plausibili per la media di una popolazione. Un intervallo al 95% è costruito in modo che il 95% degli intervalli ottenuti con questo metodo contenga la media reale.",
      "Inserisci la media campionaria, la deviazione standard, la dimensione del campione e il livello di confidenza.",
    ],
    howToUse: [
      "Inserisci la media campionaria.",
      "Inserisci la deviazione standard e la dimensione del campione.",
      "Scegli il livello di confidenza, per esempio il 95%.",
      "Leggi l'intervallo, il margine di errore e il valore critico.",
    ],
    formulas: [
      { title: "Intervallo di confidenza", expression: "IC = x̄ ± z* × σ ÷ √n", explanation: "z* è il valore critico per il livello di confidenza." },
      { title: "Valore critico", expression: "z* = Φ⁻¹(1 − (1 − livello) ÷ 2)", explanation: "Per il 95%, z* ≈ 1,96; per il 99%, z* ≈ 2,576." },
    ],
    examples: [
      { title: "Media 100, σ 15, n 36, 95%", steps: ["ES = 15 ÷ √36 = 2,5", "ME = 1,96 × 2,5 ≈ 4,9", "IC ≈ da 95,1 a 104,9"] },
      { title: "Media 50, σ 8, n 64, 99%", steps: ["ES = 8 ÷ √64 = 1", "ME = 2,576 × 1", "IC ≈ da 47,42 a 52,58"] },
    ],
    assumptions: [
      "Usa la distribuzione normale (z): adatta quando σ è nota o il campione è grande (n ≥ 30). I campioni piccoli con σ stimata richiedono un intervallo t, più ampio.",
      "Presuppone un campione casuale di osservazioni indipendenti.",
    ],
    faqs: [
      {
        question: "Che cosa significa una confidenza del 95%?",
        answer: "Se ripetessi il campionamento molte volte, circa il 95% degli intervalli conterrebbe la media reale. Non è una probabilità del 95% riferita a un singolo intervallo.",
      },
      { question: "Come ottengo un intervallo più stretto?", answer: "Aumenta la dimensione del campione o accetta un livello di confidenza più basso." },
      { question: "Che cos'è il margine di errore?", answer: "La metà dell'ampiezza dell'intervallo: z* × σ ÷ √n." },
    ],
    sourcesUsedFor: ["Intervallo di confidenza per una media e valori critici di z."],
  },
  text: {
    mean: "Media campionaria (x̄)",
    sd: "Deviazione standard (σ)",
    n: "Dimensione del campione (n)",
    level: "Livello di confidenza",
    primary: "Intervallo di confidenza al {level}",
    interval: "Da {lower} a {upper}",
    margin: "Margine di errore",
    standardError: "Errore standard",
    critical: "Valore critico (z*)",
    note: "Usa la distribuzione normale (z), che presuppone una deviazione standard della popolazione nota o un campione grande (n ≥ 30).",
  },
};

export default it;
