import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RecipeScalerText } from "../text/en";

const de: CalculatorTranslation<RecipeScalerText> = {
  content: {
    title: "Rezeptumrechner",
    shortTitle: "Rezeptumrechner",
    summary: "Rechnen Sie die Zutatenmengen eines Rezepts für beliebig viele Portionen hoch oder herunter.",
    metaTitle: "Rezeptumrechner – Portionen und Zutaten anpassen",
    metaDescription: "Rechnen Sie jedes Rezept auf eine neue Portionenzahl um. Fügen Sie Ihre Zutatenliste ein und erhalten Sie angepasste Mengen als küchentaugliche Brüche.",
    keywords: ["Rezept umrechnen", "Rezeptumrechner", "Portionen umrechnen", "Zutaten umrechnen", "Rezept verdoppeln", "Rezept halbieren", "Backrezept umrechnen"],
    intro: [
      "Ein Rezept umzurechnen bedeutet, jede Menge mit demselben Faktor zu multiplizieren: gewünschte Portionen geteilt durch ursprüngliche Portionen.",
      "Fügen Sie Ihre Zutatenliste ein: Jede Menge wird umgerechnet und, wo möglich, als vertrauter Bruch angezeigt.",
    ],
    howToUse: [
      "Geben Sie ein, für wie viele Portionen das Rezept gedacht ist.",
      "Geben Sie ein, wie viele Portionen Sie möchten.",
      "Fügen Sie die Zutaten ein, eine pro Zeile, jeweils beginnend mit der Menge.",
      "Lesen Sie den Umrechnungsfaktor und die angepasste Liste ab.",
    ],
    formulas: [
      { title: "Umrechnungsfaktor", expression: "Faktor = gewünschte Portionen ÷ ursprüngliche Portionen", explanation: "Zum Beispiel 6 ÷ 4 = 1,5." },
      { title: "Neue Menge", expression: "neue Menge = ursprüngliche Menge × Faktor", explanation: "Wird auf jede Zutat angewendet, die mit einer Mengenangabe beginnt." },
    ],
    examples: [
      { title: "Ein Rezept für 4 Portionen für 6 Personen", steps: ["Faktor = 6 ÷ 4 = 1,5", "2 Tassen → 3 Tassen; 3/4 Tasse → 1 1/8 Tassen"] },
      { title: "Ein Rezept für 8 Portionen für 2 Personen", steps: ["Faktor = 2 ÷ 8 = 0,25", "4 Eier → 1 Ei"] },
    ],
    assumptions: [
      "Die Menge muss am Zeilenanfang stehen – als ganze Zahl, Dezimalzahl, Bruch (1/2), gemischte Zahl (1 1/2) oder Zeichen wie ½.",
      "Einheiten werden nicht umgerechnet; die umgerechneten Mengen behalten die ursprüngliche Einheit.",
      "Garzeiten, Formgrößen, Triebmittel und Gewürze lassen sich nicht immer linear umrechnen; schmecken Sie ab und prüfen Sie den Garzustand.",
    ],
    faqs: [
      { question: "Wie halbiere ich ein Rezept?", answer: "Verwenden Sie den Faktor 0,5, indem Sie als gewünschte Portionen die Hälfte der ursprünglichen eingeben." },
      { question: "Was mache ich mit Eiern?", answer: "Runden Sie auf ganze Eier, oder verquirlen Sie ein Ei und verwenden Sie nur einen Teil davon nach Gewicht." },
      { question: "Ändern sich die Backzeiten?", answer: "Oft. Größere oder kleinere Formen verändern die Garzeit, prüfen Sie daher früher und passen Sie an." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    original: "Portionen laut Rezept",
    desired: "Gewünschte Portionen",
    ingredients: "Zutaten (eine pro Zeile)",
    ingredientsHelp: "Beginnen Sie jede Zeile mit der Menge, z. B. „1 1/2 Tassen Mehl“. Zeilen ohne Mengenangabe bleiben unverändert.",
    defaultIngredients: "2 Tassen Mehl\n1 1/2 TL Backpulver\n3/4 Tasse Zucker\n2 Eier\n1 Tasse Milch\nSalz nach Geschmack",
    factor: "Umrechnungsfaktor",
    caption: "Multiplizieren Sie jede Menge mit {factor}.",
    tableCaption: "Umgerechnete Zutaten",
    original_: "Original",
    scaled: "Umgerechnet",
    note: "Ganze Zutaten wie Eier müssen eventuell gerundet werden. Backzeiten und Formgrößen ändern sich nicht proportional.",
  },
};

export default de;
