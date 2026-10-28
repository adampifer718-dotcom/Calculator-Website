import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CaloriesBurnedText } from "../text/en";

const it: CalculatorTranslation<CaloriesBurnedText> = {
  content: {
    title: "Calcolatore delle calorie bruciate",
    shortTitle: "Calorie bruciate",
    summary:
      "Stima le calorie bruciate camminando, correndo, andando in bici, nuotando e con altre attività dai valori MET, dal peso corporeo e dalla durata.",
    metaTitle: "Calcolatore delle calorie bruciate – Metodo MET per attività",
    metaDescription:
      "Stima le calorie bruciate con camminata, corsa, bici, nuoto e altro dai valori MET pubblicati, dal tuo peso e dal tempo dedicato all'attività.",
    keywords: [
      "calorie bruciate",
      "calorie esercizio fisico",
      "MET",
      "equivalente metabolico",
      "dispendio energetico",
      "compendio delle attività fisiche",
      "kcal all'ora",
    ],
    intro: [
      "Un MET (equivalente metabolico dell'attività) confronta il costo energetico di un'attività con lo stare seduti tranquilli. La camminata veloce vale circa 4 MET, quindi consuma circa quattro volte l'energia del riposo.",
      "Questo calcolatore moltiplica il valore MET di un'attività per il tuo peso corporeo e per il tempo dedicato, per stimare le calorie bruciate. Scegli una delle attività comuni, con valori tratti dal Compendium of Physical Activities, oppure inserisci un tuo valore MET.",
    ],
    howToUse: [
      "Scegli un'attività, oppure scegli un valore MET personalizzato e inseriscilo.",
      "Inserisci il tuo peso corporeo in chilogrammi o libbre.",
      "Inserisci per quanto tempo hai svolto l'attività, in ore e minuti.",
      "Leggi le calorie bruciate stimate, i kilojoule e il consumo orario.",
    ],
    formulas: [
      {
        title: "Metodo MET",
        expression: "kcal = MET × peso (kg) × tempo (h)",
        explanation: "Usa la convenzione secondo cui 1 MET equivale a circa 1 kcal per chilogrammo di peso corporeo all'ora.",
      },
      {
        title: "Oltre il riposo",
        expression: "kcal nette = (MET − 1) × peso (kg) × tempo (h)",
        explanation: "Esclude l'energia che avresti consumato comunque stando a riposo.",
      },
      {
        title: "Unità",
        expression: "1 lb = 0,45359237 kg · 1 kcal = 4,184 kJ",
        explanation: "Fattori di conversione esatti.",
      },
    ],
    examples: [
      {
        title: "Camminata veloce di 45 minuti a 70 kg",
        steps: [
          "Camminata veloce (3,5 mph) = 4,3 MET",
          "4,3 × 70 × 0,75 = 225,75 ≈ 226 kcal",
          "In kilojoule: 225,75 × 4,184 ≈ 945 kJ",
        ],
      },
      {
        title: "Corsa a 6 mph per 1 h 30 min a 180 lb",
        steps: ["180 lb × 0,45359237 = 81,65 kg", "9,8 × 81,65 × 1,5 ≈ 1.200 kcal", "Sono circa 800 kcal all'ora"],
      },
      {
        title: "Attività personalizzata da 6,5 MET per 2 ore a 55 kg",
        steps: ["6,5 × 55 × 2 = 715 kcal", "Oltre il riposo: (6,5 − 1) × 55 × 2 = 605 kcal"],
      },
    ],
    assumptions: [
      "Il risultato è una stima, non un consiglio medico, e questo calcolatore non è ancora stato revisionato da un professionista. Consulta un medico prima di iniziare un nuovo programma di allenamento.",
      "I valori MET sono medie di popolazione per adulti. Forma fisica, tecnica, terreno, composizione corporea e temperatura cambiano il consumo energetico reale, quindi i risultati individuali variano.",
      "Il calcolo usa la convenzione 1 MET ≈ 1 kcal per kg all'ora. Il consumo energetico a riposo misurato varia da persona a persona, il che aumenta l'incertezza.",
      "I valori MET provengono dal Compendium of Physical Activities del 2011. L'aggiornamento del 2024 ha modificato alcune attività, quindi i valori di altri strumenti possono differire leggermente.",
    ],
    faqs: [
      {
        question: "Che cos'è un MET?",
        answer:
          "Un MET è il costo energetico di un'attività rispetto allo stare seduti tranquilli. Un'attività da 6 MET consuma circa sei volte l'energia del riposo.",
      },
      {
        question: "Perché conta il peso corporeo?",
        answer:
          "Muovere un corpo più pesante richiede più energia, quindi la stessa attività per lo stesso tempo fa bruciare più calorie a una persona più pesante.",
      },
      {
        question: "I valori dei fitness tracker sono più precisi?",
        answer:
          "I tracker aggiungono i dati della frequenza cardiaca, che possono aiutare, ma sono anch'essi stime. Entrambi i metodi sono più utili per confrontare attività che come valori esatti.",
      },
    ],
    sourcesUsedFor: [
      "I valori MET delle attività elencate e la convenzione secondo cui 1 MET è circa 1 kcal per kg all'ora.",
      "Informazioni sull'edizione attuale del Compendium, che ha rivisto alcuni valori MET; consulta pacompendium.com per il valore più recente di un'attività.",
    ],
  },
  text: {
    activity: "Attività",
    activityHelp: "I valori MET sono medie per adulti tratte dal Compendium of Physical Activities.",
    activities: {
      walking: "Camminata, 3,0 mph (4,8 km/h), in piano",
      brisk: "Camminata veloce, 3,5 mph (5,6 km/h)",
      hiking: "Escursionismo, fuori sentiero",
      run5: "Corsa, 5 mph (8 km/h, 12 min/miglio)",
      run6: "Corsa, 6 mph (9,7 km/h, 10 min/miglio)",
      cycleLeisure: "Bicicletta, andatura tranquilla, meno di 10 mph (16 km/h)",
      cycleModerate: "Bicicletta, 12–13,9 mph (19–22 km/h), moderata",
      swimModerate: "Nuoto in vasca, stile libero, sforzo leggero o moderato",
      swimVigorous: "Nuoto in vasca, stile libero, veloce, sforzo intenso",
      weightsLight: "Allenamento con i pesi, sforzo leggero o moderato",
      weightsVigorous: "Allenamento con i pesi, sforzo intenso",
      yoga: "Yoga, hatha",
      tennis: "Tennis, in generale",
      soccer: "Calcio, amatoriale",
      jumpRope: "Salto della corda, ritmo moderato",
      gardening: "Giardinaggio, in generale",
      custom: "Valore MET personalizzato",
    },
    customMet: "Valore MET",
    customMetHelp: "Equivalente metabolico dell'attività: 1 è stare seduti tranquilli; la camminata veloce vale circa 4.",
    weight: "Peso corporeo",
    weightRange: "Inserisci un peso corporeo tra 20 e 700 kg (circa da 45 a 1.540 lb).",
    weightUnit: "Unità di peso",
    weightUnits: { kg: "Chilogrammi (kg)", lb: "Libbre (lb)" },
    hours: "Ore",
    minutes: "Minuti",
    timeZero: "Inserisci una durata maggiore di 0.",
    timeMax: "Inserisci una durata di 24 ore o meno.",
    calories: "Calorie bruciate",
    caption: "{met} MET × {kg} kg × {hours} h.",
    kj: "In kilojoule",
    perHour: "Calorie all'ora",
    metUsed: "Valore MET usato",
    aboveRest: "Oltre il riposo (MET − 1)",
    kcal: "kcal",
    kcalHour: "kcal/h",
    notes: {
      estimate:
        "I valori MET sono medie per adulti; il tuo consumo energetico dipende da forma fisica, tecnica, composizione corporea e condizioni, e può differire in modo sensibile.",
      gross:
        "Il totale include l'energia che avresti consumato a riposo nello stesso tempo. Il valore «oltre il riposo» la esclude.",
    },
  },
};

export default it;
