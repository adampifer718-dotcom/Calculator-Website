import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ExponentText } from "../text/en";

const it: CalculatorTranslation<ExponentText> = {
  content: {
    title: "Calcolatore di potenze ed esponenti",
    shortTitle: "Esponenti",
    summary: "Eleva qualsiasi numero a una potenza, anche con esponenti negativi e frazionari.",
    metaTitle: "Calcolatore di esponenti – Potenze ed esponenti negativi",
    metaDescription:
      "Calcola un numero elevato a qualsiasi potenza, anche con esponenti negativi e frazionari; i risultati molto grandi sono mostrati in notazione scientifica.",
    keywords: ["calcolatore di potenze", "esponente", "elevare a potenza", "al quadrato", "al cubo", "esponente negativo", "esponente frazionario"],
    intro: [
      "Un esponente indica quante volte moltiplicare una base per sé stessa. 2¹⁰ significa dieci 2 moltiplicati tra loro, cioè 1.024.",
      "Gli esponenti negativi danno i reciproci e quelli frazionari danno le radici.",
    ],
    howToUse: [
      "Inserisci la base a.",
      "Inserisci l'esponente b. Sono ammessi decimali e valori negativi.",
      "Leggi aᵇ. I risultati molto grandi o molto piccoli passano alla notazione scientifica.",
    ],
    formulas: [
      { title: "Esponente positivo", expression: "aᵇ = a × a × … × a (b volte)", explanation: "Per esponenti interi." },
      { title: "Esponente negativo", expression: "a⁻ᵇ = 1 ÷ aᵇ", explanation: "La base non può essere 0." },
      { title: "Esponente frazionario", expression: "a^(1/n) = ⁿ√a", explanation: "Ad esempio, 9^0,5 = √9 = 3." },
    ],
    examples: [
      { title: "2 elevato alla 10", steps: ["2 × 2 × … (10 volte)", "= 1.024"] },
      { title: "5 elevato alla −2", steps: ["1 ÷ 5²", "= 1 ÷ 25 = 0,04"] },
      { title: "9 elevato alla 0,5", steps: ["9^0,5 = √9", "= 3"] },
    ],
    assumptions: [
      "I risultati sono numeri reali; una base negativa richiede un esponente intero.",
      "I risultati sono mostrati con 12 cifre significative.",
    ],
    faqs: [
      { question: "Quanto fa un numero elevato alla 0?", answer: "Qualsiasi numero diverso da zero elevato alla 0 dà 1." },
      { question: "Che cosa significa un esponente negativo?", answer: "Indica il reciproco: 2⁻³ = 1 ÷ 2³ = 0,125." },
      { question: "Come funzionano gli esponenti frazionari?", answer: "Il denominatore indica una radice: 8^(1/3) è la radice cubica di 8, cioè 2." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    base: "Base (a)",
    exponent: "Esponente (b)",
    zeroNegative: "0 elevato a una potenza negativa non è definito.",
    negativeBase: "Con una base negativa serve un esponente intero per ottenere un risultato reale.",
    tooLarge: "Troppo grande per essere mostrato",
    eNotation: "Notazione E",
    negativeNote: "Un esponente negativo significa 1 ÷ {base}^{exponent}.",
    positiveNote: "{base} moltiplicato per sé stesso {exponent} volte.",
  },
};

export default it;
