import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProbabilityEventsText } from "../text/en";

const it: CalculatorTranslation<ProbabilityEventsText> = {
  content: {
    title: "Calcolatore di probabilità di due eventi",
    shortTitle: "Probabilità",
    summary:
      "Combina le probabilità di due eventi indipendenti o mutuamente esclusivi: entrambi, almeno uno, esattamente uno o nessuno.",
    metaTitle: "Calcolatore di probabilità – Due eventi: e, o, nessuno",
    metaDescription:
      "Calcola P(A e B), P(A o B), esattamente uno e nessuno per due eventi indipendenti o mutuamente esclusivi, oltre al complementare di ciascun evento.",
    keywords: [
      "probabilità",
      "calcolo probabilità",
      "probabilità di due eventi",
      "eventi indipendenti",
      "eventi mutuamente esclusivi",
      "P(A e B)",
      "P(A o B)",
      "regola del complementare",
    ],
    intro: [
      "Molte domande quotidiane combinano due probabilità. Che probabilità c'è che due macchine si guastino lo stesso giorno, o che un cliente paghi con carta o in contanti? Questo calcolatore risponde a domande di questo tipo per due eventi, A e B.",
      "Inserisci la probabilità di ciascun evento e indica come sono legati. Gli eventi indipendenti non si influenzano a vicenda, come due lanci di moneta distinti. Gli eventi mutuamente esclusivi non possono verificarsi insieme, come uno stesso dado che mostra sia un 2 sia un 5. Il calcolatore dà poi la probabilità di entrambi, di almeno uno, di esattamente uno e di nessuno.",
    ],
    howToUse: [
      "Inserisci P(A) e P(B) come percentuali tra 0 % e 100 %.",
      "Scegli Indipendenti se sapere che un evento si è verificato non cambia la probabilità dell'altro.",
      "Scegli Mutuamente esclusivi se i due eventi non possono mai verificarsi insieme. In tal caso le loro probabilità non possono sommare più del 100 %.",
      "Leggi P(A e B) come risultato principale e le altre combinazioni sotto.",
    ],
    formulas: [
      {
        title: "Entrambi (indipendenti)",
        expression: "P(A e B) = P(A) × P(B)",
        explanation: "La regola del prodotto per eventi indipendenti.",
      },
      {
        title: "Entrambi (mutuamente esclusivi)",
        expression: "P(A e B) = 0",
        explanation: "Gli eventi non hanno esiti in comune.",
      },
      {
        title: "Almeno uno",
        expression: "P(A o B) = P(A) + P(B) − P(A e B)",
        explanation: "La regola della somma. Si sottrae l'intersezione per non contarla due volte.",
      },
      {
        title: "Esattamente uno",
        expression: "P(esattamente uno) = P(A) + P(B) − 2 × P(A e B)",
        explanation: "Almeno uno, tolto il caso in cui si verificano entrambi.",
      },
      {
        title: "Nessuno e complementari",
        expression: "P(nessuno) = 1 − P(A o B)\nP(non A) = 1 − P(A)",
        explanation: "La regola del complementare: un evento o si verifica o non si verifica.",
      },
    ],
    examples: [
      {
        title: "Due macchine indipendenti che si guastano l'8 % e il 5 % dei giorni",
        steps: [
          "P(si guastano entrambe) = 0,08 × 0,05 = 0,004 = 0,4 %",
          "P(se ne guasta almeno una) = 0,08 + 0,05 − 0,004 = 0,126 = 12,6 %",
          "P(non se ne guasta nessuna) = 1 − 0,126 = 87,4 %",
        ],
      },
      {
        title: "Un cliente paga con carta (62 %) o in contanti (18 %), mai in entrambi i modi",
        steps: [
          "Gli eventi sono mutuamente esclusivi, quindi P(entrambi) = 0",
          "P(carta o contanti) = 62 % + 18 % = 80 %",
          "P(nessuno dei due, ad es. un buono) = 100 % − 80 % = 20 %",
        ],
      },
      {
        title: "Segnare due tiri liberi quando ognuno entra il 75 % delle volte",
        steps: [
          "P(entrano entrambi) = 0,75 × 0,75 = 0,5625 = 56,25 %",
          "P(esattamente uno) = 0,75 + 0,75 − 2 × 0,5625 = 37,5 %",
          "P(nessuno) = 0,25 × 0,25 = 6,25 %",
        ],
      },
    ],
    assumptions: [
      "Le probabilità si inseriscono come percentuali e sono trattate come valori esatti.",
      "Il calcolatore copre solo i due casi particolari di eventi indipendenti e mutuamente esclusivi. Per eventi che non sono né l'una né l'altra cosa servono P(A e B) o una probabilità condizionata, che questo strumento non chiede.",
      "L'indipendenza è una proprietà della situazione, non dei numeri. Considera gli eventi dipendenti a meno che tu non abbia buoni motivi per crederli indipendenti.",
      "I risultati sono mostrati con quattro decimali di percentuale.",
    ],
    faqs: [
      {
        question: "Che differenza c'è tra indipendenti e mutuamente esclusivi?",
        answer:
          "Gli eventi indipendenti non si influenzano a vicenda, quindi possono verificarsi entrambi. Gli eventi mutuamente esclusivi non possono verificarsi insieme: se accade uno, l'altro è escluso. Due eventi con probabilità diverse da zero non possono mai essere contemporaneamente indipendenti e mutuamente esclusivi.",
      },
      {
        question: "Perché le probabilità di eventi mutuamente esclusivi non possono sommare più del 100 %?",
        answer:
          "Se A e B non si sovrappongono mai, P(A o B) è uguale a P(A) + P(B). Una probabilità non può superare il 100 %, e quindi nemmeno quella somma. Un totale oltre il 100 % significa che gli eventi si sovrappongono e non sono mutuamente esclusivi.",
      },
      {
        question: "Come calcolo la probabilità che qualcosa accada almeno una volta in più tentativi?",
        answer:
          "Per tentativi indipendenti, calcola la probabilità che non accada mai e sottraila da 1. Con due tentativi al 30 % ciascuno, P(nessuno) = 0,7 × 0,7 = 0,49, quindi P(almeno una volta) = 51 %. Il calcolatore lo mostra come P(A o B).",
      },
    ],
    sourcesUsedFor: [
      "Definizioni di eventi indipendenti e mutuamente esclusivi, P(A e B) = P(A)·P(B) per gli eventi indipendenti e P(A e B) = 0 per quelli mutuamente esclusivi.",
    ],
  },
  text: {
    pA: "Probabilità di A, P(A)",
    pB: "Probabilità di B, P(B)",
    pHelp: "Come percentuale da 0 % a 100 %.",
    relation: "Come sono legati A e B?",
    relationHelp:
      "Indipendenti: il verificarsi di uno non cambia la probabilità dell'altro. Mutuamente esclusivi: non possono verificarsi entrambi.",
    relationOptions: { independent: "Indipendenti", exclusive: "Mutuamente esclusivi" },
    exclusiveTooLarge: "Due eventi mutuamente esclusivi non possono avere P(A) + P(B) oltre il 100 %. Qui la somma è {sum}.",
    and: "P(A e B): si verificano entrambi",
    or: "P(A o B): se ne verifica almeno uno",
    exactlyOne: "P(esattamente uno tra A e B)",
    neither: "P(né A né B)",
    notA: "P(non A)",
    notB: "P(non B)",
    independentCaption: "Per eventi indipendenti, P(A e B) = P(A) × P(B).",
    exclusiveCaption: "Gli eventi mutuamente esclusivi non si verificano mai insieme, quindi P(A e B) = 0.",
    certainNote: "Con P(A) + P(B) = 100 %, uno dei due eventi mutuamente esclusivi si verificherà di sicuro.",
  },
};

export default it;
