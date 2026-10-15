import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { UnitPriceText } from "../text/en";

const de: CalculatorTranslation<UnitPriceText> = {
  content: {
    title: "Grundpreisrechner",
    shortTitle: "Grundpreis",
    summary: "Vergleichen Sie zwei Packungsgrößen nach dem Preis pro Kilogramm, Liter oder Stück und sehen Sie, welche das bessere Angebot ist.",
    metaTitle: "Grundpreisrechner – Preis pro Kilo, Liter oder Stück",
    metaDescription: "Vergleichen Sie zwei Produkte nach Grundpreis pro kg, Liter oder Stück, auch in Unzen oder Gallonen, und sehen Sie, wie viel das günstigere spart.",
    keywords: ["Grundpreis berechnen", "Preis pro Kilo", "Preis pro Liter", "Kilopreis", "Preisvergleich", "Packungsgrößen vergleichen", "Einkauf vergleichen"],
    intro: [
      "Eine größere Packung ist nicht immer günstiger pro Gramm. Der Grundpreis – der Preis geteilt durch die Menge – ist der faire Weg, zwei Größen oder zwei Marken zu vergleichen.",
      "Geben Sie Preis und Menge jedes Artikels ein. Mengen können in metrischen oder US-Einheiten angegeben werden; beide werden vor dem Vergleich in eine gemeinsame Einheit umgerechnet.",
    ],
    howToUse: [
      "Wählen Sie die Währung der Preise.",
      "Geben Sie für Artikel A den Preis, die Menge in der Packung und ihre Einheit ein.",
      "Machen Sie dasselbe für Artikel B mit einer Einheit derselben Art: Gewicht, Volumen oder Stückzahl.",
      "Lesen Sie ab, welcher Artikel günstiger ist, den Preis beider pro Kilogramm, Liter oder Stück und die prozentuale Ersparnis.",
    ],
    formulas: [
      { title: "Grundpreis", expression: "Grundpreis = Preis ÷ Menge", explanation: "Die Menge wird zuerst in Kilogramm, Liter oder Stück umgerechnet." },
      { title: "Prozentuale Ersparnis", expression: "Ersparnis = (höher − niedriger) ÷ höher × 100", explanation: "Wie viel weniger Sie pro Einheit zahlen, wenn Sie den günstigeren Artikel wählen." },
      { title: "US-Einheiten", expression: "1 oz = 28,349523125 g; 1 lb = 453,59237 g; 1 fl oz = 29,5735295625 mL; 1 gal = 3,785411784 L", explanation: "Exakte Definitionen, sodass der Vergleich nicht von Rundungen abhängt." },
    ],
    examples: [
      {
        title: "500 g für 3,49 $ gegenüber 1 kg für 5,99 $",
        steps: ["A: 3,49 ÷ 0,5 kg = 6,98 $ pro kg", "B: 5,99 ÷ 1 kg = 5,99 $ pro kg", "B spart (6,98 − 5,99) ÷ 6,98 ≈ 14,18 %"],
      },
      {
        title: "64 fl oz Saft für 4,29 $ gegenüber 1,75 L für 3,19 $",
        steps: ["64 fl oz = 64 × 29,5735295625 mL ≈ 1,8927 L", "A: 4,29 ÷ 1,8927 ≈ 2,27 $ pro L", "B: 3,19 ÷ 1,75 ≈ 1,82 $ pro L, etwa 19,58 % günstiger"],
      },
      {
        title: "12 Eier für 3,60 $ gegenüber 18 Eiern für 5,58 $",
        steps: ["A: 3,60 ÷ 12 = 0,30 $ pro Ei", "B: 5,58 ÷ 18 = 0,31 $ pro Ei", "A spart (0,31 − 0,30) ÷ 0,31 ≈ 3,23 %"],
      },
    ],
    assumptions: [
      "Beide Artikel sind für Sie gleich nützlich: gleiche Qualität, und Sie verbrauchen die größere Packung vollständig.",
      "Unzen sind Avoirdupois-Gewichtsunzen; Flüssigunzen und Gallonen sind US-Maße. Britische Imperial-Pints und -Gallonen sind größer und werden nicht angeboten.",
      "Die Preise werden wie eingegeben verglichen; Steuern, Pfand und Gutscheine werden nicht hinzugerechnet.",
      "Die Wahl einer Währung ändert nur die Formatierung.",
    ],
    faqs: [
      { question: "Kann ich einen nach Gewicht verkauften Artikel mit einem nach Volumen verkauften vergleichen?", answer: "Nicht direkt. Gramm und Milliliter stimmen nur bei wasserähnlichen Flüssigkeiten überein, daher verlangt der Rechner Einheiten derselben Art. Sehen Sie auf dem Etikett nach: Viele Packungen geben beides an." },
      { question: "Warum pro Kilogramm oder Liter statt pro Gramm vergleichen?", answer: "Preise pro Gramm sind winzig und schwer zu lesen. Pro Kilogramm oder Liter erhalten Sie Zahlen in ähnlicher Größe wie auf Regaletiketten, und die Reihenfolge ist in beiden Fällen dieselbe." },
      { question: "Stimmt der Grundpreis am Regal immer?", answer: "Meistens, aber Geschäfte verwenden auf benachbarten Etiketten mitunter unterschiedliche Einheiten, etwa pro Unze auf dem einen und pro Pfund auf dem anderen. Wenn Sie beide Artikel hier eingeben, stehen sie in derselben Einheit." },
    ],
    sourcesUsedFor: [
      "Wie Grundpreise im Einzelhandel pro Gewichts-, Volumen- oder Stückeinheit angegeben werden.",
      "Exakte Umrechnungsfaktoren für die Avoirdupois-Unze und das Pfund sowie für die US-Flüssigunze und die US-Gallone.",
    ],
  },
  text: {
    priceA: "Preis von Artikel A",
    quantityA: "Menge von Artikel A",
    unitA: "Einheit von Artikel A",
    priceB: "Preis von Artikel B",
    quantityB: "Menge von Artikel B",
    unitB: "Einheit von Artikel B",
    quantityHelp: "Die Menge in der Packung, zum Beispiel 500 für einen 500-g-Beutel.",
    units: {
      g: "Gramm (g)",
      kg: "Kilogramm (kg)",
      oz: "Unzen (oz)",
      lb: "Pfund (lb)",
      mL: "Milliliter (mL)",
      L: "Liter (L)",
      floz: "US-Flüssigunzen (fl oz)",
      gal: "US-Gallonen (gal)",
      item: "Stück (Anzahl)",
    },
    perUnit: { mass: "kg", volume: "L", count: "Stück" },
    kindMismatch: "Artikel B muss auf dieselbe Art gemessen werden wie Artikel A: beide nach Gewicht, beide nach Volumen oder beide nach Stückzahl.",
    aCheaper: "Artikel A ist pro Einheit günstiger",
    bCheaper: "Artikel B ist pro Einheit günstiger",
    same: "Beide kosten pro Einheit gleich viel",
    result: "Besseres Angebot",
    caption: "{a} für Artikel A und {b} für Artikel B, pro {unit}.",
    unitPriceA: "Preis von Artikel A pro {unit}",
    unitPriceB: "Preis von Artikel B pro {unit}",
    saving: "Ersparnis pro Einheit mit dem günstigeren Artikel",
    difference: "Preisunterschied pro {unit}",
    notes: {
      compare: "Die Preise werden pro {unit} verglichen, nachdem beide Mengen in dieselbe Einheit umgerechnet wurden.",
      waste: "Ein niedrigerer Grundpreis ist nur dann eine Ersparnis, wenn Sie die größere Menge verbrauchen, bevor sie verdirbt.",
    },
  },
};

export default de;
