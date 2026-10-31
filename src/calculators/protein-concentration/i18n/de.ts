import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProteinConcentrationText } from "../text/en";

const de: CalculatorTranslation<ProteinConcentrationText> = {
  content: {
    title: "Proteinkonzentrationsrechner (A280)",
    shortTitle: "Proteinkonzentration",
    summary: "Rechnen Sie einen A280-Messwert mit dem Lambert-Beer-Gesetz in eine Proteinkonzentration in mg/mL und µM um – aus einem molaren oder massenbezogenen Extinktionskoeffizienten.",
    metaTitle: "Proteinkonzentrationsrechner – A280 in mg/mL",
    metaDescription: "Rechnen Sie A280-Werte mit einem molaren oder massenbezogenen Extinktionskoeffizienten in mg/mL und µM um oder schätzen Sie ε aus Trp, Tyr und Cystinen.",
    keywords: ["Proteinkonzentration berechnen", "A280", "Extinktionskoeffizient", "Lambert-Beer-Gesetz", "molarer Extinktionskoeffizient", "Proteinbestimmung", "mg/mL", "Tryptophan Tyrosin"],
    intro: [
      "Proteine absorbieren ultraviolettes Licht um 280 nm, vor allem wegen der aromatischen Aminosäuren Tryptophan und Tyrosin, mit einem kleinen Beitrag von Disulfidbrücken (Cystinen). Nach dem Lambert-Beer-Gesetz ist die Absorption proportional zur Konzentration, zur Schichtdicke und zu einem Extinktionskoeffizienten, der für jedes Protein spezifisch ist.",
      "Dieser Rechner wandelt einen A280-Messwert in eine Konzentration um. Sie können einen molaren Extinktionskoeffizienten ε mit der Molekülmasse angeben, einen massenbezogenen Extinktionskoeffizienten (die Absorption einer Lösung mit 1 mg/mL) oder die Anzahl von Trp, Tyr und Cystinen in der Sequenz, um ε zu schätzen.",
    ],
    howToUse: [
      "Wählen Sie, wie Sie den Extinktionskoeffizienten angeben.",
      "Geben Sie den blindwertkorrigierten A280-Wert, die Schichtdicke und den Verdünnungsfaktor ein, falls Sie die Probe vor der Messung verdünnt haben.",
      "Geben Sie ε und die Molekülmasse, den massenbezogenen Extinktionskoeffizienten oder die Anzahl der Tryptophane, Tyrosine und Disulfidbrücken sowie die Molekülmasse ein.",
      "Geben Sie optional das Volumen der Stammlösung ein, um die Gesamtproteinmenge zu erhalten.",
    ],
    formulas: [
      {
        title: "Lambert-Beer-Gesetz",
        expression: "c (M) = A × Verdünnung ÷ (ε × l)",
        explanation: "A ist die gemessene Absorption, ε der molare Extinktionskoeffizient in M⁻¹ cm⁻¹ und l die Schichtdicke in cm.",
      },
      {
        title: "Massenkonzentration",
        expression: "c (mg/mL) = c (M) × MW (g/mol)",
        explanation: "Mol pro Liter mal Gramm pro Mol ergibt Gramm pro Liter, was Milligramm pro Milliliter entspricht.",
      },
      {
        title: "Massenbezogener Extinktionskoeffizient",
        expression: "c (mg/mL) = A × Verdünnung ÷ (E0.1% × l), mit E0.1% = ε ÷ MW",
        explanation: "E0.1% ist die Absorption einer Lösung mit 1 mg/mL (0,1 %) bei 1 cm Schichtdicke.",
      },
      {
        title: "Geschätztes ε (Pace et al. 1995)",
        expression: "ε₂₈₀ = 5.500 × nTrp + 1.490 × nTyr + 125 × nCystin",
        explanation: "In M⁻¹ cm⁻¹, für ein gefaltetes Protein in Wasser. Ein Cystin ist eine Disulfidbrücke zwischen zwei Cysteinen.",
      },
    ],
    examples: [
      {
        title: "Aus einem bekannten molaren Extinktionskoeffizienten",
        steps: [
          "c = 0,72 ÷ (43.824 × 1) = 1,643 × 10⁻⁵ M = 16,43 µM.",
          "mg/mL = 1,643 × 10⁻⁵ mol/L × 66.463 g/mol = 1,092 g/L = 1,092 mg/mL.",
          "In 2 mL: 1,092 × 2 ≈ 2,18 mg.",
        ],
      },
      {
        title: "ε aus der Sequenz schätzen",
        steps: [
          "ε = 5.500 × 6 + 1.490 × 3 + 125 × 4 = 37.970 M⁻¹ cm⁻¹.",
          "c = 0,5 ÷ 37.970 = 1,317 × 10⁻⁵ M = 13,17 µM.",
          "mg/mL = 1,317 × 10⁻⁵ × 14.307 ≈ 0,1884 mg/mL.",
        ],
      },
      {
        title: "Mit massenbezogenem Extinktionskoeffizienten, kurzer Schichtdicke und Verdünnung",
        steps: ["Verdünnung berücksichtigen: 0,88 × 4 = 3,52.", "mg/mL = 3,52 ÷ (1,45 × 0,5 cm) ≈ 4,855 mg/mL."],
      },
    ],
    assumptions: [
      "Der A280-Wert ist gegen denselben Puffer blindwertkorrigiert und liegt im linearen Bereich des Geräts. Viele Spektralphotometer verlieren bei hoher Absorption ihre Linearität, daher sollten sehr konzentrierte Proben verdünnt werden.",
      "Der Extinktionskoeffizient gilt für Ihr Protein in seinem Puffer. Schätzungen aus der Aminosäurezusammensetzung sind für Proteine mit Tryptophan recht zuverlässig, für Proteine ohne Tryptophan weniger; ε zu messen ist besser, als es vorherzusagen.",
      "Alle Substanzen, die bei 280 nm absorbieren, werden mitgezählt, darunter Nukleinsäuren, manche Puffer und von Aggregaten gestreutes Licht. Sie machen das Ergebnis zu hoch.",
      "Der Verdünnungsfaktor wird vor der Berechnung der Konzentration auf die Absorption angewendet, das Ergebnis gilt also für die unverdünnte Stammlösung.",
    ],
    faqs: [
      {
        question: "Warum ist mg/mL gleich g/L?",
        answer: "Ein Milliliter ist ein Tausendstel Liter und ein Milligramm ein Tausendstel Gramm, die beiden Tausendstel heben sich also auf. Deshalb ergibt die Molarität (mol/L) mal die Molekülmasse (g/mol) direkt mg/mL.",
      },
      {
        question: "Was tun, wenn ich den Extinktionskoeffizienten nicht kenne?",
        answer: "Wenn Sie die Sequenz kennen, zählen Sie die Tryptophane, Tyrosine und Disulfidbrücken und verwenden Sie den Schätzmodus. Für ein unbekanntes Gemisch wird manchmal ein massenbezogener Extinktionskoeffizient von etwa 1,0 als grobe Richtgröße verwendet, doch das Ergebnis kann um einen großen Faktor abweichen.",
      },
      {
        question: "Soll ich Cysteine oder Cystine zählen?",
        answer: "Cystine: Jede Disulfidbrücke zwischen zwei Cysteinen zählt einmal. Freie Cysteine (reduzierte Thiole) absorbieren bei 280 nm sehr wenig. Für ein vollständig reduziertes Protein geben Sie 0 Cystine ein.",
      },
    ],
    sourcesUsedFor: [
      "Die Schätzung ε₂₈₀ = 5.500 × Trp + 1.490 × Tyr + 125 × Cystin für ein gefaltetes Protein in Wasser und ihre geringere Zuverlässigkeit bei Proteinen ohne Tryptophan.",
      "Die Berechnung der Konzentration aus A280 mit einem massenbezogenen Extinktionskoeffizienten und der grobe Richtwert, dass eine Proteinlösung mit 1 mg/mL bei 1 cm einen A280 von etwa 1,0 ergibt.",
    ],
  },
  text: {
    mode: "Extinktionskoeffizient",
    modes: {
      molar: "Molares ε (M⁻¹ cm⁻¹) und Molekülmasse",
      mass: "Massenbezogener Extinktionskoeffizient E0.1% (1 mg/mL)",
      residues: "ε aus der Anzahl von Trp, Tyr und Cystinen schätzen",
    },
    a280: "Absorption bei 280 nm (A280)",
    a280Help: "Der blindwertkorrigierte Messwert der gemessenen (gegebenenfalls verdünnten) Probe.",
    pathLength: "Schichtdicke",
    pathLengthHelp: "1 cm bei einer Standardküvette. Lassen Sie 1 stehen, wenn Ihr Gerät die Absorption bereits auf 1 cm normiert ausgibt.",
    dilution: "Verdünnungsfaktor",
    dilutionHelp: "Gesamtvolumen ÷ Probenvolumen, wenn Sie die Probe vor der Messung verdünnt haben. Geben Sie 1 ein, wenn unverdünnt.",
    epsilon: "Molarer Extinktionskoeffizient ε",
    epsilonHelp: "Bei 280 nm, in M⁻¹ cm⁻¹, zum Beispiel aus der Proteinsequenz oder einem Datenbankeintrag.",
    mw: "Molekülmasse",
    mwHelp: "In Dalton (g/mol). 1 kDa = 1.000 Da.",
    mwOptional: "Molekülmasse (optional)",
    mwOptionalHelp: "Optional, in Dalton (g/mol). Wird für die molare Konzentration (µM) benötigt.",
    e01: "Massenbezogener Extinktionskoeffizient E0.1%",
    e01Help: "Die Absorption einer Lösung mit 1 mg/mL bei 280 nm und 1 cm. Etwa 1,0 ist ein üblicher grober Wert für unbekannte Proteine.",
    trp: "Tryptophanreste (Trp, W)",
    tyr: "Tyrosinreste (Tyr, Y)",
    cystine: "Cystine (Disulfidbrücken)",
    cystineHelp: "Die Anzahl der Disulfidbrücken, die jeweils zwei Cysteine verbinden. Freie Cysteine absorbieren bei 280 nm kaum.",
    volume: "Probenvolumen",
    volumeHelp: "Optional. Volumen der unverdünnten Stammlösung, um die Gesamtproteinmenge zu erhalten.",
    errors: {
      noChromophores: "Ohne Trp, Tyr oder Cystin ist ε bei 280 nm null, und die Konzentration lässt sich nicht berechnen. Verwenden Sie eine andere Methode.",
    },
    result: "Proteinkonzentration",
    caption: "A280 × Verdünnung ÷ (ε × Schichtdicke)",
    micromolar: "Molare Konzentration",
    totalMass: "Protein gesamt in {volume} mL",
    epsilonUsed: "Verwendetes molares ε",
    e01Used: "Verwendeter massenbezogener Extinktionskoeffizient E0.1%",
    a280Normalized: "A280 pro 1 cm Schichtdicke (wie gemessen)",
    notes: {
      range: "Die gemessene Absorption pro cm liegt über etwa 1,5. Viele Spektralphotometer sind bei hoher Absorption nicht mehr linear; prüfen Sie daher den Messbereich Ihres Geräts und verdünnen Sie die Probe gegebenenfalls.",
      low: "Die gemessene Absorption pro cm liegt unter etwa 0,1, wo Messwerte im Verhältnis zu Rauschen und Blindwertfehlern oft ungenauer sind.",
      pace: "ε = 5.500 × Trp + 1.490 × Tyr + 125 × Cystin ist eine Schätzung für ein gefaltetes Protein in Wasser (Pace et al., 1995). Für Proteine ohne Tryptophan ist sie weniger zuverlässig.",
      noTrp: "Dieses Protein enthält kein Tryptophan, daher ist das geschätzte ε weniger zuverlässig.",
      general: "A280 erfasst jede Substanz, die bei 280 nm absorbiert, darunter Nukleinsäuren und andere Verunreinigungen, und setzt voraus, dass der Extinktionskoeffizient für Ihr Protein stimmt.",
    },
  },
};

export default de;
