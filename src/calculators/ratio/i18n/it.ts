import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RatioText } from "../text/en";

const it: CalculatorTranslation<RatioText> = {
  content: {
    title: "Calcolatore di rapporti e proporzioni",
    shortTitle: "Rapporti",
    summary: "Semplifica un rapporto di due o tre termini, risolvi una proporzione trovando il termine mancante o dividi una quantità secondo un rapporto dato.",
    metaTitle: "Calcolatore di rapporti – Semplifica, risolvi e ripartisci",
    metaDescription:
      "Semplifica rapporti con termini interi o decimali, trova il termine mancante in A : B = C : x o dividi una quantità in due o tre parti secondo un rapporto.",
    keywords: [
      "calcolo rapporto",
      "semplificare un rapporto",
      "proporzioni",
      "termine mancante",
      "dividere in parti proporzionali",
      "ripartizione proporzionale",
      "rapporto 1 a n",
    ],
    intro: [
      "Un rapporto confronta delle quantità: 3 : 4 significa tre parti di una cosa per ogni quattro parti di un'altra. I rapporti compaiono nelle ricette, nelle miscele di calcestruzzo o di vernice, nelle scale delle mappe, nel formato degli schermi e nella divisione delle spese.",
      "Questo calcolatore svolge i tre compiti più richiesti. Riduce un rapporto di due o tre termini ai minimi termini interi, anche quando i termini sono decimali; risolve una proporzione A : B = C : x trovando il termine mancante; e divide una quantità in parti che seguono un rapporto.",
    ],
    howToUse: [
      "Scegli l'operazione.",
      "Per semplificare o dividere, inserisci due o tre termini positivi. Lascia vuoto il terzo termine per un rapporto a due parti.",
      "Per trovare un termine mancante, inserisci A, B e C di A : B = C : x.",
      "Per dividere, inserisci anche la quantità da ripartire, poi leggi nella tabella la quota di ogni parte.",
    ],
    formulas: [
      {
        title: "Semplificazione",
        expression: "A : B : C = (A ÷ g) : (B ÷ g) : (C ÷ g)",
        explanation:
          "g è il massimo comun divisore dei termini. I termini decimali vengono prima moltiplicati per la stessa potenza di 10 per renderli interi: 1,5 : 2,25 diventa 150 : 225.",
      },
      {
        title: "Termine mancante",
        expression: "A : B = C : x  ⇒  x = B × C ÷ A",
        explanation: "Due rapporti sono uguali quando i prodotti incrociati sono uguali, A × x = B × C. A non può essere 0.",
      },
      {
        title: "Divisione di una quantità",
        expression: "quota della parte i = quantità × termine i ÷ (somma dei termini)",
        explanation: "Ogni parte riceve la frazione del totale pari alla frazione che il suo termine rappresenta sulla somma di tutti i termini.",
      },
      {
        title: "Forma 1 : n",
        expression: "A : B = 1 : (B ÷ A)",
        explanation: "Dividendo ogni termine per il primo si ottiene un rapporto unitario, comodo per le scale e le istruzioni di miscelazione.",
      },
    ],
    examples: [
      {
        title: "Semplifica 1,5 : 2,25 : 3",
        steps: ["Moltiplica ogni termine per 100: 150 : 225 : 300", "Il massimo comun divisore è 75", "150 ÷ 75 : 225 ÷ 75 : 300 ÷ 75 = 2 : 3 : 4"],
      },
      {
        title: "Adatta una ricetta: 4 uova richiedono 7 dl di latte; quanto latte per 10 uova?",
        steps: ["4 : 7 = 10 : x", "x = 7 × 10 ÷ 4", "x = 17,5 dl di latte"],
      },
      {
        title: "Ripartisci 700 nel rapporto 2 : 3 : 5",
        steps: [
          "Parti totali = 2 + 3 + 5 = 10, quindi una parte vale 700 ÷ 10 = 70",
          "Quote: 2 × 70 = 140, 3 × 70 = 210, 5 × 70 = 350",
          "Verifica: 140 + 210 + 350 = 700",
        ],
      },
    ],
    assumptions: [
      "Per semplificare e dividere, i termini del rapporto devono essere positivi. I decimali sono trattati in modo esatto a partire dalle cifre che digiti, fino a 40 cifre per termine.",
      "La modalità del termine mancante accetta qualsiasi numero, anche negativo, purché A non sia 0.",
      "Le quote sono mostrate con al massimo 4 decimali e non sono arrotondate a unità intere, quindi per denaro o persone potresti dover correggere a mano l'ultima quota.",
    ],
    faqs: [
      {
        question: "Come si semplifica un rapporto con i decimali?",
        answer:
          "Moltiplica tutti i termini per la stessa potenza di 10 finché diventano interi, poi dividili per il loro massimo comun divisore. 0,6 : 0,8 diventa 6 : 8, che si semplifica in 3 : 4.",
      },
      {
        question: "Qual è la differenza tra un rapporto e una frazione?",
        answer:
          "Una frazione confronta una parte con il tutto, mentre un rapporto può confrontare le parti tra loro. In una classe con 12 ragazze e 18 ragazzi, il rapporto tra ragazze e ragazzi è 2 : 3, ma la frazione di ragazze è 12/30 = 2/5.",
      },
      {
        question: "Come divido un conto secondo un rapporto?",
        answer:
          "Scegli «Dividi una quantità secondo un rapporto», inserisci il conto e la quota del rapporto di ciascuna persona. Per 90 diviso 1 : 2, il totale è di 3 parti da 30, quindi le quote sono 30 e 60.",
      },
    ],
    sourcesUsedFor: ["Definizione di proporzione e sua risoluzione rispetto a un termine incognito."],
  },
  text: {
    mode: "Operazione",
    modes: {
      simplify: "Semplifica un rapporto",
      missing: "Trova un termine mancante (A : B = C : x)",
      divide: "Dividi una quantità secondo un rapporto",
    },
    termA: "Primo termine (A)",
    termB: "Secondo termine (B)",
    termC: "Terzo termine (facoltativo)",
    termHelp: "Un numero positivo. Sono ammessi decimali come 1,5.",
    termInvalid: "Inserisci un numero positivo come 4 o 1,5.",
    termTooLong: "Inserisci al massimo 40 cifre.",
    propA: "A",
    propB: "B",
    propC: "C",
    propHelp: "Risolve A : B = C : x rispetto a x.",
    propAZero: "A non può essere 0, perché x = B × C ÷ A.",
    amount: "Quantità da dividere",
    amountHelp: "Qualsiasi quantità: denaro, grammi, litri, persone o minuti.",
    simplified: "Rapporto semplificato",
    simplifiedCaption: "{original} ridotto ai minimi termini interi.",
    decimalValue: "Valore decimale (A ÷ B)",
    oneToN: "Forma 1 : n",
    totalParts: "Parti totali",
    missingTerm: "Termine mancante x",
    missingCaption: "{a} : {b} = {c} : x",
    proportion: "Proporzione completa",
    ratioValue: "Valore del rapporto (B ÷ A)",
    shares: "Quote",
    sharesCaption: "{amount} diviso nel rapporto {ratio}.",
    sharesTable: "Come viene ripartita la quantità",
    colPart: "Parte",
    colTerm: "Termine del rapporto",
    colShare: "Quota",
    colPercent: "Percentuale del totale",
    partN: "Parte {n}",
    decimalNote:
      "I termini decimali vengono prima moltiplicati per la stessa potenza di 10 per renderli interi, poi divisi per il loro massimo comun divisore.",
  },
};

export default it;
