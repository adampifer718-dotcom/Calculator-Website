import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DueDateText } from "../text/en";

const weeks = { zero: "{n} weken", one: "{n} week", two: "{n} weken", few: "{n} weken", many: "{n} weken", other: "{n} weken" };
const days = { zero: "{n} dagen", one: "{n} dag", two: "{n} dagen", few: "{n} dagen", many: "{n} dagen", other: "{n} dagen" };

const nl: CalculatorTranslation<DueDateText> = {
  content: {
    title: "Zwangerschapscalculator voor de uitgerekende datum",
    shortTitle: "Uitgerekende datum",
    summary: "Schat de uitgerekende datum van een zwangerschap uit de laatste menstruatie, de conceptiedatum of een ivf-terugplaatsing, met de huidige zwangerschapsduur en de data van de trimesters.",
    metaTitle: "Zwangerschapscalculator: uitgerekende datum berekenen",
    metaDescription:
      "Schat je uitgerekende datum uit de eerste dag van je laatste menstruatie, de conceptie of een ivf-terugplaatsing, en zie de zwangerschapsduur en trimesters.",
    keywords: ["uitgerekende datum", "zwangerschapscalculator", "hoeveel weken zwanger", "zwangerschapsduur", "regel van Naegele", "ivf uitgerekende datum", "trimester"],
    intro: [
      "De meeste zwangerschappen worden gerekend vanaf de eerste dag van de laatste menstruatie, ook al vindt de conceptie meestal zo'n twee weken later plaats. Een gemiddelde zwangerschap duurt vanaf die datum ongeveer 40 weken, oftewel 280 dagen.",
      "Deze calculator schat de uitgerekende datum uit de laatste menstruatie (aangepast aan je cycluslengte), uit een bekende conceptiedatum of uit een ivf-terugplaatsing van een embryo. Hij toont ook hoeveel weken zwanger je bent op een gekozen datum, het trimester en de data waarop elk trimester eindigt.",
    ],
    howToUse: [
      "Kies waarvan je wilt uitgaan: de laatste menstruatie, de conceptie of een ivf-terugplaatsing.",
      "Vul de datum in. Vul bij de laatste menstruatie ook je gebruikelijke cycluslengte in; kies bij ivf de leeftijd van het embryo bij de terugplaatsing.",
      "Laat de datum van vandaag staan of kies een andere datum om de zwangerschapsduur op die dag te zien.",
      "Lees de geschatte uitgerekende datum, de zwangerschapsduur, het trimester en de data van de trimesters af.",
    ],
    formulas: [
      { title: "Vanaf de laatste menstruatie (regel van Naegele, aangepast aan de cyclus)", expression: "Uitgerekende datum = eerste dag van de laatste menstruatie + 280 dagen + (cycluslengte − 28)", explanation: "Bij een cyclus van 28 dagen is dit precies 40 weken. Bij een langere cyclus vallen de eisprong en dus de uitgerekende datum later." },
      { title: "Vanaf de conceptie", expression: "Uitgerekende datum = conceptiedatum + 266 dagen", explanation: "266 dagen is 38 weken, de gebruikelijke tijd van bevruchting tot geboorte." },
      { title: "Vanaf een ivf-terugplaatsing", expression: "Uitgerekende datum = datum van terugplaatsing + 266 dagen − leeftijd van het embryo (3 of 5 dagen)", explanation: "Het embryo was bij de terugplaatsing al 3 of 5 dagen na de bevruchting." },
      { title: "Zwangerschapsduur", expression: "Zwangerschapsduur = datum − (uitgerekende datum − 280 dagen), in weken en dagen", explanation: "Gerekend vanaf de datum die de eerste dag van de laatste menstruatie zou zijn geweest, de gangbare medische afspraak." },
    ],
    examples: [
      {
        title: "Laatste menstruatie begon op 1 juni 2026, cyclus van 28 dagen",
        steps: ["1 juni 2026 + 280 dagen = 8 maart 2027", "Op 24 oktober 2026: 145 dagen = 20 weken en 5 dagen", "Dat valt in het tweede trimester (14 weken 0 dagen tot 27 weken 6 dagen)"],
      },
      {
        title: "Laatste menstruatie begon op 10 maart 2026, cyclus van 32 dagen",
        steps: ["10 maart 2026 + 280 + (32 − 28) = 284 dagen = 19 december 2026", "De telling begint dan op 14 maart 2026 (uitgerekende datum − 280 dagen)", "Op 24 oktober 2026: 224 dagen = 32 weken en 0 dagen, derde trimester"],
      },
      {
        title: "Embryo van dag 5 teruggeplaatst op 20 juni 2026",
        steps: ["266 − 5 = 261 dagen", "20 juni 2026 + 261 dagen = 8 maart 2027", "Dit is dezelfde datum als bij een laatste menstruatie die op 1 juni 2026 begon"],
      },
    ],
    assumptions: [
      "De uitgerekende datum is een schatting, geen medisch advies, en deze calculator is nog niet professioneel beoordeeld. Maar een klein deel van de baby's wordt precies op de uitgerekende datum geboren; de meeste komen binnen ongeveer twee weken daarvan.",
      "Een termijnecho vroeg in de zwangerschap is nauwkeuriger dan een schatting op basis van data en kan de uitgerekende datum veranderen. Je verloskundige of arts bepaalt de uitgerekende datum die voor je zorg wordt gebruikt.",
      "De aanpassing voor de cyclus gaat uit van een eisprong ongeveer 14 dagen voor de volgende menstruatie. Er wordt geen rekening gehouden met een onregelmatige cyclus, recent gebruik van hormonale anticonceptie of onzekere data.",
      "De trimesters lopen hier tot 13 weken 6 dagen, van 14 weken 0 dagen tot 27 weken 6 dagen, en vanaf 28 weken 0 dagen. Sommige bronnen leggen de grenzen een week eerder of later.",
    ],
    faqs: [
      { question: "Waarom wordt een zwangerschap gerekend vanaf de laatste menstruatie en niet vanaf de conceptie?", answer: "De eerste dag van de laatste menstruatie is meestal bekend, de dag van de conceptie niet. Daarvanaf rekenen is een oude afspraak, dus bij de conceptie is een zwangerschap al ongeveer 2 weken gevorderd." },
      { question: "Hoe verandert de cycluslengte de uitgerekende datum?", answer: "Bij een cyclus van 28 dagen valt de eisprong rond dag 14. Bij een langere cyclus valt die later, dus de uitgerekende datum schuift evenveel dagen op; bij een kortere cyclus komt die eerder te liggen." },
      { question: "Kan de uitgerekende datum veranderen?", answer: "Ja. Een vroege echo kan een andere datum geven, en je zorgverlener kan de datum op basis van die echo bijstellen, meestal maar één keer." },
    ],
    sourcesUsedFor: [
      "Dat een echo in het eerste trimester de nauwkeurigste manier is om de uitgerekende datum te bevestigen, en dat ivf-zwangerschappen worden gerekend vanaf de terugplaatsing.",
      "Het tellen van 280 dagen (40 weken) vanaf de eerste dag van de laatste menstruatie, de aanpassing voor cycli langer of korter dan 28 dagen, en dat een termijnecho een nauwkeurigere datum geeft.",
    ],
  },
  text: {
    method: "Berekenen vanaf",
    methods: { lmp: "Eerste dag van de laatste menstruatie", conception: "Conceptiedatum", ivf: "Datum van ivf-terugplaatsing" },
    lmp: "Eerste dag van je laatste menstruatie",
    cycle: "Gemiddelde cycluslengte",
    cycleHelp: "Aantal dagen van de eerste dag van een menstruatie tot de eerste dag van de volgende. Vul 28 in als je het niet zeker weet.",
    daysSuffix: "dagen",
    conception: "Conceptiedatum",
    conceptionHelp: "Meestal maar bij benadering bekend, bijvoorbeeld uit het bijhouden van je eisprong.",
    transfer: "Datum van terugplaatsing",
    embryoAge: "Leeftijd van het embryo bij terugplaatsing",
    embryoAges: { "3": "Embryo van dag 3", "5": "Embryo van dag 5 (blastocyst)" },
    asOf: "Zwangerschapsduur op",
    asOfHelp: "Standaard vandaag. Wijzig de datum om te zien hoe ver de zwangerschap op een andere dag is.",
    units: { weeks, days },
    weeksDays: "{weeks} en {days}",
    dueDate: "Geschatte uitgerekende datum",
    caption: "{days} dagen na de {from}.",
    captionFrom: { lmp: "eerste dag van de laatste menstruatie, aangepast aan de cycluslengte", conception: "conceptiedatum", ivf: "datum van terugplaatsing" },
    gestationalAge: "Zwangerschapsduur",
    trimester: "Trimester",
    trimesters: { first: "Eerste trimester", second: "Tweede trimester", third: "Derde trimester" },
    notStarted: "Op deze datum nog niet begonnen",
    firstEnds: "Einde eerste trimester (13 weken 6 dagen)",
    secondEnds: "Einde tweede trimester (27 weken 6 dagen)",
    thirdStarts: "Begin derde trimester (28 weken 0 dagen)",
    daysToDue: "Dagen tot de uitgerekende datum",
    startDate: "Begin van de zwangerschapstelling (0 weken 0 dagen)",
    notes: {
      estimate: "Alleen een schatting: maar een klein deel van de baby's wordt op de uitgerekende datum geboren, en de meeste komen binnen ongeveer twee weken ervoor of erna. Een termijnecho kan de datum veranderen.",
      beforeStart: "De gekozen datum ligt voor het begin van de zwangerschapstelling, dus er is nog geen zwangerschapsduur.",
      pastDue: "De gekozen datum valt op of na de geschatte uitgerekende datum.",
      veryLate: "De gekozen datum ligt meer dan 42 weken in de zwangerschap. Controleer of de data kloppen.",
      clinician: "De zwangerschapsduur wordt gerekend vanaf de eerste dag van de laatste menstruatie, ook als de datum uit de conceptie of terugplaatsing komt. Je verloskundige of arts bepaalt de officiële uitgerekende datum.",
    },
    errors: { range: "Deze datum geeft een uitgerekende datum buiten het ondersteunde bereik." },
  },
};

export default nl;
