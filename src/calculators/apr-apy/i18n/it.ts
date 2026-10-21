import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AprApyText } from "../text/en";

const it: CalculatorTranslation<AprApyText> = {
  content: {
    title: "Calcolatore da APR ad APY",
    shortTitle: "Da APR ad APY",
    summary: "Converte un tasso nominale annuo (APR) nel rendimento effettivo annuo (APY), o viceversa, per qualsiasi frequenza di capitalizzazione.",
    metaTitle: "Calcolatore da APR ad APY – Tasso annuo effettivo",
    metaDescription:
      "Converti APR in APY o APY in APR con capitalizzazione annuale, trimestrale, mensile, giornaliera o continua, con una tabella che confronta tutte le frequenze.",
    keywords: [
      "da apr ad apy",
      "da apy ad apr",
      "rendimento percentuale annuo",
      "tasso percentuale annuo",
      "tasso annuo effettivo",
      "tasso nominale",
      "frequenza di capitalizzazione",
      "TAN e TAEG",
    ],
    intro: [
      "Le banche statunitensi indicano due tipi di tasso annuo. L'APR è il tasso nominale: il tasso di ciascun periodo moltiplicato per il numero di periodi. L'APY è il tasso effettivo: quanto cresce davvero un saldo in un anno, una volta che gli interessi producono a loro volta interessi.",
      "Più spesso gli interessi vengono capitalizzati, più l'APY si allontana dall'APR. Usa questo strumento per confrontare alla pari un conto di risparmio espresso in APY con un prestito espresso in APR.",
    ],
    howToUse: [
      "Scegli se convertire da APR ad APY o da APY ad APR.",
      "Inserisci il tasso che conosci, in percentuale.",
      "Scegli con quale frequenza vengono capitalizzati gli interessi.",
      "Leggi il tasso convertito, il tasso applicato in ogni periodo e la tabella con le altre frequenze.",
    ],
    formulas: [
      {
        title: "Da APR ad APY",
        expression: "APY = (1 + APR ÷ n)ⁿ − 1",
        explanation: "n è il numero di periodi di capitalizzazione all'anno ed entrambi i tassi sono espressi in forma decimale.",
      },
      { title: "Capitalizzazione continua", expression: "APY = e^APR − 1", explanation: "Il limite quando n cresce senza fine; e ≈ 2,71828." },
      {
        title: "Da APY ad APR",
        expression: "APR = n × ((1 + APY)^(1/n) − 1)",
        explanation: "L'operazione inversa. Con capitalizzazione continua, APR = ln(1 + APY).",
      },
      { title: "Tasso per periodo", expression: "i = APR ÷ n", explanation: "L'interesse applicato a ogni passo di capitalizzazione." },
    ],
    examples: [
      {
        title: "APR del 6% con capitalizzazione mensile",
        steps: ["Tasso mensile = 0,06 ÷ 12 = 0,005", "APY = 1,005¹² − 1", "≈ 0,061678, cioè circa il 6,1678%"],
      },
      {
        title: "APY del 5% convertita in APR mensile",
        steps: ["APR = 12 × (1,05^(1/12) − 1)", "= 12 × 0,0040741", "≈ 4,8889%"],
      },
      {
        title: "APR dell'8% con capitalizzazione continua",
        steps: ["APY = e^0,08 − 1", "≈ 1,083287 − 1", "≈ 8,3287%"],
      },
    ],
    assumptions: [
      "Il tasso è un tasso d'interesse nominale che resta invariato per tutto l'anno, senza versamenti, prelievi o commissioni.",
      "Nei prestiti statunitensi, l'APR dichiarato ai sensi del Truth in Lending Act (Regulation Z) può includere alcune commissioni, quindi può superare il solo tasso d'interesse. Questo strumento converte solo tassi nominali.",
      "La capitalizzazione giornaliera usa 365 periodi all'anno. Le banche possono usare 360 o 366 giorni nei propri calcoli.",
      "Questa non è una consulenza finanziaria.",
    ],
    faqs: [
      {
        question: "Perché l'APY è più alto dell'APR?",
        answer:
          "Ogni volta che gli interessi vengono aggiunti, quelli del periodo successivo si calcolano su un saldo più alto. L'APY tiene conto di questa crescita aggiuntiva, l'APR no. Con capitalizzazione annuale i due tassi coincidono.",
      },
      {
        question: "Quale tasso devo confrontare tra conti diversi?",
        answer:
          "Per il risparmio confronta APY con APY, perché include già la capitalizzazione. Per i prestiti confronta l'APR dichiarato, che comprende anche molte commissioni.",
      },
      {
        question: "C'è molta differenza tra capitalizzazione giornaliera e mensile?",
        answer: "Molto poca con i tassi abituali. Con un APR del 5%, la capitalizzazione mensile dà un APY di circa il 5,116% e quella giornaliera di circa il 5,127%.",
      },
    ],
    sourcesUsedFor: [
      "Come l'APY (rendimento percentuale annuo) riflette la capitalizzazione nel corso di un anno.",
      "Il chiarimento che l'APR dichiarato su un prestito misura il costo del credito e può differire dal tasso d'interesse nominale.",
    ],
  },
  text: {
    direction: "Converti",
    directions: { aprToApy: "Da APR ad APY", apyToApr: "Da APY ad APR" },
    rate: "Tasso",
    rateHelp: "Inserisci l'APR (tasso nominale annuo) per ottenere l'APY, oppure l'APY (tasso effettivo annuo) per ottenere l'APR.",
    compounding: "Capitalizzazione",
    frequencies: {
      "1": "Annuale",
      "2": "Semestrale",
      "4": "Trimestrale",
      "12": "Mensile",
      "52": "Settimanale",
      "365": "Giornaliera",
      continuous: "Continua",
    },
    inSentence: {
      "1": "annualmente",
      "2": "semestralmente",
      "4": "trimestralmente",
      "12": "mensilmente",
      "52": "settimanalmente",
      "365": "giornalmente",
      continuous: "in modo continuo",
    },
    apy: "Rendimento percentuale annuo (APY)",
    apr: "Tasso percentuale annuo (APR)",
    captionToApy: "Un APR del {rate} capitalizzato {frequency} dà questo tasso effettivo annuo.",
    captionToApr: "Il tasso nominale che, capitalizzato {frequency}, rende un APY del {rate}.",
    periodRate: "Tasso per periodo di capitalizzazione",
    periodsPerYear: "Periodi di capitalizzazione all'anno",
    difference: "Differenza tra APY e APR",
    tableCaption: "Lo stesso tasso con altre frequenze di capitalizzazione",
    tableColumns: { frequency: "Capitalizzazione", apy: "APY", apr: "APR" },
    notes: {
      continuous: "La capitalizzazione continua è il limite di una capitalizzazione sempre più frequente; non ha periodi distinti.",
      regZ: "Nei prestiti statunitensi, l'APR dichiarato ai sensi della Regulation Z può includere alcune commissioni oltre agli interessi. Questo strumento converte solo tassi d'interesse nominali, quindi non riproduce un APR comprensivo di commissioni come quello di un finanziatore.",
    },
  },
};

export default it;
