import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentErrorText } from "../text/en";

const it: CalculatorTranslation<PercentErrorText> = {
  content: {
    title: "Calcolatore dell'errore percentuale",
    shortTitle: "Errore percentuale",
    summary: "Confronta un valore misurato con il valore vero tramite l'errore percentuale, con l'errore assoluto e l'errore relativo con segno.",
    metaTitle: "Calcolatore errore percentuale – Valore misurato e vero",
    metaDescription:
      "Calcola l'errore percentuale tra un valore misurato e quello vero, con l'errore assoluto, l'errore relativo con segno e se hai sovrastimato o sottostimato.",
    keywords: [
      "errore percentuale",
      "percentuale di errore",
      "errore relativo",
      "errore assoluto",
      "valore sperimentale",
      "valore accettato",
      "relazione di laboratorio",
      "accuratezza",
    ],
    intro: [
      "L'errore percentuale indica quanto una misura si è discostata dal valore che avrebbe dovuto dare, in proporzione a quel valore vero. È un modo comune per esprimere l'accuratezza nel lavoro di laboratorio.",
      "Inserisci ciò che hai misurato e il valore accettato. Oltre all'errore percentuale, il calcolatore mostra l'entità dell'errore in sé e se il tuo risultato è venuto troppo alto o troppo basso.",
    ],
    howToUse: [
      "Inserisci il valore misurato (sperimentale).",
      "Inserisci il valore vero (accettato o teorico) nella stessa unità. Non può essere 0.",
      "Leggi l'errore percentuale. Più bassa è la percentuale, più accurata è la misura.",
      "Usa l'errore relativo con segno o la riga sulla direzione per capire se hai sovrastimato o sottostimato.",
    ],
    formulas: [
      {
        title: "Errore percentuale",
        expression: "errore percentuale = |misurato − vero| ÷ |vero| × 100 %",
        explanation: "L'entità dell'errore come percentuale del valore vero. È sempre zero o positivo.",
      },
      { title: "Errore assoluto", expression: "errore assoluto = |misurato − vero|", explanation: "L'errore nell'unità di misura originale." },
      {
        title: "Errore relativo con segno",
        expression: "errore relativo = (misurato − vero) ÷ |vero| × 100 %",
        explanation: "È positivo quando la misura è troppo alta e negativo quando è troppo bassa.",
      },
    ],
    examples: [
      {
        title: "Misurare l'accelerazione di gravità con un pendolo",
        steps: [
          "Errore assoluto = |9,62 − 9,81| = 0,19 m/s²",
          "Errore percentuale = 0,19 ÷ 9,81 × 100 % ≈ 1,9368 %",
          "L'errore relativo con segno è circa −1,9368 %, quindi la misura è bassa.",
        ],
      },
      {
        title: "Cronometrare la velocità del suono",
        steps: ["Errore assoluto = |342,5 − 343| = 0,5 m/s", "Errore percentuale = 0,5 ÷ 343 × 100 % ≈ 0,1458 %"],
      },
      {
        title: "Un valore di riferimento negativo: il potenziale dell'elettrodo di zinco",
        steps: [
          "Errore assoluto = |−0,79 − (−0,76)| = 0,03 V",
          "Errore percentuale = 0,03 ÷ |−0,76| × 100 % ≈ 3,9474 %",
          "La misura è sotto il valore accettato, quindi l'errore relativo con segno è circa −3,9474 %.",
        ],
      },
    ],
    assumptions: [
      "Entrambi i valori usano la stessa unità. L'errore percentuale è adimensionale, mentre l'errore assoluto è nell'unità che hai inserito.",
      "Si divide per il valore assoluto del valore vero, quindi l'errore percentuale resta positivo anche se il valore di riferimento è negativo.",
      "L'errore percentuale non ha senso per grandezze su scale di intervallo con uno zero arbitrario, come le temperature in °C o °F, a meno che tu non abbia un motivo per confrontarti con quello zero. I kelvin evitano il problema.",
    ],
    faqs: [
      {
        question: "L'errore percentuale può essere negativo?",
        answer:
          "Con la definizione usuale no, perché usa il valore assoluto della differenza. Alcuni corsi mantengono il segno per mostrare la direzione; qui quella versione compare come errore relativo con segno.",
      },
      {
        question: "Che cosa si considera un buon errore percentuale?",
        answer:
          "Dipende dall'esperimento e dagli strumenti. In molte esercitazioni scolastiche pochi punti percentuali sono un buon risultato, mentre le misure di precisione puntano a molto meno. Chiedi quale tolleranza prevede il tuo corso o il tuo metodo.",
      },
      {
        question: "Che differenza c'è tra errore percentuale e differenza percentuale?",
        answer:
          "L'errore percentuale confronta una misura con un valore vero noto. La differenza percentuale confronta due misure tra loro, di solito dividendo per la loro media, quando nessuna delle due è il riferimento.",
      },
    ],
    sourcesUsedFor: ["Definizione dell'errore percentuale come errore assoluto diviso per il valore accettato, per 100 %."],
  },
  text: {
    measured: "Valore misurato",
    measuredHelp: "Il valore sperimentale o osservato.",
    trueValue: "Valore vero",
    trueHelp: "Il valore accettato, teorico o di riferimento. Non può essere 0.",
    trueZero: "Il valore vero non può essere 0, perché l'errore percentuale si divide per esso.",
    percentError: "Errore percentuale",
    absoluteError: "Errore assoluto |misurato − vero|",
    relativeError: "Errore relativo con segno",
    direction: "Direzione",
    over: "La misura è sopra il valore vero (sovrastima).",
    under: "La misura è sotto il valore vero (sottostima).",
    exact: "La misura coincide con il valore vero.",
    note: "L'errore percentuale usa l'entità dell'errore, quindi non è mai negativo. L'errore relativo con segno conserva la direzione.",
  },
};

export default it;
