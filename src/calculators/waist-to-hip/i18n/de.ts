import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WaistToHipText } from "../text/en";

const de: CalculatorTranslation<WaistToHipText> = {
  content: {
    title: "Rechner für das Taille-Hüft-Verhältnis",
    shortTitle: "Taille-Hüft-Verhältnis",
    summary: "Teilen Sie Ihren Taillen- durch Ihren Hüftumfang, um das Taille-Hüft-Verhältnis zu erhalten, und vergleichen Sie es mit dem WHO-Grenzwert für Frauen oder Männer.",
    metaTitle: "Taille-Hüft-Verhältnis – WHR und WHO-Grenzwert",
    metaDescription: "Berechnen Sie Ihr Taille-Hüft-Verhältnis aus Taillen- und Hüftumfang in cm oder Zoll und vergleichen Sie es mit dem WHO-Grenzwert für Frauen und Männer.",
    keywords: ["Taille-Hüft-Verhältnis", "WHR berechnen", "Waist-to-Hip-Ratio", "Taillenumfang", "Bauchfett", "Körperform", "WHO Taille Hüfte"],
    intro: [
      "Das Taille-Hüft-Verhältnis (englisch Waist-to-Hip Ratio, WHR) vergleicht den Umfang Ihrer Taille mit dem Ihrer Hüfte. Ein höheres Verhältnis bedeutet, dass mehr Körperfett am Bauch sitzt, was die Forschung mit einem höheren Risiko für Typ-2-Diabetes und Herzerkrankungen in Verbindung gebracht hat.",
      "Geben Sie beide Maße in derselben Einheit ein, um Ihr Verhältnis zu erhalten. Der Rechner vergleicht es dann mit dem Grenzwert aus einer Expertenkonsultation der WHO: 0,90 für Männer und 0,85 für Frauen.",
    ],
    howToUse: [
      "Wählen Sie Zentimeter oder Zoll. Beide Maße müssen dieselbe Einheit haben.",
      "Messen Sie die Taille in der Mitte zwischen der untersten Rippe und dem oberen Rand des Hüftknochens, am Ende einer normalen Ausatmung.",
      "Messen Sie die Hüfte an der breitesten Stelle des Gesäßes; halten Sie das Maßband waagerecht und anliegend, aber nicht straff.",
      "Wählen Sie weiblich oder männlich, um den Grenzwert festzulegen, und lesen Sie Ihr Verhältnis ab.",
    ],
    formulas: [
      { title: "Taille-Hüft-Verhältnis", expression: "WHR = Taillenumfang ÷ Hüftumfang", explanation: "Die Einheiten kürzen sich heraus, daher ist das Verhältnis in Zentimetern und Zoll gleich." },
      {
        title: "WHO-Grenzwert",
        expression: "WHR ≥ 0,90 (Männer)   ·   WHR ≥ 0,85 (Frauen)",
        explanation: "Ab diesen Werten beschreibt die WHO-Expertenkonsultation das Risiko für Komplikationen des Stoffwechsels als deutlich erhöht.",
      },
    ],
    examples: [
      {
        title: "Frau, Taille 82 cm und Hüfte 100 cm",
        steps: ["WHR = 82 ÷ 100 = 0,82", "Der WHO-Grenzwert für Frauen ist 0,85", "0,82 liegt unter dem Grenzwert"],
      },
      {
        title: "Mann, Taille 97 cm und Hüfte 101 cm",
        steps: ["WHR = 97 ÷ 101 ≈ 0,96", "Der WHO-Grenzwert für Männer ist 0,90", "0,96 liegt auf oder über dem Grenzwert"],
      },
      {
        title: "Frau, in Zoll gemessen: Taille 34 in und Hüfte 40 in",
        steps: ["WHR = 34 ÷ 40 = 0,85", "Der Grenzwert für Frauen ist 0,85 oder mehr", "Das Verhältnis liegt genau auf dem Grenzwert"],
      },
    ],
    assumptions: [
      "Dieses Ergebnis ist eine Schätzung, keine medizinische Beratung oder Diagnose, und dieser Rechner wurde nicht fachlich geprüft. Sprechen Sie mit medizinischem Fachpersonal über Ihre Gesundheitsrisiken.",
      "Die Messstellen folgen dem WHO-Protokoll: die Taille in der Mitte zwischen dem Unterrand der untersten Rippe und dem oberen Rand des Beckenkamms, die Hüfte an der breitesten Stelle des Gesäßes. Wer an anderen Stellen misst, verändert das Verhältnis.",
      "Die Grenzwerte 0,90 und 0,85 sind allgemeine Bezugspunkte aus der WHO-Expertenkonsultation. Geeignete Grenzwerte unterscheiden sich je nach Bevölkerungsgruppe und ethnischer Herkunft und sind nicht für Kinder oder während der Schwangerschaft gedacht.",
      "Das Verhältnis wird vor dem Vergleich mit dem Grenzwert auf zwei Dezimalstellen gerundet.",
    ],
    faqs: [
      {
        question: "Warum ist das Taille-Hüft-Verhältnis wichtig?",
        answer: "Es ist ein einfacher Hinweis darauf, wo Körperfett gespeichert ist. Fett am Bauch hängt enger mit Stoffwechselproblemen zusammen als Fett an Hüften und Oberschenkeln, und das Verhältnis bildet diesen Unterschied ab.",
      },
      {
        question: "Ist das Taille-Hüft-Verhältnis besser als der BMI?",
        answer: "Sie messen Verschiedenes. Der BMI setzt das Gewicht ins Verhältnis zur Größe, sagt aber nichts darüber, wo Fett sitzt, während das Taille-Hüft-Verhältnis das Gesamtgewicht nicht berücksichtigt. Fachleute betrachten oft mehrere Maße zusammen.",
      },
      {
        question: "Spielt es eine Rolle, ob ich Zentimeter oder Zoll verwende?",
        answer: "Nein. Das Verhältnis hat keine Einheit, Sie erhalten also in beiden Fällen dasselbe Ergebnis, solange beide Maße dieselbe Einheit haben.",
      },
    ],
    sourcesUsedFor: ["Die Grenzwerte des Taille-Hüft-Verhältnisses von 0,90 für Männer und 0,85 für Frauen für ein deutlich erhöhtes Risiko von Komplikationen des Stoffwechsels sowie die Messstellen."],
  },
  text: {
    unit: "Einheit",
    units: { cm: "Zentimeter (cm)", in: "Zoll (in)" },
    waist: "Taillenumfang",
    waistHelp: "Messen Sie in der Mitte zwischen der untersten Rippe und dem oberen Rand des Hüftknochens (Beckenkamm), am Ende einer normalen Ausatmung.",
    hip: "Hüftumfang",
    hipHelp: "Messen Sie um die breiteste Stelle des Gesäßes, mit waagerechtem Maßband.",
    sex: "Geschlecht",
    sexHelp: "Wird nur verwendet, um den WHO-Grenzwert zu wählen, der sich für Frauen und Männer unterscheidet.",
    sexes: { female: "Weiblich", male: "Männlich" },
    errors: {
      implausible: "Ein Taille-Hüft-Verhältnis von {ratio} liegt außerhalb des bei Erwachsenen beobachteten Bereichs. Prüfen Sie, ob beide Maße dieselbe Einheit haben.",
    },
    ratio: "Taille-Hüft-Verhältnis",
    caption: "Taille {waist} ÷ Hüfte {hip}.",
    comparison: "Im Vergleich zum WHO-Grenzwert",
    atOrAbove: "Auf oder über dem Grenzwert",
    below: "Unter dem Grenzwert",
    cutoff: "WHO-Grenzwert bei {sex}",
    waistAtCutoff: "Taillenumfang, der den Grenzwert erreichen würde",
    notes: {
      above: "Ein Verhältnis von {cutoff} oder mehr bei {sex} ist der Wert, den die WHO-Expertenkonsultation mit einem deutlich erhöhten Risiko für Komplikationen des Stoffwechsels verbunden hat. Es ist ein Screening-Merkmal, keine Diagnose.",
      below: "Das Verhältnis liegt unter dem WHO-Grenzwert von {cutoff} bei {sex}. Auch andere Faktoren wie Gewicht, Bewegung, Blutdruck und familiäre Vorgeschichte beeinflussen das Gesundheitsrisiko.",
      rounding: "Das Verhältnis wird vor dem Vergleich mit dem Grenzwert auf zwei Dezimalstellen gerundet.",
      advice: "Dies ist eine Schätzung, keine medizinische Beratung. Sprechen Sie mit medizinischem Fachpersonal über Ihre Ergebnisse.",
    },
    sexNames: { female: "Frauen", male: "Männern" },
  },
};

export default de;
