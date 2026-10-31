import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AspectRatioText } from "../text/en";

const it: CalculatorTranslation<AspectRatioText> = {
  content: {
    title: "Calcolatore del rapporto d'aspetto",
    shortTitle: "Rapporto d'aspetto",
    summary:
      "Trova il rapporto d'aspetto di un'immagine o di uno schermo, ridimensiona a un rapporto senza deformazioni o ricava larghezza e altezza di uno schermo dalla diagonale.",
    metaTitle: "Rapporto d'aspetto – Semplifica, ridimensiona, schermi",
    metaDescription:
      "Riduci larghezza × altezza al rapporto d'aspetto, trova il formato comune più vicino, ridimensiona in pixel interi o ricava le misure di uno schermo.",
    keywords: [
      "calcolo rapporto d'aspetto",
      "calcolatore 16:9",
      "ridimensionare immagine proporzioni",
      "dimensioni schermo",
      "proporzioni pixel",
      "formato 21:9",
      "rapporto larghezza altezza",
      "misure TV dalla diagonale",
    ],
    intro: [
      "Il rapporto d'aspetto descrive la forma di un'immagine o di uno schermo: la larghezza rispetto all'altezza, scritta W:H. Un video 1920 × 1080 e uno 3840 × 2160 hanno dimensioni diverse ma la stessa forma 16:9, quindi l'uno si può scalare nell'altro senza deformarlo.",
      "Questo calcolatore fa tre cose. Riduce qualsiasi larghezza e altezza al più piccolo rapporto tra numeri interi e lo confronta con i formati comuni; calcola il lato mancante quando ridimensioni a un rapporto; e trasforma la diagonale di uno schermo in larghezza, altezza e area. Per rapporti generici tra grandezze qualsiasi, usa il Calcolatore di rapporti e proporzioni.",
    ],
    howToUse: [
      "Scegli che cosa vuoi fare.",
      "Per trovare un rapporto, inserisci larghezza e altezza nella stessa unità, di solito in pixel. I decimali vengono portati a numeri interi prima di ridurre il rapporto.",
      "Per ridimensionare, inserisci il rapporto (per esempio 16 e 9), scegli se conosci la nuova larghezza o la nuova altezza e inseriscila. L'altro lato viene mostrato esatto e arrotondato a pixel interi.",
      "Per uno schermo, inserisci la diagonale in pollici o centimetri e il rapporto. Larghezza, altezza e area vengono mostrate in entrambe le unità.",
    ],
    formulas: [
      {
        title: "Rapporto semplificato",
        expression: "W:H = (larghezza ÷ g) : (altezza ÷ g), g = MCD(larghezza, altezza)",
        explanation:
          "g è il massimo comune divisore, trovato con l'algoritmo di Euclide. Le dimensioni decimali vengono prima moltiplicate per una potenza di 10 per renderle intere.",
      },
      {
        title: "Ridimensionamento",
        expression: "nuova altezza = nuova larghezza × H ÷ W;  nuova larghezza = nuova altezza × W ÷ H",
        explanation: "Mantenere lo stesso rapporto significa scalare entrambi i lati dello stesso fattore.",
      },
      {
        title: "Dimensioni dello schermo",
        expression: "larghezza = d × W ÷ √(W² + H²);  altezza = d × H ÷ √(W² + H²)",
        explanation:
          "La diagonale d è l'ipotenusa di un triangolo rettangolo i cui lati stanno nel rapporto W:H. L'area è larghezza × altezza.",
      },
      {
        title: "Differenza da un rapporto comune",
        expression: "differenza = (larghezza ÷ altezza) ÷ (Wc ÷ Hc) − 1",
        explanation: "Mostrata in percentuale. Il rapporto comune più vicino è quello con la differenza minore.",
      },
    ],
    examples: [
      {
        title: "Un monitor ultrawide da 2560 × 1080 pixel",
        steps: [
          "MCD(2560, 1080) = 40",
          "2560 ÷ 40 = 64 e 1080 ÷ 40 = 27, quindi il rapporto è 64:27",
          "64 ÷ 27 ≈ 2,3704: più largo dell'1,59% rispetto a “21:9” (2,3333) e più stretto dello 0,82% rispetto a 2,39:1, il rapporto comune più vicino",
        ],
      },
      {
        title: "Ridimensionare una slide 4:3 a un'altezza di 900 pixel",
        steps: ["Nuova larghezza = 900 × 4 ÷ 3 = 1.200", "Entrambi i lati sono già numeri interi, quindi non serve arrotondare"],
      },
      {
        title: "Uno schermo da 81 cm in 4:3",
        steps: [
          "√(4² + 3²) = 5",
          "Larghezza = 81 × 4 ÷ 5 = 64,8 cm; altezza = 81 × 3 ÷ 5 = 48,6 cm",
          "Area = 64,8 × 48,6 = 3.149,28 cm²",
        ],
      },
    ],
    assumptions: [
      "Larghezza e altezza usano la stessa unità e descrivono pixel quadrati. Alcuni vecchi formati video usano pixel non quadrati, quindi la loro dimensione memorizzata e la forma visualizzata differiscono.",
      "L'elenco dei rapporti comuni serve solo per confronto. In particolare “21:9” è un nome commerciale: gli schermi 2560 × 1080 sono 64:27, e il widescreen cinematografico è spesso indicato come 2,39:1.",
      "La diagonale di uno schermo si misura sull'immagine visibile. Cornici, bordi e curvatura degli schermi curvi non sono inclusi.",
    ],
    faqs: [
      {
        question: "Perché 1366 × 768 non è esattamente 16:9?",
        answer:
          "1366 × 768 si riduce a 683:384, circa 1,7786:1, che è entro lo 0,05% da 16:9 (1,7778:1). I produttori di schermi hanno arrotondato la larghezza a un numero comodo, quindi viene venduto come 16:9 anche se il rapporto ridotto non lo è.",
      },
      {
        question: "Come mantengo esatto il rapporto quando ridimensiono?",
        answer:
          "Scegli una larghezza che sia un multiplo della parte di larghezza del rapporto. Per il 16:9, qualsiasi larghezza multipla di 16, come 1280 o 1920, dà un'altezza intera. Le altre larghezze richiedono un arrotondamento, che cambia la forma di pochissimo.",
      },
      {
        question: "Uno schermo 21:9 più grande mostra più di uno schermo 16:9 con la stessa diagonale?",
        answer:
          "Non necessariamente. A parità di diagonale, uno schermo più largo è più basso e la sua area è minore. Usa la modalità dimensioni dello schermo per entrambe le forme e confronta altezza e area.",
      },
    ],
    sourcesUsedFor: [
      "Che “21:9” è un nome commerciale per schermi ultrawide il cui rapporto reale è 64:27 (circa 2,37:1), per esempio 2560 × 1080.",
      "Le risoluzioni degli schermi ultrawide e i loro rapporti esatti, come 2560 × 1080 (64:27).",
      "Larghezza e altezza di uno schermo dalla diagonale e dal rapporto d'aspetto con il teorema di Pitagora.",
    ],
  },
  text: {
    mode: "Che cosa vuoi fare?",
    modes: {
      simplify: "Trovare il rapporto di una dimensione",
      resize: "Ridimensionare a un rapporto",
      screen: "Dimensioni dello schermo dalla diagonale",
    },
    width: "Larghezza",
    height: "Altezza",
    sizeHelp: "In pixel o in qualsiasi altra unità, purché entrambe usino la stessa. Sono ammessi i decimali.",
    ratioWidth: "Larghezza del rapporto (W)",
    ratioHeight: "Altezza del rapporto (H)",
    ratioHelp: "Per 16:9 inserisci 16 e 9. Funzionano anche rapporti decimali come 2,39:1.",
    knownSide: "Quale nuovo lato conosci?",
    knownSides: { width: "La nuova larghezza", height: "La nuova altezza" },
    newSize: "Nuova dimensione",
    newSizeHelp: "La larghezza o l'altezza che vuoi, di solito in pixel.",
    diagonal: "Diagonale dello schermo",
    lengthUnit: "Unità di lunghezza",
    lengthUnits: { in: "Pollici (in)", cm: "Centimetri (cm)" },
    errors: {
      tooPrecise: "Usa al massimo 6 cifre decimali, così il rapporto può essere semplificato esattamente.",
      tooLarge: "Questi valori sono troppo grandi per essere semplificati esattamente. Usa numeri più piccoli.",
    },
    ratioText: "{w}:{h}",
    sizeText: "{w} × {h}",
    sizeUnitText: "{w} × {h} {unit}",
    primaryRatio: "Rapporto d'aspetto semplificato",
    primaryResize: "Nuova dimensione (pixel interi)",
    primaryScreen: "Larghezza × altezza dello schermo",
    captionSimplify: "{w} × {h} si riduce a {ratio} dividendo entrambi i lati per {gcd}.",
    captionResize: "Mantenendo la forma {ratio}: {side} di {size}.",
    captionScreen: "Una diagonale di {diagonal} {unit} in {ratio}.",
    sides: { width: "larghezza", height: "altezza" },
    decimalRatio: "Rapporto decimale (larghezza ÷ altezza)",
    decimalSuffix: ":1",
    nearest: "Rapporto comune più vicino",
    difference: "Differenza dal rapporto comune più vicino",
    orientation: "Orientamento",
    orientations: {
      landscape: "Orizzontale (più largo che alto)",
      portrait: "Verticale (più alto che largo)",
      square: "Quadrato",
    },
    pixels: "Pixel totali (se la dimensione è in pixel)",
    inputRatio: "Rapporto ai minimi termini",
    exactWidth: "Larghezza esatta",
    exactHeight: "Altezza esatta",
    roundedWidth: "Larghezza arrotondata a pixel interi",
    roundedHeight: "Altezza arrotondata a pixel interi",
    roundedRatio: "Rapporto decimale dopo l'arrotondamento",
    screenWidth: "Larghezza",
    screenHeight: "Altezza",
    screenArea: "Area dello schermo",
    otherWidth: "Larghezza in {unit}",
    otherHeight: "Altezza in {unit}",
    otherArea: "Area in {unit}",
    table: {
      caption: "Rapporti d'aspetto comuni confrontati con il tuo",
      ratio: "Rapporto",
      decimal: "Decimale (W ÷ H)",
      difference: "Il tuo rapporto rispetto a questo",
    },
    notes: {
      marketing:
        "“21:9” è un nome commerciale. I monitor ultrawide come 2560 × 1080 sono in realtà 64:27 (circa 2,37:1), e 3440 × 1440 è 43:18 (circa 2,39:1).",
      rounding:
        "L'arrotondamento a pixel interi cambia la forma di pochissimo. Le larghezze multiple di {w}, o le altezze multiple di {h}, mantengono esatto il rapporto.",
      roundingSimple: "L'arrotondamento a pixel interi cambia la forma di pochissimo.",
      diagonal:
        "Le dimensioni degli schermi si misurano in diagonale sull'immagine visibile. La cornice non è inclusa, e gli schermi curvi si misurano lungo la curva.",
      difference:
        "La differenza è il tuo rapporto decimale confrontato con ciascun rapporto comune: un valore positivo significa che la tua forma è più larga.",
    },
  },
};

export default it;
