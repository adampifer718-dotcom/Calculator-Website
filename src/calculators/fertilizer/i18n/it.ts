import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FertilizerText } from "../text/en";

const it: CalculatorTranslation<FertilizerText> = {
  content: {
    title: "Calcolatore di concime (N-P-K)",
    shortTitle: "Concime (N-P-K)",
    summary:
      "Calcola quanto concime N-P-K distribuire per fornire una dose prefissata di azoto, anidride fosforica o ossido di potassio su un prato, un orto o un campo.",
    metaTitle: "Calcolatore di concime (N-P-K) – Prodotto per una dose",
    metaDescription:
      "Trova quanto concime distribuire dal suo titolo N-P-K, dalla dose di nutriente per superficie e dall'area, con l'azoto, il fosforo e il potassio che apporta.",
    keywords: [
      "calcolo concime",
      "calcolatore NPK",
      "dose di concime",
      "kg N per ettaro",
      "titolo NPK",
      "da P2O5 a P",
      "da K2O a K",
      "quanto concime usare",
    ],
    intro: [
      "I sacchi di concime riportano tre numeri, come 10-10-10 o 46-0-0. Sono le percentuali in peso di azoto (N), anidride fosforica (P₂O₅) e ossido di potassio (K₂O). Le analisi del terreno e le guide colturali di solito consigliano una quantità di nutriente per superficie, non una quantità di prodotto, quindi devi convertire l'una nell'altra.",
      "Inserisci il titolo del prodotto, scegli il nutriente a cui si riferisce la raccomandazione e inserisci la dose e l'area. Il calcolatore indica la quantità di prodotto da distribuire e le quantità di tutti e tre i nutrienti che apporta, compresi fosforo e potassio elementari.",
    ],
    howToUse: [
      "Inserisci i tre numeri del titolo riportati sul sacco, per esempio 10, 20 e 10 per un prodotto 10-20-10.",
      "Scegli il nutriente a cui si riferisce la dose consigliata: azoto, anidride fosforica (P₂O₅) o ossido di potassio (K₂O).",
      "Inserisci la dose consigliata e la sua unità, per esempio 1 lb per 1.000 ft² o 120 kg per ettaro.",
      "Inserisci l'area e la sua unità. La quantità di prodotto è indicata in libbre per le dosi in libbre e in chilogrammi per le dosi metriche.",
    ],
    formulas: [
      {
        title: "Prodotto necessario",
        expression: "prodotto = dose × area ÷ (titolo % ÷ 100)",
        explanation: "Il titolo % è il numero sul sacco per il nutriente scelto. Dose e area vengono prima convertite in un'unità comune.",
      },
      {
        title: "Nutrienti apportati",
        expression: "N = prodotto × N%;  P₂O₅ = prodotto × P₂O₅%;  K₂O = prodotto × K₂O%",
        explanation: "Ogni percentuale è il numero corrispondente del titolo ÷ 100.",
      },
      {
        title: "Fosforo e potassio elementari",
        expression: "P = P₂O₅ × 0,4364;  K = K₂O × 0,8302",
        explanation:
          "I fattori sono le frazioni in massa 2P ÷ P₂O₅ e 2K ÷ K₂O, calcolate dai pesi atomici standard (P 30,973762, K 39,0983, O 15,999).",
      },
    ],
    examples: [
      {
        title: "10-10-10 su un prato di 5.000 ft² con 1 lb N per 1.000 ft²",
        steps: [
          "Azoto necessario = 1 × 5.000 ÷ 1.000 = 5 lb",
          "Prodotto = 5 ÷ 0,10 = 50 lb di 10-10-10",
          "Apporta anche 5 lb di P₂O₅ (≈ 2,18 lb di P) e 5 lb di K₂O (≈ 4,15 lb di K)",
        ],
      },
      {
        title: "Urea (46-0-0) a 120 kg N per ettaro su 2,5 ha",
        steps: ["Azoto necessario = 120 × 2,5 = 300 kg", "Prodotto = 300 ÷ 0,46 ≈ 652,17 kg di urea"],
      },
      {
        title: "15-30-15 a 6 g di anidride fosforica per m² su un'aiuola di 25 m²",
        steps: [
          "Anidride fosforica necessaria = 6 × 25 = 150 g",
          "Prodotto = 150 ÷ 0,30 = 500 g = 0,5 kg",
          "Apporta anche 75 g di N e 75 g di K₂O",
        ],
      },
    ],
    assumptions: [
      "Questo è solo un calcolo aritmetico. Basa la dose su un'analisi del terreno e sulle raccomandazioni locali, e segui l'etichetta del prodotto e le eventuali norme locali su uso dei concimi, tempi di distribuzione e ruscellamento.",
      "Il titolo è inteso come percentuale in peso garantita di N, P₂O₅ e K₂O, come riportato in etichetta. Per i prodotti liquidi il cui titolo è espresso in peso serve il loro peso, non il volume.",
      "Le quantità presuppongono una distribuzione uniforme su tutta l'area. Le regolazioni dello spandiconcime e le sovrapposizioni influiscono su quanto viene effettivamente distribuito.",
    ],
    faqs: [
      {
        question: "Perché fosforo e potassio sono espressi come P₂O₅ e K₂O?",
        answer:
          "È una convenzione di etichettatura di lunga data. Il titolo esprime il fosforo come ossido P₂O₅ e il potassio come K₂O, anche se il prodotto non contiene quegli ossidi in quanto tali. Moltiplica per circa 0,436 e 0,830 per ottenere le quantità elementari.",
      },
      {
        question: "E se la raccomandazione riguarda più nutrienti?",
        answer:
          "Calcola la quantità di prodotto per il nutriente che ti serve di più, poi controlla gli altri nutrienti che apporta. Se sono troppo alti o troppo bassi, un prodotto con un rapporto diverso, o prodotti separati per ciascun nutriente, può essere più adatto.",
      },
      {
        question: "Come converto lb per acro in kg per ettaro?",
        answer:
          "1 lb per acro corrisponde a circa 1,121 kg per ettaro, perché una libbra è 0,45359237 kg e un acro è circa 0,4047 ha. Puoi inserire la dose in entrambe le unità e il calcolatore la converte per te.",
      },
    ],
    sourcesUsedFor: [
      "La lettura del titolo come percentuale in peso di N, P₂O₅ e K₂O, e la divisione della dose di nutriente per la frazione del titolo.",
      "Il titolo del concime come N-P₂O₅-K₂O garantito, e i fattori di conversione da P₂O₅ a P e da K₂O a K.",
      "I pesi atomici di fosforo, potassio e ossigeno usati per calcolare i fattori da ossido a elemento.",
    ],
  },
  text: {
    gradeN: "Titolo: azoto (N)",
    gradeNHelp: "Il primo numero sul sacco, in percentuale in peso. In 10-20-10 è 10.",
    gradeP: "Titolo: anidride fosforica (P₂O₅)",
    gradePHelp: "Il secondo numero sul sacco. Le etichette esprimono il fosforo come anidride fosforica (P₂O₅), non come P elementare.",
    gradeK: "Titolo: ossido di potassio (K₂O)",
    gradeKHelp: "Il terzo numero sul sacco. Le etichette esprimono il potassio come ossido di potassio (K₂O), non come K elementare.",
    nutrient: "Nutriente a cui si riferisce la dose",
    nutrients: { N: "Azoto (N)", P2O5: "Anidride fosforica (P₂O₅)", K2O: "Ossido di potassio (K₂O)" },
    rate: "Dose di nutriente desiderata",
    rateHelp: "La quantità del nutriente scelto da distribuire per unità di superficie, di solito da un'analisi del terreno o da una raccomandazione locale.",
    rateUnit: "Unità della dose",
    rateUnits: { lb1000ft2: "lb per 1.000 ft²", lbAcre: "lb per acro", kgHa: "kg per ettaro", gM2: "g per m²" },
    area: "Area da concimare",
    areaUnit: "Unità di superficie",
    areaUnits: { ft2: "Piedi quadrati (ft²)", m2: "Metri quadrati (m²)", acre: "Acri", ha: "Ettari (ha)" },
    areaSymbols: { ft2: "ft²", m2: "m²", acre: "acri", ha: "ha" },
    errors: {
      zeroGrade:
        "Questo prodotto non contiene il nutriente scelto. Scegli un altro nutriente o un prodotto con un numero diverso da zero per quel nutriente.",
      gradeSum: "I tre numeri del titolo sommano più del 100%. Controlla l'etichetta.",
    },
    product: "Concime necessario",
    caption: "{rate} di {nutrient} ÷ {grade} in un prodotto {label}, su {area}.",
    productOther: "Prodotto necessario in altre unità",
    productRate: "Dose di prodotto",
    applied: {
      N: "Azoto (N) apportato",
      P2O5: "Anidride fosforica (P₂O₅) apportata",
      K2O: "Ossido di potassio (K₂O) apportato",
      P: "Fosforo elementare (P) apportato",
      K: "Potassio elementare (K) apportato",
    },
    notes: {
      others:
        "La stessa quantità di prodotto apporta anche gli altri nutrienti del suo titolo, indicati sotto. Se le dosi che raggiungono non sono quelle che ti servono, usa prodotti separati per ciascun nutriente.",
      elemental: "Le quantità elementari usano P = P₂O₅ × {p} e K = K₂O × {k}, dai pesi atomici standard.",
    },
  },
};

export default it;
