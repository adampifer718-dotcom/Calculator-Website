import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BodyFatText } from "../text/en";

const it: CalculatorTranslation<BodyFatText> = {
  content: {
    title: "Calcolatore della percentuale di grasso corporeo",
    shortTitle: "Grasso corporeo",
    summary:
      "Stima la percentuale di grasso corporeo da altezza e circonferenze di collo, vita e fianchi con il metodo delle circonferenze della Marina statunitense.",
    metaTitle: "Calcolatore del grasso corporeo – Metodo US Navy",
    metaDescription:
      "Stima la percentuale di grasso corporeo con un metro da sarta e le equazioni delle circonferenze della US Navy, in cm o pollici, con massa grassa e magra.",
    keywords: [
      "grasso corporeo",
      "percentuale di grasso corporeo",
      "metodo US Navy",
      "metodo delle circonferenze",
      "massa magra",
      "massa grassa",
      "calcolo grasso corporeo",
    ],
    intro: [
      "La percentuale di grasso corporeo è la quota del peso corporeo costituita da grasso. I metodi di laboratorio la misurano direttamente, ma un metro da sarta permette una stima rapida.",
      "Questo calcolatore usa il metodo delle circonferenze della Marina statunitense, sviluppato da Hodgdon e Beckett nel 1984. Servono l'altezza e le circonferenze di collo e vita, più quella dei fianchi per l'equazione femminile. Aggiungi il peso per vedere quanta parte è massa grassa e quanta massa magra.",
    ],
    howToUse: [
      "Scegli centimetri o pollici e il sesso usato nell'equazione.",
      "Inserisci l'altezza e le circonferenze di collo e vita (e dei fianchi per l'equazione femminile).",
      "Se vuoi, inserisci il peso per suddividerlo in massa grassa e massa magra.",
      "Leggi la percentuale di grasso corporeo stimata.",
    ],
    formulas: [
      {
        title: "Uomini (lunghezze in pollici)",
        expression: "%BF = 86,010 × log₁₀(vita − collo) − 70,041 × log₁₀(altezza) + 36,76",
        explanation: "La vita si misura intorno all'addome all'altezza dell'ombelico.",
      },
      {
        title: "Donne (lunghezze in pollici)",
        expression: "%BF = 163,205 × log₁₀(vita + fianchi − collo) − 97,684 × log₁₀(altezza) − 78,387",
        explanation: "La vita si misura nel punto più stretto e i fianchi nel punto più largo.",
      },
      {
        title: "Centimetri",
        expression: "lunghezza (in) = lunghezza (cm) ÷ 2,54",
        explanation: "Le misure in centimetri vengono convertite in pollici prima di applicare le equazioni.",
      },
      {
        title: "Massa grassa e massa magra",
        expression: "massa grassa = peso × %BF ÷ 100\nmassa magra = peso − massa grassa",
        explanation: "Qui per massa magra si intende tutto tranne il grasso: muscoli, ossa, organi e acqua.",
      },
    ],
    examples: [
      {
        title: "Uomo, alto 178 cm, collo 38 cm, vita 88 cm, peso 80 kg",
        steps: [
          "In pollici: altezza 70,08, collo 14,96, vita 34,65",
          "86,010 × log₁₀(19,69) − 70,041 × log₁₀(70,08) + 36,76 ≈ 18,8%",
          "Massa grassa ≈ 80 × 0,188 = 15,0 kg; massa magra ≈ 65,0 kg",
        ],
      },
      {
        title: "Donna, alta 65 in, collo 13 in, vita 29 in, fianchi 39 in, peso 140 lb",
        steps: [
          "vita + fianchi − collo = 29 + 39 − 13 = 55 in",
          "163,205 × log₁₀(55) − 97,684 × log₁₀(65) − 78,387 ≈ 28,6%",
          "Massa grassa ≈ 140 × 0,2856 = 40,0 lb; massa magra ≈ 100,0 lb",
        ],
      },
    ],
    assumptions: [
      "Il risultato è una stima, non un consiglio medico, e questo calcolatore non è ancora stato revisionato da un professionista. Parla con un professionista sanitario di che cosa significa per te la tua percentuale di grasso corporeo.",
      "Le equazioni sono state sviluppate su personale adulto della Marina statunitense. Di solito si scostano di circa 3–4 punti percentuali dalle misure di laboratorio e possono essere meno precise per persone molto muscolose, molto magre o anziane, e in gravidanza.",
      "Piccoli errori di misura cambiano sensibilmente il risultato, soprattutto alla vita. Misura con attenzione e sempre allo stesso modo.",
      "Non vengono mostrate categorie di salute, perché per questa pagina non è stata verificata un'unica tabella di classificazione.",
    ],
    faqs: [
      {
        question: "Quanto è preciso il metodo della Marina?",
        answer:
          "Per la maggior parte degli adulti si scosta di pochi punti percentuali da metodi come la pesata idrostatica, ma gli errori individuali possono essere maggiori. È più utile per seguire i cambiamenti nel tempo con la stessa tecnica di misura.",
      },
      {
        question: "Perché l'equazione femminile usa i fianchi?",
        answer:
          "Le donne tendono ad accumulare più grasso su fianchi e cosce, quindi aggiungere la circonferenza dei fianchi ha migliorato l'adattamento dell'equazione per le donne.",
      },
      {
        question: "Perché l'altezza abbassa la stima?",
        answer:
          "Una persona più alta con la stessa vita e lo stesso collo ha una circonferenza relativamente minore rispetto alla sua corporatura, quindi l'equazione sottrae un termine basato sull'altezza.",
      },
    ],
    sourcesUsedFor: [
      "Il metodo delle circonferenze per gli uomini, da circonferenza di collo e addome e altezza, e la sua precisione rispetto alla pesata idrostatica.",
      "Informazioni sul metodo militare con il metro e sui punti in cui si misurano collo, vita e fianchi.",
    ],
  },
  text: {
    unit: "Unità di misura",
    units: { cm: "Centimetri (cm)", in: "Pollici (in)" },
    sex: "Sesso usato nell'equazione",
    sexHelp: "Il metodo ha equazioni diverse per uomini e donne; quella femminile usa anche la misura dei fianchi.",
    sexes: { male: "Uomo", female: "Donna" },
    height: "Altezza",
    heightHelp: "Altezza in piedi, senza scarpe.",
    neck: "Circonferenza del collo",
    neckHelp: "Appena sotto la laringe (pomo d'Adamo), con il metro leggermente inclinato verso il basso sul davanti.",
    waist: "Circonferenza della vita",
    waistHelp: "Uomini: intorno all'addome all'altezza dell'ombelico. Donne: nel punto più stretto della vita.",
    hip: "Circonferenza dei fianchi",
    hipHelp: "Intorno al punto più largo di fianchi e glutei.",
    weight: "Peso corporeo",
    weightHelp: "Facoltativo. Serve a suddividere il peso in massa grassa e massa magra.",
    weightUnit: "Unità di peso",
    weightUnits: { kg: "Chilogrammi (kg)", lb: "Libbre (lb)" },
    bodyFat: "Grasso corporeo stimato",
    caption: "{method}; altezza {height}, collo {neck}, vita {waist}.",
    captionHip: "{method}; altezza {height}, collo {neck}, vita {waist}, fianchi {hip}.",
    method: "Metodo",
    methodName: "Metodo delle circonferenze della US Navy (Hodgdon e Beckett, 1984)",
    methodShort: "Metodo US Navy",
    fatMass: "Massa grassa",
    leanMass: "Massa magra (tutto tranne il grasso)",
    errors: {
      range: "Inserisci un valore tra {min} e {max} {unit}.",
      waistNeck: "Per questa equazione la vita deve essere più grande del collo.",
      logArgument: "Vita + fianchi − collo deve essere maggiore di 0.",
      outOfRange:
        "Queste misure danno una stima di {value}, fuori dall'intervallo che l'equazione può descrivere. Controlla le misure e l'unità.",
    },
    notes: {
      estimate:
        "Una stima da misure con il metro. Rispetto ai metodi di laboratorio, le equazioni delle circonferenze differiscono di solito di circa 3–4 punti percentuali, e di più per persone molto magre o molto muscolose.",
      measure: "Misura sulla pelle nuda, rilassato e senza trattenere la pancia, e fai la media di due o tre letture.",
      noCategories: "Qui non vengono indicate categorie di salute; chiedi a un professionista sanitario come interpretare il tuo risultato.",
      extreme: "Questo risultato è vicino al limite dei valori per cui l'equazione è stata sviluppata, quindi è meno affidabile.",
    },
  },
};

export default it;
