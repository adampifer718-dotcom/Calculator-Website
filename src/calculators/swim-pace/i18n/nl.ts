import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SwimPaceText } from "../text/en";

const nl: CalculatorTranslation<SwimPaceText> = {
  content: {
    title: "Zwemtempocalculator",
    shortTitle: "Zwemtempo",
    summary: "Bereken je zwemtempo per 100 m of 100 yd uit een afstand en tijd, of de tijd voor een afstand bij een bepaald tempo.",
    metaTitle: "Zwemtempocalculator – tempo per 100 m en 100 yd",
    metaDescription:
      "Bereken je zwemtempo per 100 meter of 100 yard uit afstand en tijd, of de eindtijd uit een tempo, met snelheid en verwachte tussentijden.",
    keywords: ["zwemtempo", "tempo per 100 m", "tempo per 100 yard", "zwemsnelheid", "zwemtijd berekenen", "triatlon zwemmen"],
    intro: [
      "Zwemmers meten hun tempo meestal als de tijd die ze over elke 100 meter of 100 yard doen. Zo kun je een training in het zwembad vergelijken met een zwemtocht in open water of een wedstrijd, ongeacht de totale afstand.",
      "Vul een afstand en een tijd in om je tempo in beide eenheden te zien, je snelheid en de tijden die je bij dat tempo over gangbare afstanden zou zwemmen. Of wissel van modus, vul een doeltempo in en zie hoe lang een afstand duurt.",
    ],
    howToUse: [
      "Kies of je het tempo of de totale tijd wilt berekenen.",
      "Vul de afstand in en kies meter of yard.",
      "Vul je tijd in uren, minuten en seconden in, of het tempo per 100 m of 100 yd.",
      "Lees het tempo, de snelheid en de verwachte tijden voor 50 m tot 1.500 m af.",
    ],
    formulas: [
      { title: "Tempo", expression: "tempo per 100 m = tijd (s) ÷ afstand (m) × 100", explanation: "Weergegeven als minuten:seconden, afgerond op hele seconden." },
      { title: "Tijd uit tempo", expression: "tijd = tempo per 100 m × afstand (m) ÷ 100", explanation: "Een tempo per 100 yd wordt eerst door 0,9144 gedeeld om het tempo per 100 m te krijgen." },
      { title: "Yard en meter", expression: "1 yd = precies 0,9144 m\ntempo per 100 yd = tempo per 100 m × 0,9144", explanation: "100 yard is iets korter dan 100 meter, dus het tempo per 100 yd is sneller." },
      { title: "Snelheid", expression: "snelheid (m/s) = 100 ÷ tempo per 100 m (s)\nkm/h = m/s × 3,6", explanation: "Gemiddelde snelheid over de hele afstand." },
    ],
    examples: [
      {
        title: "1.500 m in 27:30",
        steps: ["27:30 = 1.650 s", "1.650 ÷ 1.500 × 100 = 110 s = 1:50 per 100 m", "Per 100 yd: 110 × 0,9144 ≈ 101 s = 1:41; snelheid ≈ 0,909 m/s"],
      },
      {
        title: "500 yd in 7:05",
        steps: ["7:05 = 425 s", "425 ÷ 500 × 100 = 85 s = 1:25 per 100 yd", "Per 100 m: 85 ÷ 0,9144 ≈ 93 s = 1:33"],
      },
      {
        title: "1.650 yd bij 1:30 per 100 yd",
        steps: ["1.650 yd ÷ 100 = 16,5 keer 100 yd", "16,5 × 90 s = 1.485 s", "1.485 s = 24:45"],
      },
    ],
    assumptions: [
      "Het tempo is een gemiddelde over de hele afstand; de verwachte tijden gaan ervan uit dat je dat tempo op elke afstand volhoudt, wat bij veel langere afstanden zelden zo is.",
      "De badlengte en het aantal keerpunten beïnvloeden de tijden: dezelfde afstand gaat in een bad van 25 m meestal iets sneller dan in een bad van 50 m.",
      "Tijden worden voor de weergave afgerond op hele seconden.",
    ],
    faqs: [
      { question: "Waarom is mijn tempo per 100 yd sneller dan per 100 m?", answer: "100 yard is 91,44 meter, dus je zwemt het in minder tijd. Bij dezelfde snelheid is het tempo per 100 yd ongeveer 8,6% lager dan het tempo per 100 m." },
      { question: "Wat is een goed zwemtempo?", answer: "Dat hangt af van leeftijd, ervaring en afstand. Veel recreatieve zwemmers zwemmen rond de 2 à 3 minuten per 100 m, terwijl getrainde langeafstandszwemmers vaak ruim onder 1:30 zitten." },
      { question: "Kan ik dit gebruiken voor zwemmen in open water?", answer: "Ja, als je de afstand kent. Gps-afstanden in open water kunnen onnauwkeurig zijn, dus het tempo is maar zo goed als de gemeten afstand." },
    ],
    sourcesUsedFor: ["De exacte omrekening 1 yd = 0,9144 m, gebruikt tussen yard- en meterbaden."],
  },
  text: {
    mode: "Berekenen",
    modes: { pace: "Tempo uit afstand en tijd", time: "Tijd uit afstand en tempo" },
    distance: "Afstand",
    unit: "Eenheid van afstand",
    units: { m: "Meter (m)", yd: "Yard (yd)" },
    hours: "Uren",
    minutes: "Minuten",
    seconds: "Seconden",
    timeZero: "Vul een tijd groter dan 0 in.",
    paceMinutes: "Tempo: minuten",
    paceSeconds: "Tempo: seconden",
    paceUnit: "Tempo per",
    paceUnits: { m: "100 m", yd: "100 yd" },
    paceZero: "Vul een tempo groter dan 0 in.",
    pace: "Tempo per 100 {unit}",
    time: "Totale tijd",
    caption: "{distance} in {time}.",
    pace100m: "Tempo per 100 m",
    pace100yd: "Tempo per 100 yd",
    speedMs: "Snelheid (m/s)",
    speedKmh: "Snelheid (km/h)",
    distanceM: "Afstand in meter",
    table: {
      caption: "Verwachte tijden bij hetzelfde gelijkmatige tempo",
      distance: "Afstand",
      time: "Tijd",
    },
    notes: {
      even: "De verwachte tijden gaan uit van hetzelfde tempo over de hele afstand. Langere afstanden zijn per 100 meestal langzamer, en keerpunten verschillen tussen baden van 25 m, 50 m en 25 yd.",
    },
  },
};

export default nl;
