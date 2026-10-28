import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CaloriesBurnedText } from "../text/en";

const nl: CalculatorTranslation<CaloriesBurnedText> = {
  content: {
    title: "Calorieverbruikcalculator voor sport en beweging",
    shortTitle: "Calorieverbruik",
    summary: "Schat hoeveel calorieën je verbrandt met wandelen, hardlopen, fietsen, zwemmen en andere activiteiten op basis van MET-waarden, lichaamsgewicht en duur.",
    metaTitle: "Calorieverbruikcalculator – MET-methode per activiteit",
    metaDescription:
      "Schat hoeveel calorieën je verbrandt met wandelen, hardlopen, fietsen, zwemmen en meer, uit gepubliceerde MET-waarden, je gewicht en de duur.",
    keywords: ["calorieverbruik", "calorieën verbranden", "MET-waarde", "metabool equivalent", "energieverbruik sport", "kcal per uur", "compendium of physical activities"],
    intro: [
      "Een MET (metabool equivalent) vergelijkt het energieverbruik van een activiteit met rustig zitten. Stevig wandelen is ongeveer 4 MET, dus het kost ruwweg vier keer zoveel energie als rust.",
      "Deze calculator vermenigvuldigt de MET-waarde van een activiteit met je lichaamsgewicht en de duur om de verbrande calorieën te schatten. Kies een van de gangbare activiteiten, met waarden uit het Compendium of Physical Activities, of vul zelf een MET-waarde in.",
    ],
    howToUse: [
      "Kies een activiteit, of kies een eigen MET-waarde en vul die in.",
      "Vul je lichaamsgewicht in kilogram of pond in.",
      "Vul in hoeveel uren en minuten je de activiteit deed.",
      "Lees de geschatte verbrande calorieën, de kilojoules en het verbruik per uur af.",
    ],
    formulas: [
      { title: "MET-methode", expression: "kcal = MET × gewicht (kg) × tijd (h)", explanation: "Gaat uit van de afspraak dat 1 MET ongeveer 1 kcal per kilogram lichaamsgewicht per uur is." },
      { title: "Boven rustniveau", expression: "netto kcal = (MET − 1) × gewicht (kg) × tijd (h)", explanation: "Laat de energie weg die je in rust toch al zou hebben verbruikt." },
      { title: "Eenheden", expression: "1 lb = 0,45359237 kg · 1 kcal = 4,184 kJ", explanation: "Exacte omrekenfactoren." },
    ],
    examples: [
      {
        title: "45 minuten stevig wandelen bij 70 kg",
        steps: ["Stevig wandelen (3,5 mph) = 4,3 MET", "4,3 × 70 × 0,75 = 225,75 ≈ 226 kcal", "In kilojoule: 225,75 × 4,184 ≈ 945 kJ"],
      },
      {
        title: "1 h 30 min hardlopen op 6 mph bij 180 lb",
        steps: ["180 lb × 0,45359237 = 81,65 kg", "9,8 × 81,65 × 1,5 ≈ 1.200 kcal", "Dat is ongeveer 800 kcal per uur"],
      },
      {
        title: "Eigen activiteit van 6,5 MET gedurende 2 uur bij 55 kg",
        steps: ["6,5 × 55 × 2 = 715 kcal", "Boven rustniveau: (6,5 − 1) × 55 × 2 = 605 kcal"],
      },
    ],
    assumptions: [
      "Het resultaat is een schatting, geen medisch advies, en deze calculator is nog niet professioneel beoordeeld. Overleg met een arts voordat je aan een nieuw trainingsprogramma begint.",
      "MET-waarden zijn gemiddelden voor volwassenen. Conditie, techniek, terrein, lichaamssamenstelling en temperatuur veranderen allemaal het werkelijke energieverbruik, dus individuele resultaten verschillen.",
      "De berekening gebruikt de afspraak dat 1 MET ≈ 1 kcal per kg per uur. Het gemeten energieverbruik in rust verschilt tussen mensen, wat de onzekerheid vergroot.",
      "De MET-waarden komen uit het Compendium of Physical Activities van 2011. De update van 2024 heeft sommige activiteiten gewijzigd, dus waarden uit andere tools kunnen iets afwijken.",
    ],
    faqs: [
      { question: "Wat is een MET?", answer: "Een MET is het energieverbruik van een activiteit vergeleken met rustig zitten. Een activiteit van 6 MET kost ongeveer zes keer zoveel energie als rust." },
      { question: "Waarom telt het lichaamsgewicht mee?", answer: "Een zwaarder lichaam bewegen kost meer energie, dus dezelfde activiteit even lang verbrandt meer calorieën bij een zwaarder persoon." },
      { question: "Zijn de cijfers van een fitnesstracker nauwkeuriger?", answer: "Trackers gebruiken ook hartslaggegevens, wat kan helpen, maar ook dat zijn schattingen. Beide methoden zijn het meest geschikt om activiteiten te vergelijken, niet als exacte cijfers." },
    ],
    sourcesUsedFor: [
      "De MET-waarden van de genoemde activiteiten en de afspraak dat 1 MET ongeveer 1 kcal per kg per uur is.",
      "Achtergrond bij de huidige editie van het Compendium, waarin sommige MET-waarden zijn herzien; kijk op pacompendium.com voor de nieuwste waarde van een activiteit.",
    ],
  },
  text: {
    activity: "Activiteit",
    activityHelp: "MET-waarden zijn gemiddelden voor volwassenen uit het Compendium of Physical Activities.",
    activities: {
      walking: "Wandelen, 3,0 mph (4,8 km/h), vlak",
      brisk: "Stevig wandelen, 3,5 mph (5,6 km/h)",
      hiking: "Trektocht, door het terrein",
      run5: "Hardlopen, 5 mph (8 km/h, 12 min/mijl)",
      run6: "Hardlopen, 6 mph (9,7 km/h, 10 min/mijl)",
      cycleLeisure: "Fietsen, recreatief, onder 10 mph (16 km/h)",
      cycleModerate: "Fietsen, 12–13,9 mph (19–22 km/h), matig",
      swimModerate: "Baantjes zwemmen, borstcrawl, lichte of matige inspanning",
      swimVigorous: "Baantjes zwemmen, borstcrawl, snel, zware inspanning",
      weightsLight: "Krachttraining, lichte of matige inspanning",
      weightsVigorous: "Krachttraining, zware inspanning",
      yoga: "Yoga, hatha",
      tennis: "Tennis, algemeen",
      soccer: "Voetbal, recreatief",
      jumpRope: "Touwtjespringen, gemiddeld tempo",
      gardening: "Tuinieren, algemeen",
      custom: "Eigen MET-waarde",
    },
    customMet: "MET-waarde",
    customMetHelp: "Metabool equivalent van de activiteit: 1 is rustig zitten; stevig wandelen is ongeveer 4.",
    weight: "Lichaamsgewicht",
    weightRange: "Vul een lichaamsgewicht in tussen 20 en 700 kg (ongeveer 45 tot 1.540 lb).",
    weightUnit: "Eenheid van gewicht",
    weightUnits: { kg: "Kilogram (kg)", lb: "Pond (lb)" },
    hours: "Uren",
    minutes: "Minuten",
    timeZero: "Vul een duur groter dan 0 in.",
    timeMax: "Vul een duur van 24 uur of minder in.",
    calories: "Verbrande calorieën",
    caption: "{met} MET × {kg} kg × {hours} h.",
    kj: "In kilojoule",
    perHour: "Calorieën per uur",
    metUsed: "Gebruikte MET-waarde",
    aboveRest: "Boven rustniveau (MET − 1)",
    kcal: "kcal",
    kcalHour: "kcal/h",
    notes: {
      estimate: "MET-waarden zijn gemiddelden voor volwassenen; je eigen energieverbruik hangt af van conditie, techniek, lichaamssamenstelling en omstandigheden, en kan merkbaar afwijken.",
      gross: "Het totaal omvat de energie die je in dezelfde tijd in rust zou hebben verbruikt. Het cijfer “boven rustniveau” laat die weg.",
    },
  },
};

export default nl;
