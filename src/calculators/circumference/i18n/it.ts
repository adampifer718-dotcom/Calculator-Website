import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CircumferenceText } from "../text/en";

const it: CalculatorTranslation<CircumferenceText> = {
  content: {
    title: "Calcolatore della circonferenza",
    shortTitle: "Circonferenza",
    summary: "Calcola la lunghezza di una circonferenza a partire dal raggio, dal diametro o dall'area, insieme alle altre misure.",
    metaTitle: "Calcolatore della circonferenza – Raggio, diametro e area",
    metaDescription:
      "Calcola la lunghezza della circonferenza di un cerchio a partire da raggio, diametro o area, e ottieni le altre misure con la formula C = 2πr.",
    keywords: ["lunghezza della circonferenza", "perimetro del cerchio", "calcolo circonferenza", "raggio e diametro", "area del cerchio", "pi greco"],
    intro: [
      "La circonferenza è la linea che delimita un cerchio e la sua lunghezza è la distanza misurata tutto intorno. È pari a π per il diametro, ovvero 2π per il raggio.",
      "Inserisci la misura che conosci e il calcolatore ricava le altre, nella stessa unità.",
    ],
    howToUse: [
      "Scegli quale misura conosci.",
      "Inserisci il suo valore.",
      "Leggi la circonferenza, il raggio, il diametro e l'area.",
    ],
    formulas: [
      { title: "Circonferenza", expression: "C = 2πr = πd", explanation: "π ≈ 3,14159265." },
      { title: "Dall'area", expression: "r = √(A ÷ π)", explanation: "Poi usa C = 2πr." },
    ],
    examples: [
      { title: "Raggio di 5", steps: ["C = 2 × π × 5", "≈ 31,415927"] },
      { title: "Diametro di 10", steps: ["C = π × 10", "≈ 31,415927"] },
    ],
    assumptions: [
      "I risultati usano π con la massima precisione e sono mostrati con 6 decimali.",
      "L'area è espressa nell'unità inserita elevata al quadrato.",
    ],
    faqs: [
      { question: "Come calcolo la circonferenza dal diametro?", answer: "Moltiplica il diametro per π. Un diametro di 20 cm dà circa 62,83 cm." },
      { question: "Come calcolo il raggio dalla circonferenza?", answer: "Dividi la circonferenza per 2π." },
      {
        question: "Che differenza c'è tra circonferenza e area?",
        answer: "La circonferenza è la lunghezza del contorno del cerchio; l'area è la superficie che racchiude.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    known: "Dato noto",
    options: { radius: "Raggio", diameter: "Diametro", area: "Area" },
    radius: "Raggio (r)",
    diameter: "Diametro (d)",
    area: "Area (A)",
    circumference: "Circonferenza",
    caption: "Nella stessa unità del dato inserito.",
    radiusOut: "Raggio",
    diameterOut: "Diametro",
    areaOut: "Area",
  },
};

export default it;
