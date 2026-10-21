import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PlantSpacingText } from "../text/en";

const it: CalculatorTranslation<PlantSpacingText> = {
  content: {
    title: "Calcolatore del sesto d'impianto",
    shortTitle: "Sesto d'impianto",
    summary: "Calcola quante piante entrano in un'aiuola rettangolare con una data distanza, a file dritte o a quinconce.",
    metaTitle: "Calcolatore sesto d'impianto – Piante per aiuola",
    metaDescription:
      "Calcola quante piante entrano in un'aiuola in base alla distanza tra le piante e tra le file, a griglia o a quinconce, e le piante per m² o per ft².",
    keywords: [
      "sesto d'impianto",
      "distanza tra le piante",
      "distanza di impianto",
      "quante piante entrano",
      "impianto a quinconce",
      "progettazione aiuole",
      "distanza tra le file",
      "densità di impianto",
    ],
    intro: [
      "Le bustine di semi e le etichette delle piante indicano una distanza consigliata. Trasformarla nel numero di piante per una certa aiuola è aritmetica semplice, ma è facile dimenticare che anche le piante esterne hanno bisogno di spazio.",
      "Questo calcolatore tiene ogni pianta ad almeno mezza distanza dal bordo dell'aiuola, così le piante perimetrali hanno lo stesso spazio di quelle al centro. Funziona per file dritte e per l'impianto a quinconce (schema triangolare), in cui ogni fila è sfalsata di mezza distanza.",
    ],
    howToUse: [
      "Scegli l'unità e inserisci lunghezza e larghezza dell'aiuola.",
      "Scegli file dritte o quinconce.",
      "Inserisci la distanza tra le piante e, per le file dritte, la distanza tra le file.",
      "Leggi quante piante entrano, la densità di impianto e la disposizione delle file.",
    ],
    formulas: [
      {
        title: "File dritte",
        expression: "piante = ⌊L ÷ s⌋ × ⌊W ÷ r⌋",
        explanation: "L e W sono lunghezza e larghezza dell'aiuola, s la distanza sulla fila e r la distanza tra le file. Lasciando libera mezza distanza a ogni bordo, una fila di lunghezza L contiene ⌊L ÷ s⌋ piante.",
      },
      {
        title: "File a quinconce",
        expression: "h = s × √3 ÷ 2\nfile = ⌊(W − s) ÷ h⌋ + 1 (0 se W < s)",
        explanation: "Ogni pianta è alla stessa distanza s dalle vicine, quindi le file distano tra loro solo circa 0,866 s.",
      },
      {
        title: "Piante a quinconce",
        expression: "file intere: ⌊L ÷ s⌋ piante\nfile sfalsate: max(0, ⌊L ÷ s − 0,5⌋) piante",
        explanation: "Le file si alternano partendo da una intera; quelle sfalsate sono spostate di mezza distanza e possono avere una pianta in meno.",
      },
      {
        title: "Densità",
        expression: "densità = piante ÷ (L × W)",
        explanation: "È mostrata per metro quadrato con le unità metriche e per piede quadrato con le unità statunitensi.",
      },
    ],
    examples: [
      {
        title: "Peperoni in un'aiuola da 12 ft × 4 ft, a 18 in su file distanti 2 ft",
        steps: [
          "Piante per fila: ⌊12 ÷ 1,5⌋ = 8",
          "File: ⌊4 ÷ 2⌋ = 2",
          "Totale: 8 × 2 = 16 piante, cioè 16 ÷ 48 ft² ≈ 0,33 per ft²",
        ],
      },
      {
        title: "Lattuga in un'aiuola da 300 cm × 120 cm, a quinconce a 40 cm",
        steps: [
          "Distanza tra le file: 40 × √3 ÷ 2 ≈ 34,64 cm",
          "File: ⌊(120 − 40) ÷ 34,64⌋ + 1 = 2 + 1 = 3",
          "File intere: ⌊300 ÷ 40⌋ = 7; fila sfalsata: ⌊7,5 − 0,5⌋ = 7",
          "Totale: 2 × 7 + 1 × 7 = 21 piante",
        ],
      },
      {
        title: "Carote in una fioriera da 48 in × 24 in, a 3 in in entrambe le direzioni",
        steps: [
          "Piante per fila: ⌊48 ÷ 3⌋ = 16",
          "File: ⌊24 ÷ 3⌋ = 8",
          "Totale: 16 × 8 = 128 piante su 8 ft², cioè 16 per ft²",
        ],
      },
    ],
    assumptions: [
      "L'aiuola è un rettangolo senza vialetti, bordure od ostacoli al suo interno. Misura solo la zona coltivata.",
      "Le piante restano ad almeno mezza distanza da ogni bordo, così le aiuole o i vialetti vicini condividono lo spazio libero. Se l'aiuola è contro un muro, potrebbero entrarci alcune piante in più.",
      "Le file corrono lungo la lunghezza dell'aiuola. Le distanze consigliate variano secondo varietà, terreno e clima; segui le indicazioni della bustina o dei servizi di consulenza agricola locali.",
      "I conteggi si riferiscono alla disposizione finale delle piante. Semina più fitto e dirada, oppure compra qualche piantina di scorta, per compensare le perdite.",
    ],
    faqs: [
      {
        question: "A quinconce entrano più piante?",
        answer: "Nelle aiuole grandi sì: a parità di distanza entrano circa il 15 % di piante in più, perché le file sono più ravvicinate. Nelle aiuole piccole le file sfalsate possono perdere una pianta in fondo, quindi il guadagno può essere minore o persino negativo.",
      },
      {
        question: "Perché si lascia un margine ai bordi?",
        answer: "Una pianta ha bisogno di spazio su tutti i lati. Lasciare libera mezza distanza a ogni bordo dà alle piante perimetrali lo stesso spazio delle altre, e due aiuole adiacenti restano separate da una distanza intera.",
      },
      {
        question: "Che cosa significa piante per piede quadrato?",
        answer: "È il numero di piante diviso per la superficie dell'aiuola. Serve a confrontare disposizioni diverse o a usare le tabelle dell'orto a piedi quadrati, che indicano un numero di piante per piede quadrato.",
      },
    ],
    sourcesUsedFor: ["Indicazioni sull'impianto a blocchi, con la stessa distanza tra le piante e tra le file, nelle aiuole dell'orto."],
  },
  text: {
    unit: "Unità",
    units: { m: "m", cm: "cm", ft: "ft", in: "in" },
    length: "Lunghezza dell'aiuola",
    width: "Larghezza dell'aiuola",
    pattern: "Schema di impianto",
    patterns: { grid: "File (griglia quadrata)", triangular: "Quinconce (sfalsato)" },
    spacing: "Distanza tra le piante",
    spacingHelp: "La distanza consigliata tra le piante, indicata sulla bustina di semi o sull'etichetta.",
    rowSpacing: "Distanza tra le file",
    errors: { tooMany: "Questa distanza è troppo piccola per l'aiuola: darebbe più di un miliardo di piante." },
    plants: "Piante che entrano",
    caption: "Ogni pianta resta ad almeno mezza distanza da tutti i bordi dell'aiuola.",
    rows: "File",
    perRow: "Piante per fila",
    perRowOffset: "Piante per fila (intera / sfalsata)",
    perRowOffsetValue: "{full} / {offset}",
    bedArea: "Superficie dell'aiuola",
    densityMetric: "Piante per metro quadrato",
    densityImperial: "Piante per piede quadrato",
    notes: {
      tooSmall: "L'aiuola è troppo piccola per questa distanza: non entra nemmeno una pianta lasciando mezza distanza libera da ogni bordo.",
      triangular: "A quinconce ogni fila è sfalsata di mezza distanza e le file distano tra loro 0,866 (√3/2) volte la distanza.",
    },
  },
};

export default it;
