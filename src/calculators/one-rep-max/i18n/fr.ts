import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OneRepMaxText } from "../text/en";

const fr: CalculatorTranslation<OneRepMaxText> = {
  content: {
    title: "Calculateur de charge maximale (1RM)",
    shortTitle: "1RM",
    summary: "Estimez votre charge maximale sur une répétition à partir d’une série de 1 à 12 répétitions avec les formules d’Epley, de Brzycki et de Lombardi, et obtenez un tableau de charges d’entraînement.",
    metaTitle: "Calculateur de charge maximale – 1RM Epley, Brzycki, Lombardi",
    metaDescription: "Estimez votre 1RM à partir de la charge et des répétitions d’une série difficile, avec trois formules publiées, et obtenez les charges de 60 % à 95 % du 1RM.",
    keywords: ["1RM", "calcul 1RM", "charge maximale", "répétition maximale", "formule d’Epley", "formule de Brzycki", "max développé couché", "max squat", "pourcentages d’entraînement"],
    intro: [
      "Votre charge maximale sur une répétition (1RM) est le poids le plus lourd que vous pouvez soulever une fois avec une bonne technique. La tester directement est éprouvant et plus risqué : les pratiquants l’estiment donc souvent à partir d’une série lourde menée près de l’échec.",
      "Ce calculateur applique trois équations très utilisées, celles d’Epley, de Brzycki et de Lombardi, et en fait la moyenne. Chacune a été ajustée sur des pratiquants différents : l’écart entre elles donne une idée de l’incertitude de toute estimation isolée.",
      "Le tableau convertit l’estimation en charges aux pourcentages d’entraînement courants, de 60 % pour le travail de volume plus léger à 95 % pour les répétitions uniques lourdes.",
    ],
    howToUse: [
      "Saisissez la charge soulevée et choisissez kilogrammes ou livres.",
      "Saisissez le nombre de répétitions complètes réalisées dans cette série, de 1 à 12.",
      "Lisez l’estimation moyenne et le résultat de chaque formule.",
      "Utilisez le tableau pour choisir les charges d’un programme d’entraînement.",
    ],
    formulas: [
      { title: "Epley", expression: "1RM = w × (1 + r ÷ 30), et 1RM = w quand r = 1", explanation: "w est la charge soulevée et r le nombre de répétitions. Ajoute environ 3,3 % de la charge par répétition." },
      { title: "Brzycki", expression: "1RM = w × 36 ÷ (37 − r)", explanation: "Donne le même résultat qu’Epley à 10 répétitions et des valeurs légèrement plus basses en dessous." },
      { title: "Lombardi", expression: "1RM = w × r^0,10", explanation: "Une loi de puissance qui augmente vite sur les premières répétitions puis s’aplatit." },
      { title: "Estimation affichée", expression: "1RM ≈ (Epley + Brzycki + Lombardi) ÷ 3", explanation: "Les charges d’entraînement du tableau sont cette moyenne multipliée par chaque pourcentage." },
    ],
    examples: [
      {
        title: "Squat : 82,5 kg pour 6 répétitions",
        steps: [
          "Epley : 82,5 × (1 + 6 ÷ 30) = 99,0 kg",
          "Brzycki : 82,5 × 36 ÷ 31 ≈ 95,8 kg",
          "Lombardi : 82,5 × 6^0,1 ≈ 98,7 kg",
          "Moyenne ≈ (99,0 + 95,8 + 98,7) ÷ 3 ≈ 97,8 kg",
        ],
      },
      {
        title: "Développé couché : 185 lb pour 8 répétitions",
        steps: [
          "Epley : 185 × (1 + 8 ÷ 30) ≈ 234,3 lb",
          "Brzycki : 185 × 36 ÷ 29 ≈ 229,7 lb",
          "Lombardi : 185 × 8^0,1 ≈ 227,8 lb",
          "Moyenne ≈ 230,6 lb",
        ],
      },
    ],
    assumptions: [
      "La série a été menée près de l’échec avec une technique constante. S’arrêter bien avant l’échec donne une estimation trop basse.",
      "Les formules sont les moins fiables au-delà d’environ 10 répétitions, où l’endurance compte davantage que la force maximale. Les séries de 3 à 8 répétitions donnent de meilleures estimations.",
      "Les équations ont surtout été établies sur des mouvements avec poids libres, comme le développé couché et le squat. Les résultats peuvent différer pour les machines, les exercices d’isolation et les pratiquants non entraînés.",
      "Tester un vrai maximum exige une bonne technique, un échauffement complet et un pareur ou des barres de sécurité. Cet outil ne constitue ni un avis médical ni un conseil d’entraîneur.",
    ],
    faqs: [
      { question: "Quelle formule de 1RM est la plus précise ?", answer: "Aucune n’est la meilleure pour tout le monde. Les études qui les comparent montrent que la précision dépend du mouvement, du pratiquant et du nombre de répétitions : c’est pourquoi ce calculateur fait la moyenne de trois formules et affiche chacune d’elles." },
      { question: "Combien de répétitions utiliser pour l’estimation ?", answer: "Une série d’environ 3 à 8 répétitions difficiles fonctionne le mieux. Avec une seule répétition, l’estimation est simplement la charge soulevée, et au-delà d’environ 10 répétitions les prédictions divergent." },
      { question: "Puis-je utiliser le tableau d’entraînement pour un programme ?", answer: "Oui, comme point de départ. De nombreux programmes prescrivent le travail en pourcentage du 1RM, par exemple 80 % pour des séries d’environ 5 répétitions. Ajustez les charges selon vos sensations pendant les séries." },
    ],
    sourcesUsedFor: [
      "Origine de l’équation de prédiction de Brzycki et son usage prévu pour des séries allant jusqu’à environ 10 répétitions.",
      "Données montrant que la précision des équations d’Epley, de Brzycki, de Lombardi et d’autres varie selon le mouvement et la population.",
    ],
  },
  text: {
    weight: "Charge soulevée",
    unit: "Unité",
    units: { kg: "kg", lb: "lb" },
    reps: "Répétitions réalisées",
    repsHelp: "Répétitions complètes avec une bonne technique, dans une série menée près de l’échec, de 1 à 12.",
    estimate: "1RM estimé",
    caption: "Moyenne des estimations d’Epley, de Brzycki et de Lombardi pour {weight} × {reps}.",
    repsCount: { zero: "{n} répétition", one: "{n} répétition", two: "{n} répétitions", few: "{n} répétitions", many: "{n} de répétitions", other: "{n} répétitions" },
    epley: "Formule d’Epley",
    brzycki: "Formule de Brzycki",
    lombardi: "Formule de Lombardi",
    tableCaption: "Charges d’entraînement d’après le 1RM estimé",
    tablePercent: "Part du 1RM",
    tableLoad: "Charge",
    notes: {
      single: "Avec une seule répétition, toutes les formules renvoient la charge soulevée.",
      highReps: "Les estimations au-delà d’environ 10 répétitions sont moins fiables ; une série plus lourde de 3 à 8 répétitions donne une meilleure prédiction.",
      safety: "Tenter une vraie charge maximale exige une bonne technique, un échauffement et un pareur ou des barres de sécurité.",
    },
  },
};

export default fr;
