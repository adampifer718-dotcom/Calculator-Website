import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PizzaSizeText } from "../text/en";

const de: CalculatorTranslation<PizzaSizeText> = {
  content: {
    title: "Pizzagrößenrechner",
    shortTitle: "Pizzagröße",
    summary: "Vergleichen Sie zwei Pizzen nach Fläche und Preis pro Quadratzoll oder Quadratzentimeter, um das bessere Angebot zu finden.",
    metaTitle: "Pizzagrößenrechner – Preis pro cm² oder Quadratzoll",
    metaDescription: "Vergleichen Sie zwei Pizzagrößen nach Fläche und Preis pro Quadratzoll oder cm², sehen Sie das bessere Angebot und wie viele kleine einer großen entsprechen.",
    keywords: ["Pizzagröße vergleichen", "Pizzafläche berechnen", "Preis pro Quadratzentimeter", "Pizza Preisvergleich", "große oder mittlere Pizza", "Pizza Angebot", "Kreisfläche Pizza"],
    intro: [
      "Pizzagrößen werden nach dem Durchmesser benannt, gegessen wird aber Fläche, und die Fläche wächst mit dem Quadrat des Durchmessers. Eine 16-Zoll-Pizza ist nur ein Drittel breiter als eine 12-Zoll-Pizza, hat aber fast 78 % mehr Pizza.",
      "Geben Sie Durchmesser und Preis zweier Pizzen ein, um die Fläche jeder Pizza, den Preis pro Flächeneinheit und das Angebot mit mehr Pizza fürs Geld zu sehen.",
    ],
    howToUse: [
      "Wählen Sie, ob die Durchmesser in Zoll oder Zentimetern angegeben sind.",
      "Geben Sie Durchmesser und Preis von Pizza A ein.",
      "Geben Sie Durchmesser und Preis von Pizza B ein.",
      "Lesen Sie ab, welche Pizza das bessere Angebot ist, den Preis pro Quadratzoll oder Quadratzentimeter und wie sich die Größen zueinander verhalten.",
    ],
    formulas: [
      { title: "Fläche", expression: "A = π × d² ÷ 4", explanation: "d ist der Durchmesser. Das entspricht π × r² mit dem Radius r = d ÷ 2." },
      { title: "Preis pro Fläche", expression: "Preis ÷ A", explanation: "Der niedrigere Wert ist das bessere Angebot." },
      { title: "Größenverhältnis", expression: "A_B ÷ A_A = (d_B ÷ d_A)²", explanation: "Wie viele Pizzen A dieselbe Fläche haben wie eine Pizza B." },
    ],
    examples: [
      {
        title: "12 Zoll für 12,99 $ gegenüber 16 Zoll für 18,99 $",
        steps: ["A: π × 12² ÷ 4 ≈ 113,10 in², also 12,99 $ ÷ 113,10 ≈ 0,1149 $ pro in²", "B: π × 16² ÷ 4 ≈ 201,06 in², also 18,99 $ ÷ 201,06 ≈ 0,0944 $ pro in²", "(16 ÷ 12)² ≈ 1,778, B hat also etwa 77,78 % mehr Pizza"],
      },
      {
        title: "30 cm für 9,50 € gegenüber 40 cm für 17,90 €",
        steps: ["A: π × 30² ÷ 4 ≈ 706,86 cm², also 9,50 € ÷ 706,86 ≈ 0,0134 € pro cm²", "B: π × 40² ÷ 4 ≈ 1.256,64 cm², also 17,90 € ÷ 1.256,64 ≈ 0,0142 € pro cm²", "Hier ist die kleinere Pizza pro Quadratzentimeter günstiger"],
      },
    ],
    assumptions: [
      "Die Pizzen sind rund, und der Durchmesser ist die volle Breite einschließlich Rand.",
      "Beide Pizzen haben dieselbe Dicke und denselben Belag, sodass die Fläche ein faires Maß dafür ist, wie viel Essen Sie bekommen.",
      "Die Wahl einer Währung ändert nur die Formatierung.",
    ],
    faqs: [
      { question: "Warum hat eine etwas größere Pizza so viel mehr Fläche?", answer: "Die Fläche hängt vom Quadrat des Durchmessers ab. Von 10 auf 14 Zoll ist 40 % breiter, verdoppelt die Fläche aber fast, weil 1,4² = 1,96." },
      { question: "Sind zwei mittlere Pizzen besser als eine große?", answer: "Vergleichen Sie die Flächen. Zwei 12-Zoll-Pizzen haben zusammen etwa 226 in², eine 18-Zoll-Pizza etwa 254 in² – die einzelne große ist also größer." },
      { question: "Soll ich den Rand mitzählen?", answer: "Dieser Rechner tut es, weil Größen nach dem vollen Durchmesser verkauft werden. Wenn Sie den Rand liegen lassen, ziehen Sie vor der Eingabe die doppelte Randbreite vom Durchmesser jeder Pizza ab." },
    ],
    sourcesUsedFor: ["Die Kreisfläche A = πr² und ihre Form mit dem Durchmesser."],
  },
  text: {
    unit: "Einheit des Durchmessers",
    units: { in: "Zoll (in)", cm: "Zentimeter (cm)" },
    diameterA: "Durchmesser von Pizza A",
    priceA: "Preis von Pizza A",
    diameterB: "Durchmesser von Pizza B",
    priceB: "Preis von Pizza B",
    diameterHelp: "Quer durch die Mitte gemessen, von Rand zu Rand.",
    result: "Besseres Angebot",
    aBetter: "Pizza A ist das bessere Angebot",
    bBetter: "Pizza B ist das bessere Angebot",
    same: "Beide Pizzen sind gleich preiswert",
    caption: "Pizza A kostet {a} und Pizza B kostet {b}.",
    perArea: "{price} pro {unit}",
    areaA: "Fläche von Pizza A",
    areaB: "Fläche von Pizza B",
    pricePerAreaA: "Preis von Pizza A pro {unit}",
    pricePerAreaB: "Preis von Pizza B pro {unit}",
    aPerB: "Anzahl Pizzen A, die flächenmäßig einer Pizza B entsprechen",
    moreA: "Mehr Pizza bei A im Vergleich zu B",
    moreB: "Mehr Pizza bei B im Vergleich zu A",
    sameSize: "Beide Pizzen haben dieselbe Fläche",
    sameSizeValue: "Gleich groß",
    note: "Vergleicht die gesamte runde Fläche einschließlich Rand. Dicke und Belag werden als gleich angenommen.",
  },
};

export default de;
