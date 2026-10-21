import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OhmsLawText } from "../text/en";

const nl: CalculatorTranslation<OhmsLawText> = {
  content: {
    title: "Wet van Ohm-calculator",
    shortTitle: "Wet van Ohm",
    summary: "Bereken spanning, stroom, weerstand en vermogen uit twee willekeurige waarden van V, I en R.",
    metaTitle: "Wet van Ohm-calculator – Spanning, stroom, weerstand",
    metaDescription:
      "Gebruik de wet van Ohm om spanning, stroom of weerstand te berekenen uit de andere twee waarden, plus het gedissipeerde vermogen, met formules en voorbeelden.",
    keywords: ["wet van ohm", "weerstand berekenen", "spanning", "stroomsterkte", "elektrisch vermogen", "volt ampère ohm"],
    intro: [
      "De wet van Ohm legt het verband tussen de spanning over een weerstand, de stroom erdoor en de weerstand zelf: V = I × R.",
      "Vul twee willekeurige waarden in om de derde te vinden, samen met het vermogen dat de component dissipeert.",
    ],
    howToUse: [
      "Kies welke twee waarden je kent.",
      "Vul ze in in volt, ampère of ohm.",
      "Lees de ontbrekende waarde af en het vermogen in watt.",
    ],
    formulas: [
      { title: "Wet van Ohm", expression: "V = I × R\nI = V ÷ R\nR = V ÷ I", explanation: "V in volt, I in ampère, R in ohm." },
      { title: "Vermogen", expression: "P = V × I = I² × R = V² ÷ R", explanation: "Vermogen in watt." },
    ],
    examples: [
      { title: "12 V over 4 Ω", steps: ["I = 12 ÷ 4 = 3 A", "P = 12 × 3 = 36 W"] },
      { title: "0,5 A door 220 Ω", steps: ["V = 0,5 × 220", "= 110 V"] },
    ],
    assumptions: [
      "Geldt voor ohmse componenten waarvan de weerstand niet verandert met de stroom.",
      "Gebruik bij wisselstroomkringen met reactantie (condensatoren, spoelen) de impedantie.",
      "Werken aan circuits op netspanning is gevaarlijk; volg de lokale elektrotechnische voorschriften en schakel een erkende elektricien in.",
    ],
    faqs: [
      { question: "Wat zegt de wet van Ohm?", answer: "De stroom door een geleider is evenredig met de spanning erover: V = I × R." },
      { question: "Hoe bereken ik het vermogen uit stroom en weerstand?", answer: "P = I² × R. Een stroom van 2 A door 10 Ω dissipeert 40 W." },
      {
        question: "Geldt de wet van Ohm voor leds?",
        answer: "Niet rechtstreeks. Leds zijn niet-lineair, dus gebruik de doorlaatspanning en bereken een voorschakelweerstand.",
      },
    ],
    sourcesUsedFor: ["De wet van Ohm en de beperkingen ervan.", "Vermogensformules P = IV = I²R = V²/R."],
  },
  text: {
    known: "Ik ken",
    knownOptions: { VR: "Spanning en weerstand", VI: "Spanning en stroom", IR: "Stroom en weerstand" },
    voltage: "Spanning (V)",
    current: "Stroom (I)",
    resistance: "Weerstand (R)",
    currentOut: "Stroom (I = V ÷ R)",
    resistanceOut: "Weerstand (R = V ÷ I)",
    voltageOut: "Spanning (V = I × R)",
    power: "Vermogen (P = V × I)",
    voltageShort: "Spanning",
    currentShort: "Stroom",
    resistanceShort: "Weerstand",
    note: "Geldt voor ohmse (lineaire) componenten en gelijkstroomkringen, of voor effectieve waarden bij zuiver resistieve wisselstroombelastingen.",
  },
};

export default nl;
