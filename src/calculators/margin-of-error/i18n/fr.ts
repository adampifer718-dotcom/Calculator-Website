import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MarginOfErrorText } from "../text/en";

const fr: CalculatorTranslation<MarginOfErrorText> = {
  content: {
    title: "Calculateur de marge d’erreur",
    shortTitle: "Marge d’erreur",
    summary: "Calculez la marge d’erreur ± d’un pourcentage issu d’une enquête ou d’un sondage à partir de la taille de l’échantillon, du résultat et du niveau de confiance.",
    metaTitle: "Calculateur de marge d’erreur – Sondages et proportions",
    metaDescription:
      "Calculez la marge d’erreur ± d’un pourcentage de sondage à partir de la taille de l’échantillon et du niveau de confiance, avec l’intervalle et l’erreur type.",
    keywords: ["marge d’erreur", "calcul marge d’erreur", "marge d’erreur sondage", "plus ou moins", "erreur d’échantillonnage", "intervalle de confiance d’une proportion", "erreur type d’une proportion"],
    intro: [
      "Lorsqu’un sondage indique que 47 % des électeurs soutiennent un projet, « ±3 points » est sa marge d’erreur : la plage autour du résultat dans laquelle se situe probablement la vraie valeur dans la population. Ce calculateur trouve cette marge pour n’importe quel pourcentage d’enquête.",
      "Saisissez le nombre de personnes ayant répondu, la part ayant donné la réponse que vous rapportez et le niveau de confiance. Le calculateur renvoie la marge d’erreur en points de pourcentage, l’intervalle de confiance et l’erreur type.",
      "Cet outil s’applique aux proportions (pourcentages de réponses oui/non). Si vous estimez la moyenne d’une mesure, comme une taille ou une dépense, utilisez plutôt le calculateur d’intervalle de confiance.",
    ],
    howToUse: [
      "Saisissez la taille de l’échantillon : le nombre de réponses complètes.",
      "Saisissez la proportion observée en pourcentage. Utilisez 50 % pour obtenir la marge la plus large possible pour cette taille d’échantillon.",
      "Choisissez le niveau de confiance.",
      "Si l’échantillon représente une grande part d’une population connue et limitée, saisissez la taille de la population pour appliquer la correction pour population finie.",
      "Lisez la marge d’erreur et l’intervalle qu’elle donne autour de votre résultat.",
    ],
    formulas: [
      { title: "Erreur type d’une proportion", expression: "SE = √(p × (1 − p) ÷ n)", explanation: "p est la proportion observée en décimal et n la taille de l’échantillon." },
      { title: "Marge d’erreur", expression: "MOE = z* × SE", explanation: "z* est la valeur critique associée au niveau de confiance : 1,645 pour 90 %, 1,960 pour 95 % et 2,576 pour 99 %." },
      { title: "Correction pour population finie", expression: "MOE = z* × SE × √((N − n) ÷ (N − 1))", explanation: "Utilisée lorsqu’une taille de population N est saisie. Elle réduit la marge lorsque l’échantillon représente une grande partie de la population." },
      { title: "Intervalle de confiance", expression: "p − MOE à p + MOE", explanation: "L’intervalle est limité à la plage de 0 % à 100 %." },
    ],
    examples: [
      {
        title: "Un sondage auprès de 1 000 personnes avec un résultat de 50 % à 95 % de confiance",
        steps: ["SE = √(0,5 × 0,5 ÷ 1 000) ≈ 0,015811", "MOE = 1,95996 × 0,015811 ≈ 0,030990", "Marge ≈ ±3,10 points ; intervalle ≈ 46,90 % à 53,10 %"],
      },
      {
        title: "600 clients, 42 % satisfaits, à 90 % de confiance",
        steps: ["SE = √(0,42 × 0,58 ÷ 600) ≈ 0,020149", "MOE = 1,64485 × 0,020149 ≈ 0,033143", "Marge ≈ ±3,31 points ; intervalle ≈ 38,69 % à 45,31 %"],
      },
      {
        title: "400 des 3 000 élèves d’un établissement, 35 % d’accord, à 99 % de confiance",
        steps: ["SE avant correction = √(0,35 × 0,65 ÷ 400) ≈ 0,023848", "Correction = √(2 600 ÷ 2 999) ≈ 0,93110", "MOE = 2,57583 × 0,023848 × 0,93110 ≈ 0,057197, soit environ ±5,72 points"],
      },
    ],
    assumptions: [
      "L’échantillon est un échantillon aléatoire simple de la population. Les sondages en ligne à participation volontaire, les échantillons par quotas et les panels pondérés peuvent présenter des erreurs plus grandes que ce qu’indique cette formule.",
      "La marge ne couvre que l’erreur d’échantillonnage aléatoire. Elle ne tient pas compte des non-réponses, d’une formulation biaisée des questions ni des réponses mensongères.",
      "Elle utilise l’approximation normale (de Wald), peu fiable lorsque moins d’environ 10 réponses tombent dans l’une des deux catégories ; le calculateur vous avertit dans ce cas.",
      "Les valeurs critiques sont calculées numériquement et concordent avec les tables usuelles sur bien plus de chiffres que ceux affichés.",
    ],
    faqs: [
      {
        question: "Que signifie une marge d’erreur de ±3 points ?",
        answer: "À 95 % de confiance, si vous répétiez l’enquête de nombreuses fois avec de nouveaux échantillons aléatoires, environ 95 % des intervalles construits de cette façon contiendraient le vrai pourcentage de la population. Cela ne garantit pas que la vraie valeur se trouve à moins de 3 points.",
      },
      {
        question: "Comment diviser la marge d’erreur par deux ?",
        answer: "La marge diminue avec la racine carrée de la taille de l’échantillon : la diviser par deux demande environ quatre fois plus de réponses. Passer de ±3,1 points avec 1 000 personnes à environ ±1,55 point nécessite à peu près 4 000 personnes.",
      },
      {
        question: "Puis-je l’utiliser pour des moyennes ?",
        answer: "Non. Ce calculateur traite les pourcentages de réponses oui/non. Pour la moyenne d’une mesure numérique, utilisez le calculateur d’intervalle de confiance, qui part de la moyenne et de l’écart-type.",
      },
    ],
    sourcesUsedFor: [
      "Borne d’erreur pour une proportion, z·√(p′q′/n), et intervalle p′ ± borne d’erreur.",
      "La correction pour population finie √((N − n)/(N − 1)).",
    ],
  },
  text: {
    n: "Taille de l’échantillon (n)",
    nHelp: "Nombre de réponses complètes.",
    proportion: "Proportion observée",
    proportionHelp: "Part de l’échantillon ayant donné la réponse que vous rapportez. Utilisez 50 % pour la marge la plus large et la plus prudente.",
    level: "Niveau de confiance",
    levelOptions: { "80": "80 %", "90": "90 %", "95": "95 %", "98": "98 %", "99": "99 %" },
    population: "Taille de la population (facultatif)",
    populationHelp: "Taille totale du groupe dont l’échantillon est issu. Laissez vide pour une population très grande ou inconnue.",
    populationTooSmall: "La population ne peut pas être plus petite que l’échantillon ({n}).",
    margin: "Marge d’erreur (± points de pourcentage)",
    caption: "{p} ± {moe} à {level} de confiance.",
    interval: "Intervalle de confiance",
    intervalText: "{lower} à {upper}",
    standardError: "Erreur type",
    critical: "Valeur critique (z*)",
    correction: "Facteur de correction pour population finie",
    correctionNone: "Non appliqué",
    weakApproximation: "Moins de 10 réponses se trouvent d’un côté (n × p = {yes}, n × (1 − p) = {no}). L’approximation normale est peu fiable ici : considérez cette marge comme approximative ; un intervalle exact ou de Wilson est plus fiable.",
    census: "L’échantillon couvre toute la population : il n’y a donc pas d’erreur d’échantillonnage.",
    clipped: "L’intervalle a été tronqué à {bound}, car une proportion ne peut pas dépasser cette limite.",
    meansNote: "Cette marge concerne un pourcentage (une proportion). Pour la moyenne d’une mesure, utilisez le calculateur d’intervalle de confiance.",
  },
};

export default fr;
