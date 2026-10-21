import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoofPitchText } from "../text/en";

const nl: CalculatorTranslation<RoofPitchText> = {
  content: {
    title: "Dakhellingcalculator",
    shortTitle: "Dakhelling",
    summary: "Zet de stijging en de horizontale lengte van een dak, of de hoek, om in helling per 12, graden, procenten en spoorlengte.",
    metaTitle: "Dakhellingcalculator – X op 12, hoek en spoorlengte",
    metaDescription:
      "Zet stijging en horizontale lengte, of de dakhoek, om in een helling in inch per 12, graden en procenten, plus de spoorfactor en de lengte van het dakspoor.",
    keywords: [
      "dakhelling",
      "dakhelling berekenen",
      "hellingshoek dak",
      "helling 4/12",
      "dakhoek",
      "lengte dakspoor",
      "dakhelling in procenten",
    ],
    intro: [
      "De helling van een dak wordt vaak opgegeven als stijging per 12 horizontale lengte: een dak van 6 op 12 stijgt 6 inch voor elke 12 inch die het horizontaal overbrugt. Dezelfde helling kun je ook uitdrukken als hoek in graden of als percentage.",
      "Vul de gemeten stijging en horizontale lengte in, of de hoek van een tekening, en de calculator geeft alle drie de vormen. Vul ook de horizontale daklengte in om de lengte van het dakspoor van muurlijn tot nok te krijgen.",
    ],
    howToUse: [
      "Kies of je de stijging en horizontale lengte kent of de hoek.",
      "Vul stijging en horizontale lengte in dezelfde eenheid in, of de hoek in graden.",
      "Vul eventueel de horizontale daklengte in, de helft van de overspanning van het gebouw, om de lengte van het dakspoor te krijgen.",
      "Lees de helling op 12, de hoek, het hellingspercentage en de waarden voor het dakspoor af.",
    ],
    formulas: [
      { title: "Helling per 12", expression: "helling = 12 × stijging ÷ lengte", explanation: "Schaalt de helling naar een horizontale lengte van 12 eenheden." },
      { title: "Hoek", expression: "θ = arctan(stijging ÷ lengte)", explanation: "Omgekeerd geldt stijging ÷ lengte = tan θ." },
      { title: "Hellingspercentage", expression: "helling % = 100 × stijging ÷ lengte", explanation: "Een dak van 12 op 12 heeft een helling van 100%, oftewel 45°." },
      {
        title: "Lengte van het dakspoor",
        expression: "spoor = horizontale daklengte × √(1 + (stijging ÷ lengte)²)",
        explanation: "Stelling van Pythagoras: de vierkantswortel is de spoorfactor.",
      },
    ],
    examples: [
      {
        title: "6 inch stijging over 12 inch horizontale lengte",
        steps: ["helling = 12 × 6 ÷ 12 = 6 op 12", "θ = arctan(0,5) ≈ 26,57°, helling van 50%", "factor = √1,25 ≈ 1,1180"],
      },
      {
        title: "5 ft stijging over 8 ft, met een horizontale daklengte van 14 ft",
        steps: ["helling = 12 × 5 ÷ 8 = 7,5 op 12", "factor = √(1 + 0,625²) ≈ 1,1792", "spoor = 14 × 1,1792 ≈ 16,509 ft"],
      },
      {
        title: "Een dak van 30°",
        steps: ["stijging ÷ lengte = tan 30° ≈ 0,5774", "helling = 12 × 0,5774 ≈ 6,93 op 12", "helling ≈ 57,74%"],
      },
    ],
    assumptions: [
      "Dit is alleen meetkunde. De dimensionering van de sporen, het constructieve ontwerp, minimale hellingen per dakbedekking en de lokale bouwregels vragen om een gekwalificeerde vakman.",
      "Stijging en horizontale lengte moeten in dezelfde eenheid staan. De spoorlengte gebruikt de eenheid die je kiest en is exclusief overstek, nokbalk en zaagverlies.",
      "Het dak wordt behandeld als een vlak met een recht spoor van muurlijn tot nok.",
    ],
    faqs: [
      {
        question: "Wat betekent een helling van 4/12?",
        answer: "Het dak stijgt 4 eenheden voor elke 12 eenheden horizontale lengte, wat overeenkomt met ongeveer 18,43° of een helling van 33,3%.",
      },
      {
        question: "Is ‘pitch’ hetzelfde als helling?",
        answer: "In het dagelijks gebruik wel. Strikt genomen definiëren sommige timmerlieden ‘pitch’ als de totale stijging gedeeld door de volledige overspanning, wat de helft is van de verhouding stijging/lengte. Deze calculator gebruikt de stijging per 12 horizontale lengte.",
      },
      {
        question: "Hoe meet ik stijging en horizontale lengte?",
        answer: "Houd een waterpas horizontaal tegen het dak of een spoor, markeer 12 inch langs de waterpas en meet vanaf die markering verticaal tot aan het dakvlak. Die verticale afstand is de stijging per 12.",
      },
    ],
    sourcesUsedFor: ["Uitdrukken van de dakhelling als stijging per 12 eenheden horizontale lengte, en de betekenis van de horizontale lengte."],
  },
  text: {
    mode: "Uitgaan van",
    modeOptions: { riseRun: "Stijging en lengte", angle: "Hoek" },
    unit: "Lengte-eenheid",
    units: { in: "Inch (in)", ft: "Voet (ft)", cm: "Centimeter (cm)", m: "Meter (m)" },
    rise: "Stijging",
    riseHelp: "De verticale hoogte die over de horizontale lengte wordt gewonnen.",
    run: "Horizontale lengte",
    runHelp: "Horizontale afstand, in dezelfde eenheid als de stijging.",
    angle: "Dakhoek",
    angleTooSteep: "De hoek moet kleiner zijn dan 90°.",
    roofRun: "Horizontale daklengte (optioneel)",
    roofRunHelp: "De helft van de overspanning van het gebouw, van de buitenkant van de muur tot onder de nok. Gebruikt voor de lengte van het dakspoor.",
    pitch: "Dakhelling",
    pitchText: "{rise} op 12",
    pitchCaption: "Inch stijging per 12 inch horizontale lengte (elke eenheid werkt, zolang beide gelijk zijn).",
    angleOut: "Hoek",
    slopePercent: "Helling",
    multiplier: "Spoorfactor",
    rafter: "Lengte van het dakspoor (zonder overstek)",
    roofRise: "Stijging over de horizontale daklengte",
    note: "De spoorlengte wordt langs de helling gemeten, van muurlijn tot nok, zonder overstek, nokbalk of zaagverlies.",
  },
};

export default nl;
