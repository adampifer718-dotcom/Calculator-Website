import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PythagoreanText } from "../text/en";

const it: CalculatorTranslation<PythagoreanText> = {
  content: {
    title: "Calcolatore del teorema di Pitagora",
    shortTitle: "Teorema di Pitagora",
    summary: "Trova il lato mancante di un triangolo rettangolo con a² + b² = c².",
    metaTitle: "Calcolatore teorema di Pitagora – Trova il lato mancante",
    metaDescription:
      "Calcola l'ipotenusa o il cateto mancante di un triangolo rettangolo con il teorema di Pitagora a² + b² = c², oltre all'area e al perimetro del triangolo.",
    keywords: ["teorema di Pitagora", "calcolo ipotenusa", "calcolo cateto", "triangolo rettangolo", "a2 + b2 = c2", "Pitagora"],
    intro: [
      "In un triangolo rettangolo il quadrato dell'ipotenusa è uguale alla somma dei quadrati degli altri due lati: a² + b² = c².",
      "Inserisci due lati per trovare il terzo. Il calcolatore mostra anche l'area e il perimetro del triangolo.",
    ],
    howToUse: [
      "Scegli se vuoi trovare l'ipotenusa o un cateto.",
      "Inserisci i due lati noti nella stessa unità.",
      "Leggi il lato mancante, l'area e il perimetro.",
    ],
    formulas: [
      { title: "Ipotenusa", expression: "c = √(a² + b²)", explanation: "L'ipotenusa è il lato più lungo, opposto all'angolo retto." },
      { title: "Cateto mancante", expression: "a = √(c² − b²)", explanation: "L'ipotenusa deve essere più lunga del cateto noto." },
    ],
    examples: [
      {
        title: "Cateti di 3 e 4",
        steps: ["c = √(3² + 4²) = √25", "= 5"],
      },
      {
        title: "Ipotenusa di 13 e cateto di 5",
        steps: ["a = √(13² − 5²) = √144", "= 12"],
      },
    ],
    assumptions: [
      "Il triangolo ha un angolo retto.",
      "Tutti i lati usano la stessa unità; i risultati sono mostrati con 6 decimali.",
    ],
    faqs: [
      {
        question: "Il teorema di Pitagora vale per tutti i triangoli?",
        answer: "No, solo per i triangoli rettangoli. Per gli altri triangoli serve il teorema del coseno (di Carnot).",
      },
      {
        question: "Che cos'è una terna pitagorica?",
        answer: "Tre numeri interi che soddisfano a² + b² = c², come 3, 4, 5 oppure 5, 12, 13.",
      },
      { question: "Qual è l'ipotenusa?", answer: "Il lato più lungo, opposto all'angolo retto." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    solve: "Trova",
    modes: { hypotenuse: "L'ipotenusa (c) dai due cateti", leg: "Un cateto dall'ipotenusa e dall'altro cateto" },
    a: "Cateto a",
    b: "Cateto b",
    c: "Ipotenusa c",
    leg: "Cateto noto",
    legTooLong: "Un cateto deve essere più corto dell'ipotenusa.",
    missingLeg: "Cateto mancante",
    hypotenuse: "Ipotenusa (c)",
    area: "Area del triangolo",
    perimeter: "Perimetro",
  },
};

export default it;
