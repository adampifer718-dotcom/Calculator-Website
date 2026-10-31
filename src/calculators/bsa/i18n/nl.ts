import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BsaText } from "../text/en";

const nl: CalculatorTranslation<BsaText> = {
  content: {
    title: "Lichaamsoppervlakcalculator",
    shortTitle: "Lichaamsoppervlak",
    summary: "Schat het lichaamsoppervlak in m² uit lengte en gewicht met de formule van Mosteller, vergeleken met de formules van Du Bois, Haycock en Gehan-George.",
    metaTitle: "Lichaamsoppervlakcalculator – Mosteller en Du Bois",
    metaDescription:
      "Schat het lichaamsoppervlak (BSA) in m² en ft² uit lengte en gewicht met de formule van Mosteller, naast die van Du Bois, Haycock en Gehan-George.",
    keywords: ["lichaamsoppervlak", "bsa berekenen", "formule van mosteller", "formule van du bois", "haycock", "gehan-george", "lichaamsoppervlakte m2"],
    intro: [
      "Het lichaamsoppervlak (BSA) is de totale oppervlakte van de huid, uitgedrukt in vierkante meter. Het wordt in de geneeskunde gebruikt om sommige metingen, zoals de cardiale index of de nierfiltratie, aan de lichaamsgrootte aan te passen. Het rechtstreeks meten is onpraktisch, dus wordt het geschat uit lengte en gewicht.",
      "Deze calculator gebruikt de formule van Mosteller als hoofdresultaat, omdat die eenvoudig is en veel wordt gebruikt. De formules van Du Bois, Haycock en Gehan-George staan ernaast, zodat je kunt zien hoeveel de schattingen verschillen.",
    ],
    howToUse: [
      "Vul het gewicht in en kies kilogram of pond.",
      "Vul de lengte in en kies centimeter of inch.",
      "Lees de schatting volgens Mosteller af in m² en ft², en vergelijk de vier formules in de tabel.",
    ],
    formulas: [
      { title: "Mosteller", expression: "BSA = √(lengte × gewicht ÷ 3600)", explanation: "Lengte in cm, gewicht in kg, resultaat in m²." },
      { title: "Du Bois en Du Bois", expression: "BSA = 0,007184 × gewicht^0,425 × lengte^0,725", explanation: "De oudste van de vier, in 1916 afgeleid uit een kleine groep mensen." },
      { title: "Haycock", expression: "BSA = 0,024265 × gewicht^0,5378 × lengte^0,3964", explanation: "Afgeleid uit metingen bij zuigelingen tot volwassenen." },
      { title: "Gehan en George", expression: "BSA = 0,0235 × gewicht^0,51456 × lengte^0,42246", explanation: "Afgeleid uit een grotere groep van 401 mensen." },
      { title: "Vierkante voet", expression: "ft² = m² ÷ 0,09290304", explanation: "1 ft = precies 0,3048 m, dus 1 ft² = 0,09290304 m²." },
    ],
    examples: [
      {
        title: "70 kg, 175 cm",
        steps: ["Mosteller: √(175 × 70 ÷ 3600) = √3,4028 ≈ 1,84 m²", "Du Bois ≈ 1,848 m², Haycock ≈ 1,847 m², Gehan-George ≈ 1,854 m²", "1,8447 m² ÷ 0,09290304 ≈ 19,86 ft²"],
      },
      {
        title: "82 kg, 168 cm",
        steps: ["Mosteller: √(168 × 82 ÷ 3600) = √3,8267 ≈ 1,96 m²", "Du Bois geeft ongeveer 1,919 m², de laagste van de vier", "Haycock geeft ongeveer 1,979 m², de hoogste"],
      },
      {
        title: "165 lb, 64 in",
        steps: ["165 lb × 0,45359237 = 74,84 kg; 64 in × 2,54 = 162,56 cm", "Mosteller: √(162,56 × 74,84 ÷ 3600) ≈ 1,84 m²", "Du Bois ≈ 1,802 m², Haycock ≈ 1,859 m²"],
      },
    ],
    assumptions: [
      "Het resultaat is een schatting, geen medisch advies, en deze calculator is nog niet professioneel beoordeeld. Gebruik hem nooit om een geneesmiddeldosis te berekenen zonder bevestiging door een bevoegde zorgverlener.",
      "Alle vier de formules zijn statistische benaderingen op basis van groepen mensen die decennia geleden zijn gemeten. Ze kunnen onderling en ten opzichte van iemands werkelijke lichaamsoppervlak enkele procenten verschillen, vooral bij zeer kleine, zeer lange of zeer zware mensen.",
      "Gewichten van 0,5 tot 500 kg en lengtes van 30 tot 260 cm worden geaccepteerd. Ziekenhuizen kunnen voor kinderen of mensen met obesitas een andere formule of een aangepast gewicht gebruiken.",
      "Pond wordt omgerekend met 1 lb = 0,45359237 kg en inch met 1 in = 2,54 cm, beide exact.",
    ],
    faqs: [
      { question: "Wat is een gangbaar lichaamsoppervlak?", answer: "Bij volwassenen ligt het meestal tussen ongeveer 1,6 en 2,2 m², afhankelijk van lengte en gewicht. Bij kinderen zijn de waarden veel kleiner, en bij die maten verschillen de formules meer." },
      { question: "Welke formule moet ik gebruiken?", answer: "Mosteller is de gangbaarste, omdat hij makkelijk te berekenen is en voor de meeste volwassenen goed overeenkomt met de andere. Klinieken en protocollen schrijven vaak een formule voor, dus gebruik de formule die je behandelteam gebruikt." },
      { question: "Waarom geven de formules verschillende uitkomsten?", answer: "Elke formule is afgeleid uit een andere groep mensen, met een andere methode om het huidoppervlak te meten. De verschillen zijn meestal klein bij gemiddelde volwassenen en groter bij mensen buiten het bereik waarop ze zijn gebaseerd." },
    ],
    sourcesUsedFor: [
      "De formule van Mosteller BSA = √(lengte in cm × gewicht in kg ÷ 3600).",
      "De constanten van Du Bois 0,007184 × gewicht^0,425 × lengte^0,725.",
      "De formule van Haycock 0,024265 × gewicht^0,5378 × lengte^0,3964.",
      "De formule van Gehan-George 0,0235 × gewicht^0,51456 × lengte^0,42246.",
    ],
  },
  text: {
    weight: "Gewicht",
    weightUnit: "Eenheid van gewicht",
    weightUnits: { kg: "Kilogram (kg)", lb: "Pond (lb)" },
    height: "Lengte",
    heightUnit: "Eenheid van lengte",
    heightUnits: { cm: "Centimeter (cm)", in: "Inch (in)" },
    errors: {
      weightRange: "Vul een gewicht in tussen {min} en {max}.",
      heightRange: "Vul een lengte in tussen {min} en {max}.",
    },
    bsa: "Lichaamsoppervlak (Mosteller)",
    caption: "√({height} cm × {weight} kg ÷ 3600).",
    bsaFt: "Lichaamsoppervlak (Mosteller) in vierkante voet",
    spread: "Spreiding tussen de vier formules",
    table: {
      caption: "Lichaamsoppervlak per formule",
      formula: "Formule",
      m2: "m²",
      ft2: "ft²",
    },
    formulas: { mosteller: "Mosteller (1987)", duBois: "Du Bois en Du Bois (1916)", haycock: "Haycock e.a. (1978)", gehanGeorge: "Gehan en George (1970)" },
    notes: {
      estimate: "Elke formule is een schatting die is afgeleid uit een beperkte groep mensen; ze kunnen onderling en ten opzichte van een gemeten lichaamsoppervlak enkele procenten verschillen, het meest bij extreme lichaamsmaten.",
      dosing: "Gebruik dit resultaat niet om een geneesmiddeldosis te berekenen. Doses op basis van het lichaamsoppervlak moeten door een bevoegde zorgverlener worden berekend en gecontroleerd.",
    },
  },
};

export default nl;
