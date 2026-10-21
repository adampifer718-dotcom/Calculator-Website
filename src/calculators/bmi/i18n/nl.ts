import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BmiText } from "../text/en";

const nl: CalculatorTranslation<BmiText> = {
  content: {
    title: "BMI-calculator",
    shortTitle: "BMI",
    summary: "Bereken de body mass index uit lengte en gewicht in metrische of imperiale eenheden.",
    metaTitle: "BMI-calculator – Body mass index voor volwassenen",
    metaDescription:
      "Bereken je body mass index (BMI) uit lengte en gewicht in kg en cm of in pond, voet en inch, met de BMI-categorie voor volwassenen en het gezonde gewicht.",
    keywords: ["bmi berekenen", "body mass index", "gezond gewicht", "overgewicht", "gewicht", "lengte", "obesitas"],
    intro: [
      "De body mass index (BMI) vergelijkt gewicht met lengte. Het is een snelle screeningsmaat voor volwassenen, geen diagnose.",
      "Vul je lengte en gewicht in metrische of imperiale eenheden in om je BMI te zien, de categorie voor volwassenen en het gewichtsbereik dat bij jouw lengte hoort bij een gezonde BMI.",
    ],
    howToUse: ["Kies metrische of imperiale eenheden.", "Vul je gewicht en lengte in.", "Lees je BMI, je categorie en je gezonde gewichtsbereik af."],
    formulas: [
      { title: "BMI", expression: "BMI = gewicht (kg) ÷ lengte (m)²", explanation: "Imperiale eenheden worden omgerekend met 1 lb = 0,45359237 kg en 1 in = 2,54 cm." },
      { title: "Categorieën voor volwassenen", expression: "Onder 18,5: ondergewicht\n18,5–24,9: gezond gewicht\n25–29,9: overgewicht\n30 of meer: obesitas", explanation: "Categorieën van de Wereldgezondheidsorganisatie voor volwassenen." },
    ],
    examples: [
      {
        title: "70 kg, 175 cm",
        steps: ["Lengte = 1,75 m", "BMI = 70 ÷ 1,75² ≈ 22,9, gezond gewicht"],
      },
      {
        title: "180 lb, 5 ft 10 in",
        steps: ["180 lb = 81,65 kg; 70 in = 1,778 m", "BMI = 81,65 ÷ 1,778² ≈ 25,8, overgewicht"],
      },
    ],
    assumptions: [
      "Voor volwassenen vanaf 18 jaar. Voor kinderen en tieners gelden percentielen per leeftijd en geslacht.",
      "BMI meet lichaamsvet niet rechtstreeks en kan sporters, ouderen en zwangeren verkeerd indelen.",
      "Dit is geen medisch advies. Bespreek je gezondheid met een zorgprofessional.",
    ],
    faqs: [
      { question: "Wat is een gezonde BMI?", answer: "Voor de meeste volwassenen 18,5 tot 24,9." },
      { question: "Is BMI nauwkeurig?", answer: "Het is een nuttig screeningsinstrument voor bevolkingsgroepen, maar het maakt geen onderscheid tussen spieren en vet en houdt geen rekening met waar het vet zit." },
      { question: "Werkt BMI voor kinderen?", answer: "Niet met de categorieën voor volwassenen. De BMI van kinderen wordt vergeleken met groeicurven voor hun leeftijd en geslacht." },
    ],
    sourcesUsedFor: ["Definitie van BMI bij volwassenen en de grenswaarden van de categorieën.", "Exacte omrekeningsfactoren voor pond en inch."],
  },
  text: {
    units: "Eenheden",
    unitOptions: { metric: "Metrisch (kg, cm)", imperial: "Imperiaal (lb, ft, in)" },
    weight: "Gewicht",
    height: "Lengte",
    heightFt: "Lengte (voet)",
    heightIn: "Lengte (inch)",
    heightZero: "Vul een lengte groter dan 0 in.",
    primary: "Body mass index",
    caption: "{category} (bereik voor volwassenen).",
    category: "Categorie",
    categories: { under: "Ondergewicht", healthy: "Gezond gewicht", over: "Overgewicht", obese: "Obesitas" },
    healthyRange: "Gezond gewicht voor deze lengte",
    range: "{low}–{high} {unit}",
    note: "Categorieën voor volwassenen: onder 18,5 ondergewicht, 18,5–24,9 gezond, 25–29,9 overgewicht, 30 of meer obesitas. BMI geldt niet op dezelfde manier voor kinderen, zwangeren of zeer gespierde mensen.",
  },
};

export default nl;
