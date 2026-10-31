import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { UptimeSlaText } from "../text/en";

const it: CalculatorTranslation<UptimeSlaText> = {
  content: {
    title: "Calcolatore di uptime e SLA",
    shortTitle: "Uptime / SLA",
    summary:
      "Trasforma una percentuale di SLA nel downtime consentito al giorno, alla settimana, al mese e all'anno, ricava la disponibilità ottenuta dal downtime reale o combina componenti in serie o in parallelo.",
    metaTitle: "Calcolatore di uptime e SLA – Downtime consentito e nove",
    metaDescription:
      "Converti uno SLA come 99,9% nel downtime consentito per giorno, settimana, mese e anno, misura la disponibilità e combina parti in serie o ridondanti.",
    keywords: [
      "calcolo uptime",
      "calcolatore SLA",
      "downtime consentito",
      "uptime 99,9",
      "nove di disponibilità",
      "calcolo disponibilità",
      "SLA composto",
      "downtime al mese",
    ],
    intro: [
      "Un accordo sul livello di servizio (SLA) promette spesso una disponibilità come il 99,9%, i “tre nove”. Sembra quasi perfetto, ma consente comunque circa 43 minuti di downtime al mese. Vedere la tolleranza in termini di tempo rende gli obiettivi più facili da confrontare e aiuta a pianificare la manutenzione.",
      "Questo calcolatore converte un obiettivo di disponibilità nel downtime consentito per un giorno, una settimana, un mese e un anno; calcola la disponibilità effettivamente ottenuta dal downtime misurato; e combina le disponibilità di più componenti che dipendono l'uno dall'altro (in serie) o che si fanno da riserva (in parallelo).",
    ],
    howToUse: [
      "Scegli che cosa vuoi calcolare.",
      "Per il downtime consentito, inserisci la percentuale dello SLA. Viene mostrata prima la tolleranza mensile, seguita da una tabella per ogni periodo.",
      "Per la disponibilità ottenuta, inserisci la durata del periodo di misura e il downtime totale in quel periodo.",
      "Per più componenti, elenca le loro disponibilità in percentuale e scegli se devono funzionare tutti (in serie) o se ne basta uno (in parallelo).",
    ],
    formulas: [
      {
        title: "Downtime consentito",
        expression: "downtime = (1 − A) × periodo",
        explanation: "A è la disponibilità come frazione (99,9% = 0,999). Un anno è di 365 giorni e un mese di 365 ÷ 12 = 30,42 giorni.",
      },
      {
        title: "Disponibilità ottenuta",
        expression: "A = 1 − downtime ÷ periodo",
        explanation: "I due tempi devono essere nella stessa unità; il calcolatore li converte per te.",
      },
      {
        title: "Numero di nove",
        expression: "nove = −log₁₀(1 − A)",
        explanation: "99,9% dà 3 nove e 99,95% circa 3,3. Non è definito per il 100%.",
      },
      {
        title: "Componenti in serie",
        expression: "A = A₁ × A₂ × … × Aₙ",
        explanation: "Ogni componente deve essere attivo, quindi la disponibilità complessiva è inferiore a quella del componente più debole.",
      },
      {
        title: "Componenti in parallelo",
        expression: "A = 1 − (1 − A₁) × (1 − A₂) × … × (1 − Aₙ)",
        explanation: "Il sistema è fuori servizio solo quando tutti i componenti ridondanti sono fuori servizio nello stesso momento.",
      },
    ],
    examples: [
      {
        title: "Downtime mensile consentito da uno SLA del 99,9%",
        steps: [
          "Un mese è 365 × 86.400 ÷ 12 = 2.628.000 secondi",
          "Downtime consentito = (1 − 0,999) × 2.628.000 = 2.628 s",
          "2.628 s = 43 min 48 s",
        ],
      },
      {
        title: "25 minuti di downtime in un mese di 30 giorni",
        steps: [
          "Periodo = 30 × 1.440 = 43.200 min",
          "Quota di downtime = 25 ÷ 43.200 ≈ 0,0579%",
          "Disponibilità = 100% − 0,0579% ≈ 99,94213%",
        ],
      },
      {
        title: "Due server ridondanti al 99,9% ciascuno",
        steps: [
          "Ogni server è fuori servizio lo 0,1% del tempo",
          "Sono fuori servizio insieme per 0,001 × 0,001 = 0,000001 del tempo",
          "Disponibilità = 1 − 0,000001 = 99,9999%, cioè 6 nove",
        ],
      },
    ],
    assumptions: [
      "Un anno è considerato di 365 giorni e un mese pari a un dodicesimo di anno (circa 30,42 giorni). I contratti possono usare mesi di calendario, mesi di 30 giorni o anni di 365,25 giorni, che cambiano leggermente la tolleranza.",
      "Molti SLA escludono la manutenzione programmata e contano solo alcuni tipi di interruzione. Verifica le definizioni del contratto prima di confrontare i valori.",
      "Le disponibilità combinate presuppongono che i componenti si guastino in modo indipendente. Alimentazione, reti, rilasci software o fornitori condivisi rendono i sistemi reali meno disponibili di quanto indichino le formule.",
    ],
    faqs: [
      {
        question: "Quanto downtime consente il 99,99%?",
        answer:
          "Circa 52 minuti e 34 secondi per anno di 365 giorni, o 4 minuti e 23 secondi per mese di 365 ÷ 12 giorni. Ogni nove in più divide la tolleranza per 10.",
      },
      {
        question: "Perché una catena di servizi affidabili è meno affidabile di ciascuno di essi?",
        answer:
          "Quando una richiesta ha bisogno di tutti i servizi della catena, il guasto di uno qualsiasi provoca un'interruzione. Le disponibilità si moltiplicano: tre servizi al 99,9% danno insieme circa il 99,7%, cioè all'incirca il triplo del downtime di uno solo.",
      },
      {
        question: "Aggiungere un secondo server raddoppia i nove?",
        answer:
          "Nel caso ideale sì: due server indipendenti al 99,9% danno il 99,9999%. In pratica restano il bilanciatore di carico, il database e le cause di guasto comuni, quindi il guadagno reale è minore.",
      },
    ],
    sourcesUsedFor: [
      "La disponibilità basata sul tempo come uptime ÷ (uptime + downtime), e il downtime che un obiettivo di disponibilità consente per periodo.",
      "La combinazione delle disponibilità: il prodotto per i componenti in serie e uno meno il prodotto delle indisponibilità per i componenti ridondanti.",
      "Calcoli svolti di disponibilità in serie e in parallelo, e l'ipotesi che i guasti siano indipendenti.",
    ],
  },
  text: {
    mode: "Che cosa vuoi calcolare?",
    modes: {
      allowed: "Downtime consentito da uno SLA",
      achieved: "Disponibilità dal downtime",
      composite: "Disponibilità di più componenti",
    },
    sla: "Obiettivo di disponibilità (SLA)",
    slaHelp: "L'uptime promesso in percentuale, per esempio 99,9 per i “tre nove”.",
    periodLength: "Periodo di misura",
    periodUnit: "Unità del periodo",
    downtime: "Downtime nel periodo",
    downtimeUnit: "Unità del downtime",
    timeUnits: {
      s: "Secondi",
      min: "Minuti",
      h: "Ore",
      d: "Giorni",
      w: "Settimane",
      mo: "Mesi (365 ÷ 12 giorni)",
      y: "Anni (365 giorni)",
    },
    components: "Disponibilità dei componenti (%)",
    componentsHelp: "Una disponibilità per componente, separate da punti e virgola, spazi o a capo, per esempio 99,95; 99,9; 99,99.",
    topology: "Come sono collegati i componenti?",
    topologies: {
      serial: "In serie (devono funzionare tutti)",
      parallel: "In parallelo (ne basta uno)",
    },
    errors: {
      empty: "Inserisci almeno una disponibilità.",
      tooMany: "Inserisci al massimo {max} disponibilità.",
      notNumber: "“{token}” non è un numero. Separa i valori con punti e virgola, spazi o a capo.",
      tooLarge: "“{token}” è troppo grande.",
      outOfRange: "{value} non è una disponibilità valida. Ogni valore deve essere compreso tra 0 e 100%.",
      downtimeTooLong: "Il downtime non può essere più lungo del periodo di misura.",
    },
    allowedMonth: "Downtime consentito al mese",
    achievedAvailability: "Disponibilità ottenuta",
    compositeAvailability: "Disponibilità complessiva",
    captionAllowed: "Con una disponibilità del {sla} e un mese di 365 ÷ 12 giorni.",
    captionAchieved: "{downtime} di downtime in {period}.",
    captionComposite: "{count} {topology}.",
    componentCount: {
      zero: "{n} componenti",
      one: "{n} componente",
      two: "{n} componenti",
      few: "{n} componenti",
      many: "{n} componenti",
      other: "{n} componenti",
    },
    topologyCaption: { serial: "in serie", parallel: "in parallelo" },
    nines: "Numero di nove",
    downtimeYear: "Downtime consentito all'anno",
    downtimeYearHours: "Downtime consentito all'anno in ore",
    downtimeFraction: "Downtime come quota del periodo",
    uptime: "Uptime nel periodo",
    equivalentMonth: "Stesso tasso di downtime al mese",
    equivalentYear: "Stesso tasso di downtime all'anno",
    serialValue: "Disponibilità complessiva in serie",
    parallelValue: "Disponibilità complessiva in parallelo",
    weakest: "Disponibilità del componente più basso",
    table: {
      caption: "Downtime consentito per periodo",
      period: "Periodo",
      downtime: "Downtime consentito",
      uptime: "Uptime richiesto",
    },
    periods: { day: "Giorno", week: "Settimana", month: "Mese (365 ÷ 12 giorni)", year: "Anno (365 giorni)" },
    duration: {
      d: "{n} g",
      h: "{n} h",
      min: "{n} min",
      s: "{n} s",
      pair: "{a} {b}",
    },
    notes: {
      periods:
        "Un anno è considerato di 365 giorni e un mese pari a un dodicesimo (30,42 giorni). I contratti possono definire il periodo in modo diverso, per esempio come mese di calendario, e spesso escludono la manutenzione programmata.",
      hundred: "Una disponibilità del 100% non consente alcun downtime, quindi il numero di nove non è definito.",
      zero: "Senza downtime la disponibilità è del 100% e il numero di nove non è definito.",
      independent:
        "Queste formule presuppongono che i componenti si guastino indipendentemente l'uno dall'altro. Dipendenze condivise, come un'unica alimentazione o un'unica modifica di configurazione, rendono la disponibilità reale inferiore a quella calcolata.",
      parallelHelp:
        "In parallelo, il sistema è fuori servizio solo quando tutti i componenti lo sono nello stesso momento, quindi la ridondanza aumenta la disponibilità.",
      serialHelp:
        "In serie, il sistema è fuori servizio quando uno qualsiasi dei componenti lo è, quindi la disponibilità complessiva è inferiore a quella del componente più basso.",
      allDown: "Almeno un componente ha una disponibilità dello 0%, quindi un sistema in serie non è mai attivo.",
    },
  },
};

export default it;
