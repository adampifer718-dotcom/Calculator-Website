import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FeedConversionRatioText } from "../text/en";

const it: CalculatorTranslation<FeedConversionRatioText> = {
  content: {
    title: "Calcolatore dell'indice di conversione alimentare",
    shortTitle: "Indice di conversione alimentare",
    summary:
      "Calcola l'indice di conversione alimentare (FCR) di bestiame, pollame o pesci dal mangime usato e dal peso guadagnato, con l'indice corretto per la mortalità e il costo del mangime per unità di accrescimento.",
    metaTitle: "Indice di conversione alimentare – Calcolatore FCR",
    metaDescription:
      "Calcola l'FCR come mangime consumato ÷ accrescimento di peso vivo, con indice corretto per la mortalità, efficienza alimentare e costo del mangime per kg o lb.",
    keywords: [
      "indice di conversione alimentare",
      "FCR",
      "ICA",
      "efficienza alimentare",
      "zootecnia",
      "acquacoltura",
      "accrescimento",
      "costo del mangime",
    ],
    intro: [
      "L'indice di conversione alimentare (FCR) indica quanto mangime serve agli animali per guadagnare un'unità di peso vivo. Un FCR di 2 significa 2 kg di mangime per ogni chilogrammo guadagnato, o 2 lb per libbra: l'unità si semplifica purché mangime e peso usino la stessa. Un FCR più basso significa che il mangime viene trasformato in crescita in modo più efficiente.",
      "Inserisci il mangime usato in un periodo e il peso vivo totale del gruppo all'inizio e alla fine. Se alcuni animali sono morti o sono stati allontanati, aggiungi il loro peso per ottenere l'FCR corretto per la mortalità, che non conta il loro mangime come sprecato. Con un prezzo del mangime e un numero di capi ottieni anche il costo del mangime per unità di accrescimento e l'accrescimento per capo.",
    ],
    howToUse: [
      "Scegli chilogrammi o libbre e usa quell'unità per il mangime e per tutti i pesi.",
      "Inserisci il mangime totale consumato nel periodo e il peso vivo complessivo del gruppo all'inizio e alla fine.",
      "Se nel periodo alcuni animali sono morti o sono stati allontanati, inserisci il loro peso complessivo per ottenere l'FCR corretto per la mortalità.",
      "Se vuoi, inserisci il prezzo del mangime per kg o lb e il numero di animali.",
    ],
    formulas: [
      {
        title: "Accrescimento di peso vivo",
        expression: "accrescimento = peso finale − peso iniziale + peso degli animali allontanati",
        explanation: "Lascia vuoto il peso degli animali allontanati per l'accrescimento semplice degli animali ancora presenti.",
      },
      {
        title: "Indice di conversione alimentare",
        expression: "FCR = mangime consumato ÷ accrescimento di peso vivo",
        explanation: "Mangime e pesi usano la stessa unità, quindi l'indice è adimensionale.",
      },
      {
        title: "Efficienza alimentare",
        expression: "efficienza alimentare = accrescimento ÷ mangime × 100%",
        explanation: "L'inverso dell'FCR, espresso in percentuale.",
      },
      {
        title: "Costo del mangime per unità di accrescimento",
        expression: "costo per kg (o lb) di accrescimento = mangime × prezzo ÷ accrescimento = FCR × prezzo",
        explanation: "Il costo del mangime di ogni unità di peso vivo prodotta.",
      },
    ],
    examples: [
      {
        title: "Un gruppo di suini in una fase di accrescimento",
        steps: [
          "Accrescimento: 2.850 − 900 = 1.950 kg.",
          "FCR: 4.200 ÷ 1.950 ≈ 2,15.",
          "Efficienza alimentare: 1.950 ÷ 4.200 ≈ 46,4%.",
        ],
      },
      {
        title: "Un gruppo di polli da carne con perdite e mangime a prezzo noto",
        steps: [
          "Accrescimento compresi i capi allontanati: 4.510 − 1.080 + 160 = 3.590 kg.",
          "FCR corretto per la mortalità: 5.300 ÷ 3.590 ≈ 1,48 (senza i capi allontanati: 5.300 ÷ 3.430 ≈ 1,55).",
          "Costo del mangime per kg di accrescimento: 5.300 × $0,21 ÷ 3.590 ≈ $0,31.",
        ],
      },
      {
        title: "Agnelli pesati in libbre",
        steps: ["Accrescimento: 612 − 410 = 202 lb.", "FCR: 380 ÷ 202 ≈ 1,88 lb di mangime per lb di accrescimento."],
      },
    ],
    assumptions: [
      "Mangime e pesi sono tutti nella stessa unità, e il dato del mangime è quello effettivamente mangiato dagli animali (oppure il mangime fornito meno gli avanzi o gli sprechi, se è così che lo registri).",
      "I pesi sono pesi vivi totali del gruppo. Pesi macellati o delle carcasse danno un indice diverso.",
      "L'FCR corretto per la mortalità aggiunge all'accrescimento il peso degli animali morti o allontanati. Alcuni allevatori lo registrano in modo diverso, per esempio con il peso iniziale o escludendo gli scarti, quindi verifica il metodo prima di confrontare i dati.",
      "Non vengono forniti valori di riferimento, perché gli FCR tipici variano molto tra specie, età, razze, diete e metodi di registrazione.",
    ],
    faqs: [
      {
        question: "È meglio un FCR più basso o più alto?",
        answer:
          "Più basso. Un FCR di 1,5 significa 1,5 unità di mangime per unità di accrescimento, mentre 2,0 significa 2 unità. L'efficienza alimentare, che ne è l'inverso, funziona al contrario: più alta è meglio.",
      },
      {
        question: "Perché aggiungere il peso degli animali morti?",
        answer:
          "Quegli animali hanno mangiato e sono cresciuti prima di morire o di essere allontanati. Escludere il loro peso fa sembrare il mangime meno efficiente di quanto fosse, mescolando le perdite per mortalità nell'FCR. Mostrare entrambi i valori tiene separati i due effetti.",
      },
      {
        question: "L'unità di misura conta?",
        answer:
          "No, purché mangime e pesi usino la stessa. L'FCR è un rapporto, quindi 2,15 kg/kg equivale a 2,15 lb/lb. Solo il costo del mangime per unità di accrescimento dipende dall'unità, perché il prezzo è per kg o per lb.",
      },
    ],
    sourcesUsedFor: [
      "FCR = mangime totale somministrato ÷ peso guadagnato, nella stessa unità, con valori più bassi che indicano una crescita più efficiente.",
      "La conversione alimentare come peso di mangime necessario per un'unità di accrescimento, e il costo del mangime per unità di accrescimento.",
    ],
  },
  text: {
    unit: "Unità di massa",
    units: { kg: "Chilogrammi (kg)", lb: "Libbre (lb)" },
    feed: "Mangime consumato",
    feedHelp: "Mangime totale mangiato dal gruppo nel periodo, nell'unità scelta.",
    initial: "Peso vivo totale iniziale",
    initialHelp: "Peso complessivo degli animali all'inizio del periodo.",
    final: "Peso vivo totale finale",
    finalHelp: "Peso complessivo degli animali ancora presenti alla fine del periodo.",
    removed: "Peso degli animali morti o allontanati",
    removedHelp: "Facoltativo. Il loro peso al momento della morte o dell'uscita dal gruppo. Aggiungerlo dà l'FCR corretto per la mortalità.",
    price: "Prezzo del mangime per unità di massa",
    priceHelp:
      "Facoltativo. Il prezzo di 1 kg o 1 lb di mangime, nell'unità di massa scelta sopra. Serve per il costo del mangime per unità di accrescimento.",
    head: "Numero di animali",
    headHelp: "Facoltativo. Serve per l'accrescimento per capo.",
    errors: {
      noGain: "L'accrescimento di peso vivo è zero o negativo, quindi l'indice di conversione alimentare non si può calcolare. Controlla i pesi.",
    },
    result: "Indice di conversione alimentare (FCR)",
    resultAdjusted: "Indice di conversione alimentare (FCR), corretto per la mortalità",
    caption: "Mangime consumato ÷ accrescimento di peso vivo",
    unadjusted: "FCR senza gli animali allontanati",
    unadjustedNone: "Non significativo (nessun accrescimento negli animali rimasti)",
    efficiency: "Efficienza alimentare (accrescimento ÷ mangime)",
    gain: "Accrescimento totale di peso vivo",
    gainUnadjusted: "Accrescimento dei soli animali rimasti",
    gainPerHead: "Accrescimento per capo",
    feedCost: "Costo totale del mangime",
    costPerGain: "Costo del mangime per {unit} di accrescimento",
    notes: {
      meaning: "Un FCR di {fcr} significa {fcr} {unit} di mangime per {unit} di accrescimento di peso vivo. Più basso è, più è efficiente.",
      adjusted:
        "Il peso degli animali allontanati viene aggiunto all'accrescimento, così il loro mangime non viene contato come sprecato. Il valore non corretto è mostrato per confronto.",
      general:
        "I valori tipici variano molto con specie, età, razza, dieta e modo di misurare mangime e pesi, quindi confronta gli FCR solo se sono misurati allo stesso modo.",
    },
  },
};

export default it;
