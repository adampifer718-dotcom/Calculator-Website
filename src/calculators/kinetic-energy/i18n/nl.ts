import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { KineticEnergyText } from "../text/en";

const nl: CalculatorTranslation<KineticEnergyText> = {
  content: {
    title: "Kinetische-energiecalculator",
    shortTitle: "Kinetische energie",
    summary: "Bereken de kinetische energie van een bewegend voorwerp uit de massa en de snelheid.",
    metaTitle: "Kinetische-energiecalculator – Ek = ½mv²",
    metaDescription:
      "Bereken de kinetische energie uit massa en snelheid in kg of lb en m/s, km/h of mph. Uitkomsten in joule, kilojoule en wattuur.",
    keywords: ["kinetische energie", "bewegingsenergie", "energie", "joule", "massa", "snelheid", "natuurkunde", "1/2 mv2"],
    intro: [
      "Kinetische energie is de energie die een voorwerp heeft doordat het beweegt. Ze neemt toe met het kwadraat van de snelheid, dus bij een twee keer zo hoge snelheid wordt de energie vier keer zo groot.",
      "Vul de massa en de snelheid in met de eenheden die je hebt.",
    ],
    howToUse: [
      "Vul de massa in en kies kilogram of pond.",
      "Vul de snelheid in en kies m/s, km/h of mph.",
      "Lees de kinetische energie af in joule en andere eenheden.",
    ],
    formulas: [{ title: "Kinetische energie", expression: "Ek = ½ × m × v²", explanation: "m in kilogram, v in meter per seconde, Ek in joule." }],
    examples: [
      { title: "1000 kg bij 20 m/s", steps: ["Ek = 0,5 × 1000 × 20²", "= 200.000 J"] },
      { title: "Auto van 1500 kg bij 100 km/h", steps: ["100 km/h ≈ 27,78 m/s", "Ek = 0,5 × 1500 × 27,78² ≈ 578.704 J"] },
    ],
    assumptions: [
      "Gebaseerd op de klassieke mechanica, die nauwkeurig is bij snelheden ver onder de lichtsnelheid.",
      "Rotatie-energie (bijvoorbeeld van wielen) is niet meegerekend.",
    ],
    faqs: [
      {
        question: "Waarom telt snelheid zwaarder dan massa?",
        answer: "Kinetische energie hangt af van het kwadraat van de snelheid. Van 50 naar 100 km/h gaan maakt de energie vier keer zo groot.",
      },
      {
        question: "In welke eenheid wordt kinetische energie gemeten?",
        answer: "In joule (J). Eén joule is één kilogram maal meter kwadraat per seconde kwadraat.",
      },
      {
        question: "Kan kinetische energie negatief zijn?",
        answer: "Nee. Massa is positief en de snelheid wordt gekwadrateerd, dus kinetische energie is nul of positief.",
      },
    ],
    sourcesUsedFor: ["De definitie Ek = ½mv².", "Exacte omrekenfactoren voor pond, km/h en mph."],
  },
  text: {
    mass: "Massa",
    massUnit: "Eenheid van massa",
    massUnits: { kg: "Kilogram (kg)", lb: "Pond (lb)" },
    velocity: "Snelheid",
    velocityUnit: "Eenheid van snelheid",
    velocityUnits: { "m/s": "Meter per seconde (m/s)", "km/h": "Kilometer per uur (km/h)", mph: "Mijl per uur (mph)" },
    energy: "Kinetische energie",
    kj: "In kilojoule",
    wh: "In wattuur",
    mps: "Snelheid in m/s",
    note: "Klassieke (niet-relativistische) kinetische energie, nauwkeurig bij alledaagse snelheden.",
  },
};

export default nl;
