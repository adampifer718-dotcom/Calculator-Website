import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BsaText } from "../text/en";

const de: CalculatorTranslation<BsaText> = {
  content: {
    title: "Körperoberflächenrechner",
    shortTitle: "Körperoberfläche",
    summary: "Schätzen Sie die Körperoberfläche in m² aus Größe und Gewicht mit der Mosteller-Formel, im Vergleich mit den Formeln nach Du Bois, Haycock und Gehan-George.",
    metaTitle: "Körperoberflächenrechner – Mosteller und Du Bois",
    metaDescription: "Schätzen Sie die Körperoberfläche (KOF) in m² und ft² aus Größe und Gewicht mit der Mosteller-Formel, daneben Du Bois, Haycock und Gehan-George.",
    keywords: ["Körperoberfläche berechnen", "KOF Rechner", "Body Surface Area", "Mosteller-Formel", "Du-Bois-Formel", "Haycock-Formel", "Gehan George", "KOF m²"],
    intro: [
      "Die Körperoberfläche (KOF, englisch Body Surface Area, BSA) ist die gesamte Hautfläche in Quadratmetern. In der Medizin dient sie dazu, manche Messgrößen wie den Herzindex oder die Nierenfiltration auf die Körpergröße zu beziehen. Sie direkt zu messen ist nicht praktikabel, daher wird sie aus Größe und Gewicht geschätzt.",
      "Dieser Rechner verwendet die Mosteller-Formel als Hauptergebnis, weil sie einfach und weit verbreitet ist. Die Formeln nach Du Bois, Haycock und Gehan-George werden daneben angezeigt, damit Sie sehen, wie stark die Schätzungen voneinander abweichen.",
    ],
    howToUse: [
      "Geben Sie das Gewicht ein und wählen Sie Kilogramm oder Pfund.",
      "Geben Sie die Körpergröße ein und wählen Sie Zentimeter oder Zoll.",
      "Lesen Sie die Mosteller-Schätzung in m² und ft² ab und vergleichen Sie die vier Formeln in der Tabelle.",
    ],
    formulas: [
      { title: "Mosteller", expression: "KOF = √(Größe × Gewicht ÷ 3600)", explanation: "Größe in cm, Gewicht in kg, Ergebnis in m²." },
      { title: "Du Bois und Du Bois", expression: "KOF = 0,007184 × Gewicht^0,425 × Größe^0,725", explanation: "Die älteste der vier, 1916 an eine kleine Gruppe von Menschen angepasst." },
      { title: "Haycock", expression: "KOF = 0,024265 × Gewicht^0,5378 × Größe^0,3964", explanation: "An Messungen von Säuglingen bis zu Erwachsenen angepasst." },
      { title: "Gehan und George", expression: "KOF = 0,0235 × Gewicht^0,51456 × Größe^0,42246", explanation: "An eine größere Gruppe von 401 Personen angepasst." },
      { title: "Quadratfuß", expression: "ft² = m² ÷ 0,09290304", explanation: "1 ft = 0,3048 m exakt, also 1 ft² = 0,09290304 m²." },
    ],
    examples: [
      {
        title: "70 kg, 175 cm",
        steps: ["Mosteller: √(175 × 70 ÷ 3600) = √3,4028 ≈ 1,84 m²", "Du Bois ≈ 1,848 m², Haycock ≈ 1,847 m², Gehan-George ≈ 1,854 m²", "1,8447 m² ÷ 0,09290304 ≈ 19,86 ft²"],
      },
      {
        title: "82 kg, 168 cm",
        steps: ["Mosteller: √(168 × 82 ÷ 3600) = √3,8267 ≈ 1,96 m²", "Du Bois ergibt etwa 1,919 m², den niedrigsten der vier Werte", "Haycock ergibt etwa 1,979 m², den höchsten"],
      },
      {
        title: "165 lb, 64 in",
        steps: ["165 lb × 0,45359237 = 74,84 kg; 64 in × 2,54 = 162,56 cm", "Mosteller: √(162,56 × 74,84 ÷ 3600) ≈ 1,84 m²", "Du Bois ≈ 1,802 m², Haycock ≈ 1,859 m²"],
      },
    ],
    assumptions: [
      "Das Ergebnis ist eine Schätzung, keine medizinische Beratung, und dieser Rechner wurde noch nicht fachlich geprüft. Verwenden Sie ihn niemals zur Berechnung einer Medikamentendosis ohne Bestätigung durch qualifiziertes medizinisches Fachpersonal.",
      "Alle vier Formeln sind statistische Anpassungen an Personengruppen, die vor Jahrzehnten gemessen wurden. Sie können voneinander und von der tatsächlichen Körperoberfläche einer Person um mehrere Prozent abweichen, besonders bei sehr kleinen, sehr großen oder sehr schweren Menschen.",
      "Akzeptiert werden Gewichte von 0,5 bis 500 kg und Größen von 30 bis 260 cm. Kliniken verwenden für Kinder oder Menschen mit Adipositas möglicherweise eine andere Formel oder ein angepasstes Gewicht.",
      "Pfund werden mit 1 lb = 0,45359237 kg und Zoll mit 1 in = 2,54 cm umgerechnet, beides exakt.",
    ],
    faqs: [
      { question: "Wie groß ist eine typische Körperoberfläche?", answer: "Bei Erwachsenen liegt sie meist zwischen etwa 1,6 und 2,2 m², je nach Größe und Gewicht. Bei Kindern sind die Werte deutlich kleiner, und die Formeln weichen bei diesen Größen stärker voneinander ab." },
      { question: "Welche Formel soll ich verwenden?", answer: "Mosteller ist am gebräuchlichsten, weil sie leicht zu berechnen ist und bei den meisten Erwachsenen gut mit den anderen übereinstimmt. Kliniken und Protokolle geben oft eine Formel vor; verwenden Sie die Ihres Behandlungsteams." },
      { question: "Warum liefern die Formeln unterschiedliche Ergebnisse?", answer: "Jede wurde an eine andere Personengruppe mit einer anderen Methode zur Messung der Hautfläche angepasst. Bei durchschnittlichen Erwachsenen sind die Unterschiede meist klein, bei Menschen außerhalb des zugrunde liegenden Bereichs größer." },
    ],
    sourcesUsedFor: [
      "Die Mosteller-Formel KOF = √(Größe in cm × Gewicht in kg ÷ 3600).",
      "Die Du-Bois-Konstanten 0,007184 × Gewicht^0,425 × Größe^0,725.",
      "Die Haycock-Formel 0,024265 × Gewicht^0,5378 × Größe^0,3964.",
      "Die Gehan-George-Formel 0,0235 × Gewicht^0,51456 × Größe^0,42246.",
    ],
  },
  text: {
    weight: "Gewicht",
    weightUnit: "Gewichtseinheit",
    weightUnits: { kg: "Kilogramm (kg)", lb: "Pfund (lb)" },
    height: "Körpergröße",
    heightUnit: "Größeneinheit",
    heightUnits: { cm: "Zentimeter (cm)", in: "Zoll (in)" },
    errors: {
      weightRange: "Geben Sie ein Gewicht zwischen {min} und {max} ein.",
      heightRange: "Geben Sie eine Körpergröße zwischen {min} und {max} ein.",
    },
    bsa: "Körperoberfläche (Mosteller)",
    caption: "√({height} cm × {weight} kg ÷ 3600).",
    bsaFt: "Körperoberfläche (Mosteller) in Quadratfuß",
    spread: "Spanne zwischen den vier Formeln",
    table: {
      caption: "Körperoberfläche nach Formel",
      formula: "Formel",
      m2: "m²",
      ft2: "ft²",
    },
    formulas: { mosteller: "Mosteller (1987)", duBois: "Du Bois und Du Bois (1916)", haycock: "Haycock et al. (1978)", gehanGeorge: "Gehan und George (1970)" },
    notes: {
      estimate: "Jede Formel ist eine an eine begrenzte Personengruppe angepasste Schätzung; sie können voneinander und von einer gemessenen Körperoberfläche um mehrere Prozent abweichen, am stärksten bei extremen Körpergrößen.",
      dosing: "Verwenden Sie dieses Ergebnis nicht zur Berechnung einer Medikamentendosis. Dosen auf Basis der Körperoberfläche müssen von qualifiziertem medizinischem Fachpersonal berechnet und geprüft werden.",
    },
  },
};

export default de;
