import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SpeedConverterText } from "../text/en";

const fr: CalculatorTranslation<SpeedConverterText> = {
  content: {
    title: "Convertisseur de vitesse",
    shortTitle: "Vitesse",
    summary: "Convertissez une vitesse entre mètres par seconde, kilomètres par heure, miles par heure, pieds par seconde, nœuds et centimètres par seconde.",
    metaTitle: "Convertisseur de vitesse – km/h, mph, m/s, ft/s et nœuds",
    metaDescription:
      "Convertissez une vitesse entre km/h, mph, m/s, ft/s, nœuds et cm/s avec des facteurs exacts, et voyez votre valeur dans toutes les unités dans un seul tableau.",
    keywords: ["convertisseur de vitesse", "km/h en mph", "mph en km/h", "m/s en km/h", "nœuds en km/h", "pieds par seconde", "unités de vitesse"],
    intro: [
      "Les vitesses s’expriment dans de nombreuses unités : les panneaux routiers utilisent les km/h ou les mph, les exercices de physique les m/s, les pilotes et les marins les nœuds, et les travaux de laboratoire parfois les cm/s. Ce convertisseur fait passer une valeur d’une de ces unités à une autre et l’affiche dans les six à la fois.",
      "Chaque unité correspond à un nombre fixe de mètres par seconde : la conversion se résume donc à une multiplication et une division. Tous les facteurs sont exacts ; par exemple, un mile par heure vaut exactement 0,44704 m/s, car un mile mesure exactement 1 609,344 m.",
    ],
    howToUse: [
      "Saisissez la vitesse à convertir.",
      "Choisissez son unité dans De et l’unité voulue dans Vers.",
      "Lisez la vitesse convertie, ou consultez le tableau pour les autres unités.",
    ],
    formulas: [
      {
        title: "Conversion via les mètres par seconde",
        expression: "résultat = valeur × (m/s par unité de départ) ÷ (m/s par unité d’arrivée)",
        explanation: "Chaque unité est d’abord convertie en mètres par seconde, puis dans l’unité cible.",
      },
      {
        title: "Facteurs exacts",
        expression: "1 km/h = 1/3,6 m/s ≈ 0,2778 m/s\n1 mph = 0,44704 m/s\n1 ft/s = 0,3048 m/s\n1 kn = 1 852/3 600 m/s ≈ 0,5144 m/s\n1 cm/s = 0,01 m/s",
        explanation: "Ils découlent de 1 km = 1 000 m, 1 mi = 1 609,344 m, 1 ft = 0,3048 m, 1 mille marin = 1 852 m et 1 h = 3 600 s.",
      },
    ],
    examples: [
      {
        title: "Une vitesse sur autoroute de 100 km/h en mph",
        steps: ["100 km/h = 100 ÷ 3,6 ≈ 27,778 m/s", "27,778 ÷ 0,44704 ≈ 62,137 mph"],
      },
      {
        title: "Un bateau à 30 nœuds en km/h",
        steps: ["1 kn = 1,852 km/h", "30 × 1,852 = 55,56 km/h"],
      },
      {
        title: "25 mph en pieds par seconde",
        steps: ["25 × 0,44704 = 11,176 m/s", "11,176 ÷ 0,3048 ≈ 36,667 ft/s"],
      },
    ],
    assumptions: [
      "Les miles et les pieds sont les unités internationales (1 ft = 0,3048 m). Le nœud utilise le mille marin international de 1 852 m.",
      "L’allure de course ou de marche, comme les minutes par kilomètre, n’est pas incluse, car c’est l’inverse d’une vitesse et non un multiple de celle-ci. Utilisez le Calculateur d’allure de course pour l’allure.",
      "Les résultats sont affichés avec 10 chiffres significatifs.",
    ],
    faqs: [
      {
        question: "Comment convertir des km/h en m/s ?",
        answer: "Divisez par 3,6. Par exemple, 90 km/h ÷ 3,6 = 25 m/s. Pour passer des m/s aux km/h, multipliez par 3,6.",
      },
      {
        question: "Un nœud est-il plus rapide qu’un mile par heure ?",
        answer: "Oui. Un nœud vaut un mille marin par heure, et un mille marin (1 852 m) est plus long qu’un mile terrestre (1 609,344 m) : 1 nœud vaut donc environ 1,151 mph.",
      },
      {
        question: "Pourquoi l’allure ne figure-t-elle pas dans la liste ?",
        answer: "L’allure est un temps par distance : doubler votre vitesse divise votre allure par deux. Cette relation inverse ne peut pas s’écrire comme un simple facteur de conversion, c’est pourquoi l’allure est traitée par un calculateur distinct.",
      },
    ],
    sourcesUsedFor: [
      "Facteurs de conversion du mile par heure, du pied par seconde et du nœud en mètres par seconde.",
      "Le mille marin international de 1 852 m, qui définit le nœud comme 1 852 m par heure.",
    ],
  },
  text: {
    value: "Valeur",
    from: "De",
    to: "Vers",
    unitNames: {
      ms: "Mètres par seconde",
      kmh: "Kilomètres par heure",
      mph: "Miles par heure",
      fts: "Pieds par seconde",
      kn: "Nœuds",
      cms: "Centimètres par seconde",
    },
    primary: "{value} {symbol} en {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} dans toutes les unités de vitesse",
    tableUnit: "Unité",
    tableValue: "Valeur",
    note: "Les résultats sont affichés avec 10 chiffres significatifs.",
  },
};

export default fr;
