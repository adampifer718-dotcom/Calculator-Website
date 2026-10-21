import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DebtToIncomeText } from "../text/en";

const nl: CalculatorTranslation<DebtToIncomeText> = {
  content: {
    title: "Schuld-inkomensratiocalculator (DTI)",
    shortTitle: "Schuld-inkomensratio",
    summary: "Bereken je schuld-inkomensratio (back-end) en woonquote (front-end) uit je bruto maandinkomen en je maandelijkse schuldbetalingen.",
    metaTitle: "Schuld-inkomensratio berekenen – Front-end en back-end",
    metaDescription:
      "Bereken je schuld-inkomensratio: totale maandelijkse schuldbetalingen gedeeld door je bruto maandinkomen, plus de woonquote (front-end) en de totale schuldlast.",
    keywords: ["schuld-inkomensratio", "DTI", "back-end ratio", "front-end ratio", "woonquote", "hypotheek aanvragen", "maandelijkse schuldlast"],
    intro: [
      "Je schuld-inkomensratio, of DTI (debt-to-income), vergelijkt wat je elke maand aan schulden betaalt met wat je bruto verdient. Kredietverstrekkers gebruiken hem als één maatstaf voor hoeveel ruimte je budget heeft voor een nieuwe lening.",
      "Vul je bruto maandinkomen en je maandelijkse schuldbetalingen in. De calculator geeft de back-end ratio, waarin alle schulden zitten, en de front-end ratio, die alleen de woonlasten telt.",
    ],
    howToUse: [
      "Kies de valuta voor de bedragen.",
      "Vul je bruto maandinkomen in, vóór belasting en inhoudingen.",
      "Vul je maandelijkse woonlasten in: huur, of een hypotheekbetaling inclusief belastingen en verzekering.",
      "Vul je andere maandelijkse schuldbetalingen in. Gebruik bij creditcards het minimaal te betalen bedrag.",
      "Lees de back-end ratio, de front-end ratio en het totaal van je schuldbetalingen af.",
    ],
    formulas: [
      { title: "Back-end DTI", expression: "DTI = totale maandelijkse schuldbetalingen ÷ bruto maandinkomen × 100", explanation: "Alle schuldbetalingen, inclusief woonlasten." },
      { title: "Front-end ratio (woonquote)", expression: "woonquote = woonlasten ÷ bruto maandinkomen × 100", explanation: "Alleen de huur of de hypotheekbetaling." },
      { title: "Totale maandelijkse schuldlast", expression: "schuld = wonen + auto + studie + creditcards + overig", explanation: "Verplichte maandbetalingen, geen openstaande saldi." },
    ],
    examples: [
      {
        title: "$6.000 inkomen met $2.000 aan betalingen",
        steps: ["Totale schuld = 1.500 + 100 + 400 = $2.000", "DTI = 2.000 ÷ 6.000 × 100 ≈ 33,33%", "Woonquote = 1.500 ÷ 6.000 = 25%"],
      },
      {
        title: "$5.400 inkomen, huur en een autolening",
        steps: ["Totale schuld = 1.450 + 310 + 120 = $1.880", "DTI = 1.880 ÷ 5.400 × 100 ≈ 34,81%", "Woonquote = 1.450 ÷ 5.400 ≈ 26,85%"],
      },
    ],
    assumptions: [
      "Het inkomen is bruto (vóór belasting). Kredietverstrekkers kunnen inkomen anders meetellen, bijvoorbeeld door inkomen uit zelfstandig ondernemerschap te middelen of onregelmatige bonussen niet mee te rekenen.",
      "Alleen verplichte maandbetalingen zijn meegenomen. Energie, boodschappen, telefoonrekeningen en andere kosten van levensonderhoud zijn geen schulden en blijven buiten beschouwing.",
      "Kredietverstrekkers en leenprogramma's stellen hun eigen grenzen en kijken ook naar kredietverleden, spaargeld en andere factoren. Een ratio van 43% is een gangbaar referentiepunt in Amerikaanse hypotheekregels, maar geen universele grens.",
      "Dit is een schatting, geen financieel advies, en is niet professioneel gecontroleerd.",
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen front-end en back-end DTI?",
        answer: "De front-end ratio telt alleen je woonlasten. De back-end ratio telt daar alle andere maandelijkse schuldbetalingen bij op, zoals auto, studielening en creditcards. Met DTI wordt meestal de back-end ratio bedoeld.",
      },
      {
        question: "Waarom duikt het getal 43% zo vaak op?",
        answer: "Amerikaanse regels voor qualified mortgages gebruikten 43% als referentiepunt voor de schuld-inkomensratio, waardoor het getal veel wordt aangehaald. Kredietverstrekkers en leenprogramma's hanteren hun eigen grenzen, die hoger of lager kunnen zijn.",
      },
      {
        question: "Hoe verlaag ik mijn schuld-inkomensratio?",
        answer: "Verlaag je maandelijkse schuldbetalingen, bijvoorbeeld door een lening of creditcardsaldo af te lossen, of verhoog je bruto-inkomen. Een nieuwe schuld aangaan vlak voordat je een lening aanvraagt, verhoogt de ratio.",
      },
    ],
    sourcesUsedFor: ["De definitie van DTI als maandelijkse schuldbetalingen gedeeld door het bruto maandinkomen, en het referentiepunt van 43% in Amerikaanse hypotheekregels."],
  },
  text: {
    income: "Bruto maandinkomen",
    incomeHelp: "Je loon vóór belasting en inhoudingen, voor één maand. Tel elke vaste inkomstenbron mee.",
    housing: "Woonlasten",
    housingHelp: "Maandelijkse huur, of de hypotheekbetaling inclusief onroerendgoedbelasting, opstalverzekering en eventuele VvE-bijdragen.",
    car: "Betalingen autolening",
    student: "Betalingen studielening",
    creditCards: "Minimale creditcardbetalingen",
    creditCardsHelp: "Het minimaal te betalen bedrag per kaart, niet het volledige saldo.",
    other: "Overige schuldbetalingen",
    otherHelp: "Persoonlijke leningen, kinderalimentatie, partneralimentatie en andere verplichte maandelijkse schuldbetalingen.",
    backEnd: "Schuld-inkomensratio (back-end)",
    caption: "{debt} aan maandelijkse schuldbetalingen op {income} bruto maandinkomen.",
    frontEnd: "Woonquote (front-end)",
    totalDebt: "Totale maandelijkse schuldbetalingen",
    nonHousing: "Schuldbetalingen naast woonlasten",
    remaining: "Bruto-inkomen na schuldbetalingen",
    notes: {
      lenders: "Elke kredietverstrekker en elk leenprogramma stelt eigen grenzen voor de schuld-inkomensratio en kijkt ook naar andere factoren; deze ratio alleen laat dus niet zien of je een lening zou krijgen.",
      reference: "Volgens het Consumer Financial Protection Bureau is een schuld-inkomensratio van 43% een gangbaar referentiepunt in Amerikaanse hypotheekregels voor qualified mortgages.",
      overIncome: "Je maandelijkse schuldbetalingen zijn hoger dan je bruto maandinkomen.",
    },
  },
};

export default nl;
