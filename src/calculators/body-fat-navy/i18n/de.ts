import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BodyFatText } from "../text/en";

const de: CalculatorTranslation<BodyFatText> = {
  content: {
    title: "Körperfettrechner",
    shortTitle: "Körperfett",
    summary: "Schätzen Sie Ihren Körperfettanteil aus Größe sowie Hals-, Taillen- und Hüftumfang mit der Umfangsmethode der US Navy.",
    metaTitle: "Körperfettrechner – Maßbandmethode der US Navy",
    metaDescription: "Schätzen Sie den Körperfettanteil mit dem Maßband nach den Umfangsformeln der US Navy, in cm oder Zoll, mit Fettmasse und fettfreier Masse aus dem Gewicht.",
    keywords: ["Körperfett berechnen", "Körperfettanteil", "Navy-Methode", "Körperfett Maßband", "Umfangsmethode", "fettfreie Masse", "Fettmasse"],
    intro: [
      "Der Körperfettanteil ist der Anteil Ihres Körpergewichts, der aus Fett besteht. Labormethoden messen ihn direkt, doch ein Maßband liefert eine schnelle Schätzung.",
      "Dieser Rechner verwendet die Umfangsmethode der US Navy, die Hodgdon und Beckett 1984 entwickelt haben. Sie benötigt Ihre Größe sowie Hals- und Taillenumfang, für die Formel für Frauen zusätzlich den Hüftumfang. Geben Sie Ihr Gewicht ein, um zu sehen, wie viel davon Fettmasse und wie viel fettfreie Masse ist.",
    ],
    howToUse: [
      "Wählen Sie Zentimeter oder Zoll und das in der Formel verwendete Geschlecht.",
      "Geben Sie Ihre Größe sowie Hals- und Taillenumfang ein (für die Formel für Frauen auch den Hüftumfang).",
      "Geben Sie optional Ihr Gewicht ein, um es in Fettmasse und fettfreie Masse aufzuteilen.",
      "Lesen Sie den geschätzten Körperfettanteil ab.",
    ],
    formulas: [
      {
        title: "Männer (Längen in Zoll)",
        expression: "%KF = 86,010 × log₁₀(Taille − Hals) − 70,041 × log₁₀(Größe) + 36,76",
        explanation: "Die Taille wird um den Bauch auf Höhe des Nabels gemessen.",
      },
      {
        title: "Frauen (Längen in Zoll)",
        expression: "%KF = 163,205 × log₁₀(Taille + Hüfte − Hals) − 97,684 × log₁₀(Größe) − 78,387",
        explanation: "Die Taille wird an der schmalsten Stelle gemessen, die Hüfte an der breitesten.",
      },
      {
        title: "Zentimeter",
        expression: "Länge (in) = Länge (cm) ÷ 2,54",
        explanation: "Messwerte in Zentimetern werden vor Anwendung der Formeln in Zoll umgerechnet.",
      },
      {
        title: "Fettmasse und fettfreie Masse",
        expression: "Fettmasse = Gewicht × %KF ÷ 100\nfettfreie Masse = Gewicht − Fettmasse",
        explanation: "Fettfreie Masse bedeutet hier alles außer Fett: Muskeln, Knochen, Organe und Wasser.",
      },
    ],
    examples: [
      {
        title: "Mann, 178 cm groß, Hals 38 cm, Taille 88 cm, Gewicht 80 kg",
        steps: ["In Zoll: Größe 70,08, Hals 14,96, Taille 34,65", "86,010 × log₁₀(19,69) − 70,041 × log₁₀(70,08) + 36,76 ≈ 18,8 %", "Fettmasse ≈ 80 × 0,188 = 15,0 kg; fettfreie Masse ≈ 65,0 kg"],
      },
      {
        title: "Frau, 65 in groß, Hals 13 in, Taille 29 in, Hüfte 39 in, Gewicht 140 lb",
        steps: ["Taille + Hüfte − Hals = 29 + 39 − 13 = 55 in", "163,205 × log₁₀(55) − 97,684 × log₁₀(65) − 78,387 ≈ 28,6 %", "Fettmasse ≈ 140 × 0,2856 = 40,0 lb; fettfreie Masse ≈ 100,0 lb"],
      },
    ],
    assumptions: [
      "Das Ergebnis ist eine Schätzung, keine medizinische Beratung, und dieser Rechner wurde noch nicht fachlich geprüft. Sprechen Sie mit medizinischem Fachpersonal darüber, was Ihr Körperfettanteil für Sie bedeutet.",
      "Die Formeln wurden an erwachsenem Personal der US Navy entwickelt. Sie liegen typischerweise innerhalb von etwa 3–4 Prozentpunkten von Labormessungen und können bei sehr muskulösen, sehr schlanken oder älteren Menschen sowie in der Schwangerschaft ungenauer sein.",
      "Kleine Messfehler verändern das Ergebnis spürbar, besonders an der Taille. Messen Sie sorgfältig und immer auf dieselbe Weise.",
      "Es werden keine Gesundheitskategorien angezeigt, weil für diese Seite keine einzelne Einstufungstabelle überprüft wurde.",
    ],
    faqs: [
      {
        question: "Wie genau ist die Navy-Methode?",
        answer: "Bei den meisten Erwachsenen liegt sie innerhalb weniger Prozentpunkte von Methoden wie dem Unterwasserwiegen, im Einzelfall können die Abweichungen aber größer sein. Am besten eignet sie sich, um Veränderungen über die Zeit mit derselben Messtechnik zu verfolgen.",
      },
      {
        question: "Warum verwendet die Formel für Frauen die Hüfte?",
        answer: "Frauen haben tendenziell mehr Fett an Hüften und Oberschenkeln, daher verbesserte der zusätzliche Hüftumfang die Passgenauigkeit der Formel für Frauen.",
      },
      {
        question: "Warum senkt die Größe den Schätzwert?",
        answer: "Ein größerer Mensch mit demselben Taillen- und Halsumfang hat im Verhältnis zu seinem Körperbau weniger Umfang, deshalb zieht die Formel einen Term ab, der auf der Größe beruht.",
      },
    ],
    sourcesUsedFor: [
      "Die Umfangsmethode für Männer aus Hals- und Bauchumfang und Größe sowie ihre Genauigkeit im Vergleich zum Unterwasserwiegen.",
      "Hintergrund zur militärischen Maßbandmethode und zu den Messstellen an Hals, Taille und Hüfte.",
    ],
  },
  text: {
    unit: "Maßeinheit",
    units: { cm: "Zentimeter (cm)", in: "Zoll (in)" },
    sex: "In der Formel verwendetes Geschlecht",
    sexHelp: "Die Methode hat getrennte Formeln für Männer und Frauen; die für Frauen verwendet zusätzlich den Hüftumfang.",
    sexes: { male: "Männlich", female: "Weiblich" },
    height: "Größe",
    heightHelp: "Körpergröße im Stehen ohne Schuhe.",
    neck: "Halsumfang",
    neckHelp: "Direkt unterhalb des Kehlkopfs (Adamsapfel), das Maßband nach vorn leicht abfallend.",
    waist: "Taillenumfang",
    waistHelp: "Männer: um den Bauch auf Höhe des Nabels. Frauen: an der schmalsten Stelle der Taille.",
    hip: "Hüftumfang",
    hipHelp: "Um die breiteste Stelle von Hüfte und Gesäß.",
    weight: "Körpergewicht",
    weightHelp: "Optional. Dient dazu, Ihr Gewicht in Fettmasse und fettfreie Masse aufzuteilen.",
    weightUnit: "Gewichtseinheit",
    weightUnits: { kg: "Kilogramm (kg)", lb: "Pfund (lb)" },
    bodyFat: "Geschätzter Körperfettanteil",
    caption: "{method}; Größe {height}, Hals {neck}, Taille {waist}.",
    captionHip: "{method}; Größe {height}, Hals {neck}, Taille {waist}, Hüfte {hip}.",
    method: "Methode",
    methodName: "Umfangsmethode der US Navy (Hodgdon und Beckett, 1984)",
    methodShort: "US-Navy-Methode",
    fatMass: "Fettmasse",
    leanMass: "Fettfreie Masse (alles außer Fett)",
    errors: {
      range: "Geben Sie einen Wert zwischen {min} und {max} {unit} ein.",
      waistNeck: "Für diese Formel muss die Taille größer als der Hals sein.",
      logArgument: "Taille + Hüfte − Hals muss größer als 0 sein.",
      outOfRange: "Diese Maße ergeben eine Schätzung von {value}, außerhalb des Bereichs, den die Formel beschreiben kann. Prüfen Sie die Maße und die Einheit.",
    },
    notes: {
      estimate: "Eine Schätzung aus Maßbandmessungen. Im Vergleich zu Labormethoden weichen Umfangsformeln typischerweise um etwa 3–4 Prozentpunkte ab, bei sehr schlanken oder sehr muskulösen Menschen auch mehr.",
      measure: "Messen Sie auf nackter Haut, entspannt und ohne den Bauch einzuziehen, und nehmen Sie den Mittelwert aus zwei oder drei Messungen.",
      noCategories: "Hier werden keine Gesundheitskategorien angegeben; fragen Sie medizinisches Fachpersonal, wie Ihr Ergebnis einzuordnen ist.",
      extreme: "Dieses Ergebnis liegt nahe am Rand des Bereichs, für den die Formel entwickelt wurde, und ist daher weniger zuverlässig.",
    },
  },
};

export default de;
