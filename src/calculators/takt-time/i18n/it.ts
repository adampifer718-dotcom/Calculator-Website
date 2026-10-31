import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TaktTimeText } from "../text/en";

const it: CalculatorTranslation<TaktTimeText> = {
  content: {
    title: "Calcolatore del takt time",
    shortTitle: "Takt time",
    summary:
      "Trova il takt time, il ritmo di produzione necessario per soddisfare la domanda dei clienti, da durata del turno, pause, turni e domanda, più il numero minimo di operatori.",
    metaTitle: "Calcolatore del takt time – Ritmo di produzione per unità",
    metaDescription:
      "Calcola il takt time da durata del turno, pause, turni al giorno e domanda dei clienti, con unità all'ora, operatori minimi e confronto con il tempo ciclo.",
    keywords: [
      "calcolo takt time",
      "formula takt time",
      "lean manufacturing",
      "tempo disponibile di produzione",
      "domanda del cliente",
      "tempo ciclo e takt time",
      "bilanciamento della linea",
      "numero minimo di operatori",
    ],
    intro: [
      "Il takt time è il ritmo che una linea di produzione deve tenere per produrre esattamente ciò che serve ai clienti: se i clienti vogliono 645 unità in un giorno con 860 minuti di tempo di lavoro, un'unità deve uscire dalla linea ogni 80 secondi. La parola viene dal tedesco e indica la battuta in musica.",
      "Questo calcolatore ricava il tempo disponibile netto da durata del turno, pause, numero di turni e giorni lavorativi, lo divide per la domanda e mostra il takt time in secondi e minuti. Con il contenuto di lavoro totale per unità stima il numero minimo di operatori, e con un tempo ciclo misurato mostra se la linea riesce a tenere il ritmo.",
    ],
    howToUse: [
      "Inserisci la durata di un turno in ore e minuti e le pause programmate per turno in minuti.",
      "Inserisci il numero di turni al giorno e il numero di giorni lavorativi del periodo a cui si riferisce la domanda.",
      "Inserisci la domanda dei clienti per quel periodo.",
      "Se vuoi, aggiungi il contenuto di lavoro totale per unità e il tempo ciclo effettivo, entrambi in secondi, per vedere gli operatori minimi e se la linea tiene il ritmo del takt.",
    ],
    formulas: [
      {
        title: "Tempo disponibile netto",
        expression: "disponibile = (durata del turno − pause) × turni al giorno × giorni",
        explanation: "In minuti. Conta solo il tempo in cui la linea deve funzionare.",
      },
      {
        title: "Takt time",
        expression: "takt = tempo disponibile ÷ domanda dei clienti",
        explanation: "Mostrato in secondi per unità. Le unità all'ora sono 3.600 ÷ takt.",
      },
      {
        title: "Operatori minimi",
        expression: "operatori = ⌈contenuto di lavoro ÷ takt⌉",
        explanation: "Il lavoro manuale totale per unità diviso per il takt time, arrotondato per eccesso a una persona o postazione intera.",
      },
    ],
    examples: [
      {
        title: "Due turni di 8 ore per 645 unità al giorno",
        steps: [
          "Disponibile = (480 − 50) × 2 × 1 = 860 min = 51.600 s",
          "Takt = 51.600 ÷ 645 = 80 s per unità (1:20)",
          "Operatori = ⌈300 ÷ 80⌉ = ⌈3,75⌉ = 4",
        ],
      },
      {
        title: "Una domanda settimanale di 1.400 unità su un turno",
        steps: [
          "Disponibile = (450 − 30) × 1 × 5 = 2.100 min = 126.000 s",
          "Takt = 126.000 ÷ 1.400 = 90 s per unità",
          "Un ciclo effettivo di 95 s supera il takt di 5 s, quindi si possono produrre circa 1.326 unità invece di 1.400",
        ],
      },
      {
        title: "Un turno di 10 ore per 216 unità",
        steps: [
          "Disponibile = 600 − 60 = 540 min = 32.400 s",
          "Takt = 32.400 ÷ 216 = 150 s per unità, cioè 2:30",
          "Unità all'ora = 3.600 ÷ 150 = 24",
        ],
      },
    ],
    assumptions: [
      "Il takt time è determinato dalla domanda, non dagli impianti. Presuppone che la domanda sia distribuita in modo uniforme nel periodo.",
      "Dal turno vengono tolte solo le pause. Includi nelle pause la manutenzione programmata, le riunioni o il tempo di avviamento se in quei momenti la linea non funziona.",
      "Il numero minimo di operatori è un limite inferiore. Lavoro non bilanciato, spostamenti e variabilità dei tempi delle attività di solito ne richiedono di più.",
    ],
    faqs: [
      {
        question: "Che differenza c'è tra takt time e tempo ciclo?",
        answer:
          "Il takt time è il ritmo richiesto dai clienti: tempo disponibile diviso per la domanda. Il tempo ciclo è quanto impiega effettivamente il processo per unità. Se il tempo ciclo è più lungo del takt time, la linea non riesce a stare al passo senza straordinari o modifiche.",
      },
      {
        question: "Il takt time deve includere i guasti?",
        answer:
          "No. Il takt time usa il tempo disponibile pianificato. I fermi non pianificati rallentano la linea, quindi il tempo ciclo deve essere più breve del takt per lasciare margine. L'efficienza complessiva dell'impianto (OEE) misura queste perdite.",
      },
      {
        question: "E se la domanda cambia durante il mese?",
        answer:
          "Ricalcola il takt per ogni periodo con la sua domanda. Molti stabilimenti rivedono il takt time ogni settimana o ogni mese e ribilanciano il lavoro tra le postazioni quando cambia molto.",
      },
    ],
    sourcesUsedFor: [
      "La definizione di takt time come tempo di produzione disponibile diviso per la domanda dei clienti.",
      "Il tempo disponibile netto dopo le pause e il confronto tra tempo ciclo e takt time.",
    ],
  },
  text: {
    shiftHours: "Durata del turno: ore",
    shiftMinutes: "Durata del turno: minuti",
    breaks: "Pause per turno",
    breaksHelp: "Pause programmate, pasti e riunioni durante i quali la linea non funziona, in minuti per turno.",
    shifts: "Turni al giorno",
    days: "Giorni lavorativi nel periodo",
    daysHelp: "Usa 1 per una domanda giornaliera, 5 per una domanda settimanale su cinque giorni lavorativi, e così via.",
    demand: "Domanda dei clienti nel periodo",
    demandHelp: "Il numero di unità di cui i clienti hanno bisogno nello stesso periodo.",
    workContent: "Contenuto di lavoro totale per unità (facoltativo)",
    workContentHelp:
      "La somma di tutti i tempi di lavoro manuale necessari per produrre un'unità, in secondi. Dà il numero minimo di operatori o postazioni.",
    actualCycle: "Tempo ciclo effettivo (facoltativo)",
    actualCycleHelp: "Il tempo misurato della postazione più lenta, in secondi per unità, da confrontare con il takt time.",
    minutes: "min",
    seconds: "s",
    units: "unità",
    errors: {
      noShift: "Inserisci una durata del turno superiore a 0 minuti.",
      breaksTooLong: "Le pause devono essere più brevi del turno.",
      tooManyHours: "I turni sommano più di 24 ore al giorno.",
    },
    takt: "Takt time",
    perUnit: "s per unità",
    caption: "{available} di tempo disponibile ÷ {demand}.",
    demandUnits: {
      zero: "{n} unità",
      one: "{n} unità",
      two: "{n} unità",
      few: "{n} unità",
      many: "{n} unità",
      other: "{n} unità",
    },
    minutesText: "{n} min",
    taktClock: "Takt time (m:ss)",
    clockText: "{m}:{ss}",
    clockTextHours: "{h}:{mm}:{ss}",
    unitsPerHour: "Unità per ora di tempo disponibile",
    available: "Tempo disponibile netto nel periodo",
    availablePerShift: "Tempo disponibile per turno",
    operators: "Operatori o postazioni minimi",
    capacity: "Unità producibili con il tempo ciclo effettivo",
    gap: "Tempo ciclo effettivo meno takt time",
    meetsTakt: "La linea riesce a tenere il ritmo del takt?",
    verdict: {
      yes: "Sì: il tempo ciclo rientra nel takt time",
      no: "No: il tempo ciclo è più lungo del takt time",
    },
    notes: {
      operators:
        "Operatori minimi = contenuto di lavoro ÷ takt time, arrotondato per eccesso ({ratio} → {operators}). Le linee reali di solito ne richiedono di più perché il lavoro non si può bilanciare perfettamente.",
      slower:
        "Con questo tempo ciclo la linea produce circa {capacity} nel periodo, meno della domanda di {demand}. Tra le opzioni ci sono accorciare il ciclo, aggiungere una postazione o estendere il tempo disponibile.",
      faster: "Il tempo ciclo lascia {gap} di margine per unità, che assorbe piccoli imprevisti.",
      plannedStops:
        "Dal turno vengono tolte solo le pause. Se pianifichi anche manutenzione o riunioni, includile nelle pause per un takt time più realistico.",
    },
  },
};

export default it;
