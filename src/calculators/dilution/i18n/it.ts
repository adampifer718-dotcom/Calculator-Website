import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DilutionText } from "../text/en";

const it: CalculatorTranslation<DilutionText> = {
  content: {
    title: "Calcolatore di diluizioni (C₁V₁ = C₂V₂)",
    shortTitle: "Diluizioni",
    summary: "Risolvi C₁V₁ = C₂V₂ per trovare il volume di soluzione madre, la concentrazione finale, il volume finale o la concentrazione della soluzione madre.",
    metaTitle: "Calcolatore di diluizioni – C1V1 = C2V2",
    metaDescription:
      "Risolvi l'equazione di diluizione C1V1 = C2V2 per qualsiasi valore: volume di soluzione madre necessario, concentrazione finale, volume finale o concentrazione iniziale.",
    keywords: ["calcolatore diluizioni", "c1v1=c2v2", "formula della diluizione", "soluzione madre", "concentrazione", "preparare soluzioni", "chimica"],
    intro: [
      "Quando diluisci una soluzione, la quantità di soluto non cambia, quindi C₁V₁ = C₂V₂.",
      "Scegli l'incognita e inserisci gli altri tre valori per pianificare una diluizione.",
    ],
    howToUse: [
      "Scegli cosa calcolare; di solito il volume di soluzione madre necessario.",
      "Inserisci gli altri tre valori usando le stesse unità su entrambi i lati.",
      "Leggi il risultato e quanto solvente devi aggiungere.",
    ],
    formulas: [
      {
        title: "Equazione di diluizione",
        expression: "C₁ × V₁ = C₂ × V₂",
        explanation: "C₁ e V₁ sono la concentrazione e il volume della soluzione madre; C₂ e V₂ quelli finali.",
      },
      { title: "Solvente da aggiungere", expression: "solvente = V₂ − V₁", explanation: "Aggiungi solvente fino a raggiungere il volume finale." },
    ],
    examples: [
      {
        title: "Preparare 100 mL a 0,5 M da una soluzione madre 2 M",
        steps: ["V₁ = 0,5 × 100 ÷ 2", "= 25 mL di soluzione madre, più 75 mL di solvente"],
      },
      {
        title: "10 mL a 1 M diluiti fino a 250 mL",
        steps: ["C₂ = 1 × 10 ÷ 250", "= 0,04 M"],
      },
    ],
    assumptions: [
      "Le concentrazioni devono essere nella stessa unità, e così anche i volumi.",
      "Presuppone che i volumi siano additivi, una buona approssimazione per soluzioni acquose diluite.",
    ],
    faqs: [
      {
        question: "Che cosa significa C1V1 = C2V2?",
        answer: "Che la quantità di soluto prima della diluizione è uguale a quella dopo: il prodotto di concentrazione e volume resta costante.",
      },
      { question: "Posso usare percentuali o mg/mL?", answer: "Sì, purché C₁ e C₂ siano nella stessa unità." },
      { question: "Che cos'è il fattore di diluizione?", answer: "Il rapporto C₁ ÷ C₂. Una diluizione 1:10 riduce la concentrazione di dieci volte." },
    ],
    sourcesUsedFor: ["Relazione di diluizione C₁V₁ = C₂V₂."],
  },
  text: {
    solve: "Calcola",
    solveOptions: {
      v1: "Volume di soluzione madre necessario (V₁)",
      c2: "Concentrazione finale (C₂)",
      v2: "Volume finale (V₂)",
      c1: "Concentrazione della soluzione madre (C₁)",
    },
    c1: "Concentrazione della soluzione madre (C₁)",
    v1: "Volume di soluzione madre (V₁)",
    c2: "Concentrazione finale (C₂)",
    v2: "Volume finale (V₂)",
    tooConcentrated: "Una diluizione non può essere più concentrata della soluzione madre (C₂ ≤ C₁).",
    stockTooLarge: "Il volume di soluzione madre non può superare il volume finale (V₁ ≤ V₂).",
    results: {
      c1: "Concentrazione della soluzione madre (C₁)",
      v1: "Volume di soluzione madre necessario (V₁)",
      c2: "Concentrazione finale (C₂)",
      v2: "Volume finale (V₂)",
    },
    caption: "Nelle stesse unità dei dati corrispondenti.",
    solvent: "Solvente da aggiungere (V₂ − V₁)",
    factor: "Fattore di diluizione (C₁ ÷ C₂)",
    note: "Usa la stessa unità di concentrazione per C₁ e C₂ e la stessa unità di volume per V₁ e V₂.",
  },
};

export default it;
