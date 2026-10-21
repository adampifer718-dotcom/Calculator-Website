import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LogText } from "../text/en";

const it: CalculatorTranslation<LogText> = {
  content: {
    title: "Calcolatore di logaritmi",
    shortTitle: "Logaritmo",
    summary: "Calcola logaritmi in base 10, in base e (logaritmo naturale), in base 2 o in qualsiasi altra base.",
    metaTitle: "Calcolatore di logaritmi – Logaritmo in qualsiasi base",
    metaDescription:
      "Calcola il logaritmo in base 10, il logaritmo naturale (ln), il logaritmo in base 2 o in qualsiasi base, con la formula del cambio di base ed esempi svolti.",
    keywords: ["calcolatore di logaritmi", "logaritmo", "logaritmo naturale", "ln", "logaritmo in base 2", "log10", "cambiamento di base"],
    intro: [
      "Un logaritmo risponde alla domanda: a quale potenza bisogna elevare la base per ottenere questo numero? log₁₀(1000) = 3 perché 10³ = 1000.",
      "Scegli una base comune o inserisci la tua. Vengono mostrati anche il logaritmo naturale, decimale e binario.",
    ],
    howToUse: [
      "Inserisci un numero positivo x.",
      "Scegli la base, oppure seleziona Altra base e inseriscila.",
      "Leggi il logaritmo e i valori di ln, log₁₀ e log₂.",
    ],
    formulas: [
      { title: "Definizione", expression: "log_b(x) = y  significa  bʸ = x", explanation: "Il numero e la base devono essere positivi e la base non può essere 1." },
      { title: "Cambiamento di base", expression: "log_b(x) = ln(x) ÷ ln(b)", explanation: "Qualsiasi logaritmo si può calcolare dai logaritmi naturali." },
    ],
    examples: [
      { title: "log₁₀ di 1000", steps: ["10³ = 1000", "Quindi log₁₀(1000) = 3"] },
      { title: "log₂ di 8", steps: ["2³ = 8", "Quindi log₂(8) = 3"] },
      { title: "Logaritmo in base 3 di 81", steps: ["ln(81) ÷ ln(3) = 4,394 ÷ 1,099", "= 4, perché 3⁴ = 81"] },
    ],
    assumptions: [
      "I logaritmi sono definiti solo per numeri positivi e per basi positive diverse da 1.",
      "I risultati sono mostrati con 12 cifre significative.",
    ],
    faqs: [
      { question: "Qual è la differenza tra log e ln?", answer: "log indica di solito la base 10, mentre ln indica la base e (circa 2,71828), cioè il logaritmo naturale." },
      { question: "Perché non posso calcolare il logaritmo di un numero negativo?", answer: "Nessuna potenza reale di una base positiva dà un numero negativo o zero, quindi il logaritmo non è definito nei numeri reali." },
      { question: "A che cosa serve il logaritmo in base 2?", answer: "Conta i raddoppi e compare in informatica, ad esempio nel numero di bit necessari per rappresentare un valore." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    value: "Numero (x)",
    base: "Base",
    bases: { ten: "10 (logaritmo decimale)", e: "e (logaritmo naturale, ln)", two: "2 (logaritmo binario)", custom: "Altra base" },
    customBase: "Base personalizzata (b)",
    baseOne: "La base non può essere 1.",
    primaryNatural: "log di x",
    primaryBase: "logaritmo in base {base} di x",
    caption: "{base} elevato a questa potenza è uguale a {value}.",
    ln: "Logaritmo naturale (ln x)",
    log10: "Logaritmo decimale (log₁₀ x)",
    log2: "Logaritmo binario (log₂ x)",
  },
};

export default it;
