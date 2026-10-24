import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BakersPercentageText } from "../text/en";

const nl: CalculatorTranslation<BakersPercentageText> = {
  content: {
    title: "Bakkerspercentagecalculator",
    shortTitle: "Bakkerspercentage",
    summary:
      "Zet bakkerspercentages om in ingrediëntgewichten vanuit een bloemgewicht, of bereken de bloem voor een gewenst deeggewicht, met de hydratatie.",
    metaTitle: "Bakkerspercentagecalculator – deeggewichten en hydratatie",
    metaDescription:
      "Zet bakkerspercentages om in gram of ounces bloem, water, zout, gist en extra's, bereken de bloem voor een gewenst deeggewicht en zie de hydratatie.",
    keywords: ["bakkerspercentage", "bakkersrekenen", "hydratatie brood", "deegcalculator", "percentage bloem", "broodrecept berekenen", "pizzadeeg gewichten", "deeghydratatie"],
    intro: [
      "Bakkers schrijven broodrecepten als percentages van de bloem. De bloem is altijd 100%, en elk ander ingrediënt wordt daaraan gerelateerd: een deeg met 70% water gebruikt 700 g water per 1.000 g bloem. Omdat de percentages ten opzichte van de bloem gelden, tellen ze op tot meer dan 100%.",
      "Zo zijn recepten makkelijk te schalen en te vergelijken. Vul een bloemgewicht in om het gewicht van elk ingrediënt te krijgen, of vul de totale hoeveelheid deeg in die je wilt, bijvoorbeeld vier pizzabollen van 250 g, om te berekenen met hoeveel bloem je begint.",
    ],
    howToUse: [
      "Kies of je uitgaat van het bloemgewicht of van het totale deeggewicht dat je wilt.",
      "Kies gram of ounces en vul het gewicht in.",
      "Vul de percentages in voor water, zout en gist, en voor maximaal drie extra ingrediënten zoals olie, suiker of boter, elk met een optionele naam.",
      "Lees in de tabel het gewicht van elk ingrediënt af, plus het totale deeggewicht en de hydratatie.",
    ],
    formulas: [
      { title: "Gewicht van een ingrediënt", expression: "gewicht = bloemgewicht × percentage ÷ 100", explanation: "Het percentage van elk ingrediënt geldt ten opzichte van het totale bloemgewicht, dat 100% is." },
      { title: "Totaal deeggewicht", expression: "deeg = bloem × Σ% ÷ 100", explanation: "Σ% is de som van alle percentages, inclusief de 100% van de bloem." },
      {
        title: "Bloem voor een gewenst deeggewicht",
        expression: "bloem = gewenst deeg ÷ (Σ% ÷ 100)",
        explanation: "Voor 1.500 g deeg met Σ% = 171,5% is de bloem 1.500 ÷ 1,715 ≈ 874,6 g.",
      },
      { title: "Hydratatie", expression: "hydratatie = water ÷ bloem × 100%", explanation: "In bakkerspercentages is dat gewoon het waterpercentage." },
    ],
    examples: [
      {
        title: "Basisbrood met 1.000 g bloem bij 70% hydratatie",
        steps: ["Water = 1.000 × 0,70 = 700 g", "Zout = 20 g en gist = 10 g", "Totaal = 1.000 × 173% = 1.730 g deeg"],
      },
      {
        title: "1.500 g pizzadeeg met 3% olijfolie",
        steps: ["Σ% = 100 + 65 + 2 + 1,5 + 3 = 171,5%", "Bloem = 1.500 ÷ 1,715 ≈ 874,6 g", "Water = 874,6 × 0,65 ≈ 568,5 g"],
      },
      {
        title: "Casinobrood met 16 oz bloem en 5% suiker",
        steps: ["Σ% = 100 + 68 + 2 + 0,5 + 5 = 175,5%", "Water = 16 × 0,68 = 10,88 oz; suiker = 0,8 oz", "Totaal = 16 × 1,755 = 28,08 oz deeg"],
      },
    ],
    assumptions: [
      "Alle percentages zijn op gewicht, ten opzichte van het totale gewicht van alle bloemsoorten in het recept.",
      "De hydratatie telt alleen de regel water mee. Melk, eieren, boter of een zuurdesemstarter bevatten ook water (en een starter bevat bloem), dus voeg die toe als extra regels en pas het water aan als je een exacte totale hydratatie wilt.",
      "Het deeggewicht is de som van de ingrediënten vóór het bakken. Er blijft altijd wat deeg aan kommen en gereedschap plakken, en brood verliest gewicht in de oven, dus reken op iets extra als je exacte stukgewichten nodig hebt.",
    ],
    faqs: [
      {
        question: "Waarom tellen bakkerspercentages op tot meer dan 100%?",
        answer:
          "Omdat elk ingrediënt wordt vergeleken met de bloem, niet met het hele deeg. De bloem alleen is al 100%, dus zodra er water, zout en gist bij komen, ligt het totaal altijd boven 100%, voor brood vaak rond 160–180%.",
      },
      {
        question: "Wat betekent 70% hydratatie?",
        answer:
          "Het betekent dat het deeg 70 g water bevat per 100 g bloem. Een hogere hydratatie geeft een natter, plakkeriger deeg en meestal een opener kruim; een lagere hydratatie geeft een steviger deeg dat makkelijker te vormen is.",
      },
      {
        question: "Hoe schaal ik een recept met bakkerspercentages?",
        answer:
          "Houd de percentages gelijk en verander alleen het bloemgewicht, of vul de totale hoeveelheid deeg in die je nodig hebt en laat de calculator de bloem berekenen. Alle andere ingrediënten schalen automatisch mee.",
      },
    ],
    sourcesUsedFor: [
      "De definitie van het bakkerspercentage: elk ingrediënt als percentage van het totale bloemgewicht, waarbij de bloem altijd 100% is.",
    ],
  },
  text: {
    mode: "Uitgaan van",
    modes: { fromFlour: "Bloemgewicht", fromDough: "Gewenst deeggewicht" },
    unit: "Eenheid van gewicht",
    units: { g: "Gram (g)", oz: "Ounce (oz)" },
    flour: "Totaal bloemgewicht",
    flourHelp: "Alle bloem in het recept samen. Die telt als 100%.",
    dough: "Gewenst deeggewicht",
    doughHelp: "Het totale gewicht aan deeg dat je wilt, bijvoorbeeld het aantal broden of pizza's maal het gewicht van elk.",
    water: "Water",
    salt: "Zout",
    yeast: "Gist",
    pctHelp: "Als percentage van het bloemgewicht.",
    extraName: "Extra ingrediënt {n} (optioneel)",
    extraNamePlaceholder: "bijv. olijfolie",
    extraPct: "Extra ingrediënt {n}, % van de bloem",
    extraDefault: "Extra ingrediënt {n}",
    doughWeight: "Totaal deeggewicht",
    flourNeeded: "Benodigde bloem",
    captionFlour: "{flour} bloem bij een totaal van {total}.",
    captionDough: "{dough} deeg ÷ ({total} ÷ 100).",
    flourOut: "Bloem",
    totalPct: "Totaal van alle percentages",
    hydration: "Hydratatie (water ÷ bloem)",
    waterOut: "Gewicht van het water",
    tableCaption: "Gewichten van de ingrediënten",
    colIngredient: "Ingrediënt",
    colPercent: "Bakkerspercentage",
    colWeight: "Gewicht",
    flourRow: "Bloem",
    totalRow: "Totaal deeg",
    notes: {
      hydration:
        "De hydratatie telt alleen de regel water mee. Melk, eieren, een zuurdesemstarter of andere natte ingrediënten voegen ook water toe, dus de werkelijke hydratatie van het deeg is hoger als je die gebruikt.",
      rounding: "Kleine hoeveelheden zoals gist en zout weeg je nauwkeuriger op een weegschaal die tot op 0,1 g aangeeft.",
    },
  },
};

export default nl;
