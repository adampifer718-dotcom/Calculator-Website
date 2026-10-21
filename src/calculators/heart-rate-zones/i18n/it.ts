import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HeartRateZonesText } from "../text/en";

const it: CalculatorTranslation<HeartRateZonesText> = {
  content: {
    title: "Calcolatore delle zone di frequenza cardiaca",
    shortTitle: "Zone di frequenza cardiaca",
    summary: "Stima la tua frequenza cardiaca massima dall'età e visualizza cinque zone di allenamento in battiti al minuto, in percentuale della massima o con il metodo Karvonen.",
    metaTitle: "Zone di frequenza cardiaca – FC massima e allenamento",
    metaDescription:
      "Stima la frequenza cardiaca massima con 220 − età o la formula di Tanaka e ottieni cinque zone di allenamento in bpm, in % della massima o con Karvonen.",
    keywords: ["zone di frequenza cardiaca", "frequenza cardiaca target", "frequenza cardiaca massima", "formula di Karvonen", "zone di allenamento", "zona brucia grassi", "riserva cardiaca"],
    intro: [
      "Le zone di frequenza cardiaca dividono l'intensità dell'esercizio in fasce basate sulla tua frequenza cardiaca massima. Allenarti in una determinata zona ti aiuta a dosare corse facili, uscite in bici a ritmo costante o ripetute intense senza andare a sensazione.",
      "Questo calcolatore stima la tua frequenza cardiaca massima dall'età, oppure usa una massima che hai misurato, e la trasforma in cinque zone in battiti al minuto. Mostra anche le fasce di intensità moderata e vigorosa suggerite dall'American Heart Association.",
    ],
    howToUse: [
      "Inserisci la tua età e scegli una formula per la frequenza cardiaca massima.",
      "Se conosci la tua massima reale da un test da sforzo, inseriscila: sostituisce la formula.",
      "Per usare il metodo Karvonen, inserisci la frequenza cardiaca a riposo e scegli Karvonen come metodo per le zone.",
      "Leggi la massima stimata e l'intervallo in bpm di ogni zona nella tabella.",
    ],
    formulas: [
      { title: "Frequenza cardiaca massima (Fox)", expression: "FCmax = 220 − età", explanation: "La tradizionale regola pratica." },
      { title: "Frequenza cardiaca massima (Tanaka)", expression: "FCmax = 208 − 0,7 × età", explanation: "Da un'analisi del 2001 su 351 studi; per gli adulti più anziani dà valori più alti di 220 − età." },
      { title: "Percentuale della massima", expression: "target = FCmax × intensità", explanation: "Ogni zona copre 10 punti percentuali, dal 50–60% (zona 1) al 90–100% (zona 5)." },
      {
        title: "Karvonen (riserva cardiaca)",
        expression: "target = FCriposo + intensità × (FCmax − FCriposo)",
        explanation: "La riserva cardiaca è FCmax − FCriposo. Questo metodo dà valori target più alti alle basse intensità rispetto al metodo della percentuale della massima.",
      },
    ],
    examples: [
      {
        title: "40 anni con 220 − età",
        steps: ["FCmax = 220 − 40 = 180 bpm", "Zona 2 (60–70%) = 108–126 bpm", "Fascia moderata AHA (50–70%) = 90–126 bpm; vigorosa (70–85%) = 126–153 bpm"],
      },
      {
        title: "55 anni con la formula di Tanaka",
        steps: ["FCmax = 208 − 0,7 × 55 = 169,5 bpm, mostrata come 170 bpm", "Zona 3 (70–80%) = 118,65–135,6, arrotondata a 119–136 bpm", "220 − età darebbe 165 bpm, un po' meno"],
      },
      {
        title: "30 anni, frequenza a riposo 60 bpm, Karvonen",
        steps: ["FCmax = 220 − 30 = 190 bpm; riserva = 190 − 60 = 130 bpm", "Limite inferiore zona 3 = 60 + 0,7 × 130 = 151 bpm; superiore = 60 + 0,8 × 130 = 164 bpm", "Quindi la zona 3 va da 151 a 164 bpm"],
      },
    ],
    assumptions: [
      "Questi risultati sono stime, non consigli medici, e questo calcolatore non è stato verificato da professionisti.",
      "Le formule basate sull'età descrivono medie di popolazione. La frequenza cardiaca massima reale di una persona può differire dalla stima di 10 bpm o più, quindi una massima misurata è più precisa.",
      "Farmaci come i beta-bloccanti, così come caldo, disidratazione, caffeina e malattie, modificano la frequenza cardiaca. Le zone basate su una massima stimata potrebbero non essere adatte a te.",
      "Se hai una patologia cardiaca, altri problemi di salute o sintomi come dolore al petto o capogiri, parla con un medico prima di iniziare un'attività fisica intensa.",
      "I nomi delle zone e le fasce da 10 punti sono una convenzione diffusa; allenatori e dispositivi usano diversi sistemi di zone.",
    ],
    faqs: [
      {
        question: "Quale formula della frequenza cardiaca massima dovrei usare?",
        answer: "220 − età è semplice e molto usata. La formula di Tanaka, 208 − 0,7 × età, è stata ricavata da un insieme di dati molto più ampio e dà valori più alti per gli adulti più anziani. Nessuna delle due sostituisce una massima misurata durante un test da sforzo supervisionato.",
      },
      {
        question: "Che cos'è il metodo Karvonen?",
        answer: "Fissa i valori target a partire dalla riserva cardiaca, cioè la differenza tra frequenza cardiaca massima e a riposo. Poiché tiene conto della frequenza a riposo, può adattarsi meglio a chi ha una frequenza cardiaca a riposo bassa rispetto alla semplice percentuale della massima.",
      },
      {
        question: "Quale frequenza cardiaca corrisponde a un esercizio moderato?",
        answer: "L'American Heart Association indica circa il 50–70% della frequenza cardiaca massima per l'attività di intensità moderata e circa il 70–85% per quella vigorosa. Il calcolatore mostra entrambe le fasce in battiti al minuto.",
      },
    ],
    sourcesUsedFor: [
      "L'equazione 208 − 0,7 × età per la frequenza cardiaca massima.",
      "Le fasce target di circa il 50–70% della frequenza cardiaca massima per l'attività moderata e di circa il 70–85% per quella vigorosa, e la stima 220 − età.",
    ],
  },
  text: {
    age: "Età",
    ageSuffix: "anni",
    formula: "Formula della frequenza cardiaca massima",
    formulas: { fox: "220 − età", tanaka: "208 − 0,7 × età (Tanaka)" },
    formulaHelp: "Entrambe le formule stimano una media per le persone della tua età. La versione di Tanaka dà valori più alti per gli adulti più anziani.",
    measuredMax: "Frequenza cardiaca massima misurata",
    measuredMaxHelp: "Facoltativo. Se conosci la tua massima da un test da sforzo, inseriscila qui: sostituisce la formula.",
    resting: "Frequenza cardiaca a riposo",
    restingHelp: "Facoltativo, ma necessario per il metodo Karvonen. Conta il polso per un minuto intero appena sveglio, prima di alzarti.",
    method: "Metodo per le zone",
    methods: { percentMax: "Percentuale della frequenza cardiaca massima", karvonen: "Karvonen (riserva cardiaca)" },
    methodHelp: "Karvonen applica le percentuali alla differenza tra frequenza cardiaca massima e a riposo, poi aggiunge di nuovo la frequenza a riposo.",
    errors: {
      restingRequired: "Inserisci la frequenza cardiaca a riposo per usare il metodo Karvonen.",
      restingTooHigh: "La frequenza cardiaca a riposo deve essere inferiore alla massima ({max} bpm).",
    },
    maxHr: "Frequenza cardiaca massima stimata",
    maxHrMeasured: "Frequenza cardiaca massima (misurata)",
    captionFormula: "Stimata con {formula} per un'età di {age} anni.",
    captionMeasured: "La tua massima misurata, usata al posto di una formula.",
    zonesCaption: "Zone di allenamento per frequenza cardiaca",
    zonesCaptionKarvonen: "Zone di allenamento per frequenza cardiaca (Karvonen)",
    columns: { zone: "Zona", intensity: "Intensità", heartRate: "Frequenza cardiaca" },
    zoneNames: ["Zona 1 – molto leggera", "Zona 2 – leggera", "Zona 3 – moderata", "Zona 4 – intensa", "Zona 5 – massima"],
    percentRange: "{low}–{high}",
    bpmRange: "{low}–{high} bpm",
    ahaModerate: "Intensità moderata AHA ({range} della massima)",
    ahaVigorous: "Intensità vigorosa AHA ({range} della massima)",
    reserve: "Riserva cardiaca",
    notes: {
      aha: "L'American Heart Association suggerisce circa il 50–70% della frequenza cardiaca massima per l'attività moderata e circa il 70–85% per quella vigorosa. Queste fasce sono espresse in percentuale della frequenza cardiaca massima.",
      restingIgnored: "La frequenza cardiaca a riposo è usata solo dal metodo Karvonen.",
      estimate: "Le formule danno medie di popolazione; la tua massima reale può differire di 10 bpm o più. Farmaci come i beta-bloccanti abbassano la frequenza cardiaca.",
      doctor: "Se hai una patologia cardiaca o altri problemi di salute, parla con un medico prima di iniziare un'attività fisica intensa.",
    },
  },
};

export default it;
