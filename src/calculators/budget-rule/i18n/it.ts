import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BudgetRuleText } from "../text/en";

const it: CalculatorTranslation<BudgetRuleText> = {
  content: {
    title: "Calcolatore del budget 50/30/20",
    shortTitle: "Budget 50/30/20",
    summary: "Suddividi il tuo reddito netto mensile tra bisogni, desideri e risparmio con la regola 50/30/20 o un'altra ripartizione semplice del budget.",
    metaTitle: "Budget 50/30/20 – Bisogni, desideri e risparmio",
    metaDescription:
      "Suddividi il tuo reddito netto con la regola 50/30/20, 70/20/10 o 80/20, o con una tua ripartizione, e vedi ogni voce al mese e all'anno.",
    keywords: ["regola 50/30/20", "calcolatore budget", "bisogni desideri risparmio", "budget 70/20/10", "budget 80/20", "budget mensile", "stipendio netto"],
    intro: [
      "Una regola percentuale è un modo rapido per iniziare un budget senza dover tenere traccia di decine di categorie. La più nota è la 50/30/20: metà del reddito netto per i bisogni, il 30% per i desideri e il 20% per risparmiare e ridurre i debiti.",
      "Inserisci il tuo reddito mensile al netto delle imposte e scegli una regola, oppure imposta tu le tre percentuali. Il calcolatore mostra quanto va in ogni voce ogni mese e nell'arco di un anno.",
    ],
    howToUse: [
      "Scegli la valuta degli importi.",
      "Inserisci il tuo reddito netto mensile: ciò che arriva sul conto corrente dopo le imposte.",
      "Scegli una regola di budget, oppure scegli Ripartizione personalizzata e inserisci tre percentuali che sommino al 100%.",
      "Leggi l'importo di ogni voce al mese e all'anno.",
    ],
    formulas: [
      { title: "Importo per voce", expression: "voce = reddito × percentuale ÷ 100", explanation: "Nella regola 50/30/20 le percentuali sono il 50% per i bisogni, il 30% per i desideri e il 20% per il risparmio." },
      { title: "Importo annuo", expression: "annuo = mensile × 12", explanation: "Ogni importo mensile moltiplicato per dodici mesi." },
      { title: "Ripartizione personalizzata", expression: "bisogni % + desideri % + risparmio % = 100%", explanation: "Le tue percentuali devono coprire tutto il reddito, né più né meno." },
    ],
    examples: [
      {
        title: "$3850 al mese con la regola 50/30/20",
        steps: ["Bisogni = 3850 × 50% = $1925", "Desideri = 3850 × 30% = $1155", "Risparmio = 3850 × 20% = $770"],
      },
      {
        title: "$5200 al mese con la regola 70/20/10",
        steps: ["Spese = 5200 × 70% = $3640", "Risparmio = 5200 × 20% = $1040", "Rimborso debiti o donazioni = 5200 × 10% = $520"],
      },
      {
        title: "$2900 al mese con una ripartizione personalizzata 55/25/20",
        steps: ["55 + 25 + 20 = 100%", "Bisogni = 2900 × 55% = $1595", "Desideri = $725; risparmio = $580"],
      },
    ],
    assumptions: [
      "Queste ripartizioni sono regole pratiche, non consulenza finanziaria. Non tengono conto dei tuoi debiti, di dove vivi né dei tuoi obiettivi.",
      "Il reddito è lo stipendio netto dopo imposte e trattenute in busta paga. Se il risparmio previdenziale ti viene già trattenuto in busta paga, puoi contarlo nella voce del risparmio.",
      "La ripartizione 50/30/20 è comunemente attribuita al libro All Your Worth (2005) di Elizabeth Warren e Amelia Warren Tyagi. Le ripartizioni 70/20/10 e 80/20 sono varianti informali senza un'unica fonte.",
      "Le rate minime dei debiti di solito rientrano nei bisogni; quanto paghi oltre il minimo va nella voce risparmio e rimborso debiti.",
    ],
    faqs: [
      {
        question: "Che cosa conta come bisogno?",
        answer: "I bisogni sono le spese a cui sarebbe difficile rinunciare: affitto o mutuo, utenze, la spesa alimentare di base, assicurazioni, il trasporto per andare al lavoro e le rate minime dei prestiti. Mangiare fuori, i servizi di streaming, i viaggi e gli hobby sono desideri.",
      },
      {
        question: "E se i miei bisogni superano il 50%?",
        answer: "È frequente dove le abitazioni sono care. Usa una ripartizione personalizzata che rispecchi i tuoi costi reali e cerca nel tempo modi per ridurre i bisogni o aumentare il reddito. La regola è un obiettivo, non un esame da superare.",
      },
      {
        question: "Devo usare il reddito lordo o netto?",
        answer: "Usa il reddito netto, cioè quello che incassi dopo le imposte. La regola è pensata per il denaro che hai davvero a disposizione ogni mese per spendere e risparmiare.",
      },
    ],
    sourcesUsedFor: [
      "Che cos'è un budget e perché si pianifica il reddito rispetto a spese e risparmio.",
      "L'origine della regola 50/30/20 nel libro All Your Worth di Elizabeth Warren e Amelia Warren Tyagi.",
    ],
  },
  text: {
    income: "Reddito netto mensile",
    incomeHelp: "Il tuo stipendio dopo l'imposta sul reddito e le altre trattenute, in un mese.",
    rule: "Regola di budget",
    rules: {
      "50-30-20": "50/30/20 (bisogni, desideri, risparmio)",
      "70-20-10": "70/20/10 (spese, risparmio, debiti o donazioni)",
      "80-20": "80/20 (spese, risparmio)",
      custom: "Ripartizione personalizzata",
    },
    needsPct: "Bisogni",
    wantsPct: "Desideri",
    savingsPct: "Risparmio e rimborso debiti",
    customHelp: "Le tre percentuali devono sommare al 100%.",
    sumError: "Le tre percentuali sommano a {sum}. Modificale in modo che sommino al 100%.",
    buckets: {
      needs: "Bisogni",
      wants: "Desideri",
      savings: "Risparmio e rimborsi extra dei debiti",
      spending: "Spese quotidiane (bisogni e desideri)",
      savingsOnly: "Risparmio",
      extra: "Rimborso debiti o donazioni",
    },
    primaryCaption: "Il {percent} di {income} al mese per questa voce secondo la regola {rule}.",
    ruleNames: { "50-30-20": "50/30/20", "70-20-10": "70/20/10", "80-20": "80/20", custom: "personalizzata" },
    yearlyIncome: "Reddito netto annuo",
    tableCaption: "Importi mensili e annui di ogni voce",
    tableColumns: { bucket: "Voce", share: "Percentuale", monthly: "Al mese", yearly: "All'anno" },
    notes: {
      thumb: "Le regole di budget sono punti di partenza indicativi, non consulenza. Adatta la ripartizione ai tuoi costi e obiettivi.",
      needs: "I bisogni sono le spese che devi pagare, come casa, utenze, spesa alimentare, assicurazioni e rate minime dei debiti. I desideri sono tutto ciò su cui potresti tagliare.",
    },
  },
};

export default it;
