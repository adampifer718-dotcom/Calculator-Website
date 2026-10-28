import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PasswordEntropyText } from "../text/en";

const forms = (one: string, other: string, many: string) => ({ zero: one, one, two: other, few: other, many, other });

const fr: CalculatorTranslation<PasswordEntropyText> = {
  content: {
    title: "Calculateur d’entropie de mot de passe",
    shortTitle: "Entropie de mot de passe",
    summary: "Estimez l’entropie en bits d’un mot de passe ou d’une phrase de passe générés aléatoirement, et le temps qu’il faudrait à un attaquant pour les deviner.",
    metaTitle: "Calculateur d’entropie de mot de passe – Bits et temps",
    metaDescription: "Calculez l’entropie en bits d’un mot de passe aléatoire ou d’une phrase Diceware selon sa longueur et ses caractères, et le temps moyen pour la deviner.",
    keywords: ["entropie mot de passe", "robustesse mot de passe", "entropie phrase de passe", "diceware", "bits d’entropie", "temps de force brute", "longueur mot de passe", "jeu de caractères"],
    intro: [
      "L’entropie mesure à quel point un secret est imprévisible. Un mot de passe choisi au hasard dans un ensemble de N caractères possibles gagne log₂(N) bits par caractère, et chaque bit supplémentaire double le nombre d’essais dont un attaquant peut avoir besoin.",
      "Ce calculateur s’appuie uniquement sur la structure d’un mot de passe : sa longueur et les types de caractères, ou le nombre de mots et la taille de la liste de mots. Il ne demande, ne reçoit et n’analyse jamais un vrai mot de passe ; ne saisissez donc le vôtre nulle part sur cette page.",
    ],
    howToUse: [
      "Choisissez un mot de passe en caractères aléatoires ou une phrase de passe en mots aléatoires.",
      "Pour des caractères, saisissez la longueur et choisissez les jeux de caractères, ou saisissez une taille d’ensemble personnalisée.",
      "Pour une phrase de passe, saisissez le nombre de mots et la taille de la liste de mots (7 776 pour une liste Diceware).",
      "Ajustez si vous le souhaitez le nombre d’essais par seconde de l’attaquant, puis lisez l’entropie, le nombre de combinaisons et les temps nécessaires pour deviner.",
    ],
    formulas: [
      { title: "Entropie d’un mot de passe aléatoire", expression: "H = L × log₂(N)", explanation: "L est le nombre de caractères et N la taille de l’ensemble, par exemple 26 + 26 + 10 + 32 = 94 avec les quatre jeux." },
      { title: "Entropie d’une phrase de passe", expression: "H = W × log₂(K)", explanation: "W est le nombre de mots et K la taille de la liste de mots. Chaque mot Diceware ajoute log₂(7 776) ≈ 12,92 bits." },
      { title: "Temps moyen pour deviner", expression: "t = 2ᴴ ÷ 2 ÷ g", explanation: "2ᴴ est le nombre de combinaisons et g le nombre d’essais par seconde. En moyenne, la moitié des combinaisons doit être essayée." },
    ],
    examples: [
      {
        title: "16 caractères aléatoires parmi les quatre jeux",
        steps: [
          "Ensemble = 26 + 26 + 10 + 32 = 94 caractères",
          "Entropie = 16 × log₂(94) ≈ 16 × 6,5546 ≈ 104,87 bits",
          "Temps moyen à 10¹⁰ essais par seconde ≈ 94¹⁶ ÷ 2 ÷ 10¹⁰ s ≈ 5,89 × 10¹³ ans",
        ],
      },
      {
        title: "Phrase de passe Diceware de six mots",
        steps: ["Entropie = 6 × log₂(7 776) ≈ 6 × 12,925 ≈ 77,55 bits", "Combinaisons = 7 776⁶ ≈ 2,21 × 10²³", "Temps moyen ≈ 350 270 ans à 10¹⁰ essais par seconde"],
      },
      {
        title: "8 lettres minuscules aléatoires",
        steps: ["Entropie = 8 × log₂(26) ≈ 37,60 bits", "Combinaisons = 26⁸ = 208 827 064 576", "Temps moyen ≈ 208 827 064 576 ÷ 2 ÷ 10¹⁰ ≈ 10 secondes"],
      },
    ],
    assumptions: [
      "Chaque caractère ou mot est choisi indépendamment et uniformément au hasard, comme le ferait un gestionnaire de mots de passe ou un dé. Les mots de passe choisis par des personnes sont bien plus prévisibles que ces chiffres ne le laissent penser.",
      "La vitesse d’essai est une hypothèse que vous pouvez modifier. Les vitesses réelles vont de quelques essais par seconde contre une connexion en ligne avec limitation du nombre de tentatives à plusieurs milliards par seconde contre des mots de passe volés et faiblement hachés.",
      "L’entropie ne couvre pas d’autres risques, comme l’hameçonnage, la réutilisation du même mot de passe sur plusieurs sites ou un mot de passe qui a déjà fuité.",
      "Il s’agit d’une estimation destinée à comparer, et non d’un conseil de sécurité ni d’une garantie ; elle n’a pas été vérifiée par un professionnel.",
    ],
    faqs: [
      { question: "Combien de bits d’entropie suffisent ?", answer: "Il n’existe pas de seuil unique, car cela dépend de la façon dont le mot de passe est stocké et de qui pourrait l’attaquer. À titre indicatif, chaque bit double le travail : un mot de passe aléatoire de 16 caractères ou plus, ou une phrase de passe de six mots Diceware ou plus, est donc bien au-delà d’une attaque par force brute réaliste à la vitesse par défaut." },
      { question: "Pourquoi cette page ne permet-elle pas de vérifier mon propre mot de passe ?", answer: "L’entropie décrit la façon dont un mot de passe a été généré, et non les caractères qu’il contient au final. Un mot de passe comme Summer2025! semble varié mais se devine facilement, car ce sont des personnes qui le choisissent. Saisir un vrai mot de passe sur un site web est en outre un risque : cette page n’en demande donc jamais." },
      { question: "Une longue phrase de passe vaut-elle mieux qu’un mot de passe court et complexe ?", answer: "Souvent, oui. Six mots aléatoires tirés d’une liste de 7 776 mots donnent environ 77,5 bits, plus que 12 caractères aléatoires parmi les lettres et les chiffres (environ 71,5 bits), et ils sont plus faciles à retenir et à taper. L’essentiel est que les mots soient tirés au hasard, et non choisis pour former une phrase." },
    ],
    sourcesUsedFor: [
      "Les recommandations américaines actuelles sur les mots de passe, qui privilégient la longueur et la vérification contre les mots de passe déjà divulgués plutôt que les règles de composition.",
      "La taille de liste de 7 776 mots (6⁵, cinq lancers de dé par mot) utilisée par défaut pour les phrases de passe.",
    ],
  },
  text: {
    mode: "Type de mot de passe",
    modes: { random: "Caractères aléatoires", passphrase: "Mots aléatoires (phrase de passe)" },
    length: "Longueur (caractères)",
    poolMode: "Ensemble de caractères",
    poolModes: { sets: "Choisir les jeux de caractères", custom: "Taille d’ensemble personnalisée" },
    lower: "Lettres minuscules a–z (26)",
    upper: "Lettres majuscules A–Z (26)",
    digits: "Chiffres 0–9 (10)",
    symbols: "Symboles",
    yesNo: { yes: "Inclure", no: "Exclure" },
    symbolCount: "Nombre de symboles possibles",
    symbolCountHelp: "32 couvre tous les symboles ASCII imprimables d’un clavier américain, comme ! ? # et @. Utilisez un nombre plus petit si seuls certains symboles sont autorisés.",
    customPool: "Taille de l’ensemble (caractères possibles)",
    customPoolHelp: "Le nombre de caractères différents que chaque position peut prendre.",
    words: "Nombre de mots",
    wordList: "Taille de la liste de mots",
    wordListHelp: "7 776 est la taille d’une liste de mots Diceware, conçue pour cinq lancers d’un dé à six faces par mot.",
    guessRate: "Essais par seconde de l’attaquant",
    guessRateHelp: "Une hypothèse sur l’attaquant. 10¹⁰ (10 milliards) par seconde correspond à une attaque hors ligne rapide contre un mot de passe faiblement haché ; les attaques en ligne sont bien plus lentes.",
    errors: {
      noSets: "Incluez au moins un jeu de caractères.",
    },
    entropy: "Entropie",
    bits: "bits",
    captionRandom: "{length} choisis au hasard dans un ensemble de {pool} caractères.",
    captionPassphrase: "{words} choisis au hasard dans une liste de {list} mots.",
    lengthCount: forms("{n} caractère", "{n} caractères", "{n} de caractères"),
    wordCount: forms("{n} mot", "{n} mots", "{n} de mots"),
    combinations: "Combinaisons possibles",
    poolSize: "Taille de l’ensemble par position",
    bitsPerItem: "Entropie par caractère ou par mot",
    averageTime: "Temps moyen pour deviner",
    worstTime: "Temps pour essayer toutes les combinaisons",
    duration: {
      lessThanSecond: "Moins de 1 seconde",
      seconds: forms("{n} seconde", "{n} secondes", "{n} de secondes"),
      minutes: forms("{n} minute", "{n} minutes", "{n} de minutes"),
      hours: forms("{n} heure", "{n} heures", "{n} d’heures"),
      days: forms("{n} jour", "{n} jours", "{n} de jours"),
      years: forms("{n} an", "{n} ans", "{n} d’années"),
    },
    notes: {
      random: "Ces chiffres ne sont valables que si chaque caractère ou mot est choisi vraiment au hasard, par exemple par un gestionnaire de mots de passe ou avec des dés. Les mots de passe inventés par des personnes, les noms, les dates et les substitutions courantes ont bien moins d’entropie.",
      average: "En moyenne, un attaquant trouve le mot de passe après avoir essayé la moitié des combinaisons.",
      notCollected: "Cette page ne demande jamais votre mot de passe. Elle s’appuie uniquement sur la longueur et les types de caractères ou de mots.",
      zero: "Avec un seul choix possible par position, il n’y a aucune incertitude : l’entropie est donc de 0 bit.",
    },
  },
};

export default fr;
