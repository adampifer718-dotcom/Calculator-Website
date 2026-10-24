import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProjectileMotionText } from "../text/en";

const de: CalculatorTranslation<ProjectileMotionText> = {
  content: {
    title: "Rechner für den schiefen Wurf",
    shortTitle: "Schiefer Wurf",
    summary: "Berechnen Sie Wurfweite, Flugzeit, Gipfelhöhe und Aufprallgeschwindigkeit eines geworfenen Körpers aus beliebiger Höhe – auf der Erde, dem Mond oder dem Mars.",
    metaTitle: "Rechner für den schiefen Wurf – Wurfweite, Höhe, Flugzeit",
    metaDescription: "Aus Abwurfgeschwindigkeit, Winkel und Höhe: Wurfweite, Flugzeit, maximale Höhe und Aufprallgeschwindigkeit, mit Positionstabelle. Ohne Luftwiderstand.",
    keywords: ["schiefer Wurf", "Wurfparabel", "Wurfweite berechnen", "Flugzeit", "maximale Höhe", "Abwurfwinkel", "Kinematik", "Flugbahn"],
    intro: [
      "Ein geworfener Ball, ein geschossener Fußball oder ein Wasserstrahl folgen in der Luft fast derselben Kurve: Sie bewegen sich seitlich mit gleichbleibender Geschwindigkeit weiter, während die Schwerkraft sie gleichmäßig nach unten beschleunigt. Das Ergebnis ist eine Parabel.",
      "Geben Sie die Abwurfgeschwindigkeit, den Winkel über der Horizontalen und die Höhe über dem Landeboden an. Der Rechner ermittelt, wie weit der Körper fliegt, wie lange er in der Luft bleibt, wie hoch er steigt und wie schnell er beim Aufprall ist, und listet seine Position zu zehn Zeitpunkten des Flugs auf.",
    ],
    howToUse: [
      "Geben Sie die Abwurfgeschwindigkeit ein und wählen Sie ihre Einheit.",
      "Geben Sie den Abwurfwinkel in Grad über der Horizontalen ein, von 0° (waagerecht) bis 90° (senkrecht nach oben).",
      "Geben Sie die Abwurfhöhe über dem Landeboden ein und wählen Sie Meter oder Fuß für Höhen und Strecken.",
      "Wählen Sie Erde, Mond, Mars oder einen eigenen Wert für die Schwerkraft und lesen Sie dann die Wurfweite und die übrigen Ergebnisse ab.",
    ],
    formulas: [
      { title: "Geschwindigkeitskomponenten", expression: "vₓ = v·cos θ, v_y = v·sin θ", explanation: "Der waagerechte Anteil bleibt konstant; der senkrechte Anteil ändert sich jede Sekunde um g." },
      { title: "Flugzeit", expression: "T = (v_y + √(v_y² + 2·g·h)) ÷ g", explanation: "Die positive Lösung von h + v_y·t − ½·g·t² = 0, die die Abwurfhöhe h einbezieht." },
      { title: "Wurfweite und Gipfel", expression: "R = vₓ·T, H = h + v_y² ÷ (2·g), t_Gipfel = v_y ÷ g", explanation: "Waagerechte Strecke, höchster Punkt über dem Boden und der Zeitpunkt, zu dem er erreicht wird." },
      { title: "Aufprall", expression: "v_Aufprall = √(vₓ² + v_y² + 2·g·h), Winkel = atan(√(v_y² + 2·g·h) ÷ vₓ)", explanation: "Geschwindigkeit und Winkel unter der Horizontalen, mit denen der Körper auf den Boden trifft." },
    ],
    examples: [
      {
        title: "Ein Ball, der mit 25 m/s unter 35° vom Boden geschossen wird",
        steps: ["vₓ = 25 cos 35° ≈ 20,479 m/s, v_y = 25 sin 35° ≈ 14,339 m/s", "T = 2 × 14,339 ÷ 9,80665 ≈ 2,924 s", "R = 20,479 × 2,924 ≈ 59,89 m; Gipfel ≈ 10,48 m"],
      },
      {
        title: "Ein Wurf mit 15 m/s unter 20°, abgeworfen 1,8 m über dem Boden",
        steps: ["vₓ ≈ 14,095 m/s, v_y ≈ 5,130 m/s", "T = (5,130 + √(5,130² + 2 × 9,80665 × 1,8)) ÷ 9,80665 ≈ 1,324 s", "R = 14,095 × 1,324 ≈ 18,66 m; der Aufprall erfolgt mit etwa 16,13 m/s"],
      },
      {
        title: "Ein Golfschlag mit 40 m/s unter 45° auf dem Mond",
        steps: ["Auf ebenem Boden gilt R = v² sin(2θ) ÷ g = 1.600 × 1 ÷ 1,62", "R ≈ 987,65 m, etwa sechsmal weiter als auf der Erde", "Flugzeit ≈ 34,92 s"],
      },
    ],
    assumptions: [
      "Luftwiderstand, Wind, Drall und Auftrieb werden vernachlässigt. Echte Flugbahnen sind kürzer und flacher, und ein echter Körper landet steiler, als dieses Modell vorhersagt.",
      "Die Schwerkraft ist konstant und wirkt senkrecht nach unten, und der Boden ist flach und waagerecht. Das gilt gut für alltägliche Entfernungen, nicht für weitreichende Ballistik.",
      "Für die Erde wird die Normfallbeschleunigung 9,80665 m/s² verwendet (per Definition exakt). Die tatsächliche Schwerebeschleunigung schwankt je nach geografischer Breite und Höhe um etwa ±0,3 %. Die Werte für Mond und Mars sind die mittleren Oberflächenwerte der NASA.",
      "Die Abwurfhöhe wird über dem Landepunkt gemessen. Eine Landung oberhalb des Abwurfpunkts wird nicht abgedeckt.",
    ],
    faqs: [
      { question: "Welcher Winkel ergibt die größte Wurfweite?", answer: "Vom Boden aus und ohne Luftwiderstand ergibt 45° die größte Wurfweite. Ein Abwurf aus der Höhe verschiebt den besten Winkel unter 45°, und der Luftwiderstand senkt ihn in der Praxis weiter." },
      { question: "Spielt die Masse des Körpers eine Rolle?", answer: "Ohne Luftwiderstand nicht: Jeder Körper fällt mit derselben Beschleunigung g, daher hängt die Bahn nur von Geschwindigkeit, Winkel, Höhe und Schwerkraft ab." },
      { question: "Warum ist die Aufprallgeschwindigkeit beim Abwurf aus der Höhe größer als die Abwurfgeschwindigkeit?", answer: "Der Körper fällt tiefer, als er gestiegen ist, daher fügt die Schwerkraft senkrechte Geschwindigkeit hinzu. Die waagerechte Geschwindigkeit ändert sich nie, sodass der Aufprallwinkel steiler ist als der Abwurfwinkel." },
    ],
    sourcesUsedFor: [
      "Zerlegung der Bewegung in unabhängige waagerechte und senkrechte Anteile; Wurfweite, Flugzeit, maximale Höhe und Aufprallgeschwindigkeit ohne Luftwiderstand.",
      "Schwerebeschleunigung an der Mondoberfläche, 1,62 m/s².",
      "Mittlere Schwerebeschleunigung an der Marsoberfläche, 3,73 m/s².",
    ],
  },
  text: {
    speed: "Abwurfgeschwindigkeit",
    speedUnit: "Geschwindigkeitseinheit",
    speedUnits: { ms: "Meter pro Sekunde (m/s)", kmh: "Kilometer pro Stunde (km/h)", mph: "Meilen pro Stunde (mph)", fts: "Fuß pro Sekunde (ft/s)" },
    angle: "Abwurfwinkel",
    angleHelp: "Von der Horizontalen aus nach oben gemessen: 0° ist ein waagerechter Wurf, 90° geht senkrecht nach oben.",
    height: "Abwurfhöhe",
    heightHelp: "Höhe über dem Boden, auf dem der Körper landet. Verwenden Sie 0 für einen Abwurf vom Boden.",
    lengthUnit: "Längeneinheit",
    lengthUnitHelp: "Gilt für die Abwurfhöhe und für die Strecken und Höhen in den Ergebnissen.",
    lengthUnits: { m: "Meter (m)", ft: "Fuß (ft)" },
    gravity: "Schwerkraft",
    gravityOptions: {
      earth: "Erde, Normwert (9,80665 m/s²)",
      moon: "Mond (1,62 m/s²)",
      mars: "Mars (3,73 m/s²)",
      custom: "Eigener Wert",
    },
    customGravity: "Eigene Schwerebeschleunigung",
    customGravityHelp: "Beschleunigung nach unten in Meter pro Sekunde zum Quadrat.",
    flatLaunch: "Ein waagerechter Abwurf vom Boden hebt nie ab. Erhöhen Sie den Winkel oder die Abwurfhöhe.",
    range: "Wurfweite",
    caption: "Waagerechte Strecke vom Abwurfpunkt bis zum Aufprall auf dem Boden.",
    flightTime: "Flugzeit",
    maxHeight: "Maximale Höhe über dem Boden",
    apexTime: "Zeit bis zum höchsten Punkt",
    impactSpeed: "Aufprallgeschwindigkeit",
    impactAngle: "Aufprallwinkel (unter der Horizontalen)",
    components: "Anfangsgeschwindigkeit, Komponenten (waagerecht, senkrecht)",
    componentsText: "{vx}, {vy}",
    tableCaption: "Position während des Flugs",
    tableColumns: { time: "Zeit", x: "Waagerechte Strecke", y: "Höhe" },
    verticalNote: "Bei 90° fliegt der Körper senkrecht nach oben und kommt am Abwurfpunkt wieder herunter, die Wurfweite ist also 0.",
    note: "Der Luftwiderstand wird vernachlässigt. Echte Flugbahnen sind kürzer und flacher, weil der Luftwiderstand den Körper abbremst, besonders bei hohen Geschwindigkeiten.",
  },
};

export default de;
