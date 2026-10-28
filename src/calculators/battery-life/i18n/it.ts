import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BatteryLifeText } from "../text/en";

const it: CalculatorTranslation<BatteryLifeText> = {
  content: {
    title: "Calcolatore dell'autonomia della batteria",
    shortTitle: "Autonomia della batteria",
    summary: "Stima per quanto tempo una batteria alimenta un dispositivo dalla sua capacità in mAh, Ah o Wh e dal carico in mA, A o W.",
    metaTitle: "Calcolatore autonomia batteria – Durata da mAh, Ah o Wh",
    metaDescription:
      "Stima l'autonomia di una batteria da capacità (mAh, Ah o Wh) e carico (mA, A o W), con profondità di scarica utilizzabile, durata in ore e giorni ed energia.",
    keywords: [
      "autonomia batteria",
      "durata batteria",
      "da mAh a ore",
      "capacità batteria",
      "wattora",
      "amperora",
      "profondità di scarica",
      "quanto dura una batteria",
    ],
    intro: [
      "La capacità di una batteria indica quanta carica (in milliampere-ora o ampere-ora) o quanta energia (in wattora) immagazzina. Dividendo la parte di questa capacità che puoi davvero usare per l'assorbimento del dispositivo si ottiene una prima stima di quanto durerà.",
      "Questo calcolatore accetta la capacità in mAh, Ah o Wh e il carico in mA, A o W. Quando uno è una carica e l'altro una potenza, usa la tensione della batteria per convertire dall'uno all'altro. Usalo per dimensionare una batteria per un sensore, una luce da campeggio, un power bank o un'alimentazione di emergenza.",
    ],
    howToUse: [
      "Inserisci la capacità della batteria e scegli mAh, Ah o Wh.",
      "Inserisci la tensione nominale della batteria. Serve quando un valore è in mAh o Ah e l'altro in W o Wh, e permette al calcolatore di mostrare l'energia.",
      "Inserisci il carico medio del dispositivo in mA, A o W.",
      "Imposta la capacità utilizzabile (80% come valore predefinito) e leggi l'autonomia in ore e minuti, in ore decimali e in giorni.",
    ],
    formulas: [
      {
        title: "Autonomia dalla carica",
        expression: "t (h) = capacità (mAh) ÷ carico (mA) × frazione utilizzabile",
        explanation: "Con ampere-ora e ampere funziona allo stesso modo. La frazione utilizzabile è la profondità di scarica, per esempio 0,8.",
      },
      {
        title: "Autonomia dall'energia",
        expression: "t (h) = energia (Wh) ÷ carico (W) × frazione utilizzabile",
        explanation: "Usala quando la capacità è in wattora e il carico in watt.",
      },
      {
        title: "Da carica a energia",
        expression: "Wh = mAh × V ÷ 1000",
        explanation: "V è la tensione nominale della batteria. Allo stesso modo, un carico in watt assorbe W ÷ V ampere.",
      },
    ],
    examples: [
      {
        title: "Cella da 3.000 mAh che alimenta un dispositivo da 150 mA",
        steps: ["Autonomia ideale = 3.000 ÷ 150 = 20 h", "Autonomia utilizzabile = 20 × 0,80 = 16 h", "Energia = 3.000 × 3,7 ÷ 1000 = 11,1 Wh"],
      },
      {
        title: "Batteria al piombo da 100 Ah e 12 V con un carico di 45 W fino al 50%",
        steps: ["Energia = 100 Ah × 12 V = 1.200 Wh", "Energia utilizzabile = 1.200 × 0,50 = 600 Wh", "Autonomia = 600 ÷ 45 ≈ 13,33 h = 13 h 20 min"],
      },
      {
        title: "Batteria di un portatile da 74 Wh con un assorbimento medio di 18 W",
        steps: ["Energia utilizzabile = 74 × 0,90 = 66,6 Wh", "Autonomia = 66,6 ÷ 18 = 3,7 h", "0,7 h × 60 = 42 min, quindi circa 3 h 42 min"],
      },
    ],
    assumptions: [
      "Il carico è costante. Per un dispositivo che alterna stand-by e attività, inserisci la sua corrente o potenza media.",
      "La capacità reale cala con il freddo, con l'invecchiamento della batteria e a correnti di scarica elevate (l'effetto Peukert, più marcato nelle batterie al piombo). Questi effetti non sono modellati, quindi con carichi elevati l'autonomia sarà inferiore a quella indicata.",
      "Le conversioni di tensione usano la tensione nominale, anche se la tensione cala durante la scarica, e le perdite di convertitori o inverter non sono incluse a meno che tu non riduca la capacità utilizzabile per tenerne conto.",
    ],
    faqs: [
      {
        question: "Quale capacità utilizzabile devo inserire?",
        answer:
          "I pacchi agli ioni di litio possono spesso usare l'80–90% della capacità nominale, mentre le batterie al piombo durano di più se vengono scaricate regolarmente solo fino al 50% circa. Se non lo sai, l'80% è un punto di partenza prudente per i piccoli dispositivi elettronici.",
      },
      {
        question: "Perché mi serve la tensione?",
        answer:
          "I milliampere-ora misurano la carica, mentre watt e wattora misurano potenza ed energia. Per convertire dall'una all'altra serve la tensione: i wattora sono pari agli ampere-ora per i volt. Se la capacità è in mAh e il carico in mA, la tensione non serve per l'autonomia.",
      },
      {
        question: "Perché il mio power bank eroga meno di quanto suggeriscono i suoi mAh?",
        answer:
          "I power bank sono dichiarati alla tensione delle celle interne, circa 3,7 V, ma l'uscita USB è di 5 V o più, e il convertitore di tensione perde un po' di energia in calore. Confronta i valori in wattora e riduci la capacità utilizzabile per tenere conto di queste perdite.",
      },
    ],
    sourcesUsedFor: [
      "L'energia della batteria in wattora come volt × ampere-ora.",
      "La conversione di un valore in milliampere-ora in ampere-ora dividendo per 1.000 prima di moltiplicare per la tensione.",
      "Il fatto che la capacità utilizzabile diminuisca a correnti di scarica più alte (l'effetto Peukert), che questo calcolatore non modella.",
    ],
  },
  text: {
    capacity: "Capacità della batteria",
    capacityUnit: "Unità di capacità",
    capacityUnits: { mAh: "Milliampere-ora (mAh)", Ah: "Ampere-ora (Ah)", Wh: "Wattora (Wh)" },
    voltage: "Tensione della batteria",
    voltageHelp:
      "La tensione nominale, per esempio 3,7 V per una cella agli ioni di litio o 12 V per una batteria al piombo. Serve quando capacità e carico usano unità diverse (carica e potenza) e per mostrare l'energia.",
    load: "Carico del dispositivo",
    loadUnit: "Unità del carico",
    loadUnits: { mA: "Milliampere (mA)", A: "Ampere (A)", W: "Watt (W)" },
    depth: "Capacità utilizzabile (profondità di scarica)",
    depthHelp:
      "La quota della capacità nominale che puoi effettivamente usare. L'80% è un margine comune per le perdite e per proteggere la batteria; usa il 100% per il valore ideale.",
    errors: {
      voltageNeeded: "Inserisci la tensione della batteria per convertire tra carica (mAh o Ah) e potenza o energia (W o Wh).",
    },
    runtime: "Autonomia stimata (h:mm)",
    runtimeText: "{h}:{mm}",
    caption: "Batteria da {capacity} che alimenta un carico di {load}, usando il {depth} della sua capacità.",
    hours: "Autonomia in ore",
    days: "Autonomia in giorni",
    energy: "Energia nominale",
    usableEnergy: "Energia utilizzabile",
    current: "Corrente assorbita",
    power: "Potenza assorbita",
    notes: {
      constant: "Il calcolo presuppone un carico costante. Un dispositivo che va in stand-by e si riattiva assorbe una corrente media; usa quella media.",
      peukert:
        "La capacità reale cala con il freddo, con l'invecchiamento della batteria e a correnti di scarica elevate (l'effetto Peukert, non modellato qui), quindi aspettati un'autonomia minore con carichi elevati.",
      conversion:
        "La tensione è stata usata per convertire tra carica ed energia (Wh = Ah × V); questo ignora il calo di tensione durante la scarica della batteria.",
    },
  },
};

export default it;
