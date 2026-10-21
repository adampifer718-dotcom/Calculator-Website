import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CompoundInterestText } from "../text/en";

const it: CalculatorTranslation<CompoundInterestText> = {
  content: {
    title: "Calcolatore di interesse composto",
    shortTitle: "Interesse composto",
    summary: "Scopri come cresce un deposito con l'interesse composto, con una tabella del saldo anno per anno.",
    metaTitle: "Calcolatore di interesse composto – Valore futuro",
    metaDescription:
      "Calcola l'interesse composto e il valore futuro di un deposito con capitalizzazione annuale, trimestrale, mensile o giornaliera, con il saldo anno per anno.",
    keywords: ["interesse composto", "calcolo interesse composto", "valore futuro", "risparmio", "tasso effettivo", "rendimento investimento"],
    intro: [
      "Con l'interesse composto si maturano interessi sugli interessi precedenti, oltre che sul deposito iniziale, quindi la crescita accelera nel tempo.",
      "Inserisci un deposito, un tasso d'interesse, una durata e una frequenza di capitalizzazione per vedere il valore futuro, gli interessi maturati e il saldo di ogni anno.",
    ],
    howToUse: [
      "Inserisci il deposito iniziale.",
      "Inserisci il tasso d'interesse annuo e il numero di anni.",
      "Scegli con quale frequenza vengono capitalizzati gli interessi.",
      "Leggi il valore futuro, gli interessi maturati e il tasso annuo effettivo.",
    ],
    formulas: [
      {
        title: "Valore futuro",
        expression: "A = P × (1 + r ÷ n)^(n × t)",
        explanation: "P è il deposito, r il tasso annuo in forma decimale, n i periodi di capitalizzazione all'anno e t gli anni.",
      },
      { title: "Tasso annuo effettivo", expression: "TAE = (1 + r ÷ n)ⁿ − 1", explanation: "Il tasso equivalente con una sola capitalizzazione all'anno." },
    ],
    examples: [
      { title: "$10.000 al 5% con capitalizzazione mensile per 10 anni", steps: ["A = 10.000 × (1 + 0,05 ÷ 12)^120", "≈ $16.470,09"] },
      { title: "$1000 al 10% con capitalizzazione annuale per 2 anni", steps: ["A = 1000 × 1,1²", "= $1210"] },
    ],
    assumptions: [
      "Il tasso resta fisso e non ci sono altri versamenti, prelievi, imposte o commissioni.",
      "I tassi passati o pubblicizzati non garantiscono rendimenti futuri. Questa non è una consulenza finanziaria.",
      "La scelta della valuta cambia solo il formato.",
    ],
    faqs: [
      {
        question: "Che differenza c'è tra interesse semplice e composto?",
        answer: "L'interesse semplice si calcola solo sul deposito iniziale. L'interesse composto si calcola anche sugli interessi già maturati.",
      },
      {
        question: "Capitalizzare più spesso aiuta?",
        answer: "Sì, un po'. A parità di tasso nominale, la capitalizzazione mensile dà un tasso effettivo più alto di quella annuale.",
      },
      {
        question: "Che cos'è la regola del 72?",
        answer: "Dividi 72 per il tasso annuo per stimare gli anni necessari a raddoppiare il capitale. Al 6% il denaro raddoppia in circa 12 anni.",
      },
    ],
    sourcesUsedFor: ["Formule dell'interesse composto e del valore futuro."],
  },
  text: {
    principal: "Deposito iniziale",
    rate: "Tasso d'interesse annuo",
    years: "Durata",
    frequency: "Capitalizzazione",
    frequencies: { "1": "Annuale", "2": "Semestrale", "4": "Trimestrale", "12": "Mensile", "365": "Giornaliera" },
    future: "Valore futuro",
    interest: "Interessi maturati",
    effective: "Tasso annuo effettivo",
    tableCaption: "Saldo alla fine di ogni anno",
    tableColumns: { year: "Anno", balance: "Saldo", interest: "Interessi cumulati" },
    note: "Presuppone un tasso fisso, senza altri versamenti o prelievi e senza imposte o commissioni.",
  },
};

export default it;
