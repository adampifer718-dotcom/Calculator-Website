import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FeedConversionRatioText } from "../text/en";

const fr: CalculatorTranslation<FeedConversionRatioText> = {
  content: {
    title: "Calculateur d’indice de consommation (IC)",
    shortTitle: "Indice de consommation",
    summary: "Calculez l’indice de consommation (IC) du bétail, de la volaille ou des poissons à partir de l’aliment consommé et du gain de poids, avec un IC corrigé de la mortalité et le coût alimentaire par unité de gain.",
    metaTitle: "Calculateur d’indice de consommation (IC) – Aliment et gain",
    metaDescription:
      "Calculez l’IC = aliment consommé ÷ gain de poids vif, avec l’IC corrigé de la mortalité, l’efficacité alimentaire, le gain par tête et le coût par kg gagné.",
    keywords: ["indice de consommation", "IC", "taux de conversion alimentaire", "efficacité alimentaire", "élevage", "volaille", "aquaculture", "coût alimentaire"],
    intro: [
      "L’indice de consommation (IC) indique la quantité d’aliment dont les animaux ont besoin pour gagner une unité de poids vif. Un IC de 2 signifie 2 kg d’aliment par kilogramme gagné, ou 2 lb par livre : l’unité s’annule tant que l’aliment et le poids sont exprimés dans la même. Plus l’IC est bas, plus l’aliment est transformé efficacement en croissance.",
      "Saisissez l’aliment consommé sur une période et le poids vif total du lot au début et à la fin. Si des animaux sont morts ou ont été retirés, ajoutez leur poids pour obtenir l’IC corrigé de la mortalité, qui ne compte pas leur aliment comme perdu. Avec un prix de l’aliment et un effectif, vous obtenez aussi le coût alimentaire par unité de gain et le gain par animal.",
    ],
    howToUse: [
      "Choisissez les kilogrammes ou les livres, et utilisez cette unité pour l’aliment et tous les poids.",
      "Saisissez l’aliment total consommé sur la période et le poids vif cumulé du lot au début et à la fin.",
      "Si des animaux sont morts ou ont été retirés pendant la période, saisissez leur poids cumulé pour obtenir l’IC corrigé de la mortalité.",
      "Saisissez éventuellement le prix de l’aliment par kg ou par lb et le nombre d’animaux.",
    ],
    formulas: [
      {
        title: "Gain de poids vif",
        expression: "gain = poids final − poids initial + poids des animaux retirés",
        explanation: "Laissez le poids retiré vide pour obtenir le gain simple des animaux encore présents.",
      },
      {
        title: "Indice de consommation",
        expression: "IC = aliment consommé ÷ gain de poids vif",
        explanation: "L’aliment et les poids sont dans la même unité : l’indice n’a donc pas d’unité.",
      },
      {
        title: "Efficacité alimentaire",
        expression: "efficacité alimentaire = gain ÷ aliment × 100 %",
        explanation: "L’inverse de l’IC, exprimé en pourcentage.",
      },
      {
        title: "Coût alimentaire par unité de gain",
        expression: "coût par kg (ou lb) de gain = aliment × prix ÷ gain = IC × prix",
        explanation: "Le coût en aliment de chaque unité de poids vif produite.",
      },
    ],
    examples: [
      {
        title: "Un lot de porcs sur une période de croissance",
        steps: ["Gain : 2 850 − 900 = 1 950 kg.", "IC : 4 200 ÷ 1 950 ≈ 2,15.", "Efficacité alimentaire : 1 950 ÷ 4 200 ≈ 46,4 %."],
      },
      {
        title: "Un lot de poulets de chair avec des pertes et un prix de l’aliment",
        steps: [
          "Gain en incluant les oiseaux retirés : 4 510 − 1 080 + 160 = 3 590 kg.",
          "IC corrigé de la mortalité : 5 300 ÷ 3 590 ≈ 1,48 (sans les oiseaux retirés : 5 300 ÷ 3 430 ≈ 1,55).",
          "Coût alimentaire par kg de gain : 5 300 × 0,21 $US ÷ 3 590 ≈ 0,31 $US.",
        ],
      },
      {
        title: "Des agneaux pesés en livres",
        steps: ["Gain : 612 − 410 = 202 lb.", "IC : 380 ÷ 202 ≈ 1,88 lb d’aliment par lb de gain."],
      },
    ],
    assumptions: [
      "L’aliment et tous les poids sont dans la même unité, et la quantité d’aliment est celle que les animaux ont réellement mangée (ou l’aliment livré, moins les restes et le gaspillage, si c’est ainsi que vous l’enregistrez).",
      "Les poids sont les poids vifs totaux du lot. Les poids de carcasse donnent un autre indice.",
      "L’IC corrigé de la mortalité ajoute au gain le poids des animaux morts ou retirés. Certains éleveurs l’enregistrent autrement, par exemple avec le poids au départ ou en excluant les réformes : vérifiez donc la méthode avant de comparer des chiffres.",
      "Aucune valeur de référence n’est donnée, car les IC habituels varient fortement selon l’espèce, l’âge, la race, l’alimentation et la méthode d’enregistrement.",
    ],
    faqs: [
      {
        question: "Un IC bas ou élevé, lequel est meilleur ?",
        answer: "Un IC bas. Un IC de 1,5 signifie 1,5 unité d’aliment par unité de gain, alors que 2,0 en signifie 2. L’efficacité alimentaire, qui en est l’inverse, fonctionne dans l’autre sens : plus elle est élevée, mieux c’est.",
      },
      {
        question: "Pourquoi ajouter le poids des animaux morts ?",
        answer: "Ces animaux ont mangé de l’aliment et grandi avant de mourir ou d’être retirés. Ignorer leur poids fait paraître l’aliment moins efficace qu’il ne l’a été, ce qui mêle les pertes par mortalité à l’IC. Afficher les deux chiffres permet de séparer les deux effets.",
      },
      {
        question: "L’unité a-t-elle de l’importance ?",
        answer: "Non, tant que l’aliment et les poids utilisent la même. L’IC est un rapport : 2,15 kg/kg équivaut à 2,15 lb/lb. Seul le coût alimentaire par unité de gain dépend de l’unité, car le prix est exprimé par kg ou par lb.",
      },
    ],
    sourcesUsedFor: [
      "IC = aliment total distribué ÷ poids gagné, dans la même unité, une valeur plus basse signifiant une croissance plus efficace.",
      "L’indice de consommation comme poids d’aliment nécessaire pour une unité de gain, et le coût alimentaire par unité de gain.",
    ],
  },
  text: {
    unit: "Unité de masse",
    units: { kg: "Kilogrammes (kg)", lb: "Livres (lb)" },
    feed: "Aliment consommé",
    feedHelp: "Aliment total mangé par le lot sur la période, dans l’unité choisie.",
    initial: "Poids vif total initial",
    initialHelp: "Poids cumulé des animaux au début de la période.",
    final: "Poids vif total final",
    finalHelp: "Poids cumulé des animaux encore présents à la fin de la période.",
    removed: "Poids des animaux morts ou retirés",
    removedHelp: "Facultatif. Leur poids au moment de leur mort ou de leur sortie du lot. L’ajouter donne l’IC corrigé de la mortalité.",
    price: "Prix de l’aliment par unité de masse",
    priceHelp: "Facultatif. Le prix de 1 kg ou de 1 lb d’aliment, dans l’unité de masse choisie plus haut. Sert au coût alimentaire par unité de gain.",
    head: "Nombre d’animaux",
    headHelp: "Facultatif. Sert au gain par tête.",
    errors: {
      noGain: "Le gain de poids vif est nul ou négatif : l’indice de consommation ne peut donc pas être calculé. Vérifiez les poids.",
    },
    result: "Indice de consommation (IC)",
    resultAdjusted: "Indice de consommation (IC), corrigé de la mortalité",
    caption: "Aliment consommé ÷ gain de poids vif",
    unadjusted: "IC sans les animaux retirés",
    unadjustedNone: "Sans objet (aucun gain chez les animaux restants)",
    efficiency: "Efficacité alimentaire (gain ÷ aliment)",
    gain: "Gain de poids vif total",
    gainUnadjusted: "Gain des seuls animaux restants",
    gainPerHead: "Gain par tête",
    feedCost: "Coût alimentaire total",
    costPerGain: "Coût alimentaire par {unit} de gain",
    notes: {
      meaning: "Un IC de {fcr} signifie {fcr} {unit} d’aliment par {unit} de gain de poids vif. Plus il est bas, plus il est efficace.",
      adjusted: "Le poids des animaux retirés est ajouté au gain : leur aliment n’est donc pas compté comme perdu. Le chiffre non corrigé est affiché pour comparaison.",
      general: "Les valeurs habituelles varient fortement selon l’espèce, l’âge, la race, l’alimentation et la façon de mesurer l’aliment et les poids : ne comparez donc les IC que s’ils sont mesurés de la même manière.",
    },
  },
};

export default fr;
