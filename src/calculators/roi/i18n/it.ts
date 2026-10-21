import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoiText } from "../text/en";

const it: CalculatorTranslation<RoiText> = {
  content: {
    title: "Calcolatore del ROI",
    shortTitle: "ROI",
    summary: "Misura il ritorno sull'investimento in percentuale, con il guadagno o la perdita netta e un tasso annualizzato facoltativo.",
    metaTitle: "Calcolatore del ROI – Ritorno sull'investimento",
    metaDescription:
      "Calcola il ritorno sull'investimento a partire dall'importo investito e da quello ottenuto. Vedi guadagno o perdita netta, ROI totale e ROI annualizzato.",
    keywords: ["ritorno sull'investimento", "calcolo roi", "rendimento di un investimento", "roi annualizzato", "guadagno sull'investimento", "tasso di crescita annuo composto"],
    intro: [
      "Il ritorno sull'investimento (ROI) confronta quanto recuperi con quanto investi. È un modo rapido per confrontare investimenti, progetti o acquisti di dimensioni diverse.",
      "Aggiungi per quanto tempo hai mantenuto l'investimento per vedere il ROI annualizzato, che permette di confrontare rendimenti ottenuti su periodi diversi.",
    ],
    howToUse: [
      "Inserisci l'importo totale investito, comprese le commissioni pagate all'acquisto.",
      "Inserisci l'importo ottenuto: il valore finale o il totale incassato, compreso l'importo originale.",
      "Se vuoi, inserisci per quanti anni hai mantenuto l'investimento.",
      "Leggi il ROI totale, il guadagno o la perdita netta e il ROI annualizzato.",
    ],
    formulas: [
      {
        title: "Ritorno sull'investimento",
        expression: "ROI = (importo ottenuto − importo investito) ÷ importo investito × 100",
        explanation: "Un ROI positivo è un guadagno, uno negativo una perdita.",
      },
      {
        title: "ROI annualizzato",
        expression: "ROI annualizzato = ((importo ottenuto ÷ importo investito)^(1 ÷ anni) − 1) × 100",
        explanation: "È il tasso annuo costante con cui l'importo investito diventerebbe l'importo ottenuto nel periodo; è noto anche come CAGR (tasso di crescita annuo composto).",
      },
    ],
    examples: [
      {
        title: "$10.000 diventano $12.500 in 3 anni",
        steps: ["Guadagno netto = $12.500 − $10.000 = $2.500", "ROI = $2.500 ÷ $10.000 × 100 = 25 %", "Annualizzato = (1,25^(1/3) − 1) × 100 ≈ 7,72 %"],
      },
      {
        title: "$5.000 scendono a $4.200",
        steps: ["Perdita netta = $4.200 − $5.000 = −$800", "ROI = −$800 ÷ $5.000 × 100 = −16 %"],
      },
    ],
    assumptions: [
      "Imposte, commissioni, dividendi e altri flussi di cassa sono inclusi solo se li aggiungi agli importi inseriti.",
      "Il ROI annualizzato presuppone una crescita composta a tasso costante nel periodo. Non tiene conto dei tempi di versamenti o prelievi.",
      "La scelta della valuta cambia solo il formato. Non viene applicato alcun tasso di cambio.",
      "I rendimenti passati non garantiscono risultati futuri. Questo calcolatore non fornisce consulenza finanziaria.",
    ],
    faqs: [
      {
        question: "Che cosa si considera un buon ROI?",
        answer:
          "Dipende dal rischio, dall'orizzonte temporale e dalle alternative disponibili. Quando i periodi di investimento sono diversi, confronta il ROI annualizzato invece del ROI totale.",
      },
      {
        question: "Che differenza c'è tra ROI e ROI annualizzato?",
        answer:
          "Il ROI è il rendimento totale sull'intero periodo. Il ROI annualizzato lo converte in un tasso annuo equivalente. Un rendimento del 25 % in 3 anni corrisponde a circa il 7,72 % all'anno.",
      },
      {
        question: "Devo includere commissioni e dividendi?",
        answer: "Sì, per un dato preciso. Aggiungi le commissioni d'acquisto all'importo investito e i dividendi o gli interessi incassati all'importo ottenuto.",
      },
      {
        question: "Il ROI può essere negativo?",
        answer: "Sì. Se recuperi meno di quanto hai investito, il ROI è negativo. Il ROI più basso possibile è −100 %, quando non recuperi nulla.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    invested: "Importo investito",
    investedHelp: "Costo totale dell'investimento.",
    finalValue: "Importo ottenuto",
    finalValueHelp: "Valore finale o totale incassato, compreso l'importo originale.",
    years: "Durata dell'investimento (facoltativa)",
    yearsHelp: "Aggiungi gli anni di detenzione per vedere il ROI annualizzato.",
    primary: "Ritorno sull'investimento",
    gainCaption: "Guadagno totale rispetto all'importo investito.",
    lossCaption: "Perdita totale rispetto all'importo investito.",
    net: "Guadagno o perdita netta",
    annualized: "ROI annualizzato",
    addLength: "Aggiungi la durata dell'investimento",
    note: "Questo ROI non considera imposte, commissioni né i tempi di eventuali flussi di cassa intermedi, a meno che non siano inclusi negli importi.",
  },
};

export default it;
