import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DnaConcentrationText } from "../text/en";

const de: CalculatorTranslation<DnaConcentrationText> = {
  content: {
    title: "DNA- und RNA-Konzentrationsrechner",
    shortTitle: "DNA-Konzentration",
    summary: "Rechnen Sie einen A260-Messwert in eine DNA- oder RNA-Konzentration in ng/µL um – mit Gesamtmenge sowie den Quotienten A260/A280 und A260/A230.",
    metaTitle: "DNA- und RNA-Konzentrationsrechner – A260 in ng/µL",
    metaDescription: "Rechnen Sie A260-Werte mit den Faktoren 50, 33 und 40 µg/mL in DNA- oder RNA-Konzentrationen in ng/µL um – mit Verdünnung, Gesamtmenge und Reinheit.",
    keywords: ["DNA-Konzentration berechnen", "RNA-Konzentration", "A260", "Nukleinsäurequantifizierung", "260/280-Verhältnis", "260/230-Verhältnis", "Photometer", "ng/µL"],
    intro: [
      "Nukleinsäuren absorbieren ultraviolettes Licht am stärksten bei etwa 260 nm. Im linearen Bereich eines Spektralphotometers ist die Absorption A260 proportional zur Konzentration, daher ergeben ein einzelner Messwert und ein Umrechnungsfaktor die Menge an DNA oder RNA in einer Probe.",
      "Die Standardfaktoren betragen 50 µg/mL pro A260-Einheit für doppelsträngige DNA, 33 für einzelsträngige DNA und 40 für RNA, bei 1 cm Schichtdicke. Dieser Rechner berücksichtigt Faktor, Verdünnung und Schichtdicke und ergänzt die Gesamtmenge sowie die Reinheitsquotienten A260/A280 und A260/A230.",
    ],
    howToUse: [
      "Wählen Sie die Probenart oder geben Sie einen eigenen Umrechnungsfaktor ein (zum Beispiel einen, der für ein kurzes Oligonukleotid berechnet wurde).",
      "Geben Sie den blindwertkorrigierten A260-Messwert und die Schichtdicke der Küvette oder des Geräts ein.",
      "Geben Sie den Verdünnungsfaktor ein, wenn Sie die Probe vor der Messung verdünnt haben.",
      "Ergänzen Sie optional A280, A230 und das Volumen der Stammlösung, um Reinheitsquotienten und die Gesamtmenge an Nukleinsäure zu erhalten.",
    ],
    formulas: [
      {
        title: "Konzentration",
        expression: "c (ng/µL) = A260 ÷ Schichtdicke (cm) × Faktor × Verdünnungsfaktor",
        explanation: "Der Faktor beträgt 50 für dsDNA, 33 für ssDNA und 40 für RNA, in µg/mL pro Absorptionseinheit bei 1 cm. 1 µg/mL entspricht 1 ng/µL.",
      },
      {
        title: "Gesamtmenge",
        expression: "Menge (µg) = c (ng/µL) × Volumen (µL) ÷ 1000",
        explanation: "Die Konzentration der unverdünnten Stammlösung mal ihr Volumen.",
      },
      {
        title: "Reinheitsquotienten",
        expression: "A260/A280 und A260/A230",
        explanation: "Für A260/A280 werden häufig etwa 1,8 (DNA) und 2,0 (RNA) genannt, für A260/A230 2,0–2,2. Das sind Faustregeln, keine strengen Grenzwerte.",
      },
    ],
    examples: [
      {
        title: "Verdünnte Plasmid-DNA in einer 1-cm-Küvette",
        steps: ["0,65 ÷ 1 cm × 50 µg/mL × 10 = 325 µg/mL = 325 ng/µL", "In 50 µL: 325 × 50 ÷ 1000 = 16,25 µg", "A260/A280 = 0,65 ÷ 0,36 ≈ 1,81"],
      },
      {
        title: "Eine RNA-Probe, 1 : 20 verdünnt",
        steps: ["0,42 × 40 µg/mL × 20 = 336 ng/µL", "A260/A280 = 0,42 ÷ 0,21 = 2,00", "A260/A230 = 0,42 ÷ 0,20 = 2,10", "In 30 µL: 336 × 30 ÷ 1000 = 10,08 µg"],
      },
      {
        title: "Einzelsträngige DNA in einer 2-mm-Küvette",
        steps: ["Auf 1 cm normieren: 0,18 ÷ 0,2 = 0,9", "0,9 × 33 µg/mL × 1 = 29,7 ng/µL"],
      },
    ],
    assumptions: [
      "Der A260-Wert ist blindwertkorrigiert und liegt im linearen Bereich des Geräts.",
      "Die Standardfaktoren sind Mittelwerte. Die Absorption eines kurzen Oligonukleotids hängt von seiner Basensequenz ab, daher ist ein sequenzspezifischer Faktor (als eigener Faktor eingegeben) genauer.",
      "Die Absorption erfasst alle Nukleinsäuren und freien Nukleotide. Verunreinigende RNA in einer DNA-Probe oder DNA in einer RNA-Probe erhöht das Ergebnis.",
      "Die Reinheitsquotienten sind häufig genannte Richtwerte, keine Grenzwerte für Bestehen oder Nichtbestehen. Sie verschieben sich mit pH-Wert und Ionenstärke der Lösung und mit dem verwendeten Leerwert.",
    ],
    faqs: [
      {
        question: "Warum ist ng/µL dasselbe wie µg/mL?",
        answer: "Bei beiden werden Zähler und Nenner der Einheit mit 1.000 multipliziert: Ein Mikrogramm sind 1.000 Nanogramm und ein Milliliter sind 1.000 Mikroliter. 325 µg/mL und 325 ng/µL beschreiben also dieselbe Konzentration.",
      },
      {
        question: "Was bedeutet ein niedriger A260/A280-Quotient?",
        answer: "Proteine und Phenol absorbieren bei etwa 280 nm, daher weist ein Quotient deutlich unter etwa 1,8 bei DNA oder 2,0 bei RNA oft auf solche Verunreinigungen hin. Über die Intaktheit der Nukleinsäure sagt der Quotient nichts aus.",
      },
      {
        question: "Brauche ich die Schichtdicke?",
        answer: "Nur wenn sie nicht 1 cm beträgt. Die Faktoren gelten für 1 cm. Viele Mikrovolumen-Geräte messen über eine kürzere Strecke, geben die Absorption aber bereits auf 1 cm normiert aus; dann behalten Sie den Standardwert 1 bei.",
      },
    ],
    sourcesUsedFor: [
      "Messung der Nukleinsäurekonzentration aus der Absorption bei 260 nm mit Standard-Umrechnungsfaktoren.",
      "Die häufig genannten Reinheitswerte von etwa 1,8 (DNA) und 2,0 (RNA) für A260/A280 sowie 2,0–2,2 für A260/A230.",
    ],
  },
  text: {
    type: "Probenart",
    types: {
      dsDNA: "Doppelsträngige DNA (50 µg/mL pro A260)",
      ssDNA: "Einzelsträngige DNA (33 µg/mL pro A260)",
      rna: "RNA (40 µg/mL pro A260)",
      custom: "Eigener Umrechnungsfaktor",
    },
    sampleNames: { dsDNA: "DNA", ssDNA: "DNA", rna: "RNA" },
    factor: "Umrechnungsfaktor",
    factorHelp: "µg/mL Nukleinsäure, die bei 260 nm über 1 cm eine Absorption von 1,0 ergeben, z. B. ein für ein bestimmtes Oligonukleotid berechneter Wert.",
    a260: "Absorption bei 260 nm (A260)",
    a260Help: "Der blindwertkorrigierte Messwert der gemessenen (ggf. verdünnten) Probe.",
    pathLength: "Schichtdicke",
    pathLengthHelp: "1 cm bei einer Standardküvette. Viele Mikrovolumen-Geräte geben bereits auf 1 cm normierte Werte aus; dann behalten Sie 1 bei.",
    dilution: "Verdünnungsfaktor",
    dilutionHelp: "Gesamtvolumen ÷ Probenvolumen. Bei 5 µL Probe in insgesamt 50 µL geben Sie 10 ein. Für eine unverdünnte Probe geben Sie 1 ein.",
    a280: "Absorption bei 280 nm (A280)",
    a230: "Absorption bei 230 nm (A230)",
    optionalHelp: "Optional. Dient zur Berechnung eines Reinheitsquotienten.",
    volume: "Probenvolumen",
    volumeHelp: "Optional. Volumen der unverdünnten Stammlösung, um die darin enthaltene Gesamtmenge zu schätzen.",
    result: "Nukleinsäurekonzentration",
    caption: "A260 ÷ Schichtdicke × Umrechnungsfaktor × Verdünnungsfaktor",
    ugPerMl: "Dieselbe Konzentration in µg/mL",
    factorUsed: "Verwendeter Umrechnungsfaktor",
    a260Normalized: "A260 pro 1 cm Schichtdicke",
    totalYield: "Gesamtmenge in {volume} µL",
    ratio280: "Quotient A260/A280",
    ratio230: "Quotient A260/A230",
    notes: {
      ratio280: {
        near: "Der A260/A280-Quotient von {ratio} liegt nahe am Wert von etwa {reference}, der häufig für reine {sample} genannt wird.",
        below: "Der A260/A280-Quotient von {ratio} liegt unter dem Wert von etwa {reference}, der häufig für reine {sample} genannt wird. Niedrigere Quotienten können auf Proteine, Phenol oder andere Stoffe hinweisen, die bei etwa 280 nm absorbieren.",
        above: "Der A260/A280-Quotient von {ratio} liegt über dem Wert von etwa {reference}, der häufig für reine {sample} genannt wird. Etwas höhere Werte sind üblich; bei DNA kann RNA in der Probe den Quotienten erhöhen.",
      },
      ratio280Generic: "Zum Vergleich: Für reine DNA werden häufig A260/A280-Werte von etwa 1,8 genannt, für reine RNA etwa 2,0.",
      ratio230: "Der A260/A230-Quotient von {ratio} liegt im oder über dem Bereich von 2,0–2,2, der häufig für reine Nukleinsäure genannt wird.",
      ratio230Low: "Der A260/A230-Quotient von {ratio} liegt unter dem Bereich von 2,0–2,2, der häufig für reine Nukleinsäure genannt wird. Niedrigere Werte können auf Salze, Phenol, Detergenzien oder andere Stoffe hinweisen, die bei etwa 230 nm absorbieren.",
      range: "Die Absorption pro cm liegt außerhalb von etwa 0,1–1,0, wo Messwerte eines Standard-Küvettenphotometers oft weniger zuverlässig sind. Prüfen Sie den angegebenen Messbereich Ihres Geräts und verdünnen oder konzentrieren Sie die Probe bei Bedarf.",
      general: "Die Absorption bei 260 nm erfasst alle Nukleinsäuren und freien Nukleotide gleichermaßen und kann daher DNA nicht von RNA unterscheiden. Die Reinheitsquotienten hängen außerdem vom pH-Wert und vom verwendeten Leerwert ab.",
    },
  },
};

export default de;
