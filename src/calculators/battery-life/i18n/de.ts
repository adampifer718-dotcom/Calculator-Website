import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BatteryLifeText } from "../text/en";

const de: CalculatorTranslation<BatteryLifeText> = {
  content: {
    title: "Batterielaufzeitrechner",
    shortTitle: "Batterielaufzeit",
    summary: "Schätzen Sie, wie lange eine Batterie oder ein Akku ein Gerät betreibt – aus der Kapazität in mAh, Ah oder Wh und der Last in mA, A oder W.",
    metaTitle: "Batterielaufzeitrechner – Laufzeit aus mAh, Ah oder Wh",
    metaDescription: "Schätzen Sie die Laufzeit aus Kapazität (mAh, Ah oder Wh) und Last (mA, A oder W) – mit nutzbarer Entladetiefe, Laufzeit in Stunden und Tagen sowie Energie.",
    keywords: ["Batterielaufzeit berechnen", "Akkulaufzeit berechnen", "mAh in Stunden", "Akkukapazität", "Wattstunden", "Amperestunden", "Entladetiefe", "wie lange hält ein Akku"],
    intro: [
      "Die Kapazität einer Batterie gibt an, wie viel Ladung (in Milliamperestunden oder Amperestunden) oder Energie (in Wattstunden) sie speichert. Teilt man den tatsächlich nutzbaren Teil dieser Kapazität durch den Verbrauch des Geräts, erhält man eine erste Schätzung der Laufzeit.",
      "Dieser Rechner akzeptiert die Kapazität in mAh, Ah oder Wh und die Last in mA, A oder W. Ist das eine eine Ladung und das andere eine Leistung, rechnet er mit der Batteriespannung um. Nutzen Sie ihn, um eine Batterie für einen Sensor, eine Campingleuchte, eine Powerbank oder eine Notstromversorgung auszulegen.",
    ],
    howToUse: [
      "Geben Sie die Batteriekapazität ein und wählen Sie mAh, Ah oder Wh.",
      "Geben Sie die Nennspannung der Batterie ein. Sie wird gebraucht, wenn ein Wert in mAh oder Ah und der andere in W oder Wh angegeben ist, und ermöglicht die Anzeige der Energie.",
      "Geben Sie die mittlere Last des Geräts in mA, A oder W ein.",
      "Legen Sie die nutzbare Kapazität fest (voreingestellt 80 %) und lesen Sie die Laufzeit in Stunden und Minuten, in Dezimalstunden und in Tagen ab.",
    ],
    formulas: [
      { title: "Laufzeit aus der Ladung", expression: "t (h) = Kapazität (mAh) ÷ Last (mA) × nutzbarer Anteil", explanation: "Mit Amperestunden und Ampere funktioniert es genauso. Der nutzbare Anteil ist die Entladetiefe, zum Beispiel 0,8." },
      { title: "Laufzeit aus der Energie", expression: "t (h) = Energie (Wh) ÷ Last (W) × nutzbarer Anteil", explanation: "Verwenden Sie dies, wenn die Kapazität in Wattstunden und die Last in Watt angegeben ist." },
      { title: "Ladung in Energie", expression: "Wh = mAh × V ÷ 1000", explanation: "V ist die Nennspannung der Batterie. Ebenso zieht eine Last in Watt W ÷ V Ampere." },
    ],
    examples: [
      {
        title: "3.000-mAh-Zelle für ein Gerät mit 150 mA",
        steps: ["Ideale Laufzeit = 3.000 ÷ 150 = 20 h", "Nutzbare Laufzeit = 20 × 0,80 = 16 h", "Energie = 3.000 × 3,7 ÷ 1000 = 11,1 Wh"],
      },
      {
        title: "Bleiakku mit 100 Ah und 12 V an einer 45-W-Last bis 50 %",
        steps: ["Energie = 100 Ah × 12 V = 1.200 Wh", "Nutzbare Energie = 1.200 × 0,50 = 600 Wh", "Laufzeit = 600 ÷ 45 ≈ 13,33 h = 13 h 20 min"],
      },
      {
        title: "Laptop-Akku mit 74 Wh bei 18 W mittlerer Leistungsaufnahme",
        steps: ["Nutzbare Energie = 74 × 0,90 = 66,6 Wh", "Laufzeit = 66,6 ÷ 18 = 3,7 h", "0,7 h × 60 = 42 min, also etwa 3 h 42 min"],
      },
    ],
    assumptions: [
      "Die Last ist konstant. Bei einem Gerät, das zwischen Ruhezustand und Aktivität wechselt, geben Sie den mittleren Strom oder die mittlere Leistung ein.",
      "Die tatsächliche Kapazität sinkt bei Kälte, mit der Alterung der Batterie und bei hohen Entladeraten (der Peukert-Effekt, am stärksten bei Bleiakkus). Diese Effekte werden nicht modelliert, daher laufen Geräte mit hoher Last kürzer als angezeigt.",
      "Spannungsumrechnungen verwenden die Nennspannung, obwohl die Spannung während der Entladung sinkt, und Wandler- oder Wechselrichterverluste sind nicht enthalten, sofern Sie nicht die nutzbare Kapazität entsprechend senken.",
    ],
    faqs: [
      { question: "Welche nutzbare Kapazität sollte ich eingeben?", answer: "Lithium-Ionen-Akkus können oft 80–90 % ihrer Nennkapazität nutzen, Bleiakkus halten dagegen länger, wenn sie regelmäßig nur bis etwa 50 % entladen werden. Wenn Sie es nicht wissen, sind 80 % ein vorsichtiger Ausgangswert für kleine Elektronik." },
      { question: "Warum brauche ich die Spannung?", answer: "Milliamperestunden messen Ladung, Watt und Wattstunden dagegen Leistung und Energie. Für die Umrechnung braucht man die Spannung: Wattstunden sind Amperestunden mal Volt. Ist die Kapazität in mAh und die Last in mA angegeben, wird die Spannung für die Laufzeit nicht benötigt." },
      { question: "Warum liefert meine Powerbank weniger, als ihre mAh-Angabe vermuten lässt?", answer: "Powerbanks werden mit der internen Zellspannung von etwa 3,7 V angegeben, der USB-Ausgang liefert aber 5 V oder mehr, und der Spannungswandler verliert einen Teil der Energie als Wärme. Vergleichen Sie in Wattstunden und senken Sie die nutzbare Kapazität, um diese Verluste zu berücksichtigen." },
    ],
    sourcesUsedFor: [
      "Die Energie einer Batterie in Wattstunden als Volt × Amperestunden.",
      "Die Umrechnung einer Angabe in Milliamperestunden in Amperestunden durch Teilen durch 1.000 vor der Multiplikation mit der Spannung.",
      "Dass die nutzbare Kapazität bei höheren Entladeströmen sinkt (der Peukert-Effekt), was dieser Rechner nicht modelliert.",
    ],
  },
  text: {
    capacity: "Batteriekapazität",
    capacityUnit: "Einheit der Kapazität",
    capacityUnits: { mAh: "Milliamperestunden (mAh)", Ah: "Amperestunden (Ah)", Wh: "Wattstunden (Wh)" },
    voltage: "Batteriespannung",
    voltageHelp: "Die Nennspannung, etwa 3,7 V für eine Lithium-Ionen-Zelle oder 12 V für einen Bleiakku. Nötig, wenn Kapazität und Last unterschiedliche Größen verwenden (Ladung und Leistung), und um die Energie anzuzeigen.",
    load: "Last des Geräts",
    loadUnit: "Einheit der Last",
    loadUnits: { mA: "Milliampere (mA)", A: "Ampere (A)", W: "Watt (W)" },
    depth: "Nutzbare Kapazität (Entladetiefe)",
    depthHelp: "Der Anteil der Nennkapazität, den Sie tatsächlich nutzen können. 80 % ist ein üblicher Zuschlag für Verluste und zum Schutz der Batterie; verwenden Sie 100 % für den Idealwert.",
    errors: {
      voltageNeeded: "Geben Sie die Batteriespannung ein, um zwischen Ladung (mAh oder Ah) und Leistung oder Energie (W oder Wh) umzurechnen.",
    },
    runtime: "Geschätzte Laufzeit (h:mm)",
    runtimeText: "{h}:{mm}",
    caption: "Batterie mit {capacity} an einer Last von {load}, mit {depth} ihrer Kapazität genutzt.",
    hours: "Laufzeit in Stunden",
    days: "Laufzeit in Tagen",
    energy: "Nennenergie",
    usableEnergy: "Nutzbare Energie",
    current: "Laststrom",
    power: "Lastleistung",
    notes: {
      constant: "Dies setzt eine konstante Last voraus. Ein Gerät, das schläft und aufwacht, zieht einen mittleren Strom; verwenden Sie diesen Mittelwert.",
      peukert: "Die tatsächliche Kapazität sinkt bei Kälte, mit der Alterung der Batterie und bei hohen Entladeströmen (der Peukert-Effekt, hier nicht modelliert); rechnen Sie bei hoher Last daher mit kürzerer Laufzeit.",
      conversion: "Die Spannung wurde zur Umrechnung zwischen Ladung und Energie verwendet (Wh = Ah × V); dabei wird vernachlässigt, dass die Spannung beim Entladen sinkt.",
    },
  },
};

export default de;
