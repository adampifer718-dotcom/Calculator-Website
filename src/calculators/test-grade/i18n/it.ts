import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TestGradeText } from "../text/en";

const it: CalculatorTranslation<TestGradeText> = {
  content: {
    title: "Calcolatore del voto di una verifica",
    shortTitle: "Voto della verifica",
    summary: "Trasforma le risposte corrette o i punti ottenuti in un punteggio percentuale e in un voto in lettere.",
    metaTitle: "Calcolatore del voto di una verifica – Percentuale e lettera",
    metaDescription:
      "Trova la percentuale e il voto in lettere di una verifica dal numero di risposte corrette o sbagliate, o dai punti ottenuti sul totale possibile.",
    keywords: ["voto", "punteggio verifica", "esame", "quiz", "voto in percentuale", "voto in lettere", "compito in classe"],
    intro: [
      "Inserisci quante domande o quanti punti aveva una verifica e quante risposte hai dato giuste o sbagliate. Il calcolatore mostra il punteggio percentuale e il voto in lettere corrispondente.",
      "Funziona per quiz, esami e compiti valutati a punti.",
    ],
    howToUse: [
      "Inserisci il numero totale di domande o di punti.",
      "Scegli se conosci il numero di risposte corrette o di quelle sbagliate.",
      "Inserisci quel numero e leggi la percentuale e il voto in lettere.",
    ],
    formulas: [
      {
        title: "Punteggio percentuale",
        expression: "Voto % = punti ottenuti ÷ punti totali × 100",
        explanation: "Se conosci gli errori, punti ottenuti = totale − punti persi.",
      },
      {
        title: "Voto in lettere",
        expression: "A ≥ 90%, B ≥ 80%, C ≥ 70%, D ≥ 60%, F < 60%",
        explanation: "Una scala diffusa negli Stati Uniti. Le scuole possono usare voti con più e meno o soglie diverse.",
      },
    ],
    examples: [
      { title: "45 corrette su 50", steps: ["45 ÷ 50 = 0,9", "0,9 × 100 = 90%, una A"] },
      { title: "7 sbagliate su 30", steps: ["Corrette = 30 − 7 = 23", "23 ÷ 30 × 100 = 76,67%, una C"] },
    ],
    assumptions: [
      "Ogni domanda vale uguale, a meno che tu non inserisca dei punti.",
      "I voti in lettere seguono la scala statunitense più comune; controlla i criteri di valutazione della tua scuola.",
      "I punteggi parziali si possono inserire come punti decimali.",
    ],
    faqs: [
      {
        question: "Come si calcola la percentuale di una verifica?",
        answer: "Dividi i punti ottenuti per il totale possibile e moltiplica per 100. 18 su 20 corrisponde al 90%.",
      },
      { question: "A che voto corrisponde il 75%?", answer: "Sulla scala statunitense più comune, il 75% è una C." },
      { question: "Posso usare i punti invece delle domande?", answer: "Sì. Inserisci i punti totali e quelli ottenuti; la formula è la stessa." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    total: "Domande o punti totali",
    mode: "Conosco il numero di risposte",
    modes: { correct: "Corrette (punti ottenuti)", wrong: "Sbagliate (punti persi)" },
    correct: "Risposte corrette o punti ottenuti",
    wrong: "Risposte sbagliate o punti persi",
    overTotal: "Non può superare il totale.",
    grade: "Voto",
    caption: "{earned} su {total}.",
    letter: "Voto in lettere (scala A–F)",
    lost: "Punti persi",
    note: "I voti in lettere seguono la scala comune A ≥ 90%, B ≥ 80%, C ≥ 70%, D ≥ 60%, F sotto il 60%. La scala della tua scuola può essere diversa.",
  },
};

export default it;
