import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ExponentText } from "../text/en";

const nl: CalculatorTranslation<ExponentText> = {
  content: {
    title: "Machtencalculator",
    shortTitle: "Machten",
    summary: "Verhef elk getal tot een macht, ook met negatieve en gebroken exponenten.",
    metaTitle: "Machtencalculator – machten en negatieve exponenten",
    metaDescription:
      "Bereken een getal tot elke macht, ook met negatieve en gebroken exponenten; zeer grote uitkomsten worden in wetenschappelijke notatie getoond.",
    keywords: ["machten berekenen", "exponent", "tot de macht verheffen", "kwadraat", "derde macht", "negatieve exponent", "gebroken exponent"],
    intro: [
      "Een exponent geeft aan hoe vaak je een grondtal met zichzelf vermenigvuldigt. 2¹⁰ betekent tien tweeën met elkaar vermenigvuldigd, wat 1024 oplevert.",
      "Negatieve exponenten geven omgekeerden en gebroken exponenten geven wortels.",
    ],
    howToUse: [
      "Vul het grondtal a in.",
      "Vul de exponent b in. Decimalen en negatieve waarden zijn toegestaan.",
      "Lees aᵇ af. Zeer grote of zeer kleine uitkomsten worden in wetenschappelijke notatie getoond.",
    ],
    formulas: [
      { title: "Positieve exponent", expression: "aᵇ = a × a × … × a (b keer)", explanation: "Voor gehele exponenten." },
      { title: "Negatieve exponent", expression: "a⁻ᵇ = 1 ÷ aᵇ", explanation: "Het grondtal mag niet 0 zijn." },
      { title: "Gebroken exponent", expression: "a^(1/n) = ⁿ√a", explanation: "Bijvoorbeeld 9^0,5 = √9 = 3." },
    ],
    examples: [
      { title: "2 tot de macht 10", steps: ["2 × 2 × … (10 keer)", "= 1024"] },
      { title: "5 tot de macht −2", steps: ["1 ÷ 5²", "= 1 ÷ 25 = 0,04"] },
      { title: "9 tot de macht 0,5", steps: ["9^0,5 = √9", "= 3"] },
    ],
    assumptions: [
      "De uitkomsten zijn reële getallen; een negatief grondtal vereist een gehele exponent.",
      "De uitkomsten worden met 12 significante cijfers weergegeven.",
    ],
    faqs: [
      { question: "Wat is een getal tot de macht 0?", answer: "Elk getal behalve 0 tot de macht 0 is 1." },
      { question: "Wat betekent een negatieve exponent?", answer: "Het omgekeerde: 2⁻³ = 1 ÷ 2³ = 0,125." },
      { question: "Hoe werken gebroken exponenten?", answer: "De noemer geeft een wortel aan: 8^(1/3) is de derdemachtswortel van 8, en dat is 2." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    base: "Grondtal (a)",
    exponent: "Exponent (b)",
    zeroNegative: "0 tot een negatieve macht is niet gedefinieerd.",
    negativeBase: "Een negatief grondtal vereist een gehele exponent voor een reële uitkomst.",
    tooLarge: "Te groot om weer te geven",
    eNotation: "E-notatie",
    negativeNote: "Een negatieve exponent betekent 1 ÷ {base}^{exponent}.",
    positiveNote: "{base} {exponent} keer met zichzelf vermenigvuldigd.",
  },
};

export default nl;
