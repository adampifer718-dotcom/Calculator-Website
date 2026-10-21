import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ScientificNotationText } from "../text/en";

const it: CalculatorTranslation<ScientificNotationText> = {
  content: {
    title: "Calcolatore di notazione scientifica",
    shortTitle: "Notazione scientifica",
    summary: "Converti i numeri in notazione scientifica, ingegneristica ed esponenziale (e), oppure riportali in forma decimale.",
    metaTitle: "Calcolatore di notazione scientifica – Converti numeri",
    metaDescription:
      "Converti qualsiasi numero in notazione scientifica, notazione e e notazione ingegneristica, oppure riporta la notazione e a un normale numero decimale.",
    keywords: ["notazione scientifica", "forma standard", "notazione e", "notazione ingegneristica", "esponente", "potenze di dieci"],
    intro: [
      "La notazione scientifica scrive un numero come un valore compreso tra 1 e 10 moltiplicato per una potenza di dieci, per esempio 1,234 × 10⁵. Rende leggibili i numeri molto grandi e molto piccoli.",
      "Inserisci un numero decimale o in notazione e e il calcolatore mostra tutte le forme più comuni.",
    ],
    howToUse: [
      "Digita un numero come 123400 o 0.00056, oppure una notazione e come 6.02e23.",
      "Leggi la forma scientifica, la notazione e, la forma ingegneristica e quella decimale.",
    ],
    formulas: [
      { title: "Notazione scientifica", expression: "x = a × 10ⁿ, con 1 ≤ |a| < 10", explanation: "Sposta la virgola finché resta una sola cifra diversa da zero alla sua sinistra; n conta gli spostamenti." },
      { title: "Notazione ingegneristica", expression: "x = a × 10ⁿ, con n multiplo di 3", explanation: "Corrisponde ai prefissi delle unità come kilo (10³) e micro (10⁻⁶)." },
    ],
    examples: [
      { title: "123.400", steps: ["Sposta la virgola di 5 posizioni a sinistra", "1,234 × 10⁵"] },
      { title: "0,00056", steps: ["Sposta la virgola di 4 posizioni a destra", "5,6 × 10⁻⁴"] },
    ],
    assumptions: [
      "I numeri vengono convertiti con la doppia precisione di JavaScript, circa 15–17 cifre significative.",
      "Le forme decimali con più di 21 cifre non vengono mostrate.",
    ],
    faqs: [
      {
        question: "Come si scrive un numero in notazione scientifica?",
        answer: "Sposta la virgola in modo che alla sua sinistra resti una sola cifra diversa da zero, poi moltiplica per 10 elevato al numero di posizioni spostate. 4.500 diventa 4,5 × 10³.",
      },
      { question: "Che cosa significa 6.02e23?", answer: "È la notazione e di 6,02 × 10²³. La e sta per «per dieci elevato alla»." },
      {
        question: "Che cos'è la notazione ingegneristica?",
        answer: "È simile alla notazione scientifica, ma l'esponente è sempre un multiplo di 3, in corrispondenza di prefissi come kilo, mega e milli.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    number: "Numero",
    numberHelp: "Un decimale come 0.00056 o una notazione e come 6.02e23. Usa il punto per i decimali.",
    invalid: "Inserisci un numero come 123400, 0.00056 o 6.02e23.",
    tooLarge: "Inserisci un numero inferiore a 1,8 × 10³⁰⁸.",
    scientific: "Notazione scientifica",
    eNotation: "Notazione e",
    engineering: "Notazione ingegneristica",
    decimal: "Forma decimale",
    tooLong: "Troppo lungo da mostrare",
  },
};

export default it;
