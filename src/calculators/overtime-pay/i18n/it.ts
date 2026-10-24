import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OvertimePayText } from "../text/en";

const it: CalculatorTranslation<OvertimePayText> = {
  content: {
    title: "Calcolatore della paga degli straordinari",
    shortTitle: "Paga straordinari",
    summary:
      "Calcola la retribuzione lorda di una settimana con gli straordinari, compresa la maggiorazione del 50%, un'eventuale quota pagata al doppio e la tariffa oraria effettiva.",
    metaTitle: "Calcolatore della paga degli straordinari – 1,5× e 2×",
    metaDescription:
      "Calcola la paga lorda settimanale con straordinari: paga ordinaria fino a 40 ore o a una tua soglia, maggiorazione del 50%, doppia paga facoltativa e tariffa effettiva.",
    keywords: [
      "calcolo straordinari",
      "paga straordinari",
      "maggiorazione straordinari",
      "straordinario pagato doppio",
      "paga settimanale",
      "straordinari FLSA",
      "tariffa straordinari",
      "40 ore",
    ],
    intro: [
      "La paga degli straordinari ricompensa con una tariffa più alta le ore lavorate oltre la settimana normale. Secondo il Fair Labor Standards Act federale degli Stati Uniti, i dipendenti coperti e non esenti devono ricevere almeno una volta e mezza la tariffa ordinaria per ogni ora oltre le 40 in una settimana lavorativa.",
      "Questo calcolatore divide la settimana in ore ordinarie e ore di straordinario, applica il tuo moltiplicatore per gli straordinari e può pagare parte degli straordinari a tariffa doppia, se il tuo datore di lavoro o il tuo contratto lo prevede. Modifica la soglia o i moltiplicatori in base alle regole che si applicano a te.",
    ],
    howToUse: [
      "Scegli la valuta e inserisci la tua tariffa oraria ordinaria.",
      "Inserisci tutte le ore che hai lavorato nella settimana.",
      "Lascia la soglia a 40 ore e il moltiplicatore a 1,5 per la regola federale statunitense, oppure modificali in base al tuo contratto o alla legge locale.",
      "Se alcune ore di straordinario sono pagate al doppio, inserisci quante sono. Sono conteggiate all'interno delle ore di straordinario.",
      "Leggi la retribuzione lorda totale, la ripartizione tra paga ordinaria e paga degli straordinari e la tariffa oraria effettiva.",
    ],
    formulas: [
      {
        title: "Ore ordinarie e di straordinario",
        expression: "ordinarie = min(H, T); straordinario = max(0, H − T)",
        explanation: "H sono le ore lavorate nella settimana e T la soglia delle ore ordinarie.",
      },
      {
        title: "Retribuzione lorda",
        expression: "paga = ordinarie × r + (straordinario − D) × r × m + D × r × d",
        explanation:
          "r è la tariffa oraria, m il moltiplicatore degli straordinari, D le ore pagate al doppio e d il moltiplicatore della paga doppia.",
      },
      {
        title: "Tariffa oraria effettiva",
        expression: "effettiva = paga ÷ H",
        explanation: "La paga media per ogni ora lavorata, inclusa la maggiorazione degli straordinari.",
      },
    ],
    examples: [
      {
        title: "46 ore a $22 all'ora",
        steps: ["Paga ordinaria = 40 × $22 = $880", "Straordinari = 6 h × $22 × 1,5 = $198", "Totale = $880 + $198 = $1.078"],
      },
      {
        title: "52 ore a $18,50 con 4 ore pagate al doppio",
        steps: [
          "Paga ordinaria = 40 × $18,50 = $740",
          "Ore di straordinario = 12, di cui 8 con maggiorazione del 50%: 8 × $27,75 = $222",
          "Paga doppia = 4 × $37 = $148",
          "Totale = $740 + $222 + $148 = $1.110, circa $21,35 per ora lavorata",
        ],
      },
      {
        title: "Contratto da 37,5 ore con straordinari a 1,25×",
        steps: ["Paga ordinaria = 37,5 × £16 = £600", "Straordinari = 6,5 h × £16 × 1,25 = £130", "Totale = £730"],
      },
    ],
    assumptions: [
      "Si tratta di una stima della retribuzione lorda, prima di imposte sul reddito, contributi previdenziali, benefit e altre trattenute. Non è una consulenza legale o fiscale e non è stata verificata da professionisti.",
      "Le regole sugli straordinari variano in base a paese, stato e contratto. In alcuni luoghi gli straordinari scattano dopo un certo numero di ore al giorno, o la paga doppia dopo turni più lunghi; questo strumento applica solo una soglia settimanale e le ore pagate al doppio che inserisci.",
      "Secondo la regola federale statunitense, la tariffa ordinaria può includere bonus, provvigioni e indennità di turno. Qui la tariffa ordinaria è la cifra oraria che inserisci.",
      "I dipendenti esenti, come molti manager e professionisti stipendiati, potrebbero non avere diritto agli straordinari.",
    ],
    faqs: [
      {
        question: "Che cosa significa una volta e mezza la tariffa?",
        answer:
          "Ogni ora di straordinario è pagata 1,5 volte la tariffa ordinaria. A $20 all'ora, un'ora di straordinario vale $30, quindi la maggiorazione è di $10 oltre alla paga base.",
      },
      {
        question: "Il mio datore di lavoro può fare la media delle ore su due settimane?",
        answer:
          "Secondo la regola federale statunitense, no. Ogni settimana lavorativa è un periodo fisso di 168 ore a sé stante, quindi 50 ore in una settimana e 30 in quella successiva significano comunque 10 ore di straordinario nella prima settimana.",
      },
      {
        question: "Le ore pagate al doppio si sommano alle ore di straordinario?",
        answer:
          "No. In questo calcolatore le ore pagate al doppio fanno parte delle ore di straordinario. Se hai fatto 12 ore di straordinario e 4 erano pagate al doppio, le altre 8 sono pagate con il moltiplicatore degli straordinari.",
      },
    ],
    sourcesUsedFor: [
      "La regola federale statunitense: i dipendenti coperti e non esenti ricevono almeno una volta e mezza la tariffa ordinaria per le ore oltre le 40 in una settimana lavorativa.",
      "La settimana lavorativa come periodo fisso di 168 ore, il divieto di fare la media delle ore tra settimane e il modo in cui si determina la tariffa ordinaria.",
    ],
  },
  text: {
    rate: "Tariffa oraria ordinaria",
    rateHelp: "La tariffa base per un'ora di lavoro, prima di qualsiasi maggiorazione per straordinari.",
    hours: "Ore totali lavorate nella settimana",
    threshold: "Soglia delle ore ordinarie",
    thresholdHelp:
      "Ore pagate alla tariffa ordinaria prima che inizino gli straordinari. Secondo la regola federale statunitense sono 40 ore in una settimana lavorativa.",
    multiplier: "Moltiplicatore degli straordinari",
    multiplierHelp: "1,5 significa una volta e mezza la tariffa (maggiorazione del 50%).",
    doubleHours: "Ore pagate al doppio (facoltativo)",
    doubleHoursHelp:
      "Ore pagate alla tariffa doppia, più alta. Fanno parte delle ore di straordinario, non si aggiungono. Lascia vuoto o 0 se non ce ne sono.",
    doubleMultiplier: "Moltiplicatore della paga doppia",
    errors: {
      doubleExceeds: "Le ore pagate al doppio non possono superare le ore di straordinario ({overtime} h).",
    },
    grossPay: "Retribuzione lorda totale",
    caption: "{hours} h a {rate} all'ora, con straordinari oltre {threshold} h a {multiplier}× la tariffa ordinaria.",
    regularPay: "Paga ordinaria",
    overtimePay: "Paga degli straordinari",
    doublePay: "Paga doppia",
    regularHours: "Ore ordinarie",
    overtimeHours: "Ore di straordinario (incluse quelle pagate al doppio)",
    overtimeRate: "Tariffa oraria degli straordinari",
    doubleRate: "Tariffa oraria doppia",
    effectiveRate: "Tariffa oraria effettiva",
    notes: {
      noOvertime: "Le ore lavorate non superano la soglia, quindi non sono dovuti straordinari.",
      gross: "Gli importi sono retribuzione lorda, prima di tasse e trattenute.",
      rules: "Le regole sugli straordinari dipendono da paese, stato e contratto di lavoro; in alcuni luoghi sono previsti anche straordinari giornalieri.",
    },
  },
};

export default it;
