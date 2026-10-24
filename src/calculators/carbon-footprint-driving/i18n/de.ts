import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CarCo2Text } from "../text/en";

const de: CalculatorTranslation<CarCo2Text> = {
  content: {
    title: "Auto-CO₂-Rechner",
    shortTitle: "Auto-CO₂-Ausstoß",
    summary: "Schätzen Sie den CO₂-Ausstoß am Auspuff eines Benzin- oder Dieselautos aus Strecke und Verbrauch oder aus der getankten Kraftstoffmenge – pro Fahrt und pro Jahr.",
    metaTitle: "Auto-CO₂-Rechner – CO₂-Bilanz Ihrer Autofahrten",
    metaDescription: "Schätzen Sie den CO₂-Ausstoß einer Fahrt mit Benzin- oder Dieselauto aus Strecke und mpg oder L/100 km nach US-EPA-Faktoren – pro km, pro Meile und pro Jahr.",
    keywords: ["CO2-Rechner Auto", "CO2-Ausstoß Auto berechnen", "CO2 pro km", "CO2-Bilanz Autofahrt", "CO2 pro Liter Benzin", "CO2 pro Liter Diesel", "Fahrzeugemissionen", "CO2-Fußabdruck Auto"],
    intro: [
      "Bei der Verbrennung von Kraftstoff wird sein Kohlenstoff zu Kohlendioxid. Weil nahezu der gesamte Kohlenstoff in Benzin oder Diesel als CO₂ endet, hängt der Auspuffausstoß eines Autos vor allem davon ab, wie viel Kraftstoff es verbrennt – unabhängig von Marke und Modell.",
      "Dieser Rechner ermittelt den Kraftstoffverbrauch aus der Strecke und dem Verbrauch Ihres Autos (oder übernimmt die Kraftstoffmenge direkt) und multipliziert ihn mit dem Emissionsfaktor der US-Umweltbehörde EPA. Eine US-Gallone Benzin erzeugt etwa 8,9 kg CO₂ – mehr, als der Kraftstoff selbst wiegt, weil der größte Teil der Masse vom Sauerstoff der Luft stammt.",
    ],
    howToUse: [
      "Wählen Sie, ob Sie von Strecke und Verbrauch oder von der verbrauchten Kraftstoffmenge ausgehen.",
      "Geben Sie die Strecke und den Verbrauch Ihres Autos in mpg (US oder UK), L/100 km oder km/L ein, oder geben Sie die verbrauchte Kraftstoffmenge ein.",
      "Wählen Sie Benzin, Diesel oder einen eigenen Emissionsfaktor in kg CO₂ pro Liter.",
      "Geben Sie bei Bedarf an, wie oft im Jahr Sie die Fahrt machen, um die Jahressumme zu sehen.",
    ],
    formulas: [
      { title: "CO₂-Ausstoß", expression: "CO₂ = Kraftstoffmenge × Emissionsfaktor", explanation: "Mit dem Kraftstoff in Litern und dem Faktor in kg CO₂ pro Liter." },
      { title: "Kraftstoffmenge", expression: "Kraftstoff = Strecke ÷ mpg × Liter pro Gallone oder Strecke × L/100 km ÷ 100", explanation: "1 US-Gallone = 3,785411784 L, 1 imperiale Gallone = 4,54609 L und 1 Meile = 1,609344 km exakt. Bei km/L gilt: Kraftstoff = Strecke ÷ km/L." },
      { title: "EPA-Faktoren pro Liter", expression: "Benzin 8,887 ÷ 3,785411784 ≈ 2,3477 kg/L; Diesel 10,180 ÷ 3,785411784 ≈ 2,6893 kg/L", explanation: "Die Werte der EPA pro Gallone, exakt auf Liter umgerechnet." },
    ],
    examples: [
      {
        title: "Eine Fahrt von 250 Meilen mit 30 mpg im Benziner",
        steps: ["Kraftstoff = 250 ÷ 30 = 8,333 US-Gallonen", "CO₂ = 8,333 × 8,887 kg ≈ 74,06 kg", "Das sind etwa 296 g CO₂ pro Meile"],
      },
      {
        title: "400 km im Diesel mit 6,5 L/100 km",
        steps: ["Kraftstoff = 400 × 6,5 ÷ 100 = 26 L", "Faktor = 10,180 ÷ 3,785411784 ≈ 2,6893 kg CO₂/L", "CO₂ = 26 × 2,6893 ≈ 69,92 kg, etwa 174,8 g pro km"],
      },
      {
        title: "Eine 45-L-Tankfüllung Benzin, 52-mal im Jahr getankt",
        steps: ["CO₂ pro Tankfüllung = 45 × 2,3477 ≈ 105,65 kg", "Pro Jahr = 105,65 × 52 ≈ 5.494 kg, etwa 5,49 Tonnen"],
      },
    ],
    assumptions: [
      "Gezählt wird nur das CO₂ aus dem Auspuff. Methan und Lachgas aus dem Abgas, Kältemittelverluste sowie die vorgelagerten Emissionen aus Förderung, Raffination und Transport des Kraftstoffs sind nicht enthalten, der gesamte Fußabdruck ist also höher.",
      "Die Faktoren für Benzin und Diesel sind die Werte der US-EPA. Kraftstoffe mit Ethanol- oder Biodieselbeimischung und Kraftstoffe in anderen Ländern können leicht abweichen; verwenden Sie einen eigenen Faktor, wenn Sie einen besseren haben.",
      "Elektroautos deckt dieser Rechner nicht ab: Sie stoßen am Auspuff nichts aus, und ihr Fußabdruck hängt vom Strommix am Ladeort ab.",
      "Das Ergebnis ist nur so gut wie der eingegebene Verbrauch. Der Verbrauch im Alltag liegt oft über den offiziellen Prüfwerten, besonders bei Kälte, hohem Tempo und auf Kurzstrecken.",
    ],
    faqs: [
      { question: "Wie kann eine Gallone Benzin mehr CO₂ erzeugen, als sie selbst wiegt?", answer: "Jedes Kohlenstoffatom im Kraftstoff verbindet sich mit zwei Sauerstoffatomen aus der Luft. Sauerstoff ist schwerer als Kohlenstoff, daher wiegt das CO₂ etwa 3,7-mal so viel wie der darin enthaltene Kohlenstoff (44 ÷ 12): Eine US-Gallone Benzin wiegt rund 2,8 kg, erzeugt aber fast 8,9 kg CO₂." },
      { question: "Warum hat Diesel einen höheren Faktor als Benzin?", answer: "Diesel ist dichter und enthält mehr Kohlenstoff pro Liter, daher setzt die Verbrennung eines Liters mehr CO₂ frei. Dieselautos verbrauchen für dieselbe Strecke oft weniger Kraftstoff, was den höheren Faktor ausgleichen kann." },
      { question: "Sind die Emissionen aus der Herstellung des Autos oder des Kraftstoffs enthalten?", answer: "Nein. Erfasst wird nur das CO₂, das beim Fahren aus dem Auspuff kommt. Die Herstellung des Autos sowie die Produktion und Lieferung des Kraftstoffs verursachen weitere Emissionen, für die eine vollständige Lebenszyklusanalyse nötig ist." },
    ],
    sourcesUsedFor: ["Die Auspuff-Emissionsfaktoren von 8.887 g CO₂ pro Gallone Benzin und 10.180 g CO₂ pro Gallone Diesel."],
  },
  text: {
    method: "Kraftstoffmenge ermitteln aus",
    methodOptions: { distance: "Strecke und Verbrauch", fuel: "Verbrauchter Kraftstoffmenge" },
    distance: "Gefahrene Strecke",
    distanceUnit: "Einheit der Strecke",
    distanceUnits: { km: "Kilometer (km)", mi: "Meilen (mi)" },
    economy: "Kraftstoffverbrauch",
    economyHelp: "Verwenden Sie den Wert aus Ihrem Bordcomputer oder Ihren Tankbelegen, um ein möglichst realistisches Ergebnis zu erhalten.",
    economyUnit: "Einheit des Verbrauchs",
    economyUnits: { mpgUs: "Meilen pro US-Gallone (mpg US)", mpgUk: "Meilen pro imperiale Gallone (mpg UK)", l100km: "Liter pro 100 km (L/100 km)", kmL: "Kilometer pro Liter (km/L)" },
    fuelAmount: "Verbrauchte Kraftstoffmenge",
    fuelUnit: "Einheit der Kraftstoffmenge",
    fuelUnits: { L: "Liter (L)", galUs: "US-Gallonen", galUk: "Imperiale Gallonen" },
    fuelType: "Kraftstoff",
    fuelTypes: { gasoline: "Benzin", diesel: "Diesel", custom: "Eigener Emissionsfaktor" },
    customFactor: "Emissionsfaktor",
    customFactorHelp: "Kilogramm CO₂, die bei der Verbrennung eines Liters des Kraftstoffs freigesetzt werden.",
    trips: "Fahrten pro Jahr (optional)",
    tripsHelp: "Wie oft im Jahr Sie diese Fahrt machen, für eine Jahressumme. Für ein ganzes Fahrjahr geben Sie die jährliche Strecke und 1 Fahrt ein.",
    co2: "CO₂-Ausstoß",
    caption: "{fuel} Kraftstoff × {factor}.",
    perKm: "CO₂ pro Kilometer",
    perMile: "CO₂ pro Meile",
    fuelL: "Verbrauchte Kraftstoffmenge",
    fuelGal: "Kraftstoffmenge in US-Gallonen",
    factor: "Verwendeter Emissionsfaktor",
    annual: "CO₂ pro Jahr",
    annualTonnes: "CO₂ pro Jahr in Tonnen",
    gallonsUs: "US-gal",
    notes: {
      tailpipe: "Dies ist nur das CO₂ aus dem Auspuff. Methan, Lachgas, Kältemittel der Klimaanlage und die Emissionen aus Herstellung und Lieferung des Kraftstoffs sind nicht enthalten.",
      electric: "Elektroautos werden nicht abgedeckt: Sie haben keine Auspuffemissionen, und ihr Fußabdruck hängt davon ab, wie der Strom erzeugt wird.",
      custom: "Mit einem eigenen Faktor ist das Ergebnis nur so genau wie der eingegebene Faktor.",
    },
  },
};

export default de;
