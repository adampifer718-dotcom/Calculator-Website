import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FoodCostPercentageText } from "../text/en";

const it: CalculatorTranslation<FoodCostPercentageText> = {
  content: {
    title: "Calcolatore della percentuale di food cost",
    shortTitle: "Percentuale di food cost",
    summary:
      "Trova la percentuale di food cost di un piatto o di un intero periodo dall'inventario e dalle vendite, e il prezzo di menu che raggiunge un food cost obiettivo.",
    metaTitle: "Percentuale di food cost – Costo del piatto e prezzo",
    metaDescription:
      "Calcola la percentuale di food cost di un piatto o di un periodo da inventario, acquisti e vendite, con utile lordo e prezzo di menu per il food cost obiettivo.",
    keywords: [
      "calcolo food cost",
      "percentuale food cost",
      "costo del piatto",
      "calcolo prezzo menu",
      "food cost ristorante",
      "costo del venduto",
      "COGS ristorazione",
      "prezzi del menu",
    ],
    intro: [
      "La percentuale di food cost è la quota del prezzo di menu, o delle vendite di cibo di un ristorante, che se ne va in ingredienti. È uno dei numeri più tenuti d'occhio nella ristorazione, perché mostra subito se i prezzi stanno al passo con quanto costa acquistare il cibo.",
      "Usa la modalità piatto per controllare una singola voce del menu dal suo costo e dal suo prezzo, e per trovare il prezzo che dà un food cost obiettivo. Usa la modalità periodo per calcolare il food cost di una settimana o di un mese dagli inventari, dagli acquisti e dalle vendite di cibo.",
    ],
    howToUse: [
      "Scegli la valuta e se stai lavorando su un piatto o su un intero periodo.",
      "Per un piatto, inserisci il costo del piatto (il costo di tutti gli ingredienti di una porzione) e il prezzo di menu al netto delle imposte.",
      "Per un periodo, inserisci il valore del cibo in magazzino all'inizio e alla fine, il cibo acquistato nel frattempo e le vendite di cibo dello stesso periodo.",
      "Se vuoi, inserisci una percentuale di food cost obiettivo per ottenere un prezzo di menu suggerito, o le vendite che servirebbero con il food cost del periodo.",
    ],
    formulas: [
      {
        title: "Food cost % di un piatto",
        expression: "food cost % = costo del piatto ÷ prezzo di menu × 100",
        explanation: "Il prezzo di menu è quello al netto delle imposte sulle vendite.",
      },
      {
        title: "Prezzo di menu per un obiettivo",
        expression: "prezzo = costo del piatto ÷ (obiettivo % ÷ 100)",
        explanation: "Per esempio, un piatto da $4,20 con un obiettivo del 28% dà 4,20 ÷ 0,28 = $15,00.",
      },
      {
        title: "Food cost % di un periodo",
        expression: "COGS = inventario iniziale + acquisti − inventario finale;  food cost % = COGS ÷ vendite di cibo × 100",
        explanation: "Il COGS (costo del venduto) è il costo del cibo consumato nel periodo, che sia stato venduto, sprecato o regalato.",
      },
      {
        title: "Utile lordo e margine",
        expression: "utile lordo = prezzo − food cost;  margine % = utile lordo ÷ prezzo × 100",
        explanation: "Questo margine toglie solo il food cost; manodopera e spese generali devono ancora essere pagate con esso.",
      },
    ],
    examples: [
      {
        title: "Un piatto da $14 con un costo di $4,20, obiettivo 28%",
        steps: [
          "Food cost = 4,20 ÷ 14 × 100 = 30%",
          "Utile lordo = 14 − 4,20 = $9,80, un margine del 70%",
          "Prezzo per il 28% = 4,20 ÷ 0,28 = $15,00",
        ],
      },
      {
        title: "Un piatto di pasta da 12,50 € che costa 3,85 € da preparare",
        steps: ["Food cost = 3,85 ÷ 12,50 × 100 = 30,8%", "Prezzo per un obiettivo del 30% = 3,85 ÷ 0,30 ≈ 12,83 €"],
      },
      {
        title: "Un mese dagli inventari",
        steps: [
          "COGS = 9.200 + 14.600 − 8.100 = $15.700",
          "Food cost = 15.700 ÷ 48.500 × 100 ≈ 32,37%",
          "Utile lordo sul cibo = 48.500 − 15.700 = $32.800; al 30% lo stesso COGS richiederebbe circa $52.333 di vendite",
        ],
      },
    ],
    assumptions: [
      "Tutti gli importi sono in un'unica valuta e al netto delle imposte sulle vendite. L'inventario è valutato al costo.",
      "La modalità periodo presuppone che gli inventari siano fatti esattamente all'inizio e alla fine dello stesso periodo delle vendite, e che gli acquisti comprendano solo il cibo (non bevande o materiali di consumo, a meno che tu non voglia includerli).",
      "Non esiste un'unica percentuale di food cost giusta. Si cita spesso un intervallo dal 28 al 35 percento del prezzo di vendita, ma il valore giusto dipende dal tipo di ristorante, dai suoi prezzi e dagli altri costi.",
    ],
    faqs: [
      {
        question: "Qual è una buona percentuale di food cost?",
        answer:
          "Si citano spesso valori intorno al 28–35 percento, ma non esiste un obiettivo universale. Un ristorante con costi elevati di personale o di affitto può aver bisogno di un food cost più basso, mentre un locale con ingredienti pregiati e meno personale può averlo più alto.",
      },
      {
        question: "Perché il food cost del periodo è diverso da quello dei piatti?",
        answer:
          "Il dato del periodo comprende tutto ciò che è uscito dal magazzino: sprechi, deterioramento, pasti del personale, porzioni eccessive e furti, oltre al cibo venduto. Confrontarlo con il costo previsto dei piatti è un buon modo per individuare queste perdite.",
      },
      {
        question: "Devo includere le imposte sulle vendite nel prezzo di menu?",
        answer:
          "No. Usa il prezzo al netto delle imposte, perché le imposte sulle vendite vengono riscosse per conto dello Stato e non sono ricavi dell'attività.",
      },
    ],
    sourcesUsedFor: [
      "Food cost % = costo della porzione ÷ prezzo di menu × 100, e l'intervallo spesso citato dal 28 al 35 percento del prezzo di vendita.",
      "Food cost % del periodo = (inventario iniziale + acquisti − inventario finale) ÷ vendite di cibo × 100.",
    ],
  },
  text: {
    mode: "Calcola per",
    modes: { dish: "Un piatto", period: "Un periodo (inventario)" },
    plateCost: "Costo del piatto",
    plateCostHelp: "Il costo di tutti gli ingredienti di una porzione, compresi guarnizioni e contorni.",
    menuPrice: "Prezzo di menu",
    menuPriceHelp: "Il prezzo di vendita del piatto, al netto delle imposte sulle vendite.",
    beginInventory: "Inventario iniziale",
    beginInventoryHelp: "Il valore del cibo in magazzino all'inizio del periodo.",
    purchases: "Acquisti di cibo",
    purchasesHelp: "Il valore del cibo acquistato nel periodo.",
    endInventory: "Inventario finale",
    endInventoryHelp: "Il valore del cibo in magazzino alla fine del periodo.",
    sales: "Vendite di cibo",
    salesHelp: "Le vendite nette di cibo dello stesso periodo, al netto delle imposte sulle vendite.",
    target: "Food cost % obiettivo (facoltativo)",
    targetHelp: "La percentuale di food cost a cui punti, per ottenere un prezzo di menu suggerito o le vendite che ne derivano.",
    errors: {
      inventory: "L'inventario finale non può superare l'inventario iniziale più gli acquisti.",
    },
    foodCost: "Percentuale di food cost",
    captionDish: "Costo del piatto {cost} ÷ prezzo di menu {price}.",
    captionPeriod: "Costo del venduto {cogs} ÷ vendite di cibo {sales}.",
    grossProfitPlate: "Utile lordo per piatto",
    grossProfitPeriod: "Utile lordo sul cibo nel periodo",
    margin: "Margine di contribuzione dopo il food cost",
    suggestedPrice: "Prezzo di menu suggerito per l'obiettivo",
    salesAtTarget: "Vendite di cibo necessarie per l'obiettivo",
    cogs: "Costo del venduto (cibo)",
    notes: {
      margin: "Il margine qui deduce solo il food cost. Manodopera, affitto e altri costi devono ancora uscire da esso.",
      rounding:
        "Il prezzo suggerito è quello a cui questo costo del piatto corrisponde alla percentuale obiettivo. I prezzi di menu vengono spesso arrotondati a una cifra comoda.",
      above100: "Il food cost supera il prezzo di vendita, quindi ogni vendita è in perdita già solo sugli ingredienti.",
    },
  },
};

export default it;
