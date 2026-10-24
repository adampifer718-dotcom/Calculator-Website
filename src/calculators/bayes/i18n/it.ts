import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BayesText } from "../text/en";

const it: CalculatorTranslation<BayesText> = {
  content: {
    title: "Calcolatore del teorema di Bayes",
    shortTitle: "Teorema di Bayes",
    summary: "Aggiorna una probabilità a priori con nuove evidenze e vedi il risultato come frequenze naturali su 10.000 casi.",
    metaTitle: "Calcolatore del teorema di Bayes – Probabilità a posteriori",
    metaDescription:
      "Trova P(A|B) da probabilità a priori, verosimiglianza e tasso di falsi allarmi. Vedi P(B), P(A|non B) e veri e falsi positivi su 10.000 casi.",
    keywords: [
      "teorema di Bayes",
      "regola di Bayes",
      "probabilità a posteriori",
      "probabilità condizionata",
      "valore predittivo positivo",
      "falsi positivi",
      "sensibilità e specificità",
      "prevalenza",
    ],
    intro: [
      "Il teorema di Bayes ti dice quanto credere a qualcosa dopo aver visto un'evidenza. Combina quanto era probabile l'ipotesi in partenza (la probabilità a priori) con quanto più spesso l'evidenza compare quando l'ipotesi è vera rispetto a quando è falsa.",
      "Il caso classico è un test di screening. Anche un test che individua la maggior parte dei casi può produrre più falsi allarmi che veri positivi quando la condizione è rara. Inserisci tre percentuali per ottenere la probabilità aggiornata e una suddivisione di 10.000 casi immaginari che rende il risultato facile da verificare a mano.",
    ],
    howToUse: [
      "Inserisci la probabilità a priori P(A): quanto è comune A prima di guardare l'evidenza, per esempio la prevalenza di una condizione.",
      "Inserisci P(B | A): quanto spesso compare l'evidenza quando A è vero, per esempio la sensibilità di un test.",
      "Inserisci P(B | non A): quanto spesso l'evidenza compare comunque quando A è falso, per esempio il tasso di falsi positivi.",
      "Leggi P(A | B), poi usa la tabella dei 10.000 casi per vedere da dove vengono i positivi.",
    ],
    formulas: [
      {
        title: "Teorema di Bayes",
        expression: "P(A | B) = P(B | A) · P(A) ÷ P(B)",
        explanation: "La probabilità a posteriori è la quota di tutti i casi con B che hanno anche A.",
      },
      {
        title: "Probabilità totale",
        expression: "P(B) = P(B | A) · P(A) + P(B | non A) · (1 − P(A))",
        explanation: "B può presentarsi insieme ad A (veri positivi) o senza A (falsi positivi).",
      },
      {
        title: "Risultato negativo",
        expression: "P(A | non B) = (1 − P(B | A)) · P(A) ÷ (1 − P(B))",
        explanation: "La probabilità che A sia comunque vero quando B non viene osservato (falsi negativi tra tutti i negativi).",
      },
    ],
    examples: [
      {
        title: "Un test di screening per una condizione che colpisce il 2% delle persone",
        steps: [
          "Su 10.000 persone, 200 hanno la condizione e il 95% di loro risulta positivo: 190 veri positivi.",
          "Delle 9.800 che non ce l'hanno, l'8% risulta positivo: 784 falsi positivi.",
          "P(A | B) = 190 ÷ (190 + 784) ≈ 19,51%",
        ],
      },
      {
        title: "Una parola che segnala le email di spam",
        steps: ["P(B) = 0,30 × 0,40 + 0,02 × 0,60 = 0,132", "P(A | B) = 0,12 ÷ 0,132 ≈ 90,91%"],
      },
      {
        title: "Una condizione molto rara e un test accurato",
        steps: [
          "Su 10.000 persone: 9,9 veri positivi e 99,9 falsi positivi.",
          "P(A | B) = 9,9 ÷ 109,8 ≈ 9,02%, anche se il test è corretto nel 99% dei casi.",
        ],
      },
    ],
    assumptions: [
      "Le tre percentuali sono considerate esatte. In pratica la sensibilità e il tasso di falsi positivi di un test sono stime, e la probabilità a priori dipende da chi viene testato.",
      "La probabilità a priori deve descrivere il gruppo da cui proviene il caso. Chi viene testato perché ha sintomi ha una probabilità a priori più alta di una persona qualsiasi della popolazione.",
      "Gli esempi diagnostici illustrano solo l'aritmetica. Per interpretare il risultato di un vero test medico serve un medico, che può valutare sintomi, anamnesi ed esami di approfondimento.",
    ],
    faqs: [
      {
        question: "Perché P(A | B) è così bassa se il test è accurato?",
        answer:
          "Quando A è raro, i pochi casi veri sono molto meno numerosi delle tante persone senza A, e anche un piccolo tasso di falsi positivi in quel grande gruppo produce più falsi allarmi che veri positivi.",
      },
      {
        question: "Come corrispondono sensibilità e specificità ai dati da inserire?",
        answer:
          "La sensibilità è P(B | A). Il tasso di falsi allarmi P(B | non A) è 100% meno la specificità, quindi una specificità del 97% corrisponde a un tasso di falsi allarmi del 3%.",
      },
      {
        question: "Che cosa mostra la tabella dei 10.000 casi?",
        answer:
          "Trasforma le probabilità in conteggi attesi di veri positivi, falsi positivi, falsi negativi e veri negativi. P(A | B) è il numero di veri positivi diviso per tutti i positivi.",
      },
    ],
    sourcesUsedFor: [
      "Come sensibilità, tasso di falsi positivi e prevalenza si combinano nei valori predittivi tramite una tabella 2×2.",
      "Probabilità condizionate lette da una tabella di conteggi.",
    ],
  },
  text: {
    prior: "Probabilità a priori P(A)",
    priorHelp: "Quanto è probabile A prima di qualsiasi evidenza, per esempio quanto è comune una condizione nel gruppo testato.",
    likelihood: "Verosimiglianza P(B | A)",
    likelihoodHelp: "Quanto spesso compare l'evidenza B quando A è vero, per esempio la sensibilità di un test (tasso di veri positivi).",
    falseAlarm: "Tasso di falsi allarmi P(B | non A)",
    falseAlarmHelp: "Quanto spesso compare B quando A è falso, per esempio il tasso di falsi positivi di un test (100% meno la specificità).",
    zeroEvidence:
      "Con questi valori l'evidenza B non può mai verificarsi (P(B) = 0), quindi P(A | B) non è definita. Porta P(A) o uno dei tassi sopra lo 0%.",
    posterior: "Probabilità a posteriori P(A | B)",
    caption: "La probabilità che A sia vero una volta osservato B.",
    pB: "Probabilità complessiva dell'evidenza P(B)",
    pNotAGivenB: "P(non A | B)",
    pAGivenNotB: "P(A | non B)",
    undefinedNotB: "Non definita: B si verifica sempre, quindi «non B» non accade mai",
    tableCaption: "Su 10.000 casi",
    tableColumns: { outcome: "Esito", cases: "Casi" },
    rows: {
      tp: "Veri positivi (A e B)",
      fp: "Falsi positivi (non A, ma B)",
      fn: "Falsi negativi (A, ma non B)",
      tn: "Veri negativi (né A né B)",
    },
    liftNote: "Osservare B moltiplica le probabilità a favore di A (odds) per {ratio} (il rapporto di verosimiglianza P(B | A) ÷ P(B | non A)).",
    rareNote: "Quando A è raro, la maggior parte dei casi con B può comunque essere un falso allarme anche se il test è accurato.",
    note: "I valori su 10.000 sono conteggi attesi e possono essere frazionari.",
  },
};

export default it;
