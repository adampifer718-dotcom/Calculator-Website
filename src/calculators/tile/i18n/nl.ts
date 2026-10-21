import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TileText } from "../text/en";

const nl: CalculatorTranslation<TileText> = {
  content: {
    title: "Tegelcalculator",
    shortTitle: "Tegels",
    summary: "Schat hoeveel tegels en dozen je nodig hebt voor een vloer of wand, op basis van oppervlakte, tegelmaat, voegbreedte en een marge voor snijverlies.",
    metaTitle: "Tegelcalculator – hoeveel tegels en dozen kopen",
    metaDescription:
      "Bereken hoeveel tegels je nodig hebt voor een vloer of wand uit de oppervlakte, de tegelmaat en de voegbreedte, met een marge voor verlies en afgerond op hele dozen.",
    keywords: ["tegelcalculator", "hoeveel tegels nodig", "vloertegels", "wandtegels", "voegbreedte", "tegels berekenen", "snijverlies", "spatwand"],
    intro: [
      "Voordat je tegels koopt, heb je een aantal nodig en niet alleen een oppervlakte. Deze calculator deelt de oppervlakte die je betegelt door de ruimte die elke tegel inneemt, inclusief de voeg eromheen, en telt daar een marge bij op voor snijverlies en breuk.",
      "Vul de afmetingen van de oppervlakte en van één tegel in, kies een voegbreedte en een verliespercentage, en eventueel het aantal tegels per doos. Je krijgt het aantal tegels dat je moet kopen en, als je een doosinhoud hebt ingevuld, het aantal dozen.",
    ],
    howToUse: [
      "Kies Amerikaanse eenheden (oppervlakte in voet, tegel en voeg in inch) of metrische eenheden (oppervlakte in meter, tegel en voeg in millimeter).",
      "Vul de lengte en breedte in van de oppervlakte die je betegelt. Verdeel een L-vormige ruimte in rechthoeken, reken elke rechthoek apart uit en tel de uitkomsten op.",
      "Vul de lengte en breedte van de tegel in, en de voegbreedte.",
      "Stel een marge voor verlies in en, als je het weet, het aantal tegels per doos.",
      "Lees het aantal benodigde tegels en het aantal te kopen dozen af.",
    ],
    formulas: [
      {
        title: "Oppervlakte per tegel met voeg",
        expression: "a = (tegellengte + g) × (tegelbreedte + g)",
        explanation: "Elke tegel neemt zijn eigen maat in plus één voegbreedte g in elke richting.",
      },
      {
        title: "Benodigde tegels",
        expression: "tegels = ⌈oppervlakte ÷ a × (1 + verlies%)⌉",
        explanation:
          "Deel de oppervlakte door de ruimte per tegel, tel de verliesmarge erbij op en rond naar boven af op een hele tegel. Tegelmaten worden omgerekend met 144 in² per ft² of 1.000.000 mm² per m².",
      },
      { title: "Dozen", expression: "dozen = ⌈tegels ÷ tegels per doos⌉", explanation: "Rond naar boven af, want dozen worden alleen heel verkocht." },
    ],
    examples: [
      {
        title: "Een vloer van 10 × 14 ft met tegels van 18 inch",
        steps: [
          "Oppervlakte = 10 × 14 = 140 ft²",
          "Per tegel = 18,25 × 18,25 = 333,0625 in² ≈ 2,3129 ft²",
          "140 ÷ 2,3129 ≈ 60,53 tegels; × 1,10 ≈ 66,58, naar boven afgerond 67 tegels",
        ],
      },
      {
        title: "Een badkamer van 3,2 × 2,5 m met tegels van 600 × 300 mm, 8 per doos",
        steps: [
          "Oppervlakte = 3,2 × 2,5 = 8 m²",
          "Per tegel = 602 × 302 = 181.804 mm² = 0,181804 m²",
          "8 ÷ 0,181804 ≈ 44,00; × 1,12 ≈ 49,28, naar boven afgerond 50 tegels",
          "50 ÷ 8 = 6,25, dus 7 dozen",
        ],
      },
      {
        title: "Een spatwand van 8 × 5 ft met tegels van 4 inch",
        steps: [
          "Oppervlakte = 8 × 5 = 40 ft²",
          "Per tegel = 4,0625 × 4,0625 ≈ 16,504 in² ≈ 0,11461 ft²",
          "40 ÷ 0,11461 ≈ 349,01; × 1,15 ≈ 401,36, naar boven afgerond 402 tegels",
        ],
      },
    ],
    assumptions: [
      "De oppervlakte is een eenvoudige rechthoek. Echte legpatronen met veel snijwerk, randen, nissen of patronen zoals diagonaal of visgraat kunnen meer tegels vragen dan deze schatting.",
      "De verliesmarge kies je zelf. Ongeveer 10% is een gangbaar uitgangspunt bij recht leggen; het is een vuistregel, geen norm.",
      "De schatting gaat alleen over tegels. Lijm, voegmiddel, afwerkprofielen en de voorbereiding van de ondergrond vallen erbuiten; volg daarvoor de instructies van de fabrikanten van de tegels en producten.",
    ],
    faqs: [
      {
        question: "Waarom de voeg meerekenen?",
        answer: "Elke voeg vergroot de ruimte die een tegel bedekt een beetje, dus je hebt minder tegels nodig. Bij kleine tegels en brede voegen kan het verschil enkele procenten zijn.",
      },
      {
        question: "Hoeveel extra tegels moet ik kopen?",
        answer: "Veel tegelzetters rekenen ongeveer 10% extra bij recht leggen, en meer bij diagonale patronen of ruimtes met veel hoeken. Een paar reservetegels bewaren helpt ook bij latere reparaties.",
      },
      {
        question: "Hoe meet ik een L-vormige ruimte?",
        answer: "Verdeel hem in twee rechthoeken, reken elke rechthoek uit met dezelfde tegelinstellingen en tel de twee aantallen tegels op.",
      },
    ],
    sourcesUsedFor: ["Oppervlakte van een rechthoek, gebruikt voor zowel de te betegelen oppervlakte als elke tegel met voeg."],
  },
  text: {
    units: "Eenheden",
    unitSystems: { imperial: "Amerikaans (ft, in)", metric: "Metrisch (m, mm)" },
    areaLength: "Lengte van de oppervlakte",
    areaWidth: "Breedte van de oppervlakte",
    areaHelp: "De vloer- of wandoppervlakte die je betegelt, gemeten als rechthoek.",
    tileLength: "Tegellengte",
    tileWidth: "Tegelbreedte",
    grout: "Voegbreedte",
    groutHelpImperial: "De ruimte tussen de tegels. 1/8 in is 0,125 in; vul 0 in als er geen voeg is.",
    groutHelpMetric: "De ruimte tussen de tegels. Vul 0 in als er geen voeg is.",
    waste: "Marge voor verlies",
    wasteHelp: "Extra tegels voor snijverlies, breuk en reserve. Ongeveer 10% is gebruikelijk bij recht leggen; diagonale en patroonlegging vragen meer.",
    perBox: "Tegels per doos (optioneel)",
    perBoxHelp: "Laat leeg als je tegels per stuk koopt.",
    tilesNeeded: "Benodigde tegels",
    caption: "{area} met {perTile} per tegel inclusief voeg, plus {waste} verlies.",
    tilesBeforeWaste: "Tegels zonder verliesmarge",
    area: "Te betegelen oppervlakte",
    tileFootprint: "Oppervlakte per tegel met voeg",
    boxes: "Te kopen dozen",
    boxesCaption: "{boxes} ({tiles})",
    boxesCount: { zero: "{n} dozen", one: "{n} doos", two: "{n} dozen", few: "{n} dozen", many: "{n} dozen", other: "{n} dozen" },
    tilesCount: { zero: "{n} tegels", one: "{n} tegel", two: "{n} tegels", few: "{n} tegels", many: "{n} tegels", other: "{n} tegels" },
    spare: "Reservetegels in de dozen",
    notes: {
      layout: "Gaat uit van een eenvoudige rechthoekige oppervlakte. Echte legpatronen met veel snijwerk, randen of patronen kunnen meer tegels vragen.",
      batch: "Koop alle tegels als het kan uit dezelfde partij (batch), want de kleur kan per partij verschillen.",
    },
  },
};

export default nl;
