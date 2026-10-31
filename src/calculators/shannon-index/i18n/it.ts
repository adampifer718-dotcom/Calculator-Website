import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ShannonIndexText } from "../text/en";

const it: CalculatorTranslation<ShannonIndexText> = {
  content: {
    title: "Calcolatore dell'indice di diversità di Shannon",
    shortTitle: "Indice di Shannon",
    summary:
      "Calcola l'indice di diversità di Shannon H′, l'equiripartizione di Pielou, il numero effettivo di specie e gli indici di Simpson dal numero di individui per specie.",
    metaTitle: "Indice di diversità di Shannon – H′ ed equiripartizione",
    metaDescription:
      "Trova l'indice di Shannon H′ dai conteggi per specie in ln, log2 o log10, con equiripartizione di Pielou J′, numero effettivo di specie e indici di Simpson.",
    keywords: [
      "indice di Shannon",
      "indice di Shannon-Wiener",
      "diversità delle specie",
      "indice di biodiversità",
      "equiripartizione di Pielou",
      "indice di Simpson",
      "ricchezza di specie",
      "ecologia",
    ],
    intro: [
      "L'indice di Shannon H′ (detto anche di Shannon-Wiener o di Shannon-Weaver) misura la diversità di una comunità a partire da quanti individui di ciascuna specie hai contato. Cresce con il numero di specie e con quanto uniformemente gli individui sono distribuiti tra esse, e vale 0 quando è presente una sola specie.",
      "Questo calcolatore fornisce H′ nella base del logaritmo che scegli, l'equiripartizione di Pielou J′, il numero effettivo di specie e l'indice di Simpson con le sue forme di Gini-Simpson e inversa, oltre a una tabella con la proporzione di ciascuna specie sul totale.",
    ],
    howToUse: [
      "Inserisci il numero di individui contati per ciascuna specie, un conteggio per specie, separati da punti e virgola, spazi o a capo.",
      "Scegli la base del logaritmo. Il logaritmo naturale è il più comune in ecologia; la base 2 dà H′ in bit.",
      "Leggi H′ e gli altri indici. I conteggi pari a zero sono ammessi ma ignorati, e il risultato indica quanti erano.",
    ],
    formulas: [
      {
        title: "Indice di Shannon",
        expression: "H′ = −Σ pᵢ log pᵢ, con pᵢ = nᵢ ÷ N",
        explanation: "nᵢ è il conteggio della specie i e N il conteggio totale. Sono incluse solo le specie con nᵢ > 0.",
      },
      {
        title: "Equiripartizione di Pielou",
        expression: "J′ = H′ ÷ log S",
        explanation:
          "S è il numero di specie presenti. J′ va da quasi 0 (una specie domina) a 1 (tutte le specie ugualmente comuni) e richiede S ≥ 2.",
      },
      {
        title: "Numero effettivo di specie",
        expression: "D₁ = base^H′ (e^H′ per il logaritmo naturale)",
        explanation: "Il numero di specie ugualmente comuni che darebbe lo stesso H′. Non dipende dalla base.",
      },
      {
        title: "Indice di Simpson",
        expression: "D = Σ nᵢ(nᵢ − 1) ÷ (N(N − 1)); Gini-Simpson = 1 − D; inverso = 1 ÷ D",
        explanation: "D è la probabilità che due individui estratti a caso senza reinserimento appartengano alla stessa specie.",
      },
    ],
    examples: [
      {
        title: "Sei specie di uccelli lungo un transetto",
        steps: [
          "N = 100, quindi le proporzioni sono 0,42, 0,27, 0,15, 0,09, 0,05 e 0,02.",
          "H′ = −(0,42 ln 0,42 + 0,27 ln 0,27 + … + 0,02 ln 0,02) ≈ 1,4472.",
          "J′ = 1,4472 ÷ ln 6 ≈ 0,808; numero effettivo e^1,4472 ≈ 4,25 specie.",
          "D di Simpson = (42·41 + 27·26 + 15·14 + 9·8 + 5·4 + 2·1) ÷ (100·99) = 2.728 ÷ 9.900 ≈ 0,2756.",
        ],
      },
      {
        title: "Conteggi in quadrati di campionamento con specie assenti, in bit",
        steps: [
          "I due zeri vengono ignorati: S = 5 specie e N = 80 individui.",
          "H′ = −Σ pᵢ log₂ pᵢ ≈ 2,0478 bit.",
          "J′ = 2,0478 ÷ log₂ 5 ≈ 0,882.",
        ],
      },
      {
        title: "Una comunità dominata da una specie, in base 10",
        steps: ["p = 0,60, 0,25, 0,10, 0,05.", "H′ = −Σ pᵢ log₁₀ pᵢ ≈ 0,4487.", "Numero effettivo 10^0,4487 ≈ 2,81 specie."],
      },
    ],
    assumptions: [
      "I conteggi sono un campione casuale della comunità e ogni individuo è stato identificato a livello di specie. Le specie rare sfuggono facilmente nei campioni piccoli, e questo abbassa H′.",
      "H′ usa direttamente le proporzioni osservate, senza le correzioni per la distorsione dei piccoli campioni applicate in alcuni studi.",
      "I valori in basi logaritmiche diverse differiscono per un fattore costante (H′ in bit = H′ in nat ÷ ln 2), quindi confronta solo indici nella stessa base.",
      "L'indice di Simpson qui usa la forma per campioni finiti nᵢ(nᵢ − 1) ÷ (N(N − 1)). Alcuni testi usano invece Σ pᵢ², che dà valori leggermente diversi per i campioni piccoli.",
    ],
    faqs: [
      {
        question: "Che cos'è un indice di Shannon alto?",
        answer:
          "Non esiste una scala fissa: H′ cresce con il numero di specie e con l'equiripartizione, e il suo massimo è log S. Per questo l'equiripartizione J′ (H′ ÷ log S) e il numero effettivo di specie sono spesso più facili da interpretare e confrontare.",
      },
      {
        question: "Perché i conteggi pari a zero vengono ignorati?",
        answer:
          "Una specie senza individui ha pᵢ = 0, e il termine pᵢ log pᵢ tende a 0 al diminuire di pᵢ, quindi non aggiunge nulla a H′. Inoltre non conta nella ricchezza di specie S.",
      },
      {
        question: "In che cosa l'indice di Shannon differisce da quello di Simpson?",
        answer:
          "Entrambi combinano ricchezza ed equiripartizione, ma l'indice di Simpson dà più peso alle specie comuni, mentre H′ è più sensibile alle specie rare. Riportarli entrambi, o riportare i numeri effettivi di specie, dà un quadro più completo.",
      },
    ],
    sourcesUsedFor: [
      "L'indice di Shannon H′ = −Σ pᵢ ln pᵢ con pᵢ = nᵢ ÷ N, e un esempio svolto degli indici di Shannon e di Simpson.",
      "L'indice di Simpson dai conteggi, Σ n(n − 1) ÷ (N(N − 1)).",
      "L'equiripartizione come H′ diviso per il suo massimo, log S, che si raggiunge quando tutte le specie sono ugualmente abbondanti.",
    ],
  },
  text: {
    counts: "Individui contati per specie",
    countsHelp: "Un conteggio intero per specie, separati da punti e virgola, spazi o a capo. Gli zeri vengono ignorati.",
    base: "Base del logaritmo",
    bases: { e: "Logaritmo naturale (ln), la scelta abituale", "2": "Base 2 (bit)", "10": "Base 10" },
    errors: {
      empty: "Inserisci almeno un conteggio.",
      tooMany: "Inserisci al massimo {max} conteggi.",
      notNumber: "“{token}” non è un numero. Separa i conteggi con punti e virgola, spazi o a capo.",
      tooLarge: "“{token}” è troppo grande.",
      notInteger: "{value} non è un numero intero. Inserisci il numero di individui di ciascuna specie.",
      negative: "I conteggi non possono essere negativi ({value}).",
      countTooLarge: "Ogni conteggio può essere al massimo {max}.",
      allZero: "Inserisci almeno un conteggio maggiore di zero.",
    },
    result: "Indice di Shannon H′",
    caption: "H′ = −Σ pᵢ log pᵢ, con {log}",
    logNames: { e: "il logaritmo naturale", "2": "il logaritmo in base 2", "10": "il logaritmo in base 10" },
    richness: "Ricchezza di specie S",
    total: "Individui totali N",
    evenness: "Equiripartizione di Pielou J′",
    effective: "Numero effettivo di specie",
    simpson: "Indice di Simpson D",
    giniSimpson: "Indice di Gini-Simpson (1 − D)",
    inverseSimpson: "Indice di Simpson inverso (1 ÷ D)",
    notAvailable: "Non definito per questi conteggi",
    table: {
      caption: "Proporzioni delle specie",
      species: "Specie",
      count: "Conteggio",
      proportion: "Proporzione pᵢ",
      term: "−pᵢ log pᵢ",
      label: "Specie {n}",
    },
    notes: {
      zeros: "Conteggi pari a zero ignorati: {count}. Le specie senza individui non contribuiscono a H′ né a S.",
      single: "Solo una specie ha individui, quindi H′ è 0 e l'equiripartizione non è definita.",
      simpsonUndefined: "L'indice di Simpson richiede almeno 2 individui in totale.",
      simpsonZero: "Ogni specie ha esattamente un individuo, quindi la D di Simpson è 0 e il suo inverso non è definito.",
      truncated: "La tabella mostra le prime {shown} specie con individui.",
      general:
        "H′ dipende dalla base del logaritmo: i valori in basi diverse differiscono per un fattore costante, mentre l'equiripartizione J′ e il numero effettivo di specie no. Confronta gli indici solo se usano la stessa base e lo stesso sforzo di campionamento.",
    },
  },
};

export default it;
