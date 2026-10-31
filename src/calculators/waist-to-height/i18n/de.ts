import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WaistToHeightText } from "../text/en";

const de: CalculatorTranslation<WaistToHeightText> = {
  content: {
    title: "Rechner für das Taille-Größe-Verhältnis",
    shortTitle: "Taille-Größe-Verhältnis",
    summary: "Teilen Sie Ihren Taillenumfang durch Ihre Körpergröße, um das Taille-Größe-Verhältnis zu erhalten, und sehen Sie, in welchen NICE-Referenzbereich für Erwachsene es fällt.",
    metaTitle: "Taille-Größe-Verhältnis – WHtR und NICE-Bereiche",
    metaDescription: "Berechnen Sie Ihr Taille-Größe-Verhältnis in cm oder Zoll, vergleichen Sie es mit den NICE-Referenzbereichen für Erwachsene und sehen Sie die Taille bei halber Körpergröße.",
    keywords: ["Taille-Größe-Verhältnis", "WHtR berechnen", "Waist-to-Height-Ratio", "Taillenumfang", "Bauchfett", "Taille halbe Körpergröße", "NICE Taille Größe"],
    intro: [
      "Das Taille-Größe-Verhältnis (englisch Waist-to-Height Ratio, WHtR) ist Ihr Taillenumfang geteilt durch Ihre Körpergröße. Es ist eine einfache Möglichkeit abzuschätzen, wie viel Fett in der Körpermitte sitzt (zentrale Adipositas), was mit Typ-2-Diabetes, Bluthochdruck und Herzerkrankungen in Verbindung steht.",
      "Im Vereinigten Königreich empfiehlt NICE Erwachsenen mit einem BMI unter 35, dieses Verhältnis zusätzlich zum BMI zu verwenden, mit der einfachen Botschaft, die Taille unter der Hälfte der Körpergröße zu halten. Dieser Rechner zeigt Ihr Verhältnis, den NICE-Referenzbereich, in den es fällt, und den Taillenumfang, der einem Verhältnis von 0,5 entspricht.",
    ],
    howToUse: [
      "Wählen Sie Zentimeter oder Zoll. Verwenden Sie für beide Maße dieselbe Einheit.",
      "Messen Sie Ihre Taille in der Mitte zwischen der untersten Rippe und dem oberen Rand des Hüftknochens, nach normalem Ausatmen, mit waagerechtem, anliegendem Maßband.",
      "Messen Sie Ihre Körpergröße ohne Schuhe.",
      "Lesen Sie Ihr Verhältnis, den Referenzbereich und den Taillenumfang für ein Verhältnis von 0,5 ab.",
    ],
    formulas: [
      {
        title: "Taille-Größe-Verhältnis",
        expression: "WHtR = Taillenumfang ÷ Körpergröße",
        explanation: "Beide in derselben Einheit, daher kürzen sich die Einheiten heraus, und das Verhältnis ist in cm und Zoll gleich.",
      },
      {
        title: "NICE-Referenzbereiche für Erwachsene",
        expression: "0,4 bis 0,49: kein erhöhtes Gesundheitsrisiko\n0,5 bis 0,59: erhöhtes Gesundheitsrisiko\n0,6 oder mehr: hohes Gesundheitsrisiko",
        explanation: "Für Erwachsene mit einem BMI unter 35. Dies sind Referenzbereiche, keine Diagnose.",
      },
      {
        title: "Taille bei halber Körpergröße",
        expression: "Taille für ein Verhältnis von 0,5 = Körpergröße ÷ 2",
        explanation: "Der Schwellenwert hinter dem Rat, die Taille unter der Hälfte der Körpergröße zu halten.",
      },
    ],
    examples: [
      {
        title: "Taille 84 cm, Körpergröße 172 cm",
        steps: ["WHtR = 84 ÷ 172 ≈ 0,49", "0,49 liegt im Bereich 0,4 bis 0,49", "Die halbe Körpergröße ist 172 ÷ 2 = 86 cm, die Taille liegt also 2 cm darunter"],
      },
      {
        title: "Taille 38 in, Körpergröße 68 in",
        steps: ["WHtR = 38 ÷ 68 ≈ 0,56", "0,56 liegt im Bereich 0,5 bis 0,59", "Die halbe Körpergröße ist 34 in, die Taille liegt also 4 in darüber"],
      },
      {
        title: "Taille 104 cm, Körpergröße 168 cm",
        steps: ["WHtR = 104 ÷ 168 ≈ 0,62", "0,62 liegt im Bereich 0,6 oder mehr", "Ein Verhältnis von 0,6 entspräche einer Taille von 168 × 0,6 = 100,8 cm"],
      },
    ],
    assumptions: [
      "Das Ergebnis ist eine Schätzung, keine medizinische Beratung oder Diagnose, und dieser Rechner wurde noch nicht fachlich geprüft. Sprechen Sie mit einer Ärztin, einem Arzt oder Pflegefachpersonal darüber, was Ihre Maße für Sie bedeuten.",
      "Die Bereiche stammen aus der NICE-Leitlinie für Erwachsene mit einem BMI unter 35, unabhängig von Geschlecht oder ethnischer Zugehörigkeit, und dienen nur als Referenz. NICE verwendet sie nicht für Erwachsene mit einem BMI von 35 oder mehr, weil deren Verhältnis fast immer hoch ist.",
      "Der Rechner verwendet die Bereiche für Erwachsene. Er ist ohne ärztlichen Rat nicht für Kinder und Jugendliche oder während der Schwangerschaft gedacht.",
      "Kleine Unterschiede darin, wo und wie straff das Maßband anliegt, verändern das Verhältnis. Messen Sie daher jedes Mal auf dieselbe Weise, wenn Sie es verfolgen.",
    ],
    faqs: [
      {
        question: "Was ist ein gesundes Taille-Größe-Verhältnis?",
        answer: "NICE beschreibt ein Verhältnis von 0,4 bis 0,49 bei Erwachsenen mit einem BMI unter 35 als kein erhöhtes Gesundheitsrisiko. Die einfache Regel lautet, die Taille unter der Hälfte der Körpergröße zu halten.",
      },
      {
        question: "Worin unterscheidet es sich vom BMI?",
        answer: "Der BMI vergleicht Gewicht mit Körpergröße und kann nicht erkennen, wo Fett gespeichert ist. Das Taille-Größe-Verhältnis betrachtet die Taille und spiegelt daher Fett in der Körpermitte wider, das enger mit einigen Gesundheitsrisiken verknüpft ist. NICE empfiehlt, beide zu verwenden.",
      },
      {
        question: "Wie verhält es sich zum Taille-Hüft-Verhältnis?",
        answer: "Beide betrachten Fett an der Taille. Das Taille-Hüft-Verhältnis teilt durch den Hüftumfang und hat unterschiedliche Grenzwerte für Frauen und Männer, während das Taille-Größe-Verhältnis durch die Körpergröße teilt und für alle dieselben Bereiche verwendet.",
      },
    ],
    sourcesUsedFor: [
      "Die Bereiche des Taille-Größe-Verhältnisses für Erwachsene (0,4 bis 0,49, 0,5 bis 0,59, 0,6 oder mehr) und ihre Anwendung bei Erwachsenen mit einem BMI unter 35.",
      "Die öffentliche Botschaft, die Taille unter der Hälfte der Körpergröße zu halten (ein Verhältnis unter 0,5).",
    ],
  },
  text: {
    unit: "Einheit",
    units: { cm: "Zentimeter (cm)", in: "Zoll (in)" },
    waist: "Taillenumfang",
    waistHelp: "Messen Sie in der Mitte zwischen dem Unterrand der untersten Rippe und dem oberen Rand des Hüftknochens, nach normalem Ausatmen.",
    height: "Körpergröße",
    heightHelp: "Ihre Körpergröße im Stehen ohne Schuhe, in derselben Einheit wie die Taille.",
    errors: {
      implausible: "Ein Taille-Größe-Verhältnis von {ratio} ist sehr unwahrscheinlich. Prüfen Sie, ob beide Maße dieselbe Einheit haben.",
    },
    ratio: "Taille-Größe-Verhältnis",
    caption: "Taille {waist} ÷ Körpergröße {height}.",
    band: "NICE-Referenzbereich für Erwachsene (nur zur Orientierung, keine Diagnose)",
    bands: {
      below: "Unter 0,4: unterhalb des niedrigsten Bereichs der Leitlinie",
      healthy: "0,4 bis 0,49: kein erhöhtes Gesundheitsrisiko",
      increased: "0,5 bis 0,59: erhöhtes Gesundheitsrisiko",
      high: "0,6 oder mehr: hohes (weiter erhöhtes) Gesundheitsrisiko",
    },
    waistHalf: "Taille bei einem Verhältnis von 0,5 (halbe Körpergröße)",
    waistHigh: "Taille bei einem Verhältnis von 0,6",
    difference: "Ihre Taille im Vergleich zur halben Körpergröße",
    notes: {
      rounding: "Der Bereich wird anhand des auf zwei Dezimalstellen gerundeten Verhältnisses gewählt, wie angezeigt.",
      below: "Die NICE-Bereiche beginnen bei 0,4. Ein niedrigeres Verhältnis kann auf einen Mess- oder Einheitenfehler oder einen sehr schlanken Körperbau hindeuten; es ist kein eigener Bereich.",
      scope: "NICE verwendet diese Bereiche für Erwachsene mit einem BMI unter 35, unabhängig von Geschlecht oder ethnischer Zugehörigkeit. Sie sind nicht gedacht für Erwachsene mit einem BMI von 35 oder mehr, während der Schwangerschaft oder für Kinder und Jugendliche, die ärztlich beurteilt werden sollten.",
      reference: "Dies ist ein Referenzvergleich, keine Diagnose. Sprechen Sie mit einer Ärztin, einem Arzt oder Pflegefachpersonal darüber, was Ihr Ergebnis für Sie bedeutet.",
    },
  },
};

export default de;
