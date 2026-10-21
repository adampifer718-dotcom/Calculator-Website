import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CombinationsText } from "../text/en";

const it: CalculatorTranslation<CombinationsText> = {
  content: {
    title: "Calcolatore di permutazioni e combinazioni",
    shortTitle: "Permutazioni e combinazioni",
    summary:
      "Conta in modo esatto i modi di scegliere o ordinare r elementi su n: nCr, nPr ed entrambi i conteggi con ripetizione.",
    metaTitle: "Calcolatore di permutazioni e combinazioni – nCr, nPr",
    metaDescription:
      "Calcola nCr e nPr esatti per n fino a 10.000, oltre a combinazioni e permutazioni con ripetizione, con i risultati enormi in notazione scientifica.",
    keywords: [
      "permutazioni",
      "combinazioni",
      "calcolatore combinazioni",
      "nCr",
      "nPr",
      "coefficiente binomiale",
      "combinazioni con ripetizione",
      "disposizioni",
      "calcolo combinatorio",
      "fattoriale",
    ],
    intro: [
      "Quanti comitati diversi di 4 persone può formare un club di 12 membri? In quanti modi si possono assegnare 3 premi tra 25 partecipanti? Sono problemi di conteggio, e la risposta dipende dal fatto che l'ordine conti o meno.",
      "Una combinazione conta le selezioni in cui l'ordine non conta: il comitato {Ana, Ben, Cy} è lo stesso in qualsiasi ordine. Una permutazione conta gli ordinamenti in cui l'ordine conta: primo, secondo e terzo premio sono risultati diversi. Questo calcolatore fornisce entrambi i valori in modo esatto, oltre alle versioni in cui un elemento può essere scelto più di una volta.",
    ],
    howToUse: [
      "Inserisci n, il numero di elementi distinti tra cui scegliere (da 0 a 10.000).",
      "Inserisci r, quanti elementi scegli (da 0 a n).",
      "Leggi nCr per le selezioni senza ordine e nPr per gli ordinamenti.",
      "Usa i risultati con ripetizione quando lo stesso elemento può essere scelto di nuovo, come le palline di gelato (combinazioni) o le cifre di un PIN (permutazioni).",
    ],
    formulas: [
      {
        title: "Combinazioni",
        expression: "nCr = n! ÷ (r! × (n − r)!)",
        explanation: "Selezioni di r elementi su n in cui l'ordine non conta.",
      },
      {
        title: "Permutazioni",
        expression: "nPr = n! ÷ (n − r)! = n × (n − 1) × … × (n − r + 1)",
        explanation: "Ordinamenti di r elementi su n. nPr = nCr × r!",
      },
      {
        title: "Combinazioni con ripetizione",
        expression: "C(n + r − 1, r)",
        explanation: "Selezioni di r elementi da n tipi quando un tipo può essere scelto più di una volta (il conteggio «stelle e barre»).",
      },
      {
        title: "Permutazioni con ripetizione",
        expression: "nʳ",
        explanation: "Sequenze ordinate di lunghezza r in cui ogni posizione può essere uno qualsiasi degli n elementi.",
      },
    ],
    examples: [
      {
        title: "Comitati di 4 persone in un club di 12",
        steps: ["12C4 = 12! ÷ (4! × 8!)", "= (12 × 11 × 10 × 9) ÷ (4 × 3 × 2 × 1) = 11.880 ÷ 24", "= 495 comitati diversi"],
      },
      {
        title: "Oro, argento e bronzo tra 25 partecipanti",
        steps: [
          "Per le medaglie l'ordine conta: 25P3 = 25 × 24 × 23 = 13.800",
          "Se i 3 vincitori ricevessero premi identici: 25C3 = 13.800 ÷ 3! = 2.300",
          "Il risultato principale mostra 2.300; il numero di permutazioni compare sotto",
        ],
      },
      {
        title: "Scegliere 100 elementi su 200",
        steps: [
          "200C100 = 200! ÷ (100! × 100!)",
          "Il valore esatto ha 59 cifre e inizia con 9.054.851.465…",
          "Viene mostrato come 9,054851 × 10⁵⁸ (59 cifre)",
        ],
      },
    ],
    assumptions: [
      "Gli n elementi sono distinti. Contare gli ordinamenti di elementi ripetuti (come le lettere di BANANA) richiede un'altra formula.",
      "Tutti e quattro i risultati sono calcolati in modo esatto con l'aritmetica dei numeri interi. I risultati con più di 30 cifre sono mostrati in notazione scientifica, arrotondati a 7 cifre significative, insieme al numero totale di cifre.",
      "Per convenzione 0! = 1, quindi nC0 = nP0 = 1 e non scegliere nulla conta come un modo.",
      "n è limitato a 10.000 per mantenere rapidi i risultati; anche così, nʳ può arrivare a 40.001 cifre.",
    ],
    faqs: [
      {
        question: "Come capisco se usare una permutazione o una combinazione?",
        answer:
          "Chiediti se scambiare due degli elementi scelti dà un risultato diverso. Se sì, come per posti a sedere, classifiche o password, usa una permutazione. Se no, come per una mano di carte o un gruppo di persone, usa una combinazione.",
      },
      {
        question: "Perché nCr è uguale a nC(n − r)?",
        answer:
          "Scegliere r elementi da prendere equivale a scegliere gli n − r da lasciare. Per esempio, scegliere 3 persone su 10 per una squadra (120 modi) equivale a scegliere le 7 che restano fuori (sempre 120 modi).",
      },
      {
        question: "Che cosa significa «con ripetizione»?",
        answer:
          "Significa che un elemento può essere scelto più di una volta. Un PIN di 4 cifre usa le permutazioni con ripetizione: 10⁴ = 10.000 codici. Scegliere 3 palline di gelato tra 5 gusti, potendo ripetere il gusto, usa le combinazioni con ripetizione: C(7, 3) = 35.",
      },
    ],
    sourcesUsedFor: [
      "Il principio moltiplicativo e le formule di permutazioni e combinazioni di n oggetti distinti.",
    ],
  },
  text: {
    n: "Totale degli elementi (n)",
    nHelp: "Un numero intero da 0 a 10.000.",
    r: "Elementi scelti (r)",
    rHelp: "Un numero intero da 0 a n.",
    rTooLarge: "r non può essere maggiore di n ({n}). Non puoi scegliere più elementi distinti di quanti ce ne siano.",
    combinations: "Combinazioni, nCr (l'ordine non conta)",
    permutations: "Permutazioni, nPr (l'ordine conta)",
    combinationsRepeat: "Combinazioni con ripetizione, C(n + r − 1, r)",
    permutationsRepeat: "Permutazioni con ripetizione, nʳ",
    digits: { zero: "{n} cifre", one: "{n} cifra", two: "{n} cifre", few: "{n} cifre", many: "{n} cifre", other: "{n} cifre" },
    large: "{value} ({digits})",
    caption: "Modi di scegliere {r} elementi su {n} quando l'ordine non conta.",
    largeNote:
      "I risultati con più di 30 cifre sono mostrati in notazione scientifica, arrotondati a 7 cifre significative, con il numero esatto di cifre.",
    zeroRepeat: "Con n = 0 e r = 0 c'è esattamente un modo di non scegliere nulla, quindi tutti i conteggi valgono 1.",
  },
};

export default it;
