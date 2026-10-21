import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PlantSpacingText } from "../text/en";

const nl: CalculatorTranslation<PlantSpacingText> = {
  content: {
    title: "Plantafstandcalculator",
    shortTitle: "Plantafstand",
    summary: "Bereken hoeveel planten er in een rechthoekig bed passen bij een bepaalde plantafstand, in rechte rijen of in driehoeksverband.",
    metaTitle: "Plantafstandcalculator – Aantal planten per bed",
    metaDescription:
      "Bereken hoeveel planten in een moestuinbed passen op basis van de afstand in en tussen de rijen, in raster- of driehoeksverband, plus planten per m² of ft².",
    keywords: [
      "plantafstand",
      "afstand tussen planten",
      "hoeveel planten per m2",
      "plantdichtheid",
      "driehoeksverband planten",
      "moestuinbed indelen",
      "rijafstand",
      "plantschema",
    ],
    intro: [
      "Zaadzakjes en plantlabels vermelden een aanbevolen plantafstand. Die omzetten in een aantal planten voor een bepaald bed is eenvoudig rekenwerk, maar je vergeet makkelijk dat de buitenste planten ook ruimte nodig hebben.",
      "Deze calculator houdt elke plant minstens een halve plantafstand van de rand van het bed, zodat de planten langs de rand evenveel ruimte krijgen als die in het midden. Hij werkt voor rechte rijen en voor driehoeksverband, waarbij elke rij een halve plantafstand verschoven is.",
    ],
    howToUse: [
      "Kies de eenheid en vul de lengte en breedte van het bed in.",
      "Kies rechte rijen of driehoeksverband.",
      "Vul de afstand tussen de planten in en, bij rechte rijen, de afstand tussen de rijen.",
      "Lees af hoeveel planten er passen, de plantdichtheid en de indeling van de rijen.",
    ],
    formulas: [
      {
        title: "Rechte rijen",
        expression: "planten = ⌊L ÷ s⌋ × ⌊W ÷ r⌋",
        explanation: "L en W zijn de lengte en breedte van het bed, s de afstand binnen een rij en r de afstand tussen de rijen. Met een halve plantafstand vrij aan elke rand past er in een rij met lengte L ⌊L ÷ s⌋ planten.",
      },
      {
        title: "Rijen in driehoeksverband",
        expression: "h = s × √3 ÷ 2\nrijen = ⌊(W − s) ÷ h⌋ + 1 (0 als W < s)",
        explanation: "Elke plant staat op dezelfde afstand s van zijn buren, dus de rijen liggen maar ongeveer 0,866 s uit elkaar.",
      },
      {
        title: "Planten in driehoeksverband",
        expression: "volle rijen: ⌊L ÷ s⌋ planten\nverschoven rijen: max(0, ⌊L ÷ s − 0,5⌋) planten",
        explanation: "De rijen wisselen elkaar af, te beginnen met een volle rij; verschoven rijen schuiven een halve plantafstand op en kunnen één plant minder bevatten.",
      },
      {
        title: "Dichtheid",
        expression: "dichtheid = planten ÷ (L × W)",
        explanation: "Weergegeven per vierkante meter bij metrische eenheden en per vierkante voet bij Amerikaanse eenheden.",
      },
    ],
    examples: [
      {
        title: "Paprika's in een bed van 12 ft × 4 ft, op 18 in in rijen van 2 ft uit elkaar",
        steps: [
          "Planten per rij: ⌊12 ÷ 1,5⌋ = 8",
          "Rijen: ⌊4 ÷ 2⌋ = 2",
          "Totaal: 8 × 2 = 16 planten, of 16 ÷ 48 ft² ≈ 0,33 per ft²",
        ],
      },
      {
        title: "Sla in een bed van 300 cm × 120 cm, in driehoeksverband op 40 cm",
        steps: [
          "Rijafstand: 40 × √3 ÷ 2 ≈ 34,64 cm",
          "Rijen: ⌊(120 − 40) ÷ 34,64⌋ + 1 = 2 + 1 = 3",
          "Volle rijen: ⌊300 ÷ 40⌋ = 7; verschoven rij: ⌊7,5 − 0,5⌋ = 7",
          "Totaal: 2 × 7 + 1 × 7 = 21 planten",
        ],
      },
      {
        title: "Wortels in een plantenbak van 48 in × 24 in, op 3 in in beide richtingen",
        steps: [
          "Planten per rij: ⌊48 ÷ 3⌋ = 16",
          "Rijen: ⌊24 ÷ 3⌋ = 8",
          "Totaal: 16 × 8 = 128 planten op 8 ft², of 16 per ft²",
        ],
      },
    ],
    assumptions: [
      "Het bed is een rechthoek zonder paden, randen of obstakels erin. Meet alleen het beplante deel.",
      "Planten staan minstens een halve plantafstand van elke rand, zodat aangrenzende bedden of paden de tussenruimte delen. Ligt je bed tegen een muur, dan passen er misschien een paar planten meer.",
      "De rijen lopen in de lengte van het bed. Aanbevolen plantafstanden verschillen per ras, grond en klimaat; volg de aanwijzingen op het zaadzakje of van lokale tuinbouwvoorlichting.",
      "De aantallen gelden voor de uiteindelijke plantopstelling. Zaai wat extra en dun uit, of koop een paar reserveplanten, om uitval op te vangen.",
    ],
    faqs: [
      {
        question: "Passen er meer planten in driehoeksverband?",
        answer: "In grote bedden wel: bij dezelfde plantafstand passen er ongeveer 15% meer planten, omdat de rijen dichter op elkaar liggen. In kleine bedden kunnen de verschoven rijen aan het eind een plant verliezen, waardoor de winst kleiner of zelfs negatief kan zijn.",
      },
      {
        question: "Waarom blijft er ruimte vrij langs de randen?",
        answer: "Een plant heeft aan alle kanten ruimte nodig. Door aan elke rand een halve plantafstand vrij te laten, krijgen de planten langs de rand evenveel ruimte als de rest, en liggen twee aangrenzende bedden precies één plantafstand uit elkaar.",
      },
      {
        question: "Wat betekent planten per vierkante voet?",
        answer: "Het aantal planten gedeeld door de oppervlakte van het bed. Handig om indelingen te vergelijken of om tabellen voor vierkantemetertuinieren (square foot gardening) te gebruiken, die een aantal planten per vierkante voet opgeven.",
      },
    ],
    sourcesUsedFor: ["Informatie over blokbeplanting met gelijke afstand in en tussen de rijen in moestuinbedden."],
  },
  text: {
    unit: "Eenheid",
    units: { m: "m", cm: "cm", ft: "ft", in: "in" },
    length: "Lengte van het bed",
    width: "Breedte van het bed",
    pattern: "Plantpatroon",
    patterns: { grid: "Rijen (vierkant raster)", triangular: "Driehoeksverband (verschoven)" },
    spacing: "Afstand tussen planten",
    spacingHelp: "De aanbevolen afstand tussen planten, volgens het zaadzakje of het plantlabel.",
    rowSpacing: "Afstand tussen rijen",
    errors: { tooMany: "Deze plantafstand is te klein voor het bed: dat zou meer dan een miljard planten opleveren." },
    plants: "Planten die passen",
    caption: "Elke plant staat minstens een halve plantafstand van alle randen van het bed.",
    rows: "Rijen",
    perRow: "Planten per rij",
    perRowOffset: "Planten per rij (vol / verschoven)",
    perRowOffsetValue: "{full} / {offset}",
    bedArea: "Oppervlakte van het bed",
    densityMetric: "Planten per vierkante meter",
    densityImperial: "Planten per vierkante voet",
    notes: {
      tooSmall: "Het bed is te klein voor deze plantafstand: er past geen enkele plant als je aan elke rand een halve plantafstand vrijlaat.",
      triangular: "In driehoeksverband schuift elke rij een halve plantafstand op en liggen de rijen 0,866 (√3/2) plantafstand uit elkaar.",
    },
  },
};

export default nl;
