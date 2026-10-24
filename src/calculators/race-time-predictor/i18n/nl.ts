import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RaceTimePredictorText } from "../text/en";

const nl: CalculatorTranslation<RaceTimePredictorText> = {
  content: {
    title: "Finishtijdvoorspeller",
    shortTitle: "Finishtijd",
    summary: "Voorspel je finishtijd op de mijl, 5 km, 10 km, halve marathon, marathon of elke andere afstand uit een recente wedstrijd, met de uithoudingsformule van Riegel.",
    metaTitle: "Finishtijdvoorspeller – 5 km tot marathon (Riegel)",
    metaDescription:
      "Voorspel een finishtijd en tempo uit een recente uitslag met de formule van Riegel, T₂ = T₁ × (D₂/D₁)^1,06, voor 5 km, 10 km, halve en hele marathon.",
    keywords: ["finishtijd voorspellen", "marathontijd voorspellen", "formule van Riegel", "halve marathon voorspelling", "5 km naar marathon", "wedstrijdtijd berekenen", "verwachte eindtijd"],
    intro: [
      "Als je weet hoe snel je één wedstrijd hebt gelopen, kun je schatten hoe snel je een andere zou kunnen lopen. Hardlopers worden iets langzamer naarmate de afstand groeit, en in 1981 liet ingenieur Peter Riegel zien dat wereldrecords op veel afstanden passen in één eenvoudige machtswet.",
      "Vul een recente wedstrijd en je finishtijd in, kies de afstand die je wilt lopen, en deze tool voorspelt je tijd en tempo met de formule van Riegel. Hij geeft ook voorspellingen voor alle standaardafstanden van de mijl tot de marathon.",
    ],
    howToUse: [
      "Kies de afstand van een recente wedstrijd die je voluit hebt gelopen, of vul een eigen afstand in km of mijl in.",
      "Vul je finishtijd in uren, minuten en seconden in.",
      "Kies de afstand die je wilt voorspellen.",
      "Laat de vermoeidheidsexponent op 1,06 staan, tenzij je weet dat je op lange afstanden meer (probeer 1,08) of minder terugvalt.",
      "Lees de voorspelde tijd af, het tempo dat daarbij hoort en de tabel met voorspellingen voor andere afstanden.",
    ],
    formulas: [
      {
        title: "Formule van Riegel",
        expression: "T₂ = T₁ × (D₂ ÷ D₁)^k",
        explanation: "T₁ is je tijd over afstand D₁ en T₂ de voorspelde tijd over D₂. Met k = 1,06 wordt de tijd bij een verdubbeling van de afstand vermenigvuldigd met 2^1,06 ≈ 2,085.",
      },
      {
        title: "Tempo",
        expression: "tempo per km = T₂ ÷ D₂ (km)\ntempo per mijl = tempo per km × 1,609344",
        explanation: "Het gemiddelde tempo dat nodig is om de voorspelde tijd te lopen.",
      },
    ],
    examples: [
      {
        title: "Van een 10 km in 50:00 naar een halve marathon",
        steps: ["T₁ = 3.000 s, D₂ ÷ D₁ = 21,0975 ÷ 10 = 2,10975", "T₂ = 3.000 × 2,10975^1,06 ≈ 6.619 s", "6.619 s = 1:50:19, een tempo van ongeveer 5:14 per km"],
      },
      {
        title: "Van een 5 km in 22:30 naar een marathon",
        steps: [
          "T₁ = 1.350 s, D₂ ÷ D₁ = 42,195 ÷ 5 = 8,439",
          "T₂ = 1.350 × 8,439^1,06 ≈ 12.948 s = 3:35:48",
          "De marathon is meer dan vier keer zo lang als de 5 km, dus zie dit als optimistisch",
        ],
      },
      {
        title: "Van een halve marathon in 1:45:00 naar een 10 km, met k = 1,08",
        steps: ["T₁ = 6.300 s, D₂ ÷ D₁ = 10 ÷ 21,0975 ≈ 0,474", "T₂ = 6.300 × 0,474^1,08 ≈ 2.813 s", "2.813 s = 0:46:53"],
      },
    ],
    assumptions: [
      "Je bent even goed getraind voor de doelafstand. Een snelle 5 km betekent niet dat je het uithoudingsvermogen hebt voor een marathon zonder genoeg lange duurlopen.",
      "Voorspellingen zijn minder nauwkeurig voor afstanden die meer dan ongeveer vier keer langer of korter zijn dan je wedstrijd, en voor wedstrijden die langer duren dan ongeveer 4 uur, waar ze meestal te snel uitvallen.",
      "Beide wedstrijden worden gelopen op vergelijkbare, vlakke parcoursen bij vergelijkbaar weer. Heuvels, hitte, wind en hoogte worden niet meegenomen.",
    ],
    faqs: [
      {
        question: "Waarom is de exponent 1,06?",
        answer: "Riegel paste de exponent aan op wereldrecordtijden en vond ongeveer 1,06 voor hardlopen. Een waarde van 1 zou betekenen dat je op elke afstand hetzelfde tempo kunt volhouden; alles boven 1 betekent dat je langzamer wordt naarmate de wedstrijd langer duurt.",
      },
      {
        question: "Welke wedstrijd moet ik als invoer gebruiken?",
        answer: "Gebruik een recente wedstrijd die je voluit hebt gelopen, het liefst een die qua afstand dicht bij het doel ligt. Een halve marathon voorspelt een marathon beter dan een mijl.",
      },
      {
        question: "Waarom is mijn echte marathon langzamer dan voorspeld?",
        answer: "De marathon hangt sterk af van duurtraining, voeding onderweg en tempoverdeling, en die test een korte wedstrijd niet. Veel lopers zijn langzamer dan de formule voorspelt, daarom gebruiken sommige trainers voor de marathon een hogere exponent, zoals 1,07 tot 1,08.",
      },
    ],
    sourcesUsedFor: ["De uithoudingsvergelijking T = a·D^b tussen tijd en afstand, met een exponent van ongeveer 1,06 voor hardlopen."],
  },
  text: {
    knownRace: "Afstand van recente wedstrijd",
    targetRace: "Te voorspellen afstand",
    races: { mile: "1 mijl", "5k": "5 km", "10k": "10 km", half: "Halve marathon (21,0975 km)", marathon: "Marathon (42,195 km)", custom: "Eigen afstand" },
    knownDistance: "Afstand van recente wedstrijd",
    targetDistance: "Te voorspellen afstand",
    unit: "Eenheid van afstand",
    units: { km: "Kilometer (km)", mi: "Mijl (mi)" },
    hours: "Finishtijd: uren",
    minutes: "Minuten",
    seconds: "Seconden",
    exponent: "Vermoeidheidsexponent (k)",
    exponentHelp: "De waarde van Riegel voor hardlopen is 1,06. Een hogere waarde gaat ervan uit dat je meer vertraagt naarmate de afstand groeit.",
    timeZero: "Vul een finishtijd in die groter is dan nul.",
    predicted: "Voorspelde finishtijd",
    caption: "{time} op {known} → {target}, k = {k}",
    perKm: "Voorspeld tempo per kilometer",
    perMile: "Voorspeld tempo per mijl",
    speed: "Gemiddelde snelheid",
    tableCaption: "Voorspellingen voor standaardafstanden",
    columns: { distance: "Afstand", time: "Voorspelde tijd", perKm: "Tempo /km", perMile: "Tempo /mi" },
    tableRaces: { mile: "1 mijl", "5k": "5 km", "10k": "10 km", half: "Halve marathon", marathon: "Marathon" },
    notes: {
      far: "De doelafstand is meer dan vier keer langer of korter dan je wedstrijd, dus de voorspelling is minder betrouwbaar.",
      long: "De voorspelde tijd is meer dan ongeveer 4 uur; daar is de formule meestal te optimistisch.",
      same: "Beide afstanden zijn gelijk, dus de voorspelling is gelijk aan je finishtijd.",
      training: "Gaat ervan uit dat je even goed getraind bent voor de doelafstand, bijvoorbeeld met genoeg lange duurlopen voor een marathon.",
    },
  },
};

export default nl;
