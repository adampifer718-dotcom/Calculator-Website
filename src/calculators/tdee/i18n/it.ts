import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TdeeText } from "../text/en";

const it: CalculatorTranslation<TdeeText> = {
  content: {
    title: "Calcolatore del fabbisogno calorico giornaliero (TDEE)",
    shortTitle: "TDEE",
    summary:
      "Stima il dispendio energetico totale giornaliero dal metabolismo basale di Mifflin-St Jeor e da un moltiplicatore di attività, con tutti i livelli di attività a confronto.",
    metaTitle: "Calcolatore TDEE – Dispendio energetico totale giornaliero",
    metaDescription:
      "Stima il tuo dispendio energetico totale giornaliero in kcal e kJ dal BMR di Mifflin-St Jeor e dal livello di attività, con una tabella dei cinque livelli.",
    keywords: [
      "TDEE",
      "dispendio energetico totale giornaliero",
      "calorie di mantenimento",
      "fabbisogno calorico giornaliero",
      "calorie al giorno",
      "livello di attività fisica",
      "Mifflin-St Jeor",
    ],
    intro: [
      "Il dispendio energetico totale giornaliero (TDEE, dall'inglese total daily energy expenditure) è una stima di tutta l'energia che usi in un giorno: quella necessaria a riposo più quella per il movimento, l'esercizio fisico e la digestione del cibo. Spesso viene chiamato fabbisogno calorico di mantenimento.",
      "Questo calcolatore stima prima il tuo metabolismo basale con l'equazione di Mifflin-St Jeor, la stessa usata dal Calcolatore del metabolismo basale, e poi lo moltiplica per un fattore legato al tuo livello di attività. I cinque moltiplicatori da 1,2 a 1,9 sono convenzioni molto diffuse, quindi considera il risultato una stima di partenza.",
    ],
    howToUse: [
      "Scegli unità metriche o imperiali.",
      "Scegli il sesso usato nell'equazione e inserisci età, peso e altezza.",
      "Scegli il livello di attività che corrisponde meglio a una settimana tipica.",
      "Leggi il TDEE stimato, il metabolismo basale su cui si basa e la tabella che confronta tutti i livelli di attività.",
    ],
    formulas: [
      {
        title: "Metabolismo basale (Mifflin-St Jeor)",
        expression: "BMR = 10 × peso (kg) + 6,25 × altezza (cm) − 5 × età (anni) + s\ns = +5 per gli uomini, −161 per le donne",
        explanation: "L'energia consumata a riposo assoluto, in kcal al giorno.",
      },
      {
        title: "Dispendio energetico totale giornaliero",
        expression:
          "TDEE = BMR × moltiplicatore di attività\nsedentario 1,2 · leggero 1,375 · moderato 1,55 · molto attivo 1,725 · estremamente attivo 1,9",
        explanation:
          "Il moltiplicatore aumenta l'energia a riposo per tenere conto dell'attività quotidiana. Questi valori sono convenzioni comuni, non misurati su di te.",
      },
      {
        title: "Variazione settimanale indicativa",
        expression: "0,5 kg a settimana ≈ 0,5 × 7.700 ÷ 7 = 550 kcal/giorno",
        explanation:
          "Una regola empirica che considera 1 kg di peso corporeo pari a circa 7.700 kcal. La variazione reale del peso raramente la segue con precisione.",
      },
      { title: "Unità di energia", expression: "1 kcal = 4,184 kJ", explanation: "La caloria termochimica." },
    ],
    examples: [
      {
        title: "Donna, 35 anni, 68 kg, 168 cm, moderatamente attiva",
        steps: [
          "BMR = 10 × 68 + 6,25 × 168 − 5 × 35 − 161 = 1.394 kcal/giorno",
          "TDEE = 1.394 × 1,55 = 2.160,7 ≈ 2.161 kcal/giorno",
          "In kilojoule: 2.160,7 × 4,184 ≈ 9.040 kJ/giorno",
        ],
      },
      {
        title: "Uomo, 45 anni, 190 lb, 5 ft 10 in, sedentario",
        steps: [
          "190 lb = 86,18 kg; 5 ft 10 in = 70 in = 177,8 cm",
          "BMR = 10 × 86,18 + 6,25 × 177,8 − 5 × 45 + 5 ≈ 1.753 kcal/giorno",
          "TDEE = 1.753,08 × 1,2 ≈ 2.104 kcal/giorno; il valore per perdere 0,5 kg a settimana (≈ 1.554 kcal/giorno) è inferiore al BMR, quindi compare un avviso",
        ],
      },
    ],
    assumptions: [
      "Il risultato è una stima, non un consiglio medico o dietetico, e questo calcolatore non è ancora stato revisionato da un professionista. Parla con un medico o un dietista abilitato prima di cambiare la tua alimentazione.",
      "L'equazione di Mifflin-St Jeor è stata sviluppata per adulti sani. Non è adatta a bambini, gravidanza, allattamento o condizioni che influiscono sul metabolismo, e il BMR di una persona può discostarsene del 10% o più.",
      "I moltiplicatori di attività (da 1,2 a 1,9) sono convenzioni molto diffuse per grandi gruppi di stili di vita. La scelta del livello è soggettiva e l'errore sul TDEE è maggiore di quello sul BMR.",
      "I valori di ±0,5 kg a settimana usano la regola empirica approssimativa di 7.700 kcal per kg. In pratica la variazione di peso dipende da acqua, composizione corporea e adattamento, e rallenta nel tempo.",
    ],
    faqs: [
      {
        question: "Che differenza c'è tra BMR e TDEE?",
        answer:
          "Il BMR è l'energia consumata a riposo assoluto. Il TDEE aggiunge l'energia per il movimento quotidiano, l'esercizio fisico e la digestione, quindi è sempre più alto del BMR.",
      },
      {
        question: "Quale livello di attività devo scegliere?",
        answer:
          "Scegli il livello che corrisponde a una settimana normale, non alla tua settimana migliore. Se sei tra due livelli, la tabella li mostra entrambi e puoi usare un valore intermedio. La maggior parte delle persone con un lavoro d'ufficio è sedentaria o leggermente attiva.",
      },
      {
        question: "Perché il mio TDEE è diverso da quello del fitness tracker?",
        answer:
          "I tracker stimano l'attività dal movimento e dalla frequenza cardiaca, mentre questo calcolatore usa un unico moltiplicatore generico. Entrambi sono stime; monitorare peso e assunzione di cibo per diverse settimane è il modo migliore per capire il tuo vero livello di mantenimento.",
      },
    ],
    sourcesUsedFor: [
      "L'equazione di Mifflin-St Jeor per il dispendio energetico a riposo, la stessa del Calcolatore del metabolismo basale.",
      "La stima del dispendio energetico totale come dispendio energetico a riposo moltiplicato per un livello di attività fisica.",
    ],
  },
  text: {
    units: "Unità",
    unitOptions: { metric: "Metriche (kg, cm)", imperial: "Imperiali (lb, ft, in)" },
    sex: "Sesso usato nell'equazione",
    sexHelp: "L'equazione di Mifflin-St Jeor ha costanti diverse per uomini e donne.",
    sexes: { male: "Uomo", female: "Donna" },
    age: "Età",
    weight: "Peso",
    height: "Altezza",
    heightFt: "Altezza (piedi)",
    heightIn: "Altezza (pollici)",
    heightZero: "Inserisci un'altezza maggiore di 0.",
    activity: "Livello di attività",
    activityHelp:
      "Scegli la descrizione più vicina a una settimana tipica. I moltiplicatori sono convenzioni approssimative, non misurazioni.",
    activities: {
      sedentary: "Sedentario (poco o nessun esercizio)",
      light: "Leggermente attivo (esercizio leggero 1–3 giorni a settimana)",
      moderate: "Moderatamente attivo (esercizio 3–5 giorni a settimana)",
      very: "Molto attivo (esercizio intenso 6–7 giorni a settimana)",
      extra: "Estremamente attivo (lavoro fisico o allenamento due volte al giorno)",
    },
    activityShort: {
      sedentary: "Sedentario",
      light: "Leggermente attivo",
      moderate: "Moderatamente attivo",
      very: "Molto attivo",
      extra: "Estremamente attivo",
    },
    tdee: "Dispendio energetico totale giornaliero",
    caption: "BMR {bmr} kcal/giorno × moltiplicatore di attività {factor}.",
    bmr: "Metabolismo basale (Mifflin-St Jeor)",
    kj: "TDEE in kilojoule",
    multiplier: "Moltiplicatore di attività",
    lose: "Perdita di circa 0,5 kg (1,1 lb) a settimana",
    gain: "Aumento di circa 0,5 kg (1,1 lb) a settimana",
    kcalDay: "kcal/giorno",
    kjDay: "kJ/giorno",
    table: {
      caption: "TDEE stimato per ogni livello di attività",
      level: "Livello di attività",
      factor: "Moltiplicatore",
      kcal: "kcal/giorno",
      kj: "kJ/giorno",
    },
    notes: {
      estimate:
        "Una stima per adulti sani. Il consumo energetico reale può discostarsene di diverse centinaia di kcal al giorno; non è una prescrizione dietetica.",
      rule: "I valori di ±0,5 kg a settimana usano la regola empirica approssimativa secondo cui 1 kg di peso corporeo vale circa 7.700 kcal (550 kcal al giorno per 0,5 kg a settimana). La variazione reale del peso non la segue fedelmente.",
      belowBmr:
        "Il valore per la perdita di peso è inferiore al tuo BMR stimato. Mangiare meno del BMR è sconsigliato senza il parere di un medico o di un dietista abilitato.",
    },
  },
};

export default it;
