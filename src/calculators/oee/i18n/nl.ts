import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OeeText } from "../text/en";

const nl: CalculatorTranslation<OeeText> = {
  content: {
    title: "OEE-calculator",
    shortTitle: "OEE",
    summary: "Bereken de overall equipment effectiveness (OEE) uit geplande tijd, stilstand, ideale cyclustijd en aantallen, met beschikbaarheid, prestatie, kwaliteit en de tijd die aan elk verlies opgaat.",
    metaTitle: "OEE-calculator – beschikbaarheid × prestatie × kwaliteit",
    metaDescription:
      "Bereken de OEE uit geplande tijd, stilstand, ideale cyclustijd of snelheid en afgekeurde stuks, met beschikbaarheid, prestatie, kwaliteit en tijdverliezen.",
    keywords: ["oee berekenen", "overall equipment effectiveness", "oee formule", "beschikbaarheid prestatie kwaliteit", "ideale cyclustijd", "productie-efficiëntie", "machinebezetting", "productieverliezen"],
    intro: [
      "De overall equipment effectiveness (OEE) meet hoeveel van de geplande productietijd echt productief is: alleen goede stuks maken, zo snel mogelijk, zonder stilstand. Een score van 100% betekent perfecte productie; echte lijnen verliezen tijd aan storingen, trage cycli en afkeur.",
      "OEE verdeelt die verliezen over drie factoren. Beschikbaarheid telt de tijd dat de machine stilstond, prestatie telt het draaien onder de ideale snelheid, en kwaliteit telt stuks die niet in één keer goed waren. Deze calculator geeft alle drie, de OEE en de minuten die aan elk verlies verloren gingen.",
    ],
    howToUse: [
      "Vul de geplande productietijd in minuten in, zonder geplande pauzes en tijd waarin geen productie gepland is.",
      "Vul de totale stilstandtijd in die periode in, zoals storingen en omstellingen.",
      "Geef de ideale snelheid op als cyclustijd in seconden per stuk, of als snelheid in stuks per minuut.",
      "Vul het totaal aantal gemaakte stuks in en hoeveel daarvan zijn afgekeurd. De OEE en de tabel met tijdverliezen worden direct bijgewerkt.",
    ],
    formulas: [
      { title: "Beschikbaarheid", expression: "B = looptijd ÷ geplande productietijd, looptijd = gepland − stilstand", explanation: "Het deel van de geplande tijd dat de machine werkelijk draaide." },
      { title: "Prestatie", expression: "P = (ideale cyclustijd × totaal aantal) ÷ looptijd", explanation: "Hoe dicht de machine bij haar ideale snelheid draaide. Bij een ideale snelheid is de ideale cyclustijd 60 ÷ snelheid seconden." },
      { title: "Kwaliteit", expression: "K = aantal goed ÷ totaal aantal, goed = totaal − afkeur", explanation: "Het deel van de stuks dat in één keer goed was." },
      { title: "OEE", expression: "OEE = B × P × K = (aantal goed × ideale cyclustijd) ÷ geplande productietijd", explanation: "De volledig productieve tijd (goede stuks gemaakt op ideale snelheid) als deel van de geplande tijd." },
    ],
    examples: [
      {
        title: "Een dienst van 450 minuten met 54 minuten stilstand",
        steps: [
          "Looptijd = 450 − 54 = 396 min, dus beschikbaarheid = 396 ÷ 450 = 88%",
          "Prestatie = 1,5 s × 13.200 ÷ (396 × 60 s) = 19.800 ÷ 23.760 = 83,33%",
          "Kwaliteit = (13.200 − 330) ÷ 13.200 = 97,5%",
          "OEE = 0,88 × 0,8333 × 0,975 = 71,5%",
        ],
      },
      {
        title: "Ideale snelheid van 25 stuks per minuut",
        steps: [
          "Ideale cyclustijd = 60 ÷ 25 = 2,4 s",
          "Beschikbaarheid = 384 ÷ 420 = 91,43%; prestatie = 2,4 × 8.800 ÷ (384 × 60) = 91,67%",
          "Kwaliteit = 8.624 ÷ 8.800 = 98%",
          "OEE = 0,9143 × 0,9167 × 0,98 ≈ 82,13%",
        ],
      },
      {
        title: "Twee diensten van 8 uur op een tragere machine",
        steps: [
          "Beschikbaarheid = 840 ÷ 960 = 87,5%",
          "Prestatie = 12 × 3.900 ÷ (840 × 60) = 46.800 ÷ 50.400 = 92,86%",
          "Kwaliteit = 3.815 ÷ 3.900 = 97,82%",
          "OEE = aantal goed × ideale cyclustijd ÷ geplande tijd = 3.815 × 12 ÷ 57.600 ≈ 79,48%",
        ],
      },
    ],
    assumptions: [
      "De geplande productietijd is exclusief geplande pauzes en periodes zonder geplande productie; hoe je omstellingen en onderhoud behandelt, verandert het resultaat, dus houd de definities gelijk als je vergelijkt.",
      "De ideale cyclustijd is de snelste tijd waarin de machine onder ideale omstandigheden één stuk kan maken. Is die te langzaam ingesteld, dan kan de prestatie boven 100% uitkomen, wat wijst op een verkeerde ideale waarde en niet op een uitstekende lijn.",
      "Afkeur omvat elk stuk dat niet in één keer goed was, ook stuks die zijn nabewerkt. Het vaak genoemde „wereldklasse”-cijfer van 85% is alleen een ruwe referentie.",
    ],
    faqs: [
      { question: "Wat is een goede OEE-score?", answer: "Een OEE van 85% wordt vaak genoemd als wereldklasse voor discrete productie, en veel fabrieken zitten daar ruim onder. Omdat de score afhangt van hoe stilstand en de ideale snelheid zijn gedefinieerd, is de trend op één lijn nuttiger dan het vergelijken van verschillende fabrieken." },
      { question: "Waarom tellen de tijdverliezen op tot de geplande tijd?", answer: "De geplande productietijd wordt verdeeld over stilstand (beschikbaarheidsverlies), draaien onder de ideale snelheid (prestatieverlies), het maken van afkeur (kwaliteitsverlies) en de volledig productieve tijd die overblijft. OEE is de volledig productieve tijd gedeeld door de geplande tijd." },
      { question: "Moet ik de ideale cyclustijd of de ideale snelheid invullen?", answer: "Allebei kan; het is hetzelfde op twee manieren geschreven. Een ideale snelheid van 40 stuks per minuut is gelijk aan een ideale cyclustijd van 60 ÷ 40 = 1,5 seconde per stuk." },
    ],
    sourcesUsedFor: [
      "De OEE-formule als beschikbaarheid × prestatie × kwaliteit, met beschikbaarheid = looptijd ÷ geplande productietijd, prestatie = ideale cyclustijd × totaal aantal ÷ looptijd en kwaliteit = aantal goed ÷ totaal aantal, en de vaak genoemde referentie van 85%.",
      "De drie OEE-factoren en de verliezen die elk ervan meet.",
    ],
  },
  text: {
    planned: "Geplande productietijd",
    plannedHelp: "De tijd dat de machine gepland stond om te draaien, na aftrek van geplande pauzes en periodes zonder geplande productie.",
    stopTime: "Stilstandtijd (ongeplande en geplande stops)",
    stopTimeHelp: "Tijd binnen de geplande productietijd waarin de machine niet draaide, bijvoorbeeld storingen, omstellingen en wachten op materiaal.",
    speedMode: "Ideale snelheid opgegeven als",
    speedModes: { cycle: "Ideale cyclustijd (seconden per stuk)", rate: "Ideale snelheid (stuks per minuut)" },
    idealCycle: "Ideale cyclustijd",
    idealCycleHelp: "De snelste tijd waarin de machine onder ideale omstandigheden één stuk kan maken.",
    idealRate: "Ideale snelheid",
    idealRateHelp: "Het hoogste aantal stuks per minuut dat de machine onder ideale omstandigheden kan maken.",
    perPiece: "s per stuk",
    perMinute: "stuks/min",
    totalCount: "Totaal aantal (alle gemaakte stuks)",
    rejects: "Aantal afgekeurd",
    rejectsHelp: "Stuks die zijn afgekeurd of moeten worden nabewerkt. Ze zijn niet in één keer goed.",
    minutes: "min",
    pieces: "stuks",
    errors: {
      stopTooLong: "De stilstandtijd moet korter zijn dan de geplande productietijd.",
      rejectsTooMany: "Het aantal afgekeurde stuks kan niet groter zijn dan het totaal aantal.",
    },
    oee: "Overall equipment effectiveness (OEE)",
    caption: "Beschikbaarheid {a} × prestatie {p} × kwaliteit {q}.",
    availability: "Beschikbaarheid",
    performance: "Prestatie",
    quality: "Kwaliteit",
    goodCount: "Aantal goed",
    runTime: "Looptijd",
    productiveTime: "Volledig productieve tijd",
    idealCycleUsed: "Gebruikte ideale cyclustijd",
    table: {
      caption: "Waar de geplande productietijd naartoe gaat",
      item: "Tijd",
      minutes: "Minuten",
      share: "Aandeel van de geplande tijd",
      planned: "Geplande productietijd",
      availabilityLoss: "Beschikbaarheidsverlies (stilstand)",
      performanceLoss: "Prestatieverlies (trage cycli en korte stops)",
      qualityLoss: "Kwaliteitsverlies (tijd besteed aan afkeur)",
      productive: "Volledig productieve tijd",
    },
    notes: {
      overPerformance: "De prestatie ligt boven 100%, wat fysiek niet mogelijk is. De ideale cyclustijd is waarschijnlijk te langzaam ingesteld (of de ideale snelheid te laag), of het aantal bevat stuks die buiten de looptijd zijn gemaakt.",
      benchmark: "Een OEE van 85% wordt vaak „wereldklasse” genoemd voor discrete productie. Zie het alleen als ruwe referentie; een redelijk doel hangt af van het proces en van hoe de verliezen zijn gedefinieerd.",
    },
  },
};

export default nl;
