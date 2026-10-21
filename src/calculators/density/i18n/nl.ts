import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DensityText } from "../text/en";

const nl: CalculatorTranslation<DensityText> = {
  content: {
    title: "Dichtheidscalculator",
    shortTitle: "Dichtheid",
    summary: "Bereken de dichtheid uit massa en volume, of reken terug naar een massa of een volume, in metrische of Amerikaanse eenheden.",
    metaTitle: "Dichtheidscalculator – Los ρ = m/V op voor elke waarde",
    metaDescription:
      "Los ρ = m/V op voor dichtheid, massa of volume. Vul gram, kilogram of pond en cm³, liter, m³ of ft³ in; zie kg/m³, g/cm³ en lb/ft³.",
    keywords: ["dichtheid berekenen", "massa", "volume", "rho", "kg/m3", "g/cm3", "lb/ft3", "relatieve dichtheid"],
    intro: [
      "Dichtheid geeft aan hoeveel massa er in een bepaald volume zit. Een liter water heeft een massa van ongeveer één kilogram, terwijl een liter staal bijna acht kilogram weegt.",
      "Deze calculator herschikt ρ = m/V, zodat je elk van de drie waarden kunt vinden die ontbreekt. Eenheden worden voor je omgerekend en het antwoord zie je ook in kg/m³, g/cm³ en lb/ft³, of in de andere eenheden van massa of volume.",
    ],
    howToUse: [
      "Kies wat je wilt berekenen: dichtheid, massa of volume.",
      "Vul de twee bekende waarden in en kies voor elk een eenheid.",
      "Kies in de eenhedenlijst van de gezochte waarde de eenheid waarin je het antwoord wilt.",
      "Lees het resultaat af, met de andere eenheden en de vergelijking met water.",
    ],
    formulas: [
      { title: "Dichtheid", expression: "ρ = m ÷ V", explanation: "Massa gedeeld door het volume dat ze inneemt." },
      { title: "Massa", expression: "m = ρ × V", explanation: "Vermenigvuldig de dichtheid met het volume." },
      { title: "Volume", expression: "V = m ÷ ρ", explanation: "Deel de massa door de dichtheid." },
      { title: "Omrekeningsfactoren", expression: "1 g/cm³ = 1.000 kg/m³ ≈ 62,428 lb/ft³", explanation: "Gebaseerd op de exacte definities 1 lb = 0,45359237 kg en 1 ft³ = 0,028316846592 m³." },
    ],
    examples: [
      {
        title: "Een metalen blok van 810 g en 300 cm³",
        steps: ["ρ = 810 g ÷ 300 cm³", "= 2,7 g/cm³, ofwel 2.700 kg/m³"],
      },
      {
        title: "Massa van 2,5 L olie bij 0,92 g/cm³",
        steps: ["0,92 g/cm³ = 920 kg/m³ en 2,5 L = 0,0025 m³", "m = 920 × 0,0025 = 2,3 kg"],
      },
      {
        title: "Volume van 39,25 kg staal bij 7.850 kg/m³",
        steps: ["V = 39,25 ÷ 7.850 = 0,005 m³", "0,005 m³ = 5 L"],
      },
    ],
    assumptions: [
      "Het materiaal wordt als homogeen beschouwd, zodat één dichtheid het hele monster beschrijft.",
      "De vergelijking met water gebruikt 1.000 kg/m³. Echt water is bij kamertemperatuur iets minder dicht (ongeveer 998 kg/m³ bij 20 °C).",
      "De dichtheid van vloeistoffen en gassen hangt af van temperatuur en druk. Gebruik een dichtheid die onder jouw omstandigheden is gemeten.",
    ],
    faqs: [
      { question: "Is 1 g/cm³ hetzelfde als 1 g/mL?", answer: "Ja. Eén kubieke centimeter en één milliliter zijn hetzelfde volume, dus de twee eenheden zijn identiek." },
      { question: "Hoe reken ik g/cm³ om naar kg/m³?", answer: "Vermenigvuldig met 1.000. Zo is 2,7 g/cm³ gelijk aan 2.700 kg/m³." },
      { question: "Wat is relatieve dichtheid?", answer: "De dichtheid van een materiaal gedeeld door de dichtheid van water. Een waarde boven 1 betekent dat het materiaal in water zinkt; onder 1 dat het drijft." },
    ],
    sourcesUsedFor: ["Definitie ρ = m/V en de SI-eenheid kg/m³.", "Omrekeningsfactoren voor het pond, de kubieke voet en lb/ft³."],
  },
  text: {
    solve: "Bereken",
    solveOptions: { density: "Dichtheid (ρ)", mass: "Massa (m)", volume: "Volume (V)" },
    mass: "Massa (m)",
    massUnit: "Eenheid van massa",
    massUnits: { g: "Gram (g)", kg: "Kilogram (kg)", lb: "Pond (lb)" },
    volume: "Volume (V)",
    volumeUnit: "Eenheid van volume",
    volumeUnits: { cm3: "Kubieke centimeter (cm³ = mL)", L: "Liter (L)", m3: "Kubieke meter (m³)", ft3: "Kubieke voet (ft³)" },
    density: "Dichtheid (ρ)",
    densityUnit: "Eenheid van dichtheid",
    densityUnits: { gcm3: "Gram per kubieke centimeter (g/cm³)", kgm3: "Kilogram per kubieke meter (kg/m³)", lbft3: "Pond per kubieke voet (lb/ft³)" },
    unitHelp: "Voor de waarde die je zoekt, is dit de eenheid van het antwoord.",
    results: { density: "Dichtheid", mass: "Massa", volume: "Volume" },
    inUnit: "In {unit}",
    relative: "Ten opzichte van water (1.000 kg/m³)",
    floats: "Minder dicht dan water, dus het zou in zuiver water drijven.",
    sinks: "Dichter dan water, dus het zou in zuiver water zinken.",
    note: "1 cm³ is hetzelfde als 1 mL. De dichtheid van vloeistoffen en gassen verandert met de temperatuur, en die van gassen ook met de druk.",
  },
};

export default nl;
