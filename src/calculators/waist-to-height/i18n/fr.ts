import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WaistToHeightText } from "../text/en";

const fr: CalculatorTranslation<WaistToHeightText> = {
  content: {
    title: "Calculateur de rapport tour de taille/taille",
    shortTitle: "Rapport tour de taille/taille",
    summary: "Divisez votre tour de taille par votre taille pour obtenir le rapport tour de taille/taille, et voyez dans quelle tranche de référence adulte du NICE il se situe.",
    metaTitle: "Rapport tour de taille/taille – RTT et tranches du NICE",
    metaDescription:
      "Calculez votre rapport tour de taille/taille (cm ou pouces), comparez-le aux tranches adultes du NICE et voyez le tour de taille égal à la moitié de la taille.",
    keywords: ["rapport tour de taille taille", "RTT", "ratio tour de taille sur taille", "adiposité abdominale", "tour de taille moitié de la taille", "graisse abdominale", "NICE tour de taille"],
    intro: [
      "Le rapport tour de taille/taille (RTT) est votre tour de taille divisé par votre taille. C’est un moyen simple d’estimer la quantité de graisse stockée autour du ventre, appelée adiposité abdominale, qui est associée au diabète de type 2, à l’hypertension artérielle et aux maladies cardiaques.",
      "Au Royaume-Uni, le NICE suggère aux adultes dont l’IMC est inférieur à 35 d’utiliser ce rapport en complément de l’IMC, avec un message simple : garder un tour de taille inférieur à la moitié de sa taille. Ce calculateur affiche votre rapport, la tranche de référence du NICE correspondante et le tour de taille qui correspond à un rapport de 0,5.",
    ],
    howToUse: [
      "Choisissez les centimètres ou les pouces. Utilisez la même unité pour les deux mesures.",
      "Mesurez votre tour de taille à mi-distance entre la dernière côte et le haut de l’os de la hanche, à la fin d’une expiration normale, avec le mètre ruban horizontal et bien ajusté.",
      "Mesurez votre taille sans chaussures.",
      "Lisez votre rapport, la tranche de référence et le tour de taille correspondant à un rapport de 0,5.",
    ],
    formulas: [
      {
        title: "Rapport tour de taille/taille",
        expression: "RTT = tour de taille ÷ taille",
        explanation: "Les deux dans la même unité : les unités s’annulent et le rapport est le même en cm et en pouces.",
      },
      {
        title: "Tranches de référence adultes du NICE",
        expression: "0,4 à 0,49 : pas de risque accru pour la santé\n0,5 à 0,59 : risque accru pour la santé\n0,6 ou plus : risque élevé pour la santé",
        explanation: "Pour les adultes dont l’IMC est inférieur à 35. Ce sont des tranches de référence, et non un diagnostic.",
      },
      {
        title: "Tour de taille égal à la moitié de la taille",
        expression: "tour de taille pour un rapport de 0,5 = taille ÷ 2",
        explanation: "Le seuil derrière le conseil de garder un tour de taille inférieur à la moitié de sa taille.",
      },
    ],
    examples: [
      {
        title: "Tour de taille 84 cm, taille 172 cm",
        steps: ["RTT = 84 ÷ 172 ≈ 0,49", "0,49 se situe dans la tranche 0,4 à 0,49", "La moitié de la taille vaut 172 ÷ 2 = 86 cm : le tour de taille est donc 2 cm en dessous"],
      },
      {
        title: "Tour de taille 38 in, taille 68 in",
        steps: ["RTT = 38 ÷ 68 ≈ 0,56", "0,56 se situe dans la tranche 0,5 à 0,59", "La moitié de la taille vaut 34 in : le tour de taille est donc 4 in au-dessus"],
      },
      {
        title: "Tour de taille 104 cm, taille 168 cm",
        steps: ["RTT = 104 ÷ 168 ≈ 0,62", "0,62 se situe dans la tranche 0,6 ou plus", "Un rapport de 0,6 correspondrait à un tour de taille de 168 × 0,6 = 100,8 cm"],
      },
    ],
    assumptions: [
      "Le résultat est une estimation, et non un avis médical ni un diagnostic, et ce calculateur n’a pas encore été vérifié par un professionnel. Parlez à un médecin ou à un infirmier de ce que vos mesures signifient pour vous.",
      "Les tranches proviennent de la recommandation du NICE pour les adultes dont l’IMC est inférieur à 35, quels que soient leur sexe et leur origine ethnique, et sont affichées à titre de référence uniquement. Le NICE ne les utilise pas pour les adultes dont l’IMC est de 35 ou plus, car leur rapport est presque toujours élevé.",
      "Le calculateur utilise les tranches adultes. Il n’est pas destiné aux enfants et aux jeunes, ni à la grossesse, sans avis médical.",
      "De petites différences dans l’emplacement et le serrage du mètre ruban modifient le rapport : mesurez donc toujours de la même façon si vous suivez son évolution.",
    ],
    faqs: [
      {
        question: "Qu’est-ce qu’un rapport tour de taille/taille sain ?",
        answer: "Le NICE considère qu’un rapport de 0,4 à 0,49 ne montre pas de risque accru pour la santé chez les adultes dont l’IMC est inférieur à 35. La règle simple consiste à garder un tour de taille inférieur à la moitié de sa taille.",
      },
      {
        question: "En quoi diffère-t-il de l’IMC ?",
        answer: "L’IMC compare le poids à la taille et ne peut pas dire où la graisse est stockée. Le rapport tour de taille/taille s’intéresse à la taille : il reflète donc la graisse autour du ventre, plus étroitement liée à certains risques pour la santé. Le NICE suggère d’utiliser les deux.",
      },
      {
        question: "Comment se compare-t-il au rapport taille/hanches ?",
        answer: "Tous deux s’intéressent à la graisse autour de la taille. Le rapport taille/hanches divise par le tour de hanches et a des seuils différents pour les femmes et les hommes, alors que le rapport tour de taille/taille divise par la taille et utilise les mêmes tranches pour tout le monde.",
      },
    ],
    sourcesUsedFor: [
      "Les tranches adultes du rapport tour de taille/taille (0,4 à 0,49, 0,5 à 0,59, 0,6 ou plus) et leur utilisation chez les adultes dont l’IMC est inférieur à 35.",
      "Le message au grand public : garder un tour de taille inférieur à la moitié de sa taille (un rapport inférieur à 0,5).",
    ],
  },
  text: {
    unit: "Unité",
    units: { cm: "Centimètres (cm)", in: "Pouces (in)" },
    waist: "Tour de taille",
    waistHelp: "Mesurez à mi-distance entre le bas de la dernière côte et le haut de l’os de la hanche, à la fin d’une expiration normale.",
    height: "Taille",
    heightHelp: "Votre taille debout sans chaussures, dans la même unité que le tour de taille.",
    errors: {
      implausible: "Un rapport tour de taille/taille de {ratio} est très improbable. Vérifiez que les deux mesures sont dans la même unité.",
    },
    ratio: "Rapport tour de taille/taille",
    caption: "Tour de taille {waist} ÷ taille {height}.",
    band: "Tranche de référence adulte du NICE (à titre indicatif, pas un diagnostic)",
    bands: {
      below: "Moins de 0,4 : sous la tranche la plus basse de la recommandation",
      healthy: "0,4 à 0,49 : pas de risque accru pour la santé",
      increased: "0,5 à 0,59 : risque accru pour la santé",
      high: "0,6 ou plus : risque élevé (encore accru) pour la santé",
    },
    waistHalf: "Tour de taille pour un rapport de 0,5 (moitié de votre taille)",
    waistHigh: "Tour de taille pour un rapport de 0,6",
    difference: "Votre tour de taille par rapport à la moitié de votre taille",
    notes: {
      rounding: "La tranche est déterminée à partir du rapport arrondi à deux décimales, tel qu’il est affiché.",
      below: "Les tranches du NICE commencent à 0,4. Un rapport plus bas peut indiquer une erreur de mesure ou d’unité, ou une silhouette très mince ; ce n’est pas une tranche à part entière.",
      scope: "Le NICE utilise ces tranches pour les adultes dont l’IMC est inférieur à 35, quels que soient leur sexe et leur origine ethnique. Elles ne sont pas prévues pour les adultes dont l’IMC est de 35 ou plus, pendant la grossesse, ni pour les enfants et les jeunes, qui doivent être évalués avec un professionnel de santé.",
      reference: "Il s’agit d’une comparaison de référence, et non d’un diagnostic. Parlez à un médecin ou à un infirmier de ce que votre résultat signifie pour vous.",
    },
  },
};

export default fr;
