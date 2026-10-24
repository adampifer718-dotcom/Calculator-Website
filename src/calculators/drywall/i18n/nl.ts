import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DrywallText } from "../text/en";

const nl: CalculatorTranslation<DrywallText> = {
  content: {
    title: "Gipsplaatcalculator",
    shortTitle: "Gipsplaten",
    summary: "Schat hoeveel gipsplaten je nodig hebt voor wanden en eventueel een plafond, min deuren en ramen, met een marge voor snijverlies.",
    metaTitle: "Gipsplaatcalculator – hoeveel gipsplaten je nodig hebt",
    metaDescription:
      "Bereken hoeveel gipsplaten van 4×8, 4×10 of 4×12 ft (of metrisch) je koopt voor wanden en plafond, na aftrek van deuren en ramen, plus een verliesmarge.",
    keywords: ["gipsplaatcalculator", "hoeveel gipsplaten nodig", "gipskartonplaat", "gipsplaten berekenen", "plafondplaten", "voegmiddel", "wandplaten"],
    intro: [
      "Gipsplaat, ook gipskartonplaat of in de VS drywall of Sheetrock genoemd, wordt verkocht in platen van een vaste maat. Om te weten hoeveel je moet kopen, bereken je de oppervlakte van de wanden (en van het plafond, als je dat ook beplaat), trek je de deuren en ramen eraf, tel je wat extra op voor snijresten en deel je door de oppervlakte van één plaat.",
      "Deze calculator doet dat voor gangbare Amerikaanse en metrische plaatmaten en rondt naar boven af op hele platen. Hij geeft ook een ruwe schatting van de kant-en-klare voegvuller die nodig is om de naden af te werken.",
    ],
    howToUse: [
      "Kies Amerikaanse eenheden (voet) of metrische eenheden (meter).",
      "Vul de totale lengte in van de wanden die je beplaat, en hun hoogte. Voor een hele kamer is de totale lengte de omtrek.",
      "Kies of je het plafond meeneemt; zo ja, vul dan de lengte en breedte van de kamer in.",
      "Vul in hoeveel deuren en ramen er zijn, en pas zo nodig hun gangbare maten aan.",
      "Kies de plaatmaat en een verliesmarge, en lees het aantal te kopen platen af.",
    ],
    formulas: [
      {
        title: "Netto oppervlakte",
        expression: "A = L × H + plafondlengte × plafondbreedte − openingen",
        explanation: "L is de totale wandlengte en H de wandhoogte. Openingen zijn de deuren en ramen maal hun oppervlakte.",
      },
      {
        title: "Benodigde platen",
        expression: "platen = ⌈A × (1 + verlies) ÷ plaatoppervlakte⌉",
        explanation: "Naar boven afgerond op een hele plaat. Een plaat van 4 × 8 ft dekt 32 ft² en een plaat van 1,2 × 2,4 m dekt 2,88 m².",
      },
      {
        title: "Voegvuller (bij benadering)",
        expression: "voegvuller ≈ A × 9 gal ÷ 1.000 ft² (≈ 0,37 L/m²)",
        explanation: "Een vuistregel voor kant-en-klare voegvuller; het productblad geeft een beter getal.",
      },
    ],
    examples: [
      {
        title: "Wanden van een kamer met 50 ft wand, 8 ft hoog",
        steps: ["Wandoppervlakte = 50 × 8 = 400 ft²", "Openingen = 20 + 2 × 15 = 50 ft², dus de netto oppervlakte is 350 ft²", "Met 10% verlies: 385 ft² ÷ 32 ft² ≈ 12,03, dus koop 13 platen"],
      },
      {
        title: "Kamer van 14 × 12 ft met wanden van 9 ft en het plafond, platen van 4 × 12",
        steps: [
          "Wanden = 52 × 9 = 468 ft²; plafond = 14 × 12 = 168 ft²",
          "Openingen = 2 × 20 + 2 × 15 = 70 ft², dus de netto oppervlakte is 566 ft²",
          "Met 12% verlies: 633,92 ft² ÷ 48 ft² ≈ 13,21, dus koop 14 platen",
          "Voegvuller ≈ 566 × 9 ÷ 1.000 ≈ 5,1 gal",
        ],
      },
      {
        title: "Metrische kamer met 15,6 m wand, 2,6 m hoog, en het plafond",
        steps: [
          "Wanden = 15,6 × 2,6 = 40,56 m²; plafond = 4,5 × 3,3 = 14,85 m²",
          "Openingen = 1,9 + 1,4 = 3,3 m², dus de netto oppervlakte is 52,11 m²",
          "Met 10% verlies: 57,32 m² ÷ 2,88 m² ≈ 19,9, dus koop 20 platen",
        ],
      },
    ],
    assumptions: [
      "Wanden en plafonds worden behandeld als vlakke rechthoeken. Reken topgevels, schuine plafonds en verlaagde plafondstukken apart uit en tel ze op bij de wandlengte of als extra plafondoppervlakte.",
      "Het aantal is gebaseerd op oppervlakte. Een indeling plaat voor plaat kan een paar platen meer vragen, vooral als de wandhoogte niet goed past bij de plaatlengte.",
      "De maten van deuren en ramen zijn gangbare waarden. Meet je eigen deuren en ramen voor een nauwkeuriger schatting.",
      "De hoeveelheid voegvuller is een benadering, gebaseerd op een vuistregel van een fabrikant voor kant-en-klare voegvuller. Schroeven, voegband en hoekprofielen worden niet geschat.",
    ],
    faqs: [
      {
        question: "Hoeveel verlies moet ik rekenen voor gipsplaten?",
        answer: "Ongeveer 10% is gebruikelijk voor eenvoudige rechthoekige kamers. Kamers met veel hoeken, openingen, schuine plafonds of korte wandstukken geven meer snijresten, dus daar is 15% of meer veiliger.",
      },
      {
        question: "Moet ik langere platen gebruiken?",
        answer: "Langere platen, zoals 4 × 12 ft, betekenen minder naden om af te plakken en af te werken, wat tijd en voegvuller bespaart. Ze zijn zwaarder en lastiger door deuren en de trap op te dragen, dus ze passen bij open ruimtes en klussen met z'n tweeën.",
      },
      {
        question: "Trek ik ramen en deuren af?",
        answer: "Ja, voor de oppervlakte. Veel plaatsers bekleden kleine openingen gewoon mee en zagen ze er daarna uit, dus de verliesmarge dekt de snijresten.",
      },
    ],
    sourcesUsedFor: ["De vuistregel van ongeveer twee emmers van 4,5 gallon kant-en-klare voegvuller om 1.000 ft² gipsplaat af te werken."],
  },
  text: {
    units: "Eenheden",
    unitSystems: { imperial: "Amerikaans (ft)", metric: "Metrisch (m)" },
    length: "Totale wandlengte",
    lengthHelp: "Tel de breedtes op van alle wanden die je beplaat. Voor een hele kamer is dit de omtrek.",
    height: "Wandhoogte",
    ceiling: "Plafond meenemen?",
    ceilingOptions: { no: "Nee", yes: "Ja" },
    roomLength: "Lengte van de kamer (plafond)",
    roomWidth: "Breedte van de kamer (plafond)",
    doors: "Aantal deuren",
    doorArea: "Oppervlakte van één deur",
    windows: "Aantal ramen",
    windowArea: "Oppervlakte van één raam",
    openingHelp: "Er is een gangbare waarde ingevuld; meet je eigen maten voor een nauwkeuriger schatting.",
    sheet: "Plaatmaat",
    waste: "Marge voor verlies",
    wasteHelp: "Extra voor snijresten, fouten en beschadigde platen. Ongeveer 10% past bij eenvoudige rechthoekige kamers; neem meer bij veel hoeken, openingen of schuine plafonds.",
    errors: { openings: "De deuren en ramen zijn samen minstens zo groot als de hele wandoppervlakte. Controleer de aantallen, de maten van de openingen en de afmetingen van de wanden." },
    sheets: "Benodigde gipsplaten",
    caption: "{area} plaat plus {waste} verlies, in platen van {sheet} ({sheetArea} per stuk).",
    wallArea: "Wandoppervlakte",
    ceilingArea: "Plafondoppervlakte",
    openingArea: "Deuren en ramen",
    netArea: "Netto te bekleden oppervlakte",
    areaWithWaste: "Oppervlakte inclusief verlies",
    sheetArea: "Oppervlakte van één plaat",
    compound: "Voegvuller, bij benadering (kant-en-klaar)",
    notes: {
      compound:
        "De hoeveelheid voegvuller gebruikt een vuistregel van ongeveer 9 Amerikaanse gallon (twee emmers van 4,5 gallon) kant-en-klare voegvuller per 1.000 ft² plaat, ongeveer 0,37 L per m². De hoeveelheid verschilt per product en afwerkingsniveau, dus kijk op het productblad.",
      layout: "Dit is een schatting op basis van oppervlakte. Een indeling plaat voor plaat, vooral bij hoge wanden en rond openingen, kan het aantal veranderen.",
      extras: "Schroeven, voegband en hoekprofielen zijn niet inbegrepen.",
    },
  },
};

export default nl;
