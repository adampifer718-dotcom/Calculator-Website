import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CoffeeRatioText } from "../text/en";

const it: CalculatorTranslation<CoffeeRatioText> = {
  content: {
    title: "Calcolatore del rapporto caffè-acqua",
    shortTitle: "Rapporto caffè-acqua",
    summary:
      "Calcola quanto caffè macinato usare per una certa quantità d'acqua, o quanta acqua per il tuo caffè, per filtro, french press, espresso e cold brew.",
    metaTitle: "Calcolatore rapporto caffè-acqua – Grammi per tazza",
    metaDescription:
      "Scopri quanti grammi di caffè usare per la tua acqua, o quanta acqua per il tuo caffè, con rapporti modificabili per filtro, french press, espresso e cold brew.",
    keywords: [
      "rapporto caffè acqua",
      "quanto caffè per tazza",
      "dosi caffè filtro",
      "rapporto french press",
      "rapporto cold brew",
      "brew ratio espresso",
      "grammi di caffè",
    ],
    intro: [
      "Il rapporto tra caffè e acqua è il modo più semplice per ottenere un caffè sempre uguale. Si scrive 1 : n, cioè n grammi d'acqua per ogni grammo di caffè macinato: a 1:16, 20 g di caffè vanno con 320 g d'acqua. Un n più piccolo dà un caffè più forte.",
      "Scegli un metodo di estrazione per partire da un rapporto tipico, adattalo al tuo gusto e il calcolatore ricava il caffè per la tua acqua o l'acqua per il tuo caffè, in grammi, millilitri, once fluide o tazze.",
    ],
    howToUse: [
      "Scegli il metodo di estrazione. Viene inserito il suo rapporto tipico; modificalo se ti piace il caffè più forte o più leggero.",
      "Scegli se ricavare il caffè dall'acqua o l'acqua dal caffè.",
      "Inserisci la quantità e scegli la sua unità. Il risultato compare nell'unità scelta per l'altro ingrediente.",
      "Pesa il caffè con una bilancia da cucina per risultati più costanti.",
    ],
    formulas: [
      { title: "Caffè dall'acqua", expression: "caffè (g) = acqua (g) ÷ n", explanation: "Per un rapporto 1 : n. L'acqua è considerata pari a 1 g per mL." },
      {
        title: "Acqua dal caffè",
        expression: "acqua (g) = caffè (g) × n",
        explanation: "1 tazza USA = 8 fl oz USA = 236,5882365 mL e 1 oz = 28,349523125 g.",
      },
      {
        title: "Intensità in grammi per litro",
        expression: "g/L = caffè (g) ÷ acqua (mL) × 1.000",
        explanation: "Un rapporto 1:18 corrisponde a circa 55,6 g di caffè per litro d'acqua.",
      },
    ],
    examples: [
      { title: "Caffè filtro con 500 mL d'acqua a 1:16", steps: ["500 mL d'acqua pesano 500 g", "Caffè = 500 ÷ 16 = 31,25 g"] },
      {
        title: "French press con 30 g di caffè a 1:12, acqua in tazze",
        steps: ["Acqua = 30 × 12 = 360 g = 360 mL", "In tazze USA: 360 ÷ 236,588 ≈ 1,52 tazze"],
      },
      {
        title: "Concentrato cold brew con 4 tazze d'acqua a 1:8",
        steps: ["4 tazze USA = 4 × 236,588 ≈ 946,35 mL d'acqua", "Caffè = 946,35 ÷ 8 ≈ 118,29 g, circa 4,17 oz"],
      },
    ],
    assumptions: [
      "I rapporti proposti per ogni metodo sono punti di partenza tipici, non regole. Gusto, grado di tostatura, macinatura e tempo di estrazione cambiano tutti il rapporto ideale.",
      "L'acqua è considerata pari a 1 g per mL. Il caffè macinato trattiene un po' d'acqua, quindi ottieni un po' meno caffè di quanta acqua hai usato.",
      "Per l'espresso, il rapporto è inteso tra caffè secco e peso della bevanda in tazza, come lo descrivono di solito i baristi.",
      "Le quantità di caffè sono in peso. Misurini e cucchiai contengono quantità diverse a seconda della macinatura e della tostatura, quindi non vengono convertiti.",
    ],
    faqs: [
      {
        question: "Qual è il rapporto caffè-acqua migliore?",
        answer:
          "Non esiste un unico rapporto migliore. Per il caffè filtro e il pour-over molte persone partono da valori tra 1:15 e 1:17 e poi li regolano; la linea guida Golden Cup della Specialty Coffee Association, spesso citata, corrisponde a circa 1:18. Se il caffè sa di poco, abbassa n; se è troppo forte, aumentalo.",
      },
      {
        question: "Quanto caffè mi serve per una tazza?",
        answer:
          "Per una tazza USA (circa 237 mL) a 1:16, usa circa 14,8 g di caffè. Molte tazze contengono più di una tazza USA, quindi misura il volume della tua per una risposta più precisa.",
      },
      {
        question: "Perché pesare il caffè invece di usare il misurino?",
        answer:
          "Un misurino di caffè può pesare quantità molto diverse a seconda del chicco, della tostatura e della finezza della macinatura. Pesando sia il caffè sia l'acqua è molto più facile ripetere una tazza che ti è piaciuta.",
      },
    ],
    sourcesUsedFor: [
      "La linea guida Golden Cup, molto citata, di circa 55 g di caffè per litro d'acqua (circa 1:18), riportata solo come termine di confronto.",
    ],
  },
  text: {
    method: "Metodo di estrazione",
    methods: {
      drip: "Filtro o pour-over",
      frenchPress: "French press",
      espresso: "Espresso",
      coldBrew: "Concentrato cold brew",
      custom: "Rapporto personalizzato",
    },
    ratio: "Rapporto 1 : n (acqua per grammo di caffè)",
    ratioHelp: {
      drip: "I rapporti tipici per caffè filtro e pour-over vanno da circa 1:15 (più forte) a 1:17 (più leggero). Modificalo secondo il tuo gusto.",
      frenchPress: "Un rapporto tipico per la french press è di circa 1:12. Modificalo secondo il tuo gusto.",
      espresso: "Per l'espresso il rapporto è di solito tra caffè e peso della bevanda in tazza; circa 1:2 è un punto di partenza tipico.",
      coldBrew: "Con circa 1:8 si ottiene un concentrato che di solito si diluisce prima di berlo.",
      custom: "Grammi d'acqua per ogni grammo di caffè macinato.",
    },
    solve: "Calcola",
    solveOptions: { coffee: "Caffè dall'acqua", water: "Acqua dal caffè" },
    water: "Quantità d'acqua",
    waterUnit: "Unità dell'acqua",
    waterUnits: { mL: "Millilitri (mL)", g: "Grammi (g)", floz: "Once fluide USA (fl oz)", cup: "Tazze USA" },
    coffee: "Quantità di caffè macinato",
    coffeeUnit: "Unità del caffè",
    coffeeUnits: { g: "Grammi (g)", oz: "Once (oz)" },
    coffeeNeeded: "Caffè macinato necessario",
    waterNeeded: "Acqua necessaria",
    caption: "Con un rapporto di {ratio}: {coffee} di caffè per {water} d'acqua.",
    ratioText: "1:{n}",
    ratioOut: "Rapporto caffè-acqua",
    coffeeG: "Caffè in grammi",
    coffeeOz: "Caffè in once",
    waterMl: "Acqua in mL (= grammi)",
    waterFloz: "Acqua in once fluide USA",
    waterCups: "Acqua in tazze USA",
    strength: "Caffè per litro d'acqua",
    cupsUnit: "tazze",
    notes: {
      golden:
        "Come termine di confronto, la linea guida Golden Cup della Specialty Coffee Association, molto citata, è di circa 55 g di caffè per litro d'acqua, circa 1:18. Considera qualsiasi rapporto un punto di partenza e regolalo secondo il tuo gusto.",
      espresso:
        "Per l'espresso il rapporto confronta di solito il caffè secco con il peso della bevanda finita, non con l'acqua che passa attraverso il caffè, quindi la quantità indicata è il peso della bevanda da ottenere.",
      coldBrew: "Il concentrato cold brew è forte; di solito si diluisce con acqua o latte a piacere prima di berlo.",
      water: "L'acqua è considerata pari a 1 g per mL. Un po' d'acqua resta nei fondi, quindi il caffè ottenuto è un po' meno dell'acqua usata.",
    },
  },
};

export default it;
