import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { UptimeSlaText } from "../text/en";

const components = "{n} componenten";

const nl: CalculatorTranslation<UptimeSlaText> = {
  content: {
    title: "Uptime- en SLA-calculator",
    shortTitle: "Uptime / SLA",
    summary: "Zet een SLA-percentage om in toegestane downtime per dag, week, maand en jaar, bereken de behaalde beschikbaarheid uit werkelijke downtime, of combineer componenten in serie of parallel.",
    metaTitle: "Uptime- en SLA-calculator – toegestane downtime en negens",
    metaDescription:
      "Reken een uptime-SLA zoals 99,9% om naar toegestane downtime per dag, week, maand en jaar, meet de behaalde beschikbaarheid en combineer onderdelen.",
    keywords: ["uptime berekenen", "sla calculator", "toegestane downtime", "99,9 uptime", "beschikbaarheid berekenen", "aantal negens", "samengestelde sla", "downtime per maand"],
    intro: [
      "Een service level agreement (SLA) belooft vaak een beschikbaarheid zoals 99,9%, „drie negens”. Dat klinkt bijna perfect, maar staat nog steeds ongeveer 43 minuten downtime per maand toe. Als je de marge als tijd ziet, zijn doelen makkelijker te vergelijken en kun je onderhoud er beter omheen plannen.",
      "Deze calculator zet een beschikbaarheidsdoel om in toegestane downtime voor een dag, een week, een maand en een jaar; berekent de beschikbaarheid die je werkelijk hebt behaald uit gemeten downtime; en combineert de beschikbaarheid van meerdere componenten die van elkaar afhangen (in serie) of elkaar opvangen (parallel).",
    ],
    howToUse: [
      "Kies wat je wilt berekenen.",
      "Vul voor de toegestane downtime het SLA-percentage in. De maandelijkse marge staat bovenaan, gevolgd door een tabel voor elke periode.",
      "Vul voor de behaalde beschikbaarheid de lengte van de meetperiode en de totale downtime daarin in.",
      "Vul voor meerdere componenten hun beschikbaarheid in procenten in en kies of ze allemaal moeten werken (serie) of dat er één genoeg is (parallel).",
    ],
    formulas: [
      { title: "Toegestane downtime", expression: "downtime = (1 − A) × periode", explanation: "A is de beschikbaarheid als fractie (99,9% = 0,999). Een jaar is 365 dagen en een maand 365 ÷ 12 = 30,42 dagen." },
      { title: "Behaalde beschikbaarheid", expression: "A = 1 − downtime ÷ periode", explanation: "Beide tijden moeten in dezelfde eenheid staan; de calculator rekent ze voor je om." },
      { title: "Aantal negens", expression: "negens = −log₁₀(1 − A)", explanation: "99,9% geeft 3 negens en 99,95% ongeveer 3,3. Voor 100% is het niet gedefinieerd." },
      { title: "Componenten in serie", expression: "A = A₁ × A₂ × … × Aₙ", explanation: "Elke component moet werken, dus de gecombineerde beschikbaarheid ligt onder die van de zwakste." },
      { title: "Componenten parallel", expression: "A = 1 − (1 − A₁) × (1 − A₂) × … × (1 − Aₙ)", explanation: "Het systeem ligt alleen plat als alle redundante componenten tegelijk uitvallen." },
    ],
    examples: [
      {
        title: "Maandelijkse downtime toegestaan bij een SLA van 99,9%",
        steps: ["Een maand is 365 × 86.400 ÷ 12 = 2.628.000 seconden", "Toegestane downtime = (1 − 0,999) × 2.628.000 = 2.628 s", "2.628 s = 43 min 48 s"],
      },
      {
        title: "25 minuten downtime in een maand van 30 dagen",
        steps: ["Periode = 30 × 1.440 = 43.200 min", "Aandeel downtime = 25 ÷ 43.200 ≈ 0,0579%", "Beschikbaarheid = 100% − 0,0579% ≈ 99,94213%"],
      },
      {
        title: "Twee redundante servers van elk 99,9%",
        steps: ["Elke server ligt 0,1% van de tijd plat", "Beide liggen tegelijk plat gedurende 0,001 × 0,001 = 0,000001 van de tijd", "Beschikbaarheid = 1 − 0,000001 = 99,9999%, oftewel 6 negens"],
      },
    ],
    assumptions: [
      "Een jaar wordt gerekend als 365 dagen en een maand als een twaalfde jaar (ongeveer 30,42 dagen). Contracten kunnen kalendermaanden, maanden van 30 dagen of jaren van 365,25 dagen gebruiken, wat de marge iets verandert.",
      "Veel SLA's sluiten gepland onderhoud uit en tellen alleen bepaalde soorten storingen mee. Controleer de definities in het contract voordat je cijfers vergelijkt.",
      "Gecombineerde beschikbaarheden gaan ervan uit dat componenten onafhankelijk van elkaar uitvallen. Gedeelde stroomvoorziening, netwerken, softwarereleases of leveranciers maken echte systemen minder beschikbaar dan de formules suggereren.",
    ],
    faqs: [
      { question: "Hoeveel downtime staat 99,99% toe?", answer: "Ongeveer 52 minuten 34 seconden per jaar van 365 dagen, of 4 minuten 23 seconden per maand van 365 ÷ 12 dagen. Elke extra negen deelt de marge door 10." },
      { question: "Waarom is een keten van betrouwbare diensten minder betrouwbaar dan elke dienst afzonderlijk?", answer: "Als een verzoek elke dienst in de keten nodig heeft, veroorzaakt het uitvallen van één ervan al een storing. De beschikbaarheden worden vermenigvuldigd: drie diensten van 99,9% geven samen ongeveer 99,7%, wat ruwweg drie keer zoveel downtime is als bij één ervan." },
      { question: "Verdubbelt een tweede server het aantal negens?", answer: "In het ideale geval wel: twee onafhankelijke servers van 99,9% geven 99,9999%. In de praktijk blijven de load balancer, de database en gedeelde oorzaken van storingen over, dus de echte winst is kleiner." },
    ],
    sourcesUsedFor: [
      "Beschikbaarheid in tijd als uptime ÷ (uptime + downtime), en de downtime die een beschikbaarheidsdoel per periode toestaat.",
      "Het combineren van beschikbaarheden: het product voor componenten in serie en één min het product van de onbeschikbaarheden voor redundante componenten.",
      "Uitgewerkte berekeningen van beschikbaarheid in serie en parallel, en de aanname dat storingen onafhankelijk zijn.",
    ],
  },
  text: {
    mode: "Wat wil je berekenen?",
    modes: {
      allowed: "Downtime toegestaan door een SLA",
      achieved: "Beschikbaarheid uit downtime",
      composite: "Beschikbaarheid van meerdere componenten",
    },
    sla: "Beschikbaarheidsdoel (SLA)",
    slaHelp: "De beloofde uptime als percentage, bijvoorbeeld 99,9 voor „drie negens”.",
    periodLength: "Meetperiode",
    periodUnit: "Eenheid van de periode",
    downtime: "Downtime in de periode",
    downtimeUnit: "Eenheid van de downtime",
    timeUnits: { s: "Seconden", min: "Minuten", h: "Uren", d: "Dagen", w: "Weken", mo: "Maanden (365 ÷ 12 dagen)", y: "Jaren (365 dagen)" },
    components: "Beschikbaarheid per component (%)",
    componentsHelp: "Eén beschikbaarheid per component, gescheiden door komma's, spaties of nieuwe regels, bijvoorbeeld 99.95, 99.9, 99.99.",
    topology: "Hoe zijn de componenten verbonden?",
    topologies: {
      serial: "In serie (alle moeten werken)",
      parallel: "Parallel (één is genoeg)",
    },
    errors: {
      empty: "Vul minstens één beschikbaarheid in.",
      tooMany: "Vul hoogstens {max} beschikbaarheden in.",
      notNumber: "„{token}” is geen getal. Scheid waarden met komma's, spaties of nieuwe regels.",
      tooLarge: "„{token}” is te groot.",
      outOfRange: "{value} is geen geldige beschikbaarheid. Elke waarde moet tussen 0 en 100% liggen.",
      downtimeTooLong: "De downtime kan niet langer zijn dan de meetperiode.",
    },
    allowedMonth: "Toegestane downtime per maand",
    achievedAvailability: "Behaalde beschikbaarheid",
    compositeAvailability: "Gecombineerde beschikbaarheid",
    captionAllowed: "Bij een beschikbaarheid van {sla}, met een maand van 365 ÷ 12 dagen.",
    captionAchieved: "{downtime} downtime in {period}.",
    captionComposite: "{count} {topology}.",
    componentCount: {
      zero: components,
      one: "{n} component",
      two: components,
      few: components,
      many: components,
      other: components,
    },
    topologyCaption: { serial: "in serie", parallel: "parallel" },
    nines: "Aantal negens",
    downtimeYear: "Toegestane downtime per jaar",
    downtimeYearHours: "Toegestane downtime per jaar in uren",
    downtimeFraction: "Downtime als aandeel van de periode",
    uptime: "Uptime in de periode",
    equivalentMonth: "Dezelfde mate van downtime per maand",
    equivalentYear: "Dezelfde mate van downtime per jaar",
    serialValue: "Gecombineerde beschikbaarheid in serie",
    parallelValue: "Gecombineerde beschikbaarheid parallel",
    weakest: "Laagste beschikbaarheid van een component",
    table: {
      caption: "Toegestane downtime per periode",
      period: "Periode",
      downtime: "Toegestane downtime",
      uptime: "Vereiste uptime",
    },
    periods: { day: "Dag", week: "Week", month: "Maand (365 ÷ 12 dagen)", year: "Jaar (365 dagen)" },
    duration: {
      d: "{n} d",
      h: "{n} u",
      min: "{n} min",
      s: "{n} s",
      pair: "{a} {b}",
    },
    notes: {
      periods: "Een jaar wordt gerekend als 365 dagen en een maand als een twaalfde daarvan (30,42 dagen). Contracten kunnen de periode anders definiëren, bijvoorbeeld als kalendermaand, en sluiten gepland onderhoud vaak uit.",
      hundred: "Een beschikbaarheid van 100% staat helemaal geen downtime toe, dus het aantal negens is niet gedefinieerd.",
      zero: "Zonder downtime is de beschikbaarheid 100% en is het aantal negens niet gedefinieerd.",
      independent: "Deze formules gaan ervan uit dat de componenten onafhankelijk van elkaar uitvallen. Gedeelde afhankelijkheden, zoals één voeding of één configuratiewijziging, maken de echte beschikbaarheid lager dan berekend.",
      parallelHelp: "Parallel ligt het systeem alleen plat als elke component tegelijk uitvalt, dus redundantie verhoogt de beschikbaarheid.",
      serialHelp: "In serie ligt het systeem plat als een willekeurige component uitvalt, dus de gecombineerde beschikbaarheid is lager dan die van de zwakste component.",
      allDown: "Minstens één component heeft 0% beschikbaarheid, dus een systeem in serie werkt nooit.",
    },
  },
};

export default nl;
