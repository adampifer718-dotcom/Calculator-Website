import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HemocytometerText } from "../text/en";

const it: CalculatorTranslation<HemocytometerText> = {
  content: {
    title: "Calcolatore della conta cellulare (emocitometro)",
    shortTitle: "Conta cellulare",
    summary:
      "Trasforma le conte all'emocitometro in cellule per mL, con la vitalità, le cellule vive totali nel campione e il volume da prelevare per seminare un numero di cellule prefissato.",
    metaTitle: "Conta cellulare all'emocitometro – Cellule per mL",
    metaDescription:
      "Calcola le cellule vive e totali per mL dalle conte nella camera di Neubauer migliorata, con fattore di diluizione, vitalità al trypan blue e volume di semina.",
    keywords: [
      "emocitometro",
      "conta cellulare",
      "cellule per mL",
      "camera di Neubauer",
      "trypan blue",
      "vitalità cellulare",
      "semina cellule",
      "densità cellulare",
    ],
    intro: [
      "L'emocitometro è un vetrino spesso con una griglia di conta incisa in una camera di profondità nota. Nella camera di Neubauer migliorata, ciascuno dei nove quadrati grandi misura 1 mm × 1 mm e la camera è profonda 0,1 mm, quindi il liquido sopra un quadrato grande è 0,1 µL, cioè un decimillesimo di millilitro.",
      "Per questo il numero medio di cellule per quadrato grande, moltiplicato per 10⁴ e per l'eventuale diluizione, dà il numero di cellule per mL. Questo calcolatore lo fa per le cellule vive, aggiunge le cellule morte (colorate) per la conta totale e la vitalità, e calcola quante cellule contiene un campione e quanto volume prelevarne per seminare un numero stabilito di cellule.",
    ],
    howToUse: [
      "Conta le cellule vive in un certo numero di quadrati grandi, per esempio i quattro quadrati d'angolo, e inserisci il totale e il numero di quadrati.",
      "Se hai colorato le cellule, per esempio con trypan blue, inserisci anche le cellule morte (colorate) contate negli stessi quadrati.",
      "Inserisci il fattore di diluizione: 2 se hai mescolato volumi uguali di cellule e colorante, 1 se le cellule non erano diluite.",
      "Se vuoi, inserisci il volume della sospensione e il numero di cellule che vuoi seminare.",
    ],
    formulas: [
      {
        title: "Concentrazione cellulare",
        expression: "cellule/mL = (cellule contate ÷ quadrati grandi contati) × fattore di diluizione × 10⁴",
        explanation:
          "Un quadrato grande contiene 1 mm × 1 mm × 0,1 mm = 0,1 mm³ = 10⁻⁴ mL, quindi la conta per quadrato moltiplicata per 10⁴ dà le cellule per mL.",
      },
      {
        title: "Vitalità",
        expression: "vitalità % = vive ÷ (vive + morte) × 100",
        explanation: "La quota di cellule contate che escludono il colorante.",
      },
      {
        title: "Cellule totali e volume di semina",
        expression: "cellule vive totali = cellule vive/mL × volume; volume da seminare = cellule desiderate ÷ cellule vive/mL",
        explanation:
          "La concentrazione si estende all'intera sospensione, oppure si riduce al volume che contiene il numero di cellule che ti serve.",
      },
    ],
    examples: [
      {
        title: "Conta al trypan blue dei quattro quadrati d'angolo",
        steps: [
          "Media per quadrato: 182 ÷ 4 = 45,5 cellule vive.",
          "Cellule vive/mL: 45,5 × 2 × 10⁴ = 910.000 = 9,1 × 10⁵.",
          "Vitalità: 182 ÷ (182 + 14) = 92,9%.",
          "Volume per 1.000.000 di cellule: 1.000.000 ÷ 910.000 ≈ 1,099 mL.",
        ],
      },
      {
        title: "Una coltura densa diluita 1 a 10",
        steps: ["Media per quadrato: 95 ÷ 5 = 19 cellule.", "Cellule vive/mL: 19 × 10 × 10⁴ = 1,9 × 10⁶."],
      },
      {
        title: "Un campione rado e non diluito",
        steps: [
          "Media per quadrato: 37 ÷ 4 = 9,25 cellule.",
          "Cellule vive/mL: 9,25 × 1 × 10⁴ = 9,25 × 10⁴.",
          "Con solo 37 cellule contate, il solo errore di conta è circa ±16% (1 ÷ √37).",
        ],
      },
    ],
    assumptions: [
      "La camera è di tipo Neubauer migliorata, con quadrati grandi da 1 mm² e profondità di 0,1 mm. Altre camere, come la Fuchs-Rosenthal, o la conta dei quadrati piccoli richiedono un fattore diverso.",
      "Le cellule sono mescolate in modo uniforme e la camera è stata riempita correttamente, senza traboccamenti né bolle.",
      "Le cellule si distribuiscono a caso, quindi la conta segue la statistica di Poisson: l'errore relativo è circa 1 ÷ √(cellule contate). Le conte basse sono molto meno precise, e le differenze tra operatori aggiungono altro errore.",
      "La vitalità ricavata dall'esclusione del colorante è una stima. Le cellule che escludono il colorante non sono necessariamente sane, e il tempo di colorazione influisce sul risultato.",
    ],
    faqs: [
      {
        question: "Perché si moltiplica per 10⁴?",
        answer:
          "Un quadrato grande ha il lato di 1 mm e la camera è profonda 0,1 mm, quindi contiene 0,1 mm³, cioè 0,1 µL o 10⁻⁴ mL. Dividere le cellule per quadrato per 10⁻⁴ mL equivale a moltiplicarle per 10⁴ per mL.",
      },
      {
        question: "Che fattore di diluizione uso con il trypan blue?",
        answer:
          "Il volume totale diviso per il volume di sospensione cellulare. Volumi uguali di cellule e trypan blue (per esempio 10 µL + 10 µL) danno un fattore di diluizione di 2. Se lo ometti, il risultato si dimezza.",
      },
      {
        question: "Quante cellule dovrei contare?",
        answer:
          "Più cellule conti, più piccolo è l'errore di conta, che è circa 1 ÷ √(numero contato). Contare qualche centinaio di cellule su più quadrati dà un errore intorno al 5–6%; contarne 30 dà circa il 18%.",
      },
    ],
    sourcesUsedFor: [
      "Cellule per mL = conta media per quadrato grande × fattore di diluizione × 10⁴, e il consiglio di ripetere la conta con un'altra diluizione se si esce da circa 20–50 cellule per quadrato.",
      "L'errore di conta pari all'incirca alla radice quadrata del numero di cellule contate, e il suggerimento di contare in totale qualche centinaio di cellule.",
    ],
  },
  text: {
    live: "Cellule vive (non colorate) contate",
    liveHelp: "Il numero totale di cellule vive in tutti i quadrati grandi che hai contato.",
    dead: "Cellule morte (colorate) contate",
    deadHelp:
      "Facoltativo. Le cellule che hanno assorbito il colorante, come il trypan blue, negli stessi quadrati. Servono per la conta totale e la vitalità.",
    squares: "Quadrati grandi contati",
    squaresHelp:
      "Ogni quadrato grande di una camera di Neubauer migliorata misura 1 mm × 1 mm × 0,1 mm di profondità, cioè 0,1 µL. Di solito si contano i 4 quadrati d'angolo.",
    dilution: "Fattore di diluizione",
    dilutionHelp:
      "Volume totale ÷ volume di sospensione cellulare. Per volumi uguali di cellule e trypan blue (1:1), inserisci 2. Inserisci 1 se non hai diluito.",
    volume: "Volume del campione",
    volumeHelp: "Facoltativo. Il volume della sospensione cellulare, per ottenere il numero totale di cellule vive che contiene.",
    target: "Cellule da seminare",
    targetHelp: "Facoltativo. Il numero di cellule vive che vuoi seminare, per ottenere il volume di sospensione da prelevare.",
    errors: {
      noLiveForTarget: "Non sono state contate cellule vive, quindi non si può calcolare il volume necessario per la semina.",
    },
    cellsPerMl: "{value} cellule/mL",
    cellsPerMlUnit: "cellule/mL",
    cellsUnit: "cellule",
    result: "Cellule vive per mL",
    caption: "Cellule vive ÷ quadrati contati × fattore di diluizione × 10⁴",
    totalPerMl: "Cellule totali per mL (vive + morte)",
    viability: "Vitalità",
    averagePerSquare: "Media di cellule vive per quadrato grande",
    totalLive: "Cellule vive in {volume} mL",
    volumeNeeded: "Volume di sospensione per {target} cellule",
    volumeNeededUl: "Stesso volume in µL",
    notes: {
      poisson:
        "Hai contato {count} cellule in totale. La sola statistica di conta dà un errore relativo di circa ±{cv}% (1 ÷ √conta); contando più cellule si riduce. Si raccomanda spesso di contare in totale qualche centinaio di cellule.",
      density:
        "La media di {average} cellule vive per quadrato è fuori dall'intervallo di circa 20–50 cellule per quadrato spesso consigliato per la conta. Valuta di modificare la diluizione e ripetere la conta.",
      noCells: "Non sono state contate cellule vive, quindi la concentrazione di cellule vive è zero. Controlla il campione e la diluizione.",
      exceedsSample: "L'obiettivo di semina richiede più cellule vive di quante ne contenga il volume del campione.",
      general:
        "Si presuppone una camera di Neubauer migliorata con profondità di 0,1 mm e quadrati grandi da 1 mm². Altre camere, o la conta dei quadrati piccoli, richiedono un fattore diverso.",
    },
  },
};

export default it;
