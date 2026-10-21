import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { GcfLcmText } from "../text/en";

const it: CalculatorTranslation<GcfLcmText> = {
  content: {
    title: "Calcolatore di MCD e mcm",
    shortTitle: "MCD e mcm",
    summary: "Trova il massimo comun divisore e il minimo comune multiplo di un elenco di numeri interi, con le scomposizioni in fattori primi.",
    metaTitle: "Calcolatore MCD e mcm – Massimo comun divisore e mcm",
    metaDescription:
      "Trova il massimo comun divisore e il minimo comune multiplo di 2–20 numeri interi, con la scomposizione in fattori primi di ciascun numero.",
    keywords: ["mcd", "mcm", "massimo comun divisore", "minimo comune multiplo", "scomposizione in fattori primi", "denominatore comune", "algoritmo di Euclide"],
    intro: [
      "Il massimo comun divisore (MCD) di un insieme di numeri interi è il numero più grande che li divide tutti senza resto. Il minimo comune multiplo (mcm) è il più piccolo numero positivo che è divisibile per ciascuno di essi.",
      "L'MCD serve a semplificare le frazioni e l'mcm a trovare un denominatore comune o a capire quando dei cicli ripetuti tornano a coincidere. Inserisci i tuoi numeri per ottenerli entrambi, insieme ai fattori primi di ciascun numero.",
    ],
    howToUse: [
      "Scrivi da 2 a 20 numeri interi positivi, separati da virgole, spazi o a capo.",
      "Ogni numero può arrivare fino a mille miliardi (10¹²).",
      "Leggi l'MCD e l'mcm. L'mcm viene calcolato in modo esatto, anche quando ha molte cifre.",
      "Consulta la tabella delle scomposizioni in fattori primi per vedere da dove derivano entrambi i risultati.",
    ],
    formulas: [
      { title: "Algoritmo di Euclide", expression: "MCD(a, b) = MCD(b, a mod b),  MCD(a, 0) = a", explanation: "Sostituisce il numero maggiore con il resto finché il resto è 0. L'ultimo valore diverso da zero è l'MCD." },
      { title: "mcm di due numeri", expression: "mcm(a, b) = a ÷ MCD(a, b) × b", explanation: "Dividere prima mantiene piccoli i numeri intermedi." },
      { title: "Più di due numeri", expression: "MCD(a, b, c) = MCD(MCD(a, b), c),  mcm(a, b, c) = mcm(mcm(a, b), c)", explanation: "Entrambe le operazioni si applicano un numero alla volta." },
      { title: "Dai fattori primi", expression: "MCD = prodotto dei primi comuni con l'esponente minore;  mcm = prodotto di tutti i primi con l'esponente maggiore", explanation: "Gli stessi risultati, letti dalla tabella delle scomposizioni." },
    ],
    examples: [
      {
        title: "48 e 180",
        steps: ["180 mod 48 = 36, 48 mod 36 = 12, 36 mod 12 = 0, quindi l'MCD è 12", "mcm = 48 ÷ 12 × 180 = 720", "Verifica: 48 = 2⁴ × 3 e 180 = 2² × 3² × 5, quindi MCD = 2² × 3 = 12 e mcm = 2⁴ × 3² × 5 = 720"],
      },
      {
        title: "84, 126 e 210",
        steps: ["84 = 2² × 3 × 7, 126 = 2 × 3² × 7, 210 = 2 × 3 × 5 × 7", "Primi comuni con l'esponente minore: 2 × 3 × 7 = 42", "Tutti i primi con l'esponente maggiore: 2² × 3² × 5 × 7 = 1.260"],
      },
      {
        title: "35 e 64 (nessun fattore comune)",
        steps: ["35 = 5 × 7 e 64 = 2⁶ non hanno primi in comune", "MCD = 1, quindi i numeri sono coprimi", "mcm = 35 × 64 = 2.240"],
      },
    ],
    assumptions: [
      "Sono accettati solo numeri interi positivi. MCD e mcm di zero o di numeri negativi seguono convenzioni diverse, quindi vengono rifiutati.",
      "Ogni numero è limitato a 10¹² perché la scomposizione in fattori primi resti veloce. L'mcm stesso è calcolato con aritmetica esatta su interi grandi e può essere molto più grande.",
      "I numeri ripetuti sono ammessi e non cambiano i risultati; ogni numero distinto compare una sola volta nella tabella delle scomposizioni.",
    ],
    faqs: [
      { question: "MCD, GCD e HCF sono la stessa cosa?", answer: "Sì. Massimo comun divisore, massimo comune fattore e le sigle inglesi GCF, GCD e HCF indicano tutti lo stesso numero." },
      { question: "Che relazione c'è tra MCD e mcm?", answer: "Per due numeri, MCD × mcm è uguale al prodotto dei numeri. Per 48 e 180: 12 × 720 = 8.640 = 48 × 180. Questa scorciatoia non vale per tre o più numeri." },
      { question: "Come uso l'mcm per sommare le frazioni?", answer: "L'mcm dei denominatori è il minimo comune denominatore. Per 1/12 + 1/18, l'mcm di 12 e 18 è 36, quindi riscrivi la somma come 3/36 + 2/36 = 5/36." },
    ],
    sourcesUsedFor: ["L'algoritmo di Euclide per il massimo comun divisore.", "La scomposizione in fattori primi e il minimo comune multiplo."],
  },
  text: {
    numbers: "Numeri interi",
    numbersHelp: "Inserisci da 2 a 20 numeri interi positivi, separati da virgole, spazi o a capo.",
    errors: {
      empty: "Inserisci almeno due numeri.",
      tooMany: "Inserisci al massimo {max} numeri.",
      notNumber: "«{token}» non è un numero. Separa i valori con virgole, spazi o a capo.",
      tooLarge: "«{token}» è troppo grande.",
    },
    needTwo: "Inserisci almeno due numeri.",
    maxCount: "Inserisci al massimo {max} numeri.",
    notWhole: "{value} non è un numero intero. Inserisci solo numeri interi.",
    notPositive: "{value} non è positivo. Ogni numero deve essere almeno 1.",
    tooBig: "{value} è troppo grande. Ogni numero può essere al massimo {max}.",
    gcf: "Massimo comun divisore (MCD)",
    gcfCaption: "Detto anche massimo comune fattore; in inglese GCF, GCD o HCF.",
    lcm: "Minimo comune multiplo (mcm)",
    lcmDigits: "Cifre dell'mcm",
    coprime: "L'MCD è 1, quindi questi numeri non hanno fattori comuni diversi da 1 (sono coprimi).",
    factorTable: "Scomposizione in fattori primi",
    numberColumn: "Numero",
    factorsColumn: "Fattori primi",
    noPrimeFactors: "1 (nessun fattore primo)",
    isPrime: "{factors} (primo)",
  },
};

export default it;
