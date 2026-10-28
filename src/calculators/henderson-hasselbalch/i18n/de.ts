import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HendersonHasselbalchText } from "../text/en";

const de: CalculatorTranslation<HendersonHasselbalchText> = {
  content: {
    title: "Puffer-pH-Rechner (Henderson–Hasselbalch)",
    shortTitle: "Puffer-pH",
    summary: "Bestimmen Sie den pH-Wert eines Puffers aus den Konzentrationen von Säure und Base oder das Base-Säure-Verhältnis und die Basenkonzentration für einen Ziel-pH.",
    metaTitle: "Puffer-pH-Rechner – Henderson-Hasselbalch-Gleichung",
    metaDescription: "Berechnen Sie mit pH = pKa + log([A⁻]/[HA]) den pH-Wert eines Puffers, das Base-Säure-Verhältnis für einen Ziel-pH oder die nötige Basenkonzentration.",
    keywords: ["Henderson-Hasselbalch", "Puffer pH berechnen", "Pufferrechner", "pKa-Wert", "korrespondierende Base", "Acetatpuffer", "Phosphatpuffer", "Tris-Puffer"],
    intro: [
      "Ein Puffer ist ein Gemisch aus einer schwachen Säure HA und ihrer korrespondierenden Base A⁻. Er hält den pH-Wert weitgehend konstant, wenn kleine Mengen starker Säure oder Base zugegeben werden, weil jede der beiden Formen eine davon neutralisiert. Die Henderson-Hasselbalch-Gleichung verknüpft den pH-Wert des Puffers mit dem pKa-Wert der Säure und dem Verhältnis der beiden Formen.",
      "Mit diesem Rechner bestimmen Sie den pH-Wert eines angesetzten Puffers, das Base-Säure-Verhältnis für einen Ziel-pH oder wie konzentriert die Basenform bei einer gegebenen Säurekonzentration sein muss. Vorgaben gibt es für Acetat-, Hydrogencarbonat-, Phosphat-, Tris- und Ammoniumpuffer.",
    ],
    howToUse: [
      "Wählen Sie, was berechnet werden soll: den pH-Wert, das Verhältnis oder die Basenkonzentration.",
      "Wählen Sie ein Pufferpaar aus der Liste oder wählen Sie „Andere“ und geben Sie den pKa-Wert ein.",
      "Geben Sie die Konzentrationen in mol/L ein (E-Notation wie 5e-3 ist möglich) oder den Ziel-pH.",
      "Lesen Sie das Ergebnis ab und prüfen Sie, ob der pH-Wert im wirksamen Bereich pKa ± 1 liegt.",
    ],
    formulas: [
      {
        title: "Henderson-Hasselbalch-Gleichung",
        expression: "pH = pKa + log₁₀([A⁻] ÷ [HA])",
        explanation: "Sind beide Formen gleich konzentriert, ist der Logarithmusterm 0 und pH = pKa.",
      },
      {
        title: "Verhältnis für einen Ziel-pH",
        expression: "[A⁻] ÷ [HA] = 10^(pH − pKa)",
        explanation: "Jede pH-Einheit über dem pKa-Wert vervielfacht das Verhältnis um den Faktor 10.",
      },
      {
        title: "Wirksamer Bereich",
        expression: "pKa − 1 ≤ pH ≤ pKa + 1",
        explanation: "In diesem Bereich ist keine Form mehr als 10-mal so häufig wie die andere, sodass der Puffer sowohl zugegebene Säure als auch zugegebene Base abfangen kann.",
      },
    ],
    examples: [
      {
        title: "Acetatpuffer mit mehr Base als Säure",
        steps: ["Verhältnis = 0,15 ÷ 0,10 = 1,5", "pH = 4,76 + log₁₀(1,5) = 4,76 + 0,1761", "pH ≈ 4,936"],
      },
      {
        title: "Phosphatpuffer mit pH 7,40",
        steps: ["pH − pKa = 7,40 − 7,21 = 0,19", "[HPO₄²⁻] ÷ [H₂PO₄⁻] = 10^0,19 ≈ 1,549"],
      },
      {
        title: "Benötigte Tris-Base für pH 7,8",
        steps: ["Verhältnis = 10^(7,8 − 8,07) = 10^−0,27 ≈ 0,5370", "[Tris-Base] = 0,05 mol/L × 0,5370 ≈ 0,02685 mol/L"],
      },
    ],
    assumptions: [
      "Konzentrationen stehen stellvertretend für Aktivitäten. In konzentrierten oder salzreichen Lösungen kann der tatsächliche pH-Wert um einige Zehntel abweichen.",
      "Beide Formen müssen in Konzentrationen vorliegen, die weit über den H⁺- und OH⁻-Konzentrationen liegen; sehr verdünnte Puffer und pH-Werte weit vom pKa-Wert entfernt sind daher ungenauer.",
      "Die vorgegebenen pKa-Werte gelten bei 25 °C. Der pKa-Wert ändert sich mit Temperatur und Ionenstärke, was besonders bei Tris ins Gewicht fällt. Prüfen Sie den pH-Wert eines echten Puffers mit einem kalibrierten Messgerät.",
      "Bei Säuren mit mehreren pKa-Werten (etwa Phosphorsäure und Kohlensäure) wird nur das gewählte Paar berücksichtigt.",
    ],
    faqs: [
      {
        question: "Warum ist der nutzbare Bereich pKa ± 1?",
        answer: "Eine pH-Einheit vom pKa-Wert entfernt ist eine Form zehnmal so häufig wie die andere. Darüber hinaus enthält der Puffer kaum noch eine der beiden Formen und kann in dieser Richtung nicht mehr viel zugegebene Säure oder Base abfangen.",
      },
      {
        question: "Welchen Puffer sollte ich für einen bestimmten pH-Wert wählen?",
        answer: "Wählen Sie ein Paar, dessen pKa-Wert nahe am benötigten pH liegt, idealerweise innerhalb von etwa einer halben Einheit. Für pH 7,4 eignet sich zum Beispiel Phosphat (pKa 7,21) besser als Acetat (pKa 4,76).",
      },
      {
        question: "Kann ich Stoffmengen statt Konzentrationen verwenden?",
        answer: "Ja. Beide Formen befinden sich im selben Volumen, daher ist das Verhältnis der Stoffmengen gleich dem Verhältnis der Konzentrationen. Geben Sie in beide Felder die Stoffmengen in Mol ein; der pH-Wert bleibt derselbe.",
      },
    ],
    sourcesUsedFor: [
      "Die Henderson-Hasselbalch-Gleichung, ihre Anwendungsbedingungen und die Pufferkapazität.",
      "pKa-Werte gängiger Puffersubstanzen bei 25 °C.",
    ],
  },
  text: {
    solve: "Berechnen",
    solves: {
      ph: "pH-Wert des Puffers aus den Konzentrationen",
      ratio: "Base-Säure-Verhältnis für einen Ziel-pH",
      base: "Basenkonzentration für einen Ziel-pH",
    },
    acid: "Paar aus schwacher Säure und korrespondierender Base",
    acids: {
      acetic: "Essigsäure / Acetat (pKa {pka})",
      carbonic: "Kohlensäure / Hydrogencarbonat, erste Stufe (pKa {pka})",
      phosphate: "Dihydrogenphosphat / Hydrogenphosphat (pKa {pka})",
      tris: "Tris-H⁺ / Tris-Base (pKa {pka})",
      ammonium: "Ammonium / Ammoniak (pKa {pka})",
      custom: "Andere (pKa eingeben)",
    },
    pka: "pKa-Wert der schwachen Säure",
    pkaHelp: "−log₁₀ der Säurekonstante Ka, bei der Temperatur Ihres Puffers.",
    base: "Konzentration der korrespondierenden Base [A⁻]",
    acidConc: "Konzentration der schwachen Säure [HA]",
    concentrationHelp: "In mol/L. E-Notation wie 5e-3 wird akzeptiert.",
    targetPh: "Ziel-pH",
    targetPhHelp: "Zwischen 0 und 14. Puffer wirken am besten innerhalb von 1 Einheit um den pKa-Wert.",
    errors: {
      notNumber: "Geben Sie eine positive Zahl ein, etwa 0,1 oder 1e-3.",
      notPositive: "Die Konzentration muss größer als 0 sein.",
      tooConcentrated: "Geben Sie höchstens {max} mol/L ein.",
    },
    molar: "{value} mol/L",
    results: { ph: "pH-Wert des Puffers", ratio: "Verhältnis [A⁻] ÷ [HA]", base: "Konzentration der korrespondierenden Base [A⁻]" },
    captions: {
      ph: "pH = pKa + log₁₀([A⁻] ÷ [HA])",
      ratio: "[A⁻] ÷ [HA] = 10^(pH − pKa)",
      base: "[A⁻] = [HA] × 10^(pH − pKa)",
    },
    ratio: "Verhältnis [A⁻] ÷ [HA]",
    phUsed: "Ziel-pH",
    pkaUsed: "Verwendeter pKa-Wert",
    range: "Wirksamer Pufferbereich (pKa ± 1)",
    rangeText: "pH {low} bis {high}",
    baseShare: "Anteil des Puffers in der Basenform",
    notes: {
      insideRange: "Der pH-Wert liegt innerhalb von 1 Einheit um den pKa-Wert, wo der Puffer pH-Änderungen gut abfängt.",
      outsideRange: "Der pH-Wert liegt mehr als 1 Einheit vom pKa-Wert entfernt. Eine Form des Paares ist dann mehr als 10-mal so häufig wie die andere, sodass der Puffer in einer Richtung kaum noch Kapazität hat. Ein Paar mit einem pKa-Wert näher am Ziel funktioniert meist besser.",
      tooMuchBase: "Die benötigte Basenkonzentration liegt über 20 mol/L, was nicht praktikabel ist. Senken Sie die Säurekonzentration oder wählen Sie ein Paar mit einem pKa-Wert näher am Ziel-pH.",
      extreme: "Der pH-Wert liegt außerhalb von 0–14. So weit vom pKa-Wert entfernt ist die Henderson-Hasselbalch-Gleichung nicht zuverlässig.",
      general: "Die Gleichung verwendet Konzentrationen anstelle von Aktivitäten und setzt voraus, dass beide Formen deutlich über den H⁺- und OH⁻-Konzentrationen vorliegen. Die angegebenen pKa-Werte gelten bei 25 °C; der pKa-Wert ändert sich mit Temperatur und Ionenstärke, besonders bei Tris.",
    },
  },
};

export default de;
