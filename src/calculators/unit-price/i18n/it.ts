import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { UnitPriceText } from "../text/en";

const it: CalculatorTranslation<UnitPriceText> = {
  content: {
    title: "Calcolatore del prezzo unitario",
    shortTitle: "Prezzo unitario",
    summary: "Confronta due confezioni in base al prezzo al chilo, al litro o al pezzo per capire qual è l'acquisto più conveniente.",
    metaTitle: "Calcolatore del prezzo unitario – Confronta il prezzo al kg",
    metaDescription:
      "Confronta due prodotti in base al prezzo al kg, al litro o al pezzo, anche se uno è in once o galloni, e scopri quanto fa risparmiare il più economico.",
    keywords: ["prezzo unitario", "prezzo al kg", "prezzo al litro", "prezzo per unità", "confronto prezzi", "acquisto conveniente", "spesa al supermercato"],
    intro: [
      "Una confezione più grande non è sempre più economica al grammo. Il prezzo unitario, cioè il prezzo diviso per la quantità, è il modo corretto di confrontare due formati o due marche.",
      "Inserisci il prezzo e la quantità di ogni prodotto. Le quantità possono essere in unità metriche o statunitensi; entrambe vengono convertite in un'unità comune prima del confronto.",
    ],
    howToUse: [
      "Scegli la valuta dei prezzi.",
      "Per il prodotto A, inserisci il prezzo, la quantità nella confezione e la sua unità.",
      "Fai lo stesso per il prodotto B, usando un'unità dello stesso tipo: peso, volume o numero di pezzi.",
      "Leggi quale prodotto costa meno, il prezzo di ciascuno al chilo, al litro o al pezzo e la percentuale risparmiata.",
    ],
    formulas: [
      { title: "Prezzo unitario", expression: "prezzo unitario = prezzo ÷ quantità", explanation: "La quantità viene prima convertita in chilogrammi, litri o pezzi." },
      {
        title: "Percentuale risparmiata",
        expression: "risparmio = (più alto − più basso) ÷ più alto × 100",
        explanation: "Quanto paghi in meno per unità scegliendo il prodotto più economico.",
      },
      {
        title: "Unità statunitensi",
        expression: "1 oz = 28,349523125 g; 1 lb = 453,59237 g; 1 fl oz = 29,5735295625 mL; 1 gal = 3,785411784 L",
        explanation: "Definizioni esatte, così il confronto non dipende dagli arrotondamenti.",
      },
    ],
    examples: [
      {
        title: "500 g a $3,49 contro 1 kg a $5,99",
        steps: ["A: 3,49 ÷ 0,5 kg = $6,98 al kg", "B: 5,99 ÷ 1 kg = $5,99 al kg", "B fa risparmiare (6,98 − 5,99) ÷ 6,98 ≈ 14,18%"],
      },
      {
        title: "64 fl oz di succo a $4,29 contro 1,75 L a $3,19",
        steps: ["64 fl oz = 64 × 29,5735295625 mL ≈ 1,8927 L", "A: 4,29 ÷ 1,8927 ≈ $2,27 al L", "B: 3,19 ÷ 1,75 ≈ $1,82 al L, circa il 19,58% in meno"],
      },
      {
        title: "12 uova a $3,60 contro 18 uova a $5,58",
        steps: ["A: 3,60 ÷ 12 = $0,30 a uovo", "B: 5,58 ÷ 18 = $0,31 a uovo", "A fa risparmiare (0,31 − 0,30) ÷ 0,31 ≈ 3,23%"],
      },
    ],
    assumptions: [
      "Entrambi i prodotti ti sono ugualmente utili: stessa qualità, e userai tutta la confezione più grande.",
      "Le once sono once di peso avoirdupois, mentre once fluide e galloni sono misure statunitensi. Pinte e galloni imperiali britannici sono più grandi e non sono elencati.",
      "I prezzi sono confrontati così come li inserisci; imposte, cauzioni e buoni sconto non vengono aggiunti.",
      "La scelta della valuta cambia solo la formattazione.",
    ],
    faqs: [
      {
        question: "Posso confrontare un prodotto venduto a peso con uno venduto a volume?",
        answer: "Non direttamente. Grammi e millilitri coincidono solo per liquidi simili all'acqua, quindi il calcolatore richiede unità dello stesso tipo. Controlla l'etichetta: molte confezioni riportano entrambe.",
      },
      {
        question: "Perché confrontare al chilo o al litro invece che al grammo?",
        answer: "I prezzi al grammo sono minuscoli e difficili da leggere. Al chilo o al litro ottieni numeri simili a quelli delle etichette sugli scaffali, e la classifica non cambia.",
      },
      {
        question: "Il prezzo unitario sullo scaffale è sempre corretto?",
        answer: "Di solito sì, ma i negozi possono usare unità diverse su etichette vicine, per esempio all'oncia su una e alla libbra sull'altra. Inserendo qui entrambi i prodotti li porti sulla stessa unità.",
      },
    ],
    sourcesUsedFor: [
      "Come i prezzi unitari al dettaglio vengono espressi per unità di peso, volume o numero di pezzi.",
      "Fattori di conversione esatti per l'oncia e la libbra avoirdupois e per l'oncia fluida e il gallone statunitensi.",
    ],
  },
  text: {
    priceA: "Prezzo del prodotto A",
    quantityA: "Quantità del prodotto A",
    unitA: "Unità del prodotto A",
    priceB: "Prezzo del prodotto B",
    quantityB: "Quantità del prodotto B",
    unitB: "Unità del prodotto B",
    quantityHelp: "La quantità nella confezione, per esempio 500 per un sacchetto da 500 g.",
    units: {
      g: "Grammi (g)",
      kg: "Chilogrammi (kg)",
      oz: "Once (oz)",
      lb: "Libbre (lb)",
      mL: "Millilitri (mL)",
      L: "Litri (L)",
      floz: "Once fluide USA (fl oz)",
      gal: "Galloni USA (gal)",
      item: "Pezzi (numero)",
    },
    perUnit: { mass: "kg", volume: "L", count: "pezzo" },
    kindMismatch: "Il prodotto B deve essere misurato come il prodotto A: entrambi a peso, entrambi a volume o entrambi a pezzi.",
    aCheaper: "Il prodotto A costa meno per unità",
    bCheaper: "Il prodotto B costa meno per unità",
    same: "Entrambi costano uguale per unità",
    result: "Acquisto più conveniente",
    caption: "{a} per il prodotto A e {b} per il prodotto B, per {unit}.",
    unitPriceA: "Prezzo del prodotto A per {unit}",
    unitPriceB: "Prezzo del prodotto B per {unit}",
    saving: "Risparmio per unità con il prodotto più economico",
    difference: "Differenza di prezzo per {unit}",
    notes: {
      compare: "I prezzi sono confrontati per {unit} dopo aver convertito entrambe le quantità nella stessa unità.",
      waste: "Un prezzo unitario più basso è un vero risparmio solo se userai la quantità maggiore prima che vada a male.",
    },
  },
};

export default it;
