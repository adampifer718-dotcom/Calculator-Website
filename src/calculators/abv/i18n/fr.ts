import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AbvText } from "../text/en";

const fr: CalculatorTranslation<AbvText> = {
  content: {
    title: "Calculateur de taux d’alcool (ABV)",
    shortTitle: "Taux d’alcool par densité",
    summary: "Estimez le taux d’alcool d’une bière, d’un vin ou d’un cidre maison à partir des densités initiale et finale, en densité ou en degrés Plato.",
    metaTitle: "Calculateur de taux d’alcool (ABV) – Densités DI et DF",
    metaDescription:
      "Estimez le taux d’alcool d’un brassin maison à partir des densités initiale et finale (densité ou °Plato), avec deux formules, l’ABW et l’atténuation.",
    keywords: ["calcul taux d’alcool", "ABV", "degré d’alcool bière", "densité initiale", "densité finale", "brassage amateur", "densimètre", "degrés Plato"],
    intro: [
      "La levure transforme le sucre en alcool et en dioxyde de carbone et, comme l’alcool est plus léger que l’eau, la densité d’une bière, d’un vin ou d’un cidre baisse pendant la fermentation. Les brasseurs amateurs mesurent cette densité au densimètre ou au réfractomètre avant et après la fermentation : ce sont la densité initiale (DI) et la densité finale (DF).",
      "Saisissez les deux lectures, en densité ou en degrés Plato, pour estimer le taux d’alcool en volume. Le calculateur affiche la formule standard courante, une formule alternative que beaucoup de brasseurs préfèrent pour les bières fortes, un taux d’alcool en masse approximatif et l’atténuation apparente.",
    ],
    howToUse: [
      "Indiquez si vos lectures sont en densité (par exemple 1,050) ou en degrés Plato (par exemple 12 °P).",
      "Saisissez la densité initiale, mesurée avant l’ajout de la levure.",
      "Saisissez la densité finale, mesurée une fois la fermentation terminée.",
      "Lisez le taux d’alcool obtenu avec la formule standard, et comparez-le à celui de la formule alternative affiché en dessous.",
    ],
    formulas: [
      {
        title: "Formule standard",
        expression: "ABV = (DI − DF) × 131,25",
        explanation: "L’estimation la plus utilisée en brassage amateur. Pour une DI de 1,050 et une DF de 1,010, elle donne 0,040 × 131,25 = 5,25 %.",
      },
      {
        title: "Formule alternative",
        expression: "ABV = 76,08 × (DI − DF) ÷ (1,775 − DI) × DF ÷ 0,794",
        explanation: "Attribuée à Ritchie Products (Zymurgy, 1995). Elle donne des valeurs plus élevées que la formule standard pour les bières fortes.",
      },
      {
        title: "Des degrés Plato à la densité",
        expression: "densité = 1 + P ÷ (258,6 − (P ÷ 258,2) × 227,1)",
        explanation: "Utilisée lorsque les lectures sont en degrés Plato. 12 °P correspond à environ 1,0484.",
      },
      {
        title: "Taux d’alcool en masse et atténuation",
        expression: "ABW ≈ ABV × 0,789 ÷ DF ;  atténuation = (DI − DF) ÷ (DI − 1) × 100",
        explanation: "0,789 est la densité de l’éthanol par rapport à l’eau à 20 °C. L’atténuation est dite apparente parce que l’alcool fait descendre la lecture du densimètre sous l’extrait réellement restant.",
      },
    ],
    examples: [
      {
        title: "Une pale ale de 1,050 à 1,010",
        steps: ["Baisse = 1,050 − 1,010 = 0,040", "ABV = 0,040 × 131,25 = 5,25 %", "Atténuation apparente = 0,040 ÷ 0,050 = 80 %"],
      },
      {
        title: "Une bière forte de 1,092 à 1,021",
        steps: [
          "Standard : (1,092 − 1,021) × 131,25 ≈ 9,32 %",
          "Alternative : 76,08 × 0,071 ÷ (1,775 − 1,092) × 1,021 ÷ 0,794 ≈ 10,17 %",
          "À ce niveau d’alcool, les deux formules diffèrent de près d’un point de pourcentage",
        ],
      },
      {
        title: "Une lager mesurée en Plato : de 12 °P à 2,5 °P",
        steps: [
          "DI = 1 + 12 ÷ (258,6 − (12 ÷ 258,2) × 227,1) ≈ 1,04838",
          "DF = 1 + 2,5 ÷ (258,6 − (2,5 ÷ 258,2) × 227,1) ≈ 1,00975",
          "ABV = (1,04838 − 1,00975) × 131,25 ≈ 5,07 %",
        ],
      },
    ],
    assumptions: [
      "Il s’agit uniquement d’une estimation de brassage amateur. Elle ne convient pas à l’étiquetage légal ou commercial, qui exige une méthode de laboratoire étalonnée.",
      "Aucune correction de température du densimètre n’est appliquée. Corrigez d’abord vos lectures à la température d’étalonnage du densimètre.",
      "Les lectures sont considérées comme de vraies densités. Une lecture au réfractomètre prise après le début de la fermentation est faussée par l’alcool et demande une correction séparée.",
      "Le sucre ajouté à l’embouteillage, ou tout sucre ajouté après la mesure de la densité initiale, n’est pas pris en compte.",
    ],
    faqs: [
      {
        question: "Quelle formule utiliser ?",
        answer: "Pour la plupart des bières entre environ 1,040 et 1,060, les deux donnent des résultats très proches. Pour les bières plus fortes, elles divergent, et beaucoup de brasseurs préfèrent alors la formule alternative. Aucune ne remplace une mesure en laboratoire.",
      },
      {
        question: "Quelle est la différence entre ABV et ABW ?",
        answer: "L’ABV est le volume d’alcool en pourcentage du volume de la boisson. L’ABW est sa masse en pourcentage de la masse de la boisson. L’alcool est plus léger que l’eau : l’ABW est donc plus faible, environ 80 % de l’ABV pour une bière typique.",
      },
      {
        question: "Qu’est-ce que l’atténuation apparente ?",
        answer: "C’est la part de la densité initiale au-dessus de 1,000 qui a disparu pendant la fermentation. On la dit apparente parce que l’alcool est moins dense que l’eau et fait paraître la lecture finale plus basse que la teneur réelle en sucre restant.",
      },
    ],
    sourcesUsedFor: [
      "La formule standard ABV = (DI − DF) × 131,25, la formule alternative 76,08 (DI − DF) ÷ (1,775 − DI) × DF ÷ 0,794, et l’exemple détaillé DI 1,092, DF 1,021.",
      "La conversion densité = 1 + P ÷ (258,6 − (P ÷ 258,2) × 227,1).",
      "L’origine de la formule alternative (Ritchie Products, Zymurgy 1995).",
      "La conversion entre ABV et ABW avec la densité de la boisson et celle de l’éthanol (environ 0,789).",
    ],
  },
  text: {
    scale: "Échelle de densité",
    scales: { sg: "Densité (SG)", plato: "Degrés Plato (°P)" },
    og: "Densité initiale (DI)",
    ogHelp: "La densité avant fermentation, par exemple 1,050. Plage acceptée : 0,980 à 1,200.",
    fg: "Densité finale (DF)",
    fgHelp: "La densité après fermentation, par exemple 1,010.",
    ogPlato: "Extrait initial",
    ogPlatoHelp: "La densité initiale en degrés Plato, par exemple 12.",
    fgPlato: "Extrait final apparent",
    fgPlatoHelp: "La lecture finale du densimètre en degrés Plato, par exemple 2,5. Elle peut être légèrement inférieure à 0 pour les bières très sèches.",
    errors: {
      fgAboveOg: "La densité finale ne peut pas être supérieure à la densité initiale.",
      sgRange: "Cela correspond à une densité de {sg}, en dehors de la plage acceptée de 0,980 à 1,200.",
    },
    abv: "Taux d’alcool en volume (formule standard)",
    caption: "DI {og} − DF {fg} = {drop} points de densité.",
    abvAlt: "Taux d’alcool en volume (formule alternative)",
    abw: "Taux d’alcool en masse (approximatif)",
    attenuation: "Atténuation apparente",
    ogSg: "Densité initiale en SG",
    fgSg: "Densité finale en SG",
    notes: {
      estimate: "Il s’agit d’une estimation de brassage amateur à partir de lectures au densimètre, et non d’une valeur pour l’étiquetage légal. Aucune correction de température du densimètre n’est appliquée.",
      high: "Pour les moûts forts, les deux formules donnent des résultats nettement différents. Beaucoup de brasseurs préfèrent la formule alternative aux densités élevées.",
      noAttenuation: "L’atténuation apparente nécessite une densité initiale supérieure à 1,000.",
    },
  },
};

export default fr;
