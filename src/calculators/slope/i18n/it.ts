import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SlopeText } from "../text/en";

const it: CalculatorTranslation<SlopeText> = {
  content: {
    title: "Calcolatore della pendenza di una retta",
    shortTitle: "Pendenza",
    summary: "Trova la pendenza tra due punti, oltre all'equazione della retta, all'intercetta, all'angolo e alla distanza.",
    metaTitle: "Calcolatore della pendenza – Coefficiente angolare e retta",
    metaDescription:
      "Calcola la pendenza della retta passante per due punti, con l'equazione y = mx + b, l'intercetta con l'asse y, l'angolo e la distanza tra i punti.",
    keywords: ["pendenza", "coefficiente angolare", "retta per due punti", "equazione della retta", "y = mx + b", "intercetta"],
    intro: [
      "La pendenza misura quanto è ripida una retta: di quanto varia y per ogni passo in x. Spesso si descrive come rapporto tra dislivello e spostamento orizzontale.",
      "Inserisci due punti e il calcolatore ti dà anche l'equazione della retta che li attraversa.",
    ],
    howToUse: [
      "Inserisci le coordinate del primo punto (x₁, y₁).",
      "Inserisci il secondo punto (x₂, y₂).",
      "Leggi la pendenza, l'equazione, l'intercetta, l'angolo e la distanza.",
    ],
    formulas: [
      { title: "Pendenza", expression: "m = (y₂ − y₁) ÷ (x₂ − x₁)", explanation: "Non è definita quando x₁ = x₂ (retta verticale)." },
      { title: "Equazione della retta", expression: "y = mx + b, con b = y₁ − m × x₁", explanation: "b è il punto in cui la retta incrocia l'asse y." },
      { title: "Angolo e distanza", expression: "θ = arctan(m)\nd = √((x₂ − x₁)² + (y₂ − y₁)²)", explanation: "L'angolo è misurato a partire dal semiasse positivo delle x." },
    ],
    examples: [
      { title: "Punti (1, 3) e (4, 9)", steps: ["m = (9 − 3) ÷ (4 − 1) = 6 ÷ 3 = 2", "b = 3 − 2 × 1 = 1, quindi y = 2x + 1"] },
      { title: "Punti (−2, 5) e (3, −5)", steps: ["m = (−5 − 5) ÷ (3 − (−2)) = −10 ÷ 5", "= −2"] },
    ],
    assumptions: [
      "Le rette verticali (x₁ = x₂) hanno pendenza non definita e vengono rifiutate.",
      "I risultati sono mostrati con 6 cifre decimali.",
    ],
    faqs: [
      { question: "Che cosa significa una pendenza negativa?", answer: "La retta scende da sinistra verso destra." },
      { question: "Qual è la pendenza di una retta orizzontale?", answer: "0, perché y non cambia." },
      {
        question: "Che relazione c'è tra pendenza e angolo?",
        answer: "La pendenza è la tangente dell'angolo che la retta forma con l'asse x. Una pendenza di 1 corrisponde a 45°.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    vertical: "x₂ deve essere diverso da x₁. Una retta verticale ha pendenza non definita.",
    slope: "Pendenza (m)",
    caption: "Dislivello di {rise} su uno spostamento orizzontale di {run}.",
    equation: "Equazione della retta",
    intercept: "Intercetta con l'asse y (b)",
    angle: "Angolo con l'asse x",
    degrees: "gradi",
    distance: "Distanza tra i punti",
  },
};

export default it;
