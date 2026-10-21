import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AccelerationText } from "../text/en";

const nl: CalculatorTranslation<AccelerationText> = {
  content: {
    title: "Versnellingscalculator",
    shortTitle: "Versnelling",
    summary: "Bereken de versnelling uit een snelheidsverandering, uit afstand en tijd of uit kracht en massa, in m/s², ft/s² en g.",
    metaTitle: "Versnellingscalculator – Uit snelheid, afstand of kracht",
    metaDescription:
      "Bereken de versnelling uit een snelheidsverandering in de tijd, uit afstand en tijd of uit kracht en massa (a = F/m), in m/s², ft/s² en g.",
    keywords: ["versnelling berekenen", "formule versnelling", "m/s2", "vertraging", "g-kracht", "a = F/m", "0 naar 100", "kinematica"],
    intro: [
      "Versnelling geeft aan hoe snel de snelheid verandert. Een auto die in 8 seconden vanuit stilstand naar 100 km/h gaat, wint elke seconde ongeveer 3,5 meter per seconde aan snelheid. Dat schrijf je als 3,5 m/s².",
      "Deze calculator bepaalt de versnelling op drie manieren: uit een begin- en eindsnelheid in een bepaalde tijd, uit de afgelegde afstand in een bepaalde tijd, of uit de nettokracht op een voorwerp en de massa ervan. Het resultaat zie je in m/s², in ft/s² en als veelvoud van de standaardzwaartekracht g.",
    ],
    howToUse: [
      "Kies wat je weet: een snelheidsverandering, een afstand en een tijd, of een kracht en een massa.",
      "Kies de eenheden voor snelheid en afstand als daarom wordt gevraagd. Tijd is altijd in seconden, kracht in newton en massa in kilogram.",
      "Vul de waarden in. Een negatieve snelheid betekent beweging in de tegenovergestelde richting.",
      "Lees de versnelling af. Een negatief resultaat betekent dat het voorwerp afremt.",
    ],
    formulas: [
      { title: "Uit een snelheidsverandering", expression: "a = (v − v₀) ÷ t", explanation: "De gemiddelde versnelling over de tijd t, waarbij v₀ de beginsnelheid is en v de eindsnelheid." },
      { title: "Uit afstand en tijd", expression: "d = v₀t + ½at²  ⇒  a = 2(d − v₀t) ÷ t²", explanation: "Geldig als de versnelling gedurende het hele interval constant blijft." },
      { title: "Uit kracht en massa", expression: "a = F ÷ m", explanation: "De tweede wet van Newton, met de nettokracht F in newton en de massa m in kilogram." },
      { title: "Eenheden omrekenen", expression: "1 ft/s² = 0,3048 m/s²\n1 g = 9,80665 m/s²", explanation: "Snelheden worden eerst omgerekend naar m/s (1 km/h = 1/3,6 m/s, 1 mph = 0,44704 m/s)." },
    ],
    examples: [
      {
        title: "Een auto die in 8 seconden van 0 naar 100 km/h gaat",
        steps: ["100 km/h = 100 ÷ 3,6 ≈ 27,778 m/s", "a = (27,778 − 0) ÷ 8 ≈ 3,472 m/s²", "Dat is ongeveer 0,354 g"],
      },
      {
        title: "In 4 seconden afremmen van 60 mph tot stilstand",
        steps: ["60 mph = 60 × 0,44704 = 26,8224 m/s", "a = (0 − 26,8224) ÷ 4 = −6,7056 m/s²", "Het minteken wijst op een vertraging van ongeveer 0,684 g"],
      },
      {
        title: "Een duw van 450 N tegen een slee van 75 kg",
        steps: ["a = F ÷ m", "= 450 ÷ 75 = 6 m/s²"],
      },
    ],
    assumptions: [
      "De beweging verloopt langs een rechte lijn; snelheden en krachten in de tegenovergestelde richting vul je in als negatieve waarden.",
      "De methode met snelheidsverandering geeft de gemiddelde versnelling over het interval. De methode met afstand en tijd gaat uit van een constante versnelling.",
      "De methode met kracht en massa gebruikt de nettokracht, dus nadat wrijving, luchtweerstand en andere tegenwerkende krachten zijn afgetrokken.",
    ],
    faqs: [
      { question: "Wat betekent een negatieve versnelling?", answer: "Dat de versnelling in de negatieve richting wijst. Voor een voorwerp dat vooruit beweegt, betekent dat dat het afremt; dat heet vaak vertraging." },
      { question: "Wat is 1 g?", answer: "Dat is de standaardversnelling van de zwaartekracht, gedefinieerd als precies 9,80665 m/s² (ongeveer 32,17 ft/s²). Een versnelling in g vergelijkt haar met de aantrekkingskracht van de zwaartekracht aan het aardoppervlak." },
      { question: "Waarom meet je versnelling in m/s²?", answer: "Versnelling is een snelheidsverandering (m/s) per tijdseenheid (s), dus de eenheid is meter per seconde per seconde, geschreven als m/s²." },
    ],
    sourcesUsedFor: [
      "Definitie van gemiddelde versnelling als snelheidsverandering gedeeld door de verstreken tijd, en de SI-eenheid m/s².",
      "De tweede wet van Newton, F = ma.",
      "De standaardversnelling van de zwaartekracht, 9,80665 m/s².",
    ],
  },
  text: {
    mode: "Berekenen uit",
    modes: { velocity: "Snelheidsverandering", distance: "Afstand en tijd", force: "Kracht en massa" },
    speedUnit: "Eenheid van snelheid",
    speedUnits: { ms: "Meter per seconde (m/s)", kmh: "Kilometer per uur (km/h)", mph: "Mijl per uur (mph)", fts: "Voet per seconde (ft/s)" },
    initialVelocity: "Beginsnelheid (v₀)",
    initialHelp: "Gebruik een negatieve waarde voor beweging in de tegenovergestelde richting.",
    finalVelocity: "Eindsnelheid (v)",
    time: "Tijd (t)",
    distanceUnit: "Eenheid van afstand",
    distanceUnits: { m: "Meter (m)", km: "Kilometer (km)", ft: "Voet (ft)", mi: "Mijl (mi)" },
    distance: "Afgelegde afstand (d)",
    distanceHelp: "De verplaatsing langs een rechte lijn gedurende de tijd t.",
    force: "Nettokracht (F)",
    forceHelp: "De som van alle krachten die op het voorwerp werken, in newton.",
    mass: "Massa (m)",
    acceleration: "Versnelling",
    formula: { velocity: "a = (v − v₀) ÷ t", distance: "a = 2(d − v₀t) ÷ t²", force: "a = F ÷ m" },
    inFeet: "In voet per seconde kwadraat",
    inG: "In standaardzwaartekracht (g)",
    distanceCovered: "Afgelegde afstand",
    finalVelocityResult: "Eindsnelheid",
    notes: {
      negative: "De versnelling is negatief, dus het voorwerp remt af (vertraagt) als het in de positieve richting beweegt.",
      zero: "Versnelling nul: de snelheid verandert niet.",
      constant: "Gaat ervan uit dat de versnelling gedurende het hele tijdsinterval constant is.",
      average: "Dit is de gemiddelde versnelling over het tijdsinterval; de versnelling op een bepaald moment kan hoger of lager zijn.",
      g: "1 g is de standaardversnelling van de zwaartekracht, 9,80665 m/s², per definitie exact.",
    },
  },
};

export default nl;
