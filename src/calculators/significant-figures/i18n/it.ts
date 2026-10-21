import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SigFigText } from "../text/en";

const it: CalculatorTranslation<SigFigText> = {
  content: {
    title: "Calcolatore di cifre significative",
    shortTitle: "Cifre significative",
    summary: "Conta le cifre significative di un numero o arrotonda un numero al numero di cifre significative che scegli.",
    metaTitle: "Calcolatore di cifre significative – Conta e arrotonda",
    metaDescription:
      "Conta le cifre significative di qualsiasi numero, anche decimale o in notazione e, oppure arrotonda a un numero dato di cifre con la notazione scientifica.",
    keywords: ["cifre significative", "contare cifre significative", "arrotondamento", "precisione", "chimica", "fisica", "notazione scientifica"],
    intro: [
      "Le cifre significative indicano con quanta precisione è noto un numero. Questo calcolatore le conta secondo le regole standard, oppure arrotonda un numero alla precisione che scegli.",
      "Digita il numero esattamente come è scritto, perché gli zeri finali e il separatore decimale cambiano il conteggio.",
    ],
    howToUse: [
      "Scegli se contare o arrotondare.",
      "Digita il numero esattamente come è scritto, compresi gli eventuali zeri finali.",
      "Se arrotondi, inserisci quante cifre significative mantenere.",
    ],
    formulas: [
      {
        title: "Regole di conteggio",
        expression:
          "1. Le cifre diverse da zero sono significative.\n2. Gli zeri tra cifre diverse da zero sono significativi.\n3. Gli zeri iniziali non sono mai significativi.\n4. Gli zeri finali sono significativi solo se c'è il separatore decimale.",
        explanation: "Sono le regole insegnate nella maggior parte dei corsi di chimica e fisica.",
      },
      {
        title: "Arrotondamento",
        expression: "Mantieni n cifre a partire dalla prima cifra diversa da zero, poi arrotonda l'ultima.",
        explanation: "La notazione scientifica elimina ogni ambiguità sugli zeri finali.",
      },
    ],
    examples: [
      {
        title: "Quante cifre significative ha 0,004050?",
        steps: ["Gli zeri iniziali 0,00 non contano", "Contano 4, 0, 5 e lo zero finale: 4 cifre significative"],
      },
      {
        title: "Arrotonda 123.456 a 3 cifre significative",
        steps: ["Mantieni 1, 2, 3; la cifra successiva è 4, quindi arrotonda per difetto", "123.000, ovvero 1,23 × 10⁵"],
      },
    ],
    assumptions: [
      "Gli zeri finali di un numero intero senza separatore decimale sono considerati non significativi.",
      "I numeri sono gestiti con un massimo di 15 cifre significative.",
    ],
    faqs: [
      {
        question: "Gli zeri finali sono significativi?",
        answer: "Solo quando il numero ha il separatore decimale. 2,50 ha 3 cifre significative, mentre 250 ne ha 2, a meno che non sia scritto 250. oppure 2,50 × 10².",
      },
      { question: "Gli zeri iniziali sono significativi?", answer: "No. In 0,0071 gli zeri servono solo a collocare la virgola, quindi il numero ha 2 cifre significative." },
      { question: "Perché usare la notazione scientifica?", answer: "Mostra esattamente quali cifre sono significative: 1,20 × 10³ ne ha chiaramente 3." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    task: "Operazione",
    tasks: { count: "Conta le cifre significative", round: "Arrotonda a cifre significative" },
    number: "Numero",
    numberHelp: "Digitalo esattamente come è scritto, compresi gli zeri finali. Usa il punto per i decimali. È ammessa la notazione e, come 6.02e23.",
    invalid: "Inserisci un numero come 1200, 0.0045 o 6.02e23.",
    zero: "Inserisci un numero diverso da zero.",
    tooLarge: "Inserisci un numero più piccolo.",
    digits: "Cifre significative da mantenere",
    rounded: "Arrotondato a {digits} cifre significative",
    scientific: "Notazione scientifica",
    originalCount: "Cifre significative dell'originale",
    roundNote: "Gli zeri finali di un numero intero come 123.000 sono ambigui; la forma scientifica mostra esattamente quali cifre sono significative.",
    count: "Cifre significative",
    countCaption: "{number} ha {count} cifre significative.",
    countCaptionOne: "{number} ha 1 cifra significativa.",
    inScientific: "In notazione scientifica",
    countNote: "Gli zeri finali di un numero intero senza separatore decimale (come 1200) sono considerati non significativi. Scrivi 1200. per renderli significativi.",
  },
};

export default it;
