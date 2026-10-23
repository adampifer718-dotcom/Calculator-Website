import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PotentialEnergyText } from "../text/en";

const nl: CalculatorTranslation<PotentialEnergyText> = {
  content: {
    title: "Potentiële-energiecalculator",
    shortTitle: "Potentiële energie",
    summary: "Bereken de zwaarte-energie (m·g·h) of de energie in een veer (½·k·x²), of los een van beide formules op naar de ontbrekende waarde.",
    metaTitle: "Potentiële-energiecalculator – PE = mgh en ½kx²",
    metaDescription:
      "Bereken de zwaarte-energie uit massa, hoogte en valversnelling, of de veerenergie, en los op naar massa, hoogte, k of x in elke eenheid.",
    keywords: ["potentiële energie berekenen", "zwaarte-energie", "PE = mgh", "veerenergie", "elastische energie", "½kx²", "joule", "opgeslagen energie"],
    intro: [
      "Potentiële energie is energie die is opgeslagen door de plaats van een voorwerp of doordat het vervormd is. Til je een doos van 12 kg op een platform van 2,5 m, dan sla je er ongeveer 294 joule in op, die als beweging terugkomt als de doos valt. Druk je een veer in, dan slaat die energie op die vrijkomt als je hem loslaat.",
      "Deze calculator rekent met beide soorten. Voor zwaartekracht gebruikt hij PE = m·g·h, met de aarde, de maan, Mars of een eigen valversnelling. Voor een veer gebruikt hij PE = ½·k·x². Je kunt beide formules ook omgekeerd oplossen naar de massa, de hoogte, de veerconstante of de uitrekking.",
    ],
    howToUse: [
      "Kies zwaarte-energie of elastische (veer)energie.",
      "Kies wat je wilt berekenen. Het invoerveld voor die waarde verdwijnt.",
      "Vul de andere waarden in en kies hun eenheden. Kies voor de zwaartekracht een hemellichaam of vul een eigen waarde in.",
      "Lees de uitkomst af in de gekozen eenheid, met dezelfde waarde in de andere eenheden.",
    ],
    formulas: [
      {
        title: "Zwaarte-energie",
        expression: "PE = m × g × h",
        explanation: "Met m in kilogram, g in m/s² en h in meter krijg je PE in joule. h wordt gemeten vanaf een referentieniveau dat je zelf kiest.",
      },
      {
        title: "Elastische energie",
        expression: "PE = ½ × k × x²",
        explanation: "k is de veerconstante in N/m en x de uitrekking of indrukking ten opzichte van de ontspannen lengte, in meter.",
      },
      {
        title: "Omgekeerd oplossen",
        expression: "m = PE ÷ (g·h)   h = PE ÷ (m·g)\nk = 2·PE ÷ x²   x = √(2·PE ÷ k)",
        explanation: "Dezelfde formules, herschreven naar de onbekende.",
      },
      {
        title: "Energie-eenheden",
        expression: "1 kJ = 1.000 J   1 Wh = 3.600 J   1 kWh = 3.600.000 J\n1 ft·lbf = 1,3558179483314 J",
        explanation: "Een foot-pound is 0,3048 m × 4,4482216152605 N, beide exact.",
      },
    ],
    examples: [
      {
        title: "Een doos van 12 kg op een platform van 2,5 m tillen",
        steps: ["PE = m × g × h", "= 12 × 9,80665 × 2,5", "= 294,1995 J (ongeveer 0,29 kJ)"],
      },
      {
        title: "Hoe hoog kan 1 kWh een auto van 1.000 kg optillen?",
        steps: ["1 kWh = 3.600.000 J", "h = PE ÷ (m × g) = 3.600.000 ÷ (1.000 × 9,80665)", "≈ 367,10 m"],
      },
      {
        title: "Een veer van 400 N/m, 15 cm ingedrukt",
        steps: ["15 cm = 0,15 m", "PE = ½ × 400 × 0,15²", "= 200 × 0,0225 = 4,5 J"],
      },
    ],
    assumptions: [
      "De zwaartekracht wordt over de hele hoogte als constant beschouwd, wat nauwkeurig is dicht bij het oppervlak van een planeet. Bij hoogten van honderden kilometers gaat de afname van de zwaartekracht met de afstand meetellen.",
      "Voor de aarde wordt de standaardvalversnelling gebruikt, 9,80665 m/s², die per definitie exact is. De werkelijke zwaartekracht verschilt iets met breedtegraad en hoogte. De waarden voor de maan en Mars zijn gemiddelde oppervlaktewaarden uit factsheets van NASA.",
      "De veer is ideaal: hij volgt de wet van Hooke en wordt niet voorbij zijn elasticiteitsgrens uitgerekt. Wrijving, luchtweerstand en energieverlies als warmte worden genegeerd.",
    ],
    faqs: [
      {
        question: "Vanaf waar moet ik de hoogte meten?",
        answer: "Vanaf elk niveau dat je als nul kiest, zoals de vloer, de grond of een tafelblad. De potentiële energie hangt af van die keuze, maar de verandering in energie tussen twee hoogten niet, en in de praktijk gaat het om die verandering.",
      },
      {
        question: "Hoe hangt potentiële energie samen met kinetische energie?",
        answer: "Als een voorwerp zonder luchtweerstand valt, wordt de potentiële energie omgezet in kinetische energie. Een doos van 12 kg die van 2,5 m valt, raakt de vloer met ongeveer 294 J kinetische energie en een snelheid van √(2gh) ≈ 7,0 m/s.",
      },
      {
        question: "Maakt het uit of een veer wordt uitgerekt of ingedrukt?",
        answer: "Nee. De energie hangt af van x², dus een ideale veer die over dezelfde afstand wordt uitgerekt of ingedrukt, slaat dezelfde energie op.",
      },
    ],
    sourcesUsedFor: [
      "Zwaarte-energie dicht bij het aardoppervlak (mgh), elastische energie van een veer (½kx²) en de keuze van het nulniveau.",
      "De valversnelling aan het maanoppervlak, 1,62 m/s².",
      "De gemiddelde valversnelling aan het oppervlak van Mars, 3,73 m/s².",
    ],
  },
  text: {
    mode: "Soort potentiële energie",
    modes: { gravitational: "Zwaarte-energie (m·g·h)", elastic: "Elastische veer (½·k·x²)" },
    solve: "Bereken",
    gSolveOptions: { energy: "Potentiële energie (PE)", mass: "Massa (m)", height: "Hoogte (h)" },
    eSolveOptions: { energy: "Opgeslagen energie (PE)", k: "Veerconstante (k)", x: "Uitrekking of indrukking (x)" },
    mass: "Massa (m)",
    massUnit: "Eenheid van massa",
    massUnits: { kg: "Kilogram (kg)", g: "Gram (g)", lb: "Pond (lb)" },
    height: "Hoogte boven het referentieniveau (h)",
    heightHelp: "Gemeten vanaf het niveau dat je nul noemt, zoals de vloer of de grond.",
    heightUnit: "Eenheid van hoogte",
    heightUnits: { m: "Meter (m)", cm: "Centimeter (cm)", ft: "Voet (ft)" },
    gravity: "Valversnelling (g)",
    gravityOptions: { earth: "Aarde, standaard (9,80665 m/s²)", moon: "Maan (1,62 m/s²)", mars: "Mars (3,73 m/s²)", custom: "Eigen waarde" },
    customG: "Eigen valversnelling",
    energy: "Potentiële energie (PE)",
    energyUnit: "Eenheid van energie",
    energyUnits: { J: "Joule (J)", kJ: "Kilojoule (kJ)", Wh: "Wattuur (Wh)", kWh: "Kilowattuur (kWh)", ftlbf: "Foot-pound (ft·lbf)" },
    k: "Veerconstante (k)",
    kHelp: "Hoe stijf de veer is: de kracht in newton die nodig is om hem één meter uit te rekken.",
    x: "Uitrekking of indrukking (x)",
    xHelp: "De afstand ten opzichte van de ontspannen lengte van de veer. Indrukken en uitrekken slaan dezelfde energie op.",
    xUnit: "Eenheid van uitrekking",
    xUnits: { m: "Meter (m)", cm: "Centimeter (cm)", in: "Inch (in)" },
    results: {
      gEnergy: "Zwaarte-energie",
      mass: "Benodigde massa",
      height: "Benodigde hoogte",
      eEnergy: "Elastische energie",
      k: "Benodigde veerconstante",
      x: "Benodigde uitrekking of indrukking",
    },
    captions: {
      gEnergy: "PE = m × g × h",
      mass: "m = PE ÷ (g × h)",
      height: "h = PE ÷ (m × g)",
      eEnergy: "PE = ½ × k × x²",
      k: "k = 2 × PE ÷ x²",
      x: "x = √(2 × PE ÷ k)",
    },
    inUnit: "In {unit}",
    weight: "Gewicht (zwaartekracht, m × g)",
    fallSpeed: "Snelheid na een val over hoogte h (zonder luchtweerstand)",
    springForce: "Veerkracht bij die uitrekking (k × x)",
    notes: {
      reference: "Potentiële energie wordt gemeten ten opzichte van de hoogte die je als nul hebt gekozen. Alleen hoogteverschillen doen ertoe.",
      gravity: "Gebruikt g = {g} m/s², constant verondersteld over de hele hoogte.",
      hooke: "Gaat uit van een ideale veer die de wet van Hooke volgt (F = k × x) en niet voorbij zijn elasticiteitsgrens wordt uitgerekt.",
    },
  },
};

export default nl;
