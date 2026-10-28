import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PasswordEntropyText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const nl: CalculatorTranslation<PasswordEntropyText> = {
  content: {
    title: "Wachtwoordentropiecalculator",
    shortTitle: "Wachtwoordentropie",
    summary:
      "Schat de entropie in bits van een willekeurig gegenereerd wachtwoord of wachtwoordzin en hoe lang een aanvaller nodig zou hebben om het te raden.",
    metaTitle: "Wachtwoordentropiecalculator – bits en tijd om te raden",
    metaDescription:
      "Bereken de entropie in bits van een willekeurig wachtwoord of Diceware-wachtwoordzin uit de lengte en de tekenset, en de gemiddelde tijd om het te raden.",
    keywords: ["wachtwoordentropie", "wachtwoordsterkte berekenen", "entropie wachtwoordzin", "diceware", "bits entropie", "brute force tijd", "wachtwoordlengte", "tekenset"],
    intro: [
      "Entropie meet hoe onvoorspelbaar een geheim is. Een wachtwoord dat willekeurig wordt gekozen uit een verzameling van N mogelijke tekens krijgt log₂(N) bits per teken, en elke extra bit verdubbelt het aantal pogingen dat een aanvaller mogelijk nodig heeft.",
      "Deze calculator werkt alleen met de opbouw van een wachtwoord: de lengte en de soorten tekens, of het aantal woorden en de grootte van de woordenlijst. Hij vraagt nooit om een echt wachtwoord, ontvangt of analyseert er geen, dus typ het jouwe nergens op deze pagina.",
    ],
    howToUse: [
      "Kies een wachtwoord van willekeurige tekens of een wachtwoordzin van willekeurige woorden.",
      "Vul voor tekens de lengte in en kies de tekensets, of vul een eigen aantal mogelijke tekens in.",
      "Vul voor een wachtwoordzin het aantal woorden en de grootte van de woordenlijst in (7.776 voor een Diceware-lijst).",
      "Pas eventueel het aantal pogingen per seconde van de aanvaller aan, en lees dan de entropie, het aantal combinaties en de raadtijden af.",
    ],
    formulas: [
      {
        title: "Entropie van een willekeurig wachtwoord",
        expression: "H = L × log₂(N)",
        explanation: "L is het aantal tekens en N het aantal mogelijke tekens, bijvoorbeeld 26 + 26 + 10 + 32 = 94 voor alle vier de sets.",
      },
      {
        title: "Entropie van een wachtwoordzin",
        expression: "H = W × log₂(K)",
        explanation: "W is het aantal woorden en K de grootte van de woordenlijst. Elk Diceware-woord voegt log₂(7.776) ≈ 12,92 bits toe.",
      },
      {
        title: "Gemiddelde tijd om te raden",
        expression: "t = 2ᴴ ÷ 2 ÷ g",
        explanation: "2ᴴ is het aantal combinaties en g het aantal pogingen per seconde. Gemiddeld moet de helft ervan worden geprobeerd.",
      },
    ],
    examples: [
      {
        title: "16 willekeurige tekens uit alle vier de sets",
        steps: [
          "Aantal mogelijke tekens = 26 + 26 + 10 + 32 = 94",
          "Entropie = 16 × log₂(94) ≈ 16 × 6,5546 ≈ 104,87 bits",
          "Gemiddelde tijd bij 10¹⁰ pogingen per seconde ≈ 94¹⁶ ÷ 2 ÷ 10¹⁰ s ≈ 5,89 × 10¹³ jaar",
        ],
      },
      {
        title: "Diceware-wachtwoordzin van zes woorden",
        steps: [
          "Entropie = 6 × log₂(7.776) ≈ 6 × 12,925 ≈ 77,55 bits",
          "Combinaties = 7.776⁶ ≈ 2,21 × 10²³",
          "Gemiddelde tijd ≈ 350.270 jaar bij 10¹⁰ pogingen per seconde",
        ],
      },
      {
        title: "8 willekeurige kleine letters",
        steps: ["Entropie = 8 × log₂(26) ≈ 37,60 bits", "Combinaties = 26⁸ = 208.827.064.576", "Gemiddelde tijd ≈ 208.827.064.576 ÷ 2 ÷ 10¹⁰ ≈ 10 seconden"],
      },
    ],
    assumptions: [
      "Elk teken of woord wordt onafhankelijk en gelijkmatig willekeurig gekozen, zoals een wachtwoordmanager of dobbelstenen dat doen. Wachtwoorden die mensen zelf kiezen, zijn veel voorspelbaarder dan deze getallen doen vermoeden.",
      "Het aantal pogingen per seconde is een aanname die je kunt aanpassen. Echte snelheden lopen van een paar pogingen per seconde tegen een online inlog met beperkingen tot vele miljarden per seconde tegen gestolen, zwak gehashte wachtwoorden.",
      "Entropie dekt geen andere risico's, zoals phishing, hetzelfde wachtwoord op meerdere sites gebruiken of een wachtwoord dat al is uitgelekt.",
      "Dit is een schatting ter vergelijking, geen beveiligingsadvies of garantie, en is niet professioneel gecontroleerd.",
    ],
    faqs: [
      {
        question: "Hoeveel bits entropie is genoeg?",
        answer:
          "Er is geen vaste grens, want het hangt ervan af hoe het wachtwoord wordt opgeslagen en wie het zou kunnen aanvallen. Als ruwe richtlijn: elke bit verdubbelt het werk, dus een willekeurig wachtwoord van 16 of meer tekens, of een wachtwoordzin van zes of meer Diceware-woorden, ligt bij de standaardsnelheid ver buiten het bereik van praktische brute force.",
      },
      {
        question: "Waarom kan ik op deze pagina mijn eigen wachtwoord niet controleren?",
        answer:
          "Entropie beschrijft hoe een wachtwoord is gegenereerd, niet welke tekens er uiteindelijk in staan. Een wachtwoord als Summer2025! ziet er gevarieerd uit, maar is makkelijk te raden omdat mensen het kiezen. Een echt wachtwoord op een website typen is bovendien een risico, dus deze pagina vraagt er nooit om.",
      },
      {
        question: "Is een lange wachtwoordzin beter dan een kort, complex wachtwoord?",
        answer:
          "Vaak wel. Zes willekeurige woorden uit een lijst van 7.776 woorden geven ongeveer 77,5 bits, meer dan 12 willekeurige tekens uit letters en cijfers (ongeveer 71,5 bits), en ze zijn makkelijker te onthouden en te typen. Het belangrijkste is dat de woorden willekeurig worden gekozen en niet als zin worden bedacht.",
      },
    ],
    sourcesUsedFor: [
      "De huidige Amerikaanse richtlijnen voor wachtwoorden, die lengte en controle op bekende gelekte wachtwoorden verkiezen boven samenstellingsregels.",
      "De lijstgrootte van 7.776 woorden (6⁵, vijf worpen met een dobbelsteen per woord), gebruikt als standaard voor wachtwoordzinnen.",
    ],
  },
  text: {
    mode: "Soort wachtwoord",
    modes: { random: "Willekeurige tekens", passphrase: "Willekeurige woorden (wachtwoordzin)" },
    length: "Lengte (tekens)",
    poolMode: "Tekenverzameling",
    poolModes: { sets: "Tekensets kiezen", custom: "Eigen aantal tekens" },
    lower: "Kleine letters a–z (26)",
    upper: "Hoofdletters A–Z (26)",
    digits: "Cijfers 0–9 (10)",
    symbols: "Symbolen",
    yesNo: { yes: "Meenemen", no: "Weglaten" },
    symbolCount: "Aantal mogelijke symbolen",
    symbolCountHelp:
      "32 omvat elk afdrukbaar ASCII-symbool op een Amerikaans toetsenbord, zoals ! ? # en @. Gebruik een kleiner getal als maar een deel van de symbolen is toegestaan.",
    customPool: "Aantal mogelijke tekens",
    customPoolHelp: "Hoeveel verschillende tekens elke positie kan hebben.",
    words: "Aantal woorden",
    wordList: "Grootte van de woordenlijst",
    wordListHelp: "7.776 is de grootte van een Diceware-woordenlijst, gemaakt voor vijf worpen met een zeszijdige dobbelsteen per woord.",
    guessRate: "Pogingen per seconde van de aanvaller",
    guessRateHelp:
      "Een aanname over de aanvaller. 10¹⁰ (10 miljard) per seconde is een snelle offline aanval op een zwak gehasht wachtwoord; online aanvallen zijn veel trager.",
    errors: {
      noSets: "Neem ten minste één tekenset mee.",
    },
    entropy: "Entropie",
    bits: "bits",
    captionRandom: "{length} willekeurig gekozen uit {pool} mogelijke tekens.",
    captionPassphrase: "{words} willekeurig gekozen uit een lijst van {list} woorden.",
    lengthCount: forms("{n} teken", "{n} tekens"),
    wordCount: forms("{n} woord", "{n} woorden"),
    combinations: "Mogelijke combinaties",
    poolSize: "Aantal mogelijke tekens per positie",
    bitsPerItem: "Entropie per teken of woord",
    averageTime: "Gemiddelde tijd om te raden",
    worstTime: "Tijd om elke combinatie te proberen",
    duration: {
      lessThanSecond: "Minder dan 1 seconde",
      seconds: forms("{n} seconde", "{n} seconden"),
      minutes: forms("{n} minuut", "{n} minuten"),
      hours: forms("{n} uur", "{n} uur"),
      days: forms("{n} dag", "{n} dagen"),
      years: forms("{n} jaar", "{n} jaar"),
    },
    notes: {
      random:
        "Deze cijfers gelden alleen als elk teken of woord echt willekeurig wordt gekozen, bijvoorbeeld door een wachtwoordmanager of met dobbelstenen. Wachtwoorden die mensen bedenken, namen, datums en gangbare vervangingen hebben veel minder entropie.",
      average: "Gemiddeld vindt een aanvaller het wachtwoord na de helft van de combinaties te hebben geprobeerd.",
      notCollected: "Deze pagina vraagt nooit om je wachtwoord. Ze werkt alleen met de lengte en de soorten tekens of woorden.",
      zero: "Met maar één mogelijke keuze per positie is er geen onzekerheid, dus de entropie is 0 bits.",
    },
  },
};

export default nl;
