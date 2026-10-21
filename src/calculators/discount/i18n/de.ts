import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DiscountText } from "../text/en";

const de: CalculatorTranslation<DiscountText> = {
  content: {
    title: "Rabattrechner",
    shortTitle: "Rabatt",
    summary: "Ermitteln Sie aus dem Originalpreis und einem prozentualen Rabatt den reduzierten Preis und Ihre Ersparnis.",
    metaTitle: "Rabattrechner – reduzierter Preis und Ersparnis",
    metaDescription:
      "Berechnen Sie aus Originalpreis und Rabatt in Prozent sofort den reduzierten Preis und wie viel Sie sparen.",
    keywords: ["Rabatt berechnen", "Rabattrechner", "Prozent Rabatt", "reduzierter Preis", "Ersparnis berechnen", "Gutschein", "Preisnachlass"],
    intro: [
      "Geben Sie den Originalpreis und den Rabatt in Prozent ein, um den reduzierten Preis und Ihre Ersparnis zu sehen.",
      "Praktisch bei Sonderangeboten, Gutscheinen und zum Vergleichen von Angeboten.",
    ],
    howToUse: [
      "Geben Sie den Originalpreis ein.",
      "Geben Sie den Rabatt in Prozent ein.",
      "Lesen Sie den reduzierten Preis und den gesparten Betrag ab.",
    ],
    formulas: [
      { title: "Ersparnis", expression: "Ersparnis = Preis × Rabatt % ÷ 100", explanation: "Der abgezogene Betrag." },
      {
        title: "Reduzierter Preis",
        expression: "Reduzierter Preis = Preis − Ersparnis = Preis × (1 − Rabatt ÷ 100)",
        explanation: "Was Sie vor einer etwaigen Umsatzsteuer zahlen.",
      },
    ],
    examples: [
      { title: "120 $ mit 25 % Rabatt", steps: ["Ersparnis = 120 $ × 0,25 = 30 $", "Reduzierter Preis = 120 $ − 30 $ = 90 $"] },
      { title: "59,99 $ mit 15 % Rabatt", steps: ["Ersparnis = 59,99 $ × 0,15 = 9,00 $", "Reduzierter Preis ≈ 50,99 $"] },
    ],
    assumptions: [
      "Die Umsatzsteuer ist nicht enthalten; verwenden Sie den Umsatzsteuerrechner, um sie hinzuzufügen.",
      "Zwei aufeinanderfolgende Rabatte werden multipliziert, nicht addiert: 20 % und danach 10 % Rabatt ergeben 28 % Rabatt, nicht 30 %.",
    ],
    faqs: [
      {
        question: "Wie berechne ich einen prozentualen Rabatt?",
        answer: "Multiplizieren Sie den Preis mit dem Rabatt als Dezimalzahl und ziehen Sie das Ergebnis ab. 30 % Rabatt auf 50 $ ergeben 50 $ − 15 $ = 35 $.",
      },
      {
        question: "Darf man zwei Rabatte einfach addieren?",
        answer: "Nein. 20 % und danach 10 % Rabatt lassen 0,8 × 0,9 = 72 % des Preises übrig, insgesamt also 28 % Rabatt.",
      },
      {
        question: "Wie ermittle ich den Originalpreis aus einem reduzierten Preis?",
        answer: "Teilen Sie den reduzierten Preis durch (1 − Rabatt ÷ 100). 60 $ nach 25 % Rabatt waren ursprünglich 60 $ ÷ 0,75 = 80 $.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    price: "Originalpreis",
    percent: "Rabatt",
    sale: "Reduzierter Preis",
    save: "Ihre Ersparnis",
    share: "Anteil am Originalpreis",
  },
};

export default de;
