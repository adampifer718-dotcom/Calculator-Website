import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { GravelMulchText } from "../text/en";

const it: CalculatorTranslation<GravelMulchText> = {
  content: {
    title: "Calcolatore di ghiaia e pacciamatura",
    shortTitle: "Ghiaia e pacciamatura",
    summary:
      "Calcola quante iarde cubiche o metri cubi di ghiaia, pietrisco o pacciamatura ordinare, con peso, sacchi e costo.",
    metaTitle: "Calcolatore di ghiaia e pacciamatura – Volume, peso e sacchi",
    metaDescription:
      "Stima ghiaia, pietrisco o pacciamatura per un'area rettangolare o rotonda in iarde cubiche o m³, con peso in tonnellate, sacchi necessari e costo.",
    keywords: [
      "calcolo ghiaia",
      "calcolo pacciamatura",
      "quanta ghiaia serve",
      "metri cubi di ghiaia",
      "tonnellate di ghiaia",
      "calcolo pietrisco",
      "sacchi di pacciamatura",
      "corteccia per pacciamatura",
    ],
    intro: [
      "Ghiaia, pietrisco e pacciamatura si vendono a volume (iarde cubiche o metri cubi) o a peso (tonnellate corte o tonnellate metriche). Per sapere quanto ordinare, moltiplica la superficie da coprire per lo spessore dello strato, poi usa la densità apparente del materiale per trasformare quel volume in peso.",
      "Questo calcolatore gestisce aiuole rettangolari e rotonde in unità statunitensi o metriche e mostra il volume in entrambi i sistemi, il peso, il numero di sacchi se compri materiale insaccato e il costo a un prezzo per tonnellata o per iarda cubica.",
    ],
    howToUse: [
      "Scegli le unità statunitensi (piedi e pollici) o quelle metriche (metri e centimetri).",
      "Scegli un rettangolo o un cerchio e inserisci le dimensioni.",
      "Inserisci lo spessore dello strato che vuoi stendere.",
      "Scegli il materiale. È inserita una densità apparente tipica; sostituiscila con il dato del tuo fornitore, se ce l'hai.",
      "Se vuoi, inserisci il formato del sacco e un prezzo per tonnellata o per iarda cubica (per tonnellata metrica o m³ nel sistema metrico) per vedere sacchi e costo.",
    ],
    formulas: [
      {
        title: "Superficie",
        expression: "A = L × W, oppure A = π × d² ÷ 4 per un cerchio",
        explanation: "L e W sono lunghezza e larghezza, d il diametro.",
      },
      {
        title: "Volume",
        expression: "V = A × spessore",
        explanation:
          "Con piedi e pollici, V (ft³) = A × spessore (in) ÷ 12 e 1 yd³ = 27 ft³. Con metri e centimetri, V (m³) = A × spessore (cm) ÷ 100.",
      },
      {
        title: "Peso",
        expression: "peso = V × densità apparente",
        explanation: "1 tonnellata corta = 2.000 lb; 1 tonnellata metrica = 1.000 kg.",
      },
      {
        title: "Sacchi",
        expression: "sacchi = ⌈V ÷ formato del sacco⌉",
        explanation: "Arrotondato per eccesso a un sacco intero.",
      },
    ],
    examples: [
      {
        title: "Vialetto in ghiaia di 20 ft × 4 ft, spesso 3 in",
        steps: [
          "Volume = 20 × 4 × 3 ÷ 12 = 20 ft³",
          "= 20 ÷ 27 ≈ 0,74 yd³",
          "Peso = 20 × 100 = 2.000 lb = 1 ton, quindi circa $45 a $45 per ton",
        ],
      },
      {
        title: "Aiuola rotonda di 3 m di diametro intorno a un albero, con 8 cm di corteccia in sacchi da 50 L",
        steps: [
          "Superficie = π × 3² ÷ 4 ≈ 7,07 m²",
          "Volume = 7,07 × 0,08 ≈ 0,565 m³ (565 L)",
          "Sacchi = 565 ÷ 50 ≈ 11,3, quindi compra 12 sacchi; peso ≈ 170 kg",
        ],
      },
      {
        title: "Base in pietrisco di 12 ft × 10 ft, spessa 4 in, a $38 per iarda cubica",
        steps: [
          "Volume = 12 × 10 × 4 ÷ 12 = 40 ft³ ≈ 1,48 yd³",
          "Peso = 40 × 92,6 = 3.704 lb ≈ 1,85 ton",
          "Costo = 1,48 × $38 ≈ $56,30",
        ],
      },
    ],
    assumptions: [
      "Le densità apparenti sono valori tipici per materiale sfuso e asciutto, arrotondati da tabelle pubblicate. Le densità reali variano con il tipo di roccia, l'umidità, la granulometria e la compattazione; il materiale bagnato può pesare sensibilmente di più. Verifica con il tuo fornitore.",
      "La superficie è considerata piana e lo strato di spessore uniforme. Gli strati di base compattati richiedono più materiale sfuso del loro volume finito.",
      "I prezzi sono quelli che inserisci; il costo esclude consegna, tasse e bordure o teli.",
    ],
    faqs: [
      {
        question: "Quanto deve essere spesso lo strato di ghiaia o pacciamatura?",
        answer:
          "La pacciamatura decorativa si stende spesso con uno spessore di circa 2–4 in (5–10 cm) e la ghiaia decorativa di 2–3 in. Vialetti e passi carrai con una base compattata richiedono strati più spessi; segui le indicazioni per il tuo progetto.",
      },
      {
        question: "Quanti piedi quadrati copre una iarda cubica?",
        answer:
          "Una iarda cubica copre 324 ft² con 1 in di spessore, 108 ft² con 3 in e 81 ft² con 4 in. Dividi 324 per lo spessore in pollici.",
      },
      {
        question: "Perché il mio fornitore indica un peso diverso?",
        answer:
          "La densità apparente dipende dalla pietra, dalla pezzatura e da quanto è bagnato il materiale. I fornitori conoscono il peso dei propri prodotti, quindi usa il loro dato quando ordini a tonnellata.",
      },
    ],
    sourcesUsedFor: [
      "Pesi tipici di circa 2.700 lb per iarda cubica per la ghiaia e 2.500 lb per iarda cubica per il pietrisco, usati per le densità predefinite.",
      "Un peso tipico di circa 500 lb per iarda cubica per il cippato di legno, usato come valore predefinito per la pacciamatura.",
    ],
  },
  text: {
    units: "Unità",
    unitSystems: { imperial: "USA (ft, in)", metric: "Metriche (m, cm)" },
    shape: "Forma dell'area",
    shapes: { rectangle: "Rettangolo", circle: "Cerchio" },
    length: "Lunghezza",
    width: "Larghezza",
    diameter: "Diametro",
    depth: "Spessore",
    depthHelp: "Lo spessore finito dello strato. Ghiaia e pacciamatura decorative si stendono spesso con circa 2–4 in (5–10 cm) di spessore.",
    material: "Materiale",
    materials: {
      gravel: "Ghiaia",
      crushedStone: "Pietrisco",
      woodMulch: "Cippato o corteccia per pacciamatura",
      custom: "Altro (inserisci la densità)",
    },
    density: "Densità apparente",
    densityHelp:
      "Peso per unità di volume sfuso. È inserito un valore tipico; il dato del fornitore per il prodotto esatto è migliore, perché umidità e granulometria lo modificano.",
    bag: "Formato del sacco (facoltativo)",
    bagHelp: "Compilalo per vedere quanti sacchi comprare invece di una consegna sfusa.",
    priceBasis: "Il prezzo è indicato",
    priceBases: { weight: "Per tonnellata corta / metrica", volume: "Per iarda cubica / m³" },
    price: "Prezzo (facoltativo)",
    priceHelp: "Lascia vuoto per saltare la stima dei costi.",
    volume: "Volume necessario",
    caption: "{area} con uno strato di {depth}.",
    area: "Superficie coperta",
    volumeCubicFeet: "Volume in piedi cubi",
    volumeOther: "Volume nell'altro sistema",
    weightShortTons: "Peso in tonnellate corte USA",
    weightTonnes: "Peso in tonnellate metriche",
    weightPounds: "Peso in libbre",
    weightKilograms: "Peso in chilogrammi",
    bags: "Sacchi necessari",
    shortTonUnit: "ton",
    cost: "Costo stimato",
    notes: {
      density:
        "Il peso usa una densità apparente di {density}. Le densità variano con umidità, granulometria e compattazione; verifica con il tuo fornitore.",
      order:
        "I fornitori di solito vendono a quantità fisse, quindi arrotonda l'ordine per eccesso e prevedi un piccolo margine per l'assestamento e il terreno irregolare.",
      shortTon: "Una tonnellata corta USA è 2.000 lb (907,18474 kg); una tonnellata metrica è 1.000 kg.",
    },
  },
};

export default it;
