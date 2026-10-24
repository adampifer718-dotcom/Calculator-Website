import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoundingText } from "../text/en";

const nl: CalculatorTranslation<RoundingText> = {
  content: {
    title: "Afrondingscalculator",
    shortTitle: "Afronden",
    summary: "Rond een getal af op decimalen, op een geheel getal, op het dichtstbijzijnde 10-, 100- of 1.000-tal of op elke stap, met zes exacte afrondingsmethoden.",
    metaTitle: "Afrondingscalculator – decimalen, bankiersafronding en meer",
    metaDescription:
      "Rond elk getal exact af op decimalen, tientallen, honderdtallen of een stap zoals 0,05, met half naar boven, bankiersafronding, plafond, vloer of afkappen.",
    keywords: ["afronden", "afronden op decimalen", "afronden op het dichtstbijzijnde", "bankiersafronding", "half naar even", "naar boven afronden", "naar beneden afronden", "afronden op 0,05"],
    intro: [
      "Afronden vervangt een getal door een eenvoudiger getal dat er dichtbij ligt: 3,14159 wordt 3,14, een prijs van 19,97 wordt 19,95 in stappen van 5 cent, en 87.654 wordt 88.000 op het dichtstbijzijnde duizendtal. Deze calculator rondt af op een aantal decimalen, op een geheel getal, op het dichtstbijzijnde 10-, 100- of 1.000-tal, of op elke stap die je kiest.",
      "Hij rekent met de cijfers die je typt, niet met een binaire benadering, dus 1,005 wordt met half naar boven echt 1,01, een geval waarin veel spreadsheets en programmeertalen 1,00 geven. Zes methoden dekken schoolafronding, bankiersafronding en altijd naar boven, naar beneden of richting nul afronden. Wil je afronden op significante cijfers, gebruik dan de Significante-cijferscalculator.",
    ],
    howToUse: [
      "Typ het getal precies zoals je het hebt. Elk cijfer blijft behouden.",
      "Kies waarop je wilt afronden: decimalen, een geheel getal, 10, 100, 1.000 of een eigen stap zoals 0,05 of 0,25.",
      "Kies de afrondingsmethode. Half naar boven leer je op de meeste scholen; half naar even is gebruikelijk in financiën en statistiek.",
      "Lees het afgeronde getal af, hoeveel het van het origineel verschilt en de twee kandidaten waaruit het gekozen is.",
    ],
    formulas: [
      { title: "Afronden op een stap", expression: "k = x ÷ q\nafgerond = afronden(k) × q", explanation: "q is de stap: 0,01 voor 2 decimalen, 1 voor een geheel getal, 10, 100, 1.000 of je eigen waarde. De methode bepaalt hoe afronden() met k omgaat." },
      { title: "Regels bij een gelijke afstand", expression: "Half naar boven: 2,5 → 3, −2,5 → −3\nHalf naar even: 2,5 → 2, 3,5 → 4\nHalf naar beneden: 2,5 → 2, −2,5 → −2", explanation: "Deze verschillen alleen als het getal precies halverwege twee kandidaten ligt. Anders ronden alle drie af naar de dichtstbijzijnde." },
      { title: "Gericht afronden", expression: "Plafond: 2,1 → 3, −2,9 → −2\nVloer: 2,9 → 2, −2,1 → −3\nAfkappen: 2,9 → 2, −2,9 → −2", explanation: "Plafond gaat altijd richting +∞, vloer richting −∞, en afkappen laat de extra cijfers gewoon weg (richting nul)." },
      { title: "Exacte decimale rekenkunde", expression: "1,005 = 1005 × 10⁻³ exact", explanation: "Het getal en de stap worden met dezelfde macht van 10 tot gehele getallen geschaald en exact gedeeld, zodat geen binaire afrondingsfout een geval van gelijke afstand kan veranderen." },
    ],
    examples: [
      {
        title: "Rond 1,005 af op 2 decimalen, half naar boven",
        steps: ["De kandidaten zijn 1,00 en 1,01", "Het weggelaten deel, 0,005, is precies de helft van 0,01", "Half naar boven stuurt de gelijke afstand weg van nul: 1,01"],
      },
      {
        title: "Rond 7,325 af op 2 decimalen met bankiersafronding",
        steps: ["De kandidaten zijn 7,32 en 7,33", "7,325 ligt precies halverwege", "Half naar even kiest de kandidaat waarvan het laatste cijfer even is: 7,32"],
      },
      {
        title: "Rond 3,38 uur af op het dichtstbijzijnde kwartier",
        steps: ["3,38 ÷ 0,25 = 13,52", "13,52 wordt afgerond op 14", "14 × 0,25 = 3,50 uur"],
      },
    ],
    assumptions: [
      "Het getal wordt exact afgerond zoals het getypt is, met hoogstens 40 significante cijfers. Er wordt niets omgezet naar binaire drijvende-kommagetallen.",
      "Half naar boven en half naar beneden zijn symmetrisch rond nul: −2,5 half naar boven geeft −3. Plafond en vloer zijn niet symmetrisch.",
      "Als de afgeronde waarde nul is, wordt die zonder teken als 0 getoond.",
      "Resultaten worden getoond met evenveel decimalen als de afrondingsstap, dus 2,5 afgerond op 2 decimalen geeft 2,50.",
    ],
    faqs: [
      { question: "Wat is bankiersafronding?", answer: "Dat is de methode half naar even: een exacte gelijke afstand gaat naar de even buur, dus 2,5 wordt 2 en 3,5 wordt 4. Over veel waarden worden gelijke gevallen even vaak naar boven als naar beneden afgerond, wat een kleine opwaartse afwijking in totalen voorkomt." },
      { question: "Waarom rondt mijn spreadsheet 1,005 af op 1,00?", answer: "De meeste software slaat getallen binair op, waarin 1,005 eigenlijk 1,00499999999999989… is, net onder het midden. Deze calculator rekent met de decimale cijfers zelf, dus 1,005 ligt precies halverwege en half naar boven geeft 1,01." },
      { question: "Hoe rond ik een prijs af op 5 cent?", answer: "Kies “Dichtstbijzijnde eigen stap” en vul 0,05 in. Zo wordt 19,97 met half naar boven 19,95 en 19,98 wordt 20,00." },
    ],
    sourcesUsedFor: [
      "Definities van de afrondingsmethoden (half naar boven, half naar even, half naar beneden, plafond, vloer en afkappen) waarmee de resultaten zijn gecontroleerd.",
      "De regel half naar even voor exacte gelijke afstanden, zoals gebruikt in de meetpraktijk.",
    ],
  },
  text: {
    number: "Getal",
    numberHelp: "Typ het getal precies; elk cijfer blijft behouden, dus 1,005 blijft 1,005. Gebruik een komma als decimaalteken. E-notatie zoals 2,5e-3 is toegestaan.",
    invalid: "Vul een getal in zoals 1234,5678, -0,125 of 2,5e-3.",
    tooLong: "Vul hoogstens 40 significante cijfers in, met een exponent tussen -40 en 40.",
    target: "Afronden op",
    targets: {
      places: "Decimalen",
      whole: "Dichtstbijzijnde gehele getal",
      tens: "Dichtstbijzijnde tiental",
      hundreds: "Dichtstbijzijnde honderdtal",
      thousands: "Dichtstbijzijnde duizendtal",
      increment: "Dichtstbijzijnde eigen stap",
    },
    places: "Aantal decimalen",
    increment: "Stap",
    incrementHelp: "Rond af op een veelvoud van deze waarde, bijvoorbeeld 0,05 voor prijzen in stappen van 5 cent of 0,25 voor kwartieren.",
    incrementInvalid: "Vul een positieve stap in, zoals 0,05, 0,25 of 5.",
    method: "Afrondingsmethode",
    methods: {
      halfUp: "Half naar boven (gelijke afstand weg van nul)",
      halfEven: "Half naar even (bankiersafronding)",
      halfDown: "Half naar beneden (gelijke afstand richting nul)",
      ceiling: "Altijd naar boven (plafond)",
      floor: "Altijd naar beneden (vloer)",
      truncate: "Afkappen (richting nul)",
    },
    rounded: "Afgerond getal",
    caption: "{original} afgerond met {method}.",
    methodShort: {
      halfUp: "half naar boven",
      halfEven: "half naar even",
      halfDown: "half naar beneden",
      ceiling: "altijd naar boven (plafond)",
      floor: "altijd naar beneden (vloer)",
      truncate: "afkappen",
    },
    difference: "Verschil (afgerond − origineel)",
    lower: "Kandidaat eronder (vloer)",
    upper: "Kandidaat erboven (plafond)",
    exact: "Het getal past al precies bij deze afronding, dus de waarde verandert niet.",
    tie: "Het getal ligt precies halverwege de twee kandidaten, dus de regel van de methode voor een gelijke afstand beslist.",
    negativeNote: "Bij negatieve getallen gaat “altijd naar boven” richting +∞ (−2,5 wordt −2) en “altijd naar beneden” richting −∞ (−2,5 wordt −3).",
  },
};

export default nl;
