import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ResistorColorCodeText } from "../text/en";

const it: CalculatorTranslation<ResistorColorCodeText> = {
  content: {
    title: "Calcolatore del codice colori dei resistori",
    shortTitle: "Codice colori dei resistori",
    summary:
      "Leggi valore, tolleranza e coefficiente di temperatura di un resistore a 4, 5 o 6 fasce dai suoi colori, oppure trova le fasce colorate per una resistenza.",
    metaTitle: "Codice colori dei resistori – 4, 5 e 6 fasce",
    metaDescription:
      "Decodifica i colori dei resistori a 4, 5 e 6 fasce in ohm, intervallo di tolleranza e coefficiente di temperatura, o trova le fasce per un valore come 4,7k.",
    keywords: [
      "codice colori resistori",
      "calcolo codice colori resistenze",
      "resistore 4 fasce",
      "resistore 5 fasce",
      "resistore 6 fasce",
      "da fasce colorate a ohm",
      "IEC 60062",
      "tolleranza resistore",
    ],
    intro: [
      "I piccoli resistori a foro passante sono troppo piccoli per stamparci sopra un valore, quindi portano delle fasce colorate. La norma internazionale IEC 60062 assegna a ogni colore una cifra da 0 (nero) a 9 (bianco); le fasce dopo le cifre indicano un moltiplicatore in potenze di dieci, la tolleranza e, sui componenti di precisione, il coefficiente di temperatura.",
      "Scegli 4, 5 o 6 fasce e seleziona i colori per leggere la resistenza, il suo intervallo di tolleranza e il coefficiente di temperatura. Oppure fai il contrario: scrivi un valore come 4,7k e ottieni i colori per un resistore a 4 o 5 fasce.",
    ],
    howToUse: [
      "Per leggere un resistore, scegli “Dai colori al valore” e il numero di fasce. Tieni il resistore con la fascia di tolleranza (spesso oro, argento o distanziata) a destra.",
      "Seleziona i colori da sinistra a destra: le fasce delle cifre, il moltiplicatore, la tolleranza e, sui componenti a 6 fasce, il coefficiente di temperatura. Ogni elenco mostra solo i colori validi per quella fascia.",
      "Per trovare i colori di un valore, scegli “Dal valore ai colori”, scrivi la resistenza (per esempio 470, 4,7k, 4k7 o 2,2M), scegli 4 o 5 fasce e una tolleranza.",
    ],
    formulas: [
      {
        title: "Resistenza",
        expression: "R = (cifre significative) × 10ⁿ Ω",
        explanation:
          "Due fasce di cifre su un resistore a 4 fasce, tre su quelli a 5 e 6 fasce. La fascia del moltiplicatore fissa n, da −2 (argento) e −1 (oro) fino a 9 (bianco).",
      },
      {
        title: "Intervallo di tolleranza",
        expression: "R_min = R × (1 − toll.);  R_max = R × (1 + toll.)",
        explanation: "Per esempio ±5% per l'oro. Senza fascia di tolleranza la tolleranza è ±20%.",
      },
      {
        title: "Coefficiente di temperatura",
        expression: "ΔR = R × TCR × ΔT",
        explanation: "Il TCR è in parti per milione per kelvin: 100 ppm/K significa che la resistenza varia dello 0,1% per una variazione di 10 K.",
      },
    ],
    examples: [
      {
        title: "Giallo, viola, rosso, oro (4 fasce)",
        steps: [
          "Cifre: giallo 4, viola 7, quindi 47",
          "Moltiplicatore rosso: × 100, quindi 4.700 Ω = 4,7 kΩ",
          "Tolleranza oro ±5%: da 4.465 Ω a 4.935 Ω",
        ],
      },
      {
        title: "Marrone, nero, nero, rosso, marrone, rosso (6 fasce)",
        steps: [
          "Cifre: 1, 0, 0, quindi 100",
          "Moltiplicatore rosso: × 100, quindi 10.000 Ω = 10 kΩ",
          "Tolleranza marrone ±1%: da 9,9 kΩ a 10,1 kΩ",
          "Sesta fascia rossa: 50 ppm/K, circa 5 Ω in più o in meno ogni 10 K",
        ],
      },
      {
        title: "Colori per 4k7 su un resistore a 5 fasce all'1%",
        steps: ["4k7 = 4.700 Ω = 470 × 10¹", "Cifre 4, 7, 0: giallo, viola, nero", "Moltiplicatore 10¹: marrone; tolleranza 1%: marrone"],
      },
    ],
    assumptions: [
      "Il significato dei colori segue la IEC 60062 per cifre, moltiplicatori, colori di tolleranza comuni e fascia del coefficiente di temperatura. Alcuni colori usati raramente e varianti più vecchie o specifiche dei produttori non sono inclusi.",
      "La conversione dal valore ai colori accetta solo valori che il numero di fasce di cifre scelto può rappresentare esattamente, da 0,1 Ω in su. Non controlla se il valore appartiene a una serie E standard.",
      "Con certe luci e su componenti vecchi o danneggiati dal calore i colori sono difficili da distinguere. Un multimetro dà il valore definitivo.",
    ],
    faqs: [
      {
        question: "Da quale estremità comincio a leggere?",
        answer:
          "Comincia dall'estremità in cui le fasce sono più vicine al bordo, e tieni a destra la fascia di tolleranza, spesso oro o argento, distanziata o più larga. Oro e argento non iniziano mai il codice, quindi se uno dei due si trova a un'estremità, leggi dall'altra.",
      },
      {
        question: "Che differenza c'è tra resistori a 4, 5 e 6 fasce?",
        answer:
          "Un resistore a 4 fasce ha due cifre significative, quindi valori come 4,7 kΩ. Un resistore a 5 fasce ne ha tre, per valori di precisione come 4,99 kΩ, e di solito una tolleranza più stretta. Un resistore a 6 fasce aggiunge al codice a 5 fasce una fascia per il coefficiente di temperatura.",
      },
      {
        question: "Perché non ottengo i colori per 4,99k con 4 fasce?",
        answer:
          "4,99k ha tre cifre significative, ma un codice a 4 fasce ha solo due fasce di cifre. Scegli 5 fasce, oppure arrotonda al valore più vicino rappresentabile con due cifre.",
      },
    ],
    sourcesUsedFor: [
      "Che i colori dal nero al bianco indicano le cifre da 0 a 9 e, con oro e argento, le fasce di moltiplicatore, tolleranza e coefficiente di temperatura.",
      "I colori di tolleranza: marrone ±1%, rosso ±2%, verde ±0,5%, blu ±0,25%, viola ±0,1%, oro ±5% e argento ±10%.",
      "Che un resistore a 4 fasce senza fascia di tolleranza è ±20%.",
      "I colori del coefficiente di temperatura della sesta fascia in ppm/K.",
    ],
  },
  text: {
    mode: "Che cosa vuoi fare?",
    modes: { decode: "Dai colori al valore", encode: "Dal valore ai colori" },
    bands: "Numero di fasce",
    bandCounts: { "4": "4 fasce", "5": "5 fasce", "6": "6 fasce" },
    encodeBandCounts: { "4": "4 fasce (2 cifre)", "5": "5 fasce (3 cifre)" },
    band1: "Fascia 1: prima cifra",
    band2: "Fascia 2: seconda cifra",
    band3: "Fascia 3: terza cifra",
    multiplier: "Fascia del moltiplicatore",
    tolerance: "Fascia di tolleranza",
    tcr: "Fascia del coefficiente di temperatura (6ª fascia)",
    value: "Resistenza",
    valueHelp:
      "Per esempio 470, 4,7k, 4k7, 2,2M o 0,47. Usa k per kilo, M per mega e G per giga; R, la virgola o il punto indicano la posizione dei decimali.",
    colors: {
      black: "Nero",
      brown: "Marrone",
      red: "Rosso",
      orange: "Arancione",
      yellow: "Giallo",
      green: "Verde",
      blue: "Blu",
      violet: "Viola",
      grey: "Grigio",
      white: "Bianco",
      gold: "Oro",
      silver: "Argento",
      none: "Nessuna (senza fascia)",
    },
    colorOption: "{color} – {meaning}",
    errors: {
      invalidValue: "Inserisci una resistenza come 470, 4,7k, 4k7 o 2,2M.",
      ambiguousM: "Usa la M maiuscola per i megaohm. Per valori inferiori a 1 Ω, usa un decimale come 0,47 o R47.",
      zero: "La resistenza deve essere maggiore di 0 Ω.",
      tooManyDigits:
        "{value} richiede {digits} cifre significative, ma un resistore a {bands} fasce ne mostra solo {max}. Scegli 5 fasce o arrotonda il valore.",
      tooSmall: "Questo valore è troppo piccolo per il codice colori. Il moltiplicatore più piccolo è l'argento (× 0,01).",
      tooLarge: "Questo valore è troppo grande per il codice colori. Il moltiplicatore più grande è il bianco (× 1.000.000.000).",
      noneNeedsFour: "Solo i resistori a 4 fasce possono non avere la fascia di tolleranza (±20%). Scegli un colore di tolleranza.",
    },
    valueText: "{value} {prefix}Ω",
    resistance: "Resistenza",
    bandsResult: "Fasce colorate",
    captionDecode: "{bands}: {digits} × {multiplier}, tolleranza ±{tolerance}.",
    captionEncode: "{value} come resistore a {bands} fasce con tolleranza ±{tolerance}.",
    bandSeparator: " – ",
    ohms: "Resistenza in ohm",
    toleranceResult: "Tolleranza",
    toleranceText: "±{value}",
    minimum: "Minimo entro la tolleranza",
    maximum: "Massimo entro la tolleranza",
    tcrResult: "Coefficiente di temperatura",
    tcrText: "{value} ppm/K",
    tcrChange: "Variazione per un aumento di temperatura di 10 K (10 °C)",
    significantDigits: "Cifre significative",
    multiplierResult: "Moltiplicatore",
    table: {
      caption: "Fascia per fascia",
      band: "Fascia",
      color: "Colore",
      meaning: "Significato",
      bandLabel: "Fascia {n}",
    },
    meanings: {
      digit: "Cifra {n}",
      multiplier: "× {n}",
      tolerance: "Tolleranza ±{n}",
      tcr: "{n} ppm/K",
    },
    notes: {
      reading:
        "Leggi dall'estremità in cui le fasce sono raggruppate; la fascia di tolleranza di solito è distanziata e spesso più larga. Oro e argento non sono mai la prima fascia.",
      noTolerance: "Senza fascia di tolleranza il resistore è ±20%.",
      colors:
        "Con certe luci alcuni colori si somigliano, soprattutto rosso, arancione e marrone, o grigio e bianco. Nel dubbio, misura il resistore con un multimetro.",
      tcr: "Il coefficiente di temperatura indica quanto varia la resistenza con la temperatura: {value} significa una variazione del {percent} ogni 10 K.",
    },
  },
};

export default it;
