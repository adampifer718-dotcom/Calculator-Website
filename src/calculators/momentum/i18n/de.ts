import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MomentumText } from "../text/en";

const de: CalculatorTranslation<MomentumText> = {
  content: {
    title: "Impulsrechner",
    shortTitle: "Impuls",
    summary: "Lösen Sie p = mv nach Impuls, Masse oder Geschwindigkeit auf oder bestimmen Sie den Kraftstoß einer Kraft und die dadurch bewirkte Geschwindigkeitsänderung.",
    metaTitle: "Impulsrechner – p = mv und Kraftstoß J = FΔt",
    metaDescription: "Berechnen Sie Impuls, Masse oder Geschwindigkeit aus p = mv in metrischen oder US-Einheiten, mit kinetischer Energie, oder den Kraftstoß J = FΔt und Δv.",
    keywords: ["Impuls berechnen", "p = m · v", "Kraftstoß", "Impulssatz", "kg·m/s", "Newtonsekunde", "Geschwindigkeitsänderung", "Impulsänderung"],
    intro: [
      "Der Impuls gibt an, wie schwer es ist, einen bewegten Körper anzuhalten. Er ist Masse mal Geschwindigkeit, daher können ein langsamer Lastwagen und ein schneller Baseball beide viel davon haben. Weil er eine Richtung hat, kann der Impuls negativ sein, wenn die Bewegung in die andere Richtung geht.",
      "Im ersten Modus berechnen Sie Impuls, Masse oder Geschwindigkeit aus den beiden anderen Größen; das Ergebnis zeigt auch die kinetische Energie. Im Kraftstoß-Modus sehen Sie, was eine kurzzeitig wirkende Kraft bewirkt: Der Kraftstoß ist gleich der Impulsänderung und ergibt zusammen mit einer Masse die Geschwindigkeitsänderung.",
    ],
    howToUse: [
      "Wählen Sie Impuls (p = mv) oder Kraftstoß (J = FΔt).",
      "Für den Impuls wählen Sie die gesuchte Größe und geben die beiden anderen Werte mit ihren Einheiten ein. Verwenden Sie eine negative Geschwindigkeit oder einen negativen Impuls für eine Bewegung in Gegenrichtung.",
      "Für den Kraftstoß geben Sie die mittlere Kraft und ihre Einwirkdauer ein. Ergänzen Sie die Masse, wenn Sie die Geschwindigkeitsänderung wissen möchten.",
      "Lesen Sie das Ergebnis und die anderen Einheiten ab, darunter lb·ft/s und die kinetische Energie.",
    ],
    formulas: [
      { title: "Impuls", expression: "p = m × v", explanation: "In kg·m/s. Umgestellt: m = p ÷ v oder v = p ÷ m." },
      { title: "Kraftstoß", expression: "J = F × Δt = Δp", explanation: "Eine mittlere Kraft, die eine Zeit lang wirkt, ändert den Impuls genau um den Kraftstoß, in N·s (gleichbedeutend mit kg·m/s)." },
      { title: "Geschwindigkeitsänderung", expression: "Δv = J ÷ m", explanation: "Der Kraftstoß geteilt durch die Masse, auf die er wirkt." },
      { title: "Kinetische Energie", expression: "E_kin = p² ÷ (2m)", explanation: "Gleichwertig mit ½·m·v², in Joule." },
    ],
    examples: [
      {
        title: "Ein Baseball von 0,145 kg mit 40 m/s",
        steps: ["p = 0,145 kg × 40 m/s = 5,8 kg·m/s", "≈ 41,95 lb·ft/s; E_kin = 5,8² ÷ (2 × 0,145) = 116 J"],
      },
      {
        title: "Geschwindigkeit eines Eisläufers von 60 kg mit einem Impuls von 900 kg·m/s",
        steps: ["v = 900 ÷ 60 = 15 m/s", "15 m/s × 3,6 = 54 km/h"],
      },
      {
        title: "Ein Schuss mit 250 N über 0,02 s auf einen Ball von 0,16 kg",
        steps: ["J = 250 N × 0,02 s = 5 N·s", "Δv = 5 ÷ 0,16 = 31,25 m/s"],
      },
    ],
    assumptions: [
      "Bewegung und Kräfte verlaufen entlang einer Geraden; das Vorzeichen gibt die Richtung an. Bei Bewegungen in zwei oder drei Dimensionen wenden Sie die Formeln auf jede Komponente an.",
      "Im Kraftstoß-Modus ist die Kraft die mittlere Kraft über das Zeitintervall. Eine Kraft, die sich während des Stoßes ändert, ergibt denselben Kraftstoß wie ihr Mittelwert.",
      "Es gilt die klassische Mechanik, die für Geschwindigkeiten weit unterhalb der Lichtgeschwindigkeit genau ist.",
    ],
    faqs: [
      { question: "Was ist der Unterschied zwischen Impuls und kinetischer Energie?", answer: "Der Impuls (mv) ist ein Vektor und bleibt bei jedem Stoß erhalten. Die kinetische Energie (½mv²) hat keine Richtung und wird bei den meisten Stößen teilweise in Wärme und Schall umgewandelt." },
      { question: "Ist N·s dasselbe wie kg·m/s?", answer: "Ja. Ein Newton ist ein kg·m/s², eine Newtonsekunde also ein kg·m/s. Kraftstoß und Impuls haben dieselbe Einheit." },
      { question: "Warum verringern Airbags und Polster Verletzungen?", answer: "Sie verlängern den Bremsvorgang. Die Impulsänderung bleibt gleich, eine längere Zeit bedeutet also eine kleinere mittlere Kraft, denn F = Δp ÷ Δt." },
    ],
    sourcesUsedFor: [
      "Der Kraftstoß als Kraft mal Einwirkdauer und der Impulssatz J = Δp.",
      "Die resultierende Kraft als zeitliche Änderung des Impulses.",
    ],
  },
  text: {
    mode: "Berechnen",
    modes: { momentum: "Impuls (p = mv)", impulse: "Kraftstoß (J = FΔt)" },
    solve: "Gesucht",
    solveOptions: { momentum: "Impuls (p)", mass: "Masse (m)", velocity: "Geschwindigkeit (v)" },
    momentum: "Impuls (p)",
    momentumHelp: "In Kilogramm mal Meter pro Sekunde. Ein negativer Wert bedeutet eine Bewegung in Gegenrichtung.",
    mass: "Masse (m)",
    impulseMass: "Masse (optional)",
    impulseMassHelp: "Leer lassen, um nur den Kraftstoß zu erhalten. Mit einer Masse wird auch die Geschwindigkeitsänderung angezeigt.",
    massUnit: "Masseneinheit",
    massUnits: { kg: "Kilogramm (kg)", g: "Gramm (g)", lb: "Pfund (lb)", t: "Tonnen (t)" },
    velocity: "Geschwindigkeit (v)",
    velocityHelp: "Ein negativer Wert bedeutet eine Bewegung in Gegenrichtung.",
    velocityUnit: "Geschwindigkeitseinheit",
    velocityUnits: { ms: "Meter pro Sekunde (m/s)", kmh: "Kilometer pro Stunde (km/h)", mph: "Meilen pro Stunde (mph)", fts: "Fuß pro Sekunde (ft/s)" },
    unitHelp: "Für die gesuchte Größe ist dies die Einheit des Ergebnisses.",
    force: "Mittlere Kraft (F)",
    forceHelp: "Ein negativer Wert bedeutet, dass die Kraft in die Gegenrichtung zeigt.",
    forceUnit: "Krafteinheit",
    forceUnits: { N: "Newton (N)", lbf: "Pound-force (lbf)" },
    duration: "Einwirkdauer der Kraft (Δt)",
    zeroVelocity: "Bei der Berechnung der Masse darf die Geschwindigkeit nicht 0 sein, weil eine ruhende Masse keinen Impuls hat.",
    zeroMomentum: "Bei der Berechnung der Masse darf der Impuls nicht 0 sein.",
    signMismatch: "Impuls und Geschwindigkeit müssen dasselbe Vorzeichen haben, weil die Masse positiv ist.",
    results: { momentum: "Impuls", mass: "Masse", velocity: "Geschwindigkeit" },
    impulse: "Kraftstoß (J = Δp)",
    inUnit: "In {unit}",
    kineticEnergy: "Kinetische Energie (p² ÷ 2m)",
    deltaV: "Geschwindigkeitsänderung (Δv = J ÷ m)",
    impulseNote: "Der Kraftstoß ist gleich der Impulsänderung. Derselbe Kraftstoß kann von einer großen Kraft über kurze Zeit oder von einer kleinen Kraft über lange Zeit stammen.",
    note: "Der Impuls ist ein Vektor. Hier wird er entlang einer Linie gemessen, wobei das Vorzeichen die Richtung angibt.",
  },
};

export default de;
