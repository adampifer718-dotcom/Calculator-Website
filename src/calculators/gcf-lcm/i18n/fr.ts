import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { GcfLcmText } from "../text/en";

const fr: CalculatorTranslation<GcfLcmText> = {
  content: {
    title: "Calculateur de PGCD et PPCM",
    shortTitle: "PGCD et PPCM",
    summary: "Trouvez le plus grand commun diviseur et le plus petit commun multiple d’une liste de nombres entiers, avec leur décomposition en facteurs premiers.",
    metaTitle: "Calculateur de PGCD et PPCM – Diviseur et multiple communs",
    metaDescription:
      "Trouvez le plus grand commun diviseur et le plus petit commun multiple de 2 à 20 nombres entiers, avec la décomposition en facteurs premiers de chacun.",
    keywords: ["pgcd", "ppcm", "plus grand commun diviseur", "plus petit commun multiple", "décomposition en facteurs premiers", "dénominateur commun", "algorithme d’Euclide", "calcul pgcd"],
    intro: [
      "Le plus grand commun diviseur (PGCD) d’un ensemble de nombres entiers est le plus grand nombre qui les divise tous sans reste. Le plus petit commun multiple (PPCM) est le plus petit nombre positif divisible par chacun d’eux.",
      "Le PGCD sert à simplifier des fractions, et le PPCM à trouver un dénominateur commun ou à déterminer quand des cycles qui se répètent coïncident. Saisissez vos nombres pour obtenir les deux, ainsi que les facteurs premiers de chaque nombre.",
    ],
    howToUse: [
      "Saisissez entre 2 et 20 nombres entiers positifs, séparés par des points-virgules, des espaces ou des retours à la ligne.",
      "Chaque nombre peut aller jusqu’à mille milliards (10¹²).",
      "Lisez le PGCD et le PPCM. Le PPCM est calculé exactement, même lorsqu’il comporte de nombreux chiffres.",
      "Consultez le tableau des décompositions en facteurs premiers pour voir d’où viennent les deux résultats.",
    ],
    formulas: [
      {
        title: "Algorithme d’Euclide",
        expression: "pgcd(a, b) = pgcd(b, a mod b),  pgcd(a, 0) = a",
        explanation: "On remplace le plus grand nombre par le reste jusqu’à obtenir un reste nul. La dernière valeur non nulle est le PGCD.",
      },
      { title: "PPCM de deux nombres", expression: "ppcm(a, b) = a ÷ pgcd(a, b) × b", explanation: "Diviser d’abord permet de garder des nombres intermédiaires petits." },
      {
        title: "Plus de deux nombres",
        expression: "pgcd(a, b, c) = pgcd(pgcd(a, b), c),  ppcm(a, b, c) = ppcm(ppcm(a, b), c)",
        explanation: "Les deux opérations s’appliquent un nombre à la fois.",
      },
      {
        title: "À partir des facteurs premiers",
        expression: "PGCD = produit des facteurs premiers communs à leur plus petite puissance ;  PPCM = produit de tous les facteurs premiers à leur plus grande puissance",
        explanation: "Les mêmes résultats, lus dans le tableau des décompositions.",
      },
    ],
    examples: [
      {
        title: "48 et 180",
        steps: [
          "180 mod 48 = 36, 48 mod 36 = 12, 36 mod 12 = 0 : le PGCD vaut donc 12",
          "PPCM = 48 ÷ 12 × 180 = 720",
          "Vérification : 48 = 2⁴ × 3 et 180 = 2² × 3² × 5, donc PGCD = 2² × 3 = 12 et PPCM = 2⁴ × 3² × 5 = 720",
        ],
      },
      {
        title: "84, 126 et 210",
        steps: [
          "84 = 2² × 3 × 7 ; 126 = 2 × 3² × 7 ; 210 = 2 × 3 × 5 × 7",
          "Facteurs premiers communs à leur plus petite puissance : 2 × 3 × 7 = 42",
          "Tous les facteurs premiers à leur plus grande puissance : 2² × 3² × 5 × 7 = 1 260",
        ],
      },
      {
        title: "35 et 64 (aucun facteur commun)",
        steps: ["35 = 5 × 7 et 64 = 2⁶ n’ont aucun facteur premier en commun", "PGCD = 1 : les nombres sont donc premiers entre eux", "PPCM = 35 × 64 = 2 240"],
      },
    ],
    assumptions: [
      "Seuls les nombres entiers positifs sont acceptés. Le PGCD et le PPCM de zéro ou de nombres négatifs obéissent à d’autres conventions : ils sont donc refusés.",
      "Chaque nombre est limité à 10¹² pour que la décomposition en facteurs premiers reste rapide. Le PPCM lui-même est calculé en arithmétique exacte sur de grands entiers et peut être bien plus grand.",
      "Les nombres répétés sont autorisés et ne changent pas les résultats ; chaque nombre distinct n’apparaît qu’une fois dans le tableau des décompositions.",
    ],
    faqs: [
      {
        question: "Le PGCD est-il la même chose que le GCF, le GCD ou le HCF ?",
        answer: "Oui. GCF, GCD et HCF sont trois noms anglais du même nombre : le plus grand commun diviseur, aussi appelé plus grand facteur commun.",
      },
      {
        question: "Quel est le lien entre le PGCD et le PPCM ?",
        answer: "Pour deux nombres, PGCD × PPCM est égal au produit des deux nombres. Pour 48 et 180 : 12 × 720 = 8 640 = 48 × 180. Ce raccourci ne fonctionne pas avec trois nombres ou plus.",
      },
      {
        question: "Comment utiliser le PPCM pour additionner des fractions ?",
        answer: "Le PPCM des dénominateurs est le plus petit dénominateur commun. Pour 1/12 + 1/18, le PPCM de 12 et 18 est 36 : on réécrit donc la somme 3/36 + 2/36 = 5/36.",
      },
    ],
    sourcesUsedFor: ["L’algorithme d’Euclide pour le plus grand commun diviseur.", "La décomposition en facteurs premiers et le plus petit commun multiple."],
  },
  text: {
    numbers: "Nombres entiers",
    numbersHelp: "Saisissez de 2 à 20 nombres entiers positifs, séparés par des points-virgules, des espaces ou des retours à la ligne.",
    errors: {
      empty: "Saisissez au moins deux nombres.",
      tooMany: "Saisissez au plus {max} nombres.",
      notNumber: "« {token} » n’est pas un nombre. Séparez les valeurs par des points-virgules, des espaces ou des retours à la ligne.",
      tooLarge: "« {token} » est trop grand.",
    },
    needTwo: "Saisissez au moins deux nombres.",
    maxCount: "Saisissez au plus {max} nombres.",
    notWhole: "{value} n’est pas un nombre entier. Saisissez uniquement des nombres entiers.",
    notPositive: "{value} n’est pas positif. Chaque nombre doit valoir au moins 1.",
    tooBig: "{value} est trop grand. Chaque nombre peut valoir au plus {max}.",
    gcf: "Plus grand commun diviseur (PGCD)",
    gcfCaption: "Aussi appelé plus grand facteur commun (GCF, GCD ou HCF en anglais).",
    lcm: "Plus petit commun multiple (PPCM)",
    lcmDigits: "Nombre de chiffres du PPCM",
    coprime: "Le PGCD vaut 1 : ces nombres n’ont donc aucun diviseur commun autre que 1 (ils sont premiers entre eux).",
    factorTable: "Décomposition en facteurs premiers",
    numberColumn: "Nombre",
    factorsColumn: "Facteurs premiers",
    noPrimeFactors: "1 (aucun facteur premier)",
    isPrime: "{factors} (premier)",
  },
};

export default fr;
