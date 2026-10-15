import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { VolumeShapesText } from "../text/en";

const de: CalculatorTranslation<VolumeShapesText> = {
  content: {
    title: "Volumenrechner",
    shortTitle: "Volumen",
    summary: "Berechnen Sie das Volumen von Würfel, Quader, Zylinder, Kugel, Halbkugel, Kegel oder quadratischer Pyramide – mit Ergebnis in Litern, Kubikmetern und US-Gallonen.",
    metaTitle: "Volumenrechner – Zylinder, Kugel, Kegel und mehr",
    metaDescription: "Berechnen Sie das Volumen von Würfel, Quader, Zylinder, Kugel, Halbkugel, Kegel oder Pyramide in mm, cm, m, in oder ft, dazu in Litern und US-Gallonen.",
    keywords: ["Volumen berechnen", "Volumenrechner", "Volumen Zylinder", "Volumen Kugel", "Volumen Kegel", "Kubikmeter berechnen", "Liter berechnen", "Volumen Pyramide"],
    intro: [
      "Das Volumen ist der Raum, den ein Körper einnimmt. Dieser Rechner deckt sieben gängige Körper ab, vom einfachen Würfel bis zum Kegel oder zur quadratischen Pyramide – etwa um einen Tank, einen Pflanzkübel, eine Kiste oder eine Hausaufgabe zu berechnen.",
      "Wählen Sie einen Körper und eine Längeneinheit und geben Sie die benötigten Maße ein. Das Ergebnis erscheint in dieser Einheit hoch drei und wird zusätzlich in Liter, Kubikmeter und US-Gallonen umgerechnet. So sehen Sie, wie viel Flüssigkeit oder Material hineinpasst.",
    ],
    howToUse: [
      "Wählen Sie den Körper.",
      "Wählen Sie die Einheit, in der Sie gemessen haben. Alle Maße müssen dieselbe Einheit haben.",
      "Geben Sie die für diesen Körper angezeigten Maße ein. Verwenden Sie bei runden Körpern den Radius, also den halben Durchmesser.",
      "Lesen Sie das Volumen und seine Umrechnung in Liter, Kubikmeter und US-Gallonen ab.",
    ],
    formulas: [
      { title: "Würfel und Quader", expression: "V = a³\nV = l × w × h", explanation: "Ein Würfel hat drei gleich lange Kanten a; beim Quader werden Länge, Breite und Höhe multipliziert." },
      { title: "Zylinder und Kegel", expression: "V = πr²h\nV = 1/3 πr²h", explanation: "Ein Kegel fasst genau ein Drittel des Zylinders mit demselben Grundkreisradius r und derselben Höhe h." },
      { title: "Kugel und Halbkugel", expression: "V = 4/3 πr³\nV = 2/3 πr³", explanation: "Eine Halbkugel ist die Hälfte einer Kugel mit dem Radius r." },
      { title: "Quadratische Pyramide", expression: "V = 1/3 a²h", explanation: "Ein Drittel der Grundfläche a² mal der senkrechten Höhe h." },
      { title: "Umrechnungen", expression: "1 m³ = 1.000 L\n1 US gal = 3,785411784 L", explanation: "Das Volumen in Ihrer Einheit hoch drei wird mit dem exakten Längenfaktor in Kubikmeter umgerechnet, danach in Liter und Gallonen." },
    ],
    examples: [
      {
        title: "Zylindrischer Wassertank, 1,2 m hoch, Radius 0,5 m",
        steps: ["V = π × 0,5² × 1,2", "= π × 0,3 ≈ 0,94248 m³", "0,94248 m³ × 1.000 ≈ 942,48 L, etwa 248,98 US gal"],
      },
      {
        title: "Ein Ball mit 4 Zoll Radius",
        steps: ["V = 4/3 × π × 4³", "= 4/3 × π × 64 ≈ 268,08 in³", "Das sind etwa 4,39 L oder 1,16 US gal"],
      },
      {
        title: "Quadratische Pyramide mit 9 cm Grundseite und 15 cm Höhe",
        steps: ["Grundfläche = 9² = 81 cm²", "V = 1/3 × 81 × 15 = 405 cm³", "405 cm³ = 0,405 L"],
      },
    ],
    assumptions: [
      "Die Körper sind ideal: Kanten sind gerade, runde Formen exakt kreisförmig, und Zylinder, Kegel und Pyramide sind gerade (die Spitze oder Oberseite liegt genau über der Mitte der Grundfläche).",
      "Das Ergebnis ist der von den Außenmaßen umschlossene Raum. Messen Sie bei einem Behälter mit dicken Wänden innen, um sein Fassungsvermögen zu ermitteln.",
      "US-Gallonen sind flüssige Gallonen zu 3,785411784 L. Imperiale Gallonen werden nicht angezeigt.",
    ],
    faqs: [
      { question: "Wie berechne ich das Volumen, wenn ich nur den Durchmesser kenne?", answer: "Teilen Sie den Durchmesser durch zwei, um den Radius zu erhalten, und geben Sie den Radius ein. Ein 30 cm breiter Topf hat einen Radius von 15 cm." },
      { question: "Wie viele Liter hat ein Kubikmeter?", answer: "Genau 1.000. Ein Liter ist das Volumen eines Würfels mit 10 cm Kantenlänge, also ergeben 1.000 cm³ einen Liter." },
      { question: "Warum ist ein Kegel ein Drittel eines Zylinders?", answer: "Ein Kegel verjüngt sich gleichmäßig zu einer Spitze. Addiert man seine kreisförmigen Scheiben von der Grundfläche bis zur Spitze, ergibt sich genau ein Drittel von πr²h. Aus demselben Grund ist eine Pyramide ein Drittel des Quaders mit gleicher Grundfläche und Höhe." },
    ],
    sourcesUsedFor: [
      "Volumenformeln für Quader, Zylinder, Kugel und Kegel.",
      "Die US-Gallone mit 231 Kubikzoll (3,785411784 L) und der Zoll mit 2,54 cm.",
    ],
  },
  text: {
    shape: "Körper",
    shapes: {
      cube: "Würfel",
      box: "Quader",
      cylinder: "Zylinder",
      sphere: "Kugel",
      hemisphere: "Halbkugel",
      cone: "Kegel",
      pyramid: "Quadratische Pyramide",
    },
    unit: "Längeneinheit",
    unitHelp: "Geben Sie alle Maße in dieser Einheit ein. Das Volumen wird in derselben Einheit hoch drei angezeigt.",
    units: { mm: "Millimeter (mm)", cm: "Zentimeter (cm)", m: "Meter (m)", in: "Zoll (in)", ft: "Fuß (ft)" },
    edge: "Kantenlänge (a)",
    length: "Länge (l)",
    width: "Breite (w)",
    height: "Höhe (h)",
    heightHelp: "Die senkrechte Höhe, von der Grundfläche gerade nach oben bis zur Oberseite oder Spitze.",
    radius: "Radius (r)",
    radiusHelp: "Der halbe Durchmesser.",
    baseSide: "Grundseite (a)",
    volume: "Volumen",
    formula: {
      cube: "V = a³",
      box: "V = l × w × h",
      cylinder: "V = πr²h",
      sphere: "V = 4/3 πr³",
      hemisphere: "V = 2/3 πr³",
      cone: "V = 1/3 πr²h",
      pyramid: "V = 1/3 a²h",
    },
    liters: "In Litern",
    cubicMeters: "In Kubikmetern",
    usGallons: "In US-Gallonen",
    note: "1 Liter sind 1.000 cm³, und 1 US-Gallone sind 3,785411784 Liter.",
  },
};

export default de;
