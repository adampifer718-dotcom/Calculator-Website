import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SolarPanelOutputText } from "../text/en";

const de: CalculatorTranslation<SolarPanelOutputText> = {
  content: {
    title: "Solarertragsrechner",
    shortTitle: "Solarertrag",
    summary: "Schätzen Sie, wie viele Kilowattstunden eine Anzahl Solarmodule pro Tag, Monat und Jahr erzeugt und wie groß eine Anlage für Ihren Stromverbrauch sein müsste.",
    metaTitle: "Solarertragsrechner – kWh pro Tag und Jahr",
    metaDescription: "Schätzen Sie den Solarertrag in kWh pro Tag, Monat und Jahr aus Modulleistung, Spitzensonnenstunden und Verlusten – mit Anlagengröße für Ihren Verbrauch.",
    keywords: ["Solarrechner", "Solarertrag berechnen", "PV-Ertrag pro Jahr", "Spitzensonnenstunden", "PV-Anlage Größe", "wie viele Solarmodule", "Systemverluste PV", "Photovoltaik Ertrag"],
    intro: [
      "Die Nennleistung eines Solarmoduls gibt an, wie viel Leistung es unter Standardtestbedingungen erzeugt: volle Sonneneinstrahlung von 1.000 Watt pro Quadratmeter bei einer Zelltemperatur von 25 °C. Der tatsächliche Ertrag hängt davon ab, wie viel Sonnenlicht im Laufe eines Tages wirklich auf die Module trifft, meist zusammengefasst als Spitzensonnenstunden (Peak Sun Hours), und von den Verlusten im übrigen System.",
      "Geben Sie die Nennleistung, die Zahl der Module, Ihre Spitzensonnenstunden und die Systemverluste ein, um die erzeugte Energie pro Tag, Monat und Jahr zu schätzen. Ergänzen Sie Ihren jährlichen Stromverbrauch, um zu sehen, welchen Anteil die Anlage deckt und wie viele Module ihn vollständig decken würden.",
    ],
    howToUse: [
      "Geben Sie die Nennleistung eines Moduls in Watt ein, wie auf dem Typenschild oder im Datenblatt angegeben, sowie die Zahl der Module.",
      "Geben Sie die Spitzensonnenstunden für Ihren Standort ein. Der Standardwert 4,5 ist nur ein Beispiel; ermitteln Sie einen Wert für Ihren Standort oder nutzen Sie ein Werkzeug für Solardaten.",
      "Behalten Sie die standardmäßigen 14 % Systemverluste bei oder geben Sie Ihre eigene Schätzung für Verluste durch Wechselrichter, Verkabelung, Wärme, Verschmutzung und Verschattung ein.",
      "Geben Sie optional Ihren jährlichen Stromverbrauch in kWh laut Ihren Abrechnungen ein, um den gedeckten Anteil und die benötigte Anlagengröße zu sehen.",
    ],
    formulas: [
      {
        title: "Tagesertrag",
        expression: "E(Tag) = Nennleistung (W) × Module ÷ 1.000 × Spitzensonnenstunden × (1 − Verluste ÷ 100)",
        explanation: "Nennleistung × Module ÷ 1.000 ist die Anlagengröße in kW. Multipliziert mit den Spitzensonnenstunden ergibt das kWh bei voller Nennleistung, und der Verlustfaktor reduziert dies auf das, was bei Ihnen im Haus ankommt.",
      },
      {
        title: "Jahres- und Monatsertrag",
        expression: "E(Jahr) = E(Tag) × 365;  E(Monat) = E(Jahr) ÷ 12",
        explanation: "Der Monatswert ist ein Durchschnitt. Der tatsächliche Ertrag ist im Sommer höher und im Winter niedriger.",
      },
      {
        title: "Anlagengröße für Ihren Verbrauch",
        expression: "Größe (kW) = Jahresverbrauch ÷ (365 × Spitzensonnenstunden × (1 − Verluste ÷ 100))",
        explanation: "Die benötigten Module sind diese Größe × 1.000 ÷ Nennleistung des Moduls, aufgerundet auf ganze Module.",
      },
    ],
    examples: [
      {
        title: "Zehn 400-W-Module bei 4,5 Spitzensonnenstunden",
        steps: ["Anlagengröße = 400 × 10 ÷ 1.000 = 4 kW", "Tagesertrag = 4 × 4,5 × (1 − 0,14) = 15,48 kWh", "Jahresertrag = 15,48 × 365 = 5.650,2 kWh"],
      },
      {
        title: "Sechzehn 350-W-Module, 5,2 Sonnenstunden, 11.000 kWh Verbrauch pro Jahr",
        steps: [
          "Anlagengröße = 350 × 16 ÷ 1.000 = 5,6 kW",
          "Tagesertrag = 5,6 × 5,2 × 0,86 = 25,0432 kWh, also 25,0432 × 365 ≈ 9.140,77 kWh pro Jahr",
          "Gedeckter Anteil = 9.140,77 ÷ 11.000 ≈ 83,1 %",
          "Benötigte Größe = 11.000 ÷ (365 × 5,2 × 0,86) ≈ 6,74 kW, also 6.739 ÷ 350 ≈ 19,25, aufgerundet 20 Module",
        ],
      },
      {
        title: "Sechs 450-W-Module an einem bewölkteren Ort mit 10 % Verlusten",
        steps: ["Anlagengröße = 450 × 6 ÷ 1.000 = 2,7 kW", "Tagesertrag = 2,7 × 3,2 × 0,90 = 7,776 kWh", "Jahresertrag = 7,776 × 365 = 2.838,24 kWh"],
      },
    ],
    assumptions: [
      "Die Spitzensonnenstunden hängen von Ihrem Standort, Neigung und Ausrichtung der Module, Verschattung und Jahreszeit ab. Der eingegebene Wert wird als Jahresdurchschnitt verwendet. Für eine realistische Schätzung nutzen Sie ein lokales Werkzeug für Solardaten wie PVWatts des NREL.",
      "Der Standardwert von 14 % Verlust ist ein häufig verwendeter Wert, der Verluste etwa durch Wechselrichter, Verkabelung, Verschmutzung, Fehlanpassung und Verfügbarkeit abdeckt. Ihre Anlage kann mehr oder weniger verlieren.",
      "Der Modulertrag sinkt außerdem bei hohen Zelltemperaturen und langsam mit dem Alter. Diese Effekte sind nur insoweit enthalten, als sie Teil des eingegebenen Verlustwerts sind.",
      "Der gedeckte Anteil am Verbrauch vergleicht nur Jahressummen. Er berücksichtigt nicht, wann die Energie erzeugt und wann sie verbraucht wird, und auch keine Batteriespeicher oder Regeln für die Netzeinspeisung.",
    ],
    faqs: [
      {
        question: "Was sind Spitzensonnenstunden?",
        answer: "Sie drücken die Sonnenenergie eines Tages als Zahl der Stunden voller Sonneneinstrahlung mit 1.000 W/m² aus, die dieselbe Energie liefern würden. Ein Standort, der an einem Tag 5 kWh pro Quadratmeter erhält, hat 5 Spitzensonnenstunden, auch wenn die Sonne viel länger scheint.",
      },
      {
        question: "Warum ist der Ertrag niedriger als Nennleistung × Stunden?",
        answer: "Die Nennleistung von Modulen wird unter idealen Laborbedingungen gemessen. Im Betrieb geht Energie im Wechselrichter und in der Verkabelung verloren, durch Wärme, Staub und Verschattung sowie durch kleine Unterschiede zwischen den Modulen. Der Verlustprozentsatz fasst diese zusammen.",
      },
      {
        question: "Wie viele Module brauche ich?",
        answer: "Geben Sie Ihren jährlichen Stromverbrauch ein. Der Rechner teilt ihn durch die Energie, die ein kW Module bei Ihren Sonnenstunden und Verlusten pro Jahr erzeugt, und rechnet diese Größe in ganze Module der eingegebenen Nennleistung um.",
      },
    ],
    sourcesUsedFor: ["Das PVWatts-Modell und seine standardmäßigen gesamten Systemverluste von 14 %."],
  },
  text: {
    panelWatts: "Nennleistung des Moduls",
    panelWattsHelp: "Die Nennleistung eines Moduls unter Standardtestbedingungen (STC), angegeben auf dem Typenschild oder im Datenblatt.",
    panels: "Anzahl der Module",
    sunHours: "Spitzensonnenstunden pro Tag",
    sunHoursHelp: "Die tägliche Sonnenenergie an Ihrem Standort, ausgedrückt in Stunden voller Sonne (1 kW/m²). 4,5 ist nur ein Beispiel; der richtige Wert hängt von Ihrem Standort, Neigung und Ausrichtung der Module und der Jahreszeit ab.",
    losses: "Systemverluste",
    lossesHelp: "Verluste durch Wechselrichter, Verkabelung, Wärme, Verschmutzung, Verschattung und Fehlanpassung. 14 % ist ein häufig verwendeter Standardwert.",
    annualUsage: "Jährlicher Stromverbrauch (optional)",
    annualUsageHelp: "Ihr Jahresverbrauch laut Stromabrechnungen, um zu sehen, wie viel davon die Anlage deckt und welche Größe ihn vollständig decken würde.",
    errors: {
      losses: "Die Systemverluste müssen unter 100 % liegen.",
    },
    annual: "Geschätzte Energie pro Jahr",
    caption: "Anlage mit {size} × {hours} Spitzensonnenstunden × {factor} nach {losses} Verlusten.",
    daily: "Energie pro Tag",
    monthly: "Durchschnittliche Energie pro Monat",
    systemSize: "Anlagengröße (DC)",
    specificYield: "Energie pro installiertem kW und Jahr",
    coverage: "Gedeckter Anteil Ihres Jahresverbrauchs",
    sizeNeeded: "Anlagengröße für Ihren gesamten Verbrauch",
    panelsNeeded: "Benötigte Module für Ihren gesamten Verbrauch",
    panelsMore: "Zusätzlich benötigte Module",
    notes: {
      estimate: "Dies ist eine einfache Schätzung. Ein lokales Werkzeug für Solardaten wie PVWatts des NREL nutzt stündliche Wetterdaten für Ihren Standort und liefert einen genaueren Wert.",
      covered: "Die eingegebene Anlage erzeugt im Jahr mindestens so viel Energie, wie Sie verbrauchen. Erzeugung und Verbrauch stimmen selten Stunde für Stunde überein, daher beziehen Sie möglicherweise trotzdem etwas Strom aus dem Netz.",
      panelsRounded: "Die Modulzahl wird auf ganze Module mit {watts} aufgerundet.",
    },
  },
};

export default de;
