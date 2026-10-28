import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WindTurbineText } from "../text/en";

const nl: CalculatorTranslation<WindTurbineText> = {
  content: {
    title: "Windturbinevermogencalculator",
    shortTitle: "Windturbinevermogen",
    summary:
      "Schat het vermogen van een windturbine uit de rotordiameter, de windsnelheid, de luchtdichtheid en de vermogenscoëfficiënt, met een ruwe schatting van de jaarlijkse energie.",
    metaTitle: "Windturbinevermogencalculator – vermogen in kW en kWh",
    metaDescription:
      "Bereken het vermogen van een windturbine uit rotordiameter, windsnelheid, luchtdichtheid en Cp, toets het aan de Betz-limiet en schat de kWh per jaar.",
    keywords: ["windturbine berekenen", "windvermogen formule", "vermogen windturbine", "rotoroppervlak", "vermogenscoëfficiënt", "Betz-limiet", "capaciteitsfactor", "windenergie kWh"],
    intro: [
      "Een windturbine zet een deel van de bewegingsenergie van stromende lucht om in elektriciteit. Het beschikbare vermogen hangt af van hoeveel lucht door de cirkel gaat die de bladen beschrijven, hoe dicht die lucht is en vooral hoe snel ze beweegt: het vermogen groeit met de derde macht van de windsnelheid, dus bij een twee keer zo hoge snelheid krijg je acht keer zoveel vermogen.",
      "Vul de rotordiameter, de windsnelheid en de vermogenscoëfficiënt van de turbine in om het vermogen te schatten. Je kunt de uitkomst ook begrenzen op het nominale vermogen van de generator en een capaciteitsfactor toevoegen voor een ruwe schatting van de energie per jaar.",
    ],
    howToUse: [
      "Vul de rotordiameter in meter of voet in.",
      "Vul de windsnelheid op ashoogte in en kies de eenheid.",
      "Houd de standaardluchtdichtheid van 1,225 kg/m³ aan, of vul een waarde in voor jouw hoogte en temperatuur.",
      "Vul de vermogenscoëfficiënt Cp in. 0,40 is een redelijke waarde voor een goede moderne turbine; hij kan niet hoger zijn dan de Betz-limiet van ongeveer 0,593.",
      "Vul eventueel het nominale vermogen in om het vermogen te begrenzen, en een capaciteitsfactor om de energie over een jaar te schatten.",
    ],
    formulas: [
      { title: "Rotoroppervlak", expression: "A = π × (D ÷ 2)²", explanation: "D is de rotordiameter. Een rotor van 80 m bestrijkt ongeveer 5.027 m²." },
      {
        title: "Turbinevermogen",
        expression: "P = ½ × ρ × A × v³ × Cp",
        explanation: "ρ is de luchtdichtheid in kg/m³, v de windsnelheid in m/s en Cp de vermogenscoëfficiënt. De uitkomst is in watt.",
      },
      {
        title: "Betz-limiet",
        expression: "Cp ≤ 16/27 ≈ 0,593",
        explanation:
          "Een ideale rotor kan hoogstens 16/27 van het vermogen in de wind die erdoorheen stroomt opvangen. Echte turbines vangen minder op, meestal ruim onder 0,5, zelfs in hun beste werkpunt.",
      },
      {
        title: "Jaarlijkse energie (ruw)",
        expression: "E = P × 8.760 h × capaciteitsfactor",
        explanation: "P is het vermogen, begrensd op het nominale vermogen als je dat invult. De capaciteitsfactor houdt rekening met de tijd dat het minder hard waait.",
      },
    ],
    examples: [
      {
        title: "Rotor van 80 m bij een wind van 10 m/s",
        steps: ["A = π × 40² ≈ 5.026,55 m²", "P = 0,5 × 1,225 × 5.026,55 × 10³ × 0,40 ≈ 1.231.504 W", "Vermogen ≈ 1.231,50 kW, ongeveer 1,23 MW"],
      },
      {
        title: "Kleine turbine van 10 ft bij een bries van 12 mph",
        steps: ["D = 10 × 0,3048 = 3,048 m, dus A ≈ 7,297 m²", "v = 12 × 0,44704 = 5,364 m/s", "P = 0,5 × 1,225 × 7,297 × 5,364³ × 0,35 ≈ 241 W, ongeveer 0,24 kW"],
      },
      {
        title: "Rotor van 100 m met 2.500 kW nominaal, wind van 12 m/s, capaciteitsfactor 35%",
        steps: [
          "A = π × 50² ≈ 7.853,98 m²",
          "Rotorvermogen = 0,5 × 1,225 × 7.853,98 × 12³ × 0,45 ≈ 3.740,69 kW, meer dan het nominale vermogen van 2.500 kW",
          "Het vermogen wordt begrensd op 2.500 kW",
          "Jaarlijkse energie ≈ 2.500 × 8.760 × 0,35 = 7.665.000 kWh",
        ],
      },
    ],
    assumptions: [
      "De windsnelheid is constant en gelijk over de hele rotor. Echte wind varieert per seconde en met de hoogte, en omdat het vermogen afhangt van de derde macht van de snelheid, is het gemiddelde vermogen hoger dan het vermogen bij de gemiddelde snelheid.",
      "De vermogenscoëfficiënt wordt als constant beschouwd. In werkelijkheid verandert hij met de windsnelheid, en elke turbine heeft een eigen vermogenscurve, inschakelsnelheid en uitschakelsnelheid.",
      "De jaarlijkse energie is een ruwe schatting met de formule hierboven, geen locatieonderzoek. Voor een echte installatie heb je gemeten windgegevens en de vermogenscurve van de fabrikant nodig.",
      "Verliezen in generator, tandwielkast en elektrische onderdelen worden geacht in de ingevulde vermogenscoëfficiënt te zitten.",
    ],
    faqs: [
      {
        question: "Wat is de Betz-limiet?",
        answer:
          "Dat is het theoretische maximale deel van het windvermogen dat een rotor kan onttrekken: 16/27, ongeveer 59,3%. Als een rotor de lucht helemaal zou afremmen, kon er geen lucht meer doorheen stromen, dus er moet altijd energie overblijven in de wind die de turbine verlaat.",
      },
      {
        question: "Waarom is de windsnelheid zo belangrijk?",
        answer:
          "Het vermogen in de wind groeit met de derde macht van de snelheid. Een locatie met een gemiddelde wind van 7 m/s heeft ongeveer 31% meer vermogen beschikbaar ((7 ÷ 6,4)³ ≈ 1,31) dan een locatie met 6,4 m/s, dus kleine verschillen in plaats en mashoogte maken veel uit.",
      },
      {
        question: "Welke capaciteitsfactor moet ik gebruiken?",
        answer:
          "Die hangt sterk af van de locatie, de mashoogte en de turbine, dus er is niet één juiste waarde. Gebruik gemeten windgegevens voor je locatie, of gepubliceerde cijfers voor vergelijkbare turbines in je regio. Kleine turbines op beschutte plekken halen vaak veel lagere waarden dan grote turbines op open, winderige locaties.",
      },
    ],
    sourcesUsedFor: [
      "Het vermogen in de wind, P = ½ρAv³, de vermogenscoëfficiënt en de Betz-limiet van 16/27.",
      "De luchtdichtheid op zeeniveau van 1,225 kg/m³ in de internationale standaardatmosfeer.",
    ],
  },
  text: {
    diameter: "Rotordiameter",
    diameterHelp: "De diameter van de cirkel die de bladpunten beschrijven (twee keer de bladlengte plus de naaf).",
    diameterUnit: "Eenheid van diameter",
    diameterUnits: { m: "Meter (m)", ft: "Voet (ft)" },
    speed: "Windsnelheid",
    speedHelp: "De windsnelheid op ashoogte. Het vermogen stijgt met de derde macht van de snelheid, dus een kleine verandering maakt veel uit.",
    speedUnit: "Eenheid van snelheid",
    speedUnits: { ms: "Meter per seconde (m/s)", kmh: "Kilometer per uur (km/h)", mph: "Mijl per uur (mph)", kn: "Knopen (kn)" },
    density: "Luchtdichtheid",
    densityHelp:
      "1,225 kg/m³ is de waarde van de internationale standaardatmosfeer op zeeniveau bij 15 °C. Op grotere hoogte en bij warm weer is de lucht ijler.",
    cp: "Vermogenscoëfficiënt (Cp)",
    cpHelp:
      "Het deel van het windvermogen dat de rotor omzet in vermogen. 0,40 is een redelijke waarde voor een goede moderne turbine; het theoretische maximum is 16/27 ≈ 0,593 (de Betz-limiet).",
    ratedPower: "Nominaal vermogen (optioneel)",
    ratedPowerHelp: "Het vermogen op het typeplaatje van de generator. Als je het invult, wordt het vermogen op deze waarde begrensd.",
    capacityFactor: "Capaciteitsfactor (optioneel)",
    capacityFactorHelp:
      "Het gemiddelde vermogen over een jaar als percentage van het vermogen dat voor de schatting wordt gebruikt. Laat leeg om de jaarlijkse energie over te slaan.",
    errors: {
      betz: "De vermogenscoëfficiënt kan niet hoger zijn dan 16/27 ≈ 0,5926 (de Betz-limiet). Geen enkele rotor kan een groter deel van het windvermogen opvangen.",
    },
    power: "Vermogen van de turbine",
    caption: "Rotoroppervlak {area}, wind {speed}, Cp {cp}.",
    powerW: "Vermogen in watt",
    aeroPower: "Rotorvermogen vóór begrenzing op het nominale vermogen",
    windPower: "Vermogen in de wind door het rotoroppervlak (Cp = 1)",
    betzPower: "Maximaal vermogen dat een rotor kan opvangen (Betz-limiet)",
    sweptArea: "Rotoroppervlak",
    speedMs: "Windsnelheid in m/s",
    annualEnergy: "Jaarlijkse energie, ruwe schatting",
    annualEnergyMwh: "Jaarlijkse energie in MWh",
    notes: {
      capped:
        "De rotor zou bij deze windsnelheid meer kunnen leveren dan het nominale vermogen, dus het vermogen wordt begrensd op het nominale vermogen van {rated}.",
      annual:
        "De jaarlijkse energie is een ruwe schatting: het vermogen hierboven × 8.760 uur × de capaciteitsfactor. De werkelijke opbrengst hangt af van hoe de windsnelheid over het jaar varieert, de vermogenscurve van de turbine, stilstand en verliezen.",
      single:
        "Dit is het vermogen bij één constante windsnelheid. Echte wind verandert voortdurend, en turbines leveren niets onder hun inschakelsnelheid en schakelen uit boven hun uitschakelsnelheid.",
    },
  },
};

export default nl;
