import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MolarMassText } from "../text/en";

const de: CalculatorTranslation<MolarMassText> = {
  content: {
    title: "Molmassenrechner",
    shortTitle: "Molare Masse",
    summary: "Geben Sie eine Summenformel ein, auch mit Klammern und Hydraten, und erhalten Sie die molare Masse in g/mol mit dem Massenanteil jedes Elements.",
    metaTitle: "Molmassenrechner – molare Masse in g/mol aus der Formel",
    metaDescription: "Bestimmen Sie die molare Masse jeder chemischen Formel in g/mol, mit Klammern und Hydraten wie CuSO4·5H2O, samt Atomanzahl und Massenanteil je Element.",
    keywords: ["molare Masse berechnen", "Molmasse", "Molekülmasse", "g/mol", "Formelmasse", "Massenanteil", "Hydrat molare Masse"],
    intro: [
      "Die molare Masse eines Stoffs ist die Masse eines Mols davon, in Gramm pro Mol. Bei einer Verbindung ist sie einfach die Summe der Atomgewichte aller Atome in ihrer Formel: Wasser, H2O, besteht aus zwei Wasserstoffatomen und einem Sauerstoffatom, also etwa 2 × 1,008 + 15,999 = 18,015 g/mol.",
      "Geben Sie eine beliebige Formel ein, und dieser Rechner zählt die Atome für Sie, einschließlich Gruppen in runden oder eckigen Klammern wie Ca(OH)2 oder K4[Fe(CN)6] und Hydraten wie CuSO4·5H2O. Er zeigt außerdem, welchen Anteil jedes Element zur Gesamtmasse beiträgt.",
    ],
    howToUse: [
      "Geben Sie die Formel mit korrekter Groß- und Kleinschreibung ein: Co ist Cobalt, CO dagegen Kohlenstoffmonoxid.",
      "Schreiben Sie die Anzahl hinter jedes Element oder jede Klammergruppe, zum Beispiel Al2(SO4)3. Fehlt die Anzahl, gilt 1.",
      "Trennen Sie bei einem Hydrat die Teile mit ·, . oder * und stellen Sie die Anzahl der Wassermoleküle voran, wie in MgSO4·7H2O.",
      "Lesen Sie die molare Masse und die Tabelle mit Atomanzahl, Massenbeitrag und Massenanteil ab.",
    ],
    formulas: [
      { title: "Molare Masse", expression: "M = Σ (nᵢ × Aᵣ,ᵢ)  g/mol", explanation: "nᵢ ist die Anzahl der Atome des Elements i in der Formel und Aᵣ,ᵢ sein Standardatomgewicht." },
      { title: "Gruppen und Hydrate", expression: "(X)ₖ → jede Anzahl darin × k\nA·nB → Atome von A + n × Atome von B", explanation: "Klammerfaktoren gelten für alles innerhalb der Klammer, auch für verschachtelte Gruppen; ein Hydratkoeffizient gilt für den Teil nach dem Punkt." },
      { title: "Massenanteil", expression: "% Element i = nᵢ × Aᵣ,ᵢ ÷ M × 100", explanation: "Der Anteil der molaren Masse, der auf jedes Element entfällt." },
    ],
    examples: [
      {
        title: "Glucose, C6H12O6",
        steps: ["Kohlenstoff: 6 × 12,011 = 72,066", "Wasserstoff: 12 × 1,008 = 12,096", "Sauerstoff: 6 × 15,999 = 95,994", "M = 72,066 + 12,096 + 95,994 = 180,156 g/mol"],
      },
      {
        title: "Kupfer(II)-sulfat-Pentahydrat, CuSO4·5H2O",
        steps: ["CuSO4: 63,546 + 32,06 + 4 × 15,999 = 159,602", "5 H2O: 5 × (2 × 1,008 + 15,999) = 5 × 18,015 = 90,075", "M = 159,602 + 90,075 = 249,677 g/mol", "Kupfer macht 63,546 ÷ 249,677 ≈ 25,45 % der Masse aus"],
      },
      {
        title: "Kaliumhexacyanidoferrat(II), K4[Fe(CN)6]",
        steps: ["Kalium: 4 × 39,098 = 156,392", "Eisen: 1 × 55,845 = 55,845", "(CN)6: 6 × (12,011 + 14,007) = 156,108", "M = 156,392 + 55,845 + 156,108 = 368,345 g/mol"],
      },
    ],
    assumptions: [
      "Als Atomgewichte dienen die gekürzten Standardatomgewichte von IUPAC/CIAAW. Schwankt das Atomgewicht eines Elements in der Natur und ist es als Bereich angegeben, wird der konventionelle Einzelwert verwendet; die letzte Stelle kann daher von anderen Tabellen abweichen.",
      "Elemente ohne Standardatomgewicht, etwa Technetium, Promethium, Polonium und die meisten Elemente schwerer als Bismut außer Thorium, Protactinium und Uran, werden abgelehnt, weil ihre molare Masse vom Isotop abhängt.",
      "Ladungen, Isotope (wie D oder ¹³C) und Aggregatzustände werden nicht unterstützt. Die Formel wird als neutrale Formeleinheit mit natürlicher Isotopenverteilung behandelt; die Masse der Elektronen, die ein Ion aufnimmt oder abgibt, ist vernachlässigbar.",
    ],
    faqs: [
      { question: "Ist die molare Masse dasselbe wie das Molekulargewicht?", answer: "Beide haben denselben Zahlenwert. Das Molekulargewicht (relative Molekülmasse) hat keine Einheit, die molare Masse wird dagegen in Gramm pro Mol angegeben. Wasser hat ein Molekulargewicht von 18,015 und eine molare Masse von 18,015 g/mol." },
      { question: "Wie gebe ich ein Hydrat ein?", answer: "Schreiben Sie das Salz, dann einen Punkt (·, . oder *), dann die Anzahl der Wassermoleküle und H2O, zum Beispiel CuSO4·5H2O oder Na2CO3*10H2O. Der Koeffizient multipliziert alles im Teil nach dem Punkt." },
      { question: "Warum nennt mein Lehrbuch einen etwas anderen Wert?", answer: "Tabellen runden Atomgewichte unterschiedlich, und manche verwenden ältere Werte. Chlor wird hier zum Beispiel mit 35,45 geführt, in älteren Tabellen dagegen mit 35,453, was die letzte Dezimalstelle bei NaCl verändert." },
    ],
    sourcesUsedFor: ["Die gekürzten Standardatomgewichte und konventionellen Werte für jedes Element."],
  },
  text: {
    formula: "Chemische Formel",
    formulaHelp:
      "Bei Elementsymbolen zählt die Groß- und Kleinschreibung (Co ist Cobalt, CO ist Kohlenstoffmonoxid). Verwenden Sie ( ) oder [ ] für Gruppen und ·, . oder * für Hydrate, z. B. CuSO4·5H2O.",
    formulaPlaceholder: "z. B. Ca(OH)2",
    errors: {
      empty: "Geben Sie eine chemische Formel ein.",
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
    molarMass: "Molare Masse",
    caption: "{formula}: Summe aus Atomanzahl × Standardatomgewicht",
    totalAtoms: "Atome pro Formeleinheit",
    elements: "Verschiedene Elemente",
    massOfMole: "Masse eines Mols",
    tableCaption: "Zusammensetzung nach Elementen",
    columns: { element: "Element", count: "Atome", weight: "Atomgewicht", mass: "Masse (g/mol)", percent: "Massen-%" },
    note: "Die Atomgewichte sind die gekürzten Standardwerte der IUPAC. Für Elemente mit natürlicher Schwankungsbreite (wie H, C, N, O und S) wird der konventionelle Einzelwert verwendet.",
  },
};

export default de;
