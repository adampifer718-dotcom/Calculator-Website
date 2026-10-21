import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CreditCardPayoffText } from "../text/en";

const years = { zero: "{n} jaar", one: "{n} jaar", two: "{n} jaar", few: "{n} jaar", many: "{n} jaar", other: "{n} jaar" };
const months = { zero: "{n} maanden", one: "{n} maand", two: "{n} maanden", few: "{n} maanden", many: "{n} maanden", other: "{n} maanden" };

const nl: CalculatorTranslation<CreditCardPayoffText> = {
  content: {
    title: "Creditcard-aflossingscalculator",
    shortTitle: "Creditcard aflossen",
    summary: "Zie hoeveel maanden een vast bedrag nodig heeft om een creditcardschuld af te lossen, of welk bedrag je nodig hebt om op een bepaalde datum schuldenvrij te zijn.",
    metaTitle: "Creditcardschuld aflossen – Looptijd en rente",
    metaDescription:
      "Schat hoe lang een vast maandbedrag nodig heeft om een creditcard af te lossen, de totale rente, of het bedrag om in een gekozen aantal maanden schuldenvrij te zijn.",
    keywords: ["creditcard aflossen", "creditcardschuld", "creditcardrente", "schuld aflossen", "aflostermijn", "maandbedrag creditcard", "APR"],
    intro: [
      "Over het saldo dat je op je creditcard laat staan, betaal je rente. Een klein maandbedrag kan je daardoor jarenlang in de schulden houden. Deze calculator laat zien wat het effect is van elke maand een vast bedrag betalen.",
      "Kies of je wilt weten hoe lang je met je maandbedrag bezig bent, of hoeveel je per maand moet betalen om de kaart binnen een gekozen aantal maanden af te lossen. Een jaartabel laat zien hoe het saldo daalt en hoeveel rente naar de kaartuitgever gaat.",
    ],
    howToUse: [
      "Kies de valuta voor de bedragen.",
      "Kies wat je wilt berekenen: de aflostijd of het benodigde maandbedrag.",
      "Vul het huidige saldo en de APR van de kaart in.",
      "Vul je vaste maandbedrag in, of het aantal maanden waarin je schuldenvrij wilt zijn.",
      "Lees het resultaat, de totale rente en de tabel per jaar af.",
    ],
    formulas: [
      { title: "Rente per maand", expression: "rente = saldo × APR ÷ 12", explanation: "Elke maand wordt de rente bij het saldo opgeteld en daarna de betaling afgetrokken. De laatste betaling is precies wat er nog over is." },
      { title: "Maandbedrag voor een doeldatum", expression: "PMT = B × i ÷ (1 − (1 + i)^(−n))", explanation: "B is het saldo, i = APR ÷ 12 als decimaal getal en n het aantal maanden. Bij 0% APR geldt PMT = B ÷ n." },
      { title: "Als een betaling te klein is", expression: "betaling ≤ B × i", explanation: "Is de betaling niet hoger dan de rente van de eerste maand, dan daalt het saldo nooit." },
    ],
    examples: [
      {
        title: "$3.200 tegen 19,99% APR, met $120 per maand",
        steps: [
          "Maandrente = 19,99% ÷ 12 ≈ 1,666%",
          "Eerste maand: rente ≈ $53,31, dus $66,69 van de $120 verlaagt het saldo",
          "Zo maand na maand doorgerekend, is de 36e betaling een gedeeltelijke betaling van ongeveer $66,69",
          "Totale rente ≈ $1.066,69",
        ],
      },
      {
        title: "$6.500 tegen 24,5% APR, afgelost in 36 maanden",
        steps: ["i = 0,245 ÷ 12 ≈ 0,020417; n = 36", "PMT = 6.500 × i ÷ (1 − (1 + i)^−36)", "≈ $256,72 per maand, in totaal ongeveer $2.742 rente"],
      },
      {
        title: "$1.500 tegen een actierente van 0%, afgelost in 10 maanden",
        steps: ["Geen rente, dus het saldo wordt gelijk verdeeld", "PMT = 1.500 ÷ 10 = $150"],
      },
    ],
    assumptions: [
      "De rente wordt maandelijks berekend tegen APR ÷ 12. Veel kaartuitgevers gebruiken een dagrente over het gemiddelde dagsaldo, dus je werkelijke afschriften wijken iets af.",
      "Er zijn geen nieuwe aankopen, geldopnames, kosten, boeterentes of rentewijzigingen, en elke betaling gebeurt op tijd.",
      "Betalingen worden niet op centen afgerond en actierentes gelden naar aanname voor de hele periode.",
      "Dit is een schatting, geen financieel advies, en is niet professioneel gecontroleerd. Kijk in je kaartovereenkomst en afschrift welke cijfers voor jou gelden.",
    ],
    faqs: [
      {
        question: "Waarom duurt het met een klein bedrag zo lang?",
        answer: "Het grootste deel van een kleine betaling gaat op aan rente. Alleen wat overblijft verlaagt het saldo, dus het saldo daalt langzaam en blijft rente opleveren. Zelfs een bescheiden verhoging van je maandbedrag kan de looptijd en de rente flink verkorten.",
      },
      {
        question: "Waarom is de aflostijd op mijn afschrift anders?",
        answer: "Afschriften gaan meestal uit van alleen het minimumbedrag, dat kleiner wordt naarmate het saldo daalt, en kaartuitgevers rekenen meestal dagelijks rente. Deze calculator gaat uit van elke maand hetzelfde vaste bedrag en maandelijkse rente.",
      },
      {
        question: "Wat als mijn betaling lager is dan de rente?",
        answer: "Dan daalt het saldo nooit en geeft de calculator een foutmelding. Je moet meer betalen dan de rente van de eerste maand, die in de foutmelding staat, voordat een deel van je betaling je schuld verlaagt.",
      },
    ],
    sourcesUsedFor: [
      "De vermeldingen van aflostijd en het maandbedrag voor 36 maanden op Amerikaanse creditcardafschriften, die ook uitgaan van geen nieuwe aankopen.",
      "Wat de jaarrente (APR) op een creditcard betekent.",
    ],
  },
  text: {
    mode: "Bereken",
    modes: { payment: "Aflostijd", months: "Benodigd maandbedrag" },
    balance: "Saldo op de kaart",
    balanceHelp: "Het bedrag dat je vandaag op de kaart verschuldigd bent.",
    apr: "Jaarrente op aankopen (APR)",
    aprHelp: "De jaarlijkse rente die op je afschrift staat.",
    payment: "Maandbedrag",
    paymentHelp: "Hetzelfde bedrag, elke maand betaald tot het saldo nul is.",
    months: "Aflossen binnen",
    monthsHelp: "Aantal maandbetalingen, van 1 tot 600.",
    monthsSuffix: "maanden",
    errors: {
      neverPaid: "Deze betaling dekt de rente van de eerste maand ({interest}) niet, dus het saldo zou nooit worden afgelost. Vul een hoger bedrag in.",
      tooLong: "Met deze betaling duurt het meer dan 1.200 maanden (100 jaar) om de kaart af te lossen. Vul een hoger bedrag in.",
    },
    units: { years, months },
    yearsMonths: "{years} en {months}",
    timeToPayoff: "Aflostijd",
    captionPayment: "{payment} per maand op {balance} tegen {apr} APR: ongeveer {duration}.",
    requiredPayment: "Benodigd maandbedrag",
    captionMonths: "Lost {balance} tegen {apr} APR af in {duration}.",
    totalInterest: "Totale rente",
    totalPaid: "Totaal betaald",
    lastPayment: "Laatste (gedeeltelijke) betaling",
    firstInterest: "Rente in de eerste maand",
    numberOfPayments: "Aantal betalingen",
    tableCaption: "Saldo per jaar",
    tableColumns: { year: "Jaar", interest: "Betaalde rente", paid: "Gedane betalingen", balance: "Saldo aan het eind van het jaar" },
    notes: {
      monthly: "De rente wordt elke maand berekend tegen APR ÷ 12. Veel kaartuitgevers rekenen rente over het gemiddelde dagsaldo, dus de cijfers op je afschrift wijken iets af.",
      noPurchases: "De schatting gaat ervan uit dat je geen nieuwe aankopen doet en dat er geen kosten of rentewijzigingen zijn terwijl je de kaart aflost.",
      zeroRate: "Bij 0% APR wordt het saldo gewoon in gelijke betalingen verdeeld.",
    },
  },
};

export default nl;
