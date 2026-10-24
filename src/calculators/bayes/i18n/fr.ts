import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BayesText } from "../text/en";

const fr: CalculatorTranslation<BayesText> = {
  content: {
    title: "Calculateur du théorème de Bayes",
    shortTitle: "Théorème de Bayes",
    summary: "Mettez à jour une probabilité a priori à l’aide d’un nouvel indice et voyez le résultat en fréquences naturelles sur 10 000 cas.",
    metaTitle: "Théorème de Bayes – Probabilité a posteriori P(A|B)",
    metaDescription: "Calculez P(A|B) à partir d’une probabilité a priori, d’une vraisemblance et d’un taux de fausses alertes, avec P(B), P(A|non B) et les positifs sur 10 000 cas.",
    keywords: ["théorème de Bayes", "formule de Bayes", "probabilité a posteriori", "probabilité conditionnelle", "valeur prédictive positive", "faux positif", "sensibilité", "prévalence"],
    intro: [
      "Le théorème de Bayes indique à quel point croire une hypothèse après avoir observé un indice. Il combine la probabilité de l’hypothèse au départ (la probabilité a priori) avec la fréquence relative à laquelle l’indice apparaît quand l’hypothèse est vraie plutôt que quand elle est fausse.",
      "L’exemple classique est celui d’un test de dépistage. Même un test qui détecte la plupart des cas peut produire plus de fausses alertes que de vrais positifs lorsque la maladie est rare. Saisissez trois pourcentages pour obtenir la probabilité mise à jour, ainsi qu’une répartition de 10 000 cas fictifs qui permet de vérifier facilement le résultat à la main.",
    ],
    howToUse: [
      "Saisissez la probabilité a priori P(A) : la fréquence de A avant de considérer l’indice, par exemple la prévalence d’une maladie.",
      "Saisissez P(B | A) : la fréquence à laquelle l’indice apparaît quand A est vrai, par exemple la sensibilité d’un test.",
      "Saisissez P(B | non A) : la fréquence à laquelle l’indice apparaît malgré tout quand A est faux, par exemple le taux de faux positifs.",
      "Lisez P(A | B), puis utilisez le tableau des 10 000 cas pour voir d’où viennent les positifs.",
    ],
    formulas: [
      { title: "Théorème de Bayes", expression: "P(A | B) = P(B | A) · P(A) ÷ P(B)", explanation: "La probabilité a posteriori est la part de tous les cas avec B qui présentent aussi A." },
      { title: "Probabilités totales", expression: "P(B) = P(B | A) · P(A) + P(B | non A) · (1 − P(A))", explanation: "B peut survenir avec A (vrais positifs) ou sans A (faux positifs)." },
      { title: "Résultat négatif", expression: "P(A | non B) = (1 − P(B | A)) · P(A) ÷ (1 − P(B))", explanation: "La probabilité que A soit tout de même vrai quand B n’est pas observé (faux négatifs parmi tous les négatifs)." },
    ],
    examples: [
      {
        title: "Un test de dépistage pour une maladie qui touche 2 % de la population",
        steps: ["Sur 10 000 personnes, 200 ont la maladie et 95 % d’entre elles sont positives : 190 vrais positifs.", "Sur les 9 800 personnes non malades, 8 % sont positives : 784 faux positifs.", "P(A | B) = 190 ÷ (190 + 784) ≈ 19,51 %"],
      },
      {
        title: "Un mot qui signale les courriels indésirables",
        steps: ["P(B) = 0,30 × 0,40 + 0,02 × 0,60 = 0,132", "P(A | B) = 0,12 ÷ 0,132 ≈ 90,91 %"],
      },
      {
        title: "Une maladie très rare et un test précis",
        steps: ["Sur 10 000 personnes : 9,9 vrais positifs et 99,9 faux positifs.", "P(A | B) = 9,9 ÷ 109,8 ≈ 9,02 %, alors que le test donne un résultat juste dans 99 % des cas."],
      },
    ],
    assumptions: [
      "Les trois pourcentages sont considérés comme exacts. En pratique, la sensibilité et le taux de faux positifs d’un test sont des estimations, et la probabilité a priori dépend des personnes testées.",
      "La probabilité a priori doit décrire le groupe dont provient le cas. Une personne testée en raison de symptômes a une probabilité a priori plus élevée qu’un membre quelconque de la population.",
      "Les exemples diagnostiques n’illustrent que le calcul. L’interprétation d’un vrai résultat de test médical relève d’un professionnel de santé, qui peut tenir compte des symptômes, des antécédents et des examens complémentaires.",
    ],
    faqs: [
      { question: "Pourquoi P(A | B) est-il si faible alors que le test est précis ?", answer: "Quand A est rare, les quelques vrais cas sont noyés parmi les nombreuses personnes sans A, et même un faible taux de faux positifs dans ce grand groupe produit plus de fausses alertes que de vrais positifs." },
      { question: "Comment la sensibilité et la spécificité correspondent-elles aux champs ?", answer: "La sensibilité est P(B | A). Le taux de fausses alertes P(B | non A) vaut 100 % moins la spécificité : une spécificité de 97 % correspond donc à un taux de fausses alertes de 3 %." },
      { question: "Que montre le tableau des 10 000 cas ?", answer: "Il traduit les probabilités en effectifs attendus de vrais positifs, faux positifs, faux négatifs et vrais négatifs. P(A | B) est le nombre de vrais positifs divisé par l’ensemble des positifs." },
    ],
    sourcesUsedFor: [
      "Comment la sensibilité, le taux de faux positifs et la prévalence se combinent en valeurs prédictives au moyen d’un tableau 2×2.",
      "Probabilités conditionnelles lues dans un tableau d’effectifs.",
    ],
  },
  text: {
    prior: "Probabilité a priori P(A)",
    priorHelp: "La probabilité de A avant tout indice, par exemple la fréquence d’une maladie dans le groupe testé.",
    likelihood: "Vraisemblance P(B | A)",
    likelihoodHelp: "La fréquence à laquelle l’indice B apparaît quand A est vrai, par exemple la sensibilité d’un test (taux de vrais positifs).",
    falseAlarm: "Taux de fausses alertes P(B | non A)",
    falseAlarmHelp: "La fréquence à laquelle B apparaît quand A est faux, par exemple le taux de faux positifs d’un test (100 % moins sa spécificité).",
    zeroEvidence: "Avec ces valeurs, l’indice B ne peut jamais survenir (P(B) = 0) : P(A | B) n’est donc pas défini. Augmentez P(A) ou l’un des taux au-dessus de 0 %.",
    posterior: "Probabilité a posteriori P(A | B)",
    caption: "La probabilité que A soit vrai une fois B observé.",
    pB: "Probabilité globale de l’indice P(B)",
    pNotAGivenB: "P(non A | B)",
    pAGivenNotB: "P(A | non B)",
    undefinedNotB: "Non défini : B survient toujours, donc « non B » ne se produit jamais",
    tableCaption: "Sur 10 000 cas",
    tableColumns: { outcome: "Résultat", cases: "Cas" },
    rows: {
      tp: "Vrais positifs (A et B)",
      fp: "Faux positifs (non A, mais B)",
      fn: "Faux négatifs (A, mais non B)",
      tn: "Vrais négatifs (non A et non B)",
    },
    liftNote: "Observer B multiplie la cote de A par {ratio} (le rapport de vraisemblance P(B | A) ÷ P(B | non A)).",
    rareNote: "Quand A est rare, la plupart des cas avec B peuvent être de fausses alertes, même si le test est précis.",
    note: "Les nombres sur 10 000 cas sont des effectifs attendus et peuvent être fractionnaires.",
  },
};

export default fr;
