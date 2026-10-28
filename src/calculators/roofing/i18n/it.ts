import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoofingText } from "../text/en";

const it: CalculatorTranslation<RoofingText> = {
  content: {
    title: "Calcolatore dei materiali per il tetto",
    shortTitle: "Materiali per il tetto",
    summary:
      "Stima la superficie del tetto, gli square e i pacchi di tegole canadesi per un semplice tetto a capanna o a padiglione da pianta dell'edificio, sporto e pendenza.",
    metaTitle: "Calcolatore materiali per il tetto – Square, pacchi e area",
    metaDescription:
      "Stima la superficie del tetto da pianta, sporto e pendenza, poi gli square, i pacchi di tegole canadesi e i rotoli di telo sottotegola da comprare, con lo sfrido.",
    keywords: [
      "calcolo superficie tetto",
      "tegole canadesi quantità",
      "pacchi di tegole",
      "square copertura",
      "telo sottotegola",
      "coefficiente di pendenza",
      "materiali copertura",
    ],
    intro: [
      "Negli Stati Uniti i materiali di copertura si vendono a square: uno square copre 100 ft² (circa 9,29 m²) di tetto. Un tetto inclinato ha più superficie della pianta sottostante, quindi l'area in pianta si moltiplica per un coefficiente di pendenza che cresce con l'inclinazione del tetto.",
      "Inserisci lunghezza e larghezza dell'edificio, lo sporto e la pendenza per stimare la superficie del tetto, il numero di square e di pacchi di tegole e, se vuoi, i rotoli di telo sottotegola. Un margine di sfrido copre tagli, file di partenza e colmi.",
    ],
    howToUse: [
      "Scegli unità statunitensi (piedi) o metriche (metri).",
      "Inserisci lunghezza e larghezza dell'edificio e di quanto il tetto sporge oltre i muri.",
      "Inserisci la pendenza come alzata su 12 di proiezione orizzontale (per esempio 6 per un tetto 6/12), oppure come angolo.",
      "Scegli a capanna o a padiglione e controlla lo sfrido; per i tetti a padiglione il valore predefinito è il 15% a causa dei tagli in più.",
      "Controlla i pacchi per square delle tue tegole e, se vuoi, inserisci la copertura di un rotolo di telo sottotegola.",
    ],
    formulas: [
      {
        title: "Area in pianta",
        expression: "pianta = (L + 2 × sporto) × (W + 2 × sporto)",
        explanation: "L e W sono la lunghezza e la larghezza esterne dell'edificio.",
      },
      {
        title: "Coefficiente di pendenza",
        expression: "coefficiente = √(1 + (alzata ÷ 12)²)",
        explanation: "Per un tetto 6/12 il coefficiente è √1,25 ≈ 1,118. Partendo da un angolo θ, il coefficiente è 1 ÷ cos θ.",
      },
      {
        title: "Superficie del tetto e square",
        expression: "superficie = pianta × coefficiente; square = superficie × (1 + sfrido) ÷ 100 ft²",
        explanation: "Le superfici metriche si convertono con 1 ft² = 0,09290304 m².",
      },
      {
        title: "Pacchi e rotoli",
        expression: "pacchi = ⌈square × pacchi per square⌉; rotoli = ⌈superficie con sfrido ÷ copertura del rotolo⌉",
        explanation: "Entrambi si arrotondano per eccesso a unità intere.",
      },
    ],
    examples: [
      {
        title: "Casa di 40 × 30 ft, sporto di 1 ft, tetto a capanna 6/12",
        steps: [
          "Area in pianta = 42 × 32 = 1.344 ft²",
          "Superficie del tetto = 1.344 × √1,25 ≈ 1.502,64 ft²",
          "Con il 10% di sfrido: 1.652,90 ft², cioè 16,53 square",
          "Pacchi = ⌈16,53 × 3⌉ = 50",
        ],
      },
      {
        title: "Casa di 12 × 9 m, sporto di 0,5 m, tetto a padiglione a 30°",
        steps: [
          "Area in pianta = 13 × 10 = 130 m²",
          "Coefficiente di pendenza = 1 ÷ cos 30° ≈ 1,1547, quindi la superficie del tetto ≈ 150,11 m²",
          "Con il 15% di sfrido: 172,63 m² ÷ 0,09290304 ≈ 1.858,15 ft², cioè 18,58 square",
          "Pacchi = ⌈18,58 × 3⌉ = 56",
        ],
      },
      {
        title: "50 × 28 ft, sporto di 1,5 ft, tetto 8/12 con telo sottotegola",
        steps: [
          "Area in pianta = 53 × 31 = 1.643 ft²",
          "Coefficiente di pendenza = √(1 + (8 ÷ 12)²) ≈ 1,2019, quindi la superficie del tetto ≈ 1.974,64 ft²",
          "Con il 12% di sfrido: 2.211,60 ft², cioè 22,12 square e ⌈66,35⌉ = 67 pacchi",
          "Telo sottotegola da 400 ft² per rotolo: ⌈5,53⌉ = 6 rotoli",
        ],
      },
    ],
    assumptions: [
      "Il tetto è un semplice rettangolo in pianta con la stessa pendenza su tutte le falde. Abbaini, compluvi, camini, lucernari, piante a L e falde con pendenze diverse richiedono materiale in più e vanno misurati sezione per sezione.",
      "Un tetto a padiglione e uno a capanna sulla stessa pianta e con la stessa pendenza hanno la stessa superficie; lo sfrido predefinito più alto del tetto a padiglione tiene conto dei tagli in più.",
      "I pacchi per square e la copertura del telo sottotegola variano da prodotto a prodotto. Usa i valori stampati sulla confezione.",
      "Questa è solo una stima dei materiali. Struttura del tetto, ventilazione, classe di reazione al fuoco e dettagli di posa devono seguire le istruzioni del produttore e le norme edilizie locali.",
    ],
    faqs: [
      {
        question: "Che cos'è uno square?",
        answer:
          "Uno square è un'unità americana pari a 100 ft² di superficie del tetto, un'area di 10 × 10 ft. I copritetto statunitensi prezzano e ordinano le tegole canadesi a square; 1 square corrisponde a circa 9,29 m².",
      },
      {
        question: "Quanti pacchi di tegole servono per uno square?",
        answer:
          "Molte tegole canadesi bituminose sono confezionate in tre pacchi per square, ma i prodotti più pesanti possono essere in quattro o più pacchi più piccoli. L'etichetta del pacco indica la copertura: controllala e adatta i pacchi per square.",
      },
      {
        question: "Perché la superficie del tetto è più grande della casa?",
        answer:
          "Perché il tetto è inclinato e sporge oltre i muri. Un tetto 6/12 ha circa il 12% di superficie in più rispetto alla sua area in pianta e un tetto 12/12 circa il 41% in più, prima di aggiungere lo sporto.",
      },
    ],
    sourcesUsedFor: [
      "Lo square di 100 ft² e la confezione comune di tre pacchi di tegole per square, che varia da prodotto a prodotto.",
      "Il metodo generale per stimare i materiali di copertura da superficie del tetto, square e margine di sfrido.",
    ],
  },
  text: {
    units: "Unità",
    unitSystems: { imperial: "USA (ft)", metric: "Metriche (m)" },
    length: "Lunghezza dell'edificio",
    lengthHelp: "La lunghezza esterna della pianta dell'edificio, sporto escluso.",
    width: "Larghezza dell'edificio",
    overhang: "Sporto (di gronda e laterale)",
    overhangHelp: "Di quanto il tetto sporge oltre i muri su ciascun lato. Viene aggiunto a entrambe le estremità della lunghezza e della larghezza.",
    pitchMode: "Pendenza del tetto indicata come",
    pitchModes: { rise: "Alzata su 12", angle: "Angolo" },
    rise: "Alzata ogni 12 di proiezione",
    riseHelp: "Per un tetto 6 su 12 (6/12), inserisci 6. Alzata e proiezione usano la stessa unità.",
    angle: "Angolo del tetto",
    roofType: "Tipo di tetto",
    roofTypes: { gable: "A capanna", hip: "A padiglione" },
    roofTypeHelp:
      "Con la stessa pendenza su tutte le falde, un tetto a capanna e uno a padiglione sulla stessa pianta hanno la stessa superficie. I tetti a padiglione richiedono più tagli, quindi il loro sfrido predefinito è più alto.",
    waste: "Margine di sfrido",
    wasteHelp: "Il materiale in più per tagli, file di partenza, colmi, displuvi ed errori.",
    bundles: "Pacchi per square",
    bundlesHelp:
      "Molte tegole canadesi bituminose sono vendute in 3 pacchi per square (100 ft²), ma alcuni prodotti differiscono. Controlla la copertura stampata sul pacco.",
    rollCoverage: "Copertura per rotolo di telo sottotegola (facoltativa)",
    rollCoverageHelp: "La copertura netta stampata sull'etichetta del rotolo, già al netto delle sovrapposizioni. Lascia vuoto per non calcolare i rotoli.",
    errors: {
      angle: "L'angolo del tetto deve essere inferiore a 90°.",
    },
    squares: "Square di copertura (sfrido compreso)",
    caption: "{area} di tetto più {waste} di sfrido; 1 square = 100 ft² (9,29 m²).",
    planArea: "Area in pianta compreso lo sporto",
    pitchFactor: "Coefficiente di pendenza (superficie del tetto ÷ area in pianta)",
    pitchText: "Pendenza",
    pitchValue: "{rise} su 12",
    angleOut: "Angolo del tetto",
    roofArea: "Superficie del tetto",
    roofAreaOther: "Superficie del tetto in altre unità",
    areaWithWaste: "Superficie del tetto sfrido compreso",
    squaresNoWaste: "Square senza sfrido",
    bundlesOut: "Pacchi di tegole",
    rolls: "Rotoli di telo sottotegola",
    notes: {
      hip: "Un tetto a padiglione con la stessa pendenza su tutte e quattro le falde ha la stessa superficie di un tetto a capanna sulla stessa pianta; richiede solo più pezzi tagliati e più elementi di displuvio.",
      shape:
        "Il calcolo presuppone un semplice tetto rettangolare. Abbaini, compluvi, camini, lucernari e piante a L richiedono materiale in più; in questi casi misura ogni sezione separatamente.",
      bundles:
        "I pacchi sono arrotondati per eccesso a pacchi interi. Colmi, strisce di partenza, gocciolatoi, scossaline e chiodi non sono inclusi.",
    },
  },
};

export default it;
