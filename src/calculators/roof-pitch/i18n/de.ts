import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoofPitchText } from "../text/en";

const de: CalculatorTranslation<RoofPitchText> = {
  content: {
    title: "Dachneigungsrechner",
    shortTitle: "Dachneigung",
    summary: "Rechnen Sie Höhe und horizontale Länge eines Dachs oder seinen Winkel in Neigung pro 12, Grad, Prozent und Sparrenlänge um.",
    metaTitle: "Dachneigungsrechner – X auf 12, Winkel und Sparrenlänge",
    metaDescription: "Rechnen Sie Höhe und Länge oder einen Dachwinkel in die Neigung in Zoll pro 12, Grad und Prozent um – dazu Sparrenfaktor und Sparrenlänge.",
    keywords: ["Dachneigung berechnen", "Dachneigung in Grad", "Dachneigung in Prozent", "Dachwinkel", "Sparrenlänge berechnen", "Neigung 4/12", "Dachgefälle"],
    intro: [
      "Die Dachneigung wird häufig als Höhe pro 12 Einheiten horizontaler Länge angegeben: Ein Dach mit 6 auf 12 steigt um 6 Zoll pro 12 Zoll in der Horizontalen. Dieselbe Neigung lässt sich auch als Winkel in Grad oder in Prozent ausdrücken.",
      "Geben Sie eine gemessene Höhe und Länge oder einen Winkel aus einem Plan ein, und der Rechner liefert alle drei Darstellungen. Ergänzen Sie die horizontale Dachlänge, um die Sparrenlänge von der Wandlinie bis zum First zu erhalten.",
    ],
    howToUse: [
      "Wählen Sie, ob Sie Höhe und Länge oder den Winkel kennen.",
      "Geben Sie Höhe und Länge in derselben Einheit ein oder den Winkel in Grad.",
      "Geben Sie optional die horizontale Dachlänge ein – die halbe Gebäudebreite –, um die Sparrenlänge zu erhalten.",
      "Lesen Sie die Neigung pro 12, den Winkel, die Neigung in Prozent und die Sparrenwerte ab.",
    ],
    formulas: [
      { title: "Neigung pro 12", expression: "Neigung = 12 × Höhe ÷ Länge", explanation: "Skaliert die Neigung auf eine horizontale Länge von 12 Einheiten." },
      { title: "Winkel", expression: "θ = arctan(Höhe ÷ Länge)", explanation: "Umgekehrt gilt Höhe ÷ Länge = tan θ." },
      { title: "Neigung in Prozent", expression: "Neigung % = 100 × Höhe ÷ Länge", explanation: "Ein Dach mit 12 auf 12 hat 100 % Neigung bei 45°." },
      {
        title: "Sparrenlänge",
        expression: "Sparren = Dachlänge × √(1 + (Höhe ÷ Länge)²)",
        explanation: "Pythagoras: Die Quadratwurzel ist der Sparrenfaktor.",
      },
    ],
    examples: [
      {
        title: "6 Zoll Höhe auf 12 Zoll Länge",
        steps: ["Neigung = 12 × 6 ÷ 12 = 6 auf 12", "θ = arctan(0,5) ≈ 26,57°, Neigung 50 %", "Faktor = √1,25 ≈ 1,1180"],
      },
      {
        title: "5 ft Höhe auf 8 ft, mit 14 ft horizontaler Dachlänge",
        steps: ["Neigung = 12 × 5 ÷ 8 = 7,5 auf 12", "Faktor = √(1 + 0,625²) ≈ 1,1792", "Sparren = 14 × 1,1792 ≈ 16,509 ft"],
      },
      {
        title: "Ein Dach mit 30°",
        steps: ["Höhe ÷ Länge = tan 30° ≈ 0,5774", "Neigung = 12 × 0,5774 ≈ 6,93 auf 12", "Neigung ≈ 57,74 %"],
      },
    ],
    assumptions: [
      "Dies ist reine Geometrie. Sparrendimensionierung, Tragwerksplanung, Mindestneigungen für eine Dacheindeckung und örtliche Bauvorschriften erfordern eine qualifizierte Fachkraft.",
      "Höhe und Länge müssen dieselbe Einheit haben. Die Sparrenlänge verwendet die gewählte Einheit und enthält weder Dachüberstand noch Firstbohle noch Verschnittzugabe.",
      "Das Dach wird als ebene Fläche mit einem geraden Sparren von der Wandlinie bis zum First betrachtet.",
    ],
    faqs: [
      {
        question: "Was bedeutet eine Neigung von 4/12?",
        answer: "Das Dach steigt um 4 Einheiten pro 12 Einheiten horizontaler Länge, das sind etwa 18,43° oder 33,3 % Neigung.",
      },
      {
        question: "Sind „pitch“ und „slope“ dasselbe?",
        answer: "Im Alltag ja. Streng genommen definieren manche Zimmerleute „pitch“ als Gesamthöhe geteilt durch die volle Spannweite, also die Hälfte der Neigung Höhe pro Länge. Dieser Rechner verwendet die Höhe pro 12 Einheiten Länge.",
      },
      {
        question: "Wie messe ich Höhe und Länge?",
        answer: "Halten Sie eine Wasserwaage waagerecht an das Dach oder einen Sparren, markieren Sie darauf 12 Zoll und messen Sie von dieser Markierung senkrecht nach unten bis zur Dachfläche. Dieser senkrechte Abstand ist die Höhe pro 12.",
      },
    ],
    sourcesUsedFor: ["Angabe der Dachneigung als Höhe pro 12 Einheiten horizontaler Länge und die Bedeutung der horizontalen Länge (run)."],
  },
  text: {
    mode: "Ausgangspunkt",
    modeOptions: { riseRun: "Höhe und Länge", angle: "Winkel" },
    unit: "Längeneinheit",
    units: { in: "Zoll (in)", ft: "Fuß (ft)", cm: "Zentimeter (cm)", m: "Meter (m)" },
    rise: "Höhe",
    riseHelp: "Vertikaler Höhengewinn über die horizontale Länge.",
    run: "Horizontale Länge",
    runHelp: "Waagerechter Abstand, in derselben Einheit wie die Höhe.",
    angle: "Dachwinkel",
    angleTooSteep: "Der Winkel muss kleiner als 90° sein.",
    roofRun: "Horizontale Dachlänge (optional)",
    roofRunHelp: "Die halbe Gebäudebreite, von der Außenseite der Wand bis unter den First. Wird für die Sparrenlänge verwendet.",
    pitch: "Dachneigung",
    pitchText: "{rise} auf 12",
    pitchCaption: "Zoll Höhe pro 12 Zoll horizontaler Länge (jede Einheit funktioniert, solange beide übereinstimmen).",
    angleOut: "Winkel",
    slopePercent: "Neigung in Prozent",
    multiplier: "Sparrenfaktor",
    rafter: "Sparrenlänge (ohne Überstand)",
    roofRise: "Höhe über die horizontale Dachlänge",
    note: "Die Sparrenlänge wird entlang der Neigung von der Wandlinie bis zum First gemessen, ohne Dachüberstand, Firstbohle oder Verschnittzugabe.",
  },
};

export default de;
