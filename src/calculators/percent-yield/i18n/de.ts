import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentYieldText } from "../text/en";

const de: CalculatorTranslation<PercentYieldText> = {
  content: {
    title: "Ausbeuterechner",
    shortTitle: "Ausbeute",
    summary: "Berechnen Sie die prozentuale Ausbeute einer Reaktion aus tatsächlicher und theoretischer Ausbeute oder die theoretische Ausbeute aus Stoffmenge und Reaktionsgleichung.",
    metaTitle: "Ausbeuterechner – tatsächliche und theoretische Ausbeute",
    metaDescription: "Berechnen Sie die prozentuale Ausbeute aus tatsächlicher und theoretischer Ausbeute oder die theoretische Ausbeute aus Stoffmenge, Koeffizienten und Formel.",
    keywords: ["Ausbeute berechnen", "prozentuale Ausbeute", "theoretische Ausbeute", "limitierender Reaktant", "Stöchiometrie", "Reaktionsausbeute", "Chemielabor"],
    intro: [
      "Die theoretische Ausbeute ist die Produktmenge, die eine ausgeglichene Reaktionsgleichung vorhersagt, wenn der limitierende Reaktant vollständig verbraucht wird. Die tatsächliche Ausbeute ist das, was Sie erhalten. Die prozentuale Ausbeute vergleicht beide und zeigt, wie effizient Reaktion und Aufarbeitung waren.",
      "Kennen Sie die theoretische Ausbeute bereits, geben Sie beide Massen ein. Andernfalls geben Sie die Stoffmenge des limitierenden Reaktanten, die Koeffizienten aus der ausgeglichenen Gleichung und die Formel oder molare Masse des Produkts ein; der Rechner bestimmt dann zuerst die theoretische Ausbeute.",
    ],
    howToUse: [
      "Wählen Sie, ob Sie die theoretische Ausbeute kennen oder ob sie aus der Stoffmenge berechnet werden soll.",
      "Wählen Sie die Masseneinheit und geben Sie die tatsächlich erhaltene Ausbeute ein.",
      "Geben Sie die theoretische Ausbeute ein oder die Stoffmenge des limitierenden Reaktanten, beide Koeffizienten und die Produktformel (oder seine molare Masse).",
      "Lesen Sie die prozentuale Ausbeute, die theoretische Ausbeute und den Massenverlust ab.",
    ],
    formulas: [
      {
        title: "Prozentuale Ausbeute",
        expression: "prozentuale Ausbeute = tatsächliche Ausbeute ÷ theoretische Ausbeute × 100 %",
        explanation: "Beide Ausbeuten müssen in derselben Einheit vorliegen, damit sich die Einheiten kürzen.",
      },
      {
        title: "Theoretische Ausbeute aus der Stoffmenge",
        expression: "theoretisch (g) = n(limitierend) × (Koeffizient Produkt ÷ Koeffizient Reaktant) × M(Produkt)",
        explanation: "Das Koeffizientenverhältnis rechnet die Stoffmenge des limitierenden Reaktanten in die Stoffmenge des Produkts um; die molare Masse rechnet Mol in Gramm um.",
      },
      {
        title: "Massenverlust",
        expression: "Verlust = theoretische Ausbeute − tatsächliche Ausbeute",
        explanation: "Wird auch als Anteil der theoretischen Ausbeute angezeigt; dieser entspricht 100 % minus der prozentualen Ausbeute.",
      },
    ],
    examples: [
      {
        title: "Kristalle aus einer Laborsynthese",
        steps: ["Prozentuale Ausbeute = 4,25 g ÷ 5,6 g × 100 %", "≈ 75,89 %", "Massenverlust = 5,6 − 4,25 = 1,35 g"],
      },
      {
        title: "Aspirin aus 0,0200 mol Salicylsäure",
        steps: ["Ein Salicylsäuremolekül ergibt ein Aspirinmolekül, daher ist das Verhältnis 1 ÷ 1.", "M(C9H8O4) = 9 × 12,011 + 8 × 1,008 + 4 × 15,999 = 180,159 g/mol", "Theoretische Ausbeute = 0,0200 × 180,159 ≈ 3,6032 g", "Prozentuale Ausbeute = 2,95 ÷ 3,6032 × 100 % ≈ 81,87 %"],
      },
      {
        title: "Ammoniak, wenn Wasserstoff der limitierende Reaktant ist",
        steps: ["N₂ + 3 H₂ → 2 NH₃, also 0,90 mol H₂ × 2 ÷ 3 = 0,60 mol NH₃", "Theoretische Ausbeute = 0,60 × 17,031 = 10,2186 g", "Prozentuale Ausbeute = 8,1 ÷ 10,2186 × 100 % ≈ 79,27 %"],
      },
    ],
    assumptions: [
      "Der limitierende Reaktant ist bekannt. Sind Sie unsicher, berechnen Sie, wie viel Produkt jeder Reaktant ergeben könnte; der mit der geringsten Produktmenge ist limitierend.",
      "Die Gleichung ist ausgeglichen und liefert ein Hauptprodukt. Nebenprodukte werden nicht berücksichtigt.",
      "Molare Massen aus einer Formel verwenden die gekürzten Standardatomgewichte der IUPAC. Die Ergebnisse sind nur so genau wie die gemessenen Massen.",
      "Die tatsächliche Ausbeute sollte das trockene, gereinigte Produkt sein. Lösungsmittel oder Verunreinigungen lassen die Ausbeute höher erscheinen, als sie ist.",
    ],
    faqs: [
      {
        question: "Kann die prozentuale Ausbeute über 100 % liegen?",
        answer: "Nicht bei einem reinen, trockenen Produkt, denn Masse kann nicht entstehen. Ein Ergebnis über 100 % bedeutet meist, dass das Produkt noch feucht ist, Verunreinigungen oder nicht umgesetztes Ausgangsmaterial enthält oder dass eine Masse falsch gemessen oder notiert wurde.",
      },
      {
        question: "Warum ist meine Ausbeute niedriger als erwartet?",
        answer: "Nebenreaktionen verbrauchen Reaktanten, viele Reaktionen laufen nicht vollständig ab, und beim Filtrieren, Umfüllen oder Umkristallisieren geht immer etwas Produkt verloren. Ausbeuten deutlich unter 100 % sind normal, besonders bei mehrstufigen Synthesen.",
      },
      {
        question: "Rechne ich mit Mol oder mit Gramm?",
        answer: "Die prozentuale Ausbeute selbst vergleicht Massen (oder Stoffmengen) des Produkts, und die Einheit kürzt sich. Für die theoretische Ausbeute brauchen Sie Mol, weil die Koeffizienten einer ausgeglichenen Gleichung Stoffmengen in Mol verknüpfen, nicht Gramm.",
      },
    ],
    sourcesUsedFor: ["Definitionen von theoretischer, tatsächlicher und prozentualer Ausbeute sowie des limitierenden Reaktanten."],
  },
  text: {
    mode: "Theoretische Ausbeute",
    modes: { direct: "Ist mir bekannt", stoichiometry: "Aus der Stoffmenge berechnen" },
    unit: "Masseneinheit",
    actual: "Tatsächliche Ausbeute",
    actualHelp: "Die Masse des tatsächlich erhaltenen Produkts (idealerweise trocken und rein).",
    theoretical: "Theoretische Ausbeute",
    theoreticalHelp: "Die Produktmasse, die die ausgeglichene Gleichung vorhersagt, in derselben Einheit wie die tatsächliche Ausbeute.",
    moles: "Stoffmenge des limitierenden Reaktanten",
    molesHelp: "Der Reaktant, der zuerst verbraucht ist. Teilen Sie seine Masse durch seine molare Masse, um die Stoffmenge zu erhalten.",
    reactantCoef: "Koeffizient des limitierenden Reaktanten",
    productCoef: "Koeffizient des Produkts",
    coefHelp: "Aus der ausgeglichenen Gleichung. In N₂ + 3 H₂ → 2 NH₃ hat H₂ den Koeffizienten 3 und NH₃ den Koeffizienten 2.",
    massSource: "Molare Masse des Produkts aus",
    massSources: { formula: "Summenformel", molarMass: "Wert der molaren Masse" },
    formula: "Formel des Produkts",
    formulaHelp: "Bei Elementsymbolen wird Groß- und Kleinschreibung unterschieden, z. B. C9H8O4 oder Ca(OH)2. Die molare Masse wird aus den Standardatomgewichten berechnet.",
    molarMass: "Molare Masse des Produkts",
    formulaErrors: {
      empty: "Geben Sie eine Summenformel ein.",
      tooLong: "Die Formel ist zu lang. Verwenden Sie höchstens 200 Zeichen.",
      invalidChar: "Ungültiges Zeichen „{token}“ an Position {position}. Verwenden Sie nur Elementsymbole, Zahlen, Klammern und Hydratpunkte.",
      lowercase: "Unerwarteter Kleinbuchstabe „{token}“ an Position {position}. Elementsymbole beginnen mit einem Großbuchstaben, z. B. Na oder Cl.",
      unknownElement: "Unbekanntes Elementsymbol „{token}“ an Position {position}.",
      noStandardWeight: "{token} (Position {position}) hat kein Standardatomgewicht, daher lässt sich seine molare Masse nicht berechnen.",
      unclosed: "Unausgeglichene Klammern: Die „{token}“ an Position {position} wird nie geschlossen.",
      unexpectedClose: "Unausgeglichene Klammern: Zur „{token}“ an Position {position} gibt es keine öffnende Klammer.",
      mismatched: "Nicht zusammenpassende Klammern: Die „{token}“ an Position {position} passt nicht zu der Klammer, die sie schließt.",
      emptyGroup: "Die Klammergruppe ab Position {position} ist leer.",
      zeroCount: "Die Anzahl an Position {position} ist null. Anzahlen müssen ganze Zahlen von mindestens 1 sein.",
      misplacedNumber: "Die Zahl an Position {position} gehört zu keinem Element und keiner Gruppe.",
      misplacedDot: "Der Hydratpunkt an Position {position} muss zwischen zwei Teilen der Formel stehen, z. B. CuSO4·5H2O.",
      tooManyAtoms: "Die Formel enthält zu viele Atome. Verwenden Sie insgesamt höchstens 1.000.000 Atome.",
    },
    result: "Prozentuale Ausbeute",
    caption: "Tatsächliche Ausbeute ÷ theoretische Ausbeute × 100",
    theoreticalResult: "Theoretische Ausbeute",
    productMoles: "Theoretische Stoffmenge des Produkts",
    molarMassUsed: "Verwendete molare Masse des Produkts",
    loss: "Massenverlust (theoretisch − tatsächlich)",
    excess: "Masse über der theoretischen Ausbeute",
    lossPercent: "Verlorener Anteil der theoretischen Ausbeute",
    excessPercent: "Anteil über der theoretischen Ausbeute",
    notes: {
      over100: "Eine Ausbeute über 100 % ist bei einem reinen, trockenen Produkt physikalisch nicht möglich. Meist ist das Produkt noch feucht oder enthält Verunreinigungen oder Reagenzreste, oder eine Masse oder Stoffmenge wurde falsch gemessen.",
      zero: "Es wurde kein Produkt erhalten, daher beträgt die Ausbeute 0 %.",
      general: "Typische Gründe für eine Ausbeute unter 100 % sind Nebenreaktionen, unvollständig ablaufende Reaktionen und Produktverluste beim Umfüllen, Filtrieren oder Reinigen.",
    },
  },
};

export default de;
