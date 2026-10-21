import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CombinationsText } from "../text/en";

const nl: CalculatorTranslation<CombinationsText> = {
  content: {
    title: "Permutatie- en combinatiecalculator",
    shortTitle: "Permutaties en combinaties",
    summary: "Tel exact op hoeveel manieren je r van n items kunt kiezen of ordenen: nCr, nPr en beide aantallen met herhaling.",
    metaTitle: "Permutatie- en combinatiecalculator – nCr, nPr",
    metaDescription:
      "Bereken exact nCr en nPr voor n tot 10.000, plus combinaties en permutaties met herhaling; zeer grote uitkomsten in wetenschappelijke notatie.",
    keywords: ["permutaties", "combinaties", "nCr", "nPr", "n boven r", "binomiaalcoëfficiënt", "combinaties met herhaling", "combinatoriek", "faculteit"],
    intro: [
      "Hoeveel verschillende commissies van 4 personen kan een club van 12 leden vormen? Op hoeveel manieren kun je 3 prijzen verdelen onder 25 deelnemers? Dat zijn telproblemen, en het antwoord hangt ervan af of de volgorde ertoe doet.",
      "Een combinatie telt selecties waarbij de volgorde er niet toe doet: de commissie {Ana, Ben, Cy} is in elke volgorde dezelfde. Een permutatie telt rangschikkingen waarbij de volgorde wel telt: eerste, tweede en derde prijs zijn verschillende uitkomsten. Deze calculator geeft beide exact, plus de varianten waarbij items vaker dan eens gekozen mogen worden.",
    ],
    howToUse: [
      "Vul n in, het aantal verschillende items waaruit je kiest (0 tot 10.000).",
      "Vul r in, hoeveel je er kiest (0 tot n).",
      "Lees nCr af voor ongeordende selecties en nPr voor geordende rangschikkingen.",
      "Gebruik de resultaten met herhaling als hetzelfde item opnieuw gekozen mag worden, zoals bolletjes ijs (combinaties) of de cijfers van een pincode (permutaties).",
    ],
    formulas: [
      { title: "Combinaties", expression: "nCr = n! ÷ (r! × (n − r)!)", explanation: "Selecties van r items uit n waarbij de volgorde er niet toe doet." },
      { title: "Permutaties", expression: "nPr = n! ÷ (n − r)! = n × (n − 1) × … × (n − r + 1)", explanation: "Geordende rangschikkingen van r items uit n. nPr = nCr × r!" },
      { title: "Combinaties met herhaling", expression: "C(n + r − 1, r)", explanation: "Selecties van r items uit n soorten als een soort meer dan eens gekozen mag worden (de telling met “sterretjes en streepjes”)." },
      { title: "Permutaties met herhaling", expression: "nʳ", explanation: "Geordende rijen van lengte r waarbij elke positie elk van de n items kan zijn." },
    ],
    examples: [
      {
        title: "Commissies van 4 uit een club van 12",
        steps: ["12C4 = 12! ÷ (4! × 8!)", "= (12 × 11 × 10 × 9) ÷ (4 × 3 × 2 × 1) = 11.880 ÷ 24", "= 495 verschillende commissies"],
      },
      {
        title: "Goud, zilver en brons onder 25 deelnemers",
        steps: ["Bij medailles telt de volgorde: 25P3 = 25 × 24 × 23 = 13.800", "Als de 3 winnaars gelijke prijzen kregen: 25C3 = 13.800 ÷ 3! = 2.300", "Het hoofdresultaat toont 2.300; het aantal permutaties staat eronder"],
      },
      {
        title: "100 van 200 items kiezen",
        steps: ["200C100 = 200! ÷ (100! × 100!)", "De exacte waarde heeft 59 cijfers en begint met 9.054.851.465…", "Getoond als 9,054851 × 10⁵⁸ (59 cijfers)"],
      },
    ],
    assumptions: [
      "De n items zijn allemaal verschillend. Voor rangschikkingen van items met dubbelen (zoals de letters van BANAAN) heb je een andere formule nodig.",
      "Alle vier de resultaten worden exact berekend met gehele getallen. Resultaten van meer dan 30 cijfers worden getoond in wetenschappelijke notatie, afgerond op 7 significante cijfers, met het volledige aantal cijfers.",
      "Volgens afspraak is 0! = 1, dus nC0 = nP0 = 1 en niets kiezen telt als één manier.",
      "n is beperkt tot 10.000 zodat de resultaten snel blijven; nʳ kan dan tot 40.001 cijfers hebben.",
    ],
    faqs: [
      { question: "Hoe weet ik of ik een permutatie of een combinatie moet gebruiken?", answer: "Vraag je af of het verwisselen van twee gekozen items een ander resultaat geeft. Zo ja, zoals bij zitplaatsen, ranglijsten of wachtwoorden, gebruik dan een permutatie. Zo nee, zoals bij een hand kaarten of een groep mensen, gebruik dan een combinatie." },
      { question: "Waarom is nCr gelijk aan nC(n − r)?", answer: "r items kiezen om mee te nemen is hetzelfde als n − r items kiezen om achter te laten. Zo is 3 van 10 mensen kiezen voor een team (120 manieren) gelijk aan de 7 kiezen die buiten de boot vallen (ook 120 manieren)." },
      { question: "Wat betekent “met herhaling”?", answer: "Dat een item meer dan eens gekozen mag worden. Een pincode van 4 cijfers gebruikt permutaties met herhaling: 10⁴ = 10.000 codes. 3 bolletjes kiezen uit 5 smaken, waarbij twee bolletjes dezelfde smaak mogen hebben, gebruikt combinaties met herhaling: C(7, 3) = 35." },
    ],
    sourcesUsedFor: ["Het vermenigvuldigingsprincipe en de formules voor permutaties en combinaties van n verschillende objecten."],
  },
  text: {
    n: "Totaal aantal items (n)",
    nHelp: "Een geheel getal van 0 tot 10.000.",
    r: "Gekozen items (r)",
    rHelp: "Een geheel getal van 0 tot n.",
    rTooLarge: "r kan niet groter zijn dan n ({n}). Je kunt niet meer verschillende items kiezen dan er zijn.",
    combinations: "Combinaties, nCr (volgorde doet er niet toe)",
    permutations: "Permutaties, nPr (volgorde telt)",
    combinationsRepeat: "Combinaties met herhaling, C(n + r − 1, r)",
    permutationsRepeat: "Permutaties met herhaling, nʳ",
    digits: { zero: "{n} cijfers", one: "{n} cijfer", two: "{n} cijfers", few: "{n} cijfers", many: "{n} cijfers", other: "{n} cijfers" },
    large: "{value} ({digits})",
    caption: "Aantal manieren om {r} van {n} items te kiezen als de volgorde er niet toe doet.",
    largeNote: "Resultaten van meer dan 30 cijfers worden getoond in wetenschappelijke notatie, afgerond op 7 significante cijfers, met het exacte aantal cijfers.",
    zeroRepeat: "Met n = 0 en r = 0 is er precies één manier om niets te kiezen, dus elk aantal is 1.",
  },
};

export default nl;
