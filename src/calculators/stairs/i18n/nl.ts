import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { StairsText } from "../text/en";

const nl: CalculatorTranslation<StairsText> = {
  content: {
    title: "Trapcalculator",
    shortTitle: "Trap",
    summary:
      "Bereken het aantal treden, de optrede, de totale traplengte, de traphoek en de lengte van de trapboom uit de verdiepingshoogte, met een comfortcontrole 2R + T.",
    metaTitle: "Trapcalculator – optrede, aantrede, lengte en trapboom",
    metaDescription:
      "Bereken het aantal treden uit de totale hoogte, plus de optrede, traplengte, hoek, lengte van de trapboom en een comfortcontrole 2R + T, in inch of cm.",
    keywords: ["trap berekenen", "optrede berekenen", "aantal treden", "lengte trapboom", "optrede en aantrede", "traphoek", "afmetingen trap", "trapcalculator"],
    intro: [
      "Een trap verdeelt de hoogte tussen twee verdiepingen in gelijke treden. Elke trede heeft een optrede (de hoogte) en een aantrede (de diepte). Het aantal optreden hangt af van de totale hoogte en de hoogste optrede die je accepteert; er is altijd één aantrede minder dan optreden, omdat de bovenste trede de bovenverdieping zelf is.",
      "Vul de verdiepingshoogte, de maximale optrede en de aantrede in voor het aantal treden, de exacte optrede, de totale traplengte, de traphoek en de lengte van de diagonaal van de trapboom, met de traditionele comfortcontrole 2R + T. De standaardwaarden zijn de grenzen uit de International Residential Code (VS), maar je lokale bouwregels kunnen afwijken.",
    ],
    howToUse: [
      "Kies inch of centimeter.",
      "Meet de totale hoogte van de afgewerkte vloer onderaan tot de afgewerkte vloer bovenaan.",
      "Controleer de maximale optrede en de aantrede. De standaardwaarden zijn de maximale optrede van 7¾ in en de minimale aantrede van 10 in uit de International Residential Code.",
      "Vul eventueel een gewenste optrede in, en de beschikbare horizontale ruimte om te zien of de trap past.",
      "Lees het aantal optreden en de indeling af, en controleer alles aan de hand van je lokale bouwregels.",
    ],
    formulas: [
      {
        title: "Aantal optreden",
        expression: "n = ⌈totale hoogte ÷ maximale optrede⌉",
        explanation: "Met een gewenste optrede is n het gehele getal dat het dichtst bij totale hoogte ÷ gewenste optrede ligt.",
      },
      { title: "Optrede en aantreden", expression: "optrede = totale hoogte ÷ n; aantreden = n − 1", explanation: "Alle optreden zijn even hoog." },
      {
        title: "Traplengte en hoek",
        expression: "lengte = aantreden × aantrede; hoek = arctan(optrede ÷ aantrede)",
        explanation: "De lengte wordt gemeten van neus tot neus, zonder bordes.",
      },
      { title: "Diagonaal van de trapboom", expression: "trapboom = √(totale hoogte² + traplengte²)", explanation: "De rechte lijn van onder- tot bovenkant van de trap." },
      {
        title: "Comfortvuistregel",
        expression: "24 in ≤ 2 × optrede + aantrede ≤ 25 in",
        explanation: "Ongeveer 61–63,5 cm. Een traditionele richtlijn voor een comfortabele pas, geen bouwvoorschrift.",
      },
    ],
    examples: [
      {
        title: "108 in verdiepingshoogte met de standaardwaarden van de IRC",
        steps: [
          "n = ⌈108 ÷ 7,75⌉ = ⌈13,94⌉ = 14 optreden",
          "Optrede = 108 ÷ 14 ≈ 7,714 in; 13 aantreden van 10 in geven een lengte van 130 in",
          "Hoek = arctan(7,714 ÷ 10) ≈ 37,6°; trapboom = √(108² + 130²) ≈ 169,01 in",
          "2R + T ≈ 25,43 in, iets boven het comfortbereik van 24–25 in",
        ],
      },
      {
        title: "252 cm hoogte met aantreden van 24 cm",
        steps: [
          "n = ⌈252 ÷ 19,6⌉ = ⌈12,86⌉ = 13 optreden",
          "Optrede = 252 ÷ 13 ≈ 19,385 cm; 12 aantreden geven een lengte van 288 cm",
          "2R + T ≈ 62,77 cm ≈ 24,71 in, binnen het comfortbereik",
        ],
      },
      {
        title: "100 in hoogte, met optreden van 7 in als doel, in een ruimte van 130 in",
        steps: [
          "n = afronden(100 ÷ 7) = afronden(14,29) = 14 optreden van ≈ 7,143 in",
          "13 aantreden × 10,5 in = 136,5 in traplengte, 6,5 in meer dan de beschikbare ruimte",
          "2R + T ≈ 24,79 in, binnen het comfortbereik",
        ],
      },
    ],
    assumptions: [
      "Dit is een geometrische schatting voor één rechte trap met gelijke treden. Bordessen, kwarten, wenteltrappen en de dikte van de treeplanken zijn niet meegenomen.",
      "Bouwregels verschillen per land en regio en veranderen in de loop van de tijd, en ze gaan over veel meer dan de maten van treden: vrije hoogte, breedte, leuningen, balustrades, neuzen en de toegestane afwijking tussen treden. De standaardwaarden komen alleen als vertrekpunt uit de International Residential Code; controleer de regels die gelden waar je bouwt.",
      "De uitkomst is niet professioneel gecontroleerd en is geen veiligheids- of constructief advies. Trappen zijn een veelvoorkomende oorzaak van valpartijen, dus laat het ontwerp controleren door de gemeente (bouwtoezicht) of een gekwalificeerde vakman voordat je gaat bouwen.",
      "De totale hoogte moet tussen afgewerkte vloeroppervlakken worden gemeten. Als je later de vloerafwerking verandert, veranderen de hoogtes van de bovenste en onderste trede.",
    ],
    faqs: [
      {
        question: "Hoeveel treden heb ik nodig voor een hoogte van 9 ft (108 in)?",
        answer:
          "Met een maximale optrede van 7¾ in heb je ⌈108 ÷ 7,75⌉ = 14 optreden van elk ongeveer 7,71 in nodig, en 13 aantreden. Een lagere maximale optrede geeft meer, lagere treden en een langere trap.",
      },
      {
        question: "Waarom zijn er minder aantreden dan optreden?",
        answer:
          "De laatste optrede brengt je op de bovenverdieping, die als bovenste trede dient. Een trap met 14 optreden heeft dus 13 aantreden, en de totale traplengte is 13 aantreden.",
      },
      {
        question: "Wat is de regel 2R + T?",
        answer:
          "Dat is een traditionele comfortrichtlijn: twee keer de optrede plus één aantrede moet ongeveer 24–25 in (61–63,5 cm) zijn, ruwweg de lengte van een comfortabele pas. Het is geen bouwvoorschrift, maar trappen ver buiten dat bereik lopen meestal onprettig.",
      },
    ],
    sourcesUsedFor: [
      "De grenzen uit de International Residential Code (R311.7.5) die als standaardwaarden dienen: een maximale optrede van 7¾ in (196 mm) en een minimale aantrede van 10 in (254 mm).",
      "De comfortvuistregel 2 × optrede + aantrede = 24–25 in, toegeschreven aan Architectural Graphic Standards.",
    ],
  },
  text: {
    unit: "Eenheden",
    units: { in: "Inch (in)", cm: "Centimeter (cm)" },
    rise: "Totale hoogte (vloer tot vloer)",
    riseHelp: "De verticale afstand van de bovenkant van de onderste afgewerkte vloer tot de bovenkant van de bovenste afgewerkte vloer.",
    maxRiser: "Maximale optrede",
    maxRiserHelp:
      "De hoogste trede die je accepteert. De standaardwaarde is het maximum van 7¾ in (196 mm) uit de International Residential Code; je lokale bouwregels kunnen afwijken.",
    targetRiser: "Gewenste optrede (optioneel)",
    targetRiserHelp:
      "Als je een voorkeurshoogte voor de trede invult, wordt het aantal optreden zo gekozen dat het daar zo dicht mogelijk bij komt, ook als dat boven het maximum hierboven uitkomt.",
    tread: "Aantrede",
    treadHelp: "De horizontale diepte van elke trede, van neus tot neus. De standaardwaarde is het minimum van 10 in (254 mm) uit de International Residential Code.",
    runLimit: "Beschikbare traplengte (optioneel)",
    runLimitHelp: "De horizontale ruimte die je voor de trap hebt, om de uitkomst aan te toetsen.",
    steps: "Aantal optreden (treden)",
    caption: "{risers} van elk {riser}, met {treads} van {tread}.",
    risersCount: { zero: "{n} optreden", one: "{n} optrede", two: "{n} optreden", few: "{n} optreden", many: "{n} optreden", other: "{n} optreden" },
    treadsCount: { zero: "{n} aantreden", one: "{n} aantrede", two: "{n} aantreden", few: "{n} aantreden", many: "{n} aantreden", other: "{n} aantreden" },
    riserHeight: "Optrede",
    treads: "Aantal aantreden",
    totalRun: "Totale traplengte",
    angle: "Traphoek",
    stringer: "Lengte van de trapboom (diagonaal van hoogte en lengte)",
    comfort: "Comfortcontrole 2R + T",
    comfortStatus: "Vergeleken met de vuistregel van 24–25 in (61–63,5 cm)",
    comfortOptions: { low: "Onder het bereik: een flauwe, lange trap", ok: "Binnen het bereik", high: "Boven het bereik: een steile of diepe trap" },
    notes: {
      overMax: "De optrede van {riser} is hoger dan het maximum dat je hebt ingevuld ({max}).",
      overRun: "De totale traplengte van {run} is {over} langer dan de ruimte die je hebt ingevuld ({limit}).",
      comfort: "De regel 2R + T (twee optreden plus één aantrede van ongeveer 24–25 in) is een traditionele comfortrichtlijn, geen bouwvoorschrift.",
      code: "Bouwregels verschillen per land en regio en gaan over meer dan de maten van treden: vrije hoogte, breedte, leuningen, balustrades, neuzen, bordessen en de toegestane afwijking tussen treden. Controleer de lokale bouwregels en laat het ontwerp beoordelen door een gekwalificeerde vakman.",
      stringer:
        "De lengte van de trapboom is de rechte diagonaal van de totale hoogte en lengte. Een uitgezaagde trapboom is langer zodra je het hout toevoegt dat nodig is voor de aansluitingen boven en onder.",
    },
  },
};

export default nl;
