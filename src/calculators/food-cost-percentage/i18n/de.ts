import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FoodCostPercentageText } from "../text/en";

const de: CalculatorTranslation<FoodCostPercentageText> = {
  content: {
    title: "Wareneinsatzrechner (Food Cost)",
    shortTitle: "Wareneinsatz",
    summary: "Ermitteln Sie die Wareneinsatzquote eines Gerichts oder eines ganzen Zeitraums aus Inventur und Umsatz sowie den Menüpreis für einen Ziel-Wareneinsatz.",
    metaTitle: "Wareneinsatzrechner – Tellerkosten und Menüpreis",
    metaDescription: "Berechnen Sie die Wareneinsatzquote für ein Gericht oder einen Zeitraum aus Inventur, Einkäufen und Umsatz – mit Rohertrag und Menüpreis für Ihre Zielquote.",
    keywords: ["Wareneinsatz berechnen", "Wareneinsatzquote", "Food Cost", "Tellerkosten", "Menüpreis kalkulieren", "Gastronomie Kalkulation", "Warenkosten", "Speisenkalkulation"],
    intro: [
      "Die Wareneinsatzquote (Food-Cost-Prozentsatz) ist der Anteil eines Menüpreises oder des Speisenumsatzes eines Restaurants, der auf die Zutaten entfällt. Sie gehört zu den meistbeachteten Kennzahlen in der Gastronomie, weil sie schnell zeigt, ob die Preise mit den Einkaufskosten der Lebensmittel Schritt halten.",
      "Mit dem Modus Gericht prüfen Sie einen einzelnen Menüpunkt anhand von Tellerkosten und Preis und finden den Preis für einen Ziel-Wareneinsatz. Mit dem Modus Zeitraum berechnen Sie den Wareneinsatz für eine Woche oder einen Monat aus Inventurwerten, Einkäufen und Speisenumsatz.",
    ],
    howToUse: [
      "Wählen Sie die Währung und ob Sie ein einzelnes Gericht oder einen ganzen Zeitraum berechnen.",
      "Geben Sie für ein Gericht die Tellerkosten (die Kosten aller Zutaten einer Portion) und den Menüpreis ohne Steuer ein.",
      "Geben Sie für einen Zeitraum den Wert des Lebensmittelbestands zu Beginn und am Ende, die dazwischen eingekauften Lebensmittel und den Speisenumsatz desselben Zeitraums ein.",
      "Geben Sie optional eine Ziel-Wareneinsatzquote ein, um einen vorgeschlagenen Menüpreis oder den Umsatz zu erhalten, den der Wareneinsatz des Zeitraums erfordern würde.",
    ],
    formulas: [
      {
        title: "Wareneinsatzquote eines Gerichts",
        expression: "Wareneinsatz % = Tellerkosten ÷ Menüpreis × 100",
        explanation: "Der Menüpreis ist der Preis ohne Umsatzsteuer.",
      },
      {
        title: "Menüpreis für eine Zielquote",
        expression: "Preis = Tellerkosten ÷ (Ziel % ÷ 100)",
        explanation: "Zum Beispiel ergeben Tellerkosten von 4,20 $ bei einer Zielquote von 28 % 4,20 ÷ 0,28 = 15,00 $.",
      },
      {
        title: "Wareneinsatzquote eines Zeitraums",
        expression: "Wareneinsatz = Anfangsbestand + Einkäufe − Endbestand;  Wareneinsatz % = Wareneinsatz ÷ Speisenumsatz × 100",
        explanation: "Der Wareneinsatz (COGS) sind die Kosten der im Zeitraum verbrauchten Lebensmittel, ob verkauft, weggeworfen oder abgegeben.",
      },
      {
        title: "Rohertrag und Marge",
        expression: "Rohertrag = Preis − Wareneinsatz;  Marge % = Rohertrag ÷ Preis × 100",
        explanation: "Diese Marge zieht nur den Wareneinsatz ab; Personal- und Gemeinkosten müssen noch daraus bezahlt werden.",
      },
    ],
    examples: [
      {
        title: "Ein Gericht für 14 $ mit 4,20 $ Tellerkosten, Zielquote 28 %",
        steps: ["Wareneinsatz = 4,20 ÷ 14 × 100 = 30 %", "Rohertrag = 14 − 4,20 = 9,80 $, eine Marge von 70 %", "Preis für 28 % = 4,20 ÷ 0,28 = 15,00 $"],
      },
      {
        title: "Ein Nudelgericht für 12,50 € mit 3,85 € Herstellungskosten",
        steps: ["Wareneinsatz = 3,85 ÷ 12,50 × 100 = 30,8 %", "Preis für eine Zielquote von 30 % = 3,85 ÷ 0,30 ≈ 12,83 €"],
      },
      {
        title: "Ein Monat aus Inventurwerten",
        steps: [
          "Wareneinsatz = 9.200 + 14.600 − 8.100 = 15.700 $",
          "Wareneinsatzquote = 15.700 ÷ 48.500 × 100 ≈ 32,37 %",
          "Rohertrag aus Speisen = 48.500 − 15.700 = 32.800 $; bei 30 % bräuchte derselbe Wareneinsatz etwa 52.333 $ Umsatz",
        ],
      },
    ],
    assumptions: [
      "Alle Beträge sind in einer Währung und ohne Umsatzsteuer. Der Bestand wird zu Einkaufspreisen bewertet.",
      "Der Modus Zeitraum setzt voraus, dass die Inventuren genau zu Beginn und am Ende desselben Zeitraums wie der Umsatz erfolgen und dass die Einkäufe nur Lebensmittel umfassen (keine Getränke oder Verbrauchsmaterial, sofern Sie diese nicht einbeziehen möchten).",
      "Es gibt nicht die eine richtige Wareneinsatzquote. Häufig wird ein Bereich von 28 bis 35 Prozent des Verkaufspreises genannt, doch der richtige Wert hängt von der Art des Restaurants, seinen Preisen und seinen übrigen Kosten ab.",
    ],
    faqs: [
      {
        question: "Was ist eine gute Wareneinsatzquote?",
        answer: "Häufig werden etwa 28 bis 35 Prozent genannt, doch es gibt keinen allgemeingültigen Zielwert. Ein Restaurant mit hohen Personal- oder Mietkosten braucht womöglich einen niedrigeren Wareneinsatz, während ein Betrieb mit hochwertigen Zutaten und wenig Personal höher liegen kann.",
      },
      {
        question: "Warum weicht mein Wareneinsatz für den Zeitraum von meinen Gerichtskalkulationen ab?",
        answer: "Der Wert für den Zeitraum umfasst alles, was den Bestand verlassen hat: Abfall, Verderb, Personalessen, zu große Portionen und Diebstahl sowie die verkauften Lebensmittel. Der Vergleich mit den geplanten Gerichtskosten ist ein guter Weg, diese Verluste zu finden.",
      },
      {
        question: "Soll ich die Umsatzsteuer in den Menüpreis einrechnen?",
        answer: "Nein. Verwenden Sie den Preis ohne Steuer, denn die Umsatzsteuer wird für den Staat eingenommen und ist kein Erlös des Betriebs.",
      },
    ],
    sourcesUsedFor: [
      "Wareneinsatz % = Portionskosten ÷ Menüpreis × 100 und der häufig genannte Bereich von 28 bis 35 Prozent des Verkaufspreises.",
      "Wareneinsatz % eines Zeitraums = (Anfangsbestand + Einkäufe − Endbestand) ÷ Speisenumsatz × 100.",
    ],
  },
  text: {
    mode: "Berechnen für",
    modes: { dish: "Ein Gericht", period: "Einen Zeitraum (Inventur)" },
    plateCost: "Tellerkosten",
    plateCostHelp: "Die Kosten aller Zutaten einer Portion, einschließlich Garnitur und Beilagen.",
    menuPrice: "Menüpreis",
    menuPriceHelp: "Der Verkaufspreis des Gerichts ohne Umsatzsteuer.",
    beginInventory: "Anfangsbestand",
    beginInventoryHelp: "Der Wert des Lebensmittelbestands zu Beginn des Zeitraums.",
    purchases: "Lebensmitteleinkäufe",
    purchasesHelp: "Der Wert der im Zeitraum eingekauften Lebensmittel.",
    endInventory: "Endbestand",
    endInventoryHelp: "Der Wert des Lebensmittelbestands am Ende des Zeitraums.",
    sales: "Speisenumsatz",
    salesHelp: "Netto-Speisenumsatz desselben Zeitraums, ohne Umsatzsteuer.",
    target: "Ziel-Wareneinsatzquote in % (optional)",
    targetHelp: "Die angestrebte Wareneinsatzquote, um einen vorgeschlagenen Menüpreis oder den daraus folgenden Umsatz zu erhalten.",
    errors: {
      inventory: "Der Endbestand darf nicht größer sein als Anfangsbestand plus Einkäufe.",
    },
    foodCost: "Wareneinsatzquote",
    captionDish: "Tellerkosten {cost} ÷ Menüpreis {price}.",
    captionPeriod: "Wareneinsatz {cogs} ÷ Speisenumsatz {sales}.",
    grossProfitPlate: "Rohertrag pro Teller",
    grossProfitPeriod: "Rohertrag aus Speisen im Zeitraum",
    margin: "Deckungsbeitrag nach Wareneinsatz",
    suggestedPrice: "Vorgeschlagener Menüpreis bei der Zielquote",
    salesAtTarget: "Benötigter Speisenumsatz bei der Zielquote",
    cogs: "Wareneinsatz (Lebensmittel)",
    notes: {
      margin: "Die Marge zieht hier nur den Wareneinsatz ab. Personal, Miete und andere Kosten müssen noch daraus gedeckt werden.",
      rounding: "Der vorgeschlagene Preis ist der Preis, bei dem diese Tellerkosten der Zielquote entsprechen. Menüpreise werden oft auf einen glatten Betrag gerundet.",
      above100: "Der Wareneinsatz ist höher als der Verkaufspreis, daher bringt jeder Verkauf schon allein bei den Zutaten Verlust.",
    },
  },
};

export default de;
