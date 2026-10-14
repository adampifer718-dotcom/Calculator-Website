import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoiText } from "../text/en";

const fr: CalculatorTranslation<RoiText> = {
  content: {
    title: "Calculateur de ROI",
    shortTitle: "ROI",
    summary: "Mesurez le retour sur investissement en pourcentage, avec le gain ou la perte nette et, en option, le taux annualisé.",
    metaTitle: "Calculateur de ROI – Retour sur investissement et ROI annualisé",
    metaDescription:
      "Calculez le retour sur investissement à partir du montant investi et du montant récupéré : gain ou perte nette, ROI total et ROI annualisé sur la durée de votre choix.",
    keywords: ["retour sur investissement", "calcul ROI", "rentabilité investissement", "ROI annualisé", "taux de rendement", "plus-value", "TCAC"],
    intro: [
      "Le retour sur investissement (ROI) compare ce que vous avez récupéré à ce que vous avez investi. C’est un moyen rapide de comparer des placements, des projets ou des achats de tailles différentes.",
      "Indiquez la durée de détention de l’investissement pour obtenir le ROI annualisé, qui permet de comparer des rendements obtenus sur des périodes différentes.",
    ],
    howToUse: [
      "Saisissez le montant total investi, frais d’acquisition compris.",
      "Saisissez le montant récupéré : la valeur finale ou le produit total, montant initial compris.",
      "Si vous le souhaitez, saisissez le nombre d’années de détention de l’investissement.",
      "Consultez le ROI total, le gain ou la perte nette et le ROI annualisé.",
    ],
    formulas: [
      {
        title: "Retour sur investissement",
        expression: "ROI = (montant récupéré − montant investi) ÷ montant investi × 100",
        explanation: "Un ROI positif correspond à un gain, un ROI négatif à une perte.",
      },
      {
        title: "ROI annualisé",
        expression: "ROI annualisé = ((montant récupéré ÷ montant investi)^(1 ÷ années) − 1) × 100",
        explanation: "Il s’agit du taux annuel constant qui ferait passer le montant investi au montant récupéré sur la période ; on l’appelle aussi TCAC (taux de croissance annuel composé).",
      },
    ],
    examples: [
      {
        title: "10 000 $US deviennent 12 500 $US en 3 ans",
        steps: ["Gain net = 12 500 $US − 10 000 $US = 2 500 $US", "ROI = 2 500 $US ÷ 10 000 $US × 100 = 25 %", "Annualisé = (1,25^(1/3) − 1) × 100 ≈ 7,72 %"],
      },
      {
        title: "5 000 $US tombent à 4 200 $US",
        steps: ["Perte nette = 4 200 $US − 5 000 $US = −800 $US", "ROI = −800 $US ÷ 5 000 $US × 100 = −16 %"],
      },
    ],
    assumptions: [
      "Les impôts, frais, dividendes et autres flux de trésorerie ne sont pris en compte que si vous les ajoutez aux montants saisis.",
      "Le ROI annualisé suppose une croissance composée à taux constant sur la période. Il ne tient pas compte du calendrier des versements ou des retraits.",
      "Le choix d’une devise ne modifie que la mise en forme. Aucune conversion de change n’est effectuée.",
      "Les rendements passés ne préjugent pas des résultats futurs. Ce calculateur ne constitue pas un conseil en investissement.",
    ],
    faqs: [
      {
        question: "Qu’est-ce qu’un bon ROI ?",
        answer:
          "Cela dépend du risque, de la durée et des autres options disponibles. Lorsque les durées de détention diffèrent, comparez le ROI annualisé plutôt que le ROI total.",
      },
      {
        question: "Quelle est la différence entre le ROI et le ROI annualisé ?",
        answer:
          "Le ROI est le rendement total sur l’ensemble de la période. Le ROI annualisé le convertit en taux annuel équivalent. Un rendement de 25 % sur 3 ans correspond à environ 7,72 % par an.",
      },
      {
        question: "Faut-il inclure les frais et les dividendes ?",
        answer: "Oui, pour obtenir un chiffre exact. Ajoutez les frais d’acquisition au montant investi, et les dividendes ou intérêts perçus au montant récupéré.",
      },
      {
        question: "Le ROI peut-il être négatif ?",
        answer: "Oui. Si vous récupérez moins que ce que vous avez investi, le ROI est négatif. Le ROI le plus bas possible est de −100 %, lorsque rien n’est récupéré.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    invested: "Montant investi",
    investedHelp: "Coût total de l’investissement.",
    finalValue: "Montant récupéré",
    finalValueHelp: "Valeur finale ou produit total, montant initial compris.",
    years: "Durée de l’investissement (facultatif)",
    yearsHelp: "Indiquez le nombre d’années de détention pour voir le ROI annualisé.",
    primary: "Retour sur investissement",
    gainCaption: "Gain total par rapport au montant investi.",
    lossCaption: "Perte totale par rapport au montant investi.",
    net: "Gain ou perte nette",
    annualized: "ROI annualisé",
    addLength: "Indiquez la durée de l’investissement",
    note: "Ce ROI ne tient compte ni des impôts, ni des frais, ni du calendrier des flux intermédiaires, sauf s’ils sont inclus dans les montants.",
  },
};

export default fr;
