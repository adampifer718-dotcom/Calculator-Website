import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ConcreteText } from "../text/en";

const nl: CalculatorTranslation<ConcreteText> = {
  content: {
    title: "Betoncalculator",
    shortTitle: "Beton",
    summary: "Schat hoeveel beton je moet bestellen voor vloeren, funderingen, ronde kolommen en holle buizen, met een optionele marge voor verlies.",
    metaTitle: "Betoncalculator – Volume van vloer, kolom en buis",
    metaDescription:
      "Schat het betonvolume voor vloeren, funderingen, ronde kolommen en buizen in kubieke meter, kubieke yard, kubieke voet en liter, met optionele verliesmarge.",
    keywords: ["beton berekenen", "betonvolume", "kuub beton", "betonvloer", "fundering", "kolom", "bekistingsbuis", "stortklaar beton"],
    intro: [
      "Beton bestel je op volume. Vul de afmetingen van een vloer, fundering, ronde kolom of holle buis in om te zien hoeveel je nodig hebt, in de eenheden die leveranciers gebruiken.",
      "Een optionele marge voor verlies dekt morsen, oneffen grond en bekisting die naar buiten buigt, zodat de levering niet tekortschiet.",
    ],
    howToUse: [
      "Kies de vorm en metrische of Amerikaanse eenheden.",
      "Vul de afmetingen in: lange zijden in meter of voet, dikte en diameters in centimeter of inch.",
      "Vul in hoeveel identieke stukken je stort.",
      "Stel de verliesmarge in (5–10% is gebruikelijk) en lees het te bestellen volume af.",
    ],
    formulas: [
      { title: "Vloer of fundering", expression: "V = lengte × breedte × dikte", explanation: "Een rechthoekig blok. Reken eerst alle afmetingen om naar dezelfde eenheid." },
      { title: "Ronde kolom", expression: "V = π × (diameter ÷ 2)² × hoogte", explanation: "Een cilinder, zoals een kolom die in een kartonnen bekistingsbuis wordt gestort." },
      { title: "Holle buis", expression: "V = π × ((buiten ÷ 2)² − (binnen ÷ 2)²) × hoogte", explanation: "De buitencilinder min de holle kern." },
      { title: "Met verlies", expression: "Bestelling = V × aantal stukken × (1 + verlies % ÷ 100)", explanation: "1 yd³ = 0,764555 m³ en 1 m³ = 1.000 L." },
    ],
    examples: [
      {
        title: "Terrasvloer van 4 m × 3 m, 10 cm dik, 10% verlies",
        steps: ["V = 4 m × 3 m × 0,10 m = 1,2 m³", "Met 10% verlies: 1,2 × 1,10 = 1,32 m³"],
      },
      {
        title: "Garagevloer van 10 ft × 10 ft, 4 in dik, zonder verlies",
        steps: ["V = 10 ft × 10 ft × 4/12 ft = 33,33 ft³", "33,33 ft³ ÷ 27 = 1,235 yd³"],
      },
    ],
    assumptions: [
      "De vormen zijn ideale rechthoeken en cilinders; meet de werkelijke bekisting op, want grond en bekisting zijn zelden helemaal vlak of recht.",
      "De verliesmarge is een percentage van het exacte volume; er wordt geen rekening gehouden met wapeningsstaal, dat een kleine hoeveelheid beton verdringt.",
      "Dit is alleen een schatting van het volume, geen technisch advies of constructief ontwerp. Dikte, wapening en betonsterkte moeten voldoen aan de lokale bouwregels of het ontwerp van een constructeur.",
    ],
    faqs: [
      { question: "Hoeveel extra beton moet ik bestellen?", answer: "5–10% is een gebruikelijke marge voor vloeren op voorbereide grond; bij oneffen uitgravingen kan meer nodig zijn. Een tekort halverwege het storten geeft zwakke naden, dus leveranciers raden meestal aan naar boven af te ronden." },
      { question: "Hoeveel kubieke voet zit er in een kubieke yard?", answer: "27, omdat een yard 3 voet is en 3 × 3 × 3 = 27. Eén kubieke yard is ongeveer 0,765 kubieke meter." },
      { question: "Kan ik dit gebruiken voor zakken kant-en-klaar beton?", answer: "Ja: deel het volume door de opbrengst die op de zak staat, want die verschilt per product, en rond naar boven af." },
    ],
    sourcesUsedFor: ["Exacte omrekeningsfactoren tussen voet, inch, meter, kubieke yard en kubieke meter."],
  },
  text: {
    shape: "Vorm",
    shapes: { slab: "Vloer of fundering", column: "Ronde kolom", tube: "Holle buis" },
    units: "Eenheden",
    unitSystems: { metric: "Metrisch (m, cm)", imperial: "VS (ft, in)" },
    length: "Lengte",
    width: "Breedte",
    thickness: "Dikte",
    diameter: "Diameter",
    outerDiameter: "Buitendiameter",
    innerDiameter: "Binnendiameter",
    height: "Hoogte",
    quantity: "Aantal identieke stukken",
    waste: "Extra voor verlies",
    wasteHelp: "Marge voor morsen, oneffen grond en te diep graven. 5–10% is gebruikelijk; gebruik 0 voor het exacte volume.",
    errors: { inner: "De binnendiameter moet kleiner zijn dan de buitendiameter." },
    volume: "Te bestellen beton",
    caption: "{exact} zonder de verliesmarge van {waste}.",
    exact: "Exact volume (zonder verlies)",
    inCubicMetres: "In kubieke meter",
    inCubicYards: "In kubieke yard",
    inCubicFeet: "In kubieke voet",
    inLitres: "In liter",
    notes: {
      order: "Stortklaar beton wordt per kubieke meter of kubieke yard verkocht; rond af naar boven op de kleinste eenheid van de leverancier.",
      structural: "Dit schat alleen het volume. Vloerdikte, wapening, betonsterkte en funderingsmaten moeten voldoen aan je lokale bouwregels of het ontwerp van een constructeur.",
    },
  },
};

export default nl;
