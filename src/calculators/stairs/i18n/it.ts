import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { StairsText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const it: CalculatorTranslation<StairsText> = {
  content: {
    title: "Calcolatore delle scale",
    shortTitle: "Scale",
    summary:
      "Calcola il numero di gradini, l'altezza dell'alzata, lo sviluppo orizzontale, l'inclinazione e la lunghezza del cosciale dal dislivello tra i piani, con la verifica di comodità 2R + T.",
    metaTitle: "Calcolatore delle scale – Alzate, pedate e cosciale",
    metaDescription:
      "Scopri quanti gradini servono a una scala dal dislivello totale, con alzata, sviluppo, inclinazione, cosciale e verifica di comodità 2R + T, in pollici o cm.",
    keywords: [
      "calcolo scale",
      "calcolo alzata e pedata",
      "quanti gradini servono",
      "lunghezza cosciale",
      "dimensionamento scala",
      "inclinazione scala",
      "pedata gradino",
    ],
    intro: [
      "Una scala divide il dislivello tra due piani in gradini uguali. Ogni gradino ha un'alzata (la sua altezza) e una pedata (la sua profondità). Il numero di alzate dipende dal dislivello totale e dall'alzata più alta che accetti; le pedate sono sempre una in meno delle alzate, perché l'ultimo gradino è il piano superiore stesso.",
      "Inserisci il dislivello tra i piani, l'alzata massima e la profondità della pedata per ottenere il numero di gradini, l'altezza esatta dell'alzata, lo sviluppo orizzontale, l'inclinazione della scala e la lunghezza della diagonale del cosciale, con la tradizionale verifica di comodità 2R + T (R = alzata, T = pedata). I valori predefiniti sono i limiti dell'International Residential Code statunitense, ma le norme locali possono essere diverse.",
    ],
    howToUse: [
      "Scegli pollici o centimetri.",
      "Misura il dislivello totale dal pavimento finito in basso al pavimento finito in alto.",
      "Controlla l'alzata massima e la profondità della pedata. I valori predefiniti sono l'alzata massima di 7¾ in e la pedata minima di 10 in dell'International Residential Code.",
      "Se vuoi, inserisci un'alzata desiderata e lo spazio orizzontale disponibile per vedere se la scala ci sta.",
      "Leggi il numero di alzate e la disposizione, poi verifica tutto rispetto alle norme edilizie locali.",
    ],
    formulas: [
      {
        title: "Numero di alzate",
        expression: "n = ⌈dislivello totale ÷ alzata massima⌉",
        explanation: "Con un'alzata desiderata, n è il numero intero più vicino a dislivello totale ÷ alzata desiderata.",
      },
      { title: "Altezza dell'alzata e pedate", expression: "alzata = dislivello totale ÷ n; pedate = n − 1", explanation: "Tutte le alzate hanno la stessa altezza." },
      {
        title: "Sviluppo e inclinazione",
        expression: "sviluppo = pedate × profondità pedata; angolo = arctan(alzata ÷ pedata)",
        explanation: "Lo sviluppo si misura da naso a naso dei gradini, senza pianerottoli.",
      },
      { title: "Diagonale del cosciale", expression: "cosciale = √(dislivello totale² + sviluppo totale²)", explanation: "La linea retta dalla base alla sommità della rampa." },
      {
        title: "Regola pratica di comodità",
        expression: "24 in ≤ 2 × alzata + pedata ≤ 25 in",
        explanation: "Circa 61–63,5 cm. Una linea guida tradizionale per un passo comodo, non una prescrizione normativa.",
      },
    ],
    examples: [
      {
        title: "108 in tra i piani con i valori predefiniti dell'IRC",
        steps: [
          "n = ⌈108 ÷ 7,75⌉ = ⌈13,94⌉ = 14 alzate",
          "Alzata = 108 ÷ 14 ≈ 7,714 in; 13 pedate da 10 in danno uno sviluppo di 130 in",
          "Angolo = arctan(7,714 ÷ 10) ≈ 37,6°; cosciale = √(108² + 130²) ≈ 169,01 in",
          "2R + T ≈ 25,43 in, poco sopra l'intervallo di comodità di 24–25 in",
        ],
      },
      {
        title: "Dislivello di 252 cm con pedate da 24 cm",
        steps: [
          "n = ⌈252 ÷ 19,6⌉ = ⌈12,86⌉ = 13 alzate",
          "Alzata = 252 ÷ 13 ≈ 19,385 cm; 12 pedate danno uno sviluppo di 288 cm",
          "2R + T ≈ 62,77 cm ≈ 24,71 in, entro l'intervallo di comodità",
        ],
      },
      {
        title: "Dislivello di 100 in, alzate di 7 in desiderate in uno spazio di 130 in",
        steps: [
          "n = arrotonda(100 ÷ 7) = arrotonda(14,29) = 14 alzate da ≈ 7,143 in",
          "13 pedate × 10,5 in = 136,5 in di sviluppo, 6,5 in in più dello spazio disponibile",
          "2R + T ≈ 24,79 in, entro l'intervallo di comodità",
        ],
      },
    ],
    assumptions: [
      "Questa è una stima geometrica per una singola rampa diritta con gradini uguali. Pianerottoli, gradini a ventaglio, scale a chiocciola e lo spessore delle pedate non sono considerati.",
      "Le norme edilizie variano da un luogo all'altro e cambiano nel tempo, e riguardano molto più delle dimensioni dei gradini: altezza libera, larghezza, corrimano, parapetti, nasi dei gradini e la variazione ammessa tra un gradino e l'altro. I valori predefiniti sono presi dall'International Residential Code solo come punto di partenza; verifica le norme in vigore dove costruisci.",
      "Il dislivello totale va misurato tra le superfici dei pavimenti finiti. Cambiare in seguito la finitura del pavimento modifica l'altezza del primo e dell'ultimo gradino.",
    ],
    faqs: [
      {
        question: "Quanti gradini servono per un dislivello di 9 ft (108 in)?",
        answer:
          "Con un'alzata massima di 7¾ in servono ⌈108 ÷ 7,75⌉ = 14 alzate di circa 7,71 in ciascuna e 13 pedate. Un'alzata massima più bassa dà più gradini, meno alti, e una scala più lunga.",
      },
      {
        question: "Perché le pedate sono meno delle alzate?",
        answer:
          "L'ultima alzata ti porta sul piano superiore, che fa da gradino più alto. Così una rampa con 14 alzate ha 13 pedate e lo sviluppo totale è pari a 13 profondità di pedata.",
      },
      {
        question: "Che cos'è la regola 2R + T?",
        answer:
          "È una linea guida tradizionale di comodità: due altezze di alzata più una profondità di pedata dovrebbero dare circa 24–25 in (61–63,5 cm), più o meno la lunghezza di un passo comodo. Non è un requisito normativo, ma le scale molto fuori da questo intervallo tendono a risultare scomode.",
      },
    ],
    sourcesUsedFor: [
      "I limiti dell'International Residential Code (R311.7.5) usati come valori predefiniti: alzata massima di 7¾ in (196 mm) e pedata minima di 10 in (254 mm).",
      "La regola pratica di comodità 2 × alzata + pedata = 24–25 in, attribuita agli Architectural Graphic Standards.",
    ],
  },
  text: {
    unit: "Unità",
    units: { in: "Pollici (in)", cm: "Centimetri (cm)" },
    rise: "Dislivello totale (da piano a piano)",
    riseHelp: "La distanza verticale dalla superficie del pavimento finito inferiore alla superficie del pavimento finito superiore.",
    maxRiser: "Alzata massima",
    maxRiserHelp:
      "Il gradino più alto che accetti. Il valore predefinito è il massimo di 7¾ in (196 mm) dell'International Residential Code; le norme locali possono essere diverse.",
    targetRiser: "Alzata desiderata (facoltativa)",
    targetRiserHelp:
      "Se inserisci un'altezza di gradino preferita, il numero di alzate viene scelto per avvicinarsi il più possibile a essa, anche se così si supera l'alzata massima indicata sopra.",
    tread: "Profondità della pedata",
    treadHelp:
      "La profondità orizzontale di ogni gradino, da naso a naso. Il valore predefinito è il minimo di 10 in (254 mm) dell'International Residential Code.",
    runLimit: "Sviluppo totale disponibile (facoltativo)",
    runLimitHelp: "Lo spazio orizzontale che hai per la scala, con cui confrontare il risultato.",
    steps: "Numero di alzate (gradini)",
    caption: "{risers} da {riser} ciascuna, con {treads} da {tread}.",
    risersCount: forms("{n} alzata", "{n} alzate"),
    treadsCount: forms("{n} pedata", "{n} pedate"),
    riserHeight: "Altezza dell'alzata",
    treads: "Numero di pedate",
    totalRun: "Sviluppo totale",
    angle: "Inclinazione della scala",
    stringer: "Lunghezza del cosciale (diagonale di dislivello e sviluppo)",
    comfort: "Verifica di comodità 2R + T",
    comfortStatus: "Rispetto alla regola pratica di 24–25 in (61–63,5 cm)",
    comfortOptions: {
      low: "Sotto l'intervallo: una scala poco ripida e lunga",
      ok: "Entro l'intervallo",
      high: "Sopra l'intervallo: una scala ripida o con pedate profonde",
    },
    notes: {
      overMax: "L'alzata di {riser} supera il massimo che hai inserito ({max}).",
      overRun: "Lo sviluppo totale di {run} supera di {over} lo spazio che hai inserito ({limit}).",
      comfort:
        "La regola 2R + T (due alzate più una pedata pari a circa 24–25 in) è una linea guida tradizionale di comodità, non un requisito normativo.",
      code: "Le norme edilizie variano da un luogo all'altro e stabiliscono molto più delle dimensioni dei gradini: altezza libera, larghezza, corrimano, parapetti, nasi dei gradini, pianerottoli e la variazione ammessa tra un gradino e l'altro. Verifica le norme edilizie locali e fai controllare il progetto da un professionista qualificato.",
      stringer:
        "La lunghezza del cosciale è la diagonale retta di dislivello e sviluppo totali. Un cosciale sagomato è più lungo, una volta aggiunta la tavola necessaria per i collegamenti in alto e in basso.",
    },
  },
};

export default it;
