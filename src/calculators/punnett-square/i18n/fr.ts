import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PunnettText } from "../text/en";

const fr: CalculatorTranslation<PunnettText> = {
  content: {
    title: "Calculateur d’échiquier de Punnett",
    shortTitle: "Échiquier de Punnett",
    summary: "Croisez deux parents pour un ou deux gènes et obtenez l’échiquier de Punnett, les proportions génotypiques et phénotypiques et la probabilité de chaque caractère.",
    metaTitle: "Calculateur d’échiquier de Punnett – Génotypes, phénotypes",
    metaDescription: "Saisissez deux génotypes parentaux comme AaBb × AaBb pour construire l’échiquier de Punnett et obtenir proportions génotypiques, phénotypiques et probabilités.",
    keywords: ["échiquier de Punnett", "tableau de Punnett", "monohybridisme", "dihybridisme", "proportions génotypiques", "proportions phénotypiques", "génétique mendélienne", "9:3:3:1"],
    intro: [
      "Un échiquier de Punnett liste tous les gamètes qu’un parent peut produire d’un côté, et tous ceux de l’autre parent de l’autre côté. Chaque case de la grille est une combinaison également probable : compter les cases donne donc la part attendue de chaque génotype chez les descendants.",
      "Ce calculateur traite un gène (un croisement monohybride comme Aa × aa) ou deux gènes (un croisement dihybride comme AaBb × AaBb). Il dessine la grille et la traduit en proportions génotypiques, en proportions phénotypiques et en probabilité de chaque combinaison de caractères.",
    ],
    howToUse: [
      "Choisissez une lettre pour chaque gène. Écrivez l’allèle dominant en majuscule et l’allèle récessif en minuscule.",
      "Saisissez le génotype du parent 1, par exemple Aa pour un gène ou AaBb pour deux gènes.",
      "Saisissez le génotype du parent 2 avec les mêmes lettres, par exemple aa ou Aabb.",
      "Lisez la proportion phénotypique, puis consultez la grille et les tableaux de chaque génotype et de sa probabilité.",
    ],
    formulas: [
      { title: "Gamètes", expression: "gamètes par parent = 2ⁿ pour n gènes", explanation: "Chaque gamète porte un allèle de chaque gène. Avec deux gènes, un parent AaBb produit AB, Ab, aB et ab en parts égales." },
      { title: "Probabilité d’un génotype", expression: "P = cases ayant ce génotype ÷ nombre total de cases", explanation: "Un croisement à un gène compte 4 cases et un croisement à deux gènes en compte 16, toutes également probables." },
      { title: "Règle du produit", expression: "P(A_ et B_) = P(A_) × P(B_)", explanation: "Avec la ségrégation indépendante, les gènes se comportent séparément. Pour AaBb × AaBb, 3/4 × 3/4 = 9/16 des descendants présentent les deux caractères dominants." },
    ],
    examples: [
      {
        title: "Deux parents hétérozygotes, un gène",
        steps: ["Chaque parent produit des gamètes A et a en nombres égaux.", "La grille donne AA, Aa, Aa et aa : une proportion génotypique de 1 : 2 : 1.", "AA et Aa présentent tous deux le caractère dominant : la proportion phénotypique est donc de 3 : 1 (75 % et 25 %)."],
      },
      {
        title: "Un croisement dihybride classique",
        steps: ["Chaque parent produit quatre gamètes : AB, Ab, aB et ab.", "La grille 4 × 4 compte 16 cases et 9 génotypes différents.", "Regroupés par caractères : 9 A_B_, 3 A_bb, 3 aaB_ et 1 aabb, soit une proportion de 9 : 3 : 3 : 1."],
      },
      {
        title: "Croisement test avec un double récessif",
        steps: ["Le parent 2 ne peut produire que des gamètes ab : chaque descendant montre donc les allèles reçus du parent 1.", "Les quatre gamètes du parent 1 sont également probables : les quatre phénotypes apparaissent dans une proportion de 1 : 1 : 1 : 1, soit 25 % chacun."],
      },
    ],
    assumptions: [
      "Dominance complète : un seul allèle dominant suffit pour exprimer le caractère dominant. La dominance incomplète, la codominance et les allèles multiples (comme les groupes sanguins ABO) ne sont pas modélisés.",
      "Avec deux gènes, on suppose une ségrégation indépendante. Les gènes liés sur le même chromosome ne suivent pas ces proportions.",
      "Chaque gène possède exactement deux allèles et n’est pas lié au sexe. Toutes les combinaisons de gamètes sont supposées avoir les mêmes chances de survie.",
      "Les résultats sont des probabilités pour chaque descendant. Un petit nombre de descendants peut s’écarter de la proportion attendue par simple hasard.",
    ],
    faqs: [
      { question: "Quelle est la différence entre proportions génotypiques et phénotypiques ?", answer: "La proportion génotypique compte les combinaisons d’allèles, par exemple AA : Aa : aa = 1 : 2 : 1. La proportion phénotypique compte les caractères visibles. Avec une dominance complète, AA et Aa ont le même aspect : le même croisement donne donc une proportion phénotypique de 3 : 1." },
      { question: "Pourquoi la grille affiche-t-elle deux fois le même gamète pour certains parents ?", answer: "Un parent AA ne produit que des gamètes A, mais la grille garde une ligne ou une colonne par allèle pour que chaque case ait la même probabilité. Des en-têtes en double signifient simplement que ce gamète est deux fois plus probable." },
      { question: "Puis-je saisir trois gènes ?", answer: "Pas ici. Un croisement à trois gènes nécessite 64 cases, et il est plus simple de multiplier les probabilités de chaque gène avec la règle du produit. Calculez chaque gène séparément avec le calculateur, puis multipliez les probabilités dont vous avez besoin." },
    ],
    sourcesUsedFor: ["La dominance, la ségrégation, la ségrégation indépendante et la proportion 9 : 3 : 3 : 1 d’un croisement dihybride."],
  },
  text: {
    parent1: "Génotype du parent 1",
    parent2: "Génotype du parent 2",
    parentHelp: "Un ou deux gènes, deux lettres par gène : majuscule pour l’allèle dominant, minuscule pour l’allèle récessif. Exemples : Aa, AaBb, AABb.",
    parent2Help: "Utilisez les mêmes lettres de gènes que pour le parent 1, par exemple aa ou aabb.",
    errors: {
      invalidChar: "« {token} » n’est pas autorisé. Utilisez uniquement des lettres, comme Aa ou AaBb.",
      length: "Saisissez un gène (2 lettres, par exemple Aa) ou deux gènes (4 lettres, par exemple AaBb).",
      pairMismatch: "« {token} » mélange deux gènes. Chaque gène s’écrit avec deux formes de la même lettre, comme Aa, AA ou aa.",
      duplicateGene: "Le gène {token} apparaît deux fois. Utilisez une lettre différente pour chaque gène, par exemple AaBb.",
      geneCount: "Les deux parents doivent avoir le même nombre de gènes.",
      geneMismatch: "Utilisez les mêmes lettres de gènes que pour le parent 1 ({genes}).",
    },
    listSeparator: ", ",
    dominantTrait: "{gene} dominant",
    recessiveTrait: "{gene} récessif",
    phenotypeRatio: "Proportion phénotypique",
    caption: "Dans l’ordre {order} (un tiret bas signifie l’un ou l’autre allèle)",
    genotypeRatio: "Proportion génotypique",
    genotypeOrder: "Génotypes dans cet ordre",
    genotypeCount: "Génotypes différents",
    phenotypeCount: "Phénotypes différents",
    probabilityOf: "Probabilité d’un descendant avec {phenotype}",
    fraction: "{count} sur {total}",
    gridCaption: "Échiquier de Punnett : gamètes du parent 1 sur le côté, du parent 2 en haut",
    gridCorner: "Parent 1 ↓ · Parent 2 →",
    genotypeTable: "Génotypes des descendants",
    phenotypeTable: "Phénotypes des descendants",
    columns: { genotype: "Génotype", phenotype: "Phénotype", description: "Caractères exprimés", cells: "Cases", probability: "Probabilité" },
    singlePhenotype: "Tous les descendants de ce croisement présentent les mêmes caractères.",
    linkageNote: "Les deux gènes sont supposés se répartir indépendamment, comme des gènes situés sur des chromosomes différents. Des gènes proches sur un même chromosome sont souvent transmis ensemble, ce qui modifie ces proportions.",
    note: "Suppose une dominance complète : un seul allèle dominant suffit pour exprimer le caractère dominant. Les proportions sont des probabilités pour chaque descendant : les portées ou familles réelles peuvent s’en écarter par hasard.",
  },
};

export default fr;
