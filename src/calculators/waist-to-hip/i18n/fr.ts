import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WaistToHipText } from "../text/en";

const fr: CalculatorTranslation<WaistToHipText> = {
  content: {
    title: "Calculateur de rapport taille/hanches",
    shortTitle: "Rapport taille/hanches",
    summary: "Divisez votre tour de taille par votre tour de hanches pour obtenir le rapport taille/hanches, et comparez-le au seuil de l’OMS pour les femmes ou les hommes.",
    metaTitle: "Rapport taille/hanches – Calcul et seuil de l’OMS",
    metaDescription:
      "Calculez votre rapport taille/hanches à partir de vos tours de taille et de hanches, en cm ou en pouces, et comparez-le au seuil de l’OMS selon le sexe.",
    keywords: ["rapport taille hanches", "RTH", "ratio taille hanches", "tour de taille", "graisse abdominale", "morphologie", "rapport taille hanches OMS"],
    intro: [
      "Le rapport taille/hanches (RTH) compare la mesure de votre tour de taille à celle de vos hanches. Un rapport plus élevé signifie qu’une plus grande part de votre masse grasse se situe autour de l’abdomen, ce que la recherche associe à un risque plus élevé de diabète de type 2 et de maladie cardiaque.",
      "Saisissez les deux mesures dans la même unité pour obtenir votre rapport. Le calculateur le compare ensuite au seuil retenu lors d’une consultation d’experts de l’Organisation mondiale de la santé : 0,90 pour les hommes et 0,85 pour les femmes.",
    ],
    howToUse: [
      "Choisissez les centimètres ou les pouces. Les deux mesures doivent être dans la même unité.",
      "Mesurez votre tour de taille à mi-distance entre la dernière côte et le haut de l’os de la hanche, à la fin d’une expiration normale.",
      "Mesurez votre tour de hanches au niveau le plus large des fesses, en gardant le mètre ruban horizontal et ajusté sans serrer.",
      "Choisissez femme ou homme pour sélectionner le seuil, puis lisez votre rapport.",
    ],
    formulas: [
      { title: "Rapport taille/hanches", expression: "RTH = tour de taille ÷ tour de hanches", explanation: "Les unités s’annulent : le rapport est le même en centimètres et en pouces." },
      {
        title: "Seuil de l’OMS",
        expression: "RTH ≥ 0,90 (hommes)   ·   RTH ≥ 0,85 (femmes)",
        explanation: "À partir de ces valeurs, la consultation d’experts de l’OMS décrit le risque de complications métaboliques comme nettement accru.",
      },
    ],
    examples: [
      {
        title: "Femme, tour de taille de 82 cm et tour de hanches de 100 cm",
        steps: ["RTH = 82 ÷ 100 = 0,82", "Le seuil de l’OMS pour les femmes est de 0,85", "0,82 est inférieur au seuil"],
      },
      {
        title: "Homme, tour de taille de 97 cm et tour de hanches de 101 cm",
        steps: ["RTH = 97 ÷ 101 ≈ 0,96", "Le seuil de l’OMS pour les hommes est de 0,90", "0,96 est égal ou supérieur au seuil"],
      },
      {
        title: "Femme mesurant en pouces, tour de taille de 34 in et tour de hanches de 40 in",
        steps: ["RTH = 34 ÷ 40 = 0,85", "Le seuil pour les femmes est de 0,85 ou plus", "Le rapport est exactement au seuil"],
      },
    ],
    assumptions: [
      "Ce résultat est une estimation, et non un avis médical ni un diagnostic, et ce calculateur n’a pas été vérifié par un professionnel. Parlez de vos risques pour la santé avec un professionnel de santé.",
      "Les sites de mesure suivent le protocole de l’OMS : la taille à mi-distance entre le bord inférieur de la dernière côte et le sommet de la crête iliaque, et les hanches au niveau le plus large des fesses. Mesurer ailleurs modifie le rapport.",
      "Les seuils de 0,90 et 0,85 sont des repères généraux issus de la consultation d’experts de l’OMS. Les seuils adaptés varient selon les populations et les origines ethniques, et ils ne sont pas prévus pour les enfants ni pendant la grossesse.",
      "Le rapport est arrondi à deux décimales avant d’être comparé au seuil.",
    ],
    faqs: [
      {
        question: "Pourquoi le rapport taille/hanches est-il important ?",
        answer: "C’est un indicateur simple de l’endroit où la graisse est stockée. La graisse autour de l’abdomen est plus étroitement liée aux troubles métaboliques que celle des hanches et des cuisses, et le rapport rend compte de cette différence.",
      },
      {
        question: "Le rapport taille/hanches est-il meilleur que l’IMC ?",
        answer: "Ils mesurent des choses différentes. L’IMC rapporte le poids à la taille mais ne dit rien de la répartition de la graisse, tandis que le rapport taille/hanches ignore le poids total. Les professionnels de santé examinent souvent plusieurs mesures ensemble.",
      },
      {
        question: "Faut-il utiliser des centimètres ou des pouces ?",
        answer: "Peu importe. Le rapport n’a pas d’unité : vous obtenez le même résultat dans les deux cas, à condition que les deux mesures soient dans la même unité.",
      },
    ],
    sourcesUsedFor: [
      "Les seuils de rapport taille/hanches de 0,90 pour les hommes et 0,85 pour les femmes associés à un risque nettement accru de complications métaboliques, et les sites de mesure.",
    ],
  },
  text: {
    unit: "Unité",
    units: { cm: "Centimètres (cm)", in: "Pouces (in)" },
    waist: "Tour de taille",
    waistHelp: "Mesurez à mi-distance entre la dernière côte et le haut de l’os de la hanche (crête iliaque), à la fin d’une expiration normale.",
    hip: "Tour de hanches",
    hipHelp: "Mesurez au niveau le plus large des fesses, avec le mètre ruban horizontal.",
    sex: "Sexe",
    sexHelp: "Sert uniquement à choisir le seuil de l’OMS, qui diffère entre les femmes et les hommes.",
    sexes: { female: "Femme", male: "Homme" },
    errors: {
      implausible: "Un rapport taille/hanches de {ratio} sort de la plage observée chez les adultes. Vérifiez que les deux mesures sont dans la même unité.",
    },
    ratio: "Rapport taille/hanches",
    caption: "Taille {waist} ÷ hanches {hip}.",
    comparison: "Par rapport au seuil de l’OMS",
    atOrAbove: "Égal ou supérieur au seuil",
    below: "Inférieur au seuil",
    cutoff: "Seuil de l’OMS pour les {sex}",
    waistAtCutoff: "Tour de taille qui atteindrait le seuil",
    notes: {
      above: "Un rapport de {cutoff} ou plus chez les {sex} correspond au niveau que la consultation d’experts de l’OMS a associé à un risque nettement accru de complications métaboliques. C’est un marqueur de dépistage, pas un diagnostic.",
      below: "Le rapport est inférieur au seuil de l’OMS de {cutoff} pour les {sex}. D’autres facteurs, comme le poids, l’activité physique, la tension artérielle et les antécédents familiaux, influencent aussi le risque pour la santé.",
      rounding: "Le rapport est arrondi à deux décimales avant d’être comparé au seuil.",
      advice: "Il s’agit d’une estimation, et non d’un avis médical. Parlez de vos résultats avec un professionnel de santé.",
    },
    sexNames: { female: "femmes", male: "hommes" },
  },
};

export default fr;
