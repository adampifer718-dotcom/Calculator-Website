import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LengthConverterText } from "../text/en";

const fr: CalculatorTranslation<LengthConverterText> = {
  content: {
    title: "Convertisseur de longueurs",
    shortTitle: "Longueurs",
    summary: "Convertissez entre millimètres, centimètres, mètres, kilomètres, pouces, pieds, yards, miles et milles marins.",
    metaTitle: "Convertisseur de longueurs – Unités métriques et impériales",
    metaDescription: "Convertissez des longueurs entre unités métriques et impériales : mm, cm, m, km, pouces, pieds, yards, miles et milles marins, avec des facteurs exacts.",
    keywords: ["convertisseur de longueur", "conversion km en miles", "pieds en mètres", "pouces en cm", "convertir distance", "conversion d’unités"],
    intro: [
      "Convertissez une longueur entre neuf unités courantes. Le tableau affiche votre valeur dans toutes les unités à la fois.",
      "Tous les facteurs sont exacts par définition : un pouce vaut exactement 2,54 cm et un mile exactement 1 609,344 m.",
    ],
    howToUse: [
      "Saisissez la valeur.",
      "Choisissez l’unité de départ et l’unité d’arrivée.",
      "Consultez le résultat, ou utilisez le tableau pour voir toutes les unités.",
    ],
    formulas: [
      { title: "Conversion via le mètre", expression: "résultat = valeur × (mètres par unité de départ) ÷ (mètres par unité d’arrivée)", explanation: "Chaque unité est définie comme un nombre fixe de mètres." },
      { title: "Facteurs clés", expression: "1 in = 0,0254 m\n1 ft = 0,3048 m\n1 yd = 0,9144 m\n1 mi = 1 609,344 m\n1 nmi = 1 852 m", explanation: "Valeurs exactes issues de l’accord international de 1959 sur le yard et la livre, et du SI." },
    ],
    examples: [
      {
        title: "10 kilomètres en miles",
        steps: ["10 × 1 000 m = 10 000 m", "10 000 ÷ 1 609,344 ≈ 6,2137 mi"],
      },
      {
        title: "6 pieds en mètres",
        steps: ["6 × 0,3048", "= 1,8288 m"],
      },
    ],
    assumptions: [
      "Utilise les unités internationales : le pied d’arpentage américain (US survey foot), qui diffère d’environ 2 millionièmes, n’est pas inclus.",
      "Les résultats sont affichés avec 10 chiffres significatifs.",
    ],
    faqs: [
      { question: "Combien de pieds y a-t-il dans un mile ?", answer: "Exactement 5 280 pieds." },
      { question: "Comment convertir des pouces en centimètres ?", answer: "Multipliez par 2,54. Par exemple, 12 in × 2,54 = 30,48 cm." },
      { question: "Qu’est-ce qu’un mille marin ?", answer: "Une unité utilisée en navigation maritime et aérienne, définie comme exactement 1 852 mètres." },
    ],
    sourcesUsedFor: ["Définitions exactes du pouce, du pied, du yard, du mile et du mille marin en mètres."],
  },
  text: {
    value: "Valeur",
    from: "De",
    to: "Vers",
    unitNames: { mm: "Millimètres", cm: "Centimètres", m: "Mètres", km: "Kilomètres", in: "Pouces", ft: "Pieds", yd: "Yards", mi: "Miles", nmi: "Milles marins" },
    primary: "{value} {symbol} en {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} dans toutes les unités de longueur",
    tableUnit: "Unité",
    tableValue: "Valeur",
    note: "Les résultats sont affichés avec 10 chiffres significatifs.",
  },
};

export default fr;
