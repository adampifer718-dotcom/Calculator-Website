import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HemocytometerText } from "../text/en";

const nl: CalculatorTranslation<HemocytometerText> = {
  content: {
    title: "Celtelcalculator (hemocytometer)",
    shortTitle: "Celtelling",
    summary: "Reken tellingen in een hemocytometer om naar cellen per mL, met de viabiliteit, het totaal aantal levende cellen in een monster en het volume om een gewenst aantal cellen uit te zaaien.",
    metaTitle: "Celtelcalculator – cellen per mL uit een hemocytometer",
    metaDescription:
      "Bereken levende en totale cellen per mL uit tellingen in een verbeterde Neubauer-telkamer, met verdunningsfactor, viabiliteit met trypaanblauw en zaaivolume.",
    keywords: ["hemocytometer", "telkamer", "celtelling", "cellen per ml", "neubauer-telkamer", "trypaanblauw", "viabiliteit", "celdichtheid"],
    intro: [
      "Een hemocytometer is een dik glaasje met een telraster in een kamer met een bekende diepte. In een verbeterde Neubauer-telkamer is elk van de negen grote vakken 1 mm × 1 mm en is de kamer 0,1 mm diep, zodat de vloeistof boven één groot vak 0,1 µL is, oftewel een tienduizendste milliliter.",
      "Het gemiddelde aantal cellen per groot vak, vermenigvuldigd met 10⁴ en met een eventuele verdunning, geeft dus het aantal cellen per mL. Deze calculator doet dat voor levende cellen, telt de dode (gekleurde) cellen erbij op voor de totale telling en de viabiliteit, en berekent hoeveel cellen een monster bevat en hoeveel je ervan moet nemen om een bepaald aantal cellen uit te zaaien.",
    ],
    howToUse: [
      "Tel de levende cellen in een aantal grote vakken, bijvoorbeeld de vier hoekvakken, en vul het totaal en het aantal vakken in.",
      "Heb je de cellen gekleurd, bijvoorbeeld met trypaanblauw, vul dan ook de dode (gekleurde) cellen in die je in dezelfde vakken hebt geteld.",
      "Vul de verdunningsfactor in: 2 als je gelijke volumes cellen en kleurstof hebt gemengd, 1 als de cellen niet verdund zijn.",
      "Vul eventueel het volume van de suspensie in en het aantal cellen dat je wilt uitzaaien.",
    ],
    formulas: [
      { title: "Celconcentratie", expression: "cellen/mL = (getelde cellen ÷ getelde grote vakken) × verdunningsfactor × 10⁴", explanation: "Eén groot vak bevat 1 mm × 1 mm × 0,1 mm = 0,1 mm³ = 10⁻⁴ mL, dus de telling per vak maal 10⁴ geeft het aantal cellen per mL." },
      { title: "Viabiliteit", expression: "viabiliteit % = levend ÷ (levend + dood) × 100", explanation: "Het aandeel getelde cellen dat de kleurstof buitensluit." },
      { title: "Totaal aantal cellen en zaaivolume", expression: "totaal levende cellen = levende cellen/mL × volume; zaaivolume = gewenst aantal cellen ÷ levende cellen/mL", explanation: "De concentratie wordt opgeschaald naar de hele suspensie, of teruggerekend naar het volume dat het benodigde aantal cellen bevat." },
    ],
    examples: [
      {
        title: "Telling met trypaanblauw in vier hoekvakken",
        steps: [
          "Gemiddelde per vak: 182 ÷ 4 = 45,5 levende cellen.",
          "Levende cellen/mL: 45,5 × 2 × 10⁴ = 910.000 = 9,1 × 10⁵.",
          "Viabiliteit: 182 ÷ (182 + 14) = 92,9%.",
          "Volume voor 1.000.000 cellen: 1.000.000 ÷ 910.000 ≈ 1,099 mL.",
        ],
      },
      {
        title: "Een dichte kweek, 1 op 10 verdund",
        steps: ["Gemiddelde per vak: 95 ÷ 5 = 19 cellen.", "Levende cellen/mL: 19 × 10 × 10⁴ = 1,9 × 10⁶."],
      },
      {
        title: "Een dun, onverdund monster",
        steps: [
          "Gemiddelde per vak: 37 ÷ 4 = 9,25 cellen.",
          "Levende cellen/mL: 9,25 × 1 × 10⁴ = 9,25 × 10⁴.",
          "Met maar 37 getelde cellen is alleen al de telfout ongeveer ±16% (1 ÷ √37).",
        ],
      },
    ],
    assumptions: [
      "De kamer is een verbeterde Neubauer-telkamer met grote vakken van 1 mm² en een diepte van 0,1 mm. Andere kamers, zoals Fuchs-Rosenthal, of tellingen in de kleinere vakken vereisen een andere factor.",
      "De cellen zijn gelijkmatig gemengd en de kamer is correct gevuld, zonder overlopen of luchtbellen.",
      "Cellen liggen willekeurig verdeeld, dus de telling volgt de poissonstatistiek: de relatieve fout is ongeveer 1 ÷ √(getelde cellen). Lage tellingen zijn veel minder nauwkeurig, en verschillen tussen tellers voegen nog meer fout toe.",
      "Viabiliteit op basis van kleurstofuitsluiting is een schatting. Cellen die de kleurstof buitensluiten, zijn niet per se gezond, en de kleuringstijd beïnvloedt het resultaat.",
    ],
    faqs: [
      { question: "Waarom vermenigvuldigen met 10⁴?", answer: "Een groot vak is 1 mm aan elke zijde en de kamer is 0,1 mm diep, dus het bevat 0,1 mm³. Dat is 0,1 µL, oftewel 10⁻⁴ mL. Cellen per vak gedeeld door 10⁻⁴ mL is hetzelfde als cellen per vak maal 10⁴ per mL." },
      { question: "Welke verdunningsfactor gebruik ik met trypaanblauw?", answer: "Het totale volume gedeeld door het volume celsuspensie. Gelijke volumes cellen en trypaanblauw (bijvoorbeeld 10 µL + 10 µL) geven een verdunningsfactor van 2. Laat je die weg, dan halveert het resultaat." },
      { question: "Hoeveel cellen moet ik tellen?", answer: "Hoe meer cellen je telt, hoe kleiner de telfout, die ongeveer 1 ÷ √(aantal getelde cellen) is. Een paar honderd cellen over meerdere vakken geeft een fout van ongeveer 5–6%; 30 cellen geeft ongeveer 18%." },
    ],
    sourcesUsedFor: [
      "Cellen per mL = gemiddelde telling per groot vak × verdunningsfactor × 10⁴, en het advies om opnieuw te tellen bij een andere verdunning buiten ongeveer 20–50 cellen per vak.",
      "De telfout van ongeveer de wortel uit het aantal getelde cellen, en het advies om in totaal een paar honderd cellen te tellen.",
    ],
  },
  text: {
    live: "Getelde levende (ongekleurde) cellen",
    liveHelp: "Het totaal aantal levende cellen in alle grote vakken die je hebt geteld.",
    dead: "Getelde dode (gekleurde) cellen",
    deadHelp: "Optioneel. Cellen die de kleurstof hebben opgenomen, zoals trypaanblauw, in dezelfde vakken. Gebruikt voor de totale telling en de viabiliteit.",
    squares: "Getelde grote vakken",
    squaresHelp: "Elk groot vak van een verbeterde Neubauer-telkamer is 1 mm × 1 mm × 0,1 mm diep, oftewel 0,1 µL. Meestal worden de 4 hoekvakken geteld.",
    dilution: "Verdunningsfactor",
    dilutionHelp: "Totaal volume ÷ volume celsuspensie. Vul 2 in bij gelijke volumes cellen en trypaanblauw (1:1). Vul 1 in als er niet verdund is.",
    volume: "Monstervolume",
    volumeHelp: "Optioneel. Het volume van de celsuspensie, om het totaal aantal levende cellen erin te berekenen.",
    target: "Benodigde cellen om uit te zaaien",
    targetHelp: "Optioneel. Het aantal levende cellen dat je wilt uitzaaien, om het volume suspensie te berekenen dat je moet nemen.",
    errors: {
      noLiveForTarget: "Er zijn geen levende cellen geteld, dus het zaaivolume kan niet worden berekend.",
    },
    cellsPerMl: "{value} cellen/mL",
    cellsPerMlUnit: "cellen/mL",
    cellsUnit: "cellen",
    result: "Levende cellen per mL",
    caption: "Levende cellen ÷ getelde vakken × verdunningsfactor × 10⁴",
    totalPerMl: "Totaal aantal cellen per mL (levend + dood)",
    viability: "Viabiliteit",
    averagePerSquare: "Gemiddeld aantal levende cellen per groot vak",
    totalLive: "Levende cellen in {volume} mL",
    volumeNeeded: "Volume suspensie voor {target} cellen",
    volumeNeededUl: "Hetzelfde volume in µL",
    notes: {
      poisson: "Je hebt in totaal {count} cellen geteld. De telstatistiek alleen geeft al een relatieve fout van ongeveer ±{cv}% (1 ÷ √telling); meer cellen tellen verkleint die. Vaak wordt aangeraden in totaal een paar honderd cellen te tellen.",
      density: "Het gemiddelde van {average} levende cellen per vak ligt buiten het bereik van ongeveer 20–50 cellen per vak dat vaak wordt aanbevolen voor het tellen. Overweeg de verdunning aan te passen en opnieuw te tellen.",
      noCells: "Er zijn geen levende cellen geteld, dus de concentratie levende cellen is nul. Controleer het monster en de verdunning.",
      exceedsSample: "Voor het uitzaaidoel zijn meer levende cellen nodig dan het monstervolume bevat.",
      general: "Dit gaat uit van een verbeterde Neubauer-telkamer met een diepte van 0,1 mm en grote vakken van 1 mm². Andere kamers, of tellen in kleine vakken, vereisen een andere factor.",
    },
  },
};

export default nl;
