import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BatteryLifeText } from "../text/en";

const nl: CalculatorTranslation<BatteryLifeText> = {
  content: {
    title: "Batterijduurcalculator",
    shortTitle: "Batterijduur",
    summary: "Schat hoe lang een batterij een apparaat van stroom voorziet uit de capaciteit in mAh, Ah of Wh en de belasting in mA, A of W.",
    metaTitle: "Batterijduurcalculator – gebruiksduur uit mAh, Ah of Wh",
    metaDescription:
      "Schat de gebruiksduur van een batterij uit de capaciteit (mAh, Ah of Wh) en de belasting (mA, A of W), met bruikbare ontladingsdiepte, uren, dagen en energie.",
    keywords: ["batterijduur berekenen", "gebruiksduur batterij", "mAh naar uren", "batterijcapaciteit", "wattuur", "ampère-uur", "ontladingsdiepte", "hoe lang gaat een accu mee"],
    intro: [
      "De capaciteit van een batterij vertelt je hoeveel lading (in milliampère-uur of ampère-uur) of energie (in wattuur) ze opslaat. Als je het deel van die capaciteit dat je echt kunt gebruiken deelt door wat het apparaat verbruikt, krijg je een eerste schatting van hoe lang het werkt.",
      "Deze calculator accepteert de capaciteit in mAh, Ah of Wh en de belasting in mA, A of W. Als het ene een lading is en het andere een vermogen, gebruikt hij de batterijspanning om om te rekenen. Gebruik hem om een batterij te kiezen voor een sensor, een kampeerlamp, een powerbank of een noodvoeding.",
    ],
    howToUse: [
      "Vul de batterijcapaciteit in en kies mAh, Ah of Wh.",
      "Vul de nominale batterijspanning in. Die is nodig als de ene waarde in mAh of Ah staat en de andere in W of Wh, en ermee kan de calculator de energie tonen.",
      "Vul de gemiddelde belasting van het apparaat in mA, A of W in.",
      "Stel de bruikbare capaciteit in (standaard 80%) en lees de gebruiksduur af in uren en minuten, in decimale uren en in dagen.",
    ],
    formulas: [
      {
        title: "Gebruiksduur uit lading",
        expression: "t (h) = capaciteit (mAh) ÷ belasting (mA) × bruikbaar deel",
        explanation: "Met ampère-uur en ampère werkt het op dezelfde manier. Het bruikbare deel is de ontladingsdiepte, bijvoorbeeld 0,8.",
      },
      {
        title: "Gebruiksduur uit energie",
        expression: "t (h) = energie (Wh) ÷ belasting (W) × bruikbaar deel",
        explanation: "Gebruik dit als de capaciteit in wattuur staat en de belasting in watt.",
      },
      {
        title: "Lading naar energie",
        expression: "Wh = mAh × V ÷ 1000",
        explanation: "V is de nominale batterijspanning. Op dezelfde manier trekt een belasting in watt W ÷ V ampère.",
      },
    ],
    examples: [
      {
        title: "Cel van 3.000 mAh voor een apparaat van 150 mA",
        steps: ["Ideale gebruiksduur = 3.000 ÷ 150 = 20 h", "Bruikbare gebruiksduur = 20 × 0,80 = 16 h", "Energie = 3.000 × 3,7 ÷ 1000 = 11,1 Wh"],
      },
      {
        title: "Loodaccu van 100 Ah, 12 V met een belasting van 45 W tot 50%",
        steps: ["Energie = 100 Ah × 12 V = 1.200 Wh", "Bruikbare energie = 1.200 × 0,50 = 600 Wh", "Gebruiksduur = 600 ÷ 45 ≈ 13,33 h = 13 h 20 min"],
      },
      {
        title: "Laptopaccu van 74 Wh bij een gemiddeld verbruik van 18 W",
        steps: ["Bruikbare energie = 74 × 0,90 = 66,6 Wh", "Gebruiksduur = 66,6 ÷ 18 = 3,7 h", "0,7 h × 60 = 42 min, dus ongeveer 3 h 42 min"],
      },
    ],
    assumptions: [
      "De belasting is constant. Voor een apparaat dat wisselt tussen slaapstand en activiteit vul je de gemiddelde stroom of het gemiddelde vermogen in.",
      "De werkelijke capaciteit daalt in de kou, naarmate een batterij ouder wordt en bij hoge ontlaadstromen (het Peukert-effect, het sterkst bij loodaccu's). Deze effecten worden niet gemodelleerd, dus bij zware belasting is de gebruiksduur korter dan getoond.",
      "Omrekeningen met de spanning gebruiken de nominale spanning, hoewel de spanning tijdens het ontladen daalt, en verliezen in omvormers of converters zijn niet meegenomen, tenzij je de bruikbare capaciteit verlaagt om daar rekening mee te houden.",
    ],
    faqs: [
      {
        question: "Welke bruikbare capaciteit moet ik invullen?",
        answer:
          "Lithium-ionaccu's kunnen vaak 80–90% van hun opgegeven capaciteit gebruiken, terwijl loodaccu's langer meegaan als je ze regelmatig maar tot ongeveer 50% ontlaadt. Weet je het niet, dan is 80% een voorzichtig vertrekpunt voor kleine elektronica.",
      },
      {
        question: "Waarom heb ik de spanning nodig?",
        answer:
          "Milliampère-uur meet lading, terwijl watt en wattuur vermogen en energie meten. Om daartussen om te rekenen heb je de spanning nodig: wattuur is ampère-uur maal volt. Staat de capaciteit in mAh en de belasting in mA, dan is de spanning niet nodig voor de gebruiksduur.",
      },
      {
        question: "Waarom levert mijn powerbank minder dan de mAh-waarde doet vermoeden?",
        answer:
          "Powerbanks worden opgegeven bij de interne celspanning van ongeveer 3,7 V, maar de USB-uitgang levert 5 V of meer, en de spanningsomvormer verliest wat energie als warmte. Vergelijk in wattuur en verlaag de bruikbare capaciteit om die verliezen mee te nemen.",
      },
    ],
    sourcesUsedFor: [
      "Batterij-energie in wattuur als volt × ampère-uur.",
      "Een waarde in milliampère-uur omrekenen naar ampère-uur door te delen door 1.000, voordat je met de spanning vermenigvuldigt.",
      "Dat de bruikbare capaciteit daalt bij hogere ontlaadstromen (het Peukert-effect), wat deze calculator niet modelleert.",
    ],
  },
  text: {
    capacity: "Batterijcapaciteit",
    capacityUnit: "Eenheid van capaciteit",
    capacityUnits: { mAh: "Milliampère-uur (mAh)", Ah: "Ampère-uur (Ah)", Wh: "Wattuur (Wh)" },
    voltage: "Batterijspanning",
    voltageHelp:
      "De nominale spanning, zoals 3,7 V voor een lithium-ioncel of 12 V voor een loodaccu. Nodig als de capaciteit en de belasting verschillende soorten eenheden gebruiken (lading en vermogen), en om de energie te tonen.",
    load: "Belasting van het apparaat",
    loadUnit: "Eenheid van belasting",
    loadUnits: { mA: "Milliampère (mA)", A: "Ampère (A)", W: "Watt (W)" },
    depth: "Bruikbare capaciteit (ontladingsdiepte)",
    depthHelp:
      "Het deel van de opgegeven capaciteit dat je echt kunt gebruiken. 80% is een gangbare marge voor verliezen en om de batterij te beschermen; gebruik 100% voor de ideale waarde.",
    errors: {
      voltageNeeded: "Vul de batterijspanning in om om te rekenen tussen lading (mAh of Ah) en vermogen of energie (W of Wh).",
    },
    runtime: "Geschatte gebruiksduur (u:mm)",
    runtimeText: "{h}:{mm}",
    caption: "Batterij van {capacity} met een belasting van {load}, waarbij {depth} van de capaciteit wordt gebruikt.",
    hours: "Gebruiksduur in uren",
    days: "Gebruiksduur in dagen",
    energy: "Opgegeven energie",
    usableEnergy: "Bruikbare energie",
    current: "Stroom van de belasting",
    power: "Vermogen van de belasting",
    notes: {
      constant: "Hierbij wordt uitgegaan van een constante belasting. Een apparaat dat slaapt en ontwaakt trekt een gemiddelde stroom; gebruik dat gemiddelde.",
      peukert:
        "De werkelijke capaciteit daalt in de kou, naarmate de batterij ouder wordt en bij hoge ontlaadstromen (het Peukert-effect, hier niet gemodelleerd), dus reken op een kortere gebruiksduur bij zware belasting.",
      conversion:
        "De spanning is gebruikt om om te rekenen tussen lading en energie (Wh = Ah × V); er wordt geen rekening gehouden met de spanning die daalt terwijl de batterij ontlaadt.",
    },
  },
};

export default nl;
