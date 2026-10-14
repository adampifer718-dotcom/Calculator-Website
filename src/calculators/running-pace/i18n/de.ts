import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RunningPaceText } from "../text/en";

const de: CalculatorTranslation<RunningPaceText> = {
  content: {
    title: "Laufpace-Rechner",
    shortTitle: "Laufpace",
    summary: "Ermitteln Sie Ihre Pace pro Kilometer und pro Meile sowie Ihre Durchschnittsgeschwindigkeit aus Distanz und Zielzeit.",
    metaTitle: "Laufpace-Rechner – Pace pro km und Meile",
    metaDescription: "Berechnen Sie Ihre Laufpace pro Kilometer und pro Meile sowie die Durchschnittsgeschwindigkeit aus Ihrer Zielzeit für 5 km, 10 km, Halbmarathon, Marathon oder eigene Distanzen.",
    keywords: ["Pace berechnen", "Pace-Rechner", "min/km berechnen", "Marathon Pace", "Laufgeschwindigkeit", "10 km Zeit", "Halbmarathon Pace"],
    intro: [
      "Die Pace ist die Zeit, die Sie für einen Kilometer oder eine Meile benötigen. Die meisten Läuferinnen und Läufer planen und vergleichen Wettkämpfe danach.",
      "Wählen Sie eine Wettkampfdistanz oder geben Sie eine eigene ein, ergänzen Sie Ihre Zielzeit und sehen Sie Pace und Geschwindigkeit.",
    ],
    howToUse: [
      "Wählen Sie eine Wettkampfdistanz oder „Eigene Distanz“ und geben Sie diese ein.",
      "Geben Sie Ihre Zielzeit in Stunden, Minuten und Sekunden ein.",
      "Lesen Sie Ihre Pace pro km und pro Meile sowie Ihre Durchschnittsgeschwindigkeit ab.",
    ],
    formulas: [
      { title: "Pace", expression: "Pace = Zeit ÷ Distanz", explanation: "Angezeigt als Minuten:Sekunden pro km oder Meile." },
      { title: "Geschwindigkeit", expression: "Geschwindigkeit = Distanz ÷ Zeit", explanation: "Angezeigt in km/h und mph." },
    ],
    examples: [
      { title: "10 km in 50 Minuten", steps: ["3.000 s ÷ 10 km = 300 s", "= 5:00 pro km"] },
      { title: "Marathon in 3 h 30 min", steps: ["12.600 s ÷ 42,195 km ≈ 298,6 s", "≈ 4:59 pro km"] },
    ],
    assumptions: [
      "Geht von einem gleichmäßigen Durchschnitt über die gesamte Distanz aus; Zwischenzeiten schwanken je nach Gelände und Anstrengung.",
      "Die Pace wird auf die nächste Sekunde gerundet.",
      "Wettkampfdistanzen: Halbmarathon 21,0975 km, Marathon 42,195 km.",
    ],
    faqs: [
      {
        question: "Was ist eine gute Pace über 5 km?",
        answer: "Das hängt von Alter, Erfahrung und Gelände ab. Verfolgen Sie lieber Ihre eigene Pace über die Zeit, statt sich mit anderen zu vergleichen.",
      },
      {
        question: "Wie rechne ich die Pace pro km in die Pace pro Meile um?",
        answer: "Multiplizieren Sie mit 1,609344. Eine Pace von 5:00/km entspricht etwa 8:03/mi.",
      },
      {
        question: "Wie ermittle ich eine Zielzeit?",
        answer: "Wählen Sie eine Ziel-Pace und multiplizieren Sie sie mit der Distanz, oder passen Sie hier die Zeit an, bis die Pace Ihrem Ziel entspricht.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    race: "Distanz",
    races: { "5k": "5 km", "10k": "10 km", half: "Halbmarathon", marathon: "Marathon", custom: "Eigene Distanz" },
    distance: "Eigene Distanz",
    unit: "Einheit",
    units: { km: "Kilometer", mi: "Meilen" },
    hours: "Stunden",
    minutes: "Minuten",
    seconds: "Sekunden",
    timeZero: "Geben Sie eine Zielzeit über null ein.",
    perKm: "Pace pro Kilometer",
    caption: "Zielzeit {time} über {km} km.",
    perMile: "Pace pro Meile",
    speed: "Durchschnittsgeschwindigkeit",
    speedMph: "Durchschnittsgeschwindigkeit (mph)",
  },
};

export default de;
