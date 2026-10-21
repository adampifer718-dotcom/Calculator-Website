import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OneRepMaxText } from "../text/en";

const nl: CalculatorTranslation<OneRepMaxText> = {
  content: {
    title: "One-rep-maxcalculator (1RM)",
    shortTitle: "One-rep max",
    summary: "Schat je one-rep max (1RM) op basis van een set van 1 tot 12 herhalingen met de formules van Epley, Brzycki en Lombardi, inclusief een tabel met trainingsgewichten.",
    metaTitle: "One-rep-maxcalculator (1RM) – Epley, Brzycki, Lombardi",
    metaDescription:
      "Schat je one-rep max (1RM) uit het gewicht en de herhalingen van een zware set met drie bekende formules, en zie trainingsgewichten van 60% tot 95% van je 1RM.",
    keywords: [
      "one rep max",
      "1RM berekenen",
      "maximaal gewicht",
      "formule van Epley",
      "formule van Brzycki",
      "bankdrukken max",
      "squat max",
      "trainingspercentages",
    ],
    intro: [
      "Je one-rep max (1RM) is het zwaarste gewicht dat je één keer met goede techniek kunt tillen. Dat rechtstreeks testen is vermoeiend en riskanter, dus veel sporters schatten het op basis van een zwaardere set die ze tot vlak bij falen uitvoeren.",
      "Deze calculator past drie veelgebruikte vergelijkingen toe, die van Epley, Brzycki en Lombardi, en neemt het gemiddelde. Elke formule is op andere sporters afgestemd, dus de spreiding ertussen laat zien hoe onzeker een losse schatting is.",
      "De tabel zet de schatting om in gewichten bij gangbare trainingspercentages, van 60% voor lichter volumewerk tot 95% voor zware singles.",
    ],
    howToUse: [
      "Vul het gewicht in dat je hebt getild en kies kilogram of pond.",
      "Vul in hoeveel volledige herhalingen je in die set hebt gedaan, van 1 tot 12.",
      "Lees de gemiddelde schatting en de uitkomst van elke formule af.",
      "Gebruik de tabel om gewichten voor een trainingsschema te kiezen.",
    ],
    formulas: [
      {
        title: "Epley",
        expression: "1RM = w × (1 + r ÷ 30), en 1RM = w als r = 1",
        explanation: "w is het getilde gewicht en r het aantal herhalingen. Telt per herhaling ongeveer 3,3% van het gewicht op.",
      },
      {
        title: "Brzycki",
        expression: "1RM = w × 36 ÷ (37 − r)",
        explanation: "Geeft bij 10 herhalingen dezelfde uitkomst als Epley en daaronder iets lagere waarden.",
      },
      {
        title: "Lombardi",
        expression: "1RM = w × r^0,10",
        explanation: "Een machtsfunctie die over de eerste herhalingen snel stijgt en daarna afvlakt.",
      },
      {
        title: "Getoonde schatting",
        expression: "1RM ≈ (Epley + Brzycki + Lombardi) ÷ 3",
        explanation: "De trainingsgewichten in de tabel zijn dit gemiddelde vermenigvuldigd met elk percentage.",
      },
    ],
    examples: [
      {
        title: "Squat: 82,5 kg voor 6 herhalingen",
        steps: [
          "Epley: 82,5 × (1 + 6 ÷ 30) = 99,0 kg",
          "Brzycki: 82,5 × 36 ÷ 31 ≈ 95,8 kg",
          "Lombardi: 82,5 × 6^0,1 ≈ 98,7 kg",
          "Gemiddelde ≈ (99,0 + 95,8 + 98,7) ÷ 3 ≈ 97,8 kg",
        ],
      },
      {
        title: "Bankdrukken: 185 lb voor 8 herhalingen",
        steps: [
          "Epley: 185 × (1 + 8 ÷ 30) ≈ 234,3 lb",
          "Brzycki: 185 × 36 ÷ 29 ≈ 229,7 lb",
          "Lombardi: 185 × 8^0,1 ≈ 227,8 lb",
          "Gemiddelde ≈ 230,6 lb",
        ],
      },
    ],
    assumptions: [
      "De set is tot vlak bij falen uitgevoerd met een constante techniek. Stop je ruim voor falen, dan valt de schatting te laag uit.",
      "De formules zijn het minst betrouwbaar boven ongeveer 10 herhalingen, waar uithoudingsvermogen zwaarder weegt dan maximale kracht. Sets van 3–8 herhalingen geven betere schattingen.",
      "De vergelijkingen zijn vooral ontwikkeld met vrije gewichten, zoals bankdrukken en squats. Uitkomsten voor machines, isolatieoefeningen en ongetrainde sporters kunnen afwijken.",
      "Een echte maximale poging vraagt om een goede techniek, een grondige warming-up en een spotter of veiligheidssteunen. Deze tool is geen medisch of trainingsadvies.",
    ],
    faqs: [
      {
        question: "Welke one-rep-maxformule is het nauwkeurigst?",
        answer: "Geen enkele is voor iedereen de beste. Vergelijkende studies laten zien dat de nauwkeurigheid afhangt van de oefening, de sporter en het aantal herhalingen. Daarom neemt deze calculator het gemiddelde van drie formules en toont hij ze alle drie.",
      },
      {
        question: "Hoeveel herhalingen gebruik ik voor de schatting?",
        answer: "Een set van ongeveer 3 tot 8 zware herhalingen werkt het best. Bij één herhaling is de schatting gewoon het getilde gewicht, en boven ongeveer 10 herhalingen lopen de voorspellingen uiteen.",
      },
      {
        question: "Kan ik de trainingstabel voor een schema gebruiken?",
        answer: "Ja, als startpunt. Veel schema's schrijven het werk voor als percentage van de 1RM, bijvoorbeeld 80% voor sets van ongeveer 5 herhalingen. Pas de gewichten aan op hoe de sets aanvoelen.",
      },
    ],
    sourcesUsedFor: [
      "Herkomst van de voorspellingsformule van Brzycki en het beoogde gebruik ervan bij sets tot ongeveer 10 herhalingen.",
      "Bewijs dat de nauwkeurigheid van de formules van Epley, Brzycki, Lombardi en andere verschilt per oefening en per groep sporters.",
    ],
  },
  text: {
    weight: "Getild gewicht",
    unit: "Eenheid",
    units: { kg: "kg", lb: "lb" },
    reps: "Voltooide herhalingen",
    repsHelp: "Volledige herhalingen met goede techniek in één set tot vlak bij falen, van 1 tot 12.",
    estimate: "Geschatte one-rep max",
    caption: "Gemiddelde van de schattingen van Epley, Brzycki en Lombardi voor {weight} × {reps}.",
    repsCount: {
      zero: "{n} herhalingen",
      one: "{n} herhaling",
      two: "{n} herhalingen",
      few: "{n} herhalingen",
      many: "{n} herhalingen",
      other: "{n} herhalingen",
    },
    epley: "Formule van Epley",
    brzycki: "Formule van Brzycki",
    lombardi: "Formule van Lombardi",
    tableCaption: "Trainingsgewichten op basis van de geschatte one-rep max",
    tablePercent: "Percentage van 1RM",
    tableLoad: "Gewicht",
    notes: {
      single: "Bij één herhaling geeft elke formule het getilde gewicht.",
      highReps: "Schattingen bij meer dan ongeveer 10 herhalingen zijn minder betrouwbaar; een zwaardere set van 3–8 herhalingen geeft een betere voorspelling.",
      safety: "Een echte maximale poging vraagt om een goede techniek, een warming-up en een spotter of veiligheidssteunen.",
    },
  },
};

export default nl;
