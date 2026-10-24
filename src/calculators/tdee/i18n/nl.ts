import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TdeeText } from "../text/en";

const nl: CalculatorTranslation<TdeeText> = {
  content: {
    title: "TDEE-calculator (dagelijks energieverbruik)",
    shortTitle: "TDEE",
    summary: "Schat je totale dagelijkse energieverbruik uit de BMR volgens Mifflin–St Jeor en een activiteitsfactor, met alle activiteitsniveaus naast elkaar.",
    metaTitle: "TDEE-calculator – totaal dagelijks energieverbruik",
    metaDescription:
      "Schat je totale dagelijkse energieverbruik in kcal en kJ uit de BMR volgens Mifflin–St Jeor en je activiteitsniveau, met een tabel van alle vijf niveaus.",
    keywords: ["tdee berekenen", "dagelijks energieverbruik", "onderhoudscalorieën", "calorieën per dag", "activiteitsfactor", "mifflin st jeor", "PAL-waarde"],
    intro: [
      "Het totale dagelijkse energieverbruik (TDEE) is een schatting van alle energie die je op een dag verbruikt: de energie in rust plus de energie voor beweging, sport en de spijsvertering. Het wordt vaak je onderhoudscalorieën genoemd.",
      "Deze calculator schat eerst je basaal metabolisme met de formule van Mifflin–St Jeor, dezelfde als in de BMR-calculator, en vermenigvuldigt dat daarna met een factor voor je activiteitsniveau. De vijf factoren van 1,2 tot 1,9 zijn veelgebruikte afspraken, dus zie het resultaat als een eerste schatting.",
    ],
    howToUse: [
      "Kies metrische of imperiale eenheden.",
      "Kies het geslacht dat in de formule wordt gebruikt en vul je leeftijd, gewicht en lengte in.",
      "Kies het activiteitsniveau dat het best past bij een gewone week.",
      "Lees je geschatte TDEE af, de BMR waarop die is gebaseerd en de tabel die alle activiteitsniveaus vergelijkt.",
    ],
    formulas: [
      { title: "Basaal metabolisme (Mifflin–St Jeor)", expression: "BMR = 10 × gewicht (kg) + 6,25 × lengte (cm) − 5 × leeftijd (jaar) + s\ns = +5 voor mannen, −161 voor vrouwen", explanation: "Energie die in volledige rust wordt verbruikt, in kcal per dag." },
      { title: "Totaal dagelijks energieverbruik", expression: "TDEE = BMR × activiteitsfactor\nzittend 1,2 · licht 1,375 · matig 1,55 · zeer actief 1,725 · extreem actief 1,9", explanation: "De factor schaalt de rustenergie op voor dagelijkse activiteit. Deze waarden zijn gangbare afspraken, niet voor jou gemeten." },
      { title: "Ruwe verandering per week", expression: "0,5 kg per week ≈ 0,5 × 7.700 ÷ 7 = 550 kcal/dag", explanation: "Een vuistregel die 1 kg lichaamsgewicht gelijkstelt aan ongeveer 7.700 kcal. Echte gewichtsverandering volgt die zelden precies." },
      { title: "Energie-eenheden", expression: "1 kcal = 4,184 kJ", explanation: "De thermochemische calorie." },
    ],
    examples: [
      {
        title: "Vrouw, 35 jaar, 68 kg, 168 cm, matig actief",
        steps: ["BMR = 10 × 68 + 6,25 × 168 − 5 × 35 − 161 = 1.394 kcal/dag", "TDEE = 1.394 × 1,55 = 2.160,7 ≈ 2.161 kcal/dag", "In kilojoule: 2.160,7 × 4,184 ≈ 9.040 kJ/dag"],
      },
      {
        title: "Man, 45 jaar, 190 lb, 5 ft 10 in, zittend",
        steps: [
          "190 lb = 86,18 kg; 5 ft 10 in = 70 in = 177,8 cm",
          "BMR = 10 × 86,18 + 6,25 × 177,8 − 5 × 45 + 5 ≈ 1.753 kcal/dag",
          "TDEE = 1.753,08 × 1,2 ≈ 2.104 kcal/dag; de waarde voor 0,5 kg afvallen per week (≈ 1.554 kcal/dag) ligt onder de BMR, dus er verschijnt een opmerking",
        ],
      },
    ],
    assumptions: [
      "Het resultaat is een schatting, geen medisch of voedingsadvies, en deze calculator is nog niet professioneel beoordeeld. Overleg met een arts of diëtist voordat je je eetpatroon verandert.",
      "De formule van Mifflin–St Jeor is ontwikkeld voor gezonde volwassenen. Ze is niet geschikt voor kinderen, zwangerschap, borstvoeding of aandoeningen die de stofwisseling beïnvloeden, en je persoonlijke BMR kan er 10% of meer van afwijken.",
      "De activiteitsfactoren (1,2 tot 1,9) zijn veelgebruikte afspraken voor brede leefstijlgroepen. Een niveau kiezen is subjectief, en de fout in de TDEE is groter dan de fout in de BMR.",
      "De waarden voor ±0,5 kg per week gebruiken de ruwe vuistregel van 7.700 kcal per kg. In de praktijk hangt gewichtsverandering af van vocht, lichaamssamenstelling en aanpassing van het lichaam, en ze vertraagt na verloop van tijd.",
    ],
    faqs: [
      { question: "Wat is het verschil tussen BMR en TDEE?", answer: "De BMR is de energie die in volledige rust wordt verbruikt. De TDEE telt daar de energie voor dagelijkse beweging, sport en spijsvertering bij op, dus die is altijd hoger dan de BMR." },
      { question: "Welk activiteitsniveau moet ik kiezen?", answer: "Kies het niveau dat past bij een gewone week, niet bij je actiefste week. Zit je tussen twee niveaus in, dan toont de tabel beide, zodat je een waarde daartussen kunt nemen. De meeste mensen met een kantoorbaan zijn zittend of licht actief." },
      { question: "Waarom verschilt mijn TDEE van mijn fitnesstracker?", answer: "Trackers schatten activiteit uit beweging en hartslag, terwijl deze calculator één brede factor gebruikt. Beide zijn schattingen; je gewicht en inname een aantal weken bijhouden laat je werkelijke onderhoudsniveau het best zien." },
    ],
    sourcesUsedFor: [
      "De formule van Mifflin–St Jeor voor het rustmetabolisme, dezelfde als in de BMR-calculator.",
      "Het totale energieverbruik schatten als rustmetabolisme vermenigvuldigd met een fysiek activiteitsniveau (PAL).",
    ],
  },
  text: {
    units: "Eenheden",
    unitOptions: { metric: "Metrisch (kg, cm)", imperial: "Imperiaal (lb, ft, in)" },
    sex: "Geslacht in de formule",
    sexHelp: "De formule van Mifflin–St Jeor heeft aparte constanten voor mannen en vrouwen.",
    sexes: { male: "Man", female: "Vrouw" },
    age: "Leeftijd",
    weight: "Gewicht",
    height: "Lengte",
    heightFt: "Lengte (voet)",
    heightIn: "Lengte (inch)",
    heightZero: "Vul een lengte groter dan 0 in.",
    activity: "Activiteitsniveau",
    activityHelp: "Kies de omschrijving die het dichtst bij een gewone week komt. De factoren zijn ruwe afspraken, geen metingen.",
    activities: {
      sedentary: "Zittend (weinig of geen sport)",
      light: "Licht actief (lichte sport 1–3 dagen per week)",
      moderate: "Matig actief (sport 3–5 dagen per week)",
      very: "Zeer actief (zware sport 6–7 dagen per week)",
      extra: "Extreem actief (lichamelijk zwaar werk of twee keer per dag trainen)",
    },
    activityShort: { sedentary: "Zittend", light: "Licht actief", moderate: "Matig actief", very: "Zeer actief", extra: "Extreem actief" },
    tdee: "Totaal dagelijks energieverbruik",
    caption: "BMR {bmr} kcal/dag × activiteitsfactor {factor}.",
    bmr: "Basaal metabolisme (Mifflin–St Jeor)",
    kj: "TDEE in kilojoule",
    multiplier: "Activiteitsfactor",
    lose: "Ongeveer 0,5 kg (1,1 lb) afvallen per week",
    gain: "Ongeveer 0,5 kg (1,1 lb) aankomen per week",
    kcalDay: "kcal/dag",
    kjDay: "kJ/dag",
    table: {
      caption: "Geschatte TDEE per activiteitsniveau",
      level: "Activiteitsniveau",
      factor: "Factor",
      kcal: "kcal/dag",
      kj: "kJ/dag",
    },
    notes: {
      estimate: "Een schatting voor gezonde volwassenen. Het werkelijke energieverbruik kan enkele honderden kcal per dag afwijken; het is geen voorschrift voor een dieet.",
      rule: "De waarden voor ±0,5 kg per week gebruiken de ruwe vuistregel dat 1 kg lichaamsgewicht ongeveer 7.700 kcal is (550 kcal per dag voor 0,5 kg per week). Echte gewichtsverandering volgt die niet nauwkeurig.",
      belowBmr: "De waarde voor afvallen ligt onder je geschatte BMR. Minder eten dan je BMR wordt afgeraden zonder advies van een arts of diëtist.",
    },
  },
};

export default nl;
