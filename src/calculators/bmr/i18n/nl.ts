import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BmrText } from "../text/en";

const nl: CalculatorTranslation<BmrText> = {
  content: {
    title: "BMR-calculator (basaal metabolisme)",
    shortTitle: "BMR",
    summary: "Schat je basaal metabolisme (calorieën in rust) met de formule van Mifflin–St Jeor.",
    metaTitle: "BMR-calculator – Formule van Mifflin-St Jeor",
    metaDescription:
      "Schat je basaal metabolisme (BMR) in kcal en kJ per dag met de formule van Mifflin–St Jeor, in metrische of imperiale eenheden.",
    keywords: ["bmr berekenen", "basaal metabolisme", "calorieën", "rustmetabolisme", "mifflin st jeor", "energieverbruik", "kcal"],
    intro: [
      "Het basaal metabolisme (BMR) is de energie die je lichaam in volledige rust verbruikt om je in leven te houden. Het is het vertrekpunt om je dagelijkse caloriebehoefte te schatten.",
      "Deze calculator gebruikt de formule van Mifflin–St Jeor, een veelgebruikte schatting voor gezonde volwassenen.",
    ],
    howToUse: [
      "Kies metrische of imperiale eenheden.",
      "Kies het geslacht dat in de formule wordt gebruikt en vul je leeftijd in.",
      "Vul je gewicht en lengte in.",
      "Lees je geschatte BMR af in kcal en kJ per dag.",
    ],
    formulas: [
      { title: "Mifflin–St Jeor", expression: "BMR = 10 × gewicht (kg) + 6,25 × lengte (cm) − 5 × leeftijd (jaar) + s\ns = +5 voor mannen, −161 voor vrouwen", explanation: "Resultaat in kilocalorieën per dag." },
      { title: "Energie-eenheden", expression: "1 kcal = 4,184 kJ", explanation: "De thermochemische calorie." },
    ],
    examples: [
      {
        title: "Man, 30 jaar, 80 kg, 180 cm",
        steps: ["10 × 80 + 6,25 × 180 − 5 × 30 + 5", "= 800 + 1.125 − 150 + 5 = 1.780 kcal/dag"],
      },
      {
        title: "Vrouw, 25 jaar, 60 kg, 165 cm",
        steps: ["10 × 60 + 6,25 × 165 − 5 × 25 − 161", "≈ 1.345 kcal/dag"],
      },
    ],
    assumptions: [
      "Voor gezonde volwassenen. Niet geschikt voor kinderen, zwangerschap of mensen met een aandoening die de stofwisseling beïnvloedt.",
      "Formules schatten gemiddelden; je persoonlijke BMR kan 10% of meer afwijken.",
      "Dit is geen medisch of voedingsadvies. Overleg met een zorgprofessional of diëtist.",
    ],
    faqs: [
      { question: "Wat is het verschil tussen BMR en dagelijkse caloriebehoefte?", answer: "BMR dekt alleen rust. De dagelijkse behoefte telt daar de energie voor beweging en spijsvertering bij op, dus die is hoger." },
      { question: "Waarom gebruikt de formule het geslacht?", answer: "Het oorspronkelijke onderzoek bepaalde aparte constanten voor mannen en vrouwen, omdat de lichaamssamenstelling gemiddeld verschilt." },
      { question: "Waarom daalt de BMR met de leeftijd?", answer: "Spiermassa en stofwisseling nemen met de jaren meestal af; dat weerspiegelt de term −5 × leeftijd." },
    ],
    sourcesUsedFor: ["De formule van Mifflin–St Jeor en de coëfficiënten ervan."],
  },
  text: {
    units: "Eenheden",
    unitOptions: { metric: "Metrisch (kg, cm)", imperial: "Imperiaal (lb, ft, in)" },
    sex: "Geslacht in de formule",
    sexHelp: "De formule heeft aparte constanten voor mannen en vrouwen.",
    sexes: { male: "Man", female: "Vrouw" },
    age: "Leeftijd",
    weight: "Gewicht",
    height: "Lengte",
    heightFt: "Lengte (voet)",
    heightIn: "Lengte (inch)",
    heightZero: "Vul een lengte groter dan 0 in.",
    bmr: "Basaal metabolisme",
    caption: "Geschatte energie die in volledige rust wordt verbruikt.",
    kj: "In kilojoule",
    kcalDay: "kcal/dag",
    kjDay: "kJ/dag",
    note: "Een schatting voor gezonde volwassenen. Persoonlijke resultaten kunnen 10% of meer afwijken; het is geen voorschrift voor een dieet of behandeling.",
  },
};

export default nl;
