import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DoublingTimeText } from "../text/en";

const nl: CalculatorTranslation<DoublingTimeText> = {
  content: {
    title: "Verdubbelingstijdcalculator",
    shortTitle: "Verdubbelingstijd",
    summary: "Bereken de verdubbelingstijd (generatietijd) en de groeisnelheid van een exponentieel groeiende populatie.",
    metaTitle: "Verdubbelingstijdcalculator – Generatietijd en groei",
    metaDescription:
      "Bereken de verdubbelingstijd, het aantal generaties en de groeisnelheid van een populatie, zoals bacteriën in een cultuur, uit begin- en eindaantal.",
    keywords: ["verdubbelingstijd", "generatietijd", "bacteriegroei", "exponentiële groei", "populatie", "groeisnelheid", "biologie"],
    intro: [
      "Bij exponentiële groei verdubbelt een populatie in een vast tempo. De verdubbelingstijd (of generatietijd) is hoe lang elke verdubbeling duurt.",
      "Vul het begin- en eindaantal in en de tijd die ertussen zit.",
    ],
    howToUse: [
      "Vul het beginaantal in.",
      "Vul het eindaantal in; dat moet hoger zijn.",
      "Vul de verstreken tijd in en kies de eenheid.",
      "Lees de verdubbelingstijd, het aantal generaties en de groeisnelheid af.",
    ],
    formulas: [
      { title: "Generaties", expression: "n = log₂(N ÷ N₀)", explanation: "Het aantal verdubbelingen dat nodig is om van N₀ naar N te gaan." },
      { title: "Verdubbelingstijd", expression: "g = t ÷ n", explanation: "Verstreken tijd gedeeld door het aantal generaties." },
      { title: "Groeiconstante", expression: "k = ln(N ÷ N₀) ÷ t", explanation: "Gebruikt in N = N₀ × e^(k·t)." },
    ],
    examples: [
      {
        title: "Van 1.000 naar 64.000 cellen in 6 uur",
        steps: ["N ÷ N₀ = 64, dus n = log₂ 64 = 6", "g = 6 h ÷ 6 = 1 uur"],
      },
      {
        title: "Van 500 naar 2.000 in 90 minuten",
        steps: ["n = log₂ 4 = 2", "g = 90 ÷ 2 = 45 minuten"],
      },
    ],
    assumptions: [
      "Gaat uit van constante exponentiële groei, zoals de logfase van een cultuur; de lag-, stationaire en afstervingsfase worden niet gemodelleerd.",
      "Aantallen kunnen cellen zijn, kolonievormende eenheden, optische dichtheid als benadering of elke andere grootheid die exponentieel groeit.",
    ],
    faqs: [
      { question: "Wat is generatietijd?", answer: "De tijd waarin een populatie verdubbelt, voor E. coli onder ideale laboratoriumomstandigheden vaak ongeveer 20 minuten." },
      { question: "Waarom logaritmen?", answer: "Bij exponentiële groei wordt de populatie elke generatie met 2 vermenigvuldigd, dus log₂ telt het aantal verdubbelingen." },
      { question: "Werkt dit ook voor geld of voor bevolkingen van mensen?", answer: "De wiskunde is hetzelfde voor elke gelijkmatige exponentiële groei, maar echte bevolkingen groeien zelden in een constant tempo." },
    ],
    sourcesUsedFor: ["Generatietijd en exponentiële groei van bacteriepopulaties."],
  },
  text: {
    initial: "Beginaantal (N₀)",
    final: "Eindaantal (N)",
    time: "Verstreken tijd",
    unit: "Tijdseenheid",
    units: { minutes: "Minuten", hours: "Uren", days: "Dagen" },
    unitWords: { minutes: "minuten", hours: "uur", days: "dagen" },
    perUnit: { minutes: "per minuut", hours: "per uur", days: "per dag" },
    notGrowth: "Voor groei moet het eindaantal groter zijn dan het beginaantal.",
    doubling: "Verdubbelingstijd",
    generations: "Aantal verdubbelingen (generaties)",
    rate: "Groeiconstante (k)",
    fold: "Vermenigvuldigingsfactor (N ÷ N₀)",
    note: "Gaat uit van gelijkmatige exponentiële groei over de hele periode, zoals de logfase van een bacteriecultuur.",
  },
};

export default nl;
