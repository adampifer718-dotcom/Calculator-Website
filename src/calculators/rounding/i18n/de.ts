import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoundingText } from "../text/en";

const de: CalculatorTranslation<RoundingText> = {
  content: {
    title: "Rundungsrechner",
    shortTitle: "Runden",
    summary: "Runden Sie eine Zahl auf Nachkommastellen, eine ganze Zahl, auf Zehner, Hunderter, Tausender oder eine beliebige Schrittweite – mit sechs exakten Rundungsmethoden.",
    metaTitle: "Rundungsrechner – Nachkommastellen, mathematisch runden",
    metaDescription: "Runden Sie jede Zahl exakt auf Nachkommastellen, Zehner, Hunderter oder eine Schrittweite wie 0,05 – kaufmännisch, mathematisch, auf, ab oder abgeschnitten.",
    keywords: ["Runden", "auf Nachkommastellen runden", "kaufmännisch runden", "mathematisch runden", "Banker’s Rounding", "aufrunden", "abrunden", "auf 0,05 runden"],
    intro: [
      "Beim Runden wird eine Zahl durch eine nahe, einfachere ersetzt: Aus 3,14159 wird 3,14, ein Preis von 19,97 wird in 5-Cent-Schritten zu 19,95, und 87.654 wird auf Tausender gerundet zu 88.000. Dieser Rechner rundet auf eine Anzahl von Nachkommastellen, auf eine ganze Zahl, auf Zehner, Hunderter oder Tausender oder auf eine beliebige Schrittweite Ihrer Wahl.",
      "Er arbeitet mit den eingegebenen Ziffern, nicht mit einer binären Näherung. Daher wird 1,005 kaufmännisch tatsächlich zu 1,01 gerundet – ein Fall, in dem viele Tabellenkalkulationen und Programmiersprachen 1,00 liefern. Sechs Methoden decken das Runden aus der Schule, das mathematische Runden (Banker’s Rounding) sowie das stete Auf- und Abrunden und das Abschneiden ab. Um stattdessen auf signifikante Stellen zu runden, verwenden Sie den Rechner für signifikante Stellen.",
    ],
    howToUse: [
      "Geben Sie die Zahl genau so ein, wie sie vorliegt. Jede Ziffer bleibt erhalten.",
      "Wählen Sie, worauf gerundet werden soll: Nachkommastellen, ganze Zahl, 10, 100, 1.000 oder eine eigene Schrittweite wie 0,05 oder 0,25.",
      "Wählen Sie die Rundungsmethode. Kaufmännisches Runden wird an den meisten Schulen gelehrt; mathematisches Runden (zur geraden Ziffer) ist in Finanzwesen und Statistik verbreitet.",
      "Lesen Sie die gerundete Zahl ab, wie weit sie sich vom Original entfernt hat und zwischen welchen beiden Kandidaten gewählt wurde.",
    ],
    formulas: [
      { title: "Runden auf eine Schrittweite", expression: "k = x ÷ q\ngerundet = runden(k) × q", explanation: "q ist die Schrittweite: 0,01 für 2 Nachkommastellen, 1 für eine ganze Zahl, 10, 100, 1.000 oder Ihr eigener Wert. Die Methode legt fest, wie runden() mit k umgeht." },
      { title: "Regeln bei Gleichstand", expression: "Kaufmännisch: 2,5 → 3, −2,5 → −3\nZur geraden Ziffer: 2,5 → 2, 3,5 → 4\nHälfte abrunden: 2,5 → 2, −2,5 → −2", explanation: "Diese Regeln unterscheiden sich nur, wenn die Zahl genau in der Mitte zwischen zwei Kandidaten liegt. Sonst runden alle drei auf den näheren." },
      { title: "Gerichtetes Runden", expression: "Aufrunden: 2,1 → 3, −2,9 → −2\nAbrunden: 2,9 → 2, −2,1 → −3\nAbschneiden: 2,9 → 2, −2,9 → −2", explanation: "Aufrunden geht immer in Richtung +∞, Abrunden in Richtung −∞, und Abschneiden lässt die überzähligen Ziffern einfach weg (Richtung null)." },
      { title: "Exakte Dezimalarithmetik", expression: "1,005 = 1005 × 10⁻³ exakt", explanation: "Zahl und Schrittweite werden mit derselben Zehnerpotenz auf ganze Zahlen skaliert und exakt geteilt, sodass kein binärer Rundungsfehler einen Gleichstand verändern kann." },
    ],
    examples: [
      {
        title: "1,005 kaufmännisch auf 2 Nachkommastellen runden",
        steps: ["Die Kandidaten sind 1,00 und 1,01", "Der wegfallende Teil, 0,005, ist genau die Hälfte von 0,01", "Kaufmännisches Runden rundet den Gleichstand von null weg: 1,01"],
      },
      {
        title: "7,325 mathematisch (Banker’s Rounding) auf 2 Nachkommastellen runden",
        steps: ["Die Kandidaten sind 7,32 und 7,33", "7,325 liegt genau in der Mitte", "Beim Runden zur geraden Ziffer gewinnt der Kandidat mit gerader letzter Ziffer: 7,32"],
      },
      {
        title: "3,38 Stunden auf die nächste Viertelstunde runden",
        steps: ["3,38 ÷ 0,25 = 13,52", "13,52 wird zu 14 gerundet", "14 × 0,25 = 3,50 Stunden"],
      },
    ],
    assumptions: [
      "Die Zahl wird exakt so gerundet, wie sie eingegeben wurde, mit bis zu 40 signifikanten Stellen. Nichts wird in binäre Gleitkommazahlen umgewandelt.",
      "Kaufmännisches Runden und Abrunden bei Hälfte sind symmetrisch zu null: −2,5 ergibt kaufmännisch −3. Auf- und Abrunden sind nicht symmetrisch.",
      "Ist der gerundete Wert null, wird er ohne Vorzeichen als 0 angezeigt.",
      "Ergebnisse werden mit so vielen Nachkommastellen angezeigt wie die Rundungsstufe, daher erscheint 2,5 auf 2 Nachkommastellen gerundet als 2,50.",
    ],
    faqs: [
      { question: "Was ist Banker’s Rounding?", answer: "Das mathematische Runden zur geraden Ziffer: Ein exakter Gleichstand geht zum geraden Nachbarn, aus 2,5 wird also 2 und aus 3,5 wird 4. Über viele Werte hinweg wird bei Gleichstand gleich oft auf- wie abgerundet, was eine kleine Verzerrung nach oben in Summen vermeidet." },
      { question: "Warum rundet meine Tabellenkalkulation 1,005 auf 1,00?", answer: "Die meisten Programme speichern Zahlen binär, wobei 1,005 in Wirklichkeit 1,00499999999999989… ist, also knapp unter dem Gleichstand. Dieser Rechner arbeitet mit den Dezimalziffern selbst, daher liegt 1,005 genau in der Mitte, und kaufmännisches Runden ergibt 1,01." },
      { question: "Wie runde ich einen Preis auf 5 Cent?", answer: "Wählen Sie „Nächstes Vielfaches einer Schrittweite“ und geben Sie 0,05 ein. Kaufmännisch gerundet wird dann zum Beispiel aus 19,97 der Wert 19,95 und aus 19,98 der Wert 20,00." },
    ],
    sourcesUsedFor: [
      "Definitionen der Rundungsmodi (half up, half even, half down, ceiling, floor und round down), mit denen die Ergebnisse geprüft wurden.",
      "Die Regel, exakte Gleichstände zur geraden Ziffer zu runden, wie sie in der Messpraxis verwendet wird.",
    ],
  },
  text: {
    number: "Zahl",
    numberHelp: "Geben Sie die Zahl genau ein; jede Ziffer bleibt erhalten, 1,005 bleibt also 1,005. Verwenden Sie das Dezimalkomma. E-Notation wie 2,5e-3 ist erlaubt.",
    invalid: "Geben Sie eine Zahl wie 1234,5678, -0,125 oder 2,5e-3 ein.",
    tooLong: "Geben Sie höchstens 40 signifikante Stellen ein, mit einem Exponenten zwischen -40 und 40.",
    target: "Runden auf",
    targets: {
      places: "Nachkommastellen",
      whole: "Ganze Zahl",
      tens: "Zehner (10)",
      hundreds: "Hunderter (100)",
      thousands: "Tausender (1.000)",
      increment: "Nächstes Vielfaches einer Schrittweite",
    },
    places: "Nachkommastellen",
    increment: "Schrittweite",
    incrementHelp: "Auf ein Vielfaches dieses Werts runden, zum Beispiel 0,05 für Preise in 5-Cent-Schritten oder 0,25 für Viertelstunden.",
    incrementInvalid: "Geben Sie eine positive Schrittweite wie 0,05, 0,25 oder 5 ein.",
    method: "Rundungsmethode",
    methods: {
      halfUp: "Kaufmännisch (bei Hälfte von null weg)",
      halfEven: "Mathematisch (bei Hälfte zur geraden Ziffer, Banker’s Rounding)",
      halfDown: "Bei Hälfte abrunden (zur Null hin)",
      ceiling: "Immer aufrunden (Richtung +∞)",
      floor: "Immer abrunden (Richtung −∞)",
      truncate: "Abschneiden (Richtung null)",
    },
    rounded: "Gerundete Zahl",
    caption: "{original}, gerundet mit der Methode „{method}“.",
    methodShort: {
      halfUp: "kaufmännisch",
      halfEven: "mathematisch (zur geraden Ziffer)",
      halfDown: "bei Hälfte abrunden",
      ceiling: "immer aufrunden",
      floor: "immer abrunden",
      truncate: "abschneiden",
    },
    difference: "Differenz (gerundet − Original)",
    lower: "Kandidat darunter (abgerundet)",
    upper: "Kandidat darüber (aufgerundet)",
    exact: "Die Zahl passt bereits exakt zu dieser Rundung, ihr Wert ändert sich also nicht.",
    tie: "Die Zahl liegt genau in der Mitte zwischen den beiden Kandidaten, daher entscheidet die Gleichstandsregel der Methode.",
    negativeNote: "Bei negativen Zahlen geht „immer aufrunden“ in Richtung +∞ (aus −2,5 wird −2) und „immer abrunden“ in Richtung −∞ (aus −2,5 wird −3).",
  },
};

export default de;
