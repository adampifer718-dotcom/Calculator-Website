import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SampleSizeText } from "../text/en";

const fr: CalculatorTranslation<SampleSizeText> = {
  content: {
    title: "Calculateur de taille d’échantillon",
    shortTitle: "Taille d’échantillon",
    summary: "Déterminez le nombre de réponses à un sondage nécessaires pour un niveau de confiance et une marge d’erreur donnés, avec une taille de population facultative.",
    metaTitle: "Calculateur de taille d’échantillon – Réponses nécessaires",
    metaDescription:
      "Calculez le nombre de réponses complètes nécessaires selon le niveau de confiance, la marge d’erreur et la proportion attendue, avec correction pour population finie.",
    keywords: ["taille d’échantillon", "calcul taille échantillon", "taille échantillon sondage", "nombre de répondants", "marge d’erreur", "niveau de confiance", "correction pour population finie", "échantillon statistique"],
    intro: [
      "Avant de lancer une enquête ou un sondage, il faut décider combien de personnes interroger. Trop peu de réponses donnent un résultat large et imprécis ; trop de réponses font perdre du temps et de l’argent. Ce calculateur trouve le plus petit nombre de réponses complètes qui permet d’estimer un pourcentage avec la précision choisie.",
      "Choisissez un niveau de confiance, la marge d’erreur que vous pouvez accepter et, si vous la connaissez, votre meilleure estimation du résultat. Si le groupe étudié est petit, comme les 600 salariés d’une entreprise, saisissez aussi sa taille : la correction pour population finie réduit le nombre nécessaire.",
    ],
    howToUse: [
      "Choisissez un niveau de confiance. 95 % est le choix le plus courant.",
      "Saisissez la marge d’erreur en points de pourcentage, par exemple 5 pour ±5 points.",
      "Saisissez la proportion attendue. Laissez 50 % en cas de doute : c’est ce qui donne l’échantillon le plus grand.",
      "Saisissez éventuellement la taille de la population. Laissez le champ vide pour une population grande ou inconnue.",
      "Lisez la taille d’échantillon requise. Elle est toujours arrondie à la réponse entière supérieure.",
    ],
    formulas: [
      { title: "Taille d’échantillon pour une grande population", expression: "n₀ = z*² × p × (1 − p) ÷ E²", explanation: "z* est la valeur critique associée au niveau de confiance (1,96 pour 95 %), p la proportion attendue et E la marge d’erreur, toutes deux en décimal." },
      { title: "Correction pour population finie", expression: "n = n₀ ÷ (1 + (n₀ − 1) ÷ N)", explanation: "N est la taille de la population. La correction compte lorsque l’échantillon représente une part notable de la population." },
      { title: "Arrondi", expression: "taille d’échantillon = ⌈n⌉", explanation: "Le résultat est arrondi à l’entier supérieur, car un arrondi inférieur donnerait une marge d’erreur légèrement plus large que celle demandée." },
    ],
    examples: [
      {
        title: "Un sondage national à 95 % de confiance et ±5 points",
        steps: ["z* = 1,95996 pour 95 % de confiance", "n₀ = 1,95996² × 0,5 × 0,5 ÷ 0,05² ≈ 384,15", "Arrondi supérieur : 385 réponses complètes"],
      },
      {
        title: "Une enquête auprès de 2 400 salariés à 99 % de confiance, ±3 points, avec 30 % attendus",
        steps: ["z* = 2,57583 pour 99 % de confiance", "n₀ = 2,57583² × 0,3 × 0,7 ÷ 0,03² ≈ 1 548,14", "n = 1 548,14 ÷ (1 + 1 547,14 ÷ 2 400) ≈ 941,32", "Arrondi supérieur : 942 réponses"],
      },
      {
        title: "Estimer une part de 12 % de défauts à 90 % de confiance et ±4 points",
        steps: ["z* = 1,64485 pour 90 % de confiance", "n₀ = 1,64485² × 0,12 × 0,88 ÷ 0,04² ≈ 178,57", "Arrondi supérieur : 179 pièces à contrôler"],
      },
    ],
    assumptions: [
      "La formule suppose un échantillon aléatoire simple : chaque membre de la population a la même probabilité d’être choisi.",
      "Elle dimensionne un échantillon pour estimer une seule proportion (un pourcentage de réponses oui/non), et non une moyenne ni une différence entre groupes.",
      "Elle repose sur l’approximation normale de la distribution d’échantillonnage d’une proportion, qui fonctionne bien lorsque les nombres attendus de réponses oui et non sont tous deux d’au moins 10 environ.",
      "Le résultat est le nombre de réponses complètes. Les non-réponses, les abandons et les réponses inexploitables ne sont pas inclus : prévoyez de contacter davantage de personnes.",
      "Les valeurs critiques proviennent d’une inversion numérique de la loi normale, précise à environ neuf chiffres significatifs.",
    ],
    faqs: [
      {
        question: "Pourquoi 50 % donne-t-il l’échantillon le plus grand ?",
        answer: "Le produit p × (1 − p) est maximal pour p = 0,5, où il vaut 0,25. Toute autre proportion attendue nécessite moins de réponses pour la même marge d’erreur ; 50 % est donc le choix prudent lorsque vous n’avez aucune estimation préalable.",
      },
      {
        question: "Une population plus grande exige-t-elle un échantillon beaucoup plus grand ?",
        answer: "Pas vraiment. Une fois la population grande, l’échantillon requis ne change presque plus : à 95 % de confiance et ±5 points, il faut 383 réponses pour une population de 100 000 personnes et 385 pour une population de 100 millions. La taille de la population ne compte que si vous en échantillonnez une part importante.",
      },
      {
        question: "Combien de personnes dois-je inviter ?",
        answer: "Divisez la taille d’échantillon par le taux de réponse attendu. S’il vous faut 385 réponses complètes et que vous attendez 20 % de répondants, invitez environ 385 ÷ 0,20 ≈ 1 925 personnes.",
      },
    ],
    sourcesUsedFor: [
      "Taille d’échantillon pour estimer une proportion, n = z²·p(1 − p)/E², et utilisation de p = 0,5 en l’absence d’estimation.",
      "Quand et pourquoi appliquer une correction pour population finie.",
    ],
  },
  text: {
    level: "Niveau de confiance",
    levelHelp: "Le degré de certitude souhaité que la vraie proportion se situe dans la marge d’erreur.",
    levelOptions: { "80": "80 %", "90": "90 %", "95": "95 %", "98": "98 %", "99": "99 %" },
    margin: "Marge d’erreur",
    marginHelp: "L’écart ± que vous acceptez, en points de pourcentage. Par exemple, 5 signifie ±5 points.",
    proportion: "Proportion attendue",
    proportionHelp: "Votre meilleure estimation de la part qui répondra « oui ». Utilisez 50 % si vous n’en avez aucune idée : c’est ce qui donne l’échantillon le plus grand et le plus sûr.",
    proportionMax: "Doit être inférieure à 100 %.",
    population: "Taille de la population (facultatif)",
    populationHelp: "Nombre total de personnes ou d’éléments que vous pourriez échantillonner. Laissez vide pour une population très grande ou inconnue.",
    sampleSize: "Taille d’échantillon requise",
    caption: "Réponses complètes nécessaires à {level} de confiance et ±{margin}.",
    infinite: "Taille d’échantillon avant correction (n₀)",
    infiniteRounded: "n₀ arrondi à l’entier supérieur",
    critical: "Valeur critique (z*)",
    correction: "Correction pour population finie",
    correctionApplied: "Appliquée (population de {population})",
    correctionNotApplied: "Non appliquée (aucune taille de population indiquée)",
    share: "Part de la population échantillonnée",
    responseNote: "Il s’agit du nombre de réponses complètes. Si seule une partie des personnes devrait répondre, divisez par le taux de réponse attendu pour savoir combien en inviter.",
    wholePopulation: "L’échantillon correspond à la totalité ou presque de la population : interroger tout le monde peut être plus simple.",
  },
};

export default fr;
