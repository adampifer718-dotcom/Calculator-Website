import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FoodCostPercentageText } from "../text/en";

const nl: CalculatorTranslation<FoodCostPercentageText> = {
  content: {
    title: "Foodcostcalculator voor de horeca",
    shortTitle: "Foodcostpercentage",
    summary: "Bereken het foodcostpercentage van een gerecht of van een hele periode uit voorraad en omzet, en de menuprijs die een gewenst foodcostpercentage oplevert.",
    metaTitle: "Foodcostpercentage berekenen – bordkosten en menuprijs",
    metaDescription:
      "Bereken het foodcostpercentage van een gerecht of een periode uit voorraad, inkopen en omzet, met brutowinst en een menuprijs voor je gewenste foodcost.",
    keywords: ["foodcost berekenen", "foodcostpercentage", "kostprijs gerecht", "menuprijs berekenen", "foodcost restaurant", "inkoopwaarde van de omzet", "kostprijsberekening horeca"],
    intro: [
      "Het foodcostpercentage is het deel van een menuprijs, of van de foodomzet van een restaurant, dat aan ingrediënten opgaat. Het is een van de meest gevolgde cijfers in de horeca, omdat het snel laat zien of de prijzen gelijke tred houden met wat het eten kost om in te kopen.",
      "Gebruik de gerechtmodus om één menu-item te controleren aan de hand van de kostprijs per bord en de verkoopprijs, en om de prijs te vinden die een gewenst foodcostpercentage geeft. Gebruik de periodemodus om de foodcost van een week of maand te berekenen uit je voorraadtellingen, inkopen en foodomzet.",
    ],
    howToUse: [
      "Kies de valuta en of je met één gerecht of met een hele periode werkt.",
      "Vul voor een gerecht de kostprijs per bord in (de kosten van alle ingrediënten in één portie) en de menuprijs zonder btw.",
      "Vul voor een periode de waarde van de voedselvoorraad aan het begin en eind in, het eten dat je ertussen hebt ingekocht en de foodomzet over dezelfde periode.",
      "Vul eventueel een gewenst foodcostpercentage in voor een voorgestelde menuprijs, of de omzet die de foodcost van de periode zou vereisen.",
    ],
    formulas: [
      { title: "Foodcostpercentage van een gerecht", expression: "foodcost % = kostprijs per bord ÷ menuprijs × 100", explanation: "De menuprijs is de prijs zonder btw." },
      { title: "Menuprijs voor een doel", expression: "prijs = kostprijs per bord ÷ (doel % ÷ 100)", explanation: "Een bord van $4,20 bij een doel van 28% geeft bijvoorbeeld 4,20 ÷ 0,28 = $15,00." },
      { title: "Foodcostpercentage van een periode", expression: "inkoopwaarde = beginvoorraad + inkopen − eindvoorraad;  foodcost % = inkoopwaarde ÷ foodomzet × 100", explanation: "De inkoopwaarde van de omzet (COGS) is de kostprijs van het eten dat in de periode is verbruikt, of het nu verkocht, weggegooid of weggegeven is." },
      { title: "Brutowinst en marge", expression: "brutowinst = prijs − foodcost;  marge % = brutowinst ÷ prijs × 100", explanation: "Deze marge trekt alleen de foodcost af; personeel en vaste kosten moeten er nog van worden betaald." },
    ],
    examples: [
      {
        title: "Een gerecht van $14 met een kostprijs per bord van $4,20, doel 28%",
        steps: ["Foodcost = 4,20 ÷ 14 × 100 = 30%", "Brutowinst = 14 − 4,20 = $9,80, een marge van 70%", "Prijs voor 28% = 4,20 ÷ 0,28 = $15,00"],
      },
      {
        title: "Een pastagerecht van € 12,50 dat € 3,85 kost om te maken",
        steps: ["Foodcost = 3,85 ÷ 12,50 × 100 = 30,8%", "Prijs voor een doel van 30% = 3,85 ÷ 0,30 ≈ € 12,83"],
      },
      {
        title: "Een maand uit voorraadtellingen",
        steps: [
          "Inkoopwaarde = 9.200 + 14.600 − 8.100 = $15.700",
          "Foodcost = 15.700 ÷ 48.500 × 100 ≈ 32,37%",
          "Brutowinst op eten = 48.500 − 15.700 = $32.800; bij 30% zou dezelfde inkoopwaarde ongeveer $52.333 omzet vereisen",
        ],
      },
    ],
    assumptions: [
      "Alle bedragen staan in één valuta en zijn exclusief btw. De voorraad wordt gewaardeerd tegen kostprijs.",
      "De periodemodus gaat ervan uit dat de voorraadtellingen precies aan het begin en eind van dezelfde periode als de omzet zijn gedaan, en dat de inkopen alleen eten omvatten (geen dranken of benodigdheden, tenzij je die wilt meenemen).",
      "Er is niet één juist foodcostpercentage. Vaak wordt 28 tot 35 procent van de verkoopprijs genoemd, maar het juiste cijfer hangt af van het soort restaurant, de prijzen en de andere kosten.",
    ],
    faqs: [
      { question: "Wat is een goed foodcostpercentage?", answer: "Vaak worden cijfers van ongeveer 28 tot 35 procent genoemd, maar er is geen universeel doel. Een restaurant met hoge personeels- of huurkosten heeft misschien een lagere foodcost nodig, terwijl een zaak met topingrediënten en minder personeel hoger kan uitkomen." },
      { question: "Waarom verschilt mijn foodcost per periode van mijn kostprijzen per gerecht?", answer: "Het periodecijfer omvat alles wat uit de voorraad is verdwenen: verspilling, bederf, personeelsmaaltijden, te grote porties en diefstal, naast het eten dat is verkocht. Het vergelijken met de geplande kostprijzen per gerecht is een goede manier om die verliezen op te sporen." },
      { question: "Moet ik de btw in de menuprijs meenemen?", answer: "Nee. Gebruik de prijs zonder btw, want btw wordt voor de overheid geïnd en is geen omzet voor het bedrijf." },
    ],
    sourcesUsedFor: [
      "Foodcost % = portiekostprijs ÷ menuprijs × 100, en het vaak genoemde bereik van 28 tot 35 procent van de verkoopprijs.",
      "Foodcost % per periode = (beginvoorraad + inkopen − eindvoorraad) ÷ foodomzet × 100.",
    ],
  },
  text: {
    mode: "Berekenen voor",
    modes: { dish: "Eén gerecht", period: "Een periode (voorraad)" },
    plateCost: "Kostprijs per bord",
    plateCostHelp: "De kosten van alle ingrediënten in één portie, inclusief garnering en bijgerechten.",
    menuPrice: "Menuprijs",
    menuPriceHelp: "De verkoopprijs van het gerecht, zonder btw.",
    beginInventory: "Beginvoorraad",
    beginInventoryHelp: "De waarde van de voedselvoorraad aan het begin van de periode.",
    purchases: "Inkoop van eten",
    purchasesHelp: "De waarde van het eten dat in de periode is ingekocht.",
    endInventory: "Eindvoorraad",
    endInventoryHelp: "De waarde van de voedselvoorraad aan het eind van de periode.",
    sales: "Foodomzet",
    salesHelp: "Netto foodomzet over dezelfde periode, zonder btw.",
    target: "Gewenst foodcostpercentage (optioneel)",
    targetHelp: "Het foodcostpercentage waar je naar streeft, voor een voorgestelde menuprijs of de omzet die daarbij hoort.",
    errors: {
      inventory: "De eindvoorraad kan niet groter zijn dan de beginvoorraad plus de inkopen.",
    },
    foodCost: "Foodcostpercentage",
    captionDish: "Kostprijs per bord {cost} ÷ menuprijs {price}.",
    captionPeriod: "Inkoopwaarde van de omzet {cogs} ÷ foodomzet {sales}.",
    grossProfitPlate: "Brutowinst per bord",
    grossProfitPeriod: "Brutowinst op eten over de periode",
    margin: "Dekkingsbijdrage na foodcost",
    suggestedPrice: "Voorgestelde menuprijs bij het doel",
    salesAtTarget: "Benodigde foodomzet bij het doel",
    cogs: "Inkoopwaarde van de omzet (eten)",
    notes: {
      margin: "De marge trekt hier alleen de foodcost af. Personeel, huur en andere kosten moeten er nog van af.",
      rounding: "De voorgestelde prijs is de prijs waarbij deze kostprijs per bord gelijk is aan het doelpercentage. Menuprijzen worden vaak afgerond op een handig bedrag.",
      above100: "De foodcost is hoger dan de verkoopprijs, dus elke verkoop lijdt alleen al op de ingrediënten verlies.",
    },
  },
};

export default nl;
