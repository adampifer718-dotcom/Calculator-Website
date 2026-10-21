import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MortgageText } from "../text/en";

const nl: CalculatorTranslation<MortgageText> = {
  content: {
    title: "Hypotheekcalculator",
    shortTitle: "Hypotheek",
    summary:
      "Schat de volledige maandlasten van een hypotheek: aflossing en rente plus onroerendgoedbelasting, verzekering, VvE-bijdrage en hypotheekverzekering.",
    metaTitle: "Hypotheekcalculator – maandlasten met belasting en PMI",
    metaDescription:
      "Schat je maandelijkse hypotheeklasten, met aflossing en rente apart van onroerendgoedbelasting, opstalverzekering, VvE-bijdrage en PMI, plus de totale rente.",
    keywords: ["hypotheek", "hypotheeklasten", "woninglening", "piti", "pmi", "onroerendgoedbelasting", "maandlasten woning", "eigen inbreng"],
    intro: [
      "Een hypotheekbetaling is meer dan alleen de aflossing van de lening. Kredietverstrekkers innen vaak onroerendgoedbelasting en opstalverzekering bij elke betaling, en sommige kopers betalen ook een VvE-bijdrage of hypotheekverzekering.",
      "Deze calculator toont aflossing en rente apart van die andere kosten, zodat je ziet wat door de lening vastligt en wat afhangt van je lokale belastingen en verzekeringen.",
    ],
    howToUse: [
      "Vul de woningprijs en je eigen inbreng in.",
      "Vul de rente en de looptijd van de lening in.",
      "Vul de jaarlijkse onroerendgoedbelasting en opstalverzekering in, en eventuele maandelijkse VvE- of servicekosten.",
      "Vul het tarief voor hypotheekverzekering in als je eigen inbreng lager is dan 20%, of 0 als het niet van toepassing is.",
      "Lees de totale maandlasten en de uitsplitsing af.",
    ],
    formulas: [
      {
        title: "Aflossing en rente",
        expression: "M = L × r ÷ (1 − (1 + r)^(−n))",
        explanation: "L is het leenbedrag (prijs − eigen inbreng), r de maandrente (jaarrente ÷ 12) en n het aantal maandelijkse betalingen.",
      },
      {
        title: "Maandlasten",
        expression: "maandlasten = M + onroerendgoedbelasting ÷ 12 + verzekering ÷ 12 + VvE + PMI",
        explanation: "Belastingen en verzekering worden gelijkmatig over 12 maanden verdeeld, zoals bij een gebruikelijke escrowrekening.",
      },
      {
        title: "Hypotheekverzekering",
        expression: "PMI = L × PMI-tarief ÷ 12, zolang L ÷ prijs > 80%",
        explanation:
          "Stopt zodra de geplande restschuld 78% van de woningprijs bereikt. Volgens de Amerikaanse wet eindigt ze ook uiterlijk halverwege de looptijd van de lening.",
      },
    ],
    examples: [
      {
        title: "Woning van 400.000, 20% eigen inbreng, 6,5% over 30 jaar",
        steps: [
          "Lening = $ 400.000 − $ 80.000 = $ 320.000; r = 0,065 ÷ 12; n = 360",
          "Aflossing en rente ≈ $ 2.022,62",
          "Belasting $ 400 + verzekering $ 125 per maand; geen PMI bij een loan-to-value van 80%",
          "Totaal ≈ $ 2.547,62 per maand",
        ],
      },
      {
        title: "Woning van 300.000, 5% eigen inbreng, 6% over 30 jaar met PMI",
        steps: [
          "Lening = $ 285.000; aflossing en rente ≈ $ 1.708,72",
          "PMI = $ 285.000 × 0,5% ÷ 12 = $ 118,75 voor de eerste 129 betalingen",
          "Totaal ≈ $ 1.708,72 + $ 300 + $ 100 + $ 50 + $ 118,75 = $ 2.277,47",
        ],
      },
    ],
    assumptions: [
      "Vaste rente met gelijke maandbedragen; leningen met variabele rente en aflossingsvrije leningen worden niet gemodelleerd.",
      "Onroerendgoedbelasting, verzekering, VvE-bijdrage en het PMI-tarief zijn jouw schattingen; ze verschillen per locatie en kredietverstrekker en veranderen vaak elk jaar.",
      "De PMI-regels volgen Amerikaanse conventionele leningen: in rekening gebracht boven een loan-to-value van 80% en volgens schema gestopt bij 78%. FHA- en VA-leningen en leningen in andere landen werken anders.",
      "Afsluitkosten, punten, nutsvoorzieningen en onderhoud zijn niet meegerekend. Dit is een schatting, geen financieel advies of leningaanbod.",
    ],
    faqs: [
      {
        question: "Wat is PITI?",
        answer:
          "Principal, interest, taxes and insurance: aflossing, rente, belastingen en verzekering, de vier onderdelen van een gebruikelijke maandelijkse hypotheekbetaling als de kredietverstrekker belastingen en verzekering via een escrowrekening int.",
      },
      {
        question: "Waarom wijkt het bedrag van mijn kredietverstrekker af?",
        answer:
          "Kredietverstrekkers gebruiken de werkelijke bedragen voor belasting en verzekering, kunnen een buffer op de escrowrekening aanhouden en noemen soms een JKP inclusief kosten. Vraag een Loan Estimate (officiële leningsraming) aan voor exacte bedragen.",
      },
      {
        question: "Hoe vermijd ik een hypotheekverzekering?",
        answer:
          "Bij veel Amerikaanse conventionele leningen voorkom je PMI met een eigen inbreng van minstens 20%. Sommige kredietverstrekkers bieden andere opties, vaak tegen een hogere rente.",
      },
    ],
    sourcesUsedFor: [
      "De formule voor een lening met gelijke betalingen en de formule voor de restschuld.",
      "Wanneer PMI bij Amerikaanse conventionele leningen automatisch vervalt (78% van de oorspronkelijke woningwaarde).",
      "De definitieve beëindiging van PMI halverwege de aflossingsperiode volgens de Homeowners Protection Act.",
    ],
  },
  text: {
    price: "Woningprijs",
    down: "Eigen inbreng",
    rate: "Rente",
    rateHelp: "Jaarrente op de lening (niet het JKP inclusief kosten).",
    years: "Looptijd",
    propertyTax: "Onroerendgoedbelasting per jaar",
    insurance: "Opstalverzekering per jaar",
    hoa: "VvE- of servicekosten per maand",
    pmiRate: "Tarief hypotheekverzekering (PMI)",
    pmiHelp: "Jaarlijks tarief over het leenbedrag zolang de eigen inbreng lager is dan 20%. Vul 0 in als het niet van toepassing is.",
    errors: {
      downTooLarge: "De eigen inbreng moet lager zijn dan de woningprijs.",
      termTooShort: "Vul een looptijd van minstens één maand in.",
    },
    monthly: "Geschatte maandlasten",
    caption: "Aflossing en rente van {pi} plus {extras} aan belastingen, verzekering en overige kosten.",
    principalInterest: "Aflossing en rente",
    monthlyTax: "Onroerendgoedbelasting",
    monthlyInsurance: "Opstalverzekering",
    monthlyHoa: "VvE- of servicekosten",
    monthlyPmi: "Hypotheekverzekering (PMI)",
    pmiMonths: "Maanden met PMI",
    loanAmount: "Leenbedrag",
    downShare: "Aandeel eigen inbreng",
    totalInterest: "Totale rente",
    totalCost: "Totaal van alle betalingen over de looptijd",
    tableCaption: "Restschuld per jaar",
    tableColumns: { year: "Jaar", principal: "Afgelost", interest: "Betaalde rente", balance: "Restschuld" },
    notes: {
      fixed: "Bij een lening met vaste rente blijven aflossing en rente de hele looptijd gelijk; belastingen, verzekering en VvE-bijdrage zijn jouw schattingen en veranderen meestal in de loop van de tijd.",
      pmi: "Er wordt aangenomen dat PMI geldt zolang de lening meer dan 80% van de woningprijs bedraagt en stopt zodra de geplande restschuld 78% daarvan bereikt, zoals bij de meeste Amerikaanse conventionele leningen. FHA- en andere leningen hebben andere regels. Volgens de Amerikaanse wet eindigt PMI ook uiterlijk halverwege de looptijd van de lening.",
      noPmi: "Er is geen hypotheekverzekering meegerekend, omdat de lening 80% van de woningprijs of minder bedraagt.",
      excluded: "Afsluitkosten, punten, nutsvoorzieningen, onderhoud en eventuele rentewijzigingen zijn niet meegerekend.",
    },
  },
};

export default nl;
