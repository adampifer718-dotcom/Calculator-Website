import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RunningPaceText } from "../text/en";

const nl: CalculatorTranslation<RunningPaceText> = {
  content: {
    title: "Hardloopsnelheidcalculator (tempo per km)",
    shortTitle: "Hardlooptempo",
    summary: "Bereken je hardlooptempo per kilometer en per mijl, en je gemiddelde snelheid, uit de afstand en je eindtijd.",
    metaTitle: "Hardlooptempo berekenen – Tempo per km en per mijl",
    metaDescription:
      "Bereken je tempo per kilometer en per mijl en je gemiddelde snelheid uit je eindtijd op de 5 km, 10 km, halve marathon, marathon of een eigen afstand.",
    keywords: ["hardlooptempo", "tempo berekenen", "min/km", "marathontempo", "tempo 10 km", "hardlopen"],
    intro: [
      "Je tempo is de tijd die je nodig hebt voor één kilometer of één mijl. De meeste hardlopers plannen en vergelijken hun wedstrijden op die manier.",
      "Kies een wedstrijdafstand of vul je eigen afstand in, voeg je eindtijd toe en lees je tempo en snelheid af.",
    ],
    howToUse: [
      "Kies een wedstrijdafstand, of kies ‘Eigen afstand’ en vul die in.",
      "Vul je eindtijd in uren, minuten en seconden in.",
      "Lees je tempo per km en per mijl en je gemiddelde snelheid af.",
    ],
    formulas: [
      { title: "Tempo", expression: "tempo = tijd ÷ afstand", explanation: "Weergegeven als minuten:seconden per km of per mijl." },
      { title: "Snelheid", expression: "snelheid = afstand ÷ tijd", explanation: "Weergegeven in km/h en mph." },
    ],
    examples: [
      { title: "10 km in 50 minuten", steps: ["3.000 s ÷ 10 km = 300 s", "= 5:00 per km"] },
      { title: "Marathon in 3 u 30 min", steps: ["12.600 s ÷ 42,195 km ≈ 298,6 s", "≈ 4:59 per km"] },
    ],
    assumptions: [
      "Gaat uit van een gelijkmatig gemiddeld tempo over de hele afstand; tussentijden variëren met het terrein en de inspanning.",
      "Tempo's worden afgerond op de dichtstbijzijnde seconde.",
      "Wedstrijdafstanden: halve marathon 21,0975 km, marathon 42,195 km.",
    ],
    faqs: [
      {
        question: "Wat is een goed tempo op de 5 km?",
        answer: "Dat hangt af van je leeftijd, ervaring en het parcours. Volg de ontwikkeling van je eigen tempo in plaats van jezelf met anderen te vergelijken.",
      },
      { question: "Hoe zet ik tempo per km om in tempo per mijl?", answer: "Vermenigvuldig met 1,609344. Een tempo van 5:00/km is ongeveer 8:03/mi." },
      {
        question: "Hoe bereken ik een streeftijd?",
        answer: "Kies een streeftempo en vermenigvuldig dat met de afstand, of pas hier de tijd aan tot het tempo overeenkomt met je doel.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    race: "Afstand",
    races: { "5k": "5 km", "10k": "10 km", half: "Halve marathon", marathon: "Marathon", custom: "Eigen afstand" },
    distance: "Eigen afstand",
    unit: "Eenheid",
    units: { km: "Kilometer", mi: "Mijl" },
    hours: "Uren",
    minutes: "Minuten",
    seconds: "Seconden",
    timeZero: "Vul een eindtijd in die groter is dan nul.",
    perKm: "Tempo per kilometer",
    caption: "Eindtijd van {time} over {km} km.",
    perMile: "Tempo per mijl",
    speed: "Gemiddelde snelheid",
    speedMph: "Gemiddelde snelheid (mph)",
  },
};

export default nl;
