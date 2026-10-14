import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { KineticEnergyText } from "../text/en";

const de: CalculatorTranslation<KineticEnergyText> = {
  content: {
    title: "Rechner für kinetische Energie",
    shortTitle: "Kinetische Energie",
    summary: "Berechnen Sie die kinetische Energie eines bewegten Körpers aus seiner Masse und Geschwindigkeit.",
    metaTitle: "Rechner für kinetische Energie – E = ½mv²",
    metaDescription:
      "Berechnen Sie die kinetische Energie aus Masse und Geschwindigkeit in kg oder lb und m/s, km/h oder mph. Ergebnisse in Joule, Kilojoule und Wattstunden.",
    keywords: ["kinetische Energie berechnen", "Bewegungsenergie", "Ekin Formel", "Energie in Joule", "1/2 mv²", "Physik Rechner"],
    intro: [
      "Kinetische Energie ist die Energie, die ein Körper aufgrund seiner Bewegung besitzt. Sie wächst mit dem Quadrat der Geschwindigkeit: Doppelte Geschwindigkeit bedeutet vierfache Energie.",
      "Geben Sie Masse und Geschwindigkeit in den Einheiten ein, die Ihnen vorliegen.",
    ],
    howToUse: [
      "Geben Sie die Masse ein und wählen Sie Kilogramm oder Pfund.",
      "Geben Sie die Geschwindigkeit ein und wählen Sie m/s, km/h oder mph.",
      "Lesen Sie die kinetische Energie in Joule und weiteren Einheiten ab.",
    ],
    formulas: [{ title: "Kinetische Energie", expression: "KE = ½ × m × v²", explanation: "m in Kilogramm, v in Metern pro Sekunde, KE in Joule." }],
    examples: [
      { title: "1.000 kg bei 20 m/s", steps: ["KE = 0,5 × 1.000 × 20²", "= 200.000 J"] },
      { title: "Auto mit 1.500 kg bei 100 km/h", steps: ["100 km/h ≈ 27,78 m/s", "KE = 0,5 × 1.500 × 27,78² ≈ 578.704 J"] },
    ],
    assumptions: [
      "Es wird die klassische Mechanik verwendet, die weit unterhalb der Lichtgeschwindigkeit genau ist.",
      "Rotationsenergie (etwa von Rädern) ist nicht enthalten.",
    ],
    faqs: [
      {
        question: "Warum ist die Geschwindigkeit wichtiger als die Masse?",
        answer: "Die kinetische Energie hängt vom Quadrat der Geschwindigkeit ab. Von 50 auf 100 km/h vervierfacht sich die Energie.",
      },
      {
        question: "In welcher Einheit wird kinetische Energie gemessen?",
        answer: "In Joule (J). Ein Joule ist ein Kilogramm mal Quadratmeter pro Quadratsekunde.",
      },
      {
        question: "Kann kinetische Energie negativ sein?",
        answer: "Nein. Die Masse ist positiv und die Geschwindigkeit wird quadriert, daher ist die kinetische Energie null oder positiv.",
      },
    ],
    sourcesUsedFor: ["Definition KE = ½mv².", "Exakte Umrechnungsfaktoren für Pfund, km/h und mph."],
  },
  text: {
    mass: "Masse",
    massUnit: "Masseeinheit",
    massUnits: { kg: "Kilogramm (kg)", lb: "Pfund (lb)" },
    velocity: "Geschwindigkeit",
    velocityUnit: "Geschwindigkeitseinheit",
    velocityUnits: { "m/s": "Meter pro Sekunde (m/s)", "km/h": "Kilometer pro Stunde (km/h)", mph: "Meilen pro Stunde (mph)" },
    energy: "Kinetische Energie",
    kj: "In Kilojoule",
    wh: "In Wattstunden",
    mps: "Geschwindigkeit in m/s",
    note: "Klassische (nichtrelativistische) kinetische Energie, genau für alltägliche Geschwindigkeiten.",
  },
};

export default de;
