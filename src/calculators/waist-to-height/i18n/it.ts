import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WaistToHeightText } from "../text/en";

const it: CalculatorTranslation<WaistToHeightText> = {
  content: {
    title: "Calcolatore del rapporto vita-altezza",
    shortTitle: "Rapporto vita-altezza",
    summary:
      "Dividi la circonferenza della vita per la statura per ottenere il rapporto vita-altezza e scopri in quale fascia di riferimento NICE per adulti rientra.",
    metaTitle: "Calcolatore del rapporto vita-altezza – WHtR e fasce NICE",
    metaDescription:
      "Calcola il rapporto vita-altezza in cm o pollici, confrontalo con le fasce NICE per adulti e scopri la misura di vita pari a metà della tua statura.",
    keywords: [
      "rapporto vita altezza",
      "WHtR",
      "calcolo rapporto vita altezza",
      "adiposità centrale",
      "vita meno di metà altezza",
      "grasso addominale",
      "rapporto vita altezza NICE",
    ],
    intro: [
      "Il rapporto vita-altezza (WHtR) è la circonferenza della vita divisa per la statura. È un modo semplice per stimare quanto grasso si accumula attorno alla parte centrale del corpo, la cosiddetta adiposità centrale, associata a diabete di tipo 2, ipertensione e malattie cardiache.",
      "Nel Regno Unito, il NICE suggerisce agli adulti con un BMI inferiore a 35 di usare questo rapporto insieme al BMI, con il semplice messaggio di mantenere la vita sotto la metà della propria statura. Questo calcolatore mostra il tuo rapporto, la fascia di riferimento NICE in cui rientra e la misura di vita che corrisponde a un rapporto di 0,5.",
    ],
    howToUse: [
      "Scegli centimetri o pollici. Usa la stessa unità per entrambe le misure.",
      "Misura la vita a metà tra l'ultima costola e la sommità dell'osso dell'anca, dopo una normale espirazione, con il metro orizzontale e aderente.",
      "Misura la tua statura senza scarpe.",
      "Leggi il tuo rapporto, la fascia di riferimento e la misura di vita per un rapporto di 0,5.",
    ],
    formulas: [
      {
        title: "Rapporto vita-altezza",
        expression: "WHtR = circonferenza vita ÷ statura",
        explanation: "Entrambe nella stessa unità, quindi le unità si semplificano e il rapporto è lo stesso in cm e in pollici.",
      },
      {
        title: "Fasce di riferimento NICE per adulti",
        expression: "da 0,4 a 0,49: nessun aumento del rischio per la salute\nda 0,5 a 0,59: rischio per la salute aumentato\n0,6 o più: rischio per la salute elevato",
        explanation: "Per adulti con un BMI inferiore a 35. Sono fasce di riferimento, non una diagnosi.",
      },
      {
        title: "Vita pari a metà della statura",
        expression: "vita per un rapporto di 0,5 = statura ÷ 2",
        explanation: "La soglia alla base del consiglio di mantenere la vita sotto la metà della statura.",
      },
    ],
    examples: [
      {
        title: "Vita 84 cm, statura 172 cm",
        steps: [
          "WHtR = 84 ÷ 172 ≈ 0,49",
          "0,49 rientra nella fascia da 0,4 a 0,49",
          "Metà della statura è 172 ÷ 2 = 86 cm, quindi la vita è 2 cm sotto",
        ],
      },
      {
        title: "Vita 38 in, statura 68 in",
        steps: ["WHtR = 38 ÷ 68 ≈ 0,56", "0,56 rientra nella fascia da 0,5 a 0,59", "Metà della statura è 34 in, quindi la vita è 4 in sopra"],
      },
      {
        title: "Vita 104 cm, statura 168 cm",
        steps: [
          "WHtR = 104 ÷ 168 ≈ 0,62",
          "0,62 rientra nella fascia 0,6 o più",
          "Un rapporto di 0,6 corrisponderebbe a una vita di 168 × 0,6 = 100,8 cm",
        ],
      },
    ],
    assumptions: [
      "Il risultato è una stima, non un consiglio medico né una diagnosi, e questo calcolatore non è ancora stato verificato da professionisti. Parla con un medico o un infermiere di che cosa significano per te le tue misure.",
      "Le fasce provengono dalla linea guida NICE per adulti con un BMI inferiore a 35, di qualsiasi sesso o etnia, e sono mostrate solo come riferimento. Il NICE non le usa per gli adulti con un BMI di 35 o più, perché il loro rapporto è quasi sempre alto.",
      "Il calcolatore usa le fasce per adulti. Non è pensato per bambini e ragazzi, né per la gravidanza, senza un parere clinico.",
      "Piccole differenze nel punto e nella tensione con cui si posiziona il metro cambiano il rapporto, quindi misura sempre allo stesso modo se lo stai monitorando.",
    ],
    faqs: [
      {
        question: "Qual è un rapporto vita-altezza sano?",
        answer:
          "Il NICE descrive un rapporto da 0,4 a 0,49 come privo di aumento del rischio per la salute per gli adulti con un BMI inferiore a 35. La regola semplice è mantenere la vita sotto la metà della propria statura.",
      },
      {
        question: "In che cosa differisce dal BMI?",
        answer:
          "Il BMI confronta il peso con la statura e non può dire dove si accumula il grasso. Il rapporto vita-altezza considera la vita, quindi riflette il grasso attorno alla parte centrale del corpo, più strettamente legato ad alcuni rischi per la salute. Il NICE suggerisce di usarli entrambi.",
      },
      {
        question: "Come si confronta con il rapporto vita-fianchi?",
        answer:
          "Entrambi considerano il grasso attorno alla vita. Il rapporto vita-fianchi divide per la misura dei fianchi e ha soglie diverse per donne e uomini, mentre il rapporto vita-altezza divide per la statura e usa le stesse fasce per tutti.",
      },
    ],
    sourcesUsedFor: [
      "Le fasce del rapporto vita-altezza per adulti (da 0,4 a 0,49, da 0,5 a 0,59, 0,6 o più) e il loro uso per gli adulti con un BMI inferiore a 35.",
      "Il messaggio al pubblico di mantenere la vita sotto la metà della statura (un rapporto inferiore a 0,5).",
    ],
  },
  text: {
    unit: "Unità",
    units: { cm: "Centimetri (cm)", in: "Pollici (in)" },
    waist: "Circonferenza della vita",
    waistHelp: "Misura a metà tra il margine inferiore dell'ultima costola e la sommità dell'osso dell'anca, dopo una normale espirazione.",
    height: "Statura",
    heightHelp: "La tua statura in piedi senza scarpe, nella stessa unità della vita.",
    errors: {
      implausible: "Un rapporto vita-altezza di {ratio} è molto improbabile. Controlla che entrambe le misure usino la stessa unità.",
    },
    ratio: "Rapporto vita-altezza",
    caption: "Vita {waist} ÷ statura {height}.",
    band: "Fascia di riferimento NICE per adulti (solo riferimento, non una diagnosi)",
    bands: {
      below: "Sotto 0,4: al di sotto della fascia più bassa della linea guida",
      healthy: "Da 0,4 a 0,49: nessun aumento del rischio per la salute",
      increased: "Da 0,5 a 0,59: rischio per la salute aumentato",
      high: "0,6 o più: rischio per la salute elevato (ulteriormente aumentato)",
    },
    waistHalf: "Vita con un rapporto di 0,5 (metà della statura)",
    waistHigh: "Vita con un rapporto di 0,6",
    difference: "La tua vita rispetto a metà della statura",
    notes: {
      rounding: "La fascia è scelta in base al rapporto arrotondato a due decimali, come visualizzato.",
      below:
        "Le fasce NICE partono da 0,4. Un rapporto più basso può indicare un errore di misura o di unità, oppure una corporatura molto esile; non costituisce una fascia a sé.",
      scope:
        "Il NICE usa queste fasce per adulti con un BMI inferiore a 35, di qualsiasi sesso o etnia. Non sono pensate per adulti con un BMI di 35 o più, in gravidanza, né per bambini e ragazzi, che dovrebbero essere valutati con un medico.",
      reference: "Questo è un confronto di riferimento, non una diagnosi. Parla con un medico o un infermiere di che cosa significa per te il risultato.",
    },
  },
};

export default it;
