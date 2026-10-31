import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SolarPanelOutputText } from "../text/en";

const nl: CalculatorTranslation<SolarPanelOutputText> = {
  content: {
    title: "Opbrengstcalculator voor zonnepanelen",
    shortTitle: "Opbrengst zonnepanelen",
    summary: "Schat hoeveel kilowattuur een set zonnepanelen per dag, maand en jaar oplevert, en hoe groot een installatie moet zijn om je stroomverbruik te dekken.",
    metaTitle: "Opbrengstcalculator zonnepanelen – kWh per dag en jaar",
    metaDescription:
      "Schat de opbrengst van zonnepanelen in kWh per dag, maand en jaar uit het paneelvermogen, de piekzonuren en de systeemverliezen, en bepaal de juiste systeemgrootte.",
    keywords: ["zonnepanelen calculator", "opbrengst zonnepanelen", "kwh per jaar", "piekzonuren", "hoeveel zonnepanelen", "systeemverliezen", "zonne-energie"],
    intro: [
      "Het vermogen van een zonnepaneel geeft aan hoeveel stroom het levert onder standaardtestomstandigheden: vol zonlicht van 1.000 watt per vierkante meter bij een celtemperatuur van 25 °C. De werkelijke opbrengst hangt af van hoeveel zonlicht de panelen over een dag echt bereikt, meestal samengevat als piekzonuren, en van verliezen in de rest van het systeem.",
      "Vul het paneelvermogen in, het aantal panelen, je piekzonuren en de systeemverliezen om de opgewekte energie per dag, maand en jaar te schatten. Voeg je jaarlijkse stroomverbruik toe om te zien welk deel de installatie dekt en hoeveel panelen alles zouden dekken.",
    ],
    howToUse: [
      "Vul het vermogen van één paneel in watt in, zoals op het label of het datasheet staat, en het aantal panelen.",
      "Vul de piekzonuren voor jouw locatie in. De standaardwaarde van 4,5 is alleen een voorbeeld; zoek een waarde op voor je locatie of gebruik een tool voor zoninstraling.",
      "Houd de standaard 14% systeemverlies aan, of vul je eigen schatting in voor verliezen door omvormer, bekabeling, warmte, vuil en schaduw.",
      "Vul eventueel je jaarverbruik in kWh van je energierekening in om het gedekte deel en de benodigde systeemgrootte te zien.",
    ],
    formulas: [
      { title: "Dagelijkse energie", expression: "E(dag) = vermogen (W) × panelen ÷ 1.000 × piekzonuren × (1 − verliezen ÷ 100)", explanation: "Vermogen × panelen ÷ 1.000 is de systeemgrootte in kW. Vermenigvuldigen met de piekzonuren geeft kWh bij vol nominaal vermogen, en de verliesfactor verlaagt dat tot wat je huis bereikt." },
      { title: "Jaarlijkse en maandelijkse energie", expression: "E(jaar) = E(dag) × 365;  E(maand) = E(jaar) ÷ 12", explanation: "Het maandcijfer is een gemiddelde. De werkelijke opbrengst is in de zomer hoger en in de winter lager." },
      { title: "Systeemgrootte voor je verbruik", expression: "grootte (kW) = jaarverbruik ÷ (365 × piekzonuren × (1 − verliezen ÷ 100))", explanation: "Het aantal benodigde panelen is deze grootte × 1.000 ÷ paneelvermogen, naar boven afgerond op een heel paneel." },
    ],
    examples: [
      {
        title: "Tien panelen van 400 W met 4,5 piekzonuren",
        steps: ["Systeemgrootte = 400 × 10 ÷ 1.000 = 4 kW", "Dagelijkse energie = 4 × 4,5 × (1 − 0,14) = 15,48 kWh", "Jaarlijkse energie = 15,48 × 365 = 5.650,2 kWh"],
      },
      {
        title: "Zestien panelen van 350 W, 5,2 zonuren, 11.000 kWh verbruik per jaar",
        steps: [
          "Systeemgrootte = 350 × 16 ÷ 1.000 = 5,6 kW",
          "Dagelijkse energie = 5,6 × 5,2 × 0,86 = 25,0432 kWh, dus 25,0432 × 365 ≈ 9.140,77 kWh per jaar",
          "Gedekt deel = 9.140,77 ÷ 11.000 ≈ 83,1%",
          "Benodigde grootte = 11.000 ÷ (365 × 5,2 × 0,86) ≈ 6,74 kW, oftewel 6.739 ÷ 350 ≈ 19,25, naar boven afgerond 20 panelen",
        ],
      },
      {
        title: "Zes panelen van 450 W op een bewolktere plek met 10% verlies",
        steps: ["Systeemgrootte = 450 × 6 ÷ 1.000 = 2,7 kW", "Dagelijkse energie = 2,7 × 3,2 × 0,90 = 7,776 kWh", "Jaarlijkse energie = 7,776 × 365 = 2.838,24 kWh"],
      },
    ],
    assumptions: [
      "Piekzonuren hangen af van je locatie, de hellingshoek en oriëntatie van de panelen, schaduw en het seizoen. Het getal dat je invult, wordt als jaargemiddelde gebruikt. Gebruik voor een echte schatting een lokale tool voor zoninstraling, zoals PVWatts van NREL.",
      "De standaardwaarde van 14% verlies is een veelgebruikte waarde voor verliezen zoals omvormer, bekabeling, vervuiling, mismatch en beschikbaarheid. Jouw systeem kan meer of minder verliezen.",
      "De opbrengst van panelen daalt ook bij hoge celtemperaturen en langzaam met de leeftijd. Deze effecten tellen alleen mee voor zover ze in het verliespercentage zitten dat je invult.",
      "Het gedekte deel van het verbruik vergelijkt alleen jaartotalen. Het houdt geen rekening met wanneer de energie wordt opgewekt en wanneer die wordt gebruikt, of met thuisbatterijen en regels voor teruglevering aan het net.",
    ],
    faqs: [
      { question: "Wat zijn piekzonuren?", answer: "Ze drukken de zonne-energie van een dag uit als het aantal uren vol zonlicht van 1.000 W/m² dat dezelfde energie zou leveren. Een plek die op een dag 5 kWh per vierkante meter ontvangt, heeft 5 piekzonuren, ook al staat de zon veel langer aan de hemel." },
      { question: "Waarom is de opbrengst lager dan vermogen × uren?", answer: "Paneelvermogens worden onder ideale laboratoriumomstandigheden gemeten. In de praktijk gaat energie verloren in de omvormer en de bekabeling, door warmte, stof en schaduw, en door kleine verschillen tussen panelen. Het verliespercentage vat deze samen." },
      { question: "Hoeveel panelen heb ik nodig?", answer: "Vul je jaarlijkse stroomverbruik in. De calculator deelt dat door de energie die één kW aan panelen per jaar opwekt bij jouw zonuren en verliezen, en rekent die grootte om naar hele panelen van het vermogen dat je hebt ingevuld." },
    ],
    sourcesUsedFor: ["Het PVWatts-model en de standaardwaarde van 14% voor de totale systeemverliezen."],
  },
  text: {
    panelWatts: "Paneelvermogen",
    panelWattsHelp: "Het vermogen van één paneel onder standaardtestomstandigheden (STC), zoals op het label of het datasheet staat.",
    panels: "Aantal panelen",
    sunHours: "Piekzonuren per dag",
    sunHoursHelp: "De dagelijkse zonne-energie op jouw locatie, uitgedrukt in uren volle zon (1 kW/m²). 4,5 is alleen een voorbeeld; de juiste waarde hangt af van je locatie, de hellingshoek en oriëntatie van de panelen en het seizoen.",
    losses: "Systeemverliezen",
    lossesHelp: "Verliezen door de omvormer, bekabeling, warmte, vuil, schaduw en mismatch. 14% is een veelgebruikte standaardwaarde.",
    annualUsage: "Jaarlijks stroomverbruik (optioneel)",
    annualUsageHelp: "Je jaarverbruik volgens je energierekeningen, om te zien hoeveel daarvan de installatie dekt en welke grootte alles zou dekken.",
    errors: {
      losses: "De systeemverliezen moeten kleiner zijn dan 100%.",
    },
    annual: "Geschatte energie per jaar",
    caption: "Systeem van {size} × {hours} piekzonuren × {factor} na {losses} verlies.",
    daily: "Energie per dag",
    monthly: "Gemiddelde energie per maand",
    systemSize: "Systeemgrootte (DC)",
    specificYield: "Energie per geïnstalleerde kW per jaar",
    coverage: "Gedekt deel van je jaarverbruik",
    sizeNeeded: "Systeemgrootte om al je verbruik te dekken",
    panelsNeeded: "Panelen nodig om al je verbruik te dekken",
    panelsMore: "Extra panelen nodig",
    notes: {
      estimate: "Dit is een eenvoudige schatting. Een lokale tool voor zoninstraling zoals PVWatts van NREL gebruikt weergegevens per uur voor jouw locatie en geeft een beter cijfer.",
      covered: "De ingevulde installatie wekt in een jaar minstens zoveel energie op als je verbruikt. Opwek en verbruik vallen zelden uur voor uur samen, dus je kunt nog steeds stroom van het net afnemen.",
      panelsRounded: "Het aantal panelen is naar boven afgerond op hele panelen van {watts}.",
    },
  },
};

export default nl;
