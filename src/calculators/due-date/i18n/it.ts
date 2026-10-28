import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DueDateText } from "../text/en";

const weeks = { zero: "{n} settimane", one: "{n} settimana", two: "{n} settimane", few: "{n} settimane", many: "{n} settimane", other: "{n} settimane" };
const days = { zero: "{n} giorni", one: "{n} giorno", two: "{n} giorni", few: "{n} giorni", many: "{n} giorni", other: "{n} giorni" };

const it: CalculatorTranslation<DueDateText> = {
  content: {
    title: "Calcolatore della data presunta del parto",
    shortTitle: "Data del parto",
    summary:
      "Stima la data presunta del parto dall'ultima mestruazione, dalla data del concepimento o da un transfer di FIVET, con l'età gestazionale di oggi e le date dei trimestri.",
    metaTitle: "Data presunta del parto – Da DUM, concepimento o FIVET",
    metaDescription:
      "Stima la data presunta del parto dall'ultima mestruazione, dal concepimento o da un transfer di embrioni in FIVET, con età gestazionale e trimestri.",
    keywords: [
      "data presunta del parto",
      "calcolo data del parto",
      "DPP",
      "regola di Naegele",
      "età gestazionale",
      "settimane di gravidanza",
      "data del parto FIVET",
      "calcolatore gravidanza",
    ],
    intro: [
      "La maggior parte delle gravidanze viene datata dal primo giorno dell'ultima mestruazione, anche se il concepimento avviene di solito circa due settimane dopo. Una gravidanza tipica dura circa 40 settimane, ovvero 280 giorni, da quella data.",
      "Questo calcolatore stima la data del parto dall'ultima mestruazione (corretta per la durata del tuo ciclo), da una data di concepimento nota o da un transfer di embrioni in FIVET. Mostra anche di quante settimane sei in una data scelta, il trimestre e le date in cui finisce ciascun trimestre.",
    ],
    howToUse: [
      "Scegli da cosa partire: l'ultima mestruazione, il concepimento o un transfer di FIVET.",
      "Inserisci la data. Per l'ultima mestruazione, inserisci anche la durata abituale del ciclo; per la FIVET, scegli l'età dell'embrione al transfer.",
      "Lascia la data di oggi o scegline un'altra per vedere l'età gestazionale in quel giorno.",
      "Leggi la data presunta del parto, l'età gestazionale, il trimestre e le date dei trimestri.",
    ],
    formulas: [
      {
        title: "Dall'ultima mestruazione (regola di Naegele, corretta per il ciclo)",
        expression: "Data del parto = primo giorno dell'ultima mestruazione + 280 giorni + (durata del ciclo − 28)",
        explanation:
          "Con un ciclo di 28 giorni sono esattamente 40 settimane. Con cicli più lunghi l'ovulazione, e quindi la data del parto, si sposta più avanti.",
      },
      {
        title: "Dal concepimento",
        expression: "Data del parto = data del concepimento + 266 giorni",
        explanation: "266 giorni sono 38 settimane, il tempo abituale tra la fecondazione e la nascita.",
      },
      {
        title: "Da un transfer di FIVET",
        expression: "Data del parto = data del transfer + 266 giorni − età dell'embrione (3 o 5 giorni)",
        explanation: "Al momento del transfer l'embrione aveva già 3 o 5 giorni dalla fecondazione.",
      },
      {
        title: "Età gestazionale",
        expression: "Età gestazionale = data − (data del parto − 280 giorni), in settimane e giorni",
        explanation:
          "Si conta dalla data che sarebbe stata il primo giorno dell'ultima mestruazione, secondo la consueta convenzione clinica.",
      },
    ],
    examples: [
      {
        title: "Ultima mestruazione iniziata il 1° giugno 2026, ciclo di 28 giorni",
        steps: [
          "1° giugno 2026 + 280 giorni = 8 marzo 2027",
          "Al 24 ottobre 2026: 145 giorni = 20 settimane e 5 giorni",
          "Si è quindi nel secondo trimestre (da 14 settimane e 0 giorni a 27 settimane e 6 giorni)",
        ],
      },
      {
        title: "Ultima mestruazione iniziata il 10 marzo 2026, ciclo di 32 giorni",
        steps: [
          "10 marzo 2026 + 280 + (32 − 28) = 284 giorni = 19 dicembre 2026",
          "La datazione parte quindi dal 14 marzo 2026 (data del parto − 280 giorni)",
          "Al 24 ottobre 2026: 224 giorni = 32 settimane e 0 giorni, terzo trimestre",
        ],
      },
      {
        title: "Embrione di 5 giorni trasferito il 20 giugno 2026",
        steps: [
          "266 − 5 = 261 giorni",
          "20 giugno 2026 + 261 giorni = 8 marzo 2027",
          "È la stessa data che si ottiene con un'ultima mestruazione iniziata il 1° giugno 2026",
        ],
      },
    ],
    assumptions: [
      "La data del parto è una stima, non un consiglio medico, e questo calcolatore non è ancora stato revisionato da un professionista. Solo una piccola parte dei bambini nasce proprio nella data prevista; la maggior parte nasce entro circa due settimane da essa.",
      "Un'ecografia di datazione all'inizio della gravidanza è più precisa di una stima basata sulle date e può cambiare la data del parto. È la tua ostetrica o il tuo medico a stabilire la data del parto usata per la tua assistenza.",
      "La correzione per il ciclo presuppone che l'ovulazione avvenga circa 14 giorni prima della mestruazione successiva. Non tiene conto di cicli irregolari, di una contraccezione ormonale recente o di date incerte.",
      "I trimestri sono considerati fino a 13 settimane e 6 giorni, da 14 settimane e 0 giorni a 27 settimane e 6 giorni, e da 28 settimane e 0 giorni. Alcune fonti fissano i limiti una settimana prima o dopo.",
    ],
    faqs: [
      {
        question: "Perché la gravidanza si conta dall'ultima mestruazione e non dal concepimento?",
        answer:
          "Il primo giorno dell'ultima mestruazione di solito è noto, mentre il giorno del concepimento no. Contare da quella data è una convenzione di lunga data, per cui al concepimento una gravidanza è già a circa 2 settimane.",
      },
      {
        question: "Come cambia la data del parto con la durata del ciclo?",
        answer:
          "In un ciclo di 28 giorni l'ovulazione avviene intorno al 14° giorno. In un ciclo più lungo avviene più tardi, quindi la data del parto si sposta in avanti dello stesso numero di giorni; un ciclo più corto la anticipa.",
      },
      {
        question: "La data del parto può cambiare?",
        answer:
          "Sì. Un'ecografia precoce può indicare una data diversa e chi ti segue può aggiornarla, di solito una sola volta, in base a quell'esame.",
      },
    ],
    sourcesUsedFor: [
      "Che l'ecografia del primo trimestre è il metodo più accurato per confermare la data del parto e che le gravidanze da FIVET si datano dal transfer.",
      "Il conteggio di 280 giorni (40 settimane) dal primo giorno dell'ultima mestruazione, la correzione per cicli più lunghi o più corti di 28 giorni e il fatto che un'ecografia di datazione dà una data più precisa.",
    ],
  },
  text: {
    method: "Calcola da",
    methods: {
      lmp: "Primo giorno dell'ultima mestruazione",
      conception: "Data del concepimento",
      ivf: "Data del transfer di embrioni (FIVET)",
    },
    lmp: "Primo giorno della tua ultima mestruazione",
    cycle: "Durata media del ciclo",
    cycleHelp: "Giorni dal primo giorno di una mestruazione al primo giorno della successiva. Usa 28 se non sei sicura.",
    daysSuffix: "giorni",
    conception: "Data del concepimento",
    conceptionHelp: "Di solito è nota solo in modo approssimativo, ad esempio dal monitoraggio dell'ovulazione.",
    transfer: "Data del transfer dell'embrione",
    embryoAge: "Età dell'embrione al transfer",
    embryoAges: { "3": "Embrione di 3 giorni", "5": "Embrione di 5 giorni (blastocisti)" },
    asOf: "Età gestazionale al",
    asOfHelp: "Per impostazione predefinita è oggi. Cambiala per vedere a che punto è la gravidanza in un'altra data.",
    units: { weeks, days },
    weeksDays: "{weeks} e {days}",
    dueDate: "Data presunta del parto",
    caption: "{days} giorni dopo {from}.",
    captionFrom: {
      lmp: "il primo giorno dell'ultima mestruazione, corretto per la durata del ciclo",
      conception: "la data del concepimento",
      ivf: "la data del transfer",
    },
    gestationalAge: "Età gestazionale",
    trimester: "Trimestre",
    trimesters: { first: "Primo trimestre", second: "Secondo trimestre", third: "Terzo trimestre" },
    notStarted: "Non ancora iniziata in questa data",
    firstEnds: "Fine del primo trimestre (13 settimane e 6 giorni)",
    secondEnds: "Fine del secondo trimestre (27 settimane e 6 giorni)",
    thirdStarts: "Inizio del terzo trimestre (28 settimane e 0 giorni)",
    daysToDue: "Giorni alla data del parto",
    startDate: "Inizio della datazione della gravidanza (0 settimane e 0 giorni)",
    notes: {
      estimate:
        "Solo una stima: solo una piccola parte dei bambini nasce nella data prevista e la maggior parte nasce entro circa due settimane prima o dopo. Un'ecografia di datazione può modificarla.",
      beforeStart: "La data scelta è precedente all'inizio della datazione della gravidanza, quindi non c'è ancora un'età gestazionale.",
      pastDue: "La data scelta coincide con la data presunta del parto o è successiva.",
      veryLate: "La data scelta cade oltre le 42 settimane di gravidanza. Controlla che le date siano corrette.",
      clinician:
        "L'età gestazionale si conta dal primo giorno dell'ultima mestruazione, anche quando la data deriva dal concepimento o dal transfer. È la tua ostetrica o il tuo medico a stabilire la data ufficiale del parto.",
    },
    errors: { range: "Questa data dà una data del parto fuori dall'intervallo supportato." },
  },
};

export default it;
