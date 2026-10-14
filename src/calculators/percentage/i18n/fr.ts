import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentageText } from "../text/en";

const fr: CalculatorTranslation<PercentageText> = {
  content: {
    title: "Calculateur de pourcentage",
    shortTitle: "Pourcentage",
    summary: "Calculez X % d'un nombre, le pourcentage qu'un nombre représente par rapport à un autre, ou le total à partir d'une partie et d'un pourcentage.",
    metaTitle: "Calculateur de pourcentage – Pourcentage d'un nombre et plus",
    metaDescription:
      "Calculateur de pourcentage gratuit : calculez X % de Y, trouvez quel pourcentage X représente de Y, ou retrouvez le total, avec formules et exemples.",
    keywords: ["calcul pourcentage", "pourcentage d'un nombre", "calculer un pourcentage", "quel pourcentage", "calculateur pourcentage", "proportion"],
    intro: [
      "Ce calculateur répond aux trois questions de pourcentage les plus courantes. Choisissez une question, saisissez deux nombres, et la réponse se met à jour pendant la saisie.",
      "Un pourcentage exprime une part sur cent : 25 % signifie donc 25 sur 100.",
    ],
    howToUse: [
      "Choisissez la question à laquelle vous souhaitez répondre.",
      "Saisissez les deux valeurs connues. Les nombres négatifs et décimaux sont acceptés.",
      "Lisez le résultat et la formule utilisée pour l'obtenir.",
    ],
    formulas: [
      { title: "Combien font X % de Y ?", expression: "Résultat = X ÷ 100 × Y", explanation: "Convertissez le pourcentage en nombre décimal, puis multipliez." },
      {
        title: "X représente quel % de Y ?",
        expression: "Pourcentage = X ÷ Y × 100",
        explanation: "Divisez la partie par le total, puis multipliez par 100. Y ne peut pas valoir 0.",
      },
      {
        title: "X représente Y % de quel nombre ?",
        expression: "Total = X ÷ (Y ÷ 100)",
        explanation: "Divisez la partie par le pourcentage exprimé en décimal. Y ne peut pas valoir 0.",
      },
    ],
    examples: [
      { title: "Combien font 20 % de 150 ?", steps: ["20 ÷ 100 = 0,2", "0,2 × 150 = 30"] },
      { title: "45 représente quel pourcentage de 180 ?", steps: ["45 ÷ 180 = 0,25", "0,25 × 100 = 25 %"] },
      { title: "30 représente 12 % de quel nombre ?", steps: ["12 ÷ 100 = 0,12", "30 ÷ 0,12 = 250"] },
    ],
    assumptions: [
      "Les résultats s'affichent avec 4 à 6 décimales au maximum. Les calculs utilisent la précision complète.",
      "La division par zéro n'a pas de résultat : le total (ou le pourcentage) ne peut donc pas valoir 0 dans les deuxième et troisième questions.",
    ],
    faqs: [
      {
        question: "Comment calculer le pourcentage d'un nombre ?",
        answer: "Divisez le pourcentage par 100 et multipliez par le nombre. Par exemple, 15 % de 80 font 0,15 × 80 = 12.",
      },
      {
        question: "Comment savoir quel pourcentage un nombre représente par rapport à un autre ?",
        answer: "Divisez la partie par le total et multipliez par 100. Par exemple, 18 sur 24 donne 18 ÷ 24 × 100 = 75 %.",
      },
      {
        question: "Un pourcentage peut-il dépasser 100 % ?",
        answer: "Oui. Une valeur supérieure au total représente plus de 100 % de celui-ci. Par exemple, 300 représente 150 % de 200.",
      },
      {
        question: "Comment calculer une augmentation en pourcentage entre deux nombres ?",
        answer: "Utilisez le calculateur d'augmentation en pourcentage, qui divise la variation par la valeur initiale puis multiplie par 100.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    question: "Question",
    modes: { percentOf: "Combien font X % de Y ?", whatPercent: "X représente quel % de Y ?", findWhole: "X représente Y % de quoi ?" },
    percentX: "Pourcentage (X)",
    valueY: "Valeur (Y)",
    partX: "Partie (X)",
    wholeY: "Total (Y)",
    percentY: "Pourcentage (Y)",
    wholeZero: "Le total ne peut pas valoir 0.",
    percentZero: "Le pourcentage ne peut pas valoir 0.",
    percentResult: "Pourcentage",
    percentCaption: "{part} représente {percent} de {whole}.",
    percentFormula: "Formule : {part} ÷ {whole} × 100.",
    wholeResult: "Valeur totale",
    wholeCaption: "{part} représente {percent} de {whole}.",
    wholeFormula: "Formule : {part} ÷ ({percent} ÷ 100).",
    result: "Résultat",
    resultCaption: "{percent} de {value} font {result}.",
    minus: "{value} moins {percent}",
    plus: "{value} plus {percent}",
    resultFormula: "Formule : {percent} ÷ 100 × {value}.",
  },
};

export default fr;
