import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoundingText } from "../text/en";

const fr: CalculatorTranslation<RoundingText> = {
  content: {
    title: "Calculateur d’arrondi",
    shortTitle: "Arrondi",
    summary: "Arrondissez un nombre à un nombre de décimales, à l’entier, à la dizaine, à la centaine, au millier ou à n’importe quel pas, avec six méthodes d’arrondi exactes.",
    metaTitle: "Calculateur d’arrondi – Décimales, arrondi au pair et plus",
    metaDescription: "Arrondissez exactement aux décimales, dizaines, centaines ou à un pas comme 0,05 : au plus proche, au pair (bancaire), par excès, par défaut ou troncature.",
    keywords: ["arrondir un nombre", "arrondi décimales", "arrondi au plus proche", "arrondi bancaire", "arrondi au pair", "arrondi par excès", "troncature", "arrondir à 0,05"],
    intro: [
      "Arrondir remplace un nombre par une valeur proche et plus simple : 3,14159 devient 3,14, un prix de 19,97 devient 19,95 par pas de 5 centimes, et 87 654 devient 88 000 au millier près. Ce calculateur arrondit à un nombre de décimales, à l’entier, à la dizaine, à la centaine ou au millier, ou à tout pas de votre choix.",
      "Il travaille sur les chiffres saisis, et non sur une approximation binaire : 1,005 s’arrondit donc vraiment à 1,01 avec l’arrondi au plus proche (demi vers le haut), un cas où de nombreux tableurs et langages de programmation donnent 1,00. Six méthodes couvrent l’arrondi scolaire, l’arrondi bancaire et l’arrondi systématique vers le haut, vers le bas ou vers zéro. Pour arrondir à un nombre de chiffres significatifs, utilisez plutôt le calculateur de chiffres significatifs.",
    ],
    howToUse: [
      "Saisissez le nombre exactement tel que vous l’avez. Chaque chiffre est conservé.",
      "Choisissez la précision : décimales, entier, 10, 100, 1 000 ou un pas personnalisé comme 0,05 ou 0,25.",
      "Choisissez la méthode d’arrondi. Le demi vers le haut est celle qu’on enseigne dans la plupart des écoles ; l’arrondi au pair est courant en finance et en statistique.",
      "Lisez le nombre arrondi, l’écart avec l’original et les deux candidats entre lesquels il a été choisi.",
    ],
    formulas: [
      { title: "Arrondi à un pas", expression: "k = x ÷ q\narrondi = round(k) × q", explanation: "q est le pas : 0,01 pour 2 décimales, 1 pour l’entier, 10, 100, 1 000 ou votre propre valeur. La méthode détermine comment round() traite k." },
      { title: "Règles d’égalité", expression: "Demi vers le haut : 2,5 → 3, −2,5 → −3\nAu pair : 2,5 → 2, 3,5 → 4\nDemi vers le bas : 2,5 → 2, −2,5 → −2", explanation: "Ces règles ne diffèrent que lorsque le nombre est exactement à mi-chemin entre deux candidats. Sinon, les trois arrondissent au plus proche." },
      { title: "Arrondi dirigé", expression: "Par excès : 2,1 → 3, −2,9 → −2\nPar défaut : 2,9 → 2, −2,1 → −3\nTroncature : 2,9 → 2, −2,9 → −2", explanation: "L’arrondi par excès va toujours vers +∞, l’arrondi par défaut vers −∞, et la troncature supprime simplement les chiffres en trop (vers zéro)." },
      { title: "Arithmétique décimale exacte", expression: "1,005 = 1005 × 10⁻³ exactement", explanation: "Le nombre et le pas sont ramenés à des entiers par la même puissance de 10 puis divisés exactement ; aucune erreur d’arrondi binaire ne peut donc modifier un cas d’égalité." },
    ],
    examples: [
      {
        title: "Arrondir 1,005 à 2 décimales, demi vers le haut",
        steps: ["Les candidats sont 1,00 et 1,01", "La partie supprimée, 0,005, vaut exactement la moitié de 0,01", "Le demi vers le haut éloigne l’égalité de zéro : 1,01"],
      },
      {
        title: "Arrondir 7,325 à 2 décimales avec l’arrondi bancaire",
        steps: ["Les candidats sont 7,32 et 7,33", "7,325 est exactement à mi-chemin", "L’arrondi au pair choisit le candidat dont le dernier chiffre est pair : 7,32"],
      },
      {
        title: "Arrondir 3,38 heures au quart d’heure près",
        steps: ["3,38 ÷ 0,25 = 13,52", "13,52 s’arrondit à 14", "14 × 0,25 = 3,50 heures"],
      },
    ],
    assumptions: [
      "Le nombre est arrondi exactement tel qu’il est saisi, avec au plus 40 chiffres significatifs. Rien n’est converti en virgule flottante binaire.",
      "Le demi vers le haut et le demi vers le bas sont symétriques par rapport à zéro : −2,5 donne −3 en demi vers le haut. Les arrondis par excès et par défaut ne sont pas symétriques.",
      "Lorsque la valeur arrondie est nulle, elle s’affiche 0, sans signe.",
      "Les résultats s’affichent avec autant de décimales que le pas d’arrondi : arrondir 2,5 à 2 décimales affiche 2,50.",
    ],
    faqs: [
      { question: "Qu’est-ce que l’arrondi bancaire ?", answer: "C’est l’arrondi au pair : une égalité exacte va vers le voisin pair, si bien que 2,5 devient 2 et 3,5 devient 4. Sur de nombreuses valeurs, les égalités sont arrondies aussi souvent vers le haut que vers le bas, ce qui évite un léger biais à la hausse dans les totaux." },
      { question: "Pourquoi mon tableur arrondit-il 1,005 à 1,00 ?", answer: "La plupart des logiciels stockent les nombres en binaire, où 1,005 vaut en réalité 1,00499999999999989…, juste sous l’égalité. Ce calculateur travaille sur les chiffres décimaux eux-mêmes : 1,005 est donc exactement à mi-chemin, et le demi vers le haut donne 1,01." },
      { question: "Comment arrondir un prix aux 5 centimes les plus proches ?", answer: "Choisissez « Pas personnalisé le plus proche » et saisissez 0,05. Par exemple, 19,97 devient 19,95 et 19,98 devient 20,00 avec le demi vers le haut." },
    ],
    sourcesUsedFor: [
      "Définitions des modes d’arrondi (demi vers le haut, au pair, demi vers le bas, par excès, par défaut et vers zéro) utilisés pour vérifier les résultats.",
      "Règle de l’arrondi au pair pour les égalités exactes, utilisée en métrologie.",
    ],
  },
  text: {
    number: "Nombre",
    numberHelp: "Saisissez le nombre exactement ; chaque chiffre est conservé, donc 1,005 reste 1,005. La virgule décimale et le point sont acceptés. La notation E, comme 2,5e-3, est acceptée.",
    invalid: "Saisissez un nombre, comme 1234,5678, -0,125 ou 2,5e-3.",
    tooLong: "Saisissez au maximum 40 chiffres significatifs, avec un exposant compris entre -40 et 40.",
    target: "Arrondir à",
    targets: {
      places: "Nombre de décimales",
      whole: "Entier le plus proche",
      tens: "Dizaine la plus proche",
      hundreds: "Centaine la plus proche",
      thousands: "Millier le plus proche",
      increment: "Pas personnalisé le plus proche",
    },
    places: "Nombre de décimales",
    increment: "Pas",
    incrementHelp: "Arrondit à un multiple de cette valeur, par exemple 0,05 pour des prix par pas de 5 centimes ou 0,25 pour des quarts d’heure.",
    incrementInvalid: "Saisissez un pas positif, comme 0,05, 0,25 ou 5.",
    method: "Méthode d’arrondi",
    methods: {
      halfUp: "Demi vers le haut (égalités loin de zéro)",
      halfEven: "Au pair (arrondi bancaire)",
      halfDown: "Demi vers le bas (égalités vers zéro)",
      ceiling: "Toujours vers le haut (par excès)",
      floor: "Toujours vers le bas (par défaut)",
      truncate: "Troncature (vers zéro)",
    },
    rounded: "Nombre arrondi",
    caption: "{original} arrondi avec la méthode {method}.",
    methodShort: {
      halfUp: "demi vers le haut",
      halfEven: "au pair",
      halfDown: "demi vers le bas",
      ceiling: "toujours vers le haut (par excès)",
      floor: "toujours vers le bas (par défaut)",
      truncate: "troncature",
    },
    difference: "Écart (arrondi − original)",
    lower: "Candidat inférieur (par défaut)",
    upper: "Candidat supérieur (par excès)",
    exact: "Le nombre correspond déjà exactement à cet arrondi ; sa valeur ne change donc pas.",
    tie: "Le nombre est exactement à mi-chemin entre les deux candidats ; c’est donc la règle d’égalité de la méthode qui tranche.",
    negativeNote: "Pour les nombres négatifs, « toujours vers le haut » va vers +∞ (−2,5 devient −2) et « toujours vers le bas » vers −∞ (−2,5 devient −3).",
  },
};

export default fr;
