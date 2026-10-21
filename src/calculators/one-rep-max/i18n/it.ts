import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OneRepMaxText } from "../text/en";

const it: CalculatorTranslation<OneRepMaxText> = {
  content: {
    title: "Calcolatore del massimale (1RM)",
    shortTitle: "Massimale 1RM",
    summary: "Stima il tuo massimale su una ripetizione da una serie di 1–12 ripetizioni con le formule di Epley, Brzycki e Lombardi, con una tabella dei carichi di allenamento.",
    metaTitle: "Calcolatore massimale 1RM – Epley, Brzycki e Lombardi",
    metaDescription:
      "Stima il tuo massimale (1RM) dal peso e dalle ripetizioni di una serie impegnativa con tre formule pubblicate, e ottieni i carichi dal 60 % al 95 % dell'1RM.",
    keywords: [
      "massimale",
      "calcolo 1RM",
      "una ripetizione massima",
      "formula di Epley",
      "formula di Brzycki",
      "massimale panca piana",
      "massimale squat",
      "percentuali di allenamento",
    ],
    intro: [
      "Il tuo massimale (1RM) è il peso più alto che riesci a sollevare una sola volta con una buona tecnica. Misurarlo direttamente è faticoso e più rischioso, perciò molti atleti lo stimano da una serie pesante portata vicino al cedimento.",
      "Questo calcolatore applica tre equazioni molto diffuse, quelle di Epley, Brzycki e Lombardi, e ne fa la media. Ognuna è stata ricavata su atleti diversi, quindi lo scarto tra i risultati dà un'idea di quanto sia incerta ogni singola stima.",
      "La tabella trasforma la stima in carichi per le percentuali di allenamento più comuni, dal 60 % per il lavoro di volume più leggero fino al 95 % per le singole pesanti.",
    ],
    howToUse: [
      "Inserisci il peso sollevato e scegli chilogrammi o libbre.",
      "Inserisci quante ripetizioni complete hai eseguito in quella serie, da 1 a 12.",
      "Leggi la stima media e il risultato di ogni formula.",
      "Usa la tabella per scegliere i carichi di un programma di allenamento.",
    ],
    formulas: [
      {
        title: "Epley",
        expression: "1RM = w × (1 + r ÷ 30), e 1RM = w quando r = 1",
        explanation: "w è il peso sollevato e r il numero di ripetizioni. Aggiunge circa il 3,3 % del peso per ogni ripetizione.",
      },
      {
        title: "Brzycki",
        expression: "1RM = w × 36 ÷ (37 − r)",
        explanation: "Coincide con Epley a 10 ripetizioni e dà valori un po' più bassi sotto quella soglia.",
      },
      {
        title: "Lombardi",
        expression: "1RM = w × r^0,10",
        explanation: "Una legge di potenza che sale rapidamente nelle prime ripetizioni e poi si appiattisce.",
      },
      {
        title: "Stima mostrata",
        expression: "1RM ≈ (Epley + Brzycki + Lombardi) ÷ 3",
        explanation: "I carichi di allenamento in tabella sono questa media moltiplicata per ciascuna percentuale.",
      },
    ],
    examples: [
      {
        title: "Squat: 82,5 kg per 6 ripetizioni",
        steps: [
          "Epley: 82,5 × (1 + 6 ÷ 30) = 99,0 kg",
          "Brzycki: 82,5 × 36 ÷ 31 ≈ 95,8 kg",
          "Lombardi: 82,5 × 6^0,1 ≈ 98,7 kg",
          "Media ≈ (99,0 + 95,8 + 98,7) ÷ 3 ≈ 97,8 kg",
        ],
      },
      {
        title: "Panca piana: 185 lb per 8 ripetizioni",
        steps: [
          "Epley: 185 × (1 + 8 ÷ 30) ≈ 234,3 lb",
          "Brzycki: 185 × 36 ÷ 29 ≈ 229,7 lb",
          "Lombardi: 185 × 8^0,1 ≈ 227,8 lb",
          "Media ≈ 230,6 lb",
        ],
      },
    ],
    assumptions: [
      "La serie è stata portata vicino al cedimento con una tecnica costante. Fermarsi molto prima del cedimento rende la stima troppo bassa.",
      "Le formule sono meno affidabili oltre le 10 ripetizioni circa, dove conta più la resistenza che la forza massima. Le serie da 3–8 ripetizioni danno stime migliori.",
      "Le equazioni sono state sviluppate soprattutto con esercizi a corpo libero come panca piana e squat. Con le macchine, gli esercizi di isolamento e le persone non allenate i risultati possono differire.",
      "Testare un vero massimale richiede una tecnica corretta, un riscaldamento completo e un compagno che assista o le barre di sicurezza. Questo strumento non è un consiglio medico né di allenamento.",
    ],
    faqs: [
      {
        question: "Qual è la formula del massimale più precisa?",
        answer: "Nessuna è la migliore per tutti. Gli studi che le confrontano mostrano che la precisione dipende dall'esercizio, dalla persona e dal numero di ripetizioni; per questo il calcolatore fa la media di tre formule e le mostra tutte.",
      },
      {
        question: "Quante ripetizioni devo usare per la stima?",
        answer: "L'ideale è una serie di circa 3–8 ripetizioni impegnative. Con una sola ripetizione la stima è semplicemente il peso sollevato, mentre oltre le 10 ripetizioni circa le previsioni divergono.",
      },
      {
        question: "Posso usare la tabella per un programma di allenamento?",
        answer: "Sì, come punto di partenza. Molti programmi prescrivono il lavoro in percentuale dell'1RM, per esempio l'80 % per serie da circa 5 ripetizioni. Regola i carichi in base a come senti le serie.",
      },
    ],
    sourcesUsedFor: [
      "Origine dell'equazione predittiva di Brzycki e suo uso previsto con serie fino a circa 10 ripetizioni.",
      "Prove che la precisione delle equazioni di Epley, Brzycki, Lombardi e di altre varia secondo l'esercizio e la popolazione.",
    ],
  },
  text: {
    weight: "Peso sollevato",
    unit: "Unità",
    units: { kg: "kg", lb: "lb" },
    reps: "Ripetizioni eseguite",
    repsHelp: "Ripetizioni complete con buona tecnica in una serie portata vicino al cedimento, da 1 a 12.",
    estimate: "Massimale stimato",
    caption: "Media delle stime di Epley, Brzycki e Lombardi per {weight} × {reps}.",
    repsCount: {
      zero: "{n} ripetizioni",
      one: "{n} ripetizione",
      two: "{n} ripetizioni",
      few: "{n} ripetizioni",
      many: "{n} ripetizioni",
      other: "{n} ripetizioni",
    },
    epley: "Formula di Epley",
    brzycki: "Formula di Brzycki",
    lombardi: "Formula di Lombardi",
    tableCaption: "Carichi di allenamento dal massimale stimato",
    tablePercent: "Percentuale dell'1RM",
    tableLoad: "Carico",
    notes: {
      single: "Con una sola ripetizione, tutte le formule restituiscono il peso sollevato.",
      highReps: "Le stime da più di 10 ripetizioni circa sono meno affidabili; una serie più pesante da 3–8 ripetizioni dà una previsione migliore.",
      safety: "Tentare un vero massimale richiede una tecnica corretta, un riscaldamento e un compagno che assista o le barre di sicurezza.",
    },
  },
};

export default it;
