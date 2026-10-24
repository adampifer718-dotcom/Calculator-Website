import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ForceText } from "../text/en";

const de: CalculatorTranslation<ForceText> = {
  content: {
    title: "Kraftrechner (F = ma)",
    shortTitle: "Kraft",
    summary: "Lösen Sie das zweite newtonsche Gesetz nach Kraft, Masse oder Beschleunigung auf – in Newton, Pound-force, Kilogramm, Pfund oder g.",
    metaTitle: "Kraftrechner (F = ma) – Kraft, Masse oder Beschleunigung",
    metaDescription: "Lösen Sie F = ma nach Kraft, Masse oder Beschleunigung auf. Mit N, kN, lbf oder dyn, kg, g, lb oder t und m/s², ft/s² oder g – Ergebnis in jeder Einheit.",
    keywords: ["Kraft berechnen", "F = m · a", "zweites newtonsches Gesetz", "Newton", "Pound-force", "Masse berechnen", "Beschleunigung berechnen", "resultierende Kraft"],
    intro: [
      "Das zweite newtonsche Gesetz verbindet drei Größen: die resultierende Kraft auf einen Körper, seine Masse und die daraus folgende Beschleunigung. Drücken Sie doppelt so stark, verdoppelt sich die Beschleunigung; drücken Sie etwas doppelt so Schweres mit derselben Kraft, beschleunigt es nur halb so stark.",
      "Wählen Sie die gesuchte Größe und geben Sie die beiden anderen ein. Der Rechner verarbeitet metrische und US-Einheiten, zeigt das Ergebnis in jeder Einheit seiner Art und gibt das Gewichtsäquivalent der Kraft an: die Masse, die unter Normfallbeschleunigung mit dieser Kraft auf eine Waage drücken würde.",
    ],
    howToUse: [
      "Wählen Sie, was berechnet werden soll: Kraft, Masse oder Beschleunigung.",
      "Geben Sie die beiden bekannten Werte ein und wählen Sie jeweils eine Einheit.",
      "Wählen Sie die gewünschte Einheit des Ergebnisses in der Einheitenliste der gesuchten Größe.",
      "Lesen Sie das Ergebnis, seine anderen Einheiten und das Gewichtsäquivalent der Kraft ab.",
    ],
    formulas: [
      { title: "Kraft", expression: "F = m × a", explanation: "Die resultierende Kraft ist Masse mal Beschleunigung. 1 N beschleunigt 1 kg mit 1 m/s²." },
      { title: "Masse", expression: "m = F ÷ a", explanation: "Teilen Sie die Kraft durch die Beschleunigung, die sie bewirkt." },
      { title: "Beschleunigung", expression: "a = F ÷ m", explanation: "Teilen Sie die resultierende Kraft durch die Masse." },
      { title: "Umrechnungsfaktoren", expression: "1 lbf = 0,45359237 kg × 9,80665 m/s² = 4,4482216152605 N; 1 dyn = 10⁻⁵ N; 1 g = 9,80665 m/s²", explanation: "Per Definition exakt. Das Gewichtsäquivalent ist |F| ÷ 9,80665 m/s²." },
    ],
    examples: [
      {
        title: "Kraft, um ein Auto mit 1.350 kg mit 2,8 m/s² zu beschleunigen",
        steps: ["F = 1.350 kg × 2,8 m/s² = 3.780 N", "3.780 N ÷ 1.000 = 3,78 kN"],
      },
      {
        title: "Masse einer Kiste, die ein Schub von 600 N mit 1,5 m/s² beschleunigt",
        steps: ["m = 600 N ÷ 1,5 m/s²", "= 400 kg"],
      },
      {
        title: "Beschleunigung eines 20-lb-Wagens, gezogen mit 30 lbf, in g",
        steps: ["30 lbf = 133,4466 N und 20 lb = 9,0718 kg", "a = 133,4466 ÷ 9,0718 ≈ 14,71 m/s²", "14,71 ÷ 9,80665 = 1,5 g, weil ein Pound-force die Gewichtskraft eines Pfunds unter Normfallbeschleunigung ist"],
      },
    ],
    assumptions: [
      "F ist die resultierende Kraft: die Vektorsumme aller Kräfte auf den Körper, einschließlich Reibung und Luftwiderstand. Das Werkzeug betrachtet Kraft und Beschleunigung entlang einer Linie, ein negativer Wert bedeutet also die Gegenrichtung.",
      "Die Masse ist konstant. Raketen, die Treibstoff verbrennen, oder andere Systeme, die Masse gewinnen oder verlieren, erfordern die Impulsform des Gesetzes.",
      "Es gilt die klassische Mechanik, die für Geschwindigkeiten weit unterhalb der Lichtgeschwindigkeit genau ist.",
      "Die Beschleunigungseinheit g und das Gewichtsäquivalent verwenden die Normfallbeschleunigung 9,80665 m/s². Die örtliche Schwerebeschleunigung weicht leicht ab.",
    ],
    faqs: [
      { question: "Was ist ein Newton?", answer: "Die SI-Einheit der Kraft. Ein Newton beschleunigt eine Masse von 1 kg mit 1 m/s². Auf der Erde wiegt ein Körper von 1 kg etwa 9,81 N." },
      { question: "Was ist der Unterschied zwischen Pfund und Pound-force?", answer: "Ein Pfund (lb) ist eine Masseneinheit; ein Pound-force (lbf) ist die Gewichtskraft eines Pfunds unter Normfallbeschleunigung, 4,4482216152605 N. Beide tragen denselben Namen, weshalb 1 lbf auf 1 lb genau 1 g ergibt." },
      { question: "Warum ist mein Ergebnis negativ?", answer: "Eine negative Kraft oder Beschleunigung zeigt in die Gegenrichtung der Richtung, die Sie als positiv gewählt haben, etwa eine Bremskraft entgegen der Fahrtrichtung." },
    ],
    sourcesUsedFor: [
      "Das zweite newtonsche Gesetz: Die resultierende äußere Kraft ist gleich Masse mal Beschleunigung.",
      "1 lbf = 4,4482216152605 N, abgeleitet aus dem Pfund und der Normfallbeschleunigung 9,80665 m/s².",
    ],
  },
  text: {
    solve: "Gesucht",
    solveOptions: { force: "Kraft (F)", mass: "Masse (m)", acceleration: "Beschleunigung (a)" },
    force: "Kraft (F)",
    forceHelp: "Resultierende Kraft. Ein negativer Wert bedeutet, dass sie in die Gegenrichtung zeigt.",
    forceUnit: "Krafteinheit",
    forceUnits: { N: "Newton (N)", kN: "Kilonewton (kN)", lbf: "Pound-force (lbf)", dyn: "Dyn (dyn)" },
    mass: "Masse (m)",
    massUnit: "Masseneinheit",
    massUnits: { kg: "Kilogramm (kg)", g: "Gramm (g)", lb: "Pfund (lb)", t: "Tonnen (t)" },
    acceleration: "Beschleunigung (a)",
    accelerationHelp: "Ein negativer Wert bedeutet, dass die Beschleunigung in die Gegenrichtung zeigt (Abbremsen).",
    accelerationUnit: "Beschleunigungseinheit",
    accelerationUnits: { ms2: "Meter pro Sekunde zum Quadrat (m/s²)", fts2: "Fuß pro Sekunde zum Quadrat (ft/s²)", g: "Normfallbeschleunigung (g = 9,80665 m/s²)" },
    unitHelp: "Für die gesuchte Größe ist dies die Einheit des Ergebnisses.",
    zeroAcceleration: "Bei der Berechnung der Masse darf die Beschleunigung nicht 0 sein.",
    zeroForce: "Bei der Berechnung der Masse darf die Kraft nicht 0 sein.",
    signMismatch: "Kraft und Beschleunigung müssen in dieselbe Richtung zeigen (dasselbe Vorzeichen haben), weil die Masse positiv ist.",
    results: { force: "Kraft", mass: "Masse", acceleration: "Beschleunigung" },
    inUnit: "In {unit}",
    weightKg: "Gewichtsäquivalent: Masse mit dieser Gewichtskraft unter Normfallbeschleunigung",
    weightLb: "Gewichtsäquivalent in Pfund",
    weightNote: "Das Gewichtsäquivalent ist |F| ÷ g₀ mit g₀ = 9,80665 m/s²: die Masse, die eine Waage auf der Erde unter dieser Kraft anzeigen würde.",
    note: "F ist die resultierende (gesamte) Kraft auf den Körper. Bei mehreren Kräften addieren Sie diese zuerst vektoriell.",
  },
};

export default de;
