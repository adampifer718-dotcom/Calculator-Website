import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { QuartileText } from "../text/en";

const it: CalculatorTranslation<QuartileText> = {
  content: {
    title: "Calcolatore di quartili e scarto interquartile",
    shortTitle: "Quartili",
    summary:
      "Trova i quartili, lo scarto interquartile, il riepilogo dei cinque numeri, le barriere a 1,5 × IQR e i valori anomali di un insieme di dati, con due metodi comuni.",
    metaTitle: "Calcolatore di quartili – IQR, cinque numeri e outlier",
    metaDescription:
      "Trova Q1, la mediana, Q3 e lo scarto interquartile di un elenco di numeri, con il riepilogo dei cinque numeri, le barriere a 1,5 × IQR e gli eventuali outlier.",
    keywords: [
      "quartili",
      "scarto interquartile",
      "IQR",
      "riepilogo dei cinque numeri",
      "Q1 Q3",
      "valori anomali",
      "box plot",
      "regola 1,5 IQR",
    ],
    intro: [
      "I quartili dividono i dati ordinati in quattro gruppi di dimensioni circa uguali. Il primo quartile Q1 ha un quarto dei valori sotto di sé, la mediana Q2 la metà e il terzo quartile Q3 tre quarti. Lo scarto interquartile, IQR = Q3 − Q1, è l'ampiezza della metà centrale dei dati e, a differenza del campo di variazione, risente pochissimo di pochi valori estremi.",
      "Incolla un elenco di numeri per ottenere l'IQR, il riepilogo dei cinque numeri usato per i box plot e le barriere a 1,5 × IQR che segnalano i possibili valori anomali (outlier). Sono disponibili due metodi per i quartili perché libri di testo, calcolatrici e software non sono tutti d'accordo; per la media e la moda usa il Calcolatore di media, mediana e moda.",
    ],
    howToUse: [
      "Incolla o digita almeno 4 numeri, separati da punto e virgola, spazi o a capo. Non serve ordinarli.",
      "Scegli il metodo dei quartili: inclusivo per ottenere gli stessi risultati di QUARTILE.INC di Excel (QUARTILE.INCL nella versione italiana), NumPy e R, oppure mediana delle metà per ottenere quelli di una TI-83 o di molti libri di scuola.",
      "Leggi l'IQR, i quartili e le barriere.",
      "Controlla l'elenco dei valori anomali per i valori fuori dalle barriere.",
    ],
    formulas: [
      {
        title: "Inclusivo (interpolazione lineare)",
        expression: "h = (n − 1) × p\nQ = x₍⌊h⌋₎ + (h − ⌊h⌋)(x₍⌊h⌋+1₎ − x₍⌊h⌋₎)",
        explanation:
          "x₍₀₎ ≤ x₍₁₎ ≤ … sono i valori ordinati contati da 0, p = 0,25 per Q1 e 0,75 per Q3. È il tipo 7 di Hyndman e Fan, il predefinito in R e NumPy e quello di QUARTILE.INC di Excel.",
      },
      {
        title: "Mediana delle metà",
        expression: "Q1 = mediana della metà inferiore\nQ3 = mediana della metà superiore",
        explanation: "Con un numero dispari di valori, la mediana stessa viene esclusa da entrambe le metà. È il metodo delle calcolatrici TI-83 e TI-84.",
      },
      {
        title: "Scarto interquartile e barriere",
        expression: "IQR = Q3 − Q1\nbarriera inferiore = Q1 − 1,5 × IQR\nbarriera superiore = Q3 + 1,5 × IQR",
        explanation: "I valori fuori dalle barriere sono segnalati come possibili valori anomali; sono i punti disegnati a parte in un box plot.",
      },
    ],
    examples: [
      {
        title: "Undici tempi di consegna in minuti, metodo inclusivo",
        steps: [
          "n = 11, quindi h = 10 × 0,25 = 2,5 per Q1: a metà tra 17 e 18, Q1 = 17,5",
          "h = 10 × 0,75 = 7,5 per Q3: a metà tra 26 e 29, Q3 = 27,5",
          "IQR = 27,5 − 17,5 = 10; le barriere sono 2,5 e 42,5, quindi 58 è un valore anomalo",
        ],
      },
      {
        title: "Gli stessi dati con il metodo della mediana delle metà",
        steps: [
          "La mediana è 22; escludendola si ottengono le metà 12, 15, 17, 18, 21 e 24, 26, 29, 31, 58",
          "Q1 = 17 e Q3 = 29",
          "IQR = 29 − 17 = 12; le barriere sono −1 e 47, quindi 58 resta un valore anomalo",
        ],
      },
      {
        title: "Otto misure di pH, metodo inclusivo",
        steps: [
          "h = 7 × 0,25 = 1,75: Q1 = 4,1 + 0,75 × (4,4 − 4,1) = 4,325",
          "h = 7 × 0,75 = 5,25: Q3 = 6,3 + 0,25 × (7,7 − 6,3) = 6,65",
          "IQR = 6,65 − 4,325 = 2,325, con barriere 0,8375 e 10,1375: nessun valore anomalo",
        ],
      },
    ],
    assumptions: [
      "Non esiste un'unica definizione condivisa di quartile. I due metodi qui sono i più comuni; altri, come QUARTILE.EXC di Excel, possono dare valori leggermente diversi per piccoli insiemi di dati.",
      "La regola 1,5 × IQR è una convenzione per segnalare valori che meritano un secondo sguardo. Non dimostra che un valore sia un errore.",
      "Sono accettati fino a 10.000 numeri. I risultati sono mostrati con un massimo di 10 cifre significative.",
    ],
    faqs: [
      {
        question: "Perché calcolatori diversi danno quartili diversi?",
        answer:
          "Perché esistono diverse definizioni. Per 1, 2, 3, 4, 5, 6 il metodo inclusivo dà Q1 = 2,25, mentre il metodo della mediana delle metà dà Q1 = 2. Con grandi insiemi di dati i metodi danno risultati molto vicini.",
      },
      {
        question: "Che cos'è il riepilogo dei cinque numeri?",
        answer:
          "Il minimo, Q1, la mediana, Q3 e il massimo. Insieme descrivono il centro, la dispersione e il campo di variazione dei dati, ed è esattamente ciò che disegna un box plot.",
      },
      {
        question: "La mediana delle metà coincide con i cardini di Tukey?",
        answer:
          "Non del tutto. I cardini di Tukey includono la mediana in entrambe le metà quando il numero di valori è dispari, mentre il metodo TI-83 usato qui la esclude. Con un numero pari di valori coincidono.",
      },
    ],
    sourcesUsedFor: [
      "Le barriere interne Q1 − 1,5 × IQR e Q3 + 1,5 × IQR per segnalare i valori anomali.",
      "Le diverse definizioni di quantile campionario confrontate da Hyndman e Fan (1996), compresa l'interpolazione lineare.",
    ],
  },
  text: {
    data: "Dati",
    dataHelp:
      "Almeno 4 numeri, separati da punto e virgola, spazi o a capo (ad esempio 1,5; 2,25; 3). Usa la virgola come separatore decimale; anche una virgola seguita da uno spazio separa i valori. L'ordine non conta.",
    errors: {
      empty: "Inserisci almeno 4 numeri.",
      tooMany: "Inserisci al massimo {max} numeri.",
      notNumber: "«{token}» non è un numero. Usa la virgola decimale e separa i valori con punto e virgola, spazi o a capo.",
      tooLarge: "«{token}» è troppo grande.",
    },
    tooFew: "Inserisci almeno 4 numeri per trovare i quartili; ne hai inseriti {count}.",
    method: "Metodo dei quartili",
    methods: {
      inclusive: "Inclusivo, interpolazione lineare (QUARTILE.INC di Excel, NumPy, R tipo 7)",
      exclusive: "Mediana delle metà, mediana esclusa (come la TI-83)",
    },
    methodHelp: "Libri di testo e programmi diversi definiscono i quartili in modo leggermente diverso. I risultati possono differire per piccoli insiemi di dati.",
    iqr: "Scarto interquartile (IQR)",
    caption: "Q3 − Q1 per {count}, con il metodo {method}.",
    methodShort: { inclusive: "inclusivo", exclusive: "della mediana delle metà" },
    valueCount: { zero: "{n} valori", one: "{n} valore", two: "{n} valori", few: "{n} valori", many: "{n} valori", other: "{n} valori" },
    min: "Minimo",
    q1: "Primo quartile (Q1)",
    median: "Mediana (Q2)",
    q3: "Terzo quartile (Q3)",
    max: "Massimo",
    lowerFence: "Barriera inferiore (Q1 − 1,5 × IQR)",
    upperFence: "Barriera superiore (Q3 + 1,5 × IQR)",
    outliers: "Valori anomali",
    noOutliers: "Nessuno",
    moreOutliers: "{list} e altri {count}",
    outlierCount: "Numero di valori anomali",
    summaryTable: "Riepilogo dei cinque numeri",
    colStatistic: "Statistica",
    colValue: "Valore",
    noOutliersNote: "Nessun valore cade fuori dalle barriere, quindi secondo la regola 1,5 × IQR i dati non hanno valori anomali.",
    outliersNote:
      "I valori sotto la barriera inferiore o sopra quella superiore sono segnalati come possibili valori anomali. Controllali prima di eliminare qualcosa: un valore anomalo può essere un'osservazione reale e importante.",
  },
};

export default it;
